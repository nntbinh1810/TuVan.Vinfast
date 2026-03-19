# 🏗️ Architecture Overview - VinFast Website

## 📐 System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         User's Browser                          │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │  Next.js App (Frontend)                                 │  │
│  │                                                          │  │
│  │  ┌──────────────────────────────────────────────────┐   │  │
│  │  │  Page Components                               │   │  │
│  │  │  ├─ Header (Navigation)                        │   │  │
│  │  │  ├─ Hero Section (Banner)                      │   │  │
│  │  │  ├─ Vehicle Grid (3 Cards)                     │   │  │
│  │  │  ├─ Features Section                           │   │  │
│  │  │  ├─ Specs Comparison Table                     │   │  │
│  │  │  ├─ Contact CTA                                │   │  │
│  │  │  ├─ Footer                                     │   │  │
│  │  │  └─ ChatbotWidget (Floating)                  │   │  │
│  │  └──────────────────────────────────────────────────┘   │  │
│  │                                                          │  │
│  │  ┌──────────────────────────────────────────────────┐   │  │
│  │  │  Component Library (shadcn/ui)                  │   │  │
│  │  │  ├─ Card, Button, Badge, etc.                  │   │  │
│  │  │  └─ 60+ Radix UI components                    │   │  │
│  │  └──────────────────────────────────────────────────┘   │  │
│  │                                                          │  │
│  │  ┌──────────────────────────────────────────────────┐   │  │
│  │  │  Styling (Tailwind CSS 4)                       │   │  │
│  │  │  ├─ Theme Variables (CSS Custom Props)          │   │  │
│  │  │  ├─ Responsive Breakpoints                      │   │  │
│  │  │  └─ Dark Mode Support                           │   │  │
│  │  └──────────────────────────────────────────────────┘   │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │  External Services                                      │  │
│  │  ├─ Botpress Chatbot (iframe)                          │  │
│  │  ├─ Google Fonts (Geist)                              │  │
│  │  └─ Analytics (Vercel)                                │  │
│  └─────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

## 🔀 Component Hierarchy

```
RootLayout
├── Header
│   ├── Logo
│   ├── Nav Links
│   ├── Mobile Menu
│   └── CTA Button
│
├── Main Content
│   ├── Hero Section
│   │   ├── Background Image
│   │   ├── Overlay
│   │   ├── Title
│   │   ├── Description
│   │   └── Button
│   │
│   ├── Vehicles Section
│   │   └── VehicleCard (x3)
│   │       ├── Image
│   │       ├── Name & Price
│   │       ├── Description
│   │       ├── Specs Grid
│   │       ├── Color Swatches
│   │       └── CTA Button
│   │
│   ├── Features Section
│   │   └── Feature Card (x3)
│   │       ├── Icon
│   │       ├── Title
│   │       └── Description
│   │
│   ├── Specs Table
│   │   └── Table Data
│   │
│   ├── Contact Section
│   │   ├── Title
│   │   ├── Description
│   │   └── Button
│   │
│   └── Footer
│       ├── Copyright
│       ├── Phone
│       └── Branding
│
└── ChatbotWidget
    ├── Floating Button
    ├── Chat Window
    │   ├── Header
    │   ├── Minimize Button
    │   ├── Close Button
    │   └── Botpress iframe
    └── State Management
        ├── isOpen
        └── isMinimized
```

## 🗄️ File Structure

