"use client";

import React, { useState } from "react";
import { Button } from "@repo/ui/atoms";
import { BusinessIcon, ProfileIcon } from "@repo/ui/icons";
import Link from "next/link";
import FormCard from "../../components/Auth/FormCard/FormCard";

const OPTIONS = [
  {
    value: "individual",
    label: "Individual",
    description:
      "Ideal for freelancers, remote workers, and everyday users looking to access digital finance tools.",
    icon: <ProfileIcon />,
    color: "primary",
  },
  {
    value: "business",
    label: "Business",
    description:
      "Built for registered businesses: Startups, SMEs, and enterprises needing advanced treasury and financial management.",
    icon: <BusinessIcon />,
    color: "primary",
  },
];

const AccountTypePage = () => {
  const [selected, setSelected] = useState("individual");

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#F4F7FB] w-full">
      <div className="w-full max-w-[600px] mx-auto text-center">
        <FormCard
          title="Create your Kaprex account"
          subtitle="Choose from two account types:"
        >
          <div className="flex flex-col gap-4">
            {OPTIONS.map((option) => {
              const isActive = selected === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setSelected(option.value)}
                  className={`flex items-start gap-7 w-full rounded-xl border-2 transition-all py-8 px-5 text-left ${
                    isActive
                      ? "border-primary bg-[#FFF7F3] shadow-sm"
                      : "border-[#E6E8EC] bg-white"
                  }`}
                >
                  <span className="mt-2">
                    <span
                      className={`inline-block w-5 h-5 rounded-full border-2 ${
                        isActive ? "border-primary" : "border-[#BFC8D9]"
                      } flex items-center justify-center`}
                    >
                      {isActive && (
                        <span className="w-3 h-3 rounded-full bg-primary block" />
                      )}
                    </span>
                  </span>

                  <span className="flex-1">
                    <span
                      className={`flex items-center flex-wrap gap-2 mb-3 font-nohemi text-[32px] ${
                        isActive ? "text-primary" : "text-[#23262F]"
                      }`}
                    >
                      <span>{option.icon}</span>
                      {option.label}
                    </span>
                    <span className="block text-[#7C7B80] text-base font-normal">
                      {option.description}
                    </span>
                  </span>
                </button>
              );
            })}
            <Link href={`/signup?accountType=${encodeURIComponent(selected)}`}>
              <Button variant="primary" className="font-semibold w-full mt-6">
                Continue
              </Button>
            </Link>
          </div>
        </FormCard>
      </div>
    </div>
  );
};

export default AccountTypePage;
