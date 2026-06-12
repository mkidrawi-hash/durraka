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
| `/request-quotation` | Request for Quotation form (live backend) |
| `/rfq` | Permanent redirect → `/request-quotation` |
| `/contact` | Contact information and contact form |

## RFQ Backend Integration

The `/request-quotation` form is connected to a Next.js API route (`/api/rfq`) that:

1. Validates all required fields server-side
2. Generates a unique RFQ reference (`RFQ-YYYYMMDD-XXXX`)
3. Sends an internal notification email via **Resend**
4. Appends a row to a **Google Sheet** for CRM logging
5. Returns the reference number to the frontend success view

### Environment Variables

Copy `.env.example` to `.env.local` for local development. **Never commit `.env.local` to Git.**

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes | Resend API key for email delivery |
| `RFQ_INTERNAL_EMAIL` | No | Notification recipient (default: `mkidrawi@gmail.com`) |
| `GOOGLE_SHEETS_CLIENT_EMAIL` | For Sheets | Service account email from Google Cloud |
| `GOOGLE_SHEETS_PRIVATE_KEY` | For Sheets | Private key (replace real newlines with `\n`) |
| `GOOGLE_SHEETS_SPREADSHEET_ID` | For Sheets | ID from the Google Sheet URL |
| `GOOGLE_SHEETS_TAB_NAME` | No | Sheet tab name (default: `RFQ Submissions`) |

> **Important:** Google Sheets is optional. If its env vars are not set, submissions still succeed and the error is logged server-side. Resend is required — submissions will fail without a valid API key.

---

### Setting up Resend

1. Create a free account at [resend.com](https://resend.com)
2. Go to **API Keys** → **Create API Key**
3. Copy the key (starts with `re_`) into `RESEND_API_KEY`
4. For production: verify your sending domain in Resend → **Domains** and update the `from` address in `src/app/api/rfq/route.ts` from `noreply@durraka.com` to your verified domain

> For local testing without a verified domain, Resend will deliver test emails to your Resend dashboard inbox regardless of the `from` address.

---

### Setting up Google Sheets

#### 1. Create the spreadsheet

Create a new Google Sheet and add these headers in row 1:

| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Timestamp | RFQ Reference | Full Name | Job Title | Company Name | Email | Mobile / WhatsApp | Project Name | Project Location | Client Type | Project Type | Estimated Area | Timeline | Required Systems | Technical Notes | Source |

#### 2. Create a Google Cloud service account

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create a new project (or use an existing one)
3. Enable the **Google Sheets API** under **APIs & Services → Library**
4. Go to **IAM & Admin → Service Accounts → Create Service Account**
5. Give it a name (e.g. `durraka-rfq`) and click **Create and Continue**
6. Skip optional role assignment, click **Done**
7. Click the service account → **Keys → Add Key → Create New Key → JSON**
8. Download the JSON file

#### 3. Configure environment variables from the JSON file

From the downloaded JSON, copy:
- `client_email` → `GOOGLE_SHEETS_CLIENT_EMAIL`
- `private_key` → `GOOGLE_SHEETS_PRIVATE_KEY` (keep the `\n` characters as-is)

#### 4. Share the spreadsheet with the service account

Open your Google Sheet → **Share** → paste the service account email → give it **Editor** access.

Copy the spreadsheet ID from the URL:
```
https://docs.google.com/spreadsheets/d/THIS_IS_THE_ID/edit
```
Set this as `GOOGLE_SHEETS_SPREADSHEET_ID`.

---

### Adding environment variables in Vercel

1. Go to your Vercel project → **Settings → Environment Variables**
2. Add each variable from `.env.example` with its production value
3. For `GOOGLE_SHEETS_PRIVATE_KEY`: paste the entire private key value — Vercel preserves newlines correctly
4. Redeploy the project after adding variables

> **Security rule:** Secrets must only be added in Vercel's environment variable settings. Never commit them to GitHub, even in private repositories.

---

### Testing a submission

```bash
# Start the dev server (requires .env.local to be configured)
npm run dev

# In a separate terminal, send a test submission:
curl -X POST http://localhost:3000/api/rfq \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "company": "Test Company",
    "email": "test@example.com",
    "projectName": "Test Project",
    "projectLocation": "Riyadh, KSA",
    "systemRequired": "GFRC/GRC Façade Cladding"
  }'
```

Expected response:
```json
{ "success": true, "reference": "RFQ-20260612-5432" }
```

Verify:
- [ ] Notification email received at `RFQ_INTERNAL_EMAIL`
- [ ] New row appended to the Google Sheet
- [ ] Frontend success view shows the RFQ reference number

---

## Arabic / RTL Support

The project is structured for future Arabic (RTL) support:

- `<html lang="en" dir="ltr">` in `layout.tsx` — swap to `lang="ar" dir="rtl"` for the Arabic locale
- `globals.css` includes a `[dir='rtl']` block for RTL-specific overrides
- Font stack can be extended with Arabic web fonts (e.g. IBM Plex Sans Arabic via `next/font/google`)
- Tailwind `rtl:` variants can be used for mirrored layouts
