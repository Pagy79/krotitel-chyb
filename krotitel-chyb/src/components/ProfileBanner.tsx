"use client";

import { useState } from "react";
import { C } from "@/data/theme";
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
      className={`w-11 h-6 rounded-full flex items-center px-0.5 flex-shrink-0 ${on ? "justify-end" : "justify-start"}`}
      style={{ backgroundColor: on ? C.accent : "#D4CFC4" }}
    >
      <div className="w-5 h-5 rounded-full bg-white shadow" />
    </div>
  );
}

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
  onRestore: () => void;
  onToggleNotifications: () => void;
  onToggleSound: () => void;
}) {
  const [draft, setDraft] = useState(session.nickname);
  const [editing, setEditing] = useState(editNickname);
  const [restored, setRestored] = useState(false);

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
      <button type="button" className="absolute inset-0 bg-zinc-900/50" aria-label="Zavřít" onClick={onClose} />
      <div
        className="relative w-full max-h-[min(88%,88dvh)] flex flex-col rounded-t-3xl sm:rounded-3xl sm:mx-3 overflow-hidden"
        style={{ backgroundColor: C.bg, border: "1px solid #EAE3D2" }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b flex-shrink-0" style={{ borderColor: C.line }}>
          <span className="w-14" aria-hidden />
          <h2 className="text-base font-bold" style={{ color: C.ink }}>
            Nastavení
          </h2>
          <button type="button" onClick={onClose} className="w-14 text-right text-sm font-semibold" style={{ color: C.accentDeep }}>
            Hotovo
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
          <div className="rounded-2xl p-4" style={{ backgroundColor: "#FFFFFF", border: `1px solid ${C.line}` }}>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{ backgroundColor: C.accent }}
              >
                {(session.nickname || "Ž").charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate" style={{ color: C.ink }}>
                  {session.nickname || "Žák"}
                </p>
                <p className="text-xs truncate" style={{ color: C.inkDim }}>
                  {session.email || "bez e-mailu"}
                </p>
              </div>
            </div>

            {!editing ? (
              <button
                type="button"
                onClick={() => {
                  setDraft(session.nickname);
                  setEditing(true);
                }}
                className="w-full flex items-center justify-between text-sm font-medium py-2.5 border-t"
                style={{ color: C.ink, borderColor: C.line }}
              >
                Upravit přezdívku
                <IconChevron className="w-4 h-4" />
              </button>
            ) : (
              <div className="flex flex-col gap-2 pt-2.5 border-t" style={{ borderColor: C.line }}>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    autoFocus
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") save();
                    }}
                    className="flex-1 rounded-xl px-3 py-2 text-sm focus:outline-none"
                    style={{ backgroundColor: C.bg, border: `1px solid ${C.line}`, color: C.ink }}
                  />
                  <button
                    type="button"
                    onClick={save}
                    disabled={!draft.trim()}
                    className="paper-btn text-xs font-semibold px-3 py-2 rounded-xl disabled:opacity-40"
                    style={{ backgroundColor: C.accent, color: "#FFFFFF" }}
                  >
                    Uložit
                  </button>
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={onLogout}
              className="w-full flex items-center justify-between text-sm font-medium py-2.5 border-t"
              style={{ color: C.ink, borderColor: C.line }}
            >
              Odhlásit se
              <IconLogout className="w-4 h-4" />
            </button>
          </div>

          <div className="rounded-2xl p-4" style={{ backgroundColor: "#FFFFFF", border: `1px solid ${C.line}` }}>
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: C.inkDim }}>
                Předplatné
              </p>
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full"
                style={
                  session.isPremium
                    ? { background: "linear-gradient(90deg, #FBBF24, #F97316)", color: "#FFFFFF" }
                    : { backgroundColor: C.bg, color: C.inkDim }
                }
              >
                {session.isPremium ? "PREMIUM" : "Verze ZDARMA"}
              </span>
            </div>
            {!session.isPremium && (
              <button
                type="button"
                onClick={onUnlockPremium}
                className="paper-btn w-full font-semibold text-sm py-3 rounded-xl mb-2.5"
                style={{ backgroundColor: C.accent, color: "#FFFFFF" }}
              >
                Odemknout PREMIUM verzi
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                onRestore();
                setRestored(true);
              }}
              className="w-full text-sm font-medium py-2.5 rounded-xl border"
              style={{ color: C.ink, borderColor: C.line }}
            >
              Obnovit nákupy
            </button>
            {restored && (
              <p className="text-xs font-medium mt-2.5 text-center" style={{ color: C.accentDeep }}>
                Stav předplatného je aktuální.
              </p>
            )}
          </div>

          <div className="rounded-2xl p-4 flex flex-col gap-3" style={{ backgroundColor: "#FFFFFF", border: `1px solid ${C.line}` }}>
            <button type="button" onClick={onToggleNotifications} className="w-full flex items-center gap-3">
              <span className="flex-1 text-left text-sm font-medium" style={{ color: C.ink }}>
                Denní připomínky procvičování
              </span>
              <Toggle on={session.notificationsEnabled} />
            </button>
            <div className="h-px" style={{ backgroundColor: C.line }} />
            <button type="button" onClick={onToggleSound} className="w-full flex items-center gap-3">
              <span className="flex-1 text-left text-sm font-medium" style={{ color: C.ink }}>
                Zvuky a haptická odezva
              </span>
              <Toggle on={session.soundHapticsEnabled} />
            </button>
          </div>
        </div>
      </div>
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
    <div className="relative z-10 flex items-center justify-between mb-4">
      <div className="leading-tight min-w-0">
        <p className="text-sm font-semibold" style={{ color: C.ink }}>
          Trénink
        </p>
        <p className="text-xs -mt-0.5" style={{ color: C.inkDim }}>
          matematiky
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <button
            type="button"
            onClick={onEditNickname}
            className="text-xs font-semibold rounded-full px-3 py-1.5 truncate"
            style={{ maxWidth: "7rem", backgroundColor: "#FFFFFF", color: C.ink, border: `1px solid ${C.line}` }}
            aria-label="Upravit přezdívku"
          >
            {nickname || "Žák"}
          </button>
          {isPremium ? (
            <span className="flex-shrink-0 text-[10px] font-bold tracking-wide uppercase rounded-full px-2 py-1 text-amber-900 bg-gradient-to-r from-amber-300 to-orange-400 border border-amber-200/80">
              Premium
            </span>
          ) : (
            <span
              className="flex-shrink-0 text-[10px] font-bold tracking-wide uppercase rounded-full px-2 py-1"
              style={{ color: C.inkDim, backgroundColor: "#FFFFFF", border: `1px solid ${C.line}` }}
            >
              Zdarma
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={onOpenSettings}
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "#FFFFFF", border: `1px solid ${C.line}`, color: C.inkDim }}
          aria-label="Nastavení"
        >
          <IconSettings className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={onLogout}
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "#FFFFFF", border: `1px solid ${C.line}`, color: C.inkDim }}
          aria-label="Odhlásit se"
        >
          <IconLogout className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
