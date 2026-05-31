const fs = require('fs');
const path = require('path');
const CleanCSS = require('clean-css');
const { minify: minifyHTML } = require('html-minifier-terser');
const { minify: minifyJS } = require('terser');

const DIST = path.join(__dirname, 'docs');

// App version is pulled from the litely-code repo at build time and injected
// into the __APP_VERSION__ placeholders. Falls back to the landing's own
// package.json version if the code repo isn't available (e.g. CI without it).
function resolveAppVersion() {
  const candidates = [
    path.join(__dirname, '..', 'litely-code', 'package.json'),
    path.join(__dirname, '..', 'litely-code', 'src-tauri', 'tauri.conf.json'),
  ];

  for (const candidate of candidates) {
    try {
      const version = JSON.parse(fs.readFileSync(candidate, 'utf8')).version;
      if (version && version !== '../package.json') {
        return version;
      }
    } catch (_) {
      // try next candidate
    }
  }

  return require('./package.json').version;
}

const APP_VERSION = resolveAppVersion();

function injectVersion(html) {
  return html.replace(/__APP_VERSION__/g, APP_VERSION);
}

async function build() {
  console.log(`App version: ${APP_VERSION}`);

  // Clean & create dist
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  // Minify CSS
  const css = fs.readFileSync(path.join(__dirname, 'style.css'), 'utf8');
  const minCSS = new CleanCSS({ level: 2 }).minify(css).styles;
  fs.writeFileSync(path.join(DIST, 'style.css'), minCSS);
  console.log(`CSS: ${css.length} → ${minCSS.length} (${Math.round((1 - minCSS.length / css.length) * 100)}%)`);

  // Minify JS
  const js = fs.readFileSync(path.join(__dirname, 'i18n.js'), 'utf8');
  const minJSResult = await minifyJS(js, { compress: true, mangle: true });
  fs.writeFileSync(path.join(DIST, 'i18n.js'), minJSResult.code);
  console.log(`JS:  ${js.length} → ${minJSResult.code.length} (${Math.round((1 - minJSResult.code.length / js.length) * 100)}%)`);

  // Minify HTML
  const html = injectVersion(fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8'));
  const minHTML = await minifyHTML(html, {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeEmptyAttributes: true,
    minifyCSS: true,
    minifyJS: true,
    minifyURLs: true,
  });
  fs.writeFileSync(path.join(DIST, 'index.html'), minHTML);
  console.log(`HTML: ${html.length} → ${minHTML.length} (${Math.round((1 - minHTML.length / html.length) * 100)}%)`);

  // Copy auth callback
  const authDir = path.join(DIST, 'auth');
  fs.mkdirSync(authDir, { recursive: true });
  const authHTML = fs.readFileSync(path.join(__dirname, 'auth', 'callback.html'), 'utf8');
  const minAuthHTML = await minifyHTML(authHTML, {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeEmptyAttributes: true,
    minifyCSS: true,
    minifyJS: true,
  });
  fs.writeFileSync(path.join(authDir, 'callback.html'), minAuthHTML);
  console.log(`Auth: ${authHTML.length} → ${minAuthHTML.length} (${Math.round((1 - minAuthHTML.length / authHTML.length) * 100)}%)`);

  // Minify privacy.html
  const privacyPath = path.join(__dirname, 'privacy.html');
  if (fs.existsSync(privacyPath)) {
    const privacyHTML = fs.readFileSync(privacyPath, 'utf8');
    const minPrivacy = await minifyHTML(privacyHTML, {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeEmptyAttributes: true,
      minifyCSS: true,
      minifyJS: true,
    });
    fs.writeFileSync(path.join(DIST, 'privacy.html'), minPrivacy);
    console.log(`Privacy: ${privacyHTML.length} → ${minPrivacy.length} (${Math.round((1 - minPrivacy.length / privacyHTML.length) * 100)}%)`);
  }

  // Minify ru/index.html
  const ruDir = path.join(DIST, 'ru');
  fs.mkdirSync(ruDir, { recursive: true });
  const ruIndexPath = path.join(__dirname, 'ru', 'index.html');
  if (fs.existsSync(ruIndexPath)) {
    const ruHTML = injectVersion(fs.readFileSync(ruIndexPath, 'utf8'));
    const minRuHTML = await minifyHTML(ruHTML, {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeEmptyAttributes: true,
      minifyCSS: true,
      minifyJS: true,
      minifyURLs: true,
    });
    fs.writeFileSync(path.join(ruDir, 'index.html'), minRuHTML);
    console.log(`RU Index: ${ruHTML.length} → ${minRuHTML.length} (${Math.round((1 - minRuHTML.length / ruHTML.length) * 100)}%)`);
  }

  // Minify ru/privacy.html
  const ruPrivacyPath = path.join(__dirname, 'ru', 'privacy.html');
  if (fs.existsSync(ruPrivacyPath)) {
    const ruPrivHTML = fs.readFileSync(ruPrivacyPath, 'utf8');
    const minRuPriv = await minifyHTML(ruPrivHTML, {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeEmptyAttributes: true,
      minifyCSS: true,
      minifyJS: true,
    });
    fs.writeFileSync(path.join(ruDir, 'privacy.html'), minRuPriv);
    console.log(`RU Privacy: ${ruPrivHTML.length} → ${minRuPriv.length} (${Math.round((1 - minRuPriv.length / ruPrivHTML.length) * 100)}%)`);
  }

  // Copy robots.txt and sitemap.xml
  for (const file of ['robots.txt', 'sitemap.xml']) {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
      fs.copyFileSync(filePath, path.join(DIST, file));
      console.log(`${file}: copied`);
    }
  }

  // Copy images
  const imagesDir = path.join(__dirname, 'images');
  const distImages = path.join(DIST, 'images');
  fs.mkdirSync(distImages, { recursive: true });
  for (const file of fs.readdirSync(imagesDir)) {
    fs.copyFileSync(path.join(imagesDir, file), path.join(distImages, file));
  }
  console.log(`Images: ${fs.readdirSync(imagesDir).length} files copied`);

  console.log('\nBuild complete → docs/');
}

build().catch(console.error);