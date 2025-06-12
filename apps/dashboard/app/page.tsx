import { Button, Typography } from "@repo/ui/atoms";
import AccountsCard from "./components/AccountsCard/AccountsCard";
import BalanceCard from "./components/BalanceCard/BalanceCard";
import React from "react";
import { WarningIcon } from "@repo/ui/icons";

export default function Home() {
  return (
    <div className="flex-1 overflow-y-auto p-5 md:p-8 space-y-6">
      {/* KYC Banner */}
      <div className="flex items-center bg-primary rounded-full px-4 py-3 mb-4 w-full max-w-full shadow flex-row gap-3 sm:px-6 sm:py-3">
        <WarningIcon className="text-white flex-shrink-0 h-6 w-6" />
        <div className="flex flex-col md:flex-row md:gap-1 flex-1 min-w-0">
          <Typography
            variant="body"
            className="text-white font-semibold truncate text-xs md:text-sm font-nohemi"
          >
            Ready to explore Kaprex?
          </Typography>
          <Typography
            variant="body"
            className="text-orange-100 truncate text-xs md:text-sm font-nohemi"
          >
            Please finalize your KYC process to enjoy secure and compliant
            access to all our features.
          </Typography>
        </div>
        <Button
          variant="text"
          className="text-white text-xs md:text-sm"
          size="sm"
        >
          Verify <span className="hidden md:inline">&nbsp;Identity &gt;</span>
        </Button>
      </div>

      {/* Main Balance and Accounts */}
      <div className="flex flex-col md:flex-row gap-3.5">
        <BalanceCard />
        <AccountsCard />
      </div>

      {/* Virtual Accounts Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <Typography variant="h5" className="mb-1">
            Virtual Accounts
          </Typography>
          <Typography variant="body" className="text-gray-500 mb-2">
            Receive global payments in fiat and crypto, seamlessly settled in
            Ghanaian Cedis across multiple platforms with Kaprex
          </Typography>
          <a href="#" className="text-orange-500 font-semibold text-sm">
            Go to Virtual accounts &gt;
          </a>
        </div>
        <div className="flex flex-col gap-2 text-right">
          <span className="text-xs text-gray-400">ACH</span>
          <span className="text-xs text-gray-400">Wire</span>
          <span className="text-xs text-gray-400">SEPA</span>
          <span className="text-xs text-gray-400">SWIFT</span>
          <span className="inline-block w-32 h-20 bg-orange-100 rounded-full mt-2" />
        </div>
      </div>

      {/* Cards, Earn, Merchant */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Virtual Cards */}
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col justify-between min-h-[180px] relative overflow-hidden">
          <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs px-2 py-1 rounded">
            COMING SOON
          </span>
          <Typography variant="h5" className="mb-1">
            Virtual Cards
          </Typography>
          <Typography variant="body" className="text-gray-500 mb-2">
            Spend worldwide with Kaprex virtual cards at globally accepted
            vendors.
          </Typography>
          <a href="#" className="text-orange-500 font-semibold text-sm">
            Go to cards &gt;
          </a>
          <div className="absolute bottom-4 right-4 flex gap-2">
            <span className="inline-block w-12 h-8 bg-green-200 rounded-lg" />
            <span className="inline-block w-12 h-8 bg-orange-200 rounded-lg" />
          </div>
        </div>
        {/* Earn Passive Income */}
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col justify-between min-h-[180px] relative overflow-hidden">
          <Typography variant="h5" className="mb-1">
            Earn Passive income
          </Typography>
          <Typography variant="body" className="text-gray-500 mb-2">
            Earn Passive Income with Kaprex through DeFi—secure, stable, and
            always in your control.
          </Typography>
          <a href="#" className="text-orange-500 font-semibold text-sm">
            Go to Earn &gt;
          </a>
          <div className="absolute bottom-4 right-4 w-16 h-12 bg-orange-100 rounded-t-lg" />
        </div>
        {/* Merchant */}
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col justify-between min-h-[180px] relative overflow-hidden">
          <Typography variant="h5" className="mb-1">
            Merchant
          </Typography>
          <Typography variant="body" className="text-gray-500 mb-2">
            Receive global payments in fiat and crypto, seamlessly settled in
            Ghanaian Cedis across multiple platforms with Kaprex
          </Typography>
          <a href="#" className="text-orange-500 font-semibold text-sm">
            Go to Merchant &gt;
          </a>
          <div className="absolute bottom-4 right-4 flex flex-col gap-2 items-end">
            <span className="inline-block w-8 h-8 bg-gray-200 rounded-full" />
            <span className="inline-block w-20 h-4 bg-orange-200 rounded-lg" />
          </div>
        </div>
      </div>

      {/* QR/Pay Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-xs text-gray-400 flex items-center gap-2">
            <span className="inline-block w-4 h-4 bg-orange-200 rounded-full" />{" "}
            Scan QR code
          </span>
          <span className="text-xs text-gray-400">kaprex.io/200USDE...</span>
          <button className="bg-orange-500 text-white rounded-full px-4 py-2 font-semibold text-sm w-fit mt-2">
            Pay
          </button>
        </div>
        <div className="flex-1 flex justify-end">
          <span className="inline-block w-32 h-32 bg-gray-200 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
