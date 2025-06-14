import React from "react";
import { Typography } from "@repo/ui/atoms";

export interface FormHeaderProps {
  title?: string;
  subtitle?: string;
  email?: string;
}

export const FormHeader: React.FC<FormHeaderProps> = ({
  title,
  subtitle,
  email,
}) => (
  <>
    {title && (
      <Typography
        variant="h2"
        className="font-nohemi text-3xl md:text-4xl mb-2.5 font-normal mt-8"
      >
        {title}
      </Typography>
    )}
    {subtitle && (
      <Typography
        variant="body"
        className="font-nohemi text-xl mb-7 font-normal text-[#6F6C90]"
      >
        {subtitle}
        {email && (
          <>
            {" "}
            <span className="font-bold text-primary">{email}</span>
          </>
        )}
      </Typography>
    )}
  </>
);
