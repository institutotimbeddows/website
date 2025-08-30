# People Assets

This directory contains photos and images of the Institute's leadership team and key personnel.

## Current Assets

### Gabriel V. Santana - President & Founder
- **File**: `gabriel-santana-president.jpg` (from `gabs.jpeg`)
- **Usage**: Home page leadership section
- **Alt Text**: "Gabriel V. Santana - President & Founder"
- **Dimensions**: 24x24 (96x96px) circular avatar

### Gustavo Ruas - Vice President
- **File**: `gustavo-ruas-vice-president.jpg` (from `gus.jpeg`)
- **Usage**: Home page leadership section
- **Alt Text**: "Gustavo Ruas - Vice President"
- **Dimensions**: 24x24 (96x96px) circular avatar

## File Specifications

- **Format**: JPEG
- **Quality**: High quality for professional appearance
- **Aspect Ratio**: Square (1:1) recommended for consistent avatar display
- **Size**: Optimized for web use while maintaining quality

## Usage Examples

```typescript
import { PEOPLE_PHOTOS } from '../assets';

// In leadership cards
<div className="avatar mb-6">
  <div className="w-24 h-24 rounded-full overflow-hidden">
    <img 
      src={PEOPLE_PHOTOS.gabrielSantana} 
      alt="Gabriel V. Santana - President & Founder"
      className="w-full h-full object-cover"
    />
  </div>
</div>
```

## Accessibility

- Always provide meaningful alt text
- Use descriptive filenames
- Ensure proper contrast ratios
- Consider loading states for images

## Maintenance

- Update photos when personnel changes occur
- Maintain consistent image quality and dimensions
- Keep alt text up to date with current titles
- Optimize images for web performance
