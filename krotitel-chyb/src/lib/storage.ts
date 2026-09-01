import { DEFAULT_WILDNESS } from "@/data/topics";
import type { TopicId, WildnessMap } from "@/lib/types";

const KEY = "krotitel-progress-v1";

export function loadWildness(): WildnessMap {
  if (typeof window === "undefined") return { ...DEFAULT_WILDNESS };
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...DEFAULT_WILDNESS };
    const parsed = JSON.parse(raw) as Partial<WildnessMap>;
    return { ...DEFAULT_WILDNESS, ...parsed };
  } catch {
    return { ...DEFAULT_WILDNESS };
  }
}

export function saveWildness(wildness: WildnessMap) {
  localStorage.setItem(KEY, JSON.stringify(wildness));
}

export function clampWildness(value: number) {
  return Math.max(0, Math.min(1, value));
}

export function tameTopic(wildness: WildnessMap, id: TopicId, amount: number): WildnessMap {
  return { ...wildness, [id]: clampWildness(wildness[id] - amount) };
}

export function fullyTameTopic(wildness: WildnessMap, id: TopicId): WildnessMap {
  return { ...wildness, [id]: 0 };
}

export function fullyTameAll(wildness: WildnessMap): WildnessMap {
  const next = { ...wildness };
  (Object.keys(next) as TopicId[]).forEach((id) => {
    next[id] = 0;
  });
  return next;
}
