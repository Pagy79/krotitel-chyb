"use client";

import { useEffect, useRef, useState } from "react";
import { DIAGNOSTIC_POOL, MISCONCEPTS } from "@/data/diagnostic";
import { TAME_STEP } from "@/data/theme";
import { Creature } from "@/components/Creature";
import { QuizPravopisLayout, QUIZ_STACK_FRAME } from "@/components/QuizPravopisLayout";
import { Result } from "@/components/Result";
import { shuffleArray } from "@/lib/shuffle";
import { saveAttempt } from "@/lib/attempts";
import { questionKey } from "@/lib/questionBank";
import { TEST_QUESTION_COUNT } from "@/lib/velkyTestRules";
import type { DiagnosticQuestion, FlagStatus, MisconceptId, QuizQuestion, ShuffledOption, Topic } from "@/lib/types";

function shuffleOptions(question: DiagnosticQuestion): ShuffledOption[] {
  return shuffleArray(
    question.options.map((o) => ({ text: o.t, correct: !!o.c, tag: o.m || null })),
  );
}

type Mode = "quiz" | "diagnosis" | "microtraining" | "done";
type StatusMap = Record<MisconceptId, FlagStatus>;

export function DiagnosticQuiz({
  topic,
  wildness,
  lastPct = null,
  onTame,
  onBloom,
  onClose,
  onFinish,
  onDrillMistakes,
}: {
  topic: Topic;
  wildness: number;
  lastPct?: number | null;
  onTame: (amount: number) => void;
  onBloom?: () => void;
  onClose: () => void;
  onFinish: () => void;
  onDrillMistakes?: (ids: string[]) => void;
}) {
  const [pool, setPool] = useState<DiagnosticQuestion[]>([]);
  const [answeredIds, setAnsweredIds] = useState<string[]>([]);
  const [status, setStatus] = useState<StatusMap>({ M1: "none", M2: "none", M3: "none", M4: "none" });
  const [priority, setPriority] = useState<MisconceptId | null>(null);
  const [mode, setMode] = useState<Mode>("quiz");
  const [diagnosedTag, setDiagnosedTag] = useState<MisconceptId | null>(null);
  const [microQueue, setMicroQueue] = useState<DiagnosticQuestion[]>([]);
  const [microIndex, setMicroIndex] = useState(0);
  const [current, setCurrent] = useState<DiagnosticQuestion | null>(null);
  const [options, setOptions] = useState<ShuffledOption[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [evaluated, setEvaluated] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const quizCorrectRef = useRef(0);
  const savedRef = useRef(false);
  const answerLog = useRef<{ questionId: string; category: "vyrazy"; isCorrect: boolean; hintUsed: boolean; pointsEarned: number }[]>([]);

  useEffect(() => {
    const next = shuffleArray(DIAGNOSTIC_POOL).slice(0, TEST_QUESTION_COUNT);
    setPool(next);
    setCurrent(next[0] ?? null);
    setOptions(next[0] ? shuffleOptions(next[0]) : []);
  }, []);

  function finishQuiz() {
    if (!savedRef.current) {
      savedRef.current = true;
      const pct = pool.length > 0 ? (quizCorrectRef.current / pool.length) * 100 : 0;
      void saveAttempt({
        mode: "practice",
        category: "vyrazy",
        percentage: pct,
        score: answerLog.current.reduce((sum, row) => sum + (row.pointsEarned ?? 0), 0),
        maxScore: pool.length * 2,
        questionCount: pool.length,
        answeredCount: answerLog.current.length,
        answers: answerLog.current,
      });
      if (pct >= 70) onBloom?.();
    }
    setMode("done");
  }

  function pickNext(ids: string[], prio: MisconceptId | null) {
    const remaining = pool.filter((q) => !ids.includes(q.id));
    if (remaining.length === 0) return null;
    if (prio) {
      const match = remaining.find((q) => q.misconcept === prio);
      if (match) return match;
    }
    return remaining[0];
  }

  function resetQuestionUi() {
    setSelected(null);
    setEvaluated(false);
    setShowHint(false);
  }

  function handleCheck(pickedIndex?: number) {
    const idx = pickedIndex ?? selected;
    if (!current || idx === null || evaluated) return;
    const opt = options[idx];
    setSelected(idx);
    setEvaluated(true);
    if (!answeredIds.includes(current.id)) {
      setAnsweredIds((ids) => [...ids, current.id]);
    }

    const qid = questionKey("vyrazy", current.id);
    if (!answerLog.current.some((row) => row.questionId === qid)) {
      answerLog.current.push({
        questionId: qid,
        category: "vyrazy",
        isCorrect: !!opt.correct,
        hintUsed: showHint,
        pointsEarned: opt.correct ? (showHint ? 1 : 2) : 0,
      });
    }

    if (opt.correct) {
      if (mode === "quiz") quizCorrectRef.current += 1;
      onTame(TAME_STEP);
      if (priority === current.misconcept) {
        setStatus((s) => ({ ...s, [priority]: "none" }));
        setPriority(null);
      }
      return;
    }

    const tag = opt.tag;
    if (tag) {
      const currentStatus = status[tag];
      if (currentStatus === "none") {
        setStatus((s) => ({ ...s, [tag]: "soft" }));
        setPriority(tag);
      } else if (currentStatus === "soft") {
        setStatus((s) => ({ ...s, [tag]: "hard" }));
        setDiagnosedTag(tag);
        setPriority(null);
      }
    } else if (priority) {
      setStatus((s) => ({ ...s, [priority]: "none" }));
      setPriority(null);
    }
  }

  function handleNext() {
    if (!current) return;
    const ids = answeredIds.includes(current.id) ? answeredIds : [...answeredIds, current.id];
    if (ids.length !== answeredIds.length) setAnsweredIds(ids);
    if (diagnosedTag) {
      setMode("diagnosis");
      return;
    }
    const next = pickNext(ids, priority);
    if (!next) {
      finishQuiz();
      return;
    }
    setCurrent(next);
    setOptions(shuffleOptions(next));
    resetQuestionUi();
  }

  function startMicroTraining() {
    const fresh = pool.filter((q) => q.misconcept === diagnosedTag && !answeredIds.includes(q.id)).slice(0, 3);
    const queue = fresh.length > 0 ? fresh : DIAGNOSTIC_POOL.filter((q) => q.misconcept === diagnosedTag).slice(0, 3);
    setMicroQueue(queue);
    setMicroIndex(0);
    setCurrent(queue[0]);
    setOptions(shuffleOptions(queue[0]));
    resetQuestionUi();
    setMode("microtraining");
  }

  function handleMicroNext() {
    if (microIndex + 1 < microQueue.length) {
      const next = microQueue[microIndex + 1];
      setMicroIndex((i) => i + 1);
      setCurrent(next);
      setOptions(shuffleOptions(next));
      resetQuestionUi();
    } else {
      onTame(TAME_STEP * 1.5);
      setStatus((s) => ({ ...s, [diagnosedTag!]: "none" }));
      setDiagnosedTag(null);
      setMode("quiz");
      const next = pickNext(answeredIds, null);
      if (!next) {
        finishQuiz();
      } else {
        setCurrent(next);
        setOptions(shuffleOptions(next));
        resetQuestionUi();
      }
    }
  }

  if (mode === "diagnosis" && diagnosedTag) {
    const info = MISCONCEPTS[diagnosedTag];
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center p-7" style={QUIZ_STACK_FRAME}>
        <Creature symbol={topic.symbol} wildness={wildness} mood="curious" size={90} />
        <h2 className="text-lg font-extrabold mt-4 mb-2 text-white">Našli jsme vzorec</h2>
        <p className="text-sm leading-relaxed mb-1 text-indigo-100">{info.diagnosis}</p>
        <p className="text-xs leading-relaxed mb-6 text-indigo-200/80">
          Zbytek zvládáš. Zaměříme se přesně na tohle — 2minutový mikro-trénink, ne celé opakování.
        </p>
        <button
          onClick={startMicroTraining}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-3.5 rounded-xl mb-2.5"
        >
          Zkrotit tenhle vzorec
        </button>
        <button onClick={onClose} className="text-xs font-medium text-indigo-200">
          Zatím ne, vrátit se zpět
        </button>
      </div>
    );
  }

  if (mode === "done") {
    const wrongIds = answerLog.current.filter((row) => !row.isCorrect).map((row) => row.questionId);
    return (
      <Result
        lastPct={pool.length > 0 ? Math.round((quizCorrectRef.current / pool.length) * 100) : 0}
        correctCount={quizCorrectRef.current}
        total={pool.length}
        wrongCount={wrongIds.length}
        onDrillMistakes={wrongIds.length > 0 && onDrillMistakes ? () => onDrillMistakes(wrongIds) : undefined}
        onBack={onFinish}
      />
    );
  }

  if (!current) {
    return <div className="flex-1 min-h-0" style={QUIZ_STACK_FRAME} />;
  }

  const isMicro = mode === "microtraining";
  const quizStep = answeredIds.includes(current.id) ? answeredIds.length : answeredIds.length + 1;
  const step = isMicro ? microIndex + 1 : Math.min(quizStep, pool.length);
  const total = isMicro ? microQueue.length : pool.length;
  const correctIndex = Math.max(0, options.findIndex((o) => o.correct));
  const mapped: QuizQuestion = {
    id: 0,
    topic: "vyrazy",
    type: "mc",
    workingText: current.workingText,
    prompt: current.prompt,
    options: options.map((o) => o.text),
    correctIndex,
    friendlyHint: MISCONCEPTS[current.misconcept].hint,
    explanation: MISCONCEPTS[current.misconcept].hint,
  };

  return (
    <QuizPravopisLayout
      topic={topic}
      wildness={wildness}
      question={mapped}
      index={step - 1}
      total={total}
      answerInput=""
      setAnswerInput={() => {}}
      selectedOption={selected}
      showHint={showHint}
      setShowHint={setShowHint}
      evaluated={evaluated}
      isCorrect={Boolean(selected !== null && options[selected]?.correct)}
      onPickOption={(i) => handleCheck(i)}
      onCheck={() => handleCheck()}
      onNext={isMicro ? handleMicroNext : handleNext}
      onClose={onClose}
      banner={isMicro ? `Cílený trénink: ${MISCONCEPTS[current.misconcept].name}` : undefined}
      nextLabel="Další otázka"
    />
  );
}
