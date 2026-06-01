const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const W = 1600, H = 560;
const cardW = 420, cardH = 340, cardY = 80, r = 20;
const x1 = 90, x2 = 590, x3 = 1090;
const c1 = x1 + cardW / 2, c2 = x2 + cardW / 2, c3 = x3 + cardW / 2;
const F = 'Inter, -apple-system, Helvetica, Arial, sans-serif';

function card(x) {
  return `<rect x="${x}" y="${cardY}" width="${cardW}" height="${cardH}" rx="${r}" fill="#101019" stroke="#26263a" stroke-width="1.5"/>`;
}

function dots(x, y) {
  return `<circle cx="${x}" cy="${y}" r="7" fill="#ff5f56"/><circle cx="${x + 22}" cy="${y}" r="7" fill="#febc2e"/><circle cx="${x + 44}" cy="${y}" r="7" fill="#27c93f"/>`;
}

function arrow(x, y) {
  return `<circle cx="${x}" cy="${y}" r="24" fill="url(#brand)"/><path d="M ${x - 7} ${y - 9} L ${x + 8} ${y} L ${x - 7} ${y + 9}" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`;
}

function caption(cx, title, sub) {
  return `<text x="${cx}" y="478" font-size="26" font-weight="700" fill="#ffffff" text-anchor="middle">${title}</text>` +
         `<text x="${cx}" y="510" font-size="18" font-weight="500" fill="#9898b0" text-anchor="middle">${sub}</text>`;
}

// ── Card 1: capture a bug screenshot ──
const card1 = `
  ${card(x1)}
  ${dots(x1 + 30, cardY + 34)}
  <rect x="${x1 + 30}" y="${cardY + 78}" width="200" height="13" rx="6" fill="#2a2a3e"/>
  <rect x="${x1 + 30}" y="${cardY + 110}" width="150" height="13" rx="6" fill="#2a2a3e"/>
  <rect x="${x1 + 30}" y="${cardY + 142}" width="270" height="22" rx="6" fill="#f87171" fill-opacity="0.16"/>
  <rect x="${x1 + 30}" y="${cardY + 146}" width="220" height="13" rx="6" fill="#f87171" fill-opacity="0.85"/>
  <rect x="${x1 + 30}" y="${cardY + 188}" width="180" height="13" rx="6" fill="#2a2a3e"/>
  <rect x="${x1 + 30}" y="${cardY + 232}" width="172" height="36" rx="18" fill="none" stroke="#f87171" stroke-opacity="0.6"/>
  <circle cx="${x1 + 48}" cy="${cardY + 250}" r="5" fill="#f87171"/>
  <text x="${x1 + 62}" y="${cardY + 256}" font-size="17" fill="#f87171" font-family="${F}" font-weight="600">1 error</text>
`;

// ── Card 2: Litely compresses ──
const card2 = `
  ${card(x2)}
  <circle cx="${c2}" cy="${cardY + 44}" r="24" fill="#0a1628"/>
  <path d="M ${c2 + 11} ${cardY + 30} C ${c2 + 11} ${cardY + 30} ${c2 - 9} ${cardY + 42} ${c2 - 8} ${cardY + 54} C ${c2 - 8} ${cardY + 54} ${c2 - 4} ${cardY + 48} ${c2 + 1} ${cardY + 45} C ${c2 - 3} ${cardY + 49} ${c2 - 6} ${cardY + 54} ${c2 - 6} ${cardY + 54} C ${c2 - 6} ${cardY + 54} ${c2 + 13} ${cardY + 42} ${c2 + 11} ${cardY + 30} Z" fill="url(#brand)"/>
  <text x="${c2}" y="${cardY + 96}" font-size="22" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="${F}">Litely</text>
  <text x="${c2}" y="${cardY + 138}" font-size="21" fill="#9898b0" text-anchor="middle" font-family="${F}">screenshot.png &#183; 4.2 MB</text>
  <line x1="${c2 - 118}" y1="${cardY + 131}" x2="${c2 + 118}" y2="${cardY + 131}" stroke="#9898b0" stroke-width="1.5"/>
  <path d="M ${c2} ${cardY + 154} L ${c2} ${cardY + 178} M ${c2 - 8} ${cardY + 170} L ${c2} ${cardY + 178} L ${c2 + 8} ${cardY + 170}" stroke="#a78bfa" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <text x="${c2}" y="${cardY + 206}" font-size="21" fill="#34d399" text-anchor="middle" font-family="${F}" font-weight="600">optimized.webp &#183; 180 KB</text>
  <rect x="${c2 - 78}" y="${cardY + 240}" width="156" height="56" rx="28" fill="#34d399" fill-opacity="0.12" stroke="#34d399" stroke-opacity="0.5"/>
  <text x="${c2}" y="${cardY + 278}" font-size="32" font-weight="700" fill="#34d399" text-anchor="middle" font-family="${F}">&#8722;96%</text>
`;

