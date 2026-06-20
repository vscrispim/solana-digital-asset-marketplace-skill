export type MarketplaceVertical =
  | '3d-assets'
  | 'music-drop'
  | 'event-ticketing'
  | 'education-credentials'
  | 'creator-membership';

export type MarketplaceSeed = {
  id: string;
  vertical: MarketplaceVertical;
  name: string;
  audience: string;
  buyerPromise: string;
  creatorPromise: string;
  primaryAction: string;
  secondaryAction: string;
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
  };
  trustStack: string[];
  featuredAsset: {
    title: string;
    creator: string;
    format: string;
    license: string;
    price: string;
    proofLabel: string;
  };
  sections: Array<
    | 'hero'
    | 'proofStrip'
    | 'featuredAsset'
    | 'licenseTiers'
    | 'solanaReceipt'
    | 'protectedDelivery'
    | 'creatorOps'
    | 'securityNotes'
    | 'metrics'
  >;
  licenseTiers: Array<{
    name: string;
    price: string;
    rights: string[];
    caution: string;
  }>;
  solanaProof: {
    shouldMintNft: boolean;
    anchor: string;
    hideFromBuyerUntil: string;
  };
  protectedDelivery: string[];
  creatorOps: string[];
  securityNotes: string[];
  metrics: string[];
  agentTokenHints: {
    includeSectionsOnly: string[];
    avoidRepeating: string[];
    customizationSlots: string[];
  };
};

