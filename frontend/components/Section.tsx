"use client";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  spacing?: "sm" | "md" | "lg";
  [key: string]: any;
}

export function Section({
  children,
  className = "",
  spacing = "lg",
  ...props
}: SectionProps) {
  const spacingMap = {
    sm: "py-8 sm:py-12",
    md: "py-12 sm:py-16",
    lg: "py-16 sm:py-20 lg:py-24",
  };

  return (
    <section className={`${spacingMap[spacing]} ${className}`} {...props}>
      {children}
    </section>
  );
}
