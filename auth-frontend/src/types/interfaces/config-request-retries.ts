import { AxiosRequestConfig } from "axios";

export interface AxiosRequestConfigWithRetries extends AxiosRequestConfig {
  retries?: number;
}
