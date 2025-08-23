import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageProvider';
import { ChatBot } from './ChatBot';
import { chatbotTranslations, type ChatBotLanguage } from './chatbotTranslations';

export const ChatBotButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const t = chatbotTranslations[language as ChatBotLanguage];

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white border-0"
          size="lg"
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          <span className="hidden sm:inline font-medium">{t.buttonLabel}</span>
          <span className="sm:hidden font-medium">{t.buttonLabelShort}</span>
        </Button>
        
        {/* Notification badge for new users */}
        <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse" />
      </div>

      <ChatBot isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};