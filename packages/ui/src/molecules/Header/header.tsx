import React from "react";
import { BrandIcon } from "../../icons";
import { Button, Typography } from "../../atoms";
import { IconButton } from "../../atoms/IconButton/iconButton";

export interface IHeaderProps {
  title?: string;
  onButtonClick: () => void;
  profile?: boolean;
  LinkComponent?: React.ComponentType<{ children: React.ReactNode }>;
}

export const Header: React.FC<IHeaderProps> = ({
  title = "",
  onButtonClick,
  profile = false,
  LinkComponent,
}) => {
  const Wrapper = LinkComponent ?? React.Fragment;

  return (
    <div className="flex items-center justify-between px-16 pt-8 pb-6 shadow-subtle">
      <div className="flex items-center space-x-14">
        <Wrapper>
          <BrandIcon className="cursor-pointer" />
        </Wrapper>

        {title && (
          <Typography variant="body" className="font-nohemi text-gray-500">
            {title}
          </Typography>
        )}
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="primary" size="sm" onClick={onButtonClick}>
          Connect Wallet
        </Button>

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
    </div>
  );
};
