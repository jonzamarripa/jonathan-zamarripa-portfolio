# Hero + editorial tile asset integration (preview branch)

This branch implements the supplied authentic hero film and the four Thinking / Speaker / Author / Designer tile sources in the React homepage component.

## Media required before deploying

The following **binary files are not yet in the repository**. They are packaged in the user-facing `Portfolio_Hero_And_Tiles_Integration.zip`. Upload them at exactly these paths:

- `assets/video/hero-portrait-2026.mp4`
- `assets/imagery/hero-portrait-poster.webp`
- `assets/imagery/tile-thinking.webp`
- `assets/imagery/tile-speaker.webp`
- `assets/imagery/tile-author.webp`
- `assets/imagery/tile-designer.webp`

Do **not** promote this branch until these all return HTTP 200. The GitHub editing connector accepts UTF-8 source but not the uploaded raw binary attachments, so binaries were deliberately excluded from the Git commits rather than substituting incorrect content.

## What this branch changes

- The hero uses the exact user-supplied 9.96-second Omni film, with a derived first-frame poster for reduced-motion and low-bandwidth environments.
- Cinematic Learning Systems' four editorial navigation tiles map to Thinking, Speaker, Author, and Designer with unique photographic images from the supplied files.
- Preserves the full-bleed movie layer and rounded card treatment.
- Restores the existing `/assets/imagery/portfolio-principles-glass.jpg` as the Principles backdrop with a high-contrast overlay.
- Preserves the existing footer and does not merge the rejected remediation preview.

## Release gates

Validate 1440 / 1024 / 768 / 390px widths, real muted autoplay, media fallback and reduced motion, image loading, hover/focus states, functioning links and no console errors. Preview on Vercel before any production update.
