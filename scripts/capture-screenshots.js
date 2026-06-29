// Capture screenshots of all HTML pages in a directory using Puppeteer.
// Usage: node scripts/capture-screenshots.js [directory] [--server]
//   --server mode: pages served via localhost (use when pages have external resources)
//   file:// mode (default): pages loaded directly from disk
// Requires: npm install puppeteer

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const EXAMPLES_DIR = process.argv.slice(2).find(a => !a.startsWith('--')) || '.';
const USE_SERVER = process.argv.includes('--server');
const BASE_URL = USE_SERVER ? (process.env.BASE_URL || 'http://localhost:8765') : null;
const VIEWPORT = { width: 1280, height: 900 };

(async () => {
  const files = fs.readdirSync(EXAMPLES_DIR).filter(f => f.endsWith('.html'));
  if (!files.length) { console.log('No HTML files found'); return; }

  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  console.log(`Capturing ${files.length} pages (${USE_SERVER ? 'server' : 'file'} mode)...`);

  for (const name of files) {
    const base = name.replace('.html', '');
    const page = await browser.newPage();
    await page.setViewport(VIEWPORT);

    let url;
    if (USE_SERVER) {
      url = `${BASE_URL}/${name}`;
    } else {
      url = `file:///${path.resolve(EXAMPLES_DIR, name).replace(/\\/g, '/')}`;
    }

    try {
      // Use domcontentloaded for faster load; networkidle0 can hang on external fonts
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      // Extra wait for fonts, CSS animations, and external images
      await new Promise(r => setTimeout(r, 2000));
    } catch (e) {
      console.warn(`  WARN ${name}: ${e.message}`);
    }

    const outPath = path.join(EXAMPLES_DIR, `${base}-preview.png`);
    await page.screenshot({ path: outPath, fullPage: true });
    console.log(`  OK ${base}-preview.png`);
    await page.close();
  }

  await browser.close();
  console.log('Done');
})().catch(e => { console.error(e); process.exit(1); });
