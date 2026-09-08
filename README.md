# COSMOVERTEX — English Test Prep & Study Abroad Consultancy

Bangladesh's #1 English proficiency test preparation center and study abroad consultancy, based in Dhaka. Official website for **COSMOVERTEX** (also known as Doctor of SEL, Sky2Edu & Renaissance Edu Care).

---

## 🌍 About

COSMOVERTEX helps students in Bangladesh achieve their international education goals through:

- **Expert Test Prep** — Duolingo DET, British Council EnglishScore C1, EF SET, IELTS & PTE Academic
- **Study Abroad Guidance** — South Korea, Europe (Greece, Lithuania, Slovenia, Malta), UK, USA & Australia
- **Small Batches** — Max 5–10 students per batch for personalized attention
- **Proven Track Record** — 1,800+ successful English proficiency test results since 2020

---

## 🏫 Office Locations

| Branch | Address | Phone |
|--------|---------|-------|
| **Banani** (Sky2Edu / CosmoVertex) | House #38, Road #02, 1st Floor, Banani, Dhaka - 1213 | +880 1316-318387 |
| **Mohakhali DOHS** (Renaissance Edu Care) | House #409, Road #29, Level 5A, Mohakhali DOHS, Dhaka - 1206 | +880 1346-990025 |

📧 cosmovertex@gmail.com  
💬 [WhatsApp](https://wa.me/8801316318387)

---

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui, Radix Base UI
- **Fonts**: Inter + Poppins (Google Fonts via `next/font`)
- **Icons**: Lucide React
- **Animations**: Framer Motion
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
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📁 Project Structure

```
doctor-of-sel/
├── app/
│   ├── page.tsx              # Homepage (Hero, Services, Destinations, etc.)
│   ├── layout.tsx            # Root layout with SEO metadata & schema.org
│   ├── globals.css           # Global styles & Tailwind config
│   ├── contact/              # Contact page with lead form
│   ├── destinations/         # Study destination pages (e.g. South Korea)
│   ├── services/             # Services detail pages
│   └── api/                  # API routes (e.g. contact form handler)
├── components/
│   ├── Navbar.tsx            # Responsive navigation with dark mode toggle
│   ├── Footer.tsx            # Site footer with links & contact info
│   ├── StatsBanner.tsx       # Animated stats strip (test results, experience)
│   ├── DestinationCard.tsx   # Study destination card component
│   ├── RoadmapTeaser.tsx     # Platform roadmap & AI innovations section
│   ├── LeadForm.tsx          # Contact/inquiry form with validation
│   ├── WhatsAppFloatingButton.tsx  # Floating WhatsApp CTA button
│   ├── theme-provider.tsx    # next-themes wrapper
│   └── theme-toggle.tsx      # Light/dark mode toggle button
├── lib/                      # Utility functions
├── public/                   # Static assets (images, og-image.png, etc.)
└── VERCEL_DEPLOYMENT.md      # Deployment guide
```

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
