import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, getCurrentLanguage, getTranslation } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => getCurrentLanguage());

  useEffect(() => {
    // SSR-safe: only add event listeners on client side
    if (typeof window === 'undefined') return;
    
    const handleLanguageChange = () => {
      const newLang = getCurrentLanguage();
      if (newLang !== language) {
        setLanguage(newLang);
      }
    };

    window.addEventListener('popstate', handleLanguageChange);
    return () => window.removeEventListener('popstate', handleLanguageChange);
  }, [language]);

  // Update HTML lang attribute dynamically for accessibility
  useEffect(() => {
    // SSR-safe: only update document on client side
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = (key: string): string => {
    return getTranslation(language, key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'font-arabic' : 'font-sans'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};