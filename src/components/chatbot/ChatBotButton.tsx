import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageProvider';
import { ChatBot } from './ChatBot';
import { chatbotTranslations, type ChatBotLanguage } from './chatbotTranslations';

export const ChatBotButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAttentionAnimation, setShowAttentionAnimation] = useState(true);
  const { language } = useLanguage();
  const t = chatbotTranslations[language as ChatBotLanguage];

  // Trigger attention animation on page load and periodically
  useEffect(() => {
    const initialDelay = setTimeout(() => {
      setShowAttentionAnimation(true);
    }, 2000); // Start animation 2 seconds after page load

    const intervalId = setInterval(() => {
      if (!isOpen) {
        setShowAttentionAnimation(true);
        setTimeout(() => setShowAttentionAnimation(false), 2000);
      }
    }, 15000); // Repeat every 15 seconds if not opened

    return () => {
      clearTimeout(initialDelay);
      clearInterval(intervalId);
    };
  }, [isOpen]);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={() => {
            setIsOpen(true);
            setShowAttentionAnimation(false);
          }}
          className={`h-14 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white border-0 ${
            showAttentionAnimation ? 'animate-bounce' : ''
          }`}
          size="lg"
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          <span className="hidden sm:inline font-medium">{t.buttonLabel}</span>
          <span className="sm:hidden font-medium">{t.buttonLabelShort}</span>
        </Button>
        
        {/* Notification badge for new users */}
        <div className={`absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full ${
          showAttentionAnimation ? 'animate-pulse scale-110' : 'animate-pulse'
        } transition-transform duration-300`} />
      </div>

      <ChatBot isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};