import { Logo, NavigationButton } from "@/components";
import { LogoutButton } from "@/features/authentication/components";
import { useAuthenticationContext } from "@/features/authentication/contexts";
import { SIDEBAR_ROUTES } from "@/types";

export function Sidebar() {
  const { isLoggedIn } = useAuthenticationContext();

  return (
    <div className="py-8 px-2 bg-dark rounded-r-xl flex flex-col">
      <div className="grid gap-8 place-items-center mb-auto">
        <Logo />

        {SIDEBAR_ROUTES.map((route) => {
          return (
            (isLoggedIn || !route.private) && (
              <NavigationButton
                key={route.path}
                path={route.path}
                icon={route.icon}
                label={route.name}
              />
            )
          );
        })}
      </div>

      {isLoggedIn ? (
        <LogoutButton />
      ) : (
        <NavigationButton path="login" icon="login" label="Login" />
      )}
    </div>
  );
}
