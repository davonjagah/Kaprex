"use client";

import { useState, useEffect, useCallback } from "react";
import { MetaMaskSDK, MetaMaskSDKOptions } from "@metamask/sdk";

const sdkOptions: MetaMaskSDKOptions = {
  dappMetadata: {
    name: "Kaprex Dashboard",
    url: typeof window !== "undefined" ? window.location.origin : "",
  },
  // If you have an INFURA key:
  infuraAPIKey: process.env.NEXT_PUBLIC_INFURA_API_KEY,
};

const sdk = new MetaMaskSDK(sdkOptions);

export function useMetamask() {
  const [account, setAccount] = useState<string | null>(null);
  const [provider, setProvider] = useState<any>(null);

  // 1️⃣ Initialize SDK & provider on mount
  useEffect(() => {
    // MetaMaskSDK only works in the browser
    if (typeof window === "undefined") return;

    const ethProvider = sdk.getProvider();
    setProvider(ethProvider);

    // Try to get already-connected accounts
    ethProvider
      ?.request({ method: "eth_accounts" })
      .then((accounts: any) => {
        setAccount(accounts[0] || null);
      })
      .catch(console.error);

    // Listen for account changes
    const handleAccountsChanged = (accounts: string[]) => {
      setAccount(accounts[0] || null);
    };
    ethProvider?.on("accountsChanged", handleAccountsChanged as any);

    return () => {
      ethProvider?.removeListener("accountsChanged", handleAccountsChanged);
    };
  }, []);

  // 2️⃣ connect() will prompt MetaMask (via SDK)
  const connect = useCallback(async () => {
    if (!provider) {
      throw new Error("MetaMask provider not initialized");
    }
    try {
      // sdk.connect() will open the MetaMask popup
      const accounts: string[] = await (provider as any).request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0] || null);
      return accounts[0] || null;
    } catch (err) {
      console.error("MetaMask connect failed:", err);
      throw err;
    }
  }, [provider]);

  return { account, connect };
}
