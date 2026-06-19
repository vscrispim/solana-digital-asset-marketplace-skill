# Solana Digital Asset Marketplace Skill

A practical Solana AI Kit skill for founders building Web2.5 marketplaces for digital assets: 3D models, game assets, avatar/wearable drops, printable files, design packs, and other creator-owned files that need licensing, protected delivery, and a proof layer.

This skill is intentionally written from a founder/operator point of view, not as a toy demo. It helps an agent guide a real team through the messy decisions that happen before code becomes useful:

- what niche to start with;
- what not to automate yet;
- how to keep checkout familiar;
- where Solana should appear in the backend;
- how to onboard creators without creating legal/IP chaos;
- how to generate license briefs, risk registers, and demo scripts;
- how to move from a concierge marketplace to a controlled launch.

## Why this belongs in Solana AI Kit

A lot of Solana founder work is not only smart contracts. Builders also need to decide product scope, UX tradeoffs, trust flows, licensing, creator operations, and launch metrics.

Digital asset marketplaces are a strong fit for Solana when the chain is used as a quiet proof layer:

- receipt/provenance for purchases;
- license hash anchoring;
- creator payout history;
- optional wallet flows;
- future royalties or tokenized ownership only after demand is proven.

The buyer should not need to understand crypto to buy a file. The founder should still be able to use Solana to make ownership, receipts, and marketplace history more trustworthy.

## Core philosophy

**Web2 UX first. Solana proof layer second. Marketplace automation last.**

Start with a curated concierge marketplace. Do the first creator onboarding, asset review, license setup, and file delivery manually enough times to learn the patterns. Automate only what repeats.

## What the skill does

The skill routes an AI agent through focused workflows:

- `marketplace-wedge.md` — pick the first niche and reject generic marketplace thinking.
- `web2-5-ux.md` — design a familiar buyer flow with optional Web3 features.
- `license-models.md` — turn vague file sales into clear license tiers.
- `protected-delivery.md` — design file access, signed URLs, and update handoff.
- `solana-receipts.md` — decide what to hash, anchor, and expose on-chain.
- `creator-onboarding.md` — onboard creators safely and humanly.
- `ip-risk-checklist.md` — avoid obvious licensing and provenance mistakes.
- `metrics-and-funnel.md` — measure the market instead of pretending a launch worked.
- `funding-readiness.md` — prepare a demo, data room, and investor narrative.
- `security-threat-model.md` — add practical cybersecurity controls for uploads, downloads, accounts, webhooks, and user-generated content.
- `references/site-ux-patterns.md` — concrete UX examples inspired by Sketchfab, Gumroad, Fab, BOOTH/Jinxxy, MyMiniFactory, Printables, ArtStation, CGTrader, and TurboSquid.

It also includes templates, commands, rules, UX references, cybersecurity alerts, and lightweight agents for product, creator ops, and receipt architecture.

## Best use cases

Use this skill when a founder says something like:

- “I want to build a marketplace for 3D assets on Solana.”
- “How do we add Solana receipts without making checkout weird?”
- “What does a protected digital asset delivery flow look like?”
- “How do we validate creator demand before building a full marketplace?”
- “What should be in our creator intake form?”
- “How do we prepare a funding demo for a Web2.5 marketplace?”

## Install

From the repo root:

```bash
chmod +x install.sh
./install.sh
```

The script copies the skill into a local `skills/` directory shape that mirrors AI Kit skill structure. If you use another agent environment, copy the folders manually.

## Quick start prompts

```text
Use the solana-digital-asset-marketplace skill to design a Web2.5 marketplace for VRChat avatar assets. I want checkout to feel normal, but I want Solana receipts and protected file delivery.
```

```text
Use this skill to generate a creator intake checklist, asset license brief, and first-week validation plan for a curated 3D model marketplace.
```

```text
Review this marketplace idea and tell me what should be manual, what should be automated later, and what should be recorded on Solana.
```

## Example wedge

A founder starts with “a marketplace for all 3D assets.” The skill should push them toward a narrow launch wedge:

- VRChat / VTuber avatar drops;
- STL miniatures and printable collectibles;
- indie game props;
- archviz/product visualization packs.

Then it should produce a practical plan: creator list, intake, license tiers, buyer flow, protected delivery, Solana receipt scope, and measurable launch criteria.

## Safety notes

This skill does not provide legal advice. It helps founders organize licensing, IP, and marketplace risk questions so counsel and operators can review them properly.

Cybersecurity is treated as part of product quality: uploads are untrusted, paid files belong in private storage, signed URLs must be generated server-side, checkout webhooks need verification, and comments/bios/descriptions must be sanitized.

It also does not recommend forcing wallet-first flows. For early marketplaces, wallets should be optional unless the target audience already expects them.

## Submission note

Built for the Superteam Brasil Solana AI Kit skills bounty. The goal is a skill that a founder or agent would actually reach for while designing a real digital asset marketplace.
