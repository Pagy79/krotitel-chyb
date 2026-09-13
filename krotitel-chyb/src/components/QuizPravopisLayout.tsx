"use client";

import { WorkingSource } from "@/components/WorkingSource";
import { COSMIC_BG_STYLE } from "@/lib/cosmicBg";
import { formatClock } from "@/lib/velkyTestRules";
import type { QuizQuestion, Topic } from "@/lib/types";

const LETTERS = ["A", "B", "C", "D"] as const;

export const QUIZ_STACK_FRAME = COSMIC_BG_STYLE;

type Props = {
  topic: Topic;
  wildness: number;
  question: QuizQuestion;
  index: number;
  total: number;
  answerInput: string;
  setAnswerInput: (v: string) => void;
  selectedOption: number | null;
  showHint: boolean;
  setShowHint: (v: boolean) => void;
  evaluated: boolean;
  isCorrect: boolean;
  onPickOption: (index: number) => void;
  onCheck: () => void;
  onNext: () => void;
  onClose: () => void;
  eliminatedOptions?: number[];
  banner?: string;
  nextLabel?: string;
  streakCount?: number;
  hasShield?: boolean;
  shieldPulse?: boolean;
  shieldJustSaved?: boolean;
  timeRemainingSec?: number | null;
  lastPointsEarned?: number | null;
};

