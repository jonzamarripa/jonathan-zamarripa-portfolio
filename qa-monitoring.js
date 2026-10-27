/* Preview-only error reporting. No session replay, tracing, or visitor analytics. */
(function () {
  var hostname = String((window.location && window.location.hostname) || '');
  if (!hostname.endsWith('.vercel.app') || hostname.indexOf('jonathan-zamarripa-portfolio-') !== 0) return;
  if (hostname === 'jonathan-zamarripa-portfolio-portfolio-0e91.vercel.app') return;
  if (window.__jizSentryLoaderStarted) return;
  window.__jizSentryLoaderStarted = true;

  window.sentryOnLoad = function () {
    if (!window.Sentry || typeof window.Sentry.init !== 'function') return;
    window.Sentry.init({
      dsn: 'https://f5340f1dc95bd5ac1566f7ce8923d7c9@o4512328788541440.ingest.us.sentry.io/4512328813117440',
      environment: 'preview',
      sampleRate: 0.25,
      sendDefaultPii: false,
      tracesSampleRate: 0,
      replaysSessionSampleRate: 0,
      replaysOnErrorSampleRate: 0,
      maxBreadcrumbs: 0,
      beforeSend: function (event) {
        // Contact-form entries, URL query strings, visitor identifiers and
        // interaction breadcrumbs must not be forwarded with error events.
        delete event.user;
        delete event.request;
        delete event.breadcrumbs;
        delete event.extra;
        if (event.contexts) delete event.contexts;
        if (event.exception && event.exception.values) {
          event.exception.values.forEach(function (exception) {
            if (exception.stacktrace && exception.stacktrace.frames) {
              exception.stacktrace.frames.forEach(function (frame) {
                ['filename', 'abs_path'].forEach(function (field) {
                  if (typeof frame[field] !== 'string') return;
                  try {
                    var url = new URL(frame[field], window.location.origin);
                    frame[field] = url.origin + url.pathname;
                  } catch (e) {
                    frame[field] = '[unavailable]';
                  }
                });
              });
            }
          });
        }
        return event;
      }
    });
  };

  var loader = document.createElement('script');
  loader.src = 'https://js.sentry-cdn.com/f5340f1dc95bd5ac1566f7ce8923d7c9.min.js';
  loader.async = true;
  loader.crossOrigin = 'anonymous';
  document.head.appendChild(loader);
})();
