import Navbar from "../../components/navigation/Navbar";
import Sidebar from "../../components/navigation/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="flex h-[calc(100vh-64px)]">
        <Sidebar />

        <main className="flex-1 bg-slate-950 p-6">
  <h1 className="mb-6 text-3xl font-bold text-white">
    Dashboard
  </h1>

  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <h3 className="text-slate-400">Channels</h3>
      <p className="mt-2 text-3xl font-bold text-white">12</p>
    </div>

    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <h3 className="text-slate-400">Members</h3>
      <p className="mt-2 text-3xl font-bold text-white">48</p>
    </div>

    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <h3 className="text-slate-400">Documents</h3>
      <p className="mt-2 text-3xl font-bold text-white">96</p>
    </div>

    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <h3 className="text-slate-400">Active Users</h3>
      <p className="mt-2 text-3xl font-bold text-white">24</p>
    </div>
  </div>
</main>
      </div>
    </div>
  );
};

export default DashboardLayout;