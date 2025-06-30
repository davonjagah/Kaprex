"use client";

import React from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { InfoRowProps, InfoRow } from "../../../components/Profile/InfoRow";
import { Section } from "../../../components/Profile/Section";
import { UserInfoCard } from "../../../components/Profile/UserInfoCard";
import VerificationLevel from "../../../components/Profile/VerificationLevel";

const IdentificationTab: React.FC = () => {
  const {
    user: { user },
  } = useAuth();
  console.log(user, "userProfile");

  const personalRows: InfoRowProps[] = [
    { label: "Full Name", value: user.name || "" },
    { label: "Date of Birth", value: user?.dateOfBirth || "Not Verified" },
    {
      label: "Address",
      value: user?.address || "Not Verified",
    },
    {
      label: "Identification Document",
      value: user?.identificationDocument || "Not Verified",
    },
    { label: "Email Address", value: user?.email || "" },
  ];

  return (
    <div className="space-y-2.5">
      <UserInfoCard
        name={user?.name || ""}
        accountType={user?.customerType || ""}
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
          accountType={user?.customerType || ""}
          isBusinessSwitched={true}
          onSwitchToBusiness={() => console.log("switch to business")}
          individualVerificationStatus="verified"
          businessVerificationStatus="Not verified"
        />
      </div>
    </div>
  );
};

export default IdentificationTab;
