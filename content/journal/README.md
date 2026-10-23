# Journal editions

One Markdown file per article: `content/journal/<slug>.md`, where `<slug>` matches the article's `slug` in `content/journal.js`.

Rules
- Paste the **verified, published text verbatim**. Do not paraphrase or reconstruct from summaries.
- Then set `onSite: true` (and the issue's own LinkedIn `url`) for that article in `content/journal.js` and run `node build.cjs`.
- Front matter (optional): `date: 2026-10-13` and `dateLabel: October 13, 2026`.

Supported formatting
- `## Heading`, `### Subheading`, paragraphs, `- lists`, `1. lists`, `> quotes`, code fences, `---`
- `**bold**`, `*italic*`, `` `code` ``, `[link text](https://…)`
- Evidence tags are styled automatically: `[Established]`, `[Emerging]`, `[Extrapolated]`, `[Hypothesis]`
- Boxes: a line `::: takeaway` (or `ledger`, `note`, `corrections`), the content, then a line `:::`
