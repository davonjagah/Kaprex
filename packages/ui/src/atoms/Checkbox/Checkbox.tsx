import React, { forwardRef, useId } from "react";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  labelClassName?: string;
  wrapperClassName?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      label,
      error,
      className = "",
      labelClassName = "",
      wrapperClassName = "",
      ...props
    },
    ref,
  ) => {
    const autoId = useId();
    const inputId = id || `checkbox-${autoId}`;
    const errorId = error ? `${inputId}-error` : undefined;

    return (
      <div className={`flex flex-col ${wrapperClassName}`}>
        <div className="flex items-center gap-2">
          <input
            id={inputId}
            type="checkbox"
            ref={ref}
            className={`accent-primary w-6 h-6 rounded focus:outline-none ${className}`}
            aria-invalid={!!error}
            aria-describedby={errorId}
            {...props}
          />
          {label && (
            <label
              htmlFor={inputId}
              className={`text-sm font-nohemi text-[#23262F] select-none ${labelClassName}`}
            >
              {label}
            </label>
          )}
        </div>
        {error && (
          <span id={errorId} className="mt-1 text-xs text-red-600">
            {error}
          </span>
        )}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";
