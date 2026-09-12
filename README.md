# Origin.Co — Creator Community & Brand Collaboration Agency

> **"Not Just A Community. It's Our Origin."**

Premium dark-themed marketing website for **Origin.Co**, a Mumbai-based creator community and brand-creator collaboration agency founded by Piyush Mahadik.

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:3000

# Production build
npm run build
npm start
```

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14** (App Router) | Framework |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling + design tokens |
| **Framer Motion** | Page/section animations |
| **React Three Fiber** | 3D torus hero element |
| **@react-three/drei** | R3F helpers (Torus geometry) |
| **GSAP + ScrollTrigger** | Scroll-driven process sequence |
| **Lenis** | Smooth inertial scroll |

---

## 📁 Project Structure

```
origin.co/
├── public/
│   ├── images/
│   │   ├── events/         # Event photos (bedazzle.jpg, night-ride.jpg, etc.)
│   │   └── founder.jpg     # Founder portrait
│   └── textures/
│       └── grain.svg       # Noise texture overlay
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout (Lenis, fonts, metadata)
│   │   ├── page.tsx        # Home page — assembles all sections
│   │   └── globals.css     # Global styles + design system
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Sticky shrinking nav with blur
│   │   │   └── Footer.tsx          # Footer + newsletter + social
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx     # 3D torus + headline + CTAs
│   │   │   ├── DualPositioning.tsx # Creator / Brand tab toggle
│   │   │   ├── ProcessSection.tsx  # GSAP pinned 5-step sequence
│   │   │   ├── EventsSection.tsx   # Horizontal scroll event gallery
│   │   │   ├── BrandCollabs.tsx    # Infinite marquee + case studies
│   │   │   ├── StatsBar.tsx        # Animated number counters
│   │   │   ├── FounderSection.tsx  # Parallax founder portrait + bio
│   │   │   └── JoinCTA.tsx         # Glowing dual CTA section
│   │   ├── ui/
│   │   │   ├── GlassCard.tsx       # Glassmorphism card primitive
│   │   │   ├── CursorGlow.tsx      # Mouse-reactive radial glow
│   │   │   ├── CustomCursor.tsx    # Custom dot + ring cursor
│   │   │   ├── AnimatedCounter.tsx # Scroll-triggered count-up
│   │   │   ├── Marquee.tsx         # CSS infinite marquee
│   │   │   ├── ScrollIndicator.tsx # Animated scroll nudge
│   │   │   └── ErrorBoundary.tsx   # React error boundary
│   │   ├── three/
│   │   │   ├── TorusScene.tsx      # R3F 3D torus with GLSL shader
│   │   │   └── MobileFallback.tsx  # SVG fallback for mobile
│   │   └── providers/
│   │       └── LenisProvider.tsx   # Smooth scroll context
│   ├── hooks/
│   │   ├── useLenis.ts             # Lenis smooth scroll hook
│   │   ├── useCountUp.ts           # Count-up animation hook
│   │   └── useMousePosition.ts     # Mouse tracker hook
│   └── lib/
│       ├── constants.ts            # All brand data
│       └── fonts.ts                # next/font config
├── tailwind.config.ts              # Design tokens + custom palette
└── next.config.js                  # Transpile packages + image config
```

---

## 🎨 Design System

### Colors
| Token | Hex | Use |
|---|---|---|
| `black` | `#0A0A0A` | Background |
| `offwhite` | `#F5F5F5` | Primary text |
| `violet-600` | `#7C3AED` | Gradient start |
| `purple-500` | `#A855F7` | Gradient end / accents |

### Typography
- **Display**: Impact / Arial Narrow stack (bold, condensed headlines)
- **Body**: Inter (clean grotesk)

### Effects
- **Grain overlay** — 3.5% opacity SVG fractal noise across the entire site
- **Glassmorphism** — `backdrop-blur-16px`, `bg-white/4`, `border-purple-500/18`
- **Custom cursor** — Dot + trailing ring, `mix-blend-mode: difference`
- **3D torus** — Custom GLSL shader (half-white, half-violet gradient) with CSS `drop-shadow` glow

---

## 📍 Sections

1. **Hero** — Full-viewport 3D torus, staggered headline, stat pills, dual CTAs
2. **Dual Positioning** — Creator/Brand tab toggle with animated crossfade
3. **Stats Bar** — 4 animated counters (followers, events, creators, brands)
4. **Process** — GSAP-pinned 5-node sequence: Brand → Origin → Creator → Content → Results
5. **Events** — Horizontal scroll gallery of past IRL events
6. **Brand Collaborations** — Infinite marquee + 2 case study cards
7. **Founder** — Parallax portrait of Piyush Mahadik + bio + quote
8. **Join CTA** — Animated gradient mesh + WhatsApp deeplinks
9. **Footer** — Newsletter, social links, nav, copyright

---

## ⚙️ Customization

All brand data lives in [`src/lib/constants.ts`](./src/lib/constants.ts):

```ts
// Update before going live:
export const WHATSAPP_LINK = 'https://wa.me/YOUR_NUMBER?text=...'
export const INSTAGRAM_LINK = 'https://instagram.com/YOUR_HANDLE'
export const LINKEDIN_LINK = 'https://linkedin.com/company/YOUR_SLUG'

export const STATS = [
  { value: 50000, suffix: '+', label: 'Creator Followers' },
  // ...
]
```

### Replacing Images
| Image | Path |
|---|---|
| Founder photo | `public/images/founder.jpg` |
| Bedazzle event | `public/images/events/bedazzle.jpg` |
| Night ride event | `public/images/events/night-ride.jpg` |
| Padel event | `public/images/events/padel.jpg` |
| Creator mixer | `public/images/events/mixer.jpg` |
| Brand sprint | `public/images/events/sprint.jpg` |

---

## 📱 Responsive Behavior

- **Mobile (< 768px)** — 3D torus replaced by lightweight animated SVG
- **Tablet (768–1024px)** — Single-column hero, stacked sections
- **Desktop (> 1024px)** — Full 2-column hero, horizontal layouts

---

## 🌐 Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel (recommended)
npx vercel --prod

# Or use Firebase Hosting
npx firebase deploy --only hosting
```

---

## 👤 About Origin.Co

**Origin.Co** is a Mumbai-based creator community and brand-creator collaboration agency founded by **Piyush Mahadik** in 2023. Origin connects brands with vetted content creators and runs exclusive IRL events — workshops, padel tournaments, night cycling rides, and more.

> *Build. Connect. Grow.*

---

*Built with purpose in Mumbai. © 2024 Origin.Co*
