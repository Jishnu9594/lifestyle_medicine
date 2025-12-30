"use client";

import { useState, useCallback } from "react";

interface CourseImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

export function CourseImage({ src, alt, fallbackSrc }: CourseImageProps) {
  const [imageSrc, setImageSrc] = useState(src);

  const handleError = useCallback(() => {
    if (fallbackSrc && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
    } else {
      setImageSrc(
        "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=500&h=300&fit=crop&q=80"
      );
    }
  }, [fallbackSrc, imageSrc]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 animate-imageFloat"
      loading="lazy"
      onError={handleError}
    />
  );
}
