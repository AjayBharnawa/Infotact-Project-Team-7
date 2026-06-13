import {
  Users,
  Hash,
  FileText,
  MessageSquare,
} from "lucide-react";

import { useWorkspaceStore } from "../../../store/workspaceStore";

const Dashboard = () => {
  const members = useWorkspaceStore(
    (state) => state.members
  );

  const channels = useWorkspaceStore(
    (state) => state.channels
  );

  const documents = useWorkspaceStore(
    (state) => state.documents
  );

  const stats = [
    {
      title: "Members",
      value: members.length,
      icon: Users,
    },
    {
      title: "Channels",
      value: channels.length,
      icon: Hash,
    },
    {
      title: "Documents",
      value: documents.length,
      icon: FileText,
    },
    {
      title: "Messages",
      value: "1.2k",
      icon: MessageSquare,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Workspace Overview
        </h1>

        <p className="mt-2 text-slate-400">
          Welcome back. Here's what's happening in your workspace.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="text-slate-400">
                  {stat.title}
                </p>

                <Icon
                  size={22}
                  className="text-indigo-400"
                />
              </div>

              <h2 className="text-4xl font-bold text-white">
                {stat.value}
              </h2>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="mb-4 text-xl font-semibold text-white">
          Recent Activity
        </h2>

        <div className="space-y-3">
          <div className="rounded-xl bg-slate-800 p-3 text-slate-300">
            New document created in Project Roadmap
          </div>

          <div className="rounded-xl bg-slate-800 p-3 text-slate-300">
            Ajay joined #development channel
          </div>

          <div className="rounded-xl bg-slate-800 p-3 text-slate-300">
            Sprint Planning document updated
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;