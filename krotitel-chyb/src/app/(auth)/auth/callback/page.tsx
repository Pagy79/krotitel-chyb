"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { C } from "@/data/theme";
import { applyProfileToSession, fetchProfile } from "@/lib/auth";
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
      const code = params.get("code");
      if (code) {
        const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
        if (exchangeError) {
          setError(exchangeError.message);
          return;
        }
      }

      const { data } = await supabase.auth.getSession();
      const user = data.session?.user;
      if (!user) {
        setError("Přihlášení se nepovedlo. Zkus to znovu.");
        return;
      }

      const profile = await fetchProfile(user.id);
      await applyProfileToSession(user.id, user.email ?? "", profile);

      const type = params.get("type") || new URLSearchParams(window.location.hash.replace(/^#/, "")).get("type");
      router.replace(type === "recovery" ? "/nove-heslo" : "/svet");
    }

    void finish();
  }, [router]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-7">
      <p className="text-sm" style={{ color: error ? "#B45309" : C.inkDim }}>
        {error ?? "Dokončuju přihlášení…"}
      </p>
    </div>
  );
}
