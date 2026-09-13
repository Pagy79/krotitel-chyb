"use client";

import { useEffect, useState } from "react";
import { CompassKey } from "@/components/CompassKey";
import { HelpSheet } from "@/components/HelpSheet";
import { LegalSheet } from "@/components/LegalSheet";
import { SETTINGS_GLASS_STYLE } from "@/lib/cosmicBg";
import { celebratePremium } from "@/lib/cosmicSounds";
import { PRIVACY_POLICY, TERMS_OF_USE } from "@/lib/legal";
import type { Session } from "@/lib/session";

function IconSettings({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 13a7.6 7.6 0 0 0 0-2l2-1.5-2-3.4-2.3.9a7.7 7.7 0 0 0-1.7-1L15 3.6h-4l-.4 2.4a7.7 7.7 0 0 0-1.7 1l-2.3-.9-2 3.4L6.6 11a7.6 7.6 0 0 0 0 2l-2 1.5 2 3.4 2.3-.9c.5.4 1.1.8 1.7 1l.4 2.4h4l.4-2.4c.6-.2 1.2-.6 1.7-1l2.3.9 2-3.4-2-1.5Z" />
    </svg>
  );
}

function IconLogout({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 21H5.5A1.5 1.5 0 0 1 4 19.5v-15A1.5 1.5 0 0 1 5.5 3H9" />
      <path d="M15.5 16.5 20 12l-4.5-4.5" />
      <path d="M20 12H9" />
    </svg>
  );
}

