"use client";

import { useEffect, useRef } from "react";
import { motionAllowed, onMotionChange, prefersReducedMotion } from "@/lib/motion";

/**
 * Page-wide atmosphere behind the content: slow fog, a vignette, film grain and rising embers.
 * The fog, vignette and grain are static markup (the fog drifts through CSS, see globals.css).
 * The embers are drawn on one canvas that stops for prefers-reduced-motion, freezes while
 * "Pause motion" is on, and sleeps while the tab is hidden.
 */

type Ember = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  depth: number;
  age: number;
  life: number;
  phase: number;
  sway: number;
  peak: number;
};

const SPRITE = 64;

/** A soft orange glow, drawn once and stamped for every ember. */
function makeSprite(): HTMLCanvasElement {
  const sprite = document.createElement("canvas");
  sprite.width = sprite.height = SPRITE;
  const g = sprite.getContext("2d");
  if (g) {
    const glow = g.createRadialGradient(
      SPRITE / 2,
      SPRITE / 2,
      0,
      SPRITE / 2,
      SPRITE / 2,
      SPRITE / 2,
    );
    glow.addColorStop(0, "rgba(255,226,170,1)");
    glow.addColorStop(0.12, "rgba(255,190,120,.95)");
    glow.addColorStop(0.3, "rgba(244,163,92,.45)");
    glow.addColorStop(0.6, "rgba(224,123,46,.12)");
    glow.addColorStop(1, "rgba(224,123,46,0)");
    g.fillStyle = glow;
    g.fillRect(0, 0, SPRITE, SPRITE);
  }
  return sprite;
}

export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const grainRef = useRef<HTMLDivElement>(null);

  // Film grain: a small noise tile, built once so there is no image to download.
  useEffect(() => {
    const el = grainRef.current;
    const tile = document.createElement("canvas");
    tile.width = tile.height = 128;
    const g = tile.getContext("2d");
    if (!el || !g) return;
    const noise = g.createImageData(128, 128);
    for (let i = 0; i < noise.data.length; i += 4) {
      noise.data[i] = noise.data[i + 1] = noise.data[i + 2] = 255;
      noise.data[i + 3] = Math.random() * 255;
    }
    g.putImageData(noise, 0, 0);
    el.style.backgroundImage = `url(${tile.toDataURL("image/png")})`;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const g = canvas?.getContext("2d");
    if (!canvas || !g) return;

    const sprite = makeSprite();
    let w = window.innerWidth;
    let h = window.innerHeight;
    let source: HTMLElement | null = null;
    let raf = 0;
    let last = 0;
    let lastScroll = window.scrollY;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    // Embers rise from the hero's glowing doorway while it is on screen, and from below the
    // viewport otherwise.
    const spawn = (prewarm = false): Ember => {
      if (!source || !source.isConnected) {
        source = document.querySelector<HTMLElement>("[data-ember-source]");
      }
      const rect = source?.getBoundingClientRect();
      const fromDoor = !!rect && rect.bottom > 0 && rect.top < h && Math.random() < 0.6;
      const depth = Math.random();
      const life = 5 + Math.random() * 6;
      const e: Ember = {
        x: Math.random() * w,
        y: h + 12,
        vx: (Math.random() - 0.5) * 12,
        vy: 24 + Math.random() * 44 + depth * 26,
        size: 9 + depth * 18,
        depth,
        age: 0,
        life,
        phase: Math.random() * Math.PI * 2,
        sway: 0.6 + Math.random() * 1.4,
        peak: 0.45 + Math.random() * 0.55,
      };
      if (rect && fromDoor) {
        e.x = rect.left + rect.width * (0.15 + 0.7 * Math.random());
        e.y = rect.top + rect.height * (0.45 + 0.55 * Math.random());
      }
      if (prewarm) {
        e.age = Math.random() * life;
        e.y -= e.vy * e.age;
        if (!fromDoor) e.y = Math.max(e.y, Math.random() * h);
      }
      return e;
    };

    resize();
    const embers: Ember[] = Array.from({ length: w >= 900 ? 46 : 22 }, () => spawn(true));

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const scroll = window.scrollY;
      const scrolled = scroll - lastScroll;
      lastScroll = scroll;

      g.clearRect(0, 0, w, h);
      g.globalCompositeOperation = "lighter";
      for (let i = 0; i < embers.length; i++) {
        let e = embers[i];
        e.age += dt;
        e.y -= e.vy * dt + scrolled * (0.15 + e.depth * 0.45);
        e.x += (e.vx + Math.sin(e.age * e.sway + e.phase) * 14) * dt;
        if (e.age >= e.life || e.y < -30 || e.y > h + 80) {
          e = embers[i] = spawn();
        }
        const k = e.age / e.life;
        const fade = k < 0.12 ? k / 0.12 : k > 0.55 ? (1 - k) / 0.45 : 1;
        const flicker = 0.75 + 0.25 * Math.sin(e.age * 9 + e.phase * 3);
        g.globalAlpha = Math.max(0, fade * flicker * e.peak);
        g.drawImage(sprite, e.x - e.size / 2, e.y - e.size / 2, e.size, e.size);
      }
    };

    // Runs only while motion is allowed and the tab is visible. Reduced motion clears the canvas;
    // "Pause motion" leaves the last frame in place.
    const sync = () => {
      if (prefersReducedMotion()) g.clearRect(0, 0, w, h);
      const run = motionAllowed() && !document.hidden;
      if (run && !raf) {
        last = performance.now();
        lastScroll = window.scrollY;
        raf = requestAnimationFrame(frame);
      } else if (!run && raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    sync();
    const stopMotion = onMotionChange(sync);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", sync);
    return () => {
      cancelAnimationFrame(raf);
      stopMotion();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return (
    <>
      <div className="ambient" aria-hidden="true">
        <div className="fog fog-a"></div>
        <div className="fog fog-b"></div>
        <div className="fog fog-c"></div>
        <div className="vignette"></div>
        <div className="grain" ref={grainRef}></div>
      </div>
      <canvas className="embers" ref={canvasRef} aria-hidden="true"></canvas>
    </>
  );
}
