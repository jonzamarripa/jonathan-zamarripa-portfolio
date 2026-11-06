// Release-guard assertions for generated production-facing output.
// These checks run after the two generators, not against stale source artifacts.
const fs = require('node:fs');
const assert = require('node:assert/strict');
const read = (p) => fs.readFileSync(p, 'utf8');
const homepage = read('index.html');
const bundle = read('dist/site.js');
const journal = read('journal/index.html');
const dossier = read('journal/designed-for-dana-wrong-for-marcus/index.html');
const footer = homepage.slice(homepage.indexOf('<footer'), homepage.indexOf('</footer>') + '</footer>'.length);
assert(footer, 'Rendered footer is missing');
for (const removed of ['Behind the Build</button>', 'Resume</button>', 'LinkedIn</button>', 'Read the Newsletter</button>']) {
  assert(!footer.includes(removed), 'Outdated footer nav remains: ' + removed);
}
assert(homepage.includes('The production toolkit behind the strategy.'), 'Homepage build used stale Stack copy');
assert(homepage.includes('jiz-build-portrait'), 'Contact portrait is missing from generated homepage');
assert(bundle.includes('jz-editorial-icon'), 'Method and journey icons missing from compiled bundle');
assert(journal.includes('class="jr-pillars"'), 'Journal hub missing navigation');
assert(dossier.includes('class="dx-ch'), 'Dossier chapters were not generated');
assert(fs.existsSync('assets/imagery/jonathan-hero-final-poster.webp'), 'Contact portrait asset missing');
const journalStyles = read('journal/journal.css');
const dossierStyles = read('journal/dossier.css');
assert(homepage.includes('background:#F4F7F7'), 'Initial page backdrop must match Mist');
assert(homepage.includes('--design-mist:#F4F7F7'), 'Floating panel design system absent from rendered homepage');
assert(homepage.includes('--design-elevation:'), 'Layered section shadows are missing');
assert(homepage.includes('--design-deep-teal:#0F8B8D'), 'Portfolio teal accent is missing');
assert(homepage.includes('#4C1D68'), 'CLS plum chapter is missing from homepage');
assert(journalStyles.includes('--jr-amber:#FFB33B'), 'CLS amber identity missing');
assert(dossierStyles.includes('V2 CLS dossier'), 'CLS dossier visual system missing');
console.log('verified generated homepage, floating-panel palette, JS bundle, journal, dossier, portrait, and footer');
