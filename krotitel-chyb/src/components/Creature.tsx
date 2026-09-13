import type { CreatureSymbol, Mood } from "@/lib/types";

const CREATURE_SRC: Record<CreatureSymbol, string> = {
  "%": "/creatures/creature-procenta.png?v=3darms",
  "=": "/creatures/creature-vyrazy.png?v=3darms",
  x: "/creatures/creature-neznama.png?v=3darms",
  "△": "/creatures/creature-geometrie.png?v=noarms",
};

type Props = {
  symbol: CreatureSymbol;
  wildness?: number;
  size?: number;
  mood?: Mood;
};

export function Creature({ symbol, size = 90 }: Props) {
  const src = CREATURE_SRC[symbol];

  return (
    <span className="creature-figure" style={{ width: size }}>
      <img
        src={src}
        alt=""
        width={size}
        height={size}
        draggable={false}
        className="creature-photo"
      />
      <span className="creature-ground-shadow" aria-hidden />
    </span>
  );
}
