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
console.log('verified generated homepage, JS bundle, journal, dossier, portrait, and footer');
