---
name: solana-digital-asset-marketplace
description: Use when a Solana founder is designing a Web2.5 marketplace for digital assets such as 3D models, game assets, avatar drops, printables, or creator files, and needs practical guidance for niche selection, buyer UX, licensing, protected delivery, Solana receipts, creator onboarding, marketplace metrics, and funding readiness.
version: 1.0.0
author: Superteam Brasil community submission
license: MIT
metadata:
  hermes:
    tags: [solana, marketplace, digital-assets, creators, licensing, web2-5, protected-delivery, receipts]
    related_skills: []
---

# Solana Digital Asset Marketplace Skill

## Overview

This skill helps an agent work like a practical product partner for founders building digital asset marketplaces on Solana.

The default recommendation is not “put everything on-chain” and not “build a full marketplace first.” The default is:

1. start with a narrow creator/buyer wedge;
2. keep purchase UX familiar;
3. use Solana as a proof layer for receipts, provenance, and license hashes;
4. protect file delivery with normal web infrastructure;
5. keep creator onboarding manual until real demand appears.

## When to use

Use this skill when the user is building or evaluating:

- a marketplace for 3D models, avatar assets, wearables, game props, STL files, design packs, or other digital files;
- a creator storefront with license tiers and protected downloads;
- a Web2.5 product where buyers should not need to understand crypto;
- a Solana receipt/provenance layer for off-chain digital assets;
- a funding demo or hackathon submission for a creator marketplace;
- a marketplace launch plan that needs creator onboarding, metrics, and operational checklists.

Do **not** use it for:

- financial advice;
- securities/token launch advice;
- legal advice as a substitute for counsel;
- deep smart contract audits;
- DeFi position management;
- generic NFT marketplace hype without a concrete buyer problem.

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

## Default workflow

When a founder asks for help, follow this order:

1. **Clarify the asset category.** 3D models, avatars, STL, game assets, archviz, design files, or another digital good.
2. **Pick the wedge.** Avoid “all creators” and “all files.” Start with one community and one repeated purchase behavior.
3. **Design the Web2 flow.** Browse, preview, license, checkout, receipt, download, support.
4. **Add Solana quietly.** Hash the license/receipt, anchor proof, show explorer links only when useful.
5. **Define protected delivery.** Signed URLs, file versions, access logs, buyer account, update policy.
6. **Create creator ops.** Intake form, asset checklist, ownership declaration, pricing, support expectations.
7. **Write the risk register.** IP, licensing, custody, payments, refunds, disputes, data privacy.
8. **Set metrics.** Creator replies, assets approved, page views, checkout starts, completed purchases, downloads, support tickets.
9. **Prepare the demo.** Show one asset journey end-to-end, not a giant roadmap.

## Opinionated defaults

- Start as a **concierge marketplace**, not self-service.
- Use fiat/card checkout first when possible.
- Make wallet connect optional.
- Record hashes and receipts, not giant files, on-chain.
- Never claim that on-chain receipts prevent piracy by themselves.
- Keep licenses human-readable.
- Treat comments/reviews as support and trust signals, not social noise.
- Prioritize creator trust over marketplace breadth.

## Output standards

A good answer from this skill should include:

- the recommended wedge;
- the user journey;
- the creator journey;
- what is on-chain vs off-chain;
- manual operations for the first 10 creators;
- risk and counsel handoff notes;
- 3–5 concrete next actions;
- at least one template or checklist when useful.

## Human tone rule

Write like a founder/operator who has shipped messy early products. Be direct, concrete, and honest. Avoid generic AI phrasing such as “in today’s fast-paced world,” “unlock the power,” or “seamlessly revolutionize.” Prefer plain language:

- “Do this manually first.”
- “This is probably too early.”
- “The buyer does not care about the chain yet.”
- “This needs a lawyer before public launch.”
- “This metric tells you if anyone actually wants it.”

## Verification checklist

Before finalizing an answer, check:

- [ ] Did we avoid wallet-first UX unless the audience needs it?
- [ ] Did we separate on-chain proof from off-chain file delivery?
- [ ] Did we avoid legal advice and route legal questions to counsel?
- [ ] Did we choose a narrow initial wedge?
- [ ] Did we define what should remain manual in the first version?
- [ ] Did we include measurable next steps?
