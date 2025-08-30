import { createContext, useContext } from "react";
import type { Language, TranslationKey } from "./index";
import { translations, defaultLanguage, getBrowserLanguage } from "./index";

// Re-export types for easier importing
export type { Language, TranslationKey };

export type I18nContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tArray: (baseKey: string) => string[];
};

export const I18nContext = createContext<I18nContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key: string) => key,
  tArray: () => [],
});

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}

export function createI18nHelpers(language: Language) {
  const t = (key: string): string => {
    const lang = translations[language] as any;
    const defaultLang = translations[defaultLanguage] as any;
    return lang[key] || defaultLang[key] || key;
  };

  const tArray = (baseKey: string): string[] => {
    const languageTranslations = translations[language] as any;
    const defaultTranslations = translations[defaultLanguage] as any;
    
    // Look for array-like keys (e.g., "programs.institute.features")
    const keys = Object.keys(languageTranslations).filter(k => k.startsWith(baseKey));
    return keys.map(key => languageTranslations[key] || defaultTranslations[key] || key);
  };

  return { t, tArray };
}

export function initializeLanguage(): Language {
  if (typeof window === "undefined") return defaultLanguage;
  
  const stored = localStorage.getItem("instituto-language") as Language;
  if (stored && ["en", "pt", "es"].includes(stored)) {
    return stored;
  }
  
  return getBrowserLanguage();
}

export function persistLanguage(language: Language): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("instituto-language", language);
    document.documentElement.lang = language;
  }
}
