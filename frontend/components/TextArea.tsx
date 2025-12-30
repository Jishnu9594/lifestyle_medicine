"use client";

import { useController, Control } from "react-hook-form";
import clsx from "clsx";

interface TextAreaProps {
  name: string;
  control: Control<any>;
  label: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  className?: string;
  [key: string]: any;
}

export function TextArea({
  name,
  control,
  label,
  placeholder,
  required = false,
  rows = 4,
  className,
  ...props
}: TextAreaProps) {
  const { field, fieldState } = useController({
    name,
    control,
    rules: { required },
  });

  return (
    <div className={clsx("mb-4", className)}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-text mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        id={name}
        placeholder={placeholder}
        rows={rows}
        {...field}
        {...props}
        className={clsx(
          "w-full px-4 py-2 rounded-lg border border-gray-300 text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none",
          fieldState.error && "border-red-500 focus:ring-red-500"
        )}
      />
      {fieldState.error && (
        <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>
      )}
    </div>
  );
}
