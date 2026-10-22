import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import { steamUrl } from "@/lib/steam";

/** Site footer with the newsletter signup. `idPrefix` keeps SVG and input ids unique per page. */
export default function SiteFooter({
  home = false,
  heading = "Get the devlog by email",
  idPrefix,
  emailId,
}: {
  home?: boolean;
  heading?: string;
  idPrefix: string;
  emailId: string;
}) {
  const base = home ? "" : "/";
  return (
    <footer id="newsletter" style={{ position: "relative", zIndex: "2" }}>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          background: "rgba(10,9,8,.82)",
          borderTop: "6px double #34302b",
          color: "#e8e0d0",
          padding: "clamp(56px,6vw,96px) 0 32px",
        }}
      >
        <svg
          aria-hidden="true"
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            inset: "0",
            pointerEvents: "none",
            opacity: ".07",
            mixBlendMode: "overlay",
          }}
        >
          <filter id={`grain-${idPrefix}-foot`}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".8"
              numOctaves="2"
              stitchTiles="stitch"
            ></feTurbulence>
          </filter>
          <rect width="100%" height="100%" filter={`url(#grain-${idPrefix}-foot)`}></rect>
        </svg>
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "0 clamp(16px,4vw,64px)",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "64px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "28px 64px",
            }}
          >
            <div
              style={{ flex: "1 1 380px", display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <h2
                style={{
                  margin: "0",
                  fontFamily: "'Grenze',Georgia,serif",
                  fontSize: "clamp(1.75rem,1rem + 2vw,2.75rem)",
                  fontWeight: "800",
                  lineHeight: "1.05",
                  letterSpacing: ".03em",
                  textTransform: "uppercase",
                }}
              >
                {heading}
              </h2>
              <p
                style={{
                  margin: "0",
                  maxWidth: "480px",
                  color: "#b8ae9c",
                  fontSize: "19px",
                  lineHeight: "1.5",
                }}
              >
                Devlog posts and playtest invites, about [N] emails a month. Nothing else.
              </p>
            </div>
            <div style={{ flex: "1 1 440px", minWidth: "0" }}>
              <NewsletterForm emailId={emailId}></NewsletterForm>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "40px 64px",
              paddingTop: "40px",
              borderTop: "6px double #34302b",
            }}
          >
            <nav
              aria-label="Footer"
              style={{
                flex: "999 1 520px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(min(150px,100%),1fr))",
                gap: "32px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <h3 className="lbl" style={{ color: "#b8ae9c" }}>
                  Studio
                </h3>
                <ul
                  style={{
                    margin: "0",
                    padding: "0",
                    listStyle: "none",
                    display: "grid",
                    gridTemplateColumns: "repeat(2,minmax(0,1fr))",
                    gap: "4px 24px",
                  }}
                >
                  <li>
                    <Link className="foot-link" href={`${base}#games`}>
                      Games
                    </Link>
                  </li>
                  <li>
                    <Link className="foot-link" href={`${base}#about`}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="foot-link" href={`${base}#devlog`}>
                      Devlog
                    </Link>
                  </li>
                  <li>
                    <Link className="foot-link" href={`${base}#collaborate`}>
                      Collaborate
                    </Link>
                  </li>
                  <li>
                    <a className="foot-link" href="#">
                      Press
                    </a>
                  </li>
                  <li>
                    <a className="foot-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <h3 className="lbl" style={{ color: "#b8ae9c" }}>
                  Community
                </h3>
                <ul
                  style={{
                    margin: "0",
                    padding: "0",
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <li>
                    <a className="foot-link" href="#">
                      Discord
                    </a>
                  </li>
                  <li>
                    <a className="foot-link" href="#">
                      Steam
                    </a>
                  </li>
                  <li>
                    <a className="foot-link" href="#">
                      itch.io
                    </a>
                  </li>
                </ul>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <h3 className="lbl" style={{ color: "#b8ae9c" }}>
                  Policies
                </h3>
                <ul
                  style={{
                    margin: "0",
                    padding: "0",
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <li>
                    <a className="foot-link" href="#">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a className="foot-link" href="#">
                      Accessibility
                    </a>
                  </li>
                  <li>
                    <a className="foot-link" href="#">
                      Creator policy
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div
              style={{
                flex: "1 1 260px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "14px",
              }}
            >
              <p
                style={{
                  margin: "0",
                  fontFamily: "'Grenze Gotisch','Old English Text MT',Georgia,serif",
                  fontSize: "34px",
                  fontWeight: "800",
                  lineHeight: "1",
                  color: "#e8e0d0",
                }}
              >
                Kingdom of Kings
              </p>
              <p style={{ margin: "0", color: "#b8ae9c", fontSize: "18px", lineHeight: "1.45" }}>
                Wishlist on Steam · [Release window]
              </p>
              <a
                className="cta"
                href={steamUrl("footer")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  minHeight: "48px",
                  padding: "0 22px",
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
          </div>
          <p
            aria-hidden="true"
            style={{
              margin: "0",
              fontFamily: "'Grenze Gotisch','Old English Text MT',Georgia,serif",
              fontSize: "clamp(3rem,0.5rem + 7.5vw,8.5rem)",
              fontWeight: "800",
              lineHeight: ".95",
              color: "#e8e0d0",
              textShadow: "3px 3px 0 #34302b,6px 6px 0 #1a1816",
              overflowWrap: "anywhere",
            }}
          >
            DeadCode Studios
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "12px 32px",
              paddingTop: "24px",
              borderTop: "1px solid #34302b",
              color: "#b8ae9c",
              fontSize: "16px",
              lineHeight: "1.45",
            }}
          >
            <p style={{ margin: "0" }}>
              © 2026 DeadCode Studios. [Legal entity line, if you have one]
            </p>
            <a
              href="#main"
              style={{
                display: "inline-flex",
                alignItems: "center",
                minHeight: "44px",
                color: "#b8ae9c",
                fontSize: "16px",
              }}
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
