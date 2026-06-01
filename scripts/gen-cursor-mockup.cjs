const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const W = 1400, H = 600;
const F = 'Inter, -apple-system, Helvetica, Arial, sans-serif';
const M = 'ui-monospace, SFMono-Regular, Menlo, Monaco, monospace';
const BL = '#6ea8fe'; // Cursor blue accent

// a line of fake code: array of {w,color}
function codeLine(x, y, segs) {
  let cx = x, out = '';
  for (const s of segs) {
    out += `<rect x="${cx}" y="${y}" width="${s.w}" height="9" rx="3" fill="${s.c}" fill-opacity="${s.o || 1}"/>`;
    cx += s.w + 9;
  }
  return out;
}

const KW = '#c792ea', FN = '#82aaff', ST = '#c3e88d', VR = '#e6e6ec', MU = '#3a3a52';

// editor lines (left pane)
const lines = [
  [{ w: 46, c: KW }, { w: 90, c: FN }, { w: 40, c: VR, o: 0.7 }],
  [{ w: 30, c: MU }, { w: 120, c: VR, o: 0.5 }],
  [{ w: 30, c: MU }, { w: 60, c: VR, o: 0.5 }, { w: 110, c: ST }],
  [{ w: 46, c: KW }, { w: 70, c: VR, o: 0.6 }, { w: 50, c: FN }],
  [{ w: 90, c: VR, o: 0.5 }, { w: 60, c: ST }],
  [{ w: 40, c: KW }, { w: 130, c: VR, o: 0.55 }],
  [{ w: 30, c: MU }, { w: 80, c: VR, o: 0.5 }],
  [{ w: 46, c: KW }, { w: 64, c: FN }],
];
const editorY0 = 140, step = 34, hl = 3;
let editor = '';
for (let i = 0; i < lines.length; i++) {
  const y = editorY0 + i * step;
  if (i === hl) editor += `<rect x="44" y="${y - 8}" width="472" height="26" rx="4" fill="${BL}" fill-opacity="0.10"/>`;
  editor += `<text x="64" y="${y + 10}" font-size="14" fill="#4a4a62" text-anchor="end" font-family="${M}">${i + 1}</text>`;
  editor += codeLine(86, y, lines[i]);
}

// chat thumb
function thumb(x, y) {
  return `
    <rect x="${x}" y="${y}" width="58" height="38" rx="5" fill="#0a0a12" stroke="#2a2a40"/>
    <rect x="${x + 8}" y="${y + 8}" width="28" height="3.5" rx="1.75" fill="#2f2f44"/>
    <rect x="${x + 8}" y="${y + 16}" width="42" height="3.5" rx="1.75" fill="#2f2f44"/>
    <rect x="${x + 8}" y="${y + 24}" width="34" height="5" rx="2.5" fill="${BL}" fill-opacity="0.55"/>
  `;
}

