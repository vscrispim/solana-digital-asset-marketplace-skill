# React seeded marketplace components

This repo now includes a small React pattern for turning the skill's marketplace strategy into versionable UI without asking an agent to rewrite the same long page every time.

## Goal

Agents are useful for product thinking, but repeated generation of full landing pages wastes tokens and makes results harder to compare. The seeded component system separates:

- **stable UI structure:** reusable React sections;
- **marketplace-specific decisions:** compact seed objects;
- **customization:** small slots such as vertical, audience, license tiers, proof strategy, and security notes.

This lets a founder or agent create different marketplaces by changing a seed instead of re-prompting every component.

## Files

- [`../templates/react-marketplace-seeds.ts`](../templates/react-marketplace-seeds.ts) — typed seed data for marketplace variants.
- [`../components/SeededMarketplacePage.tsx`](../components/SeededMarketplacePage.tsx) — React/Tailwind component kit that renders a marketplace page from a seed.

## Current seeds

### `threedCcConcierge`

Best default for the Solana grant/story: a curated 3D asset marketplace with Web2 checkout, protected delivery, human-readable licenses, and Solana receipt/license hashes.

### `musicDropMembership`

Adapts the same structure to artist drops, stems, member extras, and optional fan proof.

### `universityHackathonTicket`

Adapts the structure to event registration, QR check-in, attendance proof, and student-safe credentials.

## Minimal usage

```tsx
import { SeededMarketplacePage } from './components/SeededMarketplacePage';

export default function Page() {
  return <SeededMarketplacePage seedId="threedCcConcierge" />;
}
```

## Compact mode for token savings

```tsx
<SeededMarketplacePage seedId="threedCcConcierge" compact />
```

`compact` renders only the sections listed in `seed.agentTokenHints.includeSectionsOnly`. This is useful when an agent needs to show a useful prototype direction without spending tokens on every secondary section.

## How agents should use it

When a user asks for a marketplace variation:

1. Pick the closest existing seed.
2. Change only the seed slots that matter.
3. Keep stable sections intact unless the platform truly needs a new interaction.
4. Use `compact` for early drafts and full mode for demo/review pages.
5. Do not repeat generic Solana education in every output; let the seed's `solanaProof` fields carry the exact proof strategy.

## Seed contract

Each seed includes:

- `vertical` and `audience` — narrows the marketplace.
- `buyerPromise` and `creatorPromise` — keeps the page outcome-focused.
- `hero` — short high-level story.
- `featuredAsset` — sample listing structure.
- `sections` — full page order.
- `licenseTiers` — concrete rights and cautions.
- `solanaProof` — what belongs on-chain and when the buyer sees it.
- `protectedDelivery` — web security and entitlement assumptions.
- `creatorOps` — manual operations before scale.
- `securityNotes` — cybersecurity alerts that must not be dropped.
- `metrics` — behavior to measure after launch.
- `agentTokenHints` — what to include, avoid, and customize.

## Versioning pattern

Use this naming convention for new seeds:

```text
<vertical>-<wedge>-<stage>
```

Examples:

- `3d-avatar-drop-beta`
- `stl-printables-concierge`
- `music-stems-membership-mvp`
- `hackathon-credential-pilot`

Commit seed changes separately from component changes whenever possible:

- `feat(seeds): add stl printables marketplace seed`
- `feat(components): add marketplace receipt panel`
- `docs: explain seeded marketplace workflow`

## Why this reduces tokens

Instead of asking an agent to generate a new page from scratch, the prompt can be short:

```text
Use the seeded marketplace React system. Start from threedCcConcierge. Adapt it to STL printables for architecture students. Keep Web2 checkout, Solana receipt hash, protected delivery, and cybersecurity notes. Output only the changed seed fields.
```

The agent only returns a small diff-like seed update. The React component kit turns that into a full page.

## Customization without generic outputs

The system still allows different results because each seed controls:

- section inclusion and order;
- marketplace vertical;
- proof type;
- license/access model;
- preview format;
- security emphasis;
- creator operations;
- metrics.

So two marketplaces can share the same component vocabulary while still feeling specific to 3D assets, music drops, tickets, credentials, or memberships.

## Integration notes

The component is intentionally framework-light:

- it expects React;
- styling uses Tailwind utility classes;
- preview slots can be replaced with `model-viewer`, video, audio, QR, credential, or custom embeds;
- no Solana client dependency is imported in the component because this is a product/demo layer, not a wallet or program implementation.

Keep sensitive data, signed URLs, webhook validation, and receipt creation server-side. The component should display state, not unlock protected files from the client.
