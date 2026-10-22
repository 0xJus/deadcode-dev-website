"use client";

import { useState, type FormEvent } from "react";
import { steamUrl } from "@/lib/steam";

/**
 * Email signup. For now it only shows the confirmation state; wire `onSubmit`
 * to an email provider (see the TODO) before launch.
 */
export default function NewsletterForm({ emailId }: { emailId: string }) {
  const [subscribed, setSubscribed] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: POST the address to the newsletter provider.
    setSubscribed(true);
  };
  const reset = () => setSubscribed(false);

  return (
    <>
      {!subscribed && (
        <>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            onSubmit={onSubmit}
          >
            <label htmlFor={emailId} className="lbl" style={{ color: "#e8e0d0" }}>
              Email address
            </label>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch", gap: "8px" }}>
              <input
                className="field"
                id={emailId}
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                style={{
                  flex: "1 1 220px",
                  minWidth: "0",
                  minHeight: "52px",
                  padding: "0 16px",
                  boxSizing: "border-box",
                  border: "2px solid #6b6258",
                  background: "#121110",
                  color: "#e8e0d0",
                  fontFamily: "inherit",
                  fontSize: "18px",
                }}
              />
              <button
                className="cta"
                type="submit"
                style={{
                  flex: "0 0 auto",
                  minHeight: "52px",
                  padding: "0 28px",
                  border: "2px solid #e07b2e",
                  background: "#e07b2e",
                  color: "#0a0908",
                  fontFamily: "'Grenze',Georgia,serif",
                  fontSize: "17px",
                  fontWeight: "700",
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                Join
              </button>
            </div>
            <p style={{ margin: "0", color: "#b8ae9c", fontSize: "16px", lineHeight: "1.4" }}>
              We’ll send one email to confirm it’s you. Unsubscribe anytime.{" "}
              <a href="#">Privacy policy</a>
            </p>
          </form>
        </>
      )}
      {subscribed && (
        <>
          <div
            role="status"
            className="plate"
            style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "32px 40px" }}
          >
            <p
              style={{
                margin: "0",
                fontFamily: "'Grenze',Georgia,serif",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "1.25",
              }}
            >
              Almost there. Check your inbox to confirm.
            </p>
            <p style={{ margin: "0", color: "#b8ae9c", fontSize: "18px", lineHeight: "1.45" }}>
              While you wait:
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a
                className="cta"
                href={steamUrl("newsletter_confirm")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
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
              <a
                className="ghost"
                href="#community"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: "48px",
                  padding: "0 22px",
                  border: "2px solid #6b6258",
                  color: "#e8e0d0",
                  textDecoration: "none",
                  fontFamily: "'Grenze',Georgia,serif",
                  fontSize: "15px",
                  fontWeight: "600",
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                }}
              >
                Join the Discord
              </a>
            </div>
            <button
              type="button"
              style={{
                alignSelf: "flex-start",
                minHeight: "44px",
                padding: "0",
                border: "0",
                background: "transparent",
                color: "#b8ae9c",
                fontFamily: "inherit",
                fontSize: "16px",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                cursor: "pointer",
              }}
              onClick={reset}
            >
              Use a different email
            </button>
          </div>
        </>
      )}
    </>
  );
}
