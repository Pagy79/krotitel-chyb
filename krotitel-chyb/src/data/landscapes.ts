import type { TopicId } from "@/lib/types";

export type LandscapeStage = 1 | 2 | 3 | 4;

/** 4 obrázky krajiny na sektor: 1 zdivočelá … 4 rozkvetlá */
export const LANDSCAPE_IMAGES: Record<TopicId, readonly [string, string, string, string]> = {
  procenta: [
    "/krajina/procenta/1.svg",
    "/krajina/procenta/2.svg",
    "/krajina/procenta/3.svg",
    "/krajina/procenta/4.svg",
  ],
  vyrazy: [
    "/krajina/vyrazy/1.svg",
    "/krajina/vyrazy/2.svg",
    "/krajina/vyrazy/3.svg",
    "/krajina/vyrazy/4.svg",
  ],
  neznama: [
    "/krajina/neznama/1.svg",
    "/krajina/neznama/2.svg",
    "/krajina/neznama/3.svg",
    "/krajina/neznama/4.svg",
  ],
  geometrie: [
    "/krajina/geometrie/1.svg",
    "/krajina/geometrie/2.svg",
    "/krajina/geometrie/3.svg",
    "/krajina/geometrie/4.svg",
  ],
};

export function landscapeStage(percentage: number | null): LandscapeStage {
  const p = percentage ?? 0;
  if (p <= 40) return 1;
  if (p <= 60) return 2;
  if (p <= 80) return 3;
  return 4;
}

export function landscapeSrc(topicId: TopicId, percentage: number | null): string {
  const stage = landscapeStage(percentage);
  return LANDSCAPE_IMAGES[topicId][stage - 1];
}
