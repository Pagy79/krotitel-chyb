type RocketEngine = {
  source: AudioBufferSourceNode;
  filter: BiquadFilterNode;
  gain: GainNode;
  lfo: OscillatorNode;
  lfoDepth: GainNode;
};

let audioCtx: AudioContext | null = null;
let rocketEngine: RocketEngine | null = null;

function getCtx() {
  if (typeof window === "undefined") return null;
  const AC =
    window.AudioContext ||
    (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return null;
  if (!audioCtx) audioCtx = new AC();
  return audioCtx;
}

function createPinkNoiseBuffer(ctx: AudioContext, durationSec = 2.5) {
  const length = Math.max(1, Math.floor(ctx.sampleRate * durationSec));
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  let b0 = 0;
  let b1 = 0;
  let b2 = 0;
  let b3 = 0;
  let b4 = 0;
  let b5 = 0;
  let b6 = 0;
  for (let i = 0; i < length; i++) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.969 * b2 + white * 0.153852;
    b3 = 0.8665 * b3 + white * 0.3104856;
    b4 = 0.55 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.016898;
    data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
    b6 = white * 0.115926;
  }
  return buffer;
}

export function startRocketEngine(enabled: boolean) {
  if (!enabled) return;
  const ctx = getCtx();
  if (!ctx) return;

  const begin = () => {
    if (rocketEngine) return;

    const source = ctx.createBufferSource();
    source.buffer = createPinkNoiseBuffer(ctx);
    source.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(300, ctx.currentTime);
    filter.Q.setValueAtTime(0.7, ctx.currentTime);

    const lfo = ctx.createOscillator();
    lfo.type = "sine";
    lfo.frequency.setValueAtTime(0.18, ctx.currentTime);
    const lfoDepth = ctx.createGain();
    lfoDepth.gain.setValueAtTime(100, ctx.currentTime);
    lfo.connect(lfoDepth);
    lfoDepth.connect(filter.frequency);

    const gain = ctx.createGain();
    const targetGain = 0.032;
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(targetGain, ctx.currentTime + 0.35);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    source.start();
    lfo.start();

    rocketEngine = { source, filter, gain, lfo, lfoDepth };
  };

  if (ctx.state === "suspended") {
    void ctx.resume().then(begin).catch(() => {});
    return;
  }
  begin();
}

export function stopRocketEngine() {
  const eng = rocketEngine;
  if (!eng) return;
  rocketEngine = null;

  const ctx = getCtx();
  const t = ctx ? ctx.currentTime : 0;
  try {
    eng.gain.gain.cancelScheduledValues(t);
    eng.gain.gain.setValueAtTime(Math.max(0.0001, eng.gain.gain.value), t);
    eng.gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
  } catch {
    /* ignore */
  }

  window.setTimeout(() => {
    try {
      eng.lfo.stop();
    } catch {
      /* ignore */
    }
    try {
      eng.source.stop();
    } catch {
      /* ignore */
    }
    try {
      eng.source.disconnect();
      eng.filter.disconnect();
      eng.gain.disconnect();
      eng.lfo.disconnect();
      eng.lfoDepth.disconnect();
    } catch {
      /* ignore */
    }
  }, 320);
}
