import { useEffect, useState } from "react";
import { AuthenticationContext } from "./AuthenticationContext";
import { AUTH_EVENTS } from "@/core";
import { useNavigate } from "react-router";

interface AuthenticationProviderProps {
  children: React.ReactNode;
}

export function AuthenticationProvider({
  children,
}: AuthenticationProviderProps) {
  const navigate = useNavigate();

  // For the purposes of this application, the user is just an email.
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const handleFailedRenewal = () => {
      setUser(null);
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

  return (
    <AuthenticationContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
