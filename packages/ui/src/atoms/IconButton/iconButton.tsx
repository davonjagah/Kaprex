import { cn } from "../../utils/cn";

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
};

const sizeClasses = {
  sm: "h-10 w-10",
  md: "h-45 w-45",
  lg: "h-15 w-15",
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
  ...props
}: IconButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full transition-opacity duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
};
