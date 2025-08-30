# Navigation Feature

A modular, reusable navigation system for the Instituto Tim Beddows website.

## Features

- 🌍 **Consistent Language Selection** - Standardized emoji flags (🇧🇷🇺🇸🇪🇸)
- 💱 **Global Currency Conversion** - BRL, USD, EUR with real-time conversion
- 🎨 **Theme Management** - 26+ DaisyUI themes organized by category
- 📱 **Responsive Design** - Mobile-first with hamburger menu
- 🔧 **Modular Architecture** - Feature-based organization
- ⚡ **TypeScript Support** - Fully typed with proper interfaces

## Architecture

```
src/features/navigation/
├── components/           # UI components
│   ├── navbar.tsx       # Main navbar component
│   ├── language-selector.tsx
│   ├── currency-selector.tsx
│   └── theme-selector.tsx
├── config/              # Configuration
│   └── navigation.config.ts
├── types/               # TypeScript definitions
│   └── navigation.types.ts
├── index.ts            # Feature exports
└── README.md           # Documentation
```

## Usage

### Basic Navbar
```tsx
import { Navbar } from '../features/navigation';

function App() {
  return <Navbar />;
}
```

### Custom Configuration
```tsx
import { Navbar } from '../features/navigation';

function App() {
  return (
    <Navbar 
      brandName="Custom Brand"
      showThemeSelector={false}
      navigationItems={[
        { label: 'Home', to: '/' },
        { label: 'About', href: '#about' }
      ]}
    />
  );
}
```

### Individual Components
```tsx
import { LanguageSelector, CurrencySelector, ThemeSelector } from '../features/navigation';

function CustomHeader() {
  return (
    <div>
      <LanguageSelector variant="inline" showLabel />
      <CurrencySelector variant="dropdown" />
      <ThemeSelector variant="dropdown" />
    </div>
  );
}
```

## Configuration

### Languages
Standardized language configuration with consistent emoji flags:
- 🇧🇷 Portuguese (Brasil) - `pt`
- 🇺🇸 English (US) - `en` 
- 🇪🇸 Spanish - `es`

### Themes
26+ DaisyUI themes organized by category:
- **Light**: light, corporate, cupcake, bumblebee, emerald, fantasy, wireframe, pastel
- **Dark**: dark, business, luxury, dracula, black, forest
- **Vibrant**: synthwave, retro, cyberpunk, valentine, halloween, garden, aqua, lofi, cmyk, autumn, acid, lemonade

### Navigation Items
Configurable navigation with support for:
- Internal routes (`to` prop)
- External links (`href` prop)
- Active states
- Translation keys

## TypeScript Support

All components are fully typed with:
- `NavbarProps` - Main navbar configuration
- `NavigationItem` - Navigation link configuration
- `Language` - Language definition
- `ThemeOption` - Theme configuration
- `LanguageCode` - Union type for language codes

## Best Practices

1. **Consistent Flag Usage**: Always use the standardized flag emojis from `LANGUAGES` config
2. **Feature Organization**: Keep related components together in the feature folder
3. **Type Safety**: Use the provided types for configuration
4. **Accessibility**: Components include proper ARIA labels and keyboard navigation
5. **Performance**: Selectors use efficient state management and local storage
6. **Responsiveness**: Mobile-first design with proper breakpoints

## Global State Integration

The navigation system integrates with:
- `CurrencyProvider` - Global currency state management
- `I18nContext` - Language state management  
- `localStorage` - Theme and preference persistence
- `TanStack Router` - Type-safe navigation

This feature follows the project's architectural principles:
- TypeScript-first development
- Modular component design
- Feature-based organization
- Senior-level engineering practices
