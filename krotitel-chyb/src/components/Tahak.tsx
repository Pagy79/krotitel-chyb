"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { TAHAKY } from "@/data/tahaky";
import { C } from "@/data/theme";
import { TOPICS } from "@/data/topics";
import { Creature } from "@/components/Creature";
import { useProgress } from "@/hooks/useProgress";
import type { TopicId } from "@/lib/types";

export function Tahak({ topicId }: { topicId: TopicId }) {
  const router = useRouter();
  const { wildness } = useProgress();
  const topic = TOPICS.find((t) => t.id === topicId);
  const sheets = TAHAKY[topicId];

  if (!topic) return null;

  return (
    <div className="flex-1 flex flex-col p-6" style={{ backgroundColor: C.bg }}>
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => router.push("/svet")} className="text-sm font-semibold" style={{ color: C.inkDim }}>
          ✕
        </button>
        <span className="text-xs font-bold" style={{ color: C.ink }}>
          Tahák
        </span>
        <Creature symbol={topic.symbol} wildness={wildness[topicId]} size={32} />
      </div>

      <h1 className="text-lg font-extrabold mb-1" style={{ color: C.ink }}>
        {topic.name}
      </h1>
      <p className="text-xs mb-4" style={{ color: C.inkDim }}>
        Pasti, na které tvor nejčastěji skočí. Mrkni, než půjdeš krotit.
      </p>

      <div className="flex flex-col gap-3 flex-1 overflow-auto">
        {sheets.map((s) => (
          <div
            key={s.title}
            className="rounded-[28px] p-4"
            style={{ backgroundColor: "#FFFFFF", border: "1px solid #EFECE6", boxShadow: C.paperShadow }}
          >
            <p className="text-xs font-bold mb-1" style={{ color: C.accentDeep }}>
              {s.title}
            </p>
            <p className="text-xs leading-relaxed mb-2" style={{ color: C.inkDim }}>
              {s.hint}
            </p>
            <p className="text-xs font-semibold" style={{ color: C.ink }}>
              {s.example}
            </p>
          </div>
        ))}
      </div>

      <Link
        href={`/tema/${topicId}`}
        className="paper-btn w-full py-3.5 rounded-2xl font-bold text-sm text-center mt-4"
        style={{ backgroundColor: C.accent, color: "#FFFFFF" }}
      >
        Krotit
      </Link>
    </div>
  );
}
