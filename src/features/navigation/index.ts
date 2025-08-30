// Main navigation feature exports
export { Navbar } from './components/navbar';
export { LanguageSelector } from './components/language-selector';
export { CurrencySelector } from './components/currency-selector';
export { ThemeSelector } from './components/theme-selector';

// Configuration exports
export { 
  LANGUAGES, 
  THEME_OPTIONS, 
  BRAND_CONFIG, 
  getDefaultNavigationItems,
  getMegaMenuConfig 
} from './config/navigation.config';

// Type exports
export type { 
  Language, 
  LanguageCode, 
  NavigationItem, 
  NavigationCategory,
  MegaMenuConfig,
  ThemeOption, 
  NavbarProps 
} from './types/navigation.types';
