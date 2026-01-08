"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";

const textLines = ["Transform Health", "Lifestyle Focus", "Evidence-Based"];

export function ModernHeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentLine = textLines[currentLineIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < currentLine.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentLine.substring(0, displayedText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(
            displayedText.substring(0, displayedText.length - 1)
          );
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentLineIndex((prev) => (prev + 1) % textLines.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, currentLineIndex, isDeleting]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-200 to-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div
          className="absolute top-1/3 left-0 w-80 h-80 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-tl from-orange-300 to-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between min-h-screen lg:h-screen">
          {/* LEFT SIDE - Text Content */}
          <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-12 pt-24 sm:pt-32 pb-8 sm:pb-12 lg:pt-0 lg:pb-0 flex flex-col justify-center z-20">
            {/* Animated Badge */}
            <div className="mb-6 sm:mb-8 inline-block w-fit">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200 animate-slideInLeft">
                <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full animate-pulse"></span>
                <span className="text-xs sm:text-sm font-semibold text-orange-700">
                  Welcome to the Academy
                </span>
              </div>
            </div>

            {/* Main Heading with Animated Text */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                {/* Static Part */}
                <span className="block mb-2 sm:mb-3 animate-slideInLeft">
                  Advancing Health
                </span>

                {/* Animated Typing Part */}
                <span className="block h-16 sm:h-24 lg:h-28">
                  <span className="inline-block min-h-12 sm:min-h-16 lg:min-h-20">
                    <span
                      className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 font-bold text-2xl sm:text-5xl lg:text-7xl"
                      style={{
                        animationDelay: "0.2s",
                      }}
                    >
                      {displayedText}
                      <span className="animate-pulse text-orange-600 ml-1">
                        |
                      </span>
                    </span>
                  </span>
                </span>
              </h1>
            </div>

            {/* Description Text */}
            <div
              className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 animate-fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed font-light">
                For Professionals. For Institutions. For Communities.
              </p>
              <p className="text-xs sm:text-base text-gray-600 leading-relaxed max-w-xl">
                A clinician-led education and professional services organisation
                delivering internationally recognised Lifestyle Medicine
                education, certification, and turnkey implementation support.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-12 animate-fadeInUp"
              style={{ animationDelay: "0.6s" }}
            >
              <Link href="/courses">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Explore Programs
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 transition-all duration-300"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>

            {/* Stats Section */}
            <div
              className="grid grid-cols-3 gap-2 sm:gap-6 animate-fadeInUp"
              style={{ animationDelay: "0.8s" }}
            >
              {[
                { number: "9,720+", label: "Active Students" },
                { number: "6", label: "Expert Courses" },
                { number: "4.92★", label: "Rating" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-2 sm:p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-orange-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                >
                  <div className="text-sm sm:text-2xl font-bold text-orange-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Image */}
          <div className="w-full lg:w-1/2 h-96 sm:h-[500px] lg:h-full flex items-center justify-center relative overflow-hidden z-10">
            {/* Decorative Blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-bl from-orange-200 to-orange-100 opacity-30 blur-3xl animate-blob"></div>
            <div
              className="absolute bottom-0 right-1/4 w-80 h-80 lg:w-[450px] lg:h-[450px] rounded-full bg-gradient-to-tl from-orange-300 to-orange-200 opacity-20 blur-3xl animate-blob"
              style={{ animationDelay: "2s" }}
            ></div>

            {/* Image Container */}
            <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-8 lg:pr-12">
              {/* MOBILE/TABLET: Doctor with Background Image */}
              <div className="lg:hidden absolute inset-0 flex items-center justify-center">
                {/* Background Image */}
                <img
                  src="/2b6e5d83-58e5-4d74-99cd-eff31ed9c09b-removebg-preview.png"
                  alt="Background"
                  className="absolute h-3/4 sm:h-4/5 object-contain animate-imageFloat"
                  loading="eager"
                />

                {/* Foreground Image (Doctor) */}
                <img
                  src="/doctor-with-his-arms-crossed-white-background-removebg-preview.png"
                  alt="Doctor"
                  className="relative h-full sm:h-4/5 object-contain animate-imageFloat"
                  loading="eager"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>

              {/* DESKTOP: Woman with Background Image */}
              <div className="hidden lg:flex absolute inset-0 items-center justify-center">
                {/* Background Image - Reduced Size */}
                <img
                  src="/2b6e5d83-58e5-4d74-99cd-eff31ed9c09b-removebg-preview.png"
                  alt="Background"
                  className="absolute h-full object-contain animate-imageFloat"
                  loading="eager"
                />

                {/* Foreground Image (Woman) */}
                <img
                  src="/young-lady-looking-pointing-copy-space-removebg-preview.png"
                  alt="Lifestyle Medicine"
                  className="relative h-full object-contain animate-imageFloat"
                  loading="eager"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden lg:block animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-500 font-medium">
            Scroll to explore
          </span>
          <svg
            className="w-5 h-5 text-orange-600 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
