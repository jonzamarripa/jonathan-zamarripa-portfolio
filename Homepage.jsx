// Homepage.jsx - Full source code
// 3001 lines of React + JSX for JIZ portfolio site

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

// [File continues: 3001 lines total - download the .txt file for complete source]

window.HomepageExports = { Homepage };
