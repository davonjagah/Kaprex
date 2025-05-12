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
      notifyError("Wallet or connection not available.");
      return false;
    }
    return true;
  };

  const buildTransaction = async (
    instructions: TransactionInstruction[],
    signers: Signer[],
  ) => {
    const transaction = new Transaction().add(...instructions);
    const { blockhash } = await connection!.getLatestBlockhash();

    transaction.recentBlockhash = blockhash;
    transaction.feePayer = walletProvider!.publicKey;

    if (signers.length > 0) transaction.partialSign(...signers);

    return transaction;
  };

  const handleStakeSol = async (amount: number) => {
    if (!ensureWalletAndConnection()) return;

    setIsLoading(true);
    try {
      const solAmount = amount;

      if (isNaN(solAmount) || solAmount < 0.1) {
        throw new Error("Invalid stake amount.");
      }

      if (solAmount > userPool!.nativeSOLBalance) {
        notifyError("Insufficient SOL balance.");
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

      // Sign + send via walletProvider
      const txid = await walletProvider.sendTransaction(
        transaction,
        connection!,
      );

      notifySuccess(`Stake transaction successful: ${txid}`);
      await refetch();
    } catch (error: unknown) {
      if (error instanceof Error) {
        notifyError(error.message || "An unknown error occurred.");
      } else {
        notifyError("An unknown error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnstake = async (amount: number) => {
    if (!ensureWalletAndConnection()) return;

    setIsLoading(true);
    try {
      if (isNaN(amount) || amount < 0.1) {
        notifyError("Invalid unstake amount.");
        return;
      }

      if (amount > userPool!.userKSOLBalance) {
        notifyError("Insufficient kSOL balance.");
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
        notifyError(error.message || "An unknown error occurred.");
      } else {
        notifyError("An unknown error occurred.");
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