```
website_demo/
│
├── 📂 app/                          # Next.js App Router
│   ├── page.tsx                     # Main landing page (280+ lines)
│   │   └── Exports: Home component
│   │       ├── Vehicle data array
│   │       ├── State management
│   │       ├── Event handlers
│   │       └── JSX structure
│   │
│   ├── layout.tsx                   # Root layout (Vietnamese)
│   │   ├── Metadata (SEO)
│   │   ├── Font imports (Geist)
│   │   ├── HTML lang="vi"
│   │   ├── Body classes
│   │   └── Analytics
│   │
│   └── globals.css                  # Global styles & theme
│       ├── Theme variables (CSS custom properties)
│       ├── Color definitions (oklch format)
│       ├── Tailwind directives
│       ├── Base styles
│       └── Dark mode variables
│
├── 📂 components/                   # React components
│   ├── Header.tsx                   # Navigation (81 lines)
│   │   ├── Sticky positioning
│   │   ├── Desktop & mobile nav
│   │   ├── Logo
│   │   ├── Menu items
│   │   └── Mobile hamburger
│   │
│   ├── VehicleCard.tsx              # Vehicle display (103 lines)
│   │   ├── Image handling
│   │   ├── Price formatting
│   │   ├── Specs display
│   │   ├── Color swatches with hover
│   │   ├── Features list
│   │   └── CTA button
│   │
│   ├── ChatbotWidget.tsx            # Chat integration (107 lines)
│   │   ├── State management (open/minimize)
│   │   ├── Script loading
│   │   ├── Header & buttons
│   │   ├── Iframe embedding
│   │   └── Close/minimize functionality
│   │
│   ├── theme-provider.tsx           # Theme provider (if used)
│   │
│   └── 📂 ui/                       # shadcn/ui components (60+)
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── accordion.tsx
│       ├── tabs.tsx
│       └── ... (other Radix UI components)
│
├── 📂 public/                       # Static assets
│   ├── vf8-side.jpg                 # VF8 vehicle image
│   ├── vf9-side.jpg                 # VF9 vehicle image
│   ├── vf5-side.jpg                 # VF5 vehicle image
│   ├── hero-banner.jpg              # Hero background
│   ├── apple-icon.png               # Apple favicon
│   ├── icon-light-32x32.png        # Light favicon
│   ├── icon-dark-32x32.png         # Dark favicon
│   └── icon.svg                     # SVG icon
│
├── 📂 lib/                          # Utilities
│   └── utils.ts                     # Helper functions (cn, clsx)
│
├── 📂 hooks/                        # React hooks
│   ├── use-mobile.ts                # Mobile detection
│   └── use-toast.ts                 # Toast notifications
│
├── 📂 styles/                       # Additional styles
│   └── globals.css                  # (mirrors app/globals.css)
│
├── 🔧 Configuration Files
│   ├── package.json                 # Dependencies & scripts
│   ├── tsconfig.json                # TypeScript config
│   ├── next.config.mjs              # Next.js config
│   ├── tailwind.config.ts           # Tailwind config
│   ├── postcss.config.mjs           # PostCSS config
│   └── components.json              # shadcn config
│
├── 📚 Documentation
│   ├── README.md                    # Main documentation
│   ├── QUICKSTART.md                # 5-minute quick start
│   ├── SETUP.md                     # Installation guide
│   ├── FEATURES.md                  # Features list
│   ├── SUMMARY.md                   # Project summary
│   ├── DOCS.md                      # Documentation index
│   ├── ARCHITECTURE.md              # This file
│   └── CHANGELOG.md                 # (coming soon)
│
└── 🔧 Deployment Files
    ├── .vercelignore                # Vercel ignore patterns
    ├── .gitignore                   # Git ignore patterns
    └── .env.local                   # Local env (if needed)
```

## 🔄 Data Flow

```
User Interaction
       │
       ▼
Browser Event (click, scroll, etc)
       │
       ▼
React State Update
       │
       ├─ isOpen (chatbot)
       ├─ isMinimized (chatbot)
       └─ selectedVehicle (reference)
       │
       ▼
Component Re-render
       │
       ├─ Header (responsive menu)
       ├─ VehicleCard (on consult click)
       ├─ ChatbotWidget (on open/close)
       └─ Other UI updates
       │
       ▼
DOM Update & Browser Repaint
       │
       ▼
User sees changes
```

## 🎨 Styling Architecture

```
Tailwind CSS 4
    │
    ├─ Utility Classes
    │  └─ p-4, m-8, bg-primary, text-white, etc.
    │
    ├─ Components
    │  └─ @apply declarations in globals.css
    │
    └─ Theme Variables (CSS Custom Properties)
       │
       ├─ Colors
       │  ├─ --primary: oklch(0.55 0.2 30)      [Cam]
       │  ├─ --background: oklch(0.08 0 0)       [Tối]
       │  ├─ --foreground: oklch(0.95 0 0)       [Sáng]
       │  ├─ --card: oklch(0.12 0 0)             [Tối nhẹ]
       │  ├─ --secondary: oklch(0.20 0 0)        [Xám]
       │  └─ --border: oklch(0.22 0 0)           [Xám viền]
       │
       ├─ Spacing (Tailwind defaults)
       │  └─ 4px, 8px, 16px, 32px, etc.
       │
       ├─ Typography
       │  ├─ --font-sans: Geist
       │  └─ --font-mono: Geist Mono
       │
       └─ Responsive Breakpoints
          ├─ sm: 640px
          ├─ md: 768px
          ├─ lg: 1024px
          └─ xl: 1280px
```

## 🔌 Integration Points

### 1. Botpress Chatbot
```
ChatbotWidget.tsx
    │
    ├─ Load scripts on demand
    ├─ Create iframe element
    ├─ Embed chatbot URL
    │  └─ https://cdn.botpress.cloud/...
    │
    ├─ Manage state
    │  ├─ Open/close
    │  └─ Minimize/maximize
    │
    └─ User interactions
       ├─ Click floating button
       ├─ Click X to close
       └─ Click _ to minimize
```

