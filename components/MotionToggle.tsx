"use client";

import { useEffect, useState } from "react";

/**
 * Pauses or resumes all motion: the ember flicker, the drifting fog and rising embers, the scroll
 * fade-ins and parallax, and the smooth scroll on in-page links. Each of them watches the
 * "paused" class on the body (see globals.css and lib/motion.ts). The class stays on the body when
 * moving between pages, so the choice carries over.
 */
export default function MotionToggle() {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setPaused(document.body.classList.contains("paused"));
  }, []);

  const toggleMotion = () => {
    const next = !paused;
    document.body.classList.toggle("paused", next);
    setPaused(next);
  };

  return (
    <button
      aria-pressed={paused}
      className="ghost"
      type="button"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        minHeight: "44px",
        padding: "0 18px",
        border: "2px solid #6b6258",
        background: "rgba(18,17,16,.9)",
        color: "#e8e0d0",
        fontFamily: "'Grenze',Georgia,serif",
        fontSize: "14px",
        fontWeight: "600",
        letterSpacing: ".12em",
        textTransform: "uppercase",
        cursor: "pointer",
      }}
      onClick={toggleMotion}
    >
      {!paused && (
        <>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="square"
            aria-hidden="true"
          >
            <path d="M9 5v14"></path>
            <path d="M15 5v14"></path>
          </svg>
        </>
      )}
      {paused && (
        <>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="miter"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z"></path>
          </svg>
        </>
      )}
      <span data-motion-label>Pause motion</span>
    </button>
  );
}
