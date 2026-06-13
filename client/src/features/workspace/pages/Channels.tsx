import { useState } from "react";
import { Hash, Plus } from "lucide-react";
import { toast } from "sonner";

import Modal from "../../../components/ui/Modal";
import { useWorkspaceStore } from "../../../store/workspaceStore";

const Channels = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [channelName, setChannelName] = useState("");

  const channels = useWorkspaceStore(
    (state) => state.channels
  );

  const addChannel = useWorkspaceStore(
    (state) => state.addChannel
  );

  const handleCreateChannel = () => {
    if (!channelName.trim()) {
      toast.error("Channel name is required");
      return;
    }

    addChannel(channelName);

    toast.success("Channel created successfully");

    setChannelName("");
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">
            Channels
          </h1>

          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-500"
          >
            <Plus size={18} />
            Create Channel
          </button>
        </div>

        <div className="space-y-4">
          {channels.map((channel) => (
            <div
              key={channel.id}
              className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900 p-4 transition hover:border-indigo-500"
            >
              <Hash
                size={18}
                className="text-indigo-400"
              />

              <span className="text-white">
                {channel.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Create Channel"
      >
        <div className="space-y-4">
          <input
            type="text"
            value={channelName}
            onChange={(e) =>
              setChannelName(e.target.value)
            }
            placeholder="Channel Name"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-indigo-500"
          />

          <button
            onClick={handleCreateChannel}
            className="w-full rounded-xl bg-indigo-600 py-3 text-white transition hover:bg-indigo-500"
          >
            Create
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Channels;