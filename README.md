# Solana Digital Media Marketplace Skill

**A generative design skill — not a template library.** Each prompt produces an entirely unique site with its own visual identity, color system, typography, motion, and interaction patterns. Built for founders, hackathon teams, and creators building on Solana.

Superteam Brasil Solana AI Kit Skills Bounty.

---

## Built with this skill

Five projects, five completely different aesthetics. Same skill, different prompts.

### Nexus — DeFi DEX
![Nexus](examples/swap-preview.png)
Glassmorphism dashboard with floating gradient orbs, frosted-glass swap widget, live token pairs with CoinGecko icons, protocol logo routing badges (Jupiter, Raydium, Orca, OpenBook, Meteora), and cyan-purple glow accents.

### Veredito — Prediction Markets
![Veredito](examples/veredito-preview.png)
Dark data war room with live ticker tape, amber accent dashboard, oracle feed sidebar, multi-outcome markets with donut progress indicators, and resolved market stamps. Oracle-resolved. No counterparty risk.

### Wave — Music Licensing
![Wave](examples/wave-preview.png)
Neobrutalist music platform — bright background, thick black borders, Space Grotesk typography, colored left accent stripes per track, bold high-contrast design. Pay in SOL, license instantly.

### Exhibit — Editorial Art Magazine
![Exhibit](examples/exhibit-preview.png)
Full-bleed magazine cover with Playfair Display serif, feature article with pull quotes and drop caps, "On View" gallery grid, related reading section. Gold (#d4a574) accent. Editorial elegance.

### Guild — Medieval Fantasy Membership
![Guild](examples/guild-preview.png)
Pulsing ember fire animations, stone texture background, tier cards (Squire 0.5 SOL, Knight 1.2 SOL featured, Lord 3.0 SOL), lore paragraph, treasury stats banner. Immersive fantasy aesthetic.

---

## How it works

```
Your prompt → Seed JSON (creative direction) → generate.js → Standalone HTML
```

Describe what you want in plain language. The skill translates it into a compact JSON seed — colors, motion, content, domain — and `generate.js` produces a fully self-contained HTML page that opens in any browser. No framework. No build step.

### Example prompts

```
Build a glassmorphism DeFi dashboard with live token pairs,
cyan and purple glow accents, a central swap widget, and
floating gradient orbs. Solana mainnet, Jupiter routing.
```

```
Create a prediction market war room — dark dashboard with
amber stats, live ticker, oracle sidebar, multi-outcome
markets, and resolved stamps. Switchboard and Pyth oracles.
```

```
Design a neobrutalist music licensing site — bright white,
thick black borders, bold typography, per-track accent stripes,
pay-in-SOL with instant license delivery.
```

---

## Quick start prompts

```bash
git clone https://github.com/vscrispim/solana-digital-asset-marketplace-skill.git
cd solana-digital-asset-marketplace-skill
chmod +x install.sh && ./install.sh
```

Open any project directly:

```bash
open examples/swap.html       # Nexus — DeFi dashboard
open examples/veredito.html    # Veredito — prediction markets
open examples/wave.html        # Wave — music licensing
open examples/exhibit.html     # Exhibit — art magazine
open examples/guild.html       # Guild — membership
```

Generate from a seed:

```bash
node examples/generate.js examples/seeds/01-swap.json
```

---

## Seed system

Seeds are compact JSON files (~30-60 lines) that encode a creative direction. The skill interprets the seed and produces a unique site.

### Core parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | yes | URL-safe identifier |
| `name` | string | yes | Project name |
| `tagline` | string | yes | Main statement |
| `layout` | string | yes | Creative direction: swap, veredito, wave, exhibit, guild |
| `primary` | hex | yes | Primary brand color |
| `accent` | hex | no | Secondary accent color |
| `bg` | hex | yes | Page background color |
| `motion.enabled` | boolean | no | Enable motion graphics |
| `motion.type` | string | no | gradient_pulse, subtle_pulse, waves, parallax, reveal_stagger |
| `icon_style` | string | no | Google Material Icons style |
| `items` | array | yes | Content items — structure varies by creative direction |
| `hero_image` | URL | no | Hero background (exhibit) |

### Creative directions

| Direction | Domain | Visual range |
|-----------|--------|-------------|
| `swap` | DeFi, trading, dashboards | Glassmorphism, terminal, data-dense, neon |
| `veredito` | Predictions, governance, analytics | Dark dashboard, amber accents, chart-rich, war room |
| `wave` | Music, audio, content platforms | Neobrutalist, editorial, bold, high-contrast |
| `exhibit` | Art, magazines, portfolios | Serif, full-bleed, editorial, elegant |
| `guild` | Memberships, DAOs, communities | Fantasy, immersive, tiered, atmospheric |

### Prompt keywords

**Visual languages**: `glassmorphism`, `neobrutalist`, `editorial-serif`, `dark-dashboard`, `medieval-fantasy`, `data-war-room`, `clean-market`

**Motion**: `gradient-pulse`, `subtle-pulse`, `waves`, `parallax`, `reveal-stagger`

**Integrations**: `stripe`, `supabase`, `solana-pay`, `crossmint`, `helius`, `metaplex`

---

## Integrations

Functional modules in `integrations/`:

| File | Service |
|------|---------|
| `supabase.js` | Auth, database schema (assets, licenses, events, predictions), RLS policies |
| `solana-pay.js` | QR codes, on-chain SOL/SPL transfers, payment verification |
| `wallet.js` | Phantom/Backpack/Solflare connect, signMessage, account change listener |
| `api.js` | Serverless API routes for assets, purchases, payment verification |
| `.env.example` | Environment variable template |

---

## Why this belongs in Solana AI Kit

Built exclusively on official Solana sources and real network data. References pools (Jupiter, Raydium, Orca, Meteora DLMM), validators (Jito), protocols (Drift, Sanctum Infinity), and network epochs. Integrations documented for Solana Pay, Crossmint, Helius, and Metaplex.

What sets it apart: **every prompt produces a genuinely new site.** Not a color swap. Not a template pick. A different visual identity — layout, typography, color system, motion, interaction patterns. That's the difference between a template library and a generative skill.

---

## Real utility first

Real utility first. Web2 UX second. Solana proof layer third. Marketplace automation last. Start with a narrow wedge. Keep purchase UX familiar. Use Solana as a silent proof layer for receipts, provenance, and license hashes. Protect file delivery with standard web infrastructure.

---

## Hackathon use cases

- **DeFi**: Swap dashboards with live token pairs, route badges, slippage controls
- **Prediction**: Market war rooms with oracle feeds, multi-outcome tracking, resolved stamps
- **Music**: Sample licensing with instant SOL payment, genre tagging, protected delivery
- **Art**: Magazine editorials with full-bleed covers, feature articles, gallery grids
- **Membership**: Guild tiers with ember animations, treasury stats, lore-driven onboarding

Complete demo journey: Landing → action → receipt → verification → admin view.

---

## Safety notes

- Never expose credentials. Skill includes Secret Vault for key protection.
- Simulate before mainnet. Mainnet Guard blocks unauthorized deploys.
- Verify supply chain. Use npm_supply_chain_guard.py before installing dependencies.
- For Solana program audits, use solanabr/Auditor.

---

## License

MIT. Built for Superteam Brasil Solana AI Kit Skills Bounty.
