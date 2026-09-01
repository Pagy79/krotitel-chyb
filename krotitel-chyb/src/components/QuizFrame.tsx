"use client";

import type { ReactNode } from "react";
import { Creature } from "@/components/Creature";
import { TopicScene } from "@/components/TopicScene";
import { MIX_THEME, TOPIC_THEMES, type TopicTheme } from "@/data/topicThemes";
import type { Topic } from "@/lib/types";

export function QuizFrame({
  topic,
  mix,
  step,
  total,
  lastPct,
  onClose,
  extras,
  children,
}: {
  topic: Topic;
  mix?: boolean;
  step: number;
  total: number;
  lastPct: number | null;
  onClose: () => void;
  extras?: ReactNode;
  children: ReactNode;
}) {
  const theme: TopicTheme = mix ? MIX_THEME : TOPIC_THEMES[topic.id];
  const quizPct = total > 0 ? Math.round((step / total) * 100) : 0;
  const tameLabel = lastPct != null ? lastPct : 0;

  return (
    <div className="flex-1 flex flex-col min-h-0" style={{ backgroundColor: theme.canvas }}>
      <div className="px-4 pt-4 pb-2" style={{ backgroundColor: theme.header }}>
        <div className="flex items-center justify-between mb-2">
          <button onClick={onClose} className="text-sm font-bold" style={{ color: theme.title }}>
            ✕
          </button>
          <p className="text-[11px] font-black tracking-widest uppercase" style={{ color: theme.title }}>
            {mix ? "Velký test" : topic.name}
          </p>
          <span className="text-[11px] font-bold tabular-nums" style={{ color: theme.title }}>
            {step}/{total}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0"
            style={{ backgroundColor: theme.chip, boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }}
          >
            <Creature symbol={topic.symbol} wildness={0.35} size={34} />
          </div>
          <div className="flex-1 h-3 rounded-full overflow-hidden" style={{ backgroundColor: theme.barTrack }}>
            <div className="h-full rounded-full transition-all" style={{ width: `${quizPct}%`, backgroundColor: theme.bar }} />
          </div>
        </div>
        {extras}
      </div>

      <div className="relative flex-1 min-h-0 overflow-hidden">
        <div className="absolute inset-0">
          <TopicScene topicId={topic.id} symbol={topic.symbol} wildness={0.4} />
        </div>
      </div>

      <div className="rounded-t-3xl px-4 pt-4 pb-3" style={{ backgroundColor: theme.panel, color: theme.panelText }}>
        {children}
        <div className="mt-3">
          <p className="text-[11px] font-bold" style={{ color: theme.panelMuted }}>
            Zkroceno: {lastPct != null ? `${tameLabel}%` : "—"}
          </p>
          <div className="mt-1 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: mix ? "rgba(255,255,255,0.15)" : `${theme.bar}22` }}>
            <div className="h-full rounded-full" style={{ width: `${tameLabel}%`, backgroundColor: theme.bar }} />
          </div>
        </div>
      </div>
    </div>
  );
}
