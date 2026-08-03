function Section({ children, style }) {
  return <section style={{ paddingTop: 'clamp(56px, 6vw, 100px)', paddingBottom: 'clamp(56px, 6vw, 100px)', paddingLeft: 'var(--container-pad)', paddingRight: 'var(--container-pad)', maxWidth: 'var(--container-max)', margin: '0 auto', ...style }}>{children}</section>;
}
function Eyebrow({ children, color = 'var(--color-accent-secondary)' }) {
  return <div style={{ font: 'var(--text-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color, marginBottom: 12 }}>{children}</div>;
}
const prefersReduced = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (typeof document !== 'undefined' && !document.getElementById('jiz-reveal-highlight-kf')) {
  const s = document.createElement('style');
  s.id = 'jiz-reveal-highlight-kf';
  s.textContent = '@keyframes jiz-reveal-highlight{0%{box-shadow:0 0 0 0 rgba(198,242,58,0)}25%{box-shadow:0 0 28px 4px rgba(198,242,58,.35)}100%{box-shadow:0 0 0 0 rgba(198,242,58,0)}}';
  document.head.appendChild(s);
}
function VideoLightbox({ src, open, onClose }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(8,10,12,0.86)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5vh 5vw' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', width: 'min(1100px, 88vw)', aspectRatio: '16/9', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '2px solid var(--color-accent-primary)', boxShadow: '0 0 0 1px rgba(198,242,58,0.25), 0 0 60px rgba(198,242,58,0.35), 0 30px 80px rgba(0,0,0,0.6)' }}>
        <video src={src} controls autoPlay playsInline style={{ width: '100%', height: '100%', display: 'block', background: '#000' }} />
      </div>
      <button onClick={onClose} aria-label="Close video" style={{ position: 'absolute', top: 24, right: 24, width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--color-border-default)', background: 'rgba(0,0,0,0.5)', color: 'var(--color-text-primary)', fontSize: 20, cursor: 'pointer' }}>✕</button>
    </div>
  );
}
function TrainStoryVideo() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <div onClick={() => setOpen(true)} style={{ aspectRatio: '16/9', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '2px solid var(--color-accent-primary)', boxShadow: 'var(--glow-lime)', position: 'relative', cursor: 'pointer' }}>
        <video playsInline preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', pointerEvents: 'none' }}><source src="./assets/video/the-train-story.mp4" type="video/mp4" /></video>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(8,10,12,0.55)', border: '1px solid var(--color-accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--color-accent-primary)"><path d="M8 5v14l11-7z" /></svg>
          </div>
        </div>
      </div>
      <VideoLightbox src="./assets/video/the-train-story.mp4" open={open} onClose={() => setOpen(false)} />
    </React.Fragment>
  );
}

function ChromaKeyVideo({ src, className, style }) {
  const videoRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    const video = videoRef.current, canvas = canvasRef.current;
    if (!video || !canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    let raf, isVisible = true;
    const io = new IntersectionObserver((entries) => { isVisible = entries[0].isIntersecting; }, { threshold: 0.01 });
    io.observe(canvas);
    const draw = () => {
      raf = requestAnimationFrame(draw);
      if (!isVisible || video.paused || video.ended || !video.videoWidth) return;
      if (canvas.width !== video.videoWidth) { canvas.width = video.videoWidth; canvas.height = video.videoHeight; }
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const d = frame.data;
      for (let i = 0; i < d.length; i += 4) {
        const r = d[i], g = d[i + 1], b = d[i + 2];
        if (g > 60 && g > r * 1.06 && g > b * 1.06) {
          const excess = g - Math.max(r, b);
          d[i + 3] = Math.max(0, 255 - excess * 10);
          d[i + 1] = Math.min(g, Math.max(r, b) + excess * 0.15);
          d[i + 0] = Math.min(255, r + excess * 0.12);
          d[i + 2] = Math.min(255, b + excess * 0.12);
        }
      }
      ctx.putImageData(frame, 0, 0);
    };
    const enforceMute = () => { video.muted = true; video.defaultMuted = true; video.volume = 0; };
    enforceMute();
    video.setAttribute('muted', '');
    const onLoaded = () => { enforceMute(); video.play().catch(() => {}); };
    video.addEventListener('loadeddata', onLoaded);
    video.addEventListener('play', enforceMute);
    video.addEventListener('volumechange', enforceMute);
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf); io.disconnect();
      video.removeEventListener('loadeddata', onLoaded);
      video.removeEventListener('play', enforceMute);
      video.removeEventListener('volumechange', enforceMute);
    };
  }, []);
  return (
    <React.Fragment>
      <video ref={videoRef} src={src} autoPlay loop muted playsInline style={{ display: 'none' }} />
      <canvas ref={canvasRef} className={className} style={style} />
    </React.Fragment>
  );
}

function Reveal({ children, style, delay = 0, highlight = false }) {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (prefersReduced()) { setVisible(true); return; }
    const t = setTimeout(() => setVisible(true), delay + 30);
    return () => clearTimeout(t);
  }, []);
  return (
    <div style={{
      opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)',
      transition: `opacity var(--motion-slow) var(--ease-out), transform var(--motion-slow) var(--ease-out)`,
      ...(highlight ? { borderRadius: 'var(--radius-lg)', boxShadow: visible ? '0 0 0 0 rgba(198,242,58,0)' : 'none', animation: visible && !prefersReduced() ? 'jiz-reveal-highlight 1.1s ease-out' : 'none' } : {}),
      ...style,
    }}>{children}</div>
  );
}

function TiltCard({ children }) {
  const ref = React.useRef(null);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const onMove = (e) => {
    if (prefersReduced() || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setTilt({ x: ((e.clientY - r.top) / r.height - 0.5) * -5, y: ((e.clientX - r.left) / r.width - 0.5) * 5 });
  };
  return <div ref={ref} onMouseMove={onMove} onMouseLeave={() => setTilt({ x: 0, y: 0 })} style={{ transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, transition: 'transform var(--motion-fast) var(--ease-standard)' }}>{children}</div>;
}

function DataFlowVisual() {
  return (
    <svg viewBox="0 0 300 160" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <defs><linearGradient id="jz-flow" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="var(--signal-lime)"/><stop offset="100%" stopColor="var(--accent-cyan)"/></linearGradient></defs>
      <path d="M10 130 C 80 30, 150 150, 290 40" fill="none" stroke="url(#jz-flow)" strokeWidth="1.5" opacity="0.8"/>
      {[[10,130],[70,90],[140,120],[200,55],[290,40]].map((p,i) => <circle key={i} cx={p[0]} cy={p[1]} r="3" fill="var(--signal-lime)" opacity="0.9"/>)}
    </svg>
  );
}

function NetworkField({ pointerRef }) {
  return null;
}

function AmbientField() {
  return null;
}

function ParticleField() {
  return null;
}

function ForegroundHaze() {
  return null;
}

function PersistentEnvironment() {
  const [prog, setProg] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProg(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const blueOpacity = 0.22 - prog * 0.12;
  const limeOpacity = 0.05 + prog * 0.16;
  return null;
}

function Hero({ onExploreWork, onConnect }) {
  const { Button, StatusPill } = window.JIZPortfolioSite_b3ba38;
  const [glassesFlash, setGlassesFlash] = React.useState(false);
  React.useEffect(() => {
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const onSignal = () => { if (reduced) return; setGlassesFlash(true); setTimeout(() => setGlassesFlash(false), 650); };
    window.addEventListener('jiz-signal', onSignal);
    return () => window.removeEventListener('jiz-signal', onSignal);
  }, []);
  return (
    <section className="hero">
      <div className="hero-environment" aria-hidden="true">
        <div className="hero-base-gradient" />
        <video autoPlay loop muted playsInline volume={0} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.9)', opacity: 0.28, mixBlendMode: 'screen' }} ref={el => { if (el) { el.muted = true; el.volume = 0; } }} onLoadedData={e => { e.target.muted = true; e.target.volume = 0; }}>
          <source src="./assets/video/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero-signal-field" />
        <div className="hero-ambient-glow hero-ambient-glow--blue" />
        <div className="hero-ambient-glow hero-ambient-glow--chartreuse" />
      </div>

      <div className="hero-content">
        <div className="hero-copy">
          <Eyebrow>Strategist. Designer. Systems thinker.</Eyebrow>
          <h1 className="hero-title">Learning, <span style={{ color: 'var(--color-accent-primary)' }}>directed.</span></h1>
          <p className="hero-description">I turn complexity into experiences people understand.</p>
          <p className="hero-manifesto">Understanding is the product.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start', marginTop: 44, marginBottom: 18 }}>
            <Button variant="primary" onClick={onExploreWork} style={{ padding: '15px 28px', fontSize: '1rem' }}>Explore featured work</Button>
            <StatusPill label="Open to select opportunities" onClick={onConnect} />
          </div>
        </div>
      </div>

      <div className="hero-portrait-stage">
        <ChromaKeyVideo src="./assets/video/hero-portrait-green.mp4?v=4" className="hero-portrait" style={{ WebkitMaskImage: 'linear-gradient(to bottom,#000 62%,rgba(0,0,0,.9) 80%,transparent 98%),linear-gradient(to right,transparent 0%,#000 30%),linear-gradient(to left,transparent 0%,#000 20%),radial-gradient(ellipse 55% 45% at 8% 100%,transparent 0%,transparent 20%,#000 75%)', WebkitMaskComposite: 'source-in,source-in,source-in', maskImage: 'linear-gradient(to bottom,#000 62%,rgba(0,0,0,.9) 80%,transparent 98%),linear-gradient(to right,transparent 0%,#000 30%),linear-gradient(to left,transparent 0%,#000 20%),radial-gradient(ellipse 55% 45% at 8% 100%,transparent 0%,transparent 20%,#000 75%)', maskComposite: 'intersect' }} />
        <div aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '30%', background: 'linear-gradient(to top, rgba(198,242,58,0.42), rgba(198,242,58,0.12) 60%, transparent)', mixBlendMode: 'screen', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', right: '18%', top: '22%', width: '20%', height: '10%', background: 'radial-gradient(ellipse, rgba(198,242,58,0.9), transparent 70%)', mixBlendMode: 'screen', opacity: glassesFlash ? 0.85 : 0, transition: glassesFlash ? 'opacity 0.12s ease-out' : 'opacity 0.5s ease-in', pointerEvents: 'none' }} />
      </div>
      <div className="hero-foreground-atmosphere" aria-hidden="true" />

      <style>{`
.hero{position:relative;isolation:isolate;overflow:hidden;width:100%;min-height:calc(100svh - 96px);background:radial-gradient(ellipse at 74% 42%,rgba(22,113,163,.16) 0%,rgba(20,74,91,.09) 30%,transparent 64%),radial-gradient(ellipse at 40% 54%,rgba(180,226,63,.055) 0%,transparent 52%)}
.hero-environment{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;background:transparent}
.hero-base-gradient{position:absolute;inset:0;background:linear-gradient(90deg,rgba(8,13,11,.96) 0%,rgba(10,18,15,.9) 42%,rgba(13,30,28,.84) 72%,rgba(8,18,17,.92) 100%)}
.hero-signal-field{position:absolute;inset:-8%;opacity:.42;background-image:radial-gradient(circle at 18% 48%,rgba(115,224,255,.09) 0 1px,transparent 2px),radial-gradient(circle at 42% 64%,rgba(197,255,45,.06) 0 1px,transparent 2px),radial-gradient(circle at 78% 38%,rgba(115,224,255,.1) 0 1px,transparent 2px);background-size:160px 140px,220px 180px,190px 170px}
.hero-ambient-glow{position:absolute;pointer-events:none;border-radius:50%;filter:blur(90px)}
.hero-ambient-glow--blue{width:min(72vw,1200px);height:min(72vw,1200px);right:-18vw;top:-16%;background:radial-gradient(circle,rgba(29,132,196,.2) 0%,rgba(24,91,126,.1) 38%,transparent 72%)}
.hero-ambient-glow--chartreuse{width:min(46vw,760px);height:min(38vw,640px);left:12%;bottom:-26%;background:radial-gradient(circle,rgba(197,255,45,.028) 0%,transparent 68%)}
.hero-content{position:relative;z-index:5;display:grid;align-items:center;width:min(1440px,calc(100% - 2*clamp(28px,6vw,112px)));min-height:calc(100svh - 96px);margin-inline:auto;padding-block:clamp(64px,7vw,104px)}
.hero-copy{width:min(38vw,560px);margin-left:clamp(0px,1vw,20px)}
.hero-eyebrow{margin-bottom:26px}
.hero-title{font:var(--text-display);font-size:clamp(3.4rem,2.2rem + 4.2vw,6.6rem);line-height:.92;color:var(--color-text-primary);margin:0 0 40px}
.hero-description{font:var(--text-body-lg);font-size:clamp(1.5rem,1.3rem + .5vw,2rem);line-height:1.42;color:var(--color-text-secondary);max-width:480px;margin:0 0 30px}
.hero-manifesto{font:var(--text-body);font-size:1.5rem;font-weight:300;font-style:italic;color:rgba(247,248,250,0.85);max-width:440px;margin:0;border-left:2px solid rgba(255,255,255,0.25);padding-left:16px}
.hero-portrait-stage{position:absolute;inset:0;z-index:3;overflow:visible;pointer-events:none;background:transparent;border:0;box-shadow:none}
.hero-portrait{position:absolute;z-index:2;right:clamp(50px,7vw,140px);bottom:-7%;width:clamp(520px,44vw,840px);height:114%;max-width:none;max-height:114%;object-fit:contain;object-position:right bottom;transform:translate3d(0,0,0);transform-origin:right bottom;pointer-events:auto;cursor:pointer;opacity:.92;filter:drop-shadow(-30px 6px 52px rgba(27,128,194,.2)) drop-shadow(-10px 0 30px rgba(49,165,223,.12));-webkit-mask-image:linear-gradient(to bottom,#000 46%,rgba(0,0,0,.85) 66%,transparent 96%),linear-gradient(to right,transparent 0%,#000 26%),linear-gradient(to left,transparent 0%,#000 14%),linear-gradient(to top,transparent 0%,#000 8%);-webkit-mask-composite:source-in,source-in,source-in;mask-image:linear-gradient(to bottom,#000 46%,rgba(0,0,0,.85) 66%,transparent 96%),linear-gradient(to right,transparent 0%,#000 26%),linear-gradient(to left,transparent 0%,#000 14%),linear-gradient(to top,transparent 0%,#000 8%);mask-composite:intersect}
.hero-portrait-backlight{position:absolute;right:-8vw;top:8%;width:min(68vw,1120px);height:min(72vw,1180px);border-radius:50%;background:radial-gradient(ellipse at 56% 46%,rgba(48,169,236,.23) 0%,rgba(26,111,162,.14) 26%,rgba(19,72,99,.07) 48%,transparent 74%);filter:blur(48px);opacity:.9}
.hero-portrait-edge-glow{position:absolute;inset:0;z-index:3;pointer-events:none;background:radial-gradient(ellipse at 74% 48%,rgba(47,166,227,.11) 0%,rgba(31,110,159,.06) 30%,transparent 62%);mix-blend-mode:screen;filter:blur(14px)}
.hero-portrait-haze{position:absolute;z-index:4;right:-2%;bottom:-3%;width:66%;height:58%;pointer-events:none;background:radial-gradient(ellipse at 68% 58%,rgba(54,160,204,.1) 0%,rgba(26,92,109,.06) 34%,transparent 70%),linear-gradient(90deg,transparent 10%,rgba(17,78,94,.04) 48%,transparent 92%);filter:blur(20px);mix-blend-mode:screen}
.hero-foreground-atmosphere{position:absolute;inset:0;z-index:4;pointer-events:none;background:radial-gradient(ellipse at 70% 66%,rgba(52,154,198,.075) 0%,transparent 44%),linear-gradient(90deg,transparent 34%,rgba(18,72,83,.03) 56%,transparent 88%);mix-blend-mode:screen}
@media(max-width:1180px){.hero-copy{width:min(52vw,620px);margin-left:clamp(24px,4vw,64px)}.hero-title{font-size:clamp(2.6rem,5vw,4rem)}.hero-portrait{right:-100px;width:clamp(520px,54vw,780px)}}
@media(max-width:900px){.hero{min-height:auto}.hero-content{min-height:auto;padding-top:92px;padding-bottom:520px}.hero-copy{width:min(100%,620px);margin-left:0}.hero-portrait{right:50%;bottom:-8px;width:min(640px,94vw);transform:translateX(50%)}.hero-portrait-backlight{right:50%;top:auto;bottom:-12%;width:100vw;height:640px;transform:translateX(50%)}.hero-portrait-haze{right:0;width:100%}}
@media(max-width:768px){.hero{min-height:auto}.hero-content{min-height:auto;padding-top:48px;padding-bottom:480px;grid-template-columns:1fr}.hero-copy{width:100%;margin-left:0;margin-right:0;position:relative;z-index:6}.hero-eyebrow{margin-bottom:18px}.hero-title{font-size:clamp(2rem,5vw,3.2rem);margin:0 0 24px}.hero-description{font-size:clamp(1rem,3.5vw,1.375rem);margin:0 0 18px;max-width:100%}.hero-manifesto{font-size:1rem;max-width:100%;margin:0 0 24px}.hero-portrait-stage{z-index:2}.hero-portrait{position:absolute;right:50%;bottom:auto;top:480px;width:min(420px,85vw);height:auto;max-height:none;transform:translateX(50%);opacity:.9;filter:drop-shadow(-20px 4px 36px rgba(27,128,194,.18));mask-image:linear-gradient(to top,#000 0%,#000 70%,rgba(0,0,0,.8) 85%,transparent 100%),linear-gradient(to right,transparent 5%,#000 20%),linear-gradient(to left,transparent 5%,#000 15%);mask-composite:intersect}.hero-portrait-backlight{right:50%;top:480px;bottom:auto;width:120vw;height:420px;transform:translateX(50%);opacity:.5;filter:blur(40px)}.hero-portrait-haze{display:none}.hero-foreground-atmosphere{opacity:.3}}
@media(max-width:600px){.hero-content{padding-top:40px;padding-bottom:400px}.hero-title{font-size:clamp(1.75rem,4vw,2.8rem);margin:0 0 20px}.hero-description{font-size:clamp(.9375rem,3vw,1.1875rem);margin:0 0 16px}.hero-manifesto{font-size:.9375rem;margin:0 0 20px}.hero-eyebrow{margin-bottom:14px}.hero-portrait{top:400px;width:min(340px,80vw)}.hero-portrait-backlight{top:400px;height:340px}}
@media(prefers-reduced-motion:reduce){.hero-portrait{transform:none;transition:none}}
      `}</style>
    </section>
  );
}

function ProjectCard({ index, title, category, description, image, insight, stage, featured, active, onActivate, dimmed, onOpenCaseStudy }) {
  const [hover, setHover] = React.useState(false);
  const stages = ['Discovery', 'Strategy', 'Design', 'Production', 'Impact'];
  const handleClick = () => {
    if (index === 0) onOpenCaseStudy && onOpenCaseStudy();
  };
  return (
    <div
      onClick={() => { onActivate(); if (index === 0) handleClick(); }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        cursor: 'pointer', position: 'relative', minWidth: 0,
        background: 'rgba(23,26,31,0.4)', backdropFilter: 'blur(14px)',
        border: active ? '1px solid rgba(198,242,58,0.5)' : '1px solid var(--color-border-subtle)',
        borderRadius: 'var(--radius-lg)', overflow: 'hidden',
        transition: 'all var(--motion-standard) var(--ease-standard)',
        transform: hover ? 'translateY(-4px)' : 'none',
        boxShadow: active ? 'var(--shadow-elevated), 0 0 28px rgba(198,242,58,0.18)' : hover ? 'var(--shadow-elevated)' : 'var(--shadow-subtle)',
        opacity: dimmed ? 0.55 : 1,
        gridColumn: featured ? 'span 2' : 'span 1',
        gridRow: featured ? 'span 2' : 'span 1',
      }}
    >
      <div style={{ aspectRatio: featured ? '16/10' : '4/3', position: 'relative', overflow: 'hidden' }}>
        <image-slot id={`work-${index}`} src={image} shape="rect" placeholder={`Drop preview for ${title}`} style={{ width: '100%', height: '100%' }}></image-slot>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: hover ? 'linear-gradient(115deg, transparent 30%, rgba(198,242,58,0.1) 50%, transparent 70%)' : 'transparent', transition: 'background var(--motion-standard) var(--ease-standard)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 -40px 50px -20px rgba(11,13,16,0.7)', pointerEvents: 'none' }} />
      </div>
      <div style={{ padding: featured ? 26 : 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ font: 'var(--text-eyebrow)', fontSize: '0.6875rem', color: 'var(--color-accent-secondary)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-eyebrow)' }}>{category}</span>
        <span style={{ font: 'var(--text-h3)', fontSize: featured ? '1.5rem' : '1.125rem', color: 'var(--color-text-primary)' }}>{title}</span>
        <span style={{ font: 'var(--text-caption)', color: 'var(--color-text-secondary)' }}>{description}</span>
        <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
          {stages.map(s => (
            <span key={s} style={{ font: 'var(--text-hud)', fontSize: '0.625rem', padding: '3px 8px', borderRadius: 'var(--radius-pill)', border: '1px solid ' + (s === stage ? 'var(--color-accent-primary)' : 'var(--color-border-default)'), color: s === stage ? 'var(--color-accent-primary)' : 'var(--color-text-muted)' }}>{s}</span>
          ))}
        </div>
        {active && insight && (
          <div style={{ marginTop: 10, borderLeft: '2px solid var(--color-accent-primary)', paddingLeft: 12, animation: 'jiz-stage-in 0.4s var(--ease-out) both' }}>
            <span style={{ font: 'var(--text-hud)', fontSize: '0.625rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-hud)' }}>Director's commentary</span>
            <p style={{ font: 'var(--text-body)', fontSize: '0.9375rem', color: 'var(--color-text-primary)', fontStyle: 'italic', marginTop: 4 }}>{insight}</p>
          </div>
        )}
        <span style={{ font: 'var(--text-caption)', color: 'var(--color-accent-primary)', marginTop: 4 }}>View project →</span>
      </div>
    </div>
  );
}

