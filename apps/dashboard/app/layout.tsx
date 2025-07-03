import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import { ToastProvider } from "@repo/ui/toasts";
import "../styles/globals.css";

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
    default: "Kaprex",
    template: "%s | Kaprex",
  },
  description: "Receive global payments, Send faster, Earn better with Kaprex",

  // Keywords for search engines
  keywords: [
    "Solana staking",
    "SOL staking",
    "stake SOL",
    "crypto yield",
    "decentralized finance",
    "DeFi",
    "Kaprex Stake",
    "Receive global payments",
    "global payments",
  ],

  // Canonical URL
  alternates: {
    canonical: "https://kaprex.io/",
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
    <html lang="en">
      <body
        className={`${dmSans.variable} ${nohemi.variable} antialiased bg-[#F5F7FA]`}
      >
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
