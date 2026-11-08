/* P1 editorial sections: SelectedExperience, FeaturedWorkEditorial, ImpactEditorial, Practice.
   Shared visual system: 12-col editorial grid, hairline rules instead of cards, lime reserved for actions + the single most important figure. */

function useInViewOnce(ref, opts) {
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (prefersReduced() || typeof IntersectionObserver === 'undefined') { setInView(true); return undefined; }
    const fallback = setTimeout(() => setInView(true), 1600);
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { clearTimeout(fallback); setInView(true); io.disconnect(); }
    }, opts || { threshold: 0.12, rootMargin: '120px 0px' });
    io.observe(el);
    return () => { clearTimeout(fallback); io.disconnect(); };
  }, []);
  return inView;
}

const EDITORIAL_CSS = `
.jz-wrap{width:min(1440px,calc(100% - 2*clamp(20px,5.5vw,104px)));margin-inline:auto}
.jz-grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));column-gap:clamp(16px,2vw,32px)}
.jz-label{font:500 .75rem/1.2 var(--font-mono);letter-spacing:.16em;text-transform:uppercase;color:rgba(217,221,227,.62);margin:0}
.jz-rise{opacity:0;transform:translate3d(0,18px,0);transition:opacity 900ms cubic-bezier(.22,.61,.36,1),transform 900ms cubic-bezier(.22,.61,.36,1)}
[data-in="true"] .jz-rise{opacity:1;transform:none}
.jz-link{display:inline-flex;align-items:center;gap:10px;min-height:44px;padding:0;background:none;border:0;color:var(--color-accent-primary);font:600 .9375rem/1 var(--font-body);text-decoration:none;cursor:pointer}
.jz-link span:first-child{background:linear-gradient(currentColor,currentColor) 0 100%/100% 1px no-repeat;padding-bottom:4px;transition:background-size 360ms cubic-bezier(.22,.61,.36,1)}
.jz-link:hover span:first-child{background-size:0 1px;background-position:100% 100%}
.jz-link .jz-arrow{transition:transform 320ms cubic-bezier(.22,.61,.36,1)}
.jz-link:hover .jz-arrow{transform:translateX(5px)}
.jz-link:focus-visible{outline:2px solid var(--color-accent-primary);outline-offset:6px;border-radius:2px}

/* Mobile menu: let the panel scroll on short screens (phones in landscape) now that the nav has seven items */
.jiz-mobile-panel{max-height:100dvh;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}
.jz-visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}
@media(prefers-reduced-motion:reduce){.jz-rise{opacity:1;transform:none;transition:none}.jz-link span:first-child,.jz-link .jz-arrow{transition:none}}
`;
/* Section architecture: each major chapter is an inset rounded panel (Principles is the reference geometry) on the
   dark page, with clearly different surfaces so boundaries read without the headings:
   Work (page) → Impact (Slate) → Capabilities (Mist, light) → Method (Slate) → Cinematic Learning Systems (Ink + Amber/Teal)
   → Creative Lab (page) → About (Slate) → Journey (Warm Paper, light) → Stack (Carbon) → Principles (light) → Archive (page).
   Scoped to .jiz-homepage so it layers over each section's own styles. */
const RHYTHM_CSS = `
.jiz-homepage{--panel-gap:clamp(10px,1.4vw,20px);--panel-r:clamp(18px,2.4vw,32px);--panel-gutter-surface:#171A1F;background:var(--panel-gutter-surface)!important}
/* Every major chapter is a panel; the Carbon page shows through the gutters, so dark panels keep a visible curved edge. */
.jiz-homepage .hero,.jiz-homepage .jz-fw,.jiz-homepage .jz-im,.jiz-homepage .jz-pr,.jiz-homepage .jz-cls,.jiz-homepage .jiz-creative-lab,.jiz-homepage .jiz-am,.jiz-homepage .jz-jr,.jiz-homepage .jz-st,.jiz-homepage .jz-pp,.jiz-homepage .jiz-arch,.jiz-homepage .jiz-build{width:auto;margin:var(--panel-gap);border-radius:var(--panel-r);overflow:hidden;border:0}

/* Hero — cinematic dark panel; video, crop and copy untouched. Height trimmed by the gutters so the fold is unchanged. */
.jiz-homepage .hero{background-color:var(--obsidian);margin-top:0;border-radius:0 0 var(--panel-r) var(--panel-r)}
@media(min-width:901px){.jiz-homepage .hero,.jiz-homepage .hero-content{min-height:calc(100svh - 96px - 2 * var(--panel-gap))}}
/* Selected experience strip sits on the Carbon page between the hero and Featured Work */
.jiz-homepage .jz-exp{background:transparent;border:0}

/* Featured Work — bounded cinematic stage. */
.jiz-homepage .jz-fw{background:var(--obsidian);color:var(--white)}

/* Creative Lab — cinematic Obsidian panel (content and video untouched) */
.jiz-homepage .jiz-creative-lab{background-color:#0B0D10}

/* Archive — its own darkened film; Contact — Slate */
.jiz-homepage .jiz-build{background:var(--surface-slate)}
.jiz-homepage .jiz-build .jz-label,.jiz-homepage .jiz-build .jz-ct-note,.jiz-homepage .jiz-build .jiz-build-form-note,.jiz-homepage .jiz-build .jiz-build-privacy{color:rgba(232,240,245,.82)}

/* Impact — Slate architectural panel; primary metric marked, supporting metrics grouped */
.jiz-homepage .jz-im{background:var(--surface-slate)}
.jiz-homepage .jz-im .jz-label{color:rgba(232,240,245,.74)}
.jiz-homepage .jz-im-note,.jiz-homepage .jz-im-label{color:rgba(240,245,248,.86)}
.jiz-homepage .jz-im-src{color:rgba(225,235,240,.72)}
.jiz-homepage .jz-im-lead{padding-left:clamp(18px,2vw,32px);border-left:2px solid var(--color-accent-primary)}
.jiz-homepage .jz-im-row{margin-top:clamp(48px,6vw,88px);padding:0 clamp(4px,1.4vw,20px);background:rgba(11,13,16,.28);border:0;border-radius:clamp(12px,1.4vw,20px)}
.jiz-homepage .jz-im-cell{padding-bottom:clamp(22px,2.4vw,32px)}
.jiz-homepage .jz-im-cell + .jz-im-cell{border-left-color:rgba(232,240,245,.14)}
@media(max-width:1024px){.jiz-homepage .jz-im-cell:nth-child(n+3),.jiz-homepage .jz-im-cell + .jz-im-cell{border-top-color:rgba(232,240,245,.14)}}

/* Capabilities — Mist light chapter, dark type */
.jiz-homepage .jz-pr--capabilities{background:#D9DDE3;color:#0B0D10}
.jiz-homepage .jz-pr--capabilities .jz-label{color:rgba(11,13,16,.66)}
.jiz-homepage .jz-pr--capabilities .jz-pr-caps-h{color:#0B0D10}
.jiz-homepage .jz-pr--capabilities .jz-pr-sub{color:rgba(11,13,16,.74)}
.jiz-homepage .jz-pr--capabilities .jz-pr-cap{border-top-color:rgba(11,13,16,.16)}
.jiz-homepage .jz-pr--capabilities .jz-pr-cap:last-child{border-bottom-color:rgba(11,13,16,.16)}
.jiz-homepage .jz-pr-cap button{padding:26px 0}
.jiz-homepage .jz-pr--capabilities .jz-pr-cap-t{font-weight:600;color:#0B0D10}
.jiz-homepage .jz-pr--capabilities .jz-pr-cap-c{max-width:60ch;color:rgba(11,13,16,.74)}
.jiz-homepage .jz-pr--capabilities .jz-pr-cap-x{color:rgba(11,13,16,.6)}
.jiz-homepage .jz-pr--capabilities .jz-pr-cap button:hover{background:linear-gradient(90deg,rgba(var(--accent-cyan-rgb),.12),transparent 60%)}
.jiz-homepage .jz-pr--capabilities .jz-pr-cap button:hover .jz-pr-cap-t,.jiz-homepage .jz-pr--capabilities .jz-pr-cap[data-open="true"] .jz-pr-cap-t{color:var(--obsidian);background:var(--accent-cyan)}
.jiz-homepage .jz-pr--capabilities .jz-pr-cap[data-open="true"] .jz-pr-cap-x{color:var(--obsidian);background:var(--accent-cyan)}
.jiz-homepage .jz-pr--capabilities .jz-pr-cap button:focus-visible{outline-color:#0B0D10}
.jiz-homepage .jz-pr--capabilities .jz-pr-tools p{color:rgba(11,13,16,.72)}

/* Method — Slate panel; five stages on a connecting rail */
.jiz-homepage .jz-pr--method{background:#2A2F37}
.jiz-homepage .jz-pr--method .jz-pr-intro,.jiz-homepage .jz-pr--method .jz-pr-c{color:rgba(232,236,240,.86)}
.jiz-homepage .jz-pr-steps{border-top-color:rgba(217,221,227,.26)}
.jiz-homepage .jz-pr-step{padding-top:34px}
.jiz-homepage .jz-pr-step::after{content:'';position:absolute;top:-5px;left:0;width:9px;height:9px;border-radius:50%;background:#2A2F37;border:1px solid var(--color-accent-primary);box-sizing:border-box}
.jiz-homepage .jz-pr-step:last-child::after{background:var(--color-accent-primary)}
.jiz-homepage .jz-pr-step .jz-label{color:var(--color-accent-primary)}
.jiz-homepage .jz-pr-c{max-width:30ch}
.jiz-homepage .jz-pr-rule{padding-top:0;border-top:0;font-size:.875rem;color:rgba(217,221,227,.72)}
@media(max-width:1024px){
  .jiz-homepage .jz-pr-steps{position:relative;padding-left:28px}
  .jiz-homepage .jz-pr-steps::before{content:'';position:absolute;left:4px;top:34px;bottom:34px;width:1px;background:linear-gradient(180deg,rgba(198,242,58,.6),rgba(198,242,58,.2))}
  .jiz-homepage .jz-pr-step{padding-top:26px;border-top-color:rgba(217,221,227,.16)}
  .jiz-homepage .jz-pr-step::after{top:30px;left:-28px}
  .jiz-homepage .jz-pr-step::before{display:none}
  .jiz-homepage .jz-pr-c{max-width:60ch}
}

/* Cinematic Learning Systems — the publication: Ink surface framed in Amber, Teal metadata */
.jiz-homepage .jz-cls{background:#0E1114;box-shadow:inset 0 0 0 1px rgba(227,162,76,.38),inset 0 4px 0 #E3A24C}
.jiz-homepage .jz-cls-mast{border-bottom-color:rgba(227,162,76,.4)}
.jiz-homepage .jz-cls-mast-name{color:#E8E3D9}
.jiz-homepage .jz-cls-lead{background:#132A35;border-color:rgba(86,184,180,.34)}
.jiz-homepage .jz-cls-list li{border-bottom-color:rgba(86,184,180,.22)}
.jiz-homepage .jz-cls-talk{border-top-color:rgba(227,162,76,.4)}

/* About — Slate surface (video untouched) */
.jiz-homepage .jiz-am{background:var(--surface-slate)}
.jiz-homepage .jiz-am-quote-by{font-size:.6875rem;color:rgba(232,240,245,.74)}
.jiz-homepage .jiz-am .jz-label{color:rgba(232,240,245,.78)}

/* Journey — Warm Paper light chapter, dark type, progression rail */
.jiz-homepage .jz-jr{background:#E8E3D9;color:#0B0D10}
.jiz-homepage .jz-jr .jz-label{color:rgba(11,13,16,.62)}
.jiz-homepage .jz-jr-h2,.jiz-homepage .jz-jr-t{color:#0B0D10}
.jiz-homepage .jz-jr-sub,.jiz-homepage .jz-jr-c{color:rgba(11,13,16,.76)}
.jiz-homepage .jz-jr-x{color:var(--obsidian);background:var(--accent-cyan);opacity:1;font-weight:600}
.jiz-homepage .jz-jr-m{color:rgba(11,13,16,.66)}
.jiz-homepage .jz-jr-rail{position:relative}
.jiz-homepage .jz-jr-rail::before{content:'';position:absolute;left:0;right:0;top:0;height:1px;background:linear-gradient(90deg,rgba(11,13,16,.18),rgba(var(--accent-cyan-rgb),.7))}
.jiz-homepage .jz-jr-stage{border-top-color:transparent}
.jiz-homepage .jz-jr-stage::before{box-sizing:border-box;width:9px;height:9px;top:-4px;background:#E8E3D9;border:1.5px solid var(--accent-cyan)}
.jiz-homepage .jz-jr-stage:last-child::before{background:var(--color-accent-primary);border-color:#0B0D10}
@media(max-width:1024px){
  .jiz-homepage .jz-jr-rail::before{display:none}
  .jiz-homepage .jz-jr-stage{border-top-color:rgba(11,13,16,.16)}
}
@media(max-width:560px){
  .jiz-homepage .jz-jr-rail{padding-left:24px}
  .jiz-homepage .jz-jr-rail::before{display:block;left:4px;right:auto;top:0;bottom:0;width:1px;height:auto;background:linear-gradient(180deg,rgba(11,13,16,.18),rgba(var(--accent-cyan-rgb),.7))}
  .jiz-homepage .jz-jr-stage{border-top-color:transparent;padding-top:0}
  .jiz-homepage .jz-jr-stage::before{left:-24px;top:4px}
}

/* Stack — Carbon technical panel; open groups */
.jiz-homepage .jz-st{background:#2A2F37}
.jiz-homepage .jz-st-grid{column-gap:clamp(28px,4vw,72px);row-gap:clamp(8px,1.2vw,16px)}
.jiz-homepage .jz-st-card{padding:clamp(22px,2.2vw,30px) 0 clamp(18px,2vw,26px);background:none;border:0;border-top:1px solid rgba(217,221,227,.16);border-radius:0}
.jiz-homepage .jz-st-l{max-width:58ch;color:rgba(217,221,227,.8)}
.jiz-homepage .jz-st-tools{border-top:0;padding-top:4px}
`;
function EditorialStyles() { return <style>{EDITORIAL_CSS + RHYTHM_CSS}</style>; }

