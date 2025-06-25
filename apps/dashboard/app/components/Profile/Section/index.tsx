import { Typography } from "@repo/ui/atoms";

interface SectionProps {
  title: string;
  spanCols?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  title,
  spanCols,
  children,
}) => (
  <div
    className={`bg-white rounded-2xl shadow-sm p-6 ${
      spanCols ? `lg:col-span-${spanCols}` : ""
    }`}
  >
    <Typography
      variant="body"
      className="font-nohemi text-base text-gray-500 py-2 border-b-2 border-gray-200 mb-5"
    >
      {title}
    </Typography>
    {children}
  </div>
);
