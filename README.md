# Accredian Enterprise — Landing Page Clone

> **Full-Stack Developer Intern Assignment** | Built with Next.js 16, TypeScript, Tailwind CSS

A high-fidelity responsive clone of [enterprise.accredian.com](https://enterprise.accredian.com/), featuring all major landing page sections, a functional lead capture modal with API integration, and full mobile responsiveness.

---

## 🚀 Live Demo

> Deploy to Vercel (see [Deployment](#deployment) section below)

---

## 📋 Features

### Landing Page Sections
| Section | Description |
|---|---|
| **Navbar** | Sticky, responsive, with mobile overlay menu & active section highlight |
| **Hero** | Brand headline, feature checkpoints, hero image, & CTA |
| **Stats** | Animated metric cards (10K+ trained, 200+ sessions, 5K+ learners) |
| **Clients** | Partner logos — desktop grid / mobile scrolling marquee |
| **Accredian Edge** | USP visual — responsive desktop & mobile SVG diagrams |
| **CAT Framework** | Core methodology diagram with decorative BG gradient |
| **How It Works** | 3-step delivery card layout with icons and connector lines |
| **Testimonials** | Carousel slider from major corporate partners (Reliance, Bayer, ADP) |
| **FAQs** | Tabbed sidebar + animated accordion (3 topic groups) |
| **Support CTA** | Contact banner triggering enquiry modal |
| **Footer** | Dark mobile / light desktop footer with social links, contact info |

### Functional Requirements
- ✅ **Fully responsive** — mobile-first design using Tailwind CSS
- ✅ **Reusable components** — all sections are standalone `.tsx` components
- ✅ **Smooth navigation** — `scroll-smooth` + active section highlighting in Navbar
- ✅ **Lead Capture Form** — validated with `react-hook-form`, connected to API route
- ✅ **API Integration** — `/api/enquiry` POST handler stores leads locally + forwards to a Google App Script webhook (same endpoint as the reference site)
- ✅ **SEO-ready** — meta title, description, keywords in `layout.tsx`

---

## 🛠 Tech Stack

| Technology | Usage |
|---|---|
| **Next.js 16** (App Router) | Core framework, file-based routing |
| **TypeScript** | Full type safety across all components |
| **Tailwind CSS** | Styling — custom brand colors, gradients, animations |
| **react-hook-form** | Lead capture form validation |
| **lucide-react** | UI icons |
| **Next.js API Routes** | Serverless `/api/enquiry` handler |

---

## 🗂 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── enquiry/
│   │       └── route.ts     # Lead capture API route
│   ├── globals.css          # Brand tokens, animations, custom utilities
│   ├── layout.tsx           # Root layout with SEO metadata
│   └── page.tsx             # Main landing page (orchestrates all sections)
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── Clients.tsx
    ├── AccredianEdge.tsx    # Includes both 'Accredian Edge' + 'CAT Framework'
    ├── HowItWorks.tsx
    ├── Testimonials.tsx
    ├── FAQs.tsx
    ├── SupportCTA.tsx
    ├── EnquiryModal.tsx
    └── Footer.tsx
```

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone <your-github-repo-url>
cd accredian

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Deployment

### Deploy to Vercel (Recommended)

```bash
npx vercel
```

Or connect your GitHub repo on [vercel.com](https://vercel.com) for automatic deployments.

> No environment variables required. The API route uses `/tmp` for local mock storage and forwards to the reference Google App Script endpoint automatically.

---

## 🤖 AI Usage Disclosure

This project was developed **with AI assistance** (Antigravity — Google DeepMind's agentic assistant):

| Area | AI Contribution | Manual Modification |
|---|---|---|
| **Architecture planning** | Generated the component breakdown & file structure | Refined section order and naming |
| **Component scaffolding** | Initial JSX structure for all sections | Adjusted padding, typography scale, colors to match the reference more closely |
| **Tailwind utility classes** | Suggested responsive class combinations | Manually tuned grid breakpoints and mobile layouts |
| **API route** | Generated the handler skeleton + Google App Script forwarding | Added local JSON mock storage, field mapping, and error handling |
| **Form validation** | react-hook-form field rules | Refined error message display and UX flow |
| **Bug fixes** | Identified lucide-react icon version incompatibility | Replaced with custom inline SVGs |

All code was **reviewed, tested, and refined manually** to ensure correctness, quality, and alignment with the reference design.

---

## 📄 License

This project is built for educational/assignment purposes as a clone of the Accredian Enterprise website.
