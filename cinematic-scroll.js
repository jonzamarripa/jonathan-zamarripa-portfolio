/* CINEMATIC SCROLL CHOREOGRAPHY v2
   Two-tier native IntersectionObserver: full-section lift + nested text reveals.
   Never pins/locks scrolling, duplicates interactive content or affects the hero. */
(() => {
  'use strict';
  const root = document.documentElement;
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  const disabled = () => mq.matches || root.dataset.jzMotionPaused === 'true';
  const sectionsSeen = new WeakSet();
  const copySeen = new WeakSet();
  let sectionObserver;
  let copyObserver;
  let domObserver;
  let scheduled = false;

  function revealAll() {
    sectionObserver?.disconnect();
    copyObserver?.disconnect();
    document.querySelectorAll('.jiz-homepage [data-choreo], .jiz-homepage [data-choreo-item]')
      .forEach(node => {
        if (node.hasAttribute('data-choreo')) node.dataset.choreo = 'entered';
        if (node.hasAttribute('data-choreo-item')) node.dataset.choreoItem = 'entered';
      });
  }

  function isInitiallyVisible(element) {
    const r = element.getBoundingClientRect();
    return r.top < window.innerHeight * .88 && r.bottom > 0;
  }

  function ensureObservers() {
    if (sectionObserver) return;
    sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.dataset.choreo = 'entered';
      sectionObserver.unobserve(entry.target);
    }), { rootMargin: '0px 0px -10% 0px', threshold: 0.06 });

    copyObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.dataset.choreoItem = 'entered';
      copyObserver.unobserve(entry.target);
    }), { rootMargin: '0px 0px -11% 0px', threshold: 0.08 });
  }

  function getTextTargets(section) {
    // Heading blocks are deeply nested across React and static prerender.
    // Limit to meaningful lead copy: no decorative spans, cards, lists or controls.
    const selectors = [
      'h2', '.jz-fw-heading > p', '.jz-im-note', '.jz-pr-sub',
      '.jz-pr-intro', '.jiz-creative-lab-subtitle',
      '.jiz-creative-lab-intro', '.cls-room__intro-aside > p',
      '.sp-preview-copy > p', '.jiz-build-sub', '.jiz-arch-sub',
      '.jz-jr-sub', '.jz-pp-sub',
      '.jz-fw-heading .jz-label', '.jz-im-head > .jz-label',
      '.jz-pr-caps-head > .jz-label', '.jz-pr-head .jz-label',
      '.jiz-am-inner .jz-label', '.jz-jr .jz-label',
      '.jiz-creative-lab-header > .jiz-creative-lab-eyebrow',
      '.jiz-build-eyebrow', '.sp-kicker', '.cls-room__eyebrow',
      '.jiz-arch-eyebrow'
    ];
    const targets = [...section.querySelectorAll(selectors.join(','))]
      .filter(node => node.closest('section') === section &&
        !node.closest('button, a, [aria-hidden="true"], [data-choreo-skip]') &&
        node.getBoundingClientRect().height > 0);
    // Unique, DOM order, bounded to the section intro.
    return [...new Set(targets)].slice(0, 7);
  }

  function register() {
    const home = document.querySelector('.jiz-homepage');
    if (!home) return;
    if (disabled() || !('IntersectionObserver' in window)) {
      revealAll();
      return;
    }
    ensureObservers();
    const sections = [...home.querySelectorAll('section')].filter(section =>
      !section.parentElement.closest('section') &&
      !section.matches('.hero, [data-choreo-skip]') &&
      section.getBoundingClientRect().height > 80
    );
    for (const section of sections) {
      if (!sectionsSeen.has(section)) {
        sectionsSeen.add(section);
        const entered = isInitiallyVisible(section);
        section.dataset.choreo = entered ? 'entered' : 'pending';
        if (!entered) sectionObserver.observe(section);
      }
      const targets = getTextTargets(section);
      targets.forEach((node, index) => {
        if (copySeen.has(node)) return;
        copySeen.add(node);
        const name = node.matches('h2') ? 'title' :
          node.matches('.jz-label, .sp-kicker, .cls-room__eyebrow, .jiz-arch-eyebrow, .jiz-build-eyebrow, .jiz-creative-lab-eyebrow')
            ? 'eyebrow' : 'copy';
        node.dataset.choreoRole = name;
        node.style.setProperty('--choreo-stagger', (index * 105) + 'ms');
        const entered = isInitiallyVisible(node);
        node.dataset.choreoItem = entered ? 'entered' : 'pending';
        if (!entered) copyObserver.observe(node);
      });
    }
  }

  function scheduleRegister() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      register();
    });
  }

  function init() {
    register();
    const mount = document.getElementById('root');
    if (mount) {
      domObserver = new MutationObserver(scheduleRegister);
      domObserver.observe(mount, { childList: true, subtree: true });
    }
    mq.addEventListener?.('change', () => {
      if (disabled()) revealAll();
      else scheduleRegister();
    });
    new MutationObserver(() => {
      if (disabled()) revealAll();
      else scheduleRegister();
    }).observe(root, { attributes: true, attributeFilter: ['data-jz-motion-paused'] });
    window.addEventListener('pageshow', scheduleRegister);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else init();
})();
