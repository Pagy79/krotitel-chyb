"use client";

import { C, TAME_STEP } from "@/data/theme";
import { Creature } from "@/components/Creature";
import { QuizFrame } from "@/components/QuizFrame";
import { MIX_THEME, TOPIC_THEMES } from "@/data/topicThemes";
import { formatClock } from "@/lib/velkyTestRules";
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
};

export function Quiz(props: Props) {
  const {
    topic,
    wildness,
    question,
    index,
    total,
    lastPct = null,
    mix = false,
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
  } = props;

  const theme = mix ? MIX_THEME : TOPIC_THEMES[topic.id];
  const open = question.type === "open";

  return (
    <QuizFrame
      topic={topic}
      mix={mix}
      step={Math.min(index + 1, total)}
      total={total}
      lastPct={lastPct}
      onClose={onClose}
      extras={
        <>
          {streakCount != null && (
            <div className="flex items-center justify-center mt-2">
              {!hasShield ? (
                <div className="flex items-center gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className={`text-base leading-none ${i < streakCount ? "" : "opacity-30"}`}>
                      {i < streakCount ? "⭐" : "☆"}
                    </span>
                  ))}
                </div>
              ) : (
                <div
                  className="text-[10px] font-bold rounded-full px-3 py-1"
                  style={{
                    backgroundColor: `${C.accent}22`,
                    color: theme.title,
                    transform: shieldPulse ? "scale(1.06)" : "scale(1)",
                  }}
                >
                  🛡️ Štít aktivní
                </div>
              )}
            </div>
          )}
          {timeRemainingSec != null && (
            <p className="text-center text-[11px] font-bold mt-1 tabular-nums" style={{ color: theme.title }}>
              Čas {formatClock(timeRemainingSec)}
            </p>
          )}
        </>
      }
    >
      {shieldJustSaved && !evaluated && (
        <p className="text-[11px] font-bold mb-2" style={{ color: C.accent }}>
          🛡️ Štít tě zachránil! Zkus to znovu.
        </p>
      )}

      <p className="text-[11px] font-black tracking-wide uppercase mb-2" style={{ color: theme.panelMuted }}>
        {open ? "Řešení" : "Otázka"}
      </p>
      <p className="text-sm font-semibold leading-snug mb-3">{question.prompt}</p>

      {!showHint && !evaluated && (
        <button
          onClick={() => setShowHint(true)}
          className="text-[11px] font-medium underline decoration-dashed mb-3"
          style={{ color: theme.panelMuted }}
        >
          💡 Nápověda
        </button>
      )}
      {showHint && !evaluated && (
        <p className="text-[11px] leading-relaxed mb-3" style={{ color: theme.panelMuted }}>
          {question.friendlyHint}
        </p>
      )}

      {open ? (
        <input
          type="text"
          inputMode="decimal"
          disabled={evaluated}
          value={answerInput}
          onChange={(e) => setAnswerInput(e.target.value)}
          placeholder="x ="
          className="w-full rounded-2xl px-4 py-3 text-base font-semibold mb-3 focus:outline-none"
          style={{ backgroundColor: theme.chip, color: "#231830" }}
        />
      ) : (
        <div className="grid grid-cols-2 gap-2 mb-3">
          {question.options.map((opt, i) => {
            let bg = theme.chip;
            let color = "#231830";
            let border = "transparent";
            if (evaluated && i === question.correctIndex) {
              border = C.accent;
              bg = "#E8FFF6";
            } else if (evaluated && i === selectedOption) {
              border = C.wild;
              bg = "#FFE8E2";
            } else if (!evaluated && selectedOption === i) {
              border = theme.bar;
            }
            return (
              <button
                key={i}
                disabled={evaluated || eliminatedOptions.includes(i)}
                onClick={() => {
                  if (onOptionAttempt?.(i)) return;
                  setSelectedOption(i);
                }}
                className="rounded-2xl px-3 py-2.5 text-xs font-bold disabled:opacity-40 paper-btn-ghost"
                style={{ backgroundColor: bg, color, border: `2px solid ${border}` }}
              >
                {opt}
              </button>
            );
          })}
        </div>
      )}

      {!evaluated ? (
        <button
          onClick={onCheck}
          disabled={open ? !answerInput.trim() : selectedOption === null}
          className="w-full py-3 rounded-2xl font-bold text-sm paper-btn disabled:opacity-40"
          style={{ backgroundColor: theme.bar, color: "#FFFFFF" }}
        >
          Zkontrolovat
        </button>
      ) : (
        <div className="flex flex-col gap-2">
          <div className="flex items-start gap-2">
            <Creature
              symbol={topic.symbol}
              wildness={isCorrect ? Math.max(0, wildness - TAME_STEP) : wildness}
              size={28}
              mood={isCorrect ? "happy" : "curious"}
            />
            <p className="text-[11px] leading-relaxed" style={{ color: theme.panelMuted }}>
              <strong style={{ color: isCorrect ? C.accent : C.wild }}>
                {isCorrect ? "Správně!" : "Ještě ne."}
              </strong>{" "}
              {question.explanation}
            </p>
          </div>
          <button
            onClick={onNext}
            className="w-full py-3 rounded-2xl font-bold text-sm paper-btn"
            style={{ backgroundColor: theme.bar, color: "#FFFFFF" }}
          >
            Další
          </button>
        </div>
      )}
    </QuizFrame>
  );
}
