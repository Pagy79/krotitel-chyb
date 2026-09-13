import { Suspense } from "react";
import { MistakesSession } from "@/components/MistakesSession";
import { COSMIC_BG_STYLE } from "@/lib/cosmicBg";

export default function ChybyPage() {
  return (
    <Suspense fallback={<div className="flex-1" style={COSMIC_BG_STYLE} />}>
      <MistakesSession />
    </Suspense>
  );
}
