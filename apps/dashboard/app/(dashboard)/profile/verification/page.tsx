"use client";

import React, { useMemo } from "react";
import { Typography, Button } from "@repo/ui/atoms";
import VerificationLevel from "../../../../components/Profile/VerificationLevel";
import { Section } from "../../../../components/Profile/Section";
import { EditorSection } from "../../../../components/Profile/Editor";

const TASKS = [
  {
    label: "KYC Verification",
    status: "Not started",
    statusType: "default",
    action: "Complete",
  },
  {
    label: "KYC Verification",
    status: "Under review",
    statusType: "review",
    action: "Complete",
  },
  {
    label: "Terms & Conditions",
    status: "Approved",
    statusType: "approved",
    action: "Complete",
  },
  {
    label: "Terms & Conditions",
    status: "Rejected",
    statusType: "rejected",
    action: "Complete",
  },
] as const;

const STATUS_COLORS = {
  default: "bg-[#E5E5EA] text-[#6C6C77]",
  review: "bg-[#F6E3B6] text-[#B9910B]",
  approved: "bg-[#D1FADF] text-[#039855]",
  rejected: "bg-[#FEE4E2] text-[#D92D20]",
} as const;

type Task = (typeof TASKS)[number];

const TaskRow: React.FC<{ task: Task }> = ({ task }) => {
  const badgeClass = STATUS_COLORS[task.statusType];
  return (
    <div className="flex items-center justify-between bg-[#F9FAFB] rounded-lg px-4 py-3">
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#FFF3EA]">
          <span className="text-xl">📝</span>
        </span>
        <Typography variant="body" className="font-nohemi">
          {task.label}
        </Typography>
        <span
          className={`ml-2 px-2 py-0.5 rounded text-xs font-nohemi font-medium ${badgeClass}`}
        >
          {task.status}
        </span>
      </div>
      <Button variant="text" className="text-primary font-nohemi text-sm px-0">
        {task.action} &gt;
      </Button>
    </div>
  );
};

const VerificationPage: React.FC = () => {
  const tasks = useMemo(() => TASKS, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 items-start">
      <div className="lg:col-span-2 flex flex-col gap-3.5">
        <Section title="What needs to be done">
          <div className="flex flex-col gap-4">
            {tasks.map((t, i) => (
              <TaskRow key={i} task={t} />
            ))}
          </div>
        </Section>

        <Section title="Additional Information required">
          <EditorSection />
        </Section>
      </div>

      <VerificationLevel
        accountType="individual"
        isBusinessSwitched={false}
        individualVerificationStatus="verified"
        businessVerificationStatus="Not verified"
      />
    </div>
  );
};

export default VerificationPage;
