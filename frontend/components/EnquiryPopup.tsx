"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "./Button";
import { X, Mail, User, MessageSquare } from "lucide-react";

export default function EnquiryPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    timerRef.current = setTimeout(() => setOpen(true), 1200);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative w-[94vw] max-w-2xl rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl border border-white/30 shadow-[0_20px_60px_rgba(0,0,0,0.15)] animate-scaleIn">
        <div className="absolute inset-0 rounded-3xl pointer-events-none ring-1 ring-inset ring-white/30" />

        {/* Close Button */}
        <button
          onClick={() => {
            if (timerRef.current) clearTimeout(timerRef.current);
            setOpen(false);
          }}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:scale-105 transition"
        >
          <X size={18} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* IMAGE SECTION – NOW VISIBLE ON MOBILE */}
          <div className="relative h-56 md:h-auto">
            <img
              src="https://img.freepik.com/free-photo/female-nurse-working-clinic_23-2149868961.jpg?w=740&q=80"
              alt="Lifestyle Medicine Education"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="relative z-10 p-6 md:p-8 text-white flex flex-col justify-end h-full">
              <h3 className="text-lg md:text-xl font-semibold mb-1">
                Lifestyle Medicine Academy
              </h3>
              <p className="text-xs md:text-sm text-white/90">
                International certification and professional education support.
              </p>
            </div>
          </div>

          {/* FORM SECTION */}
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Talk to Our Team
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Leave your details and we’ll get back to you shortly.
            </p>

            {submitted ? (
              <div className="text-emerald-600 font-medium py-12">
                Thank you. Your enquiry has been received.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative">
                  <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                  <input
                    required
                    placeholder="Your name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300"
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                  <textarea
                    rows={4}
                    required
                    placeholder="Your message"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 resize-none"
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                </div>

                {error && <p className="text-sm text-red-600">{error}</p>}

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Send Enquiry"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
