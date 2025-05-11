// import { stakePoolInfo, depositSol, withdrawSol } from "@solana/spl-stake-pool";

// import {
//   Connection,
//   PublicKey,
//   // LAMPORTS_PER_SOL,
//   // Transaction,
//   // Keypair,
//   ConfirmOptions,
//   // sendAndConfirmTransaction,
// } from "@solana/web3.js";

// Initialize Solana connection
// const connection = new Connection("https://api.mainnet-beta.solana.com");

// // Kaprex Stake Pool Address
// const KAPREX_STAKED_POOL = new PublicKey(
//   "DkR3z2N3kumd2x2LQ5nH3F4csSV9ZiUYoJfHwih6TUFV"
// );

// // Define confirmation options
// const confirmOptions: ConfirmOptions = {
//   commitment: "confirmed",
//   preflightCommitment: "processed",
//   skipPreflight: false,
// };

// // Standard response structure
// interface TxResponse {
//   success: boolean;
//   txid?: string;
//   message?: string;
//   details?: any;
// }

// Function to update the stake pool
export async function updatePool(): Promise<boolean> {
  try {
    const response = await fetch(
      "https://stake.solblaze.org/api/v1/update_pool?network=mainnet-beta",
    );
    const result = await response.json();
    return result.success ?? false;
  } catch {
    return false;
  }
}

// // Function to stake SOL for kSOL
// export async function stakeSolForKSOL(
//   userKeypair: Keypair,
//   lamports: number
// ): Promise<TxResponse> {
//   try {
//     const info = await stakePoolInfo(connection, KAPREX_STAKED_POOL);
//     if (info.details.updateRequired) await updatePool();

//     const depositTx = await depositSol(
//       connection,
//       KAPREX_STAKED_POOL,
//       userKeypair.publicKey,
//       lamports,
//       undefined,
//       userKeypair.publicKey
//     );

//     const transaction = new Transaction().add(...depositTx.instructions);

//     // Fetch blockhash and set transaction params
//     const { blockhash, lastValidBlockHeight } =
//       await connection.getLatestBlockhash();
//     transaction.recentBlockhash = blockhash;
//     transaction.feePayer = userKeypair.publicKey;
//     transaction.sign(userKeypair);

//     // Partial signing if required
//     if (depositTx.signers.length > 0)
//       transaction.partialSign(...depositTx.signers);

//     const txid = await sendAndConfirmTransaction(
//       connection,
//       transaction,
//       [userKeypair, ...depositTx.signers],
//       confirmOptions
//     );

//     return {
//       success: true,
//       txid,
//       message: "Stake transaction successful",
//       details: {
//         amountStaked: lamports / LAMPORTS_PER_SOL,
//         blockhash,
//         lastValidBlockHeight,
//       },
//     };
//   } catch (error: any) {
//     return {
//       success: false,
//       message: "Error staking SOL for kSOL",
//       details: error.message,
//     };
//   }
// }

// // Function to unstake kSOL for SOL
// export async function unstakeKSOLForSOL(
//   userKeypair: Keypair,
//   lamports: number
// ): Promise<TxResponse> {
//   console.log(lamports);
//   try {
//     const info = await stakePoolInfo(connection, KAPREX_STAKED_POOL);
//     if (info.details.updateRequired) await updatePool();

//     const withdrawTx = await withdrawSol(
//       connection,
//       KAPREX_STAKED_POOL,
//       userKeypair.publicKey,
//       userKeypair.publicKey,
//       lamports
//     );

//     const transaction = new Transaction().add(...withdrawTx.instructions);

//     // Fetch blockhash and set transaction params
//     const { blockhash, lastValidBlockHeight } =
//       await connection.getLatestBlockhash();
//     transaction.recentBlockhash = blockhash;
//     transaction.feePayer = userKeypair.publicKey;
//     transaction.sign(userKeypair);

//     // Partial signing if required
//     if (withdrawTx.signers.length > 0)
//       transaction.partialSign(...withdrawTx.signers);

//     const txid = await sendAndConfirmTransaction(
//       connection,
//       transaction,
//       [userKeypair, ...withdrawTx.signers],
//       confirmOptions
//     );

//     return {
//       success: true,
//       txid,
//       message: "Unstake transaction successful",
//       details: {
//         amountUnstaked: lamports / LAMPORTS_PER_SOL,
//         blockhash,
//         lastValidBlockHeight,
//       },
//     };
//   } catch (error: any) {
//     return {
//       success: false,
//       message: "Error unstaking kSOL for SOL",
//       details: error.message,
//     };
//   }
// }

// Example usage
// const userKeypair = userWallet.solana.solKeypair;
// const lamportsToStake = 0.01 * LAMPORTS_PER_SOL; // 0.01 SOL
// const lamportsToUnStake = 1;

// async function executeTransactions() {
//   // const stakeResult = await stakeSolForKSOL(userKeypair, lamportsToStake);
//   // console.log("✅ Staking Result:", stakeResult);

//   const unstakeResult = await unstakeKSOLForSOL(userKeypair, lamportsToUnStake);
//   console.log("✅ Unstaking Result:", unstakeResult);
// }

// executeTransactions();
