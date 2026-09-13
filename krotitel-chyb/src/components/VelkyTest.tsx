"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Quiz } from "@/components/Quiz";
import { Result } from "@/components/Result";
import { TOPICS } from "@/data/topics";
import { buildVelkyTest } from "@/data/velkyTest";
import { useProgress } from "@/hooks/useProgress";
import { saveAttempt } from "@/lib/attempts";
import { COSMIC_BG_STYLE } from "@/lib/cosmicBg";
import { resolveQuestionKey } from "@/lib/questionBank";
import { BLOOM_PCT, STREAK_FOR_SHIELD, VELKY_TEST_MINUTES } from "@/lib/velkyTestRules";
import type { QuizQuestion, TopicId } from "@/lib/types";

export function VelkyTest() {
  const router = useRouter();
  const { wildness, tame, bloomAll } = useProgress();
  const [pool, setPool] = useState<QuizQuestion[]>([]);
  const maxScore = pool.length * 2;

  const [qIndex, setQIndex] = useState(0);
  const [answerInput, setAnswerInput] = useState("");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [evaluated, setEvaluated] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [done, setDone] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);

  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [consecutiveWrong, setConsecutiveWrong] = useState(0);
  const [streakCount, setStreakCount] = useState(0);
  const [hasShield, setHasShield] = useState(false);
  const [shieldPulse, setShieldPulse] = useState(false);
  const [eliminatedOptions, setEliminatedOptions] = useState<number[]>([]);
  const [shieldUsedThisQuestion, setShieldUsedThisQuestion] = useState(false);
  const [lastPointsEarned, setLastPointsEarned] = useState<number | null>(null);
  const [timeRemainingSec, setTimeRemainingSec] = useState(VELKY_TEST_MINUTES * 60);
  const savedRef = useRef(false);
  const answerLog = useRef<{ questionId: string; category: TopicId; isCorrect: boolean; hintUsed: boolean; pointsEarned: number }[]>([]);

  const currentQuestion = pool[qIndex];
  const topic = TOPICS.find((t) => t.id === currentQuestion?.topic);
  const close = () => router.push("/svet");

  useEffect(() => {
    setPool(buildVelkyTest());
  }, []);

  useEffect(() => {
    if (done || pool.length === 0) return;
    if (timeRemainingSec <= 0) {
      setTimeExpired(true);
      setDone(true);
      return;
    }
    const id = window.setTimeout(() => setTimeRemainingSec((t) => t - 1), 1000);
    return () => window.clearTimeout(id);
  }, [timeRemainingSec, done]);

  function resetQ() {
    setAnswerInput("");
    setSelectedOption(null);
    setShowHint(false);
    setEvaluated(false);
    setIsCorrect(false);
    setEliminatedOptions([]);
    setShieldUsedThisQuestion(false);
    setLastPointsEarned(null);
  }

  function grantShieldFromStreak() {
    if (hasShield || shieldUsedThisQuestion) return;
    const next = streakCount + 1;
    if (next >= STREAK_FOR_SHIELD) {
      setHasShield(true);
      setStreakCount(0);
      setShieldPulse(true);
      window.setTimeout(() => setShieldPulse(false), 700);
    } else {
      setStreakCount(next);
    }
  }

  function absorbShield() {
    setHasShield(false);
    setStreakCount(0);
    setShieldUsedThisQuestion(true);
    setShowHint(true);
  }

  function onOptionAttempt(index: number) {
    if (!currentQuestion || currentQuestion.type !== "mc" || evaluated) return false;
    if (index === currentQuestion.correctIndex) return false;
    if (!hasShield) return false;
    absorbShield();
    setEliminatedOptions((prev) => [...prev, index]);
    setSelectedOption(null);
    return true;
  }

  function checkAnswer(pickedIndex?: number) {
    if (!currentQuestion) return;
    const chosen = pickedIndex ?? selectedOption;
    if (typeof pickedIndex === "number") setSelectedOption(pickedIndex);
    const correct =
      currentQuestion.type === "open"
        ? currentQuestion.accept.includes(answerInput.trim().replace(",", "."))
        : chosen === currentQuestion.correctIndex;

    if (!correct && hasShield) {
      absorbShield();
      if (currentQuestion.type === "mc" && chosen !== null) {
        setEliminatedOptions((prev) => [...prev, chosen]);
      }
      setSelectedOption(null);
      setAnswerInput("");
      return;
    }

    setIsCorrect(correct);
    setEvaluated(true);
    setAnsweredCount((c) => c + 1);

    let points = 0;
    if (correct) {
      points = showHint || shieldUsedThisQuestion ? 1 : 2;
      setConsecutiveWrong(0);
      if (correct) tame(currentQuestion.topic);
      if (!hasShield && !shieldUsedThisQuestion && !showHint) {
        grantShieldFromStreak();
      } else if (showHint && !shieldUsedThisQuestion) {
        setStreakCount(0);
      }
    } else {
      const wrongStreak = consecutiveWrong + 1;
      if (wrongStreak >= 2) points = -1;
      setConsecutiveWrong(wrongStreak);
      setStreakCount(0);
    }
    setLastPointsEarned(points);
    setScore((s) => s + points);
    if (correct) setCorrectCount((c) => c + 1);
    const questionId = resolveQuestionKey(currentQuestion);
    if (!answerLog.current.some((row) => row.questionId === questionId)) {
      answerLog.current.push({
        questionId,
        category: currentQuestion.topic,
        isCorrect: correct,
        hintUsed: showHint || shieldUsedThisQuestion,
        pointsEarned: points,
      });
    }
  }

  function nextQuestion() {
    if (qIndex + 1 < pool.length) {
      setQIndex((i) => i + 1);
      resetQ();
    } else {
      setDone(true);
    }
  }

  const pointsPct = maxScore > 0 ? Math.max(0, Math.min(100, (score / maxScore) * 100)) : 0;

  function restart() {
    savedRef.current = false;
    answerLog.current = [];
    setPool(buildVelkyTest());
    setQIndex(0);
    resetQ();
    setDone(false);
    setTimeExpired(false);
    setScore(0);
    setCorrectCount(0);
    setAnsweredCount(0);
    setConsecutiveWrong(0);
    setStreakCount(0);
    setHasShield(false);
    setTimeRemainingSec(VELKY_TEST_MINUTES * 60);
  }

  useEffect(() => {
    if (!done || savedRef.current) return;
    savedRef.current = true;
    const rounded = Math.round(pointsPct);
    void saveAttempt({
      mode: "full",
      category: null,
      percentage: rounded,
      score,
      maxScore,
      questionCount: pool.length,
      answeredCount,
      timeExpired,
      answers: answerLog.current,
    });
    if (rounded >= BLOOM_PCT) bloomAll();
  }, [done, pointsPct, bloomAll, score, maxScore, pool.length, answeredCount, timeExpired]);

  if (done) {
    const wrongRows = answerLog.current.filter((row) => !row.isCorrect);
    const byCat = new Map<string, number>();
    for (const row of wrongRows) {
      const name = TOPICS.find((t) => t.id === row.category)?.name ?? row.category;
      byCat.set(name, (byCat.get(name) ?? 0) + 1);
    }
    return (
      <Result
        lastPct={Math.round(pointsPct)}
        correctCount={correctCount}
        total={pool.length}
        wrongCount={wrongRows.length}
        score={score}
        maxScore={maxScore}
        usePointsPct
        mistakeCategories={[...byCat.entries()].map(([name, count]) => ({ name, count }))}
        timeExpired={timeExpired}
        unanswered={Math.max(0, pool.length - answeredCount)}
        onDrillMistakes={
          wrongRows.length > 0
            ? () =>
                router.push(
                  `/chyby?ids=${encodeURIComponent(wrongRows.map((row) => row.questionId).join(","))}`,
                )
            : undefined
        }
        onRepeat={restart}
        onBack={close}
        backLabel="Zpět na výběr kategorií"
      />
    );
  }

  if (!currentQuestion || !topic) {
    return <div className="flex-1 min-h-0" style={COSMIC_BG_STYLE} />;
  }

  return (
    <Quiz
      topic={topic}
      wildness={wildness[topic.id]}
      question={currentQuestion}
      index={qIndex}
      total={pool.length}
      answerInput={answerInput}
      setAnswerInput={setAnswerInput}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      showHint={showHint}
      setShowHint={(v) => {
        setShowHint(v);
        if (v) setStreakCount(0);
      }}
      evaluated={evaluated}
      isCorrect={isCorrect}
      onCheck={checkAnswer}
      onPickAndCheck={(i) => checkAnswer(i)}
      onNext={nextQuestion}
      onClose={close}
      streakCount={streakCount}
      hasShield={hasShield}
      shieldPulse={shieldPulse}
      timeRemainingSec={timeRemainingSec}
      eliminatedOptions={eliminatedOptions}
      shieldJustSaved={shieldUsedThisQuestion && !evaluated}
      onOptionAttempt={onOptionAttempt}
      lastPointsEarned={lastPointsEarned}
    />
  );
}
