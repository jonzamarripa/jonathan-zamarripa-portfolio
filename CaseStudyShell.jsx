// Shared case-study shell — RC4 master architecture.
// Renders only the sections a project supplies; missing sections surface an
// honest "in development" notice rather than invented content.
function PackageCarousel({ items }) {
  const [index, setIndex] = React.useState(0);
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [dir, setDir] = React.useState('next');
  const [playing, setPlaying] = React.useState(false);
  const videoRef = React.useRef(null);
  const show = (i, d) => { setDir(d); setPlaying(false); setIndex(((i % items.length) + items.length) % items.length); };
  const showPrev = () => show(index - 1, 'previous');
  const showNext = () => show(index + 1, 'next');
  const onKeyDown = (e) => { if (e.key === 'ArrowLeft') { e.preventDefault(); showPrev(); } if (e.key === 'ArrowRight') { e.preventDefault(); showNext(); } };
  const item = items[index];
  const progressPercent = ((index + 1) / items.length) * 100;
  const togglePlay = () => { const v = videoRef.current; if (!v) return; if (v.paused) v.play(); else v.pause(); };
  return (
    <div>
      <div
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Portfolio package assets"
        onKeyDown={onKeyDown}
        style={{ position: 'relative', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: '#06090b', outline: 'none' }}
        onContextMenu={(e) => { if (item.type === 'video') e.preventDefault(); }}
      >
        <figure key={item.src} style={{ margin: 0, animation: reduced ? 'none' : `jiz-package-enter-${dir} 420ms ease` }}>
          {item.type === 'video' ? (
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
              <video
                ref={videoRef}
                src={item.src}
                preload="metadata"
                playsInline
                controlsList="nodownload noremoteplayback noplaybackrate"
                disablePictureInPicture
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onContextMenu={(e) => e.preventDefault()}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', background: '#000' }}
              />
              {!playing && (
                <button onClick={togglePlay} aria-label={`Play ${item.caption || 'video'}`} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(180deg, rgba(6,9,11,0.15), rgba(6,9,11,0.55))', border: 'none', cursor: 'pointer' }}>
                  <span style={{ width: 64, height: 64, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(10,14,17,0.72)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(6px)' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z" /></svg>
                  </span>
                </button>
              )}
            </div>
          ) : (
            <img src={item.src} alt={item.caption || ''} loading="lazy" style={{ display: 'block', width: '100%', height: 'auto' }} />
          )}
          {item.caption ? <figcaption style={{ padding: '10px 14px', color: 'var(--color-text-muted)', font: 'var(--text-caption)', fontSize: '0.8125rem' }}>{item.caption}</figcaption> : null}
        </figure>
      </div>
      <nav style={{ display: 'grid', gridTemplateColumns: '58px minmax(0,1fr) 58px', alignItems: 'center', gap: 'clamp(18px,3vw,34px)', marginTop: 'clamp(20px,3vw,28px)' }} aria-label="Portfolio package navigation">
        <button type="button" onClick={showPrev} aria-label="Show previous asset" title="Previous" style={{ width: 58, height: 58, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.03)', color: 'var(--color-text-primary)', cursor: 'pointer', fontSize: '1.1rem' }}>←</button>
        <div role="progressbar" aria-label="Portfolio package progress" aria-valuemin="1" aria-valuemax={items.length} aria-valuenow={index + 1} style={{ position: 'relative', height: 6, borderRadius: 999, background: 'rgba(255,255,255,0.07)', overflow: 'hidden' }}>
          <span style={{ position: 'absolute', inset: '0 auto 0 0', width: progressPercent + '%', background: 'var(--color-accent-primary)', display: 'block', height: '100%', transition: 'width 300ms ease' }} />
        </div>
        <button type="button" onClick={showNext} aria-label="Show next asset" title="Next" style={{ width: 58, height: 58, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.03)', color: 'var(--color-text-primary)', cursor: 'pointer', fontSize: '1.1rem' }}>→</button>
      </nav>
      <div style={{ textAlign: 'center', marginTop: 10, font: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</div>
      <style>{`@keyframes jiz-package-enter-next{from{opacity:0;transform:translateX(24px)}to{opacity:1;transform:translateX(0)}}@keyframes jiz-package-enter-previous{from{opacity:0;transform:translateX(-24px)}to{opacity:1;transform:translateX(0)}}`}</style>
    </div>
  );
}

function CaseStudyShell({ config, onBack, onOpenProject }) {
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const has = (v) => Array.isArray(v) ? v.length > 0 : Boolean(v);
  const incomplete = !has(config.summary) || !has(config.process);

  return (
    <article className="jiz-cs" data-case-study={config.slug}>
      <style>{`
        .jiz-cs{position:relative;min-height:100vh;background:var(--color-background-primary)}
        .jiz-cs-progress{position:fixed;top:0;left:0;right:0;height:2px;z-index:60;background:rgba(255,255,255,.06)}
        .jiz-cs-progress span{display:block;height:100%;background:var(--color-accent-primary);transition:width 90ms linear}
        .jiz-cs-wrap{width:min(100%,1180px);margin-inline:auto;padding:32px var(--container-pad) clamp(72px,8vw,112px);box-sizing:border-box}
        .jiz-cs-crumb{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:clamp(28px,3.4vw,44px);font:var(--text-caption);color:var(--color-text-muted)}
        .jiz-cs-back{min-height:44px;padding:0 16px;border:1px solid rgba(255,255,255,.12);border-radius:var(--radius-pill);background:rgba(255,255,255,.03);color:var(--color-text-secondary);font:var(--text-caption);cursor:pointer;transition:all 200ms var(--ease-standard)}
        .jiz-cs-back:hover{border-color:rgba(198,242,58,.4);color:var(--color-text-primary)}
        .jiz-cs-eyebrow{margin:0 0 14px;color:var(--color-accent-secondary);font:var(--text-eyebrow);letter-spacing:var(--tracking-eyebrow);text-transform:uppercase}
        .jiz-cs-title{margin:0 0 20px;max-width:18ch;color:var(--color-text-primary);font:var(--text-h1);font-size:clamp(2.2rem,4.4vw,3.6rem);line-height:1.04;letter-spacing:-.04em}
        .jiz-cs-lede{margin:0 0 clamp(30px,3.4vw,44px);max-width:64ch;color:var(--color-text-secondary);font:var(--text-body-lg);line-height:1.62}
        .jiz-cs-facts{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:14px;margin-bottom:clamp(40px,5vw,68px)}
        .jiz-cs-fact{position:relative;display:flex;flex-direction:column;gap:8px;padding:18px;border:1px solid rgba(245,247,248,.08);border-top:2px solid var(--fact-accent,var(--accent-cyan));border-radius:var(--radius-md);background:radial-gradient(circle at 88% 0%,color-mix(in srgb,var(--fact-accent,var(--accent-cyan)) 10%,transparent),transparent 60%),rgba(18,25,31,.6);box-sizing:border-box}
        .jiz-cs-fact-k{color:var(--fact-accent,var(--accent-cyan));font:var(--text-hud);font-size:.625rem;letter-spacing:.1em;text-transform:uppercase}
        .jiz-cs-fact-v{color:rgba(245,247,248,.95);font:var(--text-body);font-size:.9375rem;font-weight:550;line-height:1.42}
        .jiz-cs-section{margin-bottom:clamp(48px,6vw,88px);scroll-margin-top:120px}
        .jiz-cs-kicker{margin:0 0 10px;color:var(--color-accent-secondary);font:var(--text-hud);font-size:.625rem;letter-spacing:.14em;text-transform:uppercase}
        .jiz-cs-h2{margin:0 0 18px;max-width:22ch;color:var(--color-text-primary);font:var(--text-h2);font-size:clamp(1.6rem,2.6vw,2.3rem);line-height:1.14;letter-spacing:-.03em}
        .jiz-cs-body{margin:0 0 16px;max-width:68ch;color:var(--color-text-secondary);font:var(--text-body);line-height:1.72}
        .jiz-cs-body:last-child{margin-bottom:0}
        .jiz-cs-split{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr);gap:clamp(24px,3.4vw,52px);align-items:start}
        .jiz-cs-list{margin:0;padding:0;list-style:none;display:grid;gap:10px}
        .jiz-cs-list li{position:relative;padding-left:22px;color:var(--color-text-secondary);font:var(--text-body);font-size:.9375rem;line-height:1.62}
        .jiz-cs-list li::before{content:'';position:absolute;left:0;top:.62em;width:7px;height:1px;background:var(--color-accent-primary)}
        .jiz-cs-panel{padding:clamp(22px,2.6vw,30px);border:1px solid rgba(255,255,255,.08);border-radius:var(--radius-lg);background:linear-gradient(150deg,rgba(255,255,255,.04),rgba(255,255,255,.012))}
        .jiz-cs-panel h3{margin:0 0 14px;color:var(--color-text-primary);font:var(--text-h3);font-size:1.05rem;letter-spacing:-.01em}
        .jiz-cs-snapshot{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1px;border:1px solid rgba(255,255,255,.08);border-radius:var(--radius-lg);overflow:hidden;background:rgba(255,255,255,.06)}
        .jiz-cs-snap-cell{padding:18px 20px;background:var(--color-background-primary)}
        .jiz-cs-snap-k{display:block;margin-bottom:6px;color:var(--color-accent-secondary);font:var(--text-hud);font-size:.625rem;letter-spacing:.1em;text-transform:uppercase}
        .jiz-cs-snap-v{color:var(--color-text-primary);font:var(--text-body);font-size:.9375rem;line-height:1.5}
        .jiz-cs-roles{display:grid;gap:14px}
        .jiz-cs-role{display:grid;grid-template-columns:minmax(120px,.34fr) minmax(0,1fr);gap:16px;padding-bottom:14px;border-bottom:1px solid rgba(255,255,255,.06)}
        .jiz-cs-role:last-child{padding-bottom:0;border-bottom:0}
        .jiz-cs-role dt{color:var(--color-accent-primary);font:var(--text-hud);font-size:.625rem;letter-spacing:.1em;text-transform:uppercase;padding-top:3px}
        .jiz-cs-role dd{margin:0;color:var(--color-text-secondary);font:var(--text-body);font-size:.9375rem;line-height:1.62}
        .jiz-cs-steps{position:relative;display:grid;gap:2px;border:1px solid rgba(255,255,255,.07);border-radius:var(--radius-lg);overflow:hidden;background:rgba(255,255,255,.05)}
        .jiz-cs-step{position:relative;display:grid;grid-template-columns:auto minmax(0,1fr);gap:18px;padding:clamp(20px,2.2vw,26px);background:linear-gradient(135deg,rgba(255,255,255,.018),transparent 60%),var(--color-background-primary)}
        .jiz-cs-step::before{content:'';position:absolute;left:0;top:0;bottom:0;width:2px;background:linear-gradient(180deg,var(--color-accent-primary),transparent);opacity:.55}
        .jiz-cs-step-n{color:var(--color-accent-secondary);font-family:var(--font-mono);font-size:.75rem;font-weight:500;letter-spacing:.1em}
        .jiz-cs-step h3{margin:0 0 8px;color:var(--color-text-primary);font:var(--text-h3);font-size:1.05rem;letter-spacing:-.01em}
        .jiz-cs-step p{margin:0;max-width:62ch;color:var(--color-text-secondary);font:var(--text-body);font-size:.9375rem;line-height:1.66}
        .jiz-cs-decisions{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:clamp(14px,1.8vw,20px)}
        .jiz-cs-decision{position:relative;padding:clamp(20px,2.2vw,26px);border:1px solid rgba(255,255,255,.08);border-left:2px solid var(--color-accent-primary);border-radius:var(--radius-md);background:radial-gradient(circle at 92% 8%,rgba(198,242,58,.05),transparent 46%),rgba(255,255,255,.022);transition:border-color 220ms var(--ease-standard),transform 220ms var(--ease-standard)}
        .jiz-cs-decision:hover{transform:translateY(-2px);border-color:rgba(198,242,58,.4)}
        .jiz-cs-decision h3{margin:0 0 10px;color:var(--color-text-primary);font:var(--text-h3);font-size:1rem;letter-spacing:-.01em}
        .jiz-cs-decision p{margin:0;color:var(--color-text-secondary);font:var(--text-body);font-size:.9375rem;line-height:1.66}
        .jiz-cs-chips{display:flex;flex-wrap:wrap;gap:8px}
        .jiz-cs-chip{padding:7px 14px;border:1px solid rgba(255,255,255,.11);border-radius:var(--radius-pill);color:var(--color-text-secondary);font:var(--text-caption);font-size:.8125rem}
        .jiz-cs-outcomes{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:clamp(14px,1.8vw,20px)}
        .jiz-cs-outcome{position:relative;padding:clamp(20px,2.2vw,26px);border:1px solid rgba(100,225,255,.16);border-radius:var(--radius-md);background:radial-gradient(circle at 88% 8%,rgba(100,225,255,.09),transparent 44%),rgba(255,255,255,.02);transition:transform 220ms var(--ease-standard),border-color 220ms var(--ease-standard)}
        .jiz-cs-outcome:hover{transform:translateY(-2px);border-color:rgba(100,225,255,.32)}
        .jiz-cs-outcome-k{display:block;margin-bottom:8px;color:var(--accent-cyan);font:var(--text-hud);font-size:.625rem;letter-spacing:.1em;text-transform:uppercase}
        .jiz-cs-outcome p{margin:0;color:var(--color-text-secondary);font:var(--text-body);font-size:.9375rem;line-height:1.62}
        .jiz-cs-reflect{padding:clamp(26px,3.2vw,40px);border:1px solid rgba(198,242,58,.2);border-radius:var(--radius-lg);background:radial-gradient(circle at 12% 0%,rgba(198,242,58,.055),transparent 46%),rgba(255,255,255,.018)}
        .jiz-cs-reflect .jiz-cs-body{max-width:70ch}
        .jiz-cs-again{margin-top:22px;padding-top:22px;border-top:1px solid rgba(255,255,255,.08)}
        .jiz-cs-again h3{margin:0 0 12px;color:var(--color-text-primary);font:var(--text-h3);font-size:.9375rem;letter-spacing:-.01em}
        .jiz-cs-again ol{margin:0;padding:0;list-style:none;display:grid;gap:10px;counter-reset:again}
        .jiz-cs-again li{position:relative;counter-increment:again;padding-left:28px;color:var(--color-text-secondary);font:var(--text-body);font-size:.9375rem;line-height:1.62}
        .jiz-cs-again li::before{content:counter(again);position:absolute;left:0;top:0;color:var(--color-accent-primary);font-family:var(--font-mono);font-size:.75rem;font-weight:600}
        .jiz-cs-notice{padding:clamp(24px,3vw,36px);border:1px solid rgba(198,242,58,.22);border-radius:var(--radius-lg);background:rgba(198,242,58,.04);text-align:center}
        .jiz-cs-notice h2{margin:0 0 12px;color:var(--color-text-primary);font:var(--text-h3);font-size:clamp(1.3rem,2vw,1.6rem)}
        .jiz-cs-notice p{margin:0 auto;max-width:62ch;color:var(--color-text-secondary);font:var(--text-body);line-height:1.66}
        .jiz-cs-gallery{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(14px,1.8vw,20px)}
        .jiz-cs-gallery figure{margin:0;border:1px solid rgba(255,255,255,.08);border-radius:var(--radius-md);overflow:hidden;background:rgba(255,255,255,.02)}
        .jiz-cs-gallery img{display:block;width:100%;height:auto}
        .jiz-cs-gallery figcaption{padding:10px 14px;color:var(--color-text-muted);font:var(--text-caption);font-size:.8125rem}
        @media(max-width:720px){.jiz-cs-gallery{grid-template-columns:1fr}}
        .jiz-cs-next{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px;padding-top:clamp(32px,4vw,48px);border-top:1px solid rgba(255,255,255,.075)}
        .jiz-cs-next button{display:flex;flex-direction:column;gap:6px;min-height:76px;padding:18px 20px;border:1px solid rgba(255,255,255,.09);border-radius:var(--radius-md);background:rgba(255,255,255,.022);text-align:left;cursor:pointer;transition:all 200ms var(--ease-standard)}
        .jiz-cs-next button:hover{transform:translateY(-2px);border-color:rgba(198,242,58,.36);background:rgba(198,242,58,.035)}
        .jiz-cs-next-k{color:var(--color-text-muted);font:var(--text-hud);font-size:.5625rem;letter-spacing:.12em;text-transform:uppercase}
        .jiz-cs-next-v{color:var(--color-text-primary);font:var(--text-body);font-size:.9375rem;font-weight:600}
        .jiz-cs-back:focus-visible,.jiz-cs-next button:focus-visible{outline:2px solid var(--color-accent-primary);outline-offset:3px}
        @media(max-width:880px){.jiz-cs-split{grid-template-columns:1fr}.jiz-cs-role{grid-template-columns:1fr;gap:6px}}
        @media(max-width:560px){.jiz-cs-step{grid-template-columns:1fr;gap:10px}}
        @media(prefers-reduced-motion:reduce){.jiz-cs-progress span,.jiz-cs-next button,.jiz-cs-back,.jiz-cs-decision,.jiz-cs-outcome{transition:none}.jiz-cs-next button:hover,.jiz-cs-decision:hover,.jiz-cs-outcome:hover{transform:none}}
      `}</style>

      <div className="jiz-cs-progress" aria-hidden="true"><span style={{ width: (progress * 100) + '%' }} /></div>

      <div className="jiz-cs-wrap">
        <nav className="jiz-cs-crumb" aria-label="Case study">
          <span>Work → {config.projectName}</span>
          <button className="jiz-cs-back" type="button" onClick={onBack}>← All Featured Work</button>
        </nav>

        {/* 1 — Hero */}
        <header className="jiz-cs-section">
          <p className="jiz-cs-eyebrow">{config.eyebrow || 'Case Study'}</p>
          <h1 className="jiz-cs-title">{config.projectName}</h1>
          <p className="jiz-cs-lede">{config.statement}</p>
          <dl className="jiz-cs-facts">
            {config.facts.map((f) => (
              <div className="jiz-cs-fact" key={f.label} style={{ '--fact-accent': f.accent === 'lime' ? 'var(--color-accent-primary)' : f.accent === 'moss' ? 'var(--electric-moss)' : 'var(--accent-cyan)' }}>
                <dt className="jiz-cs-fact-k">{f.label}</dt>
                <dd className="jiz-cs-fact-v" style={{ margin: 0 }}>{f.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        {/* Project snapshot — documented facts only */}
        {has(config.snapshot) && (
          <section className="jiz-cs-section" aria-label="Project snapshot">
            <p className="jiz-cs-kicker">Project snapshot</p>
            <div className="jiz-cs-snapshot">
              {config.snapshot.map((s) => (
                <div className="jiz-cs-snap-cell" key={s.label}>
                  <span className="jiz-cs-snap-k">{s.label}</span>
                  <span className="jiz-cs-snap-v">{s.value}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Visual asset gallery + production video — unified carousel, matches Operation: Legacy Unlocked */}
        {(has(config.gallery) || has(config.videos)) && (
          <section className="jiz-cs-section" aria-labelledby={config.slug + '-gallery'}>
            <p className="jiz-cs-kicker">Portfolio package</p>
            <h2 className="jiz-cs-h2" id={config.slug + '-gallery'}>{config.galleryHeading || config.videosHeading || 'Full asset package.'}</h2>
            <PackageCarousel
              items={[
                ...(config.gallery || []).map((g) => ({ type: 'image', src: g.src, caption: g.caption || g.alt || '' })),
                ...(config.videos || []).map((v) => ({ type: 'video', src: v.src, caption: v.caption || '' })),
              ]}
            />
          </section>
        )}

        {/* 2 — Executive summary */}
        {has(config.summary) && (
          <section className="jiz-cs-section" aria-labelledby={config.slug + '-summary'}>
            <p className="jiz-cs-kicker">Executive summary</p>
            <h2 className="jiz-cs-h2" id={config.slug + '-summary'}>{config.summaryHeading || 'What this work accomplished.'}</h2>
            {config.summary.map((p, i) => <p className="jiz-cs-body" key={i}>{p}</p>)}
          </section>
        )}

        {/* 3 — Business challenge */}
        {has(config.challenge) && (
          <section className="jiz-cs-section" aria-labelledby={config.slug + '-challenge'}>
            <p className="jiz-cs-kicker">Business challenge</p>
            <h2 className="jiz-cs-h2" id={config.slug + '-challenge'}>{config.challengeHeading || 'Why this work deserved investment.'}</h2>
            <div className="jiz-cs-split">
              <div>{config.challenge.map((p, i) => <p className="jiz-cs-body" key={i}>{p}</p>)}</div>
            </div>
          </section>
        )}

        {/* 4 — Opportunity */}
        {has(config.objectives) && (
          <section className="jiz-cs-section" aria-labelledby={config.slug + '-opportunity'}>
            <p className="jiz-cs-kicker">Opportunity</p>
            <h2 className="jiz-cs-h2" id={config.slug + '-opportunity'}>{config.opportunityHeading || 'Why this was worth solving.'}</h2>
            <div className="jiz-cs-panel">
              <h3>What became possible</h3>
              <ul className="jiz-cs-list">{config.objectives.map((o) => <li key={o}>{o}</li>)}</ul>
            </div>
          </section>
        )}

        {/* 5 — My role */}
        {has(config.roles) && (
          <section className="jiz-cs-section" aria-labelledby={config.slug + '-role'}>
            <p className="jiz-cs-kicker">My role</p>
            <h2 className="jiz-cs-h2" id={config.slug + '-role'}>{config.roleHeading || 'Where I owned the outcome.'}</h2>
            <dl className="jiz-cs-roles">
              {config.roles.map((r) => (
                <div className="jiz-cs-role" key={r.area}>
                  <dt>{r.area}</dt>
                  <dd>{r.detail}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {/* 6 — Process */}
        {has(config.process) && (
          <section className="jiz-cs-section" aria-labelledby={config.slug + '-process'}>
            <p className="jiz-cs-kicker">{config.processKicker || 'Process'}</p>
            <h2 className="jiz-cs-h2" id={config.slug + '-process'}>{config.processHeading || 'How the work took shape.'}</h2>
            <div className="jiz-cs-steps">
              {config.process.map((s, i) => (
                <div className="jiz-cs-step" key={s.stage}>
                  <span className="jiz-cs-step-n">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{s.stage}</h3>
                    <p>{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6 — Strategic design decisions */}
        {has(config.decisions) && (
          <section className="jiz-cs-section" aria-labelledby={config.slug + '-decisions'}>
            <p className="jiz-cs-kicker">Strategic design decisions</p>
            <h2 className="jiz-cs-h2" id={config.slug + '-decisions'}>{config.decisionsHeading || 'The choices that shaped the outcome.'}</h2>
            <div className="jiz-cs-decisions">
              {config.decisions.map((d) => (
                <div className="jiz-cs-decision" key={d.question}>
                  <h3>{d.question}</h3>
                  <p>{d.rationale}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* AI-assisted production */}
        {has(config.aiTools) && (
          <section className="jiz-cs-section" aria-labelledby={config.slug + '-ai'}>
            <p className="jiz-cs-kicker">AI-assisted production</p>
            <h2 className="jiz-cs-h2" id={config.slug + '-ai'}>{config.aiToolsHeading || 'Where AI accelerated the work — and where it didn\'t.'}</h2>
            {config.aiToolsIntro ? <p className="jiz-cs-body" style={{ maxWidth: '68ch', marginBottom: 24 }}>{config.aiToolsIntro}</p> : null}
            <div className="jiz-cs-decisions">
              {config.aiTools.map((t) => (
                <div className="jiz-cs-decision" key={t.tool}>
                  <h3>{t.tool}</h3>
                  <p>{t.detail}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 8 — Deliverables */}
        {has(config.deliverables) && (
          <section className="jiz-cs-section" aria-labelledby={config.slug + '-deliverables'}>
            <p className="jiz-cs-kicker">Deliverables</p>
            <h2 className="jiz-cs-h2" id={config.slug + '-deliverables'}>{config.deliverablesHeading || 'What shipped.'}</h2>
            <div className="jiz-cs-chips">{config.deliverables.map((d) => <span className="jiz-cs-chip" key={d}>{d}</span>)}</div>
          </section>
        )}

        {/* 9 — Evidence available */}
        {has(config.outcomes) && (
          <section className="jiz-cs-section" aria-labelledby={config.slug + '-outcomes'}>
            <p className="jiz-cs-kicker">Evidence available</p>
            <h2 className="jiz-cs-h2" id={config.slug + '-outcomes'}>{config.outcomesHeading || 'What this work demonstrates.'}</h2>
            <div className="jiz-cs-outcomes">
              {config.outcomes.map((o) => (
                <div className="jiz-cs-outcome" key={o.label}>
                  <span className="jiz-cs-outcome-k">{o.label}</span>
                  <p>{o.detail}</p>
                </div>
              ))}
            </div>
            {config.outcomesNote ? <p className="jiz-cs-body" style={{ marginTop: 18, fontSize: '.8125rem', color: 'var(--color-text-muted)' }}>{config.outcomesNote}</p> : null}
          </section>
        )}

        {/* 10 — Reflection */}
        {has(config.reflection) && (
          <section className="jiz-cs-section" aria-labelledby={config.slug + '-reflection'}>
            <div className="jiz-cs-reflect">
              <p className="jiz-cs-kicker">Reflection</p>
              <h2 className="jiz-cs-h2" id={config.slug + '-reflection'}>{config.reflectionHeading || 'What this taught me.'}</h2>
              {config.reflection.map((p, i) => <p className="jiz-cs-body" key={i}>{p}</p>)}
              {has(config.ifAgain) && (
                <div className="jiz-cs-again">
                  <h3>If I were doing this again</h3>
                  <ol>{config.ifAgain.map((a, i) => <li key={i}>{a}</li>)}</ol>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Honest placeholder when documentation is still in progress */}
        {incomplete && (
          <section className="jiz-cs-section">
            <div className="jiz-cs-notice">
              <h2>Documentation in progress</h2>
              <p>This case study is currently being expanded with additional process documentation, visuals, and project outcomes.</p>
            </div>
          </section>
        )}

        {/* 11 — Related projects */}
        {has(config.related) && (
          <nav className="jiz-cs-next" aria-label="Related projects">
            {config.related.map((r) => (
              <button type="button" key={r.route} onClick={() => onOpenProject && onOpenProject(r.route)}>
                <span className="jiz-cs-next-k">{r.direction}</span>
                <span className="jiz-cs-next-v">{r.title}</span>
              </button>
            ))}
            <button type="button" onClick={onBack}>
              <span className="jiz-cs-next-k">Index</span>
              <span className="jiz-cs-next-v">Back to Featured Work</span>
            </button>
          </nav>
        )}
      </div>
    </article>
  );
}
window.CaseStudyShellExports = { CaseStudyShell };
