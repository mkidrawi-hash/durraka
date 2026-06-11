# Durraka Factory for Industry — Website

Official website for **Durraka Factory for Industry**, Saudi Arabia's leading manufacturer of GFRC/GRC façade cladding, mashrabiya systems, architectural domes, cornices, columns, and custom decorative elements.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) — App Router |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Deployment | Vercel |

## Brand

| Token | Hex |
|---|---|
| Navy | `#071B3B` |
| Accent Red | `#D71920` |
| White | `#FFFFFF` |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (header + footer)
│   ├── page.tsx            # Home page
│   ├── about/page.tsx
│   ├── systems/page.tsx
│   ├── projects/page.tsx
│   ├── catalog/page.tsx
│   ├── rfq/page.tsx        # Request for Quotation
│   └── contact/page.tsx
├── components/
│   ├── layout/             # Header, Footer
│   └── home/              # Hero, Metrics, SystemsOverview, ProjectsPreview, RfqCTA
└── lib/
    └── constants.ts        # Nav links, metrics, systems data, contact info
```

## Getting Started Locally

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/mkidrawi-hash/durraka.git
cd durraka

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Deploying to Vercel

### Option 1 — Vercel Dashboard (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **Add New → Project**
4. Import the `durraka` repository
5. Leave all settings as default (Next.js is auto-detected)
6. Click **Deploy**

Vercel will assign a `.vercel.app` URL on first deploy. Connect a custom domain in **Project Settings → Domains**.

### Option 2 — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel          # preview deployment
vercel --prod   # production deployment
```

## Pages

| Route | Page |
|---|---|
| `/` | Home — Hero, Metrics, Systems, Projects, RFQ CTA |
| `/about` | Company overview and values |
| `/systems` | Full GFRC/GRC product systems catalogue |
| `/projects` | Portfolio of completed projects |
| `/catalog` | Technical catalog and data sheet downloads |
| `/rfq` | Request for Quotation form |
| `/contact` | Contact information and contact form |

## Arabic / RTL Support

The project is structured for future Arabic (RTL) support:

- `<html lang="en" dir="ltr">` in `layout.tsx` — swap to `lang="ar" dir="rtl"` for the Arabic locale
- `globals.css` includes a `[dir='rtl']` block for RTL-specific overrides
- Font stack can be extended with Arabic web fonts (e.g. IBM Plex Sans Arabic via `next/font/google`)
- Tailwind `rtl:` variants can be used for mirrored layouts

## Environment Variables

No environment variables are required for the initial static build. When integrating a backend for RFQ / Contact form submissions, add:

```env
# .env.local
NEXT_PUBLIC_CONTACT_EMAIL=info@durraka.com
# Add your form service API key here (e.g. Formspree, Resend)
```
