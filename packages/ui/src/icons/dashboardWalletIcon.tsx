import React from "react";

type DashboardWalletIconProps = React.SVGProps<SVGSVGElement>;

export const DashboardWalletIcon = (props: DashboardWalletIconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.75 5.25V17.25C3.75 17.6478 3.90804 18.0294 4.18934 18.3107C4.47064 18.592 4.85218 18.75 5.25 18.75H20.25C20.4489 18.75 20.6397 18.671 20.7803 18.5303C20.921 18.3897 21 18.1989 21 18V7.5C21 7.30109 20.921 7.11032 20.7803 6.96967C20.6397 6.82902 20.4489 6.75 20.25 6.75H5.25C4.85218 6.75 4.47064 6.59196 4.18934 6.31066C3.90804 6.02936 3.75 5.64782 3.75 5.25ZM3.75 5.25C3.75 4.85218 3.90804 4.47064 4.18934 4.18934C4.47064 3.90804 4.85218 3.75 5.25 3.75H18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.875 13.125C17.2892 13.125 17.625 12.7892 17.625 12.375C17.625 11.9608 17.2892 11.625 16.875 11.625C16.4608 11.625 16.125 11.9608 16.125 12.375C16.125 12.7892 16.4608 13.125 16.875 13.125Z"
      fill="currentColor"
    />
  </svg>
);
