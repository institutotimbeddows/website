import type { Language, ThemeOption, NavigationItem, MegaMenuConfig } from '../types/navigation.types';

/**
 * Standardized language configuration
 * Using consistent flag emojis across the entire application
 */
export const LANGUAGES: readonly Language[] = [
  {
    code: 'pt',
    name: 'Português',
    nativeName: 'Português (Brasil)',
    flag: '🇧🇷'
  },
  {
    code: 'en', 
    name: 'English',
    nativeName: 'English (UK)',
    flag: '🇬🇧'
  },
  {
    code: 'es',
    name: 'Español', 
    nativeName: 'Español (Argentina)',
    flag: '🇦🇷'
  }
] as const;

/**
 * Simplified DaisyUI theme configuration - light and dark only
 */
export const THEME_OPTIONS: readonly ThemeOption[] = [
  { name: 'Light', value: 'light', category: 'Themes', description: 'Clean and bright theme' },
  { name: 'Dark', value: 'dark', category: 'Themes', description: 'Classic dark theme' }
] as const;

/**
 * Simple navigation items for Instituto Tim Beddows website
 * Clean structure: home | about | contact
 */
export function getDefaultNavigationItems(): NavigationItem[] {
  return [
    {
      label: 'nav.home',
      to: '/'
    },
    {
      label: 'nav.about',
      to: '/about'
    },
    {
      label: 'nav.contact',
      to: '/contact'
    }
  ];
}

/**
 * Simple navigation - no megamenu needed
 */
export function getMegaMenuConfig(): MegaMenuConfig {
  return {
    showMegaMenu: false,
    categories: []
  };
}

/**
 * Brand configuration
 */
export const BRAND_CONFIG = {
  name: 'Instituto Tim Beddows',
  shortName: 'ITB',
  link: '/'
} as const;
