import { useState, useEffect, type ReactNode } from "react";
import { I18nContext, initializeLanguage, persistLanguage, createI18nHelpers, type Language } from "../../../i18n/useI18n";

type I18nProviderProps = {
  children: ReactNode;
};

export function I18nProvider({ children }: I18nProviderProps) {
  const [language, setLanguage] = useState<Language>(() => initializeLanguage());

  useEffect(() => {
    persistLanguage(language);
    
    // Set document language attribute
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  // Create translation helpers
  const { t, tArray } = createI18nHelpers(language);

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, tArray }}>
      {children}
    </I18nContext.Provider>
  );
}
