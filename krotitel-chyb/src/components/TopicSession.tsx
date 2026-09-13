"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ComingSoon } from "@/components/ComingSoon";
import { DiagnosticQuiz } from "@/components/DiagnosticQuiz";
import { Quiz } from "@/components/Quiz";
import { Result } from "@/components/Result";
import { QUESTIONS } from "@/data/questions";
import { TOPICS } from "@/data/topics";
import { useClientPool } from "@/hooks/useClientPool";
import { useProgress } from "@/hooks/useProgress";
import { useTestProgress } from "@/hooks/useTestProgress";
import { saveAttempt } from "@/lib/attempts";
import { COSMIC_BG_STYLE } from "@/lib/cosmicBg";
import { resolveQuestionKey } from "@/lib/questionBank";
import { TEST_QUESTION_COUNT } from "@/lib/velkyTestRules";
import { shuffleArray } from "@/lib/shuffle";
import type { TopicId } from "@/lib/types";

export function TopicSession({ topicId }: { topicId: TopicId }) {
  const router = useRouter();
  const topic = TOPICS.find((t) => t.id === topicId);
  const { wildness, tame, bloomTopic } = useProgress();
  const { lastByTopic, mistakeQuestionIds } = useTestProgress();
  const [qIndex, setQIndex] = useState(0);
  const [answerInput, setAnswerInput] = useState("");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [evaluated, setEvaluated] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [done, setDone] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const correctRef = useRef(0);
  const answerLog = useRef<{ questionId: string; category: TopicId; isCorrect: boolean; hintUsed: boolean; pointsEarned: number }[]>([]);
  const topicQuestions = useClientPool(
    () => shuffleArray(QUESTIONS.filter((q) => q.topic === topicId)).slice(0, TEST_QUESTION_COUNT),
    [topicId],
  );

  if (!topic) return null;
  if (topicId !== "vyrazy" && topicQuestions === null) {
    return <div className="flex-1 min-h-0" style={COSMIC_BG_STYLE} />;
  }
  const questions = topicQuestions ?? [];

  const close = () => router.push("/svet");
  const currentQuestion = questions[qIndex];
  const sessionWrongIds = answerLog.current.filter((row) => !row.isCorrect).map((row) => row.questionId);
  const remainingOpen = mistakeQuestionIds.filter((id) => {
    const logged = answerLog.current.find((row) => row.questionId === id);
    if (logged) return !logged.isCorrect;
    return true;
  });
  const canDrill = sessionWrongIds.length > 0 || remainingOpen.length > 0;

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
    const questionId = resolveQuestionKey(currentQuestion);
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
      tame(topicId);
      correctRef.current += 1;
      setCorrectCount(correctRef.current);
    }
  }

  function nextQuestion() {
    if (qIndex + 1 < questions.length) {
      setQIndex((i) => i + 1);
      resetQ();
    } else {
      const pct = questions.length > 0 ? (correctRef.current / questions.length) * 100 : 0;
      void saveAttempt({
        mode: "practice",
        category: topicId,
        percentage: pct,
        score: answerLog.current.reduce((sum, row) => sum + (row.pointsEarned ?? 0), 0),
        maxScore: questions.length * 2,
        questionCount: questions.length,
        answeredCount: answerLog.current.length,
        answers: answerLog.current,
      });
      if (pct >= 70) bloomTopic(topicId);
      setDone(true);
    }
  }

  function openMistakes() {
    const ids = sessionWrongIds.length > 0 ? sessionWrongIds : remainingOpen;
    router.push(`/chyby?ids=${encodeURIComponent(ids.join(","))}`);
  }

  if (topicId === "vyrazy") {
    return (
      <DiagnosticQuiz
        topic={topic}
        wildness={wildness[topicId]}
        lastPct={lastByTopic.vyrazy}
        onTame={(amount) => tame(topicId, amount)}
        onBloom={() => bloomTopic(topicId)}
        onClose={close}
        onFinish={close}
        onDrillMistakes={(ids) => router.push(`/chyby?ids=${encodeURIComponent(ids.join(","))}`)}
      />
    );
  }

  if (done && currentQuestion) {
    return (
      <Result
        lastPct={Math.round((correctCount / questions.length) * 100)}
        correctCount={correctCount}
        total={questions.length}
        wrongCount={sessionWrongIds.length}
        onDrillMistakes={canDrill ? openMistakes : undefined}
        onBack={close}
      />
    );
  }

  if (!currentQuestion) {
    return <ComingSoon topic={topic} onClose={close} />;
  }

  return (
    <Quiz
      topic={topic}
      wildness={wildness[topicId]}
      question={currentQuestion}
      index={qIndex}
      total={questions.length}
      lastPct={lastByTopic[topicId]}
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
