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
@media(prefers-reduced-motion:reduce){.jz-rise{opacity:1;transform:none;transition:none}.jz-link span:first-child,.jz-link .jz-arrow{transition:none}}
`;
function EditorialStyles() { return <style>{EDITORIAL_CSS}</style>; }

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
    { n: '01', layout: 'lead', org: 'Cox Enterprises', role: 'Lead Learning Experience Designer & Creative Strategist', kicker: 'Leadership development', title: 'Operation: Legacy Unlocked', dek: 'An immersive leadership simulation that casts employees as intelligence agents and turns organizational history into a mission, built for audiences up to VP and SVP.', image: './assets/imagery/olu-featured-work-cover.webp', alt: 'Operation: Legacy Unlocked leadership simulation cover', route: 'Operation: Legacy Unlocked' },
    { n: '02', layout: 'pair-a', org: 'IHG Hotels & Resorts', role: 'Learning Experience Designer / Producer', kicker: 'Product enablement', title: 'Global product readiness for hotel technology', dek: 'New-hire onboarding, release communications, and reusable learning workflows for evolving hotel platforms.', image: './assets/imagery/hotelkey-featured-work-cover.webp', alt: 'HotelKey hotel technology enablement cover', route: 'HotelKey New Hire Onboarding' },
    { n: '03', layout: 'pair-b', org: 'Cox Enterprises', role: 'Creative Lead / Learning Experience Designer', kicker: 'Platform launch', title: 'Workday Learn, launched as a growth ecosystem', dek: 'A launch campaign that led with organizational purpose before platform features.', image: './assets/imagery/workday-featured-work-cover.webp', alt: 'Workday Learn launch at Cox Enterprises cover', route: 'Workday Learn Launch' },
    { n: '04', layout: 'reverse', org: 'IHG Hotels & Resorts', role: 'Learning Strategist / Creative Producer', kicker: 'Change enablement', title: 'Guest CRM adoption across pilot hotels', dek: 'Teaching pilot hotel teams the reasoning behind new guest-relationship workflows, not just where to click.', image: './assets/imagery/guestcrm-featured-work-cover.webp', alt: 'Guest CRM pilot change enablement cover', route: 'Guest CRM Pilot' },
    { n: '05', layout: 'concept', org: 'Showcase prototype · Figma', role: 'AI workflow design, UX/UI prototyping', kicker: 'Systems design', title: 'Enterprise Learning Experience & AI Systems Hub', dek: 'One prototype that brings shipped work together: the Workday Learn launch, the AI production pipeline, Cox 20/20, and IHG product enablement.', href: 'https://jonathan-iker-zamarripa.webflow.io/project/enterprise-learning-experience-ai-systems-hub' }
  ];
  const open = (p) => { if (p.href) window.open(p.href, '_blank', 'noopener,noreferrer'); else if (p.route && onOpenWork) onOpenWork(p.route); };
  const Card = ({ p }) => {
    const external = Boolean(p.href);
    const label = external ? 'View the prototype' : 'Read the case study';
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
          {external
            ? <a className="jz-link jz-fw-cta" href={p.href} target="_blank" rel="noopener noreferrer" aria-label={label + ': ' + p.title + ' (opens in a new tab)'}><span>{label}</span><span className="jz-arrow" aria-hidden="true">↗</span></a>
            : <button type="button" className="jz-link jz-fw-cta" onClick={() => open(p)} aria-label={label + ': ' + p.title}><span>{label}</span><span className="jz-arrow" aria-hidden="true">→</span></button>}
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
.jz-fw-cards{grid-column:1 / span 12;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(48px,5vw,80px) clamp(24px,3vw,48px)}
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
@media(max-width:1024px){.jz-fw-h2{grid-column:1 / span 12}.jz-fw-intro{grid-column:1 / span 8;margin-top:22px}.jz-fw-head{align-items:start}}
@media(max-width:760px){.jz-fw-cards{grid-template-columns:1fr;gap:56px}.jz-fw-intro{grid-column:1 / span 12}.jz-fw-org{margin-left:0;width:100%}}
@media(prefers-reduced-motion:reduce){.jz-fw-media,.jz-fw-media-img,.jz-fw-title,.jz-fw-card .jz-arrow{transition:none}.jz-fw-card:hover .jz-fw-media-img,.jz-fw-card:focus-within .jz-fw-media-img{transform:none}}
      `}</style>
      <div className="jz-wrap jz-grid">
        <header className="jz-fw-head">
          <div style={{ gridColumn: '1 / span 12' }}><p className="jz-label jz-rise">Selected case studies · 05</p></div>
          <h2 className="jz-fw-h2 jz-rise" id="jz-fw-title">Featured work</h2>
          <p className="jz-fw-intro jz-rise">Leadership, product, and platform change for enterprise teams, each shown from the problem to the shipped experience.</p>
        </header>
        <div className="jz-fw-cards">{projects.map((p) => <Card key={p.n} p={p} />)}</div>
      </div>
    </section>
  );
}

