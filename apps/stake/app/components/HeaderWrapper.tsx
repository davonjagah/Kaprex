"use client";

import {
  useAppKit,
  useAppKitAccount,
  useDisconnect,
} from "@reown/appkit/react";
import { Header } from "@repo/ui/molecules";
import React, { useMemo } from "react";

const HeaderWrapper = () => {
  const { open } = useAppKit();
  const { address, isConnected, status } = useAppKitAccount();

  const { disconnect } = useDisconnect();

  const shortAddress = useMemo(() => {
    if (!address) return "";
    const str = address.toString();
    return `${str.slice(0, 4)}...${str.slice(-4)}`;
  }, [address]);

  const buttonText = useMemo(() => {
    if (status === "connecting" || !status) return "Connecting...";
    if (isConnected) return `Disconnect ${shortAddress}`;
    return "Connect Wallet";
  }, [status, isConnected, shortAddress]);

  return (
    <Header
      onButtonClick={() => (isConnected ? disconnect() : open())}
      buttonText={buttonText}
    />
  );
};

export default HeaderWrapper;
