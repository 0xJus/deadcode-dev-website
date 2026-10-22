import Link from "next/link";
import { steamUrl } from "@/lib/steam";

const NAV: { label: string; hash: string }[] = [
  { label: "Games", hash: "#games" },
  { label: "Devlog", hash: "#devlog" },
  { label: "Press", hash: "#" },
  { label: "About", hash: "#about" },
  { label: "Collaborate", hash: "#collaborate" },
  { label: "Contact", hash: "#" },
];

/** Site header. `home` is false on inner pages, so in-page anchors point back to "/". */
export default function SiteHeader({ home = false }: { home?: boolean }) {
  const base = home ? "" : "/";
  const navLinks = NAV.map(({ label, hash }) => (
    <Link
      key={label}
      className="nav-link"
      href={hash === "#" ? "#" : `${base}${hash}`}
      {...(!home && label === "Games"
        ? {
            "aria-current": "page" as const,
            style: {
              textDecoration: "underline",
              textDecorationColor: "#e07b2e",
              textDecorationThickness: "2px",
              textUnderlineOffset: "8px",
            },
          }
        : {})}
    >
      {label}
    </Link>
  ));

  return (
    <header style={{ position: "absolute", top: "0", left: "0", right: "0", zIndex: "5" }}>
      <div
        style={{
          width: "100%",
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "24px clamp(16px,4vw,64px)",
          boxSizing: "border-box",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px 32px",
        }}
      >
        <Link
          href="/"
          aria-label="DeadCode Studios, home"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            minHeight: "44px",
            color: "#e8e0d0",
            textDecoration: "none",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="24" height="24" stroke="#e8e0d0" strokeWidth="2.5"></rect>
            <path d="M11 20l4-12" stroke="#e07b2e" strokeWidth="2.5" strokeLinecap="square"></path>
            <path d="M16 20l4-12" stroke="#e07b2e" strokeWidth="2.5" strokeLinecap="square"></path>
          </svg>
          <span
            style={{
              fontFamily: "'Grenze Gotisch','Old English Text MT',Georgia,serif",
              fontSize: "28px",
              fontWeight: "800",
              lineHeight: "1",
            }}
          >
            DeadCode Studios
          </span>
        </Link>
        <nav
          aria-label="Main"
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0 28px" }}
        >
          {navLinks}
        </nav>
        <a
          className="cta"
          href={steamUrl("header")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            minHeight: "44px",
            padding: "0 20px",
            border: "2px solid #e07b2e",
            background: "#e07b2e",
            color: "#0a0908",
            textDecoration: "none",
            fontFamily: "'Grenze',Georgia,serif",
            fontSize: "15px",
            fontWeight: "700",
            letterSpacing: ".08em",
            textTransform: "uppercase",
          }}
        >
          Wishlist on Steam
        </a>
      </div>
    </header>
  );
}
