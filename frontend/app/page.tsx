import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";
import { Card } from "@/components/Card";
import { HeroImage } from "@/components/HeroImage";
import { ModernStat } from "@/components/ModernStat";
import { ModernFeatureCard } from "@/components/ModernFeatureCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lifestyle Medicine Academy India | Education. Consultation. Transformation.",
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

  return (
    <>
      <Navigation />
      <main className="min-h-screen overflow-hidden">
        {/* Hero Section */}
        <Section
          spacing="lg"
          className="bg-gradient-to-br from-primary-50 via-white to-primary-100/50 relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div
            className="absolute -bottom-8 left-0 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>

          <Container>
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 sm:py-24 relative z-10">
                {/* Left Content */}
                <div>
                  <div className="mb-6 inline-block">
                    <span className="badge-modern">Welcome to the Academy</span>
                  </div>
                  <h1 className="heading-1 mb-6">
                    <span className="gradient-text">
                      Advancing Health Through
                    </span>{" "}
                    Lifestyle Medicine
                  </h1>
                  <p className="text-body mx-0 mb-8 text-lg">
                    For Professionals. For Institutions. For Communities.
                  </p>
                  <p className="text-body mx-0 mb-8">
                    Lifestyle Medicine Academy India is a clinician-led education and professional services organisation delivering internationally recognised Lifestyle Medicine education and certification, workforce training, and turnkey implementation support.
                  </p>
                  <p className="text-body mx-0 mb-8">
                    We work with healthcare professionals, hospitals, educational institutions, organisations, and communities to embed evidence-based Lifestyle Medicine into real-world practice.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="primary" size="lg">
                      <Link href="/courses">View Our Programs</Link>
                    </Button>
                    <Button variant="secondary" size="lg">
                      <Link href="/contact">Get in Touch</Link>
                    </Button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mt-12">
                    <ModernStat
                      number="9,720+"
                      label="Active Students"
                      iconType="students"
                      delay={0}
                    />
                    <ModernStat
                      number="6"
                      label="Expert Courses"
                      iconType="courses"
                      delay={100}
                    />
                    <ModernStat
                      number="4.92★"
                      label="Average Rating"
                      iconType="rating"
                      delay={200}
                    />
                  </div>
                </div>

                {/* Right Hero Image */}
                <div className="relative animate-scaleIn">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl blur-3xl opacity-40 animate-pulse-glow"></div>
                  <div className="absolute -top-8 -right-8 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
                  <div
                    className="absolute -bottom-8 -left-8 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"
                    style={{ animationDelay: "2s" }}
                  ></div>

                  <HeroImage
                    src="https://images.unsplash.com/photo-1576091160550-112173f7f869?w=600&h=600&fit=crop&q=80"
                    alt="Lifestyle Medicine Academy"
                    fallbackSrc="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=600&fit=crop&q=80"
                  />
                </div>
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* Featured Courses Section */}
        <Section spacing="lg">
          <Container>
            <FadeIn delay={0.2}>
              <div className="text-center mb-16">
                <h2 className="heading-2 mb-4">What We Offer</h2>
                <p className="text-body mx-auto max-w-2xl">
                  International certification, professional education, consultation services, and institutional partnerships.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <FadeIn delay={0.3}>
                <Card hover className="p-8">
                  <h3 className="heading-3 mb-4">International Certification & Professional Education</h3>
                  <ul className="space-y-3 text-body">
                    <li>✓ Diploma in Lifestyle Medicine (IBLM Certification)</li>
                    <li>✓ Foundation Course in Lifestyle Medicine (WHOCC endorsed)</li>
                    <li>✓ Lifestyle Medicine for Medical Students & Trainees</li>
                    <li>✓ Lifestyle Medicine for Allied Health Professionals</li>
                    <li>✓ Faculty Development & Train-the-Trainer Programmes</li>
                    <li>✓ Burnout Prevention & Clinician Wellbeing Programmes</li>
                  </ul>
                </Card>
              </FadeIn>

              <FadeIn delay={0.35}>
                <Card hover className="p-8">
                  <h3 className="heading-3 mb-4">Public Lifestyle Medicine Education</h3>
                  <p className="text-body mb-4">
                    Lifestyle Medicine is for everyone, not only clinicians.
                  </p>
                  <ul className="space-y-3 text-body">
                    <li>✓ Introduction to Lifestyle Medicine</li>
                    <li>✓ Lifestyle-based Chronic Disease Prevention</li>
                    <li>✓ Workplace Wellbeing Programmes</li>
                    <li>✓ Community Talks and Workshops</li>
                  </ul>
                </Card>
              </FadeIn>

              <FadeIn delay={0.4}>
                <Card hover className="p-8">
                  <h3 className="heading-3 mb-4">Professional Consultation & Turnkey Services</h3>
                  <ul className="space-y-3 text-body">
                    <li>✓ Establishing Lifestyle Medicine Clinics</li>
                    <li>✓ Hospital-based Lifestyle Medicine Services</li>
                    <li>✓ Preventive Health Pathways</li>
                    <li>✓ Workforce Training & Upskilling</li>
                    <li>✓ Curriculum Development for Medical Colleges</li>
                    <li>✓ Institutional Programme Design</li>
                  </ul>
                </Card>
              </FadeIn>

              <FadeIn delay={0.45}>
                <Card hover className="p-8">
                  <h3 className="heading-3 mb-4">Schools, Colleges & Educational Institutions</h3>
                  <ul className="space-y-3 text-body">
                    <li>✓ Preventive Lifestyle Medicine Education</li>
                    <li>✓ Student Wellbeing & Resilience Programmes</li>
                    <li>✓ Faculty Training</li>
                    <li>✓ Curriculum Integration</li>
                    <li>✓ Age-appropriate, Educational, Non-clinical Programmes</li>
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
        <Section spacing="lg">
          <Container>
            <FadeIn delay={0.6}>
              <div className="text-center mb-12">
                <h2 className="heading-2 mb-4">See What You'll Learn</h2>
                <p className="text-body mx-auto max-w-2xl mb-12">
                  Watch this introduction to our lifestyle medicine curriculum.
                </p>
              </div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900">
                <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800">
                  <div className="text-center">
                    <div className="mb-4">
                      <svg
                        className="w-24 h-24 mx-auto text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                      </svg>
                    </div>
                    <p className="text-white text-lg font-semibold">
                      Intro to Lifestyle Medicine
                    </p>
                    <p className="text-primary-200 text-sm mt-2">
                      Click to watch (Embedded from YouTube)
                    </p>
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
                  Start Your Health Transformation Today
                </h2>
                <p className="text-primary-100 max-w-2xl mx-auto mb-8 text-lg">
                  Join our academy and learn from the best. Get lifetime access
                  to all course materials and community support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/courses">
                    <Button variant="primary" size="lg">
                      Browse All Courses
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="secondary" size="lg">
                      Get Free Consultation
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
