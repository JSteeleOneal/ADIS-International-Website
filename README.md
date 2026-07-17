# ADIS — Agricultural Drone Irrigation Systems

Premium one-page marketing site built with Next.js (App Router), React, TypeScript, Tailwind CSS, and Framer Motion, plus a working serverless contact form that emails inquiries to `ISZ.ADIS@protonmail.com` via Resend.

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in RESEND_API_KEY (see below)
npm run dev
```

Open http://localhost:3000.

The site renders fully without email configured — only form submission needs the API key.

## Email setup (Resend, ~5 minutes)

The contact form posts to `app/api/contact/route.ts`, a serverless route that sends mail through [Resend](https://resend.com) (free tier: 100 emails/day, 3,000/month — plenty for an inquiry form).

1. Create a free account at https://resend.com.
2. In the dashboard, go to **API Keys → Create API Key** and copy it.
3. In `.env.local`, set:

```env
RESEND_API_KEY=re_your_key_here
CONTACT_TO_EMAIL=ISZ.ADIS@protonmail.com
CONTACT_FROM_EMAIL=onboarding@resend.dev
```

That's enough for testing: `onboarding@resend.dev` is Resend's shared sender. **Important limitation:** while using the shared sender, Resend only delivers to the email address you signed up with. For production delivery to the ProtonMail inbox:

4. In Resend go to **Domains → Add Domain**, add your company domain (e.g. `adis-drones.com`), and create the DNS records it shows you (SPF/DKIM). Verification usually completes in minutes.
5. Change `CONTACT_FROM_EMAIL` to an address on that domain, e.g. `inquiries@adis-drones.com`. Delivery to any inbox — including ProtonMail — now works.

Replies go straight to the customer: the route sets `replyTo` to the sender's address, so hitting "Reply" in ProtonMail responds to the person who filled in the form.

## Deploying

The easiest path is [Vercel](https://vercel.com) (made by the Next.js team):

1. Push this folder to a GitHub repo.
2. Import the repo in Vercel — it detects Next.js automatically.
3. In **Project → Settings → Environment Variables**, add the same three variables from `.env.local`.
4. Deploy. The API route runs as a serverless function with zero extra configuration.

Netlify, Railway, and any Node host running `npm run build && npm start` also work.

## Spam protection

The form includes a hidden honeypot field (`company`). Bots that fill it get a fake success response and no email is sent. For heavier traffic, add Cloudflare Turnstile or reCAPTCHA to the form and verify the token in the API route.

## Replacing placeholders

- **Hero image** — the orchard spraying shot lives at `public/drone-hero.png`; swap the file (keeping the name) or update the `src` in `components/Hero.tsx` to change it.
- **Favicon** — `app/icon.png` and `app/apple-icon.png` are generated from the logo; replace them with a dedicated favicon whenever you have one.
- **Copy** — all text lives directly in the section components under `components/`.

## Project structure

```
app/
  layout.tsx          Fonts, metadata, favicon
  page.tsx            Section composition
  globals.css         Tailwind base + form/focus styles
  icon.png            Favicon (from logo)
  apple-icon.png      iOS icon (from logo)
  api/contact/
    route.ts          Serverless email endpoint (Resend)
components/
  Navbar.tsx          Sticky blur nav + mobile menu
  Hero.tsx            Headline, CTAs, field-contour animation, image placeholder
  About.tsx           Company overview
  Solutions.tsx       Four-card solutions grid
  Contact.tsx         Inquiry form with states + honeypot
  Footer.tsx          Logo, company name, email, copyright
  FadeIn.tsx          Shared scroll-reveal animation
public/
  logo.png            Your provided ADIS logo
```
