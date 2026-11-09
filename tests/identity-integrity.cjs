// V3 design QA — compile-time guard for the preserved Editorial v8 architecture.
const fs = require('node:fs');
const assert = require('node:assert/strict');
const read = p => fs.readFileSync(p,'utf8');
const html = read('index.html');
const css = read('identity-mist-v2.css');
const p1 = read('HomepageP1.jsx');
const home = read('Homepage.jsx');
const journal = read('journal/index.html');
const dossier = read('journal/designed-for-dana-wrong-for-marcus/index.html');
const speaking = read('speaking/index.html');
const resume = read('resume/index.html');
const pages = ['index.html','journal/index.html','speaking/index.html','resume/index.html',...[
'legacy-unlocked','hotelkey-onboarding','guest-crm-pilot','workday-learn-launch','the-first-sentence','drafted-by-ai','marcus-live'
].map(x=>'work/'+x+'/index.html')];
for(const name of pages){
 assert(fs.existsSync(name),'Expected generated route missing: '+name);
 assert(read(name).includes('identity-mist-v2.css'),'New visual system not linked on '+name);
}
assert(html.includes('family=Manrope') && html.includes('family=Inter'),'Main font pair missing');
assert(journal.includes('family=Manrope') && journal.includes('family=Inter'),'Journal fonts missing');
assert(speaking.includes('family=Manrope') && resume.includes('family=Manrope'),'Standalone fonts missing');
for(const s of ['#F4F7F7','#0B1F2A','#0F8B8D','#C6F23A','#15181C','#C6A15B','#E7D8B7','#31444B']){
 assert(css.includes(s),'Missing approved design token: '+s);
}
assert(css.includes('html footer.jiz-footer'),'Dark logo footer not defined');
assert(p1.includes('className="jz-fw-slide"') && css.includes('grid-template-columns:repeat(4'),'Featured Work carousel or CLS four-card grid absent');
assert(p1.includes('jz-fw-gallery-layout'),'Gallery side-navigation wrapper absent');
assert(p1.includes('aria-label="Previous project"')&&p1.includes('aria-label="Next project"'),'Gallery arrow controls absent');
assert(p1.includes("onClick={(e) => open(e, p)}"),'Visible cards should open their real case study');
assert(home.includes('04 / THE DESIGNER')&&home.includes('03 / THE AUTHOR'),'CLS four editorial chapters absent');
for(const label of ['Explore the thinking','Hear the ideas','Read the writing','Explore the work']){
 assert(home.includes(label),'CLS editorial navigation missing: '+label);
}
for(const asset of ['assets/logo/jiz-logo-white.svg','assets/imagery/cinematic-learning-systems-poster.webp','assets/imagery/jonathan-hero-final-poster.webp','assets/imagery/train-story-preview-frame.jpg']){
 assert(fs.existsSync(asset),'Visual asset missing: '+asset);
}
assert(html.includes('jiz-footer-logo'),'Brand logo missing from homepage');
assert(!p1.includes("'Atlas'") && !p1.includes("'Tide'") && !p1.includes("'Lumen'"),'Concept-only project content leaked into site');
assert(dossier.includes('identity-mist-v2.css'),'Dossier lost design stylesheet');
function contrast(fg,bg){
 const decode=c=>{const q=c.slice(1).match(/../g).map(x=>parseInt(x,16)/255);return q.map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((a,v,i)=>a+v*[.2126,.7152,.0722][i],0)};
 const x=decode(fg),y=decode(bg);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);
}
assert(contrast('#F4F7F7','#0B1F2A')>=4.5,'Hero/footer contrast too low');
assert(contrast('#122C36','#F4F7F7')>=4.5,'Editorial text contrast too low');
assert(contrast('#15181C','#E7D8B7')>=4.5,'CLS card text contrast too low');
const siteConfig = read('site-config.js');
assert(home.includes("['Work', 'Method', 'Learning', 'About', 'Contact']"),'Reference navigation must use five sections');
assert(siteConfig.includes("nav: 'Learning'") && siteConfig.includes("'Thinking'"),'Learning link must retain the Thinking route');
assert(css.includes('html .jiz-homepage .jiz-global-nav.is-scrolled'),'Light sticky header treatment missing');
assert(css.includes('html .jiz-homepage .jz-exp .jz-exp-org'),'Selected Experience contrast treatment missing');
assert(p1.includes('.jz-fw-project-title'),'Featured Work component typography missing');
assert(css.includes("font-family:'Manrope'"),'Display typography refinement missing');
// V5: all six user-supplied image backgrounds ship as real local assets.
const sectionBackgrounds = [
 ['Featured Work','portfolio-selected-work-architecture.jpg','.jz-jr'],
 ['Capabilities','portfolio-capabilities-systems.jpg','.jz-pr--capabilities'],
 ['Method','portfolio-method-process.jpg','.jz-pr--method'],
 ['Cinematic Learning Systems','portfolio-cls-gold-landscape.jpg','.jz-cls'],
 ['Creative Lab','portfolio-creative-lab-studio.jpg','.jiz-creative-lab'],
 ['Contact','portfolio-contact-threshold.jpg','.jiz-build']
];
for (const [label,asset,selector] of sectionBackgrounds) {
 const file='assets/imagery/'+asset;
 assert(fs.existsSync(file), label+': background asset missing: '+file);
 assert(fs.statSync(file).size > 100000,label+': source image unexpectedly small');
 assert(css.includes("url('/"+file+"')"),label+': background CSS asset not wired');
 assert(css.includes(selector),label+': expected section selector missing');
 assert(html.includes('identity-mist-v2.css'),label+': homepage stylesheet missing');
}
assert(home.includes('hero-portrait-2026.mp4') && home.includes('jonathan-hero-final.mp4'), 'Owner hero film and original compatibility fallback required');
console.log('PASS: Six owner-supplied section backgrounds committed and mapped; original hero preserved.');
// V6: user-selected additional assets, speaker video, emphasis and single-row workflow.
const latestAssets = [
 ['About','assets/imagery/portfolio-about-reflective-studio.jpg'],
 ['Speaking poster','assets/imagery/portfolio-speaking-film-still.jpg'],
 ['Creative Lab','assets/imagery/portfolio-creative-lab-camera-workshop.jpg'],
 ['Principles','assets/imagery/portfolio-principles-glass.jpg'],
 ['Stack','assets/imagery/portfolio-stack-systems.jpg'],
 ['Journey','assets/imagery/portfolio-career-journey.jpg'],
 ['Speaking film','assets/video/speaking/portfolio-speaking-editorial-720p.mp4']
];
for (const [label,path] of latestAssets) {
  assert(fs.existsSync(path),'Missing '+label+' media '+path);
  assert(fs.statSync(path).size>100000,'Unexpectedly small '+label+' media');
}
const speaker=read('SpeakingPreview.jsx');
assert(speaker.includes('sp-preview-backdrop-video'),'Speaking film element is missing');
assert(speaker.includes('portfolio-speaking-editorial-720p.mp4'),'Speaking film asset not connected');
assert(css.includes("portfolio-creative-lab-camera-workshop.jpg"),'Vintage camera lab background absent');
for (const asset of ['portfolio-about-reflective-studio.jpg','portfolio-principles-glass.jpg','portfolio-stack-systems.jpg','portfolio-career-journey.jpg']) {
 assert(css.includes(asset),'Companion background not wired: '+asset);
}
assert(p1.includes('summa cum laude'),'Education distinction missing');
assert(home.includes('<strong className="hero-title-main">From complex change'),'Headline hierarchy not updated');
assert(css.includes('grid-template-columns:repeat(5,minmax(0,1fr))'),'Five-stage desktop line is missing');
assert(css.includes('grid-auto-flow:column'),'Smaller screens must scroll rather than break Method into two rows');
assert(css.includes('html .jiz-homepage .jz-st-tools li'),'Consistent chartreuse tool chips are missing');
console.log('PASS: V6 speaker film, six supplemental images, bold capability/tool accents, five-stage Method and summa cum laude.');

