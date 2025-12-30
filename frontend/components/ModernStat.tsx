"use client";

import { useState, useEffect } from "react";

interface StatProps {
  number: string;
  label: string;
  icon?: string;
  delay?: number;
}

export function ModernStat({ number, label, icon, delay = 0 }: StatProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`card-elevated p-8 text-center group transition-all duration-700 ${
        isVisible ? "animate-slideUp" : "opacity-0 translate-y-10"
      }`}
    >
      {icon && (
        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}
      <p className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
        {number}
      </p>
      <p className="text-muted font-semibold text-lg">{label}</p>
      <div className="divider-line mt-6 group-hover:shadow-glow"></div>
    </div>
  );
}
