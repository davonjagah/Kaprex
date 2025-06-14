import React, { useRef, useEffect } from "react";

export interface OtpInputProps {
  length?: number;
  value: string[];
  onChange: (idx: number, val: string) => void;
  className?: string;
}

export const OtpInput: React.FC<OtpInputProps> = ({
  length = 6,
  value,
  onChange,
  className,
}) => {
  const refs = useRef<Array<HTMLInputElement | null>>(Array(length).fill(null));

  // auto-focus first empty on mount
  useEffect(() => {
    const firstEmpty = value.findIndex((v) => !v);
    refs.current[firstEmpty === -1 ? length - 1 : firstEmpty]?.focus();
  }, [value, length]);

  return (
    <div className={`flex gap-2 justify-center mb-6 ${className ?? ""}`}>
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => {
            if (el) {
              refs.current[i] = el;
            }
          }}
          type="text"
          maxLength={1}
          value={value[i]}
          onChange={(e) => onChange(i, e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Backspace" && !value[i] && i > 0) {
              refs.current[i - 1]?.focus();
            }
          }}
          className="w-full h-12 md:w-[85px] md:h-[93px] text-center text-3xl md:text-4xl font-nohemi border-1 rounded-lg sm:rounded-xl md:rounded-2xl bg-[#F4F7FB] focus:border-primary transition-all otp-cell"
        />
      ))}
    </div>
  );
};
