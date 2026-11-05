// Case-study release gate: validate prerendered routes and shared UX contracts.
// Run after node build.cjs. Uses Node core only; deterministic and offline.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const read = p => fs.readFileSync(path.join(root,p), 'utf8');
const homepage = read('index.html');
const routes = [
  'legacy-unlocked',
  'hotelkey-onboarding',
  'guest-crm-pilot',
  'workday-learn-launch',
  'the-first-sentence',
  'drafted-by-ai',
  'marcus-live'
];
const requiredAssets = [
  'case-study-experience.css',
  'case-study-motion.js',
  'cinematic-scroll.css',
  'cinematic-scroll.js',
  'editorial-atmosphere.css',
  'editorial-atmosphere.js'
];
for (const asset of requiredAssets) {
  assert.ok(fs.existsSync(path.join(root,asset)), 'Missing asset: ' + asset);
  assert.ok(homepage.includes(asset), 'Asset missing from homepage shell: ' + asset);
}
for (const id of ['work','creative-lab','contact']) {
  assert.match(homepage, new RegExp('\\bid="' + id + '"'), 'Homepage missing anchor #' + id);
}
assert.ok(homepage.includes('data-prerender'), 'Homepage must remain prerendered');
const atmosphere = read('editorial-atmosphere.css');
const atmosphereJS = read('editorial-atmosphere.js');
const caseMotion = read('case-study-motion.js');
assert.ok(atmosphere.includes('--chapter-gallery-surface:#46515C'), 'Lighter gallery surface missing');
assert.ok(atmosphere.includes('--chapter-glow-alpha'), 'Color-tinted homepage shadow must be present');
assert.ok(atmosphere.includes('rgba(var(--chapter-rgb),var(--chapter-glow-alpha))'), 'Homepage shadow must use section accent color');
assert.ok(atmosphere.includes('--case-panel-glow'), 'Case studies must use project accent shadows');
assert.ok(atmosphere.includes('color-mix(in srgb,var(--case-panel-glow) 54%,transparent)'), 'Case-study color-tinted shadow missing');
assert.ok(atmosphere.includes('.jiz-homepage .jz-fw::before'), 'Legacy Featured Work rail must remain suppressed');
assert.ok(!atmosphere.includes('div[data-section]::after'), 'Homepage moving accent rail must be removed');
assert.ok(!atmosphere.includes('.jiz-chapter[data-cs-motion]::after'), 'Case-study moving accent rail must be removed');
assert.ok(!atmosphereJS.includes('--chapter-sweep'), 'Unused homepage rail animation variable must be removed');
assert.ok(!caseMotion.includes('--case-sweep'), 'Unused case-study rail animation variable must be removed');
assert.ok(atmosphereJS.includes("'creative-lab':'cyan'") && atmosphereJS.includes("thinking:'cyan'") && atmosphereJS.includes("impact:'lime'"), 'Section-specific accent palette missing');
assert.ok(homepage.includes('data-section="speaking"'), 'Speaking must use the shared chapter structure');
assert.ok(homepage.includes('All newsletter editions'), 'Newsletter archive CTA missing');
assert.ok(homepage.includes('TEACHING STUDIO / IN DEVELOPMENT'), 'Teaching must be correctly labeled as in development');
assert.ok(!homepage.includes('Selected Additional Work'), 'Additional Work must be held from the rendered homepage');
assert.ok(!homepage.includes('Explore additional work'), 'Hidden Additional Work must not be promoted in Featured Work');
assert.ok(homepage.includes('jz-ct-choices'), 'Contact must offer goal-based entry points');
assert.ok(homepage.includes('jz-ct-poster'), 'Contact editorial visual missing');
assert.ok(homepage.includes('jiz-build-form-start'), 'Progressive contact form missing');
const lab = read('creative-lab-v5.js');
assert.ok(!lab.includes('corner tl'), 'Creative Lab viewfinder brackets should be removed from markup');
assert.ok(atmosphere.includes('--chapter-gallery-surface:#46515C'), 'Gallery canvas must use lighter graphite');
assert.ok(atmosphere.includes('--case-panel-glow'), 'Shared case-study shadow token missing');
assert.ok(atmosphere.includes('footer.jiz-footer::before'), 'Signature footer grid missing');
assert.ok(atmosphere.includes('.jz-ct-choices'), 'Contact editorial choice cards missing');

const editorial = read('HomepageP1.jsx');
assert.ok(editorial.includes("featuredOrder = ['case-study','hotelkey-onboarding','guest-crm-pilot','workday-learn'"), 'Enterprise case studies should lead Featured Work');
const journal = read('content/journal.js');
assert.ok(journal.includes('https://www.linkedin.com/pulse/every-shot-you-choose-learning-design-decision-jonathan-zamarripa-avdde'), 'Verified issue 03 article must link to its publication');


let checked = 0;
for (const slug of routes) {
  const url = '/work/' + slug + '/';
  const document = read(path.join('work',slug,'index.html'));
  assert.ok(document.includes('class="jiz-project-nav"'), url + ' missing shared navigation');
  assert.ok(document.includes('aria-label="Project navigation"'), url + ' missing accessible navigation');
  assert.ok(document.includes('href="/#work"'), url + ' missing back-to-work link');
  assert.ok(document.includes('class="jiz-chapter'), url + ' missing rounded chapter architecture');
  assert.ok(document.includes('id="main-content"'), url + ' missing skip-link target');
  assert.ok(document.includes('rel="canonical"'), url + ' missing canonical');
  assert.ok(document.includes('case-study-motion.js'), url + ' missing shared motion script');
  assert.ok(document.includes('case-study-experience.css'), url + ' missing chapter styles');

  for (const match of document.matchAll(/(?:href|src)="(\/assets\/[^"#?]+)"/g)) {
    const asset = match[1].slice(1);
    assert.ok(fs.existsSync(path.join(root,asset)), url + ' missing local asset: ' + asset);
  }
  checked++;
}
const app = read('App.jsx');
assert.ok(app.includes('<CaseStudyNavigation view={displayView} />'), 'Internal view navigation missing');
assert.ok(app.includes('<CaseStudyNavigation view={view} overlay'), 'Overlay navigation missing');
console.log('Case-study integrity passed: ' + checked + ' standalone routes, internal and overlay nav, anchors and local assets.');
