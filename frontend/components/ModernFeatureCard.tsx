"use client";

interface ModernFeatureCardProps {
  icon: string;
  title: string;
  description: string;
  gradient: string;
  index?: number;
}

export function ModernFeatureCard({
  icon,
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
        {icon}
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
