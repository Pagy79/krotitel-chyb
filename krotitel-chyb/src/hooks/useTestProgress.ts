"use client";

import { useEffect, useState } from "react";
import { DEFAULT_WILDNESS } from "@/data/topics";
import { loadProgressMerged, loadTestProgress, type TestProgress } from "@/lib/attempts";
import { SESSION_EVENT } from "@/lib/session";
import type { TopicId } from "@/lib/types";

const EMPTY: TestProgress = {
  lastByTopic: Object.fromEntries(Object.keys(DEFAULT_WILDNESS).map((id) => [id, null])) as Record<
    TopicId,
    number | null
  >,
  fullBestPct: null,
  fullLastPct: null,
  categoryStats: {},
  weakestArea: null,
  mistakeQuestionIds: [],
  hasPractice: false,
};

export function useTestProgress() {
  const [progress, setProgress] = useState<TestProgress>(EMPTY);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const refresh = () => {
      setProgress(loadTestProgress());
      setReady(true);
      void loadProgressMerged().then((next) => setProgress(next));
    };
    refresh();
    window.addEventListener("krotitel-attempts", refresh);
    window.addEventListener("storage", refresh);
    window.addEventListener(SESSION_EVENT, refresh);
    return () => {
      window.removeEventListener("krotitel-attempts", refresh);
      window.removeEventListener("storage", refresh);
      window.removeEventListener(SESSION_EVENT, refresh);
    };
  }, []);

  return { ...progress, ready };
}
