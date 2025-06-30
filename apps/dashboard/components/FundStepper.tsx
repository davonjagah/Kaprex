"use client";
import React, { useState } from "react";
import { Typography } from "@repo/ui/atoms";
import VerticalStepper from "./VerticalStepper";
import AccountTypeStep from "./fund/AccountTypeStep";
import FundingMethodStep from "./fund/FundingMethodStep";
import CurrencyStep from "./fund/CurrencyStep";

export default function FundStepper() {
  const [accountType, setAccountType] = useState("virtual");
  const [fundMethod, setFundMethod] = useState("bank");
  const [currency, setCurrency] = useState("usd");
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: "What account do you want to fund?" },
    { label: "How do you want to fund?" },
    { label: "What currency do you want to fund with?" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow py-6 px-10">
      <Typography
        variant="h1"
        className="font-nohemi text-4xl mb-6 font-normal"
      >
        Fund
      </Typography>
      <VerticalStepper steps={steps} activeStep={activeStep}>
        <div>
          <AccountTypeStep
            selectedAccountType={accountType}
            onAccountTypeChange={(type) => {
              setAccountType(type);
              setActiveStep(1);
            }}
          />
        </div>
        <div>
          <FundingMethodStep
            selectedMethod={fundMethod}
            onMethodChange={(method) => {
              setFundMethod(method);
              setActiveStep(2);
            }}
          />
        </div>
        <div>
          <CurrencyStep
            selectedCurrency={currency}
            onCurrencyChange={setCurrency}
          />
        </div>
      </VerticalStepper>
    </div>
  );
}
