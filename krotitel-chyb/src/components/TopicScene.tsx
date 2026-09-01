import type { TopicId } from "@/lib/types";
import { Creature } from "@/components/Creature";
import type { CreatureSymbol } from "@/lib/types";

export function TopicScene({
  topicId,
  symbol,
  wildness,
}: {
  topicId: TopicId;
  symbol: CreatureSymbol;
  wildness: number;
}) {
  if (topicId === "procenta") {
    return (
      <div className="relative w-full h-full overflow-hidden">
        <svg viewBox="0 0 360 420" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden>
          <rect width="360" height="420" fill="#FDF7E8" />
          <g stroke="#E4D9C4" strokeWidth="0.7">
            {Array.from({ length: 13 }, (_, i) => (
              <line key={`v${i}`} x1={i * 30} y1="0" x2={i * 30} y2="420" />
            ))}
            {Array.from({ length: 15 }, (_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 30} x2="360" y2={i * 30} />
            ))}
          </g>
          <path
            d="M0 150 L40 128 L80 142 L120 108 L160 122 L200 86 L240 118 L280 72 L320 98 L360 64"
            fill="none"
            stroke="#D4C4A4"
            strokeWidth="2.2"
            opacity="0.55"
          />
          <path
            d="M0 178 L50 160 L95 170 L140 148 L190 162 L240 140 L290 154 L360 130"
            fill="none"
            stroke="#E2D4B8"
            strokeWidth="1.6"
            opacity="0.5"
          />
          <path
            d="M0 260 L55 238 L100 252 L150 220 L200 246 L250 210 L300 236 L360 218"
            fill="none"
            stroke="#D4C4A4"
            strokeWidth="1.8"
            opacity="0.4"
          />
          <path
            d="M0 330 L70 312 L120 328 L180 300 L240 322 L300 294 L360 318"
            fill="none"
            stroke="#E2D4B8"
            strokeWidth="1.5"
            opacity="0.4"
          />
          <text x="18" y="36" fontSize="42" fontWeight="700" fill="#D4C4A4" opacity="0.35">
            %
          </text>
          <text x="300" y="54" fontSize="34" fontWeight="700" fill="#D4C4A4" opacity="0.28">
            %
          </text>
          <text x="12" y="250" fontSize="56" fontWeight="700" fill="#E8DCC6" opacity="0.32">
            %
          </text>
          <text x="280" y="280" fontSize="40" fontWeight="700" fill="#D4C4A4" opacity="0.28">
            %
          </text>
          <text x="150" y="400" fontSize="64" fontWeight="700" fill="#E8DCC6" opacity="0.28">
            %
          </text>

          <g transform="translate(28,42)">
            <circle cx="38" cy="38" r="38" fill="#F4C4CE" />
            <path d="M38 38 L38 0 A38 38 0 0 1 76 38 Z" fill="#E45A7C" />
            <text x="48" y="24" fontSize="11" fontWeight="800" fill="#2A3328">
              50%
            </text>
          </g>
          <g transform="translate(92,18)">
            <circle cx="24" cy="24" r="24" fill="#C9DFF0" />
            <path d="M24 24 L24 0 A24 24 0 0 1 38.1 5.3 Z" fill="#5BA3D9" />
            <text x="28" y="16" fontSize="9" fontWeight="800" fill="#2A3328">
              20%
            </text>
          </g>

          <g transform="translate(24,248)">
            <circle cx="28" cy="28" r="28" fill="#E8D4F0" />
            <path d="M28 28 L28 0 A28 28 0 0 1 52.2 14 Z" fill="#9B6BC8" />
            <text x="34" y="18" fontSize="10" fontWeight="800" fill="#2A3328">
              25%
            </text>
          </g>
          <g transform="translate(78,292)">
            <circle cx="20" cy="20" r="20" fill="#F4C4CE" />
            <path d="M20 20 L20 0 A20 20 0 1 1 6 34.14 Z" fill="#E45A7C" />
            <text x="10" y="28" fontSize="8" fontWeight="800" fill="#2A3328">
              75%
            </text>
          </g>

          <g fontSize="8" fontWeight="700" textAnchor="middle">
            <line x1="28" y1="148" x2="52" y2="168" stroke="#E8A060" strokeWidth="1.4" />
            <line x1="52" y1="148" x2="28" y2="168" stroke="#E8A060" strokeWidth="1.4" />
            <line x1="16" y1="168" x2="8" y2="190" stroke="#E8A060" strokeWidth="1.2" />
            <line x1="16" y1="168" x2="28" y2="190" stroke="#E8A060" strokeWidth="1.2" />
            <line x1="40" y1="168" x2="40" y2="190" stroke="#E8A060" strokeWidth="1.2" />
            <line x1="40" y1="168" x2="56" y2="190" stroke="#E8A060" strokeWidth="1.2" />
            <circle cx="40" cy="148" r="11" fill="#F0B27A" />
            <text x="40" y="151" fill="#3A2A18">
              2/12
            </text>
            <circle cx="16" cy="168" r="10" fill="#E8943A" />
            <text x="16" y="171" fill="#FFF8EC">
              1/3
            </text>
            <circle cx="52" cy="168" r="10" fill="#E8943A" />
            <text x="52" y="171" fill="#FFF8EC">
              2/3
            </text>
            <circle cx="8" cy="190" r="9" fill="#F4C49A" />
            <text x="8" y="193" fill="#3A2A18">
              1/3
            </text>
            <circle cx="28" cy="190" r="9" fill="#F4C49A" />
            <text x="28" y="193" fill="#3A2A18">
              3/5
            </text>
            <circle cx="44" cy="190" r="9" fill="#F4C49A" />
            <text x="44" y="193" fill="#3A2A18">
              3/5
            </text>
            <circle cx="62" cy="190" r="9" fill="#F4C49A" />
            <text x="62" y="193" fill="#3A2A18">
              1/4
            </text>
          </g>

          <g fontSize="8" fontWeight="700" textAnchor="middle">
            <line x1="300" y1="88" x2="278" y2="108" stroke="#7EB6E0" strokeWidth="1.4" />
            <line x1="300" y1="88" x2="322" y2="108" stroke="#7EB6E0" strokeWidth="1.4" />
            <line x1="278" y1="108" x2="266" y2="130" stroke="#7EB6E0" strokeWidth="1.2" />
            <line x1="278" y1="108" x2="290" y2="130" stroke="#7EB6E0" strokeWidth="1.2" />
            <line x1="322" y1="108" x2="322" y2="130" stroke="#7EB6E0" strokeWidth="1.2" />
            <circle cx="300" cy="88" r="12" fill="#8EC4EA" />
            <text x="300" y="91" fill="#1E2A38">
              1/10
            </text>
            <circle cx="278" cy="108" r="10" fill="#5BA3D9" />
            <text x="278" y="111" fill="#FFF8EC">
              3/3
            </text>
            <circle cx="322" cy="108" r="10" fill="#5BA3D9" />
            <text x="322" y="111" fill="#FFF8EC">
              3/3
            </text>
            <circle cx="266" cy="130" r="9" fill="#C9DFF0" />
            <text x="266" y="133" fill="#1E2A38">
              2/5
            </text>
            <circle cx="290" cy="130" r="9" fill="#C9DFF0" />
            <text x="290" y="133" fill="#1E2A38">
              5/5
            </text>
            <circle cx="322" cy="130" r="9" fill="#C9DFF0" />
            <text x="322" y="133" fill="#1E2A38">
              3/3
            </text>
          </g>

          <g transform="translate(248,300)">
            <line x1="8" y1="72" x2="96" y2="72" stroke="#C9B89A" strokeWidth="1.2" />
            <rect x="12" y="40" width="14" height="32" rx="2" fill="#E45A7C" />
            <rect x="12" y="26" width="14" height="14" rx="2" fill="#C9A0E8" />
            <rect x="34" y="30" width="14" height="42" rx="2" fill="#7B4CDB" />
            <rect x="56" y="8" width="14" height="64" rx="2" fill="#5BA3D9" />
            <rect x="56" y="8" width="14" height="18" rx="2" fill="#C9A0E8" />
            <rect x="78" y="44" width="14" height="28" rx="2" fill="#F4A0B4" />
            <text x="19" y="84" fontSize="9" fill="#6B7368" textAnchor="middle">
              1
            </text>
            <text x="41" y="84" fontSize="9" fill="#6B7368" textAnchor="middle">
              2
            </text>
            <text x="63" y="84" fontSize="9" fill="#6B7368" textAnchor="middle">
              3
            </text>
            <text x="85" y="84" fontSize="9" fill="#6B7368" textAnchor="middle">
              4
            </text>
          </g>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none pb-6">
          <Creature symbol={symbol} wildness={wildness} size={92} />
        </div>
      </div>
    );
  }

  if (topicId === "vyrazy") {
    return (
      <div className="relative w-full h-full overflow-hidden" style={{ backgroundColor: "#F9F7F0" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/bubbles/vyrazy.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
    );
  }

  if (topicId === "geometrie") {
    return (
      <div className="relative w-full h-full overflow-hidden">
        <svg viewBox="0 0 360 420" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden>
          <rect width="360" height="420" fill="#FDF7E8" />
          <polygon points="0,0 160,0 0,210" fill="#F3D7A4" opacity="0.55" />
          <polygon points="360,0 200,0 360,180" fill="#F0C47A" opacity="0.45" />
          <polygon points="0,80 90,0 180,120 40,220" fill="#F8E2B8" opacity="0.7" />
          <polygon points="180,-10 360,40 360,200 250,140" fill="#E8B86A" opacity="0.35" />
          <polygon points="40,200 140,160 200,280 20,320" fill="#F6DCA8" opacity="0.5" />
          <polygon points="220,180 360,160 360,360 200,300" fill="#EFC98A" opacity="0.4" />
          <polygon points="0,280 120,250 90,420 0,420" fill="#E8C88A" opacity="0.45" />
          <polygon points="140,300 280,260 360,420 80,420" fill="#F3D4A0" opacity="0.4" />
          <polygon points="110,40 210,20 250,110 150,140" fill="#FFF6DC" opacity="0.65" />

          <g fill="#D4C4A4" opacity="0.35">
            {Array.from({ length: 9 }, (_, row) =>
              Array.from({ length: 9 }, (_, col) => (
                <circle key={`${row}-${col}`} cx={110 + col * 16} cy={90 + row * 16} r="1.1" />
              )),
            )}
          </g>

          <g transform="translate(18,70)" fill="none" stroke="#C45A18" strokeWidth="1.4">
            <polygon points="48,8 86,36 72,82 24,82 10,36" stroke="#E8942A" />
            <polygon points="48,8 72,82 24,82" fill="#F0B24A" stroke="none" opacity="0.55" />
            <polygon points="48,8 86,36 72,82" fill="#E8942A" stroke="none" opacity="0.35" />
            <line x1="48" y1="8" x2="48" y2="82" stroke="#D47820" />
            <line x1="10" y1="36" x2="86" y2="36" stroke="#D47820" />
          </g>

          <g transform="translate(248,88)" fill="none" stroke="#8A7A62" strokeWidth="1.5">
            <path d="M8 70 L8 10 L68 10 L68 70 Z" />
            <path d="M8 10 L38 28 L68 10" />
            <path d="M8 70 L38 52 L68 70" />
            <path d="M8 10 L38 52 M68 10 L38 52 M8 70 L38 28 M68 70 L38 28" stroke="#E8942A" opacity="0.7" />
            <circle cx="38" cy="40" r="10" stroke="#E8942A" />
          </g>

          <polygon points="288,28 318,48 278,58" fill="#F58220" stroke="#2C2416" strokeWidth="1.5" />

          <g transform="translate(8,330)" fill="none" stroke="#48A08B" strokeWidth="2.2">
            <path d="M8 48 A40 40 0 0 1 88 48" />
            <line x1="48" y1="48" x2="48" y2="12" />
            <line x1="48" y1="48" x2="82" y2="48" />
            <line x1="48" y1="48" x2="18" y2="28" />
          </g>
          <g transform="translate(250,338)" fill="#C4A574" stroke="#8A6A3A" strokeWidth="1.2">
            <path d="M8 62 L8 8 L78 62 Z" />
            <line x1="8" y1="8" x2="8" y2="62" />
            <line x1="8" y1="62" x2="78" y2="62" />
          </g>
          <g transform="translate(292,348)" fill="#D4B888" stroke="#8A6A3A" strokeWidth="1.1">
            <path d="M4 48 L4 4 L52 48 Z" opacity="0.9" />
          </g>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none pb-8">
          <Creature symbol={symbol} wildness={wildness} size={120} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[200px] flex items-center justify-center">
      <svg viewBox="0 0 320 200" className="absolute inset-0 w-full h-full">
        <line x1="40" y1="120" x2="280" y2="120" stroke="#3A2A18" strokeWidth="6" strokeLinecap="round" opacity="0.35" />
        <polygon points="160,118 40,118 70,90 250,90 280,118" fill="#C45A3A" opacity="0.85" />
        <rect x="48" y="58" width="78" height="28" rx="14" fill="#FFF8EC" />
        <text x="87" y="77" textAnchor="middle" fontSize="11" fontWeight="700" fill="#3A2A18">
          3x + 2
        </text>
        <rect x="194" y="58" width="70" height="28" rx="14" fill="#FFF8EC" />
        <text x="229" y="77" textAnchor="middle" fontSize="11" fontWeight="700" fill="#3A2A18">
          11
        </text>
      </svg>
      <div className="relative -mt-6">
        <Creature symbol={symbol} wildness={wildness} size={88} />
      </div>
    </div>
  );
}
