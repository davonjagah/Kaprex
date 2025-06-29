import { Typography } from "@repo/ui/atoms";
import { ProfileIcon } from "@repo/ui/icons";
import { VerificationBadge } from "../VerificationBadge";

export interface UserInfoCardProps {
  name: string;
  accountType: string;
  verificationStatus: "verified" | "Not verified" | "Under Verification";
}

export const UserInfoCard: React.FC<UserInfoCardProps> = ({
  name,
  accountType,
  verificationStatus,
}) => (
  <div className="bg-white rounded-2xl shadow-sm py-5 px-8 flex items-center space-x-6">
    <ProfileIcon className="w-24 h-24 text-primary" />
    <div>
      <Typography variant="body" className="text-gray-500 font-nohemi text-xs">
        {accountType}
      </Typography>
      <Typography
        variant="h2"
        className="font-normal mt-1 text-2xl md:text-3xl"
      >
        {name}
      </Typography>
      <VerificationBadge
        verificationStatus={verificationStatus}
        showVerifyButton={true}
      />
    </div>
  </div>
);
