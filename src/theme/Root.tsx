import React from 'react';
import RAGChatbot from '../components/RAGChatbot';

// This Root component wraps the entire app
export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      {/* Add the RAG Chatbot to appear on all pages */}
      <RAGChatbot />
    </>
  );
}