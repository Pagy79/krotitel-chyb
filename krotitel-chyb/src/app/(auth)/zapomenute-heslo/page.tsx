"use client";

import { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { C } from "@/data/theme";

export default function ZapomenuteHesloPage() {
  const router = useRouter();

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    router.push("/prihlaseni");
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
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          required
          placeholder="E-mail"
          className="w-full rounded-2xl px-4 py-3.5 text-sm focus:outline-none"
          style={{ backgroundColor: C.card, border: `1.5px solid ${C.line}`, color: C.ink, boxShadow: C.paperShadow }}
        />
        <button
          type="submit"
          className="paper-btn w-full py-3.5 font-bold text-base mt-2"
          style={{ backgroundColor: C.accent, color: "#FFFFFF" }}
        >
          Poslat odkaz
        </button>
      </form>
      <Link href="/prihlaseni" className="text-center text-sm mt-auto pt-8 font-semibold" style={{ color: C.accentDeep }}>
        Zpět k přihlášení
      </Link>
    </div>
  );
}
