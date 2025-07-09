import { useEffect, useState } from "react";
import { demoService } from "../services";
import { jwtDecode } from "jwt-decode";

const service = demoService();

export function useDemoData() {
  const [isLoading, setIsLoading] = useState(true);
  const [tokenDuration, setTokenDuration] = useState({
    minutes: 0,
    seconds: 0,
  });

  const fetchProtectedData = async () => {
    try {
      setIsLoading(true);
      await service.getProtected();
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const calculateTokenDuration = () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      try {
        const decoded = jwtDecode(accessToken);

        if (!decoded?.exp) {
          console.error("Token doesn't have expiration time");
          return;
        }

        const expiresAt = decoded.exp * 1000;
        const now = Date.now();
        const totalSeconds = Math.max(0, expiresAt - now) / 1000;

        setTokenDuration({
          minutes: Math.floor(totalSeconds / 60),
          seconds: Math.floor(totalSeconds % 60),
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const refreshAccessToken = async () => {
    localStorage.removeItem("accessToken");
    await fetchProtectedData();

    calculateTokenDuration();
  };

  useEffect(() => {
    fetchProtectedData().then(() => calculateTokenDuration());
  }, []);

  return {
    isLoading,
    tokenDuration,
    refreshAccessToken,
  };
}