// ── Card 3: paste into AI, it fixes the code ──
const tx = x3 + 30;
const card3 = `
  ${card(x3)}
  ${dots(x3 + 30, cardY + 34)}
  <text x="${x3 + cardW - 30}" y="${cardY + 40}" font-size="18" fill="#9494ae" text-anchor="end" font-family="${F}">Claude Code</text>
  <text x="${tx}" y="${cardY + 96}" font-size="22" fill="#34d399" font-family="ui-monospace, Menlo, monospace" font-weight="700">&#8250;</text>
  <rect x="${tx + 24}" y="${cardY + 76}" width="146" height="32" rx="8" fill="#7c3aed" fill-opacity="0.16" stroke="#a78bfa" stroke-opacity="0.5"/>
  <rect x="${tx + 36}" y="${cardY + 84}" width="18" height="16" rx="3" fill="none" stroke="#a78bfa" stroke-width="1.6"/>
  <circle cx="${tx + 42}" cy="${cardY + 90}" r="2" fill="#a78bfa"/>
  <path d="M ${tx + 37} ${cardY + 99} L ${tx + 43} ${cardY + 93} L ${tx + 53} ${cardY + 99}" stroke="#a78bfa" stroke-width="1.6" fill="none" stroke-linejoin="round"/>
  <text x="${tx + 62}" y="${cardY + 97}" font-size="16" fill="#c4b5fd" font-family="${F}" font-weight="600">Image #1</text>
  <text x="${tx + 182}" y="${cardY + 97}" font-size="19" fill="#eeeef0" font-family="ui-monospace, Menlo, monospace">fix this bug</text>
  <text x="${tx}" y="${cardY + 146}" font-size="18" fill="#9898b0" font-family="ui-monospace, Menlo, monospace">&#9656; reading screenshot&#8230;</text>
  <text x="${tx}" y="${cardY + 182}" font-size="18" fill="#34d399" font-family="ui-monospace, Menlo, monospace">&#10003; fix applied &#183; 1 file</text>
  <rect x="${tx}" y="${cardY + 214}" width="${cardW - 60}" height="10" rx="5" fill="#1c1c2a"/>
  <rect x="${tx}" y="${cardY + 214}" width="${cardW - 60}" height="10" rx="5" fill="url(#brand)"/>
  <text x="${tx}" y="${cardY + 262}" font-size="16" fill="#9494ae" font-family="${F}">Claude Code &#183; Codex &#183; Aider &#183; opencode</text>
`;

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" font-family="${F}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#07070e"/><stop offset="1" stop-color="#0c0c1a"/></linearGradient>
    <linearGradient id="brand" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a78bfa"/><stop offset="1" stop-color="#3b82f6"/></linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.32" r="0.5"><stop offset="0" stop-color="#7c3aed" stop-opacity="0.16"/><stop offset="1" stop-color="#7c3aed" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${card1}
  ${card2}
  ${card3}
  ${arrow((x1 + cardW + x2) / 2, cardY + cardH / 2)}
  ${arrow((x2 + cardW + x3) / 2, cardY + cardH / 2)}
  ${caption(c1, 'Capture', 'Screenshot a bug or code')}
  ${caption(c2, 'Compress', 'Up to 96% smaller, instantly')}
  ${caption(c3, 'Paste &amp; fix', 'Ctrl+V into your AI agent')}
</svg>`;

const img = path.join(__dirname, '..', 'images');
(async () => {
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  await sharp(png).avif({ quality: 62, effort: 6 }).toFile(path.join(img, 'ai-coding-flow.avif'));
  await sharp(png).webp({ quality: 86, effort: 6 }).toFile(path.join(img, 'ai-coding-flow.webp'));
  fs.writeFileSync(path.join(img, 'ai-coding-flow.png'), png);
  const a = fs.statSync(path.join(img, 'ai-coding-flow.avif')).size;
  const w = fs.statSync(path.join(img, 'ai-coding-flow.webp')).size;
  console.log(`flow: ${W}x${H} | AVIF ${Math.round(a / 1024)}KB | WEBP ${Math.round(w / 1024)}KB`);
})().catch((e) => { console.error(e); process.exit(1); });
