import { Bell, Search } from "lucide-react";

const Navbar = () => {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900 px-6 flex items-center justify-between">
      <h1 className="text-xl font-bold">
        Nexora
      </h1>

      <div className="flex items-center gap-4">
        <Search size={20} />
        <Bell size={20} />
        <div className="h-8 w-8 rounded-full bg-indigo-500" />
      </div>
    </header>
  );
};

export default Navbar;