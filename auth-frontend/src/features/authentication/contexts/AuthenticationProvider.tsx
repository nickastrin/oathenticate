import { AuthenticationContext } from "./AuthenticationContext";

interface AuthenticationProviderProps {
  children: React.ReactNode;
}

export function AuthenticationProvider({
  children,
}: AuthenticationProviderProps) {
  return (
    <AuthenticationContext.Provider value={{}}>
      {children}
    </AuthenticationContext.Provider>
  );
}