function IconChevron({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

function Toggle({ on }: { on: boolean }) {
  return (
    <div
      className={`w-11 h-6 rounded-full flex items-center px-0.5 flex-shrink-0 ${
        on ? "bg-blue-600 justify-end" : "bg-white/20 justify-start"
      }`}
    >
      <div className="w-5 h-5 rounded-full bg-white shadow" />
    </div>
  );
}

const TILE = {
  backgroundColor: "rgba(255, 255, 255, 0.06)",
  borderColor: "rgba(255, 255, 255, 0.12)",
} as const;

export function SettingsSheet({
  session,
  editNickname,
  onClose,
  onLogout,
  onSaveNickname,
  onUnlockPremium,
  onRestore,
  onToggleNotifications,
  onToggleSound,
}: {
  session: Session;
  editNickname: boolean;
  onClose: () => void;
  onLogout: () => void;
  onSaveNickname: (value: string) => void;
  onUnlockPremium: () => void;
  onRestore: () => void | Promise<boolean>;
  onToggleNotifications: () => void;
  onToggleSound: () => void;
}) {
  const [draft, setDraft] = useState(session.nickname);
  const [editing, setEditing] = useState(editNickname);
  const [restored, setRestored] = useState(false);
  const [restoreError, setRestoreError] = useState("");
  const [visible, setVisible] = useState(false);
  const [legalView, setLegalView] = useState<"help" | "privacy" | "terms" | null>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  function save() {
    const trimmed = draft.trim();
    if (!trimmed) {
      setEditing(false);
      return;
    }
    onSaveNickname(trimmed);
    setEditing(false);
  }

  return (
    <div className="absolute inset-0 z-50 flex items-end sm:items-center justify-center overflow-hidden">
      <button
        type="button"
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
        aria-label="Zavřít"
        onClick={onClose}
      />
      <div
        className={`relative w-full max-h-[min(88%,88dvh)] flex flex-col rounded-t-3xl sm:rounded-3xl border backdrop-blur-xl overflow-hidden transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
        }`}
        style={SETTINGS_GLASS_STYLE}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 flex-shrink-0">
          <span className="w-14" aria-hidden />
          <h2 className="text-base font-bold text-white">Nastavení</h2>
          <button type="button" onClick={onClose} className="w-14 text-right text-sm font-semibold text-blue-400 hover:text-blue-300">
            Hotovo
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
          <div className="backdrop-blur-xl rounded-2xl border p-4" style={TILE}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                {(session.nickname || "Ž").charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate">{session.nickname || "Žák"}</p>
                <p className="text-xs text-indigo-300/70 truncate">{session.email || "bez e-mailu"}</p>
              </div>
            </div>

            {!editing ? (
              <button
                type="button"
                onClick={() => {
                  setDraft(session.nickname);
                  setEditing(true);
                }}
                className="w-full flex items-center justify-between text-sm font-medium text-indigo-100 hover:text-white py-2.5 border-t border-white/10"
              >
                Upravit přezdívku
                <IconChevron className="w-4 h-4 text-indigo-300/50" />
              </button>
            ) : (
              <div className="flex items-center gap-2 pt-2.5 border-t border-white/10">
                <input
                  type="text"
                  autoFocus
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") save();
                  }}
                  className="flex-1 rounded-xl px-3 py-2 text-sm text-white border focus:outline-none focus:border-blue-400"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.15)" }}
                />
                <button
                  type="button"
                  onClick={save}
                  disabled={!draft.trim()}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-2 rounded-xl disabled:opacity-40"
                >
                  Uložit
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={onLogout}
              className="w-full flex items-center justify-between text-sm font-medium text-indigo-100 hover:text-white py-2.5 border-t border-white/10"
            >
              Odhlásit se
              <IconLogout className="w-4 h-4" />
            </button>
          </div>

          <div className="backdrop-blur-xl rounded-2xl border p-4" style={TILE}>
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold text-indigo-300/70 uppercase tracking-wide">Předplatné</p>
              <span
                className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                  session.isPremium
                    ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white"
                    : "bg-white/10 text-indigo-200"
                }`}
              >
                {session.isPremium ? "PREMIUM 🚀" : "Verze ZDARMA"}
              </span>
            </div>
            {!session.isPremium && (
              <button
                type="button"
                onClick={onUnlockPremium}
                className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-sm py-3 rounded-xl mb-2.5 active:scale-95"
              >
                Odemknout PREMIUM verzi ✨
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                setRestoreError("");
                void (async () => {
                  const wasPremium = session.isPremium;
                  const ok = await onRestore();
                  setRestored(ok === true);
                  if (ok === true && !wasPremium) celebratePremium(session.soundHapticsEnabled);
                  if (ok !== true) setRestoreError("Na účtu v Supabase PREMIUM zatím není.");
                })();
              }}
              className="w-full text-sm font-medium text-indigo-100 hover:text-white py-2.5 border border-white/15 rounded-xl"
            >
              Obnovit nákupy
            </button>
            {restored && (
              <p className="text-xs text-emerald-400 font-medium mt-2.5 text-center">PREMIUM je aktivní na účtu.</p>
            )}
            {restoreError && <p className="text-xs text-rose-300 mt-2.5 text-center">{restoreError}</p>}
          </div>

          <div className="backdrop-blur-xl rounded-2xl border p-4 flex flex-col gap-3" style={TILE}>
            <button type="button" onClick={onToggleNotifications} className="w-full flex items-center gap-3">
              <span className="flex-1 text-left text-sm font-medium text-slate-100">Denní připomínky procvičování</span>
              <Toggle on={session.notificationsEnabled} />
            </button>
            <div className="h-px bg-white/10" />
            <button type="button" onClick={onToggleSound} className="w-full flex items-center gap-3">
              <span className="flex-1 text-left text-sm font-medium text-slate-100">Zvuky a haptická odezva</span>
              <Toggle on={session.soundHapticsEnabled} />
            </button>
          </div>

          <div className="backdrop-blur-xl rounded-2xl border p-4 flex flex-col" style={TILE}>
            <button
              type="button"
              onClick={() => setLegalView("help")}
              className="w-full flex items-center justify-between text-sm font-medium text-indigo-100 hover:text-white py-2.5"
            >
              Nápověda a podpora
              <IconChevron className="w-4 h-4 text-indigo-300/50" />
            </button>
            <div className="h-px bg-white/10" />
            <button
              type="button"
              onClick={() => setLegalView("privacy")}
              className="w-full flex items-center justify-between text-sm font-medium text-indigo-100 hover:text-white py-2.5"
            >
              Ochrana osobních údajů
              <IconChevron className="w-4 h-4 text-indigo-300/50" />
            </button>
            <div className="h-px bg-white/10" />
            <button
              type="button"
              onClick={() => setLegalView("terms")}
              className="w-full flex items-center justify-between text-sm font-medium text-indigo-100 hover:text-white py-2.5"
            >
              Podmínky použití
              <IconChevron className="w-4 h-4 text-indigo-300/50" />
            </button>
          </div>
        </div>
      </div>
      {legalView === "help" && <HelpSheet onClose={() => setLegalView(null)} />}
      {legalView === "privacy" && (
        <LegalSheet heading="Ochrana osobních údajů" document={PRIVACY_POLICY} onClose={() => setLegalView(null)} />
      )}
      {legalView === "terms" && (
        <LegalSheet heading="Podmínky použití" document={TERMS_OF_USE} onClose={() => setLegalView(null)} />
      )}
    </div>
  );
}

export function ProfileBanner({
  nickname,
  isPremium,
  onEditNickname,
  onOpenSettings,
  onLogout,
}: {
  nickname: string;
  isPremium: boolean;
  onEditNickname: () => void;
  onOpenSettings: () => void;
  onLogout: () => void;
}) {
  return (
    <div className="relative z-10 flex items-center justify-between mb-6">
      <div className="flex items-center gap-2.5 min-w-0">
        <CompassKey className="w-10 h-10 flex-shrink-0" />
        <div className="leading-tight min-w-0">
          <p className="text-sm font-semibold text-white">Trénink</p>
          <p className="text-xs text-indigo-200/70 -mt-0.5">matematiky</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <button
            type="button"
            onClick={onEditNickname}
            className="text-xs font-semibold text-zinc-700 bg-white border border-zinc-200 rounded-full px-3 py-1.5 truncate hover:border-zinc-300 hover:bg-zinc-50"
            style={{ maxWidth: "7rem" }}
            aria-label="Upravit přezdívku"
          >
            {nickname || "Žák"}
          </button>
          {isPremium ? (
            <span className="flex-shrink-0 text-[10px] font-bold tracking-wide uppercase rounded-full px-2 py-1 text-amber-900 bg-gradient-to-r from-amber-300 to-orange-400 border border-amber-200/80">
              Premium
            </span>
          ) : (
            <span className="flex-shrink-0 text-[10px] font-bold tracking-wide uppercase text-zinc-500 bg-zinc-100 border border-zinc-200 rounded-full px-2 py-1">
              Zdarma
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={onOpenSettings}
          className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-zinc-900"
          aria-label="Nastavení"
        >
          <IconSettings className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={onLogout}
          className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-red-600"
          aria-label="Odhlásit se"
        >
          <IconLogout className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
