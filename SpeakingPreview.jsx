/* Homepage Speaking preview mirrors the portrait-led subpage rather than a split promo. */
function SpeakingPreview() {
  const S = window.JIZ_SPEAKING;
  if (!S) return null;
  return <section className="sp-preview jiz-chapter sp-preview--immersive" data-surface="paper" data-accent="cyan" aria-labelledby="sp-preview-title">
    <div className="sp-preview-scene">
      <video className="sp-preview-backdrop-video" autoPlay muted loop playsInline preload="metadata" poster="/assets/imagery/portfolio-speaking-film-still.jpg" aria-hidden="true" tabIndex={-1} disablePictureInPicture>
        <source src="/assets/video/speaking/portfolio-speaking-editorial-720p.mp4" type="video/mp4" />
      </video>
      <div className="sp-preview-backdrop-shade" aria-hidden="true" />
      <div className="sp-preview-copy">
        <p className="sp-kicker">08 / SPEAKER · AUTHOR · DESIGNER</p>
        <h2 id="sp-preview-title">{S.headline}</h2>
        <p>{S.intro}</p>
        <div className="sp-preview-formats" aria-label="Speaking formats">{S.formats.map(f => <span key={f.name}>{f.name}</span>)}</div>
        <div className="sp-actions">
          <a className="sp-button" href="/speaking/">Explore speaking <span aria-hidden="true">→</span></a>
          <a className="sp-text-link" href="/?intent=speaking">Invite me to speak <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <p className="sp-preview-disclosure">Editorial portrait · Not an image of a live speaking event</p>
    </div>
    <details className="sp-preview-studio">
      <summary>TEACHING STUDIO / IN DEVELOPMENT <span aria-hidden="true">↗</span></summary>
      <p>Exploring project-based workshops on cinematic learning, leadership practice, and AI-enabled experience design. Course dates and enrollment are not yet announced.</p>
      <a href="/speaking/">Explore workshop topics <span aria-hidden="true">→</span></a>
    </details>
  </section>;
}
