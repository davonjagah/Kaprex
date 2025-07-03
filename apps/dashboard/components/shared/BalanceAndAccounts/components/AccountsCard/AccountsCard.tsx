"use client";

import React, { FC } from "react";
import Link from "next/link";
import { Typography } from "@repo/ui/atoms";
import { ChevronRight } from "lucide-react";
// import { Dropdown } from "@repo/ui/molecules";

interface AccountItem {
  flag: React.ReactNode;
  currency: string;
  amount: string;
}

// type AccountType = "stables" | "crypto";

// const CRYPTO_ACCOUNTS = [
//   { flag: "🪙", currency: "BTC", amount: "0.5" },
//   { flag: "🪙", currency: "ETH", amount: "10" },
//   { flag: "🪙", currency: "SOL", amount: "20" },
// ];

// const DROPDOWN_OPTIONS = [
//   { label: "Virtual accounts", value: "stables" },
//   { label: "Crypto", value: "crypto" },
// ];

const AccountRow: FC<{ account: AccountItem }> = ({ account }) => (
  <Link
    href={`/accounts/${account.currency}`}
    key={account.currency + account.amount}
  >
    <div className="flex items-center bg-white border border-[#DDDCE4] justify-between rounded-full h-[60px] lg:h-[89px] p-2.5 lg:px-5 lg:py-[3.5] hover:bg-gray-50 transition cursor-pointer">
      <span className="text-2xl mr-4">{account.flag}</span>
      <div className="flex-1 text-gray-700 font-medium">
        <Typography
          variant="body"
          className="font-nohemi font-medium text-[#0A0A0A]"
        >
          {account.amount}
        </Typography>
        <Typography variant="body" className="text-gray-500">
          {account.currency}
        </Typography>
      </div>
      <ChevronRight />
    </div>
  </Link>
);

const AccountsCard = ({ accounts }: { accounts: AccountItem[] }) => {
  // const [type] = useState<AccountType>("stables");

  // const accounts = useMemo(
  //   () => (type === "stables" ? STABLE_ACCOUNTS : CRYPTO_ACCOUNTS),
  //   [type]
  // );

  return (
    <div className="w-full lg:w-[40.59%] flex flex-col gap-4">
      <div className="flex items-center justify-between mb-2 relative">
        <Typography variant="body" className="text-gray-500 font-nohemi">
          Accounts
        </Typography>
        {/* <Dropdown
          options={DROPDOWN_OPTIONS}
          value={type}
          onChange={(val) => setType(val as AccountType)}
          labelClassName="text-gray-500 font-nohemi text-base"
        /> */}
      </div>

      <div className="flex flex-col gap-2 h-32 lg:h-72 overflow-y-auto">
        {accounts.map((account) => (
          <AccountRow
            key={account.currency + account.amount}
            account={account}
          />
        ))}
      </div>
    </div>
  );
};

export default AccountsCard;
