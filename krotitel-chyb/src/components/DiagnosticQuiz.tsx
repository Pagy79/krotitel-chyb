"use client";

import { useRef, useState } from "react";
import { DIAGNOSTIC_POOL, MISCONCEPTS } from "@/data/diagnostic";
import { C, TAME_STEP } from "@/data/theme";
import { Creature } from "@/components/Creature";
import { QuizFrame } from "@/components/QuizFrame";
import { TOPIC_THEMES } from "@/data/topicThemes";
import { shuffleArray } from "@/lib/shuffle";
import { saveAttempt } from "@/lib/attempts";
import { TEST_QUESTION_COUNT } from "@/lib/velkyTestRules";
import type { DiagnosticQuestion, FlagStatus, MisconceptId, ShuffledOption, Topic } from "@/lib/types";

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
}: {
  topic: Topic;
  wildness: number;
  lastPct?: number | null;
  onTame: (amount: number) => void;
  onBloom?: () => void;
  onClose: () => void;
  onFinish: () => void;
}) {
  const [pool] = useState(() => shuffleArray(DIAGNOSTIC_POOL).slice(0, TEST_QUESTION_COUNT));
  const [answeredIds, setAnsweredIds] = useState<string[]>([]);
  const [status, setStatus] = useState<StatusMap>({ M1: "none", M2: "none", M3: "none", M4: "none" });
  const [priority, setPriority] = useState<MisconceptId | null>(null);
  const [mode, setMode] = useState<Mode>("quiz");
  const [diagnosedTag, setDiagnosedTag] = useState<MisconceptId | null>(null);
  const [microQueue, setMicroQueue] = useState<DiagnosticQuestion[]>([]);
  const [microIndex, setMicroIndex] = useState(0);
  const [current, setCurrent] = useState<DiagnosticQuestion>(() => pool[0]);
  const [options, setOptions] = useState<ShuffledOption[]>(() => shuffleOptions(pool[0]));
  const [selected, setSelected] = useState<number | null>(null);
  const [evaluated, setEvaluated] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const quizCorrectRef = useRef(0);
  const savedRef = useRef(false);

  function finishQuiz() {
    if (!savedRef.current) {
      savedRef.current = true;
      const pct = pool.length > 0 ? (quizCorrectRef.current / pool.length) * 100 : 0;
      saveAttempt({ mode: "practice", category: "vyrazy", percentage: pct });
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

  function handleCheck() {
    if (selected === null || evaluated) return;
    const opt = options[selected];
    setEvaluated(true);
    if (!answeredIds.includes(current.id)) {
      setAnsweredIds((ids) => [...ids, current.id]);
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
      <div className="flex-1 flex flex-col items-center justify-center text-center p-7">
        <Creature symbol={topic.symbol} wildness={wildness} mood="curious" size={90} />
        <h2 className="text-lg font-extrabold mt-4 mb-2" style={{ color: C.ink }}>
          Našli jsme vzorec
        </h2>
        <p className="text-sm leading-relaxed mb-1" style={{ color: C.inkDim }}>
          {info.diagnosis}
        </p>
        <p className="text-xs leading-relaxed mb-6" style={{ color: C.inkDim }}>
          Zbytek zvládáš. Zaměříme se přesně na tohle — 2minutový mikro-trénink, ne celé opakování.
        </p>
        <button
          onClick={startMicroTraining}
          className="paper-btn w-full py-3.5 font-bold text-sm mb-2.5"
          style={{ backgroundColor: C.accent, color: "#FFFFFF" }}
        >
          Zkrotit tenhle vzorec
        </button>
        <button onClick={onClose} className="text-xs font-medium" style={{ color: C.inkDim }}>
          Zatím ne, vrátit se zpět
        </button>
      </div>
    );
  }

  if (mode === "done") {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center p-7">
        <Creature symbol={topic.symbol} wildness={wildness} mood="happy" size={100} />
        <h2 className="text-lg font-extrabold mt-4 mb-2" style={{ color: C.ink }}>
          Diagnostická série hotová
        </h2>
        <p className="text-2xl font-black mb-2" style={{ color: C.ink }}>
          {pool.length > 0 ? Math.round((quizCorrectRef.current / pool.length) * 100) : 0} %
        </p>
        <p className="text-sm leading-relaxed mb-6" style={{ color: C.inkDim }}>
          Výsledek posledního testu uvidíš u tvora na mapě.
        </p>
        <button
          onClick={onFinish}
          className="paper-btn w-full py-4 font-bold text-base"
          style={{ backgroundColor: C.accent, color: "#FFFFFF" }}
        >
          Zpátky ke tvorům
        </button>
      </div>
    );
  }

  const isMicro = mode === "microtraining";
  const selectedOpt = selected !== null ? options[selected] : null;
  const quizStep = answeredIds.includes(current.id) ? answeredIds.length : answeredIds.length + 1;
  const theme = TOPIC_THEMES[topic.id];
  const step = isMicro ? microIndex + 1 : Math.min(quizStep, pool.length);
  const total = isMicro ? microQueue.length : pool.length;

  return (
    <QuizFrame topic={topic} step={step} total={total} lastPct={lastPct} onClose={onClose}>
      {isMicro && (
        <p className="text-[11px] font-bold mb-2" style={{ color: theme.panelMuted }}>
          Cílený trénink: {MISCONCEPTS[current.misconcept].name}
        </p>
      )}
      <p className="text-[11px] font-black tracking-wide uppercase mb-2" style={{ color: theme.panelMuted }}>
        Otázka
      </p>
      <p className="text-sm font-semibold leading-snug mb-3">{current.prompt}</p>
      {!showHint && !evaluated && (
        <button
          onClick={() => setShowHint(true)}
          className="text-[11px] underline decoration-dashed mb-3"
          style={{ color: theme.panelMuted }}
        >
          💡 Nápověda
        </button>
      )}
      {showHint && !evaluated && (
        <p className="text-[11px] leading-relaxed mb-3" style={{ color: theme.panelMuted }}>
          {MISCONCEPTS[current.misconcept].hint}
        </p>
      )}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {options.map((opt, i) => {
          let bg = theme.chip;
          let border = "transparent";
          if (evaluated && opt.correct) {
            border = C.accent;
            bg = "#E8FFF6";
          } else if (evaluated && i === selected) {
            border = C.wild;
            bg = "#FFE8E2";
          } else if (!evaluated && selected === i) {
            border = theme.bar;
          }
          return (
            <button
              key={i}
              disabled={evaluated}
              onClick={() => setSelected(i)}
              className="rounded-2xl px-3 py-2.5 text-xs font-bold"
              style={{ backgroundColor: bg, color: "#231830", border: `2px solid ${border}` }}
            >
              {opt.text}
            </button>
          );
        })}
      </div>
      {!evaluated ? (
        <button
          onClick={handleCheck}
          disabled={selected === null}
          className="w-full py-3 rounded-2xl font-bold text-sm disabled:opacity-40"
          style={{ backgroundColor: theme.bar, color: "#fff" }}
        >
          Zkontrolovat
        </button>
      ) : (
        <div className="flex flex-col gap-2">
          <p className="text-[11px]" style={{ color: selectedOpt?.correct ? C.accent : C.wild }}>
            {selectedOpt?.correct ? "Správně!" : "Ještě ne."}
          </p>
          <button
            onClick={isMicro ? handleMicroNext : handleNext}
            className="w-full py-3 rounded-2xl font-bold text-sm"
            style={{ backgroundColor: theme.bar, color: "#fff" }}
          >
            Další
          </button>
        </div>
      )}
    </QuizFrame>
  );
}
