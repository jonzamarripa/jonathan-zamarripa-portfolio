/* Single source of truth for sections, routes and outbound links.
   Section order = page order. `nav` = which NavBar item lights up while the section is in view. */
(function () {
  var links = {
    resume: 'https://elearningportfolio-jz.s3.us-east-1.amazonaws.com/Public_Career_Overview.pdf',
    linkedin: 'https://www.linkedin.com/in/jonathanzamarripa/',
    email: 'mailto:jonathan.zamarripa@gmail.com',
    archive: '/#archive',
    // Cinematic Learning Systems newsletter on LinkedIn. Paste the URL here; the Thinking and footer links appear automatically.
    newsletter: 'https://www.linkedin.com/newsletters/cinematic-learning-systems-7463584574371942400/'
  };
  var sections = [
    { id: 'hero', nav: null, aliases: ['Home', 'Hero', 'home'] },
    { id: 'work', nav: 'Work', aliases: ['Work', 'Featured Work'] },
    { id: 'impact', nav: null, aliases: ['Impact', 'Selected Impact'] },
    { id: 'capabilities', nav: 'Capabilities', aliases: ['Capabilities', 'Core Capabilities', 'Practice'] },
    { id: 'method', nav: 'Method', aliases: ['Method', 'The Method'] },
    { id: 'thinking', nav: 'Thinking', aliases: ['Thinking', 'Thinking in Motion', 'Insight', 'Insights', 'Journal', 'Cinematic Learning Systems'] },
    { id: 'creative-lab', nav: null, aliases: ['Lab', 'Creative Lab', 'Film'] },
    { id: 'about', nav: 'About', aliases: ['About'] },
    { id: 'journey', nav: 'About', aliases: ['Journey', 'The Journey', 'Career Journey'] },
    { id: 'stack', nav: 'Stack', aliases: ['Stack', 'Tools', 'Tools & Platforms', 'Modern Learning Stack'] },
    { id: 'principles', nav: null, aliases: ['Principles', 'Foundation'] },
    { id: 'archive', nav: 'Archive', aliases: ['Archive', 'Additional Work', 'Extended Archive', 'Selected Work'] },
    { id: 'contact', nav: null, aliases: ['Contact', "Let's Build"] }
  ];
  /* `featured: true` = Featured Work case study: opens in the overlay above the homepage. Others are full pages.
     `path` = the case study's own shareable page (prerendered by build.cjs). `hero` = its hero image on that page;
     `og` = its 1200×630 social preview. Both are resized copies of the case study's approved first image. */
  var routes = [
    { view: 'case-study', featured: true, path: '/work/legacy-unlocked/', hero: 'assets/imagery/olu-01-cover-1600.webp', og: 'assets/og/legacy-unlocked.jpg', aliases: ['Operation: Legacy Unlocked'] },
    { view: 'hotelkey-onboarding', featured: true, path: '/work/hotelkey-onboarding/', hero: 'assets/imagery/hotelkey-01-hero-1600.webp', og: 'assets/og/hotelkey-onboarding.jpg', aliases: ['HotelKey New Hire Onboarding'] },
    { view: 'guest-crm-pilot', featured: true, path: '/work/guest-crm-pilot/', hero: 'assets/imagery/guestcrm-01-cover-1600.webp', og: 'assets/og/guest-crm-pilot.jpg', aliases: ['Guest CRM Pilot'] },
    { view: 'workday-learn', featured: true, path: '/work/workday-learn-launch/', hero: 'assets/imagery/workday-01-cover-1600.webp', og: 'assets/og/workday-learn-launch.jpg', aliases: ['Workday Learn Launch'] },
    { view: 'the-first-sentence', path: '/work/the-first-sentence/', hero: 'assets/imagery/the-first-sentence/first-sentence-hero.webp', og: 'assets/og/the-first-sentence.jpg', aliases: ['The First Sentence'] },
    { view: 'drafted-by-ai', path: '/work/drafted-by-ai/', hero: 'assets/imagery/drafted-by-ai/customer-tailgate-hero.webp', og: 'assets/imagery/drafted-by-ai/cold-open-poster.webp', aliases: ['Drafted by AI. Sent by You.'] },
    { view: 'behind-the-build', aliases: ['Behind the Build'] }
  ];
  function section(id) { for (var i = 0; i < sections.length; i++) if (sections[i].id === id) return sections[i]; return null; }
  function resolve(name) {
    for (var i = 0; i < sections.length; i++) {
      var s = sections[i];
      if (s.id === name || s.aliases.indexOf(name) !== -1) return { view: 'home', section: s.id };
    }
    for (var j = 0; j < routes.length; j++) {
      var r = routes[j];
      if (r.view === name || r.aliases.indexOf(name) !== -1) return { view: r.view, section: null };
    }
    return null;
  }
  function viewForHash(hash) {
    var raw = String(hash || '').replace('#', '');
    for (var j = 0; j < routes.length; j++) if (routes[j].view === raw) return raw;
    return 'home';
  }
  function route(view) { for (var j = 0; j < routes.length; j++) if (routes[j].view === view) return routes[j]; return null; }
  function viewForPath(pathname) {
    var p = String(pathname || '').replace(/\/index\.html$/, '/');
    if (p.charAt(p.length - 1) !== '/') p += '/';
    for (var j = 0; j < routes.length; j++) if (routes[j].path === p) return routes[j].view;
    return null;
  }

  /* Keep CSS-only decorative interactions in sync with the existing React
     Pause Motion control, without introducing another preference store.
     The React control writes jiz-motion-paused to sessionStorage. */
  function syncDecorativeMotion() {
    var paused = false;
    try { paused = sessionStorage.getItem('jiz-motion-paused') === '1'; } catch (e) {}
    document.documentElement.setAttribute('data-jz-motion-paused', paused ? 'true' : 'false');
  }
  syncDecorativeMotion();
  document.addEventListener('click', function (event) {
    var el = event.target && event.target.closest && event.target.closest('.jiz-motion-toggle');
    if (el) {
      // React's delegated onClick updates the preference during the same event.
      // Read its final persisted value after that event finishes.
      queueMicrotask(syncDecorativeMotion);
    }
  });
  window.addEventListener('pageshow', syncDecorativeMotion);


  /* Phase 3 — case-study-only scroll reveals.
     The HTML is fully visible by default: JS and IntersectionObserver are
     optional enhancements. Works in standalone routes and nested overlays. */
  function initCinematicCaseStudyReveals() {
    if (!('IntersectionObserver' in window)) return;
    var selectors = [
      '.jiz-cs .jiz-cs-section .jiz-cs-kicker',
      '.jiz-cs .jiz-cs-section .jiz-cs-h2',
      '.jiz-cs .jiz-cs-gallery figure',
      '.jiz-cs .jiz-cs-decision',
      '.jiz-cs .jiz-cs-outcome',
      '.tfs .jiz-chapter .tfs-chn',
      '.tfs .jiz-chapter .tfs-h2',
      '.tfs .tfs-gallery figure',
      '.tfs .tfs-pair figure',
      '.tfs .tfs-prod-item',
      '.tfs .tfs-status-col'
    ].join(',');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.setAttribute('data-jz-cinema-visible', 'true');
        observer.unobserve(entry.target);
      });
    }, { root: null, threshold: 0.08, rootMargin: '0px 0px -7% 0px' });
    var scheduled = false;
    function scan() {
      scheduled = false;
      document.querySelectorAll(selectors).forEach(function (element) {
        if (element.hasAttribute('data-jz-cinema-init')) return;
        element.setAttribute('data-jz-cinema-init', 'true');
        var article = element.closest('article[data-case-study]');
        if (!article) return;
        // Keep the opening chapter instantly readable on navigation.
        var firstChapter = article.querySelector('.jiz-chapter');
        if (element.closest('.jiz-chapter') === firstChapter) return;
        var bounds = element.getBoundingClientRect();
        // Never hide content already in view, or content scrolled past.
        if (bounds.top < window.innerHeight * 0.88) return;
        var artifact = element.matches('figure, .jiz-cs-decision, .jiz-cs-outcome, .tfs-prod-item, .tfs-status-col');
        element.setAttribute('data-jz-cinema-kind', artifact ? 'artifact' : 'heading');
        element.classList.add('jz-cinema-reveal');
        observer.observe(element);
      });
    }
    function scheduleScan() {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(scan);
    }
    scan();
    // New React case studies and overlays mount after this file is loaded.
    var target = document.getElementById('root') || document.body;
    new MutationObserver(function (records) {
      if (records.some(function (record) { return record.addedNodes.length > 0; })) scheduleScan();
    }).observe(target, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCinematicCaseStudyReveals, { once: true });
  } else {
    initCinematicCaseStudyReveals();
  }


  /* Phase 4 — methodology progression. Each stage marks itself as visited
     when it enters view; every stage stays readable without JavaScript.
     React mounts the homepage after this script, so observe added DOM nodes. */
  function initMethodProgression() {
    if (!('IntersectionObserver' in window)) return;
    var tracked = new WeakSet();
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.setAttribute('data-jz-method-seen', 'true');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });
    var scheduled = false;
    function scan() {
      scheduled = false;
      document.querySelectorAll('.jz-pr--method .jz-pr-step').forEach(function (step) {
        if (tracked.has(step)) return;
        tracked.add(step);
        observer.observe(step);
      });
    }
    function scheduleScan() {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(scan);
    }
    scan();
    var root = document.getElementById('root');
    if (root && typeof MutationObserver !== 'undefined') {
      new MutationObserver(function (records) {
        if (records.some(function (record) { return record.addedNodes.length > 0; })) scheduleScan();
      }).observe(root, { childList: true, subtree: true });
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMethodProgression, { once: true });
  } else {
    initMethodProgression();
  }


  /* HYBRID CINEMATIC HOME — an intentionally isolated homepage experiment.
     Animates existing hero headline + section boundaries; does not replace
     portrait video, accessible text, buttons, project cards or React nodes.
     Only decorative CSS custom properties are updated on scroll. */
  function initHybridCinematicHome() {
    if (!window.requestAnimationFrame || !window.matchMedia) return;
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    var wide = window.matchMedia('(min-width: 901px)');
    var frame = 0;
    var rootNode = document.getElementById('root');

    function clamp(x) { return Math.max(0, Math.min(1, x)); }
    function value(el, name, amount) {
      if (!el) return;
      var next = String(Math.round(amount * 1000) / 1000);
      if (el.style.getPropertyValue(name) !== next) el.style.setProperty(name, next);
    }
    function render() {
      frame = 0;
      var hero = document.querySelector('.jiz-homepage .hero');
      var strip = document.querySelector('.jiz-homepage .jz-exp');
      var work = document.querySelector('.jiz-homepage .jz-fw');
      if (!hero || !strip || !work) return;
      document.documentElement.setAttribute('data-jz-hybrid-home', 'true');

      /* The existing React Pause Motion button remains authoritative.
         Still content is rendered even when CSS decoration is disabled. */
      var paused = document.documentElement.getAttribute('data-jz-motion-paused') === 'true';
      var on = wide.matches && !reduced.matches && !paused;
      var titleMotionOn = !reduced.matches && !paused;
      var viewport = Math.max(1, window.innerHeight);
      var heroRect = hero.getBoundingClientRect();
      var stripRect = strip.getBoundingClientRect();
      var workRect = work.getBoundingClientRect();

      var hp = on ? clamp((Math.max(0, -heroRect.top) / Math.max(1, heroRect.height * .77))) : 0;
      var bp = on ? clamp((viewport * .78 - stripRect.top) / Math.max(1, viewport * .6)) : 1;
      var wp = on ? clamp((viewport * .84 - workRect.top) / Math.max(1, viewport * .72)) : 1;

      value(hero, '--jz-hybrid-hero-progress', hp);
      value(strip, '--jz-hybrid-bridge-progress', bp);
      value(work, '--jz-hybrid-work-progress', wp);


      /* CHAPTER TITLES / scroll-directed typography.
         Only real homepage section titles; preserve heading text, semantic
         order, existing React reveal states and media. Single shared RAF. */
      var chapterTitleIds = [
        'jz-fw-title', 'jz-im-title', 'jz-cap-title', 'jz-pr-title',
        'jz-cls-title', 'creative-lab-title', 'jiz-am-title',
        'jz-jr-title', 'jz-st-title', 'jz-pp-title',
        'jiz-arch-title', 'jiz-build-title'
      ];
      for (var i = 0; i < chapterTitleIds.length; i++) {
        var heading = document.getElementById(chapterTitleIds[i]);
        if (!heading || !heading.closest('.jiz-homepage')) continue;
        if (!heading.hasAttribute('data-jz-hybrid-title')) {
          heading.setAttribute('data-jz-hybrid-title', 'true');
        }
        // Enter at 92% of the viewport, settle by 30%. Scrolling backward
        // reverses naturally. Never hide text, even before it is reached.
        // getBoundingClientRect includes our prior translateY: remove that
        // offset so successive frames do not oscillate or jitter.
        var previousRise = parseFloat(heading.style.getPropertyValue('--jz-hybrid-title-rise')) || 0;
        var top = heading.getBoundingClientRect().top - previousRise;
        var raw = titleMotionOn ? clamp((viewport * .92 - top) / (viewport * .62)) : 1;
        var progress = raw * raw * (3 - 2 * raw);
        value(heading, '--jz-hybrid-title-progress', progress);
        var travel = wide.matches ? ((i === 0 || i === 4 || i === 5) ? 64 : 48) : 18;
        var rise = Math.round((1 - progress) * travel);
        var nextRise = rise + 'px';
        if (heading.style.getPropertyValue('--jz-hybrid-title-rise') !== nextRise) {
          heading.style.setProperty('--jz-hybrid-title-rise', nextRise);
        }
      }
      /* Extend the editorial rhythm of the Cox / IHG / AIS / ASU
         credibility strip rather than introducing a new component. */
      var stripEntry = titleMotionOn ? clamp((viewport * .82 - stripRect.top) / (viewport * .62)) : 1;
      var stripRise = Math.round((1 - stripEntry) * (wide.matches ? 20 : 12)) + 'px';
      value(strip, '--jz-hybrid-strip-entry', stripEntry);
      if (strip.style.getPropertyValue('--jz-hybrid-bridge-rise') !== stripRise) {
        strip.style.setProperty('--jz-hybrid-bridge-rise', stripRise);
      }
    }
    function schedule() {
      if (frame) return;
      frame = window.requestAnimationFrame(render);
    }
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    window.addEventListener('pageshow', schedule);
    document.addEventListener('click', function (event) {
      if (event.target && event.target.closest && event.target.closest('.jiz-motion-toggle')) {
        window.queueMicrotask(schedule);
      }
    });
    if (reduced.addEventListener) reduced.addEventListener('change', schedule);
    if (wide.addEventListener) wide.addEventListener('change', schedule);

    /* React replaces the prerendered root on boot and when returning from
       standalone routes. Rescan after direct children change. */
    if (rootNode && typeof MutationObserver !== 'undefined') {
      new MutationObserver(function (records) {
        if (records.some(function (record) { return record.addedNodes.length > 0; })) schedule();
      }).observe(rootNode, { childList: true });
    }
    schedule();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHybridCinematicHome, { once: true });
  } else {
    initHybridCinematicHome();
  }

  window.JIZ_SITE = { links: links, sections: sections, routes: routes, section: section, resolve: resolve, viewForHash: viewForHash, viewForPath: viewForPath, route: route };
})();
