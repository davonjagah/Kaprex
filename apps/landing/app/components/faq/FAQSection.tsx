"use client";

import { Typography } from "@repo/ui/atoms";
import { FAQColumn } from "@repo/ui/molecules";
import { useFAQ } from "./useFAQ";

export const FAQSection = () => {
  const { leftItems, rightItems, expandedIndex, handleToggle } = useFAQ();

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

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        <FAQColumn
          items={leftItems}
          startIndex={0}
          expandedIndex={expandedIndex}
          onToggle={handleToggle}
        />
        <FAQColumn
          items={rightItems}
          startIndex={leftItems.length}
          expandedIndex={expandedIndex}
          onToggle={handleToggle}
        />
      </div>
    </section>
  );
};
