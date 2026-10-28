# Unsung Heroes implementation and media handoff

## Scope and provenance

Native `/work/unsung-heroes/` page using the existing Chapter system, route registry, build/prerender pipeline and shared footer. Source: user-supplied `Unsung Heroes Case Study.html` (eight chapters). The user identified the attachment as the build reference; no separate Figma application or additional build-kit package was supplied. No source HTML containing unconfirmed personal details is published.

School-project evidence remains distinct from the 2026 Claudette Colvin demonstration. Archive and Original Plan labels describe the supplied narrative's identified items; underlying original files have not been newly inspected. Recollections, dates, adaptations and the reported teacher-led repeat are not presented as verified metrics. Names, institutional attribution, student media, logos and archival photographs remain withheld pending confirmation/permission.

## Editable components

- `content/unsung-heroes.js`: chapter content, historical script/source mapping, five stage contracts, nine artifact schemas and evidence ledger.
- `CaseStudy-UnsungHeroes.jsx`: `UHStudio`, `UHLearningStages`, `UHArtifact`, `UHEvidenceLedger`, scoped styles and eight-chapter page.
- `content/unsung-heroes-media.json`: replaceable source and cue manifest.
- `assets/unsung-heroes/cover-placeholder.svg`: original typography-only placeholder, not archival art or a student submission.

Artifact fields are editable for the current page session and export as JSON. Reset restores the supplied reconstruction. There is no backend, persistence, student recording/upload or transmission service.

## Media contract

All released sources and cue times are intentionally null. The studio mounts/fetches only after Open ON AIR. No audio elements or network media are created for empty source references. There is no fabricated clock, waveform, synthetic historical voice or fake A/B playback.

To add approved media:
1. Record documentary narration with permission; do not impersonate Colvin or invent testimony.
2. Place approved same-origin media in `assets/unsung-heroes/`. Update each lane's `src`, `gain` (0–1), and rights description. Narration is the master timeline. Music, ambience and effects are optional, pre-aligned full-length stems beginning at zero, with silence where needed.
3. Prefer audio with byte-range support. Required narration establishes duration; invalid/missing files stop playback and expose a transcript fallback. All attached stems share play, pause, seek and playback rate. Drift over 0.2s is corrected on narration time updates. This is HTML media synchronization, not a sample-accurate DAW.
4. Replace cue `start`/`end` nulls with finite, non-overlapping seconds aligned to the final narration. Cue IDs must match the script IDs. Timed transcript highlights the active line; a line can seek to its cue. No forced transcript auto-scroll or live screen-reader reading of every time update.
5. Add an approved cover `src`/alt only after rights review and wire the final cover into the page/metadata. The current page intentionally retains its typography placeholder.
6. Re-run the browser media tests and review volume, speed, intelligibility, licensing, transcript accuracy, and final cues with the actual assets. Manifest status/disclosure must reflect what is really approved.

Global volume scales each lane's gain. Lane mute does not mute the other tracks. Hidden documents pause playback; closing the studio unmounts media and returns focus to its launcher. No autoplay. Playback/seek/mix controls stay disabled without a ready narration source. A manifest failure leaves the text script and learning activities available.

## Historical source register — accessed October 28, 2026

- NPS, The Montgomery Bus Boycott: https://www.nps.gov/articles/montgomery-bus-boycott.htm — Colvin's March 2, 1955 resistance and later boycott context.
- National Archives, 60th Anniversary of the Montgomery Bus Boycott: https://rediscovering-black-history.blogs.archives.gov/2015/12/01/60th-anniversary-of-the-montgomery-bus-boycott/ — age, arrest, plaintiffs and district-court outcome.
- Supreme Court Historical Society, Browder v. Gayle (1956): https://civics.supremecourthistory.org/article/browder-v-gayle/ — June 1956 district ruling and November 1956 affirmation.
- Smithsonian Institution, Explore America: Alabama: https://www.si.edu/spotlight/alabama?page=1 — contextual corroboration of Colvin/Parks challenging bus seating; search-index text was retrievable, direct fetch was intermittently unavailable. No dialogue or precise legal claim depends solely on this page.

Script narration is paraphrased. Its final reflective question is explicitly educational interpretation. Avoid unsupported superlatives such as first-ever resistance; do not imply the Supreme Court heard oral argument or issued a full written merits opinion. No historical photography, quotes or audio are reproduced.

## Validation and remaining approval gates

Run `node tests/unsung-heroes.test.cjs` after the normal build. Build dependencies are the existing Babel/React18 stack; none were added. Existing SSR useLayoutEffect warning remains.

Browser tests use the shipped empty manifest. Separate temporary, low-level QA tones and timed fixture manifests outside the repository verified actual playback, pause, seek, restart, cue highlighting, speed and lane mute. They are not historical media and are not committed or deployed. Actual final-media alignment remains pending.

Keyboard radio selection/feedback, disclosure controls, launch/close focus, source links, filtering, edit/export/reset and chapter history are verified. Browser accessibility-tree inspection is not a full screen-reader certification; final VoiceOver/NVDA review and OS reduced-motion preference emulation remain manual gates. Page introduces no animations and includes reduced-motion overrides. No new dependencies; site bundle increases approximately 15.5 KB gzip, with no eager audio load.

Preview only. No merge, production promotion, production alias change or school endorsement is authorized by this task.
