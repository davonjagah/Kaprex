import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { cn } from "../../utils/cn";
import { Button } from "../Button/button";

const WalletModalButton = dynamic(
  () =>
    import("@solana/wallet-adapter-react-ui").then(
      (mod) => mod.WalletModalButton,
    ),
  { ssr: false },
);

export interface WalletButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  className?: string;
  connecting?: boolean;
  connected?: boolean;
  handleDisconnect?: () => void;
  address?: string;
}

export const WalletButton = ({
  children,
  variant = "primary",
  size = "md",
  className,
  connecting,
  connected,
  handleDisconnect,
  address,
  ...props
}: WalletButtonProps) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted || connecting) {
    return (
      <Button variant="primary" size="sm" className="font-medium" disabled>
        Connecting...
      </Button>
    );
  }

  if (connected) {
    return (
      <Button
        variant="primary"
        size="sm"
        className="font-medium"
        onClick={handleDisconnect}
      >
        Disconnect {address}
      </Button>
    );
  }

  return (
    <WalletModalButton
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
      {...props}
    >
      {children}
    </WalletModalButton>
  );
};
