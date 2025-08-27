# Portfolio Website - Requirements & Setup Guide

## Overview
This is a modern React TypeScript portfolio website for Arnav Gupta, built with Vite, Tailwind CSS, and Framer Motion animations.

## Prerequisites
- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher (comes with Node.js)
- **Git**: For version control

## Tech Stack
- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 4.5.0
- **Language**: TypeScript 5.2.2
- **Styling**: Tailwind CSS 3.3.5
- **Animations**: Framer Motion 10.16.4
- **Icons**: Lucide React 0.292.0
- **Component Library**: shadcn/ui (New York style)

## Installation Steps

### 1. Clone the Repository
```bash
git clone https://github.com/arnavgupta27/Portforlio-website.git
cd Portforlio-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Dependencies

### Core Dependencies
```json
{
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1", 
  "framer-motion": "^10.16.4",
  "lucide-react": "^0.292.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "tailwind-merge": "^3.3.1",
  "tailwindcss-animate": "^1.0.7"
}
```

### Development Dependencies
```json
{
  "@types/react": "^18.2.37",
  "@types/react-dom": "^18.2.15",
  "@typescript-eslint/eslint-plugin": "^6.10.0",
  "@typescript-eslint/parser": "^6.10.0",
  "@vitejs/plugin-react": "^4.1.0",
  "autoprefixer": "^10.4.16",
  "eslint": "^8.53.0",
  "eslint-plugin-react-hooks": "^4.6.0",
  "eslint-plugin-react-refresh": "^0.4.4",
  "postcss": "^8.4.31",
  "tailwindcss": "^3.3.5",
  "typescript": "^5.2.2",
  "vite": "^4.5.0"
}
```

## Component Libraries Setup

### shadcn/ui Components
The project uses shadcn/ui components with the following configuration:

1. **Style**: New York
2. **TypeScript**: Enabled
3. **Tailwind CSS**: Configured with CSS variables
4. **Base Color**: Neutral
5. **Icon Library**: Lucide React

#### Components Used:
- Button
- Card (CardHeader, CardTitle, CardContent)
- Badge
- Custom Icon wrapper

#### Adding New shadcn/ui Components:
```bash
npx shadcn-ui@latest add [component-name]
```

### Custom Components
- **Apple Hello Effect**: Vietnamese/English animated text effect
- **Marquee**: Scrolling text animation
- **Compact Navigation**: Floating navigation with smooth scroll
- **Experience Section**: Slideshow-style experience display
- **Projects Section**: Radial orbital timeline
- **Footer**: Professional footer with social links

## Scripts

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Build Process
1. TypeScript compilation (`tsc`)
2. Vite build with optimizations
3. Output to `dist/` directory

## Configuration Files

### Tailwind CSS (`tailwind.config.js`)
- Custom color palette (cyan/slate theme)
- Animation utilities
- Responsive breakpoints
- CSS variables support

### TypeScript (`tsconfig.json`)
- Strict mode enabled
- Path aliases configured (`@/` → `src/`)
- Modern ES modules

### Vite (`vite.config.ts`)
- React plugin
- Path aliases
- Build optimizations
- Manual chunk splitting

## Environment Setup

### Required Files
- `.gitignore` - Git ignore patterns
- `components.json` - shadcn/ui configuration
- `postcss.config.js` - PostCSS configuration
- `index.html` - Entry HTML file

### Assets
- SVG icons in `public/` directory
- Custom fonts (if any)
- Images and media files

## Development Workflow

### 1. Local Development
```bash
npm run dev
```

### 2. Type Checking
```bash
npx tsc --noEmit
```

### 3. Linting
```bash
npm run lint
```

### 4. Building
```bash
npm run build
```

### 5. Preview Build
```bash
npm run preview
```

## Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Set framework preset to "Vite"
3. Build command: `npm run build`
4. Output directory: `dist`
5. Node.js version: 18.x

### Manual Deployment
1. Run `npm run build`
2. Upload `dist/` folder to hosting provider
3. Configure server for SPA routing

## Troubleshooting

### Common Issues

#### TypeScript Errors
- Ensure all dependencies are installed
- Check for version compatibility
- Use `as any` for complex type conflicts (Framer Motion)

#### Build Failures
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check for unused imports
- Verify all file paths are correct

#### Animation Issues
- Ensure Framer Motion is properly imported
- Check for conflicting CSS animations
- Verify motion components are used correctly

## Performance Optimizations

### Implemented
- Code splitting with Vite
- Manual chunk splitting for large libraries
- Optimized imports
- CSS purging with Tailwind
- Image optimization

### Recommendations
- Use lazy loading for heavy components
- Implement service worker for caching
- Optimize SVG assets
- Monitor Core Web Vitals

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing
1. Fork the repository
2. Create feature branch
3. Make changes
4. Run tests and linting
5. Submit pull request

## License
Private project - All rights reserved

## Contact
- **Developer**: Arnav Gupta
- **Email**: arnavguptamodinagar@gmail.com
- **GitHub**: [@arnavgupta27](https://github.com/arnavgupta27)
- **LinkedIn**: [arnav-gupta-8351641b6](https://linkedin.com/in/arnav-gupta-8351641b6)
