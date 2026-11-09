// Source guard against the retired white/multi-tile Featured Work system.
// Component-owned presentation must not be overridden by the global identity sheet.
const fs = require('node:fs');
const assert = require('node:assert/strict');
const css = fs.readFileSync('identity-mist-v2.css', 'utf8');
const component = fs.readFileSync('HomepageP1.jsx', 'utf8');
assert.match(component, /function FeaturedWorkEditorial\\(/, 'Featured Work component missing');
assert.match(component, /jz-fw-project-link/, 'Featured Work project links missing');
const legacy = [
  /html\\s+\\.jiz-homepage\\s+\\.jz-fw(?:-track|-copy|-stage|-frame|-project-link|-project-title|-tags|-heading|-gallery-layout|-buttons)?\\s*\\{/,
  /html\\s+\\.jiz-homepage\\s+\\.jz-fw\\s+\\.jz-fw-[\\w-]+\\s*\\{/,
  /one coherent row of three image-first cards/i,
  /background:rgba\\(250,252,253,\\.97\\)!important/
];
for (const pattern of legacy) assert.doesNotMatch(css, pattern, 'Legacy Featured Work override has returned: ' + pattern);
console.log('PASS: Featured Work has no retired white-card or three-column global overrides');
