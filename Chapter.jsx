// Chapter — the shared architectural section: an inset, rounded panel on the Carbon gutter.
// Geometry and colours come only from tokens (tokens/spacing.css, tokens/colors.css); styles live in
// styles.css (.jiz-chapter), so static pages such as the journal can use the same classes without React.
//
// <Chapter surface="obsidian" accent="first-sentence" width="default" labelledBy="h-id">…</Chapter>
//   surface: obsidian | carbon | slate | navy | mist | paper      (default obsidian)
//   accent:  portfolio | journal-amber | journal-teal | first-sentence, or any CSS colour (default portfolio)
//   width:   default (--chapter-max) | wide (--chapter-max-wide) | full (no inner width limit)
//   as:      element to render (default 'section'); id, className, labelledBy, label pass through.
// Inside, use var(--chapter-accent) for fills and var(--chapter-accent-ink) for accent text, var(--chapter-ink), var(--chapter-ink-soft), var(--chapter-ink-mute), var(--chapter-line).
const CHAPTER_SURFACES = ['obsidian', 'carbon', 'slate', 'navy', 'mist', 'paper'];
const CHAPTER_ACCENTS = ['portfolio', 'journal-amber', 'journal-teal', 'first-sentence'];

function Chapter({ as = 'section', surface = 'obsidian', accent = 'portfolio', width = 'default', id, className, labelledBy, label, children }) {
  const Tag = as;
  const named = CHAPTER_ACCENTS.indexOf(accent) !== -1;
  const style = named ? undefined : { '--chapter-accent': accent };
  return (
    <Tag
      id={id}
      className={'jiz-chapter' + (className ? ' ' + className : '')}
      data-surface={CHAPTER_SURFACES.indexOf(surface) !== -1 ? surface : 'obsidian'}
      data-accent={named ? accent : 'custom'}
      data-width={width}
      aria-labelledby={labelledBy}
      aria-label={labelledBy ? undefined : label}
      style={style}
    >
      <div className="jiz-chapter__inner">{children}</div>
    </Tag>
  );
}

// Optional page container: paints the Carbon gutter and opens the first gap.
function ChapterStack({ as = 'div', className, children }) {
  const Tag = as;
  return <Tag className={'jiz-chapter-stack' + (className ? ' ' + className : '')}>{children}</Tag>;
}

window.JIZChapter = { Chapter, ChapterStack, CHAPTER_SURFACES, CHAPTER_ACCENTS };
