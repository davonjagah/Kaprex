"use client";

import React, { useState } from "react";
import AccountTypeStep from "../../../../components/shared/AccountTypeStep/AccountTypeStep";
import CurrencyStep from "../../../../components/fund/CurrencyStep";
// import FundingMethodStep from "../../../../components/fund/FundingMethodStep";
import TransactionStepper from "../../../../components/shared/TransactionStepper/TransactionStepper";
import { FUND_ACCOUNT_OPTIONS } from "../../../../components/shared/AccountTypeStep/constants";
import TransactionLayout from "../../../../layouts/Transactions";
import CryptoStep from "../../../../components/fund/CryptoStep";

const FundPage = () => {
  // const [accountType, setAccountType] = useState("virtual");
  const [fundMethod, setFundMethod] = useState("crypto");
  const [currency, setCurrency] = useState("usd");
  const [blockchain, setBlockchain] = useState("solana");
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: "How do you want to fund?" },
    { label: "What currency do you want to fund with?" },
  ];

  return (
    <TransactionLayout title="Fund">
      <TransactionStepper steps={steps} initialStep={activeStep}>
        <div>
          <AccountTypeStep
            selectedAccountType={fundMethod}
            onAccountTypeChange={(type) => {
              setFundMethod(type);
              setActiveStep(1);
            }}
            options={FUND_ACCOUNT_OPTIONS}
            title="How do you want to fund?"
          />
        </div>
        {/* <div>
          <FundingMethodStep
            selectedMethod={fundMethod}
            onMethodChange={(method) => {
              setFundMethod(method);
              setActiveStep(2);
            }}
          />
        </div> */}
        <div>
          {fundMethod === "bank" ? (
            <CurrencyStep
              selectedCurrency={currency}
              onCurrencyChange={(currency) => {
                setCurrency(currency);
                setActiveStep(2);
              }}
            />
          ) : (
            <CryptoStep
              selectedBlockchain={blockchain}
              onBlockchainChange={(blockchain) => {
                setBlockchain(blockchain);
                setActiveStep(2);
              }}
            />
          )}
        </div>
      </TransactionStepper>
    </TransactionLayout>
  );
};

export default FundPage;
