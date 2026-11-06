// Chapter — the shared architectural section: an inset, rounded panel on the Carbon gutter.
// Geometry and colours come only from tokens (tokens/spacing.css, tokens/colors.css); styles live in
// styles.css (.jiz-chapter), so static pages such as the journal can use the same classes without React.
//
// <Chapter surface="obsidian" accent="first-sentence" width="default" labelledBy="h-id">…</Chapter>
//   surface: obsidian | carbon | slate | mist | paper      (default obsidian)
//   accent:  portfolio | journal-amber | journal-teal | first-sentence, or any CSS colour (default portfolio)
//   width:   default (--chapter-max) | wide (--chapter-max-wide) | full (no inner width limit)
//   as:      element to render (default 'section'); id, className, labelledBy, label pass through.
// Inside, use var(--chapter-accent) for fills and var(--chapter-accent-ink) for accent text, var(--chapter-ink), var(--chapter-ink-soft), var(--chapter-ink-mute), var(--chapter-line).
const CHAPTER_SURFACES = ['obsidian', 'carbon', 'slate', 'mist', 'paper'];
const CHAPTER_ACCENTS = ['portfolio', 'journal-amber', 'journal-teal', 'first-sentence'];

function ChapterSymbol({labelledBy='',id='',label=''}) {
  const key=(labelledBy+' '+id+' '+label).toLowerCase();
  const kind=/research|evidence|measure|impact|outcome|result|assessment|eval/.test(key)?'evidence'
    :/experience|play|prototype|scenario|simulation|demo|practice/.test(key)?'experience'
    :/role|team|people|stakeholder|collab/.test(key)?'people'
    :/design|process|build|method|strategy|approach/.test(key)?'process':'overview';
  const designs={
    evidence:<><path d="M4 20V4m0 16h16M8 16v-5m4 5V7m4 9V9m4 7V5"/></>,
    experience:<><rect x="3" y="4" width="18" height="16" rx="3"/><path d="m10 8 6 4-6 4V8z"/></>,
    people:<><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0m2-13a3 3 0 0 1 0 6m1 3c2 1 3 2 3 4"/></>,
    process:<><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><path d="M10 7h7v7m-3-3 3 3"/></>,
    overview:<><circle cx="12" cy="12" r="9"/><path d="M7 12h10M12 7v10"/></>,
  };
  return <span className="jiz-chapter__glyph" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" focusable="false">{designs[kind]}</svg></span>;
}

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
      <div className="jiz-chapter__inner"><ChapterSymbol labelledBy={labelledBy} id={id} label={label}/>{children}</div>
    </Tag>
  );
}

// Optional page container: paints the Carbon gutter and opens the first gap.
function ChapterStack({ as = 'div', className, children }) {
  const Tag = as;
  return <Tag className={'jiz-chapter-stack' + (className ? ' ' + className : '')}>{children}</Tag>;
}

window.JIZChapter = { Chapter, ChapterStack, CHAPTER_SURFACES, CHAPTER_ACCENTS };
