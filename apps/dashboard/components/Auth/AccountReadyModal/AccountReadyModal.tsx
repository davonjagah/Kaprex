import React from "react";
import { Modal } from "@repo/ui/molecules";
import { Button, Typography } from "@repo/ui/atoms";
import { WalletIcon } from "@repo/ui/icons";
import Link from "next/link";

export interface AccountReadyModalProps {
  open: boolean;
}

export const AccountReadyModal: React.FC<AccountReadyModalProps> = ({
  open,
}) => (
  <Modal open={open}>
    <div className="flex flex-col items-center text-center p-8 md:py-[68px] md:px-[88px] justify-center mx-auto">
      <WalletIcon className="w-16 h-16 text-[#FF5500] mb-6" />
      <Typography
        variant="h2"
        className="text-3xl md:text-4xl font-nohemi font-normal mb-4"
      >
        Your account
        <br />
        is ready!
      </Typography>
      <Typography variant="body" className="text-[#6F6C90] font-nohemi mb-8">
        Congratulations, your account has been created
      </Typography>
      <Link href="/">
        <Button className="bg-[#232333] font-nohemi text-base">
          Proceed to Dashboard
        </Button>
      </Link>
    </div>
  </Modal>
);
