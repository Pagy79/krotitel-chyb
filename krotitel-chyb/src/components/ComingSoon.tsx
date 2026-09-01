"use client";

import { C } from "@/data/theme";
import { Creature } from "@/components/Creature";
import type { Topic } from "@/lib/types";

export function ComingSoon({ topic, onClose }: { topic: Topic; onClose: () => void }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center p-7" style={{ backgroundColor: C.bg }}>
      <Creature symbol={topic.symbol} wildness={1} mood="curious" size={100} />
      <h2 className="text-lg font-extrabold mt-4 mb-2" style={{ color: C.ink }}>
        Tenhle tvor ještě čeká
      </h2>
      <p className="text-sm leading-relaxed mb-8" style={{ color: C.inkDim }}>
        Otázky na „{topic.name}“ se teprve píšou. Zkus zatím jiné území.
      </p>
      <button
        onClick={onClose}
        className="w-full py-4 rounded-2xl font-bold text-base paper-btn"
        style={{ backgroundColor: C.accent, color: "#FFFFFF" }}
      >
        Zpátky ke tvorům
      </button>
    </div>
  );
}
