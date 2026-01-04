import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://lifestyle-medicine.onrender.com";

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
  create: (data: any) => apiClient.post("/blogs", data),
  update: (id: number, data: any) => apiClient.put(`/blogs/${id}`, data),
  delete: (id: number) => apiClient.delete(`/blogs/${id}`),
};

// Lead API functions
export const leadAPI = {
  submit: (data: any) => apiClient.post("/leads", data),
  getAll: (skip?: number, limit?: number) =>
    apiClient.get("/leads", {
      params: { skip: skip || 0, limit: limit || 50 },
    }),
  getById: (id: number) => apiClient.get(`/leads/${id}`),
};
