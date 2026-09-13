"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TOPICS } from "@/data/topics";
import { DashboardFlybyRocket } from "@/components/DashboardFlybyRocket";
import { ProfileBanner, SettingsSheet } from "@/components/ProfileBanner";
import { TopicIconBadge } from "@/components/TopicIcons";
import { useTestProgress } from "@/hooks/useTestProgress";
import { useSession } from "@/hooks/useSession";
import { PaywallModal } from "@/components/PaywallModal";
import { COSMIC_BG_STYLE } from "@/lib/cosmicBg";
import { canTakeTest } from "@/lib/entitlements";
import { getTrophy, MISTAKES_QUIZ_LENGTH, TEST_QUESTION_COUNT, VELKY_TEST_MINUTES, VELKY_TEST_QUESTION_COUNT } from "@/lib/velkyTestRules";
import type { TopicId } from "@/lib/types";

const TOPIC_BTN: Record<TopicId, string> = {
  procenta: "text-rose-300 border-rose-400/70 hover:bg-white/10",
  vyrazy: "text-pink-300 border-pink-400/70 hover:bg-white/10",
  neznama: "text-violet-300 border-violet-400/70 hover:bg-white/10",
  geometrie: "text-amber-300 border-amber-400/70 hover:bg-white/10",
};

function pctClass(percentage: number | null) {
  if (percentage == null || percentage <= 0) return "text-indigo-300/70";
  if (percentage >= 70) return "text-emerald-300";
  if (percentage >= 50) return "text-amber-300";
  return "text-rose-300";
}


