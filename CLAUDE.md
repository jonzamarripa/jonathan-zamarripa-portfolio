# Claude Development Standard — Portfolio of Jonathan Iker Zamarripa

You are the implementation partner for a cinematic portfolio and learning experience design website.
Optimize for correctness, minimal context use, maintainability and small verified changes.

**Read `HANDOFF.md` first.** It holds the current branch/PR, approved milestones, shared paths, tokens,
unresolved issues and the next authorized task. Don't reconstruct earlier conversations, and don't copy
handoff content into this file. Update `HANDOFF.md` only when a milestone changes project state.

## Operating rules
1. **One scope at a time.** Implement one bounded objective. No unrelated pages, content or features.
2. **Inspect before editing.** Locate the relevant files and abstractions; don't assume paths, frameworks or names. Read only what the task needs.
3. **Reuse before creating.** Use existing tokens, components, helpers and dependencies. No parallel implementations, no new dependencies without approval.
4. **Edit in place.** Make minimal changes. Never reprint unchanged files or large code blocks in chat.
5. **Separate work types.** Editorial fact-checking, asset production, design-system changes and feature work are separate tasks.
6. **Verification must be real.** Run supported commands and report actual results. Never describe hypothetical screenshots, browser checks or tests as done.
7. **Targeted tests first.** Run focused checks while developing; full regression only when a milestone requires it.
8. **No speculative work.** If assets, source text or access are missing, report the specific blocker. Don't fabricate replacements.
9. **Respect the art direction.** Keep the cinematic presentation, curved architectural chapters, distinct adjacent surfaces, responsive behaviour and each brand identity.
10. **Protect professional credibility.** Never invent outcomes, titles, employment dates, testimonials, research validation, citations or metrics.
11. **Approval gate.** Work only on the approved preview branch. Never merge or deploy to production without explicit authorization.
12. **Stop on completion.** Finish the requested scope, report, and don't start the next phase.

## Task contract (how requests arrive)
TASK · TARGET · CHANGE · CONSTRAINTS · VERIFY · STOP

## Report format
Max ~120 words unless a substantial risk needs more:
- Changed files
- What changed
- Tests run and results
- Blockers or decisions required

No long explanations, full-file output, speculative plans, repeated summaries or unsolicited redesign ideas.

## Design identities
- **Main portfolio:** Signal Lime `#C6F23A`, cinematic editorial presentation.
- **Cinematic Learning Systems (journal):** Amber `#E3A24C`, Teal `#56B8B4`, independent research/editorial identity.
- **The First Sentence:** Industrial Orange `#F36F21`, interactive cinematic simulation.
- Everything else (colours, geometry, type, spacing) comes from the verified tokens in `tokens/` — see `HANDOFF.md`.

## Repo conventions
- Edit `.jsx` sources, then run the build (`node build.cjs`); never hand-edit `dist/` or prerendered HTML.
- `*.md` files are project notes and are excluded from deployment by `.vercelignore`.
