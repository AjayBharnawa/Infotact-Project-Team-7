import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthStore } from "../../store/authStore";
import { APP_NAME } from "../../config/app";

import {
  Bell,
  Search,
  Menu,
  User,
  Settings,
  LogOut,
} from "lucide-react";

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar = ({
  onMenuClick,
}: NavbarProps) => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const user = useAuthStore(
    (state) => state.user
  );

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

        <h1 className="text-lg font-semibold text-white">
          {APP_NAME}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-slate-400 hover:text-white">
          <Search size={20} />
        </button>

        <button className="text-slate-400 hover:text-white">
          <Bell size={20} />
        </button>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white"
          >
            {user?.name?.charAt(0) || "A"}
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-52 overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-xl">
              <button
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-white hover:bg-slate-800"
              >
                <User size={16} />
                Profile
              </button>

              <button
                onClick={() =>
                  navigate("/workspace/settings")
                }
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-white hover:bg-slate-800"
              >
                <Settings size={16} />
                Settings
              </button>

              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-red-400 hover:bg-slate-800"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;