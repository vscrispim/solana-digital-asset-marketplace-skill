# Solana Digital Asset Marketplace Skill

> A Solana AI Kit skill for founders building Web2.5 marketplaces for digital assets: 3D models, avatar drops, STL files, game assets, design packs, and other creator-owned files that need clear licensing, protected delivery, creator onboarding, marketplace metrics, and Solana receipts.

Built for the **Superteam Brasil Solana AI Kit Skills Bounty**.

## Quick summary

Most early marketplace mistakes are not smart contract mistakes. They are product, trust, licensing, delivery, creator-ops, and UX mistakes.

This skill helps an AI agent guide a founder through those decisions in a practical way:

- choose a narrow marketplace wedge;
- keep checkout familiar instead of wallet-first;
- define license tiers in plain language;
- protect paid file delivery;
- decide what belongs on Solana and what stays off-chain;
- onboard creators without creating IP chaos;
- add cybersecurity checks before real buyers and files are at risk;
- prepare a demo, data room, and funding narrative.

**Core principle:** Web2 UX first. Solana proof layer second. Marketplace automation last.

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
- [Validation](#validation)
- [Bounty submission](#bounty-submission)
- [Safety notes](#safety-notes)

## Why this belongs in Solana AI Kit

A lot of Solana founder work is not only writing programs. Builders also need to make hard product decisions:

- What should the buyer see?
- Should the wallet be optional?
- What should be recorded on-chain?
- How should files be delivered after purchase?
- What license did the buyer actually receive?
- How do we prevent fake creators, leaked files, and unsafe uploads?

Digital asset marketplaces are a strong fit for Solana when the chain is used as a quiet proof layer:

- receipt/provenance for purchases;
- license hash anchoring;
- creator payout history;
- optional wallet-linked ownership;
- future royalties or tokenized ownership only after demand is proven.

The buyer should not need to understand crypto to buy a file. The founder should still be able to use Solana to make ownership, receipts, and marketplace history more trustworthy.

## Who should use it

Use this skill when a founder or agent is working on:

- 3D model marketplaces;
- VRChat / VTuber avatar drops;
- STL premium printables;
- indie game asset packs;
- archviz or product visualization assets;
- creator storefronts with license tiers;
- protected file delivery;
- Solana-backed receipts or provenance;
- funding demos for Web2.5 creator marketplaces.

Do **not** use it as:

- legal advice;
- financial advice;
- a smart contract audit;
- a DeFi position-management tool;
- a generic NFT marketplace hype generator.

## What is included

### Main skill modules

- [`skill/SKILL.md`](skill/SKILL.md) — entry point and progressive router.
- [`skill/marketplace-wedge.md`](skill/marketplace-wedge.md) — choose the first niche and avoid generic marketplace scope.
- [`skill/web2-5-ux.md`](skill/web2-5-ux.md) — design a familiar buyer flow with optional Web3 features.
- [`skill/license-models.md`](skill/license-models.md) — turn vague file sales into clear license tiers.
- [`skill/protected-delivery.md`](skill/protected-delivery.md) — design private files, signed URLs, access logs, and updates.
- [`skill/solana-receipts.md`](skill/solana-receipts.md) — decide what to hash, anchor, and expose on Solana.
- [`skill/creator-onboarding.md`](skill/creator-onboarding.md) — onboard creators safely and humanly.
- [`skill/ip-risk-checklist.md`](skill/ip-risk-checklist.md) — catch obvious licensing and provenance risks.
- [`skill/metrics-and-funnel.md`](skill/metrics-and-funnel.md) — measure whether the marketplace is actually working.
- [`skill/funding-readiness.md`](skill/funding-readiness.md) — prepare demo, data room, and investor narrative.
- [`skill/security-threat-model.md`](skill/security-threat-model.md) — add practical cybersecurity controls.

### Supporting files

- [`templates/`](templates/) — creator intake, license brief, risk register, demo script, investor one-pager.
- [`commands/`](commands/) — reusable workflow commands.
- [`agents/`](agents/) — focused specialist agent specs.
- [`rules/`](rules/) — IP/licensing, wallet UX, and cybersecurity defaults.
- [`references/`](references/) — concrete site and UX patterns.
- [`examples/`](examples/) — example marketplace use cases.
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
Use the solana-digital-asset-marketplace skill to design a Web2.5 marketplace for VRChat avatar assets. I want checkout to feel normal, but I want Solana receipts and protected file delivery.
```

```text
Use this skill to generate a creator intake checklist, asset license brief, and first-week validation plan for a curated 3D model marketplace.
```

```text
Review this marketplace idea and tell me what should be manual, what should be automated later, what should be recorded on Solana, and what cybersecurity alerts we need before beta.
```

## Example output direction

If a founder starts with:

> I want to build a marketplace for all 3D assets on Solana.

The skill should push toward a narrower wedge:

- VRChat / VTuber avatar drops;
- STL miniatures and printable collectibles;
- indie game props;
- archviz or product visualization packs.

Then it should produce a practical plan:

- target creator profile;
- buyer flow;
- license tiers;
- protected delivery model;
- Solana receipt scope;
- creator onboarding checklist;
- cybersecurity alerts;
- validation metrics.

## UX references

The skill uses concrete marketplace references so outputs do not become generic:

- **Sketchfab:** 3D viewer as the center of the asset page.
- **Gumroad:** simple creator-first checkout.
- **Fab / Unreal Marketplace:** professional metadata, compatibility, support expectations.
- **BOOTH / Jinxxy:** avatar-drop culture and creator storefronts.
- **MyMiniFactory / Printables / Cults:** STL details, printability notes, personal/commercial licenses.
- **ArtStation / CGTrader / TurboSquid:** professional asset formats and commercial-use expectations.

See [`references/site-ux-patterns.md`](references/site-ux-patterns.md).

## Cybersecurity baseline

Cybersecurity is treated as product quality, not as an afterthought.

The skill adds alerts for:

- untrusted creator uploads;
- malware in ZIPs, scripts, plugins, and executable-looking files;
- private originals vs public previews;
- signed URL expiration;
- server-side authorization for downloads;
- webhook verification;
- XSS in comments, bios, and asset descriptions;
- fake creator profiles;
- payout-change phishing;
- service-role keys exposed in frontend code.

See [`skill/security-threat-model.md`](skill/security-threat-model.md) and [`rules/cybersecurity-baseline.md`](rules/cybersecurity-baseline.md).

## Validation

Run:

```bash
python3 scripts/validate.py
```

Current validation target checks:

- required files exist;
- `skill/SKILL.md` has frontmatter;
- README has the required GitHub-facing sections;
- routed module references resolve.

Expected output:

```text
OK: validated 31 required files
```

## Bounty submission

The Superteam Earn submission draft lives in:

[`docs/SUBMISSION.md`](docs/SUBMISSION.md)

Short submission description:

> A practical Solana AI Kit skill for founders designing Web2.5 digital asset marketplaces: clear buyer UX, creator onboarding, license tiers, protected delivery, cybersecurity checks, marketplace metrics, and minimal Solana receipt architecture.

## Safety notes

This skill does not provide legal advice. It helps founders organize licensing, IP, and marketplace risk questions so counsel and operators can review them properly.

This skill does not claim Solana receipts prevent piracy. A receipt can prove what was issued; file protection still depends on private storage, authorization, signed URLs, logs, and account security.

This skill does not recommend forcing wallet-first flows. For early marketplaces, wallets should be optional unless the target audience already expects them.

## License

MIT — see [`LICENSE`](LICENSE).
