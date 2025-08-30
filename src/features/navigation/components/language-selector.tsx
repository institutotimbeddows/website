import { CheckCircle } from 'lucide-react';
import { useI18n, type Language } from '../../../i18n/useI18n';
import { languages } from '../../../i18n/index';

type LanguageSelectorProps = {
  className?: string;
  variant?: 'dropdown' | 'inline';
  showLabel?: boolean;
};

export function LanguageSelector({ 
  className = '', 
  variant = 'dropdown',
  showLabel = false 
}: LanguageSelectorProps) {
  const { language, setLanguage } = useI18n();

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (languageCode: Language) => {
    setLanguage(languageCode);
  };

  if (variant === 'inline') {
    return (
      <div className={`flex gap-1 ${className}`}>
        {languages.map(lang => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`btn btn-sm ${
              language === lang.code 
                ? 'btn-primary' 
                : 'btn-ghost hover:btn-base-200'
            }`}
            title={lang.name}
          >
            <span className="text-sm">{lang.flag}</span>
            {showLabel && <span className="text-xs">{lang.code.toUpperCase()}</span>}
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
        title={`Current language: ${currentLanguage?.name}`}
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
      </div>
      <ul 
        tabIndex={0} 
        className="dropdown-content menu bg-base-100 rounded-box z-[60] w-48 p-2 shadow-lg"
      >
        <li className="menu-title text-xs font-semibold opacity-60 px-3 py-1">
          <span>Choose Language</span>
        </li>
        {languages.map(lang => (
          <li key={lang.code}>
            <button
              onClick={() => handleLanguageChange(lang.code)}
              className={`flex items-center gap-3 px-3 py-2 text-sm transition-colors ${
                language === lang.code 
                  ? 'active bg-primary text-primary-content' 
                  : 'hover:bg-base-200'
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <div className="flex-1 text-left">
                <div className="font-medium">{lang.name}</div>
                <div className="text-xs opacity-70">{lang.name}</div>
              </div>
              {language === lang.code && (
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
