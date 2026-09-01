"use client";

import { useCallback, useEffect, useState } from "react";
import { TAME_STEP } from "@/data/theme";
import { DEFAULT_WILDNESS } from "@/data/topics";
import { loadWildness, saveWildness, tameTopic, fullyTameTopic, fullyTameAll } from "@/lib/storage";
import type { TopicId, WildnessMap } from "@/lib/types";

export function useProgress() {
  const [wildness, setWildness] = useState<WildnessMap>(DEFAULT_WILDNESS);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setWildness(loadWildness());
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) saveWildness(wildness);
  }, [wildness, ready]);

  const tame = useCallback((id: TopicId, amount = TAME_STEP) => {
    setWildness((w) => tameTopic(w, id, amount));
  }, []);

  const bloomTopic = useCallback((id: TopicId) => {
    setWildness((w) => fullyTameTopic(w, id));
  }, []);

  const bloomAll = useCallback(() => {
    setWildness((w) => fullyTameAll(w));
  }, []);

  return { wildness, tame, bloomTopic, bloomAll, ready };
}
