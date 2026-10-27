const { test, expect } = require('@playwright/test');
const fs = require('node:fs');
const vm = require('node:vm');

const siteConfig = fs.readFileSync('site-config.js', 'utf8');
const monitoring = fs.readFileSync('qa-monitoring.js', 'utf8');

function emulateHostname(hostname) {
  const scripts = [];
  const document = {
    createElement: () => ({}),
    head: { appendChild: (node) => scripts.push(node) }
  };
  const window = { location: { hostname, origin: 'https://' + hostname } };
  const context = vm.createContext({ window, document, URL });
  vm.runInContext(siteConfig, context);
  if (scripts.some((s) => s.src === '/qa-monitoring.js')) {
    vm.runInContext(monitoring, context);
  }
  return { scripts, window };
}

test('Sentry is available on versioned Vercel QA previews only', async () => {
  const result = emulateHostname('jonathan-zamarripa-portfolio-3l35pd5x7-portfolio-0e91.vercel.app');
  expect(result.scripts.map((s) => s.src)).toEqual([
    '/qa-monitoring.js',
    expect.stringMatching(/^https:\/\/js\.sentry-cdn\.com\/[a-z0-9]+\.min\.js$/)
  ]);
  expect(typeof result.window.sentryOnLoad).toBe('function');
});

test('Sentry is disabled on live domain, permanent Vercel alias and localhost', async () => {
  for (const hostname of [
    'www.jonathanzamarripa.com',
    'jonathanzamarripa.com',
    'jonathan-zamarripa-portfolio-portfolio-0e91.vercel.app',
    'localhost',
    '127.0.0.1'
  ]) {
    const result = emulateHostname(hostname);
    expect(result.scripts, hostname).toHaveLength(0);
    expect(result.window.sentryOnLoad, hostname).toBeUndefined();
  }
});

test('preview Sentry drops visitor metadata and disables tracing/replay', async () => {
  const { window } = emulateHostname('jonathan-zamarripa-portfolio-3l35pd5x7-portfolio-0e91.vercel.app');
  let options;
  window.Sentry = { init: (o) => { options = o; } };
  window.sentryOnLoad();

  expect(options.sendDefaultPii).toBe(false);
  expect(options.tracesSampleRate).toBe(0);
  expect(options.replaysSessionSampleRate).toBe(0);
  expect(options.replaysOnErrorSampleRate).toBe(0);
  expect(options.maxBreadcrumbs).toBe(0);

  const payload = options.beforeSend({
    user: { email: 'private@example.com' },
    request: { url: '/?contact=private' },
    breadcrumbs: [{ data: { email: 'private@example.com' } }],
    extra: { contactEmail: 'private@example.com' },
    contexts: { visitor: { email: 'private@example.com' } },
    exception: { values: [{ stacktrace: { frames: [{ filename: 'https://test.example/entry.js?contact=private' }] } }] }
  });
  expect(payload.user).toBeUndefined();
  expect(payload.request).toBeUndefined();
  expect(payload.breadcrumbs).toBeUndefined();
  expect(payload.extra).toBeUndefined();
  expect(payload.contexts).toBeUndefined();
  expect(payload.exception.values[0].stacktrace.frames[0].filename)
    .toBe('https://test.example/entry.js');
});
