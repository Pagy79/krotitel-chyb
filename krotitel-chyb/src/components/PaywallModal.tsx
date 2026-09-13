"use client";

import { FormEvent, useEffect, useState } from "react";
import { LegalSheet } from "@/components/LegalSheet";
import { celebratePremium } from "@/lib/cosmicSounds";
import { activatePromoCode } from "@/lib/entitlements";
import { PRIVACY_POLICY, TERMS_OF_USE } from "@/lib/legal";

export function PaywallModal({
  message,
  soundEnabled,
  alreadyPremium,
  onClose,
  onActivated,
  onRestore,
}: {
  message?: string;
  soundEnabled: boolean;
  alreadyPremium?: boolean;
  onClose: () => void;
  onActivated: () => void;
  onRestore: () => Promise<boolean>;
}) {
  const [visible, setVisible] = useState(false);
  const [promo, setPromo] = useState("");
  const [promoError, setPromoError] = useState("");
  const [promoSuccess, setPromoSuccess] = useState("");
  const [promoLoading, setPromoLoading] = useState(false);
  const [restoring, setRestoring] = useState(false);
  const [restoreError, setRestoreError] = useState("");
  const [legalView, setLegalView] = useState<"privacy" | "terms" | null>(null);
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  async function onPromo(e: FormEvent) {
    e.preventDefault();
    if (promoLoading) return;
    if (!consent) {
      setPromoError("Nejdřív potvrď souhlas s podmínkami.");
      return;
    }
    setPromoError("");
    setPromoSuccess("");
    if (!promo.trim()) {
      setPromoError("Neplatný kód. Napiš si o něj na info@kompasnaskolu.cz");
      return;
    }
    setPromoLoading(true);
    const result = await activatePromoCode(promo);
    setPromoLoading(false);
    if (!result.ok) {
      setPromoError(result.message || "Neplatný kód. Napiš si o něj na info@kompasnaskolu.cz");
      return;
    }
    setPromoSuccess(result.message || "Vesmírný Premium přístup aktivován! 🚀");
    celebratePremium(soundEnabled);
    onActivated();
    setTimeout(() => onClose(), 1800);
  }

  async function restore() {
    setRestoreError("");
    setRestoring(true);
    const ok = await onRestore();
    setRestoring(false);
    if (ok) {
      if (!alreadyPremium) celebratePremium(soundEnabled);
      onClose();
      return;
    }
    setRestoreError("Na účtu zatím není aktivní PREMIUM. Aktivuj promo kód, nebo ho nejdřív zapni v češtině a obnov nákupy.");
  }

  return (
    <div className="absolute inset-0 flex items-end sm:items-center justify-center overflow-hidden" style={{ zIndex: 60 }}>
      <div
        className={`absolute inset-0 bg-zinc-900/60 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      <div
        className={`relative w-full bg-white rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Zavřít"
          className="absolute right-4 top-4 w-8 h-8 rounded-full flex items-center justify-center text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100"
        >
          ×
        </button>
        <div className="flex flex-col items-center text-center mb-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-3 shadow-lg">
            <span className="text-2xl">🚀</span>
          </div>
          <h2 className="text-lg font-bold text-zinc-900 mb-1">Přejdi na PREMIUM</h2>
          {message && (
            <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 leading-relaxed mb-2">
              {message}
            </p>
          )}
          <p className="text-xs text-zinc-500 leading-relaxed">
            Stejná pravidla jako v češtině: zdarma 2 tematické testy denně a 1 test nanečisto za 7 dní.
            Procvičování chyb je zdarma. PREMIUM se zapíná na účtu v Supabase.
          </p>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          {["Neomezené tematické testy", "Neomezené testy nanečisto", "Všechny taháky", "Stejný stav PREMIUM jako v Kompasu"].map(
            (f) => (
              <div key={f} className="flex items-center gap-2.5">
                <span className="text-emerald-500 text-sm">✓</span>
                <span className="text-sm text-zinc-700">{f}</span>
              </div>
            ),
          )}
        </div>
        <label className="flex items-start gap-2.5 mb-4 text-left">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5"
          />
          <span className="text-[11px] text-zinc-600 leading-relaxed">
            Souhlasím s{" "}
            <button type="button" className="text-violet-600 font-semibold underline" onClick={() => setLegalView("terms")}>
              Podmínkami použití
            </button>{" "}
            a{" "}
            <button type="button" className="text-violet-600 font-semibold underline" onClick={() => setLegalView("privacy")}>
              Zásadami ochrany osobních údajů
            </button>
            . Výslovně žádám o okamžité zpřístupnění digitálního obsahu a beru na vědomí, že tím ztrácím právo na odstoupení od smlouvy do 14 dnů.
          </span>
        </label>
        <form onSubmit={onPromo} className="mb-4">
          <label className="block text-xs font-semibold text-zinc-700 mb-1.5 text-left">Promo kód</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={promo}
              onChange={(e) => {
                setPromo(e.target.value);
                if (promoError) setPromoError("");
              }}
              placeholder="Zadej kód"
              autoCapitalize="characters"
              autoCorrect="off"
              spellCheck={false}
              disabled={promoLoading || !!promoSuccess}
              className="flex-1 min-w-0 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-3 text-sm font-medium text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
            <button
              type="submit"
              disabled={!consent || promoLoading || !!promoSuccess}
              className="flex-shrink-0 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold px-4 py-3 disabled:opacity-60"
            >
              {promoLoading ? "…" : "Aktivovat kód"}
            </button>
          </div>
          {promoError && <p className="mt-2 text-xs text-rose-600 text-left">{promoError}</p>}
          {promoSuccess && <p className="mt-2 text-xs text-emerald-600 font-semibold text-left">{promoSuccess}</p>}
          <p className="mt-2.5 text-xs text-zinc-500 text-left">
            Nemáš promo kód?{" "}
            <a href="mailto:info@kompasnaskolu.cz?subject=Zadost%20o%20testovaci%20kod" className="text-violet-600 font-semibold underline">
              Napiš na info@kompasnaskolu.cz
            </a>
          </p>
        </form>
        <button
          type="button"
          onClick={() => void restore()}
          disabled={restoring}
          className="w-full border border-zinc-200 hover:bg-zinc-50 text-zinc-700 font-semibold py-3 rounded-2xl text-sm disabled:opacity-60"
        >
          {restoring ? "Obnovuji…" : "Obnovit stav PREMIUM"}
        </button>
        {restoreError && <p className="mt-2 text-xs text-rose-600 text-left">{restoreError}</p>}
      </div>
      {legalView === "privacy" && (
        <LegalSheet heading="Ochrana osobních údajů" document={PRIVACY_POLICY} onClose={() => setLegalView(null)} />
      )}
      {legalView === "terms" && (
        <LegalSheet heading="Podmínky použití" document={TERMS_OF_USE} onClose={() => setLegalView(null)} />
      )}
    </div>
  );
}
