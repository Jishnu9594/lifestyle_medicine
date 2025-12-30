"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  objectFit?: "cover" | "contain" | "fill" | "scale-down";
  objectPosition?: string;
  animation?: "zoom" | "float" | "parallax" | "none";
}

export function ImageWithFallback({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  fill = false,
  objectFit = "cover",
  objectPosition = "center",
  animation = "none",
}: ImageWithFallbackProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [displaySrc, setDisplaySrc] = useState(src);

  const animationClass = {
    zoom: "group-hover:scale-110 transition-transform duration-500",
    float: "animate-imageFloat",
    parallax: "animate-parallax",
    none: "",
  }[animation];

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setError(true);
    setIsLoading(false);
    // Fallback image
    setDisplaySrc(
      "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=500&h=500&fit=crop"
    );
  }, []);

  if (error && displaySrc === src) {
    // Use a solid fallback if even the fallback fails
    return (
      <div
        className={`image-placeholder ${className}`}
        style={{ width: width || "100%", height: height || "300px" }}
      >
        <div className="text-center">
          <p className="text-gray-500">📷</p>
          <p className="text-sm text-gray-400">Image unavailable</p>
        </div>
      </div>
    );
  }

  if (fill) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        {isLoading && <div className="absolute inset-0 image-loading z-10" />}
        <Image
          src={displaySrc}
          alt={alt}
          fill
          priority={priority}
          className={`${animationClass}`}
          style={{
            objectFit,
            objectPosition,
          }}
          onLoad={handleLoad}
          onError={handleError}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && <div className="absolute inset-0 image-loading z-10" />}
      <Image
        src={displaySrc}
        alt={alt}
        width={width || 500}
        height={height || 300}
        priority={priority}
        className={`w-full h-full ${animationClass}`}
        style={{
          objectFit,
          objectPosition,
        }}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}
