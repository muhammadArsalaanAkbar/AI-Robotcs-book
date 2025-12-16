import React, { useState, useEffect, useRef } from 'react';
import './styles.css';
import useTextSelection from '../../hooks/useTextSelection';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const RAGChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m your AI assistant for this book. Ask me anything about the content.',
      role: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle text selection for RAG queries
  useTextSelection((selectedText) => {
    if (!isOpen) {
      // Open the chat if it's closed
      setIsOpen(true);
    }

    // Add the selected text as a user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: `Can you explain this part: "${selectedText}"`,
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Call the backend API for RAG response
    fetch('http://localhost:8000/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: selectedText,
        top_k: 5
      })
    })
    .then(response => {
      console.log('Response received:', response.status); // Debug log
      if (!response.ok) {
        console.error('HTTP error:', response.status, response.statusText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Data received from backend:', data); // Debug log
      const botMessage: Message = {
        id: Date.now().toString(),
        content: data.response || 'Sorry, I couldn\'t process your request.',
        role: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    })
    .catch(error => {
      console.error('Error getting response from backend:', error);
      console.error('Error details:', error.message, error.stack);

      // More specific error messages based on error type
      let errorMessageText = 'Sorry, I\'m having trouble connecting to the knowledge base. Please try again.';

      if (error.message.includes('fetch')) {
        errorMessageText = 'Unable to connect to the backend API. Please make sure the server is running at http://localhost:8000';
      } else if (error.message.includes('404')) {
        errorMessageText = 'The query endpoint was not found. Please check if the backend is running correctly.';
      } else if (error.message.includes('500')) {
        errorMessageText = 'The server encountered an error. This could be due to missing content in the knowledge base or API configuration issues. Check that you have populated the vector database with content.';
      } else if (error.message.includes('NetworkError')) {
        errorMessageText = 'Network error occurred. Please check your connection and try again.';
      } else if (error.message.includes('Failed to fetch')) {
        errorMessageText = 'Cannot reach the backend server. Please ensure the API server is running at http://localhost:8000';
      }

      const errorMessage: Message = {
        id: Date.now().toString(),
        content: errorMessageText,
        role: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    })
    .finally(() => {
      setIsLoading(false);
    });
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim() || isLoading) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      console.log('Sending query to backend:', inputValue); // Debug log

      // Call the backend API for RAG response
      const response = await fetch('http://localhost:8000/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: inputValue,
          top_k: 5
        })
      });

      console.log('Response status:', response.status); // Debug log

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response data:', data); // Debug log

      const botMessage: Message = {
        id: Date.now().toString(),
        content: data.response || 'Sorry, I couldn\'t process your request.',
        role: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error: any) {
      console.error('Error getting response from backend:', error);
      console.error('Error details:', error.message, error.stack);

      // More specific error messages based on error type
      let errorMessageText = 'Sorry, I\'m having trouble connecting to the knowledge base. Please try again.';

      if (error.message.includes('fetch')) {
        errorMessageText = 'Unable to connect to the backend API. Please make sure the server is running at http://localhost:8000';
      } else if (error.message.includes('404')) {
        errorMessageText = 'The query endpoint was not found. Please check if the backend is running correctly.';
      } else if (error.message.includes('500')) {
        errorMessageText = 'The server encountered an error. This could be due to missing content in the knowledge base or API configuration issues. Check that you have populated the vector database with content.';
      } else if (error.message.includes('NetworkError')) {
        errorMessageText = 'Network error occurred. Please check your connection and try again.';
      } else if (error.message.includes('Failed to fetch')) {
        errorMessageText = 'Cannot reach the backend server. Please ensure the API server is running at http://localhost:8000';
      }

      const errorMessage: Message = {
        id: Date.now().toString(),
        content: errorMessageText,
        role: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`rag-chatbot ${isOpen ? 'open' : ''}`}>
      {!isOpen ? (
        <button className="chatbot-toggle-button" onClick={toggleChat}>
          🤖
        </button>
      ) : (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <div className="chatbot-title">AI Assistant</div>
            <button className="chatbot-close-button" onClick={toggleChat}>
              close
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.role}`}
              >
                <div className="message-content">{message.content}</div>
                <div className="message-timestamp">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message assistant">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="chatbot-input-form">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about the book content..."
              disabled={isLoading}
              className="chatbot-input"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="chatbot-send-button"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default RAGChatbot;