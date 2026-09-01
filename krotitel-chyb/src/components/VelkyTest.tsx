"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Quiz } from "@/components/Quiz";
import { Creature } from "@/components/Creature";
import { C } from "@/data/theme";
import { TOPICS } from "@/data/topics";
import { buildVelkyTest } from "@/data/velkyTest";
import { useProgress } from "@/hooks/useProgress";
import { loadTestProgress, saveAttempt } from "@/lib/attempts";
import { getTrophy, BLOOM_PCT, STREAK_FOR_SHIELD, VELKY_TEST_MINUTES } from "@/lib/velkyTestRules";

export function VelkyTest() {
  const router = useRouter();
  const { wildness, tame, bloomAll } = useProgress();
  const pool = useMemo(() => buildVelkyTest(), []);
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
  const [timeRemainingSec, setTimeRemainingSec] = useState(VELKY_TEST_MINUTES * 60);
  const [bestPct, setBestPct] = useState<number | null>(null);
  const [lastPct, setLastPct] = useState<number | null>(null);
  const savedRef = useRef(false);

  const currentQuestion = pool[qIndex];
  const topic = TOPICS.find((t) => t.id === currentQuestion?.topic);
  const close = () => router.push("/svet");

  useEffect(() => {
    const { fullBestPct, fullLastPct } = loadTestProgress();
    setBestPct(fullBestPct);
    setLastPct(fullLastPct);
  }, []);

  useEffect(() => {
    if (done) return;
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

  function checkAnswer() {
    if (!currentQuestion) return;
    const correct =
      currentQuestion.type === "open"
        ? currentQuestion.accept.includes(answerInput.trim().replace(",", "."))
        : selectedOption === currentQuestion.correctIndex;

    if (!correct && hasShield) {
      absorbShield();
      if (currentQuestion.type === "mc" && selectedOption !== null) {
        setEliminatedOptions((prev) => [...prev, selectedOption]);
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
    setScore((s) => s + points);
    if (correct) setCorrectCount((c) => c + 1);
  }

  function nextQuestion() {
    if (qIndex + 1 < pool.length) {
      setQIndex((i) => i + 1);
      resetQ();
    } else {
      setDone(true);
    }
  }

  const pointsPct = maxScore > 0 ? Math.max(0, (score / maxScore) * 100) : 0;
  const trophy = getTrophy(pointsPct);

  useEffect(() => {
    if (!done || savedRef.current) return;
    savedRef.current = true;
    const rounded = Math.round(pointsPct);
    saveAttempt({ mode: "full", category: null, percentage: rounded });
    if (rounded >= BLOOM_PCT) bloomAll();
    setBestPct((b) => (b == null ? rounded : Math.max(b, rounded)));
  }, [done, pointsPct, bloomAll]);

  if (done) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center p-7">
        <div className="flex gap-2 mb-4">
          {TOPICS.map((t) => (
            <Creature key={t.id} symbol={t.symbol} wildness={pointsPct >= BLOOM_PCT ? 0 : wildness[t.id]} size={52} />
          ))}
        </div>
        {trophy.emoji ? (
          <>
            <p className="text-5xl leading-none mb-2">{trophy.emoji}</p>
            <h2 className="text-xl font-extrabold mb-1" style={{ color: C.ink }}>
              {trophy.label}
            </h2>
          </>
        ) : (
          <h2 className="text-lg font-extrabold mb-2" style={{ color: C.ink }}>
            Velký test hotový
          </h2>
        )}
        <div
          className="w-28 h-28 rounded-full border-4 flex flex-col items-center justify-center my-4"
          style={{ borderColor: pointsPct >= 70 ? C.accent : C.wild }}
        >
          <p className="text-[10px] font-bold uppercase" style={{ color: C.inkDim }}>
            body
          </p>
          <p className="text-2xl font-black" style={{ color: C.ink }}>
            {Math.round(pointsPct)}%
          </p>
        </div>
        <p className="text-xs mb-2" style={{ color: C.inkDim }}>
          {correctCount}/{pool.length} správně · {score} z max. {maxScore} bodů
        </p>
        {bestPct != null && (
          <p className="text-xs mb-2" style={{ color: C.gold }}>
            Nejlepší: {bestPct} % · Poslední: {Math.round(pointsPct)} %
          </p>
        )}
        {timeExpired && answeredCount < pool.length && (
          <p className="text-xs rounded-lg px-3 py-2 mb-3" style={{ backgroundColor: `${C.wild}14`, color: C.wild }}>
            Čas vypršel — nezodpovězené úlohy jsou za 0 bodů.
          </p>
        )}
        {!trophy.emoji && (
          <p className="text-sm leading-relaxed mb-6" style={{ color: C.inkDim }}>
            {trophy.label} Pohár je od 70 / 80 / 90 % bodů.
          </p>
        )}
        {trophy.emoji && (
          <p className="text-sm leading-relaxed mb-8" style={{ color: C.inkDim }}>
            Splnil/a jsi odměnu za {trophy.label.toLowerCase()}.
          </p>
        )}
        <button
          onClick={close}
          className="w-full py-4 rounded-2xl font-bold text-base paper-btn"
          style={{ backgroundColor: C.accent, color: "#FFFFFF" }}
        >
          Zpátky ke tvorům
        </button>
      </div>
    );
  }

  if (!currentQuestion || !topic) return null;

  return (
    <Quiz
      topic={topic}
      wildness={wildness[topic.id]}
      question={currentQuestion}
      index={qIndex}
      total={pool.length}
      mix
      lastPct={lastPct}
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
      onNext={nextQuestion}
      onClose={close}
      streakCount={streakCount}
      hasShield={hasShield}
      shieldPulse={shieldPulse}
      timeRemainingSec={timeRemainingSec}
      eliminatedOptions={eliminatedOptions}
      shieldJustSaved={shieldUsedThisQuestion && !evaluated}
      onOptionAttempt={onOptionAttempt}
    />
  );
}
