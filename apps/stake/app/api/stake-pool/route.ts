import { NextResponse } from "next/server";
import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { stakePoolInfo } from "@solana/spl-stake-pool";

const connection = new Connection("https://api.mainnet-beta.solana.com");

const KAPREX_STAKED_POOL = new PublicKey(
  "DkR3z2N3kumd2x2LQ5nH3F4csSV9ZiUYoJfHwih6TUFV",
);

export async function GET() {
  try {
    const info = await stakePoolInfo(connection, KAPREX_STAKED_POOL);
    if (!info?.details) {
      return NextResponse.json(
        { error: "Invalid or missing stake pool details" },
        { status: 500 },
      );
    }

    let totalSolanaStaked = info.details.reserveStakeLamports || 0;
    info.details.stakeAccounts.forEach((account) => {
      totalSolanaStaked += parseInt(account.validatorLamports);
    });

    const tokenSupply = parseInt(info.poolTokenSupply);
    const conversionRate =
      tokenSupply > 0 ? totalSolanaStaked / tokenSupply : 0;

    const data = {
      conversionRate,
      totalStakedSOL: totalSolanaStaked / LAMPORTS_PER_SOL,
      totalKSOLSupply: tokenSupply / LAMPORTS_PER_SOL,
    };

    console.log(data, "data");

    return NextResponse.json(data);
  } catch (error) {
    console.error("❌ Error in GET /api/stake-pool:", error);
    return NextResponse.json(
      { error: "Failed to fetch stake pool details" },
      { status: 500 },
    );
  }
}
