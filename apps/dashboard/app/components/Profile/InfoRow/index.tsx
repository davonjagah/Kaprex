// components/InfoRow.tsx
import Link from "next/link";
import { Typography } from "@repo/ui/atoms";

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
      <Typography variant="body" className="font-nohemi text-base">
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
