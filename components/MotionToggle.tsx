"use client";

import { useEffect, useState } from "react";

/** Pauses or resumes the ember flicker animation and the smooth scroll on in-page links (see globals.css). */
export default function MotionToggle() {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("paused", paused);
    return () => document.body.classList.remove("paused");
  }, [paused]);

  const toggleMotion = () => setPaused((p) => !p);

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
