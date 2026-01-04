import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Lifestyle Medicine",
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="pt-14 sm:pt-16 md:pt-20">
        <Section spacing="lg">
          <Container size="md">
            <h1 className="heading-1 mb-8">Privacy Policy</h1>

            <div className="prose prose-lg max-w-none space-y-6">
              <h2 className="heading-2">1. Introduction</h2>
              <p className="text-body">
                We are committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information.
              </p>

              <h2 className="heading-2">2. Information We Collect</h2>
              <p className="text-body">
                We may collect information about you in a variety of ways. The
                information we may collect on the site includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Message content</li>
              </ul>

              <h2 className="heading-2">3. Use of Your Information</h2>
              <p className="text-body">
                Having accurate information about you permits us to provide you
                with a smooth, efficient, and customized experience.
                Specifically, we may use information collected about you via the
                site to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body">
                <li>Generate a personal profile about you</li>
                <li>Increase the efficiency and operation of the site</li>
                <li>
                  Monitor and analyze usage and trends to improve your
                  experience
                </li>
                <li>Respond to your inquiries</li>
              </ul>

              <h2 className="heading-2">4. Disclosure of Your Information</h2>
              <p className="text-body">
                We do not sell, trade, or rent users' personal identification
                information to others. We may share generic aggregated
                demographic information not linked to any personal
                identification information regarding visitors and users.
              </p>

              <h2 className="heading-2">5. Security of Your Information</h2>
              <p className="text-body">
                We use administrative, technical, and physical security measures
                to help protect your personal information. While we strive to
                use commercially acceptable means to protect your personal
                information, we cannot guarantee its absolute security.
              </p>

              <h2 className="heading-2">6. Contact Us</h2>
              <p className="text-body">
                If you have questions or comments about this Privacy Policy,
                please contact us at privacy@lifestylemedicine.com
              </p>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
