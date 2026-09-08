# Vercel Deployment Guide — COSMOVERTEX

## ✅ Pre-Deployment Checklist

- [x] `npm run build` — 0 TypeScript errors, 0 ESLint errors
- [x] All routes static prerendered (`/`, `/services`, `/destinations/south-korea`, `/contact`)
- [x] API route `/api/contact` is dynamic (server-rendered on demand)
- [x] OG image (`/public/og-image.png`) in place
- [x] `robots.txt` and `sitemap.xml` in `/public`
- [x] JSON-LD LocalBusiness schema in `app/layout.tsx`

---

## Step 1 — Push to GitHub

```bash
# In e:\DOS\doctor-of-sel
cd e:\DOS\doctor-of-sel

# Initialize or push to your GitHub repo
git init                          # already initialized by create-next-app
git add .
git commit -m "feat: initial COSMOVERTEX website"

# Create a new repo on https://github.com/new (name: cosmovertex)
git remote add origin https://github.com/YOUR_USERNAME/cosmovertex.git
git branch -M main
git push -u origin main
```

---

## Step 2 — Import to Vercel

1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Select the `doctor-of-sel` repository
4. Framework Preset: **Next.js** (auto-detected)
5. Root Directory: leave as `/` (the project root)
6. Click **Deploy** — Vercel will run `npm run build` automatically

---

## Step 3 — Environment Variables

In the Vercel project dashboard → **Settings → Environment Variables**, add:

| Variable Name | Value | Environment |
|---|---|---|
| `RESEND_API_KEY` | `re_xxxxxxxxxxxxxxxx` (from https://resend.com) | Production, Preview |
| `RESEND_FROM_EMAIL` | `noreply@cosmovertex.edu.bd` | Production, Preview |
| `NEXT_PUBLIC_SITE_URL` | `https://cosmovertex.edu.bd` | Production |

> ⚠️ **Important**: The `RESEND_FROM_EMAIL` domain must be verified in your Resend account. Without `RESEND_API_KEY`, the contact form falls back to mock mode (logs to console only).

---

## Step 4 — Custom Domain

1. Vercel Dashboard → your project → **Settings → Domains**
2. Add your domain: `cosmovertex.edu.bd` (or your preferred domain)
3. Follow the DNS instructions to add a CNAME/A record at your registrar
4. SSL is auto-provisioned by Vercel (Let's Encrypt)
5. **Update `NEXT_PUBLIC_SITE_URL`** to your live domain after pointing DNS

---

## Step 5 — Update Sitemap URL

After setting your domain, update `/public/sitemap.xml` to replace `https://cosmovertex.edu.bd` with your actual domain:

```xml
<!-- Replace all instances of doctorsel.com with your domain -->
<loc>https://yourdomain.com/</loc>
```

Also update `/public/robots.txt`:
```
Sitemap: https://yourdomain.com/sitemap.xml
```

---

## Step 6 — Resend Email Setup

1. Create account at [https://resend.com](https://resend.com)
2. Add & verify your sending domain (e.g., `cosmovertex.edu.bd`) under **Domains**
3. Create an API key under **API Keys**
4. Set `RESEND_API_KEY` in Vercel environment variables
5. Set `RESEND_FROM_EMAIL` to `noreply@cosmovertex.edu.bd` (or your verified domain email)
6. Leads will now email to `cosmovertex@gmail.com` with a WhatsApp reply button

---

## Post-Launch Checklist

- [ ] Test contact form submission (check inbox at `cosmovertex@gmail.com`)
- [ ] Verify WhatsApp floating button opens `https://wa.me/8801316318387`
- [ ] Check mobile layout at 375px width
- [ ] Submit sitemap to Google Search Console: `https://yourdomain.com/sitemap.xml`
- [ ] Verify OG image preview at [https://www.opengraph.xyz](https://www.opengraph.xyz)
- [ ] Add Vercel Analytics integration (already included, no config needed)

---

## Local Development

```bash
cd e:\DOS\doctor-of-sel
npm run dev      # http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint check
```

---

## Project Structure Summary

```
e:\DOS\doctor-of-sel\
├── app/
│   ├── layout.tsx              # Root layout — SEO, fonts, JSON-LD
│   ├── page.tsx                # Homepage (Hero, Stats, Services, Destinations, News, Offices)
│   ├── globals.css             # Brand theme — navy, emerald, amber palette
│   ├── services/page.tsx       # Tabbed test prep services
│   ├── destinations/
│   │   └── south-korea/page.tsx # South Korea guide + university table + form
│   ├── contact/page.tsx        # Lead form + office cards
│   └── api/contact/route.ts    # Resend email API (mock fallback)
├── components/
│   ├── Navbar.tsx              # Sticky glassmorphism nav
│   ├── Footer.tsx              # 4-col footer
│   ├── WhatsAppFloatingButton.tsx # Pulse floating button
│   ├── StatsBanner.tsx         # Count-up animated stats
│   ├── DestinationCard.tsx     # Hover glow destination card
│   └── LeadForm.tsx            # Zod-validated contact form
└── public/
    ├── og-image.png            # OpenGraph social preview image
    ├── robots.txt
    └── sitemap.xml
```
