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

function scrollToY(top) {
  const scroller = document.scrollingElement || document.documentElement;
  const height = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight, scroller.scrollHeight);
  const target = Math.max(0, Math.min(top, Math.max(0, height - window.innerHeight)));
  window.scrollTo(0, target);
  if (scroller.scrollTop !== target) scroller.scrollTop = target;
}

function navOffset() {
  const nav = document.querySelector('nav.jiz-global-nav');
  const h = nav ? nav.getBoundingClientRect().height : 0;
  return (h > 0 ? h : 98) + 12;
}

function scrollToElement(el, offset) {
  if (!el) return;
  scrollToY(el.getBoundingClientRect().top + window.scrollY - (offset || 0));
}

function ChromaKeyVideo({ src, className, style }) {
  const videoRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    const video = videoRef.current, canvas = canvasRef.current;
    if (!video || !canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    let raf, isVisible = true, last = 0;
    const MAX_W = 640, FRAME_MS = 1000 / 30;
    const io = new IntersectionObserver((entries) => { isVisible = entries[0].isIntersecting; }, { threshold: 0.01 });
    io.observe(canvas);
    const draw = (now) => {
      raf = requestAnimationFrame(draw);
      if (!isVisible || video.paused || video.ended || !video.videoWidth) return;
      if (now - last < FRAME_MS) return;
      last = now;
      const scale = Math.min(1, MAX_W / video.videoWidth);
      const w = Math.round(video.videoWidth * scale), h = Math.round(video.videoHeight * scale);
      if (canvas.width !== w) { canvas.width = w; canvas.height = h; }
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

function LearningPathways() {
  return (
    <svg className="hero-pathways" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="jz-path-a" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(198,242,58,0)" />
          <stop offset="45%" stopColor="rgba(198,242,58,0.42)" />
          <stop offset="100%" stopColor="rgba(115,224,255,0.18)" />
        </linearGradient>
        <linearGradient id="jz-path-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(115,224,255,0)" />
          <stop offset="50%" stopColor="rgba(115,224,255,0.3)" />
          <stop offset="100%" stopColor="rgba(198,242,58,0.14)" />
        </linearGradient>
      </defs>
      <g fill="none" strokeWidth="1.1">
        <path className="hero-path hero-path--1" stroke="url(#jz-path-a)" d="M-40 610 C 240 610, 300 420, 520 420 S 760 300, 1240 250" />
        <path className="hero-path hero-path--2" stroke="url(#jz-path-b)" d="M-40 720 C 280 720, 360 560, 600 540 S 880 520, 1240 400" />
        <path className="hero-path hero-path--3" stroke="url(#jz-path-a)" d="M-40 480 C 200 470, 320 300, 560 268 S 900 210, 1240 120" />
      </g>
      <g className="hero-nodes">
        {[[900,330],[1010,214]].map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r="3" style={{ animationDelay: (i * 2.4) + 's' }} />
        ))}
      </g>
    </svg>
  );
}

function Hero({ onExploreWork, onConnect }) {
  const { Button, StatusPill } = window.JIZPortfolioSite_b3ba38;
  const RESUME_URL = 'https://elearningportfolio-jz.s3.us-east-1.amazonaws.com/Public_Career_Overview.pdf';
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
        <div className="hero-mesh" />
        <LearningPathways />
        <div className="hero-ambient-glow hero-ambient-glow--blue" />
        <div className="hero-ambient-glow hero-ambient-glow--chartreuse" />
      </div>

      <div className="hero-content">
        <div className="hero-text-scrim" aria-hidden="true" />
        <div className="hero-copy">
          <h1 className="hero-title hero-fade hero-fade--2">Learning Experience Designer<br />for <span className="hero-title-accent">Enterprise Transformation</span></h1>
          <p className="hero-lead hero-fade hero-fade--3">I turn complex technology, leadership, and business change into learning experiences people can understand, adopt, and act on.</p>
          <p className="hero-support hero-fade hero-fade--4">Senior LXD <span className="hero-dot">•</span> Product Enablement <span className="hero-dot">•</span> Leadership Development <span className="hero-dot">•</span> AI Strategy</p>
          <div className="hero-actions hero-fade hero-fade--5">
            <Button variant="primary" onClick={onExploreWork}>View Work</Button>
            <Button variant="secondary" icon={false} onClick={() => window.open(RESUME_URL, '_blank', 'noopener')}>Download Resume</Button>
          </div>
        </div>
      </div>

      <div className="hero-portrait-stage">
        <ChromaKeyVideo src="./assets/video/hero-portrait-green.mp4?v=4" className="hero-portrait" style={{ WebkitMaskImage: 'linear-gradient(to bottom,#000 62%,rgba(0,0,0,.9) 80%,transparent 98%),linear-gradient(to right,transparent 0%,#000 30%),linear-gradient(to left,transparent 0%,#000 20%),radial-gradient(ellipse 55% 45% at 8% 100%,transparent 0%,transparent 20%,#000 75%)', WebkitMaskComposite: 'source-in,source-in,source-in', maskImage: 'linear-gradient(to bottom,#000 62%,rgba(0,0,0,.9) 80%,transparent 98%),linear-gradient(to right,transparent 0%,#000 30%),linear-gradient(to left,transparent 0%,#000 20%),radial-gradient(ellipse 55% 45% at 8% 100%,transparent 0%,transparent 20%,#000 75%)', maskComposite: 'intersect' }} />
        <div aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '30%', background: 'linear-gradient(to top, rgba(198,242,58,0.26), rgba(198,242,58,0.07) 60%, transparent)', mixBlendMode: 'screen', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', right: '18%', top: '22%', width: '20%', height: '10%', background: 'radial-gradient(ellipse, rgba(198,242,58,0.9), transparent 70%)', mixBlendMode: 'screen', opacity: glassesFlash ? 0.85 : 0, transition: glassesFlash ? 'opacity 0.12s ease-out' : 'opacity 0.5s ease-in', pointerEvents: 'none' }} />
      </div>
      <div className="hero-portrait-vignette" aria-hidden="true" />
      <div className="hero-foreground-atmosphere" aria-hidden="true" />

      <style>{`
.hero{position:relative;isolation:isolate;overflow:hidden;width:100%;min-height:calc(100svh - 96px);background:radial-gradient(ellipse at 74% 42%,rgba(22,113,163,.16) 0%,rgba(20,74,91,.09) 30%,transparent 64%),radial-gradient(ellipse at 40% 54%,rgba(180,226,63,.055) 0%,transparent 52%)}
.hero-environment{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;background:transparent}
.hero-base-gradient{position:absolute;inset:0;background:linear-gradient(90deg,rgba(8,13,11,.96) 0%,rgba(10,18,15,.9) 42%,rgba(13,30,28,.84) 72%,rgba(8,18,17,.92) 100%)}
.hero-signal-field{position:absolute;inset:-8%;opacity:.14;background-image:radial-gradient(circle at 18% 48%,rgba(115,224,255,.09) 0 1px,transparent 2px),radial-gradient(circle at 42% 64%,rgba(197,255,45,.06) 0 1px,transparent 2px),radial-gradient(circle at 78% 38%,rgba(115,224,255,.1) 0 1px,transparent 2px);background-size:160px 140px,220px 180px,190px 170px}
.hero-ambient-glow{position:absolute;pointer-events:none;border-radius:50%;filter:blur(90px)}
.hero-ambient-glow--blue{width:min(72vw,1200px);height:min(72vw,1200px);right:-18vw;top:-16%;background:radial-gradient(circle,rgba(29,132,196,.2) 0%,rgba(24,91,126,.1) 38%,transparent 72%)}
.hero-ambient-glow--chartreuse{width:min(46vw,760px);height:min(38vw,640px);left:12%;bottom:-26%;background:radial-gradient(circle,rgba(197,255,45,.028) 0%,transparent 68%)}
.hero-content{position:relative;z-index:5;display:grid;align-items:center;width:min(1440px,calc(100% - 2*clamp(28px,6vw,112px)));min-height:calc(100svh - 96px);margin-inline:auto;padding-block:clamp(64px,7vw,104px)}
.hero-copy{position:relative;z-index:2;width:min(44vw,640px);margin-left:clamp(0px,1vw,20px)}
.hero-text-scrim{position:absolute;z-index:1;left:-8vw;top:0;bottom:0;width:min(80vw,1080px);pointer-events:none;background:linear-gradient(90deg,rgba(5,9,8,.92) 0%,rgba(5,9,8,.82) 44%,rgba(5,9,8,.4) 74%,transparent 100%),radial-gradient(ellipse 52% 42% at 18% 40%,rgba(4,8,7,.5),transparent 72%)}
.hero-eyebrow{margin-bottom:22px}
.hero-title{font:var(--text-display);font-weight:750;font-size:clamp(2.3rem,1.5rem + 2.3vw,4.05rem);line-height:1.02;letter-spacing:-.022em;text-wrap:balance;color:var(--color-text-primary);margin:0 0 30px}
.hero-title-accent{color:var(--color-accent-primary);font-weight:550;letter-spacing:-.012em}
.hero-lead{font:var(--text-body-lg);font-size:clamp(1.125rem,1rem + .45vw,1.4375rem);line-height:1.5;color:var(--color-text-primary);max-width:560px;margin:0 0 32px;text-wrap:pretty}
.hero-support{font:var(--text-body);font-size:clamp(.75rem,.72rem + .13vw,.875rem);line-height:1.6;letter-spacing:.038em;text-transform:uppercase;color:var(--color-text-secondary);max-width:none;margin:0;text-wrap:pretty}
.hero-dot{color:var(--color-accent-primary);opacity:.55;padding:0 5px}
@media(min-width:1180px){.hero-support{width:max-content;max-width:min(76vw,700px)}}
@media(min-width:1024px) and (max-width:1179.98px){.hero-support{width:max-content;max-width:min(66vw,620px)}}
.hero-actions{display:flex;flex-wrap:wrap;gap:14px;align-items:center;margin-top:44px}
.hero-mesh{position:absolute;inset:-10%;background:radial-gradient(ellipse 42% 38% at 22% 30%,rgba(29,132,196,.09) 0%,transparent 62%),radial-gradient(ellipse 36% 34% at 62% 74%,rgba(198,242,58,.04) 0%,transparent 64%),radial-gradient(ellipse 48% 40% at 84% 22%,rgba(115,224,255,.055) 0%,transparent 66%);filter:blur(36px);opacity:.7;animation:hero-mesh-drift 68s ease-in-out infinite alternate}
@keyframes hero-mesh-drift{0%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(-1%,.7%,0) scale(1.02)}100%{transform:translate3d(.8%,-.6%,0) scale(1.01)}}
.hero-pathways{position:absolute;inset:0;width:100%;height:100%;opacity:.27}
.hero-path{stroke-dasharray:26 320;stroke-dashoffset:0;animation:hero-path-flow 48s linear infinite}
.hero-path--2{animation-duration:62s;animation-delay:-14s;opacity:.7}
.hero-path--3{animation-duration:76s;animation-delay:-28s;opacity:.45}
@keyframes hero-path-flow{to{stroke-dashoffset:-1384}}
.hero-nodes circle{fill:rgba(198,242,58,.4);animation:hero-node-pulse 14s ease-in-out infinite}
@keyframes hero-node-pulse{0%,100%{opacity:.14;r:2.2}50%{opacity:.42;r:3}}
.hero-fade{opacity:0;animation:hero-fade-in 1s cubic-bezier(.22,.61,.36,1) forwards}
.hero-fade--1{animation-delay:.05s}.hero-fade--2{animation-delay:.2s}.hero-fade--3{animation-delay:.38s}.hero-fade--4{animation-delay:.54s}.hero-fade--5{animation-delay:.7s}.hero-fade--6{animation-delay:.86s}
@keyframes hero-fade-in{from{opacity:0;transform:translate3d(0,14px,0)}to{opacity:1;transform:none}}
.hero-portrait-stage{position:absolute;inset:0;z-index:3;overflow:visible;pointer-events:none;background:transparent;border:0;box-shadow:none}
.hero-portrait{position:absolute;z-index:2;right:clamp(8px,2vw,64px);bottom:-7%;width:clamp(400px,33vw,640px);height:114%;max-width:none;max-height:114%;object-fit:contain;object-position:right bottom;transform:translate3d(0,0,0);transform-origin:right bottom;pointer-events:auto;cursor:pointer;opacity:.78;filter:drop-shadow(-30px 6px 52px rgba(27,128,194,.2)) drop-shadow(-10px 0 30px rgba(49,165,223,.12));-webkit-mask-image:linear-gradient(to bottom,#000 46%,rgba(0,0,0,.85) 66%,transparent 96%),linear-gradient(to right,transparent 0%,#000 26%),linear-gradient(to left,transparent 0%,#000 14%),linear-gradient(to top,transparent 0%,#000 8%);-webkit-mask-composite:source-in,source-in,source-in;mask-image:linear-gradient(to bottom,#000 46%,rgba(0,0,0,.85) 66%,transparent 96%),linear-gradient(to right,transparent 0%,#000 26%),linear-gradient(to left,transparent 0%,#000 14%),linear-gradient(to top,transparent 0%,#000 8%);mask-composite:intersect}
.hero-portrait-backlight{position:absolute;right:-8vw;top:8%;width:min(68vw,1120px);height:min(72vw,1180px);border-radius:50%;background:radial-gradient(ellipse at 56% 46%,rgba(48,169,236,.23) 0%,rgba(26,111,162,.14) 26%,rgba(19,72,99,.07) 48%,transparent 74%);filter:blur(48px);opacity:.9}
.hero-portrait-edge-glow{position:absolute;inset:0;z-index:3;pointer-events:none;background:radial-gradient(ellipse at 74% 48%,rgba(47,166,227,.11) 0%,rgba(31,110,159,.06) 30%,transparent 62%);mix-blend-mode:screen;filter:blur(14px)}
.hero-portrait-vignette{position:absolute;z-index:5;right:0;bottom:0;width:52%;height:46%;pointer-events:none;background:radial-gradient(ellipse 78% 84% at 78% 96%,rgba(5,9,8,.62) 0%,rgba(5,9,8,.3) 46%,transparent 76%)}
.hero-portrait-haze{position:absolute;z-index:4;right:-2%;bottom:-3%;width:66%;height:58%;pointer-events:none;background:radial-gradient(ellipse at 68% 58%,rgba(54,160,204,.1) 0%,rgba(26,92,109,.06) 34%,transparent 70%),linear-gradient(90deg,transparent 10%,rgba(17,78,94,.04) 48%,transparent 92%);filter:blur(20px);mix-blend-mode:screen}
.hero-foreground-atmosphere{position:absolute;inset:0;z-index:4;pointer-events:none;background:radial-gradient(ellipse at 70% 66%,rgba(52,154,198,.075) 0%,transparent 44%),linear-gradient(90deg,transparent 34%,rgba(18,72,83,.03) 56%,transparent 88%);mix-blend-mode:screen}
@media(max-width:1180px){.hero-copy{width:min(50vw,520px);margin-left:clamp(24px,4vw,64px)}.hero-title{font-size:clamp(2.1rem,3.6vw,3rem)}.hero-lead{max-width:100%}.hero-text-scrim{left:-10vw;width:min(96vw,1120px);background:linear-gradient(90deg,rgba(6,10,9,.9) 0%,rgba(6,10,9,.84) 58%,rgba(6,10,9,.5) 82%,transparent 100%)}.hero-portrait{right:-150px;width:clamp(360px,44vw,700px);opacity:.62}}
@media(max-width:1023.98px){.hero-support{width:auto;max-width:100%}}
@media(max-width:900px){.hero{min-height:auto}.hero-content{min-height:auto;padding-top:92px;padding-bottom:520px}.hero-copy{width:min(100%,620px);margin-left:0}.hero-portrait{right:50%;bottom:-8px;width:min(640px,94vw);transform:translateX(50%)}.hero-portrait-backlight{right:50%;top:auto;bottom:-12%;width:100vw;height:640px;transform:translateX(50%)}.hero-portrait-haze{right:0;width:100%}}
@media(max-width:768px){.hero{min-height:auto}.hero-content{min-height:auto;padding-top:48px;padding-bottom:480px;grid-template-columns:1fr}.hero-copy{width:100%;margin-left:0;margin-right:0;position:relative;z-index:6}.hero-eyebrow{margin-bottom:18px}.hero-title{font-size:clamp(1.85rem,5.4vw,2.6rem);margin:0 0 22px}.hero-lead{font-size:clamp(1rem,3.4vw,1.1875rem);margin:0 0 24px;max-width:100%}.hero-support{font-size:.8125rem;max-width:100%;margin:0}.hero-actions{margin-top:32px;gap:12px}.hero-text-scrim{left:-12vw;width:130vw;background:linear-gradient(180deg,rgba(6,10,9,.86) 0%,rgba(6,10,9,.6) 70%,transparent 100%)}.hero-portrait-stage{z-index:2}.hero-portrait{position:absolute;right:50%;bottom:auto;top:480px;width:min(420px,85vw);height:auto;max-height:none;transform:translateX(50%);opacity:.9;filter:drop-shadow(-20px 4px 36px rgba(27,128,194,.18));mask-image:linear-gradient(to top,#000 0%,#000 70%,rgba(0,0,0,.8) 85%,transparent 100%),linear-gradient(to right,transparent 5%,#000 20%),linear-gradient(to left,transparent 5%,#000 15%);mask-composite:intersect}.hero-portrait-backlight{right:50%;top:480px;bottom:auto;width:120vw;height:420px;transform:translateX(50%);opacity:.5;filter:blur(40px)}.hero-portrait-haze{display:none}.hero-foreground-atmosphere{opacity:.3}}
@media(max-width:600px){.hero-content{padding-top:40px;padding-bottom:400px}.hero-title{font-size:clamp(1.7rem,6vw,2.25rem);margin:0 0 18px}.hero-lead{font-size:1.0625rem;margin:0 0 20px}.hero-support{font-size:.75rem}.hero-actions{margin-top:26px}.hero-eyebrow{margin-bottom:14px}.hero-portrait{top:400px;width:min(340px,80vw)}.hero-portrait-backlight{top:400px;height:340px}}
@media(prefers-reduced-motion:reduce){.hero-portrait{transform:none;transition:none}.hero-fade{opacity:1;animation:none}.hero-mesh,.hero-path,.hero-nodes circle{animation:none}}
      `}</style>
    </section>
  );
}

function ImpactMetric({ value, suffix, prefix, label, active, delay }) {
  const [shown, setShown] = React.useState(0);
  React.useEffect(() => {
    if (!active) return;
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setShown(value); return; }
    let raf = 0;
    const start = performance.now() + delay;
    const dur = 1400;
    const tick = (now) => {
      const t = Math.min(1, Math.max(0, (now - start) / dur));
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, value, delay]);
  return (
    <div className="jiz-impact-card" style={{ transitionDelay: delay + 'ms' }}>
      <div className="jiz-impact-value">{shown}{prefix}<span className="jiz-impact-suffix">{suffix}</span></div>
      <p className="jiz-impact-label">{label}</p>
    </div>
  );
}

