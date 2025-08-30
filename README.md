# Instituto Tim Beddows - Official Website

A professional, multilingual website for Instituto Tim Beddows showcasing our mission to transform lives through education, art, and culture.

## 🌟 Overview

The Instituto Tim Beddows website serves as the digital front door for our non-profit organization, demonstrating our commitment to providing essential free access to education, culture, and technology for communities. The site reflects our core philosophy: **what is essential is not charged**.

## 🚀 Features

### ✨ Professional Design
- Modern, responsive design built with Tailwind CSS and DaisyUI
- Smooth animations with Framer Motion
- Professional color scheme and typography
- Dark/light theme support

### 🌍 Multilingual Support
- **English** - Global reach
- **Portuguese** - Primary language for Brazilian communities
- **Spanish** - Regional expansion support
- Persistent language preference storage

### 📱 Responsive & Accessible
- Mobile-first responsive design
- Accessible navigation and UI elements
- SEO-optimized content structure
- Fast loading with Vite bundling

### 🎯 Key Sections

1. **Hero Section** - Compelling introduction to our mission
2. **About/Mission** - Our vision, values, and approach
3. **Programs** - Four core program areas:
   - Cultural Institute & School
   - Cultural Events
   - Free Apps & Technology
   - Traveling Cultural Circuit
4. **Projects** - Comprehensive showcase across three categories:
   - Technology & Apps (Cifra Livre, Tuner App, etc.)
   - Cinema & Media (Documentaries, 15 Minutes of Fame, etc.)
   - Social Infrastructure (Industrial Kitchen, Sports Center, etc.)
5. **2025 Goals (OKRs)** - Clear, measurable objectives
6. **Governance** - Transparent leadership and principles
7. **Support** - Multiple ways to get involved
8. **Contact** - Easy communication channels

## 🛠 Technology Stack

- **Framework**: React 19 with TypeScript
- **Routing**: TanStack Router (file-based routing)
- **Styling**: Tailwind CSS 4 + DaisyUI 5
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite 6
- **Package Manager**: pnpm

## 📦 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
cd tim-beddows-app

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
# Build for production
pnpm build

# Preview production build
pnpm serve
```

## 🏗 Project Structure

```
tim-beddows-app/
├── src/
│   ├── routes/           # TanStack Router file-based routes
│   │   ├── __root.tsx   # Root layout
│   │   └── index.tsx    # Homepage with all sections
│   ├── data/            # Static data files
│   ├── styles.css       # Global styles and professional enhancements
│   └── main.tsx         # App entry point
├── public/              # Static assets
└── package.json         # Dependencies and scripts
```

## 🎨 Design Philosophy

### Core Principles
- **Essential Free Access** - What is essential is not charged
- **Simplicity** - No unnecessary bureaucracy
- **Transparency** - We account for every resource
- **Practical Focus** - Focus on what matters - teaching and serving

### Visual Design
- Clean, modern aesthetic that reflects professionalism
- Gradient color scheme representing transformation and growth
- Consistent spacing and typography for readability
- Hover effects and animations that enhance but don't distract

## 🌐 Content Management

All website content is managed in `src/routes/index.tsx` within the `content` object. This includes:

- Navigation labels
- Section headings and descriptions
- Project details and status
- Governance information
- Contact details

To update content:
1. Edit the `content` object in `index.tsx`
2. Ensure all three languages (en, pt, es) are updated consistently
3. Test the changes in development mode

## 📈 Real Data Integration

The website integrates real organizational data from the `tim-beddows-os` repository:

- **2025 OKRs** from `operational/okrs-2025.md`
- **Project Portfolio** from `projects/` directory
- **Governance Structure** from `governance/bylaws-estatuto.md`
- **Theory of Change** from `operational/theory-of-change.md`

## 🚀 Deployment

The website is configured for deployment to various platforms:

- **Vercel**: Zero-config deployment
- **Netlify**: Drag-and-drop or Git integration
- **GitHub Pages**: Via build artifacts

Production URL: `https://institutotimbeddows.org`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Content Updates
- Ensure multilingual consistency
- Test responsive design on multiple devices
- Verify accessibility features
- Update project statuses as needed

## 📞 Support

For technical issues or content updates:
- **Email**: institutotimbeddows@gmail.com
- **Location**: São Paulo, Brasil

## 📄 License

This project represents the official website of Instituto Tim Beddows, a non-profit organization dedicated to social transformation through education, art, and culture.

---

*"This is a life project. We cause social impact."* - Instituto Tim Beddows