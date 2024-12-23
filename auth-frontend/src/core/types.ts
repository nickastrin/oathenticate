import { AxiosRequestConfig } from "axios";

export interface TokenResponse {
  token: string;
  message: string;
}

export interface AxiosRequestConfigWithRetries extends AxiosRequestConfig {
  retries?: number;
}
