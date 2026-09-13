"use client";

import { useEffect, useState } from "react";
import { ConfettiBurst } from "@/components/ConfettiBurst";
import { onPremiumCelebrate } from "@/lib/cosmicSounds";

export function PremiumCelebrateHost() {
  const [burstKey, setBurstKey] = useState(0);

  useEffect(() => onPremiumCelebrate(() => setBurstKey((n) => n + 1)), []);

  return <ConfettiBurst key={burstKey} active={burstKey > 0} durationMs={3200} />;
}
