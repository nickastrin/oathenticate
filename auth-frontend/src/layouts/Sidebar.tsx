import { NavigationButton } from "@/components/navigation/NavigationButton";

export function Sidebar() {
  return (
    <div className="py-8 px-2 bg-dark rounded-r-xl flex flex-col">
      <div className="grid gap-8 place-items-center mb-auto">
        <div className="font-montserrat font-extrabold">
          <span className="tracking-widest">OATH</span>
          <span className="text-primary-light">.</span>
        </div>

        <NavigationButton icon="home" label="Home" onClick={() => {}} />
        <NavigationButton icon="settings" label="Settings" onClick={() => {}} />
        <NavigationButton icon="groups" label="About" onClick={() => {}} />
      </div>

      <NavigationButton icon="logout" label="Logout" onClick={() => {}} />
    </div>
  );
}
