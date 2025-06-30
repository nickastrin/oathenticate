import React from "react";
import { useContext } from "react";

interface AuthenticationContextProps {
  user: string | null;
  setUser: (user: string | null) => void;
}

export const AuthenticationContext =
  React.createContext<AuthenticationContextProps>({
    user: null,
    setUser: () => {},
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
