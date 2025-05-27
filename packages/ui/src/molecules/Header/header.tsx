import React from "react";
import { BrandIcon } from "../../icons";
import { Button, Typography } from "../../atoms";
import { IconButton } from "../../atoms/IconButton/iconButton";
import Link from "next/link";

export interface IHeaderProps {
  title?: string;
  onButtonClick?: () => void;
  profile?: boolean;
  buttonText?: string;
  button?: React.ReactNode;
  className?: string;
}

export const Header: React.FC<IHeaderProps> = ({
  title = "",
  onButtonClick,
  profile = false,
  buttonText = "Connect Wallet",
  button,
  className,
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
          <Typography variant="body" className="font-nohemi text-gray-500">
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

        {profile && (
          <IconButton
            variant="secondary"
            size="md"
            className="font-nohemi text-xl"
          >
            EI
          </IconButton>
        )}
      </div>
    </nav>
  );
};
