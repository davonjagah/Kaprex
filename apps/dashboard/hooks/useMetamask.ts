// hooks/useWallet.ts
"use client";

import { useState, useEffect, useCallback } from "react";

declare global {
  interface Window {
    ethereum?: {
      request: (...args: any[]) => Promise<any>;
      on: (event: string, handler: (...args: any[]) => void) => void;
      removeListener: (
        event: string,
        handler: (...args: any[]) => void,
      ) => void;
    };
  }
}

export function useMetamask() {
  const [account, setAccount] = useState<string | null>(null);

  // 1️⃣ On mount, try to read any already‐connected account
  useEffect(() => {
    if (!window.ethereum) return;

    // get currently connected accounts (if any)
    window.ethereum
      .request({ method: "eth_accounts" })
      .then((accounts: string[]) => setAccount(accounts[0] || null))
      .catch(console.error);

    // listen if user switches accounts in MetaMask
    const handleAccountsChanged = (accounts: string[]) => {
      setAccount(accounts[0] || null);
    };
    window.ethereum.on("accountsChanged", handleAccountsChanged);

    return () => {
      window?.ethereum?.removeListener(
        "accountsChanged",
        handleAccountsChanged,
      );
    };
  }, []);

  // 2️⃣ A function to actively connect
  const connect = useCallback(async () => {
    if (!window.ethereum) {
      throw new Error("MetaMask not installed");
    }
    const accounts: string[] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0] || null);
    return accounts[0] || null;
  }, []);

  return { account, connect };
}
