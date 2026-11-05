/* Editorial return journey: preserve the reader's precise homepage position.
   No cookies, tracking, or server requests. Session-only same-origin state. */
(() => {
  'use strict';
  const KEY='jiz-editorial-origin-v1',RETURN='jiz-editorial-return-pending';
  const home=location.pathname==='/'||location.pathname==='/index.html';
  const read=()=>{try{const value=JSON.parse(sessionStorage.getItem(KEY)||'null');return value&&Date.now()-value.at<2*60*60*1000?value:null;}catch(e){return null;}};
  if(home){
    document.addEventListener('click',(event)=>{
      const anchor=event.target.closest?.('a[href]');
      if(!anchor||event.defaultPrevented||event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||anchor.target==='_blank')return;
      try{
        const dest=new URL(anchor.href,location.href);
        if(dest.origin!==location.origin||!(/^\/(journal|speaking)(\/|$)/).test(dest.pathname))return;
        sessionStorage.setItem(KEY,JSON.stringify({at:Date.now(),y:window.scrollY}));
      }catch(e){}
    },true);
    let pending=false;try{pending=sessionStorage.getItem(RETURN)==='1';sessionStorage.removeItem(RETURN)}catch(e){}
    if(pending){
      const from=read();
      if(from){const restore=()=>window.scrollTo({top:from.y,behavior:'instant'});if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>requestAnimationFrame(()=>requestAnimationFrame(restore)),{once:true});else requestAnimationFrame(()=>requestAnimationFrame(restore));window.addEventListener('load',restore,{once:true});}
    }
  }else{
    document.addEventListener('click',event=>{
      const link=event.target.closest?.('[data-editorial-return]');
      if(!link||event.defaultPrevented||event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
      if(!read())return;event.preventDefault();
      try{sessionStorage.setItem(RETURN,'1')}catch(e){}
      window.location.assign('/');
    });
  }
})();