"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { C } from "@/data/theme";
import { requestPasswordReset } from "@/lib/auth";

export default function ZapomenuteHesloPage() {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    const result = await requestPasswordReset(email.trim());
    setBusy(false);
    if (result.error) {
      setError(result.error);
      return;
    }
    setSent(true);
  }

  return (
    <div className="flex-1 flex flex-col px-7 pt-6 pb-8">
      <div className="flex justify-end mb-2">
        <Link href="/prihlaseni" className="text-xl leading-none px-1" style={{ color: C.inkDim }} aria-label="Zavřít">
          ×
        </Link>
      </div>
      <h1 className="text-[28px] font-extrabold" style={{ color: C.ink }}>
        Zapomenuté heslo
      </h1>
      <p className="text-sm mt-2 mb-7" style={{ color: C.inkDim }}>
        Napiš e-mail a pošleme ti odkaz na obnovení.
      </p>
      {sent ? (
        <p className="text-sm" style={{ color: C.ink }}>
          Když účet existuje, poslali jsme odkaz na {email}. Zkontroluj i spam.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
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
            {busy ? "Chvilku…" : "Poslat odkaz"}
          </button>
        </form>
      )}
      <Link href="/prihlaseni" className="text-center text-sm mt-auto pt-8 font-semibold" style={{ color: C.accentDeep }}>
        Zpět k přihlášení
      </Link>
    </div>
  );
}
