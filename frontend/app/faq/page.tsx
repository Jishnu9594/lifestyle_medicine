import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import { useState } from "react";

export const metadata: Metadata = {
  title: "FAQ | Lifestyle Medicine Academy India",
  description:
    "Frequently asked questions about IBLM certification, courses, clinical services, and Lifestyle Medicine Academy India programmes.",
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Certification & IBLM",
      questions: [
        {
          q: "Do you offer the IBLM Certification?",
          a: "Yes. We offer the Diploma in Lifestyle Medicine, which is the International Board of Lifestyle Medicine (IBLM) Certification.",
        },
        {
          q: "Who issues the certification?",
          a: "The certification is issued by the International Board of Lifestyle Medicine (USA). The programme is delivered through Lifestyle Medicine Academy India.",
        },
        {
          q: "Is this internationally recognised?",
          a: "Yes. This is the same IBLM certification offered internationally. There is no separate or 'aligned' certification - graduates hold the official IBLM credential in Lifestyle Medicine.",
        },
        {
          q: "What are the IBLM certification requirements?",
          a: "Eligibility includes medical doctors, allied healthcare professionals, and public health professionals meeting IBLM requirements. Contact us for specific eligibility criteria.",
        },
      ],
    },
    {
      category: "Courses & Programmes",
      questions: [
        {
          q: "Are all courses paid?",
          a: "Yes. All professional courses and institutional programmes are paid offerings. However, we offer free public education programmes in Lifestyle Medicine.",
        },
        {
          q: "What's the difference between the diploma and foundation course?",
          a: "The Diploma in Lifestyle Medicine is the IBLM certification. The Foundation Course in Lifestyle Medicine is an introductory programme endorsed by WHO Collaborating Centre. Both are valuable but serve different purposes.",
        },
        {
          q: "Can allied health professionals take the IBLM certification?",
          a: "Yes. We have dedicated Lifestyle Medicine programmes for allied health professionals (nurses, physiotherapists, dietitians, etc.). Some may also pursue IBLM certification based on their credentials and IBLM eligibility.",
        },
        {
          q: "Do you offer train-the-trainer programmes?",
          a: "Yes. We offer Faculty Development & Train-the-Trainer Programmes for medical college faculty and institutional leaders.",
        },
      ],
    },
    {
      category: "Services & Clinical",
      questions: [
        {
          q: "Do you provide clinical treatment?",
          a: "No. We are an education and professional services organisation. Clinical care remains the responsibility of licensed healthcare providers.",
        },
        {
          q: "Do you help set up Lifestyle Medicine clinics?",
          a: "Yes. We provide professional consultation and turnkey services for clinics, hospitals, schools, and organisations seeking to establish or scale Lifestyle Medicine services.",
        },
        {
          q: "What turnkey services do you offer?",
          a: "Our turnkey services include: establishing Lifestyle Medicine clinics, hospital-based services, preventive health pathways, workforce training, curriculum development for medical colleges, and institutional programme design.",
        },
        {
          q: "Do you work with institutions?",
          a: "Yes. We partner with schools, colleges, medical institutions, hospitals, and organisations for Lifestyle Medicine integration, faculty training, and curriculum development.",
        },
      ],
    },
    {
      category: "Programme Details",
      questions: [
        {
          q: "How long are the programmes?",
          a: "Programme duration varies. IBLM Diploma is blended (online, live, mentorship). Foundation Course is 3 months. Other programmes range from 4-16 weeks depending on level.",
        },
        {
          q: "What are the delivery formats?",
          a: "We use blended delivery: online learning modules, live interactive sessions, practical case reflections, mentorship, and in some cases, clinic setup guidance.",
        },
        {
          q: "Is there a payment plan?",
          a: "Contact us for specific pricing and payment options. We work with individuals and organisations to find suitable arrangements.",
        },
        {
          q: "What happens after course completion?",
          a: "You receive a certificate of completion. For IBLM certification, you earn the official IBLM credential. Some programmes offer dual certifications.",
        },
      ],
    },
    {
      category: "Affiliations & Governance",
      questions: [
        {
          q: "What are your affiliations?",
          a: "We collaborate with: International Board of Lifestyle Medicine (USA), European Lifestyle Medicine Organisation, WHO Collaborating Centre at Imperial College London, and National Skill Development Corporation (NSDC).",
        },
        {
          q: "Are programmes NSDC-aligned?",
          a: "Yes. Our programmes support upskilling and workforce readiness aligned with NSDC objectives, covering preventive healthcare skills, behaviour change communication, and health systems thinking.",
        },
        {
          q: "Is the organisation clinician-led?",
          a: "Yes. We are founded and led by clinicians - Dr Sunil Kumar (Founder & Director) and Dr Arun Das (Co-Founder) - bringing clinical expertise and real-world implementation experience.",
        },
      ],
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
              <div className="text-center py-12 sm:py-24 relative z-10">
                <h1 className="heading-1 mb-6">
                  <span className="gradient-text">Frequently Asked</span> Questions
                </h1>
                <p className="text-body mx-auto max-w-2xl text-lg">
                  Find answers to common questions about IBLM certification, our programmes, services, and Lifestyle Medicine Academy India.
                </p>
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* FAQ Content */}
        <Section spacing="lg">
          <Container>
            {faqs.map((section, sectionIndex) => (
              <FadeIn key={section.category} delay={0.2 + sectionIndex * 0.1}>
                <div className="mb-16">
                  <h2 className="heading-2 mb-8 text-primary-600">
                    {section.category}
                  </h2>

                  <div className="space-y-4">
                    {section.questions.map((item, qIndex) => (
                      <FAQItem key={qIndex} question={item.q} answer={item.a} />
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </Container>
        </Section>

        {/* Contact CTA */}
        <Section
          spacing="lg"
          className="bg-gradient-to-r from-primary-600 to-primary-700 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

          <Container>
            <FadeIn delay={0.8}>
              <div className="text-center relative z-10 py-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                  Still have questions?
                </h2>
                <p className="text-primary-100 max-w-2xl mx-auto mb-8 text-lg">
                  Reach out to our team. We're here to help you find the right programme for your goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button variant="primary" size="lg">
                      Get in Touch
                    </Button>
                  </Link>
                  <Link href="/courses">
                    <Button variant="secondary" size="lg">
                      Browse Programmes
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

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card
      hover
      className="cursor-pointer transition-all duration-300 overflow-hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <h3 className="heading-4 text-left flex-1">{question}</h3>
          <span
            className={`text-2xl ml-4 transition-transform duration-300 flex-shrink-0 ${
              isOpen ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </div>

        {isOpen && (
          <p className="text-body mt-4 pt-4 border-t border-primary-100">
            {answer}
          </p>
        )}
      </div>
    </Card>
  );
}
