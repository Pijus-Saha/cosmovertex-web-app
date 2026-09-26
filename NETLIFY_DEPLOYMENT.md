# Netlify Deployment Guide — COSMOVERTEX

This guide covers everything required to deploy the **COSMOVERTEX** Next.js App Router website to [Netlify](https://www.netlify.com/).

---

## 🚀 Quick Summary

The project is pre-configured for Netlify with:
- `netlify.toml` — configured for `@netlify/plugin-nextjs` runtime v5, build commands, edge security headers (HSTS, CSP, X-Frame-Options, COOP/CORP), and static asset caching.
- `.node-version` — pinned to Node `20`.
- Dynamic API routes (`/api/contact`) — hardened with Netlify edge IP extraction (`x-nf-client-connection-ip`), cross-origin verification, honeypot bot trap, and rate limiting.
- Static pages and assets — served directly from Netlify's high-speed Global CDN with TLS 1.3 encryption.

---

## 📋 Pre-Deployment Checklist

- [x] `@netlify/plugin-nextjs` added to `devDependencies`
- [x] `netlify.toml` present in root with hardened CSP, HSTS, and security headers
- [x] `.node-version` set to `20`
- [x] `.gitignore` updated to ignore `.env*` and `.netlify`
- [x] `npm run build` compiles with 0 errors
- [x] Static routes prerendered (`/`, `/services`, `/destinations/*`, `/gallery`, `/contact`)
- [x] Dynamic API route `/api/contact` validated with Netlify edge client IP and origin verification
- [x] `public/robots.txt` and `public/sitemap.xml` updated to `https://cosmovertex.com`

---

## Method 1: Git-Integrated Continuous Deployment (Recommended)

### Step 1: Push Project to GitHub

If you haven't pushed the latest changes to your GitHub repository yet:

```bash
git add .
git commit -m "chore: configure project for Netlify deployment"
git push origin main
```

### Step 2: Import into Netlify

1. Log in to [Netlify](https://app.netlify.com/).
2. Click **"Add new site"** → **"Import an existing project"**.
3. Choose **GitHub** (or your Git provider) and select the `cosmovertex` repository.
4. Netlify will auto-detect the configuration from `netlify.toml`:
   - **Base directory:** *(leave empty or `/`)*
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Plugin:** `@netlify/plugin-nextjs` (detected automatically)
5. Click **"Deploy cosmovertex"**.

---

## Method 2: Deploy Using Netlify CLI

If you prefer to deploy directly from your local terminal:

```bash
# 1. Install Netlify CLI globally (if not already installed)
npm install -g netlify-cli

# 2. Authenticate with Netlify
netlify login

# 3. Initialize & Link site
netlify init

# 4. Deploy directly to production
netlify deploy --build --prod
```

---

## 🔑 Environment Variables Setup

Configure these in the Netlify Dashboard:
**Site configuration → Environment variables → Add a variable**

| Variable Name | Description | Example / Required |
|---|---|---|
| `NODE_VERSION` | Node.js version | `20` *(also handled by `.node-version`)* |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL | `https://cosmovertex.com` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Office WhatsApp number | `8801316318387` |
| `RESEND_API_KEY` | Resend API key for lead emails | `re_xxxxxxxxxxxxxxxx` |
| `NOTIFICATION_EMAIL` | Admin inbox for lead submissions | `info@cosmovertex.com` |
| `GOOGLE_SHEET_WEBHOOK_URL` | Google Apps Script Web App URL | `https://script.google.com/macros/s/.../exec` |
| `NEXT_PUBLIC_PROMO_VIDEO_ID` | YouTube video ID for homepage player | *(Optional)* |

> 💡 **Fallback Mode**: If `RESEND_API_KEY` is not provided, the `/api/contact` route automatically enters **mock mode** so submissions continue to function smoothly without throwing server errors.

---

## 🔒 Production Security Best Practices on Netlify

1. **Environment Variable Scope Protection**:
   - In Netlify Dashboard, set sensitive server variables (`RESEND_API_KEY`, `GOOGLE_SHEET_WEBHOOK_URL`, `NOTIFICATION_EMAIL`) with **Scope: Production only** (or exclude Deploy Previews) so untrusted pull requests cannot expose or log production keys.
   - Never prefix server-only secrets with `NEXT_PUBLIC_`.
2. **Strict HTTPS & TLS 1.3**:
   - Under **Site configuration → Domain management → SSL/TLS certificate**, ensure **"Force HTTPS"** is enabled.
   - Netlify serves traffic over modern TLS 1.2 / TLS 1.3 by default.
3. **HTTP Security Headers**:
   - `netlify.toml` automatically injects **HSTS** (`max-age=31536000; includeSubDomains; preload`), **Content-Security-Policy (CSP)**, **X-Frame-Options: SAMEORIGIN**, and **nosniff** at the CDN edge.
4. **Serverless API Protection (`/api/contact`)**:
   - **Real IP Verification**: Uses Netlify's trusted `x-nf-client-connection-ip` edge header to track client rate limits accurately without spoofing.
   - **Cross-Origin Lockdown**: Rejects incoming POST requests whose `Origin` header does not match your official domain, Netlify subdomains, or localhost.
   - **Honeypot Shield**: Silently traps automated spam bots before invoking external services.
5. **Branch & Deploy Protection**:
   - Restrict production deploys solely to the protected `main` branch.
   - Require pull request reviews and status checks on GitHub prior to merging.

## 🌐 Custom Domain & SSL Setup

1. In Netlify Dashboard, navigate to **Site configuration → Domain management**.
2. Click **Add a domain** and enter `cosmovertex.com` (or your domain).
3. Choose one of the two DNS options:
   - **Netlify DNS (Recommended)**: Point your registrar's nameservers to Netlify's assigned DNS servers.
   - **External DNS**:
     - Apex domain (`cosmovertex.com`): Add an `A` record pointing to Netlify's load balancer IP `75.2.60.5`.
     - Subdomain (`www.cosmovertex.com`): Add a `CNAME` record pointing to your Netlify site name (`your-site.netlify.app`).
4. **SSL/TLS**: Netlify automatically issues and renews a free Let's Encrypt SSL certificate once DNS resolves.

---

## 🧪 Post-Deployment Verification

1. **Verify Homepage**: Browse to your Netlify URL and verify smooth rendering and interactive elements.
2. **Test Lead Form**: Fill out and submit the counseling inquiry form on `/contact` or the homepage modal. Check your Netlify function logs under **Logs → Functions → ___netlify-odb-handler** or **api/contact** to see submission outputs.
3. **Verify WhatsApp Floating Button**: Ensure clicking the WhatsApp floating button opens `https://wa.me/8801316318387`.
4. **Check Mobile Navigation**: Open developer tools at 375px viewport to verify drawer menu and responsive grid.

---

## 🛠 Troubleshooting

- **Node.js Version Warning**: If Netlify defaults to Node 18, verify that `.node-version` is present in the repository root or set `NODE_VERSION=20` under Site Environment Variables.
- **Cache Invalidation**: If updating environment variables or runtime settings, go to **Deploys** → **Trigger deploy** → **Clear cache and deploy site**.
