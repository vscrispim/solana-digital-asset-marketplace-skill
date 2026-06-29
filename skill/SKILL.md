---
name: solana-digital-asset-marketplace
description: Generative skill that produces unique, production-grade landing pages from compact JSON prompts. Each prompt generates an entirely original site — not a template variation. Covers DeFi, prediction markets, music licensing, editorial art, and membership platforms on Solana. Supports motion graphics, Google Material Icons, and integrations for Supabase, Solana Pay, and wallet connect. Model-agnostic.
version: 5.1.0
author: Superteam Brasil
license: MIT
metadata:
  hermes:
    tags: [solana, generative, marketplace, defi, prediction-market, music, art-gallery, membership, seeds, html, motion, landing-page, hackathon]
    related_skills: [solanabr/auditor]
---

# Solana Digital Media Marketplace Skill

## Overview

A **generative design skill** — not a template picker. Each prompt produces a site with its own visual identity: unique layout, color system, typography, motion, and interaction patterns. The skill combines product strategy with frontend execution, producing self-contained HTML landing pages.

The five projects in `examples/` demonstrate the range: a glassmorphism DEX dashboard, a dark data war room for prediction markets, a neobrutalist music platform, a serif editorial magazine, and a medieval fantasy guild. Every one came from a different prompt — same skill, completely different results.

**One-prompt capable.** Describe the project and get a working site.

## Design principles

- **Generative, not templated.** Each seed produces a new visual identity. No two sites feel alike.
- **No navbar, no badges, no emojis.** Clean content-first pages.
- **English text only.** All output in English.
- **Standalone HTML.** Single `.html` file. No React, no build step, no Tailwind CDN.
- **Google Material Icons.** All icons via Google Fonts CDN. Material Symbols Rounded preferred.
- **Verified images only.** Use CoinGecko for token icons, Unsplash for photography.
- **Motion graphics optional.** Each seed accepts `motion.enabled` and `motion.type`.

## Projects built with this skill

The `examples/` directory contains five complete sites, each generated from a different prompt:

| Project | Domain | Aesthetic |
|---------|--------|-----------|
| **Nexus** | DeFi DEX | Glassmorphism dashboard, cyan/purple glow, floating orbs, frosted-glass cards |
| **Veredito** | Prediction markets | Dark data war room, amber accents, live ticker, stat sidebar, donut charts |
| **Wave** | Music licensing | Neobrutalist, bold typography, thick borders, high contrast, bright accent stripes |
| **Exhibit** | Art magazine | Editorial serif, full-bleed cover, drop caps, pull quotes, gold accents |
| **Guild** | Membership/DAO | Medieval fantasy, ember fire, stone texture, tier cards, stats banner |

Each site opens directly in any browser — no server, no build step.

## Seed system

Seeds are compact JSON prompts (~30-60 lines) that encode the creative direction for a site. The skill interprets the seed and produces a fully rendered page.

### Seed parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| `slug` | yes | URL-safe identifier |
| `name` | yes | Project name displayed on page |
| `tagline` | yes | Main value statement |
| `layout` | yes | Creative direction: swap, veredito, wave, exhibit, guild |
| `primary` | yes | Primary brand color (hex) |
| `accent` | no | Secondary color (hex) |
| `bg` | yes | Background color (hex) |
| `motion.enabled` | no | Enable motion graphics |
| `motion.type` | no | gradient_pulse, subtle_pulse, waves, parallax, reveal_stagger |
| `icon_style` | no | outlined, rounded, or filled |
| `items` / `columns` / `tiers` | yes | Content — structure varies by creative direction |
| `hero_image` | no | Hero background image URL (exhibit) |

### Creative directions

Each direction is a starting point, not a straitjacket. The same seed structure produces radically different results depending on the values:

- **swap** → Trading interfaces: dashboards, DEX terminals, liquidity pools
- **veredito** → Data-rich markets: predictions, governance, analytics dashboards
- **wave** → Content platforms: music, samples, audio libraries, streaming
- **exhibit** → Editorial: magazines, galleries, portfolios, curated collections
- **guild** → Communities: memberships, DAOs, patron programs, collectives

## Integration keywords

stripe, supabase, solana-pay, crossmint, helius, metaplex, resend, netlify, vercel

## Style keywords for prompts

Use these in prompts to guide the aesthetic:

**Visual languages**: `glassmorphism`, `neobrutalist`, `editorial-serif`, `dark-dashboard`, `medieval-fantasy`, `data-war-room`, `clean-market`

**Motion**: `gradient-pulse`, `subtle-pulse`, `waves`, `parallax`, `reveal-stagger`

**Color systems**: `cyan-purple-glow`, `amber-on-slate`, `neon-on-brutalist`, `gold-serif`, `ember-stone`

## Example prompts

```
Create a glassmorphism DeFi dashboard with a central swap widget,
live token pairs, cyan and purple glow accents, frosted glass cards,
and floating gradient orbs. Jupiter routing. Solana mainnet.
```

```
Build a dark prediction market dashboard with amber accents,
live ticker tape, stat sidebar with oracle feeds, category grid,
multi-outcome markets with donut progress indicators.
```

```
Design a neobrutalist music licensing platform — bright white background,
thick black borders, bold Space Grotesk typography, colored left accent
stripes per track, pay-in-SOL pricing. No rounded corners.
```

## Routing

Each creative direction targets a specific domain. Pick the closest one and adapt the seed:

- **DeFi / Trading** → `swap` direction. Token pairs, swap widgets, routing badges, live pricing.
- **Prediction Markets** → `veredito` direction. Oracle feeds, probability tracking, multi-outcome, resolved stamps.
- **Music / Audio** → `wave` direction. Track listings, genre tagging, SOL pricing, license delivery.
- **Art / Editorial** → `exhibit` direction. Magazine layouts, gallery grids, feature articles, serif typography.
- **Membership / Community** → `guild` direction. Tier cards, lore, treasury stats, immersive atmosphere.

## Default workflow

1. Describe the project and audience in a prompt.
2. The skill creates a seed JSON with the creative direction.
3. `generate.js` produces the standalone HTML page.
4. For production: wire integrations (Supabase, Solana Pay, wallet connect).
5. Deploy via Netlify/Vercel or serve static.

## Verification checklist

- [ ] Unique visual identity (not a template variation)
- [ ] No navbar/header present
- [ ] No security guard badges
- [ ] All text in English
- [ ] Zero emoji characters
- [ ] Google Material Icons loaded
- [ ] All img tags have crossorigin="anonymous"
- [ ] Motion type matches the creative direction
- [ ] Standalone HTML (no framework)
- [ ] Token icons use CoinGecko URLs (DeFi projects)

## Output standards

Every generated page is a **production-grade landing page** with:
- Distinct visual identity tied to the creative direction
- No navigation bar, no logo, no site name
- Content area matching the project domain
- Footer with Solana attribution
- No security badges or guard tags

## Human tone rule

Write direct and helpful. No marketing fluff. No fear-mongering about security. Never promise that on-chain features prevent piracy or fraud. When asked about legal, audit, or finance topics, say so and suggest the right professional.

## Official Solana resources

docs.solana.com, solana.com, solana.foundation, github.com/solana-labs, github.com/solana-foundation, superteamBR.
