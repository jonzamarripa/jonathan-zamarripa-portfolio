# Portfolio handoff

Not deployed (`*.md` is in `.vercelignore`). Update only when project state changes.

## Branch / PR
- Working branch: `pass1-hardening`; PR #6 merged into `main` as `7b4f950` after explicit production authorization. Jonathan authorized production promotion of the verified footer update.
- Production: `main`, served at https://www.jonathanzamarripa.com (apex redirects to www).
- Vercel previews sit behind Vercel login; Claude can't open them until Jonathan signs in to Vercel in the built-in browser.

## Milestones (PR #6 merged; current local work noted below)
- Pass 1 hardening: standards mode, a11y, robots/sitemap/JSON-LD, `.vercelignore`, `vercel.json` headers (CSP report-only), mobile hero MP4.
- 2A: shareable case studies at `/work/<slug>/` (legacy-unlocked, hotelkey-onboarding, guest-crm-pilot, workday-learn-launch); Featured Work CTAs are real links; obsolete Webflow link removed from card 05.
- 2A ext. checkpoint 1: `/work/the-first-sentence/` with on-demand embed of https://drums-plant-63973620.figma.site/.
- 2.1: shared chapter tokens. 2.2: `Chapter` wrapper. 2.3: First Sentence page migrated to `Chapter` + tokens. 2.5: First Sentence Chapter 02 polished (four-step guide Enter as Dana → Observe → Choose → Reflect, prominent Begin, full-width poster; hi-res screens 01–03 from Jonathan's supplied screenshots). 2.6: Featured Work is an asymmetric grid — The First Sentence flagship (16:19 crop of the prototype start screen `screens/01-threshold.webp`, links to `/work/the-first-sentence/`), four case studies 2×2; AI Systems Hub moved to Additional Work (no link). 2.4: Issue 07 dossier uses `.jiz-chapter` panels (masthead + 6 chapters; surfaces in `build-journal.cjs` `DX_SURFACES`; light/mid-surface ink overrides in `journal/dossier.css`). Journal hub and case-study shell pages not yet migrated.

- Featured Work: Legacy Unlocked, HotelKey and Guest CRM now use approved illustrative covers (original PNGs retained with optimized WebPs); First Sentence flagship, Workday, layout, routes and journal unchanged.

- Featured Work: First Sentence now uses the supplied Dana/Marcus portrait illustration with centered 16:19 crop; Workday uses the supplied learning-platform illustration. PNG originals and WebPs retained; remaining three covers and grid unchanged; local review pending approval.

- Palette: removed both Deep Navy variants and the navy Chapter surface; Electric Cyan `#60D9FD` is the signature blue with dark ink on light-section cyan highlights. Former navy panels use Slate/Obsidian; Signal Lime, First Sentence Orange and journal Amber/Teal remain unchanged. Build, contrast and desktop/mobile regression/visual checks passed; Jonathan authorized production promotion.

- Footer: existing homepage/journal footers now share Obsidian closing-panel geometry via `--panel-r`/`--panel-gap`, Carbon gutters and restrained Cyan/Lime interactions. Jonathan approved mounting the existing `FinalMoment` footer after standalone case-study content; the same navigation/copy are reused with homepage destinations. No new footer is added inside overlays. Build and desktop/mobile checks passed for all five case-study pages, homepage and journal (rounding, gutters, contrast, navigation/focus and overflow); Jonathan authorized production promotion.

## Shared paths
- Build: `node build.cjs` (needs node_modules with @babel/core, @babel/preset-react, react, react-dom 18.3.1) → `dist/site.js`, prerendered `index.html`, `work/*/index.html`, journal pages, `sitemap.xml`.
- Routes, paths, hero/OG images: `site-config.js`. Routing: `App.jsx` (`Root` → `CaseStudyPage` for `/work/` paths).
- Case-study shell: `CaseStudyShell.jsx` (+ `CaseStudy-*.jsx` configs). First Sentence: `CaseStudy-FirstSentence.jsx`.
- Chapter wrapper: `Chapter.jsx` (`window.JIZChapter`), styles `.jiz-chapter*` in `styles.css`.
- Journal: `build-journal.cjs`, `content/journal.js`, `journal/journal.css`, `journal/dossier.css`.
- Homepage chapter reference: `HomepageP1.jsx` `RHYTHM_CSS`.

## Tokens (tokens/spacing.css, tokens/colors.css)
- Geometry: `--panel-gap`, `--panel-r`, `--panel-r-inner`, `--chapter-pad-y`, `--chapter-pad-x`, `--chapter-max` (1180), `--chapter-max-wide` (1440).
- Surfaces: `--panel-gutter-surface` (carbon), `--surface-obsidian|carbon|slate|mist|paper`.
- Accents: `--accent-portfolio` #C6F23A, `--accent-journal-amber` #E3A24C, `--accent-journal-teal` #56B8B4, `--accent-first-sentence` #F36F21. In chapters use `--chapter-accent-ink` for accent text.

## Unresolved
- First Sentence: prototype says Marcus's *mom* is in hospice; Issue 07 corrections say *father*. Interface screenshots 04, 06, 08–10, 12, 13, 16, 17 are still 800px (01–03 now hi-res). Hero labelled "AI-generated imagery" (unconfirmed). Prototype cites Kapur (2016).
- Image text conflicts: Legacy cover says "compliance training / 12 weeks · Jan–Mar 2024"; Guest CRM cover role/status differ from its card.
- Archive "View the full archive" still links to the old Webflow site (it shows unverified metrics).
- Case-study pages: hero image repeats as the first carousel item.
- CSP is report-only; no long-lived caching (assets unversioned).
- Issue 07 stays unlisted/noindex; don't publish or reconstruct its text.

## Next authorized task
None. Waiting for Jonathan's next task (remaining migrations: case-study shell pages, journal hub).

## Marcus, Live pilot (2026-11-02)
- Review branch: `feature/marcus-live-tavus`; not merged, pushed or deployed.
- Chapter 02B uses official CDN `@tavus/embed@latest` after explicit action, lifecycle cleanup, optional reflection, and a new embed per retry. Existing build/routes/Figma preserved.
- Page override disables unique visitor memory and starts camera off; saved deployment settings still need verification. Greeting explicitly supplied because account access is unavailable.
- Build and fixture-based browser checks passed. Actual configuration lookup returned `403 origin_forbidden`; live media, greeting, ending, retention and memory isolation remain unverified. See `MARCUS-LIVE.md` before release.

## Marcus, Live sibling showcase (2026-11-02 revision)
- User requested a distinct research-backed build showcase. `/work/marcus-live/` now contains the strategic paper and optional live practice, paired with the original case study through navigation tabs. Chapter 02B is removed from the original page.
- Added `CaseStudy-MarcusLive.jsx`; registered it in existing App/routes/build. Five DOI studies, industry context, platform trade-offs, AI-assisted process, proposed evaluation and future use cases included. No measured efficacy or time savings claimed.
- Six case studies prerender successfully; fixture-based navigation, lifecycle, original Figma launcher, print and mobile checks passed. Live-call/account verification requirements are unchanged. See `MARCUS-LIVE.md`.
- Changes remain local on `feature/marcus-live-tavus`; no push, merge or deployment.

## Marcus, Live Featured Work entry (2026-11-02)
- Added a distinct homepage Featured Work card as entry 02, leading the secondary grid, linking to `/work/marcus-live/`. Original flagship remains entry 01; four enterprise cards remain present. Count now derives from the project list.
- Uses existing Northstar scenario artwork until a dedicated thumbnail is produced. Description identifies an independent Tavus pilot with research and evaluation, without efficacy claims. No production deployment authorized or performed in this update.
- Verification: build and diff checks passed; Chromium confirmed six cards, correct link/count, loaded artwork, mobile overflow, navigation and no Tavus load before opt-in. Existing NavBar SSR warning remains.
