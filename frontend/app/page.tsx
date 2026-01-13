import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";
import { Card } from "@/components/Card";
import { ModernFeatureCard } from "@/components/ModernFeatureCard";
import { ModernHeroSection } from "@/components/ModernHeroSection";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Lifestyle Medicine Academy India | Education. Consultation. Transformation.",
  description:
    "A clinician-led institution advancing Lifestyle Medicine education, certification, and implementation across healthcare, education, and communities. International IBLM certification, professional consultation, and turnkey solutions.",
  openGraph: {
    title: "Lifestyle Medicine Academy India",
    description:
      "Clinician-led education and professional services for Lifestyle Medicine. IBLM certification, workforce training, and implementation support.",
    url: "https://lifestylemedicine.org",
    type: "website",
  },
};

export default function Home() {
  const whyChooseUs = [
    {
      iconType: "instructor",
      title: "International Certification",
      description:
        "Earn the IBLM Diploma in Lifestyle Medicine - the same certification offered internationally by the International Board of Lifestyle Medicine (USA).",
      color: "from-blue-400 to-blue-600",
    },
    {
      iconType: "book",
      title: "Evidence-Based Curriculum",
      description:
        "Comprehensive education covering all core Lifestyle Medicine domains: nutrition, fitness, sleep, stress management, and behaviour change communication.",
      color: "from-green-400 to-green-600",
    },
    {
      iconType: "globe",
      title: "Global Standards",
      description:
        "Delivered in collaboration with International Board of Lifestyle Medicine (USA), European Lifestyle Medicine Organisation, and WHO Collaborating Centre.",
      color: "from-purple-400 to-purple-600",
    },
    {
      iconType: "trophy",
      title: "Professional Implementation",
      description:
        "Turnkey solutions for establishing Lifestyle Medicine clinics, hospital services, and institutional programmes.",
      color: "from-orange-400 to-orange-600",
    },
    {
      iconType: "chat",
      title: "Expert Leadership",
      description:
        "Clinician-led by Dr Sunil Kumar (Lifestyle Medicine Physician) and Dr Arun Das (clinician leader and education advocate).",
      color: "from-pink-400 to-pink-600",
    },
    {
      iconType: "chart",
      title: "Institutional Partnerships",
      description:
        "We partner with schools, colleges, medical institutions, hospitals, and organisations for curriculum integration and workforce training.",
      color: "from-red-400 to-red-600",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Busy Professional",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      text: "The nutrition course completely changed how I think about food. I've lost 25 lbs and have more energy than ever!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Fitness Coach",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      text: "As a coach, this course deepened my understanding of science-based fitness. My clients love the results.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "Healthcare Professional",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      text: "Outstanding curriculum! I've integrated these principles into my practice and transformed patient outcomes.",
      rating: 5,
    },
  ];

  const EnquiryPopup = dynamic(() => import("@/components/EnquiryPopup"), {
    ssr: false,
  });
  return (
    <>
      <Navigation />
      {/* Enquiry Popup loads on website visit */}
      <EnquiryPopup />
      <main className="overflow-hidden">
        {/* Modern Hero Section */}
        <ModernHeroSection />

        {/* Introduction to Lifestyle Medicine - 6 Pillars Section (Modern Design) */}
        <Section spacing="lg" className="relative bg-white overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-200 to-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div
              className="absolute top-1/3 left-0 w-80 h-80 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-tl from-primary-100 to-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"
              style={{ animationDelay: "4s" }}
            ></div>
          </div>

          <Container className="relative z-10">
            <FadeIn delay={0.2}>
              <div className="text-center mb-20">
                <div className="inline-block bg-gradient-to-r from-primary-600 to-orange-500 px-6 py-2 rounded-full text-white text-sm font-semibold mb-6">
                  UNDERSTANDING
                </div>
                <h2 className="heading-1 text-text mb-6">
                  What is{" "}
                  <span className="bg-gradient-to-r from-primary-600 to-orange-500 bg-clip-text text-transparent">
                    Lifestyle Medicine?
                  </span>
                </h2>
                <p className="text-muted mx-auto max-w-3xl text-lg mb-6 leading-relaxed">
                  Lifestyle medicine is the{" "}
                  <span className="font-semibold text-text">
                    evidence-based medical specialty
                  </span>{" "}
                  that treats root causes with therapeutic lifestyle
                  interventions. It is how clinicians restore patient health and
                  reignite their joy of practice.
                </p>
                <p className="text-muted mx-auto max-w-3xl text-lg leading-relaxed">
                  Grounded in six interconnected pillars, lifestyle medicine
                  treats, reverses, and prevents chronic conditions like{" "}
                  <span className="font-semibold">
                    type 2 diabetes, obesity, cardiovascular disease
                  </span>{" "}
                  and more.
                </p>
              </div>
            </FadeIn>

            {/* 6 Pillars Grid - Modern Glassmorphism Design */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Pillar 1: Nutrition */}
              <FadeIn delay={0.3}>
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full border border-primary-100 hover:border-primary-300 hover:bg-gradient-to-br hover:from-white hover:to-primary-50">
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                      </svg>
                    </div>

                    {/* Number Badge */}
                    <div className="absolute top-6 right-6 text-4xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent opacity-15 group-hover:opacity-30 transition-opacity">
                      01
                    </div>

                    <h3 className="heading-3 mb-3 text-text relative">
                      Optimal Nutrition
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-6">
                      Eat more whole foods and focus on minimally processed,
                      plant-predominant, nutrient-dense meals and snacks.
                    </p>

                    {/* Features List */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-primary-600 font-bold flex-shrink-0">
                          ▸
                        </span>
                        <span className="text-muted text-sm">
                          Plant-based eating
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-primary-600 font-bold flex-shrink-0">
                          ▸
                        </span>
                        <span className="text-muted text-sm">
                          Whole foods focus
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-primary-600 font-bold flex-shrink-0">
                          ▸
                        </span>
                        <span className="text-muted text-sm">
                          Metabolic health
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Pillar 2: Physical Activity */}
              <FadeIn delay={0.35}>
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full border border-orange-100 hover:border-orange-300 hover:bg-gradient-to-br hover:from-white hover:to-orange-50">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l3.9-1.6c-.1.4-.2.8-.2 1.3 0 2.1 1.7 3.9 3.8 3.9z" />
                      </svg>
                    </div>

                    <div className="absolute top-6 right-6 text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent opacity-15 group-hover:opacity-30 transition-opacity">
                      02
                    </div>

                    <h3 className="heading-3 mb-3 text-text relative">
                      Physical Activity
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-6">
                      Move every day and incorporate strength, flexibility, and
                      aerobic activities into your routine.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-orange-600 font-bold flex-shrink-0">
                          ▸
                        </span>
                        <span className="text-muted text-sm">
                          Regular exercise
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-orange-600 font-bold flex-shrink-0">
                          ▸
                        </span>
                        <span className="text-muted text-sm">
                          Strength training
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-orange-600 font-bold flex-shrink-0">
                          ▸
                        </span>
                        <span className="text-muted text-sm">
                          Daily movement
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Pillar 3: Sleep */}
              <FadeIn delay={0.4}>
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full border border-blue-100 hover:border-blue-300 hover:bg-gradient-to-br hover:from-white hover:to-blue-50">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12h-4v4h-4v-4H6v-2h4V8h4v4h4v2z" />
                      </svg>
                    </div>

                    <div className="absolute top-6 right-6 text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent opacity-15 group-hover:opacity-30 transition-opacity">
                      03
                    </div>

                    <h3 className="heading-3 mb-3 text-text relative">
                      Restorative Sleep
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-6">
                      Create the right conditions to get 7-9 hours of quality
                      sleep every night to allow the body to reset and recover.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold flex-shrink-0">
                          ▸
                        </span>
                        <span className="text-muted text-sm">
                          7-9 hours sleep
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold flex-shrink-0">
                          ▸
                        </span>
                        <span className="text-muted text-sm">
                          Sleep hygiene
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold flex-shrink-0">
                          ▸
                        </span>
                        <span className="text-muted text-sm">
                          Circadian alignment
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Pillar 4: Stress Management */}
              <FadeIn delay={0.45}>
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full border border-green-100 hover:border-green-300 hover:bg-gradient-to-br hover:from-white hover:to-green-50">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                      </svg>
                    </div>

                    <div className="absolute top-6 right-6 text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent opacity-15 group-hover:opacity-30 transition-opacity">
                      04
                    </div>

                    <h3 className="heading-3 mb-3 text-text relative">
                      Stress Management
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-6">
                      Develop healthy coping skills to meet the ever-changing
                      demands of life and bolster resilience.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 font-bold flex-shrink-0">
                          ▸
                        </span>
                        <span className="text-muted text-sm">
                          Mindfulness & meditation
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 font-bold flex-shrink-0">
                          ▸
                        </span>
                        <span className="text-muted text-sm">
                          Relaxation techniques
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 font-bold flex-shrink-0">
                          ▸
                        </span>
                        <span className="text-muted text-sm">
                          Mental health support
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Pillar 5: Social Connection */}
              <FadeIn delay={0.5}>
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full border border-pink-100 hover:border-pink-300 hover:bg-gradient-to-br hover:from-white hover:to-pink-50">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                      </svg>
                    </div>

                    <div className="absolute top-6 right-6 text-4xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent opacity-15 group-hover:opacity-30 transition-opacity">
                      05
                    </div>

                    <h3 className="heading-3 mb-3 text-text relative">
                      Connectedness
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-6">
                      Foster supportive relationships and build connections that
                      bring meaning and purpose to life.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-pink-600 font-bold flex-shrink-0">
                          ▸
                        </span>
                        <span className="text-muted text-sm">
                          Community engagement
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-pink-600 font-bold flex-shrink-0">
                          ▸
                        </span>
                        <span className="text-muted text-sm">
                          Family relationships
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-pink-600 font-bold flex-shrink-0">
                          ▸
                        </span>
                        <span className="text-muted text-sm">
                          Social wellbeing
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Pillar 6: Substance Use Avoidance */}
              <FadeIn delay={0.55}>
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full border border-purple-100 hover:border-purple-300 hover:bg-gradient-to-br hover:from-white hover:to-purple-50">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>

                    <div className="absolute top-6 right-6 text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent opacity-15 group-hover:opacity-30 transition-opacity">
                      06
                    </div>

                    <h3 className="heading-3 mb-3 text-text relative">
                      Risky Substance Avoidance
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-6">
                      Avoid behaviors that include the consumption of or
                      exposure to harmful substances.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold flex-shrink-0">
                          ▸
                        </span>
                        <span className="text-muted text-sm">
                          Tobacco cessation
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold flex-shrink-0">
                          ▸
                        </span>
                        <span className="text-muted text-sm">
                          Alcohol moderation
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold flex-shrink-0">
                          ▸
                        </span>
                        <span className="text-muted text-sm">
                          Substance prevention
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
        </Section>

        {/* What We Offer Section */}
        <Section spacing="lg">
          <Container>
            <FadeIn delay={0.2}>
              <div className="text-center mb-16">
                <h2 className="heading-2 mb-4">What We Offer</h2>
                <p className="text-body mx-auto max-w-3xl">
                  Comprehensive Lifestyle Medicine education, certification,
                  consultation services, and institutional partnerships
                  delivered by clinician leaders.
                </p>
              </div>
            </FadeIn>

            {/* Main Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* International Certification */}
              <FadeIn delay={0.3}>
                <Card hover className="p-8 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <h3 className="heading-3 mb-3">
                    International Certification
                  </h3>
                  <p className="text-body mb-6 flex-grow">
                    Diploma in Lifestyle Medicine (IBLM) - the official
                    International Board of Lifestyle Medicine certification
                    issued by USA.
                  </p>
                  <ul className="space-y-2 text-sm text-body">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 mt-1">→</span>
                      <span>IBLM Certification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 mt-1">→</span>
                      <span>WHO endorsed programmes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 mt-1">→</span>
                      <span>Global standards alignment</span>
                    </li>
                  </ul>
                </Card>
              </FadeIn>

              {/* Professional Education */}
              <FadeIn delay={0.35}>
                <Card hover className="p-8 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747m0-13c5.5 0 10 4.745 10 10.747M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747m0-13c5.5 0 10 4.745 10 10.747"
                      />
                    </svg>
                  </div>
                  <h3 className="heading-3 mb-3">Professional Education</h3>
                  <p className="text-body mb-6 flex-grow">
                    Specialised programmes for doctors, medical students, allied
                    health professionals, and clinical leaders.
                  </p>
                  <ul className="space-y-2 text-sm text-body">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 mt-1">→</span>
                      <span>Medical students & trainees</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 mt-1">→</span>
                      <span>Allied health professionals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 mt-1">→</span>
                      <span>Burnout prevention</span>
                    </li>
                  </ul>
                </Card>
              </FadeIn>

              {/* Public Education */}
              <FadeIn delay={0.4}>
                <Card hover className="p-8 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="heading-3 mb-3">Public Education</h3>
                  <p className="text-body mb-6 flex-grow">
                    Free or low-cost programmes for everyone interested in
                    learning about Lifestyle Medicine principles.
                  </p>
                  <ul className="space-y-2 text-sm text-body">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 mt-1">→</span>
                      <span>Introduction to Lifestyle Medicine</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 mt-1">→</span>
                      <span>Workplace programmes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 mt-1">→</span>
                      <span>Community workshops</span>
                    </li>
                  </ul>
                </Card>
              </FadeIn>

              {/* Professional Services */}
              <FadeIn delay={0.45}>
                <Card hover className="p-8 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="heading-3 mb-3">Turnkey Services</h3>
                  <p className="text-body mb-6 flex-grow">
                    End-to-end implementation support for clinics, hospitals,
                    medical colleges, and organisations.
                  </p>
                  <ul className="space-y-2 text-sm text-body">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 mt-1">→</span>
                      <span>Clinic establishment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 mt-1">→</span>
                      <span>Hospital integration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 mt-1">→</span>
                      <span>Workforce training</span>
                    </li>
                  </ul>
                </Card>
              </FadeIn>

              {/* Faculty Development */}
              <FadeIn delay={0.5}>
                <Card hover className="p-8 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747m0-13c5.5 0 10 4.745 10 10.747"
                      />
                    </svg>
                  </div>
                  <h3 className="heading-3 mb-3">Faculty Development</h3>
                  <p className="text-body mb-6 flex-grow">
                    Train-the-trainer and curriculum development support for
                    educational institutions.
                  </p>
                  <ul className="space-y-2 text-sm text-body">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 mt-1">→</span>
                      <span>Train-the-trainer programmes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 mt-1">→</span>
                      <span>Curriculum development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 mt-1">→</span>
                      <span>Institutional integration</span>
                    </li>
                  </ul>
                </Card>
              </FadeIn>

              {/* Institutional Partnerships */}
              <FadeIn delay={0.55}>
                <Card hover className="p-8 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 12H9m6 0a6 6 0 11-12 0 6 6 0 0112 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="heading-3 mb-3">Institutional Partnerships</h3>
                  <p className="text-body mb-6 flex-grow">
                    Collaborate with schools, colleges, medical institutions,
                    hospitals, and organisations.
                  </p>
                  <ul className="space-y-2 text-sm text-body">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 mt-1">→</span>
                      <span>Schools & colleges</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 mt-1">→</span>
                      <span>Medical institutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 mt-1">→</span>
                      <span>Corporate partnerships</span>
                    </li>
                  </ul>
                </Card>
              </FadeIn>
            </div>

            <div className="text-center">
              <Button variant="secondary" size="lg">
                <Link href="/courses">Explore All Programs</Link>
              </Button>
            </div>
          </Container>
        </Section>

        {/* Why Choose Us Section */}
        <Section
          spacing="lg"
          className="bg-gradient-to-br from-primary-50 to-primary-100/50"
        >
          <Container>
            <FadeIn delay={0.4}>
              <div className="text-center mb-16">
                <h2 className="heading-2 mb-4">Why Choose Our Academy?</h2>
                <p className="text-body mx-auto max-w-2xl">
                  We provide world-class education in lifestyle medicine with
                  proven results.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <ModernFeatureCard
                  key={item.title}
                  iconType={item.iconType}
                  title={item.title}
                  description={item.description}
                  gradient={item.color}
                  index={index}
                />
              ))}
            </div>
          </Container>
        </Section>

        {/* Video Section */}

        {/* See What You'll Learn Section */}
        <Section spacing="lg" className="bg-orange-50/30">
          <Container>
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="heading-2 mb-4">See What You'll Learn</h2>
                <p className="text-body mx-auto max-w-2xl text-lg">
                  Watch this introduction to our lifestyle medicine curriculum.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="w-full max-w-4xl">
                  <div
                    className="relative w-full bg-black rounded-2xl overflow-hidden shadow-2xl"
                    style={{ paddingBottom: "56.25%" }}
                  >
                    <iframe
                      src="https://www.youtube.com/embed/QGGarhgofR8?si=W19Zd8TGxbpke-eJ"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: "none",
                      }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </FadeIn>
          </Container>
        </Section>
        {/* Testimonials Section */}
        <Section spacing="lg" className="bg-white">
          <Container>
            <FadeIn delay={0.7}>
              <div className="text-center mb-16">
                <h2 className="heading-2 mb-4">What Students Say</h2>
                <p className="text-body mx-auto max-w-2xl">
                  Join thousands of satisfied students who've transformed their
                  lives.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <FadeIn key={testimonial.name} delay={0.8 + index * 0.1}>
                  <Card hover className="text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <div className="mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-muted mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <p className="font-semibold text-text">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-primary-600">
                      {testimonial.role}
                    </p>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section
          spacing="lg"
          className="bg-gradient-to-r from-primary-600 to-primary-700 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

          <Container>
            <FadeIn delay={0.9}>
              <div className="text-center relative z-10 py-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                  Ready to Transform Your Career?
                </h2>
                <p className="text-primary-100 max-w-2xl mx-auto mb-8 text-lg">
                  Join Lifestyle Medicine Academy India and get internationally
                  recognised IBLM certification. Learn from clinician leaders
                  and advance your practice.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/courses">
                    <Button variant="primary" size="lg">
                      Explore Programmes
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="secondary" size="lg">
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
