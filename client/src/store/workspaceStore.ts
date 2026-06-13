import { create } from "zustand";

interface Channel {
  id: string;
  name: string;
}

interface Document {
  id: string;
  title: string;
}

interface Member {
  id: string;
  name: string;
  role: string;
}

interface WorkspaceState {
  channels: Channel[];
  documents: Document[];
  members: Member[];

  addChannel: (name: string) => void;
  addDocument: (title: string) => void;
  addMember: (
    name: string,
    role: string
  ) => void;
}

export const useWorkspaceStore =
  create<WorkspaceState>((set) => ({
    channels: [
      { id: "1", name: "general" },
      { id: "2", name: "development" },
      { id: "3", name: "design" },
    ],

    documents: [
      { id: "1", title: "Project Roadmap" },
      { id: "2", title: "Sprint Planning" },
    ],

    members: [
      {
        id: "1",
        name: "Ajay Bharnawa",
        role: "Team Leader",
      },
    ],

    addChannel: (name) =>
      set((state) => ({
        channels: [
          ...state.channels,
          {
            id: crypto.randomUUID(),
            name,
          },
        ],
      })),

    addDocument: (title) =>
      set((state) => ({
        documents: [
          ...state.documents,
          {
            id: crypto.randomUUID(),
            title,
          },
        ],
      })),

    addMember: (name, role) =>
      set((state) => ({
        members: [
          ...state.members,
          {
            id: crypto.randomUUID(),
            name,
            role,
          },
        ],
      })),
  }));