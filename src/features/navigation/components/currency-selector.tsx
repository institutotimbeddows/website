import { DollarSign, CheckCircle } from 'lucide-react';
import { useCurrency } from '../../../contexts/currency-context';
import { currencies } from '../../../utils/currency';
import type { Currency } from '../../../utils/currency';

type CurrencySelectorProps = {
  className?: string;
  variant?: 'dropdown' | 'inline';
  showLabel?: boolean;
};

export function CurrencySelector({ 
  className = '',
  variant = 'dropdown',
  showLabel = false 
}: CurrencySelectorProps) {
  const { currency: currentCurrency, setCurrency } = useCurrency();

  const currentCurrencyInfo = currencies.find(c => c.code === currentCurrency);

  const handleCurrencyChange = (currency: Currency) => {
    setCurrency(currency);
  };

  if (variant === 'inline') {
    return (
      <div className={`flex gap-1 ${className}`}>
        {currencies.map(curr => (
          <button
            key={curr.code}
            onClick={() => handleCurrencyChange(curr.code)}
            className={`btn btn-sm ${
              currentCurrency === curr.code 
                ? 'btn-primary' 
                : 'btn-ghost hover:btn-base-200'
            }`}
            title={curr.name}
          >
            <span className="text-sm">{curr.flag}</span>
            {showLabel && <span className="text-xs font-mono">{curr.symbol}</span>}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className={`dropdown dropdown-end ${className}`}>
      <div 
        tabIndex={0} 
        role="button" 
        className="btn btn-ghost btn-circle"
        title={`Current currency: ${currentCurrencyInfo?.name}`}
      >
        <div className="flex items-center gap-1">
          <span className="text-sm">{currentCurrencyInfo?.flag}</span>
          <DollarSign className="w-4 h-4" />
        </div>
      </div>
      <ul 
        tabIndex={0} 
        className="dropdown-content menu bg-base-100 rounded-box z-[60] w-52 p-2 shadow-lg"
      >
        <li className="menu-title text-xs font-semibold opacity-60 px-3 py-1">
          <span>Choose Currency</span>
        </li>
        {currencies.map(curr => (
          <li key={curr.code}>
            <button
              onClick={() => handleCurrencyChange(curr.code)}
              className={`flex items-center gap-3 px-3 py-2 text-sm transition-colors ${
                currentCurrency === curr.code 
                  ? 'active bg-primary text-primary-content' 
                  : 'hover:bg-base-200'
              }`}
            >
              <span className="text-base">{curr.flag}</span>
              <div className="flex-1 text-left">
                <div className="font-medium">{curr.name}</div>
                <div className="text-xs font-mono opacity-70">{curr.symbol} {curr.code}</div>
              </div>
              {currentCurrency === curr.code && (
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
