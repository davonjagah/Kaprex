"use client";

import React from "react";
import { Button, Typography } from "@repo/ui/atoms";
import { InfoRow, InfoRowProps } from "../../components/Profile/InfoRow";
import { UserInfoCard } from "../../components/Profile/UserInfoCard";
import { VerifiedBadge } from "../../components/Profile/VerifiedBadge";
import { Section } from "../../components/Profile/Section";

const personalRows: InfoRowProps[] = [
  { label: "Full Name", value: "David Kazeem" },
  { label: "Date of Birth", value: "22 Oct 1992" },
  { label: "Address", value: "Kumasi, Ghana", action: "Edit address >" },
  { label: "Identification Document", value: "A1******2" },
  { label: "Email Address", value: "davonkaze1@gmail.com" },
];

const verificationFeatures = [
  "Send/Receive Crypto,",
  "Fiat Onramp/Offramp,",
  "Cards,",
];

const IdentificationTab: React.FC = () => (
  <div className="space-y-2.5">
    <UserInfoCard
      name="Davon Kazeem"
      accountType="Individual Account"
      verified={true}
    />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 items-start">
      <Section title="Personal Information" spanCols={2}>
        <div className="space-y-6">
          {personalRows.map((row) => (
            <InfoRow key={row.label} {...row} />
          ))}
        </div>
      </Section>

      <Section title="Verification Level">
        <div className="flex justify-between items-start">
          <Typography variant="body" className="font-nohemi text-base">
            Individual
          </Typography>
          <VerifiedBadge />
        </div>
        <ul className="list-disc list-inside text-gray-500 space-y-1 mt-2 font-sans text-sm">
          {verificationFeatures.map((feat) => (
            <li key={feat}>{feat}</li>
          ))}
        </ul>
        <Button variant="outline" className="w-full mt-5">
          Switch to business
        </Button>
      </Section>
    </div>
  </div>
);

export default IdentificationTab;
