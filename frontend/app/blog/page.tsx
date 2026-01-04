"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";
import { Card } from "@/components/Card";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { blogAPI } from "@/lib/api";

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await blogAPI.getAll(0, 20);
        setBlogPosts(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs. Please try again later.");
        setBlogPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const categories = [
    ...new Set(blogPosts.map((post) => post.category).filter(Boolean)),
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen overflow-hidden">
        {/* Hero Section */}
        <Section
          spacing="lg"
          className="bg-gradient-to-br from-primary-50 via-white to-primary-100/50"
        >
          <Container>
            <FadeIn delay={0.1}>
              <div className="text-center py-16 sm:py-24">
                <div className="mb-6 inline-block">
                  <span className="badge-modern">Our Latest Articles</span>
                </div>
                <h1 className="heading-1 mb-6">
                  <span className="gradient-text">Health & Wellness</span>
                  <br />
                  Insights
                </h1>
                <p className="text-body mx-auto max-w-2xl text-lg">
                  Evidence-based articles on lifestyle medicine, nutrition,
                  fitness, sleep, and stress management.
                </p>
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* Categories Filter */}
        <Section spacing="lg">
          <Container>
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap gap-3 justify-center mb-12">
                <button className="px-6 py-2 rounded-full bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-colors">
                  All Articles
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-6 py-2 rounded-full border-2 border-primary-200 text-primary-600 font-semibold hover:bg-primary-50 hover:border-primary-300 transition-all"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* Blog Posts Grid */}
        <Section spacing="lg">
          <Container>
            {error && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 font-semibold">{error}</p>
              </div>
            )}
            {loading && (
              <div className="text-center py-12">
                <p className="text-muted text-lg">Loading blogs...</p>
              </div>
            )}
            {!loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.length > 0 ? (
                  blogPosts.map((post, index) => (
                    <FadeIn key={post.id} delay={0.3 + index * 0.1}>
                      <Link href={`/blog/${post.slug}`} className="group">
                        <Card
                          hover
                          className="overflow-hidden flex flex-col h-full"
                        >
                          {/* Image */}
                          <div className="relative h-48 overflow-hidden bg-gray-200">
                            {post.image_url ? (
                              <Image
                                src={post.image_url}
                                alt={post.title}
                                width={600}
                                height={400}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                                <span className="text-primary-600 font-semibold">
                                  No Image
                                </span>
                              </div>
                            )}
                            {post.category && (
                              <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                {post.category}
                              </div>
                            )}
                          </div>

                          {/* Content */}
                          <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center justify-between text-sm text-muted mb-3">
                              <span>
                                {post.created_at
                                  ? new Date(
                                      post.created_at
                                    ).toLocaleDateString()
                                  : "Date N/A"}
                              </span>
                            </div>

                            <h2 className="heading-3 mb-3 group-hover:text-primary-500 transition-colors line-clamp-2">
                              {post.title}
                            </h2>

                            <p className="text-muted mb-4 flex-grow line-clamp-2">
                              {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                              <span className="text-sm font-semibold text-muted">
                                {post.author
                                  ? `By ${post.author}`
                                  : "Author N/A"}
                              </span>
                              <span className="text-primary-500 font-semibold group-hover:translate-x-2 transition-transform">
                                Read →
                              </span>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    </FadeIn>
                  ))
                ) : (
                  <div className="col-span-2 text-center py-12">
                    <p className="text-muted text-lg">
                      No blog posts yet. Check back soon!
                    </p>
                  </div>
                )}
              </div>
            )}
          </Container>
        </Section>

        {/* Newsletter Section */}
        <Section
          spacing="lg"
          className="bg-gradient-to-br from-primary-100 to-primary-50"
        >
          <Container size="md">
            <FadeIn delay={0.5}>
              <Card hover className="text-center">
                <h2 className="heading-2 mb-4">Stay Updated</h2>
                <p className="text-muted mb-6">
                  Subscribe to our newsletter for weekly insights on lifestyle
                  medicine and health optimization.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button className="px-6 py-3 rounded-lg bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-colors">
                    Subscribe
                  </button>
                </div>
              </Card>
            </FadeIn>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