export function Dashboard() {
  const router = useRouter();
  const { lastByTopic, fullBestPct, fullLastPct, categoryStats, weakestArea, mistakeQuestionIds, hasPractice } =
    useTestProgress();
  const { session, updateNickname, refreshFromServer, setNotifications, setSoundHaptics, signOut } = useSession();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [editNickname, setEditNickname] = useState(false);
  const [paywallOpen, setPaywallOpen] = useState(false);
  const [paywallMessage, setPaywallMessage] = useState("");
  const bestTrophy = fullBestPct != null ? getTrophy(fullBestPct) : null;
  const weakestTopic = weakestArea ? TOPICS.find((t) => t.id === weakestArea.category) : null;
  const mistakesCount = Math.min(MISTAKES_QUIZ_LENGTH, mistakeQuestionIds.length);

  function openPaywall(message?: string) {
    setPaywallMessage(message || "");
    setPaywallOpen(true);
  }

  function pick(id: TopicId) {
    const check = canTakeTest("practice", session);
    if (!check.allowed) {
      openPaywall(check.message);
      return;
    }
    router.push(`/tema/${id}`);
  }

  function startBigTest() {
    const check = canTakeTest("big", session);
    if (!check.allowed) {
      openPaywall(check.message);
      return;
    }
    router.push("/velky-test");
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
      className="relative flex-1 flex flex-col p-6 overflow-auto overscroll-y-contain app-hide-scrollbar"
      style={COSMIC_BG_STYLE}
    >
      <div className="relative mb-6">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-full overflow-hidden z-20"
          aria-hidden="true"
        >
          <DashboardFlybyRocket soundEnabled={session.soundHapticsEnabled} />
        </div>

        <ProfileBanner
          nickname={session.nickname}
          isPremium={session.isPremium}
          onEditNickname={() => openSettings({ editNickname: true })}
          onOpenSettings={() => openSettings()}
          onLogout={handleLogout}
        />

        <h1 className="relative z-10 text-xl font-semibold text-white leading-snug mb-1">
          Procvičuj matematiku kdykoliv a kdekoliv, třeba ve vesmíru.
        </h1>
        <p className="relative z-10 text-sm text-indigo-200/70 mb-4">Matematika · 2026</p>

        {!session.isPremium && (
          <div
            className="relative z-10 mb-5 flex items-center justify-between gap-3 rounded-2xl border px-3.5 py-3"
            style={{
              background: "linear-gradient(135deg, rgba(251, 191, 36, 0.14), rgba(249, 115, 22, 0.10))",
              borderColor: "rgba(251, 191, 36, 0.35)",
              boxShadow: "0 0 20px rgba(251, 191, 36, 0.08)",
            }}
          >
            <div className="min-w-0 text-left">
              <p className="text-sm font-semibold text-amber-100 leading-tight">Aktivovaná verze ZDARMA</p>
              <p className="text-[11px] text-amber-100/70 leading-snug mt-0.5">
                2 testy denně · 1 nanečisto za týden · chyby zdarma
              </p>
            </div>
            <button
              type="button"
              onClick={() => openPaywall()}
              className="flex-shrink-0 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl active:scale-95"
            >
              Aktivovat Premium
            </button>
          </div>
        )}

        <button
          type="button"
          onClick={startBigTest}
          className="glass-panel relative z-10 w-full text-left rounded-2xl p-5 mb-0"
        >
        <div className="flex items-start justify-between mb-4">
          <div className="min-w-0 pr-2">
            <p className="text-white text-base font-semibold mb-1">Zkus si test nanečisto</p>
            <p className="text-indigo-200/70 text-xs font-medium tracking-wide">
              {VELKY_TEST_QUESTION_COUNT} úloh · {VELKY_TEST_MINUTES} minut · {VELKY_TEST_QUESTION_COUNT * 2} bodů
            </p>
          </div>
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-indigo-300 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
            <circle cx="12" cy="12" r="8.5" />
            <path d="M12 8v4.2l2.4 1.6" strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex items-end justify-between gap-3">
          <div className="flex flex-col gap-2 min-w-0">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="inline-flex items-center justify-center bg-blue-600 text-white text-sm font-semibold px-7 py-2.5 rounded-full">
                Start
              </span>
              {!session.isPremium &&
                (canTakeTest("big", session).allowed ? (
                  <span className="text-xs font-medium text-emerald-300">1× zdarma tento týden</span>
                ) : (
                  <span className="text-xs font-medium text-amber-300">
                    {canTakeTest("big", session).message?.split(".")[0] ?? "Další test nanečisto je za limit"}.
                  </span>
                ))}
            </div>
            <div className="flex items-center gap-3 text-[11px] tabular-nums">
              <span className="text-indigo-200/80">
                Nejlepší:{" "}
                <strong className="text-white font-semibold">
                  {fullBestPct != null ? `${fullBestPct}%` : "—"}
                </strong>
              </span>
              <span className="text-indigo-300/40">·</span>
              <span className="text-indigo-200/80">
                Poslední:{" "}
                <strong className="text-white font-semibold">
                  {fullLastPct != null ? `${fullLastPct}%` : "—"}
                </strong>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center flex-shrink-0">
            {bestTrophy?.emoji ? (
              <>
                <span className="text-4xl leading-none drop-shadow-[0_0_12px_rgba(251,191,36,0.35)]" title={bestTrophy.label}>
                  {bestTrophy.emoji}
                </span>
                <span className={`text-[10px] font-semibold mt-1 ${bestTrophy.tone}`}>
                  {bestTrophy.label.replace(" pohár", "")}
                </span>
              </>
            ) : (
              <span className="text-3xl leading-none opacity-25 grayscale" title="Zatím bez poháru">
                🏆
              </span>
            )}
          </div>
        </div>
        </button>
      </div>

      <div className="glass-panel relative z-10 rounded-2xl p-5 mb-6">
        <p className="text-xs font-semibold text-indigo-300/80 uppercase tracking-wide mb-3">
          Na čem zapracovat
        </p>
        {!hasPractice ? (
          <p className="text-xs text-indigo-200/80 mb-3 leading-relaxed">
            Zatím jsi s procvičováním nezačal/a. Až dokončíš první test, uvidíš tady okruh, na
            kterém je potřeba nejvíc zapracovat.
          </p>
        ) : weakestArea && weakestTopic ? (
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white truncate">{weakestTopic.name}</p>
              <p className="text-[11px] text-indigo-200/70">
                {weakestArea.correct}/{weakestArea.total} správně · nejslabší okruh
              </p>
            </div>
            <span className={`text-sm font-bold tabular-nums flex-shrink-0 ${pctClass(weakestArea.percentage)}`}>
              {weakestArea.percentage}%
            </span>
          </div>
        ) : (
          <p className="text-xs text-indigo-200/70 mb-3 leading-relaxed">
            Zatím nemáme dost dat k vyhodnocení okruhů.
          </p>
        )}
        <Link
          href="/chyby"
          className="w-full text-xs font-semibold border rounded-full py-2.5 transition-colors bg-white/10 text-white border-white/20 hover:bg-white/20 text-center block"
        >
          Jen moje chyby
          {mistakesCount > 0
            ? ` · ${mistakesCount} ${mistakesCount === 1 ? "otázka" : mistakesCount < 5 ? "otázky" : "otázek"}`
            : ""}
        </Link>
      </div>

      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-semibold text-indigo-300/80 uppercase tracking-wide">
          Trénink tematických okruhů
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6 flex-shrink-0">
        {TOPICS.map((t) => {
          const lastPct = categoryStats[t.id]?.percentage ?? lastByTopic[t.id];
          return (
            <div key={t.id} className="glass-panel rounded-2xl p-4 flex flex-col">
              <TopicIconBadge topicId={t.id} className="mb-3" />
              <p className="text-sm font-semibold text-white leading-tight mb-1">
                {t.name}
                <span className={`ml-1.5 font-bold tabular-nums ${pctClass(lastPct ?? 0)}`}>
                  {lastPct != null ? `${lastPct}%` : "0%"}
                </span>
              </p>
              <p className="text-xs text-indigo-200/70 leading-relaxed mb-3">
                {TEST_QUESTION_COUNT} náhodných otázek
                <br />
                {t.desc}
              </p>
              <button
                type="button"
                onClick={() => pick(t.id)}
                className={`mt-auto w-full text-xs font-semibold border rounded-full py-2.5 transition-colors active:scale-95 ${TOPIC_BTN[t.id]}`}
              >
                Procvičovat
              </button>
              <button
                type="button"
                onClick={() => router.push(`/tema/${t.id}/tahak`)}
                className="mt-2 w-full flex items-center justify-center gap-1.5 text-xs font-semibold border rounded-full py-2.5 transition-colors active:scale-95 text-zinc-600 border-zinc-200 bg-white hover:bg-zinc-50"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M12 6c-1.6-1.2-3.6-1.8-6-1.8v13.6c2.4 0 4.4.6 6 1.8" />
                  <path d="M12 6c1.6-1.2 3.6-1.8 6-1.8v13.6c-2.4 0-4.4.6-6 1.8" />
                  <path d="M12 6v13.6" />
                </svg>
                Tahák
              </button>
            </div>
          );
        })}
      </div>
      <p className="text-xs text-indigo-300/60 leading-relaxed text-center px-1">
        Za správnou odpověď bez nápovědy získáváš 2 body, s nápovědou 1 bod.
      </p>
      {settingsOpen && (
        <SettingsSheet
          key={editNickname ? "nick" : "set"}
          session={session}
          editNickname={editNickname}
          onClose={() => setSettingsOpen(false)}
          onLogout={handleLogout}
          onSaveNickname={updateNickname}
          onUnlockPremium={() => {
            setSettingsOpen(false);
            openPaywall();
          }}
          onRestore={refreshFromServer}
          onToggleNotifications={() => void toggleNotifications()}
          onToggleSound={() => setSoundHaptics(!session.soundHapticsEnabled)}
        />
      )}
      {paywallOpen && (
        <PaywallModal
          message={paywallMessage}
          onClose={() => setPaywallOpen(false)}
          soundEnabled={session.soundHapticsEnabled}
          alreadyPremium={session.isPremium}
          onActivated={() => void refreshFromServer()}
          onRestore={refreshFromServer}
        />
      )}
    </div>
  );
}
