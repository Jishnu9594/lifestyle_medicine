"use client";

import { useState, useEffect, Suspense } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FadeIn } from "@/components/FadeIn";
import { contactFormSchema, ContactFormData } from "@/lib/validation";
import { leadAPI } from "@/lib/api";

function ContactFormContent() {
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

  return (
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
  );
}

export function ContactFormSection() {
  return (
    <Section spacing="lg" className="bg-gradient-to-br from-primary-50 to-primary-100/50">
      <Suspense fallback={<div>Loading form...</div>}>
        <ContactFormContent />
      </Suspense>
    </Section>
  );
}
