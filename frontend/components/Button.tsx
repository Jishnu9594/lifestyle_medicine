"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-2xl hover:shadow-primary-500/40 hover:scale-105",
    secondary:
      "border-2 border-primary-500 text-primary-500 hover:bg-primary-50 hover:shadow-lg hover:border-primary-600",
    ghost: "text-primary-600 hover:bg-primary-50 hover:shadow-md",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
