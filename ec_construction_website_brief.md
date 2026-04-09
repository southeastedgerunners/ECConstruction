# EC Construction Website Build Brief

## Project Overview
Build a modern, clean, minimalist website for **EC Construction** that balances two moods:
- **Rugged blue-collar credibility**
- **Premium high-end presentation**

The site should feel trustworthy, polished, and easy to use. It should help visitors quickly understand the company’s services and choose one of two lead paths:
1. **Full intake form**
2. **Quick request a call / quote**

This is a **React + Vite + TypeScript** frontend project. The forms should be built so they can later submit to **n8n webhook URLs**, but webhook wiring can remain configurable placeholders for now.

---

## Business Details
- **Business Name:** EC Construction
- **Service Area:** Southeastern Kentucky
- **Tone:** Friendly and professional
- **Positioning:** Rugged blue-collar meets premium high-end
- **Tagline:** **Measure Twice. Build Once.**

---

## Brand Direction
The visual style should feel modern and minimal, not cluttered. Avoid overdesigned contractor-site clichés.

### Primary Brand Goals
- Strong first impression
- Simple navigation
- Clean layouts with bold typography
- Easy to contact
- Construction imagery used tastefully
- Mobile-first responsiveness

### Color Palette
Use a restrained, balanced palette.

- **Black:** `#111111`
- **Gold:** `#C79A3B`
- **Muted Maroon:** `#4A2E33`
- **Off-White / Light Background:** `#F5F3EF`
- **Slate Gray Accent:** `#5E6368`

### Color Usage Guidance
- **60% black / dark neutrals**
- **30% gold accents and highlights**
- **10% muted maroon accent use**

The maroon should be subtle, matte, and low-saturation. It should support the palette, not dominate it.

### Typography Direction
Use clean, modern fonts with strong readability.

Suggested style:
- Bold, sturdy heading font with a premium feel
- Clean sans-serif body font
- Minimal decorative styling

The site should feel like a contractor who does serious work and shows up on time.

---

## Tech Stack
- **Frontend:** React
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Agent may choose CSS Modules, SCSS, or a utility-first approach, but the final result must remain clean, maintainable, and consistent

---

## Site Structure
Phase 1 should include:

### Main Page
- Home page with all key sections

### Additional Pages
- Services page
- Contact / Request Quote page

The Home page should do most of the selling. Side pages should support clarity and conversion.

---

## Core Pages and Sections

## 1. Home Page
### Hero Section
Purpose: establish trust immediately and drive conversion.

Must include:
- Business name: **EC Construction**
- Tagline: **Measure Twice. Build Once.**
- Short headline and subheadline
- Primary CTA: **Request a Quote**
- Secondary CTA: **Request a Call**
- Strong background image using construction stock photography

Suggested hero copy direction:
- Professional construction services in Southeastern Kentucky
- Reliable workmanship, clean finishes, and straightforward communication

Example draft copy:
> **Built with precision. Backed by experience.**
>
> EC Construction provides dependable construction and remodeling services across Southeastern Kentucky, combining honest craftsmanship with a polished, professional experience.

### Services Preview Section
Feature the main services in cards or a clean grid.

Services to include:
- Framing
- Remodeling
- Decks
- Roofing
- Drywall
- Flooring
- General Contracting
- Handyman Work

Each service card should include:
- Service title
- Short one- or two-sentence description
- Optional icon or minimal visual accent

### Why Choose Us Section
This section should reinforce the rugged-meets-premium positioning.

Suggested themes:
- Reliable workmanship
- Clear communication
- Attention to detail
- Respect for your property
- Local service in Southeastern Kentucky

Example content direction:
- Quality-focused without feeling flashy
- Professional without sounding corporate
- Friendly without sounding casual or sloppy

### Gallery Section
Use stock construction images for now.

Requirements:
- Clean masonry or grid layout
- Space for future real project photos
- Captions optional but subtle

### Testimonials Section
Use tasteful placeholder testimonials for now.
Keep them believable and not overhyped.

Example placeholder testimonial tone:
> “EC Construction was easy to work with, communicated clearly, and the finished work looked great. We’d gladly call again for future projects.”

Provide 2 to 3 placeholders.

### CTA Banner Section
A high-contrast call-to-action block near the bottom of the page.

Suggested messaging:
- Ready to start your project?
- Need a quote or want a quick callback?

Include buttons for both lead paths.

### Footer
Include placeholders for:
- Phone
- Email
- Service area
- Navigation links
- Copyright

---

## 2. Services Page
Purpose: give each service a little more room and improve SEO / clarity.

Requirements:
- Intro section with headline and short paragraph
- Individual service blocks for each offered service
- CTA at bottom linking to quote/request forms

Keep copy crisp and practical.

Example service description style:
> **Remodeling**
> From updates to full-room transformations, EC Construction delivers remodeling work with an eye for durability, clean execution, and long-term value.

---

