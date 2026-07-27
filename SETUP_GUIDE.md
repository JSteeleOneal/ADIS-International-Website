# ADIS — Multilingual Website Setup Guide

## Overview

This is a fully-functional, production-ready website for ADIS (ABZ Innovation distributor) with:
- **English & Portuguese** language support
- **Professional products page** with all 8 ABZ drone models
- **Dynamic content** that auto-translates across all pages
- **Responsive design** optimized for mobile and desktop
- **Modern components** built with Next.js, React, Tailwind CSS, and Framer Motion

## File Structure

```
adis-website/
├── app/
│   ├── page.tsx                 # Home page (multilingual)
│   ├── products/
│   │   └── page.tsx             # Products page (8 drone models)
│   ├── layout.tsx               # Root layout with LanguageProvider
│   ├── globals.css              # Global styles
│   └── api/contact/route.ts      # Contact form API
├── components/
│   ├── Navbar.tsx               # Navigation with language switcher
│   ├── Hero.tsx                 # Hero section
│   ├── About.tsx                # About section
│   ├── Solutions.tsx            # Product series overview
│   ├── Contact.tsx              # Contact form
│   ├── Footer.tsx               # Footer
│   └── FadeIn.tsx               # Animation wrapper
├── data/
│   └── products.ts              # Complete product database (8 models)
├── lib/
│   ├── i18n.ts                  # Translation strings (EN + PT)
│   └── LanguageContext.tsx       # Language state management
├── public/
│   ├── logo.png                 # ADIS logo
│   └── drone-hero.png           # Hero background image
└── package.json                 # Dependencies
```

## Key Features

### 1. **Multilingual Support (EN/PT)**
- Language context provider in `lib/LanguageContext.tsx`
- All translations in `lib/i18n.ts`
- Language preference saved to localStorage
- Language switcher in navbar (desktop + mobile)

### 2. **Product Database**
Complete specifications for 8 ABZ models in `data/products.ts`:
- **L-Series**: L10 V2, L30 V2, L50 (spraying drones)
- **S-Series**: S20, S50 (spreading drones)
- **M-Series**: M12, M40 (mapping/multifunctional)
- **C-Series**: C10 (cleaning drone)

Each product includes:
- Full technical specs
- Feature lists
- Certifications
- Real case studies

### 3. **Pages**

#### Home Page (`/`)
- Hero section with call-to-action
- About section highlighting key differentiators
- Product series overview
- Contact form

#### Products Page (`/products`)
- Complete drone catalog with specs
- Filtered by series (Agricultural, Industrial)
- Case study proof blocks
- Responsive grid layout

### 4. **Components**

All components support multilingual content:
- **Navbar**: Language switcher, navigation links
- **Hero**: Main headline and CTA
- **About**: Company values and features
- **Solutions**: Product series cards
- **Contact**: Email form with validation
- **Footer**: Links and company info

## Setup Instructions

### 1. Install Dependencies
```bash
cd adis-website
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 3. Build for Production
```bash
npm run build
npm start
```

## Language Switching

Users can switch languages via:
1. **Desktop**: Language buttons (EN/PT) in navbar
2. **Mobile**: Language buttons in mobile menu
3. Language preference persists in localStorage

All content automatically updates when language changes.

## Adding New Products

To add a new drone model:

1. Edit `data/products.ts`:
```typescript
{
  id: "unique-id",
  name: "Model Name",
  series: "L", // or S, M, C
  tagline: "Short description",
  summary: "Longer description",
  specs: [
    { label: "Tank Capacity", value: "50 L" },
    // ... more specs
  ],
  features: ["Feature 1", "Feature 2", ...],
  certifications: ["CE", "FCC"],
}
```

2. Update translations in `lib/i18n.ts` if needed

3. Product automatically appears on `/products` page

## Adding New Languages

To add Portuguese (PT) or another language:

1. Expand `translations` object in `lib/i18n.ts`:
```typescript
export const translations = {
  en: { /* ... */ },
  pt: { /* ... */ },
  es: { /* NEW LANGUAGE */ },
};
```

2. Update `Language` type:
```typescript
export type Language = "en" | "pt" | "es";
```

3. No component changes needed — everything auto-updates

## API Routes

### `/api/contact`
Handles contact form submissions. Currently logs to console; configure with:
- Email service (Resend, SendGrid, etc.)
- Database (Postgres, MongoDB, etc.)
- Webhook (Slack, Discord, etc.)

## Customization

### Colors
The site uses Tailwind CSS. Main colors:
- `pine` — Primary (green)
- `ink` — Dark text
- `charcoal` — Medium text
- `mist` — Light background
- `emerald-600` — Accent (products page)

Edit `tailwind.config.ts` to change.

### Fonts
Currently using:
- `Space_Grotesk` — Display/headings
- `Inter` — Body text

Change in `app/layout.tsx`.

### Images
- Logo: `public/logo.png` (44x44px)
- Hero: `public/drone-hero.png` (background image)

### Contact Form
Update recipient email in `.env.local`:
```
RESEND_API_KEY=your_key_here
```

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
Automatic deployments on push to main branch.

### Docker
```bash
docker build -t adis-website .
docker run -p 3000:3000 adis-website
```

### Traditional Server
```bash
npm run build
npm start
```

## Performance Optimizations

- ✅ Image optimization (Next.js Image component)
- ✅ Code splitting per page
- ✅ Minimal client-side JS (static where possible)
- ✅ CSS frameworks (Tailwind) - no runtime overhead
- ✅ Fast animations (Framer Motion)

## SEO

- Metadata configured in `app/layout.tsx`
- Open Graph tags included
- Semantic HTML throughout
- Mobile-first responsive design

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

**Language switcher not working?**
- Check `LanguageProvider` is in `layout.tsx`
- Ensure component uses `useLanguage()` hook
- Check browser localStorage is enabled

**Products not showing?**
- Verify `data/products.ts` file exists
- Check file is imported in `app/products/page.tsx`
- Ensure product `id` is unique

**Styles look wrong?**
- Run `npm install` to ensure Tailwind is installed
- Check `tailwind.config.ts` exists
- Clear browser cache (Ctrl+Shift+Delete)

## Support

For issues or questions:
1. Check component implementation in `components/`
2. Review `lib/i18n.ts` for translation keys
3. Verify data structure in `data/products.ts`

---

**Website Version**: 1.0.0  
**Last Updated**: July 2026  
**Built with**: Next.js 14, React 18, Tailwind CSS, Framer Motion
