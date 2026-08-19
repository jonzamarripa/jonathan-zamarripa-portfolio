# JIZ Portfolio — Archive Production Update

## Files to update in GitHub
1. `Homepage.html` — production entry page; includes the ArchiveBridge and loads `./_ds_bundle.js` before React.
2. `Homepage_COMPLETE.jsx` — matching React source with the same ArchiveBridge implementation.
3. `styles.css` — existing design system styles.

## Important
- Do **not** upload the previously shown merge-conflicted `Homepage.jsx`.
- Keep the existing `_ds_bundle.js` in the same GitHub path expected by `Homepage.html`. It is referenced as `./_ds_bundle.js` and was not fabricated in this package.
- This package does not contain a replacement `_ds_bundle.js` because no verified copy was supplied.

## ArchiveBridge verification built into this update
- `Archive_Film.mp4` is the background source.
- `autoplay`, `muted`, `loop`, `playsInline`, `preload="auto"` remain enabled.
- A React `play()` recovery runs on mount and `canplay` to improve autoplay reliability.
- The background is transparent enough for the moving footage to remain clearly visible.
- ArchiveBridge remains rendered between `CapabilityOS` and `Insights`.

## Vercel
I cannot push to GitHub or trigger Vercel from this environment. After replacing the three files in GitHub, commit/push them and wait for a **new Vercel deployment**. Test the newest deployment URL, not the older `p15eokp23` preview deployment.
