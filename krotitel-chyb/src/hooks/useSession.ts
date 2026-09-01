"use client";

import { useCallback, useEffect, useState } from "react";
import {
  loadSession,
  patchSession,
  signOut as clearSession,
  SESSION_EVENT,
  type Session,
} from "@/lib/session";

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

  const updateNickname = useCallback((nickname: string) => {
    setSession(patchSession({ nickname }));
  }, []);

  const setPremium = useCallback((isPremium: boolean) => {
    setSession(patchSession({ isPremium }));
  }, []);

  const setNotifications = useCallback((notificationsEnabled: boolean) => {
    setSession(patchSession({ notificationsEnabled }));
  }, []);

  const setSoundHaptics = useCallback((soundHapticsEnabled: boolean) => {
    setSession(patchSession({ soundHapticsEnabled }));
  }, []);

  const signOut = useCallback(() => {
    clearSession();
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
