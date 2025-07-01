import { Logo, NavigationButton } from "@/components";
import { LogoutButton } from "@/features/authentication/components";
import { useAuthenticationContext } from "@/features/authentication/contexts";

export function Sidebar() {
  const { isLoggedIn } = useAuthenticationContext();

  return (
    <div className="py-8 px-2 bg-dark rounded-r-xl flex flex-col">
      <div className="grid gap-8 place-items-center mb-auto">
        <Logo />

        <NavigationButton path="/" icon="home" label="Home" />
        <NavigationButton path="/settings" icon="settings" label="Settings" />
        <NavigationButton path="/about" icon="groups" label="About" />
      </div>

      {isLoggedIn ? (
        <LogoutButton />
      ) : (
        <NavigationButton path="login" icon="login" label="Login" />
      )}
    </div>
  );
}
