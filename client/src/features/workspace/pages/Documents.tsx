import { useState } from "react";
import { FileText, Plus } from "lucide-react";

import Modal from "../../../components/ui/Modal";
import { useWorkspaceStore } from "../../../store/workspaceStore";

const Documents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");

  const documents = useWorkspaceStore(
    (state) => state.documents
  );

  const addDocument = useWorkspaceStore(
    (state) => state.addDocument
  );

  const handleCreateDocument = () => {
    if (!title.trim()) return;

    addDocument(title);

    setTitle("");
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">
            Documents
          </h1>

          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
          >
            <Plus size={18} />
            New Document
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
            >
              <div className="flex items-center gap-3">
                <FileText
                  size={22}
                  className="text-indigo-400"
                />

                <h2 className="font-semibold text-white">
                  {doc.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Create Document"
      >
        <div className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            placeholder="Document Title"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          />

          <button
            onClick={handleCreateDocument}
            className="w-full rounded-xl bg-indigo-600 py-3 text-white hover:bg-indigo-500"
          >
            Create Document
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Documents;