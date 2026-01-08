"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import dynamic from "next/dynamic";

const EnquiryPopup = dynamic(() => import("@/components/EnquiryPopup"), {
  ssr: false,
});

export default function CourseDetailPage() {
  const searchParams = useSearchParams();
  const courseId = parseInt(searchParams?.get("id") || "1");
  const [showEnquiry, setShowEnquiry] = useState(false);

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
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
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
        "The Diploma in Lifestyle Medicine is the International Board of Lifestyle Medicine (IBLM) Certification, issued by IBLM (USA). This is the same certification offered internationally - no separate 'aligned' version. The program covers all core domains of Lifestyle Medicine with evidence-based, clinically relevant content delivered through blended learning methodology.",
      curriculum: [
        "Nutrition and Metabolic Health",
        "Physical Activity and Exercise",
        "Sleep and Circadian Rhythm",
        "Stress Management and Mental Health",
        "Social Connections and Community",
        "Substance Use Prevention",
        "Behavior Change Communication",
      ],
      benefits: [
        "Globally recognised certification",
        "Enhance professional credentials",
        "Improve patient outcomes",
        "Join international community of practitioners",
        "Career advancement opportunities",
        "Continuous learning support",
      ],
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
        "https://images.unsplash.com/photo-1576091160688-112164a01596?w=800&h=600&fit=crop",
      price: "Contact for pricing",
      instructor: "Dr Arun Das & Team",
      lessons: 40,
      features: [
        "WHO Collaborating Centre endorsed",
        "Comprehensive Lifestyle Medicine foundation",
        "Evidence-based curriculum",
        "Interactive online learning platform",
        "Mentorship and guidance",
        "Certificate of completion",
      ],
      whoShouldJoin:
        "Healthcare professionals, medical students, allied health professionals",
      aboutCourse:
        "This foundation course provides a comprehensive introduction to Lifestyle Medicine principles, endorsed by WHO Collaborating Centre. Learn evidence-based approaches to improving health through lifestyle interventions.",
      curriculum: [
        "Introduction to Lifestyle Medicine",
        "Evidence base and mechanisms",
        "Nutrition principles",
        "Physical activity and fitness",
        "Sleep hygiene",
        "Stress and mental health",
        "Behavioral change techniques",
      ],
      benefits: [
        "WHO endorsed curriculum",
        "Build foundational knowledge",
        "Learn evidence-based practices",
        "Apply immediately in practice",
        "Network with professionals",
        "Career growth opportunities",
      ],
    },
    {
      id: 3,
      title: "Wellness Programme for Educational Institutions",
      description:
        "Comprehensive Lifestyle Medicine and wellness programme tailored for schools, colleges, and universities.",
      level: "Institutional",
      duration: "Customized",
      students: "100+",
      rating: 4.92,
      image:
        "https://images.unsplash.com/photo-1523050854058-7df83faf5ddb?w=800&h=600&fit=crop",
      price: "Contact for pricing",
      instructor: "Academy Team",
      lessons: 45,
      features: [
        "Customized curriculum",
        "Student-centric approach",
        "Staff wellness integration",
        "Campus implementation support",
        "Teacher training programs",
        "Ongoing support and evaluation",
      ],
      whoShouldJoin: "School and college administrators, wellness coordinators",
      aboutCourse:
        "Specially designed programme to integrate Lifestyle Medicine principles into educational institutions, promoting student and staff wellness.",
      curriculum: [
        "Institutional wellness framework",
        "Student health education",
        "Faculty training",
        "Campus environment optimization",
        "Monitoring and evaluation",
      ],
      benefits: [
        "Improve student health outcomes",
        "Reduce healthcare costs",
        "Enhance academic performance",
        "Create healthy campus culture",
        "Staff wellness support",
      ],
    },
    {
      id: 4,
      title: "Implementation Programme for Healthcare Institutions",
      description:
        "Turnkey solution for implementing Lifestyle Medicine services in hospitals and healthcare organisations.",
      level: "Institutional",
      duration: "6 months",
      students: "50+",
      rating: 4.88,
      image:
        "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=800&h=600&fit=crop",
      price: "Contact for pricing",
      instructor: "Dr Sunil Kumar",
      lessons: 50,
      features: [
        "Complete implementation roadmap",
        "Staff training and capacity building",
        "Patient education programmes",
        "Technology integration",
        "Evaluation and monitoring systems",
        "Sustainability framework",
      ],
      whoShouldJoin: "Hospital administrators, healthcare organizations",
      aboutCourse:
        "Comprehensive programme providing end-to-end support for implementing Lifestyle Medicine services in healthcare institutions.",
      curriculum: [
        "Implementation strategy",
        "Organizational structure",
        "Staff training modules",
        "Patient pathways",
        "Technology platforms",
        "Quality assurance",
      ],
      benefits: [
        "Improve patient outcomes",
        "Reduce healthcare costs",
        "Enhance reputation",
        "Staff professional development",
        "Sustainable growth",
        "Quality improvement",
      ],
    },
    {
      id: 5,
      title: "Specialisation: Nutrition and Metabolic Health",
      description:
        "In-depth specialisation course focusing on nutrition science and metabolic disease management using Lifestyle Medicine approaches.",
      level: "Advanced",
      duration: "3 months",
      students: "300+",
      rating: 4.96,
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop",
      price: "Contact for pricing",
      instructor: "Dr Nutrition Expert",
      lessons: 35,
      features: [
        "Advanced nutrition science",
        "Metabolic disease management",
        "Dietary interventions",
        "Patient counseling skills",
        "Evidence-based nutrition",
      ],
      whoShouldJoin:
        "Healthcare professionals interested in nutrition specialisation",
      aboutCourse:
        "Advanced specialisation in nutrition and metabolic health using evidence-based Lifestyle Medicine principles.",
      curriculum: [
        "Nutritional biochemistry",
        "Metabolic diseases",
        "Dietary patterns",
        "Supplementation",
        "Patient nutrition counseling",
      ],
      benefits: [
        "Expert nutrition knowledge",
        "Advanced counseling skills",
        "Specialisation credentials",
        "Practice enhancement",
        "Patient satisfaction",
      ],
    },
    {
      id: 6,
      title: "Clinician Wellbeing and Burnout Prevention",
      description:
        "Specialised programme addressing clinician burnout through evidence-based wellbeing strategies.",
      level: "Professional",
      duration: "8 weeks",
      students: "200+",
      rating: 4.95,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
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
      curriculum: [
        "Burnout understanding",
        "Wellness strategies",
        "Stress management",
        "Resilience building",
        "Support systems",
      ],
      benefits: [
        "Better work-life balance",
        "Reduced burnout",
        "Improved mental health",
        "Enhanced resilience",
        "Career satisfaction",
      ],
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
        "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=800&h=600&fit=crop",
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
      curriculum: [
        "Health fundamentals",
        "Nutrition basics",
        "Movement and exercise",
        "Sleep and stress",
        "Lifestyle changes",
      ],
      benefits: [
        "Better health knowledge",
        "Practical tips",
        "Community learning",
        "Personal improvement",
        "Disease prevention",
      ],
    },
  ];

  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <>
        <Navigation />
        <Section spacing="lg">
          <Container>
            <div className="text-center py-12">
              <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
              <p className="text-lg text-muted mb-8">
                The course you're looking for doesn't exist.
              </p>
              <Button
                variant="primary"
                size="lg"
                onClick={() => (window.location.href = "/courses")}
              >
                Back to Courses
              </Button>
            </div>
          </Container>
        </Section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      {showEnquiry && <EnquiryPopup />}

      <main>
        {/* Hero Section */}
        <Section
          spacing="lg"
          className="bg-gradient-to-r from-primary-600 to-primary-700 text-white pt-20"
        >
          <Container>
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <div>
                  <div className="inline-block bg-primary-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    {course.level}
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                    {course.title}
                  </h1>
                  <p className="text-primary-100 text-lg mb-6">
                    {course.description}
                  </p>

                  {/* Course Stats */}
                  <div className="grid grid-cols-3 gap-6 mb-8 bg-primary-700 bg-opacity-50 p-6 rounded-lg">
                    <div>
                      <p className="text-2xl font-bold">{course.duration}</p>
                      <p className="text-primary-100 text-sm">Duration</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{course.lessons}</p>
                      <p className="text-primary-100 text-sm">Lessons</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">⭐ {course.rating}</p>
                      <p className="text-primary-100 text-sm">Rating</p>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={() => setShowEnquiry(true)}
                    >
                      Enroll Now
                    </Button>
                    <Button
                      variant="primary"
                      size="lg"
                      className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-600"
                      onClick={() => (window.location.href = "/courses")}
                    >
                      Back to Courses
                    </Button>
                  </div>
                </div>

                {/* Image */}
                <FadeIn delay={0.2}>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="rounded-lg shadow-2xl w-full"
                  />
                </FadeIn>
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* About Course */}
        <Section spacing="lg">
          <Container>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold mb-4">About This Course</h2>
                  <p className="text-lg text-muted mb-8 leading-relaxed">
                    {course.aboutCourse}
                  </p>

                  {/* Curriculum */}
                  <h3 className="text-2xl font-bold mb-4">Curriculum</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {course.curriculum.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          ✓
                        </div>
                        <div>
                          <p className="font-semibold text-text">{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary-600 font-bold">▸</span>
                        <span className="text-muted text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  {/* Instructor Card */}
                  <div className="bg-primary-50 rounded-lg p-6 mb-6 sticky top-24">
                    <h3 className="text-xl font-bold mb-4">Course Details</h3>

                    <div className="mb-6">
                      <p className="text-sm text-muted mb-2">Instructor</p>
                      <p className="font-semibold text-lg">
                        {course.instructor}
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm text-muted mb-2">Duration</p>
                      <p className="font-semibold text-lg">{course.duration}</p>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm text-muted mb-2">Lessons</p>
                      <p className="font-semibold text-lg">{course.lessons}</p>
                    </div>

                    <div className="mb-6 p-4 bg-white rounded-lg">
                      <p className="text-sm text-muted mb-2">Price</p>
                      <p className="text-2xl font-bold text-primary-600">
                        {course.price}
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm text-muted mb-2">Students</p>
                      <p className="font-semibold text-lg">{course.students}</p>
                    </div>

                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full"
                      onClick={() => setShowEnquiry(true)}
                    >
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* Benefits Section */}
        <Section
          spacing="lg"
          className="bg-gradient-to-br from-primary-50 to-primary-100"
        >
          <Container>
            <FadeIn delay={0.2}>
              <h2 className="text-3xl font-bold text-center mb-12">
                Benefits of This Course
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {course.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="text-3xl font-bold text-primary-600 mb-4">
                      ✓
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit}</h3>
                    <p className="text-muted">
                      Enhance your knowledge and career with this comprehensive
                      course.
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* Who Should Join */}
        <Section spacing="lg">
          <Container>
            <FadeIn delay={0.2}>
              <div className="bg-primary-50 rounded-xl p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-4">Who Should Join?</h2>
                <p className="text-lg text-muted mb-6 leading-relaxed">
                  {course.whoShouldJoin}
                </p>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setShowEnquiry(true)}
                >
                  Apply Now
                </Button>
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section
          spacing="lg"
          className="bg-gradient-to-r from-primary-600 to-primary-700"
        >
          <Container>
            <FadeIn delay={0.2}>
              <div className="text-center text-white py-12">
                <h2 className="text-4xl font-bold mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
                  Enroll now and start your journey toward professional growth
                  and expertise in Lifestyle Medicine.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => setShowEnquiry(true)}
                >
                  Enroll Now
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
