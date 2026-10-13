import React, { createContext, useContext, useState, useEffect } from 'react';
import { SupportedLanguage, TranslationDictionary } from '../types/i18n';
import { translations } from '../data/translations';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    try {
      const saved = localStorage.getItem('gia_language_pref');
      if (saved === 'es' || saved === 'en') return saved;
    } catch (e) {
      // Fallback
    }
    return 'es';
  });

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('gia_language_pref', lang);
    } catch (e) {
      // Ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
