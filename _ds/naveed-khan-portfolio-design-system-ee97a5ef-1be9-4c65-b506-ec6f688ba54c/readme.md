# Naveed Khan Portfolio — Design System

A dark, editorial design system extracted from the **Naveed Khan Portfolio Site** —
the personal site of a senior product designer with 12+ years across SaaS, fintech,
cloud hosting, and AI products. The system is near-monochrome (ink-black surfaces,
white-to-gray type) with a display-serif/grotesk pairing and a single reserved
accent palette for product/state UI.

## Sources

- **Figma** — *"Naveed Portfolio Site.fig"*, page `Website-UI` (frames: `Desktop Wide – 1920px`
  homepage + `Naveed Case Study`, plus `Group 1000000833` browser screens). Style-guide
  components and variables live on the `Style-Guide-Components` page.
- **Design tokens** — `uploads/Design System.zip` → `Mode 1.tokens.json` (Figma Variables export).
  This is the authoritative source for color, spacing, radius, and typography tokens
  (mirrored into `tokens/*.css`). Raw export preserved at `tokens-raw.json`.

> The reader is not assumed to have access to these; details are stored for provenance.

---

## CONTENT FUNDAMENTALS

The copy is **first-person, plain-spoken, and outcome-driven** — a designer talking
about their own work without buzzwords.