function ImpactSnapshot() {
  const ref = React.useRef(null);
  const [active, setActive] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setActive(true); return; }
    const fallback = setTimeout(() => setActive(true), 1200);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { clearTimeout(fallback); setActive(true); io.disconnect(); } });
    }, { threshold: 0.25 });
    io.observe(el);
    return () => { clearTimeout(fallback); io.disconnect(); };
  }, []);
  const metrics = [
    { value: 98, suffix: '%', label: 'Platform adoption supported through targeted enablement' },
    { value: 40, suffix: '%', label: 'Faster content delivery using AI-enabled production workflows' },
    { value: 35, suffix: '%', label: 'Improvement in leadership capability outcomes contributed to through scenario-based design' },
    { value: 50, suffix: '%', label: 'Increase in executive visibility supported through learning analytics dashboards' },
    { value: 16, prefix: '+', suffix: ' Years', label: 'Designing learning experiences across corporate, technology, and education environments' }
  ];
  return (
    <section className="jiz-impact" ref={ref} data-in={active ? 'true' : 'false'} aria-labelledby="jiz-impact-title">
      <div className="jiz-impact-inner">
        <div className="jiz-impact-head">
          <h2 className="jiz-impact-title" id="jiz-impact-title">Selected Impact</h2>
          <p className="jiz-impact-sub">Enterprise learning outcomes across platform adoption, leadership development, digital transformation, and AI-enabled production.</p>
        </div>
        <div className="jiz-impact-grid">
          {metrics.map((m, i) => <ImpactMetric key={m.label} {...m} active={active} delay={260 + i * 130} />)}
        </div>
      </div>
      <style>{`
.jiz-impact{position:relative;background:linear-gradient(165deg,#CFF74A 0%,#C6F23A 46%,#B6E62C 100%);padding-block:clamp(60px,6vw,100px)}
.jiz-impact-inner{width:min(1440px,calc(100% - 2*clamp(24px,6vw,112px)));margin-inline:auto}
.jiz-impact-head{max-width:760px;margin-bottom:clamp(36px,3.6vw,56px);opacity:0;transform:translate3d(0,10px,0);transition:opacity 760ms cubic-bezier(.22,.61,.36,1),transform 760ms cubic-bezier(.22,.61,.36,1)}
.jiz-impact[data-in="true"] .jiz-impact-head{opacity:1;transform:none}
.jiz-impact-title{font:var(--text-display);font-size:clamp(1.7rem,1.2rem + 1.3vw,2.5rem);line-height:1.1;letter-spacing:-.015em;color:#0A0F0D;margin:0 0 14px}
.jiz-impact-sub{font:var(--text-body);font-size:clamp(.9375rem,.9rem + .2vw,1.0625rem);line-height:1.6;color:rgba(10,15,11,.74);margin:0;text-wrap:pretty}
.jiz-impact-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:clamp(14px,1.4vw,22px)}
.jiz-impact-card{padding:clamp(22px,1.9vw,30px);background:#0C1210;border:1px solid rgba(255,255,255,.07);border-radius:clamp(14px,1.2vw,20px);box-shadow:0 14px 34px -18px rgba(6,14,4,.55);opacity:0;transform:translate3d(0,18px,0);transition:opacity 720ms cubic-bezier(.22,.61,.36,1),transform 720ms cubic-bezier(.22,.61,.36,1),background 260ms ease,border-color 260ms ease,box-shadow 260ms ease}
.jiz-impact[data-in="true"] .jiz-impact-card{opacity:1;transform:none}
.jiz-impact-card:hover{background:#101815;border-color:rgba(255,255,255,.14);box-shadow:0 20px 44px -18px rgba(6,14,4,.62),0 0 0 1px rgba(255,255,255,.06);transform:translate3d(0,-3px,0);transition-delay:0ms}
.jiz-impact-value{font:var(--text-display);font-size:clamp(2.1rem,1.5rem + 1.7vw,3.15rem);line-height:1;letter-spacing:-.02em;color:#FFFFFF;font-variant-numeric:tabular-nums;margin-bottom:14px}
.jiz-impact-suffix{font-size:.52em;letter-spacing:0;margin-left:1px;color:var(--color-accent-primary)}
.jiz-impact-label{font:var(--text-body);font-size:.9375rem;line-height:1.5;color:rgba(240,244,238,.82);margin:0;text-wrap:pretty}
@media(max-width:1180px){.jiz-impact-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media(max-width:760px){.jiz-impact-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.jiz-impact-label{font-size:.875rem}}
@media(max-width:460px){.jiz-impact-grid{grid-template-columns:1fr}}
@media(prefers-reduced-motion:reduce){.jiz-impact-head,.jiz-impact-card{opacity:1;transform:none;transition:none}.jiz-impact-card:hover{transform:none}}
      `}</style>
    </section>
  );
}

function WorkArt({ motif }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1, vectorEffect: 'non-scaling-stroke' };
  return (
    <svg className="jiz-fw-cover-art" viewBox="0 0 480 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      {motif === 'flow' && (
        <g>
          <g {...common} opacity=".55"><path d="M-20 236C90 236 132 152 240 152S382 98 500 62" /></g>
          <g {...common} opacity=".26"><path d="M-20 282C120 282 182 208 300 200S420 176 500 142" /></g>
          <g fill="currentColor" opacity=".7"><circle cx="240" cy="152" r="3.4" /><circle cx="300" cy="200" r="2.6" /><circle cx="118" cy="216" r="2.2" /></g>
        </g>
      )}
      {motif === 'ladder' && (
        <g>
          <g {...common} opacity=".4"><rect x="72" y="196" width="86" height="74" rx="3" /><rect x="186" y="148" width="86" height="122" rx="3" /><rect x="300" y="88" width="86" height="182" rx="3" /></g>
          <g {...common} opacity=".7"><path d="M72 186 L158 186" /><path d="M186 138 L272 138" /><path d="M300 78 L386 78" /></g>
          <g fill="currentColor" opacity=".65"><circle cx="343" cy="60" r="3.2" /></g>
        </g>
      )}
      {motif === 'dash' && (
        <g>
          <g {...common} opacity=".34"><rect x="56" y="58" width="180" height="82" rx="4" /><rect x="256" y="58" width="168" height="38" rx="4" /><rect x="256" y="112" width="168" height="28" rx="4" /><rect x="56" y="164" width="368" height="82" rx="4" /></g>
          <g {...common} opacity=".7"><path d="M72 226C120 226 138 190 186 186S262 196 300 178 372 184 410 172" /></g>
          <g fill="currentColor" opacity=".5"><rect x="70" y="72" width="46" height="4" rx="2" /><rect x="270" y="72" width="62" height="4" rx="2" /></g>
        </g>
      )}
      {motif === 'branch' && (
        <g>
          <g {...common} opacity=".6"><path d="M60 150 H168" /><path d="M168 150 C210 150 210 88 252 88 H352" /><path d="M168 150 C210 150 210 212 252 212 H352" /></g>
          <g {...common} opacity=".24"><path d="M252 88 C300 88 300 44 348 44" /><path d="M252 212 C300 212 300 256 348 256" /></g>
          <g fill="currentColor" opacity=".72"><circle cx="168" cy="150" r="3.6" /><circle cx="252" cy="88" r="2.6" /><circle cx="252" cy="212" r="2.6" /></g>
        </g>
      )}
      {motif === 'hub' && (
        <g>
          <g {...common} opacity=".4"><rect x="40" y="52" width="150" height="92" rx="4" /><rect x="206" y="52" width="234" height="42" rx="4" /><rect x="206" y="110" width="112" height="134" rx="4" /><rect x="334" y="110" width="106" height="134" rx="4" /><rect x="40" y="160" width="150" height="84" rx="4" /></g>
          <g {...common} opacity=".62"><path d="M190 98 H206" /><path d="M190 202 H206" /><path d="M318 176 H334" /><path d="M115 144 V160" /></g>
          <g {...common} opacity=".3"><path d="M58 176 C104 176 118 208 160 204" /><path d="M224 132 H300" /><path d="M224 154 H278" /><path d="M352 132 H424" /></g>
          <g fill="currentColor" opacity=".72"><circle cx="198" cy="98" r="3.2" /><circle cx="198" cy="202" r="2.6" /><circle cx="326" cy="176" r="2.6" /><circle cx="115" cy="152" r="2.2" /></g>
          <g fill="currentColor" opacity=".42"><rect x="56" y="68" width="52" height="4" rx="2" /><rect x="222" y="68" width="74" height="4" rx="2" /><rect x="56" y="176" width="40" height="4" rx="2" /></g>
        </g>
      )}
      {motif === 'network' && (
        <g>
          <g {...common} opacity=".5"><path d="M96 208 L196 118 L302 176 L400 88" /><path d="M196 118 L232 240" /><path d="M302 176 L400 88" /></g>
          <g {...common} opacity=".2"><circle cx="196" cy="118" r="44" /><circle cx="302" cy="176" r="30" /></g>
          <g fill="currentColor" opacity=".72"><circle cx="96" cy="208" r="3" /><circle cx="196" cy="118" r="3.8" /><circle cx="302" cy="176" r="3" /><circle cx="400" cy="88" r="3" /><circle cx="232" cy="240" r="2.2" /></g>
        </g>
      )}
    </svg>
  );
}

function WorkCover({ accent, index, image, imageAlt, ratio, motif, ready }) {
  const [broken, setBroken] = React.useState(false);
  React.useEffect(() => { setBroken(false); }, [image]);
  return (
    <div className="jiz-fw-cover" style={{ '--fw-accent': accent, '--fw-ratio': ratio }}>
      <div className="jiz-fw-cover-layer">
        {image && !broken && ready
          ? <img className="jiz-fw-cover-img" src={image} alt={imageAlt || ''} loading="eager" decoding="async" onError={() => setBroken(true)} />
          : <WorkArt motif={motif} />}
      </div>
      <span className="jiz-fw-cover-grid" aria-hidden="true" />
      <span className="jiz-fw-cover-index" aria-hidden="true">{index}</span>
      <span className="jiz-fw-cover-rule" aria-hidden="true" />
    </div>
  );
}

