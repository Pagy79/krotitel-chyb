"use client";

import { useCallback, useEffect, useState } from "react";
import {
  applyProfileToSession,
  fetchProfile,
  signOutRemote,
  updateNicknameRemote,
  updateNotificationsRemote,
} from "@/lib/auth";
import {
  loadSession,
  patchSession,
  SESSION_EVENT,
  type Session,
} from "@/lib/session";
import { getSupabase } from "@/lib/supabase/client";

export function useSession() {
  const [session, setSession] = useState<Session>(loadSession);

  useEffect(() => {
    function refresh() {
      setSession(loadSession());
    }
    refresh();
    window.addEventListener(SESSION_EVENT, refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener(SESSION_EVENT, refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  useEffect(() => {
    const supabase = getSupabase();
    if (!supabase) return;

    let cancelled = false;

    async function hydrate(userId: string, email: string) {
      const profile = await fetchProfile(userId);
      if (cancelled) return;
      await applyProfileToSession(userId, email, profile);
    }

    supabase.auth.getSession().then(({ data }) => {
      const user = data.session?.user;
      if (user) void hydrate(user.id, user.email ?? "");
    });

    const { data } = supabase.auth.onAuthStateChange((event, next) => {
      if (event === "SIGNED_OUT" || !next?.user) {
        const current = loadSession();
        if (current.userId) {
          patchSession({
            userId: null,
            email: "",
            nickname: "Žák",
            isPremium: false,
            notificationsEnabled: false,
            practiceTestsToday: 0,
            lastPracticeTestDate: null,
            lastBigTestAt: null,
          });
        }
        return;
      }
      void hydrate(next.user.id, next.user.email ?? "");
    });

    const channel = supabase
      .channel("krotitel-profile")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "profiles" },
        (payload) => {
          const row = payload.new as { id?: string } | null;
          const current = loadSession();
          if (!row?.id || row.id !== current.userId) return;
          void hydrate(current.userId, current.email);
        },
      )
      .subscribe();

    return () => {
      cancelled = true;
      data.subscription.unsubscribe();
      void supabase.removeChannel(channel);
    };
  }, []);

  const refreshFromServer = useCallback(async () => {
    const supabase = getSupabase();
    if (!supabase) return false;
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return false;
    const profile = await fetchProfile(user.id);
    if (!profile) return false;
    await applyProfileToSession(user.id, user.email ?? "", profile);
    return Boolean(profile.is_premium);
  }, []);

  const updateNickname = useCallback((nickname: string) => {
    setSession(patchSession({ nickname }));
    void updateNicknameRemote(nickname);
  }, []);

  const setNotifications = useCallback((notificationsEnabled: boolean) => {
    setSession(patchSession({ notificationsEnabled }));
    void updateNotificationsRemote(notificationsEnabled);
  }, []);

  const setSoundHaptics = useCallback((soundHapticsEnabled: boolean) => {
    setSession(patchSession({ soundHapticsEnabled }));
  }, []);

  const signOut = useCallback(() => {
    void signOutRemote();
    setSession(loadSession());
  }, []);

  return {
    session,
    updateNickname,
    refreshFromServer,
    setNotifications,
    setSoundHaptics,
    signOut,
  };
}
