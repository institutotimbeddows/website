export type LanguageCode = 'en' | 'pt' | 'es';

export type Language = {
  code: LanguageCode;
  name: string;
  flag: string;
  nativeName: string;
};

export type NavigationItem = {
  label: string;
  href?: string;
  to?: string;
  isExternal?: boolean;
  isActive?: boolean;
  children?: NavigationItem[];
  category?: string;
  description?: string;
  icon?: string;
};

export type NavigationCategory = {
  name: string;
  description?: string;
  items: NavigationItem[];
  icon?: string;
};

export type MegaMenuConfig = {
  categories: NavigationCategory[];
  showMegaMenu: boolean;
};

export type ThemeOption = {
  name: string;
  value: string;
  category: string;
  description?: string;
};

export type NavbarProps = {
  brandName?: string;
  brandLogo?: React.ReactNode;
  brandLink?: string;
  showBrand?: boolean;
  showLanguageSelector?: boolean;
  showCurrencySelector?: boolean;
  showThemeSelector?: boolean;
  navigationItems?: NavigationItem[];
  megaMenuConfig?: MegaMenuConfig;
  className?: string;
};
