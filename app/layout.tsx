import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "DeadCode Studios", template: "%s" },
  description:
    "DeadCode Studios is a small team of friends making games in Unity. Kingdom of Kings: only one wears the crown.",
};

export const viewport: Viewport = {
  themeColor: "#0a0908",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@400;500;700&family=Grenze:ital,wght@0,600;0,700;0,800;1,400&family=Grenze+Gotisch:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
