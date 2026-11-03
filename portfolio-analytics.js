/* Optional, cookie-free Vercel measurement. No form fields or AI conversations. */
(function () {
  if (!/^(www\.)?jonathanzamarripa\.com$/.test(location.hostname) || navigator.doNotTrack === '1' || navigator.globalPrivacyControl) return;
  function scrub(event) {
    var url = new URL(event.url);
    url.search = '';
    url.hash = '';
    return Object.assign({}, event, { url: url.href });
  }
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
  window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
  window.va('beforeSend', scrub);
  window.si('beforeSend', scrub);
  ['insights', 'speed-insights'].forEach(function (name) {
    var script = document.createElement('script');
    script.defer = true;
    script.src = '/_vercel/' + name + '/script.js';
    document.head.appendChild(script);
  });
})();

/* First-party PostHog events. A fresh in-memory ID per page; no persistent visitor ID. */
(function () {
  if (!/^(www\.)?jonathanzamarripa\.com$/.test(location.hostname) || navigator.doNotTrack === '1' || navigator.globalPrivacyControl || navigator.webdriver || !window.crypto || !crypto.randomUUID) return;
  var id = crypto.randomUUID(), count = 0, previousPath = null;
  function currentPath() {
    var site = window.JIZ_SITE;
    var route = site && site.route(site.viewForHash(location.hash));
    return route && route.path || location.pathname;
  }
  function source() {
    try {
      if (!document.referrer) return 'direct';
      var host = new URL(document.referrer).hostname;
      if (/(^|\.)jonathanzamarripa\.com$/.test(host)) return 'internal';
      if (/(^|\.)linkedin\.com$/.test(host)) return 'linkedin';
      if (/(^|\.)google\.[a-z.]+$/.test(host)) return 'google';
      if (/(^|\.)bing\.com$/.test(host)) return 'bing';
    } catch (error) {}
    return 'other';
  }
  window.jizTrack = function (event) {
    if (count++ >= 40) return;
    var data = { event: event, path: currentPath(), id: id, source: source(), device: innerWidth < 600 ? 'mobile' : innerWidth < 1024 ? 'tablet' : 'desktop' };
    fetch('/api/analytics', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data), keepalive: true }).catch(function () {});
  };
  function pageview() {
    var path = currentPath();
    if (path === previousPath) return;
    previousPath = path;
    window.jizTrack('$pageview');
    if (path.indexOf('/work/') === 0) window.jizTrack('case_study_view');
  }
  ['pushState', 'replaceState'].forEach(function (name) {
    var original = history[name];
    history[name] = function () { var result = original.apply(history, arguments); pageview(); return result; };
  });
  window.addEventListener('popstate', pageview);
  window.addEventListener('hashchange', pageview);
  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[href]');
    if (!link) return;
    if (['/resume/', '/assets/documents/jonathan-zamarripa-public-resume.pdf'].indexOf(new URL(link.href).pathname) !== -1) window.jizTrack('resume_click');
    else if (link.href.indexOf('mailto:') === 0) window.jizTrack('contact_email_click');
  });
  pageview();
})();
