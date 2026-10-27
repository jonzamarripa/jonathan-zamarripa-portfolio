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
   Work (page) → Impact (Deep Navy) → Capabilities (Mist, light) → Method (Slate) → Cinematic Learning Systems (Ink + Amber/Teal)
   → Creative Lab (page) → About (navy) → Journey (Warm Paper, light) → Stack (Carbon) → Principles (light) → Archive (page).
   Scoped to .jiz-homepage so it layers over each section's own styles. */
const RHYTHM_CSS = `
.jiz-homepage{--panel-gap:clamp(10px,1.4vw,20px);--panel-r:clamp(18px,2.4vw,32px);--panel-gutter-surface:#171A1F;background:var(--panel-gutter-surface)!important}
/* Every major chapter is a panel; the Carbon page shows through the gutters, so dark panels keep a visible curved edge. */
.jiz-homepage .hero,.jiz-homepage .jz-fw,.jiz-homepage .jz-im,.jiz-homepage .jz-pr,.jiz-homepage .jz-cls,.jiz-homepage .jiz-creative-lab,.jiz-homepage .jiz-am,.jiz-homepage .jz-jr,.jiz-homepage .jz-st,.jiz-homepage .jz-pp,.jiz-homepage .jiz-arch,.jiz-homepage .jiz-build{width:auto;margin:var(--panel-gap);border-radius:var(--panel-r);overflow:hidden;border:0}

/* Hero — cinematic dark panel; video, crop and copy untouched. Height trimmed by the gutters so the fold is unchanged. */
.jiz-homepage .hero{background-color:#0B0D10;margin-top:0}
@media(min-width:901px){.jiz-homepage .hero,.jiz-homepage .hero-content{min-height:calc(100svh - 96px - 2 * var(--panel-gap))}}
/* Selected experience strip sits on the Carbon page between the hero and Featured Work */
.jiz-homepage .jz-exp{background:transparent;border:0}

/* Featured Work — Warm Paper editorial surface with dark cinematic media */
.jiz-homepage .jz-fw{background:#E8E3D9;color:#0B0D10}
.jiz-homepage .jz-fw .jz-label{color:rgba(11,13,16,.64)}
.jiz-homepage .jz-fw-h2,.jiz-homepage .jz-fw-n,.jiz-homepage .jz-fw-title{color:#0B0D10}
.jiz-homepage .jz-fw-intro,.jiz-homepage .jz-fw-dek{color:rgba(11,13,16,.76)}
.jiz-homepage .jz-fw-org{color:rgba(11,13,16,.62)}
.jiz-homepage .jz-fw-media{background:linear-gradient(135deg,#171A1F 0%,#1F4556 100%);border-color:rgba(11,13,16,.14)}
.jiz-homepage .jz-fw-card:hover .jz-fw-title{color:#1F4556}
.jiz-homepage .jz-fw-card:hover .jz-fw-media,.jiz-homepage .jz-fw-card:focus-within .jz-fw-media{border-color:#1F4556}
.jiz-homepage .jz-fw-card:has(.jz-fw-cta:focus-visible){outline-color:#0B0D10}
.jiz-homepage .jz-fw .jz-link{color:#0B0D10;font-weight:600}
.jiz-homepage .jz-fw .jz-link:focus-visible{outline-color:#0B0D10}
.jiz-homepage .jz-fw-card--text{border-top-color:rgba(11,13,16,.16)}

/* Creative Lab — cinematic Obsidian panel (content and video untouched) */
.jiz-homepage .jiz-creative-lab{background-color:#0B0D10}

/* Archive — its own darkened film; Contact — Deep Navy */
.jiz-homepage .jiz-build{background:linear-gradient(180deg,#1F4556 0%,#1A3B49 100%)}
.jiz-homepage .jiz-build .jz-label,.jiz-homepage .jiz-build .jz-ct-note,.jiz-homepage .jiz-build .jiz-build-form-note,.jiz-homepage .jiz-build .jiz-build-privacy{color:rgba(232,240,245,.82)}

/* Impact — Deep Navy architectural panel; primary metric marked, supporting metrics grouped */
.jiz-homepage .jz-im{background:#1F4556}
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
.jiz-homepage .jz-pr--capabilities .jz-pr-cap button:hover{background:linear-gradient(90deg,rgba(31,69,86,.07),transparent 60%)}
.jiz-homepage .jz-pr--capabilities .jz-pr-cap button:hover .jz-pr-cap-t,.jiz-homepage .jz-pr--capabilities .jz-pr-cap[data-open="true"] .jz-pr-cap-t{color:#1F4556}
.jiz-homepage .jz-pr--capabilities .jz-pr-cap[data-open="true"] .jz-pr-cap-x{color:#1F4556}
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

/* About — coordinated navy surface (video untouched) */
.jiz-homepage .jiz-am{background:linear-gradient(158deg,#173543 0%,#1F4556 55%,#24505F 100%)}
.jiz-homepage .jiz-am-quote-by{font-size:.6875rem;color:rgba(232,240,245,.74)}
.jiz-homepage .jiz-am .jz-label{color:rgba(232,240,245,.78)}

/* Journey — Warm Paper light chapter, dark type, progression rail */
.jiz-homepage .jz-jr{background:#E8E3D9;color:#0B0D10}
.jiz-homepage .jz-jr .jz-label{color:rgba(11,13,16,.62)}
.jiz-homepage .jz-jr-h2,.jiz-homepage .jz-jr-t{color:#0B0D10}
.jiz-homepage .jz-jr-sub,.jiz-homepage .jz-jr-c{color:rgba(11,13,16,.76)}
.jiz-homepage .jz-jr-x{color:#1F4556;opacity:1;font-weight:600}
.jiz-homepage .jz-jr-m{color:rgba(11,13,16,.66)}
.jiz-homepage .jz-jr-rail{position:relative}
.jiz-homepage .jz-jr-rail::before{content:'';position:absolute;left:0;right:0;top:0;height:1px;background:linear-gradient(90deg,rgba(11,13,16,.18),rgba(31,69,86,.7))}
.jiz-homepage .jz-jr-stage{border-top-color:transparent}
.jiz-homepage .jz-jr-stage::before{box-sizing:border-box;width:9px;height:9px;top:-4px;background:#E8E3D9;border:1.5px solid #1F4556}
.jiz-homepage .jz-jr-stage:last-child::before{background:var(--color-accent-primary);border-color:#0B0D10}
@media(max-width:1024px){
  .jiz-homepage .jz-jr-rail::before{display:none}
  .jiz-homepage .jz-jr-stage{border-top-color:rgba(11,13,16,.16)}
}
@media(max-width:560px){
  .jiz-homepage .jz-jr-rail{padding-left:24px}
  .jiz-homepage .jz-jr-rail::before{display:block;left:4px;right:auto;top:0;bottom:0;width:1px;height:auto;background:linear-gradient(180deg,rgba(11,13,16,.18),rgba(31,69,86,.7))}
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
  const orgs = ['Cox Enterprises', 'IHG Hotels & Resorts', 'Atlanta International School'];
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
        <p className="jz-exp-edu"><span className="jz-label">Education</span><span>M.Ed., Instructional Design &amp; Technology, Arizona State University</span></p>
      </div>
    </section>
  );
}

/* ---------- Featured work ---------- */
function FeaturedWorkEditorial({ onOpenWork }) {
  const ref = React.useRef(null);
  const inView = useInViewOnce(ref);
  const projects = [
    { n: '01', layout: 'flagship', org: 'Independent project', role: 'Designed, written and produced by Jonathan Zamarripa', kicker: 'Interactive Experience', title: 'The First Sentence', dek: 'Yesterday, you were a teammate. Today, you\u2019re their supervisor. A cinematic branching simulation for newly promoted frontline supervisors.', chips: ['About 7 min', 'Branching paths', 'Speak or type'], image: './assets/imagery/the-first-sentence/screens/01-threshold.webp', alt: 'The First Sentence start screen: “The first sentence.” title, scenario details and the Begin experience button', route: 'The First Sentence', cta: 'Explore the interactive experience' },
    { n: '02', layout: 'lead', org: 'Cox Enterprises', role: 'Lead Learning Experience Designer & Creative Strategist', kicker: 'Leadership development', title: 'Operation: Legacy Unlocked', dek: 'An immersive leadership simulation that casts employees as intelligence agents and turns organizational history into a mission, built for audiences up to VP and SVP.', image: './assets/imagery/olu-featured-work-illustration.webp', alt: 'Operation: Legacy Unlocked leadership simulation cover', route: 'Operation: Legacy Unlocked' },
    { n: '03', layout: 'pair-a', org: 'IHG Hotels & Resorts', role: 'Learning Experience Designer / Producer', kicker: 'Product enablement', title: 'Global product readiness for hotel technology', dek: 'New-hire onboarding, release communications, and reusable learning workflows for evolving hotel platforms.', image: './assets/imagery/hotelkey-featured-work-illustration.webp', alt: 'HotelKey hotel technology enablement cover', route: 'HotelKey New Hire Onboarding' },
    { n: '04', layout: 'pair-b', org: 'Cox Enterprises', role: 'Creative Lead / Learning Experience Designer', kicker: 'Platform launch', title: 'Workday Learn, launched as a growth ecosystem', dek: 'A launch campaign that led with organizational purpose before platform features.', image: './assets/imagery/workday-featured-work-cover.webp', alt: 'Workday Learn launch at Cox Enterprises cover', route: 'Workday Learn Launch' },
    { n: '05', layout: 'reverse', org: 'IHG Hotels & Resorts', role: 'Learning Strategist / Creative Producer', kicker: 'Change enablement', title: 'Guest CRM adoption across pilot hotels', dek: 'Teaching pilot hotel teams the reasoning behind new guest-relationship workflows, not just where to click.', image: './assets/imagery/guestcrm-featured-work-illustration.webp', alt: 'Guest CRM pilot change enablement cover', route: 'Guest CRM Pilot' },
  ];
  // Each case study has its own URL (shareable, opens in a new tab with Cmd/Ctrl-click); a plain click opens it in the overlay.
  const pathOf = (route) => { const S = window.JIZ_SITE; const t = S && S.resolve(route); const r = t && S.route && S.route(t.view); return r && r.path; };
  const overlayRoute = (route) => { const S = window.JIZ_SITE; const t = S && S.resolve(route); const r = t && S.route && S.route(t.view); return !!(r && r.featured); };
  const open = (e, p) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button > 0 || !overlayRoute(p.route)) return;
    e.preventDefault();
    if (p.route && onOpenWork) onOpenWork(p.route);
  };
  const Card = ({ p }) => {
    const href = p.route ? pathOf(p.route) : null;
    const label = p.cta || 'Read the case study';
    if (p.layout === 'flagship') return (
      <article className="jz-fw-card jz-fw-flag jz-rise">
        <div className="jz-fw-flag-media">
          <img src={p.image} alt={p.alt} loading="lazy" decoding="async" width="1600" height="799" />
        </div>
        <div className="jz-fw-meta">
          <p className="jz-label jz-fw-kicker"><span className="jz-fw-n">{p.n}</span><span className="jz-fw-badge">{p.kicker}</span><span className="jz-fw-org">{p.org}</span></p>
          <h3 className="jz-fw-title">{p.title}</h3>
          <p className="jz-fw-dek">{p.dek}</p>
          <ul className="jz-fw-chips" aria-label="Experience details">{p.chips.map((c) => <li key={c}>{c}</li>)}</ul>
          {href ? <a className="jz-link jz-fw-cta" href={href} onClick={(e) => open(e, p)} aria-label={label + ': ' + p.title}><span>{label}</span><span className="jz-arrow" aria-hidden="true">→</span></a> : null}
        </div>
      </article>
    );
    return (
      <article className={'jz-fw-card' + (p.image ? '' : ' jz-fw-card--text') + ' jz-rise'}>
        {p.image && (
          <div className="jz-fw-media" aria-hidden="true">
            <img className="jz-fw-media-bg" src={p.image} alt="" loading="lazy" decoding="async" />
            <img className="jz-fw-media-img" src={p.image} alt="" loading="lazy" decoding="async" width="1254" height="1254" />
          </div>
        )}
        <div className="jz-fw-meta">
          <p className="jz-label jz-fw-kicker"><span className="jz-fw-n">{p.n}</span><span>{p.kicker}</span><span className="jz-fw-org">{p.org}</span></p>
          <h3 className="jz-fw-title">{p.title}</h3>
          <p className="jz-fw-dek">{p.dek}</p>
          {href
            ? <a className="jz-link jz-fw-cta" href={href} onClick={(e) => open(e, p)} aria-label={label + ': ' + p.title}><span>{label}</span><span className="jz-arrow" aria-hidden="true">→</span></a>
            : null}
        </div>
      </article>
    );
  };
  return (
    <section className="jz-fw" ref={ref} data-in={inView ? 'true' : 'false'} aria-labelledby="jz-fw-title">
      <EditorialStyles />
      <style>{`
