# Upload to GitHub — this session's changes

**Destination in your repo:** `ui_kits/portfolio-website/`
Replace the existing file of the same name. 6 files total.

| File | Why it changed |
|---|---|
| Homepage.jsx | Asset paths + ArchiveBridge fixes + Archive_Film video restored |
| CaseStudy-Legacy.jsx | Asset paths |
| CaseStudy-HotelKey.jsx | Asset paths |
| CaseStudy-GuestCRM.jsx | Asset paths |
| CaseStudy-Workday.jsx | Asset paths |
| _ds_bundle.js | Asset paths (carries the nav logo fix) |

---

## 1. Asset paths — all 6 files
Rewrote `../../assets/...` to `./assets/...`.
`../../` escapes the Vercel deploy root, so in production every case-study
image, background video, and the nav logo returned 404.

## 2. ArchiveBridge responsive + hover — Homepage.jsx
- Added `data-archive-grid` / `data-archive-cta` attributes: the media
  queries already existed but matched no elements, so the two-column grid
  never collapsed on mobile.
- Moved `grid-template-columns`, `gap`, and the CTA `transition` out of the
  inline style objects into the <style> block. Inline styles outrank
  attribute-selector rules, so the @media and prefers-reduced-motion rules
  were being overridden even once they matched.
- Hover handlers now use `e.currentTarget` not `e.target` — hovering the
  arrow glyph was styling the <span> instead of the <a>.
- Added `aria-label` to the archive CTA noting it opens a new tab.

## 3. Archive_Film background video restored — Homepage.jsx
The video ArchiveBridge only existed in the root duplicate files that were
deleted during dedupe. Rebuilt it in the live component:
- `<video>` at z-index 0, `position:absolute; inset:0; object-fit:cover`,
  `autoPlay muted loop playsInline preload="auto"`, src = S3 Archive_Film.mp4
- Dark gradient overlay at z-index 1; content lifted to z-index 2
- Section is now `position:relative; overflow:hidden; background:#0B0D10`
  (was `transparent`)
- `play()` on mount with a retry on `loadeddata` for Safari; promise
  rejection swallowed; video paused when prefers-reduced-motion is set
- `aria-hidden` + `tabIndex="-1"` so it stays out of the a11y tree

Verified live: paused=false, readyState=4, currentTime advanced 7.91 -> 10.89.

---

## Also delete these from the repo (duplicates removed this session)
```
ui_kits/portfolio-website/archive/                 (folder)
ui_kits/portfolio-website/behind-the-build-test.html
```
Repo root — not deployed, but remove to stop the duplication:
```
Homepage_COMPLETE.jsx
Homepage_UPDATED.jsx
Homepage.jsx.txt
Homepage.html
archive-bridge-patch/                              (folder)
archive/root-cleanup/About_v2_code.jsx
archive/root-cleanup/About_v2_DIRECTOR_CUT_STORY1.jsx
archive/root-cleanup/About_v2_V3.0_FINAL.jsx
archive/root-cleanup/Homepage_POST_P0.jsx
```

## Do NOT re-upload (unchanged)
index.html, About_v2.jsx, CaseStudyShell.jsx,
CaseStudy-BehindTheBuild.jsx, styles.css, assets/
