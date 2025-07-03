import Link from "next/link";
import { Typography } from "@repo/ui/atoms";
import { cn } from "@repo/ui/utils";

export interface InfoRowProps {
  label: string;
  value: string;
  action?: string;
}

export const InfoRow: React.FC<InfoRowProps> = ({ label, value, action }) => (
  <div className="flex justify-between items-start">
    <Typography variant="body" className="text-gray-500 font-nohemi text-xs">
      {label}
    </Typography>
    <div className="text-right">
      <Typography
        variant="body"
        className={cn("font-nohemi text-base", {
          "text-gray-500": value === "Not Verified",
        })}
      >
        {value}
      </Typography>
      {action && (
        <Link
          href={action}
          className="font-sans font-medium text-primary text-sm text-right"
        >
          {action}
        </Link>
      )}
    </div>
  </div>
);
