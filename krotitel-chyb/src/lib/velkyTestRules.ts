export const TEST_QUESTION_COUNT = 20;
export const VELKY_TEST_MINUTES = 30;
export const VELKY_TEST_QUESTION_COUNT = TEST_QUESTION_COUNT;
export const BLOOM_PCT = 70;

export function formatClock(totalSeconds: number) {
  const clamped = Math.max(0, totalSeconds);
  const m = Math.floor(clamped / 60);
  const s = clamped % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function getTrophy(percentage: number) {
  if (percentage >= 90) return { emoji: "🏆", label: "Zlatý pohár" };
  if (percentage >= 80) return { emoji: "🥈", label: "Stříbrný pohár" };
  if (percentage >= 70) return { emoji: "🥉", label: "Bronzový pohár" };
  return {
    emoji: null as string | null,
    label: "Ještě to není pohár — zkus to znovu, tvorové počkají.",
  };
}
