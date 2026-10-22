"use client";

import { useSyncExternalStore } from "react";
import { isSoundOn, setSound, subscribeSound } from "@/lib/ambient-audio";

/**
 * Fixed button, bottom left on every page, that turns the ambient sound on or off. The sound is
 * off until a visitor presses it. It stays reachable while scrolling so it can be switched off
 * from anywhere.
 */
export default function SoundToggle() {
  const on = useSyncExternalStore(subscribeSound, isSoundOn, () => false);

  return (
    <button
      type="button"
      className="sound-toggle"
      aria-pressed={on}
      onClick={() => void setSound(!on)}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
        aria-hidden="true"
      >
        <path d="M3 9h4l5-4v14l-5-4H3z"></path>
        {on ? (
          <>
            <path d="M16 9a4 4 0 0 1 0 6"></path>
            <path d="M19 6a8 8 0 0 1 0 12"></path>
          </>
        ) : (
          <>
            <path d="M16 9l5 6"></path>
            <path d="M21 9l-5 6"></path>
          </>
        )}
      </svg>
      <span>Sound</span>
    </button>
  );
}
