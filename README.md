# Solana Digital Media Marketplace Skill

> A Solana AI Kit skill for founders building Web2.5 marketplaces and NFT-enabled products for digital media, creator assets, memberships, tickets, credentials, collectibles, unlockable content, and real-world utility.

Built for the **Superteam Brasil Solana AI Kit Skills Bounty**.

## Quick summary

Marketplaces are changing. Large NFT and creator-commerce players such as Magic Eden can shift strategy, fees, categories, chains, or product focus. That creates room for smaller, sharper platforms that serve specific communities and real use cases.

This skill helps an AI agent guide a founder through those decisions in a practical way:

- choose a focused marketplace or media-commerce wedge;
- decide when NFTs are useful and when they are just noise;
- keep checkout familiar instead of wallet-first;
- define license, access, membership, ticket, or credential rules in plain language;
- protect paid files, streams, drops, and gated content;
- decide what belongs on Solana and what stays off-chain;
- onboard creators, brands, venues, schools, or communities;
- add cybersecurity checks before real users, media, or payments are at risk;
- prepare a hackathon demo, validation plan, and funding narrative.

**Core principle:** Real utility first. Web2 UX second. Solana proof layer third. Marketplace automation last.

## Table of contents

- [Why this belongs in Solana AI Kit](#why-this-belongs-in-solana-ai-kit)
- [Who should use it](#who-should-use-it)
- [What is included](#what-is-included)
- [Repository structure](#repository-structure)
- [Install](#install)
- [Quick start prompts](#quick-start-prompts)
- [Example output direction](#example-output-direction)
- [UX references](#ux-references)
- [Cybersecurity baseline](#cybersecurity-baseline)
- [Hackathon use cases](#hackathon-use-cases)
- [Validation](#validation)
- [Bounty submission](#bounty-submission)
- [Safety notes](#safety-notes)

## Why this belongs in Solana AI Kit

A lot of Solana founder work is not only writing programs. Builders also need to make hard product decisions:

- What should the buyer, fan, student, collector, or attendee see?
- Should the wallet be optional?
- What should be an NFT and what should not?
- What should be recorded on-chain?
- How should digital media or gated access be delivered after purchase?
- What license, benefit, ticket, credential, or membership did the user actually receive?
- How do we prevent fake creators, leaked media, unsafe uploads, and scammy claims?

Digital media and NFT-enabled marketplaces are a strong fit for Solana when the chain is used as a quiet proof layer:

- receipts for purchases;
- provenance for creator media;
- access passes and memberships;
- event tickets and attendance proofs;
- credentials/certificates;
- license hash anchoring;
- creator payout history;
- optional wallet-linked ownership;
- future royalties or tokenized ownership only after demand is proven.

The user should not need to understand crypto to buy media, unlock content, claim a ticket, or verify a credential. The founder should still be able to use Solana to make ownership, access, and marketplace history more trustworthy.

## Who should use it

Use this skill when a founder or agent is working on:

- digital media marketplaces;
- NFT utility products;
- music, video, photo, design, writing, or template drops;
- 3D model marketplaces;
- VRChat / VTuber avatar drops;
- STL premium printables;
- indie game asset packs;
- creator memberships or gated communities;
- event tickets, collectibles, loyalty passes, coupons, or claims;
- education credentials, certificates, hackathon proofs, or attendance badges;
- protected file/media delivery;
- Solana-backed receipts, access passes, or provenance;
- hackathon demos for real-world Web3 applications.

Do **not** use it as:

- legal advice;
- financial advice;
- a smart contract audit;
- a DeFi position-management tool;
- a generic NFT hype generator without a concrete user benefit.

## What is included

### Main skill modules

- [`skill/SKILL.md`](skill/SKILL.md) — entry point and progressive router.
- [`skill/marketplace-wedge.md`](skill/marketplace-wedge.md) — choose the first niche and avoid generic marketplace scope.
- [`skill/web2-5-ux.md`](skill/web2-5-ux.md) — design a familiar buyer/fan/user flow with optional Web3 features.
- [`skill/license-models.md`](skill/license-models.md) — turn vague media or asset sales into clear license/access tiers.
- [`skill/protected-delivery.md`](skill/protected-delivery.md) — design private media/files, signed URLs, access logs, and updates.
- [`skill/solana-receipts.md`](skill/solana-receipts.md) — decide what to hash, mint, anchor, and expose on Solana.
- [`skill/creator-onboarding.md`](skill/creator-onboarding.md) — onboard creators, partners, and communities safely.
- [`skill/ip-risk-checklist.md`](skill/ip-risk-checklist.md) — catch obvious licensing and provenance risks.
- [`skill/metrics-and-funnel.md`](skill/metrics-and-funnel.md) — measure whether the marketplace or utility product is actually working.
- [`skill/funding-readiness.md`](skill/funding-readiness.md) — prepare demo, data room, investor narrative, and hackathon submission.
- [`skill/security-threat-model.md`](skill/security-threat-model.md) — add practical cybersecurity controls.

### Supporting files

- [`templates/`](templates/) — creator intake, license/access brief, risk register, demo script, investor one-pager.
- [`commands/`](commands/) — reusable workflow commands.
- [`agents/`](agents/) — focused specialist agent specs.
- [`rules/`](rules/) — IP/licensing, wallet UX, and cybersecurity defaults.
- [`references/`](references/) — concrete site and UX patterns.
- [`examples/`](examples/) — example marketplace and real-world utility use cases.
- [`scripts/validate.py`](scripts/validate.py) — structural validation.
- [`docs/`](docs/) — bounty submission and repository documentation.

## Repository structure

```text
.
├── README.md
├── LICENSE
├── install.sh
├── skill/
├── templates/
├── commands/
├── agents/
├── rules/
├── references/
├── examples/
├── scripts/
└── docs/
```

For the full annotated tree, see [`docs/PROJECT_STRUCTURE.md`](docs/PROJECT_STRUCTURE.md).

## Install

From the repo root:

```bash
chmod +x install.sh
./install.sh
```

By default, the script copies the skill into:

```text
.installed/solana-digital-asset-marketplace-skill
```

You can pass a custom target directory:

```bash
./install.sh /path/to/target
```

## Quick start prompts

```text
Use the solana-digital-asset-marketplace skill to design a Web2.5 marketplace for independent music drops with NFT access passes, normal checkout, creator payouts, and protected bonus content.
```

```text
Use this skill to design a real-world NFT ticketing and attendance proof flow for a university hackathon. Keep wallet optional and include cybersecurity alerts.
```

```text
Review this media marketplace idea and tell me what should be manual, what should be automated later, what should be recorded on Solana, and what should not be an NFT.
```

## Example output direction

If a founder starts with:

> I want to build an NFT marketplace because Magic Eden is changing and creators need alternatives.

The skill should push toward a narrower real-use wedge:

- music drop with token-gated stems, backstage content, or fan memberships;
- event ticket with attendance proof and post-event perks;
- education certificate or hackathon credential;
- creator media store for photos, presets, templates, or videos;
- local commerce loyalty/coupon pass;
- 3D/avatar/STL/game asset marketplace;
- brand/community collectible with a real redeemable benefit.

Then it should produce a practical plan:

- target user and partner profile;
- buyer/fan/attendee flow;
- license/access/membership/ticket rules;
- protected delivery or redemption model;
- Solana receipt/NFT/proof scope;
- creator/partner onboarding checklist;
- cybersecurity alerts;
- hackathon demo plan;
- validation metrics.

## UX references

The skill uses concrete marketplace references so outputs do not become generic:

- **Magic Eden:** NFT marketplace liquidity, collection pages, wallet-native expectations, and why alternative wedges need clearer utility.
- **Gumroad / Patreon:** creator-first checkout, memberships, and gated content.
- **Eventbrite / Shotgun / DICE:** event ticketing and attendee flows.
- **POAP-style experiences:** attendance proof and post-event memory, adapted to Solana.
- **Spotify/Bandcamp/SoundCloud patterns:** music discovery, creator pages, and bonus content drops.
- **YouTube/Memberful/Substack patterns:** memberships and gated media.
- **Sketchfab:** 3D viewer as the center of an asset page.
- **Fab / Unreal Marketplace:** professional metadata, compatibility, support expectations.
- **BOOTH / Jinxxy:** avatar-drop culture and creator storefronts.
- **MyMiniFactory / Printables / Cults:** STL details, printability notes, personal/commercial licenses.

See [`references/site-ux-patterns.md`](references/site-ux-patterns.md).

## Cybersecurity baseline

Cybersecurity is treated as product quality, not as an afterthought.

The skill adds alerts for:

- untrusted creator uploads;
- malware in ZIPs, scripts, plugins, media files, and executable-looking files;
- private originals vs public previews;
- signed URL expiration;
- server-side authorization for downloads, streams, and gated content;
- webhook verification;
- XSS in comments, bios, and descriptions;
- fake creator/brand/venue profiles;
- payout-change phishing;
- QR/ticket replay and fake redemption;
- service-role keys exposed in frontend code.

See [`skill/security-threat-model.md`](skill/security-threat-model.md) and [`rules/cybersecurity-baseline.md`](rules/cybersecurity-baseline.md).

## Hackathon use cases

This skill is designed to help teams ship credible hackathon demos quickly.

Strong hackathon directions:

- NFT ticketing for university or community events;
- proof-of-attendance with real post-event perks;
- music or video drop with protected bonus content;
- local business coupon/pass with Solana proof;
- creator membership with normal checkout and optional wallet receipt;
- certificate/credential issuance for workshops, courses, or hackathons;
- media licensing marketplace for photographers, designers, musicians, or 3D artists.

A good hackathon demo should show one complete journey:

```text
Landing → Claim/Buy → Access/Receipt → Real-world benefit → Verification → Admin view
```

## Validation

Run:

```bash
python3 scripts/validate.py
```

Expected output:

```text
OK: validated 34 required files
```

## Bounty submission

The Superteam Earn submission draft lives in:

[`docs/SUBMISSION.md`](docs/SUBMISSION.md)

Short submission description:

> A practical Solana AI Kit skill for founders designing Web2.5 media, NFT utility, and digital asset marketplaces: clear user UX, creator/partner onboarding, license/access rules, protected delivery, cybersecurity checks, marketplace metrics, hackathon demos, and minimal Solana receipt/NFT architecture.

## Safety notes

This skill does not provide legal advice. It helps founders organize licensing, IP, access, ticketing, credential, and marketplace risk questions so counsel and operators can review them properly.

This skill does not claim Solana receipts or NFTs prevent piracy, fraud, or ticket abuse by themselves. Proof helps; product security still depends on private storage, authorization, signed URLs, redemption checks, logs, and account security.

This skill does not recommend forcing wallet-first flows. For early marketplaces and real-world utility apps, wallets should be optional unless the target audience already expects them.

## License

MIT — see [`LICENSE`](LICENSE).
