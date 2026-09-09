# COSMOVERTEX — English Test Prep & Study Abroad Consultancy

Bangladesh's premier English proficiency test preparation center and study abroad consultancy, based in Dhaka. Official website for **COSMOVERTEX** (also known as Doctor of SEL, Sky2Edu & Renaissance Edu Care).

---

## 🌍 About

COSMOVERTEX helps students in Bangladesh achieve their international education goals through:

- **Expert Test Prep** — Duolingo DET, British Council EnglishScore C1, EF SET, IELTS & PTE Academic
- **Study Abroad Guidance** — South Korea, Europe (Greece, Lithuania, Slovenia, Malta), UK, USA & Australia
- **Small Batches** — Max 5–10 students per batch for personalized attention
- **Proven Track Record** — 1,800+ successful English proficiency test results since 2020
- **Direct University Partnerships** — 45+ partner institutions worldwide

---

## 🏫 Office Locations

| Branch | Address | Phone |
|--------|---------|-------|
| **Banani** (Sky2Edu / CosmoVertex) | House #38, Road #02, 1st Floor, Banani, Dhaka - 1213 | +880 1316-318387 |
| **Mohakhali DOHS** (Renaissance Edu Care) | House #409, Road #29, Level 5A, Mohakhali DOHS, Dhaka - 1206 | +880 1346-990025 |

📧 cosmovertex@gmail.com  
💬 [WhatsApp](https://wa.me/8801316318387)  
📘 [Facebook Page](https://www.facebook.com/share/1cDbjrn6XP/)

---

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui, Radix Base UI
- **Fonts**: Inter + Poppins (Google Fonts via `next/font`)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend API
- **Analytics**: Vercel Analytics
- **Theme**: next-themes (light/dark mode)
- **Deployment**: Vercel

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm / bun

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SITE_URL=https://cosmovertex.edu.bd
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_PROMO_VIDEO_ID=https://drive.google.com/file/d/1j-dp0gIaJ-G0BvI_X8SIiaETaXfwHWih/view?usp=sharing
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📁 Project Structure

```
cosmovertex/
├── app/
│   ├── page.tsx              # Homepage (Hero, Services, Destinations, etc.)
│   ├── layout.tsx            # Root layout with SEO metadata & schema.org
│   ├── globals.css           # Global styles, design tokens & Tailwind config
│   ├── contact/              # Contact page with lead form & quick links
│   ├── gallery/              # Student success gallery with video & photo grid
│   ├── destinations/         # Study destination pages (South Korea, Europe, etc.)
│   ├── services/             # Services detail pages
│   └── api/                  # API routes (contact form handler)
├── components/
│   ├── Navbar.tsx            # Responsive navigation with dark mode & social links
│   ├── Footer.tsx            # Site footer with links, contact info & Facebook
│   ├── StatsBanner.tsx       # Animated stats strip (test results, experience)
│   ├── DestinationCard.tsx   # Study destination card component
│   ├── RoadmapTeaser.tsx     # Platform roadmap & AI innovations section
│   ├── LeadForm.tsx          # Contact/inquiry form with validation
│   ├── SuccessGallery.tsx    # Filterable success photo gallery with lightbox
│   ├── VideoPlayer.tsx       # Promo video player (YouTube / Google Drive)
│   ├── WhatsAppFloatingButton.tsx  # Floating WhatsApp CTA button
│   ├── theme-provider.tsx    # next-themes wrapper
│   └── theme-toggle.tsx      # Light/dark mode toggle button
├── lib/                      # Utility functions (cn, etc.)
├── public/
│   ├── gallery/              # Student success photos & certificates
│   ├── cosmovertex-logo.png  # Brand logo
│   ├── og-image.png          # Open Graph social preview image
│   ├── robots.txt            # Search engine crawl rules
│   └── sitemap.xml           # XML sitemap for SEO
└── VERCEL_DEPLOYMENT.md      # Deployment guide
```

---

## 🗺 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage — Hero, stats, services, destinations, lead form |
| `/contact` | Contact page — lead form, office map, quick contact links |
| `/gallery` | Success gallery — promo video + filterable photo grid |
| `/services` | Services overview — test prep & study abroad packages |
| `/destinations/south-korea` | South Korea study guide |
| `/destinations/europe` | Europe / Schengen study guide |
| `/destinations/australia` | Australia study guide |
| `/destinations/uk` | United Kingdom study guide |
| `/destinations/usa` | United States study guide |

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

---

## 🚢 Deployment

The site is deployed on **Vercel**. See [`VERCEL_DEPLOYMENT.md`](./VERCEL_DEPLOYMENT.md) for the full deployment guide including environment variable setup and custom domain configuration.

---

## 📄 License

Private repository. All rights reserved © COSMOVERTEX.
