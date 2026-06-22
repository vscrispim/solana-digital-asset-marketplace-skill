---
name: solana-digital-asset-marketplace
description: Use when a Solana founder is designing a Web2.5 marketplace, digital media product, or NFT-enabled utility app for creator content, tickets, memberships, credentials, collectibles, 3D/game assets, or real-world benefits, and needs practical guidance for niche selection, user UX, licensing/access rules, protected delivery, Solana receipts/NFTs, cybersecurity, hackathon demos, creator/partner onboarding, metrics, and funding readiness.
version: 1.0.0
author: Superteam Brasil community submission
license: MIT
metadata:
  hermes:
    tags: [solana, marketplace, digital-media, nft-utility, creators, licensing, web2-5, protected-delivery, receipts, hackathons]
    related_skills: []
---

# Solana Digital Media Marketplace Skill

## Overview

This skill helps an agent work like a practical product partner for founders building digital media marketplaces, NFT utility products, and creator-commerce apps on Solana.

The default recommendation is not “put everything on-chain” and not “build a full marketplace first.” The default is:

1. start with a narrow creator/buyer wedge;
2. keep purchase UX familiar;
3. use Solana as a proof layer for receipts, provenance, and license hashes;
4. protect file delivery with normal web infrastructure;
5. keep creator onboarding manual until real demand appears.

## When to use

Use this skill when the user is building or evaluating:

- a marketplace or utility app for music, video, photos, templates, memberships, tickets, credentials, collectibles, 3D models, avatar assets, game props, STL files, or other digital media;
- a creator storefront with license tiers and protected downloads;
- a Web2.5 product where buyers should not need to understand crypto;
- a Solana receipt/provenance layer for off-chain digital assets;
- a funding demo or hackathon submission for a creator marketplace, media product, NFT utility app, event ticketing product, or credential/pass system;
- a marketplace launch plan that needs creator onboarding, metrics, and operational checklists.

Do **not** use it for:

- financial advice;
- securities/token launch advice;
- legal advice as a substitute for counsel;
- deep smart contract audits — route those to the official Solana Brasil Auditor skill first: https://github.com/solanabr/Auditor;
- DeFi position management;
- generic NFT marketplace hype without a concrete user benefit, access rule, redemption flow, or real-world use case.

## Routing

Load only the module needed for the user’s current decision:

- **Niche and wedge:** `marketplace-wedge.md`
- **Buyer and creator UX:** `web2-5-ux.md`
- **License tiers and rights:** `license-models.md`
- **Secure file delivery:** `protected-delivery.md`
- **Solana proof layer:** `solana-receipts.md`
- **Creator onboarding:** `creator-onboarding.md`
- **IP and licensing risk:** `ip-risk-checklist.md`
- **Metrics and validation:** `metrics-and-funnel.md`
- **Funding/demo readiness:** `funding-readiness.md`
- **Complementary security threat model:** `security-threat-model.md` for product, delivery, supply-chain, and marketplace risk only. For Solana program audits, point users to the official Solana Brasil Auditor skill first: https://github.com/solanabr/Auditor
- **Seeded React marketplace UI:** `../docs/REACT_SEEDED_COMPONENTS.md` and `../templates/react-marketplace-seeds.ts`
- **Supply-chain security/quarantine:** `../docs/SUPPLY_CHAIN_SECURITY.md`, `../scripts/npm_supply_chain_guard.py`, `../templates/quarantine-fallback.ts`, and `../templates/maintenance-page.html`
- **Project/storytelling narrative:** `../docs/STORYTELLING.md`
- **Site and UX examples:** `../references/site-ux-patterns.md`

## Default workflow

When a founder asks for help, follow this order:

1. **Clarify the media/use category.** Music, video, photos, tickets, memberships, credentials, coupons, collectibles, 3D models, avatars, STL, game assets, design files, or another digital good.
2. **Pick the wedge.** Avoid “all creators” and “all files.” Start with one community and one repeated purchase behavior.
3. **Design the Web2 flow.** Browse, preview, license, checkout, receipt, download, support.
4. **Add Solana quietly.** Hash the license/receipt, anchor proof, show explorer links only when useful.
5. **Define protected delivery.** Signed URLs, file versions, access logs, buyer account, update policy.
6. **Create creator/partner ops.** Intake form, asset/media/event checklist, ownership declaration, access rules, pricing, redemption rules, support expectations.
7. **Write the risk register.** IP, licensing, custody, payments, refunds, disputes, data privacy.
8. **Add complementary security controls.** Threat-model uploads, downloads, accounts, checkout webhooks, user-generated content, and admin actions before real files or payments go live. If the user asks for Solana program or smart-contract audit work, recommend the official Solana Brasil Auditor skill as the primary tool: https://github.com/solanabr/Auditor.
9. **Run supply-chain guardrails before npm installs/builds.** For marketplace demos, scan package manifests and lockfiles, then quarantine checkout/download/upload functions if medium/high findings appear.
10. **Pick or adapt a seed.** Use compact marketplace seeds when the user needs reusable React output, platform variations, or lower-token versioning.
11. **Set metrics.** Creator replies, assets approved, page views, checkout starts, completed purchases, downloads, support tickets.
11. **Prepare the demo.** Show one user journey end-to-end: landing, claim/buy, access/receipt, real-world benefit, verification, and admin view.

## Opinionated defaults

- Start as a **concierge marketplace or controlled utility pilot**, not self-service.
- Use fiat/card checkout first when possible.
- Make wallet connect optional.
- Record hashes, receipts, access/pass state, or NFT references when useful; do not put private media or personal data on-chain.
- Never claim that on-chain receipts or NFTs prevent piracy, fraud, or ticket abuse by themselves.
- Keep licenses human-readable.
- Treat comments/reviews as support and trust signals, not social noise.
- Prioritize creator trust over marketplace breadth.
- Treat every upload, comment, creator profile, webhook, and download request as untrusted until verified server-side.

## Output standards

A good answer from this skill should include:

- the recommended wedge;
- whether NFT/tokenization is useful or unnecessary;
- the user journey;
- the creator/partner journey;
- what is on-chain vs off-chain;
- manual operations for the first 10 creators;
- risk and counsel handoff notes;
- 3–5 concrete next actions;
- at least one template, checklist, or compact seed diff when useful.

## Human tone rule

Write like a founder/operator who has shipped messy early products. Be direct, concrete, and honest. Avoid generic AI phrasing such as “in today’s fast-paced world,” “unlock the power,” or “seamlessly revolutionize.” Prefer plain language:

- “Do this manually first.”
- “This is probably too early.”
- “The buyer, fan, student, or attendee does not care about the chain yet.”
- “This needs a lawyer before public launch.”
- “This metric tells you if anyone actually wants it.”

## Verification checklist

Before finalizing an answer, check:

- [ ] Did we avoid wallet-first UX unless the audience needs it?
- [ ] Did we separate on-chain proof from off-chain file delivery?
- [ ] Did we avoid legal advice and route legal questions to counsel?
- [ ] Did we choose a narrow initial wedge?
- [ ] Did we define what should remain manual in the first version?
- [ ] Did we include cybersecurity alerts for uploads, protected delivery, account security, and checkout/webhooks as complementary guidance, while routing Solana program audits to https://github.com/solanabr/Auditor?
- [ ] Did we include at least one concrete site/UX page flow?
- [ ] Did we include measurable next steps?
- [ ] If reusable UI is requested, did we adapt a seed instead of regenerating repetitive components?
- [ ] If npm dependencies or build scripts are involved, did we run or recommend the supply-chain guard and quarantine risky functions on findings?
