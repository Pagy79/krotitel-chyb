"use client";

import { useEffect, useState } from "react";
import { CompassKey } from "@/components/CompassKey";
import { WelcomeFeatureBanners } from "@/components/WelcomeFeatureBanners";
import { WelcomeFormulas } from "@/components/WelcomeFormulas";
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
        backgroundColor: "#0a0818",
        backgroundImage:
          "linear-gradient(180deg, rgba(8,6,22,0.28) 0%, rgba(8,6,22,0.48) 100%), url(/nebula-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 390 720" preserveAspectRatio="none" aria-hidden="true">
        <g fill="none" stroke="#E8F4F2" strokeWidth="1.6" opacity="0.22">
          <path d="M28 70 h70 M28 70 v70" />
          <path d="M28 130 C48 120 68 40 98 55" />
          <path d="M300 48 l18 28 l22 -12 l14 30 l24 -18" />
          <circle cx="300" cy="48" r="2.5" fill="#E8F4F2" stroke="none" />
          <circle cx="318" cy="76" r="2.5" fill="#E8F4F2" stroke="none" />
          <circle cx="340" cy="64" r="2.5" fill="#E8F4F2" stroke="none" />
          <circle cx="354" cy="94" r="2.5" fill="#E8F4F2" stroke="none" />
          <circle cx="378" cy="76" r="2.5" fill="#E8F4F2" stroke="none" />
        </g>
      </svg>

      <WelcomeFormulas />

      <div className="relative z-10 h-full min-h-0 w-full max-w-lg mx-auto flex flex-col px-5 pt-10 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-8 sm:pt-14">
        <header className="flex-shrink-0 flex flex-col items-center text-center">
          <CompassKey className="w-14 h-14 sm:w-16 sm:h-16 mb-3" />
          <h1 className="text-2xl sm:text-[1.75rem] font-extrabold text-white leading-tight">
            Kompas-Matika
            <br />
            tvoje cesta začíná
          </h1>
          <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed max-w-sm">
            Vítejte v Kompas-Matika. Trénuj, počítej a hraj se s matikou.
          </p>
        </header>

        <div className="flex-1 min-h-4 flex flex-col justify-center py-6">
          <WelcomeFeatureBanners />
        </div>

        <div className="flex-shrink-0 flex flex-col gap-3">
          <button
            type="button"
            onClick={() => setAuthMode("register")}
            className="w-full py-3.5 rounded-2xl font-bold text-base text-center tracking-wide text-white"
            style={{ backgroundColor: "#3F6B4C" }}
          >
            ZAČÍT DOBRODRUŽSTVÍ
          </button>
          <button
            type="button"
            onClick={() => setAuthMode("login")}
            className="w-full py-3.5 rounded-2xl font-bold text-base text-center text-white bg-white/10"
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
