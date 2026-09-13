const PREMIUM_CELEBRATE_EVENT = "krotitel-premium-celebrate";

const HAPTIC_CELEBRATE = [15, 20, 25, 20, 35];

let audioCtx: AudioContext | null = null;
let unlocked = false;

function getCtx() {
  if (typeof window === "undefined") return null;
  const AC =
    window.AudioContext ||
    (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return null;
  if (!audioCtx) audioCtx = new AC();
  return audioCtx;
}

function triggerHaptic() {
  if (typeof navigator === "undefined" || !("vibrate" in navigator)) return;
  try {
    navigator.vibrate(HAPTIC_CELEBRATE);
  } catch {
    /* ignore */
  }
}

function now() {
  const ctx = getCtx();
  return ctx ? ctx.currentTime : 0;
}

function tone({
  freq,
  type = "sine",
  start,
  duration,
  gain,
}: {
  freq: number;
  type?: OscillatorType;
  start: number;
  duration: number;
  gain: number;
}) {
  const ctx = getCtx();
  if (!ctx || !unlocked) return;
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, start);
  const peak = Math.max(0.0001, gain);
  g.gain.setValueAtTime(0.0001, start);
  g.gain.exponentialRampToValueAtTime(peak, start + 0.008);
  g.gain.exponentialRampToValueAtTime(0.0001, start + Math.max(0.018, duration - 0.06));
  osc.connect(g);
  g.connect(ctx.destination);
  osc.start(start);
  osc.stop(start + duration + 0.02);
}

function noiseBurst({ start, duration, gain, bandHz }: { start: number; duration: number; gain: number; bandHz: number }) {
  const ctx = getCtx();
  if (!ctx || !unlocked) return;
  const samples = Math.max(1, Math.floor(ctx.sampleRate * duration));
  const buffer = ctx.createBuffer(1, samples, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < samples; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / samples);
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = bandHz;
  filter.Q.value = 0.8;
  const g = ctx.createGain();
  g.gain.setValueAtTime(gain, start);
  g.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  src.connect(filter);
  filter.connect(g);
  g.connect(ctx.destination);
  src.start(start);
  src.stop(start + duration + 0.02);
}

function playFanfares() {
  const t = now();
  tone({ freq: 523.25, type: "sine", start: t, duration: 0.12, gain: 0.06 });
  tone({ freq: 659.25, type: "sine", start: t + 0.1, duration: 0.12, gain: 0.06 });
  tone({ freq: 783.99, type: "triangle", start: t + 0.2, duration: 0.16, gain: 0.065 });
  tone({ freq: 1046.5, type: "sine", start: t + 0.32, duration: 0.28, gain: 0.055 });
  noiseBurst({ start: t + 0.28, duration: 0.16, gain: 0.02, bandHz: 1600 });
  tone({ freq: 392, type: "sine", start: t + 0.42, duration: 0.14, gain: 0.055 });
  tone({ freq: 494, type: "sine", start: t + 0.52, duration: 0.14, gain: 0.055 });
  tone({ freq: 587, type: "triangle", start: t + 0.62, duration: 0.18, gain: 0.06 });
  tone({ freq: 784, type: "sine", start: t + 0.74, duration: 0.28, gain: 0.05 });
}

function playIfEnabled(enabled: boolean) {
  if (!enabled) return;
  triggerHaptic();
  const ctx = getCtx();
  if (!ctx) return;
  const run = () => {
    unlocked = true;
    playFanfares();
  };
  if (ctx.state === "suspended") {
    void ctx.resume().then(run).catch(() => {});
    return;
  }
  run();
}

export function celebratePremium(soundEnabled: boolean) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(PREMIUM_CELEBRATE_EVENT));
  playIfEnabled(soundEnabled);
}

export function onPremiumCelebrate(handler: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(PREMIUM_CELEBRATE_EVENT, handler);
  return () => window.removeEventListener(PREMIUM_CELEBRATE_EVENT, handler);
}
