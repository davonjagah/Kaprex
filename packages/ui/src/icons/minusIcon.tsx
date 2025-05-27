import React from "react";

type MinusIconProps = React.SVGProps<SVGSVGElement>;

export const MinusIcon = (props: MinusIconProps) => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      y="8.52881"
      width="1"
      height="7.18907"
      transform="rotate(-90 0 8.52881)"
      fill="#7C7B80"
    />
    <rect
      x="8.81055"
      y="8.52881"
      width="1"
      height="7.18907"
      transform="rotate(-90 8.81055 8.52881)"
      fill="#7C7B80"
    />
  </svg>
);
