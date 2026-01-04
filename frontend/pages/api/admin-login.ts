import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ detail: "Method not allowed" });
  }
  const { username, password } = req.body;
  try {
    const apiRes = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ username, password }),
      }
    );
    let data;
    try {
      data = await apiRes.json();
    } catch (jsonErr) {
      data = {
        detail: "Invalid JSON response from backend",
        raw: await apiRes.text(),
      };
    }
    if (!apiRes.ok) {
      // Log error details for debugging
      console.error("Admin login failed:", {
        status: apiRes.status,
        data,
        username,
      });
      return res.status(apiRes.status).json(data);
    }
    return res.status(200).json(data);
  } catch (err: any) {
    // Log unexpected errors
    console.error("Admin login unexpected error:", err);
    return res
      .status(500)
      .json({ detail: "Internal server error", error: err?.message || err });
  }
}
