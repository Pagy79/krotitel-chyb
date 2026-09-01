"use client";

import { TOPICS } from "@/data/topics";
import { C } from "@/data/theme";
import { Creature } from "@/components/Creature";
import { landscapeSrc, landscapeStage } from "@/data/landscapes";
import { pctTone } from "@/lib/attempts";
import type { TopicId, WildnessMap } from "@/lib/types";

function creatureWildness(percentage: number | null, fallback: number) {
  const stage = landscapeStage(percentage);
  if (stage === 4) return 0;
  if (stage === 3) return 0.25;
  if (stage === 2) return 0.55;
  return Math.max(fallback, 0.85);
}

export function WorldMap({
  wildness,
  lastByTopic,
  onPick,
}: {
  wildness: WildnessMap;
  lastByTopic: Record<TopicId, number | null>;
  onPick: (id: TopicId) => void;
}) {
  return (
    <div
      className="rounded-[28px] overflow-hidden mb-5 grid grid-cols-4 flex-shrink-0"
      style={{
        border: "1px solid #E5E0D8",
        boxShadow: C.paperShadow,
        minHeight: 132,
        height: 132,
      }}
    >
      {TOPICS.map((t, i) => {
        const pct = lastByTopic[t.id];
        const src = landscapeSrc(t.id, pct);
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => onPick(t.id)}
            className="relative text-left overflow-hidden border-0 p-0 h-full min-h-[132px]"
            style={{
              borderLeft: i === 0 ? undefined : `1px solid ${C.line}`,
              backgroundColor: "#C9A882",
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-label={`${t.name}: ${pct != null ? `${pct} %` : "zatím bez testu"}`}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-2 pt-1">
              <span
                className="absolute top-1.5 right-1.5 min-w-[2rem] px-1.5 py-0.5 rounded-full text-[10px] font-black text-center tabular-nums"
                style={{
                  backgroundColor: "rgba(255,248,236,0.92)",
                  color: pctTone(pct),
                  boxShadow: "0 1px 4px rgba(42,31,24,0.18)",
                }}
              >
                {pct != null ? `${pct}%` : "—"}
              </span>
              <Creature symbol={t.symbol} wildness={creatureWildness(pct, wildness[t.id])} size={44} />
            </div>
          </button>
        );
      })}
    </div>
  );
}
