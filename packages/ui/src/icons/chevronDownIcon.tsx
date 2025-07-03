import React from "react";

type ChevronDownIconProps = React.SVGProps<SVGSVGElement>;

export const ChevronDownIcon = (props: ChevronDownIconProps) => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.28325 0.963379L5.20998 5.03664L1.13672 0.963379"
      stroke="black"
      strokeWidth="0.678878"
    />
  </svg>
);
