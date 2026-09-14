# COSMOVERTEX — English Test Prep & Study Abroad Consultancy

[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.2-ff0055?logo=framer)](https://www.framer.com/motion/)
[![Resend](https://img.shields.io/badge/Resend-Email_API-black?logo=resend)](https://resend.com/)

Bangladesh's premier English proficiency test preparation center and study abroad consultancy, based in Dhaka. Official web platform for **COSMOVERTEX** (also established under **Doctor of SEL**, **Sky2Edu**, & **Renaissance Edu Care**).

🌐 **Official Website**: [https://cosmovertex.edu.bd](https://cosmovertex.edu.bd)

---

## 🌍 Overview

COSMOVERTEX empowers Bangladeshi students to achieve their international education and language certification goals with personalized mentorship, verified track records, and direct institutional connections.

- **Certified English Test Preparation**:
  - **British Council EnglishScore** — Official partner & coaching for verified CEFR C1 Advanced certificates (achievements up to 599/600).
  - **Duolingo English Test (DET)** — Comprehensive prep for 110+ target scores accepted by 5,000+ universities worldwide.
  - **EF SET (Standard English Test)** — Fast-track CEFR certification accepted across European and South Korean universities.
  - **IELTS & PTE Academic** — Targeted band 7.0+ coaching and computer-adaptive test strategies.
- **Global Study Abroad Consultancy**:
  - **Australia 🇦🇺** — High visa approval rates, direct pathways, and official delegation partnerships (including **Fusion College, Sydney**).
  - **South Korea 🇰🇷** — SKY University admissions (Seoul National, Yonsei, Korea University), affordable tuition ($3,000–$8,000/yr), March & September intakes, D-10 & E-7 work visas.
  - **Europe & Schengen 🇪🇺** — High visa success across Greece, Lithuania, Slovenia, Malta, and Germany with Schengen mobility.
  - **United Kingdom 🇬🇧** — Russell Group applications, Foundation/Direct entry, 2-year Graduate Route Post-Study Work (PSW).
  - **United States 🇺🇸** — Top universities, F-1 visa preparation, merit scholarships, and 3-year STEM OPT extensions.
- **Key Metrics**:
  - **1,800+** successful test results since 2020
  - **45+** partner universities worldwide
  - **98%** student visa success rate
  - **Max 5–10 students** per batch for dedicated 1-on-1 attention

---

## 🏫 Office Locations & Contact

| Branch | Address | Phone | Direct Line |
|---|---|---|---|
| **Banani** *(Sky2Edu / CosmoVertex)* | House #38, Road #02, 1st Floor, Banani, Dhaka - 1213 | +880 1316-318387 | Mon–Sat, 10 AM – 7 PM |
| **Mohakhali DOHS** *(Renaissance Edu Care)* | House #409, Road #29, Level 5A, Mohakhali DOHS, Dhaka - 1206 | +880 1346-990025 | Mon–Sat, 10 AM – 7 PM |

- 📧 **Email**: [cosmovertex@gmail.com](mailto:cosmovertex@gmail.com)
- 💬 **WhatsApp**: [+880 1316-318387](https://wa.me/8801316318387)
- 📘 **Facebook**: [facebook.com/cosmovertex](https://www.facebook.com/share/1cDbjrn6XP/)

---

## ✨ Key Features & User Experience

### 1. Interactive Success Gallery & Lightbox Modal
- Dynamic filterable showcase categorizing **Australia Delegation**, **British Council C1 Advanced**, **Visa Success**, **South Korea**, and **Europe**.
- Immersive modal viewer with keyboard navigation (`Esc` to close, `Arrow` keys to browse), swipe support, and high-resolution certificate inspection.
- Features verified scorecards (e.g., Dip Saha 599/600, Sneha 545, Mobarak 520, Mamun 497) and official high-level meets (Dr. Binod Shrestha, CEO of Fusion College Sydney).

### 2. High-Conversion Lead Capture Engine
- Unified contact and destination assessment forms backed by **React Hook Form** + **Zod** schema validation.
- Dual-channel fulfillment:
  - Direct 1-click **WhatsApp instant consultation** with auto-formatted inquiry parameters.
  - Server-side email notifications routed through **Resend API** to `cosmovertex@gmail.com` with console fallback in development.

### 3. Dedicated Destination Portals
- Modular destination guides for **Australia**, **Europe**, **South Korea**, **UK**, and **USA**.
- Structured quick facts: average tuition, application intakes, accepted English exams, and post-study work rights.
- Interactive tabbed sections detailing step-by-step admission timelines, scholarship guides, and university lists.

### 4. Media & Video Showcase
- Responsive promo player supporting embedded Google Drive videos and YouTube streams with smooth overlay controls.

### 5. SEO & Modern UI Infrastructure
- Dynamic OpenGraph preview images, Twitter cards, and semantic HTML5.
- Complete XML sitemap (`/sitemap.xml`) and search engine crawler instructions (`/robots.txt`).
- Structured JSON-LD schemas (`EducationalOrganization` / `LocalBusiness`) for rich Google search indexing.
- Dark & light mode with persistent user preference storage via `next-themes`.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16.3.4](https://nextjs.org/) (App Router, Server Components & Route Handlers) |
| **Runtime & Core** | [React 19.2.8](https://react.dev/) / React DOM 19 |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) (strict mode) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/postcss` & `tw-animate-css` |
| **Animations** | [Framer Motion 13](https://www.framer.com/motion/) |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) + [@base-ui/react](https://base-ui.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Form Handling** | [React Hook Form](https://react-hook-form.com/) + [Zod 4](https://zod.dev/) |
| **Email Delivery** | [Resend API](https://resend.com/) |
| **Theming** | [next-themes](https://github.com/pacocoursey/next-themes) (Dark/Light mode) |
| **Analytics** | [@vercel/analytics](https://vercel.com/analytics) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```
cosmovertex/
├── app/
│   ├── layout.tsx                     # Root layout, metadata, fonts, theme provider, JSON-LD
│   ├── page.tsx                       # Homepage (Hero, Stats, Services, Destinations, LeadForm)
│   ├── globals.css                    # Tailwind CSS v4 design tokens & base theme rules
│   ├── favicon.ico                    # Brand favicon
│   ├── contact/
│   │   └── page.tsx                   # Contact page, office branch details, lead form
│   ├── gallery/
│   │   └── page.tsx                   # Student success gallery, promo video, lightbox viewer
│   ├── services/
│   │   └── page.tsx                   # Comprehensive test prep & consultancy service breakdown
│   ├── destinations/
│   │   ├── australia/page.tsx         # Australia study guide, intake info, visa pathways
│   │   ├── europe/page.tsx            # Schengen / European countries guide
│   │   ├── south-korea/page.tsx       # South Korea study guide (SKY, EF SET, D-10/E-7)
│   │   ├── uk/page.tsx                # UK Russell Group & Graduate Route guide
│   │   └── usa/page.tsx               # US university admissions & STEM OPT guide
│   └── api/
│       └── contact/
│           └── route.ts               # Resend email handler with fallback logging
├── components/
│   ├── Navbar.tsx                     # Sticky responsive navigation, theme toggle, social links
│   ├── Footer.tsx                     # Detailed footer, branch addresses, sitemap links
│   ├── LeadForm.tsx                   # Interactive lead form with Zod & WhatsApp integration
│   ├── StatsBanner.tsx                # Animated achievement counter strip
│   ├── DestinationCard.tsx            # Study destination preview cards
│   ├── ServicesTabs.tsx               # Interactive test prep tabs & course descriptions
│   ├── SuccessGallery.tsx             # Filterable photo gallery with full lightbox modal
│   ├── VideoPlayer.tsx                # Embedded promo video player
│   ├── WhatsAppFloatingButton.tsx     # Persistent floating WhatsApp CTA
│   ├── RoadmapTeaser.tsx              # Future platform roadmap & tech initiatives
│   ├── theme-provider.tsx             # next-themes context provider
│   ├── theme-toggle.tsx               # Light/Dark mode switcher
│   ├── destination/
│   │   ├── DestinationSimpleLayout.tsx # Reusable layout for study destination pages
│   │   ├── DestinationHero.tsx        # Hero banner for country pages
│   │   ├── DestinationLeadForm.tsx    # Compact country-specific assessment form
│   │   ├── KeyMetricsGrid.tsx         # Key visa, cost, and intake metrics
│   │   ├── UniversityProgramsList.tsx # Partner universities & popular degrees
│   │   ├── AdmissionSteps.tsx         # Timeline & step-by-step roadmap
│   │   └── WhatsAppCTA.tsx            # Contextual destination WhatsApp CTA
│   └── ui/                            # Reusable shadcn/ui primitives (button, card, dialog, etc.)
├── lib/
│   └── utils.ts                       # Class variance authority & clsx/tailwind-merge helper
├── public/
│   ├── gallery/                       # High-resolution success certificates & meet-up photos
│   ├── cosmovertex-logo.png           # Official brand logo
│   ├── og-image.png                   # Open Graph social sharing banner
│   ├── robots.txt                     # Crawler access rules
│   └── sitemap.xml                    # Canonical search engine sitemap
├── .env.example                       # Environment variable template
├── .env.local                         # Local environment configuration (git-ignored)
├── next.config.ts                     # Next.js configuration & remote image domains
├── package.json                       # Project dependencies & scripts
├── tsconfig.json                      # TypeScript configuration
└── VERCEL_DEPLOYMENT.md               # Step-by-step deployment and DNS instructions
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.18 or higher recommended)
- `npm`, `yarn`, `pnpm`, or `bun`

### 1. Clone & Install

```bash
git clone https://github.com/pijussaha/cosmovertex.git
cd cosmovertex
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to create your local `.env.local` file:

```bash
cp .env.example .env.local
```

Populate the configuration values:

```env
# Base URL for canonical links and OpenGraph previews
NEXT_PUBLIC_SITE_URL=https://cosmovertex.edu.bd

# Email notifications via Resend (https://resend.com)
RESEND_API_KEY=re_your_api_key_here
NOTIFICATION_EMAIL=cosmovertex@gmail.com

# Direct WhatsApp contact number (international format without +)
NEXT_PUBLIC_WHATSAPP_NUMBER=8801316318387

# Promo Video URL (supports Google Drive share links or YouTube URLs)
NEXT_PUBLIC_PROMO_VIDEO_ID=https://drive.google.com/file/d/1j-dp0gIaJ-G0BvI_X8SIiaETaXfwHWih/view?usp=sharing
```

> **Note**: If `RESEND_API_KEY` is not provided, the contact form automatically logs submissions to the terminal in development mode so you can test form flows without an API key.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

---

## 📜 Available Scripts

| Script | Command | Purpose |
|---|---|---|
| `dev` | `npm run dev` | Starts local Next.js development server with Turbopack/HMR |
| `build` | `npm run build` | Compiles TypeScript and builds optimized production bundle |
| `start` | `npm run start` | Runs the production build locally |
| `lint` | `npm run lint` | Executes ESLint to check for code quality and syntax issues |

---

## 🚢 Deployment

The project is optimized for deployment on [Vercel](https://vercel.com/).

1. Connect the GitHub repository to your Vercel team account.
2. Ensure Framework Preset is detected as **Next.js**.
3. Add the required environment variables in **Project Settings → Environment Variables**:
   - `RESEND_API_KEY`
   - `NOTIFICATION_EMAIL`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_PROMO_VIDEO_ID`
4. Deploy the project. Vercel automatically creates preview and production deployments upon push.

For full custom domain setup, DNS records (`A` & `CNAME`), and Resend domain verification, refer to [`VERCEL_DEPLOYMENT.md`](./VERCEL_DEPLOYMENT.md).

---

## 📄 License & Ownership

Private repository. All rights reserved © **COSMOVERTEX**.
Unauthorized reproduction or commercial redistribution of brand assets, gallery media, or proprietary course information is strictly prohibited.
