"use client";

import { cloneElement, isValidElement, useEffect, useState, type ReactElement } from "react";
import { useRouter } from "next/navigation";
import { PaywallModal } from "@/components/PaywallModal";
import { COSMIC_BG_STYLE } from "@/lib/cosmicBg";
import { applyEntitlementSnapshot, requestStartBigTest, requestStartPracticeTest } from "@/lib/entitlements";
import { useSession } from "@/hooks/useSession";

export function EntitlementGate({ kind, children }: { kind: "practice" | "big"; children: React.ReactNode }) {
  const router = useRouter();
  const { session, refreshFromServer } = useSession();
  const [attempt, setAttempt] = useState(0);
  const [state, setState] = useState<"loading" | "ok" | "blocked">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    let cancelled = false;
    setState("loading");
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
  }, [kind, attempt]);

  if (state === "loading") {
    return <div className="flex-1 min-h-0" style={COSMIC_BG_STYLE} />;
  }

  if (state === "blocked") {
    return (
      <div className="relative flex-1 min-h-0" style={COSMIC_BG_STYLE}>
        <PaywallModal
          message={message}
          soundEnabled={session.soundHapticsEnabled}
          alreadyPremium={session.isPremium}
          onClose={() => router.push("/svet")}
          onActivated={() => {
            void refreshFromServer();
            setAttempt((n) => n + 1);
          }}
          onRestore={refreshFromServer}
        />
      </div>
    );
  }

  if (kind === "big" && isValidElement(children)) {
    return cloneElement(children as ReactElement<{ onRetake?: () => void }>, {
      key: attempt,
      onRetake: () => setAttempt((n) => n + 1),
    });
  }

  return children;
}