function WorkCard({ item, featured, delay, onOpen, ratio, ready }) {
  const ref = React.useRef(null);
  const onMove = React.useCallback((e) => {
    if (!featured) return;
    const el = ref.current;
    if (!el || prefersReduced()) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--fw-mx', (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
    el.style.setProperty('--fw-my', (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
  }, [featured]);
  const onLeave = React.useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--fw-mx', '0');
    el.style.setProperty('--fw-my', '0');
  }, []);
  const cta = (item.route || item.href) ? 'View Case Study' : 'View on Archive';
  return (
    <article
      ref={ref}
      className={'jiz-fw-card' + (featured ? ' jiz-fw-card--featured' : '')}
      style={{ transitionDelay: delay + 'ms', '--fw-accent': item.accent }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <WorkCover accent={item.accent} index={item.index} image={item.image} imageAlt={item.imageAlt} ratio={ratio} motif={item.motif} ready={ready} />
      <div className="jiz-fw-body">
        <p className="jiz-fw-kicker">{item.kicker}</p>
        <h3 className="jiz-fw-title">{item.title}</h3>
        {item.outcome ? <p className="jiz-fw-outcome">{item.outcome}</p> : null}
        <p className="jiz-fw-preview">{item.preview}</p>
        <ul className="jiz-fw-tags">
          {item.tags.slice(0, 3).map((t) => <li key={t} className="jiz-fw-tag">{t}</li>)}
        </ul>
        <button type="button" className="jiz-fw-cta" onClick={() => onOpen(item)} aria-label={cta + ': ' + item.title}>
          <span className="jiz-fw-cta-label">{cta}</span>
          <span className="jiz-fw-cta-arrow" aria-hidden="true">{item.route ? '\u2192' : '\u2197'}</span>
        </button>
      </div>
    </article>
  );
}

function FeaturedWorkV2({ onOpenWork }) {
  const ref = React.useRef(null);
  const [active, setActive] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setActive(true); return; }
    const fallback = setTimeout(() => setActive(true), 1200);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { clearTimeout(fallback); setActive(true); io.disconnect(); } });
    }, { threshold: 0.12, rootMargin: '300px 0px' });
    io.observe(el);
    return () => { clearTimeout(fallback); io.disconnect(); };
  }, []);

  const items = [
    {
      index: '01', kicker: 'AI Workflow Design • UX/UI Prototyping', accent: '#64E1FF', motif: 'hub',
      title: 'Enterprise Learning Experience & AI Systems Hub',
      outcome: 'Integrated enterprise learning, AI workflow governance, and platform enablement into one user-centered prototype ecosystem.',
      preview: 'A Figma-based learning portal concept that translates enterprise strategy, product releases, leadership simulations, and AI-enabled production workflows into a scalable digital experience.',
      tags: ['AI-Enabled Learning', 'UX/UI Prototyping', 'Enterprise Enablement'],
      href: 'https://jonathan-iker-zamarripa.webflow.io/project/enterprise-learning-experience-ai-systems-hub',
      route: null
    },
    {
      index: '02', kicker: 'Product Enablement', accent: '#C6F23A', motif: 'flow',
      title: 'Accelerating Global Product Readiness Through Hotel Technology Enablement',
      preview: 'Scaled training, release communications, and reusable learning workflows for evolving hotel technology platforms.',
      tags: ['Enterprise Learning', 'Technology Adoption', 'AI-Enabled Production'],
      image: './assets/imagery/hotelkey-featured-work-cover.png',
      imageAlt: 'HotelKey hotel technology enablement case study cover',
      route: 'HotelKey New Hire Onboarding'
    },
    {
      index: '03', kicker: 'Leadership Development', accent: '#C6F23A', motif: 'ladder',
      title: 'Designing Senior Leadership Development for Enterprise Alignment',
      preview: 'Leadership learning for VP and SVP audiences focused on judgment, alignment, and strategic capability.',
      tags: ['Executive Learning', 'Scenario Design', 'Enterprise Strategy'],
      image: './assets/imagery/olu-featured-work-cover.png',
      imageAlt: 'Operation: Legacy Unlocked leadership development case study cover',
      route: 'Operation: Legacy Unlocked'
    },
    {
      index: '04', kicker: 'Platform Adoption', accent: '#5FC9C0', motif: 'dash',
      title: 'Driving Enterprise Adoption for Workday Learn at Cox',
      preview: 'Launch communications and multimedia enablement supporting enterprise adoption of Workday Learn.',
      tags: ['Change Enablement', 'Digital Learning', 'Workday Learn'],
      image: './assets/imagery/workday-featured-work-cover.png',
      imageAlt: 'Workday Learn launch at Cox Enterprises case study cover',
      route: 'Workday Learn Launch'
    },
    {
      index: '05', kicker: 'Accessible Design', accent: '#5FC9C0', motif: 'branch',
      title: 'Designing Bilingual Scenario-Based eLearning for Community Impact',
      preview: 'Interactive bilingual learning built on branching, accessibility practice, and learner-centered storytelling.',
      tags: ['Storyline 360', 'Bilingual Learning', 'Accessibility'],
      route: null
    },
    {
      index: '06', kicker: 'Digital Transformation', accent: '#C6F23A', motif: 'network',
      title: 'Scaling Digital Learning Adoption Across an International School Community',
      preview: 'Professional learning and adoption strategy that helped educators integrate digital tools with confidence.',
      tags: ['Canvas LMS', 'Faculty Enablement', 'Change Management'],
      route: null
    }
  ];

  const openItem = (item) => {
    if (item.href) window.open(item.href, '_blank', 'noopener,noreferrer');
    else if (item.route && typeof onOpenWork === 'function') onOpenWork(item.route);
    else window.location.href = 'https://jonathan-iker-zamarripa.webflow.io/projects';
  };

  const bentoSpans = ['jiz-fw-b--major', 'jiz-fw-b--wide', 'jiz-fw-b--wide', 'jiz-fw-b--wide', 'jiz-fw-b--wide'];

  return (
    <section className="jiz-fw" ref={ref} data-in={active ? 'true' : 'false'} aria-labelledby="jiz-fw-title">
      <div className="jiz-fw-inner">
        <div className="jiz-fw-head">
          <p className="jiz-fw-eyebrow"><span className="jiz-fw-eyebrow-line" aria-hidden="true" />Selected Case Studies</p>
          <h2 className="jiz-fw-heading" id="jiz-fw-title">Featured Work</h2>
          <p className="jiz-fw-sub">Curated case studies in enterprise learning, product enablement, leadership development, and digital transformation.</p>
        </div>
        <div className="jiz-fw-bento">
          <div className="jiz-fw-b jiz-fw-b--feature">
            <span className="jiz-fw-halo" aria-hidden="true" />
            <WorkCard item={items[0]} featured delay={260} onOpen={openItem} ready={active} />
          </div>
          {items.slice(1).map((item, i) => (
            <div key={item.index} className={'jiz-fw-b ' + bentoSpans[i]}>
              <WorkCard item={item} delay={620 + i * 120} onOpen={openItem} featured={bentoSpans[i] === 'jiz-fw-b--major'} ratio={bentoSpans[i] === 'jiz-fw-b--narrow' ? '4 / 3' : '16 / 9'} ready={active} />
            </div>
          ))}
        </div>
      </div>
      <style>{`
.jiz-fw{position:relative;isolation:isolate;background:#080D0B;padding-block:clamp(76px,7.4vw,136px)}
.jiz-fw::before{content:'';position:absolute;inset:0;z-index:0;pointer-events:none;background:radial-gradient(ellipse 62% 44% at 26% 16%,rgba(198,242,58,.035),transparent 68%),radial-gradient(ellipse 54% 40% at 84% 78%,rgba(95,201,192,.03),transparent 70%)}
.jiz-fw-inner{position:relative;z-index:1;width:min(1440px,calc(100% - 2*clamp(24px,6vw,112px)));margin-inline:auto}
.jiz-fw-head{max-width:720px;margin-bottom:clamp(46px,4.6vw,78px)}
.jiz-fw-eyebrow,.jiz-fw-heading,.jiz-fw-sub{opacity:0;transform:translate3d(0,12px,0);transition:opacity 820ms cubic-bezier(.22,.61,.36,1),transform 820ms cubic-bezier(.22,.61,.36,1)}
.jiz-fw[data-in="true"] .jiz-fw-eyebrow,.jiz-fw[data-in="true"] .jiz-fw-heading,.jiz-fw[data-in="true"] .jiz-fw-sub{opacity:1;transform:none}
.jiz-fw-heading{transition-delay:90ms}
.jiz-fw-sub{transition-delay:210ms}
.jiz-fw-eyebrow{display:flex;align-items:center;gap:14px;font:var(--text-hud);font-size:.6875rem;letter-spacing:.22em;text-transform:uppercase;color:var(--color-accent-primary);margin:0 0 20px}
.jiz-fw-eyebrow-line{display:block;width:44px;height:1px;background:linear-gradient(90deg,var(--color-accent-primary),rgba(198,242,58,.15))}
.jiz-fw-heading{font:var(--text-display);font-size:clamp(2rem,1.35rem + 1.9vw,3.1rem);line-height:1.08;letter-spacing:-.022em;color:var(--color-text-primary);margin:0 0 18px}
.jiz-fw-sub{font:var(--text-body);font-size:clamp(.9375rem,.9rem + .22vw,1.0625rem);line-height:1.66;color:rgba(217,221,227,.68);margin:0;max-width:62ch;text-wrap:pretty}
.jiz-fw-bento{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:clamp(18px,2.2vw,36px)}
.jiz-fw-b{position:relative;min-width:0}
.jiz-fw-b--feature{grid-column:span 6}
.jiz-fw-b--major{grid-column:span 6}
.jiz-fw-b--wide{grid-column:span 3}
.jiz-fw-b--narrow{grid-column:span 2}
.jiz-fw-halo{position:absolute;z-index:0;inset:-12% -4% -22%;pointer-events:none;border-radius:50%;background:radial-gradient(ellipse at 30% 50%,rgba(198,242,58,.07),transparent 62%),radial-gradient(ellipse at 78% 60%,rgba(95,201,192,.05),transparent 66%);filter:blur(46px);opacity:0;transition:opacity 1200ms cubic-bezier(.22,.61,.36,1) 320ms}
.jiz-fw[data-in="true"] .jiz-fw-halo{opacity:1}
.jiz-fw-card{position:relative;z-index:1;display:flex;flex-direction:column;height:100%;overflow:hidden;background:linear-gradient(180deg,#0D1412 0%,#0A100E 100%);border:1px solid rgba(255,255,255,.05);border-radius:clamp(16px,1.5vw,26px);box-shadow:0 18px 40px -28px rgba(0,0,0,.8);opacity:0;transform:translate3d(0,26px,0);transition:opacity 820ms cubic-bezier(.22,.61,.36,1),transform 820ms cubic-bezier(.22,.61,.36,1),border-color 320ms ease,box-shadow 320ms ease}
.jiz-fw-card--featured{transition-duration:1080ms,1080ms,320ms,320ms;transform:translate3d(0,34px,0)}
.jiz-fw[data-in="true"] .jiz-fw-card{opacity:1;transform:none}
.jiz-fw-card::after{content:'';position:absolute;z-index:4;left:0;right:0;top:0;height:1px;pointer-events:none;background:linear-gradient(90deg,transparent,var(--fw-accent),transparent);opacity:0;transform:scaleX(.35);transform-origin:left center;transition:opacity 420ms ease,transform 620ms cubic-bezier(.22,.61,.36,1)}
.jiz-fw-card:hover,.jiz-fw-card:focus-within{border-color:rgba(198,242,58,.24);box-shadow:0 34px 66px -32px rgba(0,0,0,.9),0 0 0 1px rgba(198,242,58,.08);transform:translate3d(0,-6px,0);transition-delay:0ms}
.jiz-fw-card:hover::after,.jiz-fw-card:focus-within::after{opacity:.9;transform:scaleX(1)}
.jiz-fw-card--featured:hover,.jiz-fw-card--featured:focus-within{box-shadow:0 44px 90px -38px rgba(0,0,0,.95),0 0 0 1px rgba(198,242,58,.14),0 0 64px -18px rgba(198,242,58,.16)}
.jiz-fw-card--featured{display:grid;grid-template-columns:minmax(0,46fr) minmax(0,54fr);align-items:stretch}
.jiz-fw-cover{position:relative;overflow:hidden;aspect-ratio:var(--fw-ratio,16 / 9);background:linear-gradient(150deg,#111A16 0%,#0A100E 72%);color:var(--fw-accent)}
.jiz-fw-card--featured .jiz-fw-cover{aspect-ratio:auto;height:100%;min-height:clamp(300px,27vw,440px)}
.jiz-fw-cover-layer{position:absolute;inset:0;transform:translate3d(calc(var(--fw-mx,0)*6px),calc(var(--fw-my,0)*4px),0);transition:transform 520ms cubic-bezier(.22,.61,.36,1)}
.jiz-fw-cover-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transform:scale(1.01);transition:transform 760ms cubic-bezier(.22,.61,.36,1),filter 760ms cubic-bezier(.22,.61,.36,1);filter:saturate(.92) contrast(1.02)}
.jiz-fw-cover-art{position:absolute;inset:0;width:100%;height:100%;opacity:.5;transform:scale(1.01);transition:transform 760ms cubic-bezier(.22,.61,.36,1),opacity 420ms ease}
.jiz-fw-cover-grid{position:absolute;inset:0;z-index:1;pointer-events:none;opacity:.3;background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);background-size:44px 44px;-webkit-mask-image:radial-gradient(ellipse at 40% 40%,#000,transparent 78%);mask-image:radial-gradient(ellipse at 40% 40%,#000,transparent 78%)}
.jiz-fw-cover::after{content:'';position:absolute;z-index:2;inset:0;pointer-events:none;background:linear-gradient(200deg,rgba(8,13,11,.36) 0%,rgba(8,13,11,.04) 44%,rgba(8,13,11,.58) 100%)}
.jiz-fw-card--featured .jiz-fw-cover::after{background:linear-gradient(96deg,rgba(8,13,11,.16) 0%,rgba(8,13,11,.02) 38%,rgba(8,13,11,.6) 100%)}
.jiz-fw-card:hover .jiz-fw-cover-img,.jiz-fw-card:focus-within .jiz-fw-cover-img{transform:scale(1.05);filter:saturate(1) contrast(1.03) brightness(1.03)}
.jiz-fw-card--featured:hover .jiz-fw-cover-img,.jiz-fw-card--featured:focus-within .jiz-fw-cover-img{transform:scale(1.06)}
.jiz-fw-card:hover .jiz-fw-cover-art,.jiz-fw-card:focus-within .jiz-fw-cover-art{transform:scale(1.05);opacity:.68}
.jiz-fw-cover-index{position:absolute;z-index:3;left:clamp(16px,1.4vw,24px);top:clamp(14px,1.2vw,20px);font:var(--text-display);font-size:clamp(1.05rem,.9rem + .4vw,1.5rem);line-height:1;letter-spacing:-.02em;color:var(--fw-accent);opacity:.9;text-shadow:0 2px 12px rgba(8,13,11,.75)}
.jiz-fw-cover-rule{position:absolute;z-index:3;left:clamp(16px,1.4vw,24px);bottom:clamp(14px,1.2vw,20px);width:34px;height:1px;background:var(--fw-accent);opacity:.5;transition:width 520ms cubic-bezier(.22,.61,.36,1),opacity 320ms ease}
.jiz-fw-card:hover .jiz-fw-cover-rule,.jiz-fw-card:focus-within .jiz-fw-cover-rule{width:64px;opacity:.95}
.jiz-fw-body{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start;gap:12px;padding:clamp(22px,2vw,32px)}
.jiz-fw-card--featured .jiz-fw-body{gap:16px;padding:clamp(28px,3.2vw,58px);justify-content:center;transform:translate3d(calc(var(--fw-mx,0)*-3px),calc(var(--fw-my,0)*-2px),0);transition:transform 620ms cubic-bezier(.22,.61,.36,1)}
.jiz-fw-kicker{font:var(--text-hud);font-size:.625rem;letter-spacing:.2em;text-transform:uppercase;color:var(--fw-accent);margin:0}
.jiz-fw-title{font:var(--text-h3);font-size:1.0625rem;line-height:1.4;letter-spacing:-.008em;color:var(--color-text-primary);margin:0;text-wrap:pretty}
.jiz-fw-b--wide .jiz-fw-title{font-size:1.1875rem}
.jiz-fw-card--featured .jiz-fw-title{font-size:clamp(1.5rem,1.05rem + 1.1vw,2.25rem);line-height:1.16;letter-spacing:-.018em;max-width:19ch}
.jiz-fw-outcome{font:var(--text-body);font-size:clamp(.9375rem,.9rem + .22vw,1.0625rem);font-weight:620;line-height:1.5;color:#E8EEF2;margin:0;max-width:46ch;padding-left:14px;border-left:2px solid var(--fw-accent);text-wrap:pretty}
.jiz-fw-preview{font:var(--text-body);font-size:.9375rem;line-height:1.6;color:rgba(217,221,227,.7);margin:0;text-wrap:pretty}
.jiz-fw-card--featured .jiz-fw-preview{font-size:clamp(1rem,.95rem + .25vw,1.125rem);max-width:44ch;color:rgba(217,221,227,.8)}
.jiz-fw-tags{display:flex;flex-wrap:wrap;gap:6px;list-style:none;padding:0;margin:2px 0 0}
.jiz-fw-tag{padding:5px 11px;border-radius:var(--radius-pill);background:rgba(255,255,255,.045);border:1px solid rgba(255,255,255,.04);font:var(--text-body);font-size:.6875rem;letter-spacing:.02em;color:rgba(232,238,226,.72);transition:background 280ms ease,color 280ms ease,border-color 280ms ease}
.jiz-fw-card:hover .jiz-fw-tag,.jiz-fw-card:focus-within .jiz-fw-tag{background:rgba(198,242,58,.09);border-color:rgba(198,242,58,.16);color:#E4F5BE}
.jiz-fw-tag:hover{background:rgba(198,242,58,.16);border-color:rgba(198,242,58,.3);color:#EEFBD2}
.jiz-fw-cta{display:inline-flex;align-items:center;gap:9px;min-height:44px;margin-top:auto;padding:0;background:none;border:0;font:var(--text-button);font-size:.875rem;color:var(--color-accent-primary);cursor:pointer;transition:color 240ms ease}
.jiz-fw-card--featured .jiz-fw-cta{margin-top:6px}
.jiz-fw-cta-label{position:relative;padding-bottom:3px}
.jiz-fw-cta-label::after{content:'';position:absolute;left:0;bottom:0;width:100%;height:1px;background:currentColor;opacity:.34;transform:scaleX(1);transform-origin:left center;transition:opacity 260ms ease,transform 420ms cubic-bezier(.22,.61,.36,1)}
.jiz-fw-card:hover .jiz-fw-cta-label::after,.jiz-fw-card:focus-within .jiz-fw-cta-label::after{opacity:1}
.jiz-fw-cta-arrow{transition:transform 320ms cubic-bezier(.22,.61,.36,1)}
.jiz-fw-card:hover .jiz-fw-cta-arrow,.jiz-fw-cta:focus-visible .jiz-fw-cta-arrow{transform:translateX(6px)}
.jiz-fw-cta:focus-visible{outline:2px solid var(--color-accent-primary);outline-offset:5px;border-radius:4px}
@media(max-width:1100px){.jiz-fw-b--wide,.jiz-fw-b--narrow,.jiz-fw-b--major{grid-column:span 3}.jiz-fw-bento>.jiz-fw-b:last-child{grid-column:span 6}.jiz-fw-card--featured{grid-template-columns:1fr}.jiz-fw-card--featured .jiz-fw-cover{aspect-ratio:16 / 9;min-height:0;height:auto}.jiz-fw-card--featured .jiz-fw-cover::after{background:linear-gradient(200deg,rgba(8,13,11,.3) 0%,rgba(8,13,11,.04) 46%,rgba(8,13,11,.52) 100%)}.jiz-fw-cover{aspect-ratio:16 / 9}.jiz-fw-card--featured .jiz-fw-body{transform:none}}
@media(max-width:900px){.jiz-build-head{grid-template-columns:1fr;align-items:start;gap:18px}.jiz-build-title{max-width:100%}.jiz-build-sub{max-width:100%}}
        @media(max-width:680px){.jiz-fw-b--wide,.jiz-fw-b--narrow,.jiz-fw-b--major{grid-column:span 6}.jiz-fw-card,.jiz-fw-card--featured{transform:translate3d(0,14px,0)}.jiz-fw-cover{aspect-ratio:16 / 10}.jiz-fw-halo{inset:-6% 0 -12%}}
@media(prefers-reduced-motion:reduce){.jiz-fw-eyebrow,.jiz-fw-heading,.jiz-fw-sub,.jiz-fw-card,.jiz-fw-halo{opacity:1;transform:none;transition:none}.jiz-fw-card:hover,.jiz-fw-card:focus-within{transform:none}.jiz-fw-cover-layer,.jiz-fw-card--featured .jiz-fw-body{transform:none;transition:none}.jiz-fw-cover-img,.jiz-fw-cover-art,.jiz-fw-card:hover .jiz-fw-cover-img,.jiz-fw-card:hover .jiz-fw-cover-art,.jiz-fw-card:focus-within .jiz-fw-cover-img,.jiz-fw-card:focus-within .jiz-fw-cover-art{transform:none;transition:none}.jiz-fw-cta-arrow,.jiz-fw-cover-rule,.jiz-fw-card::after{transition:none}}
      `}</style>
    </section>
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
            Creative Lab / Experimental Work
          </p>

          <h2
            id="creative-lab-title"
            className="jiz-creative-lab-title"
          >
            Where ideas become cinematic prototypes.
          </h2>

          <div className="jiz-creative-lab-heading">
            <p className="jiz-creative-lab-subtitle">
              A space for testing how learning strategy,
              visual storytelling, generative AI, and rapid
              production can shape clearer human
              experiences.
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

function ArchiveBridge() {
  const videoRef = React.useRef(null);
  const ref = React.useRef(null);
  const [active, setActive] = React.useState(false);
  const [filter, setFilter] = React.useState('All');
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const attempt = () => { const p = v.play(); if (p && p.catch) p.catch(() => {}); };
    attempt();
    v.addEventListener('loadeddata', attempt);
    return () => v.removeEventListener('loadeddata', attempt);
  }, []);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setActive(true); return; }
    const fallback = setTimeout(() => setActive(true), 1200);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { clearTimeout(fallback); setActive(true); io.disconnect(); } });
    }, { threshold: 0.1, rootMargin: '200px 0px' });
    io.observe(el);
    return () => { clearTimeout(fallback); io.disconnect(); };
  }, []);
  const ARCHIVE_URL = 'https://jonathan-iker-zamarripa.webflow.io/projects';
  const items = [
    { title: 'Guest CRM Release Enablement', cat: 'Product Enablement', copy: 'Release training and reference tools for a hospitality CRM rollout.', tags: ['Enterprise Learning', 'Adoption'] },
    { title: 'Bilingual Scenario eLearning', cat: 'Interactive eLearning', copy: 'Branching practice built for bilingual learners and accessibility.', tags: ['Storyline 360', 'Accessibility'] },
    { title: 'Canvas LMS Faculty Program', cat: 'Education Innovation', copy: 'Professional learning that moved faculty from hesitation to fluency.', tags: ['Canvas LMS', 'Change'] },
    { title: 'Explainer Video Library', cat: 'Multimedia', copy: 'Short-form motion pieces that compress dense process into minutes.', tags: ['Video', 'Motion Design'] },
    { title: 'AI Production Experiments', cat: 'AI Experiments', copy: 'Prompt systems and agentic drafts tested against real production work.', tags: ['AI Workflow', 'Prototyping'] },
    { title: 'Leadership Toolkit Series', cat: 'Enterprise Learning', copy: 'Job aids and facilitation kits supporting manager capability at scale.', tags: ['Job Aids', 'Facilitation'] }
  ];
  const cats = ['All', 'Enterprise Learning', 'Product Enablement', 'Interactive eLearning', 'Education Innovation', 'Multimedia', 'AI Experiments'];
  const shown = filter === 'All' ? items : items.filter((i) => i.cat === filter);
  return (
    <section className="jiz-arch" ref={ref} data-in={active ? 'true' : 'false'} aria-labelledby="jiz-arch-title">
      <div className="jiz-arch-film">
        <video ref={videoRef} className="jiz-arch-video" src="https://elearningportfolio-jz.s3.us-east-1.amazonaws.com/Archive_Film.mp4" autoPlay muted loop playsInline preload="auto" aria-hidden="true" tabIndex="-1" />
        <span className="jiz-arch-scrim" aria-hidden="true" />
        <span className="jiz-arch-tint" aria-hidden="true" />
      </div>
      <div className="jiz-arch-inner">
        <div className="jiz-arch-head">
          <p className="jiz-arch-eyebrow"><span className="jiz-arch-eyebrow-line" aria-hidden="true" />Extended Archive</p>
          <h2 className="jiz-arch-title" id="jiz-arch-title">More work. More range.</h2>
          <p className="jiz-arch-sub">A broader look at learning experiences, product enablement, interactive media, multimedia design, and earlier work that shaped the practice.</p>
          <a className="jiz-arch-cta" href={ARCHIVE_URL} target="_blank" rel="noopener noreferrer">
            <span>View the Full Archive</span>
            <span className="jiz-arch-cta-arrow" aria-hidden="true">↗</span>
          </a>
          <p className="jiz-arch-note">Selected work across enterprise learning, creative production, digital transformation, and experimental media.</p>
        </div>
        <div className="jiz-arch-chips" role="group" aria-label="Filter archive by category">
          {cats.map((c) => (
            <button key={c} type="button" className="jiz-arch-chip" aria-pressed={filter === c} onClick={() => setFilter(c)}>{c}</button>
          ))}
        </div>
        <ul className="jiz-arch-grid">
          {shown.map((it, i) => (
            <li key={it.title} className="jiz-arch-card" style={{ transitionDelay: (280 + i * 90) + 'ms' }}>
              <p className="jiz-arch-cat">{it.cat}</p>
              <h3 className="jiz-arch-card-title">{it.title}</h3>
              <p className="jiz-arch-copy">{it.copy}</p>
              <ul className="jiz-arch-tags">
                {it.tags.map((t) => <li key={t} className="jiz-arch-tag">{t}</li>)}
              </ul>
              <a className="jiz-arch-link" href={ARCHIVE_URL} target="_blank" rel="noopener noreferrer" aria-label={'View project: ' + it.title}>
                View Project<span className="jiz-arch-link-arrow" aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <style>{`
.jiz-arch{position:relative;isolation:isolate;overflow:hidden;background:#080B0F;padding-block:clamp(64px,6.4vw,108px)}
.jiz-arch-film{position:absolute;inset:0;z-index:0;pointer-events:none}
.jiz-arch-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:saturate(.6) brightness(.5)}
.jiz-arch-scrim{position:absolute;inset:0;background:linear-gradient(180deg,rgba(8,11,15,.86) 0%,rgba(8,11,15,.78) 38%,rgba(8,11,15,.95) 100%)}
.jiz-arch-tint{position:absolute;inset:0;background:radial-gradient(ellipse 62% 50% at 26% 12%,rgba(100,225,255,.16),transparent 70%),linear-gradient(200deg,rgba(100,225,255,.07),transparent 58%)}
.jiz-arch-inner{position:relative;z-index:1;width:min(1440px,calc(100% - 2*clamp(24px,6vw,112px)));margin-inline:auto}
.jiz-arch-head{max-width:640px}
.jiz-arch-eyebrow,.jiz-arch-title,.jiz-arch-sub,.jiz-arch-cta,.jiz-arch-note{opacity:0;transform:translate3d(0,12px,0);transition:opacity 800ms cubic-bezier(.22,.61,.36,1),transform 800ms cubic-bezier(.22,.61,.36,1)}
.jiz-arch[data-in="true"] .jiz-arch-eyebrow,.jiz-arch[data-in="true"] .jiz-arch-title,.jiz-arch[data-in="true"] .jiz-arch-sub,.jiz-arch[data-in="true"] .jiz-arch-cta,.jiz-arch[data-in="true"] .jiz-arch-note{opacity:1;transform:none}
.jiz-arch-title{transition-delay:90ms}
.jiz-arch-sub{transition-delay:180ms}
.jiz-arch-cta{transition-delay:280ms}
.jiz-arch-note{transition-delay:360ms}
.jiz-arch-eyebrow{display:flex;align-items:center;gap:14px;font:var(--text-hud);font-size:.6875rem;letter-spacing:.22em;text-transform:uppercase;color:var(--color-accent-secondary);margin:0 0 18px}
.jiz-arch-eyebrow-line{display:block;width:44px;height:1px;background:linear-gradient(90deg,var(--color-accent-secondary),rgba(100,225,255,.14))}
.jiz-arch-title{font:var(--text-display);font-size:clamp(1.9rem,1.3rem + 1.8vw,2.9rem);line-height:1.08;letter-spacing:-.024em;color:var(--color-text-primary);margin:0 0 16px}
.jiz-arch-sub{font:var(--text-body);font-size:clamp(.9375rem,.9rem + .22vw,1.0625rem);line-height:1.68;color:rgba(232,238,242,.82);margin:0 0 26px;max-width:56ch;text-wrap:pretty}
.jiz-arch-cta{display:inline-flex;align-items:center;gap:9px;min-height:52px;padding:0 26px;border-radius:var(--radius-pill);background:var(--color-accent-primary);color:var(--color-on-accent);font:var(--text-body);font-size:.9375rem;font-weight:700;text-decoration:none;transition:opacity 800ms cubic-bezier(.22,.61,.36,1),transform 800ms cubic-bezier(.22,.61,.36,1),background 260ms ease,box-shadow 260ms ease}
.jiz-arch-cta:hover{background:var(--color-accent-primary-hover);box-shadow:0 0 34px rgba(198,242,58,.26)}
.jiz-arch-cta:focus-visible{outline:2px solid var(--color-accent-primary);outline-offset:4px}
.jiz-arch-cta-arrow{transition:transform 300ms cubic-bezier(.22,.61,.36,1)}
.jiz-arch-cta:hover .jiz-arch-cta-arrow{transform:translate3d(3px,-3px,0)}
.jiz-arch-note{margin:18px 0 0;font:var(--text-body);font-size:.8125rem;line-height:1.6;color:rgba(217,224,232,.7);max-width:58ch;text-wrap:pretty}
.jiz-arch-chips{display:flex;flex-wrap:wrap;gap:8px;margin:clamp(34px,3.4vw,52px) 0 clamp(20px,2vw,28px);padding-top:clamp(26px,2.6vw,36px);border-top:1px solid rgba(100,225,255,.16)}
.jiz-arch-chip{min-height:36px;padding:0 14px;border:1px solid rgba(100,225,255,.24);border-radius:var(--radius-pill);background:rgba(100,225,255,.04);color:rgba(232,238,242,.8);font:var(--text-body);font-size:.75rem;cursor:pointer;transition:border-color 240ms ease,background 240ms ease,color 240ms ease}
.jiz-arch-chip:hover{border-color:rgba(100,225,255,.5);color:#fff}
.jiz-arch-chip[aria-pressed="true"]{border-color:rgba(198,242,58,.6);background:rgba(198,242,58,.12);color:#EEFBD2}
.jiz-arch-chip:focus-visible{outline:2px solid var(--color-accent-primary);outline-offset:3px}
.jiz-arch-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(14px,1.5vw,22px);list-style:none;margin:0;padding:0}
.jiz-arch-card{display:flex;flex-direction:column;gap:8px;min-width:0;padding:clamp(18px,1.7vw,24px);background:rgba(11,16,22,.62);border:1px solid rgba(100,225,255,.14);border-radius:clamp(12px,1vw,16px);backdrop-filter:blur(8px);opacity:0;transform:translate3d(0,16px,0);transition:opacity 720ms cubic-bezier(.22,.61,.36,1),transform 720ms cubic-bezier(.22,.61,.36,1),border-color 280ms ease,background 280ms ease}
.jiz-arch[data-in="true"] .jiz-arch-card{opacity:1;transform:none}
.jiz-arch-card:hover,.jiz-arch-card:focus-within{border-color:rgba(100,225,255,.36);background:rgba(13,20,28,.76);transform:translate3d(0,-3px,0);transition-delay:0ms}
.jiz-arch-cat{font:var(--text-hud);font-size:.5625rem;letter-spacing:.2em;text-transform:uppercase;color:var(--color-accent-secondary);margin:0}
.jiz-arch-card-title{font:var(--text-body);font-size:1rem;font-weight:650;line-height:1.32;letter-spacing:-.01em;color:var(--color-text-primary);margin:0;text-wrap:pretty}
.jiz-arch-copy{font:var(--text-body);font-size:.8125rem;line-height:1.56;color:rgba(217,224,232,.76);margin:0;text-wrap:pretty}
.jiz-arch-tags{display:flex;flex-wrap:wrap;gap:6px;list-style:none;margin:2px 0 0;padding:0}
.jiz-arch-tag{padding:4px 9px;border-radius:var(--radius-pill);background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.06);font:var(--text-body);font-size:.625rem;color:rgba(232,238,242,.74)}
.jiz-arch-link{display:inline-flex;align-items:center;gap:7px;min-height:44px;margin-top:auto;color:var(--color-accent-primary);font:var(--text-button);font-size:.8125rem;text-decoration:none}
.jiz-arch-link:hover{color:#EEFBD2}
.jiz-arch-link:focus-visible{outline:2px solid var(--color-accent-primary);outline-offset:3px;border-radius:4px}
.jiz-arch-link-arrow{transition:transform 300ms cubic-bezier(.22,.61,.36,1)}
.jiz-arch-link:hover .jiz-arch-link-arrow{transform:translateX(4px)}
@media(max-width:1000px){.jiz-arch-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:620px){.jiz-arch-grid{grid-template-columns:1fr}.jiz-arch-card{transform:translate3d(0,10px,0)}}
@media(prefers-reduced-motion:reduce){.jiz-arch-eyebrow,.jiz-arch-title,.jiz-arch-sub,.jiz-arch-cta,.jiz-arch-note,.jiz-arch-card{opacity:1;transform:none;transition:none}.jiz-arch-card:hover,.jiz-arch-card:focus-within{transform:none}.jiz-arch-cta-arrow,.jiz-arch-link-arrow{transition:none}}
      `}</style>
    </section>
  );
}

function LetsBuild({ onExploreWork }) {
  const PROJECT_TYPES = ['Full-Time Role', 'Recruiting Conversation', 'Learning Experience', 'AI Strategy', 'Product Enablement', 'Consulting'];
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
      setFormMessage('Select at least one inquiry type so I can route your message correctly.');
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
        .jiz-build{position:relative;isolation:isolate;overflow:hidden;padding:clamp(76px,8vw,124px) var(--container-pad) clamp(52px,5vw,76px);background:radial-gradient(ellipse 74% 54% at 18% 8%,rgba(100,225,255,.094),transparent 66%),radial-gradient(ellipse 62% 50% at 88% 64%,rgba(198,242,58,.05),transparent 70%),linear-gradient(180deg,#121a1d 0%,#141d20 40%,#101619 100%)}
        .jiz-build::before{content:'';position:absolute;inset:0;z-index:-2;pointer-events:none;opacity:.12;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:80px 80px;-webkit-mask-image:radial-gradient(ellipse at 50% 30%,#000,transparent 76%);mask-image:radial-gradient(ellipse at 50% 30%,#000,transparent 76%)}
        .jiz-build-inner{position:relative;z-index:1;width:min(100%,1360px);margin-inline:auto}
        .jiz-build-head{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(20px,3vw,56px);align-items:end;margin-bottom:clamp(38px,4vw,62px)}
        .jiz-build-eyebrow{margin:0 0 16px;color:var(--color-accent-primary);font:var(--text-hud);font-size:.6875rem;letter-spacing:.22em;text-transform:uppercase}
        .jiz-build-title{margin:0;color:var(--color-text-primary);font:var(--text-display);font-size:clamp(2rem,1.35rem + 1.9vw,3.1rem);line-height:1.08;letter-spacing:-.024em;max-width:18ch;text-wrap:pretty}
        .jiz-build-sub{margin:0;color:rgba(217,221,227,.76);font:var(--text-body);font-size:clamp(.9375rem,.9rem + .22vw,1.0625rem);line-height:1.7;max-width:56ch;text-wrap:pretty}
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
        .jiz-build-chip:focus-visible,.jiz-build-submit:focus-visible{outline:2px solid var(--color-accent-primary);outline-offset:3px}
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
        
        
        
        
        
        
        @media(max-width:1040px){.jiz-build-stage{grid-template-columns:1fr}.jiz-build-film{min-height:clamp(300px,52vw,460px)}}
                @media(max-width:520px){.jiz-build-fields{grid-template-columns:1fr}}
        @media(prefers-reduced-motion:reduce){.jiz-build-submit,.jiz-build-chip{transition:none}}
      `}</style>
      <div className="jiz-build-inner">
        <header className="jiz-build-head">
          <div className="jiz-build-head-left">
            <p className="jiz-build-eyebrow">Let's Build What's Next</p>
            <h2 className="jiz-build-title" id="jiz-build-title">Have a complex problem worth making clear?</h2>
          </div>
          <div className="jiz-build-head-right">
            <p className="jiz-build-sub">I partner with teams navigating learning, technology, adoption, and transformation challenges. I am currently open to full-time senior roles in learning experience design, learning strategy, product enablement, leadership development, and AI-enabled learning.</p>
          </div>
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
            <h3>Start the Conversation</h3>
            <p className="jiz-build-form-note">Hiring, recruiting, or scoping work — a few details are enough to begin.</p>
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
                <legend className="jiz-build-label">Inquiry type <span aria-hidden="true">*</span></legend>
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


      </div>
    </section>
  );
}

function FinalMoment({ onNavigate }) {
  const [lit, setLit] = React.useState(false);
  const ref = React.useRef(null);
  const reduced = prefersReduced();
  const NAV = [['Creative Lab', 3], ['Archive', 8], ['Resume', 'resume'], ['LinkedIn', 'linkedin'], ['Email', 'email']];
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setLit(true); }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const toTop = () => scrollToY(0);
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
        
        
        
        .jiz-footer-top{min-height:48px;padding:0 22px;border:1px solid rgba(13,20,16,.24);border-radius:var(--radius-pill);background:rgba(13,20,16,.9);color:#e8f7c4;font:var(--text-button);cursor:pointer;transition:all var(--motion-fast) var(--ease-standard)}
        .jiz-footer-top:hover{transform:translateY(-2px);box-shadow:0 16px 32px rgba(13,20,16,.26)}
        .jiz-footer-rule{height:1px;margin:clamp(32px,3.6vw,46px) auto 0;background:linear-gradient(90deg,transparent,rgba(13,20,16,.24),transparent)}
        .jiz-footer-meta{display:flex;flex-direction:column;gap:6px;margin-top:clamp(22px,2.4vw,30px)}
        .jiz-footer-copy{color:rgba(13,20,16,.78);font:var(--text-caption)}
        .jiz-footer-credit{color:rgba(13,20,16,.6);font:var(--text-caption);font-style:italic}
        .jiz-footer-tech{color:rgba(13,20,16,.48);font:var(--text-hud);font-size:.625rem;letter-spacing:.14em;text-transform:uppercase}
        .jiz-footer-nav{display:flex;flex-wrap:wrap;justify-content:center;gap:clamp(6px,1vw,12px);margin-bottom:clamp(26px,3vw,38px)}
        .jiz-footer-nav button{min-height:44px;padding:0 16px;border:1px solid transparent;border-radius:var(--radius-pill);background:transparent;color:rgba(13,20,16,.82);font:var(--text-body);font-size:.9375rem;cursor:pointer;transition:border-color var(--motion-fast) var(--ease-standard),background var(--motion-fast) var(--ease-standard),color var(--motion-fast) var(--ease-standard)}
        .jiz-footer-nav button:hover{border-color:rgba(13,20,16,.26);background:rgba(13,20,16,.07);color:#0d1410}
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
            <button key={label} type="button" onClick={() => {
              if (index === 'archive') {
                window.location.href = 'https://jonathan-iker-zamarripa.webflow.io/projects';
              } else if (index === 'resume') {
                window.open('https://elearningportfolio-jz.s3.us-east-1.amazonaws.com/Public_Career_Overview.pdf', '_blank', 'noopener,noreferrer');
              } else if (index === 'linkedin') {
                window.open('https://www.linkedin.com/in/jonathanzamarripa/', '_blank', 'noopener,noreferrer');
              } else if (index === 'email') {
                window.location.href = 'mailto:jonathan.zamarripa@gmail.com';
              } else {
                onNavigate && onNavigate(index);
              }
            }}>{label}</button>
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

function CapabilityIcon({ shape }) {
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' };
  return (
    <svg className="jiz-cap-icon" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
      {shape === 'strategy' && <g {...p}><path d="M6 30 L16 20 L24 26 L34 12" /><circle cx="16" cy="20" r="2.2" /><circle cx="24" cy="26" r="2.2" /><path d="M28 12 H34 V18" /></g>}
      {shape === 'enablement' && <g {...p}><rect x="6" y="8" width="28" height="20" rx="2.5" /><path d="M6 14 H34" /><path d="M14 34 H26" /><path d="M20 28 V34" /><path d="M11 11 h.01M14.5 11 h.01" /></g>}
      {shape === 'leadership' && <g {...p}><circle cx="20" cy="12" r="4.4" /><path d="M9 31c0-5.2 4.9-8.6 11-8.6S31 25.8 31 31" /><path d="M6 34 H34" /></g>}
      {shape === 'ai' && <g {...p}><rect x="12" y="12" width="16" height="16" rx="3" /><path d="M20 6 V12M20 28 V34M6 20 H12M28 20 H34M12.5 12.5 L9 9M27.5 12.5 L31 9M12.5 27.5 L9 31M27.5 27.5 L31 31" /><circle cx="20" cy="20" r="2.4" /></g>}
      {shape === 'multimedia' && <g {...p}><rect x="5" y="9" width="30" height="19" rx="2.5" /><path d="M17 15.5 L24 19 L17 22.5 Z" /><path d="M12 33 H28" /></g>}
      {shape === 'inclusive' && <g {...p}><circle cx="20" cy="20" r="13" /><path d="M20 13.5 V26.5" /><path d="M13.5 17.5 H26.5" /><path d="M15.5 27 L20 21 L24.5 27" /></g>}
    </svg>
  );
}

function CoreCapabilities() {
  const ref = React.useRef(null);
  const [active, setActive] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setActive(true); return; }
    const fallback = setTimeout(() => setActive(true), 1200);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { clearTimeout(fallback); setActive(true); io.disconnect(); } });
    }, { threshold: 0.16 });
    io.observe(el);
    return () => { clearTimeout(fallback); io.disconnect(); };
  }, []);

  const caps = [
    { n: '01', shape: 'strategy', title: 'Learning Strategy', copy: 'Designing learning ecosystems that connect business goals, learner needs, stakeholder priorities, and measurable outcomes.' },
    { n: '02', shape: 'enablement', title: 'Product & Technology Enablement', copy: 'Turning complex platforms, workflows, and system changes into clear learning experiences that support adoption and operational readiness.' },
    { n: '03', shape: 'leadership', title: 'Leadership Development', copy: 'Creating leadership learning experiences that strengthen decision-making, alignment, emotional intelligence, and enterprise capability.' },
    { n: '04', shape: 'ai', title: 'AI-Enabled Learning Production', copy: 'Using AI-supported workflows to accelerate content development, personalize learning, and scale multimedia production.' },
    { n: '05', shape: 'multimedia', title: 'Digital Learning & Multimedia Design', copy: 'Building eLearning, explainer videos, job aids, guides, and digital assets that make complex information easier to understand and apply.' },
    { n: '06', shape: 'inclusive', title: 'Accessibility & Inclusive Design', copy: 'Designing with accessibility, representation, and learner variability in mind through inclusive practices grounded in WCAG and UDL.' }
  ];

  return (
    <section className="jiz-cap" ref={ref} data-in={active ? 'true' : 'false'} aria-labelledby="jiz-cap-title">
      <div className="jiz-cap-inner">
        <div className="jiz-cap-head">
          <p className="jiz-cap-eyebrow"><span className="jiz-cap-eyebrow-line" aria-hidden="true" />What I Bring</p>
          <h2 className="jiz-cap-title" id="jiz-cap-title">Core Capabilities</h2>
          <p className="jiz-cap-sub">How I help organizations translate complexity into adoption, readiness, and measurable learning impact.</p>
        </div>
        <ul className="jiz-cap-grid">
          {caps.map((c, i) => (
            <li key={c.title} className="jiz-cap-card" style={{ transitionDelay: (220 + i * 110) + 'ms' }}>
              <div className="jiz-cap-top">
                <span className="jiz-cap-icon-wrap" aria-hidden="true"><CapabilityIcon shape={c.shape} /></span>
                <span className="jiz-cap-n" aria-hidden="true">{c.n}</span>
              </div>
              <h3 className="jiz-cap-card-title">{c.title}</h3>
              <p className="jiz-cap-copy">{c.copy}</p>
              <span className="jiz-cap-rule" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
      <style>{`
.jiz-cap{position:relative;isolation:isolate;background:linear-gradient(180deg,#171A1F 0%,#1C2027 100%);border-top:1px solid rgba(255,255,255,.05);padding-block:clamp(72px,7vw,124px)}
.jiz-cap::before{content:'';position:absolute;inset:0;z-index:0;pointer-events:none;opacity:.5;background:radial-gradient(ellipse 58% 42% at 50% 0%,rgba(198,242,58,.035),transparent 70%)}
.jiz-cap-inner{position:relative;z-index:1;width:min(1440px,calc(100% - 2*clamp(24px,6vw,112px)));margin-inline:auto}
.jiz-cap-head{max-width:680px;margin-bottom:clamp(42px,4.2vw,70px)}
.jiz-cap-eyebrow,.jiz-cap-title,.jiz-cap-sub{opacity:0;transform:translate3d(0,12px,0);transition:opacity 800ms cubic-bezier(.22,.61,.36,1),transform 800ms cubic-bezier(.22,.61,.36,1)}
.jiz-cap[data-in="true"] .jiz-cap-eyebrow,.jiz-cap[data-in="true"] .jiz-cap-title,.jiz-cap[data-in="true"] .jiz-cap-sub{opacity:1;transform:none}
.jiz-cap-title{transition-delay:90ms}
.jiz-cap-sub{transition-delay:190ms}
.jiz-cap-eyebrow{display:flex;align-items:center;gap:14px;font:var(--text-hud);font-size:.6875rem;letter-spacing:.22em;text-transform:uppercase;color:var(--color-accent-primary);margin:0 0 20px}
.jiz-cap-eyebrow-line{display:block;width:44px;height:1px;background:linear-gradient(90deg,var(--color-accent-primary),rgba(198,242,58,.15))}
.jiz-cap-title{font:var(--text-display);font-size:clamp(2rem,1.35rem + 1.9vw,3.1rem);line-height:1.08;letter-spacing:-.022em;color:var(--color-text-primary);margin:0 0 18px}
.jiz-cap-sub{font:var(--text-body);font-size:clamp(.9375rem,.9rem + .22vw,1.0625rem);line-height:1.66;color:rgba(217,221,227,.68);margin:0;max-width:60ch;text-wrap:pretty}
.jiz-cap-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(16px,1.8vw,28px);list-style:none;margin:0;padding:0}
.jiz-cap-card{position:relative;display:flex;flex-direction:column;gap:14px;min-width:0;padding:clamp(24px,2.2vw,36px);background:linear-gradient(180deg,rgba(255,255,255,.038) 0%,rgba(255,255,255,.014) 100%);border:1px solid rgba(255,255,255,.06);border-radius:clamp(14px,1.2vw,22px);backdrop-filter:blur(10px);box-shadow:0 16px 36px -28px rgba(0,0,0,.8);opacity:0;transform:translate3d(0,22px,0);transition:opacity 780ms cubic-bezier(.22,.61,.36,1),transform 780ms cubic-bezier(.22,.61,.36,1),border-color 300ms ease,box-shadow 300ms ease,background 300ms ease}
.jiz-cap[data-in="true"] .jiz-cap-card{opacity:1;transform:none}
.jiz-cap-card:hover,.jiz-cap-card:focus-within{border-color:rgba(198,242,58,.26);background:linear-gradient(180deg,rgba(198,242,58,.05) 0%,rgba(255,255,255,.016) 100%);box-shadow:0 28px 56px -30px rgba(0,0,0,.9),0 0 0 1px rgba(198,242,58,.08);transform:translate3d(0,-5px,0);transition-delay:0ms}
.jiz-cap-top{display:flex;align-items:center;justify-content:space-between;gap:12px}
.jiz-cap-icon-wrap{display:grid;place-items:center;width:46px;height:46px;border:1px solid rgba(198,242,58,.18);border-radius:12px;background:rgba(198,242,58,.05);color:var(--color-accent-primary);transition:border-color 300ms ease,background 300ms ease,color 300ms ease}
.jiz-cap-card:hover .jiz-cap-icon-wrap,.jiz-cap-card:focus-within .jiz-cap-icon-wrap{border-color:rgba(198,242,58,.42);background:rgba(198,242,58,.11)}
.jiz-cap-icon{width:26px;height:26px;display:block}
.jiz-cap-icon g{stroke-dasharray:180;stroke-dashoffset:180;transition:stroke-dashoffset 1100ms cubic-bezier(.22,.61,.36,1) 240ms}
.jiz-cap[data-in="true"] .jiz-cap-icon g{stroke-dashoffset:0}
.jiz-cap-n{font:var(--text-hud);font-size:.625rem;letter-spacing:.18em;color:rgba(217,221,227,.6);transition:color 300ms ease}
.jiz-cap-card:hover .jiz-cap-n,.jiz-cap-card:focus-within .jiz-cap-n{color:rgba(198,242,58,.72)}
.jiz-cap-card-title{font:var(--text-h3);font-size:1.125rem;line-height:1.34;letter-spacing:-.01em;color:var(--color-text-primary);margin:4px 0 0;text-wrap:pretty}
.jiz-cap-copy{font:var(--text-body);font-size:.9375rem;line-height:1.62;color:rgba(217,221,227,.7);margin:0;text-wrap:pretty}
.jiz-cap-rule{display:block;width:32px;height:1px;margin-top:auto;padding-top:0;background:linear-gradient(90deg,var(--color-accent-primary),rgba(198,242,58,.1));opacity:.45;transition:width 520ms cubic-bezier(.22,.61,.36,1),opacity 300ms ease}
.jiz-cap-card:hover .jiz-cap-rule,.jiz-cap-card:focus-within .jiz-cap-rule{width:62px;opacity:.95}
@media(max-width:1000px){.jiz-cap-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:640px){.jiz-cap-grid{grid-template-columns:1fr}.jiz-cap-card{transform:translate3d(0,14px,0)}}
@media(prefers-reduced-motion:reduce){.jiz-cap-eyebrow,.jiz-cap-title,.jiz-cap-sub,.jiz-cap-card{opacity:1;transform:none;transition:none}.jiz-cap-card:hover,.jiz-cap-card:focus-within{transform:none}.jiz-cap-icon g{stroke-dasharray:none;stroke-dashoffset:0;transition:none}.jiz-cap-rule{transition:none}}
      `}</style>
    </section>
  );
}

function MethodIcon({ shape }) {
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' };
  return (
    <svg className="jiz-method2-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      {shape === 'clarify' && <g {...p}><circle cx="14" cy="14" r="8" /><path d="M20 20 L28 28" /><path d="M14 10.5 V14 L16.5 16" /></g>}
      {shape === 'structure' && <g {...p}><rect x="4" y="4" width="10" height="10" rx="2" /><rect x="18" y="4" width="10" height="6" rx="2" /><rect x="18" y="14" width="10" height="14" rx="2" /><rect x="4" y="18" width="10" height="10" rx="2" /></g>}
      {shape === 'design' && <g {...p}><path d="M6 26 L14 6 L22 26" /><path d="M9 19 H19" /><circle cx="25" cy="9" r="3" /></g>}
      {shape === 'build' && <g {...p}><path d="M16 3 L28 10 V22 L16 29 L4 22 V10 Z" /><path d="M4 10 L16 17 L28 10" /><path d="M16 17 V29" /></g>}
      {shape === 'measure' && <g {...p}><path d="M4 26 H28" /><path d="M8 26 V18" /><path d="M14 26 V12" /><path d="M20 26 V20" /><path d="M26 26 V7" /></g>}
    </svg>
  );
}

function MethodSection() {
  const ref = React.useRef(null);
  const [active, setActive] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setActive(true); return; }
    const fallback = setTimeout(() => setActive(true), 1200);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { clearTimeout(fallback); setActive(true); io.disconnect(); } });
    }, { threshold: 0.18 });
    io.observe(el);
    return () => { clearTimeout(fallback); io.disconnect(); };
  }, []);
  const steps = [
    { n: '01', shape: 'clarify', title: 'Clarify', copy: 'Define the business problem, learner need, stakeholder expectations, and success criteria.' },
    { n: '02', shape: 'structure', title: 'Structure', copy: 'Organize complexity into a clear learning architecture, journey, content map, or enablement strategy.' },
    { n: '03', shape: 'design', title: 'Design', copy: 'Shape the experience through story, interaction, visuals, accessibility, and human-centered learning principles.' },
    { n: '04', shape: 'build', title: 'Build', copy: 'Produce scalable assets across eLearning, video, guides, toolkits, job aids, communications, and enablement resources.' },
    { n: '05', shape: 'measure', title: 'Measure', copy: 'Use feedback, adoption signals, performance evidence, and stakeholder input to refine impact.' }
  ];
  return (
    <section className="jiz-method2" ref={ref} data-in={active ? 'true' : 'false'} aria-labelledby="jiz-method2-title">
      <div className="jiz-method2-inner">
        <div className="jiz-method2-head">
          <p className="jiz-method2-eyebrow"><span className="jiz-method2-eyebrow-line" aria-hidden="true" />The Method</p>
          <h2 className="jiz-method2-title" id="jiz-method2-title">How thought becomes action.</h2>
          <p className="jiz-method2-sub">A connected practice for moving from ambiguity to learning experiences people can understand, adopt, and use.</p>
        </div>
        <ol className="jiz-method2-rail">
          {steps.map((s, i) => (
            <li key={s.title} className="jiz-method2-item" style={{ transitionDelay: (240 + i * 130) + 'ms' }}>
              <span className="jiz-method2-node" aria-hidden="true" />
              <span className="jiz-method2-arrow" aria-hidden="true">→</span>
              <div className="jiz-method2-step" tabIndex={0}>
                <div className="jiz-method2-step-top">
                  <span className="jiz-method2-icon-wrap" aria-hidden="true"><MethodIcon shape={s.shape} /></span>
                  <span className="jiz-method2-n">{'Step ' + s.n}</span>
                </div>
                <h3 className="jiz-method2-step-title">{s.title}</h3>
                <p className="jiz-method2-copy">{s.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <style>{`
.jiz-method2{position:relative;isolation:isolate;background:#060A09;border-top:1px solid rgba(255,255,255,.05);padding-block:clamp(72px,7vw,124px)}
.jiz-method2::before{content:'';position:absolute;inset:0;z-index:0;pointer-events:none;background:radial-gradient(ellipse 60% 40% at 50% 100%,rgba(198,242,58,.03),transparent 72%)}
.jiz-method2-inner{position:relative;z-index:1;width:min(1440px,calc(100% - 2*clamp(24px,6vw,112px)));margin-inline:auto}
.jiz-method2-head{max-width:660px;margin-bottom:clamp(48px,4.8vw,80px)}
.jiz-method2-eyebrow,.jiz-method2-title,.jiz-method2-sub{opacity:0;transform:translate3d(0,12px,0);transition:opacity 800ms cubic-bezier(.22,.61,.36,1),transform 800ms cubic-bezier(.22,.61,.36,1)}
.jiz-method2[data-in="true"] .jiz-method2-eyebrow,.jiz-method2[data-in="true"] .jiz-method2-title,.jiz-method2[data-in="true"] .jiz-method2-sub{opacity:1;transform:none}
.jiz-method2-title{transition-delay:90ms}
.jiz-method2-sub{transition-delay:190ms}
.jiz-method2-eyebrow{display:flex;align-items:center;gap:14px;font:var(--text-hud);font-size:.6875rem;letter-spacing:.22em;text-transform:uppercase;color:var(--color-accent-primary);margin:0 0 20px}
.jiz-method2-eyebrow-line{display:block;width:44px;height:1px;background:linear-gradient(90deg,var(--color-accent-primary),rgba(198,242,58,.15))}
.jiz-method2-title{font:var(--text-display);font-size:clamp(2rem,1.35rem + 1.9vw,3.1rem);line-height:1.08;letter-spacing:-.022em;color:var(--color-text-primary);margin:0 0 18px}
.jiz-method2-sub{font:var(--text-body);font-size:clamp(.9375rem,.9rem + .22vw,1.0625rem);line-height:1.66;color:rgba(217,221,227,.68);margin:0;max-width:58ch;text-wrap:pretty}
.jiz-method2-rail{position:relative;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:clamp(14px,1.5vw,26px);list-style:none;margin:0;padding:0}
.jiz-method2-rail::before{content:'';position:absolute;left:6px;right:6px;top:5px;height:1px;background:linear-gradient(90deg,rgba(198,242,58,.5),rgba(198,242,58,.16) 72%,rgba(198,242,58,.05));transform:scaleX(0);transform-origin:left center;transition:transform 1500ms cubic-bezier(.22,.61,.36,1) 180ms}
.jiz-method2[data-in="true"] .jiz-method2-rail::before{transform:scaleX(1)}
.jiz-method2-item{position:relative;display:flex;flex-direction:column;min-width:0;padding-top:30px;opacity:0;transform:translate3d(0,20px,0);transition:opacity 780ms cubic-bezier(.22,.61,.36,1),transform 780ms cubic-bezier(.22,.61,.36,1)}
.jiz-method2[data-in="true"] .jiz-method2-item{opacity:1;transform:none}
.jiz-method2-node{position:absolute;left:0;top:0;width:11px;height:11px;border-radius:50%;border:1px solid rgba(198,242,58,.5);background:#060A09;box-shadow:0 0 0 4px rgba(198,242,58,.05)}
.jiz-method2-item:first-child .jiz-method2-node{background:var(--color-accent-primary);border-color:var(--color-accent-primary);box-shadow:0 0 0 5px rgba(198,242,58,.1)}
.jiz-method2-item:hover .jiz-method2-node,.jiz-method2-item:focus-within .jiz-method2-node{background:var(--color-accent-primary);border-color:var(--color-accent-primary)}
.jiz-method2-arrow{position:absolute;right:calc(-1*clamp(14px,1.5vw,26px)/2 - 4px);top:-3px;font-size:.75rem;line-height:1;color:rgba(198,242,58,.4)}
.jiz-method2-item:last-child .jiz-method2-arrow{display:none}
.jiz-method2-step{display:flex;flex-direction:column;gap:10px;height:100%;padding:clamp(18px,1.6vw,26px);background:linear-gradient(180deg,rgba(255,255,255,.032) 0%,rgba(255,255,255,.012) 100%);border:1px solid rgba(255,255,255,.055);border-radius:clamp(12px,1vw,18px);transition:border-color 300ms ease,box-shadow 300ms ease,background 300ms ease,transform 300ms ease}
.jiz-method2-step:hover,.jiz-method2-step:focus-visible{border-color:rgba(198,242,58,.28);background:linear-gradient(180deg,rgba(198,242,58,.045) 0%,rgba(255,255,255,.014) 100%);box-shadow:0 24px 48px -30px rgba(0,0,0,.9),0 0 0 1px rgba(198,242,58,.08);transform:translate3d(0,-4px,0)}
.jiz-method2-step:focus-visible{outline:2px solid var(--color-accent-primary);outline-offset:4px}
.jiz-method2-step-top{display:flex;align-items:center;justify-content:space-between;gap:10px}
.jiz-method2-icon-wrap{display:grid;place-items:center;width:38px;height:38px;border:1px solid rgba(198,242,58,.18);border-radius:10px;background:rgba(198,242,58,.05);color:var(--color-accent-primary);transition:border-color 300ms ease,background 300ms ease}
.jiz-method2-step:hover .jiz-method2-icon-wrap,.jiz-method2-step:focus-visible .jiz-method2-icon-wrap{border-color:rgba(198,242,58,.42);background:rgba(198,242,58,.11)}
.jiz-method2-icon{width:20px;height:20px;display:block}
.jiz-method2-icon g{stroke-dasharray:140;stroke-dashoffset:140;transition:stroke-dashoffset 1100ms cubic-bezier(.22,.61,.36,1) 280ms}
.jiz-method2[data-in="true"] .jiz-method2-icon g{stroke-dashoffset:0}
.jiz-method2-n{font:var(--text-hud);font-size:.5625rem;letter-spacing:.18em;text-transform:uppercase;color:rgba(217,221,227,.6)}
.jiz-method2-step-title{font:var(--text-h3);font-size:1.1875rem;line-height:1.24;letter-spacing:-.012em;color:var(--color-text-primary);margin:2px 0 0}
.jiz-method2-copy{font:var(--text-body);font-size:.875rem;line-height:1.58;color:rgba(217,221,227,.68);margin:0;text-wrap:pretty}
@media(max-width:1180px){.jiz-method2-rail{grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(18px,2.4vw,30px)}.jiz-method2-rail::before{display:none}.jiz-method2-item{padding-top:0;padding-left:26px;border-left:1px solid rgba(198,242,58,.16)}.jiz-method2-node{left:-6px;top:6px}.jiz-method2-arrow{display:none}}
@media(max-width:760px){.jiz-method2-rail{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:560px){.jiz-method2-rail{grid-template-columns:1fr}.jiz-method2-item{transform:translate3d(0,12px,0)}}
@media(prefers-reduced-motion:reduce){.jiz-method2-eyebrow,.jiz-method2-title,.jiz-method2-sub,.jiz-method2-item{opacity:1;transform:none;transition:none}.jiz-method2-rail::before{transform:scaleX(1);transition:none}.jiz-method2-icon g{stroke-dasharray:none;stroke-dashoffset:0;transition:none}.jiz-method2-step:hover,.jiz-method2-step:focus-visible{transform:none}}
      `}</style>
    </section>
  );
}

function ThinkingInMotion() {
  const ref = React.useRef(null);
  const [active, setActive] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setActive(true); return; }
    const fallback = setTimeout(() => setActive(true), 1200);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { clearTimeout(fallback); setActive(true); io.disconnect(); } });
    }, { threshold: 0.16 });
    io.observe(el);
    return () => { clearTimeout(fallback); io.disconnect(); };
  }, []);
  const tags = ['Narrative Structure', 'Visual Pacing', 'Emotional Relevance', 'Scenario-Based Learning', 'AI-Enabled Production', 'Behavioral Clarity'];
  const beats = [
    { label: 'Context', copy: 'Establish the situation people are actually working inside.' },
    { label: 'Tension', copy: 'Name the friction that makes the change hard.' },
    { label: 'Clarity', copy: 'Resolve complexity into a decision people can hold.' },
    { label: 'Action', copy: 'Move understanding into confident behavior.' }
  ];
  const notes = [
    { label: 'AI + Practice', title: 'AI changes the workflow — not the responsibility.', copy: 'Speed expands the options. Judgment protects the outcome.' },
    { label: 'Design Judgment', title: 'Scenarios should build judgment, not reward guessing.', copy: 'Practice should strengthen decisions — not test compliance.' },
    { label: 'Systems Thinking', title: 'The experience is only one part of the system.', copy: 'Adoption succeeds when the whole environment supports the behavior.' }
  ];
  return (
    <section className="jiz-tim" ref={ref} data-in={active ? 'true' : 'false'} aria-labelledby="jiz-tim-title">
      <div className="jiz-tim-inner">
        <div className="jiz-tim-col">
          <p className="jiz-tim-eyebrow"><span className="jiz-tim-eyebrow-line" aria-hidden="true" />Thinking in Motion</p>
          <h2 className="jiz-tim-title" id="jiz-tim-title">Cinematic learning for complex change.</h2>
          <p className="jiz-tim-sub">A design perspective on how narrative structure, visual rhythm, emotional relevance, and multimedia storytelling can make learning more memorable, human, and actionable.</p>
          <p className="jiz-tim-copy">I approach learning design like a narrative system. Every experience needs rhythm, tension, clarity, visual pacing, and a purposeful arc. Whether I am building an executive explainer, a leadership simulation, a product enablement toolkit, or an interactive eLearning module, I use cinematic principles to help learners move from attention to understanding — and from understanding to action.</p>
          <ul className="jiz-tim-tags">
            {tags.map((t, i) => <li key={t} className="jiz-tim-tag" style={{ transitionDelay: (420 + i * 90) + 'ms' }}>{t}</li>)}
          </ul>
        </div>
        <div className="jiz-tim-col jiz-tim-col--right">
          <div className="jiz-tim-board">
            <p className="jiz-tim-board-label">Story arc</p>
            <div className="jiz-tim-arc">
              <svg className="jiz-tim-arc-svg" viewBox="0 0 600 120" preserveAspectRatio="none" aria-hidden="true" focusable="false">
                <path className="jiz-tim-arc-path" d="M8 96 C 120 96, 150 30, 260 44 S 420 96, 592 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
            <ol className="jiz-tim-beats">
              {beats.map((b, i) => (
                <li key={b.label} className="jiz-tim-beat" style={{ transitionDelay: (520 + i * 130) + 'ms' }}>
                  <span className="jiz-tim-beat-node" aria-hidden="true" />
                  <p className="jiz-tim-beat-label">{b.label}</p>
                  <p className="jiz-tim-beat-copy">{b.copy}</p>
                </li>
              ))}
            </ol>
          </div>
          <article className="jiz-tim-card">
            <div className="jiz-tim-visual" aria-hidden="true">
              <span className="jiz-tim-frame" />
              <span className="jiz-tim-frame jiz-tim-frame--2" />
              <span className="jiz-tim-frame jiz-tim-frame--3" />
              <span className="jiz-tim-scan" />
            </div>
            <div className="jiz-tim-body">
              <p className="jiz-tim-kicker">Featured Insight</p>
              <h3 className="jiz-tim-card-title">Thinking in Motion: Cinematic Learning for Enterprise Transformation</h3>
              <p className="jiz-tim-card-copy">An emerging design perspective on how narrative structure, visual rhythm, emotion, AI-enabled production, and multimedia storytelling can help people understand complex change and act with confidence.</p>
              <button type="button" className="jiz-tim-cta" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="jiz-tim-panel">
                <span className="jiz-tim-cta-label">{open ? 'Close the Insight' : 'Read the Insight'}</span>
                <span className="jiz-tim-cta-arrow" aria-hidden="true">{open ? '\u2212' : '\u2192'}</span>
              </button>
              <div className="jiz-tim-panel" id="jiz-tim-panel" hidden={!open}>
                <ul className="jiz-tim-notes">
                  {notes.map((n) => (
                    <li key={n.title} className="jiz-tim-note">
                      <p className="jiz-tim-note-label">{n.label}</p>
                      <h4 className="jiz-tim-note-title">{n.title}</h4>
                      <p className="jiz-tim-note-copy">{n.copy}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
      <style>{`
.jiz-tim{position:relative;isolation:isolate;background:#0E1413;border-top:1px solid rgba(255,255,255,.05);padding-block:clamp(72px,7vw,124px)}
.jiz-tim::before{content:'';position:absolute;inset:0;z-index:0;pointer-events:none;background:radial-gradient(ellipse 52% 44% at 80% 26%,rgba(95,201,192,.055),transparent 70%),radial-gradient(ellipse 46% 40% at 12% 84%,rgba(198,242,58,.03),transparent 72%)}
.jiz-tim-inner{position:relative;z-index:1;width:min(1440px,calc(100% - 2*clamp(24px,6vw,112px)));margin-inline:auto;display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:clamp(32px,4vw,72px);align-items:start}
.jiz-tim-col{display:flex;flex-direction:column;min-width:0}
.jiz-tim-col--right{gap:clamp(18px,1.8vw,28px)}
.jiz-tim-eyebrow,.jiz-tim-title,.jiz-tim-sub,.jiz-tim-copy,.jiz-tim-board,.jiz-tim-card{opacity:0;transform:translate3d(0,14px,0);transition:opacity 840ms cubic-bezier(.22,.61,.36,1),transform 840ms cubic-bezier(.22,.61,.36,1)}
.jiz-tim[data-in="true"] .jiz-tim-eyebrow,.jiz-tim[data-in="true"] .jiz-tim-title,.jiz-tim[data-in="true"] .jiz-tim-sub,.jiz-tim[data-in="true"] .jiz-tim-copy,.jiz-tim[data-in="true"] .jiz-tim-board,.jiz-tim[data-in="true"] .jiz-tim-card{opacity:1;transform:none}
.jiz-tim-title{transition-delay:100ms}
.jiz-tim-sub{transition-delay:200ms}
.jiz-tim-copy{transition-delay:300ms}
.jiz-tim-board{transition-delay:240ms}
.jiz-tim-card{transition-delay:400ms;transition-property:opacity,transform,border-color,box-shadow;transition-duration:840ms,840ms,300ms,300ms}
.jiz-tim-eyebrow{display:flex;align-items:center;gap:14px;font:var(--text-hud);font-size:.6875rem;letter-spacing:.22em;text-transform:uppercase;color:var(--color-accent-secondary);margin:0 0 20px}
.jiz-tim-eyebrow-line{display:block;width:44px;height:1px;background:linear-gradient(90deg,var(--color-accent-secondary),rgba(95,201,192,.15))}
.jiz-tim-title{font:var(--text-display);font-size:clamp(1.95rem,1.3rem + 1.9vw,3rem);line-height:1.08;letter-spacing:-.024em;color:var(--color-text-primary);margin:0 0 18px;text-wrap:pretty}
.jiz-tim-sub{font:var(--text-body);font-size:clamp(.9375rem,.9rem + .22vw,1.0625rem);line-height:1.68;color:rgba(217,221,227,.72);margin:0 0 20px;max-width:52ch;text-wrap:pretty}
.jiz-tim-copy{font:var(--text-body);font-size:.9375rem;line-height:1.75;color:rgba(217,221,227,.7);margin:0;max-width:56ch;padding-left:18px;border-left:1px solid rgba(95,201,192,.28);text-wrap:pretty}
.jiz-tim-tags{display:flex;flex-wrap:wrap;gap:8px;list-style:none;margin:clamp(24px,2.4vw,34px) 0 0;padding:0}
.jiz-tim-tag{padding:6px 12px;border-radius:var(--radius-pill);background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.05);font:var(--text-body);font-size:.6875rem;letter-spacing:.02em;color:rgba(232,238,226,.74);opacity:0;transform:translate3d(0,8px,0);transition:opacity 620ms cubic-bezier(.22,.61,.36,1),transform 620ms cubic-bezier(.22,.61,.36,1),background 260ms ease,border-color 260ms ease,color 260ms ease}
.jiz-tim[data-in="true"] .jiz-tim-tag{opacity:1;transform:none}
.jiz-tim-tag:hover{background:rgba(198,242,58,.12);border-color:rgba(198,242,58,.26);color:#EEFBD2}
.jiz-tim-board{position:relative;padding:clamp(20px,2vw,30px);background:linear-gradient(180deg,rgba(255,255,255,.035) 0%,rgba(255,255,255,.012) 100%);border:1px solid rgba(255,255,255,.06);border-radius:clamp(14px,1.2vw,22px)}
.jiz-tim-board-label{font:var(--text-hud);font-size:.5625rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(217,221,227,.6);margin:0 0 12px}
.jiz-tim-arc{height:clamp(72px,7vw,104px);color:var(--color-accent-primary)}
.jiz-tim-arc-svg{width:100%;height:100%;display:block;overflow:visible}
.jiz-tim-arc-path{stroke-dasharray:1000;stroke-dashoffset:1000;opacity:.72;transition:stroke-dashoffset 1800ms cubic-bezier(.22,.61,.36,1) 260ms}
.jiz-tim[data-in="true"] .jiz-tim-arc-path{stroke-dashoffset:0}
.jiz-tim-beats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(10px,1.2vw,18px);list-style:none;margin:14px 0 0;padding:0}
.jiz-tim-beat{position:relative;padding-top:16px;min-width:0;opacity:0;transform:translate3d(0,10px,0);transition:opacity 680ms cubic-bezier(.22,.61,.36,1),transform 680ms cubic-bezier(.22,.61,.36,1)}
.jiz-tim[data-in="true"] .jiz-tim-beat{opacity:1;transform:none}
.jiz-tim-beat-node{position:absolute;left:0;top:0;width:7px;height:7px;border-radius:50%;background:var(--color-accent-primary);opacity:.75}
.jiz-tim-beat-label{font:var(--text-hud);font-size:.625rem;letter-spacing:.16em;text-transform:uppercase;color:var(--color-accent-primary);margin:0 0 6px}
.jiz-tim-beat-copy{font:var(--text-body);font-size:.8125rem;line-height:1.5;color:rgba(217,221,227,.62);margin:0;text-wrap:pretty}
.jiz-tim-card{display:grid;grid-template-columns:minmax(0,34fr) minmax(0,66fr);overflow:hidden;background:linear-gradient(180deg,rgba(255,255,255,.042) 0%,rgba(255,255,255,.014) 100%);border:1px solid rgba(255,255,255,.07);border-radius:clamp(16px,1.4vw,24px);box-shadow:0 20px 46px -30px rgba(0,0,0,.85)}
.jiz-tim-card:hover,.jiz-tim-card:focus-within{border-color:rgba(95,201,192,.3);box-shadow:0 30px 62px -32px rgba(0,0,0,.9),0 0 0 1px rgba(95,201,192,.08)}
.jiz-tim-visual{position:relative;overflow:hidden;min-height:clamp(180px,18vw,240px);background:linear-gradient(160deg,#0F1A19 0%,#0A100F 76%)}
.jiz-tim-frame{position:absolute;left:14%;top:20%;width:58%;height:42%;border:1px solid rgba(95,201,192,.34);border-radius:4px}
.jiz-tim-frame--2{left:22%;top:30%;border-color:rgba(198,242,58,.24)}
.jiz-tim-frame--3{left:30%;top:40%;border-color:rgba(255,255,255,.11)}
.jiz-tim-scan{position:absolute;left:0;right:0;top:0;height:1px;background:linear-gradient(90deg,transparent,rgba(198,242,58,.5),transparent);transform:translateY(0);opacity:0;transition:transform 1700ms cubic-bezier(.22,.61,.36,1) 520ms,opacity 600ms ease 520ms}
.jiz-tim[data-in="true"] .jiz-tim-scan{transform:translateY(clamp(180px,18vw,240px));opacity:.85}
.jiz-tim-body{display:flex;flex-direction:column;align-items:flex-start;gap:13px;padding:clamp(22px,2.2vw,36px)}
.jiz-tim-kicker{font:var(--text-hud);font-size:.625rem;letter-spacing:.2em;text-transform:uppercase;color:var(--color-accent-secondary);margin:0}
.jiz-tim-card-title{font:var(--text-h3);font-size:clamp(1.1rem,.98rem + .5vw,1.45rem);line-height:1.3;letter-spacing:-.012em;color:var(--color-text-primary);margin:0;text-wrap:pretty}
.jiz-tim-card-copy{font:var(--text-body);font-size:.9375rem;line-height:1.6;color:rgba(217,221,227,.7);margin:0;max-width:54ch;text-wrap:pretty}
.jiz-tim-cta{display:inline-flex;align-items:center;gap:9px;min-height:44px;padding:0;background:none;border:0;font:var(--text-button);font-size:.875rem;color:var(--color-accent-primary);cursor:pointer}
.jiz-tim-cta-label{position:relative;padding-bottom:3px;border-bottom:1px solid rgba(198,242,58,.34);transition:border-color 260ms ease}
.jiz-tim-cta:hover .jiz-tim-cta-label{border-color:var(--color-accent-primary)}
.jiz-tim-cta-arrow{transition:transform 320ms cubic-bezier(.22,.61,.36,1)}
.jiz-tim-cta:hover .jiz-tim-cta-arrow{transform:translateX(5px)}
.jiz-tim-cta:focus-visible{outline:2px solid var(--color-accent-primary);outline-offset:5px;border-radius:4px}
.jiz-tim-panel{width:100%;margin-top:2px;padding-top:18px;border-top:1px solid rgba(255,255,255,.07)}
.jiz-tim-notes{display:grid;gap:16px;list-style:none;margin:0;padding:0}
.jiz-tim-note-label{font:var(--text-hud);font-size:.5625rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(198,242,58,.72);margin:0 0 6px}
.jiz-tim-note-title{font:var(--text-body);font-size:.9375rem;font-weight:650;line-height:1.4;color:var(--color-text-primary);margin:0 0 4px;text-wrap:pretty}
.jiz-tim-note-copy{font:var(--text-body);font-size:.875rem;line-height:1.55;color:rgba(217,221,227,.66);margin:0;text-wrap:pretty}
@media(max-width:1040px){.jiz-tim-inner{grid-template-columns:1fr}.jiz-tim-card{grid-template-columns:1fr}.jiz-tim-visual{min-height:150px}.jiz-tim[data-in="true"] .jiz-tim-scan{transform:translateY(150px)}}
@media(max-width:620px){.jiz-tim-beats{grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.jiz-tim-copy{padding-left:14px}}
@media(prefers-reduced-motion:reduce){.jiz-tim-eyebrow,.jiz-tim-title,.jiz-tim-sub,.jiz-tim-copy,.jiz-tim-board,.jiz-tim-card,.jiz-tim-tag,.jiz-tim-beat{opacity:1;transform:none;transition:none}.jiz-tim-arc-path{stroke-dasharray:none;stroke-dashoffset:0;transition:none}.jiz-tim-scan{opacity:.5;transform:none;transition:none}.jiz-tim-cta-arrow{transition:none}}
      `}</style>
    </section>
  );
}

function LearningStack() {
  const ref = React.useRef(null);
  const [active, setActive] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setActive(true); return; }
    const fallback = setTimeout(() => setActive(true), 1200);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { clearTimeout(fallback); setActive(true); io.disconnect(); } });
    }, { threshold: 0.12 });
    io.observe(el);
    return () => { clearTimeout(fallback); io.disconnect(); };
  }, []);
  const layers = ['Strategy', 'Design', 'AI Production', 'Automation', 'Delivery', 'Measurement'];
  const groups = [
    {
      n: '01', layer: 'Design', title: 'Learning Design & Authoring',
      label: 'Interactive learning, microlearning, simulations, branching, assessments, and performance support.',
      tools: ['Articulate Storyline 360', 'Rise 360', 'Genially', 'Canvas LMS', 'H5P', 'Camtasia interactive video', 'Scenario-based learning tools']
    },
    {
      n: '02', layer: 'AI Production', title: 'AI-Enabled Content & Workflow',
      label: 'Rapid ideation, content transformation, SME synthesis, scenario drafting, script development, learning architecture, and review acceleration.',
      tools: ['ChatGPT', 'Claude', 'Gemini', 'Microsoft Copilot', 'NotebookLM', 'Perplexity', 'Prompt systems', 'AI-assisted storyboarding', 'AI review workflows']
    },
    {
      n: '03', layer: 'Automation', title: 'Agentic AI & Learning Automation', motif: true,
      label: 'Agentic workflow awareness across content intake, SME analysis, knowledge retrieval, QA checks, learner support, and scalable learning operations.',
      tools: ['Custom GPTs', 'Claude Projects', 'Zapier', 'Make', 'n8n', 'Airtable automations', 'MCP-enabled workflow concepts', 'RAG knowledge systems', 'AI agents for L&D operations']
    },
    {
      n: '04', layer: 'AI Production', title: 'AI Video, Voice & Localization',
      label: 'AI-assisted video production, voiceover, localization, multilingual enablement, explainer content, and scalable media production.',
      tools: ['Synthesia', 'ElevenLabs', 'HeyGen', 'Descript', 'Runway', 'Luma', 'VEED', 'Adobe Podcast', 'AI dubbing and subtitle workflows']
    },
    {
      n: '05', layer: 'Design', title: 'Multimedia & Visual Design',
      label: 'Visual systems, branded learning assets, motion design, storyboards, prototypes, job aids, decks, and digital learning interfaces.',
      tools: ['Adobe Creative Suite', 'Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects', 'Canva', 'Figma', 'Miro', 'FigJam']
    },
    {
      n: '06', layer: 'Delivery', title: 'Learning Operations & Platforms',
      label: 'Learning delivery, stakeholder workflows, content governance, launch operations, versioning, and enterprise enablement.',
      tools: ['Workday Learn', 'SharePoint', 'Microsoft 365', 'Asana', 'Frame.io', 'LMS governance', 'Release workflows', 'Content intake systems']
    },
    {
      n: '07', layer: 'Measurement', title: 'Analytics, Skills & Measurement',
      label: 'Learning impact, adoption signals, performance evidence, executive visibility, and data-informed decisions.',
      tools: ['Tableau', 'Power BI', 'Excel', 'Learning dashboards', 'KPI tracking', 'Adoption metrics', 'Survey analysis', 'Skills intelligence concepts', 'xAPI / LRS awareness']
    },
    {
      n: '08', layer: 'Strategy', title: 'Accessibility & Quality Assurance',
      label: 'Accessible, inclusive, compliant learning experiences that support learner variability and enterprise quality standards.',
      tools: ['WCAG', 'UDL', 'Accessibility checkers', 'Captioning tools', 'SRT workflows', 'Screen reader considerations', 'Color contrast checks', 'QA checklists']
    }
  ];
  return (
    <section className="jiz-stack" ref={ref} data-in={active ? 'true' : 'false'} aria-labelledby="jiz-stack-title">
      <div className="jiz-stack-inner">
        <div className="jiz-stack-head">
          <p className="jiz-stack-eyebrow"><span className="jiz-stack-eyebrow-line" aria-hidden="true" />Tools &amp; Platforms</p>
          <h2 className="jiz-stack-title" id="jiz-stack-title">A modern learning stack for strategy, design, production, and scale.</h2>
          <p className="jiz-stack-sub">Hands-on tools and emerging AI workflows used to design, build, localize, automate, and measure learning experiences across enterprise environments.</p>
        </div>
        <ol className="jiz-stack-layers" aria-label="Stack architecture">
          {layers.map((l, i) => (
            <li key={l} className="jiz-stack-layer" style={{ transitionDelay: (200 + i * 90) + 'ms' }}>
              <span className="jiz-stack-layer-label">{l}</span>
              <span className="jiz-stack-layer-arrow" aria-hidden="true">→</span>
            </li>
          ))}
        </ol>
        <ul className="jiz-stack-grid">
          {groups.map((g, i) => (
            <li key={g.title} className={'jiz-stack-card' + (g.motif ? ' jiz-stack-card--motif' : '')} style={{ transitionDelay: (320 + i * 110) + 'ms' }}>
              {g.motif ? (
                <svg className="jiz-stack-motif" viewBox="0 0 220 90" aria-hidden="true" focusable="false">
                  <g fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M14 68 L70 30 L134 56 L206 20" />
                    <path d="M70 30 L92 82" />
                  </g>
                  <g fill="currentColor"><circle cx="14" cy="68" r="2.6" /><circle cx="70" cy="30" r="3.2" /><circle cx="134" cy="56" r="2.6" /><circle cx="206" cy="20" r="2.6" /><circle cx="92" cy="82" r="2" /></g>
                </svg>
              ) : null}
              <div className="jiz-stack-card-top">
                <span className="jiz-stack-n">{g.n}</span>
                <span className="jiz-stack-tier">{g.layer}</span>
              </div>
              <h3 className="jiz-stack-card-title">{g.title}</h3>
              <p className="jiz-stack-label">{g.label}</p>
              <ul className="jiz-stack-pills">
                {g.tools.map((t, j) => <li key={t} className="jiz-stack-pill" style={{ transitionDelay: (420 + i * 110 + j * 34) + 'ms' }}>{t}</li>)}
              </ul>
            </li>
          ))}
        </ul>
        <p className="jiz-stack-note">Depth varies by tool. Some are daily practice; others are emerging workflows I actively explore and apply where they earn their place.</p>
      </div>
      <style>{`
.jiz-stack{position:relative;isolation:isolate;background:linear-gradient(180deg,#F7F8FA 0%,#E6EAEF 100%);padding-block:clamp(72px,7vw,124px)}
.jiz-stack a{color:#3E5606}
.jiz-stack a:hover{color:#0B0D10}
.jiz-stack a:focus-visible{outline:2px solid #3E5606;outline-offset:3px}
.jiz-stack-card a{color:var(--color-accent-primary)}
.jiz-stack-card a:hover{color:#EEFBD2}
.jiz-stack::before{content:'';position:absolute;inset:0;z-index:0;pointer-events:none;background:radial-gradient(ellipse 52% 38% at 20% 6%,rgba(100,225,255,.07),transparent 70%)}
.jiz-stack-inner{position:relative;z-index:1;width:min(1440px,calc(100% - 2*clamp(24px,6vw,112px)));margin-inline:auto}
.jiz-stack-head{max-width:740px;margin-bottom:clamp(30px,3vw,44px)}
.jiz-stack-eyebrow,.jiz-stack-title,.jiz-stack-sub{opacity:0;transform:translate3d(0,12px,0);transition:opacity 800ms cubic-bezier(.22,.61,.36,1),transform 800ms cubic-bezier(.22,.61,.36,1)}
.jiz-stack[data-in="true"] .jiz-stack-eyebrow,.jiz-stack[data-in="true"] .jiz-stack-title,.jiz-stack[data-in="true"] .jiz-stack-sub{opacity:1;transform:none}
.jiz-stack-title{transition-delay:90ms}
.jiz-stack-sub{transition-delay:190ms}
.jiz-stack-eyebrow{display:flex;align-items:center;gap:14px;font:var(--text-hud);font-size:.6875rem;letter-spacing:.22em;text-transform:uppercase;color:#2A2F37;margin:0 0 20px}
.jiz-stack-eyebrow-line{display:block;width:44px;height:2px;background:#8CB712}
.jiz-stack-title{font:var(--text-display);font-size:clamp(1.9rem,1.3rem + 1.8vw,2.9rem);line-height:1.1;letter-spacing:-.022em;color:#0B0D10;margin:0 0 18px;text-wrap:pretty}
.jiz-stack-sub{font:var(--text-body);font-size:clamp(.9375rem,.9rem + .22vw,1.0625rem);line-height:1.66;color:#3D444E;margin:0;max-width:64ch;text-wrap:pretty}
.jiz-stack-layers{display:flex;flex-wrap:wrap;align-items:center;gap:10px 12px;list-style:none;margin:0 0 clamp(34px,3.4vw,52px);padding:14px 0;border-top:1px solid rgba(11,13,16,.14);border-bottom:1px solid rgba(11,13,16,.14)}
.jiz-stack-layer{display:flex;align-items:center;gap:12px;opacity:0;transform:translate3d(0,6px,0);transition:opacity 640ms cubic-bezier(.22,.61,.36,1),transform 640ms cubic-bezier(.22,.61,.36,1)}
.jiz-stack[data-in="true"] .jiz-stack-layer{opacity:1;transform:none}
.jiz-stack-layer-label{font:var(--text-hud);font-size:.625rem;letter-spacing:.18em;text-transform:uppercase;color:#454C56}
.jiz-stack-layer:first-child .jiz-stack-layer-label,.jiz-stack-layer:last-child .jiz-stack-layer-label{color:#3E5606;font-weight:650}
.jiz-stack-layer-arrow{font-size:.75rem;color:#5B636E}
.jiz-stack-layer:last-child .jiz-stack-layer-arrow{display:none}
.jiz-stack-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(16px,1.8vw,28px);list-style:none;margin:0;padding:0}
.jiz-stack-card{position:relative;overflow:hidden;display:flex;flex-direction:column;gap:12px;min-width:0;padding:clamp(22px,2vw,32px);background:linear-gradient(180deg,#171A1F 0%,#12151A 100%);border:1px solid rgba(11,13,16,.16);border-radius:clamp(14px,1.2vw,20px);box-shadow:0 18px 40px -28px rgba(11,13,16,.45);opacity:0;transform:translate3d(0,20px,0);transition:opacity 780ms cubic-bezier(.22,.61,.36,1),transform 780ms cubic-bezier(.22,.61,.36,1),border-color 300ms ease,box-shadow 300ms ease,background 300ms ease}
.jiz-stack[data-in="true"] .jiz-stack-card{opacity:1;transform:none}
.jiz-stack-card:hover,.jiz-stack-card:focus-within{border-color:rgba(198,242,58,.4);background:linear-gradient(180deg,#1B2027 0%,#141821 100%);box-shadow:0 30px 58px -30px rgba(11,13,16,.55),0 0 0 1px rgba(198,242,58,.18);transform:translate3d(0,-4px,0);transition-delay:0ms}
.jiz-stack-motif{position:absolute;right:0;top:0;width:min(58%,240px);height:auto;color:var(--color-accent-secondary);opacity:.16;pointer-events:none}
.jiz-stack-motif g:first-child path{stroke-dasharray:340;stroke-dashoffset:340;transition:stroke-dashoffset 1800ms cubic-bezier(.22,.61,.36,1) 500ms}
.jiz-stack[data-in="true"] .jiz-stack-motif g:first-child path{stroke-dashoffset:0}
.jiz-stack-card--motif:hover .jiz-stack-motif,.jiz-stack-card--motif:focus-within .jiz-stack-motif{opacity:.3}
.jiz-stack-card-top{display:flex;align-items:center;gap:12px}
.jiz-stack-n{font:var(--text-hud);font-size:.5625rem;letter-spacing:.18em;color:rgba(217,221,227,.68)}
.jiz-stack-tier{padding:3px 9px;border-radius:var(--radius-pill);border:1px solid rgba(198,242,58,.2);background:rgba(198,242,58,.06);font:var(--text-hud);font-size:.5625rem;letter-spacing:.16em;text-transform:uppercase;color:var(--color-accent-primary)}
.jiz-stack-card-title{position:relative;font:var(--text-h3);font-size:1.125rem;line-height:1.3;letter-spacing:-.012em;color:var(--color-text-primary);margin:2px 0 0;text-wrap:pretty}
.jiz-stack-label{position:relative;font:var(--text-body);font-size:.875rem;line-height:1.6;color:rgba(217,221,227,.76);margin:0;max-width:60ch;text-wrap:pretty}
.jiz-stack-pills{display:flex;flex-wrap:wrap;gap:6px;list-style:none;margin:4px 0 0;padding:0}
.jiz-stack-pill{padding:5px 11px;border-radius:var(--radius-pill);background:rgba(255,255,255,.045);border:1px solid rgba(255,255,255,.045);font:var(--text-body);font-size:.6875rem;letter-spacing:.015em;color:rgba(232,238,226,.74);opacity:0;transform:translate3d(0,6px,0);transition:opacity 520ms cubic-bezier(.22,.61,.36,1),transform 520ms cubic-bezier(.22,.61,.36,1),background 240ms ease,border-color 240ms ease,color 240ms ease}
.jiz-stack[data-in="true"] .jiz-stack-pill{opacity:1;transform:none}
.jiz-stack-pill:hover{background:rgba(198,242,58,.13);border-color:rgba(198,242,58,.28);color:#EEFBD2}
.jiz-stack-note{margin:clamp(26px,2.6vw,38px) 0 0;font:var(--text-body);font-size:.8125rem;line-height:1.6;color:#525A65;max-width:70ch;text-wrap:pretty}
@media(max-width:960px){.jiz-stack-grid{grid-template-columns:1fr}}
@media(max-width:560px){.jiz-stack-card{transform:translate3d(0,12px,0)}.jiz-stack-motif{width:70%}}
@media(prefers-reduced-motion:reduce){.jiz-stack-eyebrow,.jiz-stack-title,.jiz-stack-sub,.jiz-stack-layer,.jiz-stack-card,.jiz-stack-pill{opacity:1;transform:none;transition:none}.jiz-stack-card:hover,.jiz-stack-card:focus-within{transform:none}.jiz-stack-motif g:first-child path{stroke-dasharray:none;stroke-dashoffset:0;transition:none}}
      `}</style>
    </section>
  );
}

function AboutMind() {
  const ref = React.useRef(null);
  const cardRef = React.useRef(null);
  const studioRef = React.useRef(null);
  const [active, setActive] = React.useState(false);
  const reduced = prefersReduced();
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setActive(true); return; }
    const fallback = setTimeout(() => setActive(true), 1200);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { clearTimeout(fallback); setActive(true); io.disconnect(); } });
    }, { threshold: 0.16, rootMargin: '200px 0px' });
    io.observe(el);
    return () => { clearTimeout(fallback); io.disconnect(); };
  }, []);
  React.useEffect(() => {
    const v = studioRef.current;
    if (!v || reduced) return;
    const attempt = () => { const p = v.play(); if (p && p.catch) p.catch(() => {}); };
    attempt();
    v.addEventListener('loadeddata', attempt);
    return () => v.removeEventListener('loadeddata', attempt);
  }, [active, reduced]);
  const onMove = React.useCallback((e) => {
    const el = cardRef.current;
    if (!el || prefersReduced()) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--am-mx', (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
    el.style.setProperty('--am-my', (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
  }, []);
  const onLeave = React.useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty('--am-mx', '0');
    el.style.setProperty('--am-my', '0');
  }, []);
  const showVideo = active && !reduced;
  return (
    <section className="jiz-am" ref={ref} data-in={active ? 'true' : 'false'} aria-labelledby="jiz-am-title">
      <div className="jiz-am-inner">
        <div className="jiz-am-col">
          <p className="jiz-am-eyebrow"><span className="jiz-am-eyebrow-line" aria-hidden="true" />About Jonathan</p>
          <h2 className="jiz-am-title" id="jiz-am-title">The mind behind the work.</h2>
          <p className="jiz-am-sub">I bring structure to ambiguity, humanity to technology, and momentum to learning experiences that move people from understanding to action.</p>
          <div className="jiz-am-copy">
            <p>I am a learning experience designer and strategy partner working across enterprise learning, product enablement, leadership development, AI-enabled workflows, and multimedia design.</p>
            <p>My strength is translating complexity into learning that feels clear, human, and useful — whether I am designing a leadership simulation, product training toolkit, executive explainer, or interactive eLearning experience.</p>
          </div>
          <p className="jiz-am-close">The throughline is simple: make the complex clear, make the learning useful, and make the experience worth remembering.</p>
        </div>
        <div className="jiz-am-col jiz-am-col--right">
          <figure className="jiz-am-card" ref={cardRef} onMouseMove={onMove} onMouseLeave={onLeave}>
            <div className="jiz-am-stage" role="img" aria-label="Jonathan speaking in a futuristic studio environment representing learning strategy and systems thinking.">
              <img className="jiz-am-poster" src="./assets/imagery/jonathan-portrait.png" alt="" aria-hidden="true" loading="eager" decoding="async" data-hidden={showVideo ? 'true' : 'false'} />
              {showVideo ? (
                <React.Fragment>
                  <video ref={studioRef} className="jiz-am-env" src="./assets/video/jiz-studio-ambient.mp4" autoPlay loop muted playsInline preload="metadata" aria-hidden="true" tabIndex={-1} />
                  <span className="jiz-am-env-grade" aria-hidden="true" />
                  <span className="jiz-am-contact" aria-hidden="true" />
                  <ChromaKeyVideo src="./assets/video/jiz-subject-greenscreen.mp4" className="jiz-am-subject" />
                </React.Fragment>
              ) : null}
              <span className="jiz-am-vignette" aria-hidden="true" />
              <span className="jiz-am-rim" aria-hidden="true" />
              <span className="jiz-am-rule" aria-hidden="true" />
            </div>
            <figcaption className="jiz-am-quote">
              <span className="jiz-am-quote-mark" aria-hidden="true" />
              <blockquote className="jiz-am-quote-text">“I translate complexity into learning people can use.”</blockquote>
              <p className="jiz-am-quote-by">Jonathan Iker Zamarripa · Learning Experience Design &amp; Strategy</p>
            </figcaption>
          </figure>
        </div>
      </div>
        <div className="jiz-am-os">
          <div className="jiz-am-os-head">
            <p className="jiz-am-os-eyebrow"><span className="jiz-am-eyebrow-line" aria-hidden="true" />My Operating System</p>
            <h3 className="jiz-am-os-title">How I move from complexity to clarity.</h3>
          </div>
          <ol className="jiz-am-os-rail">
            {[
              { n: '01', t: 'Understand First', c: 'Strip away noise to find the essential truth.' },
              { n: '02', t: 'Connect Systems', c: 'See the relationships between people, information, tools, and behavior.' },
              { n: '03', t: 'Prototype Early', c: 'Turn ideas into tangible experiences quickly.' },
              { n: '04', t: 'Design for Adoption', c: 'Build solutions people can understand, trust, and use.' }
            ].map((p, i) => (
              <li key={p.n} className="jiz-am-os-card" style={{ transitionDelay: (520 + i * 120) + 'ms' }} tabIndex={0}>
                <span className="jiz-am-os-node" aria-hidden="true" />
                <span className="jiz-am-os-n">{p.n}</span>
                <h4 className="jiz-am-os-card-title">{p.t}</h4>
                <p className="jiz-am-os-copy">{p.c}</p>
              </li>
            ))}
          </ol>
        </div>
      <style>{`
.jiz-am{position:relative;isolation:isolate;background:linear-gradient(158deg,#171A1F 0%,#1E232A 46%,#2A2F37 100%);border-top:1px solid rgba(255,255,255,.06);padding-block:clamp(72px,7vw,124px)}
.jiz-am::before{content:'';position:absolute;inset:0;z-index:0;pointer-events:none;background:radial-gradient(ellipse 48% 40% at 78% 20%,rgba(100,225,255,.07),transparent 70%),radial-gradient(ellipse 42% 36% at 8% 84%,rgba(198,242,58,.035),transparent 72%)}
.jiz-am-inner{position:relative;z-index:1;width:min(1440px,calc(100% - 2*clamp(24px,6vw,112px)));margin-inline:auto;display:grid;grid-template-columns:minmax(0,1.04fr) minmax(0,.96fr);gap:clamp(34px,4.4vw,84px);align-items:start}
.jiz-am-col{display:flex;flex-direction:column;min-width:0}
.jiz-am-eyebrow,.jiz-am-title,.jiz-am-sub,.jiz-am-copy,.jiz-am-close,.jiz-am-card{opacity:0;transform:translate3d(0,14px,0);transition:opacity 840ms cubic-bezier(.22,.61,.36,1),transform 840ms cubic-bezier(.22,.61,.36,1)}
.jiz-am-card{transform:translate3d(28px,0,0)}
.jiz-am[data-in="true"] .jiz-am-eyebrow,.jiz-am[data-in="true"] .jiz-am-title,.jiz-am[data-in="true"] .jiz-am-sub,.jiz-am[data-in="true"] .jiz-am-copy,.jiz-am[data-in="true"] .jiz-am-close,.jiz-am[data-in="true"] .jiz-am-card{opacity:1;transform:none}
.jiz-am-title{transition-delay:90ms}
.jiz-am-sub{transition-delay:190ms}
.jiz-am-copy{transition-delay:290ms}
.jiz-am-close{transition-delay:390ms}
.jiz-am-card{transition-delay:240ms}
.jiz-am-eyebrow{display:flex;align-items:center;gap:14px;font:var(--text-hud);font-size:.6875rem;letter-spacing:.22em;text-transform:uppercase;color:var(--color-accent-primary);margin:0 0 20px}
.jiz-am-eyebrow-line{display:block;width:44px;height:1px;background:linear-gradient(90deg,var(--color-accent-primary),rgba(198,242,58,.15))}
.jiz-am-title{font:var(--text-display);font-size:clamp(2rem,1.35rem + 1.9vw,3.1rem);line-height:1.08;letter-spacing:-.024em;color:var(--color-text-primary);margin:0 0 18px}
.jiz-am-sub{font:var(--text-body);font-size:clamp(1rem,.94rem + .28vw,1.1875rem);line-height:1.62;color:rgba(238,242,236,.9);margin:0 0 26px;max-width:50ch;text-wrap:pretty}
.jiz-am-copy{display:flex;flex-direction:column;gap:16px;margin:0}
.jiz-am-copy p{font:var(--text-body);font-size:.9375rem;line-height:1.78;color:rgba(222,228,233,.8);margin:0;max-width:62ch;text-wrap:pretty}
.jiz-am-close{margin:26px 0 0;padding-left:18px;border-left:1px solid rgba(198,242,58,.4);font:var(--text-body);font-size:.9375rem;line-height:1.7;color:rgba(238,242,236,.88);max-width:58ch;text-wrap:pretty}
.jiz-am-card{position:relative;display:flex;flex-direction:column;margin:0;overflow:hidden;background:linear-gradient(180deg,rgba(255,255,255,.05) 0%,rgba(255,255,255,.015) 100%);border:1px solid rgba(100,225,255,.18);border-radius:clamp(16px,1.4vw,24px);box-shadow:0 30px 62px -34px rgba(0,0,0,.9),0 0 46px -22px rgba(100,225,255,.22);transition:opacity 840ms cubic-bezier(.22,.61,.36,1),transform 840ms cubic-bezier(.22,.61,.36,1),border-color 320ms ease,box-shadow 320ms ease}
.jiz-am-card:hover{border-color:rgba(100,225,255,.32);box-shadow:0 38px 76px -34px rgba(0,0,0,.95),0 0 64px -20px rgba(100,225,255,.3)}
.jiz-am-stage{position:relative;overflow:hidden;aspect-ratio:3 / 2;background:radial-gradient(ellipse 70% 60% at 50% 40%,#16201F,#0B0F12 78%)}
.jiz-am-poster{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 20%;filter:saturate(.86) contrast(1.03)}
.jiz-am-poster[data-hidden="true"]{opacity:0}
.jiz-am-env{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:saturate(.72) brightness(.72) contrast(1.04);transform:scale(1.06) translate3d(calc(var(--am-mx,0)*-5px),calc(var(--am-my,0)*-4px),0);transition:transform 700ms cubic-bezier(.22,.61,.36,1)}
.jiz-am-env-grade{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 60% 52% at 50% 46%,rgba(100,225,255,.1),transparent 72%),linear-gradient(180deg,rgba(11,15,18,.34) 0%,rgba(11,15,18,.06) 42%,rgba(11,15,18,.66) 100%)}
.jiz-am-contact{position:absolute;left:50%;bottom:2%;width:56%;height:12%;transform:translateX(-50%);pointer-events:none;border-radius:50%;background:radial-gradient(ellipse,rgba(0,0,0,.62),transparent 70%);filter:blur(10px)}
.jiz-am-subject{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 18%;filter:saturate(.9) contrast(1.03) brightness(1.02) drop-shadow(0 18px 26px rgba(0,0,0,.5));transform:scale(1.02) translate3d(calc(var(--am-mx,0)*-9px),calc(var(--am-my,0)*-7px),0);transition:transform 640ms cubic-bezier(.22,.61,.36,1)}
.jiz-am-vignette{position:absolute;inset:0;pointer-events:none;box-shadow:inset 0 0 90px 22px rgba(8,12,14,.6)}
.jiz-am-rim{position:absolute;inset:0;pointer-events:none;border-radius:inherit;box-shadow:inset 0 0 0 1px rgba(100,225,255,.14),inset 0 -40px 60px -50px rgba(100,225,255,.5)}
.jiz-am-rule{position:absolute;left:clamp(18px,1.6vw,26px);bottom:clamp(18px,1.6vw,26px);width:36px;height:1px;background:var(--color-accent-primary);opacity:.65;transition:width 560ms cubic-bezier(.22,.61,.36,1),opacity 300ms ease}
.jiz-am-card:hover .jiz-am-rule{width:68px;opacity:1}
.jiz-am-quote{display:flex;flex-direction:column;gap:10px;padding:clamp(20px,2vw,30px)}
.jiz-am-quote-mark{width:30px;height:2px;background:linear-gradient(90deg,var(--color-accent-primary),rgba(198,242,58,.08))}
.jiz-am-quote-text{font:var(--text-h3);font-size:clamp(1.05rem,.95rem + .45vw,1.3rem);line-height:1.4;letter-spacing:-.012em;color:var(--color-text-primary);margin:0;text-wrap:pretty}
.jiz-am-quote-by{font:var(--text-hud);font-size:.5625rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(222,228,233,.68);margin:0}
@media(max-width:1000px){.jiz-am-inner{grid-template-columns:1fr}.jiz-am-col--right{order:-1}.jiz-am-card{transform:translate3d(0,16px,0);max-width:620px}}

.jiz-am-os{position:relative;z-index:1;width:min(1440px,calc(100% - 2*clamp(24px,6vw,112px)));margin:clamp(52px,5vw,84px) auto 0;padding-top:clamp(30px,3vw,44px);border-top:1px solid rgba(255,255,255,.08)}
.jiz-am-os-head{display:flex;flex-direction:column;margin-bottom:clamp(24px,2.6vw,38px)}
.jiz-am-os-eyebrow,.jiz-am-os-title{opacity:0;transform:translate3d(0,12px,0);transition:opacity 780ms cubic-bezier(.22,.61,.36,1) 400ms,transform 780ms cubic-bezier(.22,.61,.36,1) 400ms}
.jiz-am[data-in="true"] .jiz-am-os-eyebrow,.jiz-am[data-in="true"] .jiz-am-os-title{opacity:1;transform:none}
.jiz-am-os-title{transition-delay:470ms}
.jiz-am-os-eyebrow{display:flex;align-items:center;gap:14px;font:var(--text-hud);font-size:.625rem;letter-spacing:.22em;text-transform:uppercase;color:var(--color-accent-primary);margin:0 0 14px}
.jiz-am-os-title{font:var(--text-h3);font-size:clamp(1.2rem,1.05rem + .5vw,1.6rem);line-height:1.26;letter-spacing:-.016em;color:var(--color-text-primary);margin:0}
.jiz-am-os-rail{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(14px,1.5vw,24px);list-style:none;margin:0;padding:0}
.jiz-am-os-rail::before{content:'';position:absolute;left:6px;right:6px;top:5px;height:1px;background:linear-gradient(90deg,rgba(100,225,255,.4),rgba(100,225,255,.1) 74%,transparent);transform:scaleX(0);transform-origin:left center;transition:transform 1400ms cubic-bezier(.22,.61,.36,1) 520ms}
.jiz-am[data-in="true"] .jiz-am-os-rail::before{transform:scaleX(1)}
.jiz-am-os-card{position:relative;display:flex;flex-direction:column;gap:8px;min-width:0;padding:26px clamp(16px,1.4vw,22px) clamp(18px,1.6vw,24px);background:linear-gradient(180deg,rgba(255,255,255,.045) 0%,rgba(255,255,255,.015) 100%);border:1px solid rgba(255,255,255,.07);border-radius:clamp(12px,1vw,16px);opacity:0;transform:translate3d(0,18px,0);transition:opacity 760ms cubic-bezier(.22,.61,.36,1),transform 760ms cubic-bezier(.22,.61,.36,1),border-color 300ms ease,box-shadow 300ms ease,background 300ms ease}
.jiz-am[data-in="true"] .jiz-am-os-card{opacity:1;transform:none}
.jiz-am-os-card:hover,.jiz-am-os-card:focus-visible{border-color:rgba(100,225,255,.3);background:linear-gradient(180deg,rgba(100,225,255,.05) 0%,rgba(255,255,255,.016) 100%);box-shadow:0 24px 48px -30px rgba(0,0,0,.85),0 0 0 1px rgba(198,242,58,.07);transform:translate3d(0,-4px,0);transition-delay:0ms}
.jiz-am-os-card:focus-visible{outline:2px solid var(--color-accent-primary);outline-offset:4px}
.jiz-am-os-node{position:absolute;left:0;top:0;width:9px;height:9px;border-radius:50%;border:1px solid rgba(100,225,255,.5);background:#1B2028;transition:background 300ms ease,border-color 300ms ease}
.jiz-am-os-card:first-child .jiz-am-os-node{background:var(--color-accent-secondary);border-color:var(--color-accent-secondary)}
.jiz-am-os-card:hover .jiz-am-os-node,.jiz-am-os-card:focus-visible .jiz-am-os-node{background:var(--color-accent-primary);border-color:var(--color-accent-primary)}
.jiz-am-os-n{font:var(--text-hud);font-size:.5625rem;letter-spacing:.2em;color:var(--color-accent-primary)}
.jiz-am-os-card-title{font:var(--text-body);font-size:.9375rem;font-weight:650;line-height:1.3;letter-spacing:-.008em;color:var(--color-text-primary);margin:0}
.jiz-am-os-copy{font:var(--text-body);font-size:.8125rem;line-height:1.55;color:rgba(222,228,233,.76);margin:0;text-wrap:pretty}
@media(max-width:900px){.jiz-am-os-rail{grid-template-columns:repeat(2,minmax(0,1fr))}.jiz-am-os-rail::before{display:none}}
@media(max-width:560px){.jiz-am-os-rail{grid-template-columns:1fr}.jiz-am-os-card{transform:translate3d(0,12px,0)}}
@media(prefers-reduced-motion:reduce){.jiz-am-eyebrow,.jiz-am-title,.jiz-am-sub,.jiz-am-copy,.jiz-am-close,.jiz-am-card,.jiz-am-os-eyebrow,.jiz-am-os-title,.jiz-am-os-card{opacity:1;transform:none;transition:none}.jiz-am-env,.jiz-am-subject{transform:none;transition:none}.jiz-am-rule{transition:none}.jiz-am-os-rail::before{transform:scaleX(1);transition:none}.jiz-am-os-card:hover,.jiz-am-os-card:focus-visible{transform:none}}
      `}</style>
    </section>
  );
}

function CareerArc() {
  const ref = React.useRef(null);
  const [active, setActive] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setActive(true); return; }
    const fallback = setTimeout(() => setActive(true), 1200);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { clearTimeout(fallback); setActive(true); io.disconnect(); } });
    }, { threshold: 0.2 });
    io.observe(el);
    return () => { clearTimeout(fallback); io.disconnect(); };
  }, []);
  const stages = [
    { n: '01', title: 'Education Innovation', copy: 'Led digital learning adoption with educators, where teaching me to design for real behavior change began.' },
    { n: '02', title: 'Digital Transformation', copy: 'Guided communities through platform change, learning that adoption is a human problem before a technical one.' },
    { n: '03', title: 'Enterprise L&D', copy: 'Designed leadership and enterprise learning for audiences from frontline teams to SVPs.' },
    { n: '04', title: 'Product & Technology Enablement', copy: 'Turned evolving platforms into release-ready learning that keeps global teams operationally current.' }
  ];
  return (
    <section className="jiz-arc" ref={ref} data-in={active ? 'true' : 'false'} aria-labelledby="jiz-arc-title">
      <div className="jiz-arc-inner">
        <div className="jiz-arc-head">
          <p className="jiz-arc-eyebrow"><span className="jiz-arc-eyebrow-line" aria-hidden="true" />The Journey</p>
          <h2 className="jiz-arc-title" id="jiz-arc-title">Built through experience.</h2>
          <p className="jiz-arc-sub">A practice shaped across learning, systems, technology, storytelling, and enterprise transformation.</p>
        </div>
        <ol className="jiz-arc-rail">
          {stages.map((st, i) => (
            <li key={st.n} className="jiz-arc-stage" style={{ transitionDelay: (240 + i * 130) + 'ms' }}>
              <span className="jiz-arc-node" aria-hidden="true" />
              <span className="jiz-arc-n">{st.n}</span>
              <h3 className="jiz-arc-stage-title">{st.title}</h3>
              <p className="jiz-arc-copy">{st.copy}</p>
            </li>
          ))}
        </ol>
      </div>
      <style>{`
.jiz-arc{position:relative;isolation:isolate;background:#0B0D10;border-top:1px solid rgba(255,255,255,.05);padding-block:clamp(58px,5.4vw,92px)}
.jiz-arc-inner{width:min(1440px,calc(100% - 2*clamp(24px,6vw,112px)));margin-inline:auto}
.jiz-arc-head{max-width:620px;margin-bottom:clamp(34px,3.4vw,54px)}
.jiz-arc-eyebrow,.jiz-arc-title,.jiz-arc-sub{opacity:0;transform:translate3d(0,12px,0);transition:opacity 800ms cubic-bezier(.22,.61,.36,1),transform 800ms cubic-bezier(.22,.61,.36,1)}
.jiz-arc[data-in="true"] .jiz-arc-eyebrow,.jiz-arc[data-in="true"] .jiz-arc-title,.jiz-arc[data-in="true"] .jiz-arc-sub{opacity:1;transform:none}
.jiz-arc-title{transition-delay:90ms}
.jiz-arc-sub{transition-delay:190ms}
.jiz-arc-eyebrow{display:flex;align-items:center;gap:14px;font:var(--text-hud);font-size:.6875rem;letter-spacing:.22em;text-transform:uppercase;color:var(--color-accent-secondary);margin:0 0 18px}
.jiz-arc-eyebrow-line{display:block;width:44px;height:1px;background:linear-gradient(90deg,var(--color-accent-secondary),rgba(100,225,255,.14))}
.jiz-arc-title{font:var(--text-display);font-size:clamp(1.7rem,1.2rem + 1.5vw,2.5rem);line-height:1.1;letter-spacing:-.022em;color:var(--color-text-primary);margin:0 0 14px}
.jiz-arc-sub{font:var(--text-body);font-size:clamp(.9375rem,.9rem + .2vw,1.0625rem);line-height:1.66;color:rgba(217,221,227,.7);margin:0;max-width:56ch;text-wrap:pretty}
.jiz-arc-rail{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(16px,1.8vw,30px);list-style:none;margin:0;padding:0}
.jiz-arc-rail::before{content:'';position:absolute;left:5px;right:5px;top:4px;height:1px;background:linear-gradient(90deg,rgba(100,225,255,.42),rgba(198,242,58,.3) 70%,rgba(198,242,58,.08));transform:scaleX(0);transform-origin:left center;transition:transform 1400ms cubic-bezier(.22,.61,.36,1) 200ms}
.jiz-arc[data-in="true"] .jiz-arc-rail::before{transform:scaleX(1)}
.jiz-arc-stage{position:relative;display:flex;flex-direction:column;gap:8px;min-width:0;padding-top:26px;opacity:0;transform:translate3d(0,18px,0);transition:opacity 760ms cubic-bezier(.22,.61,.36,1),transform 760ms cubic-bezier(.22,.61,.36,1)}
.jiz-arc[data-in="true"] .jiz-arc-stage{opacity:1;transform:none}
.jiz-arc-node{position:absolute;left:0;top:0;width:9px;height:9px;border-radius:50%;border:1px solid rgba(100,225,255,.5);background:#0B0D10}
.jiz-arc-stage:last-child .jiz-arc-node{background:var(--color-accent-primary);border-color:var(--color-accent-primary)}
.jiz-arc-n{font:var(--text-hud);font-size:.5625rem;letter-spacing:.2em;color:rgba(217,221,227,.6)}
.jiz-arc-stage-title{font:var(--text-body);font-size:1rem;font-weight:650;line-height:1.3;letter-spacing:-.01em;color:var(--color-text-primary);margin:0;text-wrap:pretty}
.jiz-arc-copy{font:var(--text-body);font-size:.8125rem;line-height:1.58;color:rgba(217,221,227,.7);margin:0;text-wrap:pretty}
@media(max-width:900px){.jiz-arc-rail{grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(20px,2.6vw,30px)}.jiz-arc-rail::before{display:none}.jiz-arc-stage{padding-top:0;padding-left:22px;border-left:1px solid rgba(100,225,255,.16)}.jiz-arc-node{left:-5px;top:4px}}
@media(max-width:560px){.jiz-arc-rail{grid-template-columns:1fr}.jiz-arc-stage{transform:translate3d(0,10px,0)}}
@media(prefers-reduced-motion:reduce){.jiz-arc-eyebrow,.jiz-arc-title,.jiz-arc-sub,.jiz-arc-stage{opacity:1;transform:none;transition:none}.jiz-arc-rail::before{transform:scaleX(1);transition:none}}
      `}</style>
    </section>
  );
}

function FoundationManifesto() {
  const ref = React.useRef(null);
  const [active, setActive] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setActive(true); return; }
    const fallback = setTimeout(() => setActive(true), 1200);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { clearTimeout(fallback); setActive(true); io.disconnect(); } });
    }, { threshold: 0.14 });
    io.observe(el);
    return () => { clearTimeout(fallback); io.disconnect(); };
  }, []);
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
    <section className="jiz-found" ref={ref} data-in={active ? 'true' : 'false'} aria-labelledby="jiz-found-title">
      <div className="jiz-found-inner">
        <div className="jiz-found-head">
          <p className="jiz-found-eyebrow"><span className="jiz-found-eyebrow-line" aria-hidden="true" />Foundation</p>
          <h2 className="jiz-found-title" id="jiz-found-title">The principles behind every decision.</h2>
          <p className="jiz-found-sub">Eight commitments that hold whether the work is a leadership simulation, a platform launch, or an AI-assisted production run.</p>
        </div>
        <ol className="jiz-found-list">
          {principles.map((p, i) => (
            <li key={p.n} className="jiz-found-item" style={{ transitionDelay: (200 + i * 80) + 'ms' }}>
              <span className="jiz-found-n">{p.n}</span>
              <div className="jiz-found-body">
                <h3 className="jiz-found-item-title">{p.t}</h3>
                <p className="jiz-found-copy">{p.c}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <style>{`
.jiz-found{position:relative;isolation:isolate;background:linear-gradient(180deg,#F7F8FA 0%,#D9DDE3 100%);padding-block:clamp(72px,7vw,120px)}
.jiz-found a{color:#3E5606}
.jiz-found a:hover{color:#0B0D10}
.jiz-found a:focus-visible{outline:2px solid #3E5606;outline-offset:3px}
.jiz-found-inner{width:min(1440px,calc(100% - 2*clamp(24px,6vw,112px)));margin-inline:auto}
.jiz-found-head{max-width:660px;margin-bottom:clamp(40px,4vw,64px)}
.jiz-found-eyebrow,.jiz-found-title,.jiz-found-sub{opacity:0;transform:translate3d(0,12px,0);transition:opacity 800ms cubic-bezier(.22,.61,.36,1),transform 800ms cubic-bezier(.22,.61,.36,1)}
.jiz-found[data-in="true"] .jiz-found-eyebrow,.jiz-found[data-in="true"] .jiz-found-title,.jiz-found[data-in="true"] .jiz-found-sub{opacity:1;transform:none}
.jiz-found-title{transition-delay:90ms}
.jiz-found-sub{transition-delay:190ms}
.jiz-found-eyebrow{display:flex;align-items:center;gap:14px;font:var(--text-hud);font-size:.6875rem;letter-spacing:.22em;text-transform:uppercase;color:#2A2F37;margin:0 0 18px}
.jiz-found-eyebrow-line{display:block;width:44px;height:2px;background:#8CB712}
.jiz-found-title{font:var(--text-display);font-size:clamp(1.95rem,1.3rem + 1.9vw,3rem);line-height:1.08;letter-spacing:-.026em;color:#0B0D10;margin:0 0 16px;text-wrap:pretty}
.jiz-found-sub{font:var(--text-body);font-size:clamp(.9375rem,.9rem + .22vw,1.0625rem);line-height:1.68;color:#3D444E;margin:0;max-width:58ch;text-wrap:pretty}
.jiz-found-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 clamp(30px,4vw,80px);list-style:none;margin:0;padding:0;border-top:1px solid rgba(11,13,16,.14)}
.jiz-found-item{display:flex;align-items:flex-start;gap:clamp(14px,1.4vw,22px);min-width:0;padding:clamp(20px,2vw,28px) 0;border-bottom:1px solid rgba(11,13,16,.14);opacity:0;transform:translate3d(0,16px,0);transition:opacity 720ms cubic-bezier(.22,.61,.36,1),transform 720ms cubic-bezier(.22,.61,.36,1)}
.jiz-found[data-in="true"] .jiz-found-item{opacity:1;transform:none}
.jiz-found-n{flex:none;font:var(--text-hud);font-size:.625rem;letter-spacing:.18em;color:#414954;padding-top:5px}
.jiz-found-body{min-width:0;display:flex;flex-direction:column;gap:6px}
.jiz-found-item-title{position:relative;font:var(--text-h3);font-size:clamp(1.0625rem,1rem + .35vw,1.3rem);line-height:1.26;letter-spacing:-.016em;color:#0B0D10;margin:0;text-wrap:pretty}
.jiz-found-copy{font:var(--text-body);font-size:.875rem;line-height:1.62;color:#454C56;margin:0;max-width:46ch;text-wrap:pretty}
@media(max-width:820px){.jiz-found-list{grid-template-columns:1fr}}
@media(prefers-reduced-motion:reduce){.jiz-found-eyebrow,.jiz-found-title,.jiz-found-sub,.jiz-found-item{opacity:1;transform:none;transition:none}}
      `}</style>
    </section>
  );
}

function Homepage({ onOpenCaseStudy }) {
  const { NavBar, Button } = window.JIZPortfolioSite_b3ba38;
  const sectionRefs = React.useRef([]);
  const [activeSection, setActiveSection] = React.useState(0);
  const reduced = prefersReduced();

  const navItems = ['Work', 'Capabilities', 'Method', 'Thinking', 'Stack', 'About', 'Archive'];
  const sectionLabels = ['Hero', 'About', 'Work', 'Creative Lab', 'Thinking', "Let's Build", 'Capabilities', 'Method', 'Archived Work', 'Stack', 'Journey', 'Foundation'];
  const sectionMap = React.useMemo(() => ({
    Home: 0,
    Hero: 0,
    About: 1,
    'Featured Work': 2,
    Work: 2,
    Capabilities: 6,
    'Core Capabilities': 6,
    Method: 7,
    Tools: 9,
    Stack: 9,
    'Tools & Platforms': 9,
    Insight: 4,
    Thinking: 4,
    Journey: 10,
    'The Journey': 10,
    Foundation: 11,
    'The Method': 7,
    Archive: 8,
    'Extended Archive ': 8,
    'Extended Archive': 8,
    'Thinking in Motion': 4,
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
    scrollToElement(target, navOffset());
    setActiveSection(index);
  }, []);

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
        secondaryItems={['Creative Lab', 'Resume', 'LinkedIn']}
        active={activeNavLabel}
        onNavigate={(item) => {
          const targetIndex = sectionMap[item];
          if (item === 'Archived Work') {
            window.location.href = 'https://jonathan-iker-zamarripa.webflow.io/projects';
          } else if (item === 'Resume') {
            window.open('https://elearningportfolio-jz.s3.us-east-1.amazonaws.com/Public_Career_Overview.pdf', '_blank', 'noopener,noreferrer');
          } else if (item === 'LinkedIn') {
            window.open('https://www.linkedin.com/in/jonathanzamarripa/', '_blank', 'noopener,noreferrer');
          } else if (targetIndex !== undefined) {
            scrollToSection(targetIndex);
          } else {
            window.jizNavigate?.(item);
          }
        }}
        onConnect={() => scrollToSection(5)}
      />

      <main style={{ flex: 1, position: 'relative', zIndex: 1, overflow: 'visible' }}>

        <div ref={registerSection(0)}><Hero onExploreWork={() => scrollToSection(2)} onConnect={() => scrollToSection(5)} /></div>
        <ImpactSnapshot />
        <div ref={registerSection(2)} data-section="featured-work"><FeaturedWorkV2 onOpenWork={onOpenCaseStudy} /></div>
        <div ref={registerSection(6)} data-section="capabilities"><CoreCapabilities /></div>
        <div ref={registerSection(7)} data-section="method"><MethodSection /></div>
        <div ref={registerSection(4)} data-section="thinking-in-motion"><ThinkingInMotion /></div>
        <div ref={registerSection(9)} data-section="tools"><LearningStack /></div>
        <div ref={registerSection(1)} data-section="about"><AboutMind /></div>
        <div ref={registerSection(10)} data-section="journey"><CareerArc /></div>
        <div ref={registerSection(11)} data-section="foundation"><FoundationManifesto /></div>
        <div ref={registerSection(3)}><FilmSection /></div>
        <div ref={registerSection(8)} data-section="archive"><ArchiveBridge /></div>

        <div ref={registerSection(5)}>
          <LetsBuild onExploreWork={() => scrollToSection(2)} />
          <FinalMoment onNavigate={scrollToSection} />
        </div>
      </main>
    </div>
  );
}

window.HomepageExports = { Homepage };