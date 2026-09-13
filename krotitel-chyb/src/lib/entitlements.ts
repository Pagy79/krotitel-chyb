import { getSupabase } from "@/lib/supabase/client";
import { patchSession } from "@/lib/session";

export const FREE_PRACTICE_TESTS_PER_DAY = 2;
export const FREE_BIG_TEST_INTERVAL_DAYS = 7;

export type EntitlementSnapshot = {
  allowed?: boolean;
  is_premium?: boolean;
  practice_tests_today?: number | null;
  last_practice_test_date?: string | null;
  last_big_test_at?: string | null;
  message?: string;
  reason?: string;
  remaining_days?: number;
};

function friendlyRpcError(error: { message?: string } | null, fallback: string) {
  const raw = error?.message || "";
  if (/Could not find the function/i.test(raw) || /schema cache/i.test(raw)) {
    return "V Supabase ještě chybí SQL funkce limitů. Spusť scripts/supabase-setup.sql.";
  }
  if (/updated_at/i.test(raw)) {
    return "Technická chyba při ověření limitu (databáze). Spusť znovu supabase-setup.sql.";
  }
  return raw || fallback;
}

export function applyEntitlementSnapshot(snapshot: EntitlementSnapshot | null | undefined) {
  if (!snapshot || typeof snapshot !== "object") return;
  patchSession({
    ...(typeof snapshot.is_premium === "boolean" ? { isPremium: snapshot.is_premium } : {}),
    ...(snapshot.practice_tests_today != null
      ? { practiceTestsToday: Number(snapshot.practice_tests_today) || 0 }
      : {}),
    ...("last_practice_test_date" in snapshot
      ? { lastPracticeTestDate: snapshot.last_practice_test_date ?? null }
      : {}),
    ...("last_big_test_at" in snapshot ? { lastBigTestAt: snapshot.last_big_test_at ?? null } : {}),
  });
}

export function todayDateString() {
  return new Date().toISOString().split("T")[0];
}

export function practiceTestsUsedToday(practiceTestsToday: number, lastPracticeTestDate: string | null) {
  return lastPracticeTestDate === todayDateString() ? practiceTestsToday : 0;
}

export function canTakeTest(
  type: "practice" | "big",
  opts: {
    isPremium: boolean;
    userId?: string | null;
    practiceTestsToday: number;
    lastPracticeTestDate: string | null;
    lastBigTestAt: string | null;
  },
) {
  if (opts.isPremium && opts.userId) return { allowed: true as const };
  if (type === "practice") {
    if (practiceTestsUsedToday(opts.practiceTestsToday, opts.lastPracticeTestDate) >= FREE_PRACTICE_TESTS_PER_DAY) {
      return {
        allowed: false as const,
        message: `Dnes jsi využil/a oba testy zdarma (${FREE_PRACTICE_TESTS_PER_DAY}/${FREE_PRACTICE_TESTS_PER_DAY}). Nové testy budou zase zítra, nebo přejdi na PREMIUM pro neomezený přístup.`,
      };
    }
    return { allowed: true as const };
  }
  if (!opts.lastBigTestAt) return { allowed: true as const };
  const diffMs = Date.now() - new Date(opts.lastBigTestAt).getTime();
  const intervalMs = FREE_BIG_TEST_INTERVAL_DAYS * 24 * 60 * 60 * 1000;
  if (diffMs < intervalMs) {
    const remainingDays = Math.ceil((intervalMs - diffMs) / (24 * 60 * 60 * 1000));
    return {
      allowed: false as const,
      message: `Další test nanečisto zdarma bude dostupný za ${remainingDays} ${
        remainingDays === 1 ? "den" : remainingDays < 5 ? "dny" : "dní"
      }. S PREMIUM ho můžeš zkusit hned.`,
    };
  }
  return { allowed: true as const };
}

export async function requestStartPracticeTest() {
  const supabase = getSupabase();
  if (!supabase) {
    return { allowed: false, message: "Supabase ještě není nastavené." };
  }
  const { data, error } = await supabase.rpc("start_practice_test");
  if (error) {
    return { allowed: false, message: friendlyRpcError(error, "Nepodařilo se ověřit limit testů."), error };
  }
  return (data as EntitlementSnapshot) || { allowed: false, message: "Neočekávaná odpověď serveru." };
}

export async function requestStartBigTest() {
  const supabase = getSupabase();
  if (!supabase) {
    return { allowed: false, message: "Supabase ještě není nastavené." };
  }
  const { data, error } = await supabase.rpc("start_big_test");
  if (error) {
    return {
      allowed: false,
      message: friendlyRpcError(error, "Nepodařilo se ověřit limit testu nanečisto."),
      error,
    };
  }
  return (data as EntitlementSnapshot) || { allowed: false, message: "Neočekávaná odpověď serveru." };
}

export async function activatePromoCode(code: string) {
  const supabase = getSupabase();
  if (!supabase) {
    return { ok: false, message: "Supabase ještě není nastavené." };
  }
  const { data, error } = await supabase.rpc("activate_promo_code", { p_code: code });
  if (error) {
    return { ok: false, message: error.message || "Aktivace kódu selhala.", error };
  }
  return (
    (data as { ok?: boolean; message?: string; is_premium?: boolean }) || {
      ok: false,
      message: "Neočekávaná odpověď serveru.",
    }
  );
}
