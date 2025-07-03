import React from "react";
import { cn } from "../../utils/cn";

interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  children: React.ReactNode;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  error,
  children,
  className = "",
  ...props
}) => {
  return (
    <div>
      {label && (
        <label className="block font-nohemi text-base mb-4">{label}</label>
      )}
      <select
        className={cn(
          "w-full rounded-full bg-[#F5F5F7] px-6 py-4 text-base font-sans outline-none appearance-none pr-12 text-[#303344]",
          className,
        )}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
          backgroundPosition: "right 1rem center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "1.5em 1.5em",
        }}
        {...props}
      >
        {children}
      </select>
      {error && <p className="text-red-500 text-sm mt-1 font-sans">{error}</p>}
    </div>
  );
};
