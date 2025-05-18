import React, { useState, useEffect, useRef } from 'react';

// Simple Bot Icon SVG
const BotIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8 text-blue-600 mr-2 flex-shrink-0" // Added flex-shrink-0
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-5h2v2h-2v-2zm0-4h2v2h-2V7zm0-4h2v2h-2V3zM7 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm8 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" />
    <path d="M12 4a2 2 0 100 4 2 2 0 000-4zm0 10a2 2 0 100 4 2 2 0 000-4z" opacity=".3"/> {/* Subtle detail */}
    <circle cx="8.5" cy="12.5" r="1.5" fill="white"/>
    <circle cx="15.5" cy="12.5" r="1.5" fill="white"/>
  </svg>
);


// Sparkle Icon (kept from previous, can be removed if not desired in blue theme)
const SparkleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block animate-pulse text-sky-200">
    <path d="M12 2L14.5 8L21 9L16 14L17.5 21L12 17.5L6.5 21L8 14L3 9L9.5 8L12 2Z" fill="currentColor"/>
  </svg>
);

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello there! I\'m here to listen. How are you feeling today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: input })
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();
      const botMessage = { sender: 'bot', text: data.reply };
      // Simulate a slight delay for bot response for better UX if desired
      // setTimeout(() => {
      //   setMessages(prev => [...prev, botMessage]);
      //   setIsLoading(false);
      // }, 500);
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Fetch error:", error);
      setMessages(prev => [...prev, { sender: 'bot', text: 'I\'m having a little trouble connecting right now. Please try again in a moment.' }]);
    } finally {
      setIsLoading(false); // Ensure loading is set to false in all cases
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-indigo-200 flex flex-col items-center justify-center p-4 font-sans">
      {/* Wider Chat Container */}
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col mt-4" style={{height: '90vh', maxHeight: '750px'}}>
        {/* Header with Blue Theme */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center mt-2 py-5 px-6 font-semibold text-xl flex items-center justify-center space-x-2 shadow-md">
          <SparkleIcon />
          <span>Your Friendly Assistant</span>
          <SparkleIcon />
        </div>

        {/* Messages Area - Light Blue Background */}
        <div className="flex-grow h-96 overflow-y-auto p-6 space-y-4 bg-sky-50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-end animate-fadeIn ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {/* Bot Icon for Bot Messages */}
              {msg.sender === 'bot' && <BotIcon />}

              <div
                className={`px-5 py-3 rounded-t-xl max-w-[75%] text-base leading-relaxed shadow-md ${ // Increased max-width slightly
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-l-xl ml-2' // User messages: Blue
                    : 'bg-white text-gray-800 rounded-r-xl border border-gray-200' // Bot messages: White with border
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center justify-start">
              <BotIcon />
              <div className="px-5 py-3 rounded-t-xl rounded-r-xl bg-gray-200 text-gray-600 max-w-xs text-sm shadow-md">
                <span className="animate-pulse">Bot is typing...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="flex items-center border-t border-gray-200 p-4 bg-white">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-xl px-5 py-3 mr-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-200 text-gray-700 placeholder-gray-400"
            placeholder="Type your message here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={isLoading || !input.trim()}
            className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center`}
          >
            Send
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      <p className="text-center text-xs text-gray-600 mt-4">
        Remember to take a break if you need to. You're doing great.
      </p>
    </div>
  );
};

export default ChatBox;

// Make sure this CSS for fadeIn animation is in your global CSS file (e.g., index.css)
/*
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-in-out;
  }
  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
  }
}
*/