import { create } from 'zustand';

export interface Account {
  id: string;
  email: string;
  name: string;
  avatar: string;
}

export interface Workspace {
  id: string;
  name: string;
  color: string;
  accounts: string[];
}

export interface Email {
  id: string;
  from: string;
  to: string;
  subject: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

interface EmailStore {
  activeMode: 'simple' | 'pro';
  activeWorkspace: string | null;
  activeAccount: string | null;
  accounts: Account[];
  workspaces: Workspace[];
  emails: Email[];
  setActiveMode: (mode: 'simple' | 'pro') => void;
  setActiveWorkspace: (id: string | null) => void;
  setActiveAccount: (id: string | null) => void;
}

export const useEmailStore = create<EmailStore>((set) => ({
  activeMode: 'simple',
  activeWorkspace: null,
  activeAccount: null,
  accounts: [
    {
      id: '1',
      email: 'john@example.com',
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
    {
      id: '2',
      email: 'jane@example.com',
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
  ],
  workspaces: [
    {
      id: '1',
      name: 'Personal',
      color: '#3B82F6',
      accounts: ['1'],
    },
    {
      id: '2',
      name: 'Work',
      color: '#10B981',
      accounts: ['2'],
    },
  ],
  emails: [],
  setActiveMode: (mode) => set({ activeMode: mode }),
  setActiveWorkspace: (id) => set({ activeWorkspace: id }),
  setActiveAccount: (id) => set({ activeAccount: id }),
}));