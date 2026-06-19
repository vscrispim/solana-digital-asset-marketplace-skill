# Site and UX Patterns for Digital Asset Marketplaces

Use these references as product patterns, not as things to copy blindly. The goal is to make generated outputs concrete and recognizable.

## Reference sites and what to learn

### Sketchfab

Use for:

- strong 3D preview as the center of the asset page;
- orbit controls and embedded viewer expectations;
- clear model metadata;
- creator profile as trust layer.

Do not copy:

- marketplace breadth too early;
- generic asset pages without a narrow wedge.

### Fab / Unreal Marketplace

Use for:

- professional asset categories;
- compatibility notes;
- engine/version fields;
- ratings and support expectations.

Do not copy:

- heavy enterprise marketplace structure for a concierge MVP.

### Gumroad

Use for:

- simple checkout mental model;
- creator-first storefront feel;
- plain pricing;
- low-friction purchasing.

Do not copy:

- weak license/provenance handling for complex digital assets.

### BOOTH / Jinxxy

Use for:

- avatar and VTuber asset culture;
- community-specific browsing;
- creator drops;
- style-first merchandising.

Do not copy:

- unclear license handoff or overly platform-specific assumptions.

### MyMiniFactory / Printables Store / Cults

Use for:

- STL/printable details;
- printability notes;
- photos/renders of finished physical output;
- personal vs commercial license distinctions.

Do not copy:

- free-file discovery patterns if the product is premium and curated.

### ArtStation Marketplace / CGTrader / TurboSquid

Use for:

- professional buyer expectations;
- format lists;
- polygon/material/texture metadata;
- commercial-use seriousness.

Do not copy:

- cluttered pages with too many low-quality assets.

## UX page examples to generate

### Home page

Must answer:

- What kind of assets are sold here?
- Who are they for?
- Why is this safer/better than a normal download link?
- What does Solana add without making checkout weird?

Useful sections:

- hero with one strong asset preview;
- “How buying works” in 3 steps;
- featured creator drop;
- license/protected delivery explanation;
- creator CTA;
- buyer/tester CTA.

### Explore/catalog page

Must include:

- category filters;
- license type filter;
- format filter: GLB, FBX, BLEND, STL, Unity, Unreal;
- price/tier;
- creator badge;
- compatibility notes;
- “verified license” signal.

Avoid:

- endless generic cards;
- crypto badges that do not help the buyer choose.

### Asset detail page

Must include:

- 3D preview or rich poster;
- title and creator;
- price;
- license tier selector;
- included files;
- compatibility;
- update history;
- support expectations;
- security note for protected downloads;
- receipt/license preview;
- creator comments or Q&A.

### Checkout / unlock page

Must include:

- asset summary;
- chosen license;
- buyer email/account;
- payment status;
- human-readable receipt;
- protected download after confirmation;
- optional Solana proof link.

Security warning:

Do not render download links until server-side payment/order/license checks pass.

### Creator onboarding page

Must include:

- who should apply;
- what files are needed;
- ownership declaration;
- licensing choices;
- payout details;
- review timeline;
- security warning about suspicious files and impersonation.

## Good UX copy examples

Instead of:

> Unlock decentralized digital ownership.

Use:

> Buy the asset, get a clear license, and download the files from a protected link. If you want proof later, the receipt can be verified on Solana.

Instead of:

> NFT-powered marketplace for creators.

Use:

> A curated marketplace for creator-owned 3D assets with normal checkout and verifiable receipts.

Instead of:

> Trustless asset delivery.

Use:

> Downloads are tied to your order. The receipt proves what license was issued, but the files still stay in protected storage.

## Output rule

When generating product plans, include at least one concrete page flow:

`Home → Explore → Asset Detail → License Selection → Checkout → Receipt → Protected Download → Support/Update`
