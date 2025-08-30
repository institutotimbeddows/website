// Currency conversion utilities
export type Currency = 'BRL' | 'USD' | 'EUR' | 'GBP';

export type CurrencyInfo = {
  code: Currency;
  symbol: string;
  name: string;
  flag: string;
};

export const currencies: CurrencyInfo[] = [
  { code: 'BRL', symbol: 'R$', name: 'Real Brasileiro', flag: '🇧🇷' },
  { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸' },
  { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺' },
  { code: 'GBP', symbol: '£', name: 'British Pound', flag: '🇬🇧' },
];

// Exchange rates - Updated with more accurate values (Jan 2025)
const exchangeRates = {
  BRL: 1,      // Base currency
  USD: 0.17,   // 1 BRL = 0.17 USD (approximately)
  EUR: 0.16,   // 1 BRL = 0.16 EUR (approximately)
  GBP: 0.14,   // 1 BRL = 0.14 GBP (approximately)
};

/**
 * Convert amount from BRL to target currency
 */
export function convertFromBRL(amount: number, targetCurrency: Currency): number {
  const rate = exchangeRates[targetCurrency];
  return amount * rate;
}

/**
 * Convert amount from source currency to BRL
 */
export function convertToBRL(amount: number, sourceCurrency: Currency): number {
  const rate = exchangeRates[sourceCurrency];
  return amount / rate;
}

/**
 * Format currency amount with proper symbol and locale
 */
export function formatCurrency(amount: number, currency: Currency): string {
  const currencyInfo = currencies.find(c => c.code === currency);
  if (!currencyInfo) return amount.toString();

  switch (currency) {
    case 'BRL':
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(amount);
    
    case 'USD':
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(amount);
    
    case 'EUR':
      return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(amount);
    
    case 'GBP':
      return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(amount);
    
    default:
      return `${currencyInfo.symbol}${amount.toLocaleString()}`;
  }
}

/**
 * Format currency with conversion display
 * Example: "R$ 49.90 (≈ $9 USD)"
 */
export function formatCurrencyWithConversion(
  amount: number, 
  baseCurrency: Currency = 'BRL',
  targetCurrency?: Currency
): string {
  const baseFormatted = formatCurrency(amount, baseCurrency);
  
  if (!targetCurrency || targetCurrency === baseCurrency) {
    return baseFormatted;
  }
  
  const convertedAmount = baseCurrency === 'BRL' 
    ? convertFromBRL(amount, targetCurrency)
    : convertToBRL(amount, baseCurrency);
    
  const targetFormatted = formatCurrency(convertedAmount, targetCurrency);
  
  return `${baseFormatted} (≈ ${targetFormatted})`;
}

/**
 * Get formatted monthly contribution amount based on current currency
 */
export function getMonthlyContributionAmount(currency: Currency = 'BRL'): string {
  const baseAmount = 49.90; // Base amount in BRL
  
  if (currency === 'BRL') {
    return formatCurrency(baseAmount, currency);
  } else {
    const convertedAmount = convertFromBRL(baseAmount, currency);
    return formatCurrency(convertedAmount, currency);
  }
}

/**
 * Get currency preference from localStorage or browser locale
 */
export function getCurrencyPreference(): Currency {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('itb-currency');
    if (saved && currencies.some(c => c.code === saved)) {
      return saved as Currency;
    }
    
    // Detect from browser locale
    const locale = navigator.language || 'en-US';
    if (locale.startsWith('pt') || locale.includes('BR')) return 'BRL';
    if (locale.startsWith('en') && locale.includes('GB')) return 'GBP';
    if (locale.startsWith('en') || locale.includes('US')) return 'USD';
    if (locale.startsWith('es') || locale.startsWith('de') || locale.startsWith('fr')) return 'EUR';
  }
  
  return 'BRL'; // Default
}

/**
 * Save currency preference
 */
export function setCurrencyPreference(currency: Currency): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('itb-currency', currency);
  }
}

/**
 * Get standard contribution amounts in different currencies
 */
export function getContributionTiers(currency: Currency = 'BRL') {
  const baseTiers = [49.90, 199.90, 999.90, 4999.90]; // BRL amounts
  
  return baseTiers.map(amount => {
    const convertedAmount = currency === 'BRL' 
      ? amount 
      : convertFromBRL(amount, currency);
      
    return {
      amount: convertedAmount,
      formatted: formatCurrency(convertedAmount, currency),
      withConversion: formatCurrencyWithConversion(amount, 'BRL', currency !== 'BRL' ? currency : undefined)
    };
  });
}
