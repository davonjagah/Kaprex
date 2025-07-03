"use client";

import { Typography } from "@repo/ui/atoms";
import { Button } from "@repo/ui/atoms";
import React from "react";
import { Section } from "../Section";
import { VerificationBadge } from "../VerificationBadge";
import { cn } from "@repo/ui/utils";

const VERIFICATION_LEVELS = [
  {
    level: "Individual",
    features: ["Send/Receive Crypto", "Fiat Onramp/Offramp", "Cards"],
  },
  {
    level: "Business",
    features: [
      "All Individual features",
      "Higher transaction limits",
      "Business account management",
      "Advanced reporting",
      "API access",
    ],
  },
];

type VerificationLevelProps = {
  accountType: "individual" | "business";
  isBusinessSwitched: boolean;
  onSwitchToBusiness?: () => void;
  individualVerificationStatus:
    | "verified"
    | "Not verified"
    | "Under Verification";
  businessVerificationStatus:
    | "verified"
    | "Not verified"
    | "Under Verification";
};

const VerificationLevel: React.FC<VerificationLevelProps> = ({
  accountType,
  isBusinessSwitched,
  onSwitchToBusiness,
  individualVerificationStatus,
  businessVerificationStatus,
}) => {
  return (
    <Section title="Verification Level">
      {/* Individual Section */}
      <div className="flex justify-between items-center mb-4">
        <Typography variant="body" className="font-nohemi text-base">
          Individual
        </Typography>
        <VerificationBadge
          showVerifyButton
          verificationStatus={
            individualVerificationStatus === "Not verified"
              ? undefined
              : individualVerificationStatus
          }
        />
      </div>
      <ul className="list-disc list-inside text-gray-500 space-y-1 font-sans text-sm">
        {(VERIFICATION_LEVELS[0]?.features ?? []).map((feat) => (
          <li key={feat}>{feat}</li>
        ))}
      </ul>

      {/* Business Section */}
      {accountType === "business" && isBusinessSwitched && (
        <>
          <div className="flex justify-between items-center mb-4 mt-6">
            <Typography variant="body" className="font-nohemi text-base">
              Business
            </Typography>
            <VerificationBadge
              showVerifyButton
              verificationStatus={
                businessVerificationStatus === "Not verified"
                  ? undefined
                  : businessVerificationStatus
              }
            />
          </div>
          <ul
            className={cn(
              "list-disc list-inside space-y-1 font-sans text-sm",
              businessVerificationStatus !== "verified"
                ? "text-[#C0C0C0]"
                : "text-gray-500",
            )}
          >
            {(VERIFICATION_LEVELS[1]?.features ?? []).map((feat) => (
              <li key={feat}>{feat}</li>
            ))}
          </ul>
        </>
      )}
      {accountType === "business" && !isBusinessSwitched && (
        <Button
          variant="outline"
          className="w-full mt-5"
          onClick={onSwitchToBusiness}
        >
          Switch to business
        </Button>
      )}
    </Section>
  );
};

export default VerificationLevel;
