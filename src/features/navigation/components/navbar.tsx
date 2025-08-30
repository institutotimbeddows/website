import { Link } from '@tanstack/react-router';
import { Menu } from 'lucide-react';
import { useI18n } from '../../../i18n/useI18n';
import { LanguageSelector } from './language-selector';
import { CurrencySelector } from './currency-selector';
import { ThemeSelector } from './theme-selector';
import { BRAND_CONFIG, getDefaultNavigationItems, getMegaMenuConfig } from '../config/navigation.config';
import type { NavbarProps, NavigationItem } from '../types/navigation.types';

export function Navbar({
  brandLink = BRAND_CONFIG.link,
  showBrand = true,
  showLanguageSelector = true,
  showCurrencySelector = false,
  showThemeSelector = true,
  navigationItems = getDefaultNavigationItems(),
  megaMenuConfig = getMegaMenuConfig(),
  className = ''
}: Omit<NavbarProps, 'brandName' | 'brandLogo'>) {
  const { t } = useI18n();

  const renderNavigationItem = (item: NavigationItem, isMobile = false) => {
    const baseClassName = isMobile 
      ? 'block w-full text-left px-3 py-2 text-sm hover:bg-base-200 rounded-md transition-colors'
      : 'hover:text-primary transition-colors px-3 py-2';

    if (item.to) {
      return (
        <Link
          key={item.to}
          to={item.to}
          className={baseClassName}
          activeProps={{
            className: isMobile 
              ? 'bg-primary text-primary-content font-semibold hover:bg-primary' 
              : 'text-primary font-semibold'
          }}
        >
          {t(item.label)}
        </Link>
      );
    }

    if (item.href) {
      return (
        <a
          key={item.href}
          href={item.href}
          className={baseClassName}
          {...(item.isExternal && { 
            target: '_blank', 
            rel: 'noopener noreferrer' 
          })}
        >
          {t(item.label)}
        </a>
      );
    }

    return null;
  };

  const renderMegaMenu = () => {
    return (
      <div className="flex items-center gap-1">
        {navigationItems.map((item, index) => (
          <div key={item.label} className="flex items-center">
            {renderNavigationItem(item)}
            {index < navigationItems.length - 1 && (
              <span className="text-base-content/30 mx-3">|</span>
            )}
          </div>
        ))}
      </div>
    );
  };

    return (
    <nav className={`navbar bg-base-100 shadow-sm sticky top-0 z-50 border-b border-base-200 ${className}`}>
      {/* Mobile menu button & Brand */}
      <div className="navbar-start">
        {/* Mobile menu dropdown - shown on tablet and mobile */}
        <div className="dropdown lg:hidden">
          <div 
            tabIndex={0} 
            role="button" 
            className="btn btn-ghost"
            aria-label="Open mobile menu"
          >
            <Menu className="w-5 h-5" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[60] mt-3 w-52 max-w-[90vw] p-2 shadow-lg border border-base-300"
          >
            {/* Mobile navigation items */}
            <div className="space-y-2 mb-4">
              {megaMenuConfig?.showMegaMenu ? (
                // Mobile mega menu with dropdowns
                megaMenuConfig.categories.map((category, index) => (
                  <div key={index} className="collapse collapse-arrow bg-base-200 rounded-lg border border-base-300">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title py-3 px-4 font-medium text-sm">
                      <span>{t(category.name)}</span>
                    </div>
                    <div className="collapse-content px-4 pb-2">
                      <div className="space-y-1">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="ml-2">
                            {renderNavigationItem(item, true)}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                // Simple mobile menu
                <div className="space-y-1">
                  {navigationItems.map(item => (
                    <li key={item.label}>
                      {renderNavigationItem(item, true)}
                    </li>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile selectors */}
            <div className="divider my-2"></div>
            <div className="space-y-3">
              <div className="text-xs font-semibold opacity-60 px-2">
                {t("nav.settings")}
              </div>
              <div className="flex flex-col gap-3">
                {showLanguageSelector && (
                  <div className="flex items-center justify-between px-2 min-h-[2rem]">
                    <span className="text-sm font-medium">{t("nav.language")}</span>
                    <LanguageSelector variant="inline" showLabel={false} />
                  </div>
                )}
                {showCurrencySelector && (
                  <div className="flex items-center justify-between px-2 min-h-[2rem]">
                    <span className="text-sm font-medium">{t("nav.currency")}</span>
                    <CurrencySelector variant="inline" showLabel={false} />
                  </div>
                )}
                {showThemeSelector && (
                  <div className="flex items-center justify-between px-2 min-h-[2rem]">
                    <span className="text-sm font-medium">{t("nav.theme")}</span>
                    <ThemeSelector variant="inline" showLabel={false} />
                  </div>
                )}
              </div>
            </div>
          </ul>
        </div>

        {/* Brand */}
        {showBrand && (
          <Link 
            to={brandLink}
            className="btn btn-ghost gap-2 ml-1 sm:ml-2 lg:ml-0 p-2"
          >
            {/* Mobile: Logo without text + abbreviated name */}
            <div className="lg:hidden flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="Instituto Tim Beddows" 
                className="w-8 h-8 object-contain" 
              />
              <span className="text-lg font-bold">{BRAND_CONFIG.shortName}</span>
            </div>
            
            {/* Desktop: Logo with text (no additional text needed) */}
            <div className="hidden lg:flex">
              <img 
                src="/logo-with-text.png" 
                alt="Instituto Tim Beddows" 
                className="h-8 object-contain" 
              />
            </div>
          </Link>
        )}
      </div>

      {/* Desktop navigation */}
      <div className="navbar-center hidden lg:flex">
        {renderMegaMenu()}
      </div>

      {/* Right side selectors */}
      <div className="navbar-end">
        {/* Desktop version - full selectors */}
        <div className="hidden lg:flex gap-1">
          {showLanguageSelector && <LanguageSelector />}
          {showCurrencySelector && <CurrencySelector />}
          {showThemeSelector && <ThemeSelector />}
        </div>
        
        {/* Tablet version - compact selectors */}
        <div className="hidden md:flex lg:hidden gap-1">
          {showLanguageSelector && <LanguageSelector showLabel={false} />}
          {showCurrencySelector && <CurrencySelector showLabel={false} />}
          {showThemeSelector && <ThemeSelector showLabel={false} />}
        </div>
        
        {/* Mobile version - minimal selectors */}
        <div className="md:hidden flex gap-1">
          {showLanguageSelector && <LanguageSelector showLabel={false} />}
          {showCurrencySelector && <CurrencySelector showLabel={false} />}
          {showThemeSelector && <ThemeSelector showLabel={false} />}
        </div>
      </div>
    </nav>
  );
}
