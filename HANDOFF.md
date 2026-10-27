# Portfolio handoff

Not deployed (`*.md` is in `.vercelignore`). Update only when project state changes.

## Branch / PR
- Working branch: `pass1-hardening`; PR #6 merged as `7b4f950`, and footer PR #9 merged as `6568270`, each after explicit authorization. Jonathan approved committing the portfolio-wide refinement and publishing its branch preview; no merge or production promotion authorized.
- Production released and verified 2026-10-27 after Jonathan explicitly requested deployment: https://www.jonathanzamarripa.com serves `723fe34af819b06b17909b1e92c354f514813633`, Vercel deployment `dpl_28MDoBwrRzMzz5Lif1NfkqBKbJgp` (READY, production). Source is published on `pass1-hardening`; no merge to main occurred. Earlier QA deployment mismatch below is historical and resolved.
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
- Archive Webflow outbound link resolved: Additional Work now links to existing Featured Work with an accurate CTA; shared archive URL is /#archive.
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


## Approved production release — 2026-10-27
- Jonathan explicitly authorized committing, publishing and deploying the approved changes. Published commit `723fe34af819b06b17909b1e92c354f514813633` on `pass1-hardening` and deployed that exact SHA to existing team portfolio-0e91/project prj_kc4HtEaW8FMbXoHpilevb3963FRX, target production. Deployment `dpl_28MDoBwrRzMzz5Lif1NfkqBKbJgp` reached READY and owns www/apex aliases.
- Command-line Git push lacked credentials, so the connected GitHub account published identical file blobs/tree (tree SHA `75bef892a39549c66844991f5156237aa3f71de1`). Original local commit bf24fe9 is preserved on `pass1-hardening-local-checkpoint-bf24fe9`; active local pass1-hardening tracks origin at 723fe34. No reset, force-push or merge.
- Production browser verification: 375px Contact now stacks (heading client/scroll width both 315px); desktop/tablet remain two columns. Footer is rounded Signal Lime rgb(198,242,58) at all 375/768/1440 widths. All five project links retained; no homepage overflow. Five case studies and journal hub passed 18 route/width smoke checks (expected H1, no page overflow). Forms were not submitted.
- Evidence in this chat: outputs/release/ contact captures at 375/768/1440, footer-375.jpg, verified.json and routes.json. This release record is a local documentation update after deployment; production source remains 723fe34.
- Current next task: none. Approved visual release complete. PR #10 remains unmerged; any later merge or new deployment requires its own scope/authorization.


## Archive navigation correction — 2026-10-27
- Jonathan authorized this fix and production deployment. Replaced the old Webflow CTA with View featured case studies (/#work), using existing parent-controlled section navigation for ordinary activation and preserving native modified-click behavior. Removed the unsupported promise of a fuller archive; retained all six project summaries and imagery. Shared links.archive now points to /#archive. No new page, effects or unrelated project claims.
- Build passed with existing useLayoutEffect SSR warning. Local 375/768/1440 keyboard/pointer activation reaches Work; no page overflow, six archive cards, no Webflow anchors, chartreuse footer preserved. Production deployment verification follows publication of this revision.


## Archive fix production verification — 2026-10-27
- Published source commit ac82f23c56f46d6aa1a3359db2c6940c5217d239 on pass1-hardening; exact tree 2c6d12f1f91bc55d64f2fad5596ef466edac0414 matches local verified checkpoint b1d8818 (preserved on pass1-hardening-local-checkpoint-b1d8818). No reset, merge or force-push.
- Production deployment dpl_BvhoTqUnZSzvrCGACKU35VXgKhgR is READY and owns www/apex aliases, superseding 723fe34 deployment.
- Live keyboard/pointer checks at 375/768/1440: View featured case studies reaches Work; no Webflow links; six archive summaries and five featured projects preserved; no page overflow; Signal Lime footer preserved. Screenshots and JSON evidence in this chat's outputs/archive-fix/.
- Source changes: Homepage.jsx and site-config.js, generated dist/site.js/index.html, and handoff documentation. Build passed with existing SSR useLayoutEffect warning. No new effects, assets, pages or factual claims. Release complete; remaining cover-image inconsistencies and repeated carousel imagery remain separate tasks.


## Archive CTA spacing — 2026-10-27
- Jonathan requested more separation below the View featured case studies pill. Added margin-bottom:var(--space-xl) to the existing archive header (32px); no button styling, copy, destinations or effects changed. Build passed with existing SSR warning. Local browser checks confirm exactly 32px gap to the project grid and no overflow at 375/768/1440px. Production deployment authorized by the ongoing task.


## Featured Work title hierarchy — 2026-10-27
- Jonathan approved stronger card-title hierarchy and replacing the orange homepage marker with Signal Lime. HomepageP1.jsx uses slightly larger flagship/secondary titles, weight 700, an extra 8px below metadata, and the existing muted-copy token for descriptions. Homepage badge and existing media accent now use Lime; First Sentence case-study Orange, copy, assets/crops, five-tile hierarchy and interactions unchanged. No new shadow or effects.
- Build passed with existing SSR warning. Rendered local checks at 375/768/1440: all five titles fit, no page overflow, Lime marker confirmed. Before/after captures in this chat outputs/featured-titles/. Production release authorized by the ongoing task.


## Featured Work tile alignment — 2026-10-27
- Jonathan approved aligning the flagship with the full two-row supporting group. HomepageP1.jsx stretches the desktop grid, gives supporting rows equal fractions, reuses one gap for both grids, and lets metadata grow so CTAs anchor at the bottom. Media cannot shrink: original 16:19 flagship and 16:10 supporting frames/crops retained. Mobile rows reset to natural heights, preserving the existing stack.
- Build passed with existing SSR warning. Browser checks at 375/768/1024/1280/1440/1920 show no page overflow; at desktop flagship/supporting top and bottom deltas are exactly zero, all four secondary heights equal, CTA baselines aligned by row. Tablet rows remain equal; mobile stack preserved. Evidence outputs/featured-alignment/. Production release authorized under ongoing task.
