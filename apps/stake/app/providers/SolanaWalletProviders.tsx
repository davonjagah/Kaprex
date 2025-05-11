"use client";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
  WalletConnectWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

import "@solana/wallet-adapter-react-ui/styles.css";

const network = clusterApiUrl("mainnet-beta");

const wallets = [
  new PhantomWalletAdapter({
    network,
  }),
  new SolflareWalletAdapter(),
  new TorusWalletAdapter(),
  new LedgerWalletAdapter(),
  new WalletConnectWalletAdapter({
    network: WalletAdapterNetwork.Mainnet,
    options: {
      projectId: "",
      metadata: {
        name: "Kaprex Stake",
        description: "Stake your SOL tokens securely with Kaprex Stake",
        url: "https://kaprex.io",
        icons: ["/favicon.ico"],
      },
    },
  }),
];

export function SolanaWalletProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConnectionProvider endpoint={network}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
