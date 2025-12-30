import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using Lifestyle Medicine website",
};

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main>
        <Section spacing="lg">
          <Container size="md">
            <h1 className="heading-1 mb-8">Terms & Conditions</h1>

            <div className="prose prose-lg max-w-none space-y-6">
              <h2 className="heading-2">1. Agreement to Terms</h2>
              <p className="text-body">
                By accessing and using this website, you accept and agree to be
                bound by the terms and provision of this agreement.
              </p>

              <h2 className="heading-2">2. Use License</h2>
              <p className="text-body">
                Permission is granted to temporarily download one copy of the
                materials (information or software) on the Lifestyle Medicine
                website for personal, non-commercial transitory viewing only.
                This is the grant of a license, not a transfer of title, and
                under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body">
                <li>Modify or copy the materials</li>
                <li>
                  Use the materials for any commercial purpose or for any public
                  display
                </li>
                <li>
                  Attempt to decompile or reverse engineer any software
                  contained on the website
                </li>
                <li>
                  Remove any copyright or other proprietary notations from the
                  materials
                </li>
                <li>
                  Transfer the materials to another person or "mirror" the
                  materials on any other server
                </li>
              </ul>

              <h2 className="heading-2">3. Disclaimer</h2>
              <p className="text-body">
                The materials on the Lifestyle Medicine website are provided on
                an 'as is' basis. Lifestyle Medicine makes no warranties,
                expressed or implied, and hereby disclaims and negates all other
                warranties including, without limitation, implied warranties or
                conditions of merchantability, fitness for a particular purpose,
                or non-infringement of intellectual property or other violation
                of rights.
              </p>

              <h2 className="heading-2">4. Limitations</h2>
              <p className="text-body">
                In no event shall Lifestyle Medicine or its suppliers be liable
                for any damages (including, without limitation, damages for loss
                of data or profit, or due to business interruption) arising out
                of the use or inability to use the materials on the Lifestyle
                Medicine website.
              </p>

              <h2 className="heading-2">5. Accuracy of Materials</h2>
              <p className="text-body">
                The materials appearing on the Lifestyle Medicine website could
                include technical, typographical, or photographic errors.
                Lifestyle Medicine does not warrant that any of the materials on
                its website are accurate, complete, or current. Lifestyle
                Medicine may make changes to the materials contained on its
                website at any time without notice.
              </p>

              <h2 className="heading-2">6. Contact Us</h2>
              <p className="text-body">
                If you have any questions about these Terms and Conditions,
                please contact us at legal@lifestylemedicine.com
              </p>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
