# Portfolio handoff

Not deployed (`*.md` is in `.vercelignore`). Update only when project state changes.


## Current verified state — October 29, 2026

- **Production:** https://www.jonathanzamarripa.com/ serves commit `d197bdd5d5371cfc823c784ab01360a1e7f81c88` on `pass1-hardening`, Vercel production deployment `dpl_AviNWUBSnRnU8KqA3t8T5V8Gpyqr` (READY). The user published cinematic motion PR #22, then explicitly selected **The Editorial Cut** and published PR #24. Older production statements below are historical.
- **Live type system:** anchored cinematic clip-mask reveals for five signature section H2 headings and a three-line journal cascade. Hero film, site copy, six projects, and the Selected Experience/ASU strip are retained.
- **Finishing branch:** `finish/editorial-cut-qa-impact-journey` starts from current production. Refines reveal timing and adds scroll-linked evidence and chronological career rails without changing facts or copy. Open an isolated draft PR. **Do not merge old PR #23 unchanged**; it predates The Editorial Cut.
- **Desktop QA:** a public browser run at 1920px found page scrollWidth 1905px, no console errors, hero video playing, and The Train Story local MP4 at readyState=4. Public page HTTP 200 includes six Featured Work entries and the ASU education listing. The fallback message surfaced by a static scraper is not itself evidence that the video failed to play.
- **Remaining QA:** authenticated cross-device browser regression at 390/768/1440px, keyboard/focus, scroll cuts, case-study overlays, toggles, OS reduced motion, CLS/FPS/performance. Protected previews require signed-in Vercel access or permitted OIDC. Never describe missing checks as passed.
- **Editorial holds (unchanged):** First Sentence prototype depicts Marcus's *mother* in hospice versus Issue 07 *father*; Issue 07 remains unlisted/noindex; imagery provenance and case-study attribution still require verification. Do not infer or rewrite disputed facts.
- **Release gate:** only deploy the finishing branch after preview review and quality checks. Previous production deployment remains available for rollback.

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


## Local six-project preview — 2026-10-27
- Jonathan supplied the Intuit assessment storyboard and five visual assets, and explicitly chose a local six-project preview. Added Drafted by AI. Sent by You. as a candidate work sample, not commissioned/deployed Intuit work. No learner/business outcomes claimed. Produced prototype scope and planned rollout/evaluation are distinguished.
- New CaseStudy-DraftedByAI.jsx reuses CaseStudyShell; optional resource links and optional hero caption preserve existing pages. App.jsx, site-config.js and build.cjs register /work/drafted-by-ai/. Five supplied PNGs are optimized WebPs under assets/imagery/drafted-by-ai/; supplied 26-page PDF copied under assets/documents/. No synthetic replacement imagery.
- HomepageP1.jsx preview: full-width horizontal First Sentence feature; five equal supporting cards (desktop 3 + centered 2, tablet 2 + centered 1, mobile natural stack). Existing five projects, relative order, images, copy and destinations retained; new project is number 06, labeled Candidate work sample.
- Build passed with existing React useLayoutEffect SSR warning. Homepage and new case study at 375/768/1440: no page overflow or clipped titles; six cards and correct new href. Case gallery Next updates progress. PDF serves HTTP 200; prototype URL reaches the correctly titled sample with candidate/concept disclosure. Prototype gameplay not fully verified.
- Browser screenshots and verification are in this chat outputs/six-project-preview/. Local server: http://127.0.0.1:8771/. Current production remains unchanged at 9247abf. No commit, push, merge or deployment for this preview. Await visual approval.


