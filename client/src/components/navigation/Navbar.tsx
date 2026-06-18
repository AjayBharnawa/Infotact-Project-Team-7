import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { APP_NAME } from "../../config/app";

import {
  Bell,
  Search,
  Menu,
} from "lucide-react";

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar = ({
  onMenuClick,
}: NavbarProps) => {
  const navigate = useNavigate();

  const logout = useAuthStore(
    (state) => state.logout
  );

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-900 px-6">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden"
        >
          <Menu size={24} />
        </button>

        <h1 className="text-lg font-semibold">
  {APP_NAME}
</h1>
      </div>

      <div className="flex items-center gap-4">
        <Search size={20} />

        <Bell size={20} />

        <button
          onClick={handleLogout}
          className="rounded-lg bg-red-600 px-3 py-2 text-sm text-white transition hover:bg-red-500"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;