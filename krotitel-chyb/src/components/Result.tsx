"use client";

import { C } from "@/data/theme";
import { Creature } from "@/components/Creature";
import { pctTone } from "@/lib/attempts";
import type { Topic } from "@/lib/types";

export function Result({
  topic,
  wildness,
  lastPct,
  onBack,
}: {
  topic: Topic;
  wildness: number;
  lastPct: number;
  onBack: () => void;
}) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center p-7" style={{ backgroundColor: C.bg }}>
      <Creature symbol={topic.symbol} wildness={wildness} size={110} />
      <h2 className="text-2xl font-extrabold mt-5 mb-2" style={{ color: pctTone(lastPct) }}>
        {lastPct} %
      </h2>
      <p className="text-sm leading-relaxed mb-8" style={{ color: C.inkDim }}>
        Tohle je výsledek posledního testu. Uvidíš ho i na mapě u tohoto tvora.
      </p>
      <button
        onClick={onBack}
        className="w-full py-4 rounded-2xl font-bold text-base paper-btn"
        style={{ backgroundColor: C.accent, color: "#FFFFFF" }}
      >
        Zpátky ke tvorům
      </button>
    </div>
  );
}
