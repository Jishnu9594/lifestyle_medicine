"use client";

import {
  useForm,
  UseFormReturn,
  FieldValues,
  SubmitHandler,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema } from "zod";
import { Button } from "./Button";

interface FormProps<T extends FieldValues> {
  schema: ZodSchema;
  onSubmit: SubmitHandler<T>;
  children: (form: UseFormReturn<T>) => React.ReactNode;
  submitLabel?: string;
  isLoading?: boolean;
  className?: string;
}

export function Form<T extends FieldValues>({
  schema,
  onSubmit,
  children,
  submitLabel = "Submit",
  isLoading = false,
  className = "",
}: FormProps<T>) {
  const form = useForm<T>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
      {children(form)}
      <Button
        type="submit"
        disabled={isLoading || !form.formState.isValid}
        className="mt-6 w-full"
      >
        {isLoading ? "Submitting..." : submitLabel}
      </Button>
    </form>
  );
}
