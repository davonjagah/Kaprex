import { Typography, Button } from "@repo/ui/atoms";
import { WarningIcon } from "@repo/ui/icons";
import React from "react";

const KYCBanner = () => {
  return (
    <div className="flex items-center bg-primary rounded-full px-4 py-3 mb-4 w-full max-w-full shadow flex-row gap-3 sm:px-6 sm:py-3">
      <WarningIcon className="text-white flex-shrink-0 h-6 w-6" />
      <div className="flex flex-col lg:flex-row lg:gap-1 flex-1 min-w-0">
        <Typography
          variant="body"
          className="text-white font-semibold truncate text-xs lg:text-sm font-nohemi"
        >
          Ready to explore Kaprex?
        </Typography>
        <Typography
          variant="body"
          className="text-orange-100 truncate text-xs lg:text-sm font-nohemi"
        >
          Please finalize your KYC process to enjoy secure and compliant access
          to all our features.
        </Typography>
      </div>
      <Button
        variant="text"
        className="text-white text-xs lg:text-sm"
        size="sm"
      >
        Verify <span className="hidden lg:inline">&nbsp;Identity &gt;</span>
      </Button>
    </div>
  );
};

export default KYCBanner;
