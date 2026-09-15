"use client";

import { QuizPravopisLayout } from "@/components/QuizPravopisLayout";
import type { QuizQuestion, Topic } from "@/lib/types";

type Props = {
  topic: Topic;
  wildness: number;
  question: QuizQuestion;
  index: number;
  total: number;
  lastPct?: number | null;
  mix?: boolean;
  answerInput: string;
  setAnswerInput: (v: string) => void;
  selectedOption: number | null;
  setSelectedOption: (v: number) => void;
  showHint: boolean;
  setShowHint: (v: boolean) => void;
  evaluated: boolean;
  isCorrect: boolean;
  onCheck: () => void;
  onNext: () => void;
  onClose: () => void;
  streakCount?: number;
  hasShield?: boolean;
  shieldPulse?: boolean;
  timeRemainingSec?: number | null;
  eliminatedOptions?: number[];
  shieldJustSaved?: boolean;
  onOptionAttempt?: (index: number) => boolean;
  onPickAndCheck?: (index: number) => void;
  lastPointsEarned?: number | null;
};

export function Quiz(props: Props) {
  const {
    topic,
    wildness,
    question,
    index,
    total,
    answerInput,
    setAnswerInput,
    selectedOption,
    setSelectedOption,
    showHint,
    setShowHint,
    evaluated,
    isCorrect,
    onCheck,
    onNext,
    onClose,
    streakCount,
    hasShield,
    shieldPulse,
    timeRemainingSec,
    eliminatedOptions = [],
    shieldJustSaved,
    onOptionAttempt,
    onPickAndCheck,
    lastPointsEarned,
  } = props;

  return (
    <QuizPravopisLayout
      topic={topic}
      wildness={wildness}
      question={question}
      index={index}
      total={total}
      answerInput={answerInput}
      setAnswerInput={setAnswerInput}
      selectedOption={selectedOption}
      showHint={showHint}
      setShowHint={setShowHint}
      evaluated={evaluated}
      isCorrect={isCorrect}
      onPickOption={(i) => {
        if (onOptionAttempt?.(i)) return;
        if (onPickAndCheck) onPickAndCheck(i);
        else {
          setSelectedOption(i);
          onCheck();
        }
      }}
      onCheck={onCheck}
      onNext={onNext}
      onClose={onClose}
      eliminatedOptions={eliminatedOptions}
      streakCount={streakCount}
      hasShield={hasShield}
      shieldPulse={shieldPulse}
      shieldJustSaved={shieldJustSaved}
      timeRemainingSec={timeRemainingSec}
      lastPointsEarned={lastPointsEarned}
      mix={props.mix}
    />
  );
}