- **Voice:** First person ("I learned design by building", "I’m looking for the next
  product I’ll help shape"). Direct address only in CTAs ("If that sounds like what
  you’re building, let’s talk.").
- **Tone:** Confident but unembellished. Short declaratives. Case-study titles read like
  honest statements, not slogans — *"I joined as their only designer. Nobody asked for a
  redesign."*, *"The product worked. The experience didn’t."*
- **Casing:** Sentence case for headlines and body. **UPPERCASE** reserved for eyebrows
  and section/credential labels (`SELECTED WORK`, `MY STORY`, `EXPERIENCE`, company names
  in the timeline). No title case.
- **Numbers as proof:** Hard metrics do the bragging — `$350M`, `$1M+`, `0 → 1`, `12+`,
  `120% revenue growth`, `50k users`. Always specific, always attributed (`Acquisition
  (Cloudways)`, `Processed (Year 1)`).
- **Punctuation:** Mid-dots `·` separate credential fragments; `+` joins marquee items;
  `→` for transformation (`0 → 1`). Curly quotes and apostrophes.
- **No emoji. No exclamation-heavy hype.** The restraint is the brand.

**Examples**
- Eyebrow → Heading: `SENIOR PRODUCT DESIGNER` → **Naveed Khan**
- Project blurb: *"Led end-to-end product design from concept to launch for a payments
  platform processing $1M+ in year one."*
- Marquee: `Cloudways · SaaS · $350M Acquisition · 50k Users  +  12 Years · Self-Taught …`

---

## VISUAL FOUNDATIONS

- **Mood:** Premium, restrained, cinematic dark. The page is essentially black; light is
  rationed (white type, one solid-white button, a faint textured hero).
- **Color:** Near-monochrome. Surfaces step `#0A0A0A → #111111 → #262626`. Text steps
  `#FFFFFF → #A3A3A3 → #999999`. Borders are `#262626` (hairline) / `#3A3A3A` (strong).
  Four semantic hues (`#4ADE80 #FACC15 #F87171 #60A5FA`) exist **only** for product
  surfaces, badges, and status — never decoration.
- **Type:** **Syne** (grotesk display, 700/800, tight to very-tight tracking) for the hero
  and all section H1s; **Geist** for body, UI, buttons, and stat figures; **Domine** (serif)
  for the single long-form *About* headline; **Archivo** for uppercase eyebrows/labels;
  **Inter** for embedded product/dashboard chrome. Big jumps in scale (80px H1 over 14px
  eyebrow) create the editorial rhythm.
- **Layout:** A 1280px content column inside a 1920px frame (320px gutters). Sections use
  **160px** vertical padding. Generous whitespace; one idea per band.
- **Backgrounds:** The hero uses a flowing abstract **photo texture blended at
  `luminosity`** (so it reads as grayscale) under a radial vignette — not a gradient wash.
  Everywhere else is flat ink-black. Cards use a subtle top-lit gradient (`#111 → #0A0A0A`).
- **Cards:** 16px radius, signature gradient fill, a single `#262626` hairline (inset box-shadow).
  Depth comes from borders, not drop-shadows; shadows stay subtle and are used mainly on
  floating screenshots inside image wells.
- **Borders & radii:** Restrained — `8px` on buttons/inputs/chips, `16px` on cards and image
  wells, pills for badges/marquee chips. Hairlines (1px) divide timeline rows and stripes.
- **Buttons:** Primary = **solid white fill, ink text**, trailing line-arrow. Secondary =
  transparent with a `#3A3A3A` inset outline. Both 8px radius; large (16px) and small (14px).
- **Iconography:** Sparse, thin-stroke line icons (Lucide-style, ~1.8–2.25px) — trailing
  arrows on buttons (`→`, `↗`) and footer socials. See ICONOGRAPHY below.
- **Motion:** Quiet. Color/opacity transitions on hover (`~220ms`, standard easing); the
  marquee scrolls linearly and pauses on hover. No bounces, no parallax, respects
  `prefers-reduced-motion`.
- **Hover states:** Links brighten gray→white; secondary/ghost actions gain a faint
  `#262626` fill; buttons keep fill, shift opacity slightly. **Press:** subtle, no scale gimmicks.
- **Transparency/blur:** Used only for the hero vignette and tinted state-badge fills
  (12% alpha over dark). No frosted glass elsewhere.
- **Imagery vibe:** Product screenshots are bright, clean light-mode dashboards that pop
  against the black — high contrast is the point. The lone abstract texture is cool-blue +
  warm-copper, desaturated by the luminosity blend.

---

## ICONOGRAPHY

- **System:** Thin-stroke **line icons** in the Lucide visual language (round caps/joins,
  ~1.8–2.25px stroke, 24px grid). The brand uses very few icons — this is a typographic
  system, not an icon-heavy one.
- **Where they appear:** trailing **arrows** on buttons (`arrow-right`, `arrow-up-right` for
  external/resume), and **footer social** glyphs (GitHub, LinkedIn, X, Mail). Both are built
  into components (`Button`, `Footer`) so usage stays consistent.
- **Format:** Inline SVG with `stroke: currentColor` so icons inherit text color and hover
  transitions. No icon font, no PNG icons, **no emoji**, no unicode-as-icon (except the
  typographic `→`/`·`/`+` used as text).
- **Substitution note:** The Figma source uses a small set of arrow/utility vectors; we
  reproduce the arrows directly and match the rest with **Lucide** shapes. For projects that
  need a broader set, link Lucide from CDN (`https://unpkg.com/lucide-static`) — it matches
  the stroke weight and corner style. Flag any heavier icon needs to the brand owner.
- **Brand mark:** the **NK wordmark** (`assets/logo-nk.svg` / `<Logo>`) — a geometric
  N+K ligature filled with the white→gray brand gradient. Available `mono` for single-color.

---

## INDEX — what's in this system

**Foundations**
- `styles.css` — global entry point (import list only; consumers link this one file).
- `tokens/` — `fonts.css` (Google Fonts), `colors.css`, `typography.css`, `spacing.css`,
  `radius.css`, `effects.css`, `base.css`.
- `guidelines/*.card.html` — foundation specimen cards (Colors, Type, Spacing, Brand).

**Components** (`window.NaveedKhanPortfolioDesignSystem_…`)
- `components/brand/Logo` — NK wordmark.
- `components/buttons/Button` — primary / secondary / ghost, sm / lg, trailing arrow.
- `components/core/Eyebrow` — uppercase section label.
- `components/core/Badge` — status/tag pill (5 tones).
- `components/core/Card` — surface container (gradient / solid / outline).
- `components/core/Stat` — value + label metric pair.
- `components/portfolio/NavBar` — top navigation.
- `components/portfolio/Footer` — closing bar with socials.
- `components/portfolio/MarqueeStripe` — scrolling credential band.
- `components/portfolio/ExperienceRow` — About timeline row.
- `components/portfolio/ProjectCard` — signature Work case-study card.

**UI Kits**
- `ui_kits/portfolio/` — full single-page homepage recreation (hero → work → about →
  metrics → CTA → footer), factored into `Hero/WorkSection/AboutSection/MetricsSection/
  FinalCTA` screens. See its `README.md`.

**Assets** (`assets/`)
- `logo-nk.svg` — the NK wordmark (gradient).
- `hero-texture.jpg` — the luminosity-blended hero backdrop (optimized from the 7MB source PNG).

**Other**
- `SKILL.md` — Agent-Skills entry point for using this system in Claude Code.
- `tokens-raw.json` — raw Figma Variables export (provenance).