const cx = 560; // chat content left

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" font-family="${F}">
  <defs>
    <linearGradient id="win" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#111119"/><stop offset="1" stop-color="#0c0c13"/></linearGradient>
    <filter id="sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="24" stdDeviation="40" flood-color="#000000" flood-opacity="0.55"/></filter>
  </defs>
  <rect width="${W}" height="${H}" fill="#07070e"/>

  <!-- window -->
  <rect x="40" y="36" width="1320" height="528" rx="18" fill="url(#win)" stroke="#23233a" stroke-width="1.5" filter="url(#sh)"/>
  <circle cx="76" cy="72" r="7" fill="#ff5f56"/><circle cx="98" cy="72" r="7" fill="#febc2e"/><circle cx="120" cy="72" r="7" fill="#27c93f"/>
  <text x="700" y="78" font-size="16" fill="#6e6e88" text-anchor="middle" font-family="${M}">Cursor — litely</text>
  <line x1="40" y1="100" x2="1360" y2="100" stroke="#1b1b2c" stroke-width="1.5"/>

  <!-- editor pane -->
  ${editor}
  <line x1="520" y1="100" x2="520" y2="564" stroke="#1b1b2c" stroke-width="1.5"/>

  <!-- chat pane header -->
  <rect x="${cx}" y="126" width="26" height="26" rx="7" fill="${BL}" fill-opacity="0.18" stroke="${BL}" stroke-opacity="0.5"/>
  <path d="M ${cx + 8} ${139} L ${cx + 18} ${139} M ${cx + 13} ${134} L ${cx + 13} ${145}" stroke="${BL}" stroke-width="2" stroke-linecap="round"/>
  <text x="${cx + 38}" y="147" font-size="20" font-weight="700" fill="#ffffff">Cursor</text>
  <rect x="${cx + 130}" y="128" width="74" height="26" rx="13" fill="#15152a" stroke="#2a2a40"/>
  <text x="${cx + 167}" y="146" font-size="14" fill="#9a9ab2" text-anchor="middle" font-family="${M}">Agent</text>

  <!-- attached image chip -->
  <rect x="${cx}" y="178" width="300" height="50" rx="10" fill="${BL}" fill-opacity="0.10" stroke="${BL}" stroke-opacity="0.4"/>
  ${thumb(cx + 10, 184)}
  <text x="${cx + 80}" y="200" font-size="15" font-weight="600" fill="#cfe0ff">screenshot.webp</text>
  <text x="${cx + 80}" y="219" font-size="13" fill="#8a93b0" font-family="${M}">pasted &#183; 180 KB</text>

  <!-- user message bubble -->
  <rect x="${cx}" y="248" width="300" height="44" rx="12" fill="#1a1a28"/>
  <text x="${cx + 20}" y="276" font-size="18" fill="#e6e6ec" font-family="${M}">refactor this function</text>

  <!-- assistant response -->
  <circle cx="${cx + 8}" cy="332" r="5" fill="${BL}"/>
  <text x="${cx + 26}" y="338" font-size="17" fill="#cfcfdc" font-family="${M}">Reading the pasted screenshot&#8230;</text>
  <circle cx="${cx + 8}" cy="368" r="5" fill="${BL}"/>
  <text x="${cx + 26}" y="374" font-size="17" fill="#cfcfdc" font-family="${M}">Simplified the logic and split it up.</text>
  <text x="${cx + 2}" y="410" font-size="17" fill="#34d399" font-family="${M}">&#10003; Applied 2 edits</text>

  <!-- input box -->
  <rect x="${cx}" y="450" width="740" height="70" rx="14" fill="#0c0c13" stroke="#2b2b46" stroke-width="1.5"/>
  <text x="${cx + 20}" y="492" font-size="17" fill="#6a6a86" font-family="${M}">Ask anything&#8230;</text>
  <rect x="${cx + 196}" y="478" width="2.5" height="22" rx="1" fill="${BL}"/>
  <rect x="${cx + 600}" y="468" width="120" height="34" rx="8" fill="#15152a" stroke="#2a2a40"/>
  <text x="${cx + 660}" y="490" font-size="14" fill="#9a9ab2" text-anchor="middle" font-family="${M}">&#8984;V image</text>
</svg>`;

const img = path.join(__dirname, '..', 'images');
(async () => {
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  await sharp(png).avif({ quality: 60, effort: 6 }).toFile(path.join(img, 'cursor-paste.avif'));
  await sharp(png).webp({ quality: 84, effort: 6 }).toFile(path.join(img, 'cursor-paste.webp'));
  fs.writeFileSync(path.join(img, 'cursor-paste-preview.png'), png);
  const a = fs.statSync(path.join(img, 'cursor-paste.avif')).size;
  const w = fs.statSync(path.join(img, 'cursor-paste.webp')).size;
  console.log(`cursor: ${W}x${H} | AVIF ${Math.round(a / 1024)}KB | WEBP ${Math.round(w / 1024)}KB`);
})().catch((e) => { console.error(e); process.exit(1); });
