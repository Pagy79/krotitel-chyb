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
          });
        }
        return;
      }
      void hydrate(next.user.id, next.user.email ?? "");
    });

    return () => {
      cancelled = true;
      data.subscription.unsubscribe();
    };
  }, []);

  const updateNickname = useCallback((nickname: string) => {
    setSession(patchSession({ nickname }));
    void updateNicknameRemote(nickname);
  }, []);

  const setPremium = useCallback((isPremium: boolean) => {
    setSession(patchSession({ isPremium }));
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
    setPremium,
    setNotifications,
    setSoundHaptics,
    signOut,
  };
}
