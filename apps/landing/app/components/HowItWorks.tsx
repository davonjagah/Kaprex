// components/HowItWorks.tsx
import { Typography } from "@repo/ui/atoms";
import { LineIcon, LineIconVertical } from "@repo/ui/icons";
import React from "react";

export const HowItWorks: React.FC = () => {
  const steps = [
    "Create a free account",
    "Complete your KYC",
    "Enjoy Kaprex to it's fullest",
  ];

  return (
    <section
      className="bg-black text-white text-center px-6 py-14 md:py-24 md:pb-48"
      id="how-it-works"
    >
      <Typography variant="body" className="text-primary mb-4 font-nohemi">
        — How it works
      </Typography>
      <Typography variant="h2" className="text-3xl md:text-5xl font-normal">
        Start your crypto journey today
      </Typography>

      <div className="flex flex-col md:hidden mt-12">
        {steps.map((label, i) => (
          <div
            key={i}
            className="flex flex-col items-start relative mb-10 last:mb-0"
          >
            <div className="relative my-7">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg ${
                  i === steps.length - 1
                    ? "bg-orange-500"
                    : "bg-gradient-to-br from-gray-800 to-black"
                }`}
              >
                <span className="text-white font-bold text-lg">{i + 1}</span>
              </div>
              {i < steps.length - 1 && (
                <LineIconVertical className="absolute top-full left-1/2 -translate-x-1/2 mt-0" />
              )}
            </div>
            <Typography
              variant="h4"
              className="mt-4 text-sm text-center max-w-xs absolute top-7 text-nowrap left-20"
            >
              {label}
            </Typography>
          </div>
        ))}
      </div>

      <div className="hidden md:flex items-center justify-center mt-12">
        {steps.map((label, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center relative">
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-xl border border-b-0 border-white ${
                  i === steps.length - 1
                    ? "bg-orange-500"
                    : "bg-gradient-to-br from-gray-800 to-black"
                }`}
              >
                <Typography
                  variant="h4"
                  className="text-white font-bold text-xl"
                >
                  {i + 1}
                </Typography>
              </div>
              <Typography
                variant="h4"
                className="mt-4 absolute top-20 right-[-70px] text-nowrap text-center"
              >
                {label}
              </Typography>
            </div>

            {i < steps.length - 1 && (
              <LineIcon className="mx-7 md:w-[150px] lg:w-[230px]" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
