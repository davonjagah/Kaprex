"use client";

import React from "react";
import { Button, Typography } from "@repo/ui/atoms";
import Link from "next/link";

export interface FeatureCardProps {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  icon: React.ReactNode;
  className?: string;
  isComingSoon?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  linkText,
  linkUrl,
  icon,
  className,
  isComingSoon,
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row items-center justify-between gap-6 ${className}`}
    >
      <div className="w-full md:w-1/2">
        {isComingSoon && (
          <div className="flex items-center justify-center h-4 w-20 mb-1 bg-primary">
            <Typography
              variant="body"
              className=" text-white text-[8.1px] font-semibold"
            >
              COMING SOON
            </Typography>
          </div>
        )}
        <Typography variant="h2" className="mb-3 font-normal">
          {title}
        </Typography>
        <Typography variant="body" className="mb-3">
          {description}
        </Typography>
        <Link href={linkUrl}>
          <Button variant="text" className="font-medium text-base">
            {linkText}
          </Button>
        </Link>
      </div>
      {icon}
    </div>
  );
};

export default FeatureCard;
