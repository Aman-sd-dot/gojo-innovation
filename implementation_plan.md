# Implementation Plan: GOJO Innovation Pvt. Ltd. Corporate Web Ecosystem

GOJO Innovation Pvt. Ltd. is a healthcare, nutrition, and technology corporation headquartered in Hyderabad, India. The corporate website serves as the digital flagship for the parent company and its three interconnected pillars:
1. **BIOHEED PHARMACEUTICAL** — Healthcare Division (*"Science for Better Health"*)
2. **GOJO NUTRITION** — Nutrition Division under Bioheed (*"Nutrition, Reimagined"*, featuring *GOJO – The Maharaja's Drink*)
3. **GOJOME** — Nutrition Technology & Intelligence Platform (*"Know Your Nutrition. Improve Your Life."*)

This plan details the full-stack architecture, design system, CMS abstraction, database schema, API routing, interactive components, technical SEO, and production implementation.

---

## User Review Required

> [!IMPORTANT]
> - **Brand Hierarchy**: GOJO Nutrition is strictly organized as the nutritional division under Bioheed Pharmaceutical (the Healthcare division of GOJO Innovation). GOJO – The Maharaja's Drink is the flagship product. GojoMe is the intelligent technology platform bridging products with verified data.
> - **Content & Scientific Integrity**: Strict adherence to no-invention rules: future pipeline products and R&D concepts are explicitly labeled as *"R&D / Future Portfolio"* or *"In Development"*, never misrepresented as active over-the-counter medical solutions.
> - **API-First & Headless CMS**: Built with a decoupled headless CMS interface layer (`src/lib/cms/`) that operates with rich typed mock data out of the box and seamlessly switches to Sanity / Strapi / external REST APIs via environment variables without touching UI code.

---

## Proposed Architecture & Design System

### 1. Design System Tokens & Aesthetics
- **Color Palette**:
  - **GOJO Corporate / Slate Core**: Deep Slate (`#0B0F19`), Midnight Blue (`#0F172A`), Pure Platinum (`#F8FAFC`)
  - **Bioheed Healthcare (Green/Emerald)**: Emerald Glow (`#059669`), Healing Mint (`#10B981`), Alpine Dark (`#064E3B`)
  - **Gojo Nutrition (Royal Gold & Amber)**: Maharaja Gold (`#D97706`), Warm Honey (`#F59E0B`), Royal Amber (`#78350F`), Crisp Milk Cream (`#FFFBEB`)
  - **GojoMe Technology (Electric Indigo & Violet)**: Intelligent Violet (`#7C3AED`), Neon Indigo (`#6366F1`), Deep Cyber (`#4C1D95`)
  - **Ecosystem Cyan / Science Blue**: Clean Teal (`#0EA5E9`), BioCyan (`#06B6D4`)
- **Typography**: Google Fonts `Outfit` (Headings, Display, Brand authority) + `Inter` (Body, dense data, legible microcopy)
- **Visuals**: Glassmorphic cards (`backdrop-blur-md`), subtle radial gradient glows, animated scientific connection flow lines, custom vector brand emblems.

---

## Proposed Changes

### Configuration & Base Infrastructure
#### [NEW] [package.json](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/package.json)
- Next.js 14/15 App Router, React, TypeScript, Tailwind CSS, Lucide React, Framer Motion, Prisma Client, clsx, tailwind-merge.
#### [NEW] [tsconfig.json](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/tsconfig.json)
- Strict TypeScript configuration with `@/*` path aliases.
#### [NEW] [tailwind.config.ts](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/tailwind.config.ts)
- Comprehensive color schemes for Bioheed (emerald), Nutrition (gold/amber), GojoMe (indigo/violet), and Corporate (slate/cyan).
#### [NEW] [next.config.mjs](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/next.config.mjs)
- Security headers, image optimization domains, compression.
#### [NEW] [.env.example](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/.env.example)
- Production-ready environment variables specification.

---

### Database & Backend Architecture
#### [NEW] [prisma/schema.prisma](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/prisma/schema.prisma)
- Enterprise relational models: `User`, `GojoProfile`, `Product`, `NutritionalFact`, `Pillar`, `RdProject`, `Article`, `JobOpening`, `Application`, `InvestorReport`, `ContactInquiry`, `AnalyticsEvent`.
#### [NEW] [src/lib/database/prisma.ts](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/lib/database/prisma.ts)
- Singleton Prisma client instance.
#### [NEW] [src/lib/auth/gojo-id.ts](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/lib/auth/gojo-id.ts)
- GOJO ID SSO architecture, division permission isolation, privacy consent engine.
#### [NEW] [src/lib/analytics/tracker.ts](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/lib/analytics/tracker.ts)
- Event tracking engine for QR scans, GojoMe activation, product inquiries, pageviews.
#### [NEW] [src/lib/cms/client.ts](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/lib/cms/client.ts)
- Headless CMS abstraction layer with typed fallback dataset and pluggable Sanity/REST connectors.

---

### Design System & Data Layer
#### [NEW] [src/styles/globals.css](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/styles/globals.css)
- Custom typography, scientific glassmorphism classes, flowline keyframes, accessible focus indicators, reduced motion rules.
#### [NEW] [src/types/index.ts](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/types/index.ts)
- Full TypeScript interfaces for Ecosystem, Products, Nutrition Engine, R&D, CMS, Jobs, Investor Reports.
#### [NEW] [src/data/mockData.ts](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/data/mockData.ts)
- Complete dataset for Bioheed, Gojo Nutrition (The Maharaja's Drink, Chocolate, Vanilla, Coffee), GojoMe, R&D Pipeline, Careers (9 departments), Investor Updates, Leadership.

---

### Core UI & Navigation Components
#### [NEW] [src/components/layout/Navbar.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/components/layout/Navbar.tsx)
- Sticky glassmorphic navbar with logo, mega-dropdowns for Ecosystem, Bioheed, Gojo Nutrition, GojoMe, R&D, Investors, Careers, Contact, and "Gojo Login" GOJO ID button + mobile responsive drawer.
#### [NEW] [src/components/layout/Footer.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/components/layout/Footer.tsx)
- Corporate footer: "Life. Vision. Care.", Hyderabad HQ address, contact details (+91 92344 94098, info@gojoinnovation.com), sitemap navigation, newsletter subscription with live validation, social links.

---

### Homepage Component Sections
#### [NEW] [src/components/hero/Hero.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/components/hero/Hero.tsx)
- Premium hero matching reference specification: "Building a Smarter Future of Healthcare, Nutrition & Technology", dynamic 3-pillar badges (Healthier Life, Clearer Vision, Stronger Care), 3D product showcase card, GojoMe mobile intelligence UI card, and "Scan & Unlock GojoMe" QR card.
#### [NEW] [src/components/ecosystem/EcosystemOverview.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/components/ecosystem/EcosystemOverview.tsx)
- "One Vision. Three Connected Pillars." (Bioheed Healthcare, Gojo Nutrition, GojoMe Technology cards with direct pillar routes).
#### [NEW] [src/components/ecosystem/GojoConnectionFlow.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/components/ecosystem/GojoConnectionFlow.tsx)
- "From What You Consume to What You Understand" interactive flow: `PRODUCT → DATA → INTELLIGENCE → BETTER CHOICES`.
#### [NEW] [src/components/product/ProductShowcase.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/components/product/ProductShowcase.tsx)
- "GOJO – The Maharaja's Drink" ("Royal Taste. Everyday Nutrition."), 200 ml can showcase, flavour selector (Chocolate, Vanilla, Coffee), Protein & Calcium nutrition facts, heritage story.
#### [NEW] [src/components/gojome/GojoMeSection.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/components/gojome/GojoMeSection.tsx)
- "Meet GojoMe — Your Nutrition Intelligence", 6 feature cards: Track, Analyse, AI Insights, Set Goals, Understand, Improve + interactive verified nutrition simulator.
#### [NEW] [src/components/gateway/PhysicalToDigitalGateway.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/components/gateway/PhysicalToDigitalGateway.tsx)
- Physical-to-digital animated workflow: `BUY GOJO → SCAN → ACCESS GOJOME → TRACK → AI INSIGHTS → BETTER CHOICES` with QR code showcase.
#### [NEW] [src/components/rd/RdSection.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/components/rd/RdSection.tsx)
- "Innovation Doesn't Stop at the First Product": Healthcare, Nutrition, Functional Foods, Technology-enabled wellness, "RESEARCH. INNOVATE. IMPROVE."
#### [NEW] [src/components/vision/VisionPhilosophy.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/components/vision/VisionPhilosophy.tsx)
- "A Healthier Future Begins With Better Choices" + "Better Nutrition. Smarter Technology. Better Care." manifesto.
#### [NEW] [src/components/why/WhyGojo.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/components/why/WhyGojo.tsx)
- 4 pillar cards: Nutrition, Science, Technology, Care with clean icons.
#### [NEW] [src/components/future/OurFuture.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/components/future/OurFuture.tsx)
- "We Are Building More Than Products": Healthcare + Nutritional innovation + Intelligent digital experiences.
#### [NEW] [src/components/careers/CareersPreview.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/components/careers/CareersPreview.tsx)
- "Build the Future With Us" across 9 departments + CTA.

---

### Internal Pages & Routes
#### [NEW] [src/app/page.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/app/page.tsx)
- Complete Homepage assembling all 16 sections.
#### [NEW] [src/app/about/page.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/app/about/page.tsx)
- About Us: Company philosophy, Life. Vision. Care., leadership principles, corporate governance.
#### [NEW] [src/app/ecosystem/page.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/app/ecosystem/page.tsx)
- Full Ecosystem deep-dive: Synergies between Bioheed, Gojo Nutrition, and GojoMe.
#### [NEW] [src/app/bioheed/page.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/app/bioheed/page.tsx)
- Bioheed Pharmaceutical: Healthcare Division, "Science for Better Health", pipeline matrix (Current, In Development, Future), Clinical Governance.
#### [NEW] [src/app/gojo-nutrition/page.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/app/gojo-nutrition/page.tsx)
- Gojo Nutrition: The Maharaja's Drink 200ml, Flavours, Nutritional values, Future R&D pipeline (Protein Nutrition, Functional Beverages, Supplements, Fortified Nutrition).
#### [NEW] [src/app/gojome/page.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/app/gojome/page.tsx)
- GojoMe: Complete platform walkthrough, verified calculation engine, AI interpretation flow, live interactive food intelligence demo.
#### [NEW] [src/app/rd-innovation/page.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/app/rd-innovation/page.tsx)
- R&D & Innovation: Formulation labs, biotechnology, clinical research standards.
#### [NEW] [src/app/investors/page.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/app/investors/page.tsx)
- Investor Relations: Corporate governance, quarterly reports, announcements, financial highlights, investor contact.
#### [NEW] [src/app/careers/page.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/app/careers/page.tsx)
- Careers: Filterable job board across 9 departments (R&D, Nutrition, Technology, Data & AI, Product, Marketing, Sales, Operations, Finance) + application modal.
#### [NEW] [src/app/contact/page.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/app/contact/page.tsx)
- Contact Us: Multi-department routing (Corporate, Bioheed, Nutrition, GojoMe, Investors, Careers), Hyderabad office information, interactive contact form.
#### [NEW] [src/app/blog/page.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/app/blog/page.tsx)
- CMS-powered insights, scientific articles, and press announcements.
#### [NEW] [src/app/products/page.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/app/products/page.tsx)
- Comprehensive catalog of current and upcoming R&D products.
#### [NEW] [src/app/shop/page.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/app/shop/page.tsx)
- Retailer network, store locator & VIP access waitlist.
#### [NEW] [src/app/login/page.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/app/login/page.tsx)
- GOJO ID Single Sign-On portal with permission boundaries and ecosystem login.
#### [NEW] [src/app/privacy-policy/page.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/app/privacy-policy/page.tsx) & [src/app/terms/page.tsx](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/app/terms/page.tsx)
- Enterprise privacy policies and terms of service.

---

### SEO, Security & API Routes
#### [NEW] [src/app/sitemap.ts](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/app/sitemap.ts) & [src/app/robots.ts](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/app/robots.ts)
- Dynamic XML sitemap and crawler instructions for all routes.
#### [NEW] [src/lib/seo/jsonld.ts](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/lib/seo/jsonld.ts)
- Structured Data (Schema.org) for Organization, MedicalOrganization, Product, SoftwareApplication, and JobPosting.
#### [NEW] [src/app/api/contact/route.ts](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/app/api/contact/route.ts)
- Validated API endpoint for contact submissions.
#### [NEW] [src/app/api/nutrition-calc/route.ts](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/app/api/nutrition-calc/route.ts)
- Verified nutrition computation engine endpoint.
#### [NEW] [src/app/api/careers/route.ts](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/app/api/careers/route.ts)
- Job application submission endpoint.
#### [NEW] [src/app/api/analytics/track/route.ts](file:///c:/Users/Dell/Desktop/Gojo%20Innovation/src/app/api/analytics/track/route.ts)
- Privacy-compliant event ingestion endpoint.

---

## Verification Plan

### Automated Build & Code Quality
- Verify all TypeScript interfaces, component props, and imports match exactly without missing references.
- Verify standard Next.js directory structure, layout nesting, and metadata exports for all 14+ routes.

### Visual & Interactive Manual Verification
- Test all navigation links across desktop mega-menus and mobile hamburger navigation.
- Verify interactive flavor switcher on GOJO - The Maharaja's Drink.
- Verify the interactive GojoMe nutrition simulator (calculating verified macro metrics and personalized AI insights).
- Verify interactive careers filtering across the 9 departments.
- Verify the multi-department contact form with client-side validation and submission states.
- Verify the GOJO ID login/registration portal with privacy permission boundary toggles.
- Verify responsive layout across mobile, tablet, laptop, and desktop viewports.
