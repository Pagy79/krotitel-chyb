"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TAHAKY } from "@/data/tahaky";
import { TOPICS } from "@/data/topics";
import { COSMIC_BG_STYLE } from "@/lib/cosmicBg";
import type { TopicId } from "@/lib/types";

export function Tahak({ topicId }: { topicId: TopicId }) {
  const router = useRouter();
  const topic = TOPICS.find((t) => t.id === topicId);
  const sheets = TAHAKY[topicId];
  const [openIds, setOpenIds] = useState<Record<number, boolean>>({ 0: true });
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  if (!topic) return null;

  return (
    <div className="flex-1 min-h-0 flex flex-col p-5 sm:p-6" style={COSMIC_BG_STYLE}>
      <div className="flex items-center justify-between mb-5 flex-shrink-0">
        <button
          type="button"
          onClick={() => router.push("/svet")}
          aria-label="Zavřít tahák"
          className="w-8 h-8 rounded-full flex items-center justify-center text-indigo-300 hover:text-white hover:bg-white/10"
        >
          ✕
        </button>
        <div className="text-center">
          <p className="text-xs font-semibold text-indigo-200/70 uppercase tracking-wide">Tahák</p>
          <p className="text-sm font-bold text-white">{topic.name}</p>
        </div>
        <span className="w-8" aria-hidden />
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto overscroll-y-contain app-hide-scrollbar pb-2">
        <div className="flex flex-col gap-3">
          {sheets.map((section, idx) => {
            const isOpen = !!openIds[idx];
            return (
              <div key={section.title} className="flex-shrink-0 rounded-2xl border overflow-hidden glass-panel">
                <button
                  type="button"
                  onClick={() =>
                    setOpenIds((prev) => {
                      const nextOpen = !prev[idx];
                      return nextOpen ? { [idx]: true } : {};
                    })
                  }
                  className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-sm font-semibold text-white leading-snug">{section.title}</h3>
                  <span
                    className={`text-indigo-300 text-lg leading-none flex-shrink-0 transition-transform ${
                      isOpen ? "rotate-90" : ""
                    }`}
                    aria-hidden
                  >
                    ›
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 border-t border-white/10 pt-3">
                    {section.rule && section.rule.length > 0 && (
                      <div className="mb-3">
                        <p className="text-[10px] font-semibold text-indigo-300/60 uppercase tracking-wide mb-1.5">
                          Pravidlo
                        </p>
                        {section.rule.map((line) => (
                          <p key={line} className="text-sm text-slate-100 leading-relaxed mb-1 last:mb-0">
                            {line}
                          </p>
                        ))}
                      </div>
                    )}

                    {section.steps && section.steps.length > 0 && (
                      <div className="mb-3 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                        <p className="text-[10px] font-semibold text-cyan-200 uppercase tracking-wide mb-2">
                          Postup
                        </p>
                        <ol className="flex flex-col gap-2">
                          {section.steps.map((step, i) => (
                            <li key={step} className="text-xs text-slate-100 leading-relaxed flex gap-2.5">
                              <span className="font-bold text-cyan-300 flex-shrink-0 tabular-nums w-4">
                                {i + 1}.
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {section.groups && section.groups.length > 0 && (
                      <div className="mb-3 rounded-xl border border-white/10 overflow-hidden">
                        <p className="text-[10px] font-semibold text-indigo-300/60 uppercase tracking-wide px-3 py-2 bg-white/5 border-b border-white/10">
                          Přehled
                        </p>
                        <ul>
                          {section.groups.map((g) => (
                            <li
                              key={g.label}
                              className="px-3 py-2 flex gap-2.5 text-xs border-b border-white/5 last:border-0"
                            >
                              <span className="font-bold text-amber-300 w-4 flex-shrink-0">{g.label}</span>
                              <span className="text-indigo-100/90 leading-relaxed">{g.items}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {section.tip && (
                      <div className="rounded-xl border border-blue-400/25 bg-blue-500/10 p-3 mb-3">
                        <p className="text-[10px] font-semibold text-blue-200 uppercase tracking-wide mb-1">
                          Tip
                        </p>
                        <p className="text-xs text-blue-100 leading-relaxed">{section.tip}</p>
                      </div>
                    )}

                    {section.trap && (
                      <div className="rounded-xl border border-amber-400/25 bg-amber-500/10 p-3 mb-3">
                        <p className="text-[10px] font-semibold text-amber-200 uppercase tracking-wide mb-1">
                          Chyták
                        </p>
                        <p className="text-xs text-amber-100 leading-relaxed">{section.trap}</p>
                      </div>
                    )}

                    {section.examples && section.examples.length > 0 && (
                      <div className="rounded-xl border border-white/10 bg-white/5 p-3 mb-3">
                        <p className="text-[10px] font-semibold text-indigo-300/60 uppercase tracking-wide mb-1.5">
                          Příklady
                        </p>
                        <ul className="flex flex-col gap-1.5">
                          {section.examples.map((ex) => (
                            <li key={ex} className="text-xs text-slate-200 leading-relaxed font-mono">
                              {ex}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {section.practice && section.practice.length > 0 && (
                      <div className="rounded-xl border border-emerald-400/25 bg-emerald-500/10 p-3">
                        <p className="text-[10px] font-semibold text-emerald-200 uppercase tracking-wide mb-2">
                          Zkus to
                        </p>
                        <ul className="flex flex-col gap-2">
                          {section.practice.map((item, pi) => {
                            const key = `${idx}-${pi}`;
                            const shown = !!revealed[key];
                            return (
                              <li key={item.prompt}>
                                <button
                                  type="button"
                                  onClick={() => setRevealed((prev) => ({ ...prev, [key]: !prev[key] }))}
                                  className="w-full text-left rounded-xl px-3 py-2.5 border border-white/10 bg-black/20 hover:bg-black/30"
                                >
                                  <p className="text-xs text-slate-100 font-mono mb-1">{item.prompt}</p>
                                  <p
                                    className={`text-xs font-semibold ${
                                      shown ? "text-emerald-300" : "text-emerald-200/60"
                                    }`}
                                  >
                                    {shown ? `→ ${item.answer}` : "Ťukni pro odpověď"}
                                  </p>
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          <Link
            href={`/tema/${topicId}`}
            className="flex-shrink-0 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm py-3.5 rounded-2xl text-center mt-1"
            style={{ boxShadow: "0 10px 30px -5px rgba(99, 102, 241, 0.3)" }}
          >
            Vyzkoušet v praxi
          </Link>
        </div>
      </div>
    </div>
  );
}
