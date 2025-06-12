import React from "react";

type ProfileIconProps = React.SVGProps<SVGSVGElement>;

export const ProfileIcon = (props: ProfileIconProps) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_811_459)">
      <path
        d="M39.4017 24.8365C36.7295 35.5565 25.8684 42.0731 15.1637 39.4008C4.44342 36.7286 -2.07315 25.868 0.599197 15.1634C3.27138 4.44342 14.1167 -2.07315 24.837 0.599199C35.5417 3.25576 42.074 14.1164 39.4017 24.8365Z"
        fill="#F5F7FA"
      />
      <circle cx="19.9993" cy="35.2395" r="14.0129" fill="#FF5500" />
      <circle cx="20.0006" cy="12.9938" r="7.00646" fill="#FF5500" />
      <foreignObject x="-3.84579" y="17.9838" width="50.965" height="25.5964">
        <div
          style={{
            backdropFilter: "blur(1.79px)",
            clipPath: "url(#bgblur_1_811_459_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <path
        data-figma-bg-blur-radius="3.58017"
        d="M41.4541 21.769C42.4485 21.5981 43.3574 22.3636 43.3574 23.3726V38.1919C43.3574 39.0906 42.6291 39.8197 41.7305 39.8198H1.54297C0.644209 39.8198 -0.0849609 39.0907 -0.0849609 38.1919V30.2817C-0.0849609 29.5388 0.41678 28.8963 1.12305 28.7085L1.2666 28.6772L41.4541 21.769Z"
        fill="url(#paint0_linear_811_459)"
        fillOpacity="0.1"
        stroke="white"
        strokeWidth="0.361633"
      />
    </g>
    <defs>
      <clipPath
        id="bgblur_1_811_459_clip_path"
        transform="translate(3.84579 -17.9838)"
      >
        <path d="M41.4541 21.769C42.4485 21.5981 43.3574 22.3636 43.3574 23.3726V38.1919C43.3574 39.0906 42.6291 39.8197 41.7305 39.8198H1.54297C0.644209 39.8198 -0.0849609 39.0907 -0.0849609 38.1919V30.2817C-0.0849609 29.5388 0.41678 28.8963 1.12305 28.7085L1.2666 28.6772L41.4541 21.769Z" />
      </clipPath>
      <linearGradient
        id="paint0_linear_811_459"
        x1="21.6364"
        y1="28.7575"
        x2="21.6364"
        y2="40.0002"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="#00AA47" />
      </linearGradient>
      <clipPath id="clip0_811_459">
        <rect width="40" height="40" rx="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
