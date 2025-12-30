"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  [key: string]: any;
}

export function Card({
  children,
  className,
  hover = false,
  gradient = false,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl p-6 sm:p-8 shadow-sm transition-all duration-300",
        gradient
          ? "border border-primary-100 bg-gradient-to-br from-primary-50 to-white hover:shadow-xl hover:-translate-y-1"
          : "border border-gray-200 bg-white hover:shadow-2xl hover:-translate-y-2",
        hover && "cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
