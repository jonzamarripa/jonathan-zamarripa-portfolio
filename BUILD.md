# Build

The site ships precompiled. Visitors no longer download Babel or compile JSX.

- Edit the `.jsx` sources (`Homepage.jsx`, `CaseStudy*.jsx`, `App.jsx`).
- Rebuild: `npm i -D @babel/core @babel/preset-react && node build.cjs`
- Output: `dist/site.js` (all pages) + `dist/ds-core.js` (NavBar, Button, StatusPill…).
- To refresh `dist/ds-core.js` after design-system component changes: `node build.cjs path/to/_ds_bundle.js`

Sections, routes and outbound links live in one place: `site-config.js` (order = page order).

Rollback point: `/archive/baseline-2026-09-30-pre-P0/` (files suffixed `.txt` so they aren't compiled).

Discovery regression checks: after building, run `node tests/discovery-integrity.cjs`. Sitemap dates are stored with content fingerprints in `content/sitemap-state.json`; commit that file alongside regenerated pages. Unchanged output keeps its previous date. Prerender failures now stop the build.

The browser résumé at `/resume/` is built by `build-resume.cjs` from `content/public-resume.json`, extracted only from the approved public PDF. Its SHA-256 is checked during every build to prevent content drift. After updating that PDF, refresh the snapshot with `python scripts/extract-public-resume.py` using the existing PyMuPDF tooling, then rebuild. No PDF engine is downloaded by visitors; the PDF remains a separate option.
