---
name: sqa-site-audit
description: >-
  Comprehensive Software Quality Assurance (SQA) agent skill for full-site auditing.
  Use this skill whenever requested to perform SQA testing, audit a web application,
  discover UI/UX bugs, identify performance bottlenecks and layout shifts across
  desktop and mobile viewports, verify accessibility (WCAG 2.1 AA), and generate a
  structured SQA Audit Report paired with a multi-phase upgrade implementation plan.
---

# SQA Site Audit & Multi-Phase Upgrade Skill

This skill guides the agent in conducting an exhaustive Software Quality Assurance (SQA) audit across any web application (desktop & mobile viewports), discovering bugs, assessing performance and accessibility, and outputting an actionable, prioritized **SQA Audit Report** and **Multi-Phase Upgrade Implementation Plan**.

---

## 1. When to Use This Skill

Activate this skill when:
- The user requests an **SQA Audit**, "audit the full site", or "find bugs and performance issues".
- Preparing a site for production deployment or major release.
- Investigating mobile vs desktop discrepancies, broken interactive flows, or accessibility defects.
- Generating a structured, phased upgrade roadmap based on empirical audit findings.

---

## 2. Five Pillars of SQA Audit

Every audit must systematically evaluate the application across these five pillars:

```
                  ┌─────────────────────────────────────┐
                  │          SQA AUDIT ENGINE           │
                  └──────────────────┬──────────────────┘
                                     │
         ┌──────────────┬────────────┼────────────┬──────────────┐
         ▼              ▼            ▼            ▼              ▼
   1. Functional   2. UI/UX &   3. Web Perf   4. WCAG AA    5. Technical
      & Logic      Viewports      & Assets       A11y         SEO & Sec
```

### Pillar 1: Functional & Business Logic Integrity
- **Form Submissions**: Valid submissions, empty field attempts, invalid emails, domestic vs international phone formats, edge-case characters.
- **Async & Network State**: API response handling, loading spinners, network error fallbacks, mock mode vs live API keys, external sync (e.g., Google Sheets, CRM, Resend).
- **Navigation & Routing**: Broken links, 404 page handling, active route highlights, back-forward navigation cache.
- **Interactive Controls**: Modals, accordions, dropdowns, carousels, tabs, theme switches (light/dark mode persistence).

### Pillar 2: UI & UX Responsive Ergonomics (Multi-Viewport)
- **Viewport Testing Grid**:
  - **Mobile Compact**: 360×640 (entry Android), 375×667 (iPhone SE)
  - **Mobile Standard**: 390×844 (iPhone 12–15), 412×915 (Pixel/Galaxy)
  - **Tablet**: 768×1024 (iPad Portrait), 1024×768 (iPad Landscape)
  - **Desktop / Laptop**: 1280×800, 1440×900, 1920×1080
- **Horizontal Scrolling & Overflow**: Check for accidental horizontal overflow (`overflow-x` bugs, elements wider than viewport).
- **Touch Targets**: Minimum 44×44px interactive tap area for all buttons, links, and form inputs (WCAG 2.5.5).
- **Device Safe Areas**: Bottom navigation, fixed buttons, or floating bars must respect `env(safe-area-inset-bottom)`.
- **Z-Index Layering**: Verify proper hierarchy:
  - Base Content: `z-0` to `z-10`
  - Floating CTAs (WhatsApp, Chat): `z-40`
  - Sticky Headers & Mobile Drawers: `z-50`
  - Full-Screen Modals & Lightboxes: `z-[100]`

### Pillar 3: Web Performance & Asset Optimization
- **Build Diagnostics**: Run `npm run build` to inspect compilation warnings, route generation times, and bundle chunk sizes.
- **Image Strategy**: Verify usage of `next/image`, proper `sizes` attributes, WebP/AVIF formats, and `priority` flags for Above-the-Fold / LCP images.
- **Layout Stability (CLS)**: Check for layout shifts caused by un-dimensioned images, dynamic web fonts, or late-rendering banners.
- **Font & Asset Optimization**: Check for font subsetting, local vs Google Fonts caching, and unused CSS.