const creativeMarkup = read('creative-lab-v5.js');
assert(p1.includes("'Intuit'"),'Intuit must appear in current Selected Experience list');
assert(creativeMarkup.includes('Creative Lab <span class=\\\"divider\\\">/</span> Independent Films'),'Creative Lab label is not concise');
assert(css.includes("portfolio-principles-glass.jpg") && css.includes('html .jiz-homepage .jz-im'),'Impact visual background not connected');
assert(css.includes('.jiz-creative-lab-v5 .lab') && css.includes("portfolio-creative-lab-camera-workshop.jpg"),'Inner Creative Lab background is not applied');
assert(css.includes('jiz-node-signal') && css.includes('jiz-rail-reveal'),'Method pulses and connecting rail animation missing');
assert(home.includes("entry.target.dataset.motionIn = 'true'"),'Scroll-triggered section entrance missing');
assert(home.includes("prefers-reduced-motion: reduce"),'Reduced motion guard missing');
assert(!home.includes('className="jiz-build-background-video') && home.includes('jiz-build-form-start'), 'Contact portrait must be removed and the form rendered directly');
assert(home.includes('React.useState(true)'), 'Contact conversation form must be visible by default');
const contactFilm = 'assets/video/portfolio-contact-executive.mp4';
const contactPoster = 'assets/imagery/portfolio-contact-executive-poster.jpg';
assert(fs.existsSync(contactFilm) && fs.statSync(contactFilm).size===6245039,'Original Contact film missing or corrupt');
assert(fs.existsSync(contactPoster) && fs.statSync(contactPoster).size>50000,'Contact portrait fallback still missing');
assert(css.includes('jz-ct-poster--portrait .jz-ct-poster-video'),'Larger Contact media framing missing');
console.log('PASS: V7 scroll motion, Method pulses, Impact image, Creative Lab, Intuit and owner-provided Contact video');
// V8 full-bleed media and navigation regression gates.
const featuredFilm='assets/video/portfolio-featured-work-glass.mp4';
assert(fs.existsSync(featuredFilm)&&fs.statSync(featuredFilm).size===3466951,'Featured Work original film absent/corrupted');
assert(p1.includes('featured-work-glass-panels.webp')&&!p1.includes('jz-fw-ambient-video'),'Featured Work must display the new static glass-panel image, not the video');
assert(fs.existsSync('assets/imagery/featured-work-glass-panels.webp'),'Featured Work image asset must be committed');
assert(!home.includes('className="jiz-build-background-video') && home.includes('jz-ct-mail'),'Contact must have no portrait video and a direct email option');
assert(!home.includes('<div className="jz-ct-poster jz-ct-poster--portrait"'),'Old Contact portrait layout must be removed');
assert(home.includes('backdrop-filter:blur(24px)'),'Contact conversation card must use translucent glass styling');
assert(p1.includes('.jz-fw-ambient-scrim'),'Featured Work text-legibility gradient missing');
assert(css.includes('.jz-jr-stage') && css.includes('portfolio-selected-work-architecture.jpg'),'Journey elevated background/card design missing');
assert(p1.includes('<PortfolioGlyph kind={["clarity","people","evidence"'),'Principles glyphs missing');
assert(css.includes('.jz-pp-n svg') && css.includes('color:#C6F23A'),'Chartreuse Principles icon treatment missing');
assert(home.includes('--jiz-nav-progress') && css.includes('nav.jiz-global-nav::after'),'Scroll-responsive navigation progress missing');
assert(home.includes('activeSection === \'method\'')&&home.includes("activeSection === 'contact'"),'Active nav grouping absent');
assert(css.includes('@media(prefers-reduced-motion:reduce)'),'Motion accessibility protections missing');
// Navigation wordmark and motion invariants: catch regressions before preview deployment.
const cinematicScroll = read('cinematic-scroll.js');
const atmosphereScript = read('editorial-atmosphere.js');
const motionSiteConfig = read('site-config.js');

