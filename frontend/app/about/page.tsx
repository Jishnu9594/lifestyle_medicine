import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FadeIn } from "@/components/FadeIn";
import { AboutImage } from "@/components/AboutImage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Lifestyle Medicine Academy",
  description:
    "Learn about our mission, values, and the experts behind Lifestyle Medicine Academy.",
};

export default function AboutPage() {
  const experts = [
    {
      name: "Dr. Sarah Johnson",
      role: "Nutrition Specialist",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&q=80",
      bio: "PhD in Nutritional Science with 20+ years of clinical experience",
      credentials: "MD, Board Certified",
    },
    {
      name: "Dr. Michael Chen",
      role: "Fitness & Movement Expert",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80",
      bio: "Exercise physiologist and certified health coach",
      credentials: "MS, NASM-CPT",
    },
    {
      name: "Dr. Emma Davis",
      role: "Sleep & Wellness Coach",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&q=80",
      bio: "Behavioral sleep medicine specialist",
      credentials: "PhD, Sleep Medicine",
    },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Evidence-Based",
      description:
        "All teachings grounded in peer-reviewed scientific research and clinical outcomes",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      icon: "❤️",
      title: "Patient-Centered",
      description:
        "Personalized approaches that respect individual health needs and goals",
      gradient: "from-red-400 to-red-600",
    },
    {
      icon: "🌱",
      title: "Holistic Health",
      description:
        "Address root causes through nutrition, movement, sleep, stress, and community",
      gradient: "from-green-400 to-green-600",
    },
    {
      icon: "💪",
      title: "Empowerment",
      description:
        "Help students take control of their health through knowledge and skills",
      gradient: "from-orange-400 to-orange-600",
    },
    {
      icon: "🤝",
      title: "Community",
      description:
        "Foster supportive learning environments where students succeed together",
      gradient: "from-pink-400 to-pink-600",
    },
    {
      icon: "🌍",
      title: "Accessibility",
      description:
        "Make lifestyle medicine education available to everyone, everywhere",
      gradient: "from-purple-400 to-purple-600",
    },
  ];

  const pillars = [
    {
      icon: "🍎",
      title: "Nutrition",
      description:
        "Whole-food, plant-based nutrition strategies for disease prevention and optimal health",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=400&fit=crop&q=80",
    },
    {
      icon: "🏃",
      title: "Movement",
      description:
        "Science-based exercise programs for strength, flexibility, and cardiovascular health",
      image:
        "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=500&h=400&fit=crop&q=80",
    },
    {
      icon: "😴",
      title: "Sleep",
      description:
        "Sleep optimization techniques for recovery, immunity, and mental health",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop&q=80",
    },
    {
      icon: "🧘",
      title: "Stress",
      description:
        "Mindfulness and stress management tools for emotional resilience",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=400&fit=crop&q=80",
    },
    {
      icon: "🤝",
      title: "Connection",
      description:
        "Build meaningful relationships and community for social well-being",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=400&fit=crop&q=80",
    },
    {
      icon: "🧠",
      title: "Purpose",
      description:
        "Discover meaning and purpose for a fulfilling and healthy life",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop&q=80",
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
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div
            className="absolute -bottom-8 left-0 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>

          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto relative z-10 py-12">
                <span className="badge-modern mb-6 inline-block">
                  About Our Academy
                </span>
                <h1 className="heading-1 mb-6">
                  Transform Health Through Evidence-Based Learning
                </h1>
                <p className="text-body text-xl mb-8">
                  We're on a mission to revolutionize healthcare by empowering
                  millions to take control of their health through lifestyle
                  medicine education.
                </p>
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* Mission & Vision Section */}
        <Section spacing="lg">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <FadeIn delay={0.1}>
                <div>
                  <h2 className="heading-2 mb-6">Our Mission</h2>
                  <p className="text-body mb-4">
                    To provide world-class lifestyle medicine education that
                    empowers healthcare professionals and individuals to
                    prevent, treat, and reverse chronic diseases.
                  </p>
                  <p className="text-body mb-4">
                    We believe that the most powerful medicine is right in front
                    of us: the food we eat, the movement we do, the sleep we
                    get, the stress we manage, and the relationships we nurture.
                  </p>
                  <p className="text-body">
                    By teaching evidence-based strategies in these core pillars
                    of health, we're building a healthier world one student at a
                    time.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl blur-3xl opacity-30"></div>
                  <AboutImage
                    src="https://images.unsplash.com/photo-1576091160550-112173f7f869?w=500&h=500&fit=crop&q=80"
                    alt="Our Mission"
                    className="relative rounded-3xl shadow-2xl w-full object-cover border-2 border-primary-100 animate-imageFloat"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Six Pillars */}
            <FadeIn delay={0.3}>
              <div className="text-center mb-16">
                <h2 className="heading-2 mb-4">The Six Pillars of Health</h2>
                <p className="text-body mx-auto max-w-2xl">
                  Our curriculum is built around these six interconnected
                  pillars that form the foundation of optimal health.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {pillars.map((pillar, index) => (
                <FadeIn key={pillar.title} delay={0.4 + index * 0.05}>
                  <Card hover className="overflow-hidden group">
                    <div className="relative h-40 overflow-hidden bg-gray-200">
                      <AboutImage
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-4xl">
                        {pillar.icon}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="heading-3 mb-2">{pillar.title}</h3>
                      <p className="text-muted text-sm">{pillar.description}</p>
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </Section>

        {/* Our Values */}
        <Section
          spacing="lg"
          className="bg-gradient-to-br from-primary-50 to-primary-100/50"
        >
          <Container>
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="heading-2 mb-4">Our Core Values</h2>
                <p className="text-body mx-auto max-w-2xl">
                  Everything we do is guided by these core values that shape our
                  organization and teaching philosophy.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <FadeIn key={value.title} delay={0.3 + index * 0.05}>
                  <Card gradient>
                    <div
                      className={`text-4xl mb-4 ${value.gradient} bg-gradient-to-r bg-clip-text text-transparent inline-block`}
                    >
                      {value.icon}
                    </div>
                    <h3 className="heading-3 mb-3">{value.title}</h3>
                    <p className="text-muted text-sm">{value.description}</p>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </Section>

        {/* Meet Our Experts */}
        <Section spacing="lg">
          <Container>
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="heading-2 mb-4">Meet Our Expert Instructors</h2>
                <p className="text-body mx-auto max-w-2xl">
                  Learn from certified healthcare professionals with decades of
                  combined clinical and teaching experience.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {experts.map((expert, index) => (
                <FadeIn key={expert.name} delay={0.4 + index * 0.1}>
                  <div className="text-center group">
                    <div className="relative mb-6 overflow-hidden rounded-2xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                      <AboutImage
                        src={expert.image}
                        alt={expert.name}
                        className="relative w-48 h-48 mx-auto rounded-2xl object-cover border-2 border-primary-100 group-hover:scale-105 transition-transform duration-300 shadow-lg"
                      />
                    </div>
                    <h3 className="heading-3 mb-2">{expert.name}</h3>
                    <p className="text-primary-600 font-semibold mb-3">
                      {expert.role}
                    </p>
                    <p className="text-muted text-sm mb-3">{expert.bio}</p>
                    <p className="text-xs font-semibold text-primary-500 bg-primary-50 inline-block px-3 py-1 rounded-full">
                      {expert.credentials}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </Section>

        {/* Video Section */}
        <Section
          spacing="lg"
          className="bg-gradient-to-br from-gray-900 to-primary-900 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div
            className="absolute -bottom-8 left-1/2 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"
            style={{ animationDelay: "2s" }}
          ></div>

          <Container>
            <FadeIn>
              <div className="text-center mb-12 relative z-10">
                <h2 className="heading-2 text-white mb-4">Watch Our Story</h2>
                <p className="text-white/80 mx-auto max-w-2xl text-lg">
                  Discover how our academy is transforming lives through
                  lifestyle medicine education.
                </p>
              </div>

              <div className="relative z-10 aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  width="100%"
                  height="600"
                  src="https://www.youtube.com/embed/7lDEcMF0Nhk"
                  title="Lifestyle Medicine Academy Story"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* Stats Section */}
        <Section spacing="lg">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <FadeIn delay={0.1}>
                <Card className="text-center">
                  <p className="text-5xl font-bold text-primary-600 mb-2">
                    9,720+
                  </p>
                  <p className="text-muted font-semibold">Active Students</p>
                </Card>
              </FadeIn>
              <FadeIn delay={0.2}>
                <Card className="text-center">
                  <p className="text-5xl font-bold text-primary-600 mb-2">6</p>
                  <p className="text-muted font-semibold">Expert Courses</p>
                </Card>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Card className="text-center">
                  <p className="text-5xl font-bold text-primary-600 mb-2">
                    4.92★
                  </p>
                  <p className="text-muted font-semibold">Average Rating</p>
                </Card>
              </FadeIn>
              <FadeIn delay={0.4}>
                <Card className="text-center">
                  <p className="text-5xl font-bold text-primary-600 mb-2">
                    95%
                  </p>
                  <p className="text-muted font-semibold">Improvement Rate</p>
                </Card>
              </FadeIn>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section
          spacing="lg"
          className="bg-gradient-to-r from-primary-600 to-primary-500"
        >
          <Container>
            <FadeIn>
              <div className="text-center text-white">
                <h2 className="heading-2 text-white mb-6">
                  Ready to Transform Your Health?
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Join thousands of students who are taking control of their
                  health through evidence-based lifestyle medicine.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" size="lg">
                    <Link href="/courses" className="text-primary-600">
                      Explore Courses
                    </Link>
                  </Button>
                  <Button variant="ghost" size="lg">
                    <Link href="/contact" className="text-white">
                      Get in Touch
                    </Link>
                  </Button>
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
