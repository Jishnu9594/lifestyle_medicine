import axios from "axios";
// Helper to get admin token from localStorage
function getAdminToken() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("admin_token");
  }
  return null;
}

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://lifestyle-medicine.onrender.com";

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Blog API functions
export const blogAPI = {
  getAll: (skip?: number, limit?: number) =>
    apiClient.get("/blogs", {
      params: { skip: skip || 0, limit: limit || 10 },
    }),
  getBySlug: (slug: string) => apiClient.get(`/blogs/${slug}`),
  create: (data: any) =>
    apiClient.post("/blogs", data, {
      headers: { Authorization: `Bearer ${getAdminToken()}` },
    }),
  update: (id: number, data: any) =>
    apiClient.put(`/blogs/${id}`, data, {
      headers: { Authorization: `Bearer ${getAdminToken()}` },
    }),
  delete: (id: number) =>
    apiClient.delete(`/blogs/${id}`, {
      headers: { Authorization: `Bearer ${getAdminToken()}` },
    }),
};

// Lead API functions
export const leadAPI = {
  submit: (data: any) => apiClient.post("/leads", data),
  getAll: (skip?: number, limit?: number) =>
    apiClient.get("/leads", {
      params: { skip: skip || 0, limit: limit || 50 },
      headers: { Authorization: `Bearer ${getAdminToken()}` },
    }),
  getById: (id: number) =>
    apiClient.get(`/leads/${id}`, {
      headers: { Authorization: `Bearer ${getAdminToken()}` },
    }),
};