/* ---------- Selected experience ---------- */
function SelectedExperience() {
  const orgs = ['Intuit', 'IHG Hotels & Resorts', 'Cox Enterprises', 'Atlanta International School'];
  return (
    <section className="jz-exp" aria-label="Selected experience">
      <style>{`
.jz-exp{background:#080D0B;border-top:1px solid rgba(217,221,227,.08);border-bottom:1px solid rgba(217,221,227,.08)}
.jz-exp-in{display:flex;flex-wrap:wrap;align-items:center;gap:clamp(14px,2vw,28px) clamp(28px,4vw,64px);padding-block:clamp(22px,2.4vw,32px)}
.jz-exp-list{display:flex;flex-wrap:wrap;align-items:center;gap:10px clamp(20px,2.6vw,40px);list-style:none;margin:0;padding:0}
.jz-exp-org{font:500 clamp(1rem,.9rem + .35vw,1.25rem)/1.2 var(--font-display);letter-spacing:-.01em;color:#E8ECEF}
.jz-exp-edu{margin-left:auto;display:flex;align-items:baseline;gap:12px;flex-wrap:wrap}
.jz-exp-edu span:last-child{font:400 .9375rem/1.3 var(--font-body);color:rgba(217,221,227,.78)}
@media(max-width:860px){.jz-exp-edu{margin-left:0;width:100%;padding-top:14px;border-top:1px solid rgba(217,221,227,.08)}}
      `}</style>
      <div className="jz-wrap jz-exp-in">
        <p className="jz-label">Selected experience</p>
        <ul className="jz-exp-list">{orgs.map((o) => <li key={o} className="jz-exp-org">{o}</li>)}</ul>
        <p className="jz-exp-edu"><span className="jz-label">Education</span><span>M.Ed., Learning Design and Technology, Arizona State University · summa cum laude</span></p>
      </div>
    </section>
  );
}

/* ---------- Featured work ---------- */

