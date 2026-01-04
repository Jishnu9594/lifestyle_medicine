import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

type PageProps = {
  params: {
    slug: string;
  };
};

export const metadata: Metadata = {
  title: "Blog Post",
  description: "Read our latest article on lifestyle medicine.",
};

export default function BlogDetailPage({ params }: PageProps) {
  const { slug } = params; // ✅ FIX: slug is now used

  return (
    <>
      <Navigation />
      <main className="pt-14 sm:pt-16 md:pt-20">
        <Section spacing="lg">
          <Container size="md">
            <article>
              <header className="mb-8">
                <h1 className="heading-1 mb-4">Blog Post: {slug}</h1>
                <p className="text-muted">
                  Published on {new Date().toLocaleDateString()} • 5 min read
                </p>
              </header>

              <div className="prose prose-lg max-w-none mb-8">
                <p>
                  This content is rendered for blog slug:{" "}
                  <strong>{slug}</strong>.
                </p>
                <p>
                  In the next step, this data will be fetched from the FastAPI
                  backend and rendered dynamically.
                </p>
              </div>

              {/* CTA */}
              <div className="bg-primary-50 rounded-lg p-8 text-center">
                <h3 className="heading-3 mb-4">
                  Ready to transform your health?
                </h3>
                <p className="text-body mb-6">
                  Get personalized guidance from our wellness experts.
                </p>
                <a href="/contact" className="button-primary">
                  Schedule a Consultation
                </a>
              </div>
            </article>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
