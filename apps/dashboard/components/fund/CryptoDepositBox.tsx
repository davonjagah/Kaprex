import React, { useState } from "react";
import { Button, Typography } from "@repo/ui/atoms";
import { CopyIcon, LifiLaunchIcon } from "@repo/ui/icons";
import QRCode from "react-qr-code";
import { useAuth } from "../../contexts/AuthContext";

interface CryptoDepositBoxProps {
  address: string;
}

const CryptoDepositBox: React.FC<CryptoDepositBoxProps> = ({ address }) => {
  const [copied, setCopied] = useState(false);
  const { accounts } = useAuth();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(accounts?.walletAddress ?? "");
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="bg-[#F7F7FA] rounded-2xl px-6 py-4 flex flex-col gap-2 items-center w-full">
      <div className="flex flex-col w-full gap-2">
        <Typography variant="body" className="font-nohemi text-xs">
          Transfer to:
        </Typography>
        <div className="flex items-center gap-4">
          <div className="bg-white rounded-lg p-2 flex items-center justify-center">
            <QRCode value={address} size={80} />
          </div>
          <div className="flex-1 min-w-0">
            <Typography
              variant="body"
              className="font-nohemi text-gray-500 mb-1 text-xs"
            >
              Address
            </Typography>
            <div className="flex items-center gap-6 justify-between">
              <Typography variant="body" className=" break-all text-base">
                {accounts?.walletAddress}
              </Typography>
              <Button
                variant="text"
                size="sm"
                className="rounded-full p-2 text-black h-8 w-12"
                onClick={handleCopy}
              >
                {copied ? "Copied!" : <CopyIcon className="text-white" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <Typography variant="body" className="text-[#B0B0C3] font-nohemi">
          OR
        </Typography>
        <a href="/transactions/lifi" target="_blank">
          <LifiLaunchIcon />
        </a>
      </div>
    </div>
  );
};

export default CryptoDepositBox;
