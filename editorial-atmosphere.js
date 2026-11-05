/* Cinematic Chapter Architecture v3 — shared sweep and depth, no DOM insertion.
   The original Featured Work cyan sweep is the interaction reference.
   One style system drives every homepage chapter. */
(() => {
 'use strict';
 const palette = {
   work:'cyan',impact:'lime',capabilities:'light',method:'teal',
   thinking:'amber',speaking:'amber','creative-lab':'cyan',
   about:'teal',journey:'lime',stack:'cyan',principles:'neutral',
   archive:'amber',contact:'lime'
 };
 const mq=window.matchMedia('(prefers-reduced-motion: reduce)');
 const paused=()=>mq.matches||document.documentElement.dataset.jzMotionPaused==='true';
 let chapters=[],frame=0;
 function register(){
   chapters=[...document.querySelectorAll('.jiz-homepage main > div[data-section]')];
   chapters.forEach(w=>{
     const first=w.querySelector(':scope > section');
     if(!first)return;
     const id=w.id||w.dataset.section;
     const color=palette[id]||'neutral';
     if(w.dataset.chapterAccent!==color)w.dataset.chapterAccent=color;
     if(first.dataset.atmosphere!==color)first.dataset.atmosphere=color;
   });
 }
 function update(){
   frame=0;
   const h=window.innerHeight||1;
   const still=paused();
   for(const w of chapters){
     const r=w.getBoundingClientRect();
     if(r.bottom < -10 || r.top>h+10)continue;
     const t=still?1:Math.max(0,Math.min(1,(h*.92-r.top)/Math.max(h*.7,r.height*.72)));
     // The line sweeps left-to-right while the chapter is revealed.
     const value=t.toFixed(3);
     w.style.setProperty('--chapter-sweep',value);
     const first=w.querySelector(':scope > section');
     if(first)first.style.setProperty('--atmosphere-progress',value);
   }
 }
 function schedule(){if(!frame)frame=requestAnimationFrame(update);}
 function init(){
   register();schedule();
   let queued=false;
   const mount=document.querySelector('#root');
   if(mount)new MutationObserver(()=>{
     if(queued)return;queued=true;
     requestAnimationFrame(()=>{queued=false;register();schedule();});
   }).observe(mount,{subtree:true,childList:true});
   window.addEventListener('scroll',schedule,{passive:true});
   window.addEventListener('resize',schedule,{passive:true});
   mq.addEventListener?.('change',schedule);
   new MutationObserver(schedule).observe(document.documentElement,{attributes:true,attributeFilter:['data-jz-motion-paused']});
   window.addEventListener('pageshow',schedule);
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
 else init();
})();
