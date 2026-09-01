"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { C } from "@/data/theme";
import { signIn } from "@/lib/session";

function GoogleMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden>
      <path fill="#C4A35A" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z" />
      <path fill="#B85C3C" d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 16.3 4 9.6 8.3 6.3 14.7z" />
      <path fill="#5A8F6A" d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#3D3A34" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.3 4.1-4.1 5.5l.1.1 6.3 5.3C39.2 37.3 44 31.5 44 24c0-1.2-.1-2.3-.4-3.5z" />
    </svg>
  );
}

export function AuthPanel({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLogin = mode === "login";

  function goIn(e?: FormEvent, google = false) {
    e?.preventDefault();
    const mail = google ? "google@krotitel.local" : email.trim();
    signIn({ email: mail || "zak@krotitel.local" });
    router.push("/svet");
  }

  return (
    <div className="flex-1 flex flex-col px-7 pt-6 pb-8">
      <div className="flex justify-end mb-2">
        <Link href="/" className="text-xl leading-none px-1" style={{ color: C.inkDim }} aria-label="Zavřít">
          ×
        </Link>
      </div>

      <h1 className="text-[28px] font-extrabold leading-tight" style={{ color: C.ink }}>
        {isLogin ? "Vítej zpátky" : "Vytvoř si účet"}
      </h1>
      <p className="text-sm mt-2 mb-7" style={{ color: C.inkDim }}>
        {isLogin ? "Přihlas se a pokračuj v tréninku." : "Začni trénovat během chvilky."}
      </p>

      <form onSubmit={goIn} className="flex flex-col gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          className="w-full rounded-2xl px-4 py-3.5 text-sm focus:outline-none"
          style={{ backgroundColor: C.card, border: `1.5px solid ${C.line}`, color: C.ink, boxShadow: C.paperShadow }}
        />
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Heslo"
          className="w-full rounded-2xl px-4 py-3.5 text-sm focus:outline-none"
          style={{ backgroundColor: C.card, border: `1.5px solid ${C.line}`, color: C.ink, boxShadow: C.paperShadow }}
        />
        {isLogin && (
          <div className="flex justify-end -mt-1 mb-1">
            <Link href="/zapomenute-heslo" className="text-xs" style={{ color: C.inkDim }}>
              Zapomněl(a) jsi heslo?
            </Link>
          </div>
        )}
        <button
          type="submit"
          className="paper-btn w-full py-3.5 font-bold text-base mt-2"
          style={{ backgroundColor: C.accent, color: "#FFFFFF" }}
        >
          {isLogin ? "Přihlásit" : "Vytvořit účet"}
        </button>
      </form>

      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px" style={{ backgroundColor: C.line }} />
        <span className="text-xs" style={{ color: C.inkDim }}>
          nebo
        </span>
        <div className="flex-1 h-px" style={{ backgroundColor: C.line }} />
      </div>

      <button
        type="button"
        onClick={() => goIn(undefined, true)}
        className="paper-btn-ghost w-full py-3.5 font-semibold text-sm gap-2.5"
        style={{ color: C.ink }}
      >
        <GoogleMark />
        Pokračovat přes Google
      </button>

      <p className="text-center text-sm mt-auto pt-8" style={{ color: C.inkDim }}>
        {isLogin ? (
          <>
            Nemáš účet?{" "}
            <Link href="/registrace" className="font-semibold" style={{ color: C.accentDeep }}>
              Zaregistrovat se
            </Link>
          </>
        ) : (
          <>
            Už máš účet?{" "}
            <Link href="/prihlaseni" className="font-semibold" style={{ color: C.accentDeep }}>
              Přihlásit se
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
