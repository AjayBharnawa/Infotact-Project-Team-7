const Dashboard = () => {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-white">
        Workspace Overview
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-slate-400">Total Members</p>
          <h2 className="mt-3 text-4xl font-bold text-white">48</h2>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-slate-400">Active Channels</p>
          <h2 className="mt-3 text-4xl font-bold text-white">12</h2>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-slate-400">Documents</p>
          <h2 className="mt-3 text-4xl font-bold text-white">96</h2>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-slate-400">Messages Today</p>
          <h2 className="mt-3 text-4xl font-bold text-white">1.2k</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;