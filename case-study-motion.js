/* Case Study Cinematic Choreography v1
 * Shared motion layer for all canonical case studies and overlay presentations.
 * Keeps scrolling native and preserves built-in animations/interactive controls.
 */
(() => {
  'use strict';
  const root = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const disabled = () => reduced.matches || root.dataset.jzMotionPaused === 'true';
  const panelsSeen = new WeakSet();
  const inkSeen = new WeakSet();
  let panelsObserver;
  let inkObserver;
  let scheduled = false;
  function showAll() {
    panelsObserver?.disconnect();
    inkObserver?.disconnect();
    document.querySelectorAll('.jiz-chapter[data-cs-motion], [data-cs-ink]')
      .forEach(node => {
        if (node.hasAttribute('data-cs-motion')) node.dataset.csMotion = 'entered';
        if (node.hasAttribute('data-cs-ink')) node.dataset.csInk = 'entered';
      });
  }
  function visible(element) {
    const r = element.getBoundingClientRect();
    return r.top < innerHeight * .88 && r.bottom > 0;
  }
  function ensureObservers() {
    if (!panelsObserver) {
      panelsObserver = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.dataset.csMotion = 'entered';
          panelsObserver.unobserve(entry.target);
        }
      }), { threshold:.04,rootMargin:'0px 0px -9% 0px' });
      inkObserver = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.dataset.csInk = 'entered';
          inkObserver.unobserve(entry.target);
        }
      }), { threshold:.05,rootMargin:'0px 0px -12% 0px' });
    }
  }
  function inkTargets(panel) {
    const selector = [
      'h1','h2',
      '.jiz-cs-kicker','.jiz-cs-eyebrow','.jiz-cs-lede',
      '.jiz-cs-body','.tfs-kicker','.tfs-chn',
      '.jiz-btb-eyebrow','.jiz-btb-subheadline',
      '.jiz-btb-supporting','.jiz-btb-section-subtitle',
      '.tfs-deck','.tfs-lede'
    ].join(',');
    // Only the first meaningful introduction to a chapter; no lists, links,
    // accordion buttons, media overlays, disclosure panels or other controls.
    return [...panel.querySelectorAll(selector)].filter(node =>
      node.closest('.jiz-chapter') === panel &&
      !node.closest('a,button,nav,[aria-hidden="true"],[hidden]') &&
      node.getBoundingClientRect().height > 0
    ).slice(0,5);
  }
  function register() {
    const contexts = [...document.querySelectorAll('.jiz-cs,.tfs,.jiz-btb-detail')];
    if (!contexts.length) return;
    if (disabled() || !('IntersectionObserver' in window)) {
      showAll();return;
    }
    ensureObservers();
    root.dataset.caseChoreo = 'on';
    contexts.forEach(context => {
      context.querySelectorAll('.jiz-chapter').forEach(panel => {
        if (!panelsSeen.has(panel)) {
          panelsSeen.add(panel);
          const wasVisible = visible(panel);
          panel.dataset.csMotion = wasVisible ? 'entered' : 'pending';
          if (!wasVisible) panelsObserver.observe(panel);
        }
        inkTargets(panel).forEach((node,index) => {
          if (inkSeen.has(node)) return;
          inkSeen.add(node);
          const role = /^H[12]$/.test(node.tagName) ? 'title' :
            /kicker|eyebrow|chn/.test(node.className || '') ? 'eyebrow' : 'copy';
          node.dataset.csInkRole = role;
          node.style.setProperty('--case-stagger', index * 110 + 'ms');
          const wasVisible = visible(node);
          node.dataset.csInk = wasVisible ? 'entered' : 'pending';
          if (!wasVisible) inkObserver.observe(node);
        });
      });
    });
  }
  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {scheduled=false;register();});
  }
  function init() {
    register();
    const mount=document.getElementById('root');
    if (mount) new MutationObserver(schedule).observe(mount,{childList:true,subtree:true});
    reduced.addEventListener?.('change', () => disabled() ? showAll() : schedule());
    new MutationObserver(() => disabled() ? showAll() : schedule())
      .observe(root,{attributes:true,attributeFilter:['data-jz-motion-paused']});
    window.addEventListener('pageshow',schedule);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
