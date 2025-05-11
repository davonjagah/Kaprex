import { TOKEN_PROGRAM_ID, AccountLayout } from "@solana/spl-token";
import { stakePoolInfo } from "@solana/spl-stake-pool";

import { Connection, PublicKey } from "@solana/web3.js";
import { NextResponse } from "next/server";

const connection = new Connection("https://api.mainnet-beta.solana.com");

const KAPREX_STAKED_POOL = new PublicKey(
  "DkR3z2N3kumd2x2LQ5nH3F4csSV9ZiUYoJfHwih6TUFV",
);

const KSOL_MINT_ADDRESS = new PublicKey(
  "2H3ZjrsKZUwsQHsze1JP18DLqrUzmHvWpTVHFZgMTogD",
);

async function getStakePoolDetails() {
  try {
    const info = await stakePoolInfo(connection, KAPREX_STAKED_POOL);
    if (!info || !info.details) {
      throw new Error("Invalid or missing stake pool details");
    }

    let totalSolanaStaked = info.details.reserveStakeLamports || 0;
    info.details.stakeAccounts.forEach((account) => {
      totalSolanaStaked += parseInt(account.validatorLamports);
    });

    const tokenSupply = parseInt(info.poolTokenSupply);
    const conversionRate =
      tokenSupply > 0 ? totalSolanaStaked / tokenSupply : 0;

    return {
      conversionRate,
    };
  } catch (error) {
    console.error("❌ Error fetching stake pool details:", error);
    return null;
  }
}

async function getUserKSOLBalance(userWallet: PublicKey): Promise<{
  userKSOLBalance: number;
  userSOLBalance: number;
  conversionRate: number;
}> {
  try {
    const [poolDetails, tokenAccounts] = await Promise.all([
      getStakePoolDetails(),
      connection.getTokenAccountsByOwner(userWallet, {
        programId: TOKEN_PROGRAM_ID,
      }),
    ]);

    if (!poolDetails) {
      throw new Error("Failed to fetch stake pool details");
    }

    let userKSOL = 0;
    for (const accountInfo of tokenAccounts.value) {
      const accountData = AccountLayout.decode(accountInfo.account.data);
      if (new PublicKey(accountData.mint).equals(KSOL_MINT_ADDRESS)) {
        userKSOL = Number(accountData.amount) / 1e9;
        break;
      }
    }

    return {
      userKSOLBalance: userKSOL,
      userSOLBalance: userKSOL * poolDetails.conversionRate,
      conversionRate: poolDetails.conversionRate,
    };
  } catch (error) {
    console.error("❌ Error fetching user's kSOL balance:", error);
    return {
      userKSOLBalance: 0,
      userSOLBalance: 0,
      conversionRate: 0,
    };
  }
}

// function updatePool() {
//   return new Promise<void>(async (resolve, reject) => {
//     try {
//       let result = await (
//         await fetch(
//           "https://stake.solblaze.org/api/v1/update_pool?network=mainnet-beta"
//         )
//       ).json();
//       if (result.success) {
//         resolve();
//       } else {
//         reject();
//       }
//     } catch (err) {
//       reject();
//     }
//   });
// }

export async function POST(req: Request) {
  const body = await req.json();

  const res = await getUserKSOLBalance(new PublicKey(body.userWallet));

  const data = await res;
  return NextResponse.json(data);
}

// // Example usage
// const userWallet = new PublicKey(
//   "3rKzL69RnhKY9t1Sb8wXSWvjm3K1PafwUtWvSrn2yq7A"
// ); // Replace with actual user wallet address
// getUserKSOLBalance(userWallet).then(console.log);