export const MARKETPLACE_SEEDS: Record<string, MarketplaceSeed> = {
  threedCcConcierge: {
    id: 'threed-cc-concierge',
    vertical: '3d-assets',
    name: 'Threed.CC concierge 3D marketplace',
    audience: 'independent 3D creators, avatar artists, game-asset buyers, and small studios',
    buyerPromise:
      'Buy premium 3D assets with browser preview, clear license terms, protected downloads, and an optional Solana-backed receipt.',
    creatorPromise:
      'Launch curated 3D drops without building a store, while preserving proof of license, provenance, and future royalty logic.',
    primaryAction: 'Request beta access',
    secondaryAction: 'Review a sample license',
    hero: {
      eyebrow: 'Web2 checkout. Solana proof layer. 3D-first trust.',
      headline: 'Premium 3D assets with receipts buyers can verify later.',
      subheadline:
        'Start as a curated marketplace: preview the model, choose the license, pay normally, download securely, and keep a verifiable proof trail without forcing wallet-first UX.',
    },
    trustStack: ['Interactive preview', 'Human-readable license', 'Protected file delivery', 'Receipt hash on Solana'],
    featuredAsset: {
      title: 'Cyberpunk Modular Alley Kit',
      creator: 'Studio placeholder / replace with onboarded creator',
      format: 'GLB, FBX, Blender source, texture pack',
      license: 'Indie commercial license up to agreed revenue cap',
      price: 'US$ 49',
      proofLabel: 'License hash anchored after purchase',
    },
    sections: [
      'hero',
      'proofStrip',
      'featuredAsset',
      'licenseTiers',
      'solanaReceipt',
      'protectedDelivery',
      'creatorOps',
      'securityNotes',
      'metrics',
    ],
    licenseTiers: [
      {
        name: 'Personal / learning',
        price: 'US$ 19',
        rights: ['Portfolio renders', 'non-commercial prototypes', 'no resale or redistribution'],
        caution: 'Good for students and hobbyists, not production clients.',
      },
      {
        name: 'Indie commercial',
        price: 'US$ 49',
        rights: ['Small studio/game use', 'client work under revenue cap', 'attribution rules defined by creator'],
        caution: 'Needs clear revenue cap and seat/team limit.',
      },
      {
        name: 'Studio extended',
        price: 'Quote',
        rights: ['Larger production use', 'multi-seat access', 'custom support/update agreement'],
        caution: 'Route to manual review before accepting payment.',
      },
    ],
    solanaProof: {
      shouldMintNft: false,
      anchor: 'Hash the receipt, license version, asset version, buyer account id, and creator id; never put private files or personal data on-chain.',
      hideFromBuyerUntil:
        'Show only after checkout as “verification details”; do not lead with wallet connect in the landing page.',
    },
    protectedDelivery: [
      'Store source files in private object storage, not the public web bundle.',
      'Issue short-lived signed URLs after payment and account verification.',
      'Log download events by receipt id, user id, asset version, timestamp, and IP/device risk signal.',
      'Version every asset update so the receipt references exactly what was sold.',
    ],
    creatorOps: [
      'Collect ownership declaration and source-file proof before publishing.',
      'Manually review 10 creator drops before allowing self-service uploads.',
      'Require preview screenshots, polycount, file formats, engine compatibility, and license notes.',
      'Keep support expectations visible: update policy, refund limits, and commercial-use questions.',
    ],
    securityNotes: [
      'Scan uploads and reject executable payloads hidden in archives.',
      'Validate checkout webhooks server-side; do not unlock files from client events.',
      'Watermark public previews but do not claim watermarking prevents piracy.',
      'Keep admin actions audited because one compromised admin can leak paid assets.',
    ],
    metrics: [
      'creator replies and accepted drops',
      'asset-page view to checkout-start rate',
      'checkout completion rate',
      'successful protected downloads',
      'license/support questions per purchase',
    ],
    agentTokenHints: {
      includeSectionsOnly: ['hero', 'featuredAsset', 'licenseTiers', 'protectedDelivery', 'solanaReceipt'],
      avoidRepeating: ['generic NFT claims', 'wallet-first explanations', 'long Solana education blocks'],
      customizationSlots: ['vertical', 'audience', 'license tiers', 'proof strategy', 'security notes'],
    },
  },
  musicDropMembership: {
    id: 'music-drop-membership',
    vertical: 'music-drop',
    name: 'Music drop with fan membership',
    audience: 'independent artists and fans buying stems, early tracks, and gated extras',
    buyerPromise: 'Buy the drop normally, unlock extras, and keep optional collectible proof of support.',
    creatorPromise: 'Sell releases, stems, and membership perks without turning the whole experience into crypto onboarding.',
    primaryAction: 'Join the drop list',
    secondaryAction: 'Preview member perks',
    hero: {
      eyebrow: 'Fan commerce first, collectible proof second.',
      headline: 'Drops that sell music, access, and memory — not confusion.',
      subheadline:
        'Use Solana for receipts, pass state, or collectible proof after fans understand the benefit.',
    },
    trustStack: ['Normal checkout', 'Gated bonus content', 'Optional wallet claim', 'Access logs'],
    featuredAsset: {
      title: 'EP drop + stems + listening room',
      creator: 'Independent artist',
      format: 'WAV, MP3, stems, private stream',
      license: 'Personal listening + separate creator/remix rights',
      price: 'US$ 12',
      proofLabel: 'Fan support receipt / optional pass',
    },
    sections: ['hero', 'proofStrip', 'featuredAsset', 'licenseTiers', 'protectedDelivery', 'securityNotes', 'metrics'],
    licenseTiers: [
      { name: 'Listener', price: 'US$ 12', rights: ['music files', 'bonus note', 'private stream'], caution: 'No remix or commercial reuse.' },
      { name: 'Remix pack', price: 'US$ 39', rights: ['stems', 'remix permission', 'credit rules'], caution: 'Needs clear release approval terms.' },
      { name: 'Member', price: 'US$ 9/mo', rights: ['monthly extras', 'early access', 'community room'], caution: 'Avoid promising perks the artist cannot maintain.' },
    ],
    solanaProof: {
      shouldMintNft: true,
      anchor: 'Mint or update a pass only after purchase/access exists off-chain.',
      hideFromBuyerUntil: 'After purchase, as an optional “claim proof” step.',
    },
    protectedDelivery: ['Private streams', 'signed download links', 'member entitlement checks'],
    creatorOps: ['Confirm ownership of masters/stems', 'define remix rights', 'prepare takedown flow'],
    securityNotes: ['Protect unreleased files', 'server-verify membership', 'rate-limit downloads'],
    metrics: ['drop conversion', 'member retention', 'bonus-content unlocks', 'support tickets'],
    agentTokenHints: {
      includeSectionsOnly: ['hero', 'licenseTiers', 'protectedDelivery', 'metrics'],
      avoidRepeating: ['3D model terms', 'complex royalty speculation'],
      customizationSlots: ['artist niche', 'perk cadence', 'proof type'],
    },
  },
  universityHackathonTicket: {
    id: 'university-hackathon-ticket',
    vertical: 'event-ticketing',
    name: 'University hackathon ticket and attendance proof',
    audience: 'students, campus organizers, sponsors, and hackathon mentors',
    buyerPromise: 'Register with a familiar event flow and receive attendance/project proof after participation.',
    creatorPromise: 'Give organizers a safer ticket, check-in, credential, and sponsor reporting flow.',
    primaryAction: 'Register interest',
    secondaryAction: 'See proof flow',
    hero: {
      eyebrow: 'Tickets and credentials without wallet-first friction.',
      headline: 'A hackathon pass students can use now and prove later.',
      subheadline:
        'Use normal registration for attendance, then anchor check-in, project submission, or certificate proof on Solana when it matters.',
    },
    trustStack: ['Registration', 'QR check-in', 'Attendance proof', 'Sponsor-safe metrics'],
    featuredAsset: {
      title: 'Solana University Builders campus pass',
      creator: 'Campus organizer',
      format: 'QR ticket + attendance credential',
      license: 'Non-transferable event access',
      price: 'Free / sponsor-funded',
      proofLabel: 'Attendance proof after check-in',
    },
    sections: ['hero', 'proofStrip', 'featuredAsset', 'solanaReceipt', 'securityNotes', 'metrics'],
    licenseTiers: [
      { name: 'Attendee', price: 'Free', rights: ['event access', 'attendance proof'], caution: 'Do not expose student personal data on-chain.' },
      { name: 'Builder', price: 'Free', rights: ['submission proof', 'mentor access'], caution: 'Project proof should not reveal private repo data.' },
      { name: 'Sponsor', price: 'Partner', rights: ['aggregate metrics', 'booth/check-in reporting'], caution: 'Only share consented and aggregated data.' },
    ],
    solanaProof: {
      shouldMintNft: false,
      anchor: 'Anchor attendance or certificate hashes; keep names, emails, and student IDs off-chain.',
      hideFromBuyerUntil: 'After check-in or certificate issuance.',
    },
    protectedDelivery: ['QR token rotation', 'server-side check-in validation', 'certificate PDF gated by account'],
    creatorOps: ['Campus approval', 'mentor schedule', 'sponsor reporting scope'],
    securityNotes: ['Prevent QR replay', 'avoid public PII', 'admin role separation'],
    metrics: ['registrations', 'check-ins', 'project submissions', 'mentor sessions', 'certificate claims'],
    agentTokenHints: {
      includeSectionsOnly: ['hero', 'solanaReceipt', 'securityNotes', 'metrics'],
      avoidRepeating: ['paid asset download logic'],
      customizationSlots: ['campus', 'event type', 'proof criteria'],
    },
  },
};

export function pickMarketplaceSeed(seedId: keyof typeof MARKETPLACE_SEEDS = 'threedCcConcierge') {
  return MARKETPLACE_SEEDS[seedId] ?? MARKETPLACE_SEEDS.threedCcConcierge;
}

export function compressSeedForAgent(seed: MarketplaceSeed) {
  return {
    id: seed.id,
    vertical: seed.vertical,
    audience: seed.audience,
    promise: seed.buyerPromise,
    sections: seed.agentTokenHints.includeSectionsOnly,
    slots: seed.agentTokenHints.customizationSlots,
    avoid: seed.agentTokenHints.avoidRepeating,
  };
}
