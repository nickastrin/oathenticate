import { useNavigate } from "react-router";
import { authService } from "../services";
import { useAuthenticationContext } from "../contexts";

export function useLogout() {
  const navigate = useNavigate();

  const { logout } = authService();
  const { setIsLoggedIn } = useAuthenticationContext();

  const handleLogout = async () => {
    await logout();
    setIsLoggedIn(false);
    navigate("/");
  };

  return {
    handleLogout,
  };
}
