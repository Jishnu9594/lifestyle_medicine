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
  title: "About | Lifestyle Medicine Academy India",
  description:
    "Learn about our mission, founders Dr Sunil Kumar and Dr Arun Das, and our clinician-led approach to advancing Lifestyle Medicine education and implementation.",
};

export default function AboutPage() {
  const founders = [
    {
      name: "Dr. Arundas H",
      role: "Co-Founder & Managing Partner",
      image: "/arun.jpeg",
      specialty: "Family Physician & Preventive Medicine Specialist",
      bio: "Family Physician, Preventive Medicine specialist, Diabetologist, and Research Consultant with strong focus on Lifestyle Medicine and NCD prevention.",
      qualifications: [
        "MBBS – Amrita Institute of Medical Sciences, Kochi",
        "MD(Preventive & Social Medicine) – Kasturba Medical College, Manipal",
        "Fellowship in Diabetology – Aster Health Academy",
        "Certified Palliative Physician",
      ],
      expertise: [
        "Lifestyle Medicine & Preventive Diabetology",
        "Nutrition science & research",
        "NCD prevention and reversal models",
        "Healthcare entrepreneurship",
      ],
      roles:
        "Research Consultant, Founder & Chief Physician (Mediwell Clinic), Faculty in Epidemiology at Pallium India (WHO Collaborating Centre)",
    },
    {
      name: "Dr. Sunil Kumar",
      role: "Co-Founder & Academic Director",
      image: "/sunil.jpeg",
      specialty: "Anaesthesiologist & Lifestyle Medicine Physician",
      bio: "Medical educator and healthcare leader with extensive experience in academic leadership, clinician training, and prevention-focused care. Based in UK.",
      qualifications: [
        "MBBS | MRCA | FCAI | FRSA | FBSLM | DipIBLM | MAcadMEd",
        "Board-Certified in Lifestyle Medicine (US & UK)",
        "Lifestyle Medicine Lead Tutor, WHO Collaborating Centre, Imperial College London",
        "Honorary Senior Clinical Lecturer, Imperial College London",
      ],
      expertise: [
        "Lifestyle Medicine integration in healthcare",
        "Clinician training and education",
        "Physician wellbeing programs",
        "Surgical prehabilitation",
      ],
      roles:
        "Foundation Year Doctors Programme Director at University Hospitals of Morecambe Bay NHS Trust, UK. Council Member Royal Society of Medicine, Faculty for NHS England",
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
      <main className="min-h-screen overflow-hidden pt-14 sm:pt-16 md:pt-20">
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
                    src="/doctors-day-cute-young-handsome-man-lab-coat-glasses-smiling-holding-book-removebg-preview.png"
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

        {/* Meet Our Founders */}
        <Section spacing="lg">
          <Container>
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="heading-2 mb-4">Meet Our Founders</h2>
                <p className="text-body mx-auto max-w-2xl">
                  Learn from visionary healthcare leaders with decades of
                  combined clinical, research, and educational expertise.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {founders.map((founder, index) => (
                <FadeIn key={founder.name} delay={0.4 + index * 0.1}>
                  <Card hover className="overflow-hidden">
                    <div className="p-8">
                      <div className="flex items-start gap-6 mb-6">
                        <AboutImage
                          src={founder.image}
                          alt={founder.name}
                          className="w-24 h-24 rounded-xl object-cover border-2 border-primary-100 flex-shrink-0"
                        />
                        <div className="flex-1">
                          <h3 className="heading-3 mb-1">{founder.name}</h3>
                          <p className="text-primary-600 font-semibold mb-1">
                            {founder.role}
                          </p>
                          <p className="text-sm text-muted">
                            {founder.specialty}
                          </p>
                        </div>
                      </div>

                      <p className="text-body text-sm mb-4">{founder.bio}</p>

                      <div className="mb-4">
                        <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-2">
                          Key Qualifications
                        </p>
                        <ul className="space-y-1">
                          {founder.qualifications.map((qual, i) => (
                            <li
                              key={i}
                              className="text-xs text-muted flex items-start gap-2"
                            >
                              <span className="text-primary-500 mt-0.5">•</span>
                              <span>{qual}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-2">
                          Core Expertise
                        </p>
                        <ul className="space-y-1">
                          {founder.expertise.map((exp, i) => (
                            <li
                              key={i}
                              className="text-xs text-muted flex items-start gap-2"
                            >
                              <span className="text-primary-500 mt-0.5">•</span>
                              <span>{exp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-xs text-muted">
                          <span className="font-semibold text-gray-700">
                            Current Roles:{" "}
                          </span>
                          {founder.roles}
                        </p>
                      </div>
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </Section>

        {/* See What You'll Learn Section */}
        {/* <Section spacing="lg" className="bg-orange-50/30">
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
        </Section> */}

        {/* LMAI Services Section */}
        <Section
          spacing="lg"
          className="bg-gradient-to-br from-primary-50 to-primary-100/50"
        >
          <Container>
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="heading-2 mb-4">LMAI Services</h2>
                <p className="text-body mx-auto max-w-2xl text-lg">
                  Explore the comprehensive services we offer to healthcare
                  professionals and individuals.
                </p>
              </div>

              <div className="mx-auto max-w-4xl">
                <div
                  className="rounded-2xl overflow-hidden shadow-2xl bg-black"
                  style={{
                    paddingBottom: "56.25%",
                    position: "relative",
                    height: 0,
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/PUZBFwoRBuE"
                    title="LMAI Services"
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
                    }}
                  ></iframe>
                </div>
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* Watch Our Story Section */}
        {/* <Section
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

              <div className="relative z-10 mx-auto max-w-4xl">
                <div
                  className="rounded-2xl overflow-hidden shadow-2xl bg-black"
                  style={{
                    paddingBottom: "56.25%",
                    position: "relative",
                    height: 0,
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/QGGarhgofR8"
                    title="Lifestyle Medicine Academy Story"
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
                    }}
                  ></iframe>
                </div>
              </div>
            </FadeIn>
          </Container>
        </Section> */}

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
