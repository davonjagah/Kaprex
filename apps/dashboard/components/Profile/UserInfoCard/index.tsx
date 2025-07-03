import { Typography } from "@repo/ui/atoms";
import { ProfileIcon } from "@repo/ui/icons";
import { VerificationBadge } from "../VerificationBadge";
import { UserProfile } from "../../../types/api/user";
import { cn } from "@repo/ui/utils";

export interface UserInfoCardProps {
  name: UserProfile["name"];
  accountType: UserProfile["customerType"];
  verificationStatus: "verified" | "Not verified" | "Under Verification";
  isBusinessSwitched: boolean;
}

export const UserInfoCard: React.FC<UserInfoCardProps> = ({
  name,
  accountType,
  verificationStatus,
  isBusinessSwitched,
}) => (
  <div className="bg-white rounded-2xl shadow-sm py-5 px-8 flex items-center space-x-6">
    <ProfileIcon
      className={cn(
        "w-24 h-24 text-primary",
        isBusinessSwitched && "text-black",
      )}
    />
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
