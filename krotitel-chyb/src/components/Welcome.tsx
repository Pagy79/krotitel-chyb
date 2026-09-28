"use client";

import { useEffect, useState } from "react";
import { WelcomeFeatureBanners } from "@/components/WelcomeFeatureBanners";
import { AuthModal, type AuthModalMode } from "@/components/AuthModal";

export function Welcome({ initialAuth }: { initialAuth?: AuthModalMode }) {
  const [authMode, setAuthMode] = useState<AuthModalMode | null>(initialAuth ?? null);

  useEffect(() => {
    const auth = new URLSearchParams(window.location.search).get("auth");
    if (auth === "login" || auth === "register" || auth === "forgot" || auth === "reset") {
      setAuthMode(auth);
    }
  }, []);

  return (
    <div
      className="relative flex-1 min-h-0 flex flex-col overflow-hidden"
      style={{
        backgroundColor: "#07110d",
        backgroundImage:
          "linear-gradient(180deg, rgba(7,17,13,0.05) 18%, rgba(7,17,13,0.38) 52%, rgba(7,17,13,0.72) 100%), url(/welcome-hero.png)",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 h-full min-h-0 w-full max-w-[26rem] mx-auto flex flex-col px-5 overflow-y-auto app-hide-scrollbar">
        <div className="shrink-0" style={{ height: "clamp(5.75rem, 26svh, 10.5rem)" }} aria-hidden="true" />

        <header className="flex-shrink-0 flex flex-col items-center text-center px-1">
          <h1
            className="text-[1.85rem] leading-[1.15] font-extrabold text-white"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.65)" }}
          >
            Kompas na školu – Matika
          </h1>
          <p
            className="mt-2.5 text-sm text-white/90 leading-relaxed max-w-[20rem]"
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.55)" }}
          >
            Trénuj matematiku, získej vědomosti a ukaž všem, jak na tom jsi.
          </p>
        </header>

        <div className="mt-4 flex-shrink-0">
          <WelcomeFeatureBanners />
        </div>

        <div className="mt-4 mb-[max(1rem,env(safe-area-inset-bottom))] flex-shrink-0 flex flex-col gap-3">
          <button
            type="button"
            onClick={() => setAuthMode("register")}
            className="w-full py-3.5 rounded-full font-bold text-base text-center tracking-wide text-white"
            style={{ backgroundColor: "#3F6B4C" }}
          >
            ZAČÍT HNED
          </button>
          <button
            type="button"
            onClick={() => setAuthMode("login")}
            className="w-full py-3.5 rounded-full font-bold text-base text-center text-white border border-white/70 bg-transparent"
          >
            Již máš účet? Přihlásit se
          </button>
        </div>
      </div>

      {authMode && (
        <AuthModal mode={authMode} onModeChange={setAuthMode} onClose={() => setAuthMode(null)} />
      )}
    </div>
  );
}
