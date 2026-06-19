# Site and UX Patterns for Digital Media, NFT Utility, and Asset Marketplaces

Use these references as product patterns, not as things to copy blindly. The goal is to make generated outputs concrete and recognizable.

## Reference sites and what to learn

### Magic Eden

Use for:

- NFT collection pages;
- wallet-native marketplace expectations;
- floor/collection mechanics;
- creator and collection identity;
- why liquidity matters in broad NFT markets.

Do not copy blindly:

- generic collection browsing if the product needs real-world utility;
- wallet-first assumptions for mainstream users;
- speculation-first UX when the project needs tickets, media, credentials, or benefits.

### Gumroad / Patreon / Memberful

Use for:

- creator-first checkout;
- memberships;
- gated content;
- simple product pages;
- buyer emails/accounts before wallet complexity.

### Eventbrite / DICE / Shotgun

Use for:

- event discovery;
- ticket purchase;
- QR redemption;
- attendee communication;
- post-event follow-up.

### POAP-style attendance experiences

Use for:

- proof of attendance;
- memory/identity layer;
- post-event community perks;
- shareable credential moments.

Adapt to Solana instead of copying Ethereum-specific assumptions.

### Spotify / Bandcamp / SoundCloud

Use for:

- music discovery;
- artist pages;
- album/drop framing;
- bonus content and fan support.

### YouTube Memberships / Substack

Use for:

- gated media;
- recurring creator relationship;
- member-only posts, videos, or comments.

### Sketchfab

Use for:

- strong 3D preview as the center of the asset page;
- orbit controls and embedded viewer expectations;
- clear model metadata;
- creator profile as trust layer.

### Fab / Unreal Marketplace

Use for:

- professional asset categories;
- compatibility notes;
- engine/version fields;
- ratings and support expectations.

### BOOTH / Jinxxy

Use for:

- avatar and VTuber asset culture;
- community-specific browsing;
- creator drops;
- style-first merchandising.

### MyMiniFactory / Printables Store / Cults

Use for:

- STL/printable details;
- printability notes;
- photos/renders of finished physical output;
- personal vs commercial license distinctions.

## UX page examples to generate

### Home page

Must answer:

- What media, access, ticket, credential, benefit, or asset is offered?
- Who is it for?
- Why is this better than a normal link or generic NFT marketplace?
- What does Solana add without making checkout weird?

Useful sections:

- hero with one real use case;
- “How it works” in 3 steps;
- featured drop/pass/event/credential;
- license/access/protected delivery explanation;
- creator/partner CTA;
- buyer/fan/attendee/student CTA.

### Explore/catalog page

Must include whichever filters fit the wedge:

- media type: music, video, photo, template, 3D, ticket, credential, pass;
- access type: public, paid, member-only, token-gated, attendance-gated;
- license type;
- event date or redemption deadline;
- creator/partner verification;
- “verified receipt/pass/license” signal.

### Detail page

Must include:

- title and creator/partner;
- media preview or event/benefit summary;
- price or claim rule;
- access/license/ticket tier selector;
- included files or benefits;
- redemption/update/support expectations;
- security note for protected downloads or QR redemption;
- receipt/pass/NFT preview;
- comments/Q&A when useful.

### Checkout / claim / unlock page

Must include:

- item/pass/ticket summary;
- chosen access or license;
- buyer email/account;
- payment or claim status;
- human-readable receipt;
- protected download, gated content, QR code, or credential after confirmation;
- optional Solana proof link.

Security warning:

Do not render download links, gated streams, QR tickets, or private benefits until server-side payment/order/access checks pass.

### Creator/partner onboarding page

Must include:

- who should apply;
- what media/files/event/benefit details are needed;
- ownership or authorization declaration;
- access and redemption rules;
- payout details;
- review timeline;
- security warning about suspicious files, fake partners, payout changes, and impersonation.

## Good UX copy examples

Instead of:

> Unlock decentralized digital ownership.

Use:

> Buy the drop, get the content or benefit, and keep a receipt that can be verified on Solana.

Instead of:

> NFT-powered marketplace for creators.

Use:

> A marketplace for creator-owned media, tickets, passes, and digital assets with normal checkout and optional Solana proof.

Instead of:

> Trustless access.

Use:

> Access is tied to your order or pass. The proof can be verified, but private content still stays behind secure delivery.

## Output rule

When generating product plans, include at least one concrete page flow:

`Landing → Explore/Drop/Event → Detail → Access/License/Ticket Selection → Checkout/Claim → Receipt/Pass → Protected Access/Redemption → Support/Update`
