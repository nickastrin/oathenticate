import { api } from "@/core";

export function demoService() {
  const getProtected = async () => {
    const response = await api.get<string>("/protected");
    return response.data;
  };

  return { getProtected };
}
