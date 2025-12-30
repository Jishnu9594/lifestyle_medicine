"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  [key: string]: any;
}

export function Container({
  children,
  className,
  size = "lg",
  ...props
}: ContainerProps) {
  const sizes = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
  };

  return (
    <div
      className={clsx("mx-auto px-4 sm:px-6 lg:px-8", sizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
