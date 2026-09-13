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
      className="relative flex-1 min-h-0 sm:min-h-[51rem] sm:flex-none flex flex-col overflow-hidden"
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

      <div className="relative z-10 min-h-full sm:min-h-[51rem] flex flex-col p-5 sm:p-6">
        <div className="relative flex-1 min-h-3 overflow-hidden" aria-hidden="true">
          <WelcomeFormulas />
        </div>

        <div className="flex flex-col items-center text-center flex-shrink-0 mb-4">
          <CompassKey className="w-12 h-12 min-[390px]:w-14 min-[390px]:h-14 mb-2" />
          <h1 className="text-xl min-[390px]:text-2xl font-extrabold text-white leading-snug">
            Kompas na školu:
            <br />
            tvoje cesta začíná
          </h1>
          <p className="mt-2 text-sm text-white/80 leading-relaxed px-1 max-w-sm">
            Vítejte v Kompas na školu — modul Matematika. Trénuj, počítej a hraj se s matikou.
          </p>
        </div>

        <div className="flex flex-col pb-4 flex-shrink-0 w-full">
          <WelcomeFeatureBanners />
        </div>

        <div className="flex flex-col items-center gap-3 pb-2 flex-shrink-0">
          <button
            type="button"
            onClick={() => setAuthMode("register")}
            className="paper-btn w-full py-3.5 rounded-2xl font-bold text-base text-center tracking-wide text-white"
            style={{ backgroundColor: "#3F6B4C" }}
          >
            ZAČÍT DOBRODRUŽSTVÍ
          </button>
          <button
            type="button"
            onClick={() => setAuthMode("login")}
            className="paper-btn-ghost w-full py-3.5 rounded-2xl font-bold text-base text-center"
            style={{
              backgroundColor: "rgba(255, 253, 247, 0.12)",
              borderColor: "rgba(255, 253, 247, 0.4)",
              color: "#FFFFFF",
            }}
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
