"use client";

import { COSMIC_BG_STYLE } from "@/lib/cosmicBg";
import { getTrophy } from "@/lib/velkyTestRules";

export function Result({
  lastPct,
  correctCount,
  total,
  wrongCount,
  onDrillMistakes,
  onBack,
  drillLabel,
  score,
  maxScore,
  usePointsPct = false,
  mistakeCategories,
  timeExpired,
  unanswered,
  onRepeat,
  backLabel,
}: {
  lastPct: number;
  correctCount: number;
  total: number;
  wrongCount: number;
  onDrillMistakes?: () => void;
  onBack: () => void;
  drillLabel?: string;
  score?: number;
  maxScore?: number;
  usePointsPct?: boolean;
  mistakeCategories?: { name: string; count: number }[];
  timeExpired?: boolean;
  unanswered?: number;
  onRepeat?: () => void;
  backLabel?: string;
}) {
  const trophy = getTrophy(lastPct);
  const safeScore = Math.max(0, score ?? 0);

  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center gap-5 py-6 px-5" style={COSMIC_BG_STYLE}>
      <h2 className="text-xl font-semibold text-white">Konec testu</h2>

      {trophy.emoji ? (
        <div>
          <span className="text-5xl leading-none">{trophy.emoji}</span>
          <p className={`text-base font-semibold mt-2 ${trophy.tone}`}>{trophy.label}</p>
        </div>
      ) : (
        <p className={`text-sm italic max-w-xs leading-relaxed ${trophy.tone}`}>{trophy.label}</p>
      )}

      <div
        className={`w-28 h-28 rounded-full border-4 flex flex-col items-center justify-center ${
          lastPct >= 70 ? "border-green-500" : "border-red-400"
        }`}
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">úspěšnost</p>
        <p className="text-2xl font-bold text-white">{Math.round(lastPct)}%</p>
      </div>

      <p className="text-xs text-zinc-400">
        {correctCount}/{total} správně
        {maxScore != null ? ` · ${safeScore} z max. ${maxScore} bodů` : ""}
      </p>
      {usePointsPct && (
        <p className="text-[11px] text-indigo-200/60 -mt-3">Procenta u tohoto testu počítáme z bodů.</p>
      )}

      {wrongCount > 0 ? (
        <div className="w-full max-w-sm rounded-xl border border-white/15 bg-white/5 px-3.5 py-3 text-left">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-indigo-300/80 mb-1.5">
            V tomto testu
          </p>
          <p className="text-sm font-semibold text-white mb-1">
            {wrongCount} {wrongCount === 1 ? "chyba" : wrongCount < 5 ? "chyby" : "chyb"}
          </p>
          {mistakeCategories && mistakeCategories.length > 0 && (
            <p className="text-[11px] text-indigo-200/80 leading-relaxed">
              {mistakeCategories.map((row) => `${row.name} ${row.count}`).join(" · ")}
            </p>
          )}
        </div>
      ) : (
        <p className="text-xs text-emerald-300/90 max-w-xs leading-relaxed">Bez chyb v tomto běhu — výborně.</p>
      )}

      {timeExpired && unanswered != null && unanswered > 0 && (
        <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2 max-w-xs leading-relaxed">
          ⏰ Čas vypršel – {unanswered}{" "}
          {unanswered === 1 ? "otázka zůstala nezodpovězena" : "otázek zůstalo nezodpovězeno"} a byla
          započítána za 0 bodů.
        </p>
      )}

      <div className="w-full flex flex-col gap-2.5 mt-1">
        {onDrillMistakes && (
          <button
            type="button"
            onClick={onDrillMistakes}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-3 rounded-xl"
          >
            {drillLabel ?? (wrongCount > 0 ? "Procvičit tyto chyby" : "Procvičit zbývající chyby")}
          </button>
        )}
        {onRepeat && (
          <button
            type="button"
            onClick={onRepeat}
            className={`w-full font-semibold text-sm py-3 rounded-xl ${
              onDrillMistakes
                ? "bg-white/10 hover:bg-white/15 border border-white/20 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            Opakovat stejný test
          </button>
        )}
        <button
          type="button"
          onClick={onBack}
          className="w-full bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-700 font-semibold text-sm py-3 rounded-xl"
        >
          {backLabel ?? "Zpět na výběr kategorií"}
        </button>
      </div>
    </div>
  );
}
