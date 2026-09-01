import type { ReactNode } from "react";

const TILE_STYLE = {
  backgroundColor: "rgba(255, 255, 255, 0.06)",
  borderColor: "rgba(255, 255, 255, 0.22)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
} as const;

function GearBadge({
  gradient,
  glow,
  children,
}: {
  gradient: string;
  glow: string;
  children: ReactNode;
}) {
  const ticks = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 * Math.PI) / 180;
    const outer = 20;
    const inner = i % 3 === 0 ? 15.5 : 17.5;
    return {
      key: i,
      x1: (22 + outer * Math.sin(angle)).toFixed(3),
      y1: (22 - outer * Math.cos(angle)).toFixed(3),
      x2: (22 + inner * Math.sin(angle)).toFixed(3),
      y2: (22 - inner * Math.cos(angle)).toFixed(3),
    };
  });
  return (
    <div className="relative w-11 h-11 flex-shrink-0">
      <svg viewBox="0 0 44 44" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <circle cx="22" cy="22" r="20" fill="none" stroke="#C9A227" strokeWidth="1" opacity="0.55" />
        {ticks.map((t) => (
          <line key={t.key} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke="#C9A227" strokeWidth="1" opacity="0.55" />
        ))}
      </svg>
      <div
        className="absolute inset-1.5 rounded-full flex items-center justify-center"
        style={{ background: gradient, boxShadow: `0 0 14px 1px ${glow}` }}
      >
        {children}
      </div>
    </div>
  );
}

function IconZap() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor" aria-hidden="true">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

function IconFire() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor" aria-hidden="true">
      <path d="M12 2c1 3-2 4-2 7a3 3 0 0 0 6 0c0-1-.5-2-.5-2 2 1 3.5 3.5 3.5 6a7 7 0 0 1-14 0c0-5 4-6 5-8 .5-1 .5-2 2-3Z" />
    </svg>
  );
}

function IconBooks() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor" aria-hidden="true">
      <rect x="4" y="4" width="14" height="4.2" rx="1" />
      <rect x="4" y="9.9" width="16" height="4.2" rx="1" />
      <rect x="4" y="15.8" width="12" height="4.2" rx="1" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M7.5 12.5l2.8 2.8L16.8 8.7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function IconChevron() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none" stroke="#A5B4FC" strokeWidth="2" aria-hidden="true">
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

const BANNERS = [
  {
    title: "1000+ Otázek na testování",
    subtitle: "Trénuj mozek kdekoli a kdykoli.",
    gradient: "linear-gradient(to bottom right, #fbbf24, #f97316)",
    glow: "rgba(251, 191, 36, 0.45)",
    icon: <IconZap />,
  },
  {
    title: "Testy nanečisto",
    subtitle: "Odhal chytáky přijímacích zkoušek.",
    gradient: "linear-gradient(to bottom right, #f43f5e, #ef4444)",
    glow: "rgba(244, 63, 94, 0.45)",
    icon: <IconFire />,
  },
  {
    title: "Praktické taháky a triky",
    subtitle: "Nauč se super triky a ušetři čas.",
    gradient: "linear-gradient(to bottom right, #3b82f6, #8b5cf6)",
    glow: "rgba(129, 140, 248, 0.45)",
    icon: <IconBooks />,
  },
  {
    title: "Sleduj svůj pokrok",
    subtitle: "Denní série, skóre a odznaky za výsledky.",
    gradient: "linear-gradient(to bottom right, #10b981, #14b8a6)",
    glow: "rgba(52, 211, 153, 0.45)",
    icon: <IconCheck />,
  },
];

export function WelcomeFeatureBanners() {
  return (
    <div className="flex flex-col gap-2.5 w-full">
      {BANNERS.map((item) => (
        <div
          key={item.title}
          className="flex items-center gap-3 rounded-2xl p-3.5 border"
          style={TILE_STYLE}
        >
          <GearBadge gradient={item.gradient} glow={item.glow}>
            {item.icon}
          </GearBadge>
          <div className="flex-1 min-w-0 text-left">
            <p className="text-sm font-semibold text-slate-100">{item.title}</p>
            <p className="text-xs text-indigo-200/70">{item.subtitle}</p>
          </div>
          <IconChevron />
        </div>
      ))}
    </div>
  );
}
