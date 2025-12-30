import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Blog Post",
  description: "Read our latest article on lifestyle medicine.",
};

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <Navigation />
      <main>
        <Section spacing="lg">
          <Container size="md">
            <article>
              <header className="mb-8">
                <h1 className="heading-1 mb-4">Blog Post Title</h1>
                <p className="text-muted">
                  Published on {new Date().toLocaleDateString()} • 5 min read
                </p>
              </header>

              <div className="prose prose-lg max-w-none mb-8">
                <p>
                  This is where the blog content will be displayed. Content will
                  be fetched from the API and rendered here.
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
