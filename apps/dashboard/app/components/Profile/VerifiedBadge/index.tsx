import { Typography } from "@repo/ui/atoms";
import { BadgeCheck } from "lucide-react";

export const VerifiedBadge: React.FC = () => (
  <div className="flex items-end space-x-1 text-green-600 mt-2">
    <BadgeCheck size={18} />
    <Typography variant="body" className="font-nohemi text-xs text-green-600">
      Verified
    </Typography>
  </div>
);
