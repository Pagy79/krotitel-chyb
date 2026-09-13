import type { ComponentType } from "react";
import type { TopicId } from "@/lib/types";

const iconBase = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IconPercent({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...iconBase} aria-hidden>
      <circle cx="7.2" cy="7.2" r="2.4" />
      <circle cx="16.8" cy="16.8" r="2.4" />
      <path d="M18.2 5.8 5.8 18.2" />
    </svg>
  );
}

function IconEquation({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...iconBase} aria-hidden>
      <path d="M5 8.2 8.4 16l2.2-5.2 1.6 3.6H16" />
      <path d="M16.6 10.2h3.8M16.6 13.8h3.8" />
    </svg>
  );
}

function IconUnknownX({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...iconBase} aria-hidden>
      <path d="M4 6.2h16v9.2H9.2L5 19.2v-3.8H4V6.2Z" />
      <path d="M9.4 9.4 14.6 14.6M14.6 9.4 9.4 14.6" />
    </svg>
  );
}

function IconTriangle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...iconBase} aria-hidden>
      <path d="M4 20 12 4l8 16Z" />
      <path d="M8.5 14h9" />
    </svg>
  );
}

const TOPIC_ICON: Record<TopicId, ComponentType<{ className?: string }>> = {
  procenta: IconPercent,
  vyrazy: IconEquation,
  neznama: IconUnknownX,
  geometrie: IconTriangle,
};

const TOPIC_BADGE: Record<TopicId, string> = {
  procenta: "bg-rose-50 text-rose-500",
  vyrazy: "bg-pink-50 text-pink-500",
  neznama: "bg-violet-50 text-violet-500",
  geometrie: "bg-amber-50 text-amber-500",
};

export function TopicIconBadge({ topicId, className = "" }: { topicId: TopicId; className?: string }) {
  const Icon = TOPIC_ICON[topicId];
  return (
    <div
      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${TOPIC_BADGE[topicId]} ${className}`}
    >
      <Icon className="w-4 h-4" />
    </div>
  );
}
