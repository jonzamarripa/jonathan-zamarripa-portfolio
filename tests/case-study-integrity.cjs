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
assert.ok(homepage.includes('Browse the complete newsletter archive'), 'Editorial archive pathway missing');
assert.ok(homepage.includes('TEACHING STUDIO / IN DEVELOPMENT'), 'Teaching must be correctly labeled as in development');
assert.ok(!homepage.includes('Selected Additional Work'), 'Additional Work must be held from the rendered homepage');
assert.ok(!homepage.includes('Explore additional work'), 'Hidden Additional Work must not be promoted in Featured Work');
assert.ok(homepage.includes('jz-ct-choices'), 'Contact must offer goal-based entry points');
assert.ok(!read('Homepage.jsx').includes('className="jiz-build-background-video'), 'Contact must not show portrait overlay');
assert.ok(read('Homepage.jsx').includes('const [formOpen, setFormOpen] = React.useState(false)'), 'Contact form must use progressive disclosure by default');
assert.ok(read('Homepage.jsx').includes('hidden={!formOpen}'), 'Contact form must remain accessible and open on intent choice');
assert.ok(fs.existsSync(path.join(root,'assets/imagery/contact-the-invitation.webp')), 'Approved Contact architecture image is missing');
assert.ok(read('Homepage.jsx').includes('contact-the-invitation.webp'), 'Contact must reference its dedicated architectural image');
assert.ok(read('Homepage.jsx').includes('jz-ct-mail'), 'Contact direct email pathway missing');
assert.ok(read('HomepageP1.jsx').includes('featured-work-glass-panels.webp'), 'Featured Work must use the approved glass image');
assert.ok(fs.existsSync(path.join(root,'assets/imagery/featured-work-glass-panels.webp')), 'Approved Featured Work image asset missing');
assert.ok(homepage.includes('jiz-build-form-start'), 'Progressive contact form missing');
assert.ok(homepage.includes('id="archive"'), 'Legacy archive hash must resolve to Featured Work');
assert.ok(read('Homepage.jsx').includes('setForm({ ...EMPTY, intent: form.intent })'), 'Contact should retain inquiry category after successful submission');
assert.ok(read('site-config.js').includes("archive: '/#work'"), 'Archive navigation should resolve to available Featured Work');
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
// Editorial subpage continuity and navigation release contract.
const speaker = read('speaking/index.html');
const journalHub = read('journal/index.html');
const dossier = read('journal/designed-for-dana-wrong-for-marcus/index.html');
const journalCss = read('journal/journal.css');
const dossierCss = read('journal/dossier.css');
assert.ok(speaker.includes('class="sp-scene sp-scene--cover"'), 'Speaking must present a single full-scene hero, not a player');
assert.ok(!speaker.includes('<video'), 'Speaking should not contain a playable promo');
assert.ok(speaker.includes('Keynote') && speaker.includes('Workshop') && speaker.includes('Panel'), 'Speaking format options missing');
assert.ok(speaker.includes('data-editorial-return'), 'Speaking return navigation missing');
assert.ok(journalHub.includes('data-editorial-return'), 'Journal reader return navigation missing');
assert.ok(journalHub.includes('id="framework"') && journalHub.includes('id="evidence"'), 'Framework/evidence deep links missing');
assert.ok(journalCss.includes('body.jr main > #framework'), 'Framework architectural panel styling missing');
assert.ok(dossierCss.includes('body.jr .dx-body > .dx-ch'), 'Dossier chapter separation missing');
assert.ok(journalCss.includes('scroll-margin-top:155px') && dossierCss.includes('scroll-margin-top:155px'), 'Mobile editorial anchor offsets missing');
assert.ok(dossier.includes('class="dx-ch'), 'Dossier chapters missing');
assert.ok(read('editorial-return.js').includes('jiz-editorial-origin-v1'), 'Return-to-scroll preservation missing');
assert.ok(homepage.includes('editorial-return.js'), 'Homepage editorial return script missing');

const firstSentence = read('CaseStudy-FirstSentence.jsx');
const marcusLive = read('CaseStudy-MarcusLive.jsx');
const homepageSource = read('Homepage.jsx');
const speakingPage = read('speaking/index.html');
const journalPage = read('journal/index.html');
const dossierPage = read('journal/designed-for-dana-wrong-for-marcus/index.html');
assert.ok(!firstSentence.includes('className="tfs-top"'), 'First Sentence must not duplicate global case study navigation');
assert.ok(!marcusLive.includes('className="tfs-top"'), 'Marcus Live must not duplicate global case study navigation');
assert.ok(firstSentence.includes('tfs-hero--immersive') && firstSentence.includes('tfs-hero__statement'), 'First Sentence hero must layer editorial premise over enlarged artwork');
assert.ok(homepageSource.includes('className="jiz-footer-name jiz-footer-name--link"'), 'Footer name must link to portfolio homepage');
assert.ok(homepageSource.includes('className="jiz-footer-mark" href="/"'), 'Footer logo must link to portfolio homepage');
assert.ok(speakingPage.includes('class="jiz-editorial-footer"') && journalPage.includes('class="jiz-editorial-footer"') && dossierPage.includes('class="jiz-editorial-footer"'), 'Static subpages must share editorial footer');
assert.ok(speakingPage.includes('sp-bio-expansion'), 'Speaking page must have extended bio');
assert.ok(speakingPage.includes('class="sp-format-strip"'), 'Speaking formats must remain visible');
assert.ok(journalPage.includes('class="jr-menu"'), 'Journal must have mobile navigation like Speaking');
assert.ok(read('editorial-footer.css').includes('.jiz-editorial-footer::before'), 'Shared footer grid system absent');
assert.ok(read('editorial-v7.css').includes('.jz-im-evidence'), 'Impact evidence interaction styling missing');

