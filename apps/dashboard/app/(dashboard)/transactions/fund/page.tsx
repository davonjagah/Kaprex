"use client";

import React, { useState } from "react";
import AccountTypeStep from "../../../components/shared/AccountTypeStep/AccountTypeStep";
import CurrencyStep from "../../../components/fund/CurrencyStep";
import FundingMethodStep from "../../../components/fund/FundingMethodStep";
import TransactionStepper from "../../../components/shared/TransactionStepper/TransactionStepper";
import { FUND_ACCOUNT_OPTIONS } from "../../../components/shared/AccountTypeStep/constants";
import TransactionLayout from "../../../layouts/Transactions";

const FundPage = () => {
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
    <TransactionLayout title="Fund">
      <TransactionStepper steps={steps} initialStep={activeStep}>
        <div>
          <AccountTypeStep
            selectedAccountType={accountType}
            onAccountTypeChange={(type) => {
              setAccountType(type);
              setActiveStep(1);
            }}
            options={FUND_ACCOUNT_OPTIONS}
            title="What account do you want to fund?"
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
      </TransactionStepper>
    </TransactionLayout>
  );
};

export default FundPage;
