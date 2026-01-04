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
    const data = await apiRes.json();
    if (!apiRes.ok) {
      return res.status(apiRes.status).json(data);
    }
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ detail: "Internal server error" });
  }
}
