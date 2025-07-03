import axios from "axios";
import { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from "axios";
import { AxiosRequestConfigWithRetries, TokenResponse } from "@/types";
import { AUTH_EVENTS } from "@/features/authentication/types";

const TOKEN_KEY = "accessToken";
const MAX_RETRIES = 3;
const TIMEOUT = 10000;

// Create new axios instance with custom config
const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URI,
  timeout: TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor.
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig<unknown>) => {
    const token = localStorage.getItem(TOKEN_KEY);

    // If there is an access token, add it to the request headers.
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: Error) => {
    return Promise.reject(error);
  },
);

let isTokenRefreshing = false;
const refreshSubscribers = new Set<(token: string) => void>();

// Response interceptor.
api.interceptors.response.use(
  (response) => response.data,
  async (error: AxiosError) => {
    const config = error.config as AxiosRequestConfigWithRetries;
    config.retries ??= 0;

    // Handle network errors.
    if (!error.response) {
      if (config.retries < MAX_RETRIES) {
        config.retries += 1;
        return api(config);
      }
      throw new Error("Network error: Please check your connection");
    }

    const hasAuthenticationHeader = Boolean(
      error.response.headers["www-authenticate"],
    );

    // If the response status is 401, try renewing the token.
    if (error.response?.status === 401 && hasAuthenticationHeader) {
      try {
        const token = await renewToken();

        if (token) {
          config.headers = config.headers || {};
          config.headers.Authorization = `Bearer ${token}`;

          const response = await api(config);
          return response.data;
        }
      } catch (renewalError) {
        localStorage.removeItem(TOKEN_KEY);
        console.error("Token renewal failed:", renewalError);

        // Dispatch an event to signal that the token renewal failed.
        window.dispatchEvent(
          new CustomEvent(AUTH_EVENTS.TOKEN_RENEWAL_FAILURE, {
            detail: {
              error: renewalError,
            },
          }),
        );
      }
    }

    return Promise.reject(error);
  },
);

/**
 * Renews the token by making an API request to the renewal endpoint.
 * Then stores the new access token in the local storage.
 * The new refresh token is sent in the response cookies.
 */
async function renewToken() {
  if (isTokenRefreshing) {
    return new Promise<string>((resolve) => {
      refreshSubscribers.add(resolve);
    });
  }

  isTokenRefreshing = true;

  try {
    const response = await api.post<TokenResponse>(
      "/auth/renewal",
      {},
      { withCredentials: true },
    );

    const accessToken = response.data.token;
    if (!accessToken) {
      throw new Error("No token returned during renewal.");
    }

    localStorage.setItem(TOKEN_KEY, accessToken);

    refreshSubscribers.forEach((resolve) => resolve(accessToken));
    refreshSubscribers.clear();

    return accessToken;
  } catch (error) {
    console.error("Token renewal failed:", error);
    throw error;
  } finally {
    isTokenRefreshing = false;
  }
}

export { api };
