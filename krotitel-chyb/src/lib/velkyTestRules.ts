export const TEST_QUESTION_COUNT = 20;
export const MISTAKES_QUIZ_LENGTH = 20;
export const VELKY_TEST_MINUTES = 30;
export const VELKY_TEST_QUESTION_COUNT = TEST_QUESTION_COUNT;
export const BLOOM_PCT = 70;
export const STREAK_FOR_SHIELD = 3;

export function formatClock(totalSeconds: number) {
  const clamped = Math.max(0, totalSeconds);
  const m = Math.floor(clamped / 60);
  const s = clamped % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function getTrophy(percentage: number) {
  if (percentage >= 90) return { emoji: "🏆", label: "Zlatý pohár", tone: "text-amber-500" };
  if (percentage >= 80) return { emoji: "🥈", label: "Stříbrný pohár", tone: "text-zinc-400" };
  if (percentage >= 70) return { emoji: "🥉", label: "Bronzový pohár", tone: "text-orange-400" };
  return {
    emoji: null as string | null,
    label: "Není to špatné, ale chce to víc testovat a učit se.",
    tone: "text-zinc-400",
  };
}