## 3. Contact / Request Quote Page
Purpose: central page for contact info and form-based conversion.

Should include:
- Friendly intro text
- Phone placeholder
- Email placeholder
- Buttons linking to the two form flows
- Optional small FAQ or expectation-setting text

Example expectation-setting text:
> Tell us a little about your project and we’ll follow up as soon as possible.

---

## Lead Paths
Two separate lead experiences are required.

## A. Quick Request a Call / Quote
This should be short and low-friction.

### Fields
- Name
- Phone
- Optional Job Type
- Optional Short Note

### UX Goal
Fast submission for users who do not want to fill out a long form.

### Button Copy Ideas
- Request a Call
- Quick Quote Request
- Have Us Reach Out

## B. Full Intake Form
This should collect better lead detail.

### Fields
- Name
- Phone
- Email
- Address or City
- Service Needed
- Project Details
- Preferred Contact Method
- Preferred Timeframe

### UX Goal
Make it feel easy, not overwhelming. Use good spacing, clear labels, and a clean submit state.

---

## Form Behavior
Forms should be built in React and designed to later connect to n8n.

### Implementation Notes
- Keep submission logic modular
- Use configurable placeholder webhook URLs
- Structure data cleanly for future integration
- Include validation and success/error states
- Do not hardcode private production endpoints

### Suggested Architecture
- Separate page or modal for each form path
- Shared reusable form components where practical
- Configuration file or environment variable placeholder for future n8n webhook URLs

Example placeholder variables:
- `VITE_N8N_QUICK_LEAD_WEBHOOK`
- `VITE_N8N_FULL_INTAKE_WEBHOOK`

For now, forms can submit to mock handlers or placeholder endpoints.

---

## Content Voice Guidelines
Copy should sound:
- Confident
- Clear
- Honest
- Local
- Professional

Avoid:
- Buzzword-heavy corporate language
- Overly aggressive “sales” tone
- Cheap-sounding contractor clichés
- Excessive exclamation points

The brand voice should feel like someone who knows construction, respects the client’s home, and communicates like a pro.

---

## Image Direction
Use current stock construction photos as placeholders.

### Image Style Guidance
- Framing, remodeling, jobsite, roofing, deck-building, or interior work
- Strong natural light or clean dramatic lighting
- Avoid cheesy handshake imagery
- Avoid overly staged office photos
- Prefer real tools, lumber, structure, and jobsite environments

Agent should leave image content easy to swap later.

---

## UI / UX Guidance
- Clean spacing
- Strong section separation
- Minimal clutter
- Bold but tasteful CTAs
- Mobile-first responsiveness
- Sticky or easy-to-find navigation
- Fast-loading feel

### Desired Feel
Think:
- modern contractor brand
- premium local service company
- simple but sharp

Not:
- noisy template website
- giant blocks of text
- overly animated startup aesthetic

---

## Suggested Navigation
- Home
- Services
- Request Quote
- Request Call
- Contact

If navigation needs simplification, the agent may merge Request Quote / Request Call under Contact, but both flows must remain easy to find.

---

## Suggested Placeholder Copy Blocks
These can be refined, but give the agent enough to build immediately.

### Hero Headline Option
**Built with precision for Southeastern Kentucky.**

### Hero Subheadline Option
EC Construction delivers dependable craftsmanship, straightforward communication, and a clean, professional customer experience from first call to final walkthrough.

### Why Choose Us Copy Option
We believe quality work starts with clear expectations, honest communication, and attention to detail. Whether it’s a repair, upgrade, or larger project, EC Construction approaches every job with professionalism and pride.

### CTA Copy Option
Ready to talk through your project? Request a quote or ask for a callback and we’ll make it easy to get started.

---

## Deliverables Expected from the Agent
The agent should build:
- A React + Vite + TypeScript frontend
- A polished home page
- A services page
- A contact / quote page
- Two separate form experiences
- Placeholder content and image placement
- Responsive layout
- Clean branding implementation using the approved palette and tagline

---

## Acceptance Criteria
The project is successful when:
- The site looks modern, clean, and minimalist
- The black / gold / muted maroon palette is used tastefully
- The tagline **Measure Twice. Build Once.** is visible in a strong brand position
- The two lead paths are obvious and easy to use
- The forms are structured for future n8n integration
- The site feels both blue-collar credible and premium professional
- The pages are responsive and easy to navigate
- Placeholder content is polished enough for demo use

---

## Future Enhancements
These do not need to be in phase 1, but the structure should allow them later.

- Real project gallery
- Customer testimonials from actual jobs
- Logo and mascot integration
- Direct n8n webhook submission
- SMS-first lead capture flows
- Service-area detail pages
- FAQ section
- About page

---

## Final Build Reminder
This website is not supposed to feel flashy for the sake of flash. It should feel like a serious construction business with modern presentation, clear calls to action, and a conversion-focused frontend that can later plug into automation.

