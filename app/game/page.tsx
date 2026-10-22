import type { Metadata } from "next";
import Link from "next/link";
import MotionToggle from "@/components/MotionToggle";
import ScrollEffects from "@/components/ScrollEffects";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { steamUrl } from "@/lib/steam";

export const metadata: Metadata = {
  title: "Kingdom of Kings | DeadCode Studios",
  description:
    "DeadCode Studios is a small team of friends making games in Unity. Kingdom of Kings: only one wears the crown.",
};

export default function GamePage() {
  return (
    <div
      className="pg-game"
      style={{
        position: "relative",
        overflowX: "hidden",
        fontFamily: "'Alegreya Sans','Gill Sans','Trebuchet MS',system-ui,sans-serif",
        fontSize: "18px",
        lineHeight: "1.45",
        color: "#e8e0d0",
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
      <SiteHeader />
      <main id="main">
        <section
          aria-labelledby="game-title"
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: "820px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            aria-hidden="true"
            className="hero-art"
            style={{ position: "absolute", inset: "0", pointerEvents: "none" }}
          >
            <div
              className="flicker"
              style={{
                position: "absolute",
                left: "50%",
                bottom: "-30%",
                width: "min(1500px,190vw)",
                aspectRatio: "2/1",
                transform: "translateX(-50%)",
                background:
                  "radial-gradient(ellipse at 50% 50%,rgba(224,123,46,.5) 0%,rgba(122,54,18,.28) 32%,rgba(10,9,8,0) 66%)",
                animationPlayState: "running",
              }}
            ></div>
            <div
              data-parallax="0.6"
              style={{
                position: "absolute",
                left: "50%",
                top: "110px",
                bottom: "0",
                width: "min(640px,90vw)",
                transform: "translateX(-50%)",
                border: "2px solid rgba(232,224,208,.16)",
                borderBottom: "0",
                borderRadius: "999px 999px 0 0",
              }}
            ></div>
            <div
              data-parallax="1"
              style={{
                position: "absolute",
                left: "50%",
                top: "150px",
                bottom: "0",
                width: "min(560px,80vw)",
                transform: "translateX(-50%)",
                border: "2px solid rgba(232,224,208,.24)",
                borderBottom: "0",
                borderRadius: "999px 999px 0 0",
              }}
            ></div>
            <div
              className="flicker"
              data-parallax="1.4"
              data-ember-source
              style={{
                position: "absolute",
                left: "50%",
                top: "200px",
                bottom: "0",
                width: "min(470px,70vw)",
                transform: "translateX(-50%)",
                border: "2px solid #7a3612",
                borderBottom: "0",
                borderRadius: "999px 999px 0 0",
                background:
                  "linear-gradient(0deg,rgba(244,163,92,.5) 0%,rgba(224,123,46,.2) 46%,rgba(10,9,8,0) 100%)",
                boxShadow: "inset 0 0 80px rgba(224,123,46,.28)",
                animationPlayState: "running",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                left: "0",
                right: "0",
                bottom: "96px",
                height: "2px",
                background:
                  "linear-gradient(90deg,rgba(224,123,46,0),rgba(224,123,46,.65),rgba(224,123,46,0))",
              }}
            ></div>
          </div>
          <div
            className="hero-body"
            style={{
              position: "relative",
              zIndex: "1",
              flex: "1 1 auto",
              width: "100%",
              maxWidth: "1240px",
              margin: "0 auto",
              paddingInline: "clamp(16px,4vw,64px)",
              paddingBottom: "40px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: "40px",
            }}
          >
            <nav aria-label="Breadcrumb">
              <ol
                className="lbl"
                style={{
                  margin: "0",
                  padding: "0",
                  listStyle: "none",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <li>
                  <Link href="/" style={{ color: "#b8ae9c", textDecoration: "none" }}>
                    Games
                  </Link>
                </li>
                <li aria-hidden="true" style={{ color: "#6b6258" }}>
                  /
                </li>
                <li aria-current="page" style={{ color: "#e8e0d0" }}>
                  Kingdom of Kings
                </li>
              </ol>
            </nav>
            <div
              style={{
                margin: "auto 0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "24px",
              }}
            >
              <p
                className="rise lbl"
                style={{
                  margin: "0",
                  display: "inline-flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
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
              <h1
                id="game-title"
                className="rise d1"
                style={{
                  margin: "0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontFamily: "'Grenze Gotisch','Old English Text MT',Georgia,serif",
                  fontWeight: "800",
                  lineHeight: ".9",
                }}
              >
                <span className="wm" style={{ fontSize: "clamp(3.75rem,1rem + 8vw,9.5rem)" }}>
                  <span className="wm-back" aria-hidden="true">
                    Kingdom
                  </span>
                  <span className="wm-front">Kingdom</span>
                </span>
                <span className="wm" style={{ fontSize: "clamp(3.75rem,1rem + 8vw,9.5rem)" }}>
                  <span className="wm-back" aria-hidden="true">
                    of Kings
                  </span>
                  <span className="wm-front">of Kings</span>
                </span>
              </h1>
              <p
                className="rise d2"
                style={{
                  margin: "0",
                  maxWidth: "560px",
                  fontSize: "clamp(20px,1rem + .5vw,24px)",
                  lineHeight: "1.45",
                  color: "#e8e0d0",
                  textWrap: "pretty",
                }}
              >
                [Tagline: one line that sells the fantasy of playing it.]
              </p>
              <div
                className="rise d3"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "14px 20px",
                }}
              >
                <a
                  className="cta"
                  href={steamUrl("game_hero")}
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
                <a
                  className="ghost"
                  href="#trailer"
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
                </a>
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
              <p className="rise d4 lbl" style={{ margin: "0", color: "#b8ae9c" }}>
                PC (Windows) · Steam · itch.io
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
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
                  Placeholder. Use the same text-free art as the Steam Library Hero, with the focal
                  point behind the logo.
                </span>
              </p>
              <MotionToggle />
            </div>
          </div>
        </section>
        <section
          id="trailer"
          aria-labelledby="trailer-title"
          style={{ position: "relative", zIndex: "3" }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "1240px",
              margin: "0 auto",
              padding: "16px clamp(16px,4vw,64px) 0",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                maxWidth: "1040px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: "6px 24px",
                }}
              >
                <h2 id="trailer-title" className="lbl" style={{ color: "#e8e0d0" }}>
                  Trailer · [Length]
                </h2>
                <p style={{ margin: "0", color: "#b8ae9c", fontSize: "16px", lineHeight: "1.4" }}>
                  YouTube loads only when you press play.
                </p>
              </div>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "16/9",
                  border: "3px solid #6b6258",
                  overflow: "hidden",
                  background: "#1a1816",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 24px 60px rgba(0,0,0,.55)",
                }}
              >
                <button
                  className="cta"
                  type="button"
                  aria-label="Play the Kingdom of Kings trailer (loads YouTube)"
                  style={{
                    width: "96px",
                    height: "96px",
                    padding: "0",
                    border: "2px solid #e07b2e",
                    background: "#e07b2e",
                    color: "#0a0908",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                </button>
                <p
                  className="ph"
                  style={{ position: "absolute", left: "14px", bottom: "14px", margin: "0" }}
                >
                  Poster frame · open on real gameplay
                </p>
              </div>
            </div>
          </div>
        </section>
        <div style={{ position: "relative", zIndex: "2" }}>
          <div
            className="parch"
            style={{
              padding: "clamp(72px,8vw,120px) 0 clamp(80px,8vw,128px)",
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
                id="about-game"
                aria-labelledby="about-game-title"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                  gap: "48px 64px",
                }}
              >
                <div
                  style={{
                    flex: "999 1 560px",
                    minWidth: "0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  }}
                >
                  <p className="lbl" style={{ color: "var(--ink-2)" }}>
                    About the game
                  </p>
                  <h2
                    id="about-game-title"
                    style={{
                      margin: "0",
                      fontFamily: "'Grenze',Georgia,serif",
                      fontSize: "clamp(1.75rem,1.1rem + 2vw,3rem)",
                      fontWeight: "700",
                      lineHeight: "1.1",
                      letterSpacing: ".01em",
                      textWrap: "balance",
                    }}
                  >
                    [Short description: one or two sentences with the hook, in plain words.]
                  </h2>
                  <div
                    style={{
                      maxWidth: "62ch",
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                      fontSize: "20px",
                      lineHeight: "1.55",
                    }}
                  >
                    <p style={{ margin: "0" }}>
                      [Paragraph 1: the world, and who the player is in it.]
                    </p>
                    <p style={{ margin: "0" }}>
                      [Paragraph 2: what a match or session looks like from start to finish.]
                    </p>
                    <p style={{ margin: "0" }}>
                      [Paragraph 3: what makes it different from the games it’ll be compared to.]
                    </p>
                  </div>
                  <figure
                    style={{
                      margin: "8px 0 0",
                      paddingTop: "20px",
                      borderTop: "6px double var(--ink)",
                      maxWidth: "62ch",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <blockquote
                      style={{
                        margin: "0",
                        fontFamily: "'Grenze',Georgia,serif",
                        fontStyle: "italic",
                        fontWeight: "400",
                        fontSize: "clamp(24px,1rem + 1vw,30px)",
                        lineHeight: "1.3",
                      }}
                    >
                      “A crown is a hat that lets the rain in.”
                    </blockquote>
                    <figcaption className="lbl" style={{ color: "var(--ink-2)" }}>
                      A saying from the game
                    </figcaption>
                  </figure>
                </div>
                <aside
                  aria-labelledby="facts-title"
                  style={{
                    flex: "1 1 320px",
                    minWidth: "0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    padding: "28px",
                    border: "3px solid var(--ink)",
                  }}
                >
                  <h2 id="facts-title" className="lbl">
                    Fact sheet
                  </h2>
                  <dl style={{ margin: "0", display: "flex", flexDirection: "column" }}>
                    <div className="dl-row">
                      <dt>Status</dt>
                      <dd style={{ fontWeight: "700" }}>Wishlist on Steam</dd>
                    </div>
                    <div className="dl-row">
                      <dt>Release</dt>
                      <dd>[Release window]</dd>
                    </div>
                    <div className="dl-row">
                      <dt>Platform</dt>
                      <dd>PC (Windows)</dd>
                    </div>
                    <div className="dl-row">
                      <dt>Stores</dt>
                      <dd>Steam, itch.io</dd>
                    </div>
                    <div className="dl-row">
                      <dt>Genre</dt>
                      <dd>[Genre]</dd>
                    </div>
                    <div className="dl-row">
                      <dt>Players</dt>
                      <dd>[Player count]</dd>
                    </div>
                    <div className="dl-row">
                      <dt>Price</dt>
                      <dd>[Price]</dd>
                    </div>
                    <div className="dl-row">
                      <dt>Languages</dt>
                      <dd>[Languages]</dd>
                    </div>
                    <div className="dl-row">
                      <dt>Engine</dt>
                      <dd>Unity</dd>
                    </div>
                    <div className="dl-row">
                      <dt>Developer</dt>
                      <dd>DeadCode Studios</dd>
                    </div>
                  </dl>
                  <a
                    className="ink-btn"
                    href={steamUrl("post_trailer")}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      minHeight: "52px",
                      padding: "0 22px",
                      border: "2px solid var(--ink)",
                      background: "var(--ink)",
                      color: "var(--paper)",
                      textDecoration: "none",
                      fontFamily: "'Grenze',Georgia,serif",
                      fontSize: "16px",
                      fontWeight: "700",
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Wishlist on Steam
                  </a>
                </aside>
              </section>
              <section
                id="features"
                aria-labelledby="features-title"
                style={{ display: "flex", flexDirection: "column", gap: "40px" }}
              >
                <div className="rule">
                  <h2 id="features-title" className="h2">
                    Features
                  </h2>
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: "clamp(40px,5vw,72px)" }}
                >
                  <article
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "24px 56px",
                    }}
                  >
                    <div
                      style={{
                        flex: "1 1 480px",
                        minWidth: "0",
                        aspectRatio: "16/9",
                        border: "3px solid var(--ink)",
                        background: "#1a1816",
                        display: "flex",
                        alignItems: "flex-end",
                        padding: "14px",
                        boxSizing: "border-box",
                      }}
                    >
                      <span className="ph">In-game GIF · 5–10 second loop</span>
                    </div>
                    <div
                      style={{
                        flex: "1 1 340px",
                        minWidth: "0",
                        display: "flex",
                        flexDirection: "column",
                        gap: "14px",
                      }}
                    >
                      <p className="lbl" style={{ color: "var(--ink-2)" }}>
                        Feature 01
                      </p>
                      <h3 className="h3">[Feature title]</h3>
                      <p
                        style={{
                          margin: "0",
                          color: "var(--ink-2)",
                          fontSize: "20px",
                          lineHeight: "1.55",
                        }}
                      >
                        [Two or three sentences: what the player does and why it’s fun.]
                      </p>
                    </div>
                  </article>
                  <article
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "row-reverse",
                      alignItems: "center",
                      gap: "24px 56px",
                    }}
                  >
                    <div
                      style={{
                        flex: "1 1 480px",
                        minWidth: "0",
                        aspectRatio: "16/9",
                        border: "3px solid var(--ink)",
                        background: "#1a1816",
                        display: "flex",
                        alignItems: "flex-end",
                        padding: "14px",
                        boxSizing: "border-box",
                      }}
                    >
                      <span className="ph">In-game GIF · 5–10 second loop</span>
                    </div>
                    <div
                      style={{
                        flex: "1 1 340px",
                        minWidth: "0",
                        display: "flex",
                        flexDirection: "column",
                        gap: "14px",
                      }}
                    >
                      <p className="lbl" style={{ color: "var(--ink-2)" }}>
                        Feature 02
                      </p>
                      <h3 className="h3">[Feature title]</h3>
                      <p
                        style={{
                          margin: "0",
                          color: "var(--ink-2)",
                          fontSize: "20px",
                          lineHeight: "1.55",
                        }}
                      >
                        [Two or three sentences: what the player does and why it’s fun.]
                      </p>
                    </div>
                  </article>
                  <article
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "24px 56px",
                    }}
                  >
                    <div
                      style={{
                        flex: "1 1 480px",
                        minWidth: "0",
                        aspectRatio: "16/9",
                        border: "3px solid var(--ink)",
                        background: "#1a1816",
                        display: "flex",
                        alignItems: "flex-end",
                        padding: "14px",
                        boxSizing: "border-box",
                      }}
                    >
                      <span className="ph">In-game GIF · 5–10 second loop</span>
                    </div>
                    <div
                      style={{
                        flex: "1 1 340px",
                        minWidth: "0",
                        display: "flex",
                        flexDirection: "column",
                        gap: "14px",
                      }}
                    >
                      <p className="lbl" style={{ color: "var(--ink-2)" }}>
                        Feature 03
                      </p>
                      <h3 className="h3">[Feature title]</h3>
                      <p
                        style={{
                          margin: "0",
                          color: "var(--ink-2)",
                          fontSize: "20px",
                          lineHeight: "1.55",
                        }}
                      >
                        [Two or three sentences: what the player does and why it’s fun.]
                      </p>
                    </div>
                  </article>
                </div>
              </section>
              <section
                id="screenshots"
                aria-labelledby="shots-title"
                style={{ display: "flex", flexDirection: "column", gap: "32px" }}
              >
                <div className="rule">
                  <h2 id="shots-title" className="h2">
                    Screenshots
                  </h2>
                  <p className="lbl" style={{ color: "var(--ink-2)" }}>
                    In-game captures · 1920×1080
                  </p>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(min(280px,100%),1fr))",
                    gap: "16px",
                  }}
                >
                  <button
                    className="card"
                    type="button"
                    aria-label="Open screenshot 01 of 6"
                    style={{
                      aspectRatio: "16/9",
                      padding: "0",
                      border: "3px solid var(--ink)",
                      overflow: "hidden",
                      background: "#1a1816",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-start",
                      fontFamily: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <span className="ph" style={{ margin: "12px" }}>
                      Screenshot 01
                    </span>
                  </button>
                  <button
                    className="card"
                    type="button"
                    aria-label="Open screenshot 02 of 6"
                    style={{
                      aspectRatio: "16/9",
                      padding: "0",
                      border: "3px solid var(--ink)",
                      overflow: "hidden",
                      background: "#1a1816",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-start",
                      fontFamily: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <span className="ph" style={{ margin: "12px" }}>
                      Screenshot 02
                    </span>
                  </button>
                  <button
                    className="card"
                    type="button"
                    aria-label="Open screenshot 03 of 6"
                    style={{
                      aspectRatio: "16/9",
                      padding: "0",
                      border: "3px solid var(--ink)",
                      overflow: "hidden",
                      background: "#1a1816",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-start",
                      fontFamily: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <span className="ph" style={{ margin: "12px" }}>
                      Screenshot 03
                    </span>
                  </button>
                  <button
                    className="card"
                    type="button"
                    aria-label="Open screenshot 04 of 6"
                    style={{
                      aspectRatio: "16/9",
                      padding: "0",
                      border: "3px solid var(--ink)",
                      overflow: "hidden",
                      background: "#1a1816",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-start",
                      fontFamily: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <span className="ph" style={{ margin: "12px" }}>
                      Screenshot 04
                    </span>
                  </button>
                  <button
                    className="card"
                    type="button"
                    aria-label="Open screenshot 05 of 6"
                    style={{
                      aspectRatio: "16/9",
                      padding: "0",
                      border: "3px solid var(--ink)",
                      overflow: "hidden",
                      background: "#1a1816",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-start",
                      fontFamily: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <span className="ph" style={{ margin: "12px" }}>
                      Screenshot 05
                    </span>
                  </button>
                  <button
                    className="card"
                    type="button"
                    aria-label="Open screenshot 06 of 6"
                    style={{
                      aspectRatio: "16/9",
                      padding: "0",
                      border: "3px solid var(--ink)",
                      overflow: "hidden",
                      background: "#1a1816",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-start",
                      fontFamily: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <span className="ph" style={{ margin: "12px" }}>
                      Screenshot 06
                    </span>
                  </button>
                </div>
              </section>
              <section
                aria-labelledby="steam-title"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "24px 48px",
                  padding: "clamp(24px,3vw,40px)",
                  border: "3px solid var(--ink)",
                }}
              >
                <div
                  style={{
                    flex: "1 1 320px",
                    minWidth: "0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <h2 id="steam-title" className="h3">
                    Kingdom of Kings on Steam
                  </h2>
                  <p
                    style={{
                      margin: "0",
                      color: "var(--ink-2)",
                      fontSize: "19px",
                      lineHeight: "1.5",
                    }}
                  >
                    Steam’s own store widget, loaded only when you ask for it.
                  </p>
                </div>
                <div
                  style={{
                    flex: "1 1 480px",
                    maxWidth: "646px",
                    minHeight: "190px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                    boxSizing: "border-box",
                    border: "2px dashed var(--ink)",
                  }}
                >
                  <button
                    className="ink-btn"
                    type="button"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      minHeight: "48px",
                      padding: "0 22px",
                      border: "2px solid var(--ink)",
                      background: "var(--ink)",
                      color: "var(--paper)",
                      fontFamily: "'Grenze',Georgia,serif",
                      fontSize: "15px",
                      fontWeight: "700",
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                    }}
                  >
                    Load the Steam widget
                  </button>
                </div>
              </section>
              <section
                id="updates"
                aria-labelledby="updates-title"
                style={{ display: "flex", flexDirection: "column", gap: "16px" }}
              >
                <div className="rule">
                  <h2 id="updates-title" className="h2">
                    Updates
                  </h2>
                  <Link className="arrow" href="/">
                    All devlog posts
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
                <ul
                  style={{
                    margin: "0",
                    padding: "0",
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <li style={{ borderBottom: "2px solid var(--ink)" }}>
                    <a
                      className="row-link"
                      href="#"
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: "8px 24px",
                        padding: "20px 0",
                        textDecoration: "none",
                        color: "var(--ink)",
                      }}
                    >
                      <span className="lbl" style={{ flex: "0 0 130px", color: "var(--ink-2)" }}>
                        [Date]
                      </span>
                      <span className="tagd">Devlog</span>
                      <span
                        className="row-title"
                        style={{
                          flex: "1 1 320px",
                          fontFamily: "'Grenze',Georgia,serif",
                          fontSize: "24px",
                          fontWeight: "700",
                          lineHeight: "1.2",
                        }}
                      >
                        Kingdom of Kings Devlog #2: [Topic]
                      </span>
                      <svg
                        width="20"
                        height="20"
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
                  </li>
                  <li style={{ borderBottom: "2px solid var(--ink)" }}>
                    <a
                      className="row-link"
                      href="#"
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: "8px 24px",
                        padding: "20px 0",
                        textDecoration: "none",
                        color: "var(--ink)",
                      }}
                    >
                      <span className="lbl" style={{ flex: "0 0 130px", color: "var(--ink-2)" }}>
                        [Date]
                      </span>
                      <span className="tagd">Devlog</span>
                      <span
                        className="row-title"
                        style={{
                          flex: "1 1 320px",
                          fontFamily: "'Grenze',Georgia,serif",
                          fontSize: "24px",
                          fontWeight: "700",
                          lineHeight: "1.2",
                        }}
                      >
                        Kingdom of Kings Devlog #1: [Topic]
                      </span>
                      <svg
                        width="20"
                        height="20"
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
                  </li>
                  <li style={{ borderBottom: "2px solid var(--ink)" }}>
                    <a
                      className="row-link"
                      href="#"
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: "8px 24px",
                        padding: "20px 0",
                        textDecoration: "none",
                        color: "var(--ink)",
                      }}
                    >
                      <span className="lbl" style={{ flex: "0 0 130px", color: "var(--ink-2)" }}>
                        [Date]
                      </span>
                      <span className="tagd">Announcement</span>
                      <span
                        className="row-title"
                        style={{
                          flex: "1 1 320px",
                          fontFamily: "'Grenze',Georgia,serif",
                          fontSize: "24px",
                          fontWeight: "700",
                          lineHeight: "1.2",
                        }}
                      >
                        [Announcement title, e.g. the Steam page is live]
                      </span>
                      <svg
                        width="20"
                        height="20"
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
                  </li>
                </ul>
              </section>
              <section
                id="faq"
                aria-labelledby="faq-title"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                  gap: "32px 64px",
                }}
              >
                <div
                  style={{
                    flex: "1 1 260px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  <h2 id="faq-title" className="h2">
                    FAQ
                  </h2>
                  <p
                    style={{
                      margin: "0",
                      color: "var(--ink-2)",
                      fontSize: "19px",
                      lineHeight: "1.5",
                    }}
                  >
                    Not answered here? Ask in Discord or email <a href="#">[hello@yourdomain]</a>.
                  </p>
                </div>
                <div
                  style={{
                    flex: "999 1 560px",
                    minWidth: "0",
                    display: "flex",
                    flexDirection: "column",
                    borderTop: "2px solid var(--ink)",
                  }}
                >
                  <details open style={{ borderBottom: "2px solid var(--ink)" }}>
                    <summary
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                        minHeight: "44px",
                        padding: "20px 0",
                        fontFamily: "'Grenze',Georgia,serif",
                        fontSize: "24px",
                        fontWeight: "700",
                        lineHeight: "1.25",
                        cursor: "pointer",
                      }}
                    >
                      When does Kingdom of Kings come out?
                      <svg
                        className="chev"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="square"
                        aria-hidden="true"
                        style={{ flex: "0 0 auto" }}
                      >
                        <path d="M5 9l7 7 7-7"></path>
                      </svg>
                    </summary>
                    <p
                      style={{
                        margin: "0 0 24px",
                        maxWidth: "62ch",
                        color: "var(--ink-2)",
                        fontSize: "19px",
                        lineHeight: "1.55",
                      }}
                    >
                      [Release window]. Wishlist it on Steam and Steam will email you the day it
                      launches.
                    </p>
                  </details>
                  <details style={{ borderBottom: "2px solid var(--ink)" }}>
                    <summary
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                        minHeight: "44px",
                        padding: "20px 0",
                        fontFamily: "'Grenze',Georgia,serif",
                        fontSize: "24px",
                        fontWeight: "700",
                        lineHeight: "1.25",
                        cursor: "pointer",
                      }}
                    >
                      Which platforms will it be on?
                      <svg
                        className="chev"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="square"
                        aria-hidden="true"
                        style={{ flex: "0 0 auto" }}
                      >
                        <path d="M5 9l7 7 7-7"></path>
                      </svg>
                    </summary>
                    <p
                      style={{
                        margin: "0 0 24px",
                        maxWidth: "62ch",
                        color: "var(--ink-2)",
                        fontSize: "19px",
                        lineHeight: "1.55",
                      }}
                    >
                      PC (Windows), on Steam and itch.io. [Any other platforms you’re planning.]
                    </p>
                  </details>
                  <details style={{ borderBottom: "2px solid var(--ink)" }}>
                    <summary
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                        minHeight: "44px",
                        padding: "20px 0",
                        fontFamily: "'Grenze',Georgia,serif",
                        fontSize: "24px",
                        fontWeight: "700",
                        lineHeight: "1.25",
                        cursor: "pointer",
                      }}
                    >
                      How much will it cost?
                      <svg
                        className="chev"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="square"
                        aria-hidden="true"
                        style={{ flex: "0 0 auto" }}
                      >
                        <path d="M5 9l7 7 7-7"></path>
                      </svg>
                    </summary>
                    <p
                      style={{
                        margin: "0 0 24px",
                        maxWidth: "62ch",
                        color: "var(--ink-2)",
                        fontSize: "19px",
                        lineHeight: "1.55",
                      }}
                    >
                      [Price, or “We’ll announce the price closer to launch.”]
                    </p>
                  </details>
                  <details style={{ borderBottom: "2px solid var(--ink)" }}>
                    <summary
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                        minHeight: "44px",
                        padding: "20px 0",
                        fontFamily: "'Grenze',Georgia,serif",
                        fontSize: "24px",
                        fontWeight: "700",
                        lineHeight: "1.25",
                        cursor: "pointer",
                      }}
                    >
                      Is it multiplayer? How do servers work?
                      <svg
                        className="chev"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="square"
                        aria-hidden="true"
                        style={{ flex: "0 0 auto" }}
                      >
                        <path d="M5 9l7 7 7-7"></path>
                      </svg>
                    </summary>
                    <p
                      style={{
                        margin: "0 0 24px",
                        maxWidth: "62ch",
                        color: "var(--ink-2)",
                        fontSize: "19px",
                        lineHeight: "1.55",
                      }}
                    >
                      [Player count, online or local, and how servers are hosted.]
                    </p>
                  </details>
                  <details style={{ borderBottom: "2px solid var(--ink)" }}>
                    <summary
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                        minHeight: "44px",
                        padding: "20px 0",
                        fontFamily: "'Grenze',Georgia,serif",
                        fontSize: "24px",
                        fontWeight: "700",
                        lineHeight: "1.25",
                        cursor: "pointer",
                      }}
                    >
                      Will it run on Steam Deck?
                      <svg
                        className="chev"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="square"
                        aria-hidden="true"
                        style={{ flex: "0 0 auto" }}
                      >
                        <path d="M5 9l7 7 7-7"></path>
                      </svg>
                    </summary>
                    <p
                      style={{
                        margin: "0 0 24px",
                        maxWidth: "62ch",
                        color: "var(--ink-2)",
                        fontSize: "19px",
                        lineHeight: "1.55",
                      }}
                    >
                      [Your Steam Deck plans.]
                    </p>
                  </details>
                  <details style={{ borderBottom: "2px solid var(--ink)" }}>
                    <summary
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                        minHeight: "44px",
                        padding: "20px 0",
                        fontFamily: "'Grenze',Georgia,serif",
                        fontSize: "24px",
                        fontWeight: "700",
                        lineHeight: "1.25",
                        cursor: "pointer",
                      }}
                    >
                      Which languages will it support?
                      <svg
                        className="chev"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="square"
                        aria-hidden="true"
                        style={{ flex: "0 0 auto" }}
                      >
                        <path d="M5 9l7 7 7-7"></path>
                      </svg>
                    </summary>
                    <p
                      style={{
                        margin: "0 0 24px",
                        maxWidth: "62ch",
                        color: "var(--ink-2)",
                        fontSize: "19px",
                        lineHeight: "1.55",
                      }}
                    >
                      [Languages at launch, and any planned later.]
                    </p>
                  </details>
                  <details style={{ borderBottom: "2px solid var(--ink)" }}>
                    <summary
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                        minHeight: "44px",
                        padding: "20px 0",
                        fontFamily: "'Grenze',Georgia,serif",
                        fontSize: "24px",
                        fontWeight: "700",
                        lineHeight: "1.25",
                        cursor: "pointer",
                      }}
                    >
                      Can I stream it or make videos?
                      <svg
                        className="chev"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="square"
                        aria-hidden="true"
                        style={{ flex: "0 0 auto" }}
                      >
                        <path d="M5 9l7 7 7-7"></path>
                      </svg>
                    </summary>
                    <p
                      style={{
                        margin: "0 0 24px",
                        maxWidth: "62ch",
                        color: "var(--ink-2)",
                        fontSize: "19px",
                        lineHeight: "1.55",
                      }}
                    >
                      [Your creator policy in one line, e.g. “Yes, and you can monetize them.”]{" "}
                      <a href="#">Read the creator policy</a>.
                    </p>
                  </details>
                  <details style={{ borderBottom: "2px solid var(--ink)" }}>
                    <summary
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                        minHeight: "44px",
                        padding: "20px 0",
                        fontFamily: "'Grenze',Georgia,serif",
                        fontSize: "24px",
                        fontWeight: "700",
                        lineHeight: "1.25",
                        cursor: "pointer",
                      }}
                    >
                      Where can I learn the rules?
                      <svg
                        className="chev"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="square"
                        aria-hidden="true"
                        style={{ flex: "0 0 auto" }}
                      >
                        <path d="M5 9l7 7 7-7"></path>
                      </svg>
                    </summary>
                    <p
                      style={{
                        margin: "0 0 24px",
                        maxWidth: "62ch",
                        color: "var(--ink-2)",
                        fontSize: "19px",
                        lineHeight: "1.55",
                      }}
                    >
                      Everything about how to play is in the{" "}
                      <a href="#">Kingdom of Kings rules wiki</a>.
                    </p>
                  </details>
                  <details style={{ borderBottom: "2px solid var(--ink)" }}>
                    <summary
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                        minHeight: "44px",
                        padding: "20px 0",
                        fontFamily: "'Grenze',Georgia,serif",
                        fontSize: "24px",
                        fontWeight: "700",
                        lineHeight: "1.25",
                        cursor: "pointer",
                      }}
                    >
                      What are the system requirements?
                      <svg
                        className="chev"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="square"
                        aria-hidden="true"
                        style={{ flex: "0 0 auto" }}
                      >
                        <path d="M5 9l7 7 7-7"></path>
                      </svg>
                    </summary>
                    <p
                      style={{
                        margin: "0 0 24px",
                        maxWidth: "62ch",
                        color: "var(--ink-2)",
                        fontSize: "19px",
                        lineHeight: "1.55",
                      }}
                    >
                      They’re on the Steam page, and we keep them up to date there.
                    </p>
                  </details>
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
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(min(250px,100%),1fr))",
                    gap: "20px",
                  }}
                >
                  <a
                    className="card leaf"
                    href="#"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      padding: "24px",
                      border: "3px solid var(--ink)",
                      textDecoration: "none",
                      color: "var(--ink)",
                    }}
                  >
                    <svg
                      width="28"
                      height="28"
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
                        fontSize: "26px",
                        fontWeight: "700",
                        lineHeight: "1.15",
                      }}
                    >
                      Discord
                    </h3>
                    <p
                      style={{
                        margin: "0",
                        color: "var(--ink-2)",
                        fontSize: "18px",
                        lineHeight: "1.45",
                      }}
                    >
                      Talk with us and other players.
                    </p>
                    <span
                      className="arrow"
                      style={{ marginTop: "auto", color: "var(--accent-ink)" }}
                    >
                      Join the Discord
                    </span>
                  </a>
                  <a
                    className="card leaf"
                    href="#"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      padding: "24px",
                      border: "3px solid var(--ink)",
                      textDecoration: "none",
                      color: "var(--ink)",
                    }}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="square"
                      aria-hidden="true"
                    >
                      <circle cx="9" cy="8" r="3.5"></circle>
                      <path d="M2.5 20a6.5 6.5 0 0 1 13 0"></path>
                      <path d="M16 4.5a3.5 3.5 0 0 1 0 7"></path>
                      <path d="M18 14a6.5 6.5 0 0 1 3.5 6"></path>
                    </svg>
                    <h3
                      style={{
                        margin: "0",
                        fontFamily: "'Grenze',Georgia,serif",
                        fontSize: "26px",
                        fontWeight: "700",
                        lineHeight: "1.15",
                      }}
                    >
                      Steam community hub
                    </h3>
                    <p
                      style={{
                        margin: "0",
                        color: "var(--ink-2)",
                        fontSize: "18px",
                        lineHeight: "1.45",
                      }}
                    >
                      Discussions, guides and screenshots.
                    </p>
                    <span
                      className="arrow"
                      style={{ marginTop: "auto", color: "var(--accent-ink)" }}
                    >
                      Open the hub
                    </span>
                  </a>
                  <a
                    className="card leaf"
                    href="#"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      padding: "24px",
                      border: "3px solid var(--ink)",
                      textDecoration: "none",
                      color: "var(--ink)",
                    }}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="square"
                      aria-hidden="true"
                    >
                      <path d="M5 4h14v16H8a3 3 0 0 1-3-3z"></path>
                      <path d="M5 17a3 3 0 0 1 3-3h11"></path>
                    </svg>
                    <h3
                      style={{
                        margin: "0",
                        fontFamily: "'Grenze',Georgia,serif",
                        fontSize: "26px",
                        fontWeight: "700",
                        lineHeight: "1.15",
                      }}
                    >
                      Wiki / How to play
                    </h3>
                    <p
                      style={{
                        margin: "0",
                        color: "var(--ink-2)",
                        fontSize: "18px",
                        lineHeight: "1.45",
                      }}
                    >
                      The full rules, kept up to date.
                    </p>
                    <span
                      className="arrow"
                      style={{ marginTop: "auto", color: "var(--accent-ink)" }}
                    >
                      Read the rules
                    </span>
                  </a>
                  <a
                    className="card leaf"
                    href="#"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      padding: "24px",
                      border: "3px solid var(--ink)",
                      textDecoration: "none",
                      color: "var(--ink)",
                    }}
                  >
                    <svg
                      width="28"
                      height="28"
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
                        fontSize: "26px",
                        fontWeight: "700",
                        lineHeight: "1.15",
                      }}
                    >
                      Follow us on Steam
                    </h3>
                    <p
                      style={{
                        margin: "0",
                        color: "var(--ink-2)",
                        fontSize: "18px",
                        lineHeight: "1.45",
                      }}
                    >
                      Get notified when we release something new.
                    </p>
                    <span
                      className="arrow"
                      style={{ marginTop: "auto", color: "var(--accent-ink)" }}
                    >
                      Follow the studio
                    </span>
                  </a>
                </div>
              </section>
              <section
                id="press"
                aria-labelledby="press-title"
                style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}
              >
                <div
                  className="plate"
                  style={{
                    flex: "1 1 380px",
                    minWidth: "0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "14px",
                    padding: "clamp(40px,4vw,56px)",
                    color: "#e8e0d0",
                  }}
                >
                  <p className="lbl" style={{ color: "#e07b2e" }}>
                    For press and creators
                  </p>
                  <h2
                    id="press-title"
                    style={{
                      margin: "0",
                      fontFamily: "'Grenze',Georgia,serif",
                      fontSize: "clamp(1.75rem,1rem + 1.6vw,2.5rem)",
                      fontWeight: "800",
                      lineHeight: "1.05",
                      letterSpacing: ".03em",
                      textTransform: "uppercase",
                    }}
                  >
                    Press kit
                  </h2>
                  <p
                    style={{
                      margin: "0",
                      maxWidth: "44ch",
                      color: "#b8ae9c",
                      fontSize: "19px",
                      lineHeight: "1.5",
                    }}
                  >
                    Fact sheet, trailer, screenshots, logos and key art. Free to use for coverage,
                    no login needed.
                  </p>
                  <p style={{ margin: "0", color: "#b8ae9c", fontSize: "16px" }}>
                    Last updated [Date]
                  </p>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "12px", paddingTop: "6px" }}
                  >
                    <a
                      className="cta"
                      href="#"
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
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="square"
                        aria-hidden="true"
                      >
                        <path d="M12 4v11"></path>
                        <path d="M7 10l5 5 5-5"></path>
                        <path d="M5 20h14"></path>
                      </svg>
                      Open the press kit
                    </a>
                    <a
                      className="ghost"
                      href="#"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        minHeight: "48px",
                        padding: "0 22px",
                        border: "2px solid var(--line)",
                        color: "#e8e0d0",
                        textDecoration: "none",
                        fontFamily: "'Grenze',Georgia,serif",
                        fontSize: "15px",
                        fontWeight: "600",
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                      }}
                    >
                      Creator policy
                    </a>
                  </div>
                </div>
                <div
                  style={{
                    flex: "1 1 380px",
                    minWidth: "0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    padding: "clamp(24px,3vw,40px)",
                    border: "3px solid var(--ink)",
                  }}
                >
                  <h2 className="h3">Credits</h2>
                  <dl style={{ margin: "0", display: "flex", flexDirection: "column" }}>
                    <div className="dl-row" style={{ flexWrap: "wrap" }}>
                      <dt
                        style={{
                          fontFamily: "'Alegreya Sans',sans-serif",
                          fontSize: "20px",
                          fontWeight: "700",
                          letterSpacing: "0",
                          textTransform: "none",
                          color: "var(--ink)",
                        }}
                      >
                        [Name]
                      </dt>
                      <dd style={{ color: "var(--ink-2)" }}>[Role, e.g. design and code]</dd>
                    </div>
                    <div className="dl-row" style={{ flexWrap: "wrap" }}>
                      <dt
                        style={{
                          fontFamily: "'Alegreya Sans',sans-serif",
                          fontSize: "20px",
                          fontWeight: "700",
                          letterSpacing: "0",
                          textTransform: "none",
                          color: "var(--ink)",
                        }}
                      >
                        [Name]
                      </dt>
                      <dd style={{ color: "var(--ink-2)" }}>[Role, e.g. art and UI]</dd>
                    </div>
                    <div className="dl-row" style={{ flexWrap: "wrap" }}>
                      <dt
                        style={{
                          fontFamily: "'Alegreya Sans',sans-serif",
                          fontSize: "20px",
                          fontWeight: "700",
                          letterSpacing: "0",
                          textTransform: "none",
                          color: "var(--ink)",
                        }}
                      >
                        [Name]
                      </dt>
                      <dd style={{ color: "var(--ink-2)" }}>[Role, e.g. audio and music]</dd>
                    </div>
                    <div className="dl-row" style={{ flexWrap: "wrap" }}>
                      <dt
                        style={{
                          fontFamily: "'Alegreya Sans',sans-serif",
                          fontSize: "20px",
                          fontWeight: "700",
                          letterSpacing: "0",
                          textTransform: "none",
                          color: "var(--ink)",
                        }}
                      >
                        [Contractor name]
                      </dt>
                      <dd style={{ color: "var(--ink-2)" }}>[Role]</dd>
                    </div>
                  </dl>
                  <p className="lbl" style={{ color: "var(--ink-2)" }}>
                    Made with Unity
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter
        idPrefix="game"
        emailId="nl-email-game"
        heading="Kingdom of Kings updates by email"
      />
      <ScrollEffects />
    </div>
  );
}