function FeaturedWorkEditorial({ onOpenWork }) {
  const track = React.useRef(null);
  const indexDialog = React.useRef(null);
  const indexTrigger = React.useRef(null);
  const ref = React.useRef(null);
  const destination = React.useRef(null);
  const [active, setActive] = React.useState(0);
  const [direction, setDirection] = React.useState('next');
  const inView = useInViewOnce(ref);
  // Enterprise proof first, independent innovation second; the catalog remains the source of truth.
  // Stable view IDs make this presentation order resilient as new studies are added.
  const featuredOrder = ['case-study','hotelkey-onboarding','guest-crm-pilot','workday-learn','the-first-sentence','marcus-live','drafted-by-ai'];
  const projects = window.JIZ_SITE.projects.slice().sort((a,b) => {
    const ai=featuredOrder.indexOf(a.view),bi=featuredOrder.indexOf(b.view);
    return (ai<0?999:ai)-(bi<0?999:bi);
  }).map((p,i)=>({...p,n:String(i+1).padStart(2,'0')}));
  const pathOf = (p) => window.JIZ_SITE.route(p.view).path;
  const plain = (e) => !(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button > 0);
  const open = (e, p) => {
    if (!plain(e) || !onOpenWork || !window.JIZ_SITE.route(p.view).featured) return;
    e.preventDefault(); onOpenWork(p.route);
  };
  const go = (index) => {
    const el = track.current;
    const next = Math.max(0, Math.min(index, projects.length - 1));
    destination.current = next;
    setDirection(next < active ? 'previous' : 'next');
    const card = el.children[next];
    const still = prefersReduced() || document.documentElement.dataset.jzMotionPaused === 'true';
    el.scrollTo({ left: card.offsetLeft - el.children[0].offsetLeft, behavior: still ? 'auto' : 'smooth' });
  };
  React.useEffect(() => {
    const el = track.current;
    let frame, settle;
    const update = () => {
      cancelAnimationFrame(frame);
      clearTimeout(settle);
      frame = requestAnimationFrame(() => {
        const cards = Array.from(el.children);
        const origin = cards[0].offsetLeft;
        let nearest = 0;
        cards.forEach((card, i) => {
          if (Math.abs(card.offsetLeft - origin - el.scrollLeft) < Math.abs(cards[nearest].offsetLeft - origin - el.scrollLeft)) nearest = i;
        });
        setActive(nearest);
      });
      settle = setTimeout(() => { destination.current = null; }, 160);
    };
    const manual = () => { destination.current = null; };
    el.addEventListener('scroll', update, { passive: true });
    el.addEventListener('wheel', manual, { passive: true });
    el.addEventListener('pointerdown', manual, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(frame); clearTimeout(settle);
      el.removeEventListener('scroll', update); el.removeEventListener('wheel', manual);
      el.removeEventListener('pointerdown', manual); window.removeEventListener('resize', update);
    };
  }, []);
  return (
    <section className="jz-fw" ref={ref} data-in={inView ? 'true' : 'false'} aria-labelledby="jz-fw-title" style={{ '--gallery-enter-offset': direction === 'next' ? '18px' : '-18px' }}>
      <div className="jz-fw-ambient-image" aria-hidden="true"/>
      <span className="jz-fw-ambient-scrim" aria-hidden="true"/>
      <EditorialStyles />
      <style>{`
/* Featured Work: canonical editorial gallery, no layered legacy card overrides. */
.jiz-homepage .jz-fw{
  position:relative;isolation:isolate;background:#0b0d10;color:#f5f7f7;
  padding-block:clamp(56px,7vw,96px);
}
.jiz-homepage .jz-fw .jz-fw-ambient-image{
  position:absolute;inset:0;z-index:0;pointer-events:none;
  background:#0b0d10 url('/assets/imagery/featured-work-glass-panels.webp') center/cover no-repeat;
}
.jiz-homepage .jz-fw .jz-fw-ambient-scrim{
  position:absolute;inset:0;z-index:1;pointer-events:none;
  background:linear-gradient(90deg,rgba(11,13,16,.85),rgba(11,13,16,.57)),
             linear-gradient(180deg,rgba(11,13,16,.32),rgba(11,13,16,.72));
}
.jiz-homepage .jz-fw .jz-fw-stage{
  width:min(var(--chapter-max,1180px),calc(100% - 2 * clamp(20px,4vw,56px)));
  margin-inline:auto;position:relative;z-index:2;min-width:0;
}
.jiz-homepage .jz-fw .jz-fw-heading{margin:0 0 30px;max-width:740px}
.jiz-homepage .jz-fw .jz-fw-h2{
  margin:12px 0 20px;color:#f5f7f7;
  font:600 clamp(2.5rem,4.5vw,4.5rem)/1.05 var(--font-display);letter-spacing:-.045em;
}
.jiz-homepage .jz-fw .jz-fw-heading>p{
  margin:0;max-width:58ch;color:#d9e0e2;font:400 1rem/1.65 var(--font-body);
}
.jiz-homepage .jz-fw .jz-label{color:#c6d7dc}
.jiz-homepage .jz-fw .jz-fw-toolbar{margin-bottom:16px}
.jiz-homepage .jz-fw .jz-fw-instruction{margin:0;color:#d1dcdf;font:.875rem/1.6 var(--font-body)}
.jiz-homepage .jz-fw .jz-fw-motion-paused,
.jiz-homepage .jz-fw .jz-fw-motion-reduced{display:none;color:#d7e3e6;font-size:.75rem}
html[data-jz-motion-paused="true"] .jiz-homepage .jz-fw .jz-fw-motion-paused{display:block}
@media(prefers-reduced-motion:reduce){
 .jiz-homepage .jz-fw .jz-fw-motion-reduced{display:block}
 html[data-jz-motion-paused="true"] .jiz-homepage .jz-fw .jz-fw-motion-reduced{display:none}
}
.jiz-homepage .jz-fw .jz-fw-gallery-layout{display:block;min-width:0}
.jiz-homepage .jz-fw .jz-fw-buttons{
  display:flex;align-items:center;justify-content:flex-end;gap:10px;margin-bottom:14px;
}
.jiz-homepage .jz-fw .jz-fw-buttons button{
  display:inline-flex;align-items:center;justify-content:center;gap:10px;
  min-height:46px;padding:10px 17px;border:1px solid rgba(232,240,245,.36);
  border-radius:10px;background:rgba(11,13,16,.78);color:#f3f7f7;
  font:600 .875rem/1.3 var(--font-body);cursor:pointer;transition:background 180ms,border-color 180ms;
}
.jiz-homepage .jz-fw .jz-fw-buttons button:hover:enabled{
  background:#36434b;color:#fff;border-color:rgba(232,240,245,.65);
}
.jiz-homepage .jz-fw .jz-fw-buttons button:disabled{opacity:.45;cursor:default}
.jiz-homepage .jz-fw .jz-fw-track{
  display:flex;align-items:stretch;gap:0;min-width:0;width:100%;
  overflow-x:auto;overflow-y:hidden;
  scroll-snap-type:x mandatory;scroll-padding:0;
  padding:0;margin:0;border:1px solid rgba(232,240,245,.22);
  border-radius:18px;background:#151c21;
  scrollbar-width:none;overscroll-behavior-inline:contain;
}
.jiz-homepage .jz-fw .jz-fw-track::-webkit-scrollbar{display:none}
.jiz-homepage .jz-fw .jz-fw-track::after{display:none;content:none}
.jiz-homepage .jz-fw .jz-fw-slide{
  position:relative;display:block;flex:0 0 100%;width:100%;min-width:0;
  scroll-snap-align:start;scroll-snap-stop:always;
}
.jiz-homepage .jz-fw .jz-fw-project-link{
  display:grid;grid-template-columns:minmax(0,1.12fr) minmax(0,.88fr);
  width:100%;height:100%;min-height:490px;padding:0;margin:0;box-sizing:border-box;
  border:0;border-radius:0;background:transparent;box-shadow:none;color:#f6f8f8;
  text-decoration:none;overflow:hidden;
}
.jiz-homepage .jz-fw .jz-fw-project-link:is(:hover,:focus-visible){color:#fff;background:#1b252b}
.jiz-homepage .jz-fw .jz-fw-frame{
  position:relative;min-width:0;min-height:490px;height:100%;
  aspect-ratio:auto;overflow:hidden;isolation:isolate;background:#10171c;
}
.jiz-homepage .jz-fw .jz-fw-frame img{
  position:absolute;inset:0;display:block;width:100%;height:100%;max-width:none;
  object-fit:cover;object-position:var(--project-focal,50% 50%);
  filter:saturate(.9) brightness(.91);border-radius:0;
}
.jiz-homepage .jz-fw .jz-fw-copy{
  display:flex;flex-direction:column;align-items:flex-start;justify-content:center;
  min-width:0;gap:18px;padding:clamp(32px,4.2vw,62px);
  background:linear-gradient(140deg,#253039,#182128);
}
.jiz-homepage .jz-fw .jz-fw-copy .jz-label{
  display:flex;flex-wrap:wrap;gap:7px 14px;font:.72rem/1.5 var(--font-mono);
  letter-spacing:.06em;margin:0;color:#b9d1d5;
}
.jiz-homepage .jz-fw .jz-fw-project-org{color:#c4d0d4;font:.82rem/1.5 var(--font-body);letter-spacing:0}
.jiz-homepage .jz-fw .jz-fw-project-title{
  margin:0;max-width:20ch;color:#f6f8f8;
  font:600 clamp(1.8rem,3.1vw,3.1rem)/1.09 var(--font-display);
  letter-spacing:-.035em;overflow-wrap:anywhere;text-wrap:balance;
}
.jiz-homepage .jz-fw .jz-fw-subtitle{
  margin:0;color:#dce6e8;font:500 clamp(.94rem,1.2vw,1.1rem)/1.5 var(--font-body);
}
.jiz-homepage .jz-fw .jz-fw-value{
  margin:0;max-width:50ch;color:#c7d5d9;font:400 .94rem/1.65 var(--font-body);
}
.jiz-homepage .jz-fw .jz-fw-tags{display:flex;flex-wrap:wrap;gap:7px;list-style:none;padding:0;margin:4px 0 0}
.jiz-homepage .jz-fw .jz-fw-tags li{
  padding:7px 11px;border:1px solid rgba(232,240,245,.13);border-radius:7px;
  background:rgba(232,240,245,.075);color:#dce5e6;font:500 .72rem/1.4 var(--font-body);
}
.jiz-homepage .jz-fw .jz-fw-image-label{
  position:absolute;top:20px;left:20px;padding:8px 12px;
  border:1px solid rgba(232,240,245,.2);border-radius:999px;
  background:rgba(11,13,16,.85);color:#f6f7f7;
  font:500 .68rem/1.4 var(--font-mono);letter-spacing:.04em;
}
.jiz-homepage .jz-fw .jz-fw-image-action{
  position:absolute;right:20px;bottom:20px;display:inline-flex;align-items:center;gap:12px;
  padding:7px 7px 7px 15px;background:rgba(11,13,16,.85);
  color:#f6f7f7;border:1px solid rgba(232,240,245,.32);border-radius:999px;
  font:600 .83rem/1.3 var(--font-body);
}
.jiz-homepage .jz-fw .jz-fw-image-action>span{
  display:grid;place-items:center;width:34px;height:34px;border-radius:50%;
  color:#fff;background:rgba(232,240,245,.15);
}
.jiz-homepage .jz-fw .jz-fw-project-link:is(:hover,:focus-visible) .jz-fw-image-action>span{
  background:var(--signal-lime);color:#0b0d10;
}
.jiz-homepage .jz-fw .jz-fw-controls{
  display:flex;align-items:center;margin-top:20px;padding-top:14px;
  border-top:1px solid rgba(232,240,245,.2);
}
.jiz-homepage .jz-fw .jz-fw-count{
  color:#f0f4f5;font:500 .78rem/1.5 var(--font-mono);letter-spacing:.06em;
}
.jiz-homepage .jz-fw .jz-fw-index{margin-top:22px}
.jiz-homepage .jz-fw .jz-fw-index-trigger{
  display:inline-flex;align-items:center;gap:10px;min-height:48px;
  padding:12px 16px;cursor:pointer;background:rgba(11,13,16,.88);
  color:var(--signal-lime);border:1px solid rgba(232,240,245,.29);
  border-radius:10px;font:700 .875rem/1.4 var(--font-body);
  transition:background 180ms,color 180ms,border-color 180ms;
}
.jiz-homepage .jz-fw .jz-fw-index-trigger:is(:hover,:focus-visible){
  background:#32414a;color:#fff;border-color:rgba(232,240,245,.65);
}
.jiz-homepage .jz-fw :is(button,a,.jz-fw-track):focus-visible{
  outline:2px solid var(--signal-lime);outline-offset:3px;
}
/* Native modal is in the top layer: no section resizing when opened. */
.jiz-homepage .jz-fw .jz-fw-archive-dialog{
  width:min(850px,calc(100% - 32px));max-height:min(82svh,800px);
  padding:0;margin:auto;overflow:auto;box-sizing:border-box;
  border:1px solid rgba(232,240,245,.3);border-radius:18px;
  background:#1b242a;color:#f5f7f7;box-shadow:0 24px 80px rgba(0,0,0,.5);
}
.jiz-homepage .jz-fw .jz-fw-archive-dialog::backdrop{
  background:rgba(4,7,10,.78);backdrop-filter:blur(8px);
}
.jiz-homepage .jz-fw .jz-fw-archive-inner{padding:clamp(22px,4vw,42px)}
.jiz-homepage .jz-fw .jz-fw-archive-head{
  display:flex;align-items:flex-start;justify-content:space-between;gap:18px;
  padding-bottom:22px;border-bottom:1px solid rgba(232,240,245,.18);
}
.jiz-homepage .jz-fw .jz-fw-archive-heading{
  margin:0;color:#fff;font:600 clamp(1.65rem,3vw,2.4rem)/1.12 var(--font-display);
}
.jiz-homepage .jz-fw .jz-fw-archive-note{margin:9px 0 0;color:#cbd6da;line-height:1.6}
.jiz-homepage .jz-fw .jz-fw-archive-close{
  flex:none;min-width:44px;min-height:44px;border-radius:9px;
  background:#2b353b;color:#fff;border:1px solid rgba(232,240,245,.3);
  font-size:1.35rem;cursor:pointer;
}
.jiz-homepage .jz-fw .jz-fw-archive-grid{
  display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;
  list-style:none;padding:0;margin:22px 0 0;
}
.jiz-homepage .jz-fw .jz-fw-archive-grid li{min-width:0;margin:0}
.jiz-homepage .jz-fw .jz-fw-archive-grid a{
  display:flex;align-items:center;justify-content:space-between;gap:12px;
  padding:18px 20px;min-height:70px;box-sizing:border-box;
  background:#29333a;color:#f3f7f7;border:1px solid rgba(232,240,245,.18);
  border-radius:10px;font:600 .94rem/1.5 var(--font-body);text-decoration:none;
}
.jiz-homepage .jz-fw .jz-fw-archive-grid a::after{content:'↗';color:var(--signal-lime);font-size:1.2rem}
.jiz-homepage .jz-fw .jz-fw-archive-grid a:is(:hover,:focus-visible){
  background:#3d4a52;color:#fff;border-color:rgba(232,240,245,.53);
}
@media(max-width:900px){
 .jiz-homepage .jz-fw .jz-fw-project-link{grid-template-columns:minmax(0,1fr);min-height:0}
 .jiz-homepage .jz-fw .jz-fw-frame{height:auto;min-height:0;aspect-ratio:16/9}
 .jiz-homepage .jz-fw .jz-fw-copy{padding:30px;min-height:0}
 .jiz-homepage .jz-fw .jz-fw-project-title{max-width:26ch}
}
@media(max-width:600px){
 .jiz-homepage .jz-fw .jz-fw-stage{width:calc(100% - 32px)}
 .jiz-homepage .jz-fw .jz-fw-track{border-radius:14px}
 .jiz-homepage .jz-fw .jz-fw-frame{aspect-ratio:4/3}
 .jiz-homepage .jz-fw .jz-fw-copy{padding:22px 20px;gap:13px}
 .jiz-homepage .jz-fw .jz-fw-buttons button{flex:1;padding-inline:10px}
 .jiz-homepage .jz-fw .jz-fw-image-label{top:12px;left:12px}
 .jiz-homepage .jz-fw .jz-fw-image-action{right:12px;bottom:12px}
 .jiz-homepage .jz-fw .jz-fw-archive-grid{grid-template-columns:1fr}
}
@media(prefers-reduced-motion:reduce){
 .jiz-homepage .jz-fw *{animation:none!important;transition:none!important}
}
html[data-jz-motion-paused="true"] .jiz-homepage .jz-fw *{animation:none!important;transition:none!important}

/* Screen-verified art direction: premium graphite, readable type, subtle 3-D elevation. */
.jiz-homepage .jz-fw .jz-fw-track{
  border:1px solid rgba(203,219,224,.22)!important;
  border-radius:20px!important;
  background:#1a2229!important;
  box-shadow:0 22px 54px rgba(0,0,0,.3),0 6px 18px rgba(0,0,0,.16),inset 0 1px 0 rgba(245,250,250,.11)!important;
  overflow:hidden!important;
}
.jiz-homepage .jz-fw .jz-fw-slide,
.jiz-homepage .jz-fw .jz-fw-project-link{border-radius:0!important;box-shadow:none!important}
.jiz-homepage .jz-fw .jz-fw-copy{
  color:#f5f8f9!important;
  background:linear-gradient(145deg,#323e47 0%,#27333b 47%,#1d282f 100%)!important;
  box-shadow:inset 1px 0 0 rgba(245,250,250,.14),inset 0 1px 0 rgba(245,250,250,.07)!important;
  opacity:1!important;filter:none!important;
}
.jiz-homepage .jz-fw .jz-fw-copy .jz-fw-project-title{
  color:#f8fafb!important;-webkit-text-fill-color:#f8fafb!important;
  opacity:1!important;filter:none!important;text-shadow:none!important;
  font-weight:650!important;line-height:1.09!important;
}
.jiz-homepage .jz-fw .jz-fw-copy .jz-fw-subtitle{
  color:#dde8eb!important;-webkit-text-fill-color:#dde8eb!important;
  opacity:1!important;filter:none!important;
}
.jiz-homepage .jz-fw .jz-fw-copy .jz-fw-value{
  color:#cbd9dd!important;-webkit-text-fill-color:#cbd9dd!important;
  opacity:1!important;filter:none!important;
}
.jiz-homepage .jz-fw .jz-fw-copy .jz-label,
.jiz-homepage .jz-fw .jz-fw-copy .jz-fw-project-org{
  color:#c6d6db!important;-webkit-text-fill-color:#c6d6db!important;
  opacity:1!important;
}
.jiz-homepage .jz-fw .jz-fw-copy .jz-fw-tags li,
.jiz-homepage .jz-fw .jz-fw-copy .jz-fw-tags li:nth-child(3n+2),
.jiz-homepage .jz-fw .jz-fw-copy .jz-fw-tags li:nth-child(3n){
  background:rgba(228,239,241,.095)!important;
  color:#e8eff1!important;-webkit-text-fill-color:#e8eff1!important;
  border:1px solid rgba(228,239,241,.2)!important;
  border-radius:7px!important;font-weight:500!important;
  box-shadow:inset 0 1px 0 rgba(245,250,250,.06)!important;
}
.jiz-homepage .jz-fw .jz-fw-buttons{
  display:flex!important;position:relative!important;inset:auto!important;
  justify-content:flex-end!important;align-items:center!important;
  width:auto!important;gap:10px!important;margin:0 0 16px!important;
  padding:0!important;transform:none!important;
}
.jiz-homepage .jz-fw .jz-fw-buttons button{
  display:inline-flex!important;position:static!important;transform:none!important;
  width:auto!important;height:46px!important;min-width:112px!important;
  padding:10px 16px!important;gap:9px!important;
  border-radius:11px!important;
  background:rgba(27,38,46,.86)!important;color:#eef4f5!important;
  border:1px solid rgba(218,234,238,.3)!important;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.08)!important;
  font:600 .82rem/1.3 var(--font-body)!important;
}
.jiz-homepage .jz-fw .jz-fw-buttons button:enabled:hover{
  background:#3b4b54!important;color:#fff!important;
  border-color:rgba(235,246,247,.62)!important;
}
.jiz-homepage .jz-fw .jz-fw-buttons button:disabled{opacity:.42!important}
.jiz-homepage .jz-fw .jz-fw-image-label,
.jiz-homepage .jz-fw .jz-fw-slide[data-active="true"] .jz-fw-image-label{
  background:rgba(15,24,30,.8)!important;color:#eaf1f3!important;
  -webkit-text-fill-color:#eaf1f3!important;
  border-color:rgba(230,241,244,.28)!important;
}
.jiz-homepage .jz-fw .jz-fw-index-trigger{
  color:var(--signal-lime)!important;-webkit-text-fill-color:var(--signal-lime)!important;
}
.jiz-homepage .jz-fw .jz-fw-index-trigger:is(:hover,:focus-visible){
  color:#fff!important;-webkit-text-fill-color:#fff!important;
}
@media(max-width:900px){
  .jiz-homepage .jz-fw .jz-fw-copy{box-shadow:inset 0 1px 0 rgba(245,250,250,.12)!important}
}
@media(max-width:600px){
  .jiz-homepage .jz-fw .jz-fw-buttons button{
    flex:1!important;min-width:0!important;padding:10px 12px!important
  }
}

/* Soft optical transition without disturbing the straight internal seam. */
.jiz-homepage .jz-fw .jz-fw-frame::after{
  content:'';position:absolute;inset:0;z-index:1;pointer-events:none;
  background:linear-gradient(90deg,transparent 76%,rgba(24,34,41,.14) 92%,rgba(24,34,41,.3) 100%);
}
.jiz-homepage .jz-fw .jz-fw-image-label,
.jiz-homepage .jz-fw .jz-fw-image-action{z-index:2}
@media(max-width:900px){
  .jiz-homepage .jz-fw .jz-fw-frame::after{
    background:linear-gradient(180deg,transparent 76%,rgba(24,34,41,.23) 100%);
  }
}
/* Seam correction: only outer gallery corners may be rounded. */
.jiz-homepage .jz-fw .jz-fw-frame{
  border-radius:0!important;
  background:#1b252c!important;
  clip-path:none!important;
  overflow:hidden!important;
}
.jiz-homepage .jz-fw .jz-fw-frame img{
  border-radius:0!important;
  clip-path:none!important;
  -webkit-mask-image:none!important;
  mask-image:none!important;
  background:#1b252c!important;
}
.jiz-homepage .jz-fw .jz-fw-copy{
  border-radius:0!important;
}
.jiz-homepage .jz-fw .jz-fw-project-link{
  background:#1b252c!important;
}
`}</style>
      <div className="jz-fw-stage">
      <header className="jz-fw-heading">
        <div><p className="jz-label">Enterprise learning · Selected case studies</p><h2 className="jz-fw-h2" id="jz-fw-title">Featured work</h2></div>
        <p>Learning strategy, scenario design, and enablement built around the decisions people make at work.</p>
      </header>
      <div className="jz-fw-toolbar">
        <div><p className="jz-fw-instruction" id="jz-fw-help">Swipe or use the arrows to browse real case studies. Open any project to explore.</p><span className="jz-fw-motion-paused">Motion paused</span><span className="jz-fw-motion-reduced">Reduced motion enabled</span></div>

      </div>
      <p id="jz-fw-keyboard-help" className="jz-visually-hidden">With the gallery focused, use Left and Right arrows, Home or End. Tab to case-study links or choose a numbered project button.</p>
      <div className="jz-fw-gallery-layout">
        <div className="jz-fw-buttons"><button type="button" aria-label="Previous project" aria-controls="jz-fw-gallery" disabled={active === 0} onClick={() => go((destination.current ?? active) - 1)}><span aria-hidden="true">←</span> Previous</button><button type="button" aria-label="Next project" aria-controls="jz-fw-gallery" disabled={active === projects.length - 1} onClick={() => go((destination.current ?? active) + 1)}>Next project <span aria-hidden="true">→</span></button></div>
      <div className="jz-fw-track" id="jz-fw-gallery" ref={track} tabIndex="0" role="region" aria-roledescription="carousel" aria-label="Featured projects" aria-describedby="jz-fw-help jz-fw-keyboard-help" onKeyDown={(e) => {
        if (e.target !== e.currentTarget || !['ArrowLeft','ArrowRight','Home','End'].includes(e.key)) return;
        e.preventDefault(); go(e.key === 'Home' ? 0 : e.key === 'End' ? projects.length - 1 : (destination.current ?? active) + (e.key === 'ArrowRight' ? 1 : -1));
      }}>
        {projects.map((p, i) => <article className="jz-fw-slide" key={p.view} data-active={i === active} aria-labelledby={'jz-fw-project-' + i}>
          <a className="jz-fw-project-link" href={pathOf(p)} aria-label={'View case study: ' + p.title} onFocus={() => { if (i !== active) go(i); }} onClick={(e) => open(e, p)}>
            <div className="jz-fw-frame" style={{ '--project-focal': p.focal || '50% 50%' }}>
              <img src={p.image} alt={p.alt} loading="lazy" decoding="async" width="1600" height="900" />
              <span className="jz-fw-image-label" aria-hidden="true">{i === active ? p.n + ' / ' + String(projects.length).padStart(2, '0') + ' · Selected project' : 'Select project →'}</span>
              <span className="jz-fw-image-action" aria-hidden="true">View case study<span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg></span></span>
            </div>
            <div className="jz-fw-copy">
              <p className="jz-label">{p.kicker}<span className="jz-fw-project-org">{p.org}</span></p>
              <h3 className="jz-fw-project-title" id={'jz-fw-project-' + i}>{p.title}</h3>
              <p className="jz-fw-subtitle">{p.subtitle}</p>
              <p className="jz-fw-value">{p.value}</p>
              <ul className="jz-fw-tags" aria-label="Learning design focus">{p.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </div>
          </a>
        </article>)}
      </div>
      </div>
      <div className="jz-fw-controls">
        <span className="jz-fw-count" role="status" aria-live="polite" aria-atomic="true"><span className="jz-visually-hidden">Project </span>{String(active + 1).padStart(2,'0')} / {String(projects.length).padStart(2,'0')}<span className="jz-visually-hidden">: {projects[active].title}</span></span>

      </div>
      <div className="jz-fw-index"><button type="button" className="jz-fw-index-trigger" ref={indexTrigger} onClick={() => indexDialog.current?.showModal()}><PortfolioGlyph kind="work" size={18}/> View all projects <PortfolioGlyph kind="arrow" size={16}/></button></div>
      <dialog className="jz-fw-archive-dialog" ref={indexDialog} aria-labelledby="jz-fw-archive-title" onClose={() => indexTrigger.current?.focus()} onClick={(e) => { if (e.target === e.currentTarget) e.currentTarget.close(); }}>
        <div className="jz-fw-archive-inner">
          <div className="jz-fw-archive-head"><div><h3 className="jz-fw-archive-heading" id="jz-fw-archive-title">All featured projects</h3><p className="jz-fw-archive-note">Explore the selected learning experiences and enterprise case studies.</p></div><button type="button" className="jz-fw-archive-close" aria-label="Close project list" onClick={() => indexDialog.current?.close()}>×</button></div>
          <ul className="jz-fw-archive-grid">{projects.map((p) => <li key={p.view}><a href={pathOf(p)} onClick={(e) => { indexDialog.current?.close(); open(e,p); }}>{p.title}</a></li>)}</ul>
        </div>
      </dialog>
      </div>
    </section>
  );
}

/* ---------- Impact ---------- */
function CountUp({ to, run, suffix, srSuffix }) {
  const [v, setV] = React.useState(to);
  const numberRef = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') { setVisible(true); return; }
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .4 });
    if (numberRef.current) observer.observe(numberRef.current);
    return () => observer.disconnect();
  }, []);
  React.useEffect(() => {
    if (!run || !visible) { setV(to); return; }
    let raf, start;
    const tick = (time) => {
      if (start === undefined) start = time;
      const progress = Math.min(1, (time - start) / 900);
      setV(Math.round(to * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setV(to);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); };
  }, [run, visible, to]);
  return <React.Fragment>
    <span ref={numberRef} aria-hidden="true">{v}<span className="jz-im-unit">{suffix}</span></span>
    <span className="jz-visually-hidden">{String(to) + (srSuffix || suffix)}</span>
  </React.Fragment>;
}

