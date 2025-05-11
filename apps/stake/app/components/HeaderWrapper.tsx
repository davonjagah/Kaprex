"use client";

import {
  useAppKit,
  useAppKitAccount,
  useDisconnect,
} from "@reown/appkit/react";
// import { WalletButton } from "@repo/ui/atoms";
import { Header } from "@repo/ui/molecules";
// import { useWallet } from "@solana/wallet-adapter-react";
import Link from "next/link";
import React, { useMemo } from "react";

const HeaderWrapper = () => {
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();

  const { disconnect } = useDisconnect();

  const shortAddress = useMemo(() => {
    if (!address) return "";
    const str = address.toString();
    return `${str.slice(0, 4)}...${str.slice(-4)}`;
  }, [address]);

  return (
    <Header
      LinkComponent={({ children }) => <Link href="/">{children}</Link>}
      onButtonClick={() => (isConnected ? disconnect() : open())}
      buttonText={isConnected ? `Disconnect ${shortAddress}` : "Connect Wallet"}
    />
  );
};

export default HeaderWrapper;
