import React from "react";
import Features from "../../components/Dashboard/Features/Features";
import BalanceAndAccounts from "../../components/shared/BalanceAndAccounts";
import { cookies } from "next/headers";
import { Typography } from "@repo/ui/atoms";

export default async function Home() {
  const accountType =
    (await cookies()).get("accountType")?.value ?? "individual";

  return (
    <>
      {accountType === "individual" ? (
        <>
          <BalanceAndAccounts />
          <Features />
        </>
      ) : (
        <Typography variant="h1">Business</Typography>
      )}
    </>
  );
}
