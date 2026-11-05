/* Scroll-responsive accent light for major homepage chapters.
   Uses shared v2 section nodes, honors pause/reduced motion, never moves content. */
(() => {
  'use strict';
  const palette = new Map([
    ['jz-fw','cyan'],['jz-im','lime'],['jz-pr--capabilities','light'],
    ['jz-pr--method','teal'],['jz-cls','amber'],['sp-preview','amber'],
    ['jiz-creative-lab','cyan'],['jiz-am','teal'],['jz-jr','lime'],
    ['jz-st','cyan'],['jz-pp','neutral'],['jiz-arch','amber'],['jiz-build','lime']
  ]);
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const stopped = () => reduced.matches || document.documentElement.dataset.jzMotionPaused === 'true';
  let nodes = [];
  let frame = 0;
  function register() {
    nodes = [...document.querySelectorAll('.jiz-homepage main section')].filter(el => {
      if(el.closest('.jiz-chapter') && el.closest('.jiz-chapter')!==el) return false;
      if(el.closest('section') && el.closest('section')!==el) return false;
      return el.classList.contains('sp-preview') || el.hasAttribute('data-choreo');
    });
    nodes.forEach(el => {
      if (el.hasAttribute('data-atmosphere')) return;
      let kind = 'neutral';
      for(const [key,value] of palette){if(el.classList.contains(key)){kind=value;break;}}
      el.dataset.atmosphere=kind;
      for(const cls of ['jz-atmosphere-orb','jz-atmosphere-edge']){
        const layer=document.createElement('span');
        layer.className=cls;
        layer.setAttribute('aria-hidden','true');
        el.insertBefore(layer,el.firstChild);
      }
    });
  }
  function update() {
    frame=0;
    if(stopped())return;
    const h=window.innerHeight;
    nodes.forEach(el=>{
      const r=el.getBoundingClientRect();
      if(r.bottom<0 || r.top>h)return;
      const progress=Math.max(0,Math.min(1,(h-r.top)/(h+r.height)));
      el.style.setProperty('--atmosphere-progress',progress.toFixed(3));
    });
  }
  function tick(){if(!frame)frame=requestAnimationFrame(update);}
  function boot(){
    register();tick();
    const mount=document.querySelector('#root');
    if(mount){let pending=false;new MutationObserver(()=>{
      if(pending)return;pending=true;
      requestAnimationFrame(()=>{pending=false;register();tick();});
    }).observe(mount,{childList:true,subtree:true});}
    window.addEventListener('scroll',tick,{passive:true});
    window.addEventListener('resize',tick,{passive:true});
    reduced.addEventListener?.('change',tick);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
