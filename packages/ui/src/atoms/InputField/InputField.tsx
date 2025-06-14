"use client";

import { useState, InputHTMLAttributes } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  labelClassName?: string;
}

export const InputField = ({
  label,
  type = "text",
  id,
  name,
  placeholder,
  error,
  className = "",
  labelClassName = "",
  ...props
}: InputFieldProps) => {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && show ? "text" : type;

  return (
    <div className="w-full">
      <label
        htmlFor={id || name}
        className={`block text-base font-medium font-nohemi text-[#303344] mb-2 ${labelClassName}`}
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id || name}
          name={name}
          type={inputType}
          placeholder={placeholder}
          className={`w-full rounded-full border-2 border-transparent focus:border-[#9EB1C7] bg-[#F4F7FB] px-6 py-3  font-nohemi text-base placeholder-[#A0A3BD] focus:outline-none focus:ring-0 ${className}`}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute inset-y-0 right-4 flex items-center text-gray-400"
            tabIndex={-1}
          >
            {show ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};
