import React, { useMemo } from "react";
import { Typography } from "@repo/ui/atoms";
import { KaprexIcon } from "@repo/ui/icons";

interface BenefitBarProps {
  items: string[];
}

const BenefitBar = ({ items }: BenefitBarProps) => {
  // duplicate array once
  const marqueeItems = useMemo(() => [...items, ...items], [items]);

  return (
    <div
      className="bg-primary text-white py-3 overflow-hidden group"
      role="region"
      aria-label="Benefit bar marquee"
    >
      <div className="animate-marquee whitespace-nowrap group-hover:paused space-x-12">
        {marqueeItems.map((item, idx) => {
          const isLastInSlice =
            idx % marqueeItems.length === marqueeItems.length - 1;
          return (
            <React.Fragment key={idx}>
              <Typography
                variant="body"
                className="inline-block text-xl font-nohemi"
              >
                {item}
              </Typography>
              {!isLastInSlice && (
                <Typography
                  variant="body"
                  className="inline-block text-lg font-medium"
                >
                  <KaprexIcon />
                </Typography>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default BenefitBar;
