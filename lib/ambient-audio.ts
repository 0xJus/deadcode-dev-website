/**
 * Optional background sound: a low wind bed with a little fire crackle, generated in the browser
 * with the Web Audio API, so there are no audio files to license or download.
 *
 * Nothing is created, and no sound plays, until a visitor turns it on (see SoundToggle). The state
 * lives in this module, so the sound keeps playing when the visitor moves between pages.
 */

type Rng = () => number;

const POPS_PER_SECOND = 7;

/** Brown noise (deep and soft, like wind in a chimney). The tail is blended into the head so the loop has no seam. */
function brownNoise(ctx: BaseAudioContext, seconds: number, rng: Rng): AudioBuffer {
  const rate = ctx.sampleRate;
  const length = Math.floor(seconds * rate);
  const fade = Math.floor(rate * 0.75);
  const raw = new Float32Array(length + fade);
  let last = 0;
  for (let i = 0; i < raw.length; i++) {
    last = (last + 0.02 * (rng() * 2 - 1)) / 1.02;
    raw[i] = last * 3.5;
  }
  const buffer = ctx.createBuffer(1, length, rate);
  const data = buffer.getChannelData(0);
  data.set(raw.subarray(0, length));
  for (let i = 0; i < fade; i++) {
    const k = i / fade;
    data[i] = raw[i] * k + raw[length + i] * (1 - k);
  }
  return buffer;
}

