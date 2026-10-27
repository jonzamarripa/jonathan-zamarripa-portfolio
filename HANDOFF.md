# Portfolio handoff

Not deployed (`*.md` is in `.vercelignore`). Update only when project state changes.

## Branch / PR
- Working branch: `pass1-hardening`; PR #6 merged as `7b4f950`, and footer PR #9 merged as `6568270`, each after explicit authorization. Jonathan approved committing the portfolio-wide refinement and publishing its branch preview; no merge or production promotion authorized.
- Production verified 2026-10-27: https://www.jonathanzamarripa.com serves Vercel deployment `dpl_2diT3hFFNo3okXv2BXoWXAVkZ7w8`, source `qa/monitoring-regression-gates-20261027` at `acf2893c0e3e5fdc8ef9266886a680a700d133e8` (READY, production). This differs from Git main and PR #10; see current verification below.
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

- Portfolio refinement (approved for branch preview): `portfolio.css` / `tokens/portfolio.css` isolate semantic presentation from the protected journal. Enterprise shell and Behind the Build reuse existing `Chapter` with neutral dark/light rhythm; shared reading widths, metadata/media framing, focus/controls and card surfaces are consolidated; the portfolio footer is chartreuse with dark ink. Five-tile assets/order, copy, media, First Sentence Orange/prototype and journal branding are unchanged. Behind the Build example toggles are keyboard buttons with expanded state. Build, sampled contrast, screenshots, all seven views at desktop/mobile, and 320/768/1024px overflow checks passed. Journal hub/Issue 07 screenshots match HEAD exactly. First Sentence keyboard launcher/iframe URL verified; external Figma gameplay is blocked by the environment proxy (`ERR_TUNNEL_CONNECTION_FAILED`). Approved for branch preview; production promotion remains unauthorized.

- Visual fidelity corrections (approved for PR #10 preview): Featured Work now uses Electric Cyan with cohesive Carbon cards; original five-tile hierarchy, copy, images and crop rules remain. Existing NavBar source now provides the inset rounded frame, Cyan active location and restrained shadow-free treatment; FinalMoment owns the compact chartreuse grid footer (all copy/links retained), and superseded portfolio overrides were removed. First Sentence uses an explicit shared display-title variant while retaining Orange. Content/media/link comparisons, 35 viewport/view regression checks, sampled text contrast, menu/focus/overlay/carousel checks, build and screenshot reviews passed; journal/Issue 07 screenshots remain pixel-identical. Browser access needs writable `/home/agent/.pki/nssdb` in this sandbox; no certificate bypass. Webfont/Figma access remains restricted. No merge or production promotion authorized.

## Shared paths
- Build: `node build.cjs` (needs node_modules with @babel/core, @babel/preset-react, react, react-dom 18.3.1) → `dist/site.js`, prerendered `index.html`, `work/*/index.html`, journal pages, `sitemap.xml`.
- Routes, paths, hero/OG images: `site-config.js`. Routing: `App.jsx` (`Root` → `CaseStudyPage` for `/work/` paths).
- Case-study shell: `CaseStudyShell.jsx` (+ `CaseStudy-*.jsx` configs). First Sentence: `CaseStudy-FirstSentence.jsx`.
- Chapter wrapper: `Chapter.jsx` (`window.JIZChapter`), styles `.jiz-chapter*` in `styles.css`.
- Journal: `build-journal.cjs`, `content/journal.js`, `journal/journal.css`, `journal/dossier.css`.
- Homepage chapter reference: `HomepageP1.jsx` `RHYTHM_CSS`. Portfolio-only refinements: `portfolio.css` → `tokens/portfolio.css`; linked from the portfolio HTML shell, never the journal.

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
Approved PR #10 visual-fidelity corrections completed for branch preview. No merge, production promotion or journal redesign authorized. External Figma gameplay still needs verification from a browser that can access Figma Sites.


## Production smoke check — 2026-10-27
- Jonathan visually approved the local Contact correction, then reported a production promotion. Live verification shows the approved correction is **not deployed**: at 375px Contact still has two 147.5px columns; heading client width 148px versus scroll width 159px. Live footer is rounded Obsidian, not the approved chartreuse.
- Vercel production source is `acf2893c0e3e5fdc8ef9266886a680a700d133e8` on `qa/monitoring-regression-gates-20261027`, deployment `dpl_2diT3hFFNo3okXv2BXoWXAVkZ7w8`. Refetch confirms origin/main remains `65682706d3b149fc2c173873233a2a78042d32d9`; PR #10 remains open/draft, head `pass1-hardening` at `10fb99f591fbd1be41300e6ddbafd3aedb3e512f`.
- Local approved patch remains uncommitted in Homepage.jsx and generated dist/site.js/index.html: add `.jiz-build-head` to the existing <=520px one-column rule. Preserve these edits; do not reset or overwrite them. This fixes an inherited mobile layout defect without changing copy, assets, typography, interactions, or other surfaces.
- Live smoke checks at 375/768/1440: homepage has no page overflow; all five distinct case-study destinations and journal hub render their expected H1/title with no page overflow (18 route/width checks). Mobile Work navigation and Back to Top work; journal link click-through reaches /journal/. Footer radius remains responsive, but its color is the older Obsidian treatment. No forms submitted.
- Evidence: this chat's outputs/production-check/ contains Contact captures at all three widths, mobile footer capture, and live-homepage.json/routes.json. The prior outputs/review.html records the approved local result.
- No deployment, promotion, merge, push, or commit performed during this check. Next step is to publish the approved local patch through the intended branch/review flow and select the correct production revision after explicit authorization; do not treat the current deployment as the approved visual result.
