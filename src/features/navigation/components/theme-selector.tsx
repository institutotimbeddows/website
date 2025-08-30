import { useState, useEffect } from 'react';
import { Palette, CheckCircle, RefreshCw } from 'lucide-react';
import { THEME_OPTIONS } from '../config/navigation.config';

type ThemeSelectorProps = {
  className?: string;
  variant?: 'dropdown' | 'inline';
  showLabel?: boolean;
};

export function ThemeSelector({ 
  className = '',
  variant = 'dropdown',
  showLabel = false 
}: ThemeSelectorProps) {
  const validThemes = THEME_OPTIONS.map(t => t.value);
  
  const [currentTheme, setCurrentTheme] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('itb-theme');
      if (savedTheme && validThemes.includes(savedTheme)) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        return savedTheme;
      }
    }
    const defaultTheme = 'light';
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', defaultTheme);
    }
    return defaultTheme;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('itb-theme', currentTheme);
    }
  }, [currentTheme]);

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
  };

  const handleResetTheme = () => {
    localStorage.removeItem('itb-theme');
    setCurrentTheme('light');
    window.location.reload();
  };

  const currentThemeInfo = THEME_OPTIONS.find(theme => theme.value === currentTheme);

  if (variant === 'inline') {
    return (
      <div className={`flex gap-1 ${className}`}>
        {THEME_OPTIONS.map(theme => (
          <button
            key={theme.value}
            onClick={() => handleThemeChange(theme.value)}
            className={`btn btn-sm ${
              currentTheme === theme.value 
                ? 'btn-primary' 
                : 'btn-ghost hover:btn-base-200'
            }`}
            title={theme.description}
          >
            {showLabel && <span className="text-xs">{theme.name}</span>}
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
        title={`Current theme: ${currentThemeInfo?.name}`}
      >
        <Palette className="w-5 h-5" />
      </div>
      <div 
        tabIndex={0} 
        className="dropdown-content menu bg-base-100 rounded-box z-[60] w-56 p-3 shadow-lg"
      >
        <div className="mb-3">
          <h3 className="font-bold text-base mb-1">Choose Theme</h3>
          <p className="text-xs opacity-70">Switch between light and dark themes</p>
          <div className="text-xs opacity-60 mt-1">
            Current: <span className="font-mono">{currentTheme}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-2">
          {THEME_OPTIONS.map(theme => (
            <button
              key={theme.value}
              onClick={() => handleThemeChange(theme.value)}
              className={`btn btn-sm justify-start gap-2 transition-all duration-200 ${
                currentTheme === theme.value 
                  ? 'btn-primary shadow-lg' 
                  : 'btn-ghost hover:btn-base-200'
              }`}
              title={theme.description}
            >
              <span className="text-left flex-1 font-medium">
                {theme.name}
              </span>
              {currentTheme === theme.value && (
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
              )}
            </button>
          ))}
        </div>
        
        <div className="divider my-2"></div>
        <div className="flex flex-col gap-2">
          <button 
            onClick={handleResetTheme}
            className="btn btn-xs btn-outline btn-error gap-1"
          >
            <RefreshCw className="w-3 h-3" />
            Reset Theme
          </button>
          <div className="text-xs opacity-60 text-center">
            Theme saved automatically
          </div>
        </div>
      </div>
    </div>
  );
}
