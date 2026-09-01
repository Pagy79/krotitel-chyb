"use client";

import { useEffect, useState } from "react";

const FORMULAS = [
  "(a + b)² = a² + 2ab + b²",
  "a² + b² = c²",
  "sin²α + cos²α = 1",
  "x = (−b ± √(b² − 4ac)) / 2a",
  "(x − 3)(x + 3) = x² − 9",
  "S = πr²",
  "25 % = 1/4",
  "2(x + 4) = 2x + 8",
  "V = a³",
  "1/2 + 1/3 = 5/6",
];

const MAX_VISIBLE = 3;
const MAX_SHOW_MS = 5000;
const MIN_SHOW_MS = 1800;
const STAGGER_MS = 900;

type Slot = 0 | 1 | 2;

type Floater = {
  key: number;
  slot: Slot;
  text: string;
  x: number;
  y: number;
  rotate: number;
  size: number;
  until: number;
};

function layoutForSlot(slot: Slot) {
  if (slot === 0) {
    return { x: 5 + Math.random() * 8, y: 6 + Math.random() * 10, rotate: -8 + Math.random() * 14, size: 16 + Math.random() * 3 };
  }
  if (slot === 1) {
    return { x: 16 + Math.random() * 14, y: 40 + Math.random() * 10, rotate: -8 + Math.random() * 14, size: 16 + Math.random() * 3 };
  }
  return { x: 7 + Math.random() * 12, y: 70 + Math.random() * 10, rotate: -8 + Math.random() * 14, size: 16 + Math.random() * 3 };
}

function randomDuration() {
  return MIN_SHOW_MS + Math.random() * (MAX_SHOW_MS - MIN_SHOW_MS);
}

function pickText(used: string[]) {
  const pool = FORMULAS.filter((f) => !used.includes(f));
  return pool[Math.floor(Math.random() * pool.length)] ?? FORMULAS[0];
}

function freeSlot(items: Floater[]): Slot | null {
  const taken = new Set(items.map((item) => item.slot));
  const order: Slot[] = [0, 1, 2];
  return order.find((slot) => !taken.has(slot)) ?? null;
}

export function WelcomeFormulas() {
  const [items, setItems] = useState<Floater[]>([]);

  useEffect(() => {
    let nextKey = 0;

    const spawn = () => {
      setItems((prev) => {
        if (prev.length >= MAX_VISIBLE) return prev;
        const slot = freeSlot(prev);
        if (slot == null) return prev;
        const now = Date.now();
        const next: Floater = {
          key: nextKey,
          slot,
          text: pickText(prev.map((item) => item.text)),
          until: now + randomDuration(),
          ...layoutForSlot(slot),
        };
        nextKey += 1;
        return [...prev, next];
      });
    };

    spawn();
    const t1 = window.setTimeout(spawn, STAGGER_MS);
    const t2 = window.setTimeout(spawn, STAGGER_MS * 2);

    const tick = window.setInterval(() => {
      const now = Date.now();
      setItems((prev) => prev.filter((item) => item.until > now));
    }, 120);

    let refill = 0;
    const t3 = window.setTimeout(() => {
      refill = window.setInterval(() => {
        setItems((prev) => {
          if (prev.length >= MAX_VISIBLE) return prev;
          const slot = freeSlot(prev);
          if (slot == null) return prev;
          const now = Date.now();
          const next: Floater = {
            key: nextKey,
            slot,
            text: pickText(prev.map((item) => item.text)),
            until: now + randomDuration(),
            ...layoutForSlot(slot),
          };
          nextKey += 1;
          return [...prev, next];
        });
      }, STAGGER_MS);
    }, STAGGER_MS * 3);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      window.clearInterval(tick);
      window.clearInterval(refill);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-[6] overflow-hidden pointer-events-none" aria-hidden="true">
      {items.map((item) => (
        <span
          key={item.key}
          className="absolute whitespace-nowrap font-bold transition-opacity duration-500"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            transform: `rotate(${item.rotate}deg)`,
            fontSize: `${item.size}px`,
            opacity: 0.9,
            color: "#F7F3E8",
            textShadow: "0 1px 8px rgba(10,51,44,0.45)",
          }}
        >
          {item.text}
        </span>
      ))}
    </div>
  );
}
