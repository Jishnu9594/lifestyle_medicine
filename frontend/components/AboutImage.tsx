"use client";

import { useState, useCallback } from "react";

interface AboutImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
}

export function AboutImage({
  src,
  alt,
  fallbackSrc,
  className = "",
}: AboutImageProps) {
  const [imageSrc, setImageSrc] = useState(src);

  const handleError = useCallback(() => {
    if (fallbackSrc && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
    } else {
      setImageSrc(
        "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=500&h=400&fit=crop&q=80"
      );
    }
  }, [fallbackSrc, imageSrc]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={handleError}
    />
  );
}
