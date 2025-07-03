"use client";

import React from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { InfoRowProps, InfoRow } from "../../../components/Profile/InfoRow";
import { Section } from "../../../components/Profile/Section";
import { UserInfoCard } from "../../../components/Profile/UserInfoCard";
import VerificationLevel from "../../../components/Profile/VerificationLevel";
import { useProfileMenu } from "../../../hooks/useProfileMenu";
import LoadingModal from "../../../components/shared/Modals/LoadingModal";

const IdentificationTab: React.FC = () => {
  const { user, accounts } = useAuth();
  const { switchedAccountType } = useAuth();
  const { onChange, isSwitching } = useProfileMenu();

  console.log(user, accounts, "user");

  const isBusinessSwitched = switchedAccountType === "business";

  const personalRows: InfoRowProps[] = [
    { label: "Full Name", value: user?.name || "" },
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
        accountType={user?.customerType || "individual"}
        isBusinessSwitched={isBusinessSwitched}
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
          accountType={user?.customerType || "individual"}
          isBusinessSwitched={isBusinessSwitched}
          onSwitchToBusiness={() => onChange("switch-account")}
          individualVerificationStatus="verified"
          businessVerificationStatus="Not verified"
        />

        <LoadingModal
          title="Switching Account"
          description="Hang on while we switch your account"
          open={isSwitching}
        />
      </div>
    </div>
  );
};

export default IdentificationTab;
