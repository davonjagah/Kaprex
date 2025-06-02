import { type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined";
  padding?: "none" | "sm" | "md" | "lg";
}

export function Card({
  children,
  className,
  variant = "default",
  padding = "md",
  ...props
}: CardProps) {
  const baseStyles = "rounded-xl transition-all duration-200";

  const variants = {
    default: "bg-gray-800/50",
    elevated: "bg-gray-800/50 shadow-lg hover:shadow-xl",
    outlined: "bg-transparent border-2 border-gray-800",
  };

  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={twMerge(
        baseStyles,
        variants[variant],
        paddings[padding],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
