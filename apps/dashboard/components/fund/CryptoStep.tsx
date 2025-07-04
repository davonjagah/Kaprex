"use client";

import { Typography } from "@repo/ui/atoms";
import { Dropdown } from "@repo/ui/molecules";
import CryptoDepositBox from "./CryptoDepositBox";

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
      <div className="max-w-[498px]">
        <div className="mb-2">
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
        <Typography
          variant="body"
          className="bg-[#FFF1EB] p-2.5 rounded-xl mb-6"
        >
          <span className="text-xs font-nohemi">Allowed token:</span>
          <span className="font-bold ml-2 font-sans text-sm">
            EURC USDC Solana
          </span>
        </Typography>

        <Typography variant="body" className="font-nohemi mb-2">
          Deposit Address
        </Typography>
        <CryptoDepositBox address="0x1234567890123456789012345678901234567890" />
      </div>
    </>
  );
}
