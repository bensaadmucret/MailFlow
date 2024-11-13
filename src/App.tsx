import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { EmailEditor } from './components/EmailEditor';
import { ChatView } from './components/ChatView';
import { useEmailStore } from './store/emailStore';

function App() {
  const { activeMode } = useEmailStore();

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          {activeMode === 'simple' ? <ChatView /> : <EmailEditor />}
        </main>
      </div>
    </div>
  );
}

export default App;