# Assets Directory

This directory contains all static assets used throughout the application.

## Structure

```
src/assets/
├── people/           # Team member photos and images
│   ├── index.ts     # Export file for people assets
│   └── README.md    # Documentation for people assets
├── index.ts         # Main assets export file
└── README.md        # This file
```

## People Assets

The `people/` directory contains photos and images of team members and leadership.

### File Naming Convention

- Use kebab-case for filenames
- Include descriptive information in the filename
- Use appropriate file extensions (`.jpg`, `.png`, `.webp`)

### Example

```
gabriel-santana-president.jpg
gustavo-ruas-vice-president.jpg
```

### Usage

```typescript
import { PEOPLE_PHOTOS } from '../assets';

// In your component
<img 
  src={PEOPLE_PHOTOS.gabrielSantana} 
  alt="Gabriel V. Santana - President"
  className="w-24 h-24 rounded-full object-cover"
/>
```

## Best Practices

1. **File Organization**: Group related assets in subdirectories
2. **Naming**: Use descriptive, kebab-case filenames
3. **Exports**: Always export assets through index files
4. **Types**: Use TypeScript for type safety
5. **Documentation**: Document the purpose and usage of assets
6. **Optimization**: Use appropriate image formats and sizes
7. **Accessibility**: Always provide meaningful alt text

## Adding New Assets

1. Place the asset file in the appropriate subdirectory
2. Update the corresponding `index.ts` file
3. Export from the main `assets/index.ts` file
4. Update this README if necessary
5. Use the asset in your components with proper alt text

## Source Files

Some assets are sourced from files in the project root:
- `gabs.jpeg` → `src/assets/people/gabriel-santana-president.jpg`
- `gus.jpeg` → `src/assets/people/gustavo-ruas-vice-president.jpg`

These source files should be kept in the root for reference and backup purposes.
