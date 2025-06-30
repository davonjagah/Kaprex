import React from "react";
import VerticalStepper from "../../VerticalStepper";

export interface Step {
  label: string;
  completed?: boolean;
}

interface TransactionStepperProps {
  steps: Step[];
  children: React.ReactNode[];
  initialStep?: number;
  onStepChange?: (step: number) => void;
}

export default function TransactionStepper({
  steps,
  children,
  initialStep = 0,
}: TransactionStepperProps) {
  return (
    <VerticalStepper steps={steps} activeStep={initialStep}>
      {children}
    </VerticalStepper>
  );
}
