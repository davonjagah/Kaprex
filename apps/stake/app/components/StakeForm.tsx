"use client";

import { Button, Typography } from "@repo/ui/atoms";
import { KsolRoundIcon, SolanaIcon } from "@repo/ui/icons";
import Link from "next/link";
import React from "react";

export type TStakeFormProps = {
  linkHref: string;
  linkText: string;
  title: string;
  token: "sol" | "ksol";
};

const tokenMap = {
  sol: {
    label: "SOL",
    icon: SolanaIcon,
    receiveLabel: "kSOL",
    receiveIcon: KsolRoundIcon,
  },
  ksol: {
    label: "kSOL",
    icon: KsolRoundIcon,
    receiveLabel: "SOL",
    receiveIcon: SolanaIcon,
  },
};

const StakeForm = (props: TStakeFormProps) => {
  const {
    label: tokenLabel,
    icon: TokenIcon,
    receiveLabel,
    receiveIcon: ReceiveIcon,
  } = tokenMap[props.token];

  return (
    <section className="flex-1 md:max-w-[28.313rem]">
      <Typography variant="h1" className="mb-2 font-normal">
        {props.title}
      </Typography>

      {/* Input Card */}
      <div className="bg-gray rounded-2xl shadow-sm py-4 px-5 mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <TokenIcon className="h-6 w-6" />
            <Typography variant="body" className="font-nohemi text-lg">
              {tokenLabel}
            </Typography>
          </div>
          <Typography variant="body" className="text-gray-500">
            Bal: 0.102 {tokenLabel}
          </Typography>
        </div>
        <div className="flex items-center justify-between text-xs text-gray-400 mt-4">
          <input
            type="number"
            placeholder="min. 10"
            className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield] w-full border-none focus:outline-none focus:ring-none text-base text-gray-700 bg-transparent placeholder-gray-medium font-sans"
          />
          <Button variant="text" className="text-gray-500" onClick={() => {}}>
            MAX
          </Button>
        </div>
      </div>

      {/* Receive Card */}
      <div className="bg-gray rounded-2xl shadow-sm px-5 py-22 mb-4">
        <Typography variant="h6" className="mb-4 font-normal text-sm">
          You will receive
        </Typography>
        <div className="flex items-center justify-between gap-2">
          <Typography variant="body" className="text-gray-500">
            0
          </Typography>
          <div className="flex items-center gap-0.5">
            <ReceiveIcon className="h-4 w-4" />
            <Typography variant="body" className="text-gray-500">
              {receiveLabel}
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-xs font-sans">
        <Link href={props.linkHref} className="text-gray-500 underline">
          {props.linkText}
        </Link>
      </div>

      {/* Stake Button */}
      <Button
        variant="primary"
        size="sm"
        className="font-medium w-full sm:w-auto mt-3"
        onClick={() => {}}
      >
        {props.title}
      </Button>

      {/* Info Text */}
      <Typography variant="small" className="mt-4 text-gray-light">
        kSOL may increase in value compared to SOL, so the SOL to kSOL
        conversion rate may decrease over time. If you choose to stake MAX. We
        will leave 0.01 SOL in your wallet for transaction fees.
      </Typography>
    </section>
  );
};

export default StakeForm;
