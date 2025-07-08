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

        if (!decoded?.exp) {
          console.error("Token doesn't have expiration time");
          return;
        }

        const expiresAt = decoded.exp * 1000;
        const now = Date.now();
        const millisecondsLeft = Math.max(0, expiresAt - now);

        const minutesLeft = Math.floor(millisecondsLeft / 60000);
        const secondsLeft = Math.floor((millisecondsLeft % 60000) / 1000);

        console.log(
          `Token expires in ${minutesLeft} minutes and ${secondsLeft} seconds`,
        );
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
