"use client";

import { createAppKit } from "@reown/appkit/react";

import { AppKitNetwork } from "@reown/appkit/networks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SolanaAdapter } from "@reown/appkit-adapter-solana/react";
import { solana, solanaTestnet, solanaDevnet } from "@reown/appkit/networks";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";

const projectId = process.env.NEXT_PUBLIC_APPKIT_PROJECT_ID ?? "";

const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()] as never,
});

const queryClient = new QueryClient();

const metadata = {
  name: "Kaprex",
  description: "Kaprex",
  url: "https://kaprex.io/",
  icons: ["/favicon.ico"],
};

const networks: [AppKitNetwork, ...AppKitNetwork[]] = [
  solana,
  solanaTestnet,
  solanaDevnet,
];

createAppKit({
  adapters: [solanaWeb3JsAdapter],
  networks,
  projectId,
  metadata,
  features: {
    onramp: true,
    swaps: true,
    email: true, // default to true
    socials: [
      "google",
      "x",
      "discord",
      "farcaster",
      "github",
      "apple",
      "facebook",
    ],
    emailShowWallets: true, // default to true
  },
  enableWalletConnect: true,
});

export function AppKitProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
