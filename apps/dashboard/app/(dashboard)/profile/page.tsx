"use client";

import React from "react";
import { InfoRow, InfoRowProps } from "../../components/Profile/InfoRow";
import { UserInfoCard } from "../../components/Profile/UserInfoCard";
import { Section } from "../../components/Profile/Section";
import VerificationLevel from "../../components/Profile/VerificationLevel";

const personalRows: InfoRowProps[] = [
  { label: "Full Name", value: "David Kazeem" },
  { label: "Date of Birth", value: "22 Oct 1992" },
  { label: "Address", value: "Kumasi, Ghana", action: "Edit address >" },
  { label: "Identification Document", value: "A1******2" },
  { label: "Email Address", value: "davonkaze1@gmail.com" },
];

const IdentificationTab: React.FC = () => (
  <div className="space-y-2.5">
    <UserInfoCard
      name="Davon Kazeem"
      accountType="Individual Account"
      verificationStatus="verified"
    />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 items-start">
      <Section title="Personal Information" spanCols={"2"}>
        <div className="space-y-6">
          {personalRows.map((row) => (
            <InfoRow key={row.label} {...row} />
          ))}
        </div>
      </Section>

      <VerificationLevel
        accountType="business"
        isBusinessSwitched={true}
        onSwitchToBusiness={() => console.log("switch to business")}
        individualVerificationStatus="verified"
        businessVerificationStatus="Not verified"
      />
    </div>
  </div>
);

export default IdentificationTab;
