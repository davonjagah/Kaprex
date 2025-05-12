import React from "react";
import { cn } from "../../utils/cn";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  isLoading,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 font-sans px-6 py-2",
        {
          "bg-primary text-white hover:opacity-90 focus:ring-primary-light":
            variant === "primary",
          "bg-secondary-dark text-white hover:opacity-90 focus:ring-gray-400":
            variant === "secondary",
          "border border-primary text-primary focus:ring-primary hover:opacity-90":
            variant === "outline",
          "bg-transparent text-primary hover:underline focus:ring-transparent p-0":
            variant === "text",
        },
        {
          "h-10 text-base": size === "sm",
          "h-12 text-base": size === "md",
          "h-15 text-lg": size === "lg",
        },
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
      ) : (
        children
      )}
    </button>
  );
};