function FilmSection() {
  const VIDEO_URL =
    './assets/video/the-train-story.mp4';

  const videoRef = React.useRef(null);
  const progressRef = React.useRef(null);

  const [videoReady, setVideoReady] =
    React.useState(false);
  const [videoPlaying, setVideoPlaying] =
    React.useState(false);
  const [videoMuted, setVideoMuted] =
    React.useState(true);
  const [videoError, setVideoError] =
    React.useState(false);
  const [currentTime, setCurrentTime] =
    React.useState(0);
  const [duration, setDuration] =
    React.useState(0);
  const [reducedMotion, setReducedMotion] =
    React.useState(false);
  const [loadTimeout, setLoadTimeout] =
    React.useState(false);

  React.useEffect(function () {
    if (
      typeof window === 'undefined' ||
      typeof window.matchMedia !== 'function'
    ) {
      return undefined;
    }

    const media = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    const updateReducedMotion = function () {
      setReducedMotion(media.matches);
    };

    updateReducedMotion();

    if (typeof media.addEventListener === 'function') {
      media.addEventListener(
        'change',
        updateReducedMotion
      );

      return function () {
        media.removeEventListener(
          'change',
          updateReducedMotion
        );
      };
    }

    if (typeof media.addListener === 'function') {
      media.addListener(updateReducedMotion);

      return function () {
        media.removeListener(updateReducedMotion);
      };
    }

    return undefined;
  }, []);

  React.useEffect(function () {
    if (!videoReady && !videoError && !loadTimeout) {
      const timer = setTimeout(function () {
        setLoadTimeout(true);
      }, 8000);

      return function () {
        clearTimeout(timer);
      };
    }
  }, [videoReady, videoError, loadTimeout]);

  const togglePlayback = async function () {
    const video = videoRef.current;

    if (!video || !videoReady || videoError) {
      return;
    }

    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch (error) {
      setVideoPlaying(false);
    }
  };

  const restartVideo = async function () {
    const video = videoRef.current;

    if (!video || !videoReady || videoError) {
      return;
    }

    video.currentTime = 0;
    setCurrentTime(0);

    try {
      await video.play();
    } catch (error) {
      setVideoPlaying(false);
    }
  };

  const toggleMute = function () {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setVideoMuted(nextMuted);
  };

  const handleProgressChange = function (event) {
    const video = videoRef.current;

    if (!video || !duration) {
      return;
    }

    const nextTime =
      (Number(event.target.value) / 100) * duration;

    video.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const formatTime = function (value) {
    if (
      !Number.isFinite(value) ||
      value < 0
    ) {
      return '0:00';
    }

    const minutes = Math.floor(value / 60);
    const seconds = Math.floor(value % 60);

    return (
      String(minutes) +
      ':' +
      String(seconds).padStart(2, '0')
    );
  };

  const progressValue =
    duration > 0
      ? Math.min(
          100,
          Math.max(0, (currentTime / duration) * 100)
        )
      : 0;

  return (
    <section
      className="jiz-creative-lab"
      data-creative-lab="ready"
      aria-labelledby="creative-lab-title"
    >
      <style>{`
        .jiz-creative-lab {
          position: relative;
          isolation: isolate;
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding:
            clamp(96px, 10vw, 160px)
            var(--container-pad)
            clamp(104px, 11vw, 172px);
          color: var(--color-text-primary);
          background:
            radial-gradient(
              ellipse at 16% 20%,
              rgba(198, 242, 58, 0.075),
              transparent 38%
            ),
            radial-gradient(
              ellipse at 84% 68%,
              rgba(100, 225, 255, 0.11),
              transparent 44%
            ),
            linear-gradient(
              180deg,
              #16201f 0%,
              #1c2627 26%,
              #202b2c 52%,
              #1c2527 78%,
              #171f21 100%
            );
        }

        .jiz-creative-lab::before {
          content: '';
          position: absolute;
          z-index: -2;
          inset: 0;
          pointer-events: none;
          opacity: 0.2;
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            );
          background-size: 76px 76px;
          -webkit-mask-image:
            radial-gradient(
              ellipse at 50% 44%,
              #000,
              transparent 74%
            );
          mask-image:
            radial-gradient(
              ellipse at 50% 44%,
              #000,
              transparent 74%
            );
        }

        .jiz-creative-lab::after {
          content: '';
          position: absolute;
          z-index: -1;
          left: 50%;
          top: 46%;
          width: min(112vw, 1760px);
          height: 1080px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          pointer-events: none;
          background:
            radial-gradient(
              ellipse,
              rgba(100, 225, 255, 0.085),
              rgba(198, 242, 58, 0.03) 40%,
              transparent 72%
            );
          filter: blur(88px);
          opacity: 0.9;
        }

        .jiz-creative-lab-inner {
          position: relative;
          z-index: 1;
          width: min(100%, 1360px);
          margin-inline: auto;
        }

        .jiz-creative-lab-header {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            minmax(320px, 0.78fr);
          align-items: start;
          column-gap:
            clamp(36px, 7vw, 92px);
          row-gap:
            clamp(28px, 3.4vw, 44px);
          margin-bottom:
            clamp(40px, 5vw, 64px);
        }

        .jiz-creative-lab-heading {
          grid-column: 1;
          max-width: 640px;
        }

        .jiz-creative-lab-eyebrow {
          grid-column: 1 / -1;
          margin: 0;
          color: var(--color-accent-primary);
          font: var(--text-eyebrow);
          letter-spacing: var(--tracking-eyebrow);
          text-transform: uppercase;
        }

        .jiz-creative-lab-title {
          grid-column: 1 / -1;
          margin: clamp(14px, 1.6vw, 20px) 0 0;
          max-width: 20ch;
          color: var(--color-text-primary);
          font: var(--text-h2);
          font-size:
            clamp(3rem, 6vw, 5.9rem);
          line-height: 0.98;
          letter-spacing: -0.055em;
          text-wrap: balance;
        }

        .jiz-creative-lab-subtitle {
          margin: 0;
          max-width: 640px;
          color: var(--color-text-secondary);
          font: var(--text-body-lg);
          line-height: 1.66;
        }

        .jiz-creative-lab-intro {
          grid-column: 2;
          margin: 0;
          padding: 4px 0 4px clamp(20px, 2.2vw, 28px);
          border: 0;
          border-left: 1px solid rgba(100, 225, 255, 0.22);
          border-radius: 0;
          background: transparent;
          color: var(--color-text-secondary);
          font: var(--text-body);
          line-height: 1.7;
        }

        .jiz-creative-lab-method {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 1px;
          margin: 0 0 clamp(30px, 3.6vw, 46px);
          padding: 0;
          overflow: hidden;
          list-style: none;
          border: 1px solid rgba(255, 255, 255, 0.055);
          border-radius: clamp(18px, 2vw, 24px);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .jiz-creative-lab-method-step {
          display: flex;
          flex-direction: column;
          gap: 7px;
          padding: clamp(18px, 2vw, 24px) clamp(14px, 1.5vw, 20px);
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.032) 0%,
              rgba(22, 30, 30, 0.42) 40%,
              rgba(18, 25, 26, 0.5) 100%
            );
        }

        .jiz-creative-lab-method-index {
          color: var(--color-accent-secondary);
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 500;
          letter-spacing: 0.1em;
        }

        .jiz-creative-lab-method-name {
          color: rgba(245, 247, 248, 0.94);
          font: var(--text-body);
          font-size: 0.9375rem;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .jiz-creative-lab-method-note {
          color: rgba(245, 247, 248, 0.7);
          font: var(--text-caption);
          font-size: 0.75rem;
          line-height: 1.46;
        }

        .jiz-creative-lab-entry {
          display: grid;
          gap: 14px;
          margin: clamp(24px, 2.8vw, 34px) 0 0;
        }

        .jiz-creative-lab-entry-row {
          display: grid;
          grid-template-columns: minmax(88px, 0.24fr) minmax(0, 1fr);
          gap: 16px;
          padding-bottom: 13px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .jiz-creative-lab-entry-row:last-child {
          padding-bottom: 0;
          border-bottom: 0;
        }

        .jiz-creative-lab-entry dt {
          padding-top: 2px;
          color: var(--color-accent-secondary);
          font: var(--text-hud);
          font-size: 0.625rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .jiz-creative-lab-entry dd {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: 0.9375rem;
          line-height: 1.66;
        }

        .jiz-creative-lab-stage {
          position: relative;
          padding:
            clamp(14px, 2vw, 24px);
          border:
            1px solid rgba(255, 255, 255, 0.09);
          border-radius:
            clamp(26px, 3vw, 40px);
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.075) 0%,
              rgba(255, 255, 255, 0.03) 18%,
              rgba(255, 255, 255, 0.012) 100%
            );
          box-shadow:
            0 84px 190px rgba(0, 0, 0, 0.46),
            0 10px 42px rgba(0, 0, 0, 0.24),
            inset 0 1px 0 rgba(255, 255, 255, 0.09);
          backdrop-filter: blur(22px);
        }

        .jiz-creative-lab-stage::before {
          content: '';
          position: absolute;
          z-index: -1;
          inset: 6% 4% -34%;
          border-radius: 50%;
          pointer-events: none;
          background:
            radial-gradient(
              ellipse,
              rgba(100, 225, 255, 0.19),
              rgba(198, 242, 58, 0.05) 40%,
              transparent 70%
            );
          filter: blur(76px);
          opacity: 0.86;
        }

        .jiz-creative-lab-video-frame {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border:
            1px solid rgba(255, 255, 255, 0.085);
          border-radius:
            clamp(20px, 2.2vw, 32px);
          background: #070b0d;
          box-shadow:
            0 46px 120px rgba(0, 0, 0, 0.52),
            0 0 0 1px rgba(255, 255, 255, 0.05),
            0 0 110px rgba(100, 225, 255, 0.1),
            0 26px 70px rgba(198, 242, 58, 0.045);
        }

        .jiz-creative-lab-video-frame::after {
          content: '';
          position: absolute;
          z-index: 2;
          inset: 0;
          pointer-events: none;
          border-radius: inherit;
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.085) 0%,
              rgba(255, 255, 255, 0.018) 5%,
              transparent 14%
            );
        }

        .jiz-creative-lab-video {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          background: #070b0d;
        }

        .jiz-creative-lab-loading,
        .jiz-creative-lab-error {
          position: absolute;
          z-index: 3;
          inset: 0;
          display: grid;
          place-items: center;
          padding: 32px;
          background:
            radial-gradient(
              circle at center,
              rgba(20, 34, 37, 0.92),
              rgba(7, 11, 13, 0.98)
            );
          color: var(--color-text-secondary);
          text-align: center;
          font: var(--text-body);
        }

        .jiz-creative-lab-loader {
          display: grid;
          justify-items: center;
          gap: 16px;
        }

        .jiz-creative-lab-loader::before {
          content: '';
          width: 36px;
          height: 36px;
          border:
            2px solid rgba(100, 225, 255, 0.18);
          border-top-color:
            var(--color-accent-secondary);
          border-radius: 50%;
          animation:
            jiz-creative-lab-spin
            900ms linear infinite;
        }

        .jiz-creative-lab-controls {
          display: grid;
          grid-template-columns:
            auto auto auto
            minmax(120px, 1fr)
            auto;
          align-items: center;
          gap: 12px;
          margin-top: 16px;
          padding:
            14px clamp(14px, 2vw, 20px);
          border:
            1px solid rgba(255, 255, 255, 0.075);
          border-radius:
            clamp(16px, 2vw, 22px);
          background:
            rgba(8, 13, 15, 0.56);
          backdrop-filter: blur(16px);
        }

        .jiz-creative-lab-control {
          min-width: 44px;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 15px;
          border:
            1px solid rgba(255, 255, 255, 0.11);
          border-radius: var(--radius-pill);
          background:
            rgba(255, 255, 255, 0.03);
          color: var(--color-text-primary);
          font: var(--text-caption);
          cursor: pointer;
          transition:
            transform var(--motion-fast)
              var(--ease-standard),
            border-color var(--motion-fast)
              var(--ease-standard),
            background var(--motion-fast)
              var(--ease-standard),
            box-shadow var(--motion-fast)
              var(--ease-standard);
        }

        .jiz-creative-lab-control:hover:not(:disabled) {
          transform: translateY(-1px);
          border-color:
            rgba(198, 242, 58, 0.44);
          background:
            rgba(198, 242, 58, 0.055);
          box-shadow:
            0 0 22px rgba(198, 242, 58, 0.1);
        }

        .jiz-creative-lab-control:disabled {
          opacity: 0.42;
          cursor: default;
        }

        .jiz-creative-lab-control:focus-visible,
        .jiz-creative-lab-progress:focus-visible {
          outline:
            2px solid var(--color-accent-primary);
          outline-offset: 3px;
        }

        .jiz-creative-lab-progress {
          width: 100%;
          height: 6px;
          margin: 0;
          border-radius: 999px;
          cursor: pointer;
          accent-color:
            var(--color-accent-primary);
        }

        .jiz-creative-lab-time {
          min-width: 86px;
          color: var(--color-text-muted);
          font: var(--text-hud);
          text-align: right;
          letter-spacing: 0.06em;
        }

        .jiz-creative-lab-caption {
          display: grid;
          grid-template-columns:
            minmax(0, 0.72fr)
            minmax(320px, 1.28fr);
          gap:
            clamp(30px, 6vw, 78px);
          align-items: start;
          margin-top:
            clamp(20px, 2.4vw, 30px);
          padding:
            clamp(34px, 5vw, 62px);
          border:
            1px solid rgba(255, 255, 255, 0.055);
          border-top-color: rgba(255, 255, 255, 0.075);
          border-radius:
            clamp(26px, 3vw, 40px);
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.042) 0%,
              rgba(255, 255, 255, 0.016) 46%,
              rgba(255, 255, 255, 0.008) 100%
            );
          box-shadow:
            0 44px 110px rgba(0, 0, 0, 0.24),
            inset 0 1px 0 rgba(255, 255, 255, 0.055);
          backdrop-filter: blur(18px);
        }

        .jiz-creative-lab-caption-label {
          margin: 0 0 14px;
          color: var(--color-accent-secondary);
          font: var(--text-hud);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .jiz-creative-lab-caption-title {
          margin: 0;
          color: var(--color-text-primary);
          font: var(--text-h3);
          font-size:
            clamp(1.7rem, 2.6vw, 2.7rem);
          line-height: 1.08;
          letter-spacing: -0.045em;
          text-wrap: balance;
        }

        .jiz-creative-lab-caption-copy {
          margin: clamp(22px, 2.4vw, 30px) 0 0;
          max-width: 68ch;
          color: rgba(154, 164, 174, 0.88);
          font: var(--text-body);
          font-size: 0.9375rem;
          line-height: 1.76;
        }

        .jiz-creative-lab-caption-copy strong {
          color: var(--color-text-primary);
          font-weight: 650;
        }

        .jiz-creative-lab-tool-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 24px;
        }

        .jiz-creative-lab-tool {
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          padding: 0 13px;
          border:
            1px solid rgba(100, 225, 255, 0.14);
          border-radius: var(--radius-pill);
          background:
            rgba(100, 225, 255, 0.03);
          color: var(--color-text-secondary);
          font: var(--text-caption);
          transition:
            border-color var(--motion-fast) var(--ease-standard),
            background var(--motion-fast) var(--ease-standard),
            color var(--motion-fast) var(--ease-standard);
        }

        .jiz-creative-lab-tool:hover {
          border-color: rgba(100, 225, 255, 0.26);
          background: rgba(100, 225, 255, 0.055);
          color: rgba(245, 247, 248, 0.9);
        }

        .jiz-creative-lab-method-step {
          transition: background var(--motion-fast) var(--ease-standard);
        }

        .jiz-creative-lab-method-step:hover {
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.05) 0%,
              rgba(26, 35, 35, 0.46) 40%,
              rgba(20, 28, 29, 0.52) 100%
            );
        }

        @keyframes jiz-creative-lab-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 1180px) {
          .jiz-creative-lab-method {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 940px) {
          .jiz-creative-lab-header,
          .jiz-creative-lab-caption {
            grid-template-columns: 1fr;
          }

          .jiz-creative-lab-entry-row {
            grid-template-columns: 1fr;
            gap: 5px;
          }

          .jiz-creative-lab-heading,
          .jiz-creative-lab-intro {
            grid-column: 1;
          }

          .jiz-creative-lab-title {
            max-width: 100%;
          }

          .jiz-creative-lab-intro {
            max-width: 760px;
          }
        }

        @media (max-width: 680px) {
          .jiz-creative-lab {
            padding-inline:
              max(20px, var(--container-pad));
          }

          .jiz-creative-lab-title {
            font-size:
              clamp(2.75rem, 13vw, 4.2rem);
          }

          .jiz-creative-lab-stage {
            padding: 10px;
            border-radius: 26px;
          }

          .jiz-creative-lab-controls {
            grid-template-columns:
              repeat(3, auto)
              minmax(0, 1fr);
          }

          .jiz-creative-lab-time {
            grid-column: 1 / -1;
            min-width: 0;
            text-align: left;
          }

          .jiz-creative-lab-control {
            min-width: 42px;
            min-height: 42px;
            padding-inline: 13px;
          }

          .jiz-creative-lab-method {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .jiz-creative-lab-caption {
            padding:
              clamp(28px, 7vw, 40px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .jiz-creative-lab-method-step,
          .jiz-creative-lab-tool {
            transition: none;
          }

          .jiz-creative-lab-loader::before {
            animation: none;
          }

          .jiz-creative-lab-control {
            transition: none;
          }

          .jiz-creative-lab-control:hover {
            transform: none;
          }
        }
      `}</style>

      <div className="jiz-creative-lab-inner">
        <header className="jiz-creative-lab-header">
          <p className="jiz-creative-lab-eyebrow">
            Creative Lab
          </p>

          <h2
            id="creative-lab-title"
            className="jiz-creative-lab-title"
          >
            Where ideas become cinematic prototypes.
          </h2>

          <div className="jiz-creative-lab-heading">
            <p className="jiz-creative-lab-subtitle">
              A space for experimentation—where learning
              strategy, visual storytelling, generative AI,
              and rapid production come together to test
              what is possible.
            </p>
          </div>

          <p className="jiz-creative-lab-intro">
            The lab is not a gallery of finished answers.
            It is where concepts are pressure-tested,
            workflows are accelerated, and emerging tools
            are directed toward meaningful human
            experiences.
          </p>
        </header>

        <ol className="jiz-creative-lab-method" aria-label="How experimentation reaches delivery">
          {[
            ['Observe', 'Notice where a workflow strains'],
            ['Experiment', 'Test the smallest useful version'],
            ['Prototype', 'Build something that can be judged'],
            ['Validate', 'Check it against a real constraint'],
            ['Refine', 'Keep what earned its place'],
            ['Deliver', 'Move it into production work'],
          ].map(function (stage, index) {
            return (
              <li className="jiz-creative-lab-method-step" key={stage[0]}>
                <span className="jiz-creative-lab-method-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="jiz-creative-lab-method-name">{stage[0]}</span>
                <span className="jiz-creative-lab-method-note">{stage[1]}</span>
              </li>
            );
          })}
        </ol>

        <div className="jiz-creative-lab-stage">
          <div className="jiz-creative-lab-video-frame">
            <video
              ref={videoRef}
              className="jiz-creative-lab-video"
              data-train-story-video="ready"
              playsInline
              muted={videoMuted}
              preload="metadata"
              aria-label="The Train Story cinematic AI prototype"
              onLoadedMetadata={function (event) {
                setDuration(
                  Number.isFinite(event.currentTarget.duration)
                    ? event.currentTarget.duration
                    : 0
                );
              }}
              onCanPlay={function () {
                setVideoReady(true);
                setVideoError(false);
              }}
              onTimeUpdate={function (event) {
                setCurrentTime(
                  event.currentTarget.currentTime
                );
              }}
              onPlay={function () {
                setVideoPlaying(true);
              }}
              onPause={function () {
                setVideoPlaying(false);
              }}
              onEnded={function () {
                setVideoPlaying(false);
              }}
              onError={function () {
                setVideoReady(false);
                setVideoPlaying(false);
                setVideoError(true);
              }}
            >
              <source
                src={VIDEO_URL}
                type="video/mp4"
              />
              Your browser does not support embedded video.
            </video>

            {!videoReady && !videoError && !loadTimeout && (
              <div
                className="jiz-creative-lab-loading"
                role="status"
                aria-live="polite"
              >
                <div className="jiz-creative-lab-loader">
                  <span>Preparing The Train Story…</span>
                </div>
              </div>
            )}

            {loadTimeout && !videoError && !videoReady && (
              <div
                className="jiz-creative-lab-error"
                role="alert"
              >
                <span>The video is taking longer than expected.</span>
                <div style={{display:'flex',gap:'12px',marginTop:'16px',flexWrap:'wrap'}}>
                  <button onClick={()=>{setLoadTimeout(false);videoRef.current?.load()}} style={{padding:'8px 16px',borderRadius:'var(--radius-sm)',background:'var(--color-accent-primary)',color:'var(--color-bg-primary)',border:'none',cursor:'pointer',fontSize:'0.875rem',fontWeight:'600'}}>Try Again</button>
                  <a href={VIDEO_URL} target="_blank" rel="noopener noreferrer" style={{padding:'8px 16px',borderRadius:'var(--radius-sm)',background:'transparent',color:'var(--color-accent-primary)',border:'1px solid var(--color-accent-primary)',cursor:'pointer',fontSize:'0.875rem',fontWeight:'600',textDecoration:'none',display:'inline-block'}}>Open Video</a>
                </div>
              </div>
            )}

            {videoError && (
              <div
                className="jiz-creative-lab-error"
                role="alert"
              >
                <span>
                  The Train Story could not load. Confirm
                  that the video exists at
                  assets/video/the-train-story.mp4.
                </span>
              </div>
            )}
          </div>

          <div
            className="jiz-creative-lab-controls"
            aria-label="The Train Story video controls"
          >
            <button
              className="jiz-creative-lab-control"
              type="button"
              disabled={!videoReady || videoError}
              onClick={togglePlayback}
              aria-label={
                videoPlaying
                  ? 'Pause The Train Story'
                  : 'Play The Train Story'
              }
              aria-pressed={videoPlaying}
            >
              {videoPlaying ? 'Pause' : 'Play'}
            </button>

            <button
              className="jiz-creative-lab-control"
              type="button"
              disabled={!videoReady || videoError}
              onClick={restartVideo}
              aria-label="Restart The Train Story"
            >
              Restart
            </button>

            <button
              className="jiz-creative-lab-control"
              type="button"
              disabled={!videoReady || videoError}
              onClick={toggleMute}
              aria-label={
                videoMuted
                  ? 'Unmute The Train Story'
                  : 'Mute The Train Story'
              }
              aria-pressed={!videoMuted}
            >
              {videoMuted ? 'Sound On' : 'Mute'}
            </button>

            <input
              ref={progressRef}
              className="jiz-creative-lab-progress"
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={progressValue}
              disabled={!videoReady || videoError}
              onChange={handleProgressChange}
              aria-label="Seek through The Train Story"
            />

            <span
              className="jiz-creative-lab-time"
              aria-live="off"
            >
              {formatTime(currentTime)}
              {' / '}
              {formatTime(duration)}
            </span>
          </div>
        </div>

        <div className="jiz-creative-lab-caption">
          <div>
            <p className="jiz-creative-lab-caption-label">
              Lab Entry 01 / AI Production
            </p>

            <h3 className="jiz-creative-lab-caption-title">
              The Train Story
            </h3>

            <dl className="jiz-creative-lab-entry">
              <div className="jiz-creative-lab-entry-row">
                <dt>Challenge</dt>
                <dd>
                  Cinematic production normally requires a crew,
                  a budget, and a schedule most projects never get.
                </dd>
              </div>

              <div className="jiz-creative-lab-entry-row">
                <dt>Hypothesis</dt>
                <dd>
                  Generative tools directed as one connected system —
                  rather than used in isolation — could carry a concept
                  from narrative through to finished motion.
                </dd>
              </div>

              <div className="jiz-creative-lab-entry-row">
                <dt>Experiment</dt>
                <dd>
                  Structure the concept in one model, develop the visual
                  language in another, and translate it into motion in a
                  third, holding creative direction constant throughout.
                </dd>
              </div>

              <div className="jiz-creative-lab-entry-row">
                <dt>Result</dt>
                <dd>
                  A complete cinematic prototype produced by a single
                  practitioner, start to finish.
                </dd>
              </div>

              <div className="jiz-creative-lab-entry-row">
                <dt>Learning</dt>
                <dd>
                  The bottleneck was never the tools. It was having a clear
                  enough point of view to direct them.
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <p className="jiz-creative-lab-caption-copy">
              <strong>The Train Story</strong> is an
              experimental cinematic prototype created to
              explore how generative AI can support a
              complete visual-production workflow. The
              concept was structured and refined through
              Claude, developed visually through Gemini,
              and translated into motion through Omni.
              Rather than treating each platform as an
              isolated tool, I directed them as one
              connected production system—from concept and
              narrative framing to visual language, scene
              development, and final animation.
              <br />
              <br />
              The film draws inspiration from the
              architectural tension, psychological scale,
              and layered reality associated with
              Christopher Nolan's cinema, particularly
              <em> Inception</em>. The objective was not to
              reproduce that film, but to study how its
              atmosphere, pacing, visual gravity, and sense
              of impossible space could inform an original
              AI-enabled experiment. This piece is one
              example of how I combine creative direction,
              systems thinking, storytelling, and emerging
              technology to move an idea from imagination
              into a tangible cinematic experience.
            </p>

            <div
              className="jiz-creative-lab-tool-row"
              aria-label="Tools selected for this experiment"
            >
              <span className="jiz-creative-lab-tool">
                Claude · Concept and narrative
              </span>

              <span className="jiz-creative-lab-tool">
                Gemini · Visual development
              </span>

              <span className="jiz-creative-lab-tool">
                Omni · Motion production
              </span>

              <span className="jiz-creative-lab-tool">
                Creative direction · Jonathan
              </span>
            </div>
          </div>
        </div>

        {reducedMotion && (
          <p className="sr-only">
            Motion preferences are enabled. The video will
            play only when activated.
          </p>
        )}
      </div>
    </section>
  );
}

function CapabilityOS() {
  const principles = [
    { title: 'Clarify', belief: 'Every complex problem hides a simple truth waiting to be found.', approach: 'I start by stripping a challenge to its essential structure — the real audience, the real constraint, the real outcome — before a single screen gets designed.', proof: 'Operation: Legacy Unlocked began as a dense compliance mandate; clarifying the real behavior at stake turned it into a mission.' },
    { title: 'Connect', belief: 'Learning, technology, and business outcomes are one system, not three departments.', approach: 'I map how people, workflows, and platforms actually intersect, so a design decision in one area doesn\u2019t break another.', proof: 'Learn@Cox Launch Promo connected a platform migration to the emotional experience of the people living through it.' },
    { title: 'Prototype', belief: 'Thinking becomes real the moment you can click it.', approach: 'I build fast, tangible versions of an idea early — using AI-native tooling to move at studio speed — so decisions get tested, not debated.', proof: 'The Train Story moved from script to a working cinematic prototype in a fraction of a traditional production timeline.' },
    { title: 'Transform', belief: 'The goal was never the deliverable. It was the change it makes possible.', approach: 'I design for the moment after launch — adoption, behavior change, measurable movement — not just the moment of delivery.', proof: 'Every engagement is measured against what actually shifted for the people and the organization, not just what shipped.' },
  ];
  const [active, setActive] = React.useState(0);
  const [signal, setSignal] = React.useState(false);
  const p = principles[active];
  const select = (i) => {
    if (i === active) return;
    setSignal(true);
    setActive(i);
    window.dispatchEvent(new CustomEvent('jiz-signal'));
    setTimeout(() => setSignal(false), 750);
  };
  return (
    <div style={{ position: 'relative', overflow: 'hidden', paddingTop: 'clamp(56px, 6vw, 100px)', paddingBottom: 'clamp(56px, 6vw, 100px)' }}>
      <ChromaKeyVideo src="./assets/video/capabilities-bg.mp4" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0.55 }} />
      <div aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '38%', background: 'linear-gradient(to top, rgba(198,242,58,0.28), transparent)', mixBlendMode: 'screen', zIndex: 0, pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'rgba(11,13,16,0.32)', zIndex: 0 }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)' }}>
      <Reveal><Eyebrow>Inside the process</Eyebrow><h2 style={{ font: 'var(--text-h2)', color: 'var(--color-text-primary)', marginBottom: 16 }}>The operating system behind the work.</h2><p style={{ font: 'var(--text-body)', color: 'var(--color-text-secondary)', marginBottom: 32, maxWidth: 560 }}>Four principles guide every project — select one to see how it shapes a decision.</p></Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 24, alignItems: 'stretch', minWidth: 0, position: 'relative' }}>
        {signal && <div aria-hidden="true" style={{ position: 'absolute', left: 0, top: `${active * (100 / principles.length) + (100 / principles.length / 2)}%`, width: '30%', height: 2, background: 'var(--color-accent-primary)', boxShadow: '0 0 12px var(--color-accent-primary)', animation: 'jiz-signal-travel 0.7s ease-out forwards', zIndex: 2, pointerEvents: 'none' }} />}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, position: 'relative' }}>
          {signal && <div aria-hidden="true" style={{ position: 'absolute', left: 8, top: `${active * (100 / principles.length) + (100 / principles.length / 2)}%`, width: 4, height: 4, borderRadius: '50%', background: 'var(--color-accent-primary)', boxShadow: '0 0 10px var(--color-accent-primary)', animation: 'jiz-node-emit 0.6s ease-out forwards', zIndex: 2, pointerEvents: 'none' }} />}
          {principles.map((pl, i) => (
            <button key={pl.title} onClick={() => select(i)} style={{
              textAlign: 'left', cursor: 'pointer', font: 'inherit', padding: '18px 20px', borderRadius: 'var(--radius-md)', position: 'relative', overflow: 'hidden',
              background: active === i ? 'rgba(198,242,58,0.1)' : 'rgba(23,26,31,0.5)', backdropFilter: 'blur(14px)',
              border: active === i ? '1px solid var(--color-accent-primary)' : '1px solid var(--color-border-subtle)',
              transition: 'all var(--motion-standard) var(--ease-standard)', display: 'flex', alignItems: 'center', gap: 14,
            }} onMouseEnter={e => { const s = e.currentTarget.querySelector('.jiz-sweep'); if (s) { s.style.animation = 'none'; void s.offsetWidth; s.style.animation = 'jiz-sweep 0.9s ease-out'; } }}>
              <span className="jiz-sweep" aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, transparent 40%, rgba(198,242,58,0.14) 50%, transparent 60%)', transform: 'translateX(-120%)', pointerEvents: 'none' }} />
              <span style={{ font: 'var(--text-hud)', color: active === i ? 'var(--color-accent-primary)' : 'var(--color-text-muted)', flexShrink: 0, position: 'relative' }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ font: 'var(--text-body)', fontWeight: 600, fontSize: '0.9375rem', color: active === i ? 'var(--color-text-primary)' : 'var(--color-text-secondary)', position: 'relative' }}>{pl.title}</span>
            </button>
          ))}
        </div>
        <div key={active} style={{ background: 'rgba(23,26,31,0.4)', backdropFilter: 'blur(16px)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-lg)', padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0 }}>
          <span style={{ font: 'var(--text-hud)', color: 'var(--color-accent-secondary)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-hud)', marginBottom: 10, animation: 'jiz-stage-in 0.4s var(--ease-out) both' }}>Principle {String(active + 1).padStart(2, '0')} — {p.title}</span>
          <h3 style={{ font: 'var(--text-h3)', color: 'var(--color-text-primary)', marginBottom: 18, lineHeight: 1.3, animation: 'jiz-stage-in 0.4s var(--ease-out) 0.08s both' }}>{p.belief}</h3>
          <div style={{ marginBottom: 16, animation: 'jiz-stage-in 0.4s var(--ease-out) 0.16s both' }}>
            <span style={{ font: 'var(--text-hud)', fontSize: '0.6875rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-hud)' }}>Approach</span>
            <p style={{ font: 'var(--text-body)', color: 'var(--color-text-secondary)', marginTop: 6 }}>{p.approach}</p>
          </div>
          <div style={{ borderLeft: '2px solid var(--color-accent-primary)', paddingLeft: 14, animation: 'jiz-stage-in 0.4s var(--ease-out) 0.24s both' }}>
            <span style={{ font: 'var(--text-hud)', fontSize: '0.6875rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-hud)' }}>Proof</span>
            <p style={{ font: 'var(--text-body)', fontSize: '0.9375rem', color: 'var(--color-text-primary)', marginTop: 6, fontStyle: 'italic' }}>{p.proof}</p>
          </div>
        </div>
      </div>
      </div>
      <style>{`@keyframes jiz-signal-travel{0%{opacity:1;width:0}70%{opacity:1}100%{opacity:0;width:34%}}@keyframes jiz-node-emit{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(2.4)}}@keyframes jiz-sweep{to{transform:translateX(120%)}}@keyframes jiz-stage-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){[style*="jiz-signal-travel"],[style*="jiz-node-emit"],[style*="jiz-sweep"],[style*="jiz-stage-in"]{animation:none!important}}`}</style>
    </div>
  );
}