assert(html.includes('jiz-brand__accent') && html.includes('>Iker</span>'), 'Navigation must retain separate Iker wordmark span');
assert(css.includes('Navigation identity emphasis') && css.includes('font-weight:900!important') && css.includes('color:#496300!important'), 'Distinct high-contrast Iker identity styling missing');
assert(css.includes('nav.jiz-global-nav .jiz-brand__name .jiz-brand__accent'), 'Iker styling must be scoped to navigation');
assert(cinematicScroll.includes('IntersectionObserver') && cinematicScroll.includes('revealAll()'), 'Scroll reveals must support observer fallback and motion off');
assert(cinematicScroll.includes("data-jz-motion-paused") && cinematicScroll.includes('prefers-reduced-motion'), 'Scroll reveals must honor manual pause and reduced motion');
assert(atmosphereScript.includes("prefers-reduced-motion") && atmosphereScript.includes('requestAnimationFrame'), 'Atmospheric motion must be frame-scheduled and honor user preference');
assert(motionSiteConfig.includes('syncDecorativeMotion') && motionSiteConfig.includes("jiz-motion-paused"), 'Motion pause preference wiring is missing');
assert(html.includes('cinematic-scroll.js') && html.includes('editorial-atmosphere.js'), 'Motion modules not linked in published HTML');
console.log('PASS: Distinct Iker nav treatment and source-level animation, reduced-motion and observer contracts.');
console.log('PASS: Featured Work static image, portrait-free glass Contact, elevated Journey, chartreuse Principles, scrollspy nav.');
console.log('PASS: V4 visual identity, five-link navigation, experience contrast, image-first carousel, 11 routes, 4 CLS chapters, brand assets and base contrast.');
