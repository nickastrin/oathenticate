import React from "react";
import { useContext } from "react";

interface AuthenticationContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (state: boolean) => void;
}

export const AuthenticationContext =
  React.createContext<AuthenticationContextProps>({
    isLoggedIn: false,
    setIsLoggedIn: () => {},
  });

export function useAuthenticationContext() {
  const context = useContext(AuthenticationContext);
  if (!context) {
    throw new Error(
      "Authentication context hook must be used within an authentication context provider",
    );
  }
  return context;
}