### Pillar 4: Accessibility (WCAG 2.1 AA) & Keyboard Ergonomics
- **Screen Reader Semantics**: Correct usage of semantic tags (`<header>`, `<main>`, `<nav>`, `<footer>`, `<aside>`, `<section>`).
- **ARIA Roles & States**:
  - Radio groups: `role="radiogroup"`, `role="radio"`, `aria-checked`.
  - Accordions & Drawers: `aria-expanded`, `aria-controls`.
  - Modals: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`.
- **Keyboard Navigation**:
  - Visible focus indicators (`focus-visible:ring-2`).
  - Logical `tabIndex` order.
  - `Escape` key dismisses open menus, dropdowns, and modals.
- **Color Contrast**: Verify contrast ratio ≥ 4.5:1 for standard text and ≥ 3:1 for large text and UI borders across both light and dark modes.

### Pillar 5: Technical SEO & Security Guardrails
- **Metadata**: Single `<h1>` per page, descriptive `<title>`, meta descriptions, canonical URLs, OpenGraph tags.
- **Link Security**: All external links (`target="_blank"`) must have `rel="noopener noreferrer"`.
- **Input Sanitization**: No raw unsanitized HTML rendering (`dangerouslySetInnerHTML`) with user input.

---

## 3. Standard Audit Execution Procedure

Follow this 4-step sequence whenever conducting an SQA audit:

### Step 1: Automated Static Code & Build Inspection
1. Run `npm run build` or `npm test` to detect compile-time errors or TypeScript type mismatches.
2. Run automated sanity scripts (e.g., [run-sqa-audit.js](./scripts/run-sqa-audit.js)).
3. Inspect critical components, forms, and layout wrappers for anti-patterns.

### Step 2: Multi-Viewport Browser Subagent Inspection
1. Launch a browser subagent to visit the local development server (`http://localhost:3000`).
2. Test Desktop Viewport (`1440x900`):
   - Check navigation menus, dropdowns, hero CTA, form submission, and footer links.
3. Test Mobile Viewport (`390x844`):
   - Open mobile drawer hamburger menu.
   - Verify accordions, sticky headers, touch scrollbars, and floating widgets.
   - Fill out and submit forms to test validation alerts and success states.
4. Capture screenshots of key screens and issues.

### Step 3: Compile SQA Audit Matrix
Organize discovered defects by Severity:
- **P0 (Critical / Blocker)**: Crash, broken submission, data loss, security exposure.
- **P1 (High)**: Major UI breakage, blocked touch target, broken core navigation, mobile viewport overflow.
- **P2 (Medium)**: Accessibility violation, dark mode contrast flaw, missing loading indicator, unoptimized LCP image.
- **P3 (Low / Polish)**: Typo, minor misalignment, missing hover transition, redundant CSS utility.

### Step 4: Formulate Multi-Phase Upgrade Implementation Plan
Structure upgrades into sequential phases so the user can review and deploy incrementally:
- **Phase 1: Critical Fixes & Data Flow Hotfixes** (Forms, API routes, blocking errors)
- **Phase 2: Mobile Viewport & Touch Ergonomics** (Safe areas, overflows, touch targets)
- **Phase 3: Accessibility (WCAG 2.1 AA) & Keyboard Flow** (ARIA, focus rings, dialog traps)
- **Phase 4: Web Performance & Core Web Vitals** (Images, LCP/CLS, script deferral)
- **Phase 5: Automated Verification & Regression Guardrails** (Smoke tests, end-to-end checks)

---

## 4. Standard Deliverables Format

Output your SQA results in two clear, presentation-grade documents:

### Deliverable A: SQA Audit Report
Include:
1. **Executive Scorecard**: Table summarizing scores (A+ to F) for each of the 5 pillars.
2. **Defect Matrix**:
   | ID | Severity | Area / File | Description | Reproduction | Expected Behavior |
   |---|---|---|---|---|---|
   | BUG-01 | P1 | `Navbar.tsx` | Mobile drawer button missing ARIA | Inspect hamburger | Screen readers announce state |
3. **Visual Proof / Screenshots**: Embed captured screenshots showing before/after or defect points.

### Deliverable B: Phased Upgrade Plan
For each phase, specify:
- Goal and rationale.
- Target files to modify.
- Concrete implementation steps.
- Verification criteria.

---

## 5. Supporting Resources

- [Comprehensive SQA Audit Checklist](./references/audit_checklist.md): Step-by-step checklist across viewports, forms, and media.
- [Automated SQA Script](./scripts/run-sqa-audit.js): Node.js script to run static and route-level sanity checks.
