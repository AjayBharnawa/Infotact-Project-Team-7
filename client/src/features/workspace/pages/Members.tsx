import { useState } from "react";
import { Mail, Plus } from "lucide-react";

import Modal from "../../../components/ui/Modal";
import { useWorkspaceStore } from "../../../store/workspaceStore";

const Members = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [search, setSearch] = useState("");

  const members = useWorkspaceStore(
    (state) => state.members
  );

  const addMember = useWorkspaceStore(
    (state) => state.addMember
  );

  const filteredMembers = members.filter(
    (member) =>
      member.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const handleInviteMember = () => {
    if (!name.trim() || !role.trim()) return;

    addMember(name, role);

    setName("");
    setRole("");
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">
            Team Members
          </h1>

          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
          >
            <Plus size={18} />
            Invite Member
          </button>
        </div>

        <input
          type="text"
          placeholder="Search members..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="mb-4 w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-indigo-500"
        />

        {filteredMembers.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center text-slate-400">
            No members found
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-indigo-500"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white">
                    {member.name.charAt(0)}
                  </div>

                  <div>
                    <h2 className="font-semibold text-white">
                      {member.name}
                    </h2>

                    <p className="text-sm text-slate-400">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Mail size={14} />
                  member@nexteam.com
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Invite Member"
      >
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Member Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-indigo-500"
          />

          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) =>
              setRole(e.target.value)
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-indigo-500"
          />

          <button
            onClick={handleInviteMember}
            className="w-full rounded-xl bg-indigo-600 py-3 text-white hover:bg-indigo-500"
          >
            Add Member
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Members;