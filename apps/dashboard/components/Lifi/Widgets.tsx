"use client";

import { ChainType, LiFiWidget, WidgetConfig } from "@lifi/widget";
import { useAuth } from "../../contexts/AuthContext";

// const config = {
//   appearance: "light",
//   theme: {
//     container: {
//       boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.08)",
//       borderRadius: "16px",
//     },
//   },
// } as Partial<WidgetConfig>;

export const Widget = () => {
  const { accounts } = useAuth();

  const widgetConfig: WidgetConfig = {
    integrator: "wagmi-example",
    toAddress: {
      name: "Vault Deposit",
      address: accounts?.walletAddress ?? "",
      chainType: ChainType.SVM,
      logoURI: "/images/kaprex1.png",
    },
    toToken: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    toChain: 1151111081099710,
  };
  return <LiFiWidget integrator="wagmi-example" config={widgetConfig} />;
};