/* ---------- Impact ---------- */
function CountUp({ to, run, suffix }) {
  const [v, setV] = React.useState(prefersReduced() ? to : 0);
  React.useEffect(() => {
    if (!run || prefersReduced()) { if (run) setV(to); return undefined; }
    let raf, start;
    const tick = (t) => { if (!start) start = t; const p = Math.min(1, (t - start) / 1100); setV(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, to]);
  return <React.Fragment>{v}<span className="jz-im-unit">{suffix}</span></React.Fragment>;
}

function ImpactEditorial() {
  const ref = React.useRef(null);
  const inView = useInViewOnce(ref, { threshold: 0.3 });
  const lead = { to: 98, suffix: '%', label: 'Platform adoption in Q1, supported through targeted enablement', src: 'Workday Learn launch · Cox Enterprises', cat: 'Adoption' };
  const rest = [
    { to: 40, suffix: '%', label: 'Faster content development using an AI-assisted production pipeline, adopted team-wide', src: 'Learning production · Cox Enterprises', cat: 'Production' },
    { to: 35, suffix: '%', label: 'Lift in strategic knowledge retention versus presentation formats', src: 'Cox 20/20 executive simulation', cat: 'Leadership' },
    { to: 95, suffix: '%', label: 'Adoption and 4.9/5 satisfaction on an organization-wide LMS migration', src: 'Digital learning function · Atlanta International School', cat: 'Migration' },
    { to: 16, suffix: '+ yrs', label: 'Designing learning across corporate, technology, and education environments', cat: 'Experience' }
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
          <p className="jz-im-note">Outcomes from enterprise programs I designed or contributed to. Detail sits in each case study.</p>
        </div>
        <div className="jz-im-lead jz-rise">
          <p className="jz-label">{lead.cat}</p>
          <p className="jz-im-fig" aria-label={lead.to + lead.suffix}><CountUp to={lead.to} run={inView} suffix={lead.suffix} /></p>
          <p className="jz-im-label">{lead.label}</p>
          <p className="jz-im-src">{lead.src}</p>
        </div>
        <div className="jz-im-row">
          {rest.map((m) => (
            <div key={m.cat} className="jz-im-cell jz-rise">
              <p className="jz-label">{m.cat}</p>
              <p className="jz-im-fig" aria-label={m.to + m.suffix}><CountUp to={m.to} run={inView} suffix={m.suffix} /></p>
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
function Practice() {
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
    { t: 'Learning strategy', c: 'Learning ecosystems that connect business goals, learner needs, stakeholder priorities, and measurable outcomes.', tools: 'Miro, FigJam, Tableau, Power BI, learning dashboards, KPI and adoption tracking, survey analysis' },
    { t: 'Product & technology enablement', c: 'Complex platforms, workflows, and system changes turned into learning that supports adoption and operational readiness.', tools: 'Workday Learn, SharePoint, Microsoft 365, Asana, Frame.io, LMS governance, release workflows' },
    { t: 'Leadership development', c: 'Leadership experiences that strengthen decision-making, alignment, emotional intelligence, and enterprise capability.', tools: 'Articulate Storyline 360, scenario and branching design, simulations, facilitation kits' },
    { t: 'AI-enabled production', c: 'AI-supported workflows that accelerate content development, personalize learning, and scale multimedia.', tools: 'ChatGPT, Claude, Gemini, Copilot, NotebookLM, Custom GPTs, Zapier, Make, n8n, Synthesia, ElevenLabs, HeyGen, Descript, Runway' },
    { t: 'Digital learning & multimedia', c: 'eLearning, explainer video, motion, job aids, and digital assets that make complex information easier to apply.', tools: 'Storyline 360, Rise 360, Camtasia, Genially, H5P, Canvas LMS, Premiere Pro, After Effects, Photoshop, Illustrator, Figma' },
    { t: 'Accessibility & inclusive design', c: 'Designing for accessibility, representation, and learner variability, grounded in WCAG and UDL.', tools: 'WCAG, UDL, accessibility checkers, captioning and SRT workflows, screen-reader and contrast checks, QA checklists' }
  ];
  return (
    <section className="jz-pr" ref={ref} data-in={inView ? 'true' : 'false'} aria-labelledby="jz-pr-title">
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
.jz-pr-caps-head h3{grid-column:1 / span 6;margin:12px 0 0;font:600 clamp(1.5rem,1.1rem + 1.1vw,2.25rem)/1.08 var(--font-display);letter-spacing:-.025em;color:var(--color-text-primary)}
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
        <header className="jz-pr-head">
          <div className="jz-rise"><p className="jz-label">Practice</p><h2 className="jz-pr-h2" id="jz-pr-title">How thought becomes action.</h2></div>
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
        <div className="jz-pr-caps-head">
          <p className="jz-label" style={{ gridColumn: '1 / span 12' }}>Capabilities &amp; tools</p>
          <h3>What I bring to a team.</h3>
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
        <p className="jz-pr-close jz-rise">Every output is reviewed and owned. Nothing ships that I wouldn't defend in front of a stakeholder.</p>
      </div>
    </section>
  );
}
