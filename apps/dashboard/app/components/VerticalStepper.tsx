"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../../../packages/ui/src/utils/cn";

export interface Step {
  label: string;
  completed?: boolean;
}

interface VerticalStepperProps {
  steps: Step[];
  activeStep: number;
  className?: string;
  children: React.ReactNode[];
}

const VerticalStepper: React.FC<VerticalStepperProps> = ({
  steps,
  activeStep,
  className = "",
  children,
}) => {
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [heights, setHeights] = useState<number[]>([]);

  useEffect(() => {
    const newHeights = contentRefs.current.map(
      (ref) => (ref ? Math.max(ref.offsetHeight - 27, 0) : 0), // prevent negative height
    );
    setHeights(newHeights);
  }, [children]);

  return (
    <div className={`flex items-stretch ${className}`}>
      {/* Stepper column */}
      <div
        className={cn(
          "relative flex flex-col items-center mr-3 md:mr-8 h-full transition-opacity duration-300",
          heights.length > 0 ? "opacity-100" : "opacity-0",
        )}
        style={{ minWidth: 40 }}
      >
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full z-0 bg-[#FF5500]"
          style={{ width: 2 }}
        />
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="relative z-3 flex flex-col items-center"
            style={{ justifyContent: "center" }}
          >
            <StepCircle
              number={idx + 1}
              completed={idx < activeStep}
              active={idx === activeStep}
            />
            {idx < steps.length - 1 && (
              <div
                className="transition-all duration-300 ease-in-out"
                style={{ height: heights[idx] ?? 100 }} // fallback if not yet measured
              />
            )}
          </div>
        ))}
      </div>

      {/* Content column */}
      <div className="flex-1 flex flex-col justify-between">
        {children.map((child, idx) => (
          <div
            key={idx}
            ref={(el) => {
              if (el) contentRefs.current[idx] = el;
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalStepper;

function StepCircle({
  number,
  completed,
}: {
  number: number;
  completed?: boolean;
  active?: boolean;
}) {
  if (completed) {
    return (
      <div className="w-7 h-7 rounded-full bg-[#FF5500] flex items-center justify-center">
        <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
          <path
            d="M4 8l3 3 5-5"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }
  // Current and future steps: orange border, white bg, orange number
  return (
    <div
      className={
        "w-7 h-7 rounded-full flex items-center justify-center font-bold bg-white border-2 border-[#FF5500] text-[#FF5500]"
      }
    >
      {number}
    </div>
  );
}
