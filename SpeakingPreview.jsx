function SpeakingPreview() {
  const S = window.JIZ_SPEAKING;
  if (!S) return null;
  return <section className="sp-preview jiz-chapter" data-surface="paper" data-accent="journal-amber" aria-labelledby="sp-preview-title">
    <div className="sp-wrap sp-preview-grid">
      <div className="sp-preview-copy"><p className="sp-kicker">Speaking · Keynotes, workshops &amp; guest lectures</p><h2 id="sp-preview-title">{S.headline}</h2><p>{S.intro}</p><div className="sp-preview-formats">{S.formats.map(f => <span key={f.name}>{f.name}</span>)}</div><div className="sp-actions"><a className="sp-button" href="/speaking/">Explore speaking <span aria-hidden="true">→</span></a><a className="sp-text-link" href="/?intent=speaking">Invite me to speak <span aria-hidden="true">→</span></a></div>
        <div className="sp-course-note" aria-label="Course development">
          <span className="sp-course-note__label">TEACHING STUDIO / IN DEVELOPMENT</span>
          <p>Exploring project-based workshops on cinematic learning, leadership practice, and AI-enabled experience design. Course dates and enrollment are not yet announced.</p>
          <a href="/speaking/">Explore workshop topics <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <figure className="sp-preview-media"><a href="/speaking/" aria-label="Explore Jonathan’s speaking topics and silent promo"><img src={S.video.poster} width="1600" height="900" loading="lazy" decoding="async" alt="AI-generated speaker promo of Jonathan on a fictional presentation stage" /></a><figcaption className="sp-caption">{S.video.caption}</figcaption></figure>
    </div>
  </section>;
}
