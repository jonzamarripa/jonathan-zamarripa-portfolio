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

Approved media integration — October 29, 2026:

- The supplied final stereo MP3 is copied without transcoding to `assets/unsung-heroes/audio/unsung-heroes-ep01-the-girl-who-wouldnt-move-final-mix.mp3`. Local afinfo confirms stereo, 44.1 kHz, approximately 119.824 seconds and 192 kbps. Manifest SHA-256 records the exact approved bytes. Package loudness claims were not independently measured.
- `playbackMode: stereo-mix` retains the existing narration-ID master clock, labeled Episode mix. Music/ambience/effects sources stay null. Every lane mute is disabled and explained by an accessible notice; master volume, speed, play/pause, seek and restart operate on the complete mix. Production annotations are explicitly guidance, not assertions about its contents.
- All five original editorial script segments remain unchanged. `transcriptStatus: editorial-script-unverified-against-final-mix` and null cues disable highlights and line seeking. This is not yet an accessible verbatim transcript of the recording. Do not invent timestamps or host attribution. A reviewed verbatim transcript and verified cue sheet are required before switching status to `verified-timed`.
- Thirteen concept PNGs were visually reviewed. Only 02-podcast-studio and 11-audio-editing ship as WebP (13,468 and 9,824 bytes), at native dimensions with lazy loading, alt text, visible AI/provenance captions and missing-image fallback. The original typographic cover remains. Generated portraits, newspaper/legal documents and historical-looking imagery are withheld, as are the other unused concepts.
- The four music MP3s were extracted for inspection outside the repository. They are short independent cues, not aligned stems, and are not deployed or attached to the player. Original package remains in Downloads; extraction is in `/tmp/uh-media-review/` and is temporary.

The studio mounts/fetches only after Open ON AIR. No audio is created before launch and nothing autoplays. Missing media stops playback with an editorial-script fallback. Closing unmounts audio and returns focus; hidden documents pause.

Future replacement contract: update the manifest source, checksum, duration and approval provenance without replacing components. For genuine isolated controls, provide pre-aligned full-duration stems beginning at zero (with silence as needed), change playbackMode to `aligned-stems`, and set each optional lane source/gain. Narration remains the master. HTML media drift correction (>0.2 seconds) is not sample-accurate. Require byte-range hosting for reliable seek. Cue IDs match script IDs and require verified finite non-overlapping intervals. Approved artwork must be wired explicitly; cover.src remains null.

## Historical source register — accessed October 28, 2026

- NPS, The Montgomery Bus Boycott: https://www.nps.gov/articles/montgomery-bus-boycott.htm — Colvin's March 2, 1955 resistance and later boycott context.
- National Archives, 60th Anniversary of the Montgomery Bus Boycott: https://rediscovering-black-history.blogs.archives.gov/2015/12/01/60th-anniversary-of-the-montgomery-bus-boycott/ — age, arrest, plaintiffs and district-court outcome.
- Supreme Court Historical Society, Browder v. Gayle (1956): https://civics.supremecourthistory.org/article/browder-v-gayle/ — June 1956 district ruling and November 1956 affirmation.
- Smithsonian Institution, Explore America: Alabama: https://www.si.edu/spotlight/alabama?page=1 — contextual corroboration of Colvin/Parks challenging bus seating; search-index text was retrievable, direct fetch was intermittently unavailable. No dialogue or precise legal claim depends solely on this page.

Script narration is paraphrased. Its final reflective question is explicitly educational interpretation. Avoid unsupported superlatives such as first-ever resistance; do not imply the Supreme Court heard oral argument or issued a full written merits opinion. No historical photography, quotes or audio are reproduced.

## Validation and remaining approval gates

Run `node tests/unsung-heroes.test.cjs` after the normal build. Build dependencies are the existing Babel/React18 stack; none were added. Existing SSR useLayoutEffect warning remains.

Initial browser tests used the then-empty manifest; the October 29 integration uses the supplied final mix. Separate temporary, low-level QA tones and timed fixture manifests outside the repository verified actual playback, pause, seek, restart, cue highlighting, speed and lane mute. They are not historical media and are not committed or deployed. Final transcript alignment remains pending.

Keyboard radio selection/feedback, disclosure controls, launch/close focus, source links, filtering, edit/export/reset and chapter history are verified. Browser accessibility-tree inspection is not a full screen-reader certification; final VoiceOver/NVDA review and OS reduced-motion preference emulation remain manual gates. Page introduces no animations and includes reduced-motion overrides. No new dependencies; site bundle increases approximately 15.5 KB gzip, with no eager audio load.

Preview only. No merge, production promotion, production alias change or school endorsement is authorized by this task.

### Approved-media QA — October 29, 2026
Build, focused contract tests and diff checks pass. Original transcript data compared byte-for-byte (serialized records) with the prior commit and is unchanged. Browser loaded one real MP3 after launch, none before; duration ~119.776s in Chromium (MP3 decoder delay differs from afinfo container duration). Actual currentTime advances. Play/pause, keyboard seek, restart, speed 1.5 and volume input changes verified. Four disabled mute controls and five disabled timing buttons verified. Close unmounts audio and restores launch focus. Missing-source QA fixture disables play and retains five script sections. Chapter Back/Forward and eight existing-route/width smoke checks pass. Images remain within native width at 375/768/1440; no overflow. Normal-page console errors: none. Test fixture intentionally requests a missing asset. Full screen-reader review and a reviewed verbatim transcript remain outstanding; browser AX inspection is not certification. No historical claim review or loudness analysis was performed in this integration.
