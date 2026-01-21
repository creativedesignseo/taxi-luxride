# 🚕 Taxi Lux Ride

Professional taxi booking service website with multi-language support.

## 🌟 Features

- 🌍 **Multi-language:** Supports 10 languages with automatic detection
- 📱 **Responsive Design:** Mobile-first approach
- 🔍 **SEO Optimized:** Dynamic meta tags for each page
- ⚡ **High Performance:** WebP images and code splitting
- 🎨 **Modern UI:** Built with React 19 and Tailwind CSS
- 🗺️ **Interactive Maps:** Mapbox GL integration
- 💬 **WhatsApp Booking:** Direct booking via WhatsApp

## 🛠️ Tech Stack

- **Framework:** React 19.2.0
- **Build Tool:** Vite 7.2.4
- **Styling:** Tailwind CSS 3.4.17
- **Routing:** React Router DOM 7.11.0
- **i18n:** i18next + react-i18next
- **Maps:** Mapbox GL + react-map-gl
- **Backend:** Supabase
- **SEO:** react-helmet-async
- **Deployment:** Netlify

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to project
cd clients/taxi-luxride

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run convert-to-webp` - Convert new images to WebP
- `npm run clean-duplicates` - Remove duplicate PNG/JPG files
- `npm run optimize-images` - Manually optimize images

## ⚙️ Configuration

### Environment Variables
Copy `.env.example` to `.env` and configure:
```bash
cp .env.example .env
```

Required variables:
- `VITE_MAPBOX_TOKEN` - Mapbox API token
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Supabase anonymous key

### Customization Checklist

Before deploying, update these files with your company info:

1. **Logo & Favicon:**
   - Replace `/public/img/logo-final.svg` with your logo
   - Replace `/public/img/favicon-custom.png` with your favicon

2. **Phone Number:**
   - Edit `src/App.jsx` - Update `PHONE_NUMBER` and `PHONE_DISPLAY`

3. **Contact Email:**
   - Edit `src/i18n/locales/*.json` - Update `footer.email`

4. **Google Tag Manager (Optional):**
   - Edit `index.html` - Uncomment and add your GTM ID

5. **Supabase Backend:**
   - Configure your own Supabase project in `.env`

## 🌍 Multi-language Support

Supports 10 languages:
- 🇪🇸 Spanish (ES) - Default
- 🇬🇧 English (EN)
- 🇩🇪 German (DE)
- 🇫🇷 French (FR)
- 🇵🇹 Portuguese (PT)
- 🇨🇳 Chinese (ZH)
- 🇯🇵 Japanese (JA)
- 🇸🇦 Arabic (AR)
- 🇮🇳 Hindi (HI)
- 🇷🇺 Russian (RU)

Translations are located in `src/i18n/locales/`

## 📁 Project Structure

```
taxi-luxride/
├── public/
│   └── img/              # Static images (logos, icons)
├── src/
│   ├── components/       # React components
│   ├── i18n/             # Translations
│   │   └── locales/      # Language JSON files
│   ├── lib/              # Utilities (Supabase client, etc.)
│   ├── pages/            # Page components
│   └── App.jsx           # Main application
├── scripts/              # Build utilities
└── package.json
```

## 🚀 Deployment

### Netlify (Recommended)
```bash
# Build
npm run build

# Deploy
# Push to GitHub and connect to Netlify
```

The site will be automatically deployed on push to main branch.

## 📝 Important Notes

1. ⚠️ **Images:** Always `git add` images before commit
2. ⚠️ **Netlify:** Keep `.npmrc` file (legacy-peer-deps for React 19)
3. ⚠️ **SEO:** Use `SEO.jsx` component for meta tags
4. ⚠️ **i18n:** Always import `i18n` with `useTranslation`

## 📄 License

Private - All rights reserved

---

**Domain:** taxiluxride.com  
**Version:** 1.0.0
