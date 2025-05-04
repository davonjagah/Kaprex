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
  title: "Kaprex Stake",
  description: "Stake your SOL to earn rewards",
  icons: {
    icon: "/favicon.ico",
  },
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
