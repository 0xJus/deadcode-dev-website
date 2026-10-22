import type { Metadata } from "next";
import Link from "next/link";
import MotionToggle from "@/components/MotionToggle";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { steamUrl } from "@/lib/steam";

export const metadata: Metadata = {
  title: "DeadCode Studios: Kingdom of Kings",
  description:
    "DeadCode Studios is a small team of friends making games in Unity. Kingdom of Kings: only one wears the crown.",
};

export default function HomePage() {
  return (
    <div
      className="pg-home"
      style={{
        position: "relative",
        overflowX: "hidden",
        fontFamily: "'Alegreya Sans','Gill Sans','Trebuchet MS',system-ui,sans-serif",
        fontSize: "18px",
        lineHeight: "1.45",
        color: "#e8e0d0",
        background: "#0a0908",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <a
        className="skip"
        href="#main"
        style={{
          padding: "12px 18px",
          background: "#e8e0d0",
          color: "#0a0908",
          fontWeight: "700",
          textDecoration: "none",
        }}
      >
        Skip to content
      </a>
      <SiteHeader home />
      <main id="main">
        <section
          aria-labelledby="hero-title"
          style={{
            position: "relative",
            overflow: "hidden",
            background: "#0a0908",
            minHeight: "820px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            aria-hidden="true"
            style={{ position: "absolute", inset: "0", pointerEvents: "none" }}
          >
            <div
              style={{
                position: "absolute",
                top: "0",
                bottom: "0",
                right: "max(-120px,-8vw)",
                width: "min(840px,110vw)",
              }}
            >
              <div
                className="flicker"
                style={{
                  position: "absolute",
                  inset: "0",
                  background:
                    "radial-gradient(ellipse at 50% 62%,rgba(224,123,46,.5) 0%,rgba(122,54,18,.3) 32%,rgba(10,9,8,0) 66%)",
                  animationPlayState: "running",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  bottom: "0",
                  width: "66%",
                  height: "80%",
                  transform: "translateX(-50%)",
                  border: "2px solid rgba(232,224,208,.14)",
                  borderBottom: "0",
                  borderRadius: "999px 999px 0 0",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  bottom: "0",
                  width: "54%",
                  height: "70%",
                  transform: "translateX(-50%)",
                  border: "2px solid rgba(232,224,208,.22)",
                  borderBottom: "0",
                  borderRadius: "999px 999px 0 0",
                }}
              ></div>
              <div
                className="flicker"
                style={{
                  position: "absolute",
                  left: "50%",
                  bottom: "0",
                  width: "42%",
                  height: "60%",
                  transform: "translateX(-50%)",
                  border: "2px solid #7a3612",
                  borderBottom: "0",
                  borderRadius: "999px 999px 0 0",
                  background:
                    "linear-gradient(0deg,rgba(244,163,92,.6) 0%,rgba(224,123,46,.24) 46%,rgba(10,9,8,0) 100%)",
                  boxShadow: "inset 0 0 70px rgba(224,123,46,.3)",
                  animationPlayState: "running",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  left: "0",
                  right: "0",
                  bottom: "0",
                  height: "2px",
                  background:
                    "linear-gradient(90deg,rgba(224,123,46,0),rgba(224,123,46,.7),rgba(224,123,46,0))",
                }}
              ></div>
            </div>
            <div
              style={{
                position: "absolute",
                inset: "0",
                background:
                  "linear-gradient(90deg,#0a0908 0%,rgba(10,9,8,.92) 32%,rgba(10,9,8,.3) 60%,rgba(10,9,8,0) 78%),linear-gradient(180deg,rgba(10,9,8,0) 72%,#0a0908 100%)",
              }}
            ></div>
            <svg
              width="100%"
              height="100%"
              style={{ position: "absolute", inset: "0", opacity: ".07", mixBlendMode: "overlay" }}
            >
              <filter id="grain-home-hero">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency=".8"
                  numOctaves="2"
                  stitchTiles="stitch"
                ></feTurbulence>
              </filter>
              <rect width="100%" height="100%" filter="url(#grain-home-hero)"></rect>
            </svg>
          </div>
          <div
            style={{
              position: "relative",
              zIndex: "1",
              flex: "1 1 auto",
              width: "100%",
              maxWidth: "1240px",
              margin: "0 auto",
              padding: "clamp(150px,14vw,176px) clamp(16px,4vw,64px) 40px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "56px",
            }}
          >
            <div
              style={{
                maxWidth: "700px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "26px",
              }}
            >
              <p
                className="rise lbl"
                style={{
                  margin: "0",
                  display: "inline-flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "10px",
                  minHeight: "36px",
                  padding: "4px 14px",
                  boxSizing: "border-box",
                  border: "1px solid #6b6258",
                  background: "rgba(18,17,16,.9)",
                  color: "#e8e0d0",
                }}
              >
                <span className="dot" aria-hidden="true"></span>
                <span>Wishlist on Steam</span>
                <span aria-hidden="true" style={{ color: "#6b6258" }}>
                  /
                </span>
                <span style={{ color: "#b8ae9c" }}>[Release window]</span>
              </p>
              <p className="rise d1" style={{ margin: "0" }}>
                <span
                  className="wm"
                  style={{
                    fontFamily: "'Grenze Gotisch','Old English Text MT',Georgia,serif",
                    fontSize: "clamp(36px,1.4rem + 1.8vw,56px)",
                    fontWeight: "800",
                    lineHeight: "1",
                  }}
                >
                  <span className="wm-back" aria-hidden="true">
                    Kingdom of Kings
                  </span>
                  <span className="wm-front">Kingdom of Kings</span>
                </span>
              </p>
              <h1
                id="hero-title"
                className="rise d2"
                style={{
                  margin: "0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  fontFamily: "'Grenze',Georgia,serif",
                  fontSize: "clamp(2.75rem,0.5rem + 6vw,6.25rem)",
                  fontWeight: "800",
                  lineHeight: ".95",
                  letterSpacing: ".02em",
                  textTransform: "uppercase",
                  color: "#e8e0d0",
                }}
              >
                <span>Only one</span>
                <span>wears the</span>
                <span
                  style={{
                    color: "#e07b2e",
                    background: "linear-gradient(100deg,#f4a35c 0%,#e07b2e 55%,#c8641a 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  crown.
                </span>
              </h1>
              <p
                className="rise d3"
                style={{
                  margin: "0",
                  maxWidth: "560px",
                  fontSize: "clamp(19px,1rem + .4vw,22px)",
                  lineHeight: "1.5",
                  color: "#e8e0d0",
                  textWrap: "pretty",
                }}
              >
                [One-sentence pitch: what players do in Kingdom of Kings and why it’s different.]
              </p>
              <div
                className="rise d4"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "14px 20px",
                }}
              >
                <a
                  className="cta"
                  href={steamUrl("hero")}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    minHeight: "56px",
                    padding: "0 28px",
                    border: "2px solid #e07b2e",
                    background: "#e07b2e",
                    color: "#0a0908",
                    textDecoration: "none",
                    fontFamily: "'Grenze',Georgia,serif",
                    fontSize: "18px",
                    fontWeight: "700",
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                  }}
                >
                  Wishlist on Steam
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="square"
                    aria-hidden="true"
                  >
                    <path d="M5 2l8 7-8 7"></path>
                  </svg>
                </a>
                <Link
                  className="ghost"
                  href="/game"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    minHeight: "56px",
                    padding: "0 24px",
                    border: "2px solid #6b6258",
                    color: "#e8e0d0",
                    textDecoration: "none",
                    fontFamily: "'Grenze',Georgia,serif",
                    fontSize: "17px",
                    fontWeight: "600",
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                  }}
                >
                  Watch the trailer
                </Link>
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    minHeight: "44px",
                    color: "#b8ae9c",
                    fontSize: "18px",
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  }}
                >
                  Also on itch.io
                </a>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "12px 16px",
              }}
            >
              <p
                style={{
                  margin: "0",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "baseline",
                  gap: "4px 10px",
                  maxWidth: "540px",
                  padding: "10px 14px",
                  border: "1px dashed #6b6258",
                  background: "rgba(18,17,16,.9)",
                  color: "#b8ae9c",
                  fontSize: "16px",
                  lineHeight: "1.4",
                }}
              >
                <span className="lbl" style={{ color: "#e8e0d0" }}>
                  Key art
                </span>
                <span>
                  Placeholder. Text-free, human-made or in-engine art (the Steam Library Hero,
                  3840×1240), focal point on the right, left side kept dark for type.
                </span>
              </p>
              <MotionToggle />
            </div>
          </div>
        </section>
        <section
          id="about"
          aria-labelledby="about-title"
          style={{ position: "relative", background: "#0a0908", padding: "8px 0 176px" }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "1240px",
              margin: "0 auto",
              padding: "0 clamp(16px,4vw,64px)",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-start",
                gap: "28px 64px",
                paddingTop: "48px",
                borderTop: "6px double #34302b",
              }}
            >
              <h2 id="about-title" className="lbl" style={{ flex: "0 0 180px", color: "#b8ae9c" }}>
                Who we are
              </h2>
              <p
                style={{
                  flex: "999 1 440px",
                  margin: "0",
                  fontFamily: "'Grenze',Georgia,serif",
                  fontSize: "clamp(24px,1rem + 1.2vw,34px)",
                  fontWeight: "500",
                  lineHeight: "1.35",
                  color: "#e8e0d0",
                  textWrap: "pretty",
                }}
              >
                We’re DeadCode Studios, a small team of friends making games in Unity from [City,
                Country]. Kingdom of Kings is our first game, and we share how it’s going in the
                devlog.
              </p>
              <div
                style={{
                  flex: "1 1 200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "14px",
                }}
              >
                <div aria-hidden="true" style={{ display: "flex", gap: "10px" }}>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      border: "2px solid #6b6258",
                      background: "#121110",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#8f8679",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="square"
                    >
                      <circle cx="12" cy="9" r="4"></circle>
                      <path d="M4 21a8 8 0 0 1 16 0"></path>
                    </svg>
                  </div>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      border: "2px solid #6b6258",
                      background: "#121110",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#8f8679",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="square"
                    >
                      <circle cx="12" cy="9" r="4"></circle>
                      <path d="M4 21a8 8 0 0 1 16 0"></path>
                    </svg>
                  </div>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      border: "2px solid #6b6258",
                      background: "#121110",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#8f8679",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="square"
                    >
                      <circle cx="12" cy="9" r="4"></circle>
                      <path d="M4 21a8 8 0 0 1 16 0"></path>
                    </svg>
                  </div>
                </div>
                <p style={{ margin: "0", color: "#b8ae9c", fontSize: "16px", lineHeight: "1.4" }}>
                  [Team photos or illustrated avatars, one per person]
                </p>
                <a className="arrow" href="#">
                  Meet the team
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="square"
                    aria-hidden="true"
                  >
                    <path d="M5 2l8 7-8 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div style={{ position: "relative", zIndex: "2", marginTop: "-92px" }}>
          <div
            aria-hidden="true"
            style={{
              height: "28px",
              marginBottom: "-1px",
              background:
                "repeating-linear-gradient(90deg,#D2CDB7 0,#D2CDB7 56px,transparent 56px,transparent 112px)",
            }}
          ></div>
          <div
            className="parch"
            style={{
              background: "#D2CDB7",
              color: "#121110",
              padding: "clamp(64px,7vw,104px) 0 clamp(80px,8vw,128px)",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "1240px",
                margin: "0 auto",
                padding: "0 clamp(16px,4vw,64px)",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "clamp(80px,9vw,128px)",
              }}
            >
              <section
                id="games"
                aria-labelledby="games-title"
                style={{ display: "flex", flexDirection: "column", gap: "32px" }}
              >
                <div className="rule">
                  <h2 id="games-title" className="h2">
                    Games
                  </h2>
                  <p className="lbl" style={{ color: "#4a443d" }}>
                    1 game
                  </p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
                  <Link
                    className="card"
                    href="/game"
                    style={{
                      flex: "2 1 560px",
                      minWidth: "0",
                      display: "flex",
                      flexDirection: "column",
                      border: "3px solid #121110",
                      overflow: "hidden",
                      textDecoration: "none",
                      color: "#121110",
                    }}
                  >
                    <div style={{ overflow: "hidden", borderBottom: "3px solid #121110" }}>
                      <div
                        className="media"
                        style={{
                          aspectRatio: "920/430",
                          background: "#1a1816",
                          display: "flex",
                          alignItems: "flex-end",
                          padding: "18px",
                          boxSizing: "border-box",
                        }}
                      >
                        <span className="ph">Header capsule art · 920×430</span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "14px",
                        padding: "24px 28px 28px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "12px 16px",
                        }}
                      >
                        <h3
                          style={{
                            margin: "0",
                            fontFamily: "'Grenze Gotisch','Old English Text MT',Georgia,serif",
                            fontSize: "clamp(34px,1.4rem + 1.2vw,48px)",
                            fontWeight: "800",
                            lineHeight: "1",
                          }}
                        >
                          Kingdom of Kings
                        </h3>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                          <span className="tag">
                            <span className="dot" aria-hidden="true"></span>Wishlist on Steam
                          </span>
                          <span className="tagd">[Genre]</span>
                        </div>
                      </div>
                      <p className="lbl" style={{ color: "#4a443d" }}>
                        PC · Steam · itch.io
                      </p>
                      <p
                        style={{
                          margin: "0",
                          maxWidth: "60ch",
                          fontSize: "19px",
                          lineHeight: "1.5",
                          textWrap: "pretty",
                        }}
                      >
                        [Two sentences: the hook first, then what you actually do in the game.]
                      </p>
                      <span className="arrow" style={{ color: "#7a3612" }}>
                        See the game
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="square"
                          aria-hidden="true"
                        >
                          <path d="M5 2l8 7-8 7"></path>
                        </svg>
                      </span>
                    </div>
                  </Link>
                  <div
                    style={{
                      flex: "1 1 300px",
                      minWidth: "0",
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                    }}
                  >
                    <div
                      style={{
                        flex: "1 1 auto",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        gap: "20px",
                        padding: "24px",
                        border: "2px dashed #121110",
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <p className="lbl" style={{ color: "#4a443d" }}>
                          Devlog
                        </p>
                        <h3
                          style={{
                            margin: "0",
                            fontFamily: "'Grenze',Georgia,serif",
                            fontSize: "26px",
                            fontWeight: "700",
                            lineHeight: "1.15",
                          }}
                        >
                          Follow the build.
                        </h3>
                        <p
                          style={{
                            margin: "0",
                            color: "#4a443d",
                            fontSize: "18px",
                            lineHeight: "1.45",
                          }}
                        >
                          What we made, what broke, and what we’re trying next.
                        </p>
                      </div>
                      <a
                        className="ink-btn"
                        href="#devlog"
                        style={{
                          alignSelf: "flex-start",
                          display: "inline-flex",
                          alignItems: "center",
                          minHeight: "48px",
                          padding: "0 22px",
                          border: "2px solid #121110",
                          background: "#121110",
                          color: "#e8e0d0",
                          textDecoration: "none",
                          fontFamily: "'Grenze',Georgia,serif",
                          fontSize: "15px",
                          fontWeight: "700",
                          letterSpacing: ".08em",
                          textTransform: "uppercase",
                        }}
                      >
                        Read the devlog
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              <section
                id="features"
                aria-labelledby="features-title"
                style={{ display: "flex", flexDirection: "column", gap: "32px" }}
              >
                <div className="rule">
                  <h2 id="features-title" className="h2">
                    Inside Kingdom of Kings
                  </h2>
                  <Link className="arrow" href="/game">
                    Explore all features
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="square"
                      aria-hidden="true"
                    >
                      <path d="M5 2l8 7-8 7"></path>
                    </svg>
                  </Link>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
                    gap: "24px",
                  }}
                >
                  <article style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div
                      style={{
                        aspectRatio: "16/9",
                        border: "3px solid #121110",
                        background: "#1a1816",
                        display: "flex",
                        alignItems: "flex-end",
                        padding: "14px",
                        boxSizing: "border-box",
                      }}
                    >
                      <span className="ph">In-game GIF or screenshot</span>
                    </div>
                    <h3
                      style={{
                        margin: "0",
                        fontFamily: "'Grenze',Georgia,serif",
                        fontSize: "26px",
                        fontWeight: "700",
                        lineHeight: "1.15",
                      }}
                    >
                      [Feature 1 title]
                    </h3>
                    <p
                      style={{ margin: "0", color: "#4a443d", fontSize: "19px", lineHeight: "1.5" }}
                    >
                      [One line on what the player does and why it’s fun.]
                    </p>
                  </article>
                  <article style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div
                      style={{
                        aspectRatio: "16/9",
                        border: "3px solid #121110",
                        background: "#1a1816",
                        display: "flex",
                        alignItems: "flex-end",
                        padding: "14px",
                        boxSizing: "border-box",
                      }}
                    >
                      <span className="ph">In-game GIF or screenshot</span>
                    </div>
                    <h3
                      style={{
                        margin: "0",
                        fontFamily: "'Grenze',Georgia,serif",
                        fontSize: "26px",
                        fontWeight: "700",
                        lineHeight: "1.15",
                      }}
                    >
                      [Feature 2 title]
                    </h3>
                    <p
                      style={{ margin: "0", color: "#4a443d", fontSize: "19px", lineHeight: "1.5" }}
                    >
                      [One line on what the player does and why it’s fun.]
                    </p>
                  </article>
                  <article style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div
                      style={{
                        aspectRatio: "16/9",
                        border: "3px solid #121110",
                        background: "#1a1816",
                        display: "flex",
                        alignItems: "flex-end",
                        padding: "14px",
                        boxSizing: "border-box",
                      }}
                    >
                      <span className="ph">In-game GIF or screenshot</span>
                    </div>
                    <h3
                      style={{
                        margin: "0",
                        fontFamily: "'Grenze',Georgia,serif",
                        fontSize: "26px",
                        fontWeight: "700",
                        lineHeight: "1.15",
                      }}
                    >
                      [Feature 3 title]
                    </h3>
                    <p
                      style={{ margin: "0", color: "#4a443d", fontSize: "19px", lineHeight: "1.5" }}
                    >
                      [One line on what the player does and why it’s fun.]
                    </p>
                  </article>
                </div>
              </section>
              <section
                aria-labelledby="band-title"
                className="plate"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "24px 48px",
                  padding: "clamp(40px,4vw,56px) clamp(40px,4vw,64px)",
                  color: "#e8e0d0",
                }}
              >
                <div
                  style={{
                    flex: "1 1 420px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <p className="lbl" style={{ color: "#e07b2e" }}>
                    Kingdom of Kings
                  </p>
                  <>
                    <h2
                      id="band-title"
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
                      Wishlists help small games get seen.
                    </h2>
                    <p
                      style={{
                        margin: "0",
                        maxWidth: "560px",
                        color: "#b8ae9c",
                        fontSize: "19px",
                        lineHeight: "1.5",
                      }}
                    >
                      Every wishlist tells Steam people want Kingdom of Kings, and Steam emails you
                      the day it launches.
                    </p>
                  </>
                </div>
                <a
                  className="cta"
                  href={steamUrl("post_features")}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    minHeight: "56px",
                    padding: "0 28px",
                    border: "2px solid #e07b2e",
                    background: "#e07b2e",
                    color: "#0a0908",
                    textDecoration: "none",
                    fontFamily: "'Grenze',Georgia,serif",
                    fontSize: "18px",
                    fontWeight: "700",
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                  }}
                >
                  Wishlist on Steam
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="square"
                    aria-hidden="true"
                  >
                    <path d="M5 2l8 7-8 7"></path>
                  </svg>
                </a>
              </section>
              <section
                id="devlog"
                aria-labelledby="devlog-title"
                style={{ display: "flex", flexDirection: "column", gap: "32px" }}
              >
                <div className="rule">
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "baseline",
                      gap: "8px 20px",
                    }}
                  >
                    <h2 id="devlog-title" className="h2">
                      Devlog
                    </h2>
                    <p className="lbl" style={{ color: "#4a443d" }}>
                      Latest post: [Date]
                    </p>
                  </div>
                  <a className="arrow" href="#">
                    All posts
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="square"
                      aria-hidden="true"
                    >
                      <path d="M5 2l8 7-8 7"></path>
                    </svg>
                  </a>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
                    gap: "24px",
                  }}
                >
                  <a
                    className="card"
                    href="#"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      border: "3px solid #121110",
                      overflow: "hidden",
                      textDecoration: "none",
                      color: "#121110",
                    }}
                  >
                    <div style={{ overflow: "hidden", borderBottom: "3px solid #121110" }}>
                      <div
                        className="media"
                        style={{
                          aspectRatio: "16/9",
                          background: "#1a1816",
                          display: "flex",
                          alignItems: "flex-end",
                          padding: "14px",
                          boxSizing: "border-box",
                        }}
                      >
                        <span className="ph">Cover image</span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                        padding: "20px 24px 24px",
                      }}
                    >
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        <span className="tag">
                          <span className="dot" aria-hidden="true"></span>Start here
                        </span>
                        <span className="tagd">Studio</span>
                      </div>
                      <p className="lbl" style={{ color: "#4a443d" }}>
                        [Date]
                      </p>
                      <h3
                        style={{
                          margin: "0",
                          fontFamily: "'Grenze',Georgia,serif",
                          fontSize: "24px",
                          fontWeight: "700",
                          lineHeight: "1.2",
                          textWrap: "pretty",
                        }}
                      >
                        Start here: who we are and what we’re making
                      </h3>
                      <p
                        style={{
                          margin: "0",
                          color: "#4a443d",
                          fontSize: "18px",
                          lineHeight: "1.45",
                        }}
                      >
                        [One-line intro to the team and to Kingdom of Kings.]
                      </p>
                    </div>
                  </a>
                  <a
                    className="card"
                    href="#"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      border: "3px solid #121110",
                      overflow: "hidden",
                      textDecoration: "none",
                      color: "#121110",
                    }}
                  >
                    <div style={{ overflow: "hidden", borderBottom: "3px solid #121110" }}>
                      <div
                        className="media"
                        style={{
                          aspectRatio: "16/9",
                          background: "#1a1816",
                          display: "flex",
                          alignItems: "flex-end",
                          padding: "14px",
                          boxSizing: "border-box",
                        }}
                      >
                        <span className="ph">Cover image</span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                        padding: "20px 24px 24px",
                      }}
                    >
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        <span className="tagd">Kingdom of Kings</span>
                        <span className="tagd">Devlog</span>
                      </div>
                      <p className="lbl" style={{ color: "#4a443d" }}>
                        [Date]
                      </p>
                      <h3
                        style={{
                          margin: "0",
                          fontFamily: "'Grenze',Georgia,serif",
                          fontSize: "24px",
                          fontWeight: "700",
                          lineHeight: "1.2",
                          textWrap: "pretty",
                        }}
                      >
                        Kingdom of Kings Devlog #2: [Topic]
                      </h3>
                      <p
                        style={{
                          margin: "0",
                          color: "#4a443d",
                          fontSize: "18px",
                          lineHeight: "1.45",
                        }}
                      >
                        [One-line summary of the post.]
                      </p>
                    </div>
                  </a>
                  <a
                    className="card"
                    href="#"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      border: "3px solid #121110",
                      overflow: "hidden",
                      textDecoration: "none",
                      color: "#121110",
                    }}
                  >
                    <div style={{ overflow: "hidden", borderBottom: "3px solid #121110" }}>
                      <div
                        className="media"
                        style={{
                          aspectRatio: "16/9",
                          background: "#1a1816",
                          display: "flex",
                          alignItems: "flex-end",
                          padding: "14px",
                          boxSizing: "border-box",
                        }}
                      >
                        <span className="ph">Cover image</span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                        padding: "20px 24px 24px",
                      }}
                    >
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        <span className="tagd">Kingdom of Kings</span>
                        <span className="tagd">Devlog</span>
                      </div>
                      <p className="lbl" style={{ color: "#4a443d" }}>
                        [Date]
                      </p>
                      <h3
                        style={{
                          margin: "0",
                          fontFamily: "'Grenze',Georgia,serif",
                          fontSize: "24px",
                          fontWeight: "700",
                          lineHeight: "1.2",
                          textWrap: "pretty",
                        }}
                      >
                        Kingdom of Kings Devlog #1: [Topic]
                      </h3>
                      <p
                        style={{
                          margin: "0",
                          color: "#4a443d",
                          fontSize: "18px",
                          lineHeight: "1.45",
                        }}
                      >
                        [One-line summary of the post.]
                      </p>
                    </div>
                  </a>
                </div>
              </section>
              <section
                id="community"
                aria-labelledby="community-title"
                style={{ display: "flex", flexDirection: "column", gap: "32px" }}
              >
                <div className="rule">
                  <h2 id="community-title" className="h2">
                    Community
                  </h2>
                  <p
                    style={{ margin: "0", color: "#4a443d", fontSize: "18px", lineHeight: "1.45" }}
                  >
                    Also on [only the socials you keep updated].
                  </p>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(min(340px,100%),1fr))",
                    gap: "24px",
                  }}
                >
                  <a
                    className="card"
                    href="#"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px",
                      padding: "28px",
                      border: "3px solid #121110",
                      textDecoration: "none",
                      color: "#121110",
                    }}
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="square"
                      aria-hidden="true"
                    >
                      <path d="M4 4h16v12H10l-5 4v-4H4z"></path>
                      <path d="M8 9h8"></path>
                      <path d="M8 12h5"></path>
                    </svg>
                    <h3
                      style={{
                        margin: "0",
                        fontFamily: "'Grenze',Georgia,serif",
                        fontSize: "28px",
                        fontWeight: "700",
                        lineHeight: "1.1",
                      }}
                    >
                      Discord
                    </h3>
                    <p
                      style={{
                        margin: "0",
                        color: "#4a443d",
                        fontSize: "18px",
                        lineHeight: "1.45",
                      }}
                    >
                      Talk with us while we build it. [What members get, e.g. devlog previews and
                      playtest invites.]
                    </p>
                    <span className="arrow" style={{ marginTop: "auto", color: "#7a3612" }}>
                      Join the Discord
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="square"
                        aria-hidden="true"
                      >
                        <path d="M5 2l8 7-8 7"></path>
                      </svg>
                    </span>
                  </a>
                  <a
                    className="card"
                    href="#"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px",
                      padding: "28px",
                      border: "3px solid #121110",
                      textDecoration: "none",
                      color: "#121110",
                    }}
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="square"
                      aria-hidden="true"
                    >
                      <rect x="3" y="3" width="18" height="18"></rect>
                      <path d="M12 8v8"></path>
                      <path d="M8 12h8"></path>
                    </svg>
                    <h3
                      style={{
                        margin: "0",
                        fontFamily: "'Grenze',Georgia,serif",
                        fontSize: "28px",
                        fontWeight: "700",
                        lineHeight: "1.1",
                      }}
                    >
                      Steam
                    </h3>
                    <p
                      style={{
                        margin: "0",
                        color: "#4a443d",
                        fontSize: "18px",
                        lineHeight: "1.45",
                      }}
                    >
                      Follow our Steam developer page and Steam will tell you when we release
                      something new.
                    </p>
                    <span className="arrow" style={{ marginTop: "auto", color: "#7a3612" }}>
                      Follow us on Steam
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="square"
                        aria-hidden="true"
                      >
                        <path d="M5 2l8 7-8 7"></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </section>
              <section
                id="collaborate"
                aria-labelledby="collab-title"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "20px 40px",
                  padding: "32px 0",
                  borderTop: "6px double #121110",
                  borderBottom: "6px double #121110",
                }}
              >
                <div
                  style={{
                    flex: "1 1 480px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <h2
                    id="collab-title"
                    style={{
                      margin: "0",
                      fontFamily: "'Grenze',Georgia,serif",
                      fontSize: "clamp(1.5rem,1rem + 1.2vw,2.25rem)",
                      fontWeight: "700",
                      lineHeight: "1.1",
                      letterSpacing: ".03em",
                      textTransform: "uppercase",
                    }}
                  >
                    Make games with us
                  </h2>
                  <p style={{ margin: "0", color: "#4a443d", fontSize: "19px", lineHeight: "1.5" }}>
                    [One line on how you work with collaborators, e.g. artists, composers and
                    playtesters on scoped projects.]
                  </p>
                </div>
                <a
                  className="ink-btn"
                  href="#"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    minHeight: "48px",
                    padding: "0 22px",
                    border: "2px solid #121110",
                    background: "#121110",
                    color: "#e8e0d0",
                    textDecoration: "none",
                    fontFamily: "'Grenze',Georgia,serif",
                    fontSize: "15px",
                    fontWeight: "700",
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                  }}
                >
                  Work with us
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="square"
                    aria-hidden="true"
                  >
                    <path d="M5 2l8 7-8 7"></path>
                  </svg>
                </a>
              </section>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter idPrefix="home" emailId="nl-email" home />
    </div>
  );
}
