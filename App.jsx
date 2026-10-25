function CaseStudyOverlay({ view, onClose, children }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.scrollTop = 0;
    el.focus({ preventScroll: true });
  }, [view]);
  const onKeyDown = (e) => {
    if (e.key === 'Escape') { e.stopPropagation(); onClose(); return; }
    if (e.key !== 'Tab' || !ref.current) return;
    const items = ref.current.querySelectorAll('a[href],button:not([disabled]),input,select,textarea,video[controls],[tabindex]:not([tabindex="-1"])');
    if (!items.length) return;
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && (document.activeElement === first || document.activeElement === ref.current)) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };
  return (
    <div ref={ref} className="jiz-cs-overlay" data-cs-scroll="" role="dialog" aria-modal="true" aria-label="Case study" tabIndex={-1} onKeyDown={onKeyDown}>
      <style>{`
        .jiz-cs-overlay{position:fixed;inset:0;z-index:1000;height:100vh;height:100dvh;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;background:var(--color-background-primary);outline:none;animation:jiz-cs-in .24s var(--ease-out) both}
        .jiz-cs-close{position:fixed;top:14px;right:14px;z-index:70;display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:0 16px;border:1px solid var(--color-border-default);border-radius:var(--radius-pill);background:var(--surface-glass);backdrop-filter:var(--blur-glass);-webkit-backdrop-filter:var(--blur-glass);color:var(--color-text-secondary);font:var(--text-caption);cursor:pointer;transition:border-color var(--motion-fast) var(--ease-standard),color var(--motion-fast) var(--ease-standard)}
        .jiz-cs-close:hover{border-color:rgba(198,242,58,.4);color:var(--color-text-primary)}
        .jiz-cs-close:focus-visible{outline:2px solid var(--color-accent-primary);outline-offset:3px}
        .jiz-cs-overlay .jiz-cs-wrap{padding-top:72px}
        @keyframes jiz-cs-in{from{opacity:0}to{opacity:1}}
        @media(prefers-reduced-motion:reduce){.jiz-cs-overlay{animation:none}}
      `}</style>
      <button type="button" className="jiz-cs-close" onClick={onClose} aria-label="Close case study"><span aria-hidden="true">×</span> Close</button>
      {children}
    </div>
  );
}

function caseStudyViews() {
  return {
    'case-study': window.CaseStudyLegacyExports?.CaseStudyLegacy,
    'hotelkey-onboarding': window.CaseStudyHotelKeyExports?.CaseStudyHotelKey,
    'guest-crm-pilot': window.CaseStudyGuestCRMExports?.CaseStudyGuestCRM,
    'workday-learn': window.CaseStudyWorkdayExports?.CaseStudyWorkday,
    'behind-the-build': window.CaseStudyBehindTheBuildExports?.CaseStudyBehindTheBuild
  };
}

// A case study's own page (/work/<slug>/): the same case study, standing on its own so it can be shared.
function CaseStudyPage({ view }) {
  const SITE = window.JIZ_SITE;
  const Page = caseStudyViews()[view];
  if (!Page) return <div role="alert" style={{ padding: 32, color: '#fff', background: '#080D0B' }}>This case study could not load. <a href="/" style={{ color: '#C6F23A' }}>Return to the portfolio</a>.</div>;
  const goTo = (name) => { const t = SITE.resolve(name); const r = t && SITE.route(t.view); window.location.assign((r && r.path) || '/'); };
  return (
    <main id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
      <Page standalone onBack={() => window.location.assign('/#work')} onOpenProject={goTo} />
    </main>
  );
}

