import { translateAuthError } from "@/lib/authErrors";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { nicknameFromEmail, patchSession, signOut as clearLocalSession } from "@/lib/session";

export type ProfileRow = {
  nickname: string | null;
  email: string | null;
  notifications_enabled: boolean;
  is_premium: boolean;
};

export function authRedirectTo() {
  if (typeof window === "undefined") return undefined;
  return `${window.location.origin}/auth/callback/`;
}

export async function fetchProfile(userId: string): Promise<ProfileRow | null> {
  const supabase = getSupabase();
  if (!supabase) return null;
  for (let i = 0; i < 4; i++) {
    const { data, error } = await supabase
      .from("profiles")
      .select("nickname, email, notifications_enabled, is_premium")
      .eq("id", userId)
      .maybeSingle();
    if (error) {
      console.warn("Načtení profilu selhalo:", error.message);
      return null;
    }
    if (data) return data;
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  return null;
}

export async function ensureOwnProfile(userId: string, email: string): Promise<ProfileRow | null> {
  const existing = await fetchProfile(userId);
  if (existing) return existing;
  const supabase = getSupabase();
  if (!supabase) return null;
  const { error } = await supabase.from("profiles").upsert({
    id: userId,
    email,
    nickname: nicknameFromEmail(email),
  });
  if (error) console.warn("Vytvoření profilu selhalo:", error.message);
  return fetchProfile(userId);
}

export async function applyProfileToSession(userId: string, email: string, profile: ProfileRow | null) {
  patchSession({
    userId,
    email: profile?.email || email,
    nickname: profile?.nickname?.trim() || nicknameFromEmail(email),
    isPremium: profile?.is_premium ?? false,
    notificationsEnabled: profile?.notifications_enabled ?? false,
  });
}

export async function signUpWithEmail(email: string, password: string) {
  const supabase = getSupabase();
  if (!supabase) return { error: "Supabase ještě není nastavené. Doplň URL a klíč v .env.local." };
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { emailRedirectTo: authRedirectTo() },
  });
  if (error) return { error: translateAuthError(error.message) };
  if (data.user && !data.session) {
    return { error: "Zkontroluj e-mail a potvrď registraci, pak se přihlas.", needsConfirm: true };
  }
  if (!data.user) return { error: "Registrace se nepovedla." };
  const profile = await ensureOwnProfile(data.user.id, email);
  await applyProfileToSession(data.user.id, email, profile);
  return { error: null };
}

export async function signInWithEmail(email: string, password: string) {
  const supabase = getSupabase();
  if (!supabase) return { error: "Supabase ještě není nastavené. Doplň URL a klíč v .env.local." };
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { error: translateAuthError(error.message) };
  if (!data.user) return { error: "Přihlášení se nepovedlo." };
  const profile = await ensureOwnProfile(data.user.id, email);
  if (!profile) {
    await supabase.auth.signOut().catch(() => {});
    return { error: "Účet se založil, ale profil se nepodařilo připravit. Zkus to znovu." };
  }
  await applyProfileToSession(data.user.id, email, profile);
  return { error: null };
}

export async function signInWithGoogle() {
  const supabase = getSupabase();
  if (!supabase) return { error: "Supabase ještě není nastavené." };
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: authRedirectTo(),
      skipBrowserRedirect: true,
      queryParams: { prompt: "select_account" },
    },
  });
  if (error) return { error: translateAuthError(error.message) };
  if (!data.url) return { error: "Google přihlášení se nepovedlo spustit." };
  window.location.assign(data.url);
  return { error: null };
}

export async function requestPasswordReset(email: string) {
  const supabase = getSupabase();
  if (!supabase) return { error: "Supabase ještě není nastavené." };
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: authRedirectTo(),
  });
  if (error) return { error: translateAuthError(error.message) };
  return { error: null };
}

export async function updateNicknameRemote(nickname: string) {
  const supabase = getSupabase();
  if (!supabase) return;
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;
  const { error } = await supabase.from("profiles").update({ nickname }).eq("id", user.id);
  if (error) console.warn("Uložení přezdívky selhalo:", error.message);
}

export async function updatePassword(password: string) {
  const supabase = getSupabase();
  if (!supabase) return { error: "Supabase ještě není nastavené." };
  const { error } = await supabase.auth.updateUser({ password });
  if (error) return { error: translateAuthError(error.message) };
  return { error: null };
}

export async function updateNotificationsRemote(notificationsEnabled: boolean) {
  const supabase = getSupabase();
  if (!supabase) return;
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;
  const { error } = await supabase
    .from("profiles")
    .update({ notifications_enabled: notificationsEnabled })
    .eq("id", user.id);
  if (error) console.warn("Uložení notifikací selhalo:", error.message);
}

export async function signOutRemote() {
  const supabase = getSupabase();
  if (supabase) await supabase.auth.signOut().catch(() => {});
  clearLocalSession();
}

export { isSupabaseConfigured };
