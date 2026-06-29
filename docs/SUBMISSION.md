# Superteam Earn Submission Draft

## Project

**Solana Digital Media Marketplace Skill**

## Short description

A Solana AI Kit skill for founders building Web2.5 marketplaces and NFT utility products. Includes a modular Seeds system that generates unique landing pages from compact JSON configs, HTML-only micro-interactions (CSS animations, zero JS), Design.md pipeline for Claude-generated specs, and practical guidance for licensing, protected delivery, creator onboarding, Solana receipts, and marketplace metrics.

## What problem does it solve?

Founders often know they want "a marketplace on Solana," but the hard early decisions are not only technical. They need to know:

- which niche to start with;
- how to keep checkout familiar;
- what should stay off-chain;
- what is worth anchoring on Solana;
- how to protect file delivery;
- how to onboard creators safely;
- how to structure licenses;
- what metrics prove the marketplace is working.

This skill helps an agent guide those decisions in a concrete, operator-friendly way — and now generates actual HTML demos from seed configs.

## Why it is useful for Solana builders

Solana is a strong fit for digital asset marketplaces when it is used as a quiet proof layer: receipt hashes, license hashes, provenance, creator payout history, and optional wallet-linked ownership. The skill helps founders avoid overbuilding or forcing crypto UX too early.

The buyer gets a normal marketplace flow. The founder still gets a credible Solana-backed trust layer.

## What makes this different from other Solana AI Kit skills

| Aspect | Auditor Skill | Legal Skill | Position Manager Skill | **Esta Skill** |
|--------|---------------|-------------|----------------------|----------------|
| Foco principal | Segurança de programas Solana | Compliance/legal | Gestão de liquidez DeFi | **Marketplaces, mídia digital, NFT utility** |
| Gera HTML? | ❌ | ❌ | ❌ | ✅ **5 landing pages + Seeds system** |
| Sistema modular | ❌ | ❌ | ❌ | ✅ **JSON seeds → HTML generator** |
| Micro-interações CSS | ❌ | ❌ | ❌ | ✅ **CSS-only animations, zero JS** |
| Pipeline Design.md | ❌ | ❌ | ❌ | ✅ **Claude spec → página funcional** |
| Integrações documentadas | ❌ | ❌ | ❌ | ✅ **Stripe, Supabase, Crossmint, Solana Pay, Helius, Metaplex** |
| Foco em Web2.5 UX | ❌ | ❌ | ❌ | ✅ **Wallet opcional, checkout familiar** |

## What is included

### Sistema modular de Seeds (NOVO)

- `seeds/` — 5 configs JSON (Vitrine, Copla, Pátio, Avenida, Prateleira)
- `generate.js` — script Node que converte qualquer seed em HTML único
- Cada seed define: layout, cores, imagens Unsplash, guards Safe AI Skill, assets e preços
- Adicionar novo marketplace = criar JSON + rodar `node generate.js`

### Landing pages (NOVO)

5 páginas HTML com layouts completamente diferentes:

| Seed | Layout | Tema | Imagens |
|------|--------|------|---------|
| Vitrine | Horizontal scroll | Archviz/3D | Unsplash |
| Copla | Wave timeline | Música/samples | Unsplash |
| Pátio | Cards radiais | Memberships | Unsplash |
| Avenida | Split-screen | Arte digital | Unsplash |
| Prateleira | Masonry grid | Game assets | Unsplash |

### HTML-only micro-interações (NOVO)

- `micro-interactions.css` — sistema de animações CSS sem JavaScript
- 7 padrões: reveal cascade, pulse glow, shimmer, float, CSS counter, border draw, bounce click
- Funciona em todos os browsers modernos, zero JS, zero dependências

### Design.md Pipeline (NOVO)

- `docs/DESIGN_MD_PIPELINE.md` — documentação do fluxo Claude Design.md → seed JSON → HTML
- Permite que qualquer modelo de IA gere especificações visuais que viram páginas funcionais

### Integrações documentadas (NOVO)

- `docs/INTEGRATIONS.md` — guia prático para Stripe, Supabase, Resend, Netlify Functions, Vercel Edge, Solana Pay, Crossmint, Helius, Metaplex

### Módulos principais (existentes, revisados)

- `skill/SKILL.md` — v2.0.0, entrada roteada com parâmetros atualizados
- 9 módulos focados: wedge, UX, licenças, delivery, receipts, onboarding, IP, métricas, funding
- Templates para criadores, briefs de licença, demo, investor one-pager
- Regras de segurança e baseline de cybersecurity
- Validação estrutural via `scripts/validate.py`

### Cobertura completa de recursos Solana

Referências oficiais utilizadas:
- docs.solana.com — documentação principal
- solana.com — site oficial
- solana.foundation — fundação
- github.com/solana-labs — SDKs, programas
- github.com/solana-foundation — grants, iniciativas
- github.com/superteamBR — comunidade Brasil

Tópicos Solana cobertos: SPL Token, SPL Memo, SPL Account Compression, Solana Pay, Solana Actions/Blinks, Solana Mobile, Metaplex (Token Metadata, Core, Sugar CLI).

## Quality / testing

The repo includes `scripts/validate.py`, which checks required files, `SKILL.md` frontmatter, README sections, and internal module references.

Validation run locally:

```text
OK: validated required files
SKILL.md chars: 19300
README chars: 29600
```

## Links

- Repositório: https://github.com/vscrispim/solana-digital-asset-marketplace-skill
- Landing pages: `examples/01-vitrine.html` a `05-prateleira.html`
- Seeds: `examples/seeds/`
- Pipeline Design.md: `docs/DESIGN_MD_PIPELINE.md`
- Integrações: `docs/INTEGRATIONS.md`
