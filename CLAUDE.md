# holen-wir-die-lommel

Website for **dieLommel.de** — Stefanie Lommel's "Wandelbegleitung" brand: change-accompaniment for owners/CEOs of family businesses ("Traditionshäuser") navigating succession or transformation crises. Tagline: "Holt mal die Lommel." Tone: precise and calm, no consulting-jargon, no coaching-speak.

Stefanie directs content/design, Claude Code handles implementation — she describes herself as not technical. Explain changes in plain language rather than assuming she'll read a diff.

## Stack
Next.js 16.2.3 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS v4, Framer Motion, React Three Fiber/drei + Spline (3D), gray-matter + remark (markdown blog).

@AGENTS.md

## Structure
- `src/app/` — routes: `/`, `/blog`, `/blog/[slug]`, `/impressum`, `/datenschutz`, `/agb`
- `src/components/sections/` — homepage sections (Hero, Identification, ProblemSticky, Solution, Process, Pricing, FAQ, AboutStory, CTA, Footer, Navbar…)
- `src/components/blog/` — article layout, cards, scroll-reveal
- `src/components/ui/` — shared primitives + 3D (`GoldenRock3D`, `SplineScene`)
- `content/blog/*.md` — blog posts (frontmatter + markdown, read via `src/lib/blog.ts`)
- `src/lib/schema.ts` — JSON-LD for SEO
- `DESIGNGUIDE-Stefanie-Lommel.html` — visual design reference, check before styling decisions
- Accent color `#C27347`

## Commands
`npm run dev` / `build` / `lint`. No test suite.
Repo has both `bun.lock` and `package-lock.json` — using npm unless told otherwise; flag to Stefanie if installs behave oddly.

## Deploy
Push to `main` → Vercel auto-deploys (already connected). Self-hosted analytics (Umami, no GA). Sitemap + Search Console + IndexNow already wired up for SEO — don't remove without reason.

## Legal pages
`agb` text is matched line-for-line to an external legal source document. Don't reword it casually — confirm with Stefanie first.
