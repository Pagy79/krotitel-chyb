"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PaywallModal } from "@/components/PaywallModal";
import { COSMIC_BG_STYLE } from "@/lib/cosmicBg";
import { applyEntitlementSnapshot, requestStartBigTest, requestStartPracticeTest } from "@/lib/entitlements";
import { useSession } from "@/hooks/useSession";

export function EntitlementGate({ kind, children }: { kind: "practice" | "big"; children: React.ReactNode }) {
  const router = useRouter();
  const { refreshFromServer } = useSession();
  const [state, setState] = useState<"loading" | "ok" | "blocked">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const gate = kind === "practice" ? await requestStartPracticeTest() : await requestStartBigTest();
      applyEntitlementSnapshot(gate);
      if (cancelled) return;
      if (!gate.allowed) {
        setMessage(gate.message || "Pro pokračování potřebuješ PREMIUM.");
        setState("blocked");
        return;
      }
      setState("ok");
    })();
    return () => {
      cancelled = true;
    };
  }, [kind]);

  if (state === "loading") {
    return <div className="flex-1 min-h-0" style={COSMIC_BG_STYLE} />;
  }

  if (state === "blocked") {
    return (
      <div className="relative flex-1 min-h-0" style={COSMIC_BG_STYLE}>
        <PaywallModal
          message={message}
          onClose={() => router.push("/svet")}
          onActivated={() => void refreshFromServer()}
          onRestore={refreshFromServer}
        />
      </div>
    );
  }

  return children;
}
