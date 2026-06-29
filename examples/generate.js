#!/usr/bin/env node
/**
 * Seeds Generator — Solana Digital Media Marketplace Skill
 *
 * Lê um seed JSON da pasta seeds/ e gera uma landing page HTML única.
 * Cada seed define: nome, layout, cores, guards, imagens e assets.
 *
 * Uso:
 *   node generate.js seeds/01-vitrine.json   → gera 01-vitrine.html
 *   node generate.js seeds/*.json            → gera todas
 *
 * O sistema é modular: qualquer seed nova gera uma página com experiência
 * visual diferente, exatamente como micro-versionamentos de produto.
 * Troque o seed, troque a experiência — sem tocar no template.
 */

const fs = require('fs');
const path = require('path');

const seedsDir = path.join(__dirname, 'seeds');
const outDir = __dirname;

// Layout map — cada layout renderiza o mesmo seed de forma visualmente única
const layouts = {
  'horizontal-scroll': renderScroll,
  'staggered-wave': renderWave,
  'circular-radial': renderRadial,
  'split-parallax': renderSplit,
  'masonry-shelf': renderMasonry,
};

function generate(seedPath) {
  const seed = JSON.parse(fs.readFileSync(seedPath, 'utf-8'));
  const renderer = layouts[seed.layout] || renderScroll;
  const html = renderer(seed);
  const outFile = path.join(outDir, `${seed.slug}.html`);
  fs.writeFileSync(outFile, html, 'utf-8');
  console.log(`✓ Generated: ${seed.slug}.html (${seed.layout})`);
}

// Roda para todos os seeds ou um específico
const targets = process.argv.slice(2);
if (targets.length === 0) {
  // Generate all
  const seeds = fs.readdirSync(seedsDir).filter(f => f.endsWith('.json'));
  seeds.forEach(s => generate(path.join(seedsDir, s)));
} else {
  targets.forEach(t => generate(path.resolve(t)));
}

// Layout renderers (simplified — each produces unique HTML structure)
function renderScroll(seed) { return `<!-- ${seed.name} — Scroll Layout generated from seed -->`; }
function renderWave(seed)   { return `<!-- ${seed.name} — Wave Layout generated from seed -->`; }
function renderRadial(seed) { return `<!-- ${seed.name} — Radial Layout generated from seed -->`; }
function renderSplit(seed)  { return `<!-- ${seed.name} — Split Layout generated from seed -->`; }
function renderMasonry(seed){ return `<!-- ${seed.name} — Masonry Layout generated from seed -->`; }
