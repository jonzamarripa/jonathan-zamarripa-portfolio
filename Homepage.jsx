const prefersReduced = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (typeof document !== 'undefined' && !document.getElementById('jiz-reveal-highlight-kf')) {
  const s = document.createElement('style');
  s.id = 'jiz-reveal-highlight-kf';
  s.textContent = '@keyframes jiz-reveal-highlight{0%{box-shadow:0 0 0 0 rgba(198,242,58,0)}25%{box-shadow:0 0 28px 4px rgba(198,242,58,.35)}100%{box-shadow:0 0 0 0 rgba(198,242,58,0)}}';
  document.head.appendChild(s);
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
    let raf, isVisible = false, last = 0;
    const MAX_W = 640, FRAME_MS = 1000 / 30;
    const io = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
      if (isVisible) { if (video.paused) video.play().catch(() => {}); }
      else if (!video.paused) video.pause();
    }, { threshold: 0.01 });
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
    const onLoaded = () => { enforceMute(); if (isVisible) video.play().catch(() => {}); };
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
      <video ref={videoRef} src={src} loop muted playsInline preload="metadata" style={{ display: 'none' }} />
      <canvas ref={canvasRef} className={className} style={style} />
    </React.Fragment>
  );
}

function InViewVideo({ eager = false, videoRef, children, ...rest }) {
  const local = React.useRef(null);
  const setRef = React.useCallback((el) => { local.current = el; if (videoRef) videoRef.current = el; }, [videoRef]);
  React.useEffect(() => {
    const v = local.current;
    if (!v) return undefined;
    v.muted = true;
    if (prefersReduced()) { v.preload = 'metadata'; return undefined; }
    if (typeof IntersectionObserver === 'undefined') { v.play().catch(() => {}); return undefined; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { const p = v.play(); if (p && p.catch) p.catch(() => {}); }
      else if (!v.paused) v.pause();
    }, { rootMargin: '200px 0px' });
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return <video ref={setRef} muted loop playsInline autoPlay={eager} preload={eager ? 'auto' : 'none'} {...rest}>{children}</video>;
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
  return (
    <section className="hero">
      <div className="hero-environment" aria-hidden="true">
        <div className="hero-base-gradient" />
        <div className="hero-signal-field" />
        <div className="hero-mesh" />
        <LearningPathways />
        <div className="hero-ambient-glow hero-ambient-glow--blue" />
        <div className="hero-ambient-glow hero-ambient-glow--chartreuse" />
      </div>

      <div className="hero-content">
        <div className="hero-copy">
          <h1 className="hero-title hero-fade hero-fade--2"><span className="hero-title-main">From complex change </span><span className="hero-title-accent">to finished experience.</span></h1>
          <p className="hero-lead hero-fade hero-fade--3">I turn complex business and learning challenges into experiences people can understand and use—from strategy and experience design to film, AI-enabled production, and the finished build.</p>
          <p className="hero-support hero-fade hero-fade--4">Learning Strategy <span className="hero-dot">•</span> Experience Design <span className="hero-dot">•</span> Creative Technology <span className="hero-dot">•</span> Film &amp; Media</p>
          <div className="hero-actions hero-fade hero-fade--5">
            <Button variant="primary" onClick={onExploreWork}>View Work</Button>
            <Button variant="secondary" icon={false} onClick={() => window.open(RESUME_URL, '_blank', 'noopener')}>View Resume</Button>
          </div>
        </div>
      </div>

      <div className="hero-video-stage" aria-hidden="true">
        {(window.matchMedia && window.matchMedia('(max-width: 768px)').matches)
          ? <img className="hero-video" src="./assets/imagery/jonathan-hero-poster.webp" alt="" decoding="async" fetchpriority="high" />
          : <InViewVideo eager={!prefersReduced()} className="hero-video" poster="./assets/imagery/jonathan-hero-poster.webp" disablePictureInPicture tabIndex={-1} onLoadedData={e => { e.target.muted = true; e.target.volume = 0; }}>
              <source src="./assets/video/jonathan-hero.mp4" type="video/mp4" />
            </InViewVideo>}
        <div className="hero-video-blend" />
      </div>
      <div className="hero-foreground-atmosphere" aria-hidden="true" />

      <style>{`
.hero{position:relative;isolation:isolate;overflow:hidden;width:100%;min-height:calc(100svh - 96px);background:radial-gradient(ellipse at 74% 42%,rgba(22,113,163,.16) 0%,rgba(20,74,91,.09) 30%,transparent 64%),radial-gradient(ellipse at 40% 54%,rgba(180,226,63,.055) 0%,transparent 52%)}
.hero-environment{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;background:transparent}
.hero-base-gradient{position:absolute;inset:0;background:linear-gradient(90deg,rgba(8,13,11,.96) 0%,rgba(9,16,14,.88) 38%,rgba(10,19,17,.7) 62%,rgba(9,16,15,.5) 82%,rgba(8,14,13,.34) 100%)}
.hero-signal-field{position:absolute;inset:-8%;opacity:.09;background-image:radial-gradient(circle at 18% 48%,rgba(115,224,255,.09) 0 1px,transparent 2px),radial-gradient(circle at 42% 64%,rgba(197,255,45,.06) 0 1px,transparent 2px),radial-gradient(circle at 78% 38%,rgba(115,224,255,.1) 0 1px,transparent 2px);background-size:160px 140px,220px 180px,190px 170px}
.hero-ambient-glow{position:absolute;pointer-events:none;border-radius:50%;filter:blur(90px)}
.hero-ambient-glow--blue{width:min(72vw,1200px);height:min(72vw,1200px);right:-18vw;top:-16%;background:radial-gradient(circle,rgba(29,132,196,.2) 0%,rgba(24,91,126,.1) 38%,transparent 72%)}
.hero-ambient-glow--chartreuse{width:min(46vw,760px);height:min(38vw,640px);left:12%;bottom:-26%;background:radial-gradient(circle,rgba(197,255,45,.028) 0%,transparent 68%)}
.hero-content{position:relative;z-index:5;display:grid;grid-template-columns:52fr 48fr;column-gap:clamp(24px,3vw,56px);align-items:center;width:100%;max-width:1800px;min-height:calc(100svh - 96px);margin-inline:auto;padding-block:clamp(64px,7vw,104px);padding-inline:clamp(28px,7.9vw,152px)}
.hero-copy{position:relative;z-index:2;grid-column:1;max-width:640px}
.hero-text-scrim{position:absolute;z-index:1;left:clamp(-72px,-4vw,-24px);top:6%;bottom:6%;right:8%;pointer-events:none;-webkit-mask-image:radial-gradient(ellipse 70% 60% at 30% 50%,#000 0%,#000 55%,transparent 100%);mask-image:radial-gradient(ellipse 70% 60% at 30% 50%,#000 0%,#000 55%,transparent 100%);background:radial-gradient(ellipse 60% 55% at 24% 46%,rgba(5,9,8,.5),transparent 74%)}
.hero-eyebrow{margin-bottom:22px}
.hero-title{font:var(--text-display);font-weight:750;font-size:clamp(2.5rem,1.6rem + 2.6vw,4.4rem);line-height:1.01;letter-spacing:-.026em;text-wrap:balance;color:var(--color-text-primary);text-shadow:0 2px 28px rgba(0,0,0,.55),0 1px 2px rgba(0,0,0,.4);margin:0 0 30px}
.hero-title-main{display:block;font-size:1.22em;max-width:11ch}
.hero-title-accent{display:block;margin-top:.12em;color:var(--color-accent-primary);font-weight:300;letter-spacing:-.012em;max-width:13ch;text-shadow:0 2px 24px rgba(0,0,0,.5)}
.hero-lead{font:var(--text-body-lg);font-size:clamp(1.125rem,1rem + .45vw,1.4375rem);line-height:1.5;color:var(--color-text-primary);text-shadow:0 2px 16px rgba(0,0,0,.5);max-width:560px;margin:0 0 32px;text-wrap:pretty}
.hero-support{font:var(--text-body);font-size:clamp(.75rem,.72rem + .13vw,.875rem);font-weight:650;line-height:1.6;letter-spacing:.06em;text-transform:uppercase;color:rgba(255,255,255,.88);text-shadow:0 2px 12px rgba(0,0,0,.55);max-width:none;margin:0;text-wrap:pretty}
.hero-dot{color:var(--color-accent-primary);opacity:.8;padding:0 5px}
@media(min-width:1180px){.hero-support{width:max-content;max-width:min(76vw,700px)}}
@media(min-width:1024px) and (max-width:1179.98px){.hero-support{width:max-content;max-width:min(66vw,620px)}}
.hero-actions{display:flex;flex-wrap:wrap;gap:14px;align-items:center;margin-top:38px}
.hero-mesh{position:absolute;inset:-10%;background:radial-gradient(ellipse 42% 38% at 22% 30%,rgba(29,132,196,.09) 0%,transparent 62%),radial-gradient(ellipse 36% 34% at 62% 74%,rgba(198,242,58,.04) 0%,transparent 64%),radial-gradient(ellipse 48% 40% at 84% 22%,rgba(115,224,255,.055) 0%,transparent 66%);filter:blur(36px);opacity:.7;animation:hero-mesh-drift 68s ease-in-out infinite alternate}
@keyframes hero-mesh-drift{0%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(-1%,.7%,0) scale(1.02)}100%{transform:translate3d(.8%,-.6%,0) scale(1.01)}}
.hero-pathways{position:absolute;inset:0;width:100%;height:100%;opacity:.18}
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
.hero-portrait{position:absolute;z-index:2;right:clamp(64px,9vw,150px);bottom:-7%;width:clamp(376px,31vw,600px);height:114%;max-width:none;max-height:114%;object-fit:cover;object-position:center 9%;transform:translate3d(0,0,0);transform-origin:right bottom;pointer-events:auto;cursor:pointer;opacity:.94;filter:drop-shadow(-30px 6px 52px rgba(27,128,194,.2)) drop-shadow(-10px 0 30px rgba(49,165,223,.12));-webkit-mask-image:linear-gradient(to bottom,#000 50%,rgba(0,0,0,.85) 72%,transparent 95%),linear-gradient(to right,transparent 0%,#000 34%),linear-gradient(to left,transparent 0%,#000 20%),linear-gradient(to top,transparent 0%,#000 12%);-webkit-mask-composite:source-in,source-in,source-in;mask-image:linear-gradient(to bottom,#000 50%,rgba(0,0,0,.85) 72%,transparent 95%),linear-gradient(to right,transparent 0%,#000 34%),linear-gradient(to left,transparent 0%,#000 20%),linear-gradient(to top,transparent 0%,#000 12%);mask-composite:intersect}
.hero-portrait-backlight{position:absolute;right:-8vw;top:8%;width:min(50vw,840px);height:min(52vw,880px);border-radius:50%;background:radial-gradient(ellipse at 56% 46%,rgba(48,169,236,.15) 0%,rgba(26,111,162,.08) 26%,rgba(19,72,99,.04) 48%,transparent 74%);filter:blur(48px);opacity:.75}
.hero-portrait-edge-glow{position:absolute;inset:0;z-index:3;pointer-events:none;background:radial-gradient(ellipse at 74% 48%,rgba(47,166,227,.11) 0%,rgba(31,110,159,.06) 30%,transparent 62%);mix-blend-mode:screen;filter:blur(14px)}
.hero-portrait-vignette{position:absolute;z-index:5;right:0;bottom:0;width:58%;height:52%;pointer-events:none;background:radial-gradient(ellipse 80% 86% at 76% 98%,rgba(5,9,8,.74) 0%,rgba(5,9,8,.4) 44%,transparent 76%)}
.hero-portrait-haze{position:absolute;z-index:4;right:-2%;bottom:-3%;width:66%;height:58%;pointer-events:none;background:radial-gradient(ellipse at 68% 58%,rgba(54,160,204,.1) 0%,rgba(26,92,109,.06) 34%,transparent 70%),linear-gradient(90deg,transparent 10%,rgba(17,78,94,.04) 48%,transparent 92%);filter:blur(20px);mix-blend-mode:screen}
.hero-foreground-atmosphere{position:absolute;inset:0;z-index:4;pointer-events:none;background:radial-gradient(ellipse at 70% 66%,rgba(52,154,198,.075) 0%,transparent 44%),linear-gradient(90deg,transparent 34%,rgba(18,72,83,.03) 56%,transparent 88%);mix-blend-mode:screen}
@media(max-width:1180px){.hero-content{grid-template-columns:1fr}.hero-copy{max-width:520px}.hero-title{font-size:clamp(2.1rem,3.6vw,3rem)}.hero-lead{max-width:100%}.hero-text-scrim{left:clamp(-48px,-3vw,-16px)}.hero-portrait{right:-40px;width:clamp(340px,40vw,620px);opacity:.94}}
@media(max-width:1023.98px){.hero-support{width:auto;max-width:100%}}
@media(max-width:900px){.hero{min-height:auto}.hero-content{min-height:auto;padding-top:92px;padding-bottom:520px}.hero-copy{max-width:620px}.hero-portrait{right:50%;bottom:-8px;width:min(640px,94vw);transform:translateX(50%)}.hero-portrait-backlight{right:50%;top:auto;bottom:-12%;width:100vw;height:640px;transform:translateX(50%)}.hero-portrait-haze{right:0;width:100%}}
@media(max-width:768px){.hero{min-height:auto}.hero-content{min-height:auto;padding-top:48px;padding-bottom:480px;grid-template-columns:1fr;padding-inline:24px}.hero-copy{max-width:100%;position:relative;z-index:6}.hero-eyebrow{margin-bottom:18px}.hero-title{font-size:clamp(1.85rem,5.4vw,2.6rem);margin:0 0 22px}.hero-lead{font-size:clamp(1rem,3.4vw,1.1875rem);margin:0 0 24px;max-width:100%}.hero-support{font-size:.8125rem;max-width:100%;margin:0}.hero-actions{margin-top:32px;gap:12px}.hero-text-scrim{left:-12vw;width:130vw;background:linear-gradient(180deg,rgba(6,10,9,.86) 0%,rgba(6,10,9,.6) 70%,transparent 100%)}.hero-portrait-stage{z-index:2}.hero-portrait{position:absolute;right:50%;bottom:auto;top:480px;width:min(420px,85vw);height:auto;max-height:none;transform:translateX(50%);opacity:.9;filter:drop-shadow(-20px 4px 36px rgba(27,128,194,.18));mask-image:linear-gradient(to top,#000 0%,#000 70%,rgba(0,0,0,.8) 85%,transparent 100%),linear-gradient(to right,transparent 5%,#000 20%),linear-gradient(to left,transparent 5%,#000 15%);mask-composite:intersect}.hero-portrait-backlight{right:50%;top:480px;bottom:auto;width:120vw;height:420px;transform:translateX(50%);opacity:.5;filter:blur(40px)}.hero-portrait-haze{display:none}.hero-foreground-atmosphere{opacity:.3}}
@media(max-width:600px){.hero-content{padding-top:40px;padding-bottom:400px}.hero-title{font-size:clamp(1.95rem,7.6vw,2.4rem);line-height:1.02;margin:0 0 18px}.hero-lead{font-size:1.0625rem;margin:0 0 20px}.hero-support{font-size:.75rem}.hero-actions{margin-top:26px}.hero-eyebrow{margin-bottom:14px}.hero-portrait{top:400px;width:min(340px,80vw)}.hero-portrait-backlight{top:400px;height:340px}}
.hero-video-stage{position:absolute;inset:0;z-index:1;pointer-events:none;overflow:hidden;background:#080D0B}
.hero-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:22% 0%;display:block}
.hero-video-blend{position:absolute;inset:0;background:linear-gradient(90deg,transparent 0%,transparent 40%,rgba(8,13,11,.45) 54%,rgba(8,13,11,.78) 70%,rgba(8,13,11,.88) 100%),linear-gradient(180deg,transparent 0%,transparent 72%,#080D0B 100%)}
.hero-content{grid-template-columns:44fr 56fr}
.hero-copy{grid-column:2}
@media(max-width:1180px){.hero-content{grid-template-columns:40fr 60fr}}
@media(max-width:900px){.hero-content{grid-template-columns:1fr}.hero-copy{grid-column:1}.hero-video-stage{top:auto;height:520px}.hero-video{object-position:8% 0%}.hero-video-blend{background:linear-gradient(180deg,#080D0B 0%,transparent 6%,transparent 80%,#080D0B 100%),linear-gradient(90deg,transparent 0%,transparent 55%,rgba(8,13,11,.6) 100%)}}
@media(max-width:768px){.hero-video-stage{height:480px}.hero-video{object-position:0% 0%}}
@media(max-width:600px){.hero-video-stage{height:400px}}
@media(prefers-reduced-motion:reduce){.hero-portrait{transform:none;transition:none}.hero-fade{opacity:1;animation:none}.hero-mesh,.hero-path,.hero-nodes circle{animation:none}}
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
  const artifactRef = React.useRef(null);
  const [artifactIn, setArtifactIn] = React.useState(false);
  const [artifactOpen, setArtifactOpen] = React.useState(false);

  React.useEffect(() => {
    const el = artifactRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setArtifactIn(true); return; }
    const fallback = setTimeout(() => setArtifactIn(true), 1200);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { clearTimeout(fallback); setArtifactIn(true); io.disconnect(); } });
    }, { threshold: 0.14, rootMargin: '160px 0px' });
    io.observe(el);
    return () => { clearTimeout(fallback); io.disconnect(); };
  }, []);

  React.useEffect(() => {
    if (!artifactOpen) return;
    const prev = document.activeElement;
    const onKey = (e) => {
      if (e.key === 'Escape') setArtifactOpen(false);
      if (e.key === 'Tab') { e.preventDefault(); const c = document.querySelector('.jiz-sysmap-modal-close'); if (c) c.focus(); }
    };
    window.addEventListener('keydown', onKey);
    const t = setTimeout(() => { const c = document.querySelector('.jiz-sysmap-modal-close'); if (c) c.focus(); }, 0);
    return () => { clearTimeout(t); window.removeEventListener('keydown', onKey); if (prev && prev.focus) prev.focus(); };
  }, [artifactOpen]);

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
            Creative Lab · Film &amp; creative technology
          </p>

          <h2
            id="creative-lab-title"
            className="jiz-creative-lab-title"
          >
            The same craft, without a brief.
          </h2>

          <div className="jiz-creative-lab-heading">
            <p className="jiz-creative-lab-subtitle">
              Self-directed film and AI-assisted production
              where I test the storytelling, cinematography,
              and tools I later bring into enterprise work.
            </p>
          </div>

          <p className="jiz-creative-lab-intro">
            Start with The Train Story, then open the
            systems map to see how narrative, sound,
            and light were engineered beat by beat.
          </p>
        </header>

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

        <div className="jiz-sysmap" ref={artifactRef} data-in={artifactIn ? 'true' : 'false'}>
          <p className="jiz-sysmap-eyebrow"><span className="jiz-sysmap-eyebrow-line" aria-hidden="true" />Artifact / Systems Map</p>
          <h3 className="jiz-sysmap-title">Cinematic Learning Systems Map</h3>
          <p className="jiz-sysmap-sub">A time-based breakdown of how narrative architecture, visual world building, cinematography, audio, and learning integration interact across the sequence.</p>
          <figure className="jiz-sysmap-frame">
            <button type="button" className="jiz-sysmap-expand" onClick={() => setArtifactOpen(true)} aria-haspopup="dialog">
              {artifactIn ? <img className="jiz-sysmap-img" src="./assets/imagery/train-story-systems-map.webp" alt="Cinematic Learning Systems Map: a timeline breaking The Train Story into seven scenes from 0:00 to 1:05, each tagged with active narrative, visual, cinematography, audio, and learning-integration nodes, with a highlighted Threshold key moment at 0:54–0:57." loading="eager" decoding="async" /> : <span className="jiz-sysmap-img-ph" aria-hidden="true" />}
              <span className="jiz-sysmap-expand-tag">
                <span className="jiz-sysmap-expand-icon" aria-hidden="true">⤢</span>
                Expand
              </span>
            </button>
          </figure>
          <div className="jiz-sysmap-threshold">
            <p className="jiz-sysmap-threshold-label">Key Moment / Threshold</p>
            <p className="jiz-sysmap-threshold-copy">The threshold moment visualizes the transition from disruption to decision. Through amber light, silence, and a single piano note, the sequence marks a deliberate shift in emotional and narrative direction — held for three seconds, 0:54–0:57.</p>
          </div>
          <ul className="jiz-sysmap-proof">
            {['Narrative architecture', 'Systems thinking', 'Cinematic learning design', 'AI-directed production workflow'].map((p, i) => (
              <li key={p} className="jiz-sysmap-proof-chip" style={{ transitionDelay: (140 + i * 110) + 'ms' }}>{p}</li>
            ))}
          </ul>
          {artifactOpen && (
            <div className="jiz-sysmap-modal" role="dialog" aria-modal="true" aria-label="Cinematic Learning Systems Map, expanded" onClick={() => setArtifactOpen(false)}>
              <button type="button" className="jiz-sysmap-modal-close" onClick={() => setArtifactOpen(false)} aria-label="Close expanded systems map">✕</button>
              <img className="jiz-sysmap-modal-img" src="./assets/imagery/train-story-systems-map.webp" alt="" loading="eager" onClick={(e) => e.stopPropagation()} />
            </div>
          )}
          <style>{`
.jiz-sysmap{position:relative;margin:clamp(56px,5.6vw,88px) 0 0;padding-top:clamp(44px,4.4vw,68px);border-top:1px solid rgba(100,225,255,.14)}
.jiz-sysmap-eyebrow,.jiz-sysmap-title,.jiz-sysmap-sub,.jiz-sysmap-frame,.jiz-sysmap-threshold{opacity:0;transform:translate3d(0,16px,0);transition:opacity 800ms cubic-bezier(.22,.61,.36,1),transform 800ms cubic-bezier(.22,.61,.36,1)}
.jiz-sysmap[data-in="true"] .jiz-sysmap-eyebrow,.jiz-sysmap[data-in="true"] .jiz-sysmap-title,.jiz-sysmap[data-in="true"] .jiz-sysmap-sub,.jiz-sysmap[data-in="true"] .jiz-sysmap-frame,.jiz-sysmap[data-in="true"] .jiz-sysmap-threshold{opacity:1;transform:none}
.jiz-sysmap-title{transition-delay:90ms}
.jiz-sysmap-sub{transition-delay:170ms}
.jiz-sysmap-frame{transition-delay:250ms}
.jiz-sysmap-threshold{transition-delay:360ms}
.jiz-sysmap-eyebrow{display:flex;align-items:center;gap:14px;margin:0 0 16px;color:var(--color-accent-secondary);font:var(--text-hud);font-size:.6875rem;letter-spacing:.22em;text-transform:uppercase}
.jiz-sysmap-eyebrow-line{display:block;width:40px;height:1px;background:linear-gradient(90deg,var(--color-accent-secondary),rgba(100,225,255,.14))}
.jiz-sysmap-title{margin:0 0 14px;color:var(--color-text-primary);font:var(--text-h2);font-size:clamp(1.65rem,1.2rem + 1.5vw,2.4rem);line-height:1.12;letter-spacing:-.02em;text-wrap:pretty}
.jiz-sysmap-sub{margin:0 0 clamp(28px,3vw,42px);max-width:70ch;color:rgba(217,221,227,.72);font:var(--text-body);font-size:.9375rem;line-height:1.68;text-wrap:pretty}
.jiz-sysmap-frame{position:relative;margin:0 0 clamp(26px,2.8vw,38px);border-radius:clamp(16px,1.6vw,26px);overflow:hidden;background:linear-gradient(160deg,#171A1F 0%,#0B0D10 100%);border:1px solid rgba(100,225,255,.2);box-shadow:0 24px 54px -32px rgba(0,0,0,.85),0 0 0 1px rgba(100,225,255,.05);transition:border-color 320ms ease,box-shadow 320ms ease,transform 320ms cubic-bezier(.22,.61,.36,1)}
.jiz-sysmap-frame:hover{border-color:rgba(100,225,255,.42);box-shadow:0 32px 68px -32px rgba(0,0,0,.9),0 0 46px -14px rgba(100,225,255,.24);transform:translate3d(0,-3px,0)}
.jiz-sysmap-expand{position:relative;display:block;width:100%;padding:0;border:0;background:none;cursor:zoom-in}
.jiz-sysmap-img{max-width:100%;display:block;width:100%;height:auto}
.jiz-sysmap-img-ph{display:block;width:100%;aspect-ratio:1488/832;background:linear-gradient(160deg,#171A1F 0%,#0B0D10 100%)}
.jiz-sysmap-expand-tag{position:absolute;right:16px;bottom:16px;display:inline-flex;align-items:center;gap:7px;padding:8px 14px;border-radius:var(--radius-pill);background:rgba(11,13,16,.72);border:1px solid rgba(100,225,255,.32);color:#EAF7FB;font:var(--text-body);font-size:.75rem;backdrop-filter:blur(6px);transition:background 240ms ease,border-color 240ms ease}
.jiz-sysmap-frame:hover .jiz-sysmap-expand-tag{background:rgba(11,13,16,.85);border-color:rgba(100,225,255,.55)}
.jiz-sysmap-expand-icon{font-size:.875rem;color:var(--color-accent-secondary)}
.jiz-sysmap-expand:focus-visible{outline:2px solid var(--color-accent-secondary);outline-offset:4px}
.jiz-sysmap-threshold{padding:clamp(18px,1.8vw,26px) clamp(20px,2vw,28px);border-radius:clamp(12px,1vw,16px);background:linear-gradient(180deg,rgba(255,176,64,.07) 0%,rgba(23,26,31,.4) 100%);border:1px solid rgba(255,176,64,.22);border-left:2px solid #FFB040}
.jiz-sysmap-threshold-label{margin:0 0 8px;color:#FFB040;font:var(--text-hud);font-size:.625rem;letter-spacing:.18em;text-transform:uppercase}
.jiz-sysmap-threshold-copy{margin:0;max-width:72ch;color:rgba(232,238,226,.82);font:var(--text-body);font-size:.875rem;line-height:1.62;text-wrap:pretty}
.jiz-sysmap-proof{display:flex;flex-wrap:wrap;gap:10px;list-style:none;margin:clamp(24px,2.6vw,34px) 0 0;padding:0}
.jiz-sysmap-proof-chip{padding:9px 16px;border-radius:var(--radius-pill);background:rgba(198,242,58,.05);border:1px solid rgba(198,242,58,.2);color:#E4F5BE;font:var(--text-body);font-size:.8125rem;opacity:0;transform:translate3d(0,10px,0);transition:opacity 620ms cubic-bezier(.22,.61,.36,1),transform 620ms cubic-bezier(.22,.61,.36,1),border-color 240ms ease,background 240ms ease}
.jiz-sysmap[data-in="true"] .jiz-sysmap-proof-chip{opacity:1;transform:none}
.jiz-sysmap-proof-chip:hover{background:rgba(198,242,58,.12);border-color:rgba(198,242,58,.4)}
.jiz-sysmap-modal{position:fixed;inset:0;z-index:200;display:flex;align-items:center;justify-content:center;padding:clamp(20px,4vw,60px);background:rgba(5,7,9,.92);backdrop-filter:blur(6px);cursor:zoom-out}
.jiz-sysmap-modal-img{max-width:100%;max-height:100%;border-radius:12px;box-shadow:0 40px 90px -30px rgba(0,0,0,.7);cursor:default}
.jiz-sysmap-modal-close{position:absolute;top:clamp(16px,3vw,28px);right:clamp(16px,3vw,28px);width:44px;height:44px;border-radius:50%;border:1px solid rgba(255,255,255,.24);background:rgba(11,13,16,.6);color:#fff;font-size:1.125rem;cursor:pointer}
.jiz-sysmap-modal-close:focus-visible,.jiz-sysmap-proof-chip:focus-visible{outline:2px solid var(--color-accent-primary);outline-offset:3px}
@media(max-width:640px){.jiz-sysmap-frame{overflow-x:auto}.jiz-sysmap-img{width:640px;max-width:none}}
@media(prefers-reduced-motion:reduce){.jiz-sysmap-eyebrow,.jiz-sysmap-title,.jiz-sysmap-sub,.jiz-sysmap-frame,.jiz-sysmap-threshold,.jiz-sysmap-proof-chip{opacity:1;transform:none;transition:none}.jiz-sysmap-frame:hover{transform:none}}
          `}</style>
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
    { title: 'Bilingual Scenario-Based eLearning', cat: 'Interactive eLearning', copy: 'Branching practice built for bilingual learners, grounded in accessibility practice and learner-centered storytelling.', tags: ['Storyline 360', 'Accessibility'] },
    { title: 'Canvas LMS Adoption at an International School', cat: 'Education Innovation', copy: 'Professional learning and adoption strategy that moved faculty from hesitation to fluency.', tags: ['Canvas LMS', 'Change Management'] },
    { title: 'Explainer Video Library', cat: 'Multimedia', copy: 'Short-form motion pieces that compress dense process into minutes.', tags: ['Video', 'Motion Design'] },
    { title: 'AI Production Experiments', cat: 'AI Experiments', copy: 'Prompt systems and agentic drafts tested against real production work.', tags: ['AI Workflow', 'Prototyping'] },
    { title: 'Leadership Toolkit Series', cat: 'Enterprise Learning', copy: 'Job aids and facilitation kits supporting manager capability at scale.', tags: ['Job Aids', 'Facilitation'] }
  ];
  return (
    <section className="jiz-arch" ref={ref} data-in={active ? 'true' : 'false'} aria-labelledby="jiz-arch-title">
      <div className="jiz-arch-film">
        <InViewVideo videoRef={videoRef} className="jiz-arch-video" src="https://elearningportfolio-jz.s3.us-east-1.amazonaws.com/Archive_Film.mp4" aria-hidden="true" tabIndex="-1" />
        <span className="jiz-arch-scrim" aria-hidden="true" />
        <span className="jiz-arch-tint" aria-hidden="true" />
      </div>
      <div className="jiz-arch-inner">
        <div className="jiz-arch-head">
          <p className="jiz-arch-eyebrow"><span className="jiz-arch-eyebrow-line" aria-hidden="true" />Selected Additional Work</p>
          <h2 className="jiz-arch-title" id="jiz-arch-title">More work. More range.</h2>
          <p className="jiz-arch-sub">Projects that show range across interactive learning, multimedia, and AI production. Summarized here; the full archive holds more.</p>
          <a className="jiz-arch-cta" href={ARCHIVE_URL} target="_blank" rel="noopener noreferrer">
            <span>View the Full Archive (older site)</span>
            <span className="jiz-arch-cta-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
        <ul className="jiz-arch-grid">
          {items.map((it, i) => (
            <li key={it.title} className="jiz-arch-card" style={{ transitionDelay: (280 + i * 90) + 'ms' }}>
              <p className="jiz-arch-cat">{it.cat}</p>
              <h3 className="jiz-arch-card-title">{it.title}</h3>
              <p className="jiz-arch-copy">{it.copy}</p>
              <ul className="jiz-arch-tags">
                {it.tags.map((t) => <li key={t} className="jiz-arch-tag">{t}</li>)}
              </ul>
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
        .jiz-build-chip{min-height:44px;padding:0 14px;border:1px solid rgba(255,255,255,.11);border-radius:var(--radius-pill);background:rgba(255,255,255,.028);color:var(--color-text-secondary);font:var(--text-caption);cursor:pointer;transition:all var(--motion-fast) var(--ease-standard)}
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
            <p className="jiz-build-eyebrow">Contact</p>
            <h2 className="jiz-build-title" id="jiz-build-title">Have something complex worth making clear?</h2>
          </div>
          <div className="jiz-build-head-right">
            <p className="jiz-build-sub">A strategy that needs shape, an experience that needs building, a story that needs telling, or a new tool worth figuring out. Tell me what you’re working on. I’m currently open to senior full-time roles.</p>
          </div>
        </header>
        <div className="jiz-build-stage">
          <div className="jz-ct-direct">
            <style>{`
.jz-ct-direct{display:flex;flex-direction:column;gap:clamp(28px,3vw,44px);padding-top:8px;min-width:0}
.jz-ct-mail{display:inline-flex;flex-direction:column;gap:10px;color:var(--color-text-primary);text-decoration:none;min-width:0}
.jz-ct-mail span:last-child{font:500 clamp(1.25rem,.9rem + 1.3vw,2.125rem)/1.15 var(--font-display);letter-spacing:-.02em;overflow-wrap:anywhere;background:linear-gradient(var(--color-accent-primary),var(--color-accent-primary)) 0 100%/0 2px no-repeat;padding-bottom:6px;transition:background-size 420ms cubic-bezier(.22,.61,.36,1)}
.jz-ct-mail:hover span:last-child,.jz-ct-mail:focus-visible span:last-child{background-size:100% 2px}
.jz-ct-mail:focus-visible{outline:2px solid var(--color-accent-primary);outline-offset:6px}
.jz-ct-sec{display:flex;flex-wrap:wrap;gap:8px 32px;margin:0;padding:0;list-style:none}
.jz-ct-sec a{display:inline-flex;align-items:center;gap:8px;min-height:44px;font:500 .9375rem/1 var(--font-body);color:rgba(238,242,236,.86);text-decoration:none}
.jz-ct-sec a:hover{color:var(--color-text-primary)}
.jz-ct-sec a:focus-visible{outline:2px solid var(--color-accent-primary);outline-offset:4px}
.jz-ct-note{margin:0;max-width:36ch;font:400 .9375rem/1.6 var(--font-body);color:rgba(217,221,227,.66)}
@media(prefers-reduced-motion:reduce){.jz-ct-mail span:last-child{transition:none}}
            `}</style>
            <a className="jz-ct-mail" href={window.JIZ_SITE.links.email}><span className="jz-label">Email me directly</span><span>jonathan.zamarripa@gmail.com</span></a>
            <ul className="jz-ct-sec">
              <li><a href={window.JIZ_SITE.links.resume} target="_blank" rel="noopener noreferrer">Resume <span aria-hidden="true">↗</span></a></li>
              <li><a href={window.JIZ_SITE.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></li>
            </ul>
            <p className="jz-ct-note">Or use the form. A few lines are enough; I reply personally.</p>
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
  const NAV = [['Creative Lab', 'creative-lab'], ['Additional Work', 'archive'], ['Behind the Build', 'btb'], ['Resume', 'resume'], ['LinkedIn', 'linkedin'], ['Email', 'email']];
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
        <p className="jiz-footer-disciplines">Learning Strategy • Experience Design • Creative Technology • Film &amp; Media</p>
        <nav className="jiz-footer-nav" aria-label="Footer">
          {NAV.map(([label, index]) => (
            <button key={label} type="button" onClick={() => {
              if (index === 'btb') {
                window.jizNavigate && window.jizNavigate('Behind the Build');
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
          <style>{`
.jz-ab-h2{font:600 clamp(2.25rem,1.3rem + 3vw,4.25rem)/1 var(--font-display);letter-spacing:-.04em;color:var(--color-text-primary);margin:18px 0 0;max-width:14ch;text-wrap:balance}
.jz-ab-copy{display:flex;flex-direction:column;gap:18px;margin:clamp(28px,3vw,40px) 0 0;max-width:52ch}
.jz-ab-copy p{margin:0;font:400 clamp(1rem,.95rem + .25vw,1.1875rem)/1.65 var(--font-body);color:rgba(238,242,236,.86);text-wrap:pretty}
.jz-ab-copy p:first-child{color:#EEF2EC}
.jz-ab-path{list-style:none;margin:clamp(40px,4.4vw,64px) 0 0;padding:0;max-width:60ch}
.jz-ab-path li{display:grid;grid-template-columns:minmax(0,15ch) minmax(0,1fr);gap:8px 24px;padding:16px 0;border-top:1px solid rgba(217,221,227,.1)}
.jz-ab-path li:last-child{border-bottom:1px solid rgba(217,221,227,.1)}
.jz-ab-path h3{margin:0;font:500 .9375rem/1.4 var(--font-display);color:#EEF2EC}
.jz-ab-path p{margin:0;font:400 .875rem/1.55 var(--font-body);color:rgba(217,221,227,.74)}
.jz-ab-close{margin:clamp(32px,3.4vw,48px) 0 0;max-width:40ch;font:400 clamp(1.0625rem,1rem + .3vw,1.25rem)/1.5 var(--font-display);font-style:italic;color:rgba(238,242,236,.9)}
@media(max-width:560px){.jz-ab-path li{grid-template-columns:1fr}}
          `}</style>
          <p className="jz-label jiz-am-eyebrow-a">About</p>
          <h2 className="jz-ab-h2 jiz-am-title" id="jiz-am-title">Adoption is a human problem before a technical one.</h2>
          <div className="jz-ab-copy jiz-am-copy">
            <p>I learned that early, guiding educators and communities through digital learning and platform change. It still shapes everything I make, from leadership simulations to release-ready product training.</p>
            <p>The problems I'm handed rarely stay inside one discipline, so neither do I. I structure the ambiguity, design the experience, then film, prototype, and build it, using AI to move faster without handing it the judgment.</p>
          </div>
          <ol className="jz-ab-path" aria-label="How the practice evolved">
            <li><h3>Education innovation</h3><p>Digital learning adoption with educators, where designing for real behavior change began.</p></li>
            <li><h3>Digital transformation</h3><p>Guiding communities through platform change.</p></li>
            <li><h3>Enterprise L&amp;D</h3><p>Leadership and enterprise learning for audiences from frontline teams to SVPs.</p></li>
            <li><h3>Product &amp; technology enablement</h3><p>Release-ready learning that keeps global teams operationally current.</p></li>
          </ol>
          <p className="jz-ab-close jiz-am-close">Make the complex clear, make the learning useful, and make the experience worth remembering.</p>
        </div>
        <div className="jiz-am-col jiz-am-col--right">
          <figure className="jiz-am-card" ref={cardRef} onMouseMove={onMove} onMouseLeave={onLeave}>
            <div className="jiz-am-stage" role="img" aria-label="Jonathan speaking in a futuristic studio environment representing learning strategy and systems thinking.">
              <img className="jiz-am-poster" src="./assets/imagery/jonathan-portrait.webp" alt="" aria-hidden="true" loading="eager" decoding="async" data-hidden={showVideo ? 'true' : 'false'} />
              {showVideo ? (
                <React.Fragment>
                  <InViewVideo videoRef={studioRef} className="jiz-am-env" src="./assets/video/jiz-studio-ambient.mp4" aria-hidden="true" tabIndex={-1} />
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

function Homepage({ onOpenCaseStudy }) {
  const { NavBar } = window.JIZPortfolioSite_b3ba38;
  const SITE = window.JIZ_SITE;
  const sectionRefs = React.useRef({});
  const [activeSection, setActiveSection] = React.useState('hero');
  const reduced = prefersReduced();
  const navItems = ['Work', 'Lab', 'Thinking', 'Practice', 'About'];

  const registerSection = React.useCallback((id) => (element) => { sectionRefs.current[id] = element; }, []);
  const scrollToSection = React.useCallback((id) => {
    const target = sectionRefs.current[id];
    if (!target) return;
    scrollToElement(target, navOffset());
    setActiveSection(id);
  }, []);

  React.useEffect(() => {
    const id = sessionStorage.getItem('jiz-target-section');
    if (id === null) return undefined;
    sessionStorage.removeItem('jiz-target-section');
    if (!SITE.section(id)) return undefined;
    const timer = window.setTimeout(() => scrollToSection(id), reduced ? 0 : 280);
    return () => window.clearTimeout(timer);
  }, [reduced, scrollToSection]);

  React.useEffect(() => {
    const entries = Object.entries(sectionRefs.current).filter(([, el]) => el);
    if (typeof IntersectionObserver === 'undefined') {
      const onScroll = () => {
        let current = 'hero';
        entries.forEach(([id, el]) => { if (el.getBoundingClientRect().top <= window.innerHeight * 0.48) current = id; });
        setActiveSection(current);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener('scroll', onScroll);
    }
    const visibility = new Map();
    const observer = new IntersectionObserver((list) => {
      list.forEach((entry) => visibility.set(entry.target.dataset.sectionId, entry.intersectionRatio));
      let best = 'hero', bestRatio = -1;
      visibility.forEach((ratio, id) => { if (ratio > bestRatio) { bestRatio = ratio; best = id; } });
      setActiveSection(best);
    }, { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.15, 0.35, 0.6] });
    entries.forEach(([id, el]) => { el.dataset.sectionId = id; observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const activeNavLabel = (SITE.section(activeSection) || {}).nav || '';

  return (
    <div className="jiz-homepage" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#080D0B', position: 'relative', zIndex: 1 }}>
      <NavBar
        items={navItems}
        secondaryItems={['Additional Work', 'Resume', 'LinkedIn']}
        active={activeNavLabel}
        onNavigate={(item) => {
          if (item === 'Resume') { window.open(SITE.links.resume, '_blank', 'noopener,noreferrer'); return; }
          if (item === 'LinkedIn') { window.open(SITE.links.linkedin, '_blank', 'noopener,noreferrer'); return; }
          const target = SITE.resolve(item);
          if (!target) return;
          if (target.view === 'home') scrollToSection(target.section);
          else window.jizNavigate?.(item);
        }}
        onConnect={() => scrollToSection('contact')}
      />
      <main style={{ flex: 1, position: 'relative', zIndex: 1, overflow: 'visible' }}>
        <div ref={registerSection('hero')}><Hero onExploreWork={() => scrollToSection('work')} onConnect={() => scrollToSection('contact')} /></div>
        <SelectedExperience />
        <div ref={registerSection('work')} data-section="featured-work"><FeaturedWorkEditorial onOpenWork={onOpenCaseStudy} /></div>
        <div ref={registerSection('creative-lab')} data-section="creative-lab"><FilmSection /></div>
        <div ref={registerSection('impact')} data-section="impact"><ImpactEditorial /></div>
        <div ref={registerSection('thinking')} data-section="thinking-in-motion"><ThinkingInMotion /></div>
        <div ref={registerSection('practice')} data-section="practice"><Practice /></div>
        <div ref={registerSection('about')} data-section="about"><AboutMind /></div>
        <div ref={registerSection('archive')} data-section="archive"><ArchiveBridge /></div>
        <div ref={registerSection('contact')} data-section="contact">
          <LetsBuild onExploreWork={() => scrollToSection('work')} />
          <FinalMoment onNavigate={scrollToSection} />
        </div>
      </main>
    </div>
  );
}

window.HomepageExports = { Homepage };
