---
name: solana-digital-asset-marketplace
description: Produces premium, production-grade landing pages from compact JSON seeds. Five distinct layouts: DeFi terminal with real token icons, Kalshi-style prediction markets, Spotify-like music licensing with animated waves, magazine editorial art gallery, and medieval fantasy guild membership. Supports motion graphics, Google Material Icons, and wiring for Supabase, Solana Pay, and wallet connect. One-prompt capable. Model-agnostic.
version: 5.0.0
author: Superteam Brasil
license: MIT
metadata:
  hermes:
    tags: [solana, marketplace, defi, dex, prediction-market, music, art-gallery, membership, seeds, html, motion, google-icons, landing-page, hackathon]
    related_skills: [solanabr/auditor]
---

# Solana Digital Media Marketplace Skill

## Overview

Generates fully self-contained HTML landing pages from JSON seeds. Five layouts with completely distinct aesthetics — zero repetition. No framework dependencies. Google Material Icons for decorative elements. CSS + canvas motion graphics. Functional integration modules for Supabase, Solana Pay, and wallet connect.

**One-prompt capable.** Describe the project in one sentence and get a working landing page.

## Design rules (mandatory)

- **No navbar.** Landing pages have no top navigation bar, no logo, no site name. Content starts immediately.
- **No security badges.** Pages are clean — no "Mainnet Guard", "Authority Lock", "Account Shield", or "Secret Vault" tags.
- **Zero emojis.** No emoji characters anywhere.
- **English text only.** All output in English.
- **Dark premium palette.** Background #000 or near-black. Cards #0a0a0a. 2-3 accent colors max. Exception: veredito (light theme).
- **Inter + JetBrains Mono fonts.** Monospace for data, Inter for body. Serif: Playfair Display or Georgia.
- **Standalone HTML.** Single .html file. No React, no Tailwind CDN, no build step.
- **Google Material Icons.** All icons via Google Fonts CDN. Material Symbols Rounded preferred.
- **Verified images only.** Test image URLs before embedding. Use CoinGecko for token icons, Unsplash for photography.
- **No external design references.** Never mention inspiration sites in output, docs, or code.
- **Motion graphics optional.** Each seed accepts motion.enabled and motion.type.

## Layouts

### swap — DeFi Terminal
Green-on-black monospace terminal. Real token coin icons (SOL, BONK, PYTH, RAY, JTO via CoinGecko). SVG sparkline charts. Route badges for Jupiter, Raydium, Orca, OpenBook, Meteora. Gradient pulse background. No navbar. No badges.
Best for: DEX, DeFi dashboards, trading terminals.

### veredito — Prediction Markets (Kalshi/Sportingbet style)
Clean white/gray cards with probability bars. YES/NO odds in side panels. Category tabs (All, Crypto, Sports, Politics, Tech). Multi-outcome markets with stacked bars. Resolved markets with resolution stamps. No navbar. No badges.
Best for: prediction markets, sports betting UIs, governance voting.

### wave — Music Licensing (Tidal/Spotify-inspired)
No hero section. Track list with numbered rows, play buttons, genre tags, prices in SOL. Canvas wave animation background. Colored genre badges per track. Hover expansion on rows. No navbar. No badges.
Best for: music platforms, sample libraries, audio licensing.

### exhibit — Editorial Art Magazine
Full-bleed cover image. Feature article with pull quotes and drop caps. "On View" collection grid. Related reading links at bottom. Playfair Display serif typography. Gold (#d4a574) accent. Volume/date masthead. No navbar. No badges.
Best for: art galleries, editorial sites, curated collections, portfolios.

### guild — Medieval Fantasy Membership
Ember fire animations. Stone texture background. Tier cards: Squire, Knight, Lord. Featured middle tier with gold gradient CTA. Stats banner (members, treasury, commissions). Playfair Display headers. No navbar. No badges.
Best for: creator memberships, DAO tiers, community passes, exclusive collectives.

## Seed parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| slug | yes | URL-safe identifier |
| name | yes | Project name (displayed in page content) |
| tagline | yes | Main statement |
| layout | yes | swap, veredito, wave, exhibit, or guild |
| primary | yes | Brand color (hex) |
| accent | no | Secondary color (hex) |
| bg | yes | Background color (hex) |
| motion.enabled | no | Enable motion graphics |
| motion.type | no | gradient_pulse, subtle_pulse, waves, parallax, reveal_stagger |
| icon_style | no | outlined, rounded, or filled |
| items / columns / tiers | yes | Content (layout-specific) |
| hero_image | no | Hero background image URL (exhibit) |

## Integration keywords

stripe, supabase, solana-pay, crossmint, helius, metaplex, resend, netlify, vercel

## Default workflow

1. Identify the project type and select the matching layout.
2. Fill in the seed JSON with name, tagline, colors, content.
3. Run generate.js to produce the HTML.
4. For production: wire into integrations (Supabase for data, Solana Pay for payments).
5. Deploy via Netlify/Vercel or serve static.

## Routing

Each layout is self-contained.

- **DeFi / Trading**: Use `swap` layout. Items array with title, subtitle, price, change, extra, image (CoinGecko URL), sprite_color.
- **Prediction Markets**: Use `veredito` layout. Columns array with title, color, items[]. Items have title, probability, stake, creator, extra, odds_yes, odds_no. Optional multi-outcome support via outcomes[].
- **Music / Audio**: Use `wave` layout. Items array with title, creator, price, bpm, genre, genre_color.
- **Art / Editorial**: Use `exhibit` layout. Items array with title, creator, price, image. Optional feature_article and related_articles.
- **Membership / Community**: Use `guild` layout. Tiers array with title, price, subtitle, icon (Material Symbol name), benefits[], featured. Optional stats.

## Verification checklist

- [ ] No navbar/header present
- [ ] No security guard badges
- [ ] All text in English
- [ ] Zero emoji characters
- [ ] Correct font stack (Inter, JetBrains Mono, Playfair Display)
- [ ] Google Material Icons loaded
- [ ] All img tags have crossorigin="anonymous"
- [ ] Motion type matches layout
- [ ] Standalone HTML (no framework)
- [ ] Token icons use CoinGecko URLs (swap layout)

## Output standards

Every generated page is a **minimalist landing page** with:
- No navigation bar, no logo, no site name
- Content area matching the layout
- Footer with Solana attribution
- No security badges or guard tags

## Human tone rule

Write direct and helpful. No marketing fluff. No fear-mongering about security. Never promise that on-chain features prevent piracy or fraud. When asked about legal, audit, or finance topics, say so and suggest the right professional.

## Official Solana resources

docs.solana.com, solana.com, solana.foundation, github.com/solana-labs, github.com/solana-foundation, superteamBR.
