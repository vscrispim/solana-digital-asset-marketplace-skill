import React from 'react';
import type { MarketplaceSeed } from '../templates/react-marketplace-seeds';
import { pickMarketplaceSeed } from '../templates/react-marketplace-seeds';

type Props = {
  seed?: MarketplaceSeed;
  seedId?: Parameters<typeof pickMarketplaceSeed>[0];
  compact?: boolean;
  className?: string;
};

const sectionShell = 'rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm shadow-slate-200/70 backdrop-blur';
const eyebrow = 'text-xs font-semibold uppercase tracking-[0.28em] text-violet-600';
const muted = 'text-sm leading-6 text-slate-600';

export function SeededMarketplacePage({ seed, seedId = 'threedCcConcierge', compact = false, className = '' }: Props) {
  const data = seed ?? pickMarketplaceSeed(seedId);
  const sections = compact ? data.agentTokenHints.includeSectionsOnly : data.sections;

  return (
    <main className={`min-h-screen bg-[radial-gradient(circle_at_top_left,#ede9fe,transparent_32%),linear-gradient(180deg,#f8fafc,#eef2ff)] text-slate-950 ${className}`}>
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        {sections.includes('hero') && <MarketplaceHero seed={data} />}
        {sections.includes('proofStrip') && <ProofStrip seed={data} />}
        {sections.includes('featuredAsset') && <FeaturedAssetCard seed={data} />}
        {sections.includes('licenseTiers') && <LicenseTierGrid seed={data} />}
        {sections.includes('solanaReceipt') && <SolanaReceiptPanel seed={data} />}
        {sections.includes('protectedDelivery') && <ChecklistPanel title="Protected delivery" items={data.protectedDelivery} />}
        {sections.includes('creatorOps') && <ChecklistPanel title="Creator ops before scale" items={data.creatorOps} />}
        {sections.includes('securityNotes') && <ChecklistPanel title="Cybersecurity alerts" items={data.securityNotes} tone="danger" />}
        {sections.includes('metrics') && <MetricsPanel seed={data} />}
      </div>
    </main>
  );
}

export function MarketplaceHero({ seed }: { seed: MarketplaceSeed }) {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-xl shadow-violet-200/40 backdrop-blur md:p-10">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-6">
          <p className={eyebrow}>{seed.hero.eyebrow}</p>
          <div className="space-y-4">
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {seed.hero.headline}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-700">{seed.hero.subheadline}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a className="rounded-2xl bg-slate-950 px-5 py-3 text-center text-sm font-bold text-white shadow-lg shadow-slate-400/40" href="#primary-action">
              {seed.primaryAction}
            </a>
            <a className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-center text-sm font-bold text-slate-900" href="#license-tiers">
              {seed.secondaryAction}
            </a>
          </div>
        </div>
        <div className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-2xl shadow-slate-400/40">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">Seed</p>
          <h2 className="mt-3 text-2xl font-black">{seed.name}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">Audience: {seed.audience}</p>
          <div className="mt-5 grid gap-3">
            {seed.trustStack.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProofStrip({ seed }: { seed: MarketplaceSeed }) {
  return (
    <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {seed.trustStack.map((item, index) => (
        <div key={item} className="rounded-3xl border border-white/80 bg-white/80 p-5 shadow-sm">
          <p className="text-xs font-black text-violet-600">0{index + 1}</p>
          <p className="mt-2 font-bold text-slate-950">{item}</p>
        </div>
      ))}
    </section>
  );
}

export function FeaturedAssetCard({ seed }: { seed: MarketplaceSeed }) {
  const asset = seed.featuredAsset;
  return (
    <section className={`${sectionShell} grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center`}>
      <div className="flex aspect-[4/3] items-center justify-center rounded-[1.5rem] border border-dashed border-violet-300 bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900 text-center text-white">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-violet-200">Preview slot</p>
          <p className="mt-3 text-2xl font-black">3D / media viewer</p>
          <p className="mt-2 text-sm text-slate-300">Replace with model-viewer, video, audio, ticket QR, or credential preview.</p>
        </div>
      </div>
      <div className="space-y-4">
        <p className={eyebrow}>Featured listing</p>
        <h2 className="text-3xl font-black tracking-tight">{asset.title}</h2>
        <p className={muted}>Creator: {asset.creator}</p>
        <dl className="grid gap-3 sm:grid-cols-2">
          <Info label="Format" value={asset.format} />
          <Info label="License" value={asset.license} />
          <Info label="Price" value={asset.price} />
          <Info label="Proof" value={asset.proofLabel} />
        </dl>
      </div>
    </section>
  );
}

export function LicenseTierGrid({ seed }: { seed: MarketplaceSeed }) {
  return (
    <section id="license-tiers" className="space-y-4">
      <div>
        <p className={eyebrow}>License / access tiers</p>
        <h2 className="mt-2 text-3xl font-black tracking-tight">Make the buyer understand what they actually get.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {seed.licenseTiers.map((tier) => (
          <article key={tier.name} className={sectionShell}>
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-black">{tier.name}</h3>
              <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-black text-violet-700">{tier.price}</span>
            </div>
            <ul className="mt-5 space-y-2">
              {tier.rights.map((right) => (
                <li key={right} className={muted}>✓ {right}</li>
              ))}
            </ul>
            <p className="mt-5 rounded-2xl bg-amber-50 p-3 text-xs font-semibold leading-5 text-amber-900">{tier.caution}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SolanaReceiptPanel({ seed }: { seed: MarketplaceSeed }) {
  return (
    <section className={`${sectionShell} grid gap-5 md:grid-cols-[0.7fr_1.3fr]`}>
      <div>
        <p className={eyebrow}>Solana proof layer</p>
        <h2 className="mt-2 text-3xl font-black tracking-tight">Quiet proof, not crypto theater.</h2>
      </div>
      <div className="space-y-4">
        <Info label="Mint NFT by default?" value={seed.solanaProof.shouldMintNft ? 'Yes, if it represents real access.' : 'No. Start with receipt/license hash first.'} />
        <Info label="Anchor" value={seed.solanaProof.anchor} />
        <Info label="Buyer UX" value={seed.solanaProof.hideFromBuyerUntil} />
      </div>
    </section>
  );
}

export function ChecklistPanel({ title, items, tone = 'neutral' }: { title: string; items: string[]; tone?: 'neutral' | 'danger' }) {
  return (
    <section className={sectionShell}>
      <h2 className="text-2xl font-black tracking-tight">{title}</h2>
      <ul className="mt-5 grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <li key={item} className={`rounded-2xl p-4 text-sm leading-6 ${tone === 'danger' ? 'bg-rose-50 text-rose-950' : 'bg-slate-50 text-slate-700'}`}>
            {tone === 'danger' ? '!' : '✓'} {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function MetricsPanel({ seed }: { seed: MarketplaceSeed }) {
  return (
    <section className={sectionShell}>
      <p className={eyebrow}>Versionable metrics</p>
      <h2 className="mt-2 text-3xl font-black tracking-tight">Judge the marketplace by behavior, not by how polished the mockup feels.</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {seed.metrics.map((metric) => (
          <div key={metric} className="rounded-2xl bg-slate-950 p-4 text-sm font-bold text-white">
            {metric}
          </div>
        ))}
      </div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <dt className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">{label}</dt>
      <dd className="mt-2 text-sm font-semibold leading-6 text-slate-900">{value}</dd>
    </div>
  );
}
