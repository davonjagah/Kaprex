import React from "react";

type LineIconVerticalProps = React.SVGProps<SVGSVGElement>;

export const LineIconVertical = (props: LineIconVerticalProps) => (
  <svg
    width="2"
    height="79"
    viewBox="0 0 2 79"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.561523 0.123535L0.561525 39.5618L0.561527 79"
      stroke="url(#paint0_linear_633_19257)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_633_19257"
        x1="0.561527"
        y1="79"
        x2="0.561523"
        y2="0.123535"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0A0A0A" />
        <stop offset="0.528846" stopColor="white" />
        <stop offset="1" stopColor="#0A0A0A" />
      </linearGradient>
    </defs>
  </svg>
);
