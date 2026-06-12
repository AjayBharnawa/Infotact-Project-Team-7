import { Outlet } from "react-router-dom";

import Navbar from "../../components/navigation/Navbar";
import Sidebar from "../../components/navigation/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="flex h-[calc(100vh-64px)]">
        <Sidebar />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;