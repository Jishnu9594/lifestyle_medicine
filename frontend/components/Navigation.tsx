"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./Button";
import Image from "next/image";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Programs" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-2xl border-b border-gray-100/50 shadow-lg">
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-24 py-3 sm:py-4">
          {/* Logo - Left Corner */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity duration-300 flex-shrink-0"
          >
            <Image
              src="/lifestyle 4.png"
              alt="LifeStyle Medicine Academy India"
              width={200}
              height={80}
              className="h-14 w-auto sm:h-16 md:h-20 lg:h-24 object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation + CTA - Right Corner */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50/80 rounded-lg transition-all duration-300 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-2 pl-2 border-l border-gray-200">
              <Button variant="primary" size="sm">
                <Link href="/contact" className="whitespace-nowrap">
                  Get Started
                </Link>
              </Button>
            </div>
          </div>

          {/* Tablet Navigation + CTA - Right Corner */}
          <div className="hidden md:flex lg:hidden items-center gap-1">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-2 py-1.5 text-xs font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50/80 rounded-md transition-all duration-300 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-1 pl-1 border-l border-gray-200">
              <Link
                href="/contact"
                className="px-3 py-1.5 text-xs font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-all duration-300 whitespace-nowrap"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button - Right Corner */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-primary-50 transition-colors duration-300 flex-shrink-0"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-700 transition-transform duration-300 ${
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
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-2xl animate-slideDown">
            <div className="px-3 sm:px-4 py-3 sm:py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50/80 rounded-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-gray-100">
                <Button variant="primary" size="sm" className="w-full">
                  <Link href="/contact" className="whitespace-nowrap">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
