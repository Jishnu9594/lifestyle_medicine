"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen overflow-hidden bg-gradient-to-br from-primary-50 to-white">
        <Section spacing="lg">
          <Container>
            <div className="mb-12">
              <h1 className="heading-1 mb-2 gradient-text">Admin Dashboard</h1>
              <p className="text-body text-muted">Manage your website content and leads</p>
            </div>

            {/* Admin Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Blog Management */}
              <Link href="/admin/blogs">
                <Card hover className="p-8 h-full cursor-pointer">
                  <div className="mb-4">
                    <div className="text-5xl mb-3">📝</div>
                  </div>
                  <h2 className="heading-2 mb-3">Blog Management</h2>
                  <p className="text-muted mb-6">
                    Create, edit, and manage your blog posts. Add new articles, update
                    existing ones, and control publication status.
                  </p>
                  <span className="text-primary-500 font-semibold">
                    Go to Blog Manager →
                  </span>
                </Card>
              </Link>

              {/* Leads Dashboard */}
              <Link href="/admin/leads">
                <Card hover className="p-8 h-full cursor-pointer">
                  <div className="mb-4">
                    <div className="text-5xl mb-3">📊</div>
                  </div>
                  <h2 className="heading-2 mb-3">Leads Dashboard</h2>
                  <p className="text-muted mb-6">
                    View all leads from your contact form and course enrollments. Filter
                    by source, export data, and manage follow-ups.
                  </p>
                  <span className="text-primary-500 font-semibold">
                    Go to Leads Dashboard →
                  </span>
                </Card>
              </Link>
            </div>

            {/* Quick Stats */}
            <Card className="p-8 bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200">
              <h3 className="heading-2 mb-4">Quick Tips</h3>
              <ul className="space-y-3 text-muted">
                <li>✅ <strong>Blog Slugs:</strong> Use lowercase with hyphens (e.g., "my-blog-post")</li>
                <li>✅ <strong>Blog Categories:</strong> Keep consistent categories for better organization</li>
                <li>✅ <strong>Lead Emails:</strong> You'll receive notifications when users submit leads</li>
                <li>✅ <strong>Export Leads:</strong> Use CSV export to analyze data in spreadsheets</li>
                <li>✅ <strong>Message Follow-up:</strong> Click "Reply via Email" to respond to leads directly</li>
              </ul>
            </Card>

            {/* Help Section */}
            <div className="mt-12 pt-12 border-t border-gray-200">
              <h3 className="heading-2 mb-6">Need Help?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h4 className="font-semibold mb-3">📧 Email Configuration</h4>
                  <p className="text-sm text-muted mb-4">
                    Make sure your backend has email configured in the .env file to receive lead notifications.
                  </p>
                  <a href="#email-setup" className="text-primary-500 text-sm font-semibold">
                    View setup guide →
                  </a>
                </Card>
                <Card className="p-6">
                  <h4 className="font-semibold mb-3">🖼️ Image URLs</h4>
                  <p className="text-sm text-muted mb-4">
                    Use full URLs (https://...) for blog images. You can use free images from Unsplash.
                  </p>
                  <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="text-primary-500 text-sm font-semibold">
                    Get free images →
                  </a>
                </Card>
                <Card className="p-6">
                  <h4 className="font-semibold mb-3">📱 Responsive Design</h4>
                  <p className="text-sm text-muted mb-4">
                    All admin pages are fully responsive and work on mobile devices.
                  </p>
                </Card>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