function MetricEvidence({context,work}) {
 return <details className="jz-im-evidence">
  <summary><PortfolioGlyph kind="evidence" size={17}/> How this outcome was supported <PortfolioGlyph kind="arrow" size={15}/></summary>
  <div className="jz-im-evidence__body"><p>{context}</p>
    <p className="jz-im-evidence__note">Portfolio-reported outcome. The figure represents a program result, not a claim of sole individual causation.</p>
    {work ? <a href={work}>Explore related work <PortfolioGlyph kind="arrow" size={15}/></a> : null}
  </div>
 </details>;
}
function ImpactEditorial() {
  const [animate, setAnimate] = React.useState(true);
  const [reduced, setReduced] = React.useState(false);
  const [pageVisible, setPageVisible] = React.useState(true);
  React.useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => { setReduced(preference.matches); setPageVisible(!document.hidden); };
    sync(); preference.addEventListener('change', sync); document.addEventListener('visibilitychange', sync);
    return () => { preference.removeEventListener('change', sync); document.removeEventListener('visibilitychange', sync); };
  }, []);
  const run = animate && !reduced && pageVisible;
  const ref = React.useRef(null);
  const inView = useInViewOnce(ref, { threshold: 0.3 });
  const lead = { to: 98, suffix: '%', label: 'Platform adoption in Q1, supported through targeted enablement', src: 'Workday Learn launch · Cox Enterprises', cat: 'Adoption', evidence: 'The reported Q1 adoption rate belongs to the Workday Learn launch at Cox Enterprises. The related work sample describes the enablement approach and communication context; this is not an independently audited effectiveness estimate.', work: '/work/workday-learn-launch/' };
  const rest = [
    { to: 40, suffix: '%', label: 'Faster content development using an AI-assisted production pipeline, adopted team-wide', src: 'Learning production · Cox Enterprises', cat: 'Production', evidence: 'Reported improvement in development cycle time associated with an AI-assisted production pipeline. The figure describes workflow speed, not independently established learner performance.', work: '/work/legacy-unlocked/' },
    { to: 35, suffix: '%', label: 'Lift in strategic knowledge retention versus presentation formats', src: 'Cox 20/20 executive simulation', cat: 'Leadership', evidence: 'Reported comparison between a strategic leadership simulation and presentation-led formats. The precise assessment methodology is not published here, so the figure should be read as contextual program evidence.', work: '/work/legacy-unlocked/' },
    { to: 95, suffix: '%', label: 'Adoption and 4.9/5 satisfaction on an organization-wide LMS migration', src: 'Digital learning function · Atlanta International School', cat: 'Migration', evidence: 'Reported adoption and satisfaction during the school-wide LMS migration at Atlanta International School. A complete evaluation protocol is not publicly available.', work: '' },
    // Non-numeric until a verified duration is confirmed.
    { text: 'Education to enterprise', label: 'Experience across education, enterprise learning, technology enablement, and creative production', cat: 'Experience' }
  ];
  return (
    <section className="jz-im" ref={ref} data-in={inView ? 'true' : 'false'} aria-labelledby="jz-im-title">
      <style>{`
.jz-im{background:#0B0F0D;padding-block:clamp(80px,9vw,148px)}
.jz-im-head{grid-column:1 / span 4;display:flex;flex-direction:column;gap:16px}
.jz-im-h2{margin:0;font:600 clamp(1.75rem,1.3rem + 1.4vw,2.75rem)/1.05 var(--font-display);letter-spacing:-.03em;color:var(--color-text-primary)}
.jz-im-toggle{align-self:flex-start;min-height:44px;padding:10px 16px;border:1px solid currentColor;border-radius:999px;background:transparent;color:var(--accent-cyan);font:500 .8125rem var(--font-body);cursor:pointer}.jz-im-toggle:hover{color:var(--signal-lime)}.jz-im-toggle:focus-visible{outline:2px solid var(--signal-lime);outline-offset:4px}
.jz-im-note{margin:0;max-width:34ch;font:400 .9375rem/1.6 var(--font-body);color:rgba(217,221,227,.72)}
.jz-im-lead{grid-column:6 / span 7;display:flex;flex-direction:column;gap:14px}
.jz-im-fig{margin:0;font:600 clamp(5.5rem,3rem + 10vw,13.5rem)/.8 var(--font-display);letter-spacing:-.06em;font-variant-numeric:tabular-nums;color:var(--color-accent-primary)}
.jz-im-unit{font-size:.42em;letter-spacing:-.02em;margin-left:.06em;vertical-align:.9em}
.jz-im-lead .jz-im-label{font-size:clamp(1.0625rem,1rem + .3vw,1.3125rem);max-width:30ch;color:#E8ECEF}
.jz-im-row{grid-column:1 / span 12;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));margin-top:clamp(56px,7vw,112px);border-top:1px solid rgba(217,221,227,.12)}
.jz-im-cell{display:flex;flex-direction:column;gap:12px;padding:clamp(22px,2.4vw,32px) clamp(16px,2vw,28px) 0 0}
.jz-im-cell + .jz-im-cell{padding-left:clamp(16px,2vw,28px);border-left:1px solid rgba(217,221,227,.08)}
.jz-im-cell .jz-im-fig{font-size:clamp(3rem,2rem + 3vw,5.25rem);color:var(--color-text-primary);letter-spacing:-.05em}
.jz-im-cell .jz-im-fig--text{min-height:clamp(2.4rem,1.6rem + 2.4vw,4.2rem);display:flex;align-items:flex-end;font-size:clamp(1.5rem,1.1rem + 1.1vw,2.125rem);line-height:1.02;letter-spacing:-.03em;max-width:11ch;text-wrap:balance}
.jz-im-label{margin:0;font:400 .9375rem/1.5 var(--font-body);color:rgba(217,221,227,.8);text-wrap:pretty}
.jz-im-src{margin:0;font:500 .75rem/1.4 var(--font-mono);letter-spacing:.06em;color:rgba(217,221,227,.62)}
.jz-im .jz-rise:nth-child(2){transition-delay:90ms}.jz-im .jz-rise:nth-child(3){transition-delay:180ms}.jz-im .jz-rise:nth-child(4){transition-delay:270ms}
@media(max-width:1024px){.jz-im-head{grid-column:1 / span 12}.jz-im-lead{grid-column:1 / span 12;margin-top:48px}.jz-im-row{grid-template-columns:repeat(2,minmax(0,1fr))}.jz-im-cell:nth-child(3){padding-left:0;border-left:0}.jz-im-cell:nth-child(n+3){border-top:1px solid rgba(217,221,227,.08);margin-top:28px}}
@media(max-width:560px){.jz-im-row{grid-template-columns:1fr}.jz-im-cell,.jz-im-cell + .jz-im-cell{padding-left:0;border-left:0}.jz-im-cell + .jz-im-cell{border-top:1px solid rgba(217,221,227,.08);margin-top:24px}}
      `}</style>
      <div className="jz-wrap jz-grid">
        <div className="jz-im-head jz-rise">
          <p className="jz-label">Selected impact</p>
          <h2 className="jz-im-h2" id="jz-im-title">What the work moved.</h2>
          <p className="jz-im-note">Outcomes from programs I designed or contributed to, across enterprise and education settings.</p>
          {!reduced && <button type="button" className="jz-im-toggle" onClick={() => setAnimate(value => !value)}>{animate ? "Pause number animation" : "Resume number animation"}</button>}
        </div>
        <div className="jz-im-lead jz-rise">
          <p className="jz-label">{lead.cat}</p>
          <p className="jz-im-fig"><CountUp to={lead.to} run={run} suffix={lead.suffix} srSuffix={lead.srSuffix} /></p>
          <p className="jz-im-label">{lead.label}</p>
          <p className="jz-im-src">{lead.src}</p>
          <MetricEvidence context={lead.evidence} work={lead.work}/>
        </div>
        <div className="jz-im-row">
          {rest.map((m) => (
            <div key={m.cat} className="jz-im-cell jz-rise">
              <p className="jz-label">{m.cat}</p>
              {m.text
                ? <p className="jz-im-fig jz-im-fig--text">{m.text}</p>
                : <p className="jz-im-fig"><CountUp to={m.to} run={run} suffix={m.suffix} srSuffix={m.srSuffix} /></p>}
              <p className="jz-im-label">{m.label}</p>
              {m.src ? <p className="jz-im-src">{m.src}</p> : null}
              {m.evidence ? <MetricEvidence context={m.evidence} work={m.work}/> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Practice: method + principles + capabilities + tools, consolidated ---------- */
function Practice({ part = 'method' }) {
  const ref = React.useRef(null);
  const inView = useInViewOnce(ref);
  const [openCap, setOpenCap] = React.useState(null);
  const steps = [
    { n: '01', t: 'Clarify', c: 'Define the business problem, learner need, stakeholder expectations, and success criteria.', rule: 'Clarity over complexity. Every complex problem hides a simpler structure worth finding first.' },
    { n: '02', t: 'Structure', c: 'Organize complexity into a learning architecture, journey, content map, or enablement strategy.', rule: 'People before platforms. Technology only matters once the people using it can succeed with it.' },
    { n: '03', t: 'Design', c: 'Shape the experience through story, interaction, visuals, accessibility, and human-centered learning principles.', rule: 'Technology should feel human. Systems earn adoption when they respect attention, context, and effort.' },
    { n: '04', t: 'Build', c: 'Produce eLearning, video, guides, toolkits, job aids, and communications. Prototype early, then scale.', rule: 'Speed for production, not decisions. AI expands what is possible; the point of view stays mine.' },
    { n: '05', t: 'Measure', c: 'Use feedback, adoption signals, performance evidence, and stakeholder input to refine impact.', rule: 'Learning should move behavior. The measure is what people do differently after.' }
  ];
  const caps = [
    { t: 'Learning strategy & performance consulting', c: 'Needs analysis and performance consulting that connect business goals, learner needs, and stakeholder priorities to measurable outcomes.', tools: 'Miro, FigJam, Tableau, Power BI, learning dashboards, KPI and adoption tracking, survey analysis' },
    { t: 'Product & technology enablement', c: 'Complex platforms, workflows, and system changes turned into learning that supports adoption and operational readiness, built in partnership with product and business stakeholders.', tools: 'Workday Learn, SharePoint, Microsoft 365, Asana, Frame.io, LMS governance, release workflows' },
    { t: 'Leadership development', c: 'Leadership experiences that strengthen decision-making, alignment, emotional intelligence, and enterprise capability.', tools: 'Articulate Storyline 360, scenario and branching design, simulations, facilitation kits' },
    { t: 'AI-enabled learning', c: 'AI-supported workflows that accelerate content development, personalize learning, and scale multimedia, with every output reviewed and owned.', tools: 'ChatGPT, Claude, Gemini, Copilot, NotebookLM, Custom GPTs, Zapier, Make, n8n, Synthesia, ElevenLabs, HeyGen, Descript, Runway' },
    { t: 'Creative technology & multimedia production', c: 'eLearning, explainer video, motion, job aids, and digital assets that make complex information easier to apply.', tools: 'Storyline 360, Rise 360, Camtasia, Genially, H5P, Canvas LMS, Premiere Pro, After Effects, Photoshop, Illustrator, Figma' },
    { t: 'Accessibility, evaluation & inclusive design', c: 'Accessible, inclusive learning grounded in WCAG and UDL, evaluated through learner feedback, adoption signals, and performance evidence.', tools: 'WCAG, UDL, accessibility checkers, captioning and SRT workflows, screen-reader and contrast checks, QA checklists' }
  ];
  return (
    <section className={'jz-pr jz-pr--' + part} ref={ref} data-in={inView ? 'true' : 'false'} aria-labelledby={part === 'capabilities' ? 'jz-cap-title' : 'jz-pr-title'}>
      <style>{`
.jz-pr{background:#080D0B;padding-block:clamp(96px,11vw,176px) clamp(80px,9vw,140px)}
.jz-pr-head{grid-column:1 / span 12;display:grid;grid-template-columns:subgrid;align-items:end;margin-bottom:clamp(56px,7vw,104px)}
.jz-pr-head > div{grid-column:1 / span 7;display:flex;flex-direction:column;gap:18px}
.jz-pr-h2{margin:0;font:600 clamp(2.25rem,1.4rem + 3vw,4.5rem)/.98 var(--font-display);letter-spacing:-.04em;color:var(--color-text-primary);text-wrap:balance}
.jz-pr-intro{grid-column:9 / span 4;margin:0;font:400 1.0625rem/1.6 var(--font-body);color:rgba(217,221,227,.78)}
.jz-pr-steps{grid-column:1 / span 12;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));list-style:none;margin:0;padding:0;border-top:1px solid rgba(217,221,227,.14);counter-reset:s}
.jz-pr-step{position:relative;display:flex;flex-direction:column;gap:14px;padding:26px clamp(14px,1.6vw,26px) 0 0}
.jz-pr-step::before{content:'';position:absolute;top:-1px;left:0;height:1px;width:0;background:var(--color-accent-primary);transition:width 900ms cubic-bezier(.22,.61,.36,1)}
.jz-pr[data-in="true"] .jz-pr-step::before{width:32px}
.jz-pr-step:nth-child(2)::before{transition-delay:120ms}.jz-pr-step:nth-child(3)::before{transition-delay:240ms}.jz-pr-step:nth-child(4)::before{transition-delay:360ms}.jz-pr-step:nth-child(5)::before{transition-delay:480ms}
.jz-pr-word{margin:0;font:600 clamp(1.5rem,1.1rem + 1.2vw,2.375rem)/1 var(--font-display);letter-spacing:-.03em;color:var(--color-text-primary)}
.jz-pr-c{margin:0;font:400 .9375rem/1.55 var(--font-body);color:rgba(217,221,227,.82)}
.jz-pr-rule{margin:6px 0 0;padding-top:12px;border-top:1px solid rgba(217,221,227,.08);font:400 .8125rem/1.55 var(--font-body);color:rgba(217,221,227,.62);font-style:italic}
.jz-pr-caps-head{grid-column:1 / span 12;display:grid;grid-template-columns:subgrid;margin-top:clamp(96px,11vw,168px);margin-bottom:clamp(28px,3vw,44px)}
.jz-pr--capabilities .jz-pr-caps-head{margin-top:0}
.jz-pr--capabilities{padding-bottom:clamp(40px,4vw,64px)}
.jz-pr--method{padding-top:clamp(64px,7vw,112px)}
.jz-pr--capabilities .jz-pr-caps-head .jz-pr-caps-h{grid-column:1 / span 7;font:600 clamp(2.25rem,1.4rem + 3vw,4.5rem)/.98 var(--font-display);letter-spacing:-.04em;text-wrap:balance}
@media(max-width:1024px){.jz-pr--capabilities .jz-pr-caps-head .jz-pr-caps-h,.jz-pr-caps-head p.jz-pr-sub{grid-column:1 / span 12}.jz-pr-caps-head p.jz-pr-sub{margin-top:18px}}
.jz-pr-caps-head .jz-pr-caps-h,.jz-pr-caps-head h3{grid-column:1 / span 6;margin:12px 0 0;font:600 clamp(1.5rem,1.1rem + 1.1vw,2.25rem)/1.08 var(--font-display);letter-spacing:-.025em;color:var(--color-text-primary)}
.jz-pr-caps-head p.jz-pr-sub{grid-column:8 / span 5;align-self:end;margin:0;font:400 .9375rem/1.55 var(--font-body);color:rgba(217,221,227,.72)}
.jz-pr-caps{grid-column:1 / span 12;list-style:none;margin:0;padding:0}
.jz-pr-cap{border-top:1px solid rgba(217,221,227,.1)}
.jz-pr-cap:last-child{border-bottom:1px solid rgba(217,221,227,.1)}
.jz-pr-cap button{width:100%;display:grid;grid-template-columns:repeat(12,minmax(0,1fr));column-gap:clamp(16px,2vw,32px);align-items:baseline;padding:22px 0;background:none;border:0;color:inherit;text-align:left;cursor:pointer}
.jz-pr-cap button:focus-visible{outline:2px solid var(--color-accent-primary);outline-offset:4px}
.jz-pr-cap-t{grid-column:1 / span 4;font:500 clamp(1.125rem,1rem + .4vw,1.375rem)/1.25 var(--font-display);letter-spacing:-.015em;color:var(--color-text-primary)}
.jz-pr-cap-c{grid-column:5 / span 7;font:400 .9375rem/1.55 var(--font-body);color:rgba(217,221,227,.8)}
.jz-pr-cap-x{grid-column:12;justify-self:end;font:400 1.25rem/1 var(--font-mono);color:rgba(217,221,227,.6);transition:transform 320ms cubic-bezier(.22,.61,.36,1)}
.jz-pr-cap[data-open="true"] .jz-pr-cap-x{transform:rotate(45deg);color:var(--color-accent-primary)}
.jz-pr-cap button:hover .jz-pr-cap-t{color:#fff}
.jz-pr-tools[hidden]{display:none}
.jz-pr-tools{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));column-gap:clamp(16px,2vw,32px);padding:0 0 24px}
.jz-pr-tools p{grid-column:5 / span 7;margin:0;font:400 .8125rem/1.7 var(--font-mono);color:rgba(217,221,227,.72)}
.jz-pr-close{grid-column:1 / span 12;margin:clamp(64px,7vw,104px) 0 0;max-width:40ch;font:500 clamp(1.25rem,1rem + .8vw,1.75rem)/1.35 var(--font-display);letter-spacing:-.015em;color:#E8ECEF;text-wrap:balance}
@media(max-width:1024px){.jz-pr-head > div{grid-column:1 / span 12}.jz-pr-intro{grid-column:1 / span 9;margin-top:22px}.jz-pr-steps{grid-template-columns:1fr;border-top:0}.jz-pr-step{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));column-gap:clamp(16px,2vw,32px);row-gap:10px;padding:26px 0 28px;border-top:1px solid rgba(217,221,227,.14)}.jz-pr-step .jz-label{grid-column:1 / span 1}.jz-pr-word{grid-column:2 / span 4}.jz-pr-c{grid-column:6 / span 7}.jz-pr-rule{grid-column:6 / span 7}.jz-pr-caps-head h3,.jz-pr-caps-head p.jz-pr-sub{grid-column:1 / span 12}.jz-pr-caps-head p.jz-pr-sub{margin-top:14px}}
@media(max-width:680px){.jz-pr-intro{grid-column:1 / span 12}.jz-pr-steps{grid-template-columns:1fr;border-top:0;row-gap:0}.jz-pr-step{display:flex;padding:22px 0 24px}
.jz-pr-cap button{grid-template-columns:1fr 24px;row-gap:8px}.jz-pr-cap-t{grid-column:1}.jz-pr-cap-x{grid-column:2;grid-row:1}.jz-pr-cap-c{grid-column:1 / span 2}.jz-pr-tools{grid-template-columns:1fr}.jz-pr-tools p{grid-column:1}}
@media(prefers-reduced-motion:reduce){.jz-pr-step::before{transition:none;width:32px}.jz-pr-cap-x{transition:none}}
      `}</style>
      <div className="jz-wrap jz-grid">
        {part === 'method' && (<>
        <header className="jz-pr-head">
          <div className="jz-rise"><p className="jz-label">Method</p><h2 className="jz-pr-h2" id="jz-pr-title">How thought becomes action.</h2></div>
          <p className="jz-pr-intro jz-rise">Five moves I run on every project, from a leadership simulation to a platform launch to an AI-assisted production run. Each carries a rule I don't break.</p>
        </header>
        <ol className="jz-pr-steps">
          {steps.map((s) => (
            <li key={s.n} className="jz-pr-step jz-rise">
              <span className="jz-label">{s.n}</span>
              <h3 className="jz-pr-word">{s.t}</h3>
              <p className="jz-pr-c">{s.c}</p>
              <p className="jz-pr-rule">{s.rule}</p>
            </li>
          ))}
        </ol>
        <div className="jz-pr-commitment jz-rise"><span className="jz-pr-commitment-icon" aria-hidden="true"><PortfolioGlyph kind="evidence" size={25}/></span><div><span className="jz-pr-commitment-kicker">THE ACCOUNTABILITY STANDARD</span><p className="jz-pr-close">Every output is reviewed and owned. Nothing ships that I wouldn't defend in front of a stakeholder.</p></div></div>
        </>)}
        {part === 'capabilities' && (<>
        <div className="jz-pr-caps-head">
          <p className="jz-label" style={{ gridColumn: '1 / span 12' }}>Capabilities &amp; tools</p>
          <h2 className="jz-pr-caps-h" id="jz-cap-title">What I bring to a team.</h2>
          <p className="jz-pr-sub">Capability first. Open any row for the tools I use to deliver it; depth varies from daily practice to emerging workflows.</p>
        </div>
        <ul className="jz-pr-caps">
          {caps.map((c, i) => {
            const open = openCap === i;
            return (
              <li key={c.t} className="jz-pr-cap" data-open={open ? 'true' : 'false'}>
                <button type="button" aria-expanded={open} aria-controls={'jz-pr-tools-' + i} onClick={() => setOpenCap(open ? null : i)}>
                  <span className="jz-pr-cap-t">{c.t}</span>
                  <span className="jz-pr-cap-c">{c.c}</span>
                  <span className="jz-pr-cap-x" aria-hidden="true">+</span>
                </button>
                <div className="jz-pr-tools" id={'jz-pr-tools-' + i} hidden={!open}>
                  <span className="jz-pr-tools-label">PLATFORMS &amp; METHODS</span>
                  <ul className="jz-pr-tool-chips">{c.tools.split(',').map((tool) => <li key={tool.trim()}>{tool.trim()}</li>)}</ul>
                </div>
              </li>
            );
          })}
        </ul>
        </>)}
      </div>
    </section>
  );
}

/* ---------- Career journey (updated from the supplied professional profile) ---------- */
function CareerJourney() {
  const ref = React.useRef(null);
  const inView = useInViewOnce(ref);
  const stages = [
    // ctx: organization · industry. meta: title · engagement type · dates, exactly as confirmed by Jonathan.
    { n: '01', title: 'Education Innovation', ctx: 'Charles R. Drew Charter School', meta: 'K–5 Robotics Instructor · Jul 2011–Jul 2019', copy: 'Designed and facilitated STEAM and project-based learning, adapting instruction to different learner needs.' },
    { n: '02', title: 'Digital Transformation', ctx: 'Atlanta International School · International education', meta: 'Instructional Designer & EdTech Integration Specialist · Jul 2019–Apr 2024', copy: 'Supported an organization-wide LMS migration, helping a school community move from hesitation to fluency.' },
    { n: '03', title: 'Enterprise L&D', ctx: 'Cox Enterprises · Enterprise & corporate learning', meta: 'Learning Experience Designer · Contract · Feb\u2060–\u2060Sep 2025', copy: 'Designed leadership and enterprise learning for audiences from frontline teams to SVPs.' },
    { n: '04', title: 'Product & Technology Enablement', ctx: 'IHG Hotels & Resorts · Hospitality technology', meta: 'Creative Content Specialist · Contract · Sep 2025–Jul 2026', copy: 'Turned evolving platforms into release-ready learning that keeps global teams operationally current.' },
    { n: '05', title: 'Independent Learning Design', ctx: 'Jon Iker Zamarripa Independent Consulting', meta: 'Learning Experience Designer & AI Learning Strategist · Jul 2024–present', copy: 'Client work, research and prototyping across onboarding, product education and AI-enabled learning.' },
    { n: '06', title: 'Next Chapter', ctx: 'Intuit · QuickBooks', meta: 'Incoming Instructional Designer · Contract · Scheduled Nov 9, 2026', copy: 'Upcoming learning design engagement. Project scope and results will be added only after work is underway.' }
  ];
  return (
    <section className="jz-jr" ref={ref} data-in={inView ? 'true' : 'false'} aria-labelledby="jz-jr-title">
      <style>{`
.jz-jr{background:#080D0B;padding-block:clamp(72px,8vw,128px)}
.jz-jr-head{grid-column:1 / span 12;display:grid;grid-template-columns:subgrid;align-items:end;margin-bottom:clamp(40px,5vw,72px)}
.jz-jr-head > div{grid-column:1 / span 7;display:flex;flex-direction:column;gap:14px}
.jz-jr-h2{margin:0;font:600 clamp(2rem,1.3rem + 2.4vw,3.5rem)/1 var(--font-display);letter-spacing:-.035em;color:var(--color-text-primary)}
.jz-jr-sub{grid-column:9 / span 4;margin:0;font:400 1rem/1.6 var(--font-body);color:rgba(217,221,227,.78)}
.jz-jr-rail{grid-column:1 / span 12;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:clamp(20px,2.4vw,40px);list-style:none;margin:0;padding:0}
.jz-jr-stage{position:relative;display:flex;flex-direction:column;gap:12px;padding-top:24px;border-top:1px solid rgba(217,221,227,.14)}
.jz-jr-stage::before{content:'';position:absolute;top:-4px;left:0;width:7px;height:7px;border-radius:50%;background:var(--color-accent-primary)}
.jz-jr-t{margin:0;font:600 clamp(1.125rem,1rem + .5vw,1.5rem)/1.15 var(--font-display);letter-spacing:-.02em;color:var(--color-text-primary)}
.jz-jr-c{margin:0;font:400 .9375rem/1.55 var(--font-body);color:rgba(217,221,227,.8)}
.jz-jr-m{margin:-6px 0 0;font:400 .75rem/1.45 var(--font-mono);letter-spacing:.02em;color:rgba(217,221,227,.66)}
.jz-jr-x{margin:0;font:500 .75rem/1.45 var(--font-mono);letter-spacing:.04em;color:var(--color-accent-primary);opacity:.85}
@media(max-width:1024px){.jz-jr-head > div,.jz-jr-sub{grid-column:1 / span 12}.jz-jr-sub{margin-top:18px}.jz-jr-rail{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:40px}}
@media(max-width:560px){.jz-jr-rail{grid-template-columns:1fr;row-gap:32px}}
      `}</style>
      <div className="jz-wrap jz-grid">
        <header className="jz-jr-head">
          <div className="jz-rise"><p className="jz-label">The journey</p><h2 className="jz-jr-h2" id="jz-jr-title">Built through experience.</h2></div>
          <p className="jz-jr-sub jz-rise">A practice shaped across learning, systems, technology, storytelling, and enterprise transformation.</p>
        </header>
        <ol className="jz-jr-rail">
          {stages.map((s) => (
            <li key={s.n} className="jz-jr-stage jz-rise">
              <span className="jz-label">{s.n}</span>
              <h3 className="jz-jr-t">{s.title}</h3>
              {s.ctx ? <p className="jz-jr-x">{s.ctx}</p> : null}
              {s.meta ? <p className="jz-jr-m">{s.meta}</p> : null}
              <p className="jz-jr-c">{s.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* Cohesive compact line icon system for portfolio category and principles. */
function PortfolioGlyph({kind='design',size=24}) {
 const d={design:<><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 16l8-8m-6 2h6v6"/></>,
 ai:<><rect x="5" y="5" width="14" height="14" rx="3"/><path d="M9 2v3m6-3v3M2 9h3m-3 6h3m14-6h3m-3 6h3m-10 4v3m-6-3v3M9 11l3-3 3 3-3 4z"/></>,
 automation:<><circle cx="5" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 6h8v6m-6 6h8m-3-9 3 3-3 3"/></>,
 video:<><rect x="3" y="5" width="15" height="14" rx="2"/><path d="m18 9 4-3v12l-4-3M8 10l4 2-4 2z"/></>,
 delivery:<><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></>,
 measure:<><path d="M4 20V4m0 16h16M8 16v-5m4 5V7m4 9V9m4 7V5"/></>,
 access:<><circle cx="12" cy="4" r="2"/><path d="M4 9h16m-8 0v12m0-7-5 7m5-7 5 7"/></>,
 clarity:<><circle cx="12" cy="12" r="9"/><path d="M8 12h8m-4-4v8"/></>,
 people:<><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M17 7a3 3 0 0 1 0 6m1 3c2 1 3 2 3 4"/></>,
 evidence:<><path d="M5 3h11l3 3v15H5zM8 12l3 3 5-6"/></>,
 behavior:<><path d="m4 18 5-5 4 3 7-9m-5 0h5v5"/></>,
 human:<><path d="M12 20s-8-5-8-11a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 6-8 11-8 11z"/></>,
 direction:<><path d="M3 18 20 4 15 20 11 13z"/></>,
 speed:<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 3"/></>,
 review:<><path d="M4 5h12l4 4v11H4zM8 13l3 3 5-6"/></>,
 work:<><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V4h8v3M3 12h18"/></>,
 arrow:<><path d="M4 12h16m-7-7 7 7-7 7"/></>};
 return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{d[kind]||d.design}</svg>;
}
/* ---------- Stack (restored from the original LearningStack; same eight categories, outcomes and tools) ---------- */
function LearningStack() {
  const ref = React.useRef(null);
  const inView = useInViewOnce(ref);
  const [open, setOpen] = React.useState({});
  const SHOW = 4;
  const groups = [
    { n: '01', layer: 'Design', title: 'Learning Design & Authoring', label: 'Interactive learning, microlearning, simulations, branching, assessments, and performance support.', tools: ['Articulate Storyline 360', 'Rise 360', 'Genially', 'Canvas LMS', 'H5P', 'Camtasia interactive video', 'Scenario-based learning tools'] },
    { n: '02', layer: 'AI Production', title: 'AI-Enabled Content & Workflow', label: 'Rapid ideation, content transformation, SME synthesis, scenario drafting, script development, learning architecture, and review acceleration.', tools: ['ChatGPT', 'Claude', 'Gemini', 'Microsoft Copilot', 'NotebookLM', 'Perplexity', 'Prompt systems', 'AI-assisted storyboarding', 'AI review workflows'] },
    { n: '03', layer: 'Automation', title: 'Agentic AI & Learning Automation', label: 'Agentic workflow awareness across content intake, SME analysis, knowledge retrieval, QA checks, learner support, and scalable learning operations.', tools: ['Custom GPTs', 'Claude Projects', 'Zapier', 'Make', 'n8n', 'Airtable automations', 'MCP-enabled workflow concepts', 'RAG knowledge systems', 'AI agents for L&D operations'] },
    { n: '04', layer: 'AI Production', title: 'AI Video, Voice & Localization', label: 'AI-assisted video production, voiceover, localization, multilingual enablement, explainer content, and scalable media production.', tools: ['Synthesia', 'ElevenLabs', 'HeyGen', 'Descript', 'Runway', 'Luma', 'VEED', 'Adobe Podcast', 'AI dubbing and subtitle workflows'] },
    { n: '05', layer: 'Design', title: 'Multimedia & Visual Design', label: 'Visual systems, branded learning assets, motion design, storyboards, prototypes, job aids, decks, and digital learning interfaces.', tools: ['Adobe Creative Suite', 'Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects', 'Canva', 'Figma', 'Miro', 'FigJam'] },
    { n: '06', layer: 'Delivery', title: 'Learning Operations & Platforms', label: 'Learning delivery, stakeholder workflows, content governance, launch operations, versioning, and enterprise enablement.', tools: ['Workday Learn', 'SharePoint', 'Microsoft 365', 'Asana', 'Frame.io', 'LMS governance', 'Release workflows', 'Content intake systems'] },
    { n: '07', layer: 'Measurement', title: 'Analytics, Skills & Measurement', label: 'Learning impact, adoption signals, performance evidence, executive visibility, and data-informed decisions.', tools: ['Tableau', 'Power BI', 'Excel', 'Learning dashboards', 'KPI tracking', 'Adoption metrics', 'Survey analysis', 'Skills intelligence concepts', 'xAPI / LRS awareness'] },
    { n: '08', layer: 'Strategy', title: 'Accessibility & Quality Assurance', label: 'Accessible, inclusive, compliant learning experiences that support learner variability and enterprise quality standards.', tools: ['WCAG', 'UDL', 'Accessibility checkers', 'Captioning tools', 'SRT workflows', 'Screen reader considerations', 'Color contrast checks', 'QA checklists'] }
  ];
  return (
    <section className="jz-st" ref={ref} data-in={inView ? 'true' : 'false'} aria-labelledby="jz-st-title">
      <style>{`
.jz-st{background:#080D0B;padding-block:clamp(88px,10vw,160px) clamp(72px,8vw,128px);border-top:1px solid rgba(217,221,227,.06)}
.jz-st-head{grid-column:1 / span 12;display:grid;grid-template-columns:subgrid;align-items:end;margin-bottom:clamp(48px,6vw,88px)}
.jz-st-head > div{grid-column:1 / span 7;display:flex;flex-direction:column;gap:14px}
.jz-st-h2{margin:0;font:600 clamp(2.25rem,1.4rem + 3vw,4.5rem)/.98 var(--font-display);letter-spacing:-.04em;color:var(--color-text-primary);text-wrap:balance}
.jz-st-sub{grid-column:9 / span 4;margin:0;font:400 1.0625rem/1.6 var(--font-body);color:rgba(217,221,227,.78)}
.jz-st-grid{grid-column:1 / span 12;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(16px,2vw,28px);list-style:none;margin:0;padding:0}
.jz-st-card{display:flex;flex-direction:column;gap:12px;padding:clamp(22px,2.4vw,32px);background:var(--color-background-secondary);border:1px solid var(--color-border-subtle);border-radius:var(--radius-md)}
.jz-st-top{display:flex;justify-content:space-between;gap:12px}
.jz-st-layer{color:rgba(var(--accent-cyan-rgb),.8)}
.jz-st-t{margin:0;font:600 clamp(1.125rem,1rem + .5vw,1.5rem)/1.15 var(--font-display);letter-spacing:-.02em;color:var(--color-text-primary)}
.jz-st-l{margin:0;font:400 .9375rem/1.55 var(--font-body);color:rgba(217,221,227,.82)}
.jz-st-tools{display:flex;flex-wrap:wrap;gap:6px 18px;list-style:none;margin:6px 0 0;padding:14px 0 0;border-top:1px solid rgba(217,221,227,.08)}
.jz-st-tools li{font:400 .8125rem/1.5 var(--font-mono);color:rgba(217,221,227,.74)}
.jz-st-more{align-self:flex-start;min-height:44px;padding:0;background:none;border:0;color:var(--color-accent-primary);font:600 .8125rem/1 var(--font-body);cursor:pointer}
.jz-st-more:focus-visible{outline:2px solid var(--color-accent-primary);outline-offset:4px;border-radius:2px}
.jz-st-note{grid-column:1 / span 12;margin:clamp(32px,4vw,56px) 0 0;max-width:60ch;font:400 .875rem/1.6 var(--font-body);color:rgba(217,221,227,.62)}
@media(max-width:1024px){.jz-st-head > div,.jz-st-sub{grid-column:1 / span 12}.jz-st-sub{margin-top:18px}}
@media(max-width:760px){.jz-st-grid{grid-template-columns:1fr}}
      `}</style>
      <div className="jz-wrap jz-grid">
        <header className="jz-st-head">
          <div className="jz-rise"><p className="jz-label">Tools &amp; platforms</p><h2 className="jz-st-h2" id="jz-st-title">A modern learning stack for strategy, design, production, and scale.</h2></div>
          <p className="jz-st-sub jz-rise">Hands-on tools and emerging AI workflows used to design, build, localize, automate, and measure learning experiences across enterprise environments.</p>
        </header>
        <ul className="jz-st-grid">
          {groups.map((g) => {
            const expanded = !!open[g.n];
            const shown = expanded ? g.tools : g.tools.slice(0, SHOW);
            const rest = g.tools.length - SHOW;
            const listId = 'jz-st-tools-' + g.n;
            return (
              <li key={g.n} className="jz-st-card jz-rise">
                <div className="jz-st-top"><span className="jz-label">{g.n}</span><span className="jz-label jz-st-layer">{g.layer}</span></div>
                <div className="jz-st-titleline"><span className="jz-st-glyph"><PortfolioGlyph kind={g.layer === "AI Production" ? "ai" : g.layer === "Automation" ? "automation" : g.layer === "Design" ? "design" : g.layer === "Delivery" ? "delivery" : g.layer === "Measurement" ? "measure" : "access"} /></span><h3 className="jz-st-t">{g.title}</h3></div>
                <p className="jz-st-l">{g.label}</p>
                <ul className="jz-st-tools" id={listId} aria-label={g.title + ' tools'}>{shown.map((tool) => <li key={tool} className={shown.indexOf(tool) < 2 ? "jz-st-tool--primary" : "jz-st-tool--secondary"}>{tool}</li>)}</ul>
                {rest > 0 && (
                  <button type="button" className="jz-st-more" aria-expanded={expanded} aria-controls={listId} onClick={() => setOpen((o) => ({ ...o, [g.n]: !expanded }))}>
                    <PortfolioGlyph kind="arrow" size={15}/>{expanded ? "Show fewer" : "+" + rest + " more"}<span className="jz-visually-hidden">{expanded ? '' : ' ' + g.title + ' tools'}</span>
                  </button>
                )}
              </li>
            );
          })}
        </ul>
        <p className="jz-st-note jz-rise">Depth varies by tool. Some are daily practice; others are emerging workflows I actively explore and apply where they earn their place.</p>
      </div>
    </section>
  );
}

/* ---------- Principles (restored from the original FoundationManifesto; same eight principles) ---------- */
function Principles() {
  const ref = React.useRef(null);
  const inView = useInViewOnce(ref);
  const principles = [
    { n: '01', t: 'Clarity over complexity', c: 'Every complex problem hides a simpler structure worth finding first.' },
    { n: '02', t: 'People before platforms', c: 'Technology only matters once the people using it can succeed with it.' },
    { n: '03', t: 'Design with evidence', c: 'Decisions hold up when grounded in data, feedback, and observed behavior.' },
    { n: '04', t: 'Learning should move behavior', c: 'The measure of a learning experience is what people do differently after.' },
    { n: '05', t: 'Technology should feel human', c: 'Systems earn adoption when they respect attention, context, and effort.' },
    { n: '06', t: 'Direction, not delegation', c: 'AI expands what is possible; the point of view still has to be mine.' },
    { n: '07', t: 'Speed for production, not decisions', c: 'Move fast on assets. Slow down on the choices that shape outcomes.' },
    { n: '08', t: 'Every output is reviewed and owned', c: 'Nothing ships that I would not defend in front of a stakeholder.' }
  ];
  return (
    <section className="jz-pp" ref={ref} data-in={inView ? 'true' : 'false'} aria-labelledby="jz-pp-title">
      <style>{`
.jz-pp{background:#EEF0EA;color:#0B0D10;padding-block:clamp(88px,10vw,160px)}
.jz-pp .jz-label{color:rgba(11,13,16,.6)}
.jz-pp-head{grid-column:1 / span 12;display:grid;grid-template-columns:subgrid;align-items:end;margin-bottom:clamp(48px,6vw,88px)}
.jz-pp-head > div{grid-column:1 / span 7;display:flex;flex-direction:column;gap:14px}
.jz-pp-h2{margin:0;font:600 clamp(2.25rem,1.4rem + 3vw,4.5rem)/.98 var(--font-display);letter-spacing:-.04em;color:#0B0D10;text-wrap:balance}
.jz-pp-sub{grid-column:9 / span 4;margin:0;font:400 1.0625rem/1.6 var(--font-body);color:rgba(11,13,16,.72)}
.jz-pp-list{grid-column:1 / span 12;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:clamp(24px,4vw,72px);list-style:none;margin:0;padding:0}
.jz-pp-item{display:grid;grid-template-columns:56px 1fr;gap:16px;padding:24px 0;border-top:1px solid rgba(11,13,16,.14)}
.jz-pp-n{position:relative;padding-top:14px;font:500 .75rem/1.2 var(--font-mono);letter-spacing:.14em;color:rgba(11,13,16,.7)}
.jz-pp-n::before{content:'';position:absolute;top:0;left:0;width:24px;height:3px;background:var(--color-accent-primary)}
.jz-pp-t{margin:0 0 6px;font:600 clamp(1.125rem,1rem + .5vw,1.5rem)/1.2 var(--font-display);letter-spacing:-.02em;color:#0B0D10}
.jz-pp-c{margin:0;font:400 .9375rem/1.55 var(--font-body);color:rgba(11,13,16,.74)}
@media(max-width:1024px){.jz-pp-head > div,.jz-pp-sub{grid-column:1 / span 12}.jz-pp-sub{margin-top:18px}}
@media(max-width:760px){.jz-pp-list{grid-template-columns:1fr}.jz-pp-item{grid-template-columns:44px 1fr}}
      `}</style>
      <div className="jz-wrap jz-grid">
        <header className="jz-pp-head">
          <div className="jz-rise"><p className="jz-label">Principles</p><h2 className="jz-pp-h2" id="jz-pp-title">The principles behind every decision.</h2></div>
          <p className="jz-pp-sub jz-rise">Eight commitments that hold whether the work is a leadership simulation, a platform launch, or an AI-assisted production run.</p>
        </header>
        <ol className="jz-pp-list">
          {principles.map((p) => (
            <li key={p.n} className="jz-pp-item jz-rise">
              <span className="jz-pp-n"><PortfolioGlyph kind={["clarity","people","evidence","behavior","human","direction","speed","review"][Number(p.n)-1]} size={27}/><small>{p.n}</small></span>
              <div><h3 className="jz-pp-t">{p.t}</h3><p className="jz-pp-c">{p.c}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

