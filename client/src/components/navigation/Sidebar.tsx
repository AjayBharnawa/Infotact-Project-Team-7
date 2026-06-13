import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  Users,
  Settings,
  Plus,
} from "lucide-react";

const menuItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/workspace/dashboard",
  },
  {
    icon: MessageSquare,
    label: "Channels",
    path: "/workspace/channels",
  },
  {
    icon: FileText,
    label: "Documents",
    path: "/workspace/documents",
  },
  {
    icon: Users,
    label: "Members",
    path: "/workspace/members",
  },
  {
    icon: Settings,
    label: "Settings",
    path: "/workspace/settings",
  },
];

const Sidebar = () => {
  return (
<aside className="flex h-screen w-72 flex-shrink-0 flex-col border-r border-slate-800 bg-slate-900">      {/* Workspace Channels */}
      <div className="border-b border-slate-800 p-4">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-300">
            Channels
          </h3>

          <button className="rounded-md p-1 hover:bg-slate-800">
            <Plus size={16} />
          </button>
        </div>

        <div className="space-y-2">
          <button className="w-full rounded-lg px-3 py-2 text-left text-slate-400 hover:bg-slate-800 hover:text-white">
            # general
          </button>

          <button className="w-full rounded-lg px-3 py-2 text-left text-slate-400 hover:bg-slate-800 hover:text-white">
            # development
          </button>

          <button className="w-full rounded-lg px-3 py-2 text-left text-slate-400 hover:bg-slate-800 hover:text-white">
            # design
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
  <div className="space-y-2">
    {menuItems.map((item) => {
      const Icon = item.icon;

      return (
        <NavLink
          key={item.label}
          to={item.path}
          className={({ isActive }) =>
            `flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-all ${
              isActive
                ? "bg-indigo-600 text-white"
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
            }`
          }
        >
          <Icon size={20} />
          <span>{item.label}</span>
        </NavLink>
      );
    })}
  </div>
</nav>

      {/* User Section */}
      <div className="border-t border-slate-800 p-4">
        <div className="flex items-center gap-3 rounded-xl bg-slate-800 p-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />

          <div>
            <p className="text-sm font-medium text-white">
              Ajay
            </p>

            <p className="text-xs text-slate-400">
              Team Leader
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;