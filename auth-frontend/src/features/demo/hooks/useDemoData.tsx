import { useEffect, useState } from "react";
import { demoService } from "../services";
import { jwtDecode } from "jwt-decode";

export function useDemoData() {
  const service = demoService();
  const [isLoading, setIsLoading] = useState(true);
  const fetchProtectedData = async () => {
    try {
      setIsLoading(true);
      await service.getProtected();
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const extractTokenValidity = () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      try {
        const decoded = jwtDecode(accessToken);
        console.error(decoded);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const refreshAccessToken = async () => {
    localStorage.removeItem("accessToken");
    await fetchProtectedData();

    const newTokenValidity = extractTokenValidity();
    return newTokenValidity;
  };

  useEffect(() => {
    fetchProtectedData().then(() => extractTokenValidity());
  }, []);

  return {
    isLoading,
    refreshAccessToken,
  };
}
