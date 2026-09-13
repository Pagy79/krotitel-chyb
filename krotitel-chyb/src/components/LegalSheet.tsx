"use client";

import { useEffect, useState } from "react";
import { SETTINGS_GLASS_STYLE } from "@/lib/cosmicBg";
import type { LegalDocument } from "@/lib/legal";

const TILE = {
  backgroundColor: "rgba(255, 255, 255, 0.06)",
  borderColor: "rgba(255, 255, 255, 0.12)",
} as const;

export function LegalSheet({
  heading,
  document,
  onClose,
}: {
  heading: string;
  document: LegalDocument;
  onClose: () => void;
}) {
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
          <h2 className="text-base font-bold text-white text-center px-2">{heading}</h2>
          <button type="button" onClick={onClose} className="w-14 text-right text-sm font-semibold text-blue-400 hover:text-blue-300">
            Hotovo
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
          <div className="backdrop-blur-xl rounded-2xl border p-4" style={TILE}>
            <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-1">{document.title}</h3>
            <p className="text-xs text-indigo-300/70">
              Účinnost: {document.effectiveFrom} · Aktualizace: {document.lastUpdated}
            </p>
          </div>
          {document.sections.map((section) => (
            <div key={section.heading} className="backdrop-blur-xl rounded-2xl border p-4 flex flex-col gap-2.5" style={TILE}>
              <p className="text-xs font-semibold text-indigo-300/80 uppercase tracking-wide">{section.heading}</p>
              {(section.paragraphs || []).map((p) => (
                <p key={p} className="text-xs text-indigo-100/90 leading-relaxed">
                  {p}
                </p>
              ))}
              {(section.bullets || []).length > 0 && (
                <ul className="flex flex-col gap-2 pl-0.5">
                  {(section.bullets || []).map((b) => (
                    <li key={b} className="text-xs text-indigo-100/90 leading-relaxed flex gap-2">
                      <span className="text-indigo-300 flex-shrink-0">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {(section.paragraphsAfter || []).map((p) => (
                <p key={p} className="text-xs text-indigo-100/90 leading-relaxed">
                  {p}
                </p>
              ))}
              {(section.bulletsAfter || []).length > 0 && (
                <ul className="flex flex-col gap-2 pl-0.5">
                  {(section.bulletsAfter || []).map((b) => (
                    <li key={b} className="text-xs text-indigo-100/90 leading-relaxed flex gap-2">
                      <span className="text-indigo-300 flex-shrink-0">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {(section.closing || []).map((p) => (
                <p key={p} className="text-xs text-indigo-100/90 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
