"use client";

import { useEffect, useState } from "react";
import { DEFAULT_WILDNESS } from "@/data/topics";
import { loadTestProgress, saveAttempt, type TestProgress } from "@/lib/attempts";
import type { TopicId } from "@/lib/types";

const EMPTY: TestProgress = {
  lastByTopic: Object.fromEntries(Object.keys(DEFAULT_WILDNESS).map((id) => [id, null])) as Record<
    TopicId,
    number | null
  >,
  fullBestPct: null,
  fullLastPct: null,
};

export function useTestProgress() {
  const [progress, setProgress] = useState<TestProgress>(EMPTY);

  useEffect(() => {
    const wordKey = "krotitel-sim-neznama-47";
    if (!window.localStorage.getItem(wordKey)) {
      saveAttempt({ mode: "practice", category: "neznama", percentage: 47 });
      window.localStorage.setItem(wordKey, "1");
    }
    const geoKey = "krotitel-sim-geometrie-65";
    if (!window.localStorage.getItem(geoKey)) {
      saveAttempt({ mode: "practice", category: "geometrie", percentage: 65 });
      window.localStorage.setItem(geoKey, "1");
    }
    const refresh = () => setProgress(loadTestProgress());
    refresh();
    window.addEventListener("krotitel-attempts", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("krotitel-attempts", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  return progress;
}
