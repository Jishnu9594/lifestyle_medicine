"use client";

import { useState, useEffect } from "react";

interface StatProps {
  number: string;
  label: string;
  iconType?: "students" | "courses" | "rating";
  delay?: number;
}

function StatIcon({ type }: { type?: string }) {
  switch (type) {
    case "students":
      return (
        <svg
          className="w-12 h-12 text-primary-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      );
    case "courses":
      return (
        <svg
          className="w-12 h-12 text-primary-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19H4v2h16v-2h-4v-5.5l8 2.5z" />
        </svg>
      );
    case "rating":
      return (
        <svg
          className="w-12 h-12 text-primary-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21 12 17.27z" />
        </svg>
      );
    default:
      return null;
  }
}

export function ModernStat({ number, label, iconType, delay = 0 }: StatProps) {
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
      {iconType && (
        <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <StatIcon type={iconType} />
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
