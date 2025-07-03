"use client";

import { ChainType, LiFiWidget, WidgetConfig } from "@lifi/widget";

// const config = {
//   appearance: "light",
//   theme: {
//     container: {
//       boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.08)",
//       borderRadius: "16px",
//     },
//   },
// } as Partial<WidgetConfig>;

const widgetConfig: WidgetConfig = {
  integrator: "wagmi-example",
  toAddress: {
    name: "Vault Deposit",
    address: "0x0000000000000000000000000000000000000000",
    chainType: ChainType.SVM,
    logoURI: "https://example.com/image.svg",
  },
  toToken: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
  toChain: 1151111081099710,
};

export const Widget = () => {
  return <LiFiWidget integrator="wagmi-example" config={widgetConfig} />;
};
