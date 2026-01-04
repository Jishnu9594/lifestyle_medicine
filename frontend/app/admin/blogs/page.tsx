"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";
import { blogAPI } from "@/lib/api";

const blogSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters"),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters"),
  content: z.string().min(50, "Content must be at least 50 characters"),
  image_url: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  author: z.string().optional(),
  category: z.string().optional(),
  published: z.boolean().default(false),
});

type BlogFormData = z.infer<typeof blogSchema>;

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const { control, handleSubmit, reset, watch, setValue } =
    useForm<BlogFormData>({
      resolver: zodResolver(blogSchema),
      defaultValues: {
        published: false,
      },
    });

  const published = watch("published");

  // Fetch blogs on mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await blogAPI.getAll(0, 100);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setMessage("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: BlogFormData) => {
    try {
      if (editingId) {
        // Update existing blog
        await blogAPI.update(editingId, data);
        setMessage("✅ Blog updated successfully!");
      } else {
        // Create new blog
        await blogAPI.create(data);
        setMessage("✅ Blog created successfully!");
      }

      reset();
      setEditingId(null);
      setTimeout(() => setMessage(""), 3000);
      fetchBlogs();
    } catch (error) {
      console.error("Error:", error);
      setMessage("❌ Error saving blog. Please try again.");
    }
  };

  const handleEdit = (blog: any) => {
    setEditingId(blog.id);
    setValue("title", blog.title);
    setValue("slug", blog.slug);
    setValue("excerpt", blog.excerpt);
    setValue("content", blog.content);
    setValue("image_url", blog.image_url || "");
    setValue("author", blog.author || "");
    setValue("category", blog.category || "");
    setValue("published", blog.published);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      try {
        await blogAPI.delete(id);
        setMessage("✅ Blog deleted successfully!");
        setTimeout(() => setMessage(""), 3000);
        fetchBlogs();
      } catch (error) {
        setMessage("❌ Error deleting blog");
      }
    }
  };

  const handleCancel = () => {
    reset();
    setEditingId(null);
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen overflow-hidden bg-gradient-to-br from-primary-50 to-white">
        <Section spacing="lg">
          <Container>
            <h1 className="heading-1 mb-2 gradient-text">Admin - Blog Management</h1>
            <p className="text-body text-muted mb-12">
              Create, edit, and manage your blog posts
            </p>

            {message && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  message.includes("✅")
                    ? "bg-green-50 border border-green-200 text-green-700"
                    : "bg-red-50 border border-red-200 text-red-700"
                }`}
              >
                {message}
              </div>
            )}

            {/* Blog Form */}
            <Card hover className="mb-12 p-8">
              <h2 className="heading-2 mb-6">
                {editingId ? "Edit Blog Post" : "Create New Blog Post"}
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    name="title"
                    control={control}
                    label="Blog Title"
                    placeholder="e.g., The Power of Nutrition"
                    required
                  />
                  <Input
                    name="slug"
                    control={control}
                    label="URL Slug"
                    placeholder="e.g., power-of-nutrition"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    name="author"
                    control={control}
                    label="Author Name"
                    placeholder="e.g., Dr. John Doe"
                  />
                  <Input
                    name="category"
                    control={control}
                    label="Category"
                    placeholder="e.g., Nutrition"
                  />
                </div>

                <Input
                  name="image_url"
                  control={control}
                  label="Image URL"
                  placeholder="https://images.unsplash.com/photo-..."
                />

                <TextArea
                  name="excerpt"
                  control={control}
                  label="Excerpt"
                  placeholder="Brief summary of the blog post (10-500 characters)"
                  required
                  rows={3}
                />

                <TextArea
                  name="content"
                  control={control}
                  label="Content"
                  placeholder="Full blog post content (minimum 50 characters)"
                  required
                  rows={8}
                />

                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={published}
                      onChange={(e) => setValue("published", e.target.checked)}
                      className="w-5 h-5 rounded border-primary-300 text-primary-500"
                    />
                    <span className="font-semibold">Publish this blog</span>
                  </label>
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-lg bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-colors"
                  >
                    {editingId ? "Update Blog" : "Create Blog"}
                  </button>
                  {editingId && (
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </Card>

            {/* Blogs List */}
            <div>
              <h2 className="heading-2 mb-6">All Blog Posts ({blogs.length})</h2>

              {loading ? (
                <div className="text-center py-12">
                  <p className="text-muted text-lg">Loading blogs...</p>
                </div>
              ) : blogs.length === 0 ? (
                <Card className="text-center py-12">
                  <p className="text-muted text-lg">No blogs yet. Create your first blog post!</p>
                </Card>
              ) : (
                <div className="space-y-4">
                  {blogs.map((blog) => (
                    <Card key={blog.id} hover className="p-6">
                      <div className="flex gap-4">
                        {blog.image_url && (
                          <img
                            src={blog.image_url}
                            alt={blog.title}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                        )}
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h3 className="heading-3 mb-2">{blog.title}</h3>
                              <p className="text-sm text-muted mb-2">
                                <span className="font-semibold">Slug:</span> {blog.slug}
                              </p>
                              <p className="text-sm text-muted mb-2">
                                <span className="font-semibold">Author:</span> {blog.author || "N/A"}
                                {" | "}
                                <span className="font-semibold">Category:</span> {blog.category || "N/A"}
                              </p>
                              <p className="text-muted line-clamp-2">{blog.excerpt}</p>
                              <div className="mt-3 flex items-center gap-2">
                                {blog.published && (
                                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                                    Published
                                  </span>
                                )}
                                <span className="text-xs text-muted">
                                  {new Date(blog.created_at).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleEdit(blog)}
                                className="px-4 py-2 rounded-lg bg-primary-500 text-white text-sm font-semibold hover:bg-primary-600 transition-colors"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(blog.id)}
                                className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition-colors"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
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
