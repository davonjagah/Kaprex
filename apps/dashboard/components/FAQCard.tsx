"use client";
import React, { useState } from "react";
import { FAQColumn, type FAQ } from "@repo/ui/molecules";
import { Typography } from "@repo/ui/atoms";

const faqs: FAQ[] = [
  {
    question: "How to deposit crypto?",
    answer:
      "You can deposit crypto by sending funds to your Kaprex wallet address. Supported networks and instructions are available in your account.",
  },
  {
    question: "Deposit hasn't arrived?",
    answer:
      "Deposits may take a few minutes to process. If your deposit hasn't arrived after 30 minutes, please contact support.",
  },
  {
    question: "What is Kaprex?",
    answer:
      "Kaprex is a platform for managing your crypto and fiat assets, making global payments, and more.",
  },
  {
    question: "What is Kaprex?",
    answer:
      "Kaprex is a secure and user-friendly platform for digital asset management.",
  },
];

const FAQCard = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  return (
    <div className="bg-white rounded-2xl shadow px-6 py-5">
      <Typography
        variant="h3"
        className="font-normal border-b border-gray-200 pb-4"
      >
        FAQ
      </Typography>
      <FAQColumn
        items={faqs}
        startIndex={0}
        expandedIndex={expandedIndex}
        onToggle={setExpandedIndex}
        labelClassName="font-normal text-base"
      />
    </div>
  );
};

export default FAQCard;
