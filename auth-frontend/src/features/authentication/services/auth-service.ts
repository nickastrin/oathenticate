import { api } from "@/core/http-client";
import { TokenResponse } from "@/core/types";

export function authService() {
  const login = async (email: string, password: string) => {
    const response = await api.post<TokenResponse>("/auth/login", {
      email,
      password,
    });

    // Store the access token in local storage.
    localStorage.setItem("access-token", response.data.token);
    return response.data;
  };

  const register = async (email: string, password: string) => {
    const response = await api.post("/auth/register", { email, password });

    return response.data;
  };

  return { login, register };
}
