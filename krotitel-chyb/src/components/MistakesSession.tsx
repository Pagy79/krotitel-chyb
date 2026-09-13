"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Quiz } from "@/components/Quiz";
import { Result } from "@/components/Result";
import { TOPICS } from "@/data/topics";
import { useProgress } from "@/hooks/useProgress";
import { useTestProgress } from "@/hooks/useTestProgress";
import { saveAttempt } from "@/lib/attempts";
import { COSMIC_BG_STYLE } from "@/lib/cosmicBg";
import { pickMistakesQuestions, resolveQuestionKey } from "@/lib/questionBank";
import { MISTAKES_QUIZ_LENGTH } from "@/lib/velkyTestRules";
import type { QuizQuestion, TopicId } from "@/lib/types";

export function MistakesSession() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { wildness, tame } = useProgress();
  const { mistakeQuestionIds, ready } = useTestProgress();
  const preferIds = (searchParams.get("ids") ?? "").split(",").map((id) => id.trim()).filter(Boolean);
  const pool = useMemo(
    () => pickMistakesQuestions(mistakeQuestionIds, preferIds, MISTAKES_QUIZ_LENGTH),
    [mistakeQuestionIds, preferIds.join("|")],
  );
  const [qIndex, setQIndex] = useState(0);
  const [answerInput, setAnswerInput] = useState("");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [evaluated, setEvaluated] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [done, setDone] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [runKey, setRunKey] = useState(0);
  const correctRef = useRef(0);
  const finishedTotal = useRef(0);
  const answerLog = useRef<{ questionId: string; category: TopicId; isCorrect: boolean; hintUsed: boolean; pointsEarned: number }[]>([]);

  const current = pool[qIndex];
  const currentQuestion = current?.question as QuizQuestion | undefined;
  const topic = currentQuestion ? TOPICS.find((t) => t.id === currentQuestion.topic) : TOPICS[0];
  const close = () => router.push("/svet");

  function resetQ() {
    setAnswerInput("");
    setSelectedOption(null);
    setShowHint(false);
    setEvaluated(false);
    setIsCorrect(false);
  }

  function checkAnswer(pickedIndex?: number) {
    if (!currentQuestion) return;
    const chosen = pickedIndex ?? selectedOption;
    const correct =
      currentQuestion.type === "open"
        ? currentQuestion.accept.includes(answerInput.trim().replace(",", "."))
        : chosen === currentQuestion.correctIndex;
    if (typeof pickedIndex === "number") setSelectedOption(pickedIndex);
    setIsCorrect(correct);
    setEvaluated(true);
    const questionId = current.id;
    if (!answerLog.current.some((row) => row.questionId === questionId)) {
      answerLog.current.push({
        questionId,
        category: currentQuestion.topic,
        isCorrect: correct,
        hintUsed: showHint,
        pointsEarned: correct ? (showHint ? 1 : 2) : 0,
      });
    }
    if (correct) {
      tame(currentQuestion.topic);
      correctRef.current += 1;
      setCorrectCount(correctRef.current);
    }
  }

  function finish() {
    finishedTotal.current = pool.length;
    const pct = pool.length > 0 ? (correctRef.current / pool.length) * 100 : 0;
    void saveAttempt({
      mode: "mistakes",
      category: null,
      percentage: pct,
      score: answerLog.current.reduce((sum, row) => sum + (row.pointsEarned ?? 0), 0),
      maxScore: pool.length * 2,
      questionCount: pool.length,
      answeredCount: answerLog.current.length,
      answers: answerLog.current,
    });
    setDone(true);
  }

  function nextQuestion() {
    if (qIndex + 1 < pool.length) {
      setQIndex((i) => i + 1);
      resetQ();
    } else {
      finish();
    }
  }

  const sessionWrongIds = answerLog.current.filter((row) => !row.isCorrect).map((row) => row.questionId);
  const remainingOpen = mistakeQuestionIds.filter((id) => {
    const logged = answerLog.current.find((row) => row.questionId === id);
    if (logged) return !logged.isCorrect;
    return true;
  });
  const drillIds = sessionWrongIds.length > 0 ? sessionWrongIds : remainingOpen;

  if (!ready) {
    return <div className="flex-1" style={COSMIC_BG_STYLE} />;
  }

  if (done) {
    const total = finishedTotal.current || pool.length || correctCount;
    return (
      <Result
        lastPct={total > 0 ? Math.round((correctCount / total) * 100) : 0}
        correctCount={correctCount}
        total={total}
        wrongCount={sessionWrongIds.length}
        onDrillMistakes={
          drillIds.length > 0
            ? () => {
                router.replace(`/chyby?ids=${encodeURIComponent(drillIds.join(","))}&r=${Date.now()}`);
                answerLog.current = [];
                correctRef.current = 0;
                finishedTotal.current = 0;
                setCorrectCount(0);
                setQIndex(0);
                resetQ();
                setDone(false);
                setRunKey((k) => k + 1);
              }
            : undefined
        }
        onBack={close}
      />
    );
  }

  if (pool.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center p-7" style={COSMIC_BG_STYLE}>
        <p className="text-white font-semibold mb-2">Žádné otevřené chyby</p>
        <p className="text-sm text-indigo-200/80 mb-6 leading-relaxed">
          Až něco zkazíš v procvičování, tady se ty otázky budou opakovat, dokud je nespravíš.
        </p>
        <button
          type="button"
          onClick={close}
          className="w-full bg-white text-zinc-700 font-semibold text-sm py-3 rounded-xl"
        >
          Zpět na výběr kategorií
        </button>
      </div>
    );
  }

  if (!currentQuestion || !topic) return null;

  return (
    <Quiz
      key={`${runKey}-${resolveQuestionKey(currentQuestion)}-${qIndex}`}
      topic={topic}
      wildness={wildness[topic.id]}
      question={currentQuestion}
      index={qIndex}
      total={pool.length}
      lastPct={null}
      answerInput={answerInput}
      setAnswerInput={setAnswerInput}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      showHint={showHint}
      setShowHint={setShowHint}
      evaluated={evaluated}
      isCorrect={isCorrect}
      onCheck={checkAnswer}
      onPickAndCheck={(i) => checkAnswer(i)}
      onNext={nextQuestion}
      onClose={close}
    />
  );
}
