import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  Users,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-900 p-4">
      <nav className="space-y-2">
        <button className="flex w-full items-center gap-3 rounded-lg p-3 text-slate-300 transition hover:bg-slate-800 hover:text-white">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </button>

        <button className="flex w-full items-center gap-3 rounded-lg p-3 text-slate-300 transition hover:bg-slate-800 hover:text-white">
          <MessageSquare size={20} />
          <span>Channels</span>
        </button>

        <button className="flex w-full items-center gap-3 rounded-lg p-3 text-slate-300 transition hover:bg-slate-800 hover:text-white">
          <FileText size={20} />
          <span>Documents</span>
        </button>

        <button className="flex w-full items-center gap-3 rounded-lg p-3 text-slate-300 transition hover:bg-slate-800 hover:text-white">
          <Users size={20} />
          <span>Members</span>
        </button>

        <button className="flex w-full items-center gap-3 rounded-lg p-3 text-slate-300 transition hover:bg-slate-800 hover:text-white">
          <Settings size={20} />
          <span>Settings</span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;