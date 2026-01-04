"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, NewsletterData } from "@/lib/validation";
import { leadAPI } from "@/lib/api";
import { Button } from "./Button";
import { Input } from "./Input";
import Image from "next/image";

export function Footer() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { control, handleSubmit, reset } = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterData) => {
    setIsLoading(true);
    try {
      await leadAPI.submit({
        ...data,
        source: "newsletter",
        message: "",
      });
      setMessage("Thank you for subscribing!");
      reset();
      setTimeout(() => setMessage(""), 3000);
    } catch {
      setMessage("Failed to subscribe. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-text to-text/95 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="animate-fadeInUp">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/lifestlelogo.png"
                alt="LifeStyle Medicine Logo"
                width={50}
                height={50}
                className="h-12 w-12 object-contain"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-300 to-primary-200 bg-clip-text text-transparent">
                LifeStyle Medicine
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Lifestyle Medicine Academy India is a clinician-led education and
              professional services organisation advancing Lifestyle Medicine
              education, certification, and implementation across healthcare,
              education, and communities.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-gray-300 hover:text-primary-300 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary-300 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary-300 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
            <div className="space-y-3">
              <Link
                href="/"
                className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all"
              >
                Home
              </Link>
              <Link
                href="/courses"
                className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all"
              >
                Programs
              </Link>
              <Link
                href="/about"
                className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all"
              >
                About Us
              </Link>
              <Link
                href="/blog"
                className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-semibold mb-6 text-lg">Legal</h4>
            <div className="space-y-3">
              <Link
                href="/privacy"
                className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all"
              >
                Terms & Conditions
              </Link>
              <a
                href="mailto:info@lifestylemedicine.com"
                className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-semibold mb-6 text-lg">Newsletter</h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to get weekly health tips and lifestyle advice.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <Input
                name="email"
                control={control}
                label=""
                type="email"
                placeholder="your@email.com"
                required
                className="mb-2 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button
                type="submit"
                disabled={isLoading}
                size="sm"
                variant="primary"
                className="w-full"
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
              {message && (
                <p
                  className={`text-sm ${
                    message.includes("Thank you")
                      ? "text-emerald-300"
                      : "text-red-300"
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} LifeStyle Medicine. All rights
              reserved.
            </p>
            <p className="text-gray-400 text-sm md:text-right">
              Made with <span className="text-primary-300">❤️</span> for your
              health journey
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