const v8 = read('editorial-v8.css');
assert.ok(homepage.includes('editorial-v8.css'), 'Homepage v8 design system not loaded');
for(const path of ['speaking/index.html','journal/index.html','resume/index.html']) {
  assert.ok(read(path).includes('editorial-v8.css'), path+' missing shared v8 styles');
}
assert.ok(v8.includes('--chapter-gallery-surface:#515D68'), 'Lighter graphite must be used for gallery');
assert.ok(read('Chapter.jsx').includes('function ChapterSymbol'), 'Shared case studies must gain accessible visual chapter icons');
assert.ok(read('App.jsx').includes('Jonathan Iker Zamarripa'), 'Full portfolio name missing from case-study header');
assert.ok(read('CaseStudy-MarcusLive.jsx').includes('tfs-tab-copy'), 'Companion-project tabs need balanced copy');
assert.ok(!read('Homepage.jsx').includes("['Behind the Build', 'btb'], ['Speaking'"), 'Footer must omit Behind the Build');
assert.ok(!read('editorial-footer.cjs').includes('href="/resume/"'), 'Static footer must not promote résumé');
assert.ok(!read('editorial-footer.cjs').includes('LinkedIn'), 'Static footer must not promote LinkedIn');
assert.ok(!read('editorial-footer.cjs').includes('Read the Newsletter'), 'Static footer must not include newsletter');
assert.ok(read('HomepageP1.jsx').includes('jz-pr-tool-chips'), 'Expanded capabilities must use scannable chips');
assert.ok(read('HomepageP1.jsx').includes('jz-pr-commitment'), 'Method accountability rule must be integrated');
assert.ok(read('HomepageP1.jsx').includes('Incoming Instructional Designer'), 'Upcoming Intuit role must be factual');
assert.ok(read('resume/index.html').includes('Incoming Contract'), 'Web résumé must include clearly upcoming Intuit engagement');
assert.ok(fs.existsSync(path.join(root,'assets/imagery/train-story-preview-frame.jpg')), 'Train Story authentic frame missing');
assert.ok(read('creative-lab-v5.js').includes('THE THRESHOLD'), 'Train film preview should feature film frame, not large original title');

for (const portrait of ['assets/imagery/speaking/speaker-cinematic-dark.jpg','assets/imagery/speaking/speaker-contact-warm.jpg']) {
  assert.ok(fs.existsSync(path.join(root,portrait)), 'User-provided portrait missing: '+portrait);
}
assert.ok(read('build-speaking.cjs').includes('speaker-cinematic-dark.jpg'), 'Speaking hero must use supplied dark image');
assert.ok(read('build-speaking.cjs').includes('speaker-contact-warm.jpg'), 'Speaking bio must use supplied warm image');
assert.ok(read('editorial-v7.css').includes('speaker-contact-warm.jpg'), 'Contact must use supplied warm image');
assert.ok(read('SpeakingPreview.jsx').includes('sp-preview-scene'), 'Homepage Speaking must be integrated portrait scene');
assert.ok(read('Homepage.jsx').includes('data-chapter-label="03 / SELECTED WORK"'), 'Editorial chapter numbering missing');
assert.ok(!read('HomepageP1.jsx').includes('timer = setTimeout(() => { start = undefined;'), 'Metrics should not restart after finishing');

assert.ok(read('HomepageP1.jsx').includes('function MetricEvidence'), 'Impact evidence disclosure component missing');
assert.ok(read('HomepageP1.jsx').includes('function PortfolioGlyph'), 'Shared icon system missing');
assert.ok(!read('HomepageP1.jsx').includes('className="jz-fw-steps"'), 'Redundant numeric carousel selectors must be removed');
assert.ok(!homepageSource.includes('Email me directly'), 'Contact should prioritize inquiry flow over raw email');
assert.ok(speakingPage.includes('sp-scene--cover') && speakingPage.includes('sp-scene-intro'), 'Speaking hero must integrate intro over portrait');


const app = read('App.jsx');
assert.ok(app.includes('jiz-project-nav__menu') && app.includes('jiz-project-nav__links'), 'Case study navigation must use Speaking style structure');
assert.ok(app.includes('src="/assets/logo/jiz-logo-white.svg"'), 'Case-study navigation must display actual brand logo');
assert.ok(app.includes('<CaseStudyNavigation view={displayView} />'), 'Internal view navigation missing');
assert.ok(app.includes('{Footer && <Footer standalone'), 'Overlay must have shared footer');
assert.ok(!app.includes('className="jiz-project-nav__work"'), 'Duplicate All Work action should be removed from top navigation');

assert.ok(app.includes('<CaseStudyNavigation view={view} overlay'), 'Overlay navigation missing');
console.log('Case-study integrity passed: ' + checked + ' standalone routes, internal and overlay nav, anchors and local assets.');
