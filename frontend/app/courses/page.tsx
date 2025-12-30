"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Nutrition Fundamentals",
      description:
        "Master evidence-based nutrition principles and transform your relationship with food.",
      level: "Beginner",
      duration: "8 weeks",
      students: "2,340",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop",
      price: "$299",
      instructor: "Dr. Sarah Mitchell",
      lessons: 32,
    },
    {
      id: 2,
      title: "Fitness & Movement Science",
      description:
        "Design effective exercise programs tailored to individual health goals and fitness levels.",
      level: "Intermediate",
      duration: "10 weeks",
      students: "1,890",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=300&fit=crop",
      price: "$349",
      instructor: "Coach James Chen",
      lessons: 40,
    },
    {
      id: 3,
      title: "Sleep Optimization & Recovery",
      description:
        "Unlock the power of quality sleep and master recovery techniques for optimal health.",
      level: "Beginner",
      duration: "6 weeks",
      students: "1,560",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1541480527022-8158e7deaf63?w=500&h=300&fit=crop",
      price: "$249",
      instructor: "Dr. Emma Rodriguez",
      lessons: 24,
    },
    {
      id: 4,
      title: "Stress Management & Mindfulness",
      description:
        "Build resilience and mental wellness through proven stress management techniques.",
      level: "Beginner",
      duration: "7 weeks",
      students: "2,150",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=300&fit=crop",
      price: "$279",
      instructor: "Dr. Lisa Chen",
      lessons: 28,
    },
    {
      id: 5,
      title: "Chronic Disease Prevention",
      description:
        "Learn to prevent and reverse chronic conditions through lifestyle interventions.",
      level: "Advanced",
      duration: "12 weeks",
      students: "980",
      rating: 4.95,
      image:
        "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=500&h=300&fit=crop",
      price: "$499",
      instructor: "Dr. Michael Johnson",
      lessons: 48,
    },
    {
      id: 6,
      title: "Holistic Health Coaching",
      description:
        "Become a certified health coach and guide others toward sustainable wellness.",
      level: "Advanced",
      duration: "16 weeks",
      students: "750",
      rating: 4.92,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop",
      price: "$799",
      instructor: "Dr. Amanda Lee",
      lessons: 64,
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
            <FadeIn delay={0.1}>
              <div className="text-center py-16 sm:py-24 relative z-10">
                <div className="mb-6 inline-block">
                  <span className="badge-modern">Our Academy</span>
                </div>
                <h1 className="heading-1 mb-6">
                  Transform Your Health With Our{" "}
                  <span className="gradient-text">Expert-Led Courses</span>
                </h1>
                <p className="text-body mx-auto max-w-2xl text-lg">
                  Learn from leading lifestyle medicine experts. Get certified,
                  gain practical skills, and build a healthier life.
                </p>
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* Filter/Stats Section */}
        <Section spacing="lg">
          <Container>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100">
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    {courses.length}
                  </div>
                  <p className="text-muted">Expert Courses</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100">
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    9,720+
                  </div>
                  <p className="text-muted">Active Students</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100">
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    4.92★
                  </div>
                  <p className="text-muted">Average Rating</p>
                </div>
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* Courses Grid */}
        <Section spacing="lg">
          <Container>
            <FadeIn delay={0.3}>
              <div className="mb-12 text-center">
                <h2 className="heading-2 mb-4">All Courses</h2>
                <p className="text-body mx-auto max-w-2xl">
                  Choose from our comprehensive selection of lifestyle medicine
                  courses.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <FadeIn key={course.id} delay={0.4 + index * 0.1}>
                  <Card hover className="overflow-hidden flex flex-col h-full">
                    {/* Course Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-200 group">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {course.level}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="heading-3 mb-2 line-clamp-2">
                        {course.title}
                      </h3>
                      <p className="text-muted mb-4 text-sm line-clamp-2">
                        {course.description}
                      </p>

                      {/* Instructor & Stats */}
                      <div className="mb-4 text-sm text-muted">
                        <p className="font-semibold text-text mb-2">
                          👨‍🏫 {course.instructor}
                        </p>
                        <div className="flex justify-between items-center">
                          <span>
                            ⭐ {course.rating} ({course.students} students)
                          </span>
                        </div>
                      </div>

                      {/* Course Meta */}
                      <div className="grid grid-cols-3 gap-4 mb-6 text-center text-sm bg-primary-50 rounded-lg p-4">
                        <div>
                          <p className="font-semibold text-primary-600">
                            {course.duration}
                          </p>
                          <p className="text-muted text-xs">Duration</p>
                        </div>
                        <div>
                          <p className="font-semibold text-primary-600">
                            {course.lessons}
                          </p>
                          <p className="text-muted text-xs">Lessons</p>
                        </div>
                        <div>
                          <p className="font-semibold text-primary-600">
                            {course.price}
                          </p>
                          <p className="text-muted text-xs">Price</p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Link
                        href={`/contact?course=${encodeURIComponent(
                          `${course.title} - ${course.level}`
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
          </Container>
        </Section>

        {/* CTA Section */}
        <Section
          spacing="lg"
          className="bg-gradient-to-r from-primary-600 to-primary-700 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <Container>
            <FadeIn delay={0.8}>
              <div className="text-center relative z-10 py-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                  Ready to Transform Your Life?
                </h2>
                <p className="text-primary-100 max-w-2xl mx-auto mb-8 text-lg">
                  Start your journey to optimal health today. Join thousands of
                  students who have changed their lives.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Get Started Today
                </Button>
              </div>
            </FadeIn>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
