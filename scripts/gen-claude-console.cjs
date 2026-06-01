const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const W = 1400, H = 600;
const F = 'Inter, -apple-system, Helvetica, Arial, sans-serif';
const M = 'ui-monospace, SFMono-Regular, Menlo, Monaco, monospace';

// Coral Claude-style robot mascot at (x,y) top-left of a ~58px box
function mascot(x, y) {
  const c = '#e8896b';
  return `
    <rect x="${x + 8}" y="${y + 16}" width="42" height="30" rx="8" fill="${c}"/>
    <rect x="${x + 16}" y="${y + 8}" width="26" height="10" rx="3" fill="${c}"/>
    <line x1="${x + 29}" y1="${y + 2}" x2="${x + 29}" y2="${y + 8}" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="${x + 29}" cy="${y + 2}" r="2.5" fill="${c}"/>
    <rect x="${x + 18}" y="${y + 26}" width="7" height="10" rx="2" fill="#0d0d14"/>
    <rect x="${x + 33}" y="${y + 26}" width="7" height="10" rx="2" fill="#0d0d14"/>
    <rect x="${x + 12}" y="${y + 46}" width="6" height="8" rx="2" fill="${c}"/>
    <rect x="${x + 40}" y="${y + 46}" width="6" height="8" rx="2" fill="${c}"/>
  `;
}

// Mini code thumbnail (language-neutral) inside the attachment chip
function thumb(x, y, w, h) {
  return `
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="#0a0a12" stroke="#2a2a40"/>
    <rect x="${x + 8}" y="${y + 8}" width="30" height="3.5" rx="1.75" fill="#2f2f44"/>
    <rect x="${x + 8}" y="${y + 16}" width="44" height="3.5" rx="1.75" fill="#2f2f44"/>
    <rect x="${x + 8}" y="${y + 24}" width="38" height="5" rx="2.5" fill="#a78bfa" fill-opacity="0.5"/>
    <rect x="${x + 8}" y="${y + 34}" width="22" height="3.5" rx="1.75" fill="#2f2f44"/>
  `;
}

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" font-family="${F}">
  <defs>
    <linearGradient id="brand" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a78bfa"/><stop offset="1" stop-color="#3b82f6"/></linearGradient>
    <linearGradient id="win" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#111119"/><stop offset="1" stop-color="#0c0c13"/></linearGradient>
    <filter id="sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="24" stdDeviation="40" flood-color="#000000" flood-opacity="0.55"/></filter>
  </defs>
  <rect width="${W}" height="${H}" fill="#07070e"/>

  <!-- window -->
  <rect x="40" y="36" width="1320" height="528" rx="18" fill="url(#win)" stroke="#23233a" stroke-width="1.5" filter="url(#sh)"/>
  <!-- titlebar -->
  <circle cx="76" cy="72" r="7" fill="#ff5f56"/><circle cx="98" cy="72" r="7" fill="#febc2e"/><circle cx="120" cy="72" r="7" fill="#27c93f"/>
  <text x="700" y="78" font-size="16" fill="#6e6e88" text-anchor="middle" font-family="${M}">claude — ~/projects/litely</text>
  <line x1="40" y1="100" x2="1360" y2="100" stroke="#1b1b2c" stroke-width="1.5"/>

  <!-- header / session -->
  ${mascot(80, 122)}
  <text x="156" y="146" font-size="25" font-weight="700" fill="#ffffff">Claude Code</text>
  <text x="156" y="176" font-size="18" fill="#9a9ab2" font-family="${M}">Opus (1M context) with high effort &#183; Claude Max</text>
  <text x="156" y="202" font-size="18" fill="#7a7a94" font-family="${M}">~/Desktop/projects/litely</text>

  <!-- prompt box with pasted image -->
  <rect x="80" y="236" width="1240" height="96" rx="14" fill="#0c0c13" stroke="#2b2b46" stroke-width="1.5"/>
  <text x="106" y="294" font-size="24" fill="#a78bfa" font-family="${M}">&#8250;</text>
  <rect x="132" y="260" width="300" height="48" rx="10" fill="#7c3aed" fill-opacity="0.14" stroke="#a78bfa" stroke-opacity="0.55"/>
  ${thumb(144, 264, 60, 40)}
  <text x="218" y="281" font-size="16" font-weight="700" fill="#c4b5fd">Image #1</text>
  <text x="218" y="300" font-size="13.5" fill="#9a8fd0" font-family="${M}">screenshot.webp &#183; 180 KB</text>
  <text x="456" y="292" font-size="20" fill="#e6e6ec" font-family="${M}">write unit tests for this</text>
  <rect x="756" y="276" width="11" height="22" rx="2" fill="#a78bfa"/>

  <!-- assistant response (language-neutral) -->
  <circle cx="92" cy="372" r="5" fill="#e8896b"/>
  <text x="112" y="378" font-size="19" fill="#cfcfdc" font-family="${M}">Reading the pasted screenshot&#8230;</text>
  <circle cx="92" cy="410" r="5" fill="#e8896b"/>
  <text x="112" y="416" font-size="19" fill="#cfcfdc" font-family="${M}">Covering the happy path and the edge cases.</text>
  <text x="86" y="454" font-size="19" fill="#34d399" font-family="${M}">&#10003; Added 6 tests &#183; all green</text>

  <!-- status bar -->
  <line x1="40" y1="498" x2="1360" y2="498" stroke="#1b1b2c" stroke-width="1.5"/>
  <text x="80" y="536" font-size="16" fill="#7a7a94" font-family="${M}">Opus (1M context)  <tspan fill="#3b3b54">|</tspan>  <tspan fill="#34d399">&#9646;&#9646;&#9646;</tspan> 100%  <tspan fill="#3b3b54">|</tspan>  litely  <tspan fill="#3b3b54">|</tspan>  <tspan fill="#83c26d">git:(master)</tspan>  <tspan fill="#3b3b54">|</tspan>  &#9201; 0m</text>
</svg>`;

const img = path.join(__dirname, '..', 'images');
(async () => {
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  await sharp(png).avif({ quality: 60, effort: 6 }).toFile(path.join(img, 'claude-code-paste.avif'));
  await sharp(png).webp({ quality: 84, effort: 6 }).toFile(path.join(img, 'claude-code-paste.webp'));
  fs.writeFileSync(path.join(img, 'claude-code-paste-preview.png'), png);
  const a = fs.statSync(path.join(img, 'claude-code-paste.avif')).size;
  const w = fs.statSync(path.join(img, 'claude-code-paste.webp')).size;
  console.log(`console: ${W}x${H} | AVIF ${Math.round(a / 1024)}KB | WEBP ${Math.round(w / 1024)}KB`);
})().catch((e) => { console.error(e); process.exit(1); });
