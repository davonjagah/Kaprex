import React from "react";

type BriefcaseIconProps = React.SVGProps<SVGSVGElement>;

export const BriefcaseIcon = (props: BriefcaseIconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.25 6H3.75C3.33579 6 3 6.33579 3 6.75V18.75C3 19.1642 3.33579 19.5 3.75 19.5H20.25C20.6642 19.5 21 19.1642 21 18.75V6.75C21 6.33579 20.6642 6 20.25 6Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.75 6V4.5C15.75 4.10218 15.592 3.72064 15.3107 3.43934C15.0294 3.15804 14.6478 3 14.25 3H9.75C9.35218 3 8.97064 3.15804 8.68934 3.43934C8.40804 3.72064 8.25 4.10218 8.25 4.5V6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 11.0918C18.2649 12.6743 15.1599 13.5052 12 13.5002C8.84021 13.5053 5.73527 12.6747 3 11.0927"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 10.5H13.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
