import React from 'react';
import { useEmailStore } from '../store/emailStore';
import { Inbox, Send, Star, Trash, Settings, Mail } from 'lucide-react';

export const Sidebar = () => {
  const { activeWorkspace, workspaces, setActiveWorkspace } = useEmailStore();

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-8">
          <Mail className="w-6 h-6 text-blue-500" />
          <span className="text-xl font-semibold">MailFlow</span>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Workspaces
            </h3>
            <div className="space-y-1">
              {workspaces.map((workspace) => (
                <button
                  key={workspace.id}
                  onClick={() => setActiveWorkspace(workspace.id)}
                  className={`w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${
                    activeWorkspace === workspace.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div
                    className="w-3 h-3 rounded-full mr-3"
                    style={{ backgroundColor: workspace.color }}
                  />
                  {workspace.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Folders
            </h3>
            <div className="space-y-1">
              {[
                { icon: Inbox, label: 'Inbox', count: 12 },
                { icon: Send, label: 'Sent' },
                { icon: Star, label: 'Starred' },
                { icon: Trash, label: 'Trash' },
              ].map(({ icon: Icon, label, count }) => (
                <button
                  key={label}
                  className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  <Icon className="w-4 h-4 mr-3" />
                  <span className="flex-1">{label}</span>
                  {count && (
                    <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs">
                      {count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto p-4 border-t border-gray-200">
        <button className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
          <Settings className="w-4 h-4 mr-3" />
          Settings
        </button>
      </div>
    </div>
  );
};