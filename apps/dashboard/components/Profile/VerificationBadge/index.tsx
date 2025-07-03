import { Typography } from "@repo/ui/atoms";
import { BadgeCheck, Ban, Loader } from "lucide-react";
import Link from "next/link";

export const VerificationBadge: React.FC<{
  verificationStatus?: "verified" | "Not verified" | "Under Verification";
  showVerifyButton?: boolean;
}> = ({ verificationStatus, showVerifyButton = false }) => (
  <div className="flex flex-col mt-4 md:mt-0 md:flex-row md:items-center md:gap-4">
    <div
      className={`flex items-end space-x-1 ${
        verificationStatus === "verified" ? "text-green-600" : "text-black"
      }`}
    >
      {verificationStatus === "verified" && <BadgeCheck size={18} />}
      {verificationStatus === "Not verified" && (
        <Ban className="text-red-500" size={18} />
      )}
      {verificationStatus === "Under Verification" && <Loader size={18} />}
      <Typography variant="body" className="font-nohemi text-xs">
        {verificationStatus}
      </Typography>
    </div>
    {showVerifyButton &&
      (verificationStatus === "Not verified" ||
        verificationStatus === undefined) && (
        <Link
          href="/profile/verification"
          className="font-sans font-medium text-base text-primary block md:inline"
        >
          Verify Now &gt;
        </Link>
      )}
  </div>
);
