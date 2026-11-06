/* Shared static footer for standalone Speaking and Journal templates.
   The React homepage and case studies use FinalMoment with the same brand system. */
const escape = s => String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function editorialFooter({context='Portfolio',disclosure=''}={}){
 return `<footer class="jiz-editorial-footer" aria-label="Site footer">
  <div class="jiz-editorial-footer__inner">
    <a class="jiz-editorial-footer__brand" href="/" aria-label="Jonathan Iker Zamarripa — home">
      <img src="/assets/logo/jiz-logo-white.svg" width="48" height="48" alt="">
      <span>Jonathan Iker Zamarripa</span>
    </a>
    <p class="jiz-editorial-footer__tagline">Learning strategy · Experience design · Creative technology</p>
    <nav class="jiz-editorial-footer__nav" aria-label="Footer navigation">
      <a href="/#work">Work</a><a href="/#creative-lab">Creative Lab</a>
      <a href="/journal/">Journal</a><a href="/speaking/">Speaking</a>
      <a href="/#about">About</a><a href="/#contact">Contact</a>
    </nav>
    <a class="jiz-editorial-footer__top" href="#top" data-editorial-back-top>↑ Back to Top</a>
    ${disclosure ? '<p class="jiz-editorial-footer__disclosure">'+escape(disclosure)+'</p>' : ''}
    <div class="jiz-editorial-footer__meta"><span>© 2026 Jonathan Iker Zamarripa. All rights reserved.</span>
    <span>Designed with curiosity. Built with AI. Guided by human judgment.</span></div>
  </div>
</footer>`;
}
module.exports={editorialFooter};
