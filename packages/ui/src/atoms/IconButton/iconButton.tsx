/* eslint-disable react/prop-types */
import { cn } from "../../utils/cn";
import React from "react";

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
  label?: string;
  labelMobile?: string;
  labelClassName?: string;
  labelMobileClassName?: string;
  labelDesktopClassName?: string;
  isVisible?: boolean;
  onToggle?: (isVisible: boolean) => void;
};

const sizeClasses = {
  sm: "h-10 w-10",
  md: "h-10 w-10 md:h-45 md:w-45",
  lg: "h-10 w-10 md:h-15 md:w-15",
};

const variantClasses = {
  primary: "bg-primary text-white hover:opacity-90 focus:ring-primary-light",
  secondary:
    "bg-secondary-dark text-white hover:opacity-90 focus:ring-gray-400",
  outline:
    "border border-primary text-primary focus:ring-primary hover:opacity-90",
};

export const IconButton = ({
  size = "md",
  variant = "primary",
  className,
  label,
  labelMobile,
  labelClassName,
  labelMobileClassName,
  labelDesktopClassName,
  isVisible = true,
  onToggle,
  children,
  onClick,
  ...props
}: IconButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onToggle) {
      onToggle(!isVisible);
    }
    onClick?.(e);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-full transition-opacity duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2",
          sizeClasses[size],
          variantClasses[variant],
          className,
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
      {label && (
        <span
          className={cn(
            "mt-4 text-sm md:text-base text-center text-[#201E2D] font-medium select-none font-sans",
            labelClassName,
          )}
        >
          <span className={cn("md:hidden", labelMobileClassName)}>
            {labelMobile || label}
          </span>
          <span className={cn("hidden md:inline", labelDesktopClassName)}>
            {label}
          </span>
        </span>
      )}
    </div>
  );
};
