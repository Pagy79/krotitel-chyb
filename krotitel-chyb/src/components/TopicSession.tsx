"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ComingSoon } from "@/components/ComingSoon";
import { DiagnosticQuiz } from "@/components/DiagnosticQuiz";
import { Quiz } from "@/components/Quiz";
import { Result } from "@/components/Result";
import { QUESTIONS } from "@/data/questions";
import { TOPICS } from "@/data/topics";
import { useProgress } from "@/hooks/useProgress";
import { useTestProgress } from "@/hooks/useTestProgress";
import { TEST_QUESTION_COUNT } from "@/lib/velkyTestRules";
import { shuffleArray } from "@/lib/shuffle";
import { saveAttempt } from "@/lib/attempts";
import type { TopicId } from "@/lib/types";

export function TopicSession({ topicId }: { topicId: TopicId }) {
  const router = useRouter();
  const topic = TOPICS.find((t) => t.id === topicId);
  const { wildness, tame, bloomTopic } = useProgress();
  const { lastByTopic } = useTestProgress();
  const [qIndex, setQIndex] = useState(0);
  const [answerInput, setAnswerInput] = useState("");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [evaluated, setEvaluated] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [done, setDone] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const correctRef = useRef(0);
  const topicQuestions = useMemo(
    () => shuffleArray(QUESTIONS.filter((q) => q.topic === topicId)).slice(0, TEST_QUESTION_COUNT),
    [topicId],
  );

  if (!topic) return null;

  const close = () => router.push("/svet");
  const currentQuestion = topicQuestions[qIndex];

  function resetQ() {
    setAnswerInput("");
    setSelectedOption(null);
    setShowHint(false);
    setEvaluated(false);
    setIsCorrect(false);
  }

  function checkAnswer() {
    if (!currentQuestion) return;
    const correct =
      currentQuestion.type === "open"
        ? currentQuestion.accept.includes(answerInput.trim().replace(",", "."))
        : selectedOption === currentQuestion.correctIndex;
    setIsCorrect(correct);
    setEvaluated(true);
    if (correct) {
      tame(topicId);
      correctRef.current += 1;
      setCorrectCount(correctRef.current);
    }
  }

  function nextQuestion() {
    if (qIndex + 1 < topicQuestions.length) {
      setQIndex((i) => i + 1);
      resetQ();
    } else {
      const pct = topicQuestions.length > 0 ? (correctRef.current / topicQuestions.length) * 100 : 0;
      saveAttempt({ mode: "practice", category: topicId, percentage: pct });
      if (pct >= 70) bloomTopic(topicId);
      setDone(true);
    }
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
      />
    );
  }

  if (done && currentQuestion) {
    return <Result topic={topic} wildness={wildness[topicId]} lastPct={Math.round((correctCount / topicQuestions.length) * 100)} onBack={close} />;
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
      total={topicQuestions.length}
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
      onNext={nextQuestion}
      onClose={close}
    />
  );
}