.jz-fw{position:relative;background:#080D0B;padding-block:clamp(88px,10vw,168px) clamp(72px,8vw,128px)}
.jz-fw-head{grid-column:1 / span 12;display:grid;grid-template-columns:subgrid;align-items:end;margin-bottom:clamp(48px,6vw,88px)}
.jz-fw-h2{grid-column:1 / span 7;margin:14px 0 0;font:600 clamp(2.75rem,1.6rem + 4.6vw,6.5rem)/.94 var(--font-display);letter-spacing:-.045em;color:var(--color-text-primary)}
.jz-fw-intro{grid-column:9 / span 4;margin:0;font:400 1.0625rem/1.6 var(--font-body);color:rgba(217,221,227,.78);text-wrap:pretty}
.jz-fw-cards{grid-column:1 / span 12;display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(28px,3vw,48px);align-items:start}
.jz-fw-secondary{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(32px,3.4vw,52px) clamp(20px,2.4vw,36px)}
.jz-fw-secondary .jz-fw-title{font-size:clamp(1.25rem,1rem + .7vw,1.625rem)}
.jz-fw-secondary .jz-fw-dek{font-size:.9375rem}
/* Flagship: The First Sentence — 16:19 poster; Industrial Orange only as a restrained marker */
.jz-fw-flag-media{position:relative;overflow:hidden;aspect-ratio:16 / 19;border-radius:var(--panel-r-inner);background:#0B0D10;box-shadow:inset 0 -3px 0 var(--accent-first-sentence)}
.jz-fw-flag-media img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:4% 50%;transition:transform 220ms var(--ease-standard)}
.jz-fw-flag:hover .jz-fw-flag-media img,.jz-fw-flag:focus-within .jz-fw-flag-media img{transform:scale(1.02)}
.jz-fw-flag .jz-fw-title{font-size:clamp(1.875rem,1.2rem + 2vw,3rem)}
.jz-fw-badge{display:inline-flex;align-items:center;padding:4px 10px;border-radius:999px;background:var(--accent-first-sentence);color:#0B0D10;letter-spacing:.12em}
.jz-fw-chips{display:flex;flex-wrap:wrap;gap:8px;margin:0;padding:0;list-style:none}
.jz-fw-chips li{padding:5px 12px;border:1px solid rgba(11,13,16,.2);border-radius:999px;font:500 .75rem/1.2 var(--font-mono);letter-spacing:.04em;color:rgba(11,13,16,.78)}
.jz-fw-card{position:relative;display:flex;flex-direction:column;gap:clamp(20px,2vw,28px);min-width:0}
.jz-fw-card--text{grid-column:1 / -1;padding-top:clamp(28px,3vw,40px);border-top:1px solid var(--color-border-default)}
.jz-fw-media{position:relative;overflow:hidden;aspect-ratio:16 / 10;border-radius:var(--radius-md);background:linear-gradient(135deg,var(--color-background-secondary) 0%,#1F4556 100%);border:1px solid var(--color-border-subtle);transition:border-color 220ms var(--ease-standard)}
.jz-fw-media-bg{position:absolute;inset:-12%;width:124%;height:124%;object-fit:cover;filter:blur(28px) saturate(.9) brightness(.42);opacity:.9}
.jz-fw-media-img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;transition:transform 220ms var(--ease-standard)}
.jz-fw-meta{display:flex;flex-direction:column;align-items:flex-start;gap:12px;min-width:0}
.jz-fw-kicker{display:flex;flex-wrap:wrap;gap:6px 14px;align-items:baseline;width:100%}
.jz-fw-n{color:var(--color-text-primary)}
.jz-fw-org{margin-left:auto;color:rgba(217,221,227,.5)}
.jz-fw-title{margin:0;font:600 clamp(1.5rem,1.1rem + 1.1vw,2.25rem)/1.08 var(--font-display);letter-spacing:-.025em;color:var(--color-text-primary);text-wrap:balance;transition:color 220ms var(--ease-standard)}
.jz-fw-dek{margin:0;max-width:52ch;font:400 1rem/1.6 var(--font-body);color:rgba(217,221,227,.8);text-wrap:pretty}
.jz-fw-card--text .jz-fw-title{font-size:clamp(1.5rem,1rem + 1.4vw,2.5rem);max-width:28ch}
.jz-fw-card--text .jz-fw-dek{max-width:68ch}
.jz-fw-cta{margin-top:4px}
.jz-fw-cta::after{content:"";position:absolute;inset:0;z-index:1}
.jz-fw-cta:focus-visible{outline:none}
.jz-fw-card:has(.jz-fw-cta:focus-visible){outline:2px solid var(--color-accent-primary);outline-offset:8px;border-radius:var(--radius-md)}
.jz-fw-card:hover .jz-fw-media-img,.jz-fw-card:focus-within .jz-fw-media-img{transform:scale(1.02)}
.jz-fw-card:hover .jz-fw-media,.jz-fw-card:focus-within .jz-fw-media{border-color:rgba(198,242,58,.28)}
.jz-fw-card:hover .jz-fw-title{color:#fff}
.jz-fw-card:hover .jz-arrow,.jz-fw-card:focus-within .jz-arrow{transform:translateX(5px)}
.jz-fw-card .jz-arrow{transition:transform 220ms var(--ease-standard)}
@media(max-width:1024px){.jz-fw-cards{grid-template-columns:1fr}.jz-fw-flag{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,6fr);gap:clamp(20px,3vw,36px);align-items:center}.jz-fw-h2{grid-column:1 / span 12}.jz-fw-intro{grid-column:1 / span 8;margin-top:22px}.jz-fw-head{align-items:start}}
@media(max-width:760px){.jz-fw-cards{grid-template-columns:1fr;gap:56px}.jz-fw-flag{display:flex;align-items:stretch}.jz-fw-secondary{grid-template-columns:1fr;gap:48px}.jz-fw-intro{grid-column:1 / span 12}.jz-fw-org{margin-left:0;width:100%}}
@media(prefers-reduced-motion:reduce){.jz-fw-flag-media img{transition:none}.jz-fw-flag:hover .jz-fw-flag-media img,.jz-fw-flag:focus-within .jz-fw-flag-media img{transform:none}.jz-fw-media,.jz-fw-media-img,.jz-fw-title,.jz-fw-card .jz-arrow{transition:none}.jz-fw-card:hover .jz-fw-media-img,.jz-fw-card:focus-within .jz-fw-media-img{transform:none}}
      `}</style>
      <div className="jz-wrap jz-grid">
        <header className="jz-fw-head">
          <div style={{ gridColumn: '1 / span 12' }}><p className="jz-label jz-rise">Selected case studies · 05</p></div>
          <h2 className="jz-fw-h2 jz-rise" id="jz-fw-title">Featured work</h2>
          <p className="jz-fw-intro jz-rise">Leadership, product, and platform change for enterprise teams, each shown from the problem to the shipped experience.</p>
        </header>
        <div className="jz-fw-cards">
          <Card p={projects[0]} />
          <div className="jz-fw-secondary">{projects.slice(1).map((p) => <Card key={p.n} p={p} />)}</div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Impact ---------- */
function CountUp({ to, run, suffix, srSuffix }) {
  // The final value is rendered by default (prerendered HTML, no-JS, crawlers, link previews).
  // Once the page is interactive, the visible figure resets to 0 and counts up when seen; screen readers always get the real value.
  const [v, setV] = React.useState(to);
  const done = React.useRef(false);
  React.useEffect(() => { if (!run && !prefersReduced()) setV(0); }, []);
  React.useEffect(() => {
    if (!run || done.current) return undefined;
    done.current = true;
    if (prefersReduced()) { setV(to); return undefined; }
    let raf, start;
    const tick = (t) => { if (!start) start = t; const p = Math.min(1, (t - start) / 1100); setV(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, to]);
  return (
    <React.Fragment>
      <span aria-hidden="true">{v}<span className="jz-im-unit">{suffix}</span></span>
      <span className="jz-visually-hidden">{String(to) + (srSuffix || suffix)}</span>
    </React.Fragment>
  );
}

function ImpactEditorial() {
  const ref = React.useRef(null);
  const inView = useInViewOnce(ref, { threshold: 0.3 });
  const lead = { to: 98, suffix: '%', label: 'Platform adoption in Q1, supported through targeted enablement', src: 'Workday Learn launch · Cox Enterprises', cat: 'Adoption' };
  const rest = [
    { to: 40, suffix: '%', label: 'Faster content development using an AI-assisted production pipeline, adopted team-wide', src: 'Learning production · Cox Enterprises', cat: 'Production' },
    { to: 35, suffix: '%', label: 'Lift in strategic knowledge retention versus presentation formats', src: 'Cox 20/20 executive simulation', cat: 'Leadership' },
    { to: 95, suffix: '%', label: 'Adoption and 4.9/5 satisfaction on an organization-wide LMS migration', src: 'Digital learning function · Atlanta International School', cat: 'Migration' },
    // Non-numeric until a verified duration is confirmed.
    { text: 'Education to enterprise', label: 'Experience across education, enterprise learning, technology enablement, and creative production', cat: 'Experience' }
  ];
  return (
    <section className="jz-im" ref={ref} data-in={inView ? 'true' : 'false'} aria-labelledby="jz-im-title">
      <style>{`
.jz-im{background:#0B0F0D;padding-block:clamp(80px,9vw,148px)}
.jz-im-head{grid-column:1 / span 4;display:flex;flex-direction:column;gap:16px}
.jz-im-h2{margin:0;font:600 clamp(1.75rem,1.3rem + 1.4vw,2.75rem)/1.05 var(--font-display);letter-spacing:-.03em;color:var(--color-text-primary)}
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
        </div>
        <div className="jz-im-lead jz-rise">
          <p className="jz-label">{lead.cat}</p>
          <p className="jz-im-fig"><CountUp to={lead.to} run={inView} suffix={lead.suffix} srSuffix={lead.srSuffix} /></p>
          <p className="jz-im-label">{lead.label}</p>
          <p className="jz-im-src">{lead.src}</p>
        </div>
        <div className="jz-im-row">
          {rest.map((m) => (
            <div key={m.cat} className="jz-im-cell jz-rise">
              <p className="jz-label">{m.cat}</p>
              {m.text
                ? <p className="jz-im-fig jz-im-fig--text">{m.text}</p>
                : <p className="jz-im-fig"><CountUp to={m.to} run={inView} suffix={m.suffix} srSuffix={m.srSuffix} /></p>}
              <p className="jz-im-label">{m.label}</p>
              {m.src ? <p className="jz-im-src">{m.src}</p> : null}
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
.jz-pr-steps{grid-column:1 / span 12;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));list-style:none;margin:0;padding:0;border-top:1px solid rgba(217,221,227,.14);counter-reset:s}
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
        <p className="jz-pr-close jz-rise">Every output is reviewed and owned. Nothing ships that I wouldn't defend in front of a stakeholder.</p>
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
                <div className="jz-pr-tools" id={'jz-pr-tools-' + i} hidden={!open}><p>{c.tools}</p></div>
              </li>
            );
          })}
        </ul>
        </>)}
      </div>
    </section>
  );
}

