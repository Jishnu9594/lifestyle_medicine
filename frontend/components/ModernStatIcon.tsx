"use client";

import { useState, useEffect } from "react";

interface StatProps {
  number: string;
  label: string;
  iconType?: "students" | "courses" | "rating";
  delay?: number;
}

function StatIcon({ type }: { type: "students" | "courses" | "rating" }) {
  if (type === "students") {
    return (
      <svg
        className="w-10 h-10 sm:w-12 sm:h-12 text-primary-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    );
  }
  if (type === "courses") {
    return (
      <svg
        className="w-10 h-10 sm:w-12 sm:h-12 text-primary-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82M12 3L1 9l11 6 9-4.91V19h2V9L12 3z" />
      </svg>
    );
  }
  return (
    <svg
      className="w-10 h-10 sm:w-12 sm:h-12 text-primary-600"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21 12 17.27z" />
    </svg>
  );
}

export function ModernStatIcon({
  number,
  label,
  iconType = "students",
  delay = 0,
}: StatProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`card-elevated p-6 sm:p-8 text-center group transition-all duration-700 ${
        isVisible ? "animate-slideUp" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50">
          <StatIcon type={iconType} />
        </div>
      </div>
      <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-2">
        {number}
      </p>
      <p className="text-muted font-semibold text-sm sm:text-base">{label}</p>
      <div className="divider-line mt-6 group-hover:shadow-glow"></div>
    </div>
  );
}