function FeaturedWork({ onOpenWork }) {
  const projects = [
    {
      id: 'operation-legacy-unlocked',
      number: '01',
      label: 'Featured Case Study',
      title: 'Operation: Legacy Unlocked',
      organization: 'Cox Enterprises',
      mission: 'An immersive leadership learning experience that casts employees as Cox Intelligence Agents, transforming organizational history into a mission-driven digital experience.',
      projectType: 'Learning Experience Design',
      role: 'Learning Experience Designer / Developer',
      focus: 'Game-based learning · Leadership development · Enterprise engagement',
      image: '../../assets/imagery/olu-featured-work-cover.png',
      imageAlt: 'Operation: Legacy Unlocked immersive learning experience',
      status: 'available',
      statusLabel: 'Case study available',
      actionLabel: 'Open Case Study',
      routeName: 'Operation: Legacy Unlocked',
      atmosphere: 'lime',
    },
    {
      id: 'hotelkey-onboarding',
      number: '02',
      label: 'Case Study',
      title: 'HotelKey New Hire Onboarding',
      organization: 'IHG Hotels & Resorts',
      mission: 'Helped new IHG hotel hires build real competence in an unfamiliar property system by teaching its operating logic before its screens.',
      projectType: 'Enterprise Onboarding',
      role: 'Creative Content Specialist / Developer',
      focus: 'Systems adoption · Video learning · Global onboarding',
      image: '../../assets/imagery/hotelkey-featured-work-cover.png',
      imageAlt: 'HotelKey New Hire Onboarding — IHG property system training experience',
      status: 'available',
      statusLabel: 'Case study available',
      actionLabel: 'Open Case Study',
      routeName: 'HotelKey New Hire Onboarding',
      atmosphere: 'cyan',
    },
    {
      id: 'guest-crm-pilot',
      number: '03',
      label: 'Case Study',
      title: 'Guest CRM Pilot',
      organization: 'IHG Hotels & Resorts',
      mission: 'Helped IHG pilot hotel teams adopt a new guest platform with confidence by teaching the operational reasoning behind each workflow.',
      projectType: 'Product Enablement',
      role: 'Learning Experience Strategist / Developer',
      focus: 'Pilot enablement · Performance support · Product adoption',
      image: '../../assets/imagery/guestcrm-featured-work-cover.png',
      imageAlt: 'Guest CRM Pilot — IHG Hotels & Resorts change enablement',
      status: 'available',
      actionLabel: 'Open Case Study',
      routeName: 'Guest CRM Pilot',
      statusLabel: 'Case study available',
      atmosphere: 'amber',
    },
    {
      id: 'workday-learn',
      number: '04',
      label: 'Case Study',
      title: 'Workday Learn Launch',
      organization: 'Cox Enterprises',
      mission: 'Helped Cox Enterprises employees see a new platform as an investment in their growth by leading launch communications with purpose over mechanics.',
      projectType: 'Enterprise Learning',
      role: 'Learning Experience Designer',
      focus: 'Change adoption · Learning systems · Internal communications',
      image: '../../assets/imagery/workday-featured-work-cover.png',
      imageAlt: 'Workday Learn Launch — Cox Enterprises enablement experience',
      status: 'available',
      statusLabel: 'Case study available',
      actionLabel: 'Open Case Study',
      routeName: 'Workday Learn Launch',
      atmosphere: 'violet',
    }
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [direction, setDirection] = React.useState('next');
  const [reducedMotion, setReducedMotion] = React.useState(false);
  const touchStartXRef = React.useRef(null);

  React.useEffect(function () {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return undefined;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = function () { setReducedMotion(media.matches); };
    update();
    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', update);
      return function () { media.removeEventListener('change', update); };
    }
    if (typeof media.addListener === 'function') {
      media.addListener(update);
      return function () { media.removeListener(update); };
    }
    return undefined;
  }, []);

  const activeProject = projects[activeIndex];
  const progressPercent = ((activeIndex + 1) / projects.length) * 100;

  const selectProject = function (nextIndex) {
    const normalized = (nextIndex + projects.length) % projects.length;
    if (normalized === activeIndex) return;
    setDirection(normalized > activeIndex ? 'next' : 'previous');
    setActiveIndex(normalized);
  };

  const showPrevious = function () {
    setDirection('previous');
    setActiveIndex(function (current) { return current === 0 ? projects.length - 1 : current - 1; });
  };

  const showNext = function () {
    setDirection('next');
    setActiveIndex(function (current) { return current === projects.length - 1 ? 0 : current + 1; });
  };

  const handleKeyDown = function (event) {
    if (event.key === 'ArrowLeft') { event.preventDefault(); showPrevious(); }
    else if (event.key === 'ArrowRight') { event.preventDefault(); showNext(); }
    else if (event.key === 'Home') { event.preventDefault(); setDirection('previous'); setActiveIndex(0); }
    else if (event.key === 'End') { event.preventDefault(); setDirection('next'); setActiveIndex(projects.length - 1); }
  };

  const handleTouchStart = function (event) {
    if (!event.touches || event.touches.length === 0) return;
    touchStartXRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = function (event) {
    if (touchStartXRef.current === null || !event.changedTouches || event.changedTouches.length === 0) return;
    const distance = event.changedTouches[0].clientX - touchStartXRef.current;
    touchStartXRef.current = null;
    if (Math.abs(distance) < 48) return;
    if (distance > 0) showPrevious(); else showNext();
  };

  const openActiveProject = function () {
    if (activeProject.status !== 'available' || !activeProject.routeName || typeof onOpenWork !== 'function') return;
    onOpenWork(activeProject.routeName);
  };

  return (
    <section
      className={'jiz-featured-work jiz-featured-work--' + activeProject.atmosphere}
      data-featured-work="ready"
      aria-labelledby="featured-work-title"
    >
      <style>{`
        .jiz-featured-work{--featured-inner:1360px;position:relative;isolation:isolate;width:100%;overflow:hidden;box-sizing:border-box;padding:clamp(96px,10vw,164px) var(--container-pad) clamp(104px,11vw,176px);color:var(--color-text-primary);background:radial-gradient(ellipse 78% 58% at 8% 14%,rgba(100,225,255,.075),transparent 66%),radial-gradient(ellipse 72% 54% at 92% 80%,rgba(137,105,203,.048),transparent 68%),linear-gradient(180deg,#0a1318 0%,#0c1420 48%,#080f16 100%);transition:background 700ms var(--ease-standard)}
        .jiz-featured-work::before{content:'';position:absolute;z-index:-2;inset:0;pointer-events:none;opacity:.22;background-image:linear-gradient(rgba(255,255,255,.026) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.026) 1px,transparent 1px);background-size:72px 72px;-webkit-mask-image:radial-gradient(ellipse at 50% 44%,#000,transparent 73%);mask-image:radial-gradient(ellipse at 50% 44%,#000,transparent 73%)}
        .jiz-featured-work::after{content:'';position:absolute;z-index:-1;left:50%;bottom:-250px;width:min(96vw,1540px);height:560px;transform:translateX(-50%);border-radius:50%;pointer-events:none;background:radial-gradient(ellipse,rgba(198,242,58,.045),transparent 68%);filter:blur(34px)}
        .jiz-featured-work--lime{background:radial-gradient(ellipse 70% 50% at 14% 22%,rgba(100,225,255,.075),transparent 62%),radial-gradient(ellipse 60% 48% at 86% 74%,rgba(137,105,203,.035),transparent 66%),linear-gradient(180deg,#0a1318 0%,#0c1420 46%,#080f16 100%)}
        .jiz-featured-work--cyan{background:radial-gradient(ellipse 70% 50% at 16% 22%,rgba(100,225,255,.08),transparent 62%),radial-gradient(ellipse 60% 48% at 84% 74%,rgba(137,105,203,.04),transparent 66%),linear-gradient(180deg,#0a1318 0%,#0c1420 46%,#080f16 100%)}
        .jiz-featured-work--amber{background:radial-gradient(ellipse 70% 50% at 18% 22%,rgba(100,225,255,.075),transparent 62%),radial-gradient(ellipse 60% 48% at 84% 74%,rgba(137,105,203,.038),transparent 66%),linear-gradient(180deg,#0a1318 0%,#0c1420 46%,#080f16 100%)}
        .jiz-featured-work--violet{background:radial-gradient(ellipse 70% 50% at 16% 22%,rgba(100,225,255,.08),transparent 62%),radial-gradient(ellipse 60% 48% at 86% 74%,rgba(137,105,203,.048),transparent 66%),linear-gradient(180deg,#0a1318 0%,#0c1420 46%,#080f16 100%)}
        .jiz-featured-inner{position:relative;width:min(100%,var(--featured-inner));margin-inline:auto}
        .jiz-featured-header{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:end;gap:36px;margin-bottom:clamp(54px,7vw,92px)}
        .jiz-featured-heading{max-width:780px}.jiz-featured-eyebrow{margin:0 0 16px;color:var(--color-accent-secondary);font:var(--text-eyebrow);letter-spacing:var(--tracking-eyebrow);text-transform:uppercase}
        .jiz-featured-title{margin:0;color:var(--color-text-primary);font:var(--text-h2);font-size:clamp(3rem,6vw,5.9rem);line-height:.98;letter-spacing:-.055em;text-wrap:balance}
        .jiz-featured-intro{max-width:720px;margin:24px 0 0;color:var(--color-text-secondary);font:var(--text-body-lg);line-height:1.66}
        .jiz-featured-count{min-width:90px;margin:0;padding-bottom:8px;color:var(--color-text-muted);font:var(--text-hud);letter-spacing:.12em;text-align:right;text-transform:uppercase}.jiz-featured-count strong{color:var(--color-accent-primary);font-weight:700}
        .jiz-featured-stage{position:relative;padding:clamp(18px,2vw,28px);border:1px solid rgba(255,255,255,.06);border-radius:clamp(26px,3vw,40px);background:linear-gradient(180deg,rgba(255,255,255,.048) 0%,rgba(255,255,255,.018) 22%,rgba(255,255,255,.007) 100%);box-shadow:0 40px 96px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.07),inset 0 0 0 1px rgba(255,255,255,.012);backdrop-filter:blur(22px)}
        .jiz-featured-stage::before{content:'';position:absolute;z-index:-1;inset:6% 5% -22%;border-radius:50%;pointer-events:none;background:radial-gradient(ellipse,rgba(100,225,255,.1),rgba(198,242,58,.028) 42%,transparent 70%);filter:blur(72px);opacity:.8}
        .jiz-featured-viewport{position:relative;overflow:hidden;border-radius:clamp(20px,2.2vw,32px);outline:none}.jiz-featured-viewport:focus-visible{outline:2px solid var(--color-accent-primary);outline-offset:7px}
        .jiz-featured-project{display:grid;grid-template-columns:minmax(0,1.12fr) minmax(350px,.88fr);min-width:0;overflow:hidden;border:1px solid rgba(255,255,255,.085);border-radius:clamp(20px,2.2vw,32px);background:linear-gradient(180deg,rgba(32,35,36,.97) 0%,rgba(20,24,26,.97) 26%,rgba(10,14,15,.98) 100%);box-shadow:0 34px 84px rgba(0,0,0,.28),0 8px 24px rgba(0,0,0,.18),inset 0 1px 0 rgba(255,255,255,.06),inset 0 0 0 1px rgba(255,255,255,.012);transition:box-shadow 420ms var(--ease-out),border-color 420ms var(--ease-out)}
        .jiz-featured-project:hover{border-color:rgba(255,255,255,.11);box-shadow:0 44px 104px rgba(0,0,0,.32),0 10px 28px rgba(0,0,0,.2),inset 0 1px 0 rgba(255,255,255,.08),inset 0 0 0 1px rgba(255,255,255,.018),0 0 70px rgba(100,225,255,.055)}
        .jiz-featured-project.is-next{animation:jiz-featured-enter-next 620ms var(--ease-out) both}.jiz-featured-project.is-previous{animation:jiz-featured-enter-previous 620ms var(--ease-out) both}
        .jiz-featured-media{position:relative;min-width:0;min-height:580px;overflow:hidden;background:radial-gradient(circle at 50% 38%,rgba(100,225,255,.12),transparent 44%),linear-gradient(145deg,#152225,#080c0d 74%)}
        .jiz-featured-image{position:absolute;inset:0;display:block;width:100%;height:100%;object-fit:cover;object-position:center;transform:scale(1.012);transition:transform 860ms var(--ease-out),filter 860ms var(--ease-out)}.jiz-featured-project:hover .jiz-featured-image{transform:scale(1.032);filter:brightness(1.05) saturate(1.03) contrast(1.015)}
        .jiz-featured-media::after{content:'';position:absolute;z-index:2;inset:0;pointer-events:none;background:linear-gradient(90deg,transparent 54%,rgba(7,10,11,.32)),linear-gradient(180deg,rgba(255,255,255,.028) 0%,transparent 12%,transparent 56%,rgba(7,9,10,.44));transition:opacity 520ms var(--ease-out)}
        .jiz-featured-media::before{content:'';position:absolute;z-index:3;inset:0;pointer-events:none;opacity:0;background:linear-gradient(112deg,transparent 34%,rgba(255,255,255,.055) 50%,transparent 66%);transition:opacity 620ms var(--ease-out)}
        .jiz-featured-project:hover .jiz-featured-media::before{opacity:1}
        .jiz-featured-badge{position:absolute;z-index:3;left:24px;top:24px;display:inline-flex;align-items:center;gap:9px;min-height:38px;padding:0 15px;border:1px solid rgba(255,255,255,.14);border-radius:var(--radius-pill);background:rgba(7,10,11,.74);color:var(--color-text-primary);font:var(--text-caption);backdrop-filter:blur(14px)}.jiz-featured-badge::before{content:'';width:7px;height:7px;border-radius:50%;background:var(--color-accent-primary);box-shadow:0 0 16px rgba(198,242,58,.42)}
        .jiz-featured-placeholder{position:absolute;inset:0;display:grid;place-items:center;padding:clamp(36px,6vw,82px);text-align:center}.jiz-featured-placeholder-grid{position:absolute;inset:0;pointer-events:none;opacity:.22;background-image:linear-gradient(rgba(100,225,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(100,225,255,.12) 1px,transparent 1px);background-size:54px 54px;-webkit-mask-image:radial-gradient(circle at center,#000,transparent 72%);mask-image:radial-gradient(circle at center,#000,transparent 72%)}
        .jiz-featured-placeholder-inner{position:relative;z-index:1;max-width:540px}.jiz-featured-placeholder-mark{display:block;margin-bottom:18px;color:var(--color-accent-secondary);font:var(--text-hud);letter-spacing:.13em;text-transform:uppercase}.jiz-featured-placeholder-title{margin:0;color:var(--color-text-primary);font:var(--text-h2);font-size:clamp(2rem,4vw,4rem);line-height:1.02;letter-spacing:-.05em;text-wrap:balance}
        .jiz-featured-content{display:flex;min-width:0;flex-direction:column;justify-content:center;padding:clamp(44px,5vw,76px)}
        .jiz-featured-case-label{margin:0 0 15px;color:var(--color-accent-primary);font:var(--text-hud);font-weight:700;letter-spacing:.12em;text-transform:uppercase;animation:jiz-featured-content-in 500ms var(--ease-out) both}
        .jiz-featured-project-title{margin:0;color:var(--color-text-primary);font:var(--text-h3);font-size:clamp(2.2rem,3.6vw,4rem);line-height:1.01;letter-spacing:-.052em;text-wrap:balance;animation:jiz-featured-content-in 520ms var(--ease-out) 70ms both}
        .jiz-featured-mission{margin:24px 0 0;color:var(--color-text-secondary);font:var(--text-body);font-size:clamp(1rem,1.3vw,1.12rem);line-height:1.76;animation:jiz-featured-content-in 540ms var(--ease-out) 130ms both}
        .jiz-featured-metadata{display:grid;grid-template-columns:1fr 1fr;gap:22px 30px;margin-top:38px;padding:30px 0;border-top:1px solid rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.06);animation:jiz-featured-content-in 560ms var(--ease-out) 190ms both}
        .jiz-featured-meta-label{display:block;margin-bottom:8px;color:var(--color-accent-secondary);font:var(--text-hud);font-size:.625rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase}.jiz-featured-meta-value{display:block;color:rgba(245,247,248,.9);font:var(--text-caption);font-size:.8125rem;font-weight:550;line-height:1.48}
        .jiz-featured-action-row{display:flex;align-items:center;gap:18px;margin-top:34px;animation:jiz-featured-content-in 580ms var(--ease-out) 250ms both}.jiz-featured-action{min-height:52px;display:inline-flex;align-items:center;justify-content:center;padding:0 26px;border:0;border-radius:var(--radius-pill);background:var(--color-accent-primary);color:#080b0c;font:var(--text-button);font-weight:700;cursor:pointer;transition:transform var(--motion-fast) var(--ease-standard),background var(--motion-fast) var(--ease-standard),box-shadow var(--motion-fast) var(--ease-standard)}
        .jiz-featured-action:hover:not(:disabled){transform:translateY(-2px);background:var(--color-accent-primary-hover);box-shadow:0 0 30px rgba(198,242,58,.22)}.jiz-featured-action:disabled{border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.035);color:var(--color-text-muted);cursor:default;box-shadow:none}.jiz-featured-status{color:var(--color-text-muted);font:var(--text-caption)}
        .jiz-featured-navigation{display:grid;grid-template-columns:58px minmax(0,1fr) 58px;align-items:center;gap:clamp(18px,3vw,34px);margin-top:clamp(30px,4vw,48px)}.jiz-featured-control{width:58px;height:58px;display:inline-grid;place-items:center;padding:0;border:1px solid rgba(255,255,255,.13);border-radius:50%;background:rgba(255,255,255,.028);color:var(--color-text-primary);font-size:1.15rem;cursor:pointer;backdrop-filter:blur(12px);transition:transform var(--motion-fast) var(--ease-standard),border-color var(--motion-fast) var(--ease-standard),background var(--motion-fast) var(--ease-standard),box-shadow var(--motion-fast) var(--ease-standard)}
        .jiz-featured-control:hover{transform:translateY(-2px);border-color:rgba(198,242,58,.4);background:rgba(198,242,58,.045);box-shadow:0 8px 22px rgba(0,0,0,.24),inset 0 1px 0 rgba(255,255,255,.06),0 0 20px rgba(198,242,58,.08)}
        .jiz-featured-control:active{transform:translateY(0)}
        .jiz-featured-progress{position:relative;height:6px;overflow:hidden;border-radius:999px;background:rgba(255,255,255,.07);box-shadow:inset 0 1px 2px rgba(0,0,0,.24)}.jiz-featured-progress-fill{display:block;width:0;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--color-accent-secondary),var(--color-accent-primary));box-shadow:0 0 16px rgba(198,242,58,.16);transition:width 620ms var(--ease-out)}.jiz-featured-progress-steps{position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));pointer-events:none}.jiz-featured-progress-step{border-right:1px solid rgba(9,12,13,.42)}.jiz-featured-progress-step:last-child{border-right:0}
        .jiz-featured-action:focus-visible,.jiz-featured-control:focus-visible,.jiz-featured-viewport:focus-visible{outline:2px solid var(--color-accent-primary);outline-offset:4px}
        @keyframes jiz-featured-enter-next{from{opacity:0;transform:translateX(34px)}to{opacity:1;transform:translateX(0)}}@keyframes jiz-featured-enter-previous{from{opacity:0;transform:translateX(-34px)}to{opacity:1;transform:translateX(0)}}@keyframes jiz-featured-content-in{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        @media(max-width:1120px){.jiz-featured-project{grid-template-columns:minmax(0,1fr) minmax(320px,.92fr)}.jiz-featured-media{min-height:520px}.jiz-featured-content{padding:clamp(36px,4vw,52px)}}
        @media(max-width:900px){.jiz-featured-header{grid-template-columns:1fr;gap:20px}.jiz-featured-count{text-align:left}.jiz-featured-project{grid-template-columns:1fr}.jiz-featured-media{min-height:0;aspect-ratio:16/10}.jiz-featured-media::after{background:linear-gradient(180deg,transparent 62%,rgba(7,9,10,.38))}.jiz-featured-content{padding:clamp(34px,6vw,58px)}}
        @media(max-width:680px){.jiz-featured-work{padding-inline:max(20px,var(--container-pad))}.jiz-featured-title{font-size:clamp(2.7rem,13vw,4.1rem)}.jiz-featured-stage{padding:10px;border-radius:24px}.jiz-featured-media{aspect-ratio:4/3}.jiz-featured-badge{left:15px;top:15px}.jiz-featured-metadata{grid-template-columns:1fr;gap:18px}.jiz-featured-action-row{align-items:flex-start;flex-direction:column}.jiz-featured-navigation{grid-template-columns:50px minmax(0,1fr) 50px;gap:12px}.jiz-featured-control{width:50px;height:50px}}
        @media(prefers-reduced-motion:reduce){.jiz-featured-project:hover .jiz-featured-image{transform:scale(1.012);filter:none}.jiz-featured-project:hover .jiz-featured-media::before{opacity:0}.jiz-featured-work,.jiz-featured-project,.jiz-featured-image,.jiz-featured-case-label,.jiz-featured-project-title,.jiz-featured-mission,.jiz-featured-metadata,.jiz-featured-action-row,.jiz-featured-action,.jiz-featured-control,.jiz-featured-progress-fill{animation:none!important;transition:none!important}.jiz-featured-project:hover .jiz-featured-image,.jiz-featured-action:hover,.jiz-featured-control:hover{transform:none}}
      `}</style>

      <div className="jiz-featured-inner">
        <header className="jiz-featured-header">
          <div className="jiz-featured-heading">
            <p className="jiz-featured-eyebrow">Featured Work / Proof</p>
            <h2 id="featured-work-title" className="jiz-featured-title">Ideas made real.</h2>
            <p className="jiz-featured-intro">Selected work across enterprise learning, cinematic storytelling, systems adoption, and AI-enabled production—designed to move people from complexity to confident action.</p>
          </div>
          <p className="jiz-featured-count" aria-live="polite" aria-atomic="true"><strong>{String(activeIndex + 1).padStart(2, '0')}</strong>{' / '}{String(projects.length).padStart(2, '0')}</p>
        </header>

        <div className="jiz-featured-stage">
          <div className="jiz-featured-viewport" role="region" aria-roledescription="carousel" aria-label="Featured project carousel" tabIndex={0} onKeyDown={handleKeyDown} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <article key={activeProject.id} className={'jiz-featured-project ' + (reducedMotion ? '' : direction === 'next' ? 'is-next' : 'is-previous')} data-project-card={activeProject.id} aria-labelledby={activeProject.id + '-title'}>
              <div className="jiz-featured-media">
                {activeProject.image ? (
                  <img className="jiz-featured-image" src={activeProject.image} alt={activeProject.imageAlt} loading={activeIndex === 0 ? 'eager' : 'lazy'} />
                ) : (
                  <div className="jiz-featured-placeholder">
                    <div className="jiz-featured-placeholder-grid" aria-hidden="true" />
                    <div className="jiz-featured-placeholder-inner">
                      <span className="jiz-featured-placeholder-mark">Case study in development</span>
                      <h3 className="jiz-featured-placeholder-title">{activeProject.title}</h3>
                    </div>
                  </div>
                )}
                <span className="jiz-featured-badge">{activeProject.statusLabel}</span>
              </div>

              <div className="jiz-featured-content">
                <p className="jiz-featured-case-label">{activeProject.label}{' · '}{activeProject.number}</p>
                <h3 id={activeProject.id + '-title'} className="jiz-featured-project-title">{activeProject.title}</h3>
                <p className="jiz-featured-mission">{activeProject.mission}</p>
                <div className="jiz-featured-metadata">
                  <div><span className="jiz-featured-meta-label">Project Type</span><span className="jiz-featured-meta-value">{activeProject.projectType}</span></div>
                  <div><span className="jiz-featured-meta-label">Role</span><span className="jiz-featured-meta-value">{activeProject.role}</span></div>
                  <div><span className="jiz-featured-meta-label">Organization</span><span className="jiz-featured-meta-value">{activeProject.organization}</span></div>
                  <div><span className="jiz-featured-meta-label">Focus</span><span className="jiz-featured-meta-value">{activeProject.focus}</span></div>
                </div>
                <div className="jiz-featured-action-row">
                  <button className="jiz-featured-action" type="button" disabled={activeProject.status !== 'available'} onClick={openActiveProject}>{activeProject.actionLabel}{activeProject.status === 'available' ? ' →' : ''}</button>
                  <span className="jiz-featured-status">{activeProject.statusLabel}</span>
                </div>
              </div>
            </article>
          </div>

          <nav className="jiz-featured-navigation" aria-label="Featured project navigation">
            <button className="jiz-featured-control" type="button" onClick={showPrevious} aria-label="Show previous featured project" title="Previous project"><span aria-hidden="true">←</span></button>
            <div className="jiz-featured-progress" role="progressbar" aria-label="Featured project progress" aria-valuemin="1" aria-valuemax={projects.length} aria-valuenow={activeIndex + 1}>
              <span className="jiz-featured-progress-fill" style={{ width: progressPercent + '%' }} />
              <span className="jiz-featured-progress-steps" aria-hidden="true">{projects.map(function (project) { return <span key={project.id} className="jiz-featured-progress-step" />; })}</span>
            </div>
            <button className="jiz-featured-control" type="button" onClick={showNext} aria-label="Show next featured project" title="Next project"><span aria-hidden="true">→</span></button>
          </nav>

          <p className="sr-only" role="status" aria-live="polite">Showing {activeProject.title}, project {activeIndex + 1} of {projects.length}.</p>
        </div>
      </div>
    </section>
  );
}

function Insights() {
  const posts = [
    {
      label: 'AI + PRACTICE',
      title: 'AI changes the workflow—not the responsibility.',
      summary:
        'The value is not faster output alone. It is using speed to test more thoughtfully, compare alternatives, and protect the quality of the final experience.',
      takeaway:
        'Speed expands the options. Judgment protects the outcome.',
    },
    {
      label: 'DESIGN JUDGMENT',
      title: 'Scenarios should build judgment, not reward guessing.',
      summary:
        'Meaningful practice gives people context, consequence, and room to make a defensible decision—not merely select the answer the designer prefers.',
      takeaway:
        'Practice should strengthen decisions—not test compliance.',
    },
    {
      label: 'SYSTEMS THINKING',
      title: 'The learning experience is only one part of the system.',
      summary:
        'Adoption depends on tools, incentives, communication, leadership, workflow, and reinforcement aligning around the same behavioral outcome.',
      takeaway:
        'Adoption succeeds when the entire environment supports the behavior.',
    },
  ];

  return (
    <section
      className="jiz-insights"
      data-insights="ready"
      aria-labelledby="jiz-insights-title"
    >
      <style>{`
        .jiz-insights {
          position: relative;
          isolation: isolate;
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding:
            clamp(96px, 10vw, 156px)
            var(--container-pad)
            clamp(104px, 11vw, 172px);
          color: var(--color-text-primary);
          background:
            radial-gradient(
              ellipse 72% 52% at 18% 44%,
              rgba(100, 225, 255, 0.115),
              transparent 66%
            ),
            radial-gradient(
              ellipse 62% 48% at 78% 78%,
              rgba(198, 242, 58, 0.062),
              transparent 68%
            ),
            linear-gradient(
              180deg,
              #2b3c3e 0%,
              #253436 46%,
              #1d2a2c 100%
            );
        }

        .jiz-insights::before {
          content: '';
          position: absolute;
          z-index: -2;
          inset: 0;
          pointer-events: none;
          opacity: 0.14;
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.032) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.032) 1px,
              transparent 1px
            );
          background-size: 78px 78px;
          -webkit-mask-image:
            radial-gradient(
              ellipse at 50% 46%,
              #000,
              transparent 74%
            );
          mask-image:
            radial-gradient(
              ellipse at 50% 46%,
              #000,
              transparent 74%
            );
        }

        .jiz-insights::after {
          content: '';
          position: absolute;
          z-index: -1;
          left: -12%;
          top: 8%;
          width: min(70vw, 1040px);
          height: min(70vw, 1040px);
          border-radius: 50%;
          pointer-events: none;
          background:
            radial-gradient(
              circle,
              rgba(100, 225, 255, 0.18) 0%,
              rgba(100, 225, 255, 0.07) 34%,
              rgba(198, 242, 58, 0.025) 50%,
              transparent 72%
            );
          filter: blur(58px);
          opacity: 0.9;
        }

        .jiz-insights-inner {
          position: relative;
          z-index: 1;
          width: min(100%, 1360px);
          margin-inline: auto;
        }

        .jiz-insights-header {
          max-width: 760px;
          margin-bottom:
            clamp(52px, 7vw, 84px);
        }

        .jiz-insights-eyebrow {
          margin: 0 0 16px;
          color: var(--color-accent-primary);
          font: var(--text-eyebrow);
          letter-spacing: var(--tracking-eyebrow);
          text-transform: uppercase;
        }

        .jiz-insights-title {
          margin: 0;
          color: var(--color-text-primary);
          font: var(--text-h2);
          font-size:
            clamp(3rem, 6vw, 5.9rem);
          line-height: 0.98;
          letter-spacing: -0.055em;
          text-wrap: balance;
        }

        .jiz-insights-subtitle {
          max-width: 720px;
          margin: 24px 0 0;
          color: var(--color-text-secondary);
          font: var(--text-body-lg);
          line-height: 1.66;
        }

        .jiz-insights-stage {
          position: relative;
          display: grid;
          grid-template-columns:
            minmax(390px, 0.92fr)
            minmax(0, 1.08fr);
          gap:
            clamp(34px, 6vw, 84px);
          align-items: stretch;
          min-width: 0;
        }

        .jiz-insights-portrait-column {
          position: relative;
          min-width: 0;
          height: 100%;
          min-height: 0;
        }

        .jiz-insights-portrait-environment {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 100%;
          overflow: visible;
          isolation: isolate;
        }

        .jiz-insights-portrait-glow {
          position: absolute;
          z-index: 0;
          left: -38%;
          top: -10%;
          width: 176%;
          height: 126%;
          pointer-events: none;
          border-radius: 50%;
          background:
            radial-gradient(
              ellipse at 52% 44%,
              rgba(100, 225, 255, 0.28) 0%,
              rgba(100, 225, 255, 0.14) 24%,
              rgba(100, 225, 255, 0.07) 42%,
              rgba(198, 242, 58, 0.035) 58%,
              transparent 76%
            );
          filter: blur(62px);
          opacity: 0.96;
        }

        .jiz-insights-portrait-haze {
          position: absolute;
          z-index: 3;
          left: -42%;
          right: -48%;
          bottom: -9%;
          height: 46%;
          pointer-events: none;
          background:
            radial-gradient(
              ellipse at 42% 100%,
              rgba(198, 242, 58, 0.24) 0%,
              rgba(100, 225, 255, 0.09) 38%,
              transparent 72%
            ),
            linear-gradient(
              to top,
              rgba(198, 242, 58, 0.14),
              rgba(100, 225, 255, 0.055) 48%,
              transparent 100%
            );
          filter: blur(26px);
          mix-blend-mode: screen;
          opacity: 0.88;
        }

        .jiz-insights-portrait-side-fade {
          position: absolute;
          z-index: 4;
          left: -34%;
          right: -44%;
          top: -6%;
          bottom: -8%;
          pointer-events: none;
          background:
            radial-gradient(
              ellipse at 43% 46%,
              transparent 0%,
              transparent 44%,
              rgba(43, 61, 63, 0.16) 64%,
              rgba(43, 61, 63, 0.54) 82%,
              rgba(43, 61, 63, 0.88) 100%
            ),
            linear-gradient(
              180deg,
              transparent 0%,
              transparent 72%,
              rgba(34, 49, 51, 0.28) 86%,
              rgba(34, 49, 51, 0.78) 100%
            );
          filter: blur(12px);
        }

        .jiz-insights-portrait {
          position: absolute;
          z-index: 2;
          left: 47%;
          bottom: -5%;
          width:
            clamp(540px, 47vw, 760px);
          height: 112%;
          max-width: none;
          max-height: none;
          object-fit: contain;
          object-position: center bottom;
          transform:
            translateX(-50%)
            scale(1.18);
          transform-origin: center bottom;
          opacity: 0.98;
          pointer-events: none;
          filter:
            drop-shadow(
              -22px 8px 46px
              rgba(100, 225, 255, 0.20)
            )
            drop-shadow(
              0 24px 58px
              rgba(0, 0, 0, 0.28)
            );
          -webkit-mask-image:
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.96) 0%,
              #000 68%,
              rgba(0, 0, 0, 0.84) 82%,
              transparent 100%
            ),
            linear-gradient(
              to right,
              transparent 0%,
              rgba(0, 0, 0, 0.55) 10%,
              #000 24%,
              #000 74%,
              rgba(0, 0, 0, 0.5) 90%,
              transparent 100%
            );
          -webkit-mask-composite:
            source-in;
          mask-image:
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.96) 0%,
              #000 68%,
              rgba(0, 0, 0, 0.84) 82%,
              transparent 100%
            ),
            linear-gradient(
              to right,
              transparent 0%,
              rgba(0, 0, 0, 0.55) 10%,
              #000 24%,
              #000 74%,
              rgba(0, 0, 0, 0.5) 90%,
              transparent 100%
            );
          mask-composite: intersect;
        }

        .jiz-insights-portrait-copy {
          position: absolute;
          z-index: 5;
          left: clamp(6px, 1vw, 18px);
          bottom: clamp(18px, 3vw, 34px);
          max-width: 250px;
        }

        .jiz-insights-portrait-label {
          display: block;
          margin-bottom: 10px;
          color: var(--color-accent-primary);
          font: var(--text-hud);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .jiz-insights-portrait-note {
          margin: 0;
          color: rgba(247, 248, 250, 0.84);
          font: var(--text-caption);
          line-height: 1.55;
        }

        .jiz-insights-cards {
          display: grid;
          grid-template-rows:
            repeat(3, minmax(230px, 1fr));
          gap: 24px;
          min-width: 0;
          height: 100%;
          align-self: stretch;
        }

        .jiz-insight-card-wrap {
          min-width: 0;
          height: 100%;
        }

        .jiz-insight-card {
          position: relative;
          display: grid;
          grid-template-columns:
            minmax(0, 0.92fr)
            minmax(220px, 0.78fr);
          gap:
            clamp(24px, 4vw, 48px);
          align-items: center;
          min-width: 0;
          height: 100%;
          box-sizing: border-box;
          padding:
            clamp(28px, 3.4vw, 42px);
          overflow: hidden;
          border:
            1px solid rgba(255, 255, 255, 0.075);
          border-radius:
            clamp(20px, 2.2vw, 30px);
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.062) 0%,
              rgba(255, 255, 255, 0.03) 26%,
              rgba(255, 255, 255, 0.018) 100%
            );
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.055),
            0 20px 52px rgba(0, 0, 0, 0.14);
          backdrop-filter: blur(18px);
          transition:
            transform var(--motion-fast)
              var(--ease-standard),
            border-color var(--motion-fast)
              var(--ease-standard),
            box-shadow var(--motion-fast)
              var(--ease-standard),
            background var(--motion-fast)
              var(--ease-standard);
        }

        .jiz-insight-card::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0;
          background:
            linear-gradient(
              112deg,
              transparent 24%,
              rgba(198, 242, 58, 0.08) 50%,
              transparent 76%
            );
          transform: translateX(-72%);
          transition:
            opacity 280ms ease,
            transform 720ms var(--ease-standard);
        }

        .jiz-insight-card:hover,
        .jiz-insight-card:focus-within {
          border-color:
            rgba(255, 255, 255, 0.135);
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.078) 0%,
              rgba(255, 255, 255, 0.038) 26%,
              rgba(255, 255, 255, 0.022) 100%
            );
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.07),
            0 24px 58px rgba(0, 0, 0, 0.17);
        }

        .jiz-insight-card:hover::before,
        .jiz-insight-card:focus-within::before {
          opacity: 0;
        }

        .jiz-insight-card-main,
        .jiz-insight-card-secondary {
          position: relative;
          z-index: 1;
          min-width: 0;
        }

        .jiz-insight-card-index {
          display: block;
          margin-bottom: 18px;
          color: rgba(255, 255, 255, 0.58);
          font: var(--text-hud);
          letter-spacing: 0.13em;
        }

        .jiz-insight-card-label {
          display: block;
          color: var(--color-accent-secondary);
          font: var(--text-hud);
          letter-spacing: var(--tracking-hud);
        }

        .jiz-insight-card-title {
          margin: 14px 0 0;
          max-width: 22ch;
          color: var(--color-text-primary);
          font: var(--text-h3);
          font-size:
            clamp(1.5rem, 2.3vw, 2.25rem);
          line-height: 1.1;
          letter-spacing: -0.038em;
          text-wrap: balance;
        }

        .jiz-insight-card-summary {
          margin: 0;
          max-width: 46ch;
          color: rgba(214, 221, 226, 0.9);
          font: var(--text-body);
          font-size: 0.9375rem;
          line-height: 1.74;
        }

        .jiz-insight-card-takeaway {
          margin: 24px 0 0;
          max-width: 44ch;
          padding-left: 16px;
          border-left:
            1px solid rgba(198, 242, 58, 0.55);
          color: rgba(245, 247, 248, 0.92);
          font: var(--text-caption);
          font-size: 0.8125rem;
          font-style: italic;
          line-height: 1.62;
        }

        @media (max-width: 1120px) {
          .jiz-insights-stage {
            grid-template-columns:
              minmax(330px, 0.82fr)
              minmax(0, 1.18fr);
            gap: 34px;
          }

          .jiz-insight-card {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .jiz-insights-portrait {
            left: 45%;
            width:
              clamp(460px, 47vw, 650px);
          }
        }

        @media (max-width: 900px) {
          .jiz-insights-stage {
            grid-template-columns: 1fr;
          }

          .jiz-insights-portrait-column {
            min-height: 650px;
          }

          .jiz-insights-portrait-environment {
            height: 650px;
            min-height: 650px;
          }

          .jiz-insights-portrait {
            left: 50%;
            width:
              min(650px, 88vw);
          }

          .jiz-insights-cards {
            grid-template-rows: none;
            grid-template-columns: 1fr;
          }

          .jiz-insight-card {
            min-height: 250px;
            grid-template-columns:
              minmax(0, 0.95fr)
              minmax(220px, 0.85fr);
          }
        }

        @media (max-width: 680px) {
          .jiz-insights {
            padding-inline:
              max(20px, var(--container-pad));
          }

          .jiz-insights-title {
            font-size:
              clamp(2.75rem, 13vw, 4.2rem);
          }

          .jiz-insights-portrait-column {
            min-height: 560px;
          }

          .jiz-insights-portrait-environment {
            height: 560px;
            min-height: 560px;
          }

          .jiz-insights-portrait {
            left: 50%;
            bottom: -7%;
            width:
              min(620px, 118vw);
            height: 112%;
            transform:
              translateX(-50%)
              scale(1.18);
          }

          .jiz-insights-portrait-copy {
            max-width: 215px;
          }

          .jiz-insight-card-title,
          .jiz-insight-card-summary,
          .jiz-insight-card-takeaway {
            max-width: 100%;
          }

          .jiz-insight-card {
            min-height: auto;
            grid-template-columns: 1fr;
            gap: 20px;
            padding:
              clamp(26px, 7vw, 34px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .jiz-creative-lab-method-step,
          .jiz-creative-lab-tool {
            transition: none;
          }

          .jiz-insight-card,
          .jiz-insight-card::before {
            transition: none;
          }

          .jiz-insight-card:hover,
          .jiz-insight-card:focus-within {
            transform: none;
          }
        }
      `}</style>

      <div className="jiz-insights-inner">
        <Reveal>
          <header className="jiz-insights-header">
            <p className="jiz-insights-eyebrow">
              Insights
            </p>

            <h2
              id="jiz-insights-title"
              className="jiz-insights-title"
            >
              Thinking out loud.
            </h2>

            <p className="jiz-insights-subtitle">
              Three principles shaping how I use AI,
              design judgment, and systems thinking to
              create experiences people can trust,
              understand, and adopt.
            </p>
          </header>
        </Reveal>

        <div className="jiz-insights-stage">
          <Reveal
            delay={80}
            style={{
              minWidth: 0,
              height: '100%',
            }}
          >
            <div className="jiz-insights-portrait-column">
              <div className="jiz-insights-portrait-environment">
                <div
                  className="jiz-insights-portrait-glow"
                  aria-hidden="true"
                />

                <ChromaKeyVideo
                  src="./assets/video/Jonathan_Smiling.mp4"
                  className="jiz-insights-portrait"
                />

                <div
                  className="jiz-insights-portrait-haze"
                  aria-hidden="true"
                />

                <div
                  className="jiz-insights-portrait-side-fade"
                  aria-hidden="true"
                />

                <div className="jiz-insights-portrait-copy">
                  <span className="jiz-insights-portrait-label">
                    Perspective in practice
                  </span>

                  <p className="jiz-insights-portrait-note">
                    Technology becomes meaningful when
                    judgment, context, and human experience
                    remain part of the same system.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="jiz-insights-cards">
            {posts.map(function (post, index) {
              return (
                <Reveal
                  key={post.title}
                  delay={140 + index * 90}
                  style={{
                    minWidth: 0,
                    height: '100%',
                  }}
                >
                  <div className="jiz-insight-card-wrap">
                    <article className="jiz-insight-card">
                      <div className="jiz-insight-card-main">
                        <span className="jiz-insight-card-index">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <span className="jiz-insight-card-label">
                          {post.label}
                        </span>

                        <h3 className="jiz-insight-card-title">
                          {post.title}
                        </h3>
                      </div>

                      <div className="jiz-insight-card-secondary">
                        <p className="jiz-insight-card-summary">
                          {post.summary}
                        </p>

                        <p className="jiz-insight-card-takeaway">
                          {post.takeaway}
                        </p>
                      </div>
                    </article>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function LetsBuild({ onExploreWork }) {
  const PROJECT_TYPES = ['Learning Experience', 'AI Strategy', 'Creative Production', 'Enterprise Transformation', 'Product Adoption', 'Consulting'];
  const TIMELINES = ['Exploring', 'Within 30 Days', '1–3 Months', '3+ Months'];
  const BUDGETS = ['Not Established', 'Under $10k', '$10k–25k', '$25k–50k', '$50k+'];
  const REFERRALS = ['LinkedIn', 'Referral', 'Google Search', 'Previous Colleague', 'Conference or Event', 'Other'];
  const [form, setForm] = React.useState({ name: '', email: '', org: '', types: [], detail: '', timeline: '', budget: '', referral: '' });
  const [formStatus, setFormStatus] = React.useState('idle');
  const [formMessage, setFormMessage] = React.useState('');
  const statusRef = React.useRef(null);
  const inFlightRef = React.useRef(false);
  const mountedRef = React.useRef(true);
  React.useEffect(() => () => { mountedRef.current = false; }, []);
  React.useEffect(() => {
    if ((formStatus === 'success' || formStatus === 'error') && statusRef.current) statusRef.current.focus();
  }, [formStatus]);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const toggleType = (t) => setForm((f) => ({ ...f, types: f.types.includes(t) ? f.types.filter((x) => x !== t) : f.types.concat(t) }));
  const handleSubmit = async function (event) {
    event.preventDefault();
    if (inFlightRef.current) return;
    const formEl = event.currentTarget;
    if (form.types.length === 0) {
      setFormStatus('error');
      setFormMessage('Select at least one project type so I can route your inquiry correctly.');
      return;
    }
    const formData = new FormData(formEl);
    inFlightRef.current = true;
    setFormStatus('submitting');
    setFormMessage('');
    formData.append('access_key', 'be51b404-7cd3-43c5-afaf-5b52369eb150');
    formData.append('subject', 'New Portfolio Project Inquiry');
    formData.append('from_name', 'Jonathan Zamarripa Portfolio');
    let ok = false;
    let notice = 'Something interrupted the submission. Please try again.';
    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      let data = null;
      try { data = await response.json(); } catch (parseError) { data = null; }
      if (response.ok && data && data.success === true) {
        ok = true;
      } else if (data && typeof data.message === 'string' && data.message.length < 160) {
        notice = data.message;
      }
    } catch (networkError) {
      notice = 'The request could not reach the server. Check your connection and try again.';
    } finally {
      inFlightRef.current = false;
      if (mountedRef.current) {
        if (ok) {
          setFormStatus('success');
          setFormMessage('Your inquiry is on its way. I’ll be in touch soon.');
          formEl.reset();
          setForm({ name: '', email: '', org: '', types: [], detail: '', timeline: '', budget: '', referral: '' });
        } else {
          setFormStatus('error');
          setFormMessage(notice);
        }
      }
    }
  };



  return (
    <section className="jiz-build" data-lets-build="ready" aria-labelledby="jiz-build-title">
      <style>{`
        .jiz-build{position:relative;isolation:isolate;overflow:hidden;padding:clamp(104px,11vw,176px) var(--container-pad) clamp(96px,10vw,152px);background:radial-gradient(ellipse 74% 54% at 18% 8%,rgba(100,225,255,.094),transparent 66%),radial-gradient(ellipse 62% 50% at 88% 64%,rgba(198,242,58,.05),transparent 70%),linear-gradient(180deg,#121a1d 0%,#141d20 40%,#101619 100%)}
        .jiz-build::before{content:'';position:absolute;inset:0;z-index:-2;pointer-events:none;opacity:.12;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:80px 80px;-webkit-mask-image:radial-gradient(ellipse at 50% 30%,#000,transparent 76%);mask-image:radial-gradient(ellipse at 50% 30%,#000,transparent 76%)}
        .jiz-build-inner{position:relative;z-index:1;width:min(100%,1360px);margin-inline:auto}
        .jiz-build-head{display:flex;flex-direction:column;gap:clamp(22px,2.6vw,34px);margin-bottom:clamp(56px,6.5vw,92px)}
        .jiz-build-head-left{display:contents}
        .jiz-build-head-right{display:contents}
        .jiz-build-eyebrow{margin:0 0 14px;color:var(--color-accent-primary);font:var(--text-eyebrow);letter-spacing:var(--tracking-eyebrow);text-transform:uppercase}
        .jiz-build-title{margin:0 0 24px;color:var(--color-text-primary);font:var(--text-h2);font-size:clamp(2.6rem,5.2vw,5.2rem);line-height:1.04;letter-spacing:-.042em;text-wrap:balance}
        .jiz-build-sub{margin:0;color:var(--color-text-secondary);font:var(--text-body-lg);font-size:clamp(1.05rem,1.25vw,1.2rem);line-height:1.72}
        .jiz-build-stage{display:grid;grid-template-columns:minmax(360px,.98fr) minmax(0,1.02fr);gap:clamp(22px,2.6vw,34px);align-items:stretch}
        .jiz-build-film{position:relative;overflow:visible;border-radius:0;min-height:clamp(420px,44vw,620px);background:transparent;order:2}
        .jiz-build-film::after{content:'';position:absolute;inset:0;pointer-events:none;background:linear-gradient(90deg,rgba(18,26,29,1) 0%,transparent 22%,transparent 78%,rgba(18,26,29,1) 100%),linear-gradient(180deg,rgba(18,26,29,.6) 0%,transparent 12%,transparent 88%,rgba(18,26,29,1) 100%);z-index:2}
        .jiz-build-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 38%;opacity:0.82}
        .jiz-build-film::before{content:'';position:absolute;inset:0;z-index:1;pointer-events:none;background:radial-gradient(ellipse 68% 42% at 22% 8%,rgba(100,225,255,.035),transparent 66%),radial-gradient(ellipse 58% 46% at 84% 78%,rgba(198,242,58,.018),transparent 68%);opacity:0.7}
        .jiz-build-film-copy{position:absolute;z-index:2;left:clamp(22px,3vw,40px);right:clamp(22px,3vw,40px);bottom:clamp(24px,3vw,40px);max-width:460px}
        .jiz-build-film-label{margin:0 0 10px;color:var(--color-accent-secondary);font:var(--text-hud);letter-spacing:.14em;text-transform:uppercase}
        .jiz-build-film-line{margin:0;color:var(--color-text-primary);font:var(--text-body);font-size:clamp(1rem,1.3vw,1.15rem);line-height:1.6;text-shadow:0 2px 18px rgba(0,0,0,.6)}
        .jiz-build-form{display:flex;flex-direction:column;padding:clamp(28px,3.2vw,44px);border:1px solid rgba(255,255,255,.075);border-radius:clamp(22px,2.4vw,32px);background:linear-gradient(180deg,rgba(255,255,255,.055),rgba(255,255,255,.018));box-shadow:0 34px 90px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.05);backdrop-filter:blur(20px);order:1}
        .jiz-build-form h3{margin:0 0 6px;color:var(--color-text-primary);font:var(--text-h3);font-size:clamp(1.5rem,2vw,1.9rem);letter-spacing:-.03em}
        .jiz-build-form-note{margin:0 0 22px;color:var(--color-text-muted);font:var(--text-caption)}
        .jiz-build-fields{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .jiz-build-field{display:flex;flex-direction:column;gap:6px}
        .jiz-build-field.jiz-span{grid-column:1/-1}
        .jiz-build-label{color:var(--color-accent-secondary);font:var(--text-hud);font-size:.625rem;letter-spacing:.1em;text-transform:uppercase}
        .jiz-build-input,.jiz-build-area{width:100%;box-sizing:border-box;min-height:46px;padding:12px 14px;border:1px solid rgba(255,255,255,.1);border-radius:14px;background:rgba(8,13,15,.5);color:var(--color-text-primary);font:var(--text-body);font-size:.9375rem;transition:border-color var(--motion-fast) var(--ease-standard),background var(--motion-fast) var(--ease-standard)}
        .jiz-build-area{min-height:92px;resize:vertical;line-height:1.55}
        .jiz-build-input::placeholder,.jiz-build-area::placeholder{color:rgba(245,247,248,.32)}
        .jiz-build-input:focus,.jiz-build-area:focus{outline:none;border-color:rgba(198,242,58,.5);background:rgba(198,242,58,.035)}
        .jiz-build-chips{display:flex;flex-wrap:wrap;gap:8px}
        .jiz-build-chip{min-height:38px;padding:0 14px;border:1px solid rgba(255,255,255,.11);border-radius:var(--radius-pill);background:rgba(255,255,255,.028);color:var(--color-text-secondary);font:var(--text-caption);cursor:pointer;transition:all var(--motion-fast) var(--ease-standard)}
        .jiz-build-chip:hover{border-color:rgba(255,255,255,.2);background:rgba(255,255,255,.045);color:var(--color-text-primary)}
        .jiz-build-chip[aria-pressed="true"]{border-color:rgba(198,242,58,.55);background:rgba(198,242,58,.1);color:var(--color-text-primary)}
        .jiz-build-chip:focus-visible,.jiz-build-submit:focus-visible,.jiz-build-tile:focus-visible{outline:2px solid var(--color-accent-primary);outline-offset:3px}
        .jiz-build-submit{margin-top:22px;min-height:52px;padding:0 26px;border:none;border-radius:var(--radius-pill);background:var(--color-accent-primary);color:var(--color-on-accent);font:var(--text-button);cursor:pointer;transition:transform var(--motion-fast) var(--ease-standard),box-shadow var(--motion-fast) var(--ease-standard)}
        .jiz-build-submit:hover:not(:disabled){background:var(--color-accent-primary-hover);box-shadow:0 10px 26px rgba(198,242,58,.16)}
        .jiz-build-submit:disabled{opacity:.55;cursor:not-allowed;box-shadow:none}
        .jiz-build-fieldset{min-width:0;margin:0;padding:0;border:0}
        .jiz-build-fieldset legend{padding:0;margin-bottom:6px}
        .jiz-build-status{margin:12px 0 0;min-height:0;text-align:center;font:var(--text-caption);line-height:1.55}
        .jiz-build-status:empty{display:none}
        .jiz-build-status.jiz-is-success{padding:12px 14px;border:1px solid rgba(198,242,58,.42);border-radius:14px;background:rgba(198,242,58,.09);color:var(--color-text-primary)}
        .jiz-build-status.jiz-is-error{padding:12px 14px;border:1px solid rgba(255,150,120,.42);border-radius:14px;background:rgba(255,150,120,.09);color:#ffcbb8}
        .jiz-build-status:focus-visible{outline:2px solid var(--color-accent-primary);outline-offset:3px}
        .jiz-build-status-tag{font-weight:700;letter-spacing:.02em}
        .jiz-build-privacy{margin:14px 0 0;text-align:center;color:var(--color-text-muted);font:var(--text-caption);font-size:.75rem;line-height:1.5}
        .jiz-build-form-direct{margin:14px 0 0;text-align:center;color:var(--color-text-muted);font:var(--text-caption)}
        .jiz-build-form-direct a{color:var(--color-accent-primary);text-decoration:none}
        .jiz-build-form-direct a:hover{text-decoration:underline}
        .jiz-build-rail{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(14px,1.6vw,20px);margin-top:clamp(30px,3.4vw,48px)}
        .jiz-build-tile{display:block;padding:clamp(22px,2.4vw,30px);border:1px solid rgba(255,255,255,.075);border-radius:20px;background:linear-gradient(180deg,rgba(255,255,255,.05) 0%,rgba(255,255,255,.024) 30%,rgba(255,255,255,.014));text-decoration:none;backdrop-filter:blur(16px);transition:transform var(--motion-fast) var(--ease-standard),border-color var(--motion-fast) var(--ease-standard),background var(--motion-fast) var(--ease-standard)}
        .jiz-build-tile:hover{border-color:rgba(255,255,255,.155);background:linear-gradient(180deg,rgba(255,255,255,.062) 0%,rgba(255,255,255,.028) 30%,rgba(255,255,255,.014) 100%)}
        .jiz-build-tile-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}
        .jiz-build-tile-name{color:var(--color-text-primary);font:var(--text-body);font-weight:650;font-size:1rem}
        .jiz-build-tile-arrow{color:var(--color-accent-secondary);font-size:.95rem}
        .jiz-build-tile-desc{margin:0;color:var(--color-text-secondary);font:var(--text-caption);line-height:1.6}
        .jiz-build-tile-icon{display:block;margin-bottom:16px;color:var(--color-accent-primary);transition:transform var(--motion-fast) var(--ease-standard),color var(--motion-fast) var(--ease-standard)}
        .jiz-build-tile:hover .jiz-build-tile-icon{transform:scale(1.08);color:var(--color-accent-secondary)}
        
        
        
        
        
        
        @media(max-width:1040px){.jiz-build-stage{grid-template-columns:1fr}.jiz-build-film{min-height:clamp(300px,52vw,460px)}}
        @media(max-width:820px){.jiz-build-rail{grid-template-columns:1fr}}
        @media(max-width:680px){.jiz-build-title{max-width:100%}.jiz-build-sub{max-width:100%}}
        @media(max-width:520px){.jiz-build-fields{grid-template-columns:1fr}}
        @media(prefers-reduced-motion:reduce){.jiz-build-tile,.jiz-build-submit,.jiz-build-chip{transition:none}}
      `}</style>
      <div className="jiz-build-inner">
        <header className="jiz-build-head">
          <p className="jiz-build-eyebrow">Let's build what's next</p>
          <h2 id="jiz-build-title" className="jiz-build-title">Have a complex problem worth making clear?</h2>
          <p className="jiz-build-sub">I partner with teams navigating complex learning, technology, adoption, and transformation challenges. Tell me what you're trying to change, where the friction lives, and what success should make possible.</p>
        </header>

        <div className="jiz-build-stage">
          <div className="jiz-build-film">
            <video className="jiz-build-video" data-build-film autoPlay muted loop playsInline preload="metadata" aria-hidden="true" tabIndex="-1">
              <source src="./assets/video/Jonathan_Planning.mp4" type="video/mp4" />
            </video>
            <div className="jiz-build-film-copy">
              <p className="jiz-build-film-label">From ambiguity to direction</p>
              <p className="jiz-build-film-line">Strategy becomes tangible when the problem can be seen, mapped, tested, and refined.</p>
            </div>
          </div>

          <form className="jiz-build-form" data-build-form="ready" onSubmit={handleSubmit} aria-busy={formStatus === 'submitting'}>
            <h3>Start a Project</h3>
            <p className="jiz-build-form-note">A few details are enough to begin a useful conversation.</p>
            <div className="jiz-build-fields">
              <div className="jiz-build-field">
                <label className="jiz-build-label" htmlFor="jiz-build-name">Name <span aria-hidden="true">*</span></label>
                <input className="jiz-build-input" id="jiz-build-name" name="name" type="text" required value={form.name} onChange={set('name')} placeholder="Your name" autoComplete="name" />
              </div>
              <div className="jiz-build-field">
                <label className="jiz-build-label" htmlFor="jiz-build-email">Work email <span aria-hidden="true">*</span></label>
                <input className="jiz-build-input" id="jiz-build-email" name="email" type="email" required value={form.email} onChange={set('email')} placeholder="you@company.com" autoComplete="email" />
              </div>
              <div className="jiz-build-field jiz-span">
                <label className="jiz-build-label" htmlFor="jiz-build-org">Organization</label>
                <input className="jiz-build-input" id="jiz-build-org" name="organization" type="text" value={form.org} onChange={set('org')} placeholder="Company or team" autoComplete="organization" />
              </div>
              <fieldset className="jiz-build-field jiz-span jiz-build-fieldset">
                <legend className="jiz-build-label">Project type <span aria-hidden="true">*</span></legend>
                <div className="jiz-build-chips">
                  {PROJECT_TYPES.map((t) => (
                    <button key={t} type="button" className="jiz-build-chip" aria-pressed={form.types.indexOf(t) !== -1} onClick={() => toggleType(t)}>{t}</button>
                  ))}
                </div>
              </fieldset>
              <div className="jiz-build-field jiz-span">
                <label className="jiz-build-label" htmlFor="jiz-build-detail">What are you trying to make clearer, easier, or more effective? <span aria-hidden="true">*</span></label>
                <textarea className="jiz-build-area" id="jiz-build-detail" name="challenge" required value={form.detail} onChange={set('detail')} placeholder="The change you're after, the friction in the way, what success looks like." />
              </div>
              <fieldset className="jiz-build-field jiz-span jiz-build-fieldset">
                <legend className="jiz-build-label">Timeline</legend>
                <div className="jiz-build-chips">
                  {TIMELINES.map((t) => (
                    <button key={t} type="button" className="jiz-build-chip" aria-pressed={form.timeline === t} onClick={() => setForm((f) => ({ ...f, timeline: f.timeline === t ? '' : t }))}>{t}</button>
                  ))}
                </div>
              </fieldset>
              <fieldset className="jiz-build-field jiz-span jiz-build-fieldset">
                <legend className="jiz-build-label">Budget</legend>
                <div className="jiz-build-chips">
                  {BUDGETS.map((b) => (
                    <button key={b} type="button" className="jiz-build-chip" aria-pressed={form.budget === b} onClick={() => setForm((f) => ({ ...f, budget: f.budget === b ? '' : b }))}>{b}</button>
                  ))}
                </div>
              </fieldset>
              <fieldset className="jiz-build-field jiz-span jiz-build-fieldset">
                <legend className="jiz-build-label">How did you hear about me?</legend>
                <div className="jiz-build-chips">
                  {REFERRALS.map((r) => (
                    <button key={r} type="button" className="jiz-build-chip" aria-pressed={form.referral === r} onClick={() => setForm((f) => ({ ...f, referral: f.referral === r ? '' : r }))}>{r}</button>
                  ))}
                </div>
              </fieldset>
            </div>

            <input type="hidden" name="project_type" value={form.types.join(', ')} />
            <input type="hidden" name="timeline" value={form.timeline} />
            <input type="hidden" name="budget" value={form.budget} />
            <input type="hidden" name="referral_source" value={form.referral} />

            <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
              <label htmlFor="jiz-botcheck">Leave this field empty</label>
              <input id="jiz-botcheck" type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
            </div>

            <button className="jiz-build-submit" type="submit" disabled={formStatus === 'submitting'} aria-busy={formStatus === 'submitting'}>
              {formStatus === 'submitting' ? 'Sending…' : 'Start the Conversation →'}
            </button>

            <p
              ref={statusRef}
              tabIndex={-1}
              className={'jiz-build-status' + (formStatus === 'success' ? ' jiz-is-success' : formStatus === 'error' ? ' jiz-is-error' : '')}
              role={formStatus === 'error' ? 'alert' : 'status'}
              aria-live={formStatus === 'error' ? 'assertive' : 'polite'}
              aria-atomic="true"
            >
              {formMessage ? (
                <React.Fragment>
                  <strong className="jiz-build-status-tag">{formStatus === 'success' ? 'Sent' : 'Not sent'}</strong>
                  {' '}{formMessage}
                </React.Fragment>
              ) : ''}
            </p>

            <p className="jiz-build-privacy">Your details are used only to respond to this inquiry. No mailing lists. No unsolicited follow-up.</p>
            <p className="jiz-build-form-direct">Prefer email? <a href="mailto:jonathan.zamarripa@gmail.com">jonathan.zamarripa@gmail.com</a></p>
          </form>
        </div>

        <div className="jiz-build-rail">
          <a className="jiz-build-tile" href="https://www.linkedin.com/in/jonathanzamarripa/" target="_blank" rel="noopener noreferrer" aria-label="Connect on LinkedIn">
            <svg className="jiz-build-tile-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span className="jiz-build-tile-top"><span className="jiz-build-tile-name">Connect on LinkedIn</span><span className="jiz-build-tile-arrow" aria-hidden="true">↗</span></span>
            <p className="jiz-build-tile-desc">Follow current work and connect professionally.</p>
          </a>
          <a className="jiz-build-tile" href="https://elearningportfolio-jz.s3.us-east-1.amazonaws.com/Public_Career_Overview.pdf" target="_blank" rel="noopener noreferrer" aria-label="Explore My Experience">
            <svg className="jiz-build-tile-icon" viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 4h10l8 8v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
              <path d="M16 4v8h8M9 18h6M9 22h8" />
            </svg>
            <span className="jiz-build-tile-top"><span className="jiz-build-tile-name">Explore My Experience</span><span className="jiz-build-tile-arrow" aria-hidden="true">↗</span></span>
            <p className="jiz-build-tile-desc">Review professional background and capabilities.</p>
          </a>
          <div className="jiz-build-tile jiz-build-tile-email" onClick={() => { const form = document.querySelector('form[data-build-form]'); if (form) form.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} style={{ cursor: 'pointer' }} role="button" tabIndex="0" aria-label="Start a Conversation — click to scroll to contact form" onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { const form = document.querySelector('form[data-build-form]'); if (form) form.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }}>
            <svg className="jiz-build-tile-icon" viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h24a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
              <path d="M2 8l14 10 14-10" />
              <path d="M12 18l-6 6M20 18l6 6" />
            </svg>
            <span className="jiz-build-tile-top"><span className="jiz-build-tile-name">Start a Conversation</span><span className="jiz-build-tile-arrow" aria-hidden="true">↗</span></span>
            <p className="jiz-build-tile-desc">Reach out directly about projects and opportunities.</p>
            <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,.1)', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <a href="mailto:jonathan.zamarripa@gmail.com?subject=Let%27s%20Build%20Something%20Great%20Together&body=Hi%20Jonathan%2C%0A%0AI%20enjoyed%20exploring%20your%20portfolio%20and%20wanted%20to%20reach%20out%20regarding%20a%20potential%20opportunity.%0A%0AI%27d%20love%20to%20connect%20and%20learn%20more%20about%20your%20work.%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ABest%2C" aria-label="Email Jonathan" style={{ fontSize: '0.8125rem', color: 'var(--color-accent-secondary)', textDecoration: 'underline', flex: '1 1 auto' }}>Email</a>
              <button type="button" onClick={(e) => { e.stopPropagation(); navigator.clipboard.writeText('jonathan.zamarripa@gmail.com').then(() => { const btn = e.target; const orig = btn.textContent; btn.textContent = 'Copied!'; setTimeout(() => { btn.textContent = orig; }, 2000); }).catch(() => { alert('jonathan.zamarripa@gmail.com'); }); }} aria-label="Copy email address" style={{ fontSize: '0.8125rem', color: 'var(--color-accent-secondary)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, textDecoration: 'underline' }}>Copy</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function FinalMoment({ onNavigate }) {
  const [lit, setLit] = React.useState(false);
  const ref = React.useRef(null);
  const reduced = prefersReduced();
  const NAV = [['About', 1], ['Featured Work', 2], ['Creative Lab', 3], ['Insights', 4], ["Let's Build", 5]];
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setLit(true); }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const toTop = () => window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  return (
    <footer ref={ref} className="jiz-footer" data-footer="ready">
      <style>{`
        .jiz-footer{position:relative;isolation:isolate;overflow:hidden;padding:clamp(64px,7vw,104px) var(--container-pad) clamp(36px,4vw,56px);background:radial-gradient(ellipse at 14% 6%,rgba(100,225,255,.32),transparent 46%),radial-gradient(ellipse at 88% 88%,rgba(255,255,255,.28),transparent 42%),linear-gradient(165deg,#d4f24a 0%,#c6f23a 46%,#aade34 100%);color:#0d1410}
        .jiz-footer::before{content:'';position:absolute;inset:0;z-index:-1;pointer-events:none;opacity:.16;background-image:linear-gradient(rgba(13,20,16,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(13,20,16,.4) 1px,transparent 1px);background-size:72px 72px;-webkit-mask-image:radial-gradient(ellipse at 50% 40%,#000,transparent 78%);mask-image:radial-gradient(ellipse at 50% 40%,#000,transparent 78%)}
        .jiz-footer-inner{max-width:1360px;position:relative;z-index:1;width:min(100%,1240px);margin-inline:auto;text-align:center}
        .jiz-footer-mark{display:grid;place-items:center;margin:0 auto clamp(24px,3vw,34px)}
        .jiz-footer-logo{width:96px;height:96px;object-fit:contain;filter:brightness(0)}
        
        .jiz-footer-name{margin:0 0 8px;color:#0d1410;font:var(--text-h3);font-size:clamp(1.55rem,2.6vw,2.35rem);letter-spacing:-.035em}
        .jiz-footer-disciplines{margin:0 0 clamp(30px,3.4vw,44px);color:rgba(13,20,16,.72);font:var(--text-body);font-size:clamp(.9rem,1.1vw,1.02rem);letter-spacing:.01em}
        .jiz-footer-nav{display:flex;flex-wrap:wrap;justify-content:center;gap:clamp(6px,1vw,12px);margin-bottom:clamp(26px,3vw,38px)}
        .jiz-footer-nav button{min-height:44px;padding:0 16px;border:1px solid transparent;border-radius:var(--radius-pill);background:transparent;color:rgba(13,20,16,.82);font:var(--text-body);font-size:.9375rem;font-weight:600;cursor:pointer;transition:all var(--motion-fast) var(--ease-standard)}
        .jiz-footer-nav button:hover{border-color:rgba(13,20,16,.26);background:rgba(13,20,16,.07);color:#0d1410}
        
        
        
        .jiz-footer-top{min-height:48px;padding:0 22px;border:1px solid rgba(13,20,16,.24);border-radius:var(--radius-pill);background:rgba(13,20,16,.9);color:#e8f7c4;font:var(--text-button);cursor:pointer;transition:all var(--motion-fast) var(--ease-standard)}
        .jiz-footer-top:hover{transform:translateY(-2px);box-shadow:0 16px 32px rgba(13,20,16,.26)}
        .jiz-footer-rule{height:1px;margin:clamp(32px,3.6vw,46px) auto 0;background:linear-gradient(90deg,transparent,rgba(13,20,16,.24),transparent)}
        .jiz-footer-meta{display:flex;flex-direction:column;gap:6px;margin-top:clamp(22px,2.4vw,30px)}
        .jiz-footer-copy{color:rgba(13,20,16,.78);font:var(--text-caption)}
        .jiz-footer-credit{color:rgba(13,20,16,.6);font:var(--text-caption);font-style:italic}
        .jiz-footer-tech{color:rgba(13,20,16,.48);font:var(--text-hud);font-size:.625rem;letter-spacing:.14em;text-transform:uppercase}
        .jiz-footer-nav button:focus-visible,.jiz-footer-top:focus-visible{outline:2px solid #0d1410;outline-offset:3px}
        
        @media(prefers-reduced-motion:reduce){.jiz-footer-top,.jiz-footer-nav button{transition:none}.jiz-footer-top:hover{transform:none}}
      `}</style>
      <div className="jiz-footer-inner">
        <div className="jiz-footer-mark">
          <img className="jiz-footer-logo" src="./assets/logo/jiz-logo-white.svg" alt="Jonathan Iker Zamarripa logo" />
        </div>
        <p className="jiz-footer-name">Jonathan Iker Zamarripa</p>
        <p className="jiz-footer-disciplines">Learning Experience Design • AI Strategy • Digital Transformation</p>
        <nav className="jiz-footer-nav" aria-label="Footer">
          {NAV.map(([label, index]) => (
            <button key={label} type="button" onClick={() => onNavigate && onNavigate(index)}>{label}</button>
          ))}
        </nav>
        <button className="jiz-footer-top" type="button" onClick={toTop}>↑ Back to Top</button>
        <div className="jiz-footer-rule" aria-hidden="true" />
        <div className="jiz-footer-meta">
          <span className="jiz-footer-copy">© 2026 Jonathan Iker Zamarripa. All rights reserved.</span>
          <span className="jiz-footer-credit">Designed with curiosity. Built with AI. Guided by human judgment.</span>
          <span className="jiz-footer-tech">React • Accessibility First • Responsive • Motion Designed</span>
        </div>
      </div>
    </footer>
  );
}

function Homepage({ onOpenCaseStudy }) {
  const { NavBar, Button } = window.JIZPortfolioSite_b3ba38;
  const sectionRefs = React.useRef([]);
  const [activeSection, setActiveSection] = React.useState(0);
  const reduced = prefersReduced();

  const navItems = ['About', 'Featured Work', 'Creative Lab', 'Insights'];
  const sectionLabels = ['Hero', 'About', 'Featured Work', 'Creative Lab', 'Insights', "Let's Build"];
  const sectionMap = React.useMemo(() => ({
    Home: 0,
    Hero: 0,
    About: 1,
    'Featured Work': 2,
    Work: 2,
    'Creative Lab': 3,
    Film: 3,
    Insights: 4,
    Contact: 5,
    "Let's Build": 5,
  }), []);

  const registerSection = React.useCallback((index) => (element) => {
    sectionRefs.current[index] = element;
  }, []);

  const scrollToSection = React.useCallback((index) => {
    const target = sectionRefs.current[index];
    if (!target) return;
    target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    setActiveSection(index);
  }, [reduced]);

  React.useEffect(() => {
    const rawTarget = sessionStorage.getItem('jiz-target-section');
    if (rawTarget === null) return undefined;
    sessionStorage.removeItem('jiz-target-section');
    const target = Number.parseInt(rawTarget, 10);
    if (!Number.isInteger(target) || target < 0 || target >= sectionLabels.length) return undefined;
    const timer = window.setTimeout(() => scrollToSection(target), reduced ? 0 : 280);
    return () => window.clearTimeout(timer);
  }, [reduced, scrollToSection, sectionLabels.length]);

  React.useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      const onScroll = () => {
        let current = 0;
        sectionRefs.current.forEach((element, index) => {
          if (element && element.getBoundingClientRect().top <= window.innerHeight * 0.48) current = index;
        });
        setActiveSection(current);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener('scroll', onScroll);
    }

    const visibility = new Map();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => visibility.set(Number(entry.target.dataset.sectionIndex), entry.intersectionRatio));
      let bestIndex = 0;
      let bestRatio = -1;
      visibility.forEach((ratio, index) => {
        if (ratio > bestRatio) { bestRatio = ratio; bestIndex = index; }
      });
      setActiveSection(bestIndex);
    }, { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.15, 0.35, 0.6] });

    sectionRefs.current.forEach((element, index) => {
      if (!element) return;
      element.dataset.sectionIndex = String(index);
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const activeNavLabel = sectionLabels[activeSection] || 'About';
  const openLinkedIn = () => window.open('https://www.linkedin.com/in/jonathanzamarripa/', '_blank', 'noopener,noreferrer');

  return (
    <div className="jiz-homepage" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#080D0B', position: 'relative', zIndex: 1 }}>
      <NavBar
        items={navItems}
        active={activeNavLabel}
        onNavigate={(item) => {
          const targetIndex = sectionMap[item];
          if (targetIndex !== undefined) scrollToSection(targetIndex);
          else window.jizNavigate?.(item);
        }}
        onConnect={() => scrollToSection(5)}
      />

      <main style={{ flex: 1, position: 'relative', zIndex: 1, overflow: 'visible' }}>

        <div ref={registerSection(0)}><Hero onExploreWork={() => scrollToSection(2)} onConnect={() => scrollToSection(5)} /></div>
        <div ref={registerSection(1)} data-section="about">{window.AboutV2 ? <window.AboutV2 /> : <div role="status" data-about-loading style={{ padding: 32, color: 'var(--color-text-secondary)' }}>Loading About experience…</div>}</div>
        <div ref={registerSection(2)} data-section="featured-work"><FeaturedWork onOpenWork={onOpenCaseStudy} /></div>
        <div ref={registerSection(3)}><FilmSection /></div>
        <div ref={registerSection(4)}><Insights /></div>

        <div ref={registerSection(5)}>
          <LetsBuild onExploreWork={() => scrollToSection(2)} />
          <FinalMoment onNavigate={scrollToSection} />
        </div>
      </main>
    </div>
  );
}

window.HomepageExports = { Homepage };