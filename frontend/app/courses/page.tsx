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
      title: "Diploma in Lifestyle Medicine (IBLM)",
      description:
        "International certification in Lifestyle Medicine issued by the International Board of Lifestyle Medicine (USA). For medical doctors, allied healthcare professionals, and public health professionals.",
      level: "Professional",
      duration: "Blended",
      students: "500+",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop",
      price: "Contact for pricing",
      instructor: "Dr Sunil Kumar & Faculty",
      lessons: 60,
      isNew: true,
      features: [
        "Internationally recognised IBLM certification",
        "Evidence-based Lifestyle Medicine curriculum",
        "All core Lifestyle Medicine domains covered",
        "Clinically relevant and practice-oriented",
        "Blended delivery: online learning, live sessions, mentorship",
        "Global standards aligned with IBLM requirements",
      ],
      whoShouldJoin:
        "Medical doctors, allied healthcare professionals, public health professionals (as per IBLM requirements)",
      aboutCourse:
        "The Diploma in Lifestyle Medicine is the International Board of Lifestyle Medicine (IBLM) Certification, issued by IBLM (USA). This is the same certification offered internationally - no separate 'aligned' version.",
    },
    {
      id: 2,
      title: "Foundation Course in Lifestyle Medicine",
      description:
        "Endorsed and evaluated by WHO Collaborating Centre. Introduction to evidence-based Lifestyle Medicine principles and application.",
      level: "Professional",
      duration: "3 months",
      students: "500+",
      rating: 4.95,
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=300&fit=crop",
      price: "Contact for pricing",
      instructor: "Dr Sunil Kumar & Faculty",
      lessons: 50,
      features: [
        "WHO Collaborating Centre endorsed",
        "20+ hours of video modules",
        "Live online sessions and Q&A",
        "Case-based clinical reflections",
        "Downloadable materials and workbooks",
        "Certificate of Completion",
        "Optional dual certification from ELMO",
      ],
      whoShouldJoin:
        "Healthcare professionals, medical students, allied health professionals, public health professionals",
      aboutCourse:
        "Foundation course in Lifestyle Medicine endorsed by WHO Collaborating Centre, School of Primary Care and Public Health at Imperial College London.",
    },
    {
      id: 3,
      title: "Lifestyle Medicine for Medical Students & Trainees",
      description:
        "Specialised programme for medical students and resident doctors to integrate Lifestyle Medicine into clinical training.",
      level: "Professional",
      duration: "Varies",
      students: "300+",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1541480527022-8158e7deaf63?w=500&h=300&fit=crop",
      price: "Contact for pricing",
      instructor: "Dr Sunil Kumar & Faculty",
      lessons: 40,
      features: [
        "Tailored for medical education context",
        "Evidence-based curriculum",
        "Clinical case integration",
        "Mentorship from faculty",
        "Career advancement focus",
      ],
      whoShouldJoin: "Medical students, resident doctors, PG trainees",
      aboutCourse:
        "Specialised Lifestyle Medicine education designed for integration into medical student and trainee curricula.",
    },
    {
      id: 4,
      title: "Lifestyle Medicine for Allied Health Professionals",
      description:
        "Professional programme for nurses, physiotherapists, dietitians, and other allied health professionals.",
      level: "Professional",
      duration: "Varies",
      students: "250+",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=300&fit=crop",
      price: "Contact for pricing",
      instructor: "Dr Sunil Kumar & Faculty",
      lessons: 35,
      features: [
        "Role-specific curriculum",
        "Interdisciplinary teamwork focus",
        "Practical application",
        "Professional certification",
      ],
      whoShouldJoin:
        "Nurses, physiotherapists, dietitians, occupational therapists, other allied health professionals",
      aboutCourse:
        "Specialised Lifestyle Medicine programme for allied health professionals to enhance scope and competency.",
    },
    {
      id: 5,
      title: "Faculty Development & Train-the-Trainer",
      description:
        "Develop faculty and trainers to deliver Lifestyle Medicine education in medical colleges and institutions.",
      level: "Advanced",
      duration: "Custom",
      students: "150+",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=500&h=300&fit=crop",
      price: "Contact for pricing",
      instructor: "Dr Sunil Kumar & Faculty",
      lessons: 50,
      features: [
        "Trainer certification",
        "Curriculum development guidance",
        "Teaching methodology",
        "Institutional integration support",
        "Ongoing faculty support",
      ],
      whoShouldJoin:
        "Medical college faculty, institutional leaders, curriculum developers",
      aboutCourse:
        "Comprehensive faculty development programme to build capacity for Lifestyle Medicine education delivery across institutions.",
    },
    {
      id: 6,
      title: "Burnout Prevention & Clinician Wellbeing",
      description:
        "Specialised programme addressing clinician burnout through evidence-based wellbeing strategies.",
      level: "Professional",
      duration: "8 weeks",
      students: "200+",
      rating: 4.95,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop",
      price: "Contact for pricing",
      instructor: "Dr Sunil Kumar",
      lessons: 32,
      features: [
        "Evidence-based burnout prevention",
        "Clinician wellbeing strategies",
        "Stress management techniques",
        "Peer support frameworks",
        "Institutional implementation guidance",
      ],
      whoShouldJoin: "Doctors, healthcare professionals, institutional leaders",
      aboutCourse:
        "Comprehensive programme addressing clinician burnout and promoting sustainable wellbeing in healthcare.",
    },
    {
      id: 7,
      title: "Public: Introduction to Lifestyle Medicine",
      description:
        "Free or low-cost public education about Lifestyle Medicine principles for everyone, not just clinicians.",
      level: "Beginner",
      duration: "4 weeks",
      students: "1000+",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=500&h=300&fit=crop",
      price: "Free/Minimal",
      instructor: "Academy Team",
      lessons: 20,
      features: [
        "Lifestyle Medicine basics",
        "Practical health tips",
        "Disease prevention education",
        "Community-focused",
        "Non-clinical educational content",
      ],
      whoShouldJoin: "General public interested in lifestyle medicine",
      aboutCourse:
        "Public education programme making Lifestyle Medicine knowledge accessible to everyone.",
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
