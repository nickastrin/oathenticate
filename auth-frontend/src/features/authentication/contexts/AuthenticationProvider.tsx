import { useEffect, useState } from "react";
import { AuthenticationContext } from "./AuthenticationContext";
import { AUTH_EVENTS } from "@/core";
import { useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";

interface AuthenticationProviderProps {
  children: React.ReactNode;
}

export function AuthenticationProvider({
  children,
}: AuthenticationProviderProps) {
  const navigate = useNavigate();

  // For the purposes of this application, the logged in state is just a boolean.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleFailedRenewal = () => {
      setIsLoggedIn(false);
      navigate("/login");
    };

    window.addEventListener(
      AUTH_EVENTS.TOKEN_RENEWAL_FAILURE,
      handleFailedRenewal,
    );

    return () => {
      window.removeEventListener(
        AUTH_EVENTS.TOKEN_RENEWAL_FAILURE,
        handleFailedRenewal,
      );
    };
  }, []);

  useEffect(() => {
    const initializeUser = () => {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        try {
          jwtDecode(accessToken);

          // TODO: In a later iteration, it might be a good idea to check the expiry here.
          // If the token is expired, manually trigger a token renewal.
          setIsLoggedIn(true);
        } catch (error) {
          console.error(error);
          setIsLoggedIn(false);
        }
      }
    };

    initializeUser();
  }, []);

  return (
    <AuthenticationContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
