# DeadCode Studios website

Website for DeadCode Studios and Kingdom of Kings, built with Next.js (App Router), React and TypeScript. The look is the "Iron and Ember" design.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run typecheck
```

## Layout

- `app/page.tsx`: home page
- `app/game/page.tsx`: Kingdom of Kings page
- `app/layout.tsx`: fonts and site-wide metadata
- `app/globals.css`: styles shared by both pages, plus the few rules scoped per page (`.pg-home`, `.pg-game`)
- `components/`: `SiteHeader`, `SiteFooter`, `NewsletterForm` (client), `MotionToggle` (client), plus the atmosphere:
  `AmbientBackground` (embers, fog, vignette, grain), `ScrollEffects` (section fade-ins, arch parallax) and `SoundToggle`
- `lib/`: `steam.ts` (Steam store link helper), `motion.ts` (reduced-motion and Pause motion checks), `ambient-audio.ts` (optional wind and crackle, made with Web Audio)

## Ambiance

Everything that moves honors `prefers-reduced-motion` and the "Pause motion" button (a `paused` class on `body`). Sound is off until a visitor presses the Sound button, and it never autoplays. Layers, back to front: fog, vignette and grain (z-index 0), embers (1), page content (2 and up). To change the look, start with the ember count and sprite in `AmbientBackground.tsx`, the fog and vignette in `globals.css`, and the sound level (`LEVEL`) in `ambient-audio.ts`.

## Still to do before launch

- Set the real Steam app ID in `lib/steam.ts` (`STEAM_APP_ID`). Every "Wishlist on Steam" button uses it.
- Wire `components/NewsletterForm.tsx` to an email provider. It only shows the confirmation state for now.
- Replace the `[bracketed]` placeholder copy and the empty art boxes in both pages.
