import {
  Connection,
  LAMPORTS_PER_SOL,
  Signer,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import { depositSol, stakePoolInfo, withdrawSol } from "@solana/spl-stake-pool";
import { notifyError, notifySuccess } from "@repo/ui/toasts";
import type { Provider } from "@reown/appkit-adapter-solana/react";
import { useState } from "react";
import { useUserPool } from "./useUserPool";
import { KAPREX_STAKED_POOL, updatePool } from "../utils/stakePool";
import { ERROR_MESSAGES, STAKE_CONSTANTS } from "../constants";

export const useStakeActions = ({
  walletProvider,
  connection,
}: {
  walletProvider: Provider;
  connection: Connection;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { userPool, refetch } = useUserPool();

  const ensureWalletAndConnection = () => {
    if (!walletProvider?.publicKey || !connection || !userPool) {
      notifyError(ERROR_MESSAGES.WALLET_NOT_CONNECTED);
      return false;
    }
    return true;
  };

  const buildTransaction = async (
    instructions: TransactionInstruction[],
    signers: Signer[],
  ) => {
    try {
      const transaction = new Transaction().add(...instructions);
      const { blockhash } = await connection!.getLatestBlockhash();

      transaction.recentBlockhash = blockhash;
      transaction.feePayer = walletProvider!.publicKey;

      if (signers.length > 0) transaction.partialSign(...signers);

      return transaction;
    } catch (error) {
      notifyError(ERROR_MESSAGES.NETWORK_ERROR);
      throw error;
    }
  };

  const handleStakeSol = async (amount: number) => {
    if (!ensureWalletAndConnection()) return;

    setIsLoading(true);
    try {
      const solAmount = amount;

      if (isNaN(solAmount) || solAmount < STAKE_CONSTANTS.MIN_STAKE_AMOUNT) {
        throw new Error(ERROR_MESSAGES.INVALID_AMOUNT);
      }

      if (solAmount > userPool!.nativeSOLBalance) {
        notifyError(ERROR_MESSAGES.INSUFFICIENT_BALANCE);
        return;
      }

      const info = await stakePoolInfo(connection!, KAPREX_STAKED_POOL);
      if (info.details.updateRequired) await updatePool();

      const txData = await depositSol(
        connection!,
        KAPREX_STAKED_POOL,
        walletProvider.publicKey!,
        solAmount * LAMPORTS_PER_SOL,
        undefined,
        walletProvider.publicKey!,
      );

      const transaction = await buildTransaction(
        txData.instructions,
        txData.signers,
      );

      const txid = await walletProvider.sendTransaction(
        transaction,
        connection!,
      );

      notifySuccess(`Stake transaction successful: ${txid}`);
      await refetch();
    } catch (error: unknown) {
      if (error instanceof Error) {
        notifyError(error.message || ERROR_MESSAGES.TRANSACTION_FAILED);
      } else {
        notifyError(ERROR_MESSAGES.TRANSACTION_FAILED);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnstake = async (amount: number) => {
    if (!ensureWalletAndConnection()) return;

    setIsLoading(true);
    try {
      if (isNaN(amount) || amount < STAKE_CONSTANTS.MIN_STAKE_AMOUNT) {
        notifyError(ERROR_MESSAGES.INVALID_AMOUNT);
        return;
      }

      if (amount > userPool!.userKSOLBalance) {
        notifyError(ERROR_MESSAGES.INSUFFICIENT_BALANCE);
        return;
      }

      const info = await stakePoolInfo(connection!, KAPREX_STAKED_POOL);
      if (info.details.updateRequired) await updatePool();

      const txData = await withdrawSol(
        connection!,
        KAPREX_STAKED_POOL,
        walletProvider.publicKey!,
        walletProvider.publicKey!,
        amount,
      );

      const transaction = await buildTransaction(
        txData.instructions,
        txData.signers,
      );

      const txid = await walletProvider.sendTransaction(
        transaction,
        connection!,
      );

      notifySuccess(`Unstake transaction successful: ${txid}`);
      await refetch();
    } catch (error: unknown) {
      if (error instanceof Error) {
        notifyError(error.message || ERROR_MESSAGES.TRANSACTION_FAILED);
      } else {
        notifyError(ERROR_MESSAGES.TRANSACTION_FAILED);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleStakeSol,
    handleUnstake,
    buildTransaction,
    ensureWalletAndConnection,
    isLoading,
  };
};
