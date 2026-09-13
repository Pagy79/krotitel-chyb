"use client";

import { useEffect, useRef } from "react";
import { startRocketEngine, stopRocketEngine } from "@/lib/rocketSounds";

function makeDashboardRocketFlight() {
  const pick = (min: number, max: number) => min + Math.random() * (max - min);
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    x0: -8,
    y0: pick(10, 36),
    x1: pick(32, 62),
    y1: pick(12, 58),
    x2: 108,
    y2: pick(8, 40),
    durationMs: pick(4200, 7200),
    pauseMs: 30_000,
  };
}

function bezier2(a: number, b: number, c: number, t: number) {
  const u = 1 - t;
  return u * u * a + 2 * u * t * b + t * t * c;
}

function bezier2Deriv(a: number, b: number, c: number, t: number) {
  return 2 * (1 - t) * (b - a) + 2 * t * (c - b);
}

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

export function DashboardFlybyRocket({ soundEnabled = true }: { soundEnabled?: boolean }) {
  const zoneRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef(0);
  const timeoutRef = useRef(0);
  const soundEnabledRef = useRef(soundEnabled);

  useEffect(() => {
    soundEnabledRef.current = soundEnabled;
    if (!soundEnabled) stopRocketEngine();
  }, [soundEnabled]);

  useEffect(() => {
    let cancelled = false;
    const reduceMotion =
      typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (reduceMotion) {
      if (rocketRef.current) rocketRef.current.style.opacity = "0";
      return undefined;
    }

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timeoutRef.current = window.setTimeout(resolve, ms);
      });

    const flyOnce = (flight: ReturnType<typeof makeDashboardRocketFlight>) =>
      new Promise<void>((resolve) => {
        if (soundEnabledRef.current) {
          startRocketEngine(true);
        } else {
          stopRocketEngine();
        }
        const start = performance.now();
        const { x0, y0, x1, y1, x2, y2, durationMs } = flight;

        const tick = (nowMs: number) => {
          if (cancelled) {
            stopRocketEngine();
            resolve();
            return;
          }
          const zone = zoneRef.current;
          const el = rocketRef.current;
          if (!zone || !el) {
            stopRocketEngine();
            resolve();
            return;
          }

          const raw = Math.min(1, (nowMs - start) / durationMs);
          const t = easeInOut(raw);

          const w = zone.clientWidth || 1;
          const h = zone.clientHeight || 1;

          const xPct = bezier2(x0, x1, x2, t);
          const yPct = bezier2(y0, y1, y2, t);
          const vx = bezier2Deriv(x0, x1, x2, t) * (w / 100);
          const vy = bezier2Deriv(y0, y1, y2, t) * (h / 100);

          const travelDeg = (Math.atan2(vx, -vy) * 180) / Math.PI;
          const GLYPH_TIP_OFFSET_DEG = 45;
          const deg = travelDeg - GLYPH_TIP_OFFSET_DEG;

          const fade = raw < 0.06 ? raw / 0.06 : raw > 0.94 ? (1 - raw) / 0.06 : 1;

          el.style.transform = `translate(-50%, -50%) translate(${(xPct / 100) * w}px, ${(yPct / 100) * h}px) rotate(${deg}deg)`;
          el.style.opacity = String(Math.max(0, Math.min(1, fade)));

          if (raw < 1) {
            rafRef.current = requestAnimationFrame(tick);
          } else {
            el.style.opacity = "0";
            stopRocketEngine();
            resolve();
          }
        };

        rafRef.current = requestAnimationFrame(tick);
      });

    void (async () => {
      while (!cancelled) {
        const flight = makeDashboardRocketFlight();
        await flyOnce(flight);
        if (cancelled) break;
        await wait(flight.pauseMs);
      }
    })();

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timeoutRef.current);
      stopRocketEngine();
    };
  }, []);

  return (
    <div ref={zoneRef} className="absolute inset-0" aria-hidden="true">
      <span
        ref={rocketRef}
        className="dashboard-flyby-rocket"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          fontSize: "1.35rem",
          lineHeight: 1,
          opacity: 0,
          pointerEvents: "none",
          willChange: "transform, opacity",
          filter: "drop-shadow(0 0 10px rgba(251, 146, 60, 0.55))",
          transformOrigin: "center center",
        }}
      >
        🚀
      </span>
    </div>
  );
}
