import React from "react";
import { Typography } from "@repo/ui/atoms";
import { KaprexIcon } from "@repo/ui/icons";

const benefits = [
  "No financial constraints",
  "Less paperwork",
  "Faster settlement time",
  "Effortless to use",
  "Lower cost",
  "No hidden fees",
];

const BenefitBar = () => {
  const marqueeItems = [...benefits, ...benefits];

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
