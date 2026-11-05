/* Cinematic Scroll Choreography v1
 * Once-only, native-scroll reveal of major homepage sections.
 * Preserves built-in section data-in animations and avoids trapping scroll.
 */
(() => {
  'use strict';
  const root = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const disabled = () => reduced.matches || root.dataset.jzMotionPaused === 'true';
  let observer = null;
  let mutationObserver = null;
  const observed = new WeakSet();

  function revealAll() {
    if (observer) observer.disconnect();
    document.querySelectorAll('.jiz-homepage section[data-choreo]').forEach(section => {
      section.dataset.choreo = 'entered';
    });
    delete root.dataset.choreoReady;
  }

  function register() {
    if (disabled() || !('IntersectionObserver' in window)) {
      revealAll();
      return;
    }
    const home = document.querySelector('.jiz-homepage');
    if (!home) return;
    if (!observer) {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.dataset.choreo = 'entered';
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -7% 0px' });
    }
    const sections = Array.from(home.querySelectorAll('section')).filter(section =>
      !section.parentElement.closest('section') &&
      !section.matches('.hero, [data-choreo-skip]') &&
      section.getBoundingClientRect().height > 80
    );
    if (!sections.length) return;
    sections.forEach(section => {
      if (observed.has(section)) return;
      observed.add(section);
      const bounds = section.getBoundingClientRect();
      const alreadyVisible = bounds.top < window.innerHeight * .91 && bounds.bottom > 0;
      section.dataset.choreo = alreadyVisible ? 'entered' : 'pending';
      if (!alreadyVisible) observer.observe(section);
    });
    root.dataset.choreoReady = 'true';
  }

  function init() {
    register();
    if (!mutationObserver) {
      const mount = document.getElementById('root');
      if (mount) {
        let scheduled = false;
        mutationObserver = new MutationObserver(() => {
          if (scheduled) return;
          scheduled = true;
          requestAnimationFrame(() => { scheduled = false; register(); });
        });
        mutationObserver.observe(mount, { childList: true, subtree: false });
      }
    }
    reduced.addEventListener?.('change', () => {
      if (disabled()) revealAll(); else register();
    });
    new MutationObserver(() => {
      if (disabled()) revealAll(); else register();
    }).observe(root, { attributes: true, attributeFilter: ['data-jz-motion-paused'] });
    window.addEventListener('pagehide', revealAll, { once: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
