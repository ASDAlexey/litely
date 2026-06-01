const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const W = 1320, H = 860;
const F = 'Inter, -apple-system, Helvetica, Arial, sans-serif';
const M = 'ui-monospace, SFMono-Regular, Menlo, Monaco, monospace';
const BLUE = '#579dff', BTN = '#4688ec', GREEN = '#2ea043', MUT = '#8a96a3', TXT = '#c7d1db', BORD = '#2d333b';

function avatar(cx, cy, r, color, initials) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}"/><text x="${cx}" y="${cy + r * 0.34}" font-size="${r * 0.85}" font-weight="700" fill="#fff" text-anchor="middle" font-family="${F}">${initials}</text>`;
}
function badge(x, y, w, text, bg, fg) {
  return `<rect x="${x}" y="${y}" width="${w}" height="22" rx="4" fill="${bg}"/><text x="${x + w / 2}" y="${y + 15}" font-size="12" font-weight="700" fill="${fg}" text-anchor="middle" font-family="${F}" letter-spacing="0.3">${text}</text>`;
}

const nav = 86; // nav bottom
const cTop = 150; // content top
const sx = 44; // sidebar x
const mx = 300; // main content x

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" font-family="${F}">
  <defs>
    <linearGradient id="win" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1c2128"/><stop offset="1" stop-color="#161b22"/></linearGradient>
    <linearGradient id="shot" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#10243a"/><stop offset="1" stop-color="#0c1a2b"/></linearGradient>
    <filter id="sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="24" stdDeviation="42" flood-color="#000" flood-opacity="0.55"/></filter>
  </defs>
  <rect width="${W}" height="${H}" fill="#07070e"/>

  <!-- window -->
  <rect x="20" y="20" width="${W - 40}" height="${H - 40}" rx="18" fill="url(#win)" stroke="#23272e" stroke-width="1.5" filter="url(#sh)"/>
  <circle cx="56" cy="52" r="7" fill="#ff5f56"/><circle cx="78" cy="52" r="7" fill="#febc2e"/><circle cx="100" cy="52" r="7" fill="#27c93f"/>
  <text x="${W / 2}" y="57" font-size="15" fill="#5b6470" text-anchor="middle" font-family="${M}">DEMO-1427 &#183; Jira</text>
  <line x1="20" y1="74" x2="${W - 20}" y2="74" stroke="#23272e" stroke-width="1.5"/>

  <!-- top nav -->
  <g transform="translate(0,16)">
    <path d="M ${sx} 56 l 11 -18 l 11 18 z" fill="${BLUE}"/><path d="M ${sx + 7} 68 l 11 -18 l 11 18 z" fill="#9cc3ff"/>
    <text x="${sx + 36}" y="64" font-size="18" font-weight="700" fill="${TXT}">Jira</text>
    <text x="${sx + 92}" y="64" font-size="14" fill="${MUT}">Dashboards</text>
    <text x="${sx + 192}" y="64" font-size="14" fill="${MUT}">Projects</text>
    <text x="${sx + 272}" y="64" font-size="14" fill="${MUT}">Boards</text>
    <text x="${sx + 340}" y="64" font-size="14" fill="${MUT}">Backlog</text>
    <rect x="${W - 320}" y="44" width="92" height="30" rx="6" fill="#21262d" stroke="${BORD}"/><text x="${W - 274}" y="64" font-size="13" font-weight="600" fill="${TXT}" text-anchor="middle">Create</text>
    <rect x="${W - 216}" y="44" width="150" height="30" rx="6" fill="#0d1117" stroke="${BORD}"/><text x="${W - 200}" y="64" font-size="13" fill="#5b6470">Search</text>
    ${avatar(W - 44, 59, 15, BTN, 'AP')}
  </g>
  <line x1="20" y1="${nav + 14}" x2="${W - 20}" y2="${nav + 14}" stroke="#23272e" stroke-width="1.5"/>

  <!-- breadcrumb -->
  <text x="${sx}" y="${cTop - 18}" font-size="13" fill="${BLUE}">DEMO <tspan fill="${MUT}">/</tspan> DEMO-1427</text>

  <!-- upload toast -->
  <rect x="${W - 380}" y="${cTop - 36}" width="320" height="38" rx="8" fill="#0d1117" stroke="${BORD}"/>
  <circle cx="${W - 356}" cy="${cTop - 17}" r="8" fill="none" stroke="${BLUE}" stroke-width="2.5" stroke-dasharray="34 16" stroke-linecap="round"/>
  <text x="${W - 338}" y="${cTop - 12}" font-size="13.5" fill="${TXT}">Uploading <tspan font-weight="600">screenshot.webp</tspan> (42 KB)</text>

  <!-- sidebar -->
  <g font-size="14">
    <rect x="${sx - 4}" y="${cTop + 6}" width="26" height="26" rx="5" fill="#d04437"/><text x="${sx + 9}" y="${cTop + 24}" font-size="13" font-weight="700" fill="#fff" text-anchor="middle">D</text>
    <text x="${sx + 34}" y="${cTop + 25}" font-weight="700" fill="${TXT}">Demo Project</text>
    <text x="${sx}" y="${cTop + 68}" font-size="11" fill="#5b6470" letter-spacing="1" font-weight="700">PLANNING</text>
    <text x="${sx}" y="${cTop + 96}" fill="${MUT}">Backlog</text>
    <rect x="${sx - 12}" y="${cTop + 110}" width="248" height="30" rx="6" fill="#1f6feb" fill-opacity="0.16"/>
    <text x="${sx}" y="${cTop + 130}" fill="${BLUE}" font-weight="600">Board</text>
    <text x="${sx}" y="${cTop + 164}" fill="${MUT}">Timeline</text>
    <text x="${sx}" y="${cTop + 204}" font-size="11" fill="#5b6470" letter-spacing="1" font-weight="700">DEVELOPMENT</text>
    <text x="${sx}" y="${cTop + 232}" fill="${MUT}">Code</text>
    <text x="${sx}" y="${cTop + 264}" fill="${MUT}">Releases</text>
    <text x="${sx}" y="${cTop + 304}" font-size="11" fill="#5b6470" letter-spacing="1" font-weight="700">PROJECT PAGES</text>
    <text x="${sx}" y="${cTop + 332}" fill="${MUT}">Page 1</text>
    <text x="${sx}" y="${cTop + 364}" fill="${MUT}">Page 2</text>
  </g>
  <line x1="276" y1="${nav + 14}" x2="276" y2="${H - 20}" stroke="#23272e" stroke-width="1.5"/>

  <!-- main content -->
  <text x="${mx}" y="${cTop + 16}" font-size="14" font-weight="700" fill="${BLUE}">DEMO-1427</text>
  <text x="${mx}" y="${cTop + 50}" font-size="26" font-weight="700" fill="#eef2f6">Dashboard widget shows incorrect data after page refresh</text>

  <text x="${mx}" y="${cTop + 88}" font-size="13" fill="${MUT}">Status</text>
  ${badge(mx + 54, cTop + 73, 92, 'IN PROGRESS', 'rgba(88,157,255,0.22)', '#9cc3ff')}
  <text x="${mx + 168}" y="${cTop + 88}" font-size="13" fill="${MUT}">Priority</text>
  ${badge(mx + 222, cTop + 73, 70, 'MEDIUM', 'rgba(245,205,71,0.22)', '#f5cd47')}
  <text x="${mx + 308}" y="${cTop + 88}" font-size="13" fill="${MUT}">Assignee</text>
  <text x="${mx + 376}" y="${cTop + 88}" font-size="13" font-weight="600" fill="${TXT}">Alex P.</text>

  <text x="${mx}" y="${cTop + 128}" font-size="14.5" fill="${TXT}">After refreshing the dashboard, the analytics widget displays stale data from the previous</text>
  <text x="${mx}" y="${cTop + 152}" font-size="14.5" fill="${TXT}">session. Expected: the widget should reload current data on page refresh.</text>
  <text x="${mx}" y="${cTop + 188}" font-size="14.5" fill="${MUT}">Steps to reproduce: open dashboard &#8594; wait 5 min &#8594; refresh &#8594; observe widget values.</text>

  <!-- activity -->
  <text x="${mx}" y="${cTop + 234}" font-size="15" font-weight="700" fill="#eef2f6">Activity</text>
  ${avatar(mx + 14, cTop + 266, 14, GREEN, 'MK')}
  <text x="${mx + 38}" y="${cTop + 262}" font-size="13.5" font-weight="600" fill="${TXT}">Maria K. <tspan font-weight="400" fill="${MUT}">  5 min ago</tspan></text>
  <text x="${mx + 38}" y="${cTop + 286}" font-size="14" fill="#f0a05a" font-family="${M}">[^screen-recording.mp4]</text>

  ${avatar(mx + 14, cTop + 326, 14, BTN, 'AP')}
  <text x="${mx + 38}" y="${cTop + 322}" font-size="13.5" font-weight="600" fill="${TXT}">Alex P. <tspan font-weight="400" fill="${MUT}">  just now &#183; pasted a screenshot</tspan></text>
  <text x="${mx + 38}" y="${cTop + 346}" font-size="14" fill="${TXT}">Found the root cause &#8212; cache invalidation is missing. Here is the fix:</text>
  <rect x="${mx + 38}" y="${cTop + 362}" width="320" height="150" rx="8" fill="url(#shot)" stroke="${BORD}"/>
  <rect x="${mx + 168}" y="${cTop + 420}" width="14" height="34" rx="2" fill="#6ea8fe" fill-opacity="0.8"/>
  <rect x="${mx + 186}" y="${cTop + 410}" width="14" height="44" rx="2" fill="#34d399" fill-opacity="0.8"/>
  <rect x="${mx + 204}" y="${cTop + 428}" width="14" height="26" rx="2" fill="#f5cd47" fill-opacity="0.8"/>

  <!-- comment editor -->
  <rect x="${mx}" y="${H - 196}" width="${W - mx - 44}" height="158" rx="10" fill="#0d1117" stroke="${BORD}"/>
  <g transform="translate(${mx + 18},${H - 170})" fill="${MUT}" font-size="15">
    <text x="0" y="6" font-weight="700">B</text><text x="26" y="6" font-style="italic">I</text><text x="50" y="6" text-decoration="underline">U</text>
    <g stroke="${MUT}" stroke-width="1.5" fill="none" stroke-linecap="round"><rect x="82" y="-5" width="12" height="7" rx="3.5"/><rect x="89" y="0" width="12" height="7" rx="3.5"/></g>
    <path d="M124 -7 v11 a4.5 4.5 0 0 0 9 0 v-12 a6.5 6.5 0 0 0 -13 0 v13" stroke="${MUT}" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <text x="150" y="6" font-size="20">&#183;</text><text x="172" y="6" font-size="13">1.</text>
    <text x="208" y="6" font-size="20">+</text>
  </g>
  <line x1="${mx}" y1="${H - 148}" x2="${W - 44}" y2="${H - 148}" stroke="${BORD}" stroke-width="1"/>
  <!-- textarea WITH inserted markup -->
  <text x="${mx + 18}" y="${H - 118}" font-size="15" fill="${BLUE}" font-family="${M}">!screenshot.webp|width=640!</text>
  <rect x="${mx + 286}" y="${H - 133}" width="2.5" height="22" rx="1" fill="${BLUE}"/>
  <text x="${mx + 18}" y="${H - 86}" font-size="13.5" fill="#5b6470">Markup inserted automatically after paste &#8212; just press Save.</text>
  <!-- editor footer -->
  <line x1="${mx}" y1="${H - 70}" x2="${W - 44}" y2="${H - 70}" stroke="${BORD}" stroke-width="1"/>
  <rect x="${mx + 18}" y="${H - 60}" width="58" height="26" rx="6" fill="#21262d"/><text x="${mx + 47}" y="${H - 43}" font-size="12.5" fill="${MUT}" text-anchor="middle">Visual</text>
  <rect x="${mx + 80}" y="${H - 60}" width="48" height="26" rx="6" fill="${BTN}"/><text x="${mx + 104}" y="${H - 43}" font-size="12.5" font-weight="600" fill="#fff" text-anchor="middle">Text</text>
  <rect x="${W - 188}" y="${H - 60}" width="64" height="28" rx="6" fill="${BTN}"/><text x="${W - 156}" y="${H - 42}" font-size="13" font-weight="600" fill="#fff" text-anchor="middle">Add</text>
  <text x="${W - 88}" y="${H - 42}" font-size="13" fill="${MUT}">Cancel</text>
</svg>`;

const img = path.join(__dirname, '..', 'images');
(async () => {
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  await sharp(png).avif({ quality: 58, effort: 6 }).toFile(path.join(img, 'jira-demo.avif'));
  await sharp(png).webp({ quality: 82, effort: 6 }).toFile(path.join(img, 'jira-demo.webp'));
  fs.writeFileSync(path.join(img, 'jira-demo-preview.png'), png);
  const a = fs.statSync(path.join(img, 'jira-demo.avif')).size, w = fs.statSync(path.join(img, 'jira-demo.webp')).size;
  console.log(`jira: ${W}x${H} | AVIF ${Math.round(a / 1024)}KB | WEBP ${Math.round(w / 1024)}KB`);
})().catch((e) => { console.error(e); process.exit(1); });
