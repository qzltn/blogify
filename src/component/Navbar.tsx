import { Moon, ChevronDown } from "lucide-react";
import logo from "../assets/logo-DenxwkUa.svg";

interface NavbarProps {
  onDashboard: () => void;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({
  onDashboard,
  darkMode,
  setDarkMode,
}: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-800 dark:bg-gray-950 dark:text-white">

      <img
        className="w-28"
        src={logo}
        alt="blogify logo"
      />

      <div className="flex items-center gap-4">

        <button
          type="button"
          onClick={() => setDarkMode(!darkMode)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
        >
          <Moon size={20} />
        </button>

        <button
          type="button"
          onClick={onDashboard}
          className="flex items-center gap-1 rounded-3xl border border-gray-300 bg-black px-4 py-2 text-sm font-medium text-white"
        >
          <span>Dashboard</span>
          <ChevronDown size={16} />
        </button>

      </div>

    </nav>
  );
};

export default Navbar;