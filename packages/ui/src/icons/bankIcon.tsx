import React from "react";

type BankIconProps = React.SVGProps<SVGSVGElement>;

export const BankIcon = (props: BankIconProps) => (
  <svg
    width="36"
    height="33"
    viewBox="0 0 36 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.9806 0.299316L5.70898 6.82243V9.43167H30.2522V6.82243M23.7935 12.0409V21.1733H27.6687V12.0409M5.70898 27.6964H30.2522V23.7825H5.70898M16.043 12.0409V21.1733H19.9182V12.0409M8.29248 12.0409V21.1733H12.1677V12.0409H8.29248Z"
      fill="#FF5500"
    />
    <foreignObject x="-9.9" y="8.07009" width="55.4094" height="34.1292">
      <div
        style={{
          backdropFilter: "blur(4.95px)",
          clipPath: "url(#bgblur_0_958_9684_clip_path)",
          height: "100%",
          width: "100%",
        }}
      ></div>
    </foreignObject>
    <path
      data-figma-bg-blur-radius="9.9"
      d="M29.8457 18.5365C32.5953 18.0638 35.1082 20.1812 35.1084 22.9711V27.2992C35.1084 29.7845 33.0937 31.7992 30.6084 31.7992H4.95996C2.49702 31.7992 0.5 29.8022 0.5 27.3392C0.500222 25.236 1.96784 23.4292 4.00488 22.9838L4.2041 22.9447L29.8457 18.5365Z"
      fill="url(#paint0_linear_958_9684)"
      fillOpacity="0.1"
      stroke="white"
    />
    <g clipPath="url(#clip1_958_9684)">
      <rect
        x="24.543"
        y="2.5824"
        width="11.4154"
        height="11.4154"
        rx="5.70772"
        fill="#00AA47"
      />
      <path
        d="M26.043 8.5824H35.043"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.543 4.0824V13.0824"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath
        id="bgblur_0_958_9684_clip_path"
        transform="translate(9.9 -8.07009)"
      >
        <path d="M29.8457 18.5365C32.5953 18.0638 35.1082 20.1812 35.1084 22.9711V27.2992C35.1084 29.7845 33.0937 31.7992 30.6084 31.7992H4.95996C2.49702 31.7992 0.5 29.8022 0.5 27.3392C0.500222 25.236 1.96784 23.4292 4.00488 22.9838L4.2041 22.9447L29.8457 18.5365Z" />
      </clipPath>
      <linearGradient
        id="paint0_linear_958_9684"
        x1="17.8043"
        y1="23.16"
        x2="17.8043"
        y2="32.2993"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="#00AA47" />
      </linearGradient>
      <clipPath id="clip1_958_9684">
        <rect
          x="24.543"
          y="2.5824"
          width="11.4154"
          height="11.4154"
          rx="5.70772"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);
