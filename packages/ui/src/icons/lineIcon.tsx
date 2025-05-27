import React from "react";

type LineIconProps = React.SVGProps<SVGSVGElement>;

export const LineIcon = (props: LineIconProps) => (
  <svg
    width="232"
    height="2"
    viewBox="0 0 232 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.486328 0.561523H231.286"
      stroke="url(#paint0_linear_633_9315)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_633_9315"
        x1="231.286"
        y1="0.561523"
        x2="0.486328"
        y2="0.561523"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0A0A0A" />
        <stop offset="0.528846" stopColor="white" />
        <stop offset="1" stopColor="#0A0A0A" />
      </linearGradient>
    </defs>
  </svg>
);
