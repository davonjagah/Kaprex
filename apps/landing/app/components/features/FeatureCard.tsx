import { Typography } from "@repo/ui/atoms";
import Image from "next/image";
import React, { CSSProperties } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  graphicSrc: string;
  graphicAlt: string;
  className?: string;
  style?: CSSProperties | undefined;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  graphicSrc,
  graphicAlt,
  className,
  style,
}) => {
  return (
    <div
      style={style}
      className={`relative bg-black py-8 px-5 rounded-xl flex flex-col justify-between border-[0.5px] border-b-0 border-opacity-30 border-white ${className}`}
    >
      <div>
        <Typography variant="h3" className="font-normal mb-2 text-center">
          {title}
        </Typography>
        <Typography variant="body" className="text-gray-300">
          {description}
        </Typography>
      </div>
      {graphicSrc && (
        <div className="mt-6">
          <Image
            src={graphicSrc}
            alt={graphicAlt}
            width={200}
            height={150}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      )}
      <div
        className="absolute w-[100.5%] bottom-0 h-full left-[-0.25%] rounded-xl"
        style={{
          background:
            "linear-gradient(176deg, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0.9) 100%)",
        }}
      ></div>
    </div>
  );
};
