"use client";

import { useEffect, useState } from "react";

function parseDisplay(value: string): number {
  const n = Number(value.replace(/\s/g, "").replace(",", "."));
  return Number.isFinite(n) ? n : 0;
}

function formatDisplay(n: number): string {
  if (!Number.isFinite(n)) return "Chyba";
  const rounded = Math.round(n * 1e10) / 1e10;
  const raw = Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(10).replace(/\.?0+$/, "");
  return raw.replace(".", ",");
}

function applyOp(left: number, right: number, op: string): number {
  if (op === "+") return left + right;
  if (op === "−") return left - right;
  if (op === "×") return left * right;
  if (op === "÷") return right === 0 ? Number.NaN : left / right;
  return right;
}

const KEYS = [
  ["C", "⌫", "%", "÷"],
  ["7", "8", "9", "×"],
  ["4", "5", "6", "−"],
  ["1", "2", "3", "+"],
  ["0", ",", "="],
] as const;

function keyClass(key: string) {
  if (key === "C") return "bg-rose-50 text-rose-700";
  if (key === "=") return "bg-blue-600 text-white col-span-2";
  if ("÷×−+%".includes(key)) return "bg-indigo-50 text-indigo-800";
  return "bg-white text-zinc-800";
}

export function QuizCalculator({
  resetKey,
  onInsert,
}: {
  resetKey: string | number;
  onInsert?: (value: string) => void;
}) {
  const [display, setDisplay] = useState("0");
  const [acc, setAcc] = useState<number | null>(null);
  const [op, setOp] = useState<string | null>(null);
  const [overwrite, setOverwrite] = useState(true);

  useEffect(() => {
    setDisplay("0");
    setAcc(null);
    setOp(null);
    setOverwrite(true);
  }, [resetKey]);

  function press(key: string) {
    if (key === "C") {
      setDisplay("0");
      setAcc(null);
      setOp(null);
      setOverwrite(true);
      return;
    }
    if (key === "⌫") {
      if (overwrite) return;
      const next = display.slice(0, -1);
      if (!next || next === "−") {
        setDisplay("0");
        setOverwrite(true);
        return;
      }
      setDisplay(next);
      return;
    }
    if (key === "%") {
      setDisplay(formatDisplay(parseDisplay(display) / 100));
      setOverwrite(true);
      return;
    }
    if (key === ",") {
      if (overwrite) {
        setDisplay("0,");
        setOverwrite(false);
        return;
      }
      if (!display.includes(",")) setDisplay(`${display},`);
      return;
    }
    if ("0123456789".includes(key)) {
      if (overwrite || display === "0" || display === "Chyba") {
        setDisplay(key);
        setOverwrite(false);
        return;
      }
      if (display.replace(",", "").replace("−", "").length >= 12) return;
      setDisplay(`${display}${key}`);
      return;
    }
    if ("÷×−+".includes(key)) {
      const current = parseDisplay(display);
      if (acc != null && op && !overwrite) {
        const next = applyOp(acc, current, op);
        setAcc(next);
        setDisplay(formatDisplay(next));
      } else {
        setAcc(current);
      }
      setOp(key);
      setOverwrite(true);
      return;
    }
    if (key === "=") {
      if (acc == null || !op) return;
      const next = applyOp(acc, parseDisplay(display), op);
      setDisplay(formatDisplay(next));
      setAcc(null);
      setOp(null);
      setOverwrite(true);
    }
  }

  return (
    <div className="mt-4 mb-2 rounded-2xl border border-white/15 bg-white/10 p-3">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-indigo-200/80 mb-2">Kalkulačka</p>
      <div className="rounded-xl bg-zinc-900/70 text-right px-3 py-2.5 mb-2 border border-white/10">
        <p className="text-[10px] text-indigo-300/70 min-h-4">{op ? `${formatDisplay(acc ?? 0)} ${op}` : "\u00a0"}</p>
        <p className="text-xl font-semibold text-white tabular-nums break-all leading-tight">{display}</p>
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {KEYS.flat().map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => press(key)}
            className={`h-11 rounded-xl text-sm font-semibold border border-zinc-200 active:scale-95 ${keyClass(key)}`}
          >
            {key}
          </button>
        ))}
      </div>
      {onInsert && (
        <button
          type="button"
          onClick={() => onInsert(display.replace(/,$/, ""))}
          className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 text-indigo-100 text-xs font-semibold py-2.5 hover:bg-white/15"
        >
          Vložit výsledek do odpovědi
        </button>
      )}
    </div>
  );
}
