'use client';

import { useState, useEffect } from 'react';
import { X, Minus } from 'lucide-react';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      const script = document.querySelector('script[src*="botpress"]');
      if (!script) {
        const newScript = document.createElement('script');
        newScript.src = 'https://cdn.botpress.cloud/webchat/v3.5/inject.js';
        document.body.appendChild(newScript);

        const configScript = document.createElement('script');
        configScript.type = 'text/javascript';
        configScript.innerHTML = `
          window.botpressWebChat = {
            botId: '66R4VNA3'
          };
        `;
        document.body.appendChild(configScript);

        const mainScript = document.createElement('script');
        mainScript.src = 'https://cdn.botpress.cloud/webchat/v3.5/shareable.html?configUrl=https://files.bpcontent.cloud/2026/01/28/11/20260128112950-66R4VNA3.json';
        document.body.appendChild(mainScript);
      }
    }
  }, [isOpen, isMinimized]);

  if (!isMounted) return null;

  return (
    <>
      {/* Chatbot Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-primary hover:bg-orange-600 text-primary-foreground rounded-full p-4 shadow-lg transition-all duration-200 hover:shadow-xl"
          aria-label="Mở chatbot tư vấn"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </button>
      )}

      {/* Chatbot Container */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 ${
            isMinimized
              ? 'bottom-6 right-6 w-80 h-14'
              : 'bottom-6 right-6 w-96 h-screen max-h-96 sm:h-96'
          }`}
        >
          {/* Chatbot Header */}
          <div className="bg-primary text-primary-foreground rounded-t-lg p-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-sm">Tư vấn VinFast</h3>
              <p className="text-xs opacity-90">Sẵn sàng hỗ trợ bạn</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:bg-orange-600 p-1 rounded transition-colors"
                aria-label="Thu nhỏ chatbot"
              >
                <Minus className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-orange-600 p-1 rounded transition-colors"
                aria-label="Đóng chatbot"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chatbot Content */}
          {!isMinimized && (
            <iframe
              title="VinFast Chatbot"
              src="https://cdn.botpress.cloud/webchat/v3.5/shareable.html?configUrl=https://files.bpcontent.cloud/2026/01/28/11/20260128112950-66R4VNA3.json"
              className="w-full h-full border-0 rounded-b-lg bg-card"
              style={{ minHeight: '300px' }}
            />
          )}
        </div>
      )}
    </>
  );
}
