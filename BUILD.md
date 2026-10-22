# Build

The site ships precompiled. Visitors no longer download Babel or compile JSX.

- Edit the `.jsx` sources (`Homepage.jsx`, `CaseStudy*.jsx`, `App.jsx`).
- Rebuild: `npm i -D @babel/core @babel/preset-react && node build.cjs`
- Output: `dist/site.js` (all pages) + `dist/ds-core.js` (NavBar, Button, StatusPill…).
- To refresh `dist/ds-core.js` after design-system component changes: `node build.cjs path/to/_ds_bundle.js`

Sections, routes and outbound links live in one place: `site-config.js` (order = page order).

Rollback point: `/archive/baseline-2026-09-30-pre-P0/` (files suffixed `.txt` so they aren't compiled).
