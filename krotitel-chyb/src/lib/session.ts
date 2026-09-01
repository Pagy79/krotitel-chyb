export type Session = {
  email: string;
  nickname: string;
  isPremium: boolean;
  notificationsEnabled: boolean;
  soundHapticsEnabled: boolean;
};

const KEY = "krotitel-session-v1";
export const SESSION_EVENT = "krotitel-session";

const EMPTY: Session = {
  email: "",
  nickname: "Žák",
  isPremium: false,
  notificationsEnabled: false,
  soundHapticsEnabled: true,
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

export function signIn({ email, nickname }: { email: string; nickname?: string }) {
  const current = loadSession();
  const sameUser = current.email && current.email.toLowerCase() === email.toLowerCase();
  return patchSession({
    email,
    nickname: nickname?.trim() || (sameUser ? current.nickname : nicknameFromEmail(email)),
    isPremium: sameUser ? current.isPremium : false,
    notificationsEnabled: sameUser ? current.notificationsEnabled : false,
    soundHapticsEnabled: sameUser ? current.soundHapticsEnabled : true,
  });
}

export function signOut() {
  localStorage.removeItem(KEY);
  emit();
}
