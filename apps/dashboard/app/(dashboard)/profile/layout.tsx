"use client";

import React from "react";
import TabSwitcher from "../../../components/shared/TabSwitcher/TabSwitcher";

const TABS = [
  { label: "Identification", value: "identification", href: "/profile" },
  {
    label: "Payout Method",
    value: "payout",
    href: "/profile/payout",
  },
  {
    label: "Verification",
    value: "verification",
    href: "/profile/verification",
  },
];

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <TabSwitcher tabs={TABS} />
      <div className="mt-8">{children}</div>
    </div>
  );
}