function whiteNoise(ctx: BaseAudioContext, seconds: number, rng: Rng): AudioBuffer {
  const buffer = ctx.createBuffer(1, Math.floor(seconds * ctx.sampleRate), ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = rng() * 2 - 1;
  return buffer;
}

function loop(ctx: BaseAudioContext, buffer: AudioBuffer): AudioBufferSourceNode {
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.loop = true;
  return source;
}

/** A slow oscillator that nudges `param` up and down around its current value. */
function drift(ctx: BaseAudioContext, param: AudioParam, hz: number, depth: number) {
  const lfo = ctx.createOscillator();
  const amount = ctx.createGain();
  lfo.frequency.value = hz;
  amount.gain.value = depth;
  lfo.connect(amount).connect(param);
  lfo.start();
}

/**
 * Builds the sound into `ctx`, ending at `out`. Works for a live or an offline context. The wind
 * and the fire's low roar start at once; call `crackle(from, to)` to schedule the pops for a
 * stretch of time.
 */
export function buildAmbience(ctx: BaseAudioContext, out: AudioNode, rng: Rng = Math.random) {
  // Wind: a deep bed that swells and fades, and a thinner, airier gust layer above it.
  const rumble = loop(ctx, brownNoise(ctx, 9, rng));
  const rumbleFilter = ctx.createBiquadFilter();
  rumbleFilter.type = "lowpass";
  rumbleFilter.frequency.value = 260;
  const rumbleGain = ctx.createGain();
  rumbleGain.gain.value = 0.7;
  drift(ctx, rumbleGain.gain, 0.05, 0.3);
  rumble.connect(rumbleFilter).connect(rumbleGain).connect(out);
  rumble.start();

  const gust = loop(ctx, brownNoise(ctx, 11, rng));
  const gustFilter = ctx.createBiquadFilter();
  gustFilter.type = "bandpass";
  gustFilter.frequency.value = 600;
  gustFilter.Q.value = 0.6;
  drift(ctx, gustFilter.frequency, 0.06, 220);
  const gustGain = ctx.createGain();
  gustGain.gain.value = 0.4;
  drift(ctx, gustGain.gain, 0.037, 0.28);
  gust.connect(gustFilter).connect(gustGain).connect(out);
  gust.start();

  // Fire: a quiet, flickering roar under the pops.
  const white = whiteNoise(ctx, 3, rng);
  const roar = loop(ctx, white);
  const roarBand = ctx.createBiquadFilter();
  roarBand.type = "bandpass";
  roarBand.frequency.value = 900;
  roarBand.Q.value = 0.5;
  const roarLow = ctx.createBiquadFilter();
  roarLow.type = "lowpass";
  roarLow.frequency.value = 2200;
  const roarGain = ctx.createGain();
  roarGain.gain.value = 0.03;
  drift(ctx, roarGain.gain, 0.7, 0.012);
  drift(ctx, roarGain.gain, 1.9, 0.006);
  roar.connect(roarBand).connect(roarLow).connect(roarGain).connect(out);
  roar.start();

  const pop = (at: number) => {
    const length = 0.006 + rng() * 0.03;
    const loud = rng() < 0.08;
    const source = ctx.createBufferSource();
    source.buffer = white;
    const band = ctx.createBiquadFilter();
    band.type = "bandpass";
    band.frequency.value = 1200 + rng() * 4800;
    band.Q.value = 0.8 + rng() * 3;
    const gain = ctx.createGain();
    const peak = (loud ? 0.2 : 0.03) + rng() * (loud ? 0.16 : 0.08);
    gain.gain.setValueAtTime(0, at);
    gain.gain.linearRampToValueAtTime(peak, at + 0.0015);
    gain.gain.exponentialRampToValueAtTime(0.0001, at + length);
    source.connect(band).connect(gain).connect(out);
    source.start(at, rng() * 2, length + 0.01);
  };

  return {
    /** Schedules pops at random moments between `from` and `to` (seconds on the context clock). */
    crackle(from: number, to: number) {
      let at = from;
      for (;;) {
        at += -Math.log(1 - rng()) / POPS_PER_SECOND;
        if (at >= to) return;
        pop(at);
        if (rng() < 0.25) pop(at + 0.012 + rng() * 0.04);
      }
    },
  };
}

// ---- Live playback ----

const LEVEL = 0.25;
const FADE_IN = 1.8;
const FADE_OUT = 0.9;

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let ambience: ReturnType<typeof buildAmbience> | null = null;
let on = false;
let ticker: ReturnType<typeof setInterval> | undefined;
let suspendTimer: ReturnType<typeof setTimeout> | undefined;
let scheduledUntil = 0;
const listeners = new Set<() => void>();

export const isSoundOn = () => on;

export function subscribeSound(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function setOn(next: boolean) {
  on = next;
  listeners.forEach((listener) => listener());
}

function fadeTo(level: number, seconds: number) {
  if (!ctx || !master) return;
  const now = ctx.currentTime;
  master.gain.cancelScheduledValues(now);
  master.gain.setValueAtTime(master.gain.value, now);
  master.gain.linearRampToValueAtTime(level, now + seconds);
}

/** Keeps the next half second of crackle scheduled while the sound is on. */
function tick() {
  if (!ctx || !ambience) return;
  const from = Math.max(scheduledUntil, ctx.currentTime);
  const to = ctx.currentTime + 0.5;
  ambience.crackle(from, to);
  scheduledUntil = to;
}

/** Turns the sound on or off with a fade. Call it from a click: browsers block audio before that. */
export async function setSound(next: boolean): Promise<void> {
  if (next === on) return;
  setOn(next);
  if (next) {
    clearTimeout(suspendTimer);
    try {
      if (!ctx) {
        ctx = new AudioContext({ latencyHint: "playback" });
        master = ctx.createGain();
        master.gain.value = 0;
        master.connect(ctx.destination);
        ambience = buildAmbience(ctx, master);
      }
      await ctx.resume();
    } catch {
      setOn(false);
      return;
    }
    if (!on) return;
    fadeTo(LEVEL, FADE_IN);
    scheduledUntil = 0;
    clearInterval(ticker);
    ticker = setInterval(tick, 200);
    tick();
  } else {
    clearInterval(ticker);
    fadeTo(0, FADE_OUT);
    suspendTimer = setTimeout(
      () => {
        if (!on) void ctx?.suspend();
      },
      FADE_OUT * 1000 + 100,
    );
  }
}

// A hidden tab goes quiet, and the sound returns with the tab if it was on.
if (typeof document !== "undefined") {
  document.addEventListener("visibilitychange", () => {
    if (!ctx) return;
    if (document.hidden) void ctx.suspend();
    else if (on) void ctx.resume();
  });
}
