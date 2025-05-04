import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import HeaderWrapper from "./components/HeaderWrapper";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Kaprex Stake",
    template: "%s | Kaprex Stake",
  },
  description:
    "Stake your SOL tokens securely with Kaprex Stake and earn competitive rewards on the Solana network.",

  // Keywords for search engines
  keywords: [
    "Solana staking",
    "SOL staking",
    "stake SOL",
    "crypto yield",
    "decentralized finance",
    "DeFi",
    "Kaprex Stake",
  ],

  // Canonical URL
  alternates: {
    canonical: "https://kaprex-stake.vercel.app",
  },

  // Robots / Crawling
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },

  // Theme color for mobile address bar
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <body>
        <header>
          <HeaderWrapper />
        </header>
        {children}
      </body>
    </html>
  );
}
