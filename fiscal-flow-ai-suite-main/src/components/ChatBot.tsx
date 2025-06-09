
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageSquare, X, Send } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI Finance Assistant. I can help you with GST queries, invoice processing, and financial operations. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: message,
      isBot: false,
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thank you for your question. I'm processing your request about financial operations. For complex queries, I can help with GST reconciliation, invoice processing, and compliance requirements. Would you like me to guide you through any specific process?",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="bg-accent hover:bg-accent/90 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-slow"
          >
            <MessageSquare className="h-6 w-6" />
          </Button>
        )}

        {/* Chat Window */}
        {isOpen && (
          <Card className="w-80 h-96 bg-white shadow-xl border-0 rounded-lg overflow-hidden">
            {/* Header */}
            <div className="bg-primary text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium">AI Finance Assistant</h3>
                  <p className="text-xs text-gray-200">Online</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-navy-600 p-1"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 max-h-64 overflow-y-auto">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      msg.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-accent text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-accent hover:bg-accent/90 text-white px-3 py-2"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </>
  );
};

export default ChatBot;
