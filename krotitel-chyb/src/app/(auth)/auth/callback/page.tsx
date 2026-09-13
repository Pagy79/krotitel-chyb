"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AUTH_GLASS_STYLE } from "@/lib/cosmicBg";
import { applyProfileToSession, ensureOwnProfile } from "@/lib/auth";
import { getSupabase } from "@/lib/supabase/client";

export default function AuthCallbackPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function finish() {
      const supabase = getSupabase();
      if (!supabase) {
        setError("Supabase ještě není nastavené.");
        return;
      }

      const params = new URLSearchParams(window.location.search);
      const oauthError = params.get("error_description") || params.get("error");
      if (oauthError) {
        setError(decodeURIComponent(oauthError.replace(/\+/g, " ")));
        return;
      }

      let {
        data: { session },
      } = await supabase.auth.getSession();

      const code = params.get("code");
      if (!session && code) {
        const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
        if (exchangeError && !/code verifier not found/i.test(exchangeError.message)) {
          setError(exchangeError.message);
          return;
        }
        ({
          data: { session },
        } = await supabase.auth.getSession());
      }

      const user = session?.user;
      if (!user) {
        setError("Přihlášení se nepovedlo. Zkus to znovu.");
        return;
      }

      const profile = await ensureOwnProfile(user.id, user.email ?? "");
      await applyProfileToSession(user.id, user.email ?? "", profile);

      const type = params.get("type") || new URLSearchParams(window.location.hash.replace(/^#/, "")).get("type");
      router.replace(type === "recovery" ? "/?auth=reset" : "/svet");
    }

    void finish();
  }, [router]);

  return (
    <div className="relative flex-1 flex flex-col items-center justify-center px-7 overflow-hidden" style={AUTH_GLASS_STYLE}>
      <p className={`text-sm ${error ? "text-red-400" : "text-indigo-100"}`}>
        {error ?? "Dokončuju přihlášení…"}
      </p>
    </div>
  );
}
