# SQA Full-Site Audit Checklist

Use this checklist during an SQA audit to systematically test and grade every aspect of the web application.

---

## 1. Functional & Business Logic
- [ ] **Form Submissions**:
  - [ ] Valid data submitted successfully.
  - [ ] Required fields enforce validation with visible inline errors.
  - [ ] Invalid email strings rejected.
  - [ ] Domestic phone numbers (`01...`) normalized to international standard (`8801...`).
  - [ ] Special characters and long strings (e.g. 500+ chars) handled safely.
  - [ ] Double-click prevention (submit button disables and shows loading state during request).
  - [ ] Success state displays clear confirmation and primary next-step action.
  - [ ] Error state presents graceful user-friendly error message without technical stack trace.
- [ ] **API Endpoints & Third-Party Integrations**:
  - [ ] Webhook payloads accurately formatted.
  - [ ] Timeouts configured with fallbacks (no hanging requests).
  - [ ] Safe credential handling (mock mode in development when keys are missing).
  - [ ] WhatsApp direct links encoded with proper URL parameters (`wa.me/880...`).
- [ ] **Routing & Navigation**:
  - [ ] All internal links lead to active 200 OK routes (no 404s).
  - [ ] Active route indicator correctly highlights the current page.
  - [ ] Custom 404 Not Found page exists and includes a link back to Home.

---

## 2. Responsive UI & Touch Ergonomics
- [ ] **Viewport Breakpoints**:
  - [ ] 375×667 (Small phone / iPhone SE): No horizontal overflow or cut-off text.
  - [ ] 390×844 (Standard phone / iPhone 14): Touch targets well-spaced.
  - [ ] 768×1024 (Tablet portrait): Grid layouts transition cleanly (2-column instead of 1 or 4).
  - [ ] 1440×900+ (Desktop): Margins constrained within maximum container width (`max-w-7xl`).
- [ ] **Touch Targets**:
  - [ ] All interactive buttons, cards, and links have minimum 44×44px touch area.
  - [ ] Spacing between interactive elements is at least 8px to prevent accidental misclicks.
- [ ] **Mobile Drawer & Menus**:
  - [ ] Hamburger button clearly indicates state (hamburger icon vs close 'X').
  - [ ] Mobile menu scrolls independently if content exceeds screen height.
  - [ ] Menu items include bottom safe area padding for iOS home indicator bar (`env(safe-area-inset-bottom)`).
  - [ ] Menu closes automatically upon clicking a navigation link or pressing `Escape`.
- [ ] **Z-Index Layering**:
  - [ ] Modals and lightboxes (`z-[100]`) overlay all sticky and floating elements.
  - [ ] Sticky headers (`z-50`) stay above page body content.
  - [ ] Floating action buttons (`z-40`) never overlap open modals or expanded drawers.

---

## 3. Web Performance & Core Web Vitals
- [ ] **Build & Bundle Size**:
  - [ ] Production build succeeds with 0 errors (`npm run build`).
  - [ ] Route chunks stay within recommended budgets.
- [ ] **Image Optimization**:
  - [ ] Next.js `<Image>` component used instead of raw `<img>` tags.
  - [ ] Above-the-fold hero images have `priority` set.
  - [ ] Explicit `width`, `height`, or `fill` with `sizes` specified to eliminate Layout Shift (CLS).
  - [ ] Next-gen formats (WebP/AVIF) served.
- [ ] **Fonts & CSS**:
  - [ ] Fonts preloaded or loaded via `next/font`.
  - [ ] CSS animations use GPU-accelerated properties (`transform`, `opacity`).
- [ ] **Dynamic Imports**:
  - [ ] Heavy client-side widgets loaded conditionally or deferred when off-screen.

---

## 4. Accessibility (WCAG 2.1 AA)
- [ ] **Screen Reader Semantics**:
  - [ ] Semantic landmark structure: `<header>`, `<nav>`, `<main>`, `<footer>`.
  - [ ] Headings form a logical hierarchy (`<h1>` followed by `<h2>`, `<h3>` without skipping levels).
  - [ ] Interactive radio grids have `role="radiogroup"` and `role="radio"` with `aria-checked`.
  - [ ] Dropdowns and accordions use `aria-expanded` and `aria-controls`.
  - [ ] Modals have `role="dialog"`, `aria-modal="true"`, and focus trapped inside.
- [ ] **Keyboard Navigability**:
  - [ ] All interactive elements reachable via `Tab`.
  - [ ] High-visibility focus indicators present (`focus-visible:ring-2`).
  - [ ] `Escape` key dismisses open menus, dropdowns, and modals.
- [ ] **Color & Contrast**:
  - [ ] Body text contrast against background is at least 4.5:1.
  - [ ] Icons and active borders contrast at least 3:1.
  - [ ] Contrast maintained across both Light and Dark color schemes.

---

## 5. Security & Technical SEO
- [ ] **Link Safety**:
  - [ ] All external outbound links specify `rel="noopener noreferrer"`.
- [ ] **Metadata**:
  - [ ] Unique, descriptive `<title>` per page.
  - [ ] Compelling meta description (150–160 chars) per page.
  - [ ] OpenGraph (`og:title`, `og:description`, `og:image`) configured.
- [ ] **Input & Script Safety**:
  - [ ] No unescaped user inputs rendered directly to DOM.
