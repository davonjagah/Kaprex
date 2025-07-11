import { cva, type VariantProps } from "class-variance-authority";
import { JSX } from "react";
import { cn } from "../../utils/cn";

const typography = cva("", {
  variants: {
    variant: {
      h1: "text-4xl font-nohemi font-bold tracking-tight",
      h2: "text-3xl font-nohemi font-medium tracking-tight",
      h3: "text-2xl font-nohemi font-medium tracking-tight",
      h4: "text-xl font-nohemi font-medium tracking-tight",
      h5: "text-lg font-nohemi font-semibold tracking-tight",
      h6: "text-base font-nohemi font-semibold tracking-tight",
      body: "font-sans text-base",
      lead: "font-sans text-lg text-gray-700",
      muted: "font-sans text-sm text-gray-500",
      small: "font-sans text-xs text-gray-500",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

type TypographyVariants = VariantProps<typeof typography>;

type TypographyProps = TypographyVariants & {
  children: React.ReactNode;
  variant: NonNullable<TypographyVariants["variant"]>;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export const Typography = ({
  variant = "body",
  className,
  children,
  as,
}: TypographyProps) => {
  // Map variants to appropriate HTML tags
  const tagMap: Record<string, keyof JSX.IntrinsicElements> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    body: "p",
    lead: "p",
    muted: "p",
    small: "p",
  };

  const Tag = as || tagMap[variant] || "p";

  return (
    <Tag className={cn(typography({ variant }), className)}>{children}</Tag>
  );
};
