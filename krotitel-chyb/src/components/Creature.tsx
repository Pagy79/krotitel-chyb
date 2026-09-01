import type { CreatureSymbol, Mood } from "@/lib/types";

const BODY_SHAPES: Record<CreatureSymbol, string> = {
  "%": "M50 16c19 0 34 15 34 34s-15 34-34 34-34-15-34-34 15-34 34-34Z",
  "=": "M30 18c14 0 22 10 22 22S44 62 30 62 8 52 8 40 16 18 30 18Zm40 22c14 0 22 10 22 22s-8 22-22 22-22-10-22-22 8-22 22-22Z",
  x: "M50 14 68 32 90 32 90 68 68 68 50 90 32 68 10 68 10 32 32 32Z",
  "△": "M50 12 92 82 8 82Z",
};

const PALETTES: Record<CreatureSymbol, { wild: string; tame: string }> = {
  "%": { wild: "#3D9B6A", tame: "#2FB88A" },
  "=": { wild: "#FF3D71", tame: "#F48AA8" },
  x: { wild: "#B14AFF", tame: "#C9A0FF" },
  "△": { wild: "#FF9A2E", tame: "#F0B45A" },
};

const EYES: Record<CreatureSymbol, { cx1: number; cy1: number; cx2: number; cy2: number }> = {
  "%": { cx1: 38, cy1: 48, cx2: 62, cy2: 48 },
  "=": { cx1: 30, cy1: 40, cx2: 70, cy2: 62 },
  x: { cx1: 42, cy1: 46, cx2: 58, cy2: 46 },
  "△": { cx1: 40, cy1: 62, cx2: 60, cy2: 62 },
};

type Props = {
  symbol: CreatureSymbol;
  wildness: number;
  size?: number;
  mood?: Mood;
};

export function Creature({ symbol, wildness, size = 90, mood }: Props) {
  const w = Math.max(0, Math.min(1, wildness));
  const palette = PALETTES[symbol];
  const bodyColor = w > 0.5 ? palette.wild : palette.tame;
  const outline = "#1A1A1A";
  const jitter = w * 8;
  const activeMood: Mood = mood || (w > 0.4 ? "wary" : "calm");
  const eyeInner = EYES[symbol];
  const midX = (eyeInner.cx1 + eyeInner.cx2) / 2;

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden>
      {w > 0.05 &&
        Array.from({ length: 5 }).map((_, i) => {
          const angle = (i * 72 * Math.PI) / 180 + 0.4;
          const baseR = 40;
          const len = 10 + jitter;
          const x1 = 50 + baseR * Math.cos(angle);
          const y1 = 50 + baseR * Math.sin(angle) * 0.85;
          const x2 = 50 + (baseR + len) * Math.cos(angle + w * 0.3);
          const y2 = 50 + (baseR + len) * Math.sin(angle + w * 0.3) * 0.85;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={outline}
              strokeWidth="5"
              strokeLinecap="round"
              opacity={0.85}
            />
          );
        })}

      <path d={BODY_SHAPES[symbol]} fill={bodyColor} stroke={outline} strokeWidth="3" strokeLinejoin="round" />

      {activeMood === "happy" ? (
        <>
          <path
            d={`M${eyeInner.cx1 - 5} ${eyeInner.cy1} Q${eyeInner.cx1} ${eyeInner.cy1 - 6} ${eyeInner.cx1 + 5} ${eyeInner.cy1}`}
            fill="none"
            stroke={outline}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d={`M${eyeInner.cx2 - 5} ${eyeInner.cy2} Q${eyeInner.cx2} ${eyeInner.cy2 - 6} ${eyeInner.cx2 + 5} ${eyeInner.cy2}`}
            fill="none"
            stroke={outline}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </>
      ) : activeMood === "curious" ? (
        <>
          <circle cx={eyeInner.cx1} cy={eyeInner.cy1} r="5.5" fill={outline} />
          <circle cx={eyeInner.cx2} cy={eyeInner.cy2} r="3.5" fill={outline} />
        </>
      ) : (
        <>
          <circle cx={eyeInner.cx1} cy={eyeInner.cy1} r="4.5" fill={outline} />
          <circle cx={eyeInner.cx2} cy={eyeInner.cy2} r="4.5" fill={outline} />
        </>
      )}

      {(activeMood === "wary" || activeMood === "calm") && (
        <>
          <line x1={eyeInner.cx1 - 7} y1={eyeInner.cy1 - 10} x2={eyeInner.cx1 + 7} y2={eyeInner.cy1 - 10} stroke={outline} strokeWidth="2.5" strokeLinecap="round" />
          <line x1={eyeInner.cx2 - 7} y1={eyeInner.cy2 - 10} x2={eyeInner.cx2 + 7} y2={eyeInner.cy2 - 10} stroke={outline} strokeWidth="2.5" strokeLinecap="round" />
        </>
      )}
      {activeMood === "happy" && (
        <>
          <line x1={eyeInner.cx1 - 7} y1={eyeInner.cy1 - 12} x2={eyeInner.cx1 + 5} y2={eyeInner.cy1 - 15} stroke={outline} strokeWidth="2.5" strokeLinecap="round" />
          <line x1={eyeInner.cx2 + 7} y1={eyeInner.cy2 - 12} x2={eyeInner.cx2 - 5} y2={eyeInner.cy2 - 15} stroke={outline} strokeWidth="2.5" strokeLinecap="round" />
        </>
      )}
      {activeMood === "curious" && (
        <line x1={eyeInner.cx1 - 7} y1={eyeInner.cy1 - 9} x2={eyeInner.cx1 + 7} y2={eyeInner.cy1 - 13} stroke={outline} strokeWidth="2.5" strokeLinecap="round" />
      )}

      {(activeMood === "wary" || activeMood === "calm") && (
        <path d={`M${midX - 8} 71 Q${midX} 76 ${midX + 8} 71`} fill="none" stroke={outline} strokeWidth="2.5" strokeLinecap="round" />
      )}
      {activeMood === "happy" && (
        <path d={`M${midX - 10} 70 Q${midX - 2} 80 ${midX + 10} 66`} fill="none" stroke={outline} strokeWidth="3" strokeLinecap="round" />
      )}
      {activeMood === "curious" && <circle cx={midX} cy="73" r="3.5" fill="none" stroke={outline} strokeWidth="2.5" />}
    </svg>
  );
}
