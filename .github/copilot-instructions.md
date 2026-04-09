# ECWebsite – Copilot Instructions

## Project Overview

**EC Construction** — a contractor/remodeling portfolio and lead-capture website for a Southeastern Kentucky-based business. Built with React 19 + TypeScript + Vite. No backend — form submissions and integrations use n8n workflow webhooks.

**Brand Positioning:** Rugged blue-collar credibility meets premium high-end presentation. The site should feel trustworthy, polished, and easy to use. Tagline: **"Measure Twice. Build Once."**

**Key Goals:** Establish trust immediately, drive lead conversion, showcase portfolio, offer two clear lead paths (quick callback vs. detailed intake form).

## Build, Test & Lint

```bash
npm run dev       # Start dev server at http://localhost:5173
npm run build     # Type-check via tsc -b, then production build via vite build
npm run lint      # Run ESLint on all .ts/.tsx files
npm run preview   # Preview production build locally at http://localhost:4173

# Tests (Playwright)
npx playwright test                    # Run all tests in headless mode
npx playwright test tests/example.spec.ts  # Run specific test file
npx playwright test --ui               # Run tests in interactive UI mode
npx playwright test --headed           # Run tests in headed browser mode
```

**Note:** Build runs `tsc -b` first (type-check), then vite build. ESLint has strict rules enabled for TypeScript (noUnusedLocals, noUnusedParameters, no fallthrough cases).

## Architecture