/* ---------- Career journey (restored from the original CareerArc; same four stages and copy) ---------- */
function CareerJourney() {
  const ref = React.useRef(null);
  const inView = useInViewOnce(ref);
  const stages = [
    // ctx: organization · industry. meta: title · engagement type · dates, exactly as confirmed by Jonathan.
    { n: '01', title: 'Education Innovation', ctx: 'K–12 education · Teaching', copy: 'Guided educators through digital learning adoption, where I learned to design for real behavior change.' },
    { n: '02', title: 'Digital Transformation', ctx: 'Atlanta International School · International education', meta: 'EdTech & Innovation Coach / Strategist · Employee · 2019\u2060–\u20602024', copy: 'Supported an organization-wide LMS migration, helping a school community move from hesitation to fluency.' },
    { n: '03', title: 'Enterprise L&D', ctx: 'Cox Enterprises · Enterprise & corporate learning', meta: 'Learning Experience Designer · Contract · Feb\u2060–\u2060Sep 2025', copy: 'Designed leadership and enterprise learning for audiences from frontline teams to SVPs.' },
    { n: '04', title: 'Product & Technology Enablement', ctx: 'IHG Hotels & Resorts · Hospitality technology', meta: 'Creative Content Specialist / Producer · Contract · Sep 2025\u2060–\u2060Aug 2026', copy: 'Turned evolving platforms into release-ready learning that keeps global teams operationally current.' }
  ];
  return (
    <section className="jz-jr" ref={ref} data-in={inView ? 'true' : 'false'} aria-labelledby="jz-jr-title">
      <style>{`
.jz-jr{background:#080D0B;padding-block:clamp(72px,8vw,128px)}
.jz-jr-head{grid-column:1 / span 12;display:grid;grid-template-columns:subgrid;align-items:end;margin-bottom:clamp(40px,5vw,72px)}
.jz-jr-head > div{grid-column:1 / span 7;display:flex;flex-direction:column;gap:14px}
.jz-jr-h2{margin:0;font:600 clamp(2rem,1.3rem + 2.4vw,3.5rem)/1 var(--font-display);letter-spacing:-.035em;color:var(--color-text-primary)}
.jz-jr-sub{grid-column:9 / span 4;margin:0;font:400 1rem/1.6 var(--font-body);color:rgba(217,221,227,.78)}
.jz-jr-rail{grid-column:1 / span 12;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(20px,2.4vw,40px);list-style:none;margin:0;padding:0}
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
.jz-st-layer{color:rgba(100,225,255,.8)}
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
                <h3 className="jz-st-t">{g.title}</h3>
                <p className="jz-st-l">{g.label}</p>
                <ul className="jz-st-tools" id={listId} aria-label={g.title + ' tools'}>{shown.map((tool) => <li key={tool}>{tool}</li>)}</ul>
                {rest > 0 && (
                  <button type="button" className="jz-st-more" aria-expanded={expanded} aria-controls={listId} onClick={() => setOpen((o) => ({ ...o, [g.n]: !expanded }))}>
                    {expanded ? 'Show fewer' : '+' + rest + ' more'}<span className="jz-visually-hidden">{expanded ? '' : ' ' + g.title + ' tools'}</span>
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
              <span className="jz-pp-n">{p.n}</span>
              <div><h3 className="jz-pp-t">{p.t}</h3><p className="jz-pp-c">{p.c}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

