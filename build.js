const fs = require('fs');
const path = require('path');
const CleanCSS = require('clean-css');
const { minify: minifyHTML } = require('html-minifier-terser');
const { minify: minifyJS } = require('terser');

const DIST = path.join(__dirname, 'docs');

async function build() {
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
  const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
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