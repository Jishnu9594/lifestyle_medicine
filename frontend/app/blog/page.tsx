import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest articles on lifestyle medicine, health, and wellness.",
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Power of Nutrition in Disease Prevention",
      slug: "nutrition-disease-prevention",
      excerpt:
        "Discover how proper nutrition can be your most powerful tool against chronic diseases.",
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "Sleep: The Foundation of Health",
      slug: "sleep-foundation-health",
      excerpt:
        "Understanding sleep architecture and how to optimize your sleep quality.",
      date: "2024-01-10",
    },
  ];

  return (
    <>
      <Navigation />
      <main>
        <Section spacing="lg" className="bg-primary-50">
          <Container>
            <div className="text-center py-8">
              <h1 className="heading-1 mb-4">Blog</h1>
              <p className="text-body mx-auto max-w-2xl">
                Evidence-based insights on lifestyle medicine and wellness.
              </p>
            </div>
          </Container>
        </Section>

        <Section spacing="lg">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.length > 0 ? (
                blogPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group"
                  >
                    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <p className="text-sm text-muted mb-2">
                        {new Date(post.date).toLocaleDateString()}
                      </p>
                      <h2 className="heading-3 mb-3 group-hover:text-primary-500 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted mb-4">{post.excerpt}</p>
                      <span className="text-primary-500 font-semibold">
                        Read More →
                      </span>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="col-span-2 text-center py-12">
                  <p className="text-muted">
                    No blog posts yet. Check back soon!
                  </p>
                </div>
              )}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