- **`src/`** — all application code
- **`src/main.tsx`** — entry point, mounts `<App />`
- **`src/App.tsx`** — root component and top-level routing/layout
- **`public/`** — static assets served at `/`
- No backend. Form submissions and any dynamic actions POST to **n8n webhook URLs** (store these in `.env` as `VITE_N8N_*` variables so they're never hardcoded).

## TypeScript Configuration

- **Target:** ES2023
- **Strict checks enabled:** `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`, `erasableSyntaxOnly`
- **JSX:** React 17+ new transform (`react-jsx`)
- **Module resolution:** bundler mode with `allowImportingTsExtensions`
- All components and utilities must be fully typed; avoid `any`. TypeScript will catch unused code at compile time.

## Conventions

- **Component files** — one component per file, named with PascalCase matching the filename (e.g. `HeroSection.tsx`).
  - Example structure:
    ```
    src/components/HeroSection/
      ├── HeroSection.tsx
      ├── HeroSection.css
      └── (optional) hooks or sub-components
    ```
- **Env vars** — all n8n webhook URLs and any external endpoints live in `.env.local` prefixed with `VITE_` and accessed via `import.meta.env.VITE_*`. Never hardcode webhook URLs.
  - Example `.env.local`:
    ```
    VITE_N8N_CONTACT_WEBHOOK=https://n8n.example.com/webhook/contact
    VITE_N8N_QUICK_LEAD_WEBHOOK=https://n8n.example.com/webhook/quick-lead
    ```
- **Styling** — plain CSS files co-located with components (e.g. `HeroSection.css` next to `HeroSection.tsx`). Keep styles scoped to component purpose; avoid global overrides unless necessary.
- **Form handling** — forms POST JSON to n8n webhooks. No server-side validation exists; validate on the client before sending. Handle both success and error states visibly in the UI.
- **Images** — contractor photos and portfolio images go in `public/images/`; import hero/above-the-fold images via `src/assets/` for bundler optimization (Vite tree-shaking).

## n8n Integration Pattern

```ts
const res = await fetch(import.meta.env.VITE_N8N_CONTACT_WEBHOOK, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});

if (res.ok) {
  // Success state — show confirmation to user
  setSubmissionSuccess(true);
} else {
  // Error state — show error message
  setSubmissionError(true);
}
```

Handle both success and error states visibly in the UI — n8n webhooks do not return structured error responses by default.

## Testing (Playwright)

- Tests are located in `tests/` directory
- Uses Playwright for browser automation and E2E testing
- Configuration in `playwright.config.ts` — reporter set to HTML
- Runs against chromium, firefox, and webkit by default
- Key patterns:
  ```ts
  import { test, expect } from '@playwright/test';
  
  test('test name', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await expect(page.getByRole('heading')).toContainText('Expected text');
  });
  ```
- When adding tests: update `playwright.config.ts` `webServer` to auto-start dev server if needed
- For local testing during development, run `npx playwright test --headed --ui` to see browser interactions in real-time

## MCP Servers

**Playwright MCP** is available for this project. Configure it to:
- Generate E2E tests for new components and flows
- Debug browser interactions and page assertions
- Analyze failing tests and suggest fixes

The MCP will use the Playwright config in `playwright.config.ts` and the `tests/` directory.

## Brand & Design

**Color Palette:**
- **Black:** `#111111` (60% — dominant)
- **Gold:** `#C79A3B` (30% — accents & highlights)
- **Muted Maroon:** `#4A2E33` (10% — subtle accents)
- **Off-White / Light Background:** `#F5F3EF`
- **Slate Gray Accent:** `#5E6368`

**Typography:**
- Bold, sturdy heading font with premium feel
- Clean sans-serif body font
- Minimal decorative styling
- Strong readability, modern aesthetic

**Visual Feeling:** Modern contractor brand — clean spacing, minimal clutter, bold but tasteful CTAs. Feel like someone who knows construction, respects the client's home, and communicates professionally. Avoid noisy template designs, giant text blocks, or overly animated startup aesthetics.

**Images:**
- Strong natural light or clean dramatic lighting
- Real construction work: framing, remodeling, roofing, decks, interior work
- Avoid: cheesy handshake photos, overly staged office imagery
- Use stock construction photos for now; structure should allow easy swap to real project photos later

## Site Structure

**Pages:**
1. **Home** — Hero, services preview, Why Choose Us, gallery, testimonials, CTA banner, footer
2. **Services** — Service overview with individual service blocks for each offered service
3. **Contact / Request Quote** — Contact info, phone/email placeholders, access to both form flows

**Services Offered:**
Framing, Remodeling, Decks, Roofing, Drywall, Flooring, General Contracting, Handyman Work

## Content Voice & Guidelines

**Should sound:**
- Confident, clear, honest, local, professional
- Like someone who does serious work and shows up on time

**Avoid:**
- Buzzword-heavy corporate language
- Overly aggressive "sales" tone
- Cheap-sounding contractor clichés
- Excessive exclamation points

**Example copy direction:**
> "EC Construction delivers dependable craftsmanship, straightforward communication, and a clean, professional customer experience from first call to final walkthrough."

**Key messaging:**
- Quality-focused without being flashy
- Professional without sounding corporate
- Friendly without being casual or sloppy
- Reliable workmanship, clear communication, attention to detail, respect for property, local service

## Lead Paths & Forms

**Two separate lead experiences are required:**

### Path A: Quick Request a Call / Quote (Low-Friction)
**Fields:**
- Name
- Phone
- Optional: Job Type
- Optional: Short Note

**Webhook:** `VITE_N8N_QUICK_LEAD_WEBHOOK`

**UX Goal:** Fast submission for users who don't want to fill out a long form. Button copy: "Request a Call", "Quick Quote Request", or "Have Us Reach Out"

### Path B: Full Intake Form (Better Lead Detail)
**Fields:**
- Name
- Phone
- Email
- Address or City
- Service Needed
- Project Details
- Preferred Contact Method
- Preferred Timeframe

**Webhook:** `VITE_N8N_FULL_INTAKE_WEBHOOK`

**UX Goal:** Feels easy, not overwhelming. Use good spacing, clear labels, clean submit state.

**Implementation Notes:**
- Both forms POST JSON to n8n webhook URLs
- Client-side validation only (validate before sending)
- Handle success and error states visibly in UI
- n8n webhooks don't return structured error responses by default
- Keep submission logic modular and reusable

