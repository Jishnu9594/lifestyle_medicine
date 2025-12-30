"use client";

import { useState, useCallback } from "react";

interface HeroImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

export function HeroImage({ src, alt, fallbackSrc }: HeroImageProps) {
  const [imageSrc, setImageSrc] = useState(src);

  const handleError = useCallback(() => {
    if (fallbackSrc && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
    } else {
      // Last resort fallback
      setImageSrc(
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=600&fit=crop&q=80"
      );
    }
  }, [fallbackSrc, imageSrc]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className="relative rounded-3xl shadow-2xl w-full h-auto object-cover border-2 border-primary-100 animate-imageFloat hover:animate-imageZoom"
      loading="eager"
      onError={handleError}
    />
  );
}