### 2. Next.js Image Optimization
```
VehicleCard.tsx
    │
    ├─ Next.js Image component
    ├─ Automatic optimization
    │  ├─ Responsive images
    │  ├─ Format conversion
    │  └─ Lazy loading
    │
    └─ Fallback for errors
```

### 3. Google Fonts
```
app/layout.tsx
    │
    ├─ Import Geist font family
    ├─ Apply to body element
    └─ Used throughout via --font-sans
```

### 4. Vercel Analytics
```
app/layout.tsx
    │
    └─ Analytics component
       └─ Tracks page views & events
```

## 📊 State Management

### Simple State (React hooks)
```
page.tsx
├─ selectedVehicle: Vehicle | null
│  └─ Used for: Display selected vehicle info
│
├─ ChatbotWidget.tsx
│  ├─ isOpen: boolean
│  │  └─ Control: Show/hide chat window
│  │
│  ├─ isMinimized: boolean
│  │  └─ Control: Collapse chat window
│  │
│  └─ isMounted: boolean
│     └─ Control: Hydration & SSR
```

### No Complex State Management Needed
- ✅ No Redux
- ✅ No Zustand
- ✅ No Jotai
- ✅ Simple React hooks sufficient

## 🔐 Security Considerations

### ✅ Implemented
- HTTPS for chatbot iframe (secure origin)
- No sensitive data stored client-side
- Input sanitization via React
- Environment variables for config (if needed)

### Future Enhancements
- [ ] CSP headers
- [ ] CORS policies
- [ ] Rate limiting
- [ ] API authentication (if backend added)

## ♿ Accessibility Architecture

```
Semantic HTML
    │
    ├─ <header> - Navigation
    ├─ <main> - Main content
    ├─ <section> - Content sections
    ├─ <footer> - Footer info
    │
    ├─ ARIA Labels
    │  ├─ aria-label on buttons
    │  ├─ aria-expanded on toggles
    │  └─ role attributes where needed
    │
    └─ Color Contrast
       └─ All colors WCAG AA compliant
```

## 📱 Responsive Architecture

```
Mobile First Design
    │
    ├─ Base styles (Mobile - 320px+)
    │  └─ Single column, touch-friendly
    │
    ├─ Tablet (md: 768px+)
    │  └─ 2 columns, optimized spacing
    │
    ├─ Desktop (lg: 1024px+)
    │  └─ 3 columns, full width
    │
    └─ Large Desktop (xl: 1280px+)
       └─ Max width container, centered
```

## 🚀 Deployment Architecture

```
Local Development
    │
    ├─ pnpm dev
    └─ http://localhost:3000
       │
       └─ Hot reload enabled
          └─ Changes auto-reflect
          
Production Build
    │
    ├─ pnpm build
    │  └─ Next.js compilation
    │
    ├─ Optimization
    │  ├─ Code splitting
    │  ├─ Bundle analysis
    │  └─ Image optimization
    │
    └─ Deployment Options
       │
       ├─ Vercel (Recommended)
       │  └─ Git push → Auto deploy
       │
       ├─ Self-hosted
       │  ├─ Node.js server
       │  └─ Port 3000 (or custom)
       │
       └─ Docker
          └─ Container deployment
```

## 📈 Performance Optimization

```
Frontend Optimizations
    │
    ├─ Code Splitting
    │  ├─ Route-based splitting
    │  └─ Dynamic imports
    │
    ├─ Image Optimization
    │  ├─ Next.js Image component
    │  ├─ WebP conversion
    │  ├─ Responsive sizing
    │  └─ Lazy loading
    │
    ├─ CSS Optimization
    │  ├─ Tailwind PurgeCSS
    │  ├─ Critical CSS
    │  └─ Minification
    │
    ├─ Font Optimization
    │  ├─ Font subsetting
    │  └─ Variable fonts
    │
    └─ Caching
       ├─ Browser cache
       ├─ Vercel CDN cache
       └─ Revalidation headers
```

## 🔄 Update Flow

```
Developer
    │
    ├─ Makes changes
    ├─ Git commit & push
    │
    └─ Vercel Deployment
       │
       ├─ Webhook triggered
       ├─ Build process
       ├─ Tests (if configured)
       ├─ Deploy to CDN
       │
       └─ Live website updated
          └─ Automatic! ✨
```

---

## Summary

This architecture provides:
- ✅ **Scalable** - Easy to add new features
- ✅ **Maintainable** - Clear component structure
- ✅ **Performant** - Optimized for speed
- ✅ **Accessible** - WCAG AA compliant
- ✅ **Responsive** - Mobile-first design
- ✅ **Secure** - Best practices applied

---

**Created**: 2026-03-19  
**Version**: 1.0.0  
**Language**: Tiếng Việt + English
