"use client";

import { Inter, League_Gothic, Red_Hat_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const leagueGothic = League_Gothic({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-league-gothic",
});
const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <style jsx global>{`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${leagueGothic.style.fontFamily};
          text-transform: uppercase;
          letter-spacing: 0.25rem;
        }
        p {
          font-family: ${redHatDisplay.style.fontFamily};
        }
        .btn {
          font-family: ${redHatDisplay.style.fontFamily};
          font-weight: 300;
          letter-spacing: 0.25rem;
          // font-size: 1.2rem;
          // text-transform: capitalize;
        }
      `}</style>
      <html
        lang="en"
        //className={`${leagueGothic.className} ${inter.className}`}
      >
        <body>{children}</body>
      </html>
    </>
  );
}
