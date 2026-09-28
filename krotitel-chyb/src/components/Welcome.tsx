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
          "linear-gradient(180deg, rgba(7,17,13,0) 0%, rgba(7,17,13,0.12) 36%, rgba(7,17,13,0.62) 100%), url(/welcome-hero.png)",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 h-full min-h-0 w-full max-w-lg mx-auto flex flex-col px-5 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-8">
        <div className="shrink-0 w-full" style={{ height: "clamp(17rem, 44svh, 26rem)" }} aria-hidden="true" />

        <header className="flex-shrink-0 flex flex-col items-center text-center">
          <h1
            className="text-[1.45rem] sm:text-[1.75rem] font-extrabold text-white leading-tight"
            style={{ textShadow: "0 2px 18px rgba(0,0,0,0.55)" }}
          >
            Kompas na školu
            <span className="block mt-0.5">– Matika</span>
          </h1>
          <p
            className="mt-1.5 text-base sm:text-lg font-semibold text-[#E8D5A3] leading-snug"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
          >
            tvoje cesta začíná
          </p>
          <p className="mt-3 text-sm text-white/85 leading-relaxed max-w-sm">
            Naviguj se matematikou ke přijímačkám. Trénuj příklady, drž kurz a přistávej jistěji.
          </p>
        </header>

        <div className="mt-5 flex-1 min-h-0 overflow-y-auto app-hide-scrollbar">
          <WelcomeFeatureBanners />
        </div>

        <div className="mt-4 flex-shrink-0 flex flex-col gap-3">
          <button
            type="button"
            onClick={() => setAuthMode("register")}
            className="w-full py-3.5 rounded-2xl font-bold text-base text-center tracking-wide text-white"
            style={{ backgroundColor: "#3F6B4C", boxShadow: "0 8px 22px rgba(20, 40, 28, 0.45)" }}
          >
            ZAČÍT DOBRODRUŽSTVÍ
          </button>
          <button
            type="button"
            onClick={() => setAuthMode("login")}
            className="w-full py-3.5 rounded-2xl font-bold text-base text-center text-[#F3E6C4]"
            style={{ backgroundColor: "rgba(8, 16, 14, 0.42)" }}
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
