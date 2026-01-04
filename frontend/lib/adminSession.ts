import { useState, useEffect } from "react";

export function useAdminSession() {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t =
      typeof window !== "undefined"
        ? localStorage.getItem("admin_token")
        : null;
    setToken(t);
    setLoading(false);
  }, []);

  function login(token: string) {
    setToken(token);
    localStorage.setItem("admin_token", token);
  }

  function logout() {
    setToken(null);
    localStorage.removeItem("admin_token");
  }

  return { token, login, logout, loading };
}
