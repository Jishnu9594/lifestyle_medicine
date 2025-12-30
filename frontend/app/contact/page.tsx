"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FadeIn } from "@/components/FadeIn";
import { contactFormSchema, ContactFormData } from "@/lib/validation";
import { leadAPI } from "@/lib/api";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const [courseEnrolling, setCourseEnrolling] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const { control, handleSubmit, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  useEffect(() => {
    const courseParam = searchParams.get("course");
    if (courseParam) {
      setCourseEnrolling(decodeURIComponent(courseParam));
    }
  }, [searchParams]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const submitData = {
        ...data,
        message: courseEnrolling
          ? `Course Enrollment: ${courseEnrolling}\n\n${data.message}`
          : data.message,
      };
      await leadAPI.submit(submitData);
      setSubmitMessage("Thank you! We will get back to you soon.");
      reset();
      setTimeout(() => setSubmitMessage(""), 5000);
    } catch {
      setSubmitMessage("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      content: "info@lifestylemedicine.com",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: "📱",
      title: "Phone",
      content: "+1 (555) 123-4567",
      color: "from-green-400 to-green-600",
    },
    {
      icon: "📍",
      title: "Location",
      content: "123 Wellness Street, Health City, HC 12345",
      color: "from-purple-400 to-purple-600",
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

          <Container>
            <FadeIn delay={0.1}>
              <div className="text-center py-16 sm:py-24 relative z-10">
                <div className="mb-6 inline-block">
                  <span className="badge-modern">Get In Touch With Us</span>
                </div>
                <h1 className="heading-1 mb-6">
                  <span className="gradient-text">Let's Start Your</span>
                  <br />
                  Wellness Journey
                </h1>
                <p className="text-body mx-auto max-w-2xl">
                  Ready to transform your health? Fill out the form below and
                  our team will be in touch within 24 hours.
                </p>
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* Contact Info Cards */}
        <Section spacing="lg">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {contactInfo.map((item, index) => (
                <FadeIn key={item.title} delay={0.2 + index * 0.1}>
                  <Card hover gradient>
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl shadow-lg mb-4`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="heading-3 mb-2">{item.title}</h3>
                    <p className="text-muted">{item.content}</p>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </Section>

        {/* Contact Form Section */}
        <Section
          spacing="lg"
          className="bg-gradient-to-br from-primary-50 to-primary-100/50"
        >
          <Container size="md">
            <FadeIn delay={0.3}>
              <div className="mb-12 text-center">
                <h2 className="heading-2 mb-4">
                  {courseEnrolling ? "Enroll in Course" : "Send us a Message"}
                </h2>
                <p className="text-body">
                  {courseEnrolling
                    ? `You're about to enroll in: ${courseEnrolling}`
                    : "Fill out the form below and we'll get back to you as soon as possible."}
                </p>
              </div>

              <Card hover className="card-modern">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      name="name"
                      control={control}
                      label="Full Name"
                      placeholder="John Doe"
                      required
                    />
                    <Input
                      name="email"
                      control={control}
                      label="Email Address"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <Input
                    name="phone"
                    control={control}
                    label="Phone Number"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                  />

                  <TextArea
                    name="message"
                    control={control}
                    label="Message"
                    placeholder="Tell us about your health goals and how we can help..."
                    required
                    rows={6}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  {submitMessage && (
                    <div
                      className={`p-4 rounded-xl text-center font-medium transition-all duration-300 animate-fadeInUp ${
                        submitMessage.includes("Thank")
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-red-50 text-red-700 border border-red-200"
                      }`}
                    >
                      {submitMessage}
                    </div>
                  )}
                </form>
              </Card>
            </FadeIn>
          </Container>
        </Section>

        {/* Map Placeholder */}
        <Section spacing="lg">
          <Container>
            <FadeIn delay={0.4}>
              <div className="mb-8 text-center">
                <h2 className="heading-2 mb-4">Find Us</h2>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl h-96 bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center border border-primary-200">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-primary-600 font-semibold">Location Map</p>
                  <p className="text-sm text-primary-500">
                    Replace with your map embed
                  </p>
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
