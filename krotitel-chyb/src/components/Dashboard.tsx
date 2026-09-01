"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TOPICS } from "@/data/topics";
import { C } from "@/data/theme";
import { Creature } from "@/components/Creature";
import { WorldMap } from "@/components/WorldMap";
import { ProfileBanner, SettingsSheet } from "@/components/ProfileBanner";
import { useProgress } from "@/hooks/useProgress";
import { useTestProgress } from "@/hooks/useTestProgress";
import { useSession } from "@/hooks/useSession";
import { pctTone } from "@/lib/attempts";
import { getTrophy, BLOOM_PCT, VELKY_TEST_MINUTES, VELKY_TEST_QUESTION_COUNT } from "@/lib/velkyTestRules";
import type { TopicId } from "@/lib/types";

const GLASS_TILE = {
  backgroundColor: "transparent",
  border: "1px solid rgba(35, 24, 48, 0.18)",
} as const;

export function Dashboard() {
  const router = useRouter();
  const { wildness } = useProgress();
  const { lastByTopic, fullBestPct, fullLastPct } = useTestProgress();
  const { session, updateNickname, setPremium, setNotifications, setSoundHaptics, signOut } = useSession();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [editNickname, setEditNickname] = useState(false);
  const bestTrophy = fullBestPct != null ? getTrophy(fullBestPct) : null;

  const mixBloom = (fullBestPct ?? 0) >= BLOOM_PCT;

  function shownWild(id: TopicId) {
    if (mixBloom || (lastByTopic[id] ?? 0) >= BLOOM_PCT) return 0;
    return wildness[id];
  }

  function pick(id: TopicId) {
    router.push(`/tema/${id}`);
  }

  function openSettings(opts?: { editNickname?: boolean }) {
    setEditNickname(Boolean(opts?.editNickname));
    setSettingsOpen(true);
  }

  function handleLogout() {
    signOut();
    router.push("/");
  }

  async function toggleNotifications() {
    if (session.notificationsEnabled) {
      setNotifications(false);
      return;
    }
    let granted = false;
    try {
      if (typeof window !== "undefined" && "Notification" in window) {
        granted = (await Notification.requestPermission()) === "granted";
      }
    } catch {
      granted = false;
    }
    setNotifications(granted);
  }

  return (
    <div
      className="relative flex-1 flex flex-col p-6 overflow-auto"
      style={{
        backgroundColor: C.bg,
        backgroundImage: "url(/dashboard-bg.png?v=paper)",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ProfileBanner
        nickname={session.nickname}
        isPremium={session.isPremium}
        onEditNickname={() => openSettings({ editNickname: true })}
        onOpenSettings={() => openSettings()}
        onLogout={handleLogout}
      />
      <div className="mb-4">
        <p className="text-sm font-bold" style={{ color: C.ink }}>
          Tvůj svět
        </p>
        <p className="text-xs" style={{ color: C.inkDim }}>
          Čtyři území matematiky. Krajina se mění podle posledního skóre v kategorii.
        </p>
      </div>

      <WorldMap wildness={wildness} lastByTopic={lastByTopic} onPick={pick} />

      <button
        onClick={() => router.push("/velky-test")}
        className="w-full rounded-[28px] p-4 mb-3 text-left"
        style={{
          background: "linear-gradient(135deg, #FF6B35 0%, #FF521B 100%)",
        }}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex gap-1 mb-2">
              {TOPICS.map((t) => (
                <div key={t.id} className="rounded-lg bg-white/25 p-0.5">
                  <Creature symbol={t.symbol} wildness={shownWild(t.id)} size={28} />
                </div>
              ))}
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white mb-1">Všichni tvorové</p>
            <p className="text-lg font-black text-white leading-tight">Velký test</p>
            <p className="text-xs text-white mt-1 leading-relaxed">
              {VELKY_TEST_QUESTION_COUNT} úloh · {VELKY_TEST_MINUTES} minut · pohár od 70 % bodů.
            </p>
            <p className="text-[11px] text-white mt-2 tabular-nums">
              Nejlepší: <strong>{fullBestPct != null ? `${fullBestPct} %` : "—"}</strong>
              <span className="opacity-70"> · </span>
              Poslední: <strong>{fullLastPct != null ? `${fullLastPct} %` : "—"}</strong>
            </p>
          </div>
          <div className="flex flex-col items-center justify-end flex-shrink-0 min-w-[3rem] pt-1">
            {bestTrophy?.emoji ? (
              <>
                <span className="text-4xl leading-none" title={bestTrophy.label}>
                  {bestTrophy.emoji}
                </span>
                <span className="text-[10px] font-bold text-white mt-1">
                  {bestTrophy.label.replace(" pohár", "")}
                </span>
              </>
            ) : (
              <span className="text-3xl leading-none opacity-30 grayscale" title="Zatím bez poháru">
                🏆
              </span>
            )}
          </div>
        </div>
        <span
          className="inline-block mt-3 px-3 py-1.5 rounded-2xl text-xs font-bold"
          style={{ backgroundColor: "#FFFFFF", color: "#C2410C" }}
        >
          Krotit mix →
        </span>
      </button>

      <div className="grid grid-cols-2 gap-3 flex-shrink-0">
        {TOPICS.map((t) => {
          const w = shownWild(t.id);
          const lastPct = lastByTopic[t.id];
          const bar = lastPct ?? 0;
          return (
            <div
              key={t.id}
              className="flex flex-col items-center rounded-2xl p-4 text-center"
              style={GLASS_TILE}
            >
              <Creature symbol={t.symbol} wildness={w} size={56} />
              <p className="text-xs font-bold mt-2" style={{ color: C.ink }}>
                {t.name}{" "}
                <span className="tabular-nums" style={{ color: pctTone(lastPct) }}>
                  {lastPct != null ? `${lastPct}%` : "—"}
                </span>
              </p>
              <div className="w-full h-1.5 rounded-full mt-2 overflow-hidden" style={{ backgroundColor: "rgba(35, 24, 48, 0.12)" }}>
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${bar}%`, backgroundColor: lastPct != null ? pctTone(lastPct) : "transparent" }}
                />
              </div>
              <p className="text-[11px] leading-snug mt-2 mb-3" style={{ color: C.inkDim }}>
                {t.desc}
              </p>
              <div className="w-full flex flex-col gap-1.5 mt-auto">
                <button
                  onClick={() => pick(t.id)}
                  className="paper-btn w-full py-2 rounded-2xl text-xs font-bold"
                  style={{ backgroundColor: C.accent, color: "#FFFFFF" }}
                >
                  Krotit
                </button>
                <button
                  onClick={() => router.push(`/tema/${t.id}/tahak`)}
                  className="w-full py-2 rounded-2xl text-xs font-bold"
                  style={{
                    color: C.ink,
                    backgroundColor: "transparent",
                    border: "1px solid rgba(35, 24, 48, 0.22)",
                  }}
                >
                  Tahák
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="mt-auto rounded-[28px] p-4 text-center"
        style={{ backgroundColor: "#FFFFFF", border: "1px solid #EFECE6", boxShadow: C.paperShadow }}
      >
        <p className="text-xs leading-relaxed" style={{ color: C.inkDim }}>
          Postup se ukládá v prohlížeči. Krajina má 4 stupně podle %. Velký test nad 70 % dá pohár.
        </p>
      </div>
      {settingsOpen && (
        <SettingsSheet
          key={editNickname ? "nick" : "set"}
          session={session}
          editNickname={editNickname}
          onClose={() => setSettingsOpen(false)}
          onLogout={handleLogout}
          onSaveNickname={updateNickname}
          onUnlockPremium={() => setPremium(true)}
          onRestore={() => setPremium(session.isPremium)}
          onToggleNotifications={() => void toggleNotifications()}
          onToggleSound={() => setSoundHaptics(!session.soundHapticsEnabled)}
        />
      )}
    </div>
  );
}
