import React, { useEffect, useRef, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import { Bold, Heading, List as ListIcon, Quote as QuoteIcon } from 'lucide-react';

export const EmailEditor = () => {
  const [editor, setEditor] = useState<EditorJS | null>(null);
  const holderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!holderRef.current) return;

    const initEditor = new EditorJS({
      holder: holderRef.current,
      tools: {
        header: {
          class: Header,
          config: {
            levels: [2, 3],
            defaultLevel: 2
          }
        },
        list: {
          class: List,
          inlineToolbar: true
        },
        quote: {
          class: Quote,
          inlineToolbar: true
        }
      },
      data: {
        blocks: [
          {
            type: 'paragraph',
            data: {
              text: 'Start writing your email...'
            }
          }
        ]
      },
      onReady: () => {
        setEditor(initEditor);
      }
    });

    return () => {
      if (editor && typeof editor.destroy === 'function') {
        editor.destroy().catch(e => console.error('Editor cleanup failed:', e));
      }
    };
  }, []);

  const handleToolClick = async (tool: string) => {
    if (!editor) return;

    switch (tool) {
      case 'bold':
        document.execCommand('bold', false);
        break;
      case 'header':
        await editor.blocks.insert('header');
        break;
      case 'list':
        await editor.blocks.insert('list');
        break;
      case 'quote':
        await editor.blocks.insert('quote');
        break;
    }
  };

  return (
    <div className="flex-1 p-6 bg-white rounded-lg shadow-sm">
      <div className="mb-4 flex items-center space-x-2 border-b pb-4">
        <button
          onClick={() => handleToolClick('bold')}
          className="p-2 rounded hover:bg-gray-100"
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleToolClick('header')}
          className="p-2 rounded hover:bg-gray-100"
        >
          <Heading className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleToolClick('list')}
          className="p-2 rounded hover:bg-gray-100"
        >
          <ListIcon className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleToolClick('quote')}
          className="p-2 rounded hover:bg-gray-100"
        >
          <QuoteIcon className="w-4 h-4" />
        </button>
      </div>
      <div 
        ref={holderRef} 
        className="prose max-w-none min-h-[300px] focus:outline-none"
      />
    </div>
  );
};