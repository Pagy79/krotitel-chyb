"use client";

import { useEffect, useState } from "react";
import { SETTINGS_GLASS_STYLE } from "@/lib/cosmicBg";
import { TEST_QUESTION_COUNT, VELKY_TEST_MINUTES, VELKY_TEST_QUESTION_COUNT } from "@/lib/velkyTestRules";

const TILE = {
  backgroundColor: "rgba(255, 255, 255, 0.06)",
  borderColor: "rgba(255, 255, 255, 0.12)",
} as const;

export function HelpSheet({ onClose }: { onClose: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="absolute inset-0 z-[70] flex items-end sm:items-center justify-center overflow-hidden">
      <button
        type="button"
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
        aria-label="Zavřít"
        onClick={onClose}
      />
      <div
        className={`relative w-full max-h-[min(88%,88dvh)] flex flex-col rounded-t-3xl sm:rounded-3xl border backdrop-blur-xl overflow-hidden transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
        }`}
        style={SETTINGS_GLASS_STYLE}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 flex-shrink-0">
          <span className="w-14" aria-hidden />
          <h2 className="text-base font-bold text-white">Nápověda a podpora</h2>
          <button type="button" onClick={onClose} className="w-14 text-right text-sm font-semibold text-blue-400 hover:text-blue-300">
            Hotovo
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
          <div className="backdrop-blur-xl rounded-2xl border p-4 flex flex-col gap-3" style={TILE}>
            <p className="text-xs font-semibold text-indigo-300/70 uppercase tracking-wide">Jak trénovat</p>
            <p className="text-xs text-indigo-200/90 leading-relaxed">
              Tematické procvičování má {TEST_QUESTION_COUNT} otázek. Test nanečisto má {VELKY_TEST_QUESTION_COUNT} úloh, {VELKY_TEST_MINUTES} minut a {VELKY_TEST_QUESTION_COUNT * 2} bodů — stejný formát jako v češtině. Odpovídáš A–D.
            </p>
          </div>

          <div className="backdrop-blur-xl rounded-2xl border p-4" style={TILE}>
            <p className="text-xs font-semibold text-indigo-300/70 uppercase tracking-wide mb-3">Appka na plochu telefonu</p>
            <p className="text-xs text-indigo-200/90 leading-relaxed mb-3">
              Krotitele chyb si můžeš přidat na plochu jako běžnou aplikaci (bez App Store / Google Play).
            </p>
            <div className="flex flex-col gap-3.5">
              <div>
                <p className="text-sm font-semibold text-white">iPhone / iPad (Safari)</p>
                <ol className="mt-1 flex flex-col gap-1 list-decimal list-inside text-xs text-indigo-300/80 leading-relaxed">
                  <li>
                    Otevři appku v <strong className="text-slate-100">Safari</strong> (ne v Chrome).
                  </li>
                  <li>
                    Klepni na ikonu <strong className="text-slate-100">Sdílet</strong> (čtverec se šipkou nahoru).
                  </li>
                  <li>
                    Zvol <strong className="text-slate-100">Přidat na plochu</strong> → Přidat.
                  </li>
                </ol>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Android (Chrome)</p>
                <ol className="mt-1 flex flex-col gap-1 list-decimal list-inside text-xs text-indigo-300/80 leading-relaxed">
                  <li>
                    Otevři appku v <strong className="text-slate-100">Chrome</strong>.
                  </li>
                  <li>
                    Klepni na <strong className="text-slate-100">⋮</strong> (tři tečky vpravo nahoře).
                  </li>
                  <li>
                    Zvol <strong className="text-slate-100">Nainstalovat aplikaci</strong> nebo{" "}
                    <strong className="text-slate-100">Přidat na plochu</strong> → potvrď.
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-xl rounded-2xl border p-4" style={TILE}>
            <p className="text-xs font-semibold text-indigo-300/70 uppercase tracking-wide mb-2">Verze zdarma a PREMIUM</p>
            <ul className="flex flex-col gap-2">
              <li className="text-xs text-indigo-200/90 leading-relaxed flex gap-2">
                <span className="text-zinc-300 flex-shrink-0">•</span>
                <span>
                  <strong className="text-slate-100">Zdarma:</strong> 2 tematická procvičování denně a 1 test nanečisto týdně. Procvičování chyb limit neubírá.
                </span>
              </li>
              <li className="text-xs text-indigo-200/90 leading-relaxed flex gap-2">
                <span className="text-zinc-300 flex-shrink-0">•</span>
                <span>
                  <strong className="text-slate-100">PREMIUM:</strong> neomezené testy, všechny otázky a taháky za 69&nbsp;Kč jednorázově (Stripe), nebo přes promo kód.
                </span>
              </li>
              <li className="text-xs text-indigo-200/90 leading-relaxed flex gap-2">
                <span className="text-zinc-300 flex-shrink-0">•</span>
                <span>
                  Nemáš kód? Napiš na{" "}
                  <a href="mailto:info@kompasnaskolu.cz?subject=Zadost%20o%20testovaci%20kod" className="text-blue-300 underline underline-offset-2">
                    info@kompasnaskolu.cz
                  </a>
                  .
                </span>
              </li>
            </ul>
          </div>

          <div className="backdrop-blur-xl rounded-2xl border p-4" style={TILE}>
            <p className="text-xs font-semibold text-indigo-300/70 uppercase tracking-wide mb-2">Bodování, štít a poháry</p>
            <ul className="flex flex-col gap-2">
              <li className="text-xs text-indigo-200/90 leading-relaxed flex gap-2">
                <span className="text-zinc-300 flex-shrink-0">•</span>
                <span>
                  <strong className="text-slate-100">Správně bez nápovědy:</strong> 2 body · <strong className="text-slate-100">s nápovědou:</strong> 1 bod.
                </span>
              </li>
              <li className="text-xs text-indigo-200/90 leading-relaxed flex gap-2">
                <span className="text-zinc-300 flex-shrink-0">•</span>
                <span>
                  <strong className="text-slate-100">Špatně:</strong> 0 bodů. Dvě chyby za sebou = navíc −1 bod.
                </span>
              </li>
              <li className="text-xs text-indigo-200/90 leading-relaxed flex gap-2">
                <span className="text-zinc-300 flex-shrink-0">•</span>
                <span>
                  3 správné odpovědi v řadě (bez nápovědy) ti dají <strong className="text-slate-100">štít</strong> — jedna chyba se pohltí a můžeš zkusit otázku znovu.
                </span>
              </li>
              <li className="text-xs text-indigo-200/90 leading-relaxed flex gap-2">
                <span className="text-zinc-300 flex-shrink-0">•</span>
                <span>
                  Otázky jsou výběr A–D. Po testu nanečisto dostaneš % úspěšnosti a od 70 / 80 / 90 % bronzový, stříbrný nebo zlatý pohár.
                </span>
              </li>
            </ul>
          </div>

          <div className="backdrop-blur-xl rounded-2xl border p-4" style={TILE}>
            <p className="text-xs font-semibold text-indigo-300/70 uppercase tracking-wide mb-2">Zvuky, haptika a připomínky</p>
            <ul className="flex flex-col gap-2">
              <li className="text-xs text-indigo-200/90 leading-relaxed flex gap-2">
                <span className="text-zinc-300 flex-shrink-0">•</span>
                <span>
                  V Nastavení zapneš <strong className="text-slate-100">Zvuky a haptickou odezvu</strong> — kosmické blipy při odpovědích a vibrace (kde to telefon umí).
                </span>
              </li>
              <li className="text-xs text-indigo-200/90 leading-relaxed flex gap-2">
                <span className="text-zinc-300 flex-shrink-0">•</span>
                <span>
                  <strong className="text-slate-100">Denní připomínky:</strong> když ten den ještě neprocvičuješ, kolem 18:00 ti přijde e-mail z info@kompasnaskolu.cz s odkazem do appky.
                </span>
              </li>
            </ul>
          </div>

          <div className="backdrop-blur-xl rounded-2xl border p-4" style={TILE}>
            <p className="text-sm font-semibold text-white mb-1">Tvůj účet</p>
            <p className="text-xs text-indigo-300/70 leading-relaxed">
              Přezdívka, pokrok, limity a stav PREMIUM se ukládají do cloudu (Supabase). V Nastavení můžeš obnovit nákupy / stav PREMIUM nebo upravit preference.
            </p>
          </div>

          <div className="backdrop-blur-xl rounded-2xl border p-4" style={TILE}>
            <p className="text-xs font-semibold text-indigo-300/70 uppercase tracking-wide mb-2">Podpora a kontakt</p>
            <p className="text-xs text-indigo-200/90 leading-relaxed mb-3">Hlášení chyb, dotazy, nápady i žádost o testovací kód:</p>
            <a
              href="mailto:info@kompasnaskolu.cz"
              className="w-full flex items-center gap-3 border border-white/15 rounded-xl p-3.5"
              style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
            >
              <span className="text-sm font-medium text-blue-300">info@kompasnaskolu.cz</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