## Neutral Featured Work redesign — local preview, 2026-10-27
- Jonathan requested replacing the cyan canvas, latest Intuit work first, and a more balanced gallery informed by online references. Reviewed Pentagram /work and Work & Co homepage in-browser; retrieved Instrument /work as another image-led reference (its grid media did not reliably render here).
- HomepageP1.jsx now isolates warm-white (#F7F8FA) gallery colors with Obsidian titles, quieter dark copy, a Lime Latest work marker, six equal editorial tiles in a two-column desktop/tablet grid and natural mobile stack. Drafted by AI. Sent by You. is first, First Sentence second; remaining project relative order unchanged. Existing asset files, copy, chips, disclosures and link destinations retained; common 16:10 frames recrop imagery for consistency. Removed the oversized feature and centered orphan row.
- Build passed with existing React useLayoutEffect SSR warning. Widths 375/768/1024/1280/1440/1920: no overflow or clipped titles; all six tiles equal in height and width in multi-column layouts. Latest-first order, six links, successful legacy overlay/Escape and keyboard entry into the new sample verified. Production unchanged; no commit, push or deploy. Await visual approval.
- Evidence: this chat outputs/neutral-work-preview/; local preview http://127.0.0.1:8772/#work. Previous new-project case study remains intact.

## Scenario interaction, links, header and impact loop — local preview, 2026-10-27
- Added on-demand Figma scenario to Drafted by AI case study, with close/unmount, focus return, full-screen action and external fallback. No frame loads before launch; iframe excludes microphone. Added specific Figma origin to report-only frame-src.
- Featured Work intro now follows heading in one column, once. Deep teal underlined gallery CTAs darken on hover/focus; case resource links use cyan/lime.
- Metrics count to existing verified figures in 1.1s, hold 5.5s, repeat. Individual visibility observers and document visibility pause work; reduced-motion listeners present; final values stay static for assistive technology. Pause/resume control verified.
- Build and git diff --check pass (existing SSR useLayoutEffect warning). Browser checked homepage 375/768/1440 with no overflow; live iframe loads, mobile frame fits, close removes it and restores focus. Repeating count and pause tested. Full prototype completion and OS reduced-motion emulation were not tested.
- Local only, no deployment. Preview http://127.0.0.1:8773/#work; evidence in chat outputs/interaction-preview/.

## Marcus, Live featured case study and card briefs — 2026-11-02
- User explicitly authorized production deployment. Integrated with current production source 4edeca0 to preserve newer typography, motion, Drafted by AI and gallery design.
- Marcus, Live is an independent Featured Work card with its own route, research perspective and opt-in practice. All seven cards include L&D tags, a contextual synopsis, contribution and case-study preview.
- Exact two user-supplied images are visible in chat but not yet available as downloadable files; requested file attachments. Existing scenario artwork remains pending those source files.
- Tavus account-side memory, retention, origin and actual call checks remain outstanding; fixture tests must not be described as live-call validation.
- Build and browser checks passed at 375/768/1440: seven cards, 21 L&D tags, seven contribution/preview briefs, all seven case-study routes, no page overflow or premature Tavus calls. Fixture lifecycle/print/retry regression passed; desktop/mobile captures inspected. Build shim now accepts production motion initialization during prerender.

## Production release verification — 2026-11-02
- Owner-authorized production deployment is READY: `dpl_8e7uZs5ybNCV36W7EmwHKjo1tKoY`, source `942a2af2de53bd1cf0bbeb532bc20b3b2dcd4a0e` on `feature/marcus-live-tavus`. Production aliases include www/apex jonathanzamarripa.com. Main was not merged or modified.
- Protected preview verified HTTP 200 before production deployment. Published homepage returns HTTP 200, includes Marcus, Live, seven contribution briefs and L&D tag groups. Published Marcus, Live, Drafted by AI and First Sentence pages return HTTP 200 with correct titles and prerendered content. All seven routes passed local browser checks.
- Preserved current production source 4edeca0 and its gallery, motion, typography and newer candidate case study. Original SSR useLayoutEffect warning remains; motion-related prerender shim corrected.
- New user images remain pending file attachments; existing scenario art is temporarily displayed. Do not claim the inline image originals were installed. No real Tavus call, retention review or account-settings verification performed.
- This paragraph is local post-release documentation; the deployed source remains 942a2af.

## Marcus artwork supplied as ZIP — 2026-11-02
- Archive.zip provided the three actual originals: workplace-practice concept, Marcus portrait and Tavus screenshot. Converted to verified PNGs with original proportions retained; upload copies are sized so their combined base64 payload stays below 4 MiB. Original files retained in task workspace.
- Homepage Marcus thumbnail and case-study hero now use the supplied workplace-practice image. The case study also shows the portrait and static interface screenshot with appropriate captions, PNG download links, and a dedicated social-preview image. Efficient WebP display derivatives preserve sharper images without making the PNG downloads larger.
- Production image update authorized by the existing task; no Tavus settings or conversation behavior changed.

## Marcus artwork production verification — 2026-11-02
- Source `3f53ca22afd66d8a0c9271eb421a13edf0b60245` deployed as `dpl_Gr5iAwaB9VPmRx5PRXe5bcVLm44b`, READY, owning www/apex production aliases. Main remains unchanged.
- Protected preview and production case-study page returned HTTP 200 with the new practice image, three PNG download links and dedicated social image. Local Chromium checked actual PNG signatures/MIME/sizes plus all image loads and mobile/desktop rendering.
- Upload-ready PNGs: practice 790803 bytes, portrait 780461 bytes, interface 802527 bytes; total 2373791 bytes. PNG copies preserve proportions with size reductions; source originals and higher-resolution working conversions remain in work/. No generative redraw performed.
- This is local post-release documentation; production code remains 3f53ca2.

## Public pilot-status edit — 2026-11-02
- User approved replacing the public Implementation and current status engineering note with the concise Pilot status explanation. Technical details retained in MARCUS-LIVE.md, excluded from deployment. AI/privacy notice and all embed behavior preserved.

## Featured Work editorial gallery release — 2026-11-02
- User authorized deployment. Release branch `preview/featured-work-gallery-release` is based on live production source b63aac3, preserving Marcus Live, AI work sample, all seven projects and their approved ordering, route flags, current typography/motion and all case-study implementations.
- Replaced grid with native horizontal scroll-snap gallery, concise value statements, sharp contained media, arrows/progress, keyboard focus reveal and expandable all-projects index. Complete detailed project records retained in FEATURED_PROJECTS.
- Build and Chromium checks at 375/768/1440 pass: seven links/routes, no overflow/runtime errors, next-project preview, arrow/Home/End, horizontal wheel, reduced motion, tab reveal and touch swipes. Review artifacts in local work/gallery-review. Bundle gzip increases 1,072 bytes relative to live baseline; no dependencies added.
- Production deployment `dpl_C4kHHWZLUVk8YeuzoS3kTDhvyQVr` is READY, source `e53ca415472598e85e845ba73bb40af9bf752763`, www/apex aliases assigned. Connector fetch verified published homepage HTTP 200, seven gallery slides/project index, and all seven case-study pages HTTP 200 with prerendered content. Deployment error-log query returned no records. Main was not merged or modified. This verification note is local post-release documentation.

## Featured Work image-led refinement preview — 2026-11-02
- User rejected the black media sidebars and heavy framing. Branch `preview/featured-work-image-led-refinement` removes letterboxing, fixed media heights, the permanent cyan frame, deep shadows and decorative perspective. Edge-to-edge 16:9 imagery (4:3 on phones), restrained corners, smaller chapter heading, numbered categories and a clearer title/summary split now follow the existing light editorial surface. First Sentence retains a project-specific portrait focal point. No assets, project order, detailed records, route flags or case-study sources changed.
- Build and browser checks passed at 375/768/1440 for routes, touch, wheel, arrow/Home/End, reduced motion, tab order and focused-link visibility. Full-bleed image-bound checks and screenshots also cover 1920. No new dependencies; gzip delta +206 bytes versus live gallery. Existing NavBar SSR warning remains; physical-device and screen-reader verification remain manual.
- Screenshots: local `work/gallery-review/refined-*.png`; preview only, not production.

## Standing deployment authorization — 2026-11-02
- User explicitly authorizes deploying every subsequent change made for this portfolio after verification, without asking again. Deploy the current refinement (9034053) to production now. This supersedes preview-only approval gates for future authorized portfolio changes; preserve the correct team/project and current production content.
- Refinement deployed: `dpl_ASghQ8qVth5BH2kPbm3B8PoKMt3e`, production READY with www/apex aliases, source 9034053. Live homepage HTTP 200 confirms edge-to-edge media and all seven projects. Deployment error-log query returned no records.

## Featured Work interaction and editorial system — 2026-11-02
- Standing deployment authorization applies. Branch `preview/featured-work-experience` builds on live 9034053. The user requested obvious image states, discoverable navigation, triggered slide motion, contextual overviews/tags and cohesive hiring-manager-facing case-study naming.
- Added visible browsing instructions, labeled Previous/Next controls above imagery, seven numbered selectors with current state, and persistent selected-image CTA. Preview click selects; selected click opens; modifier-click retains real URL behavior. Images distinguish resting/selected, hover/focus and pressed states. Native horizontal scroll snap remains; no wheel interception, auto-advance, new libraries or WebGL. Triggered image settle and directional copy reveal respect reduced motion and the existing Pause Motion control.
- Centralized the complete project catalog in `site-config.js` (including retained detailed records). Gallery, all seven case-study mastheads/subtitles/metadata and related-project display names read it. Existing routes, route flags, project ordering, old aliases, body evidence and prototype disclosures remain intact. Four distinctive project names retained with new subtitles; HotelKey, Workday and Guest CRM use Ready for Day One, The Growth Launch and Beyond the Click.
- Build passed, prerendering all seven routes. Playwright suite at 375/768/1440 passed instructions/control placement, 21 tags, all navigation methods, visible keyboard focus, touch/wheel, selection/open behavior, hover states, animation triggers, reduced motion/Pause Motion, matching H1/subtitle/metadata and old route aliases. All case-study pages also pass heading/overflow checks at 1920. Actual pressed state verified at scale .985; hover at 1.025. Fixed inherited lime-on-light linked-title hover color.
- Visual QA and React review completed. No new dependencies. Initial assets gzip +2,220 bytes relative to live baseline. Existing NavBar SSR warning remains; physical-device and real screen-reader checks remain manual. Review screenshots/test evidence in local `work/experience-review/`. Preview/deployment should use only tracked release files.
- Production READY: `dpl_6kpFJT7ZPSYvAgmgnvkwPeC1tawC`, source `bd4405858b622563bd50ba8fe591b7a48c2fc288`, www/apex aliases assigned. Published homepage HTTP 200 confirms instructions, seven numbered controls, seven focus-tag groups and slide effects. All seven published case-study pages HTTP 200 with correct editorial titles/subtitles. Deployment error-log query returned no records. Main remains unchanged. This verification note is local post-release documentation.

## Bounded gallery and public résumé — 2026-11-02
- Standing production authorization applies. Branch `preview/featured-work-bounded-stage` builds on live bd44058. User requested a controlled-width, cohesive composition; filled color tags; visible image/motion states; and a public résumé without address, personal location or phone information.
- Gallery is now a centered stage capped at `--chapter-max` (1180px), with a dark Obsidian chapter/Carbon cards, stacked heading and introduction, a single aligned project-copy column and full-bleed imagery. Filled Lime/Cyan/Slate pills replace outline-only tags. Existing seven-project order, routes, controls and data source remain. Hover/focus/pressed states are clearer; click-triggered wipe/settle motion respects accessibility and Pause Motion preferences, with a visible status when motion is reduced.
- The user's screenshots showed the earlier fhpz7qpqf preview. Verified the prior production release actually had controls/tags; provide only the current production URL for review.
- New `assets/documents/jonathan-zamarripa-public-resume.pdf`: fresh 2-page, selectable-text PDF based on the user's supplied Profile (1).pdf. No residence/location field, street address, phone, embedded original pages or private metadata. Professional institution names remain. Includes exact independent consulting (Jul 2024–present), IHG Creative Content Specialist (Sep 2025–Jul 2026), Cox Learning Experience Designer (Feb–Sep 2025), AIS Instructional Designer & EdTech Integration Specialist (Jul 2019–Apr 2024), K–5 Robotics Instructor (Jul 2011–Jul 2019), service, current independent projects, education and credentials. Source profile overrides older role/degree labels.
- Updated Hero, footer, contact and navigation résumé triggers to the shared local URL. Updated actual career timeline to five stages, its motion count to derive from stage count, degree label/structured data, and enterprise case-study Role fields to verified job titles.
- Build passed; browser interaction suite passed at 375/768/1440; width/alignment/colored-tag/PDF-control/5-stage-career checks passed at 375/768/1440/1920; all case-study headings and overflow checks passed. PDF: 2 pages, 49,017 bytes, text/bounds/privacy checks pass, 3 valid public contact links. Initial assets gzip -84 bytes, no dependencies. Existing NavBar SSR warning remains; real screen-reader/device checks remain manual. Review files in local work/bounded-review; source uploaded profile and scratch files are untracked and must not be published.
- Production READY: `dpl_GyZKEyRE5HmJwnH6wUjN1kd1TWww`, source `5352624f140fa25792603d403ddc3801c65fb8c6`, www/apex aliases assigned. Published homepage HTTP 200 confirms bounded dark stage and corrected career titles/current consulting stage. Published resume HTTP 200 application/pdf, 49,017 bytes; published ETag matches the verified local PDF hash. Published site-config points every resume trigger to the new asset. HotelKey/Guest CRM pages return HTTP 200 with verified employment titles. Deployment error-log query returned no records. This is local post-release verification; no further site changes required.

## Personal social-share preview — 2026-11-02
- User asked how to replace the project's default social attachment with a more elevated preview featuring him. Standing deployment authorization applies; branch `preview/portfolio-social-preview` starts at current production 5352624.
- New `assets/og/jonathan-zamarripa-portfolio-v1.jpg`: 1200×630 JPEG with the existing studio portrait unchanged, official monogram, name and learning-design/strategy positioning. Layout rendered from HTML/CSS using portfolio colors and font stack. Original portrait asset remains untouched. Legacy `assets/og-image.jpg` is updated with the same card for old metadata consumers.
- Homepage Open Graph/Twitter image, title, description and alt text updated; new versioned image URL helps image-cache refresh. Person JSON-LD gains the image. Journal fallback uses the same identity while articles retain explicit images. Case-study images remain project-specific; builder now replaces Twitter fields separately (no duplicate homepage metadata), sets correct image types and dimensions, including the existing 1280×720 AI sample.
- Supported build and metadata checks passed: one of every OG/Twitter field, all seven route-specific previews and correct actual image dimensions; generated page bodies and application JS are byte-identical to current production. Image inspected at full size; source image is unaltered. No new dependencies or initial JavaScript growth. Existing NavBar SSR warning remains.
- Social platforms cache page and image data independently. User can refresh LinkedIn via https://www.linkedin.com/post-inspector/ and Facebook via https://developers.facebook.com/tools/debug/. Existing shared posts may retain their first preview; deployment alone cannot force every social cache to update. Rendering source is local work/social-preview/card.html; future revisions should use a new image filename and update metadata.
- Production READY: `dpl_5eSVT3qYoxrpJ1C5QYSiY2uecP4z`, source `507e5d226bd1a5791cc538efcd19d18eca61c0be`, www/apex aliases assigned. Live homepage returns HTTP 200 with new OG/Twitter portrait-card URL and positioning. Versioned card and legacy fallback both return HTTP 200 image/jpeg, 92,810 bytes, and ETags matching the local card. Legacy case study retains its distinct project image in both OG/Twitter metadata. Error-log query returned no records. This is local post-release verification.

## Discovery and conversion hardening — 2026-11-03
- Owner authorized implementing the audit and deploying. Branch `preview/discovery-and-conversion-hardening` starts at production 507e5d2; main remains untouched.
- Fixed Marcus practice/research chapter links to include the route instead of resolving fragments against the root base. Generated skip links include their case-study path. Builder rejects unresolved bare fragments and fails on prerender errors.
- Footer destinations are real accessible links with modified-click behavior preserved. Contact requests abort after 15 seconds with an email fallback message; success remains conditional on provider acceptance. Mocked success, error and timeout checks pass.
- Sitemap fingerprints in content/sitemap-state.json preserve unchanged dates. Controlled check confirmed rebuild preserves all dates and changing one page changes only its own date. Regression tests in tests/discovery-integrity.cjs cover all nine indexable pages, canonicals, route anchors, sitemap hashes, private dossier noindex and browser privacy signals. Build-only files excluded from deployment.
- Issue 07 now links to its verified public LinkedIn article (clean URL from the author's publication notification). No unverified draft text was published. Issue 03 exact public link and verified full on-site editions remain unavailable; do not fabricate or unhide the dossier.
- Optional Vercel pageview/performance loader added, restricted to production domains, honoring Do Not Track/Global Privacy Control and stripping query/fragment values. No form fields, AI conversations, identity calls, recordings or cookies configured. Backend ingestion must be verified after deployment; custom conversion analytics pending owner's response about unused connected PostHog project. No paid plan changes.
- Removed deliberate four-second prerender hiding. Local 375px lab (4x CPU, 1.6Mbps, 150ms latency, reduced motion) FCP/LCP 6648ms before, 2560ms after, CLS 0 in both. Local server is uncompressed; not Lighthouse or production field data. Existing NavBar useLayoutEffect SSR warning remains.
- Browser tests pass at 375/768/1440: no overflow, eight footer links, seven standalone case routes and working evidence/deep links. Screenshots and results in untracked work/discovery-release/. App bundle gzip +180 bytes; loader 483 gzip bytes plus optional Vercel scripts (~17KB uncompressed combined). No dependencies added.
- Google Search Console/Bing connections remain inactive; owner OAuth actions required before verifying ownership/submitting sitemap. Existing robots/sitemap/canonicals/structured data preserved. No unsolicited social posts or messages sent.

## Owner-approved anonymous analytics — 2026-11-03
- Owner selected “Use it for the portfolio” for previously unused PostHog project 691515. Renamed to Jonathan Zamarripa Portfolio; anonymize_ips=true; autocapture, recordings, console/network capture, surveys and heatmaps disabled. Ingestion token/region configured only as production server environment variables; no personal API key or token committed.
- Dependency-free api/analytics.js accepts only five explicit event names, generated public path allowlist, random opaque ID, coarse referrer category and viewport category. Strips unknown fields, forwards no client IP or user-agent, disables geolocation/person profiles. Rejects foreign origins, malformed or oversized bodies and private query paths, and honors DNT/GPC. Upstream bounded to 3.5 seconds.
- Browser tracking uses a fresh in-memory ID per document, no cookie/localStorage/sessionStorage, no user identification and a 40-event document cap. Measures pageviews, modal/standalone case studies, resume clicks, direct-email clicks and contact success only after provider acceptance. Counts describe events; they are not unique people, completed PDF downloads or cross-visit attribution. No JavaScript SDK or dependency added. Privacy notice updated.
- Public path allowlist generated with the sitemap so new projects need no parallel route list. Unit checks cover privacy validation/upstream failures, modal route deduplication, resume clicks and volume cap. Browser fixtures confirm contact_success fires only after acceptance, never for failure/timeout.
- Live contact delivery test JIZ-DELIVERY-20261103-0148 sent exactly once from the production UI and found in the owner's verified Gmail inbox at 01:48 UTC. Browser interaction connector timed out after submission, so inbox receipt is the delivery evidence. Do not resend it.
- First audit deployment 939c4f1 is READY as dpl_AYL2yQvGoGrDRNUfxQu6eeAeQNeL on custom-domain production aliases. Five published endpoints return 200 with repaired links/no old visibility delay; deployment-specific error log scan returned no records. Analytics follow-up requires another deployment and ingestion verification.