export function QuizPravopisLayout({
  topic,
  wildness,
  question,
  index,
  total,
  answerInput,
  setAnswerInput,
  selectedOption,
  showHint,
  setShowHint,
  evaluated,
  isCorrect,
  onPickOption,
  onCheck,
  onNext,
  onClose,
  eliminatedOptions = [],
  banner,
  nextLabel,
  streakCount,
  hasShield,
  shieldPulse,
  shieldJustSaved,
  timeRemainingSec,
  lastPointsEarned,
}: Props) {
  const open = question.type === "open";
  const progress = total > 0 ? (index / total) * 100 : 0;

  function optionState(i: number) {
    if (!evaluated || question.type !== "mc") {
      if (!evaluated && selectedOption === i) return "picked";
      return null;
    }
    if (i === question.correctIndex) return "correct";
    if (i === selectedOption) return "wrong";
    return null;
  }

  return (
    <div className="flex-1 min-h-0 flex flex-col overflow-y-auto overscroll-y-contain app-hide-scrollbar p-5 sm:p-6" style={QUIZ_STACK_FRAME}>
      <div className="flex items-center justify-between mb-2.5">
        <button
          type="button"
          onClick={onClose}
          aria-label="Zavřít test"
          className="w-8 h-8 rounded-full flex items-center justify-center text-indigo-200 hover:text-white hover:bg-white/10"
        >
          ✕
        </button>
        <span className="text-xs font-semibold text-indigo-200/90 uppercase tracking-wide text-center px-2">
          {topic.name}
        </span>
        <span className="text-sm font-semibold text-white whitespace-nowrap">
          {index + 1} z {total}
        </span>
      </div>

      {streakCount != null && (
        <div className="flex items-center justify-center mb-4">
          {!hasShield ? (
            <div className="flex items-center gap-1.5" aria-label={`Streak: ${streakCount} ze 3`}>
              {[0, 1, 2].map((i) => (
                <span key={i} className={`text-base leading-none ${i < streakCount ? "scale-110" : "opacity-30"}`}>
                  {i < streakCount ? "⭐" : "☆"}
                </span>
              ))}
            </div>
          ) : (
            <div
              className={`flex items-center gap-1.5 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 ${
                shieldPulse ? "scale-110" : "scale-100"
              }`}
            >
              <span className="text-base leading-none" aria-hidden>
                🛡️
              </span>
              <span className="text-xs font-semibold text-blue-700">Štít aktivní</span>
            </div>
          )}
        </div>
      )}

      {shieldJustSaved && !evaluated && (
        <div className="flex items-center justify-center gap-2 rounded-xl py-2.5 mb-4 text-sm font-semibold bg-blue-50 border border-blue-200 text-blue-700">
          🛡️ Štít tě zachránil! Zkus to znovu.
        </div>
      )}

      {timeRemainingSec != null && (
        <div
          className={`flex items-center justify-center gap-2 rounded-xl py-2.5 mb-4 text-sm font-semibold border ${
            timeRemainingSec <= 300
              ? "bg-red-50 border-red-200 text-red-600"
              : "bg-zinc-100 border-zinc-200 text-zinc-700"
          }`}
        >
          <span aria-hidden>⏱</span>
          Zbývá čas: {formatClock(timeRemainingSec)}
        </div>
      )}

      <div className="h-1.5 bg-zinc-200/80 rounded-full overflow-hidden mb-5">
        <div className="h-full bg-blue-600 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      {banner && <p className="text-xs font-semibold text-indigo-200 mb-3">{banner}</p>}

      <WorkingSource text={question.workingText} light />

      <p suppressHydrationWarning className="text-lg font-semibold text-white leading-snug mb-4">
        {question.prompt}
      </p>

      {!showHint && !evaluated && (
        <button
          type="button"
          onClick={() => setShowHint(true)}
          className="text-xs font-medium text-indigo-200 underline decoration-dashed underline-offset-2 hover:text-white mb-4 self-start"
        >
          💡 Potřebuješ nápovědu?
        </button>
      )}
      {showHint && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 mb-4">
          <p className="text-sm text-amber-800 italic leading-relaxed">{question.friendlyHint}</p>
        </div>
      )}

      {open ? (
        <>
          <input
            type="text"
            inputMode="decimal"
            disabled={evaluated}
            value={answerInput}
            onChange={(e) => setAnswerInput(e.target.value)}
            placeholder="Odpověď"
            className="w-full rounded-xl px-4 py-3 text-base font-semibold mb-4 bg-white text-zinc-800 border border-zinc-200 focus:outline-none"
          />
          {!evaluated && (
            <button
              type="button"
              onClick={onCheck}
              disabled={!answerInput.trim()}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white font-semibold text-sm py-3 rounded-xl mb-4"
            >
              Zkontrolovat
            </button>
          )}
        </>
      ) : (
        <div className="flex flex-col gap-2.5">
          {question.options.map((opt, i) => {
            const state = optionState(i);
            const eliminated = eliminatedOptions.includes(i);
            const dim = evaluated && state !== "correct" && state !== "wrong";
            return (
              <button
                key={i}
                type="button"
                disabled={evaluated || eliminated}
                onClick={() => onPickOption(i)}
                className={`w-full flex items-center gap-3 text-left rounded-xl border px-4 py-3 transition-all ${
                  state === "correct"
                    ? "bg-green-50 border-green-300"
                    : state === "wrong"
                      ? "bg-red-50 border-red-300"
                      : "bg-white border-zinc-200 hover:border-zinc-300 active:scale-95"
                } ${dim ? "opacity-40" : ""} ${evaluated || eliminated ? "cursor-default" : "cursor-pointer"}`}
              >
                <span
                  className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs font-semibold flex-shrink-0 ${
                    state === "correct"
                      ? "border-green-400 text-green-700"
                      : state === "wrong"
                        ? "border-red-400 text-red-700"
                        : "border-zinc-300 text-zinc-600"
                  }`}
                >
                  {LETTERS[i] ?? i + 1}
                </span>
                <span className="text-sm text-zinc-800 flex-1">{opt}</span>
                {state === "correct" && <span className="text-green-500 font-bold">✓</span>}
                {state === "wrong" && <span className="text-red-500 font-bold">✕</span>}
              </button>
            );
          })}
        </div>
      )}

      {evaluated && (
        <div
          className={`rounded-xl border p-4 mt-4 ${
            isCorrect ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
          }`}
        >
          <div className="flex items-center flex-wrap gap-2 mb-1">
            <p className={`text-base font-semibold ${isCorrect ? "text-green-700" : "text-red-700"}`}>
              {isCorrect ? "Správně!" : "Chyba."}
            </p>
            {lastPointsEarned != null && (
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  lastPointsEarned > 0
                    ? "bg-green-100 text-green-700"
                    : lastPointsEarned < 0
                      ? "bg-red-100 text-red-700"
                      : "bg-zinc-100 text-zinc-500"
                }`}
              >
                {lastPointsEarned > 0 ? `+${lastPointsEarned}` : lastPointsEarned}{" "}
                {Math.abs(lastPointsEarned) === 1 ? "bod" : Math.abs(lastPointsEarned) === 2 ? "body" : "bodů"}
              </span>
            )}
          </div>
          {lastPointsEarned === 1 && (
            <p className="text-xs italic text-zinc-500 mb-2">Použil(a) jsi nápovědu, proto jen 1 bod.</p>
          )}
          {lastPointsEarned === -1 && (
            <p className="text-xs italic text-zinc-500 mb-2">Penalizace: dvě špatné odpovědi za sebou.</p>
          )}
          <p className="text-sm text-zinc-700 leading-relaxed mb-4">{question.explanation}</p>
          <button
            type="button"
            onClick={onNext}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-3 rounded-xl"
          >
            {nextLabel ?? (index < total - 1 ? "Další otázka" : "Dokončit test")}
          </button>
        </div>
      )}
    </div>
  );
}
