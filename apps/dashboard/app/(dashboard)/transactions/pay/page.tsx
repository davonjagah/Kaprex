"use client";

import React, { useState } from "react";
import TransactionLayout from "../../../../layouts/Transactions";
import TransactionStepper from "../../../../components/shared/TransactionStepper/TransactionStepper";
import { Typography, Button } from "@repo/ui/atoms";
import { Dropdown } from "@repo/ui/molecules";

const steps = [
  { label: "How much do you want to pay?" },
  { label: "Pay to?" },
  { label: "What method of bank transfer?" },
  { label: "Account Details" },
];

export default function PayTabPage() {
  const [amount, setAmount] = useState("10.05");
  const [currency, setCurrency] = useState("USD");
  const [payTo, setPayTo] = useState("bank");
  const [method, setMethod] = useState("ach");

  return (
    <TransactionLayout title="Pay">
      <div className="flex justify-center w-full">
        <div className="w-full max-w-2xl bg-white rounded-3xl p-10 mt-4">
          <Typography variant="h1" className="text-2xl font-nohemi mb-8">
            Pay
          </Typography>
          <TransactionStepper steps={steps} initialStep={3}>
            {/* Step 1: Amount */}
            <div>
              <Typography variant="body" className="font-nohemi mb-2">
                How much do you want to pay?
              </Typography>
              <div className="flex items-end gap-2 mb-2">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="text-[48px] font-nohemi border-none outline-none bg-transparent w-40"
                />
                <Dropdown
                  options={[{ label: "USD", value: "USD" }]}
                  value={currency}
                  onChange={setCurrency}
                  className="text-[32px] font-nohemi"
                />
              </div>
            </div>
            {/* Step 2: Pay to */}
            <div>
              <Typography variant="body" className="font-nohemi mb-2">
                Pay to?
              </Typography>
              <Dropdown
                options={[{ label: "Bank Account", value: "bank" }]}
                value={payTo}
                onChange={setPayTo}
                className="w-full"
              />
              <div className="bg-[#FFF3ED] text-[#FF5A1F] rounded-lg px-4 py-2 mt-2 text-sm font-nohemi">
                Please note: we currently allow payments into US Dollar account
                using ACH & Wire transfers
              </div>
            </div>
            {/* Step 3: Method */}
            <div>
              <Typography variant="body" className="font-nohemi mb-2">
                What method of bank transfer?
              </Typography>
              <Dropdown
                options={[{ label: "ACH  Fee: 1$ + 0.85%", value: "ach" }]}
                value={method}
                onChange={setMethod}
                className="w-full"
              />
            </div>
            {/* Step 4: Account Details */}
            <div>
              <Typography variant="body" className="font-nohemi mb-2">
                Account Details
              </Typography>
              <div className="flex flex-col gap-3">
                <div>
                  <label className="block text-xs font-nohemi mb-1 text-gray-500">
                    Account Name
                  </label>
                  <input
                    className="rounded-lg border border-[#DDDCE4] px-4 py-3 font-nohemi w-full"
                    value="Dewole"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-xs font-nohemi mb-1 text-gray-500">
                    Account Number
                  </label>
                  <input
                    className="rounded-lg border border-[#DDDCE4] px-4 py-3 font-nohemi w-full bg-[#F5F5F7]"
                    placeholder="xYnsat$44..."
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-xs font-nohemi mb-1 text-gray-500">
                    Bank Name
                  </label>
                  <input
                    className="rounded-lg border border-[#DDDCE4] px-4 py-3 font-nohemi w-full bg-[#F5F5F7]"
                    placeholder="xYnsat$44..."
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-xs font-nohemi mb-1 text-gray-500">
                    SWIFT Code
                  </label>
                  <input
                    className="rounded-lg border border-[#DDDCE4] px-4 py-3 font-nohemi w-full bg-[#F5F5F7]"
                    placeholder="xYnsat$44..."
                    disabled
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-6">
                <Button className="bg-[#FF5A1F] text-white font-nohemi text-lg py-3 rounded-full w-full">
                  Pay
                </Button>
                <Button
                  variant="text"
                  className="text-[#FF5A1F] font-nohemi text-lg w-full"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </TransactionStepper>
        </div>
      </div>
    </TransactionLayout>
  );
}
