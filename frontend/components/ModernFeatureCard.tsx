"use client";

interface ModernFeatureCardProps {
  icon?: string;
  iconType?: string;
  title: string;
  description: string;
  gradient: string;
  index?: number;
}

function FeatureIcon({ type }: { type?: string }) {
  switch (type) {
    case "instructor":
      return (
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      );
    case "book":
      return (
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h6v2H9V4zm12 16H3V4c0-.5.5-1 1-1h14c.5 0 1 .5 1 1v16z" />
        </svg>
      );
    case "globe":
      return (
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5h3V9h4v3h3l-5 5z" />
        </svg>
      );
    case "trophy":
      return (
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 5h-5V3H10v2H5c-1.1 0-2 .9-2 2v6c0 2.55 1.92 4.71 4.39 4.94.63 1.91 2.36 3.39 4.61 3.39s3.98-1.48 4.61-3.39C19.08 17.71 21 15.55 21 13V7c0-1.1-.9-2-2-2zm0 8c0 2.2-1.8 4-4 4h-4c-2.2 0-4-1.8-4-4V7h16v6z" />
        </svg>
      );
    case "chat":
      return (
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
        </svg>
      );
    case "chart":
      return (
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2V17zm4 0h-2V7h2V17zm4 0h-2v-4h2V17z" />
        </svg>
      );
    case "target":
      return (
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11 10.07 7.5 12 7.5s3.5 1.57 3.5 3.5z" />
        </svg>
      );
    case "heart":
      return (
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      );
    case "leaf":
      return (
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.92 7.02C17.45 4.18 14.97 2 12 2c-2.97 0-5.45 2.18-5.92 5.02C3.97 7.55 2 9.69 2 12.5 2 15.81 4.69 18.5 8 18.5h9c3.59 0 6.5-2.91 6.5-6.5 0-2.81-2.07-5.08-4.58-5.48z" />
        </svg>
      );
    case "strength":
      return (
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M10.5 1.5H9v6H7.5V1.5h-6v6H0V0h10.5v1.5zm3 4.5H12v6h-1.5v-6zm1.5-6h1.5v6H15v-6zm6 0h1.5v6h1.5V0h-3v1.5zm-6 13.5H9v6H7.5v-6h-6v6H0v-6h10.5v1.5zm3 4.5H12v6h-1.5v-6zm1.5-6h1.5v6H15v-6zm6 0h1.5v6h1.5v-6h-3v1.5z" />
        </svg>
      );
    case "handshake":
      return (
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
        </svg>
      );
    case "apple":
      return (
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z" />
        </svg>
      );
    case "running":
      return (
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9L8 19v-5h-2v-2h3V7h2v8.5h2V9h2v2.5V19l-1.89 1.38c-.5.37-1.21.37-1.71 0L9.89 19.48z" />
        </svg>
      );
    case "sleep":
      return (
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 5.23 11.08 5 12 5c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l.45.45c.9-.68 1.45-1.72 1.45-2.92zM3 5.5c0 .85.65 1.51 1.5 1.51H5V7c0 .55.45 1 1 1s1-.45 1-1V5h2c.55 0 1-.45 1-1s-.45-1-1-1H4.5C3.65 3 3 3.65 3 5.5z" />
        </svg>
      );
    case "meditation":
      return (
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2v5h-2v4h8v-4h-2v-5c0-1.1-.9-2-2-2z" />
        </svg>
      );
    case "brain":
      return (
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V9h2v4z" />
        </svg>
      );
    default:
      return null;
  }
}

export function ModernFeatureCard({
  icon,
  iconType,
  title,
  description,
  gradient,
  index = 0,
}: ModernFeatureCardProps) {
  return (
    <div
      className={`card-gradient-modern p-8 group cursor-pointer animate-slideUp`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        className={`icon-box mb-6 bg-gradient-to-br ${gradient} group-hover:scale-110 group-hover:shadow-glow-lg transition-all duration-300`}
      >
        {iconType ? <FeatureIcon type={iconType} /> : icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-text group-hover:text-gradient transition-all duration-300">
        {title}
      </h3>
      <p className="text-muted text-base leading-relaxed group-hover:text-text transition-colors duration-300">
        {description}
      </p>
      <div className="divider-line mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}
