"use client";

import { Button, Typography } from "@repo/ui/atoms";
import { KsolRoundIcon, SolanaIcon } from "@repo/ui/icons";
import Link from "next/link";
import React, { useMemo, useState, useCallback } from "react";
import { useAppKitProvider } from "@reown/appkit/react";
import { useAppKitConnection } from "@reown/appkit-adapter-solana/react";
import type { Provider } from "@reown/appkit-adapter-solana/react";
import { useStakeActions } from "../hooks/useStakeActions";
import { useUserPool } from "../hooks/useUserPool";
import { STAKE_CONSTANTS, ERROR_MESSAGES } from "../constants";
import { notifyError } from "@repo/ui/toasts";

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

  const { connection } = useAppKitConnection();
  const { walletProvider } = useAppKitProvider<Provider>("solana");
  const { userPool } = useUserPool();

  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState<string | null>(null);

  const { handleStakeSol, handleUnstake, isLoading } = useStakeActions({
    walletProvider,
    connection: connection!,
  });

  const validateInput = useCallback(
    (value: string) => {
      const parsed = parseFloat(value);
      if (isNaN(parsed)) {
        return ERROR_MESSAGES.INVALID_AMOUNT;
      }
      if (parsed < STAKE_CONSTANTS.MIN_STAKE_AMOUNT) {
        return `Minimum amount is ${STAKE_CONSTANTS.MIN_STAKE_AMOUNT} ${tokenLabel}`;
      }
      if (tokenLabel === "SOL" && parsed > userPool?.nativeSOLBalance) {
        return ERROR_MESSAGES.INSUFFICIENT_BALANCE;
      }
      if (tokenLabel === "kSOL" && parsed > userPool?.userKSOLBalance) {
        return ERROR_MESSAGES.INSUFFICIENT_BALANCE;
      }
      return null;
    },
    [tokenLabel, userPool],
  );

  const handleMaxClick = useCallback(() => {
    const max =
      tokenLabel === "SOL"
        ? Math.max(
            0,
            userPool.nativeSOLBalance - STAKE_CONSTANTS.MIN_SOL_RESERVE,
          )
        : userPool.userKSOLBalance;

    setInputValue(max.toFixed(STAKE_CONSTANTS.DECIMAL_PLACES));
    setInputError(null);
  }, [tokenLabel, userPool]);

  const receiveAmount = useMemo(() => {
    const input = parseFloat(inputValue);
    if (isNaN(input) || input <= STAKE_CONSTANTS.MIN_STAKE_AMOUNT) return "0";

    return props.token === "sol"
      ? (input / userPool?.conversionRate).toFixed(
          STAKE_CONSTANTS.DECIMAL_PLACES,
        )
      : (input * userPool?.conversionRate).toFixed(
          STAKE_CONSTANTS.DECIMAL_PLACES,
        );
  }, [inputValue, userPool?.conversionRate, props.token]);

  const handleChange = useCallback(
    (val: string) => {
      setInputValue(val);
      const error = validateInput(val);
      setInputError(error);
    },
    [validateInput],
  );

  const handleSubmit = useCallback(async () => {
    const error = validateInput(inputValue);
    if (error) {
      notifyError(error);
      return;
    }

    const amount = parseFloat(inputValue);
    if (tokenLabel === "SOL") {
      await handleStakeSol(amount);
    } else {
      await handleUnstake(amount);
    }
  }, [inputValue, tokenLabel, handleStakeSol, handleUnstake, validateInput]);

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
          {userPool && (
            <Typography variant="body" className="text-gray-500">
              Bal:{" "}
              {tokenLabel === "kSOL"
                ? userPool.userKSOLBalance.toFixed(
                    STAKE_CONSTANTS.DECIMAL_PLACES,
                  )
                : userPool.nativeSOLBalance.toFixed(
                    STAKE_CONSTANTS.DECIMAL_PLACES,
                  )}{" "}
              {tokenLabel}
            </Typography>
          )}
        </div>
        <div className="flex items-center justify-between text-xs text-gray-400 mt-4">
          <div className="w-full">
            <input
              type="number"
              placeholder={`min. ${STAKE_CONSTANTS.MIN_STAKE_AMOUNT}`}
              value={inputValue}
              onChange={(e) => handleChange(e.target.value)}
              className={`appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield] w-full border-none focus:outline-none focus:ring-none text-base text-gray-700 bg-transparent placeholder-gray-medium font-sans ${
                inputError ? "border-red-500" : ""
              }`}
            />
            {inputError && (
              <Typography variant="small" className="text-red-500 mt-1">
                {inputError}
              </Typography>
            )}
          </div>
          <Button
            variant="text"
            className="text-gray-500"
            onClick={handleMaxClick}
          >
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
            {receiveAmount}
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
        disabled={!!inputError || isLoading}
        onClick={handleSubmit}
        isLoading={isLoading}
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
