"use client";

import { useEffect } from "react";
import { motionAllowed, onMotionChange } from "@/lib/motion";

/**
 * Sections below the fold fade in as they arrive, and the hero arches shift a little with the
 * mouse and the scroll position (desktop only). Both are off for prefers-reduced-motion and
 * while "Pause motion" is on. Mount it once per page.
 */
export default function ScrollEffects() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".parch > div > section"));
    const layers = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const fine = window.matchMedia("(min-width: 900px) and (hover: hover)");

    let observer: IntersectionObserver | null = null;
    const startReveal = () => {
      if (observer) return;
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        },
        { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
      );
      observer = io;
      for (const section of sections) {
        if (section.classList.contains("is-in")) continue;
        if (section.getBoundingClientRect().top <= window.innerHeight * 0.9) continue;
        section.classList.add("reveal");
        io.observe(section);
      }
    };
    const stopReveal = () => {
      observer?.disconnect();
      observer = null;
      for (const section of sections) section.classList.remove("reveal");
    };

    let raf = 0;
    let target = 0;
    let current = 0;
    let parallaxOn = false;
    const apply = () => {
      raf = 0;
      current += (target - current) * 0.08;
      const scroll = Math.min(window.scrollY, 900);
      for (const layer of layers) {
        const depth = Number(layer.dataset.parallax) || 1;
        layer.style.translate = `${(-current * 10 * depth).toFixed(1)}px ${(scroll * 0.04 * depth).toFixed(1)}px`;
      }
      if (Math.abs(target - current) > 0.001) raf = requestAnimationFrame(apply);
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onPointer = (e: PointerEvent) => {
      target = (e.clientX / window.innerWidth) * 2 - 1;
      schedule();
    };
    const startParallax = () => {
      if (parallaxOn) return;
      parallaxOn = true;
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("pointermove", onPointer, { passive: true });
      schedule();
    };
    const stopParallax = () => {
      if (!parallaxOn) return;
      parallaxOn = false;
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("pointermove", onPointer);
      cancelAnimationFrame(raf);
      raf = 0;
      for (const layer of layers) layer.style.translate = "";
    };

    const sync = () => {
      if (motionAllowed()) {
        startReveal();
        if (fine.matches) startParallax();
        else stopParallax();
      } else {
        stopReveal();
        stopParallax();
      }
    };

    sync();
    const stopMotion = onMotionChange(sync);
    fine.addEventListener("change", sync);
    return () => {
      stopMotion();
      fine.removeEventListener("change", sync);
      stopReveal();
      stopParallax();
    };
  }, []);

  return null;
}
