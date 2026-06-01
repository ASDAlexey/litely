const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const W = 1400, H = 600;
const F = 'Inter, -apple-system, Helvetica, Arial, sans-serif';
const M = 'ui-monospace, SFMono-Regular, Menlo, Monaco, monospace';
const CY = '#2dd4bf'; // Codex teal/cyan accent

// small image glyph
function imgGlyph(x, y) {
  return `
    <rect x="${x}" y="${y}" width="22" height="18" rx="3" fill="none" stroke="${CY}" stroke-width="1.6"/>
    <circle cx="${x + 7}" cy="${y + 6}" r="2.2" fill="${CY}"/>
    <path d="M ${x + 3} ${y + 16} L ${x + 9} ${y + 9} L ${x + 19} ${y + 16}" stroke="${CY}" stroke-width="1.6" fill="none" stroke-linejoin="round"/>
  `;
}

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" font-family="${F}">
  <defs>
    <linearGradient id="win" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#111119"/><stop offset="1" stop-color="#0c0c13"/></linearGradient>
    <filter id="sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="24" stdDeviation="40" flood-color="#000000" flood-opacity="0.55"/></filter>
  </defs>
  <rect width="${W}" height="${H}" fill="#07070e"/>

  <!-- window -->
  <rect x="40" y="36" width="1320" height="528" rx="18" fill="url(#win)" stroke="#23233a" stroke-width="1.5" filter="url(#sh)"/>
  <!-- titlebar -->
  <circle cx="76" cy="72" r="7" fill="#ff5f56"/><circle cx="98" cy="72" r="7" fill="#febc2e"/><circle cx="120" cy="72" r="7" fill="#27c93f"/>
  <text x="700" y="78" font-size="16" fill="#6e6e88" text-anchor="middle" font-family="${M}">codex — ~/projects/litely</text>
  <line x1="40" y1="100" x2="1360" y2="100" stroke="#1b1b2c" stroke-width="1.5"/>

  <!-- header / session -->
  <rect x="80" y="120" width="46" height="46" rx="11" fill="#0e1b1a" stroke="${CY}" stroke-opacity="0.5"/>
  <text x="103" y="151" font-size="22" fill="${CY}" text-anchor="middle" font-family="${M}" font-weight="700">&#8250;_</text>
  <text x="146" y="146" font-size="24" fill="#9a9ab2">Welcome to <tspan font-weight="700" fill="#ffffff">Codex</tspan></text>
  <text x="146" y="176" font-size="18" fill="#9a9ab2" font-family="${M}">OpenAI&#8217;s command-line coding agent</text>
  <text x="146" y="202" font-size="18" fill="#7a7a94" font-family="${M}">high reasoning &#183; ~/Desktop/projects/litely</text>

  <!-- composer with pasted image tag -->
  <rect x="80" y="236" width="1240" height="96" rx="14" fill="#0c0c13" stroke="#2b2b46" stroke-width="1.5"/>
  <text x="106" y="294" font-size="24" fill="${CY}" font-family="${M}" font-weight="700">&#8250;</text>
  ${imgGlyph(136, 276)}
  <text x="168" y="292" font-size="19" fill="${CY}" font-family="${M}">[screenshot.webp 1280&#215;720]</text>
  <text x="470" y="292" font-size="19" fill="#e6e6ec" font-family="${M}">why doesn&#8217;t this work?</text>
  <rect x="728" y="277" width="11" height="22" rx="2" fill="${CY}"/>

  <!-- response (mono + cyan, language-neutral) -->
  <text x="86" y="378" font-size="19" fill="#8a8aa0" font-family="${M}"><tspan fill="${CY}">&#8226;</tspan> Reading the pasted screenshot&#8230;</text>
  <text x="86" y="414" font-size="19" fill="#cfcfdc" font-family="${M}"><tspan fill="${CY}">&#8226;</tspan> The loop runs one step past the end &#8212; that&#8217;s the bug.</text>
  <text x="86" y="450" font-size="19" fill="#34d399" font-family="${M}">&#10003; Fixed &#183; all tests pass</text>

  <!-- status bar -->
  <line x1="40" y1="498" x2="1360" y2="498" stroke="#1b1b2c" stroke-width="1.5"/>
  <text x="80" y="536" font-size="16" fill="#7a7a94" font-family="${M}"><tspan fill="${CY}">Codex</tspan> &#183; high  <tspan fill="#3b3b54">|</tspan>  ~/projects/litely  <tspan fill="#3b3b54">|</tspan>  <tspan fill="#83c26d">main</tspan>  <tspan fill="#3b3b54">|</tspan>  ctx 78%</text>
  <text x="1320" y="536" font-size="16" fill="#5a5a72" text-anchor="end" font-family="${M}">? for shortcuts</text>
</svg>`;

const img = path.join(__dirname, '..', 'images');
(async () => {
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  await sharp(png).avif({ quality: 60, effort: 6 }).toFile(path.join(img, 'codex-console.avif'));
  await sharp(png).webp({ quality: 84, effort: 6 }).toFile(path.join(img, 'codex-console.webp'));
  fs.writeFileSync(path.join(img, 'codex-console-preview.png'), png);
  const a = fs.statSync(path.join(img, 'codex-console.avif')).size;
  const w = fs.statSync(path.join(img, 'codex-console.webp')).size;
  console.log(`codex: ${W}x${H} | AVIF ${Math.round(a / 1024)}KB | WEBP ${Math.round(w / 1024)}KB`);
})().catch((e) => { console.error(e); process.exit(1); });
