import React from "react";
import AccountsCard from "./components/AccountsCard/AccountsCard";
import BalanceCard from "./components/BalanceCard/BalanceCard";

const BalanceAndAccounts = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-3.5">
      <BalanceCard />
      <AccountsCard />
    </div>
  );
};

export default BalanceAndAccounts;
