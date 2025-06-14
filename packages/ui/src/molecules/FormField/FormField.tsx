import React from "react";
import {
  Controller,
  Control,
  FieldValues,
  Path,
  RegisterOptions,
  ControllerRenderProps,
  ControllerFieldState,
} from "react-hook-form";
import { InputField } from "../../atoms";

interface FormFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  labelClassName?: string;
  rules?: RegisterOptions<T, Path<T>>;
  inputProps?: Omit<React.InputHTMLAttributes<HTMLInputElement>, "name">;
  children?: (
    field: ControllerRenderProps<T, Path<T>>,
    fieldState: ControllerFieldState,
  ) => React.ReactNode;
}

export function FormField<T extends FieldValues>({
  name,
  control,
  label,
  type = "text",
  placeholder,
  required = false,
  className,
  labelClassName,
  rules,
  inputProps,
  children,
}: FormFieldProps<T>) {
  const safeRules = rules
    ? (rules as Omit<RegisterOptions<T, Path<T>>, "deps">)
    : undefined;

  return (
    <Controller
      name={name}
      control={control}
      rules={safeRules}
      render={({ field, fieldState }) =>
        children ? (
          <>{children(field, fieldState)}</>
        ) : (
          <InputField
            id={field.name}
            {...field}
            label={label ?? ""}
            type={type}
            placeholder={placeholder}
            required={required}
            className={className}
            labelClassName={labelClassName}
            error={fieldState.error?.message}
            {...inputProps}
          />
        )
      }
    />
  );
}
