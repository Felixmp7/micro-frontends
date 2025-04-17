import { createContext } from 'react';

export type Language = 'en' | 'es';

export interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);
