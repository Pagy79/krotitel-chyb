import { DEFAULT_WILDNESS } from "@/data/topics";
import type { TopicId } from "@/lib/types";

const KEY = "krotitel-attempts-v1";
const LEGACY_BEST_KEY = "krotitel-velky-test-best";

export type AttemptMode = "practice" | "full";

export type TestAttempt = {
  mode: AttemptMode;
  category: TopicId | null;
  percentage: number;
  createdAt: string;
};

export type TestProgress = {
  lastByTopic: Record<TopicId, number | null>;
  fullBestPct: number | null;
  fullLastPct: number | null;
};

function emptyLastByTopic(): Record<TopicId, number | null> {
  return Object.fromEntries(Object.keys(DEFAULT_WILDNESS).map((id) => [id, null])) as Record<
    TopicId,
    number | null
  >;
}

function readAttempts(): TestAttempt[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as TestAttempt[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeAttempts(attempts: TestAttempt[]) {
  localStorage.setItem(KEY, JSON.stringify(attempts.slice(0, 200)));
}

export function saveAttempt(attempt: Omit<TestAttempt, "createdAt">) {
  const row: TestAttempt = { ...attempt, createdAt: new Date().toISOString() };
  writeAttempts([row, ...readAttempts()]);
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("krotitel-attempts"));
  }
}

export function loadTestProgress(): TestProgress {
  const attempts = readAttempts();
  const lastByTopic = emptyLastByTopic();

  for (const topicId of Object.keys(lastByTopic) as TopicId[]) {
    const last = attempts.find((a) => a.mode === "practice" && a.category === topicId);
    if (last) lastByTopic[topicId] = Math.round(last.percentage);
  }

  const full = attempts.filter((a) => a.mode === "full" && Number.isFinite(a.percentage));
  let fullBestPct: number | null = full.length
    ? Math.round(Math.max(...full.map((a) => a.percentage)))
    : null;
  const fullLastPct = full.length ? Math.round(full[0].percentage) : null;

  if (fullBestPct == null && typeof window !== "undefined") {
    try {
      const legacy = localStorage.getItem(LEGACY_BEST_KEY);
      if (legacy) fullBestPct = Number(legacy);
    } catch {
      /* ignore */
    }
  }

  return { lastByTopic, fullBestPct, fullLastPct };
}

export function pctTone(percentage: number | null) {
  if (percentage == null || percentage <= 0) return "#6B6458";
  if (percentage >= 70) return "#059669";
  if (percentage >= 50) return "#FF6B35";
  return "#FF521B";
}
