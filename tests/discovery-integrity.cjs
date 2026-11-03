// Run after node build.cjs. Uses only Node's standard library.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const vm = require('node:vm');
const state = JSON.parse(fs.readFileSync('content/sitemap-state.json', 'utf8'));
const sitemap = fs.readFileSync('sitemap.xml', 'utf8');
for (const [url, entry] of Object.entries(state)) {
  const pathname = new URL(url).pathname;
  const html = fs.readFileSync(path.join('.', pathname, 'index.html'), 'utf8');
  assert.equal(entry.hash, crypto.createHash('sha256').update(html).digest('hex'), url);
  assert(sitemap.includes('<loc>' + url + '</loc><lastmod>' + entry.lastmod + '</lastmod>'));
  assert.equal((html.match(/<h1\b/g) || []).length, 1, url + ' must have one h1');
  assert(html.includes('rel="canonical" href="' + url + '"'), url);
  if (pathname.startsWith('/work/')) assert(!/href="#[^"]*"/.test(html), 'Root base must not redirect fragment links to homepage');
}
const marcus = fs.readFileSync('work/marcus-live/index.html', 'utf8');
assert(marcus.includes('href="/work/marcus-live/#ml-evidence"'));
assert(marcus.includes('id="ml-evidence"'));
const draft = fs.readFileSync('journal/designed-for-dana-wrong-for-marcus/index.html', 'utf8');
assert(/name="robots" content="noindex/.test(draft));
assert(!sitemap.includes('/journal/designed-for-dana-wrong-for-marcus/'));
assert(!fs.readFileSync('index.html', 'utf8').includes('jiz-pre 0s 4s'));
const source = fs.readFileSync('portfolio-analytics.js', 'utf8');
for (const signal of [{}, {doNotTrack: '1'}, {globalPrivacyControl: true}]) {
  const scripts = [], context = {navigator: signal, location: {hostname:'www.jonathanzamarripa.com'}, URL, window: {}, document: {createElement:()=>({}), head:{appendChild:s=>scripts.push(s.src)}}};
  vm.runInNewContext(source, context);
  assert.equal(scripts.length, Object.keys(signal).length ? 0 : 2);
  if (!Object.keys(signal).length) assert.equal(context.window.vaq[0][1]({url:'https://www.jonathanzamarripa.com/?email=private#private'}).url, 'https://www.jonathanzamarripa.com/');
}
console.log('PASS: ' + Object.keys(state).length + ' indexable pages; route anchors, metadata, sitemap fingerprints, noindex protection, initial visibility and privacy signals');
