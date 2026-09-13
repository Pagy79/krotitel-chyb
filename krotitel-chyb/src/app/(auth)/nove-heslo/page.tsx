"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { C } from "@/data/theme";
import { updatePassword } from "@/lib/auth";

export default function NoveHesloPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    const result = await updatePassword(password);
    setBusy(false);
    if (result.error) {
      setError(result.error);
      return;
    }
    router.replace("/svet");
  }

  return (
    <div className="flex-1 flex flex-col px-7 pt-6 pb-8">
      <h1 className="text-[28px] font-extrabold" style={{ color: C.ink }}>
        Nové heslo
      </h1>
      <p className="text-sm mt-2 mb-7" style={{ color: C.inkDim }}>
        Zadej nové heslo k účtu.
      </p>
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <input
          type="password"
          required
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Nové heslo"
          className="w-full rounded-2xl px-4 py-3.5 text-sm focus:outline-none"
          style={{ backgroundColor: C.card, border: `1.5px solid ${C.line}`, color: C.ink, boxShadow: C.paperShadow }}
        />
        {error && (
          <p className="text-sm" style={{ color: "#B45309" }}>
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={busy}
          className="paper-btn w-full py-3.5 font-bold text-base mt-2 disabled:opacity-60"
          style={{ backgroundColor: C.accent, color: "#FFFFFF" }}
        >
          {busy ? "Chvilku…" : "Uložit heslo"}
        </button>
      </form>
      <Link href="/prihlaseni" className="text-center text-sm mt-auto pt-8 font-semibold" style={{ color: C.accentDeep }}>
        Zpět k přihlášení
      </Link>
    </div>
  );
}
