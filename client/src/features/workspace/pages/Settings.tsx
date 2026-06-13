import {
  Bell,
  Shield,
  CreditCard,
  Moon,
  Building2,
  Save,
} from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Settings
          </h1>

          <p className="mt-1 text-slate-400">
            Manage your workspace preferences
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-500">
          <Save size={18} />
          Save Changes
        </button>
      </div>

      {/* Workspace Settings */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="mb-4 flex items-center gap-3">
          <Building2 className="text-indigo-400" size={22} />

          <h2 className="text-xl font-semibold text-white">
            Workspace
          </h2>
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Workspace Name
          </label>

          <input
            type="text"
            defaultValue="NexTeam Workspace"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Notifications */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="mb-4 flex items-center gap-3">
          <Bell className="text-indigo-400" size={22} />

          <h2 className="text-xl font-semibold text-white">
            Notifications
          </h2>
        </div>

        <label className="flex items-center justify-between">
          <span className="text-slate-300">
            Enable Email Notifications
          </span>

          <input type="checkbox" defaultChecked />
        </label>
      </div>

      {/* Theme */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="mb-4 flex items-center gap-3">
          <Moon className="text-indigo-400" size={22} />

          <h2 className="text-xl font-semibold text-white">
            Theme
          </h2>
        </div>

        <select className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-indigo-500">
          <option>Dark</option>
          <option>Light</option>
          <option>System</option>
        </select>
      </div>

      {/* Security */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="mb-4 flex items-center gap-3">
          <Shield className="text-indigo-400" size={22} />

          <h2 className="text-xl font-semibold text-white">
            Security
          </h2>
        </div>

        <button className="rounded-xl bg-slate-800 px-4 py-2 text-white transition hover:bg-slate-700">
          Change Password
        </button>
      </div>

      {/* Billing */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="mb-4 flex items-center gap-3">
          <CreditCard className="text-indigo-400" size={22} />

          <h2 className="text-xl font-semibold text-white">
            Billing
          </h2>
        </div>

        <p className="mb-4 text-slate-400">
          Current Plan: Pro
        </p>

        <button className="rounded-xl bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-500">
          Manage Subscription
        </button>
      </div>
    </div>
  );
};

export default Settings;