function App() {
  const SITE = window.JIZ_SITE;
  const isOverlay = (v) => SITE.routes.some((r) => r.featured && r.view === v);
  const pageOf = (v) => (isOverlay(v) ? 'home' : v);
  const initialView = SITE.viewForHash(window.location.hash);
  const [view, setView] = React.useState(initialView);
  const [displayView, setDisplayView] = React.useState(initialView);
  const [entering, setEntering] = React.useState(true);
  const scrollPositionsRef = React.useRef({});
  const pageRef = React.useRef(null);
  const returnFocusRef = React.useRef(null);
  const pausedVideosRef = React.useRef([]);
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  const overlayOpen = isOverlay(displayView);

  // A case study opened from a direct link gets a homepage entry beneath it, so Close and Back stay on the site.
  React.useEffect(() => {
    if (isOverlay(initialView) && !(window.history.state && window.history.state.jizDepth)) {
      const path = window.location.pathname + window.location.search;
      window.history.replaceState({ jizDepth: 0 }, '', path);
      window.history.pushState({ jizDepth: 1 }, '', path + '#' + initialView);
    }
  }, []);

  React.useEffect(() => {
    window.jizNavigate = (destination) => {
      const target = SITE.resolve(destination);
      if (!target) return;
      if (target.section !== null) sessionStorage.setItem('jiz-target-section', target.section);
      if (isOverlay(target.view) && !returnFocusRef.current) {
        const el = document.activeElement;
        returnFocusRef.current = { el, index: Array.from(document.querySelectorAll('#root a[href], #root button')).indexOf(el) };
      }
      setView(target.view);
    };
    return () => { delete window.jizNavigate; };
  }, []);

  React.useEffect(() => {
    if (view === displayView) return undefined;
    if (pageOf(view) === pageOf(displayView)) { setDisplayView(view); return undefined; }
    const fromPage = pageOf(displayView), toPage = pageOf(view);
    scrollPositionsRef.current[fromPage] = window.scrollY;
    if (reduced) {
      setDisplayView(view);
      window.setTimeout(() => window.scrollTo(0, scrollPositionsRef.current[toPage] ?? 0), 0);
      return undefined;
    }
    setEntering(false);
    const timer = window.setTimeout(() => {
      setDisplayView(view);
      window.setTimeout(() => {
        window.scrollTo(0, scrollPositionsRef.current[toPage] ?? 0);
        window.setTimeout(() => setEntering(true), 16);
      }, 0);
    }, 260);
    return () => window.clearTimeout(timer);
  }, [view, displayView, reduced]);

  React.useEffect(() => {
    const onPopState = () => setView(SITE.viewForHash(window.location.hash));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  React.useEffect(() => {
    const nextHash = displayView === 'home' ? '' : '#' + displayView;
    if (window.location.hash === nextHash) return;
    if (displayView === 'home' && SITE.section(window.location.hash.slice(1))) return;
    const depth = isOverlay(displayView) ? ((window.history.state && window.history.state.jizDepth) || 0) + 1 : 0;
    window.history.pushState({ jizDepth: depth }, '', window.location.pathname + window.location.search + nextHash);
  }, [displayView]);

  // While a case study is open: lock page scroll, make the page inert, pause its videos. Undo on close.
  React.useEffect(() => {
    if (!overlayOpen) return undefined;
    const root = document.documentElement;
    const page = pageRef.current;
    const prevOverflow = root.style.overflow;
    root.style.overflow = 'hidden';
    if (page) { page.inert = true; page.setAttribute('aria-hidden', 'true'); }
    pausedVideosRef.current = page ? Array.from(page.querySelectorAll('video')).filter((v) => !v.paused) : [];
    pausedVideosRef.current.forEach((v) => v.pause());
    return () => {
      root.style.overflow = prevOverflow;
      if (page) { page.inert = false; page.removeAttribute('aria-hidden'); }
      pausedVideosRef.current.forEach((v) => { const p = v.play(); if (p && p.catch) p.catch(() => {}); });
      pausedVideosRef.current = [];
      const back = returnFocusRef.current;
      returnFocusRef.current = null;
      window.setTimeout(() => {
        // The card may have re-rendered while the overlay was open: fall back to the control at the same position.
        const target = back && (back.el && back.el.isConnected ? back.el : document.querySelectorAll('#root a[href], #root button')[back.index]);
        if (target && target !== document.body) target.focus({ preventScroll: true });
      }, 0);
    };
  }, [overlayOpen]);

  const closeOverlay = React.useCallback(() => {
    const depth = (window.history.state && window.history.state.jizDepth) || 0;
    if (depth > 0) window.history.go(-depth);
    else {
      window.history.replaceState({ jizDepth: 0 }, '', window.location.pathname + window.location.search);
      setView('home');
    }
  }, []);

  const HomepageComponent = window.HomepageExports?.Homepage;
  const openProject = React.useCallback((route) => { window.jizNavigate?.(route); }, []);
  const backToWork = React.useCallback(() => { window.jizNavigate?.('Featured Work'); }, []);
  const views = caseStudyViews();
  const PageComponent = views[pageOf(displayView)];
  const OverlayComponent = overlayOpen ? views[displayView] : null;

  if (!HomepageComponent) {
    return <div role="alert" style={{ padding: 32, color: '#fff', background: '#080D0B' }}>The portfolio could not initialize. Please refresh the page.</div>;
  }

  return (
    <>
      <div ref={pageRef} style={{ opacity: entering ? 1 : 0, transform: entering ? 'scale(1)' : 'scale(0.99)', transition: reduced ? 'none' : 'opacity 0.26s ease, transform 0.26s ease' }}>
        {PageComponent
          ? <PageComponent onBack={backToWork} onOpenProject={openProject} />
          : <HomepageComponent onOpenCaseStudy={(route) => window.jizNavigate(route || 'Operation: Legacy Unlocked')} />}
      </div>
      {OverlayComponent && (
        <CaseStudyOverlay view={displayView} onClose={closeOverlay}>
          <OverlayComponent key={displayView} onBack={closeOverlay} onOpenProject={openProject} />
        </CaseStudyOverlay>
      )}
    </>
  );
}

function Root() {
  const view = window.JIZ_SITE.viewForPath(window.location.pathname);
  return view ? <CaseStudyPage view={view} /> : <App />;
}
window.JIZCaseStudyPage = CaseStudyPage;

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
