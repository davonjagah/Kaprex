"use client";

import { Typography } from "@repo/ui/atoms";
import { Dropdown } from "@repo/ui/molecules";

const blockchains = [{ label: "Solana", value: "solana" }];

interface CryptoStepProps {
  selectedBlockchain: string;
  onBlockchainChange: (blockchain: string) => void;
}

export default function CryptoStep({
  selectedBlockchain,
  onBlockchainChange,
}: CryptoStepProps) {
  return (
    <>
      <Typography variant="body" className="font-nohemi mb-4">
        Select Blockchain
      </Typography>
      <div className="mb-8">
        <Dropdown
          options={blockchains}
          value={selectedBlockchain}
          onChange={onBlockchainChange}
          className="w-full"
          disabled
          labelClassName="w-full rounded-full border border-gray-300 py-4 pl-6 pr-10 text-lg font-nohemi text-black bg-white flex items-center justify-between"
          dropdownClassName="w-full"
        />
      </div>
      <div className="text-gray-400 text-base font-nohemi">
        Enter your wallet address
      </div>
    </>
  );
}
