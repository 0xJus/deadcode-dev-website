/** Motion preferences shared by the ambient effects: the OS setting, plus the site's "Pause motion" button (body.paused). */
const REDUCED = "(prefers-reduced-motion: reduce)";

export function prefersReducedMotion(): boolean {
  return window.matchMedia(REDUCED).matches;
}

export function motionAllowed(): boolean {
  return !prefersReducedMotion() && !document.body.classList.contains("paused");
}

/** Calls `cb` when either setting changes. Returns an unsubscribe function. */
export function onMotionChange(cb: () => void): () => void {
  const query = window.matchMedia(REDUCED);
  query.addEventListener("change", cb);
  const observer = new MutationObserver(cb);
  observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
  return () => {
    query.removeEventListener("change", cb);
    observer.disconnect();
  };
}
