import React from "react";
import { BrandIcon } from "../../icons";
import { Button, Typography } from "../../atoms";
import Link from "next/link";

export interface IHeaderProps {
  title?: string;
  onButtonClick?: () => void;
  profile?: boolean;
  buttonText?: string;
  button?: React.ReactNode;
  className?: string;
  container?: React.ReactNode;
}

export const Header: React.FC<IHeaderProps> = ({
  title = "",
  onButtonClick,
  buttonText = "Connect Wallet",
  button,
  className,
  container,
}) => {
  return (
    <nav
      className={`flex items-center justify-between px-4 md:px-16 pt-8 pb-6 shadow-subtle ${className}`}
    >
      <div className="flex items-center space-x-14">
        <Link href="/">
          <BrandIcon className="cursor-pointer w-24 md:w-full" />
        </Link>

        {title && (
          <Typography
            variant="body"
            className="font-nohemi text-gray-500 hidden md:block"
          >
            {title}
          </Typography>
        )}
      </div>

      <div className="flex items-center space-x-4">
        {button ?? (
          <Button
            variant="primary"
            size="sm"
            onClick={onButtonClick}
            className="font-medium"
          >
            {buttonText}
          </Button>
        )}

        {container}
      </div>
    </nav>
  );
};
