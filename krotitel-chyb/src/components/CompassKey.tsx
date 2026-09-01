function r(n: number) {
  return n.toFixed(3);
}

export function CompassKey({ className = "w-44 h-56" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 260" className={className} aria-hidden="true">
      <ellipse cx="100" cy="248" rx="42" ry="7" fill="#0A332C" opacity="0.16" />
      <g stroke="#1A3D38" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round">
        <path
          fill="#6DB5AE"
          d="M86 138 H114 V198 H138 V210 H114 V222 H138 V234 H86 Z"
        />
        <circle cx="100" cy="78" r="70" fill="#6DB5AE" />
        <circle cx="100" cy="8" r="9" fill="#6DB5AE" />
        <circle cx="30" cy="78" r="9" fill="#6DB5AE" />
        <circle cx="170" cy="78" r="9" fill="#6DB5AE" />
        <circle cx="100" cy="78" r="52" fill="#F4EFE4" />
      </g>
      <circle cx="100" cy="78" r="44" fill="none" stroke="#1A3D38" strokeWidth="1.4" opacity="0.28" />
      {Array.from({ length: 12 }, (_, i) => {
        const a = (i * 30 * Math.PI) / 180;
        const major = i % 3 === 0;
        const inner = major ? 36 : 40;
        const s = Math.sin(a);
        const c = Math.cos(a);
        return (
          <line
            key={i}
            x1={r(100 + inner * s)}
            y1={r(78 - inner * c)}
            x2={r(100 + 44 * s)}
            y2={r(78 - 44 * c)}
            stroke="#1A3D38"
            strokeWidth={major ? 2.2 : 1}
            opacity={0.7}
          />
        );
      })}
      <text x="100" y="40" textAnchor="middle" fontSize="15" fontWeight="800" fill="#1A3D38">
        N
      </text>
      <polygon points="100,32 108,78 100,72 92,78" fill="#D94A3D" stroke="#1A3D38" strokeWidth="1.4" />
      <polygon points="100,124 108,78 100,84 92,78" fill="#8A9AA0" stroke="#1A3D38" strokeWidth="1.4" />
      <circle cx="86" cy="70" r="5" fill="#1A3D38" />
      <circle cx="114" cy="70" r="5" fill="#1A3D38" />
      <circle cx="100" cy="78" r="6.5" fill="#1A3D38" />
      <circle cx="100" cy="78" r="2.6" fill="#F4EFE4" />
    </svg>
  );
}
