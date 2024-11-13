import React from 'react';
import { Send } from 'lucide-react';

export const ChatView = () => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 p-4 space-y-4 overflow-auto">
        {/* Example messages */}
        <div className="flex justify-start">
          <div className="bg-gray-100 rounded-lg p-3 max-w-[70%]">
            <p className="text-sm text-gray-800">
              Hi there! I wanted to follow up on our previous discussion about the project timeline.
            </p>
            <span className="text-xs text-gray-500 mt-1">10:30 AM</span>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-blue-500 text-white rounded-lg p-3 max-w-[70%]">
            <p className="text-sm">
              Thanks for reaching out! I've reviewed the timeline and everything looks good to proceed.
            </p>
            <span className="text-xs text-blue-100 mt-1">10:32 AM</span>
          </div>
        </div>
      </div>

      <div className="p-4 border-t">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};