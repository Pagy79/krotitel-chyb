"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AUTH_GLASS_STYLE, COSMIC_BUTTON_SHADOW } from "@/lib/cosmicBg";
import {
  isSupabaseConfigured,
  requestPasswordReset,
  signInWithEmail,
  signInWithGoogle,
  signUpWithEmail,
  updatePassword,
} from "@/lib/auth";

export type AuthModalMode = "login" | "register" | "forgot" | "reset";

function GoogleMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden>
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.3 4.1-4.1 5.5l.1.1 6.3 5.3C39.2 37.3 44 31.5 44 24c0-1.2-.1-2.3-.4-3.5z"
      />
    </svg>
  );
}

export function AuthModal({
  mode,
  onModeChange,
  onClose,
}: {
  mode: AuthModalMode;
  onModeChange: (mode: AuthModalMode) => void;
  onClose: () => void;
}) {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const title =
    mode === "register"
      ? "Vytvoř si účet"
      : mode === "forgot"
        ? "Obnova hesla"
        : mode === "reset"
          ? "Nové heslo"
          : "Vítej zpátky";
  const subtitle =
    mode === "register"
      ? "Začni trénovat během chvilky."
      : mode === "forgot"
        ? "Pošleme ti odkaz na e-mail pro nastavení nového hesla."
        : mode === "reset"
          ? "Zadej nové heslo (min. 6 znaků)."
          : "Přihlas se a pokračuj v tréninku.";

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setInfo(null);
    if (!isSupabaseConfigured()) {
      setError("Supabase ještě není nastavené. Doplň URL a klíč v .env.local.");
      return;
    }
    setBusy(true);
    if (mode === "forgot") {
      const result = await requestPasswordReset(email.trim());
      setBusy(false);
      if (result.error) {
        setError(result.error);
        return;
      }
      setInfo("Když účet existuje, poslali jsme odkaz. Zkontroluj i spam.");
      return;
    }
    if (mode === "reset") {
      if (password !== passwordConfirm) {
        setBusy(false);
        setError("Hesla se neshodují.");
        return;
      }
      const result = await updatePassword(password);
      setBusy(false);
      if (result.error) {
        setError(result.error);
        return;
      }
      router.push("/svet");
      return;
    }
    const result =
      mode === "register"
        ? await signUpWithEmail(email.trim(), password)
        : await signInWithEmail(email.trim(), password);
    setBusy(false);
    if (result.error) {
      if ("needsConfirm" in result && result.needsConfirm) {
        setInfo(result.error);
        return;
      }
      setError(result.error);
      return;
    }
    router.push("/svet");
  }

  async function onGoogle() {
    setError(null);
    setInfo(null);
    if (!isSupabaseConfigured()) {
      setError("Supabase ještě není nastavené. Doplň URL a klíč v .env.local.");
      return;
    }
    setBusy(true);
    const result = await signInWithGoogle();
    if (result.error) {
      setBusy(false);
      setError(result.error);
    }
  }

  const inputClass =
    "w-full rounded-xl px-4 py-3 text-sm text-white placeholder-indigo-300/50 border focus:outline-none focus:border-indigo-400 transition-colors";
  const inputStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    borderColor: "rgba(255, 255, 255, 0.15)",
  };

  return (
    <div className="absolute inset-0 z-50 flex items-end sm:items-center justify-center overflow-hidden">
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
        onClick={mode === "reset" ? undefined : onClose}
      />
      <div
        className={`relative w-full backdrop-blur-xl border rounded-t-3xl sm:rounded-3xl p-6 transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
        }`}
        style={AUTH_GLASS_STYLE}
      >
        {mode !== "reset" && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Zavřít"
            className="absolute right-4 top-4 w-8 h-8 rounded-full flex items-center justify-center text-indigo-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            ×
          </button>
        )}

        <h2 className="text-lg font-bold text-white mb-1 pr-8">{title}</h2>
        <p className="text-xs text-indigo-200/70 mb-5">{subtitle}</p>

        <form onSubmit={onSubmit} className="flex flex-col gap-3 mb-5">
          {mode !== "reset" && (
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              className={inputClass}
              style={inputStyle}
            />
          )}
          {(mode === "register" || mode === "login" || mode === "reset") && (
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={mode === "reset" ? "Nové heslo" : "Heslo"}
              className={inputClass}
              style={inputStyle}
            />
          )}
          {mode === "reset" && (
            <input
              type="password"
              required
              minLength={6}
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              placeholder="Nové heslo znovu"
              className={inputClass}
              style={inputStyle}
            />
          )}
          {mode === "login" && (
            <button
              type="button"
              onClick={() => {
                onModeChange("forgot");
                setError(null);
                setInfo(null);
                setPassword("");
              }}
              className="self-end text-xs font-medium text-indigo-300 hover:text-white transition-colors -mt-1"
            >
              Zapomněl(a) jsi heslo?
            </button>
          )}
          {error && <p className="text-xs text-red-400">{error}</p>}
          {info && <p className="text-xs text-emerald-300 leading-relaxed">{info}</p>}
          <button
            type="submit"
            disabled={busy}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm py-3 rounded-xl transition-all active:scale-95 mt-1 disabled:opacity-60 disabled:active:scale-100"
            style={COSMIC_BUTTON_SHADOW}
          >
            {busy
              ? "Chvilku…"
              : mode === "register"
                ? "Vytvořit účet"
                : mode === "forgot"
                  ? "Poslat odkaz e-mailem"
                  : mode === "reset"
                    ? "Uložit nové heslo"
                    : "Přihlásit"}
          </button>
        </form>

        {mode !== "forgot" && mode !== "reset" && (
          <>
            <div className="flex items-center gap-3 mb-5">
              <span className="flex-1 h-px bg-white/10" />
              <span className="text-xs text-indigo-300/70 whitespace-nowrap">nebo</span>
              <span className="flex-1 h-px bg-white/10" />
            </div>
            <button
              type="button"
              onClick={() => void onGoogle()}
              disabled={busy}
              className="w-full flex items-center justify-center gap-2 bg-white text-zinc-800 font-semibold text-sm py-3 rounded-xl border border-white/20 hover:bg-zinc-100 transition-colors active:scale-95 disabled:opacity-60 mb-1"
            >
              <GoogleMark />
              Pokračovat přes Google
            </button>
          </>
        )}

        {mode === "forgot" ? (
          <button
            type="button"
            onClick={() => {
              onModeChange("login");
              setError(null);
              setInfo(null);
            }}
            className="w-full text-center text-xs font-medium text-indigo-300 hover:text-white mt-4 transition-colors"
          >
            Zpět na přihlášení
          </button>
        ) : mode === "reset" ? null : (
          <button
            type="button"
            onClick={() => {
              onModeChange(mode === "register" ? "login" : "register");
              setError(null);
              setInfo(null);
            }}
            className="w-full text-center text-xs font-medium text-indigo-300 hover:text-white mt-4 transition-colors"
          >
            {mode === "register" ? "Už máš účet? Přihlásit se" : "Nemáš účet? Zaregistrovat se"}
          </button>
        )}
      </div>
    </div>
  );
}
