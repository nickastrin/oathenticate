import { NavigationButton } from '@/components/navigation/NavigationButton';

export function Sidebar() {
  return (
    <div className="flex flex-col justify-between items-center py-4 px-2 bg-zinc-800 rounded-r-xl">
      <div className="flex flex-col gap-4 items-center">
        <NavigationButton icon="home" label="Home" onClick={() => {}} />
        <NavigationButton icon="settings" label="Settings" onClick={() => {}} />
        <NavigationButton icon="groups" label="About" onClick={() => {}} />
      </div>

      <NavigationButton icon="logout" label="Logout" onClick={() => {}} />
    </div>
  );
}
