import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { getCurrencyPreference, setCurrencyPreference, type Currency } from '../utils/currency';

type CurrencyContextType = {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    try {
      return getCurrencyPreference();
    } catch (error) {
      console.error('Error getting currency preference:', error);
      return 'BRL';
    }
  });

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    setCurrencyPreference(newCurrency);
  };

  useEffect(() => {
    // Apply currency preference on mount
    const savedCurrency = getCurrencyPreference();
    if (savedCurrency !== currency) {
      setCurrencyState(savedCurrency);
    }
  }, []);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    console.error('useCurrency must be used within a CurrencyProvider');
    // Return a fallback instead of throwing
    return { currency: 'BRL' as Currency, setCurrency: () => {} };
  }
  return context;
}
