import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";
import { Card } from "@/components/Card";
import { HeroImage } from "@/components/HeroImage";
import { CourseImage } from "@/components/CourseImage";
import { ModernStat } from "@/components/ModernStat";
import { ModernFeatureCard } from "@/components/ModernFeatureCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lifestyle Medicine Academy | Learn Health & Wellness",
  description:
    "Transform your health with expert-led lifestyle medicine courses. Learn nutrition, fitness, sleep optimization, and stress management from certified professionals.",
  openGraph: {
    title: "Lifestyle Medicine Academy",
    description:
      "Expert-led courses in lifestyle medicine and health optimization.",
    url: "https://lifestylemedicine.org",
    type: "website",
  },
};

export default function Home() {
  const featuredCourses = [
    {
      id: 1,
      title: "Nutrition Fundamentals",
      level: "Beginner",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop&q=80",
      fallbackImage:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=300&fit=crop&q=80",
      students: "2,340",
      rating: 4.9,
      duration: "8 weeks",
    },
    {
      id: 2,
      title: "Fitness & Movement Science",
      level: "Intermediate",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=300&fit=crop&q=80",
      fallbackImage:
        "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=500&h=300&fit=crop&q=80",
      students: "1,890",
      rating: 4.8,
      duration: "10 weeks",
    },
    {
      id: 3,
      title: "Sleep Optimization",
      level: "Beginner",
      image:
        "https://images.unsplash.com/photo-1541480527022-8158e7deaf63?w=500&h=300&fit=crop&q=80",
      fallbackImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop&q=80",
      students: "1,560",
      rating: 4.9,
      duration: "6 weeks",
    },
  ];

  const whyChooseUs = [
    {
      icon: "👨‍🎓",
      title: "Expert Instructors",
      description:
        "Learn from certified lifestyle medicine professionals with 15+ years experience.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: "📚",
      title: "Comprehensive Curriculum",
      description:
        "300+ lessons covering nutrition, fitness, sleep, stress management, and more.",
      color: "from-green-400 to-green-600",
    },
    {
      icon: "🌍",
      title: "Flexible Learning",
      description:
        "Learn at your own pace with lifetime access to all course materials.",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: "🏆",
      title: "Certified Courses",
      description:
        "Earn recognized certificates upon course completion to boost your credentials.",
      color: "from-orange-400 to-orange-600",
    },
    {
      icon: "💬",
      title: "Community Support",
      description:
        "Join thousands of students in our active learning community with mentorship.",
      color: "from-pink-400 to-pink-600",
    },
    {
      icon: "📊",
      title: "Real Results",
      description:
        "95% of students report significant health improvements within 90 days.",
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
                      Master Lifestyle Medicine
                    </span>{" "}
                    and Transform Health
                  </h1>
                  <p className="text-body mx-0 mb-8 text-lg">
                    Learn evidence-based strategies for nutrition, fitness,
                    sleep, and stress management. Join thousands of students
                    transforming their health and building thriving careers.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="primary" size="lg">
                      <Link href="/courses">Explore Courses</Link>
                    </Button>
                    <Button variant="secondary" size="lg">
                      <Link href="/contact">Get Started Free</Link>
                    </Button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mt-12">
                    <ModernStat
                      number="9,720+"
                      label="Active Students"
                      icon="🎓"
                      delay={0}
                    />
                    <ModernStat
                      number="6"
                      label="Expert Courses"
                      icon="�"
                      delay={100}
                    />
                    <ModernStat
                      number="4.92★"
                      label="Average Rating"
                      icon="✨"
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
                <h2 className="heading-2 mb-4">Featured Courses</h2>
                <p className="text-body mx-auto max-w-2xl">
                  Start with our most popular courses loved by thousands of
                  students worldwide.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {featuredCourses.map((course, index) => (
                <FadeIn key={course.id} delay={0.3 + index * 0.1}>
                  <Card
                    hover
                    className="overflow-hidden flex flex-col h-full group"
                  >
                    {/* Image with Animation */}
                    <div className="relative h-48 overflow-hidden bg-gray-200">
                      <CourseImage
                        src={course.image}
                        alt={course.title}
                        fallbackSrc={course.fallbackImage}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                        {course.level}
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="heading-3 mb-3">{course.title}</h3>

                      <div className="mb-4 flex justify-between items-center text-sm text-muted">
                        <span>⭐ {course.rating}</span>
                        <span>{course.students} students</span>
                      </div>

                      <div className="mb-6 text-sm font-semibold text-primary-600">
                        ⏱️ {course.duration}
                      </div>

                      <Link
                        href={`/contact?course=${encodeURIComponent(
                          course.title
                        )}`}
                        className="w-full mt-auto"
                      >
                        <Button
                          variant="primary"
                          size="md"
                          className="w-full mt-auto"
                        >
                          Enroll Now
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>

            <div className="text-center">
              <Button variant="secondary" size="lg">
                <Link href="/courses">View All Courses</Link>
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
                  icon={item.icon}
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
