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
assert(css.includes('.jz-fw-slide') && css.includes('grid-template-columns:repeat(4'),'Project carousel or CLS four-card grid absent');
assert(p1.includes('jz-fw-gallery-layout'),'Gallery side-navigation wrapper absent');
assert(p1.includes('aria-label="Previous project"')&&p1.includes('aria-label="Next project"'),'Gallery arrow controls absent');
assert(p1.includes("onClick={(e) => open(e, p)}"),'Visible cards should open their real case study');
assert(home.includes('04 / THE EVIDENCE')&&home.includes('03 / THE STUDIO'),'CLS four chapters absent');
for(const label of ['Read the journal','Explore the framework','Explore the studio','Open the dossier']){
 assert(home.includes(label),'CLS navigation missing: '+label);
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
assert(css.includes('html .jiz-homepage .jz-fw .jz-fw-project-title'),'Image-first project typography missing');
assert(css.includes("font-family:'Manrope'"),'Display typography refinement missing');
// V5: all six user-supplied image backgrounds ship as real local assets.
const sectionBackgrounds = [
 ['Featured Work','portfolio-selected-work-architecture.jpg','.jz-fw'],
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
assert(home.includes('jonathan-hero-final.mp4'), 'Hero film must remain unchanged');
console.log('PASS: Six owner-supplied section backgrounds committed and mapped; original hero preserved.');
console.log('PASS: V4 visual identity, five-link navigation, experience contrast, image-first carousel, 11 routes, 4 CLS chapters, brand assets and base contrast.');
