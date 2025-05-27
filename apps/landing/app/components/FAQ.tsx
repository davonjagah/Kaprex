"use client";

import React, { useState } from "react";
import { Typography } from "@repo/ui/atoms";
import { PlusIcon } from "@repo/ui/icons";
import data from "../faq.json";

interface FAQItem {
  question: string;
  answer: string;
}

const items: FAQItem[] = data.faqs;

const FAQ: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(0);
  const half = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, half);
  const rightItems = items.slice(half);
  const toggle = (i: number) => setExpanded((prev) => (prev === i ? null : i));

  return (
    <section
      className="bg-white text-black px-6 lg:px-60 py-14 md:pt-24 lg:pb-32"
      style={{ contain: "content" }}
    >
      <div className="max-w-60 mb-6">
        <Typography variant="body" className="text-primary mb-4 font-nohemi">
          FAQ
        </Typography>
        <Typography variant="h2" className="font-normal">
          Want to know more?
        </Typography>
      </div>

      {/* two-column on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        {[leftItems, rightItems].map((column, colIdx) => (
          <div key={colIdx}>
            {column.map((item, idx) => {
              const globalIndex = colIdx * half + idx;
              const isOpen = expanded === globalIndex;

              return (
                <div
                  key={globalIndex}
                  className="border-b border-gray-200 py-4"
                >
                  {/* question header */}
                  <div
                    className="flex justify-between items-center cursor-pointer gap-2"
                    onClick={() => toggle(globalIndex)}
                  >
                    <Typography
                      variant="h4"
                      className="text-lg font-medium w-[90%]"
                    >
                      {item.question}
                    </Typography>
                    <PlusIcon
                      isOpen={isOpen}
                      className={`w-5 h-5 text-gray-400`}
                    />
                  </div>

                  {/* animated answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-1 opacity-0"
                    }`}
                  >
                    <Typography
                      variant="body"
                      className="text-gray-500 mt-2 leading-relaxed"
                    >
                      {item.answer}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
