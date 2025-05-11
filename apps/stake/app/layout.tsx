import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import HeaderWrapper from "./components/HeaderWrapper";
import localFont from "next/font/local";
import { AppKitProvider } from "./providers/AppkitProvider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const nohemi = localFont({
  src: [
    {
      path: "../public/fonts/Nohemi/Nohemi-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Nohemi/Nohemi-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/Nohemi/Nohemi-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/Nohemi/Nohemi-SemiBold.ttf",
      weight: "600",
    },
  ],
  preload: true,
  variable: "--font-nohemi",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${nohemi.variable} antialiased`}
    >
      <body>
        <AppKitProvider>
          <header>
            <HeaderWrapper />
          </header>
          {children}
        </AppKitProvider>
      </body>
    </html>
  );
}
