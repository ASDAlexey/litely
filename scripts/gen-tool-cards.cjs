const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const W = 640, H = 440;
const F = 'Inter, -apple-system, Helvetica, Arial, sans-serif';
const M = 'ui-monospace, SFMono-Regular, Menlo, Monaco, monospace';

function marks(accent, kind) {
  if (kind === 'robot') {
    const c = accent;
    return `
      <rect x="44" y="104" width="40" height="28" rx="8" fill="${c}"/>
      <rect x="51" y="97" width="26" height="9" rx="3" fill="${c}"/>
      <line x1="64" y1="92" x2="64" y2="97" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="64" cy="92" r="2.5" fill="${c}"/>
      <rect x="53" y="113" width="7" height="9" rx="2" fill="#0d0d14"/>
      <rect x="68" y="113" width="7" height="9" rx="2" fill="#0d0d14"/>`;
  }
  if (kind === 'codex') {
    return `
      <rect x="40" y="98" width="44" height="38" rx="10" fill="#0e1b1a" stroke="${accent}" stroke-opacity="0.5"/>
      <text x="62" y="124" font-size="20" fill="${accent}" text-anchor="middle" font-family="${M}" font-weight="700">&#8250;_</text>`;
  }
  // cursor arrow
  return `
    <rect x="40" y="98" width="44" height="38" rx="10" fill="#10182a" stroke="${accent}" stroke-opacity="0.5"/>
    <path d="M 55 108 L 55 128 L 60 123 L 64 130 L 67 128 L 63 121 L 70 121 Z" fill="${accent}"/>`;
}

function thumb(x, y, accent) {
  return `
    <rect x="${x}" y="${y}" width="54" height="42" rx="6" fill="#0a0a12" stroke="#2a2a40"/>
    <rect x="${x + 9}" y="${y + 9}" width="26" height="4" rx="2" fill="#2f2f44"/>
    <rect x="${x + 9}" y="${y + 18}" width="38" height="4" rx="2" fill="#2f2f44"/>
    <rect x="${x + 9}" y="${y + 27}" width="32" height="6" rx="3" fill="${accent}" fill-opacity="0.55"/>`;
}

function buildCard(cfg) {
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" font-family="${F}">
  <defs>
    <linearGradient id="win" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#111119"/><stop offset="1" stop-color="#0c0c13"/></linearGradient>
    <filter id="sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="16" stdDeviation="26" flood-color="#000000" flood-opacity="0.5"/></filter>
  </defs>
  <rect width="${W}" height="${H}" fill="#07070e"/>
  <rect x="14" y="14" width="612" height="412" rx="18" fill="url(#win)" stroke="#23233a" stroke-width="1.5" filter="url(#sh)"/>
  <circle cx="46" cy="48" r="6.5" fill="#ff5f56"/><circle cx="66" cy="48" r="6.5" fill="#febc2e"/><circle cx="86" cy="48" r="6.5" fill="#27c93f"/>
  <text x="320" y="53" font-size="15" fill="#6e6e88" text-anchor="middle" font-family="${M}">${cfg.title}</text>
  <line x1="14" y1="78" x2="626" y2="78" stroke="#1b1b2c" stroke-width="1.5"/>

  ${marks(cfg.accent, cfg.mark)}
  <text x="96" y="120" font-size="26" font-weight="700" fill="#ffffff">${cfg.name}</text>
  <text x="96" y="148" font-size="16" fill="#8a8aa0" font-family="${M}">${cfg.sub}</text>

  <rect x="40" y="184" width="430" height="62" rx="12" fill="${cfg.accent}" fill-opacity="0.10" stroke="${cfg.accent}" stroke-opacity="0.4"/>
  ${thumb(52, 194, cfg.accent)}
  <text x="120" y="212" font-size="18" font-weight="600" fill="#dfe6f5">screenshot.webp</text>
  <text x="120" y="233" font-size="14" fill="#8a93b0" font-family="${M}">pasted &#183; 180 KB</text>

  <text x="40" y="312" font-size="29" fill="#e6e6ec" font-family="${M}"><tspan fill="${cfg.accent}" font-weight="700">&#8250;</tspan> ${cfg.prompt}</text>
  <text x="40" y="364" font-size="22" fill="#34d399" font-family="${M}">&#10003; ${cfg.result}</text>
  </svg>`;
}

const CARDS = [
  { file: 'claude-card', title: 'claude', name: 'Claude Code', sub: 'Opus &#183; 1M context', accent: '#e8896b', mark: 'robot', prompt: 'write unit tests', result: 'Added 6 tests &#183; all green' },
  { file: 'codex-card', title: 'codex', name: 'Codex', sub: 'OpenAI &#183; high reasoning', accent: '#2dd4bf', mark: 'codex', prompt: 'why doesn&#8217;t this work?', result: 'Found it &#183; all tests pass' },
  { file: 'cursor-card', title: 'cursor', name: 'Cursor', sub: 'Agent &#183; &#8984;V to paste', accent: '#6ea8fe', mark: 'cursor', prompt: 'refactor this', result: 'Applied 2 edits' },
];

const img = path.join(__dirname, '..', 'images');
(async () => {
  for (const cfg of CARDS) {
    const png = await sharp(Buffer.from(buildCard(cfg))).png().toBuffer();
    await sharp(png).avif({ quality: 62, effort: 6 }).toFile(path.join(img, `${cfg.file}.avif`));
    await sharp(png).webp({ quality: 86, effort: 6 }).toFile(path.join(img, `${cfg.file}.webp`));
    if (cfg.file === 'claude-card') fs.writeFileSync(path.join(img, 'tool-cards-preview.png'), png);
    const a = fs.statSync(path.join(img, `${cfg.file}.avif`)).size;
    console.log(`${cfg.file}: AVIF ${Math.round(a / 1024)}KB`);
  }
})().catch((e) => { console.error(e); process.exit(1); });
