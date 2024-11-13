import React from 'react';
import { useEmailStore } from '../store/emailStore';
import { MessageSquare, Edit3 } from 'lucide-react';

export const Header = () => {
  const { activeMode, setActiveMode, accounts, activeAccount } = useEmailStore();
  const currentAccount = accounts.find(acc => acc.id === activeAccount);

  return (
    <div className="h-16 border-b border-gray-200 flex items-center justify-between px-6 bg-white">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setActiveMode('simple')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
            activeMode === 'simple'
              ? 'bg-blue-50 text-blue-600'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          <span>Simple</span>
        </button>
        <button
          onClick={() => setActiveMode('pro')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
            activeMode === 'pro'
              ? 'bg-blue-50 text-blue-600'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Edit3 className="w-4 h-4" />
          <span>Pro</span>
        </button>
      </div>

      <div className="flex items-center space-x-4">
        {currentAccount && (
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-600">{currentAccount.email}</span>
            <img
              src={currentAccount.avatar}
              alt={currentAccount.name}
              className="w-8 h-8 rounded-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};