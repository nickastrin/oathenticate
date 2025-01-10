import { api } from "@/core/http-client";
import { TokenResponse } from "@/core/types";

export function authService() {
  const login = async (email: string, password: string) => {
    const response = await api.post<TokenResponse>(
      "/auth/login",
      {
        email,
        password,
      },
      { withCredentials: true },
    );

    // Store the access token in local storage.
    localStorage.setItem("accessToken", response.data.token);
    return response.data;
  };

  const register = async (email: string, password: string) => {
    const response = await api.post("/auth/register", { email, password });

    return response.data;
  };

  const logout = async () => {
    await api.post("/auth/logout", {}, { withCredentials: true });
    localStorage.removeItem("accessToken");
  };

  return { login, register, logout };
}
