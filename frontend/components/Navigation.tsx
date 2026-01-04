"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./Button";
import Image from "next/image";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image
              src="/lifestlelogo.png"
              alt="LifeStyle Medicine Academy India"
              width={80}
              height={80}
              className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg text-text font-medium hover:bg-primary-50 hover:text-primary-600 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="px-4 py-2 rounded-lg text-text font-medium hover:bg-primary-50 hover:text-primary-600 transition-all duration-300"
            >
              Programs
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 rounded-lg text-text font-medium hover:bg-primary-50 hover:text-primary-600 transition-all duration-300"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="px-4 py-2 rounded-lg text-text font-medium hover:bg-primary-50 hover:text-primary-600 transition-all duration-300"
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className="px-4 py-2 rounded-lg text-text font-medium hover:bg-primary-50 hover:text-primary-600 transition-all duration-300"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg text-text font-medium hover:bg-primary-50 hover:text-primary-600 transition-all duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-primary-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-slideInDown">
            <Link
              href="/"
              className="block px-4 py-2 rounded-lg text-text font-medium hover:bg-primary-50 hover:text-primary-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="block px-4 py-2 rounded-lg text-text font-medium hover:bg-primary-50 hover:text-primary-600 transition-colors"
            >
              Programs
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 rounded-lg text-text font-medium hover:bg-primary-50 hover:text-primary-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="block px-4 py-2 rounded-lg text-text font-medium hover:bg-primary-50 hover:text-primary-600 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 rounded-lg text-text font-medium hover:bg-primary-50 hover:text-primary-600 transition-colors"
            >
              Contact
            </Link>
            <div className="pt-2">
              <Button variant="primary" size="sm" className="w-full">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
