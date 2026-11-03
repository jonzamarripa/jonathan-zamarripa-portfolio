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
