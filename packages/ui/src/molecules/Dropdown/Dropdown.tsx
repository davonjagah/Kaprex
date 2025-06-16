"use client";

import { ChevronDown } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../utils/cn";

export interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  renderOption?: (option: DropdownOption, selected: boolean) => React.ReactNode;
  labelClassName?: string;
  dropdownClassName?: string;
  optionsClassName?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select...",
  className = "",
  renderOption,
  labelClassName = "",
  dropdownClassName = "",
  optionsClassName = "",
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const selected = options.find((o) => o.value === value);

  return (
    <div className={cn("relative", className)} ref={ref}>
      <button
        className={cn(
          "text-gray-400 flex items-center gap-1 select-none px-2 py-1 rounded hover:bg-gray-50",
          labelClassName,
        )}
        onClick={() => setOpen((o) => !o)}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {selected ? selected.label : placeholder}
        <span className="ml-1">
          <ChevronDown />
        </span>
      </button>
      {open && (
        <div
          className={cn(
            "absolute right-0 mt-2 w-32 bg-white border rounded shadow z-10",
            dropdownClassName,
          )}
        >
          {options.map((option) => (
            <button
              key={option.value}
              className={cn(
                "block w-full text-left px-4 py-2 text-sm hover:bg-gray-100",
                value === option.value ? "font-semibold text-primary" : "",
                optionsClassName,
              )}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              type="button"
              role="option"
              aria-selected={value === option.value}
            >
              {renderOption
                ? renderOption(option, value === option.value)
                : option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
