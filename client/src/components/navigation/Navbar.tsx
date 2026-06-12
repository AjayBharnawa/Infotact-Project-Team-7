import { Bell, Search, ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-900 px-6">
      
      {/* Workspace */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white">
          N
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">
            Nexora Workspace
          </h2>

          <p className="text-xs text-slate-400">
            Team Collaboration Hub
          </p>
        </div>

        <ChevronDown
          size={18}
          className="cursor-pointer text-slate-400"
        />
      </div>

      {/* Search */}
      <div className="hidden w-full max-w-md items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 md:flex">
        <Search size={18} className="text-slate-400" />

        <input
          type="text"
          placeholder="Search channels, documents..."
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <button className="rounded-lg p-2 transition hover:bg-slate-800">
          <Bell size={20} className="text-slate-300" />
        </button>

        <div className="h-10 w-10 cursor-pointer rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
      </div>
    </header>
  );
};

export default Navbar;