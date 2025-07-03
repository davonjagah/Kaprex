import React from "react";

type CopyIconProps = React.SVGProps<SVGSVGElement>;

export const CopyIcon = (props: CopyIconProps) => (
  <svg
    width="36"
    height="24"
    viewBox="0 0 36 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.896484 12C0.896484 5.37258 6.26907 0 12.8965 0H23.8056C30.433 0 35.8056 5.37258 35.8056 12C35.8056 18.6274 30.433 24 23.8056 24H12.8965C6.26906 24 0.896484 18.6274 0.896484 12Z"
      fill="currentColor"
    />
    <g clipPath="url(#clip0_706_47423)">
      <path
        d="M20.3956 14.0455H22.8501V7.5H16.3047V9.95455"
        stroke="#303344"
        strokeWidth="1.09091"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.3951 9.95459H13.8496V16.5H20.3951V9.95459Z"
        stroke="#303344"
        strokeWidth="1.09091"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_706_47423">
        <rect
          width="13.0909"
          height="13.0909"
          fill="white"
          transform="translate(11.8047 5.45459)"
        />
      </clipPath>
    </defs>
  </svg>
);
