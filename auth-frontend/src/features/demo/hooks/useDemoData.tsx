import { useEffect, useState } from "react";
import { demoService } from "../services";
import { jwtDecode } from "jwt-decode";
import { Duration } from "../types";

const service = demoService();

export function useDemoData() {
  const [isLoading, setIsLoading] = useState(true);
  const [tokenDuration, setTokenDuration] = useState<Duration>({
    minutes: 0,
    seconds: 0,
  });

  const fetchProtectedData = async () => {
    try {
      setIsLoading(true);
      await service.getProtected();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setTokenDuration((prev) => {
        // Handle the case where the token has expired.
        if (prev.minutes <= 0 && prev.seconds <= 0) {
          clearInterval(interval);
          return { minutes: 0, seconds: 0 };
        }

        const reducedSeconds = prev.seconds - 1;
        if (reducedSeconds < 0) {
          return {
            minutes: prev.minutes - 1,
            seconds: 59,
          };
        }

        return {
          minutes: prev.minutes,
          seconds: reducedSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return {
    isLoading,
    tokenDuration,
    refreshAccessToken,
  };
}
