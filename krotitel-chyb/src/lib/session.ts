export type Session = {
  userId: string | null;
  email: string;
  nickname: string;
  isPremium: boolean;
  notificationsEnabled: boolean;
  soundHapticsEnabled: boolean;
  practiceTestsToday: number;
  lastPracticeTestDate: string | null;
  lastBigTestAt: string | null;
};

const KEY = "krotitel-session-v2";
export const SESSION_EVENT = "krotitel-session";

const EMPTY: Session = {
  userId: null,
  email: "",
  nickname: "Žák",
  isPremium: false,
  notificationsEnabled: false,
  soundHapticsEnabled: true,
  practiceTestsToday: 0,
  lastPracticeTestDate: null,
  lastBigTestAt: null,
};

function emit() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(SESSION_EVENT));
  }
}

export function nicknameFromEmail(email: string) {
  const local = email.split("@")[0]?.trim();
  return local || "Žák";
}

export function loadSession(): Session {
  if (typeof window === "undefined") return { ...EMPTY };
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...EMPTY };
    const parsed = JSON.parse(raw) as Partial<Session>;
    return { ...EMPTY, ...parsed };
  } catch {
    return { ...EMPTY };
  }
}

export function saveSession(next: Session) {
  localStorage.setItem(KEY, JSON.stringify(next));
  emit();
}

export function patchSession(partial: Partial<Session>): Session {
  const next = { ...loadSession(), ...partial };
  saveSession(next);
  return next;
}

export function signIn({
  email,
  nickname,
  userId,
}: {
  email: string;
  nickname?: string;
  userId?: string | null;
}) {
  const current = loadSession();
  const sameUser = current.email && current.email.toLowerCase() === email.toLowerCase();
  return patchSession({
    userId: userId ?? current.userId,
    email,
    nickname: nickname?.trim() || (sameUser ? current.nickname : nicknameFromEmail(email)),
    isPremium: false,
    notificationsEnabled: sameUser ? current.notificationsEnabled : false,
    soundHapticsEnabled: sameUser ? current.soundHapticsEnabled : true,
    practiceTestsToday: sameUser ? current.practiceTestsToday : 0,
    lastPracticeTestDate: sameUser ? current.lastPracticeTestDate : null,
    lastBigTestAt: sameUser ? current.lastBigTestAt : null,
  });
}

export function signOut() {
  localStorage.removeItem(KEY);
  emit();
}
