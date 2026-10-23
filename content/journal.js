/* Cinematic Learning Systems — single source of truth for the homepage feature and /journal/.
   Rules (see the AI Context Pack, Oct 22 2026):
   - Only list an article as `published` once its publication is confirmed.
   - Set `onSite: true` only when a verified, verbatim edition exists in content/journal/<slug>.md.
   - `preview: true` builds the article page for review only: unlisted, marked noindex, with pending slots visible.
   - `dossier: true` links that page from the homepage and journal (artifacts on site; full text still on LinkedIn).
   - Proposals stay in `framework.proposed` until the release that adopts them has actually shipped. */
(function (root) {
  var NEWSLETTER = 'https://www.linkedin.com/newsletters/cinematic-learning-systems-7463584574371942400/';
  var data = {
    name: 'Cinematic Learning Systems',
    subtitle: 'An independent journal on the changing conditions of learning, expertise, and experience design.',
    author: 'Jonathan Iker Zamarripa',
    anchor: ['The production conditions of learning have changed.', 'The design epistemology hasn’t caught up yet.', 'That gap is the work.'],
    newsletter: NEWSLETTER,
    // Newest first. `url` = the issue's own LinkedIn URL when known; otherwise the newsletter page is used.
    articles: [
      { slug: 'designed-for-dana-wrong-for-marcus', issue: '07', type: 'Audit', title: 'Designed for Dana. Wrong for Marcus.', standfirst: 'An audit of last week’s worked example, the production artifacts behind the fix, and the pilot designed to test it.', note: 'Dana and Marcus are composite characters.', status: 'published', featured: 'lead', url: '', onSite: false, preview: true, dossier: true, image: 'dana-01-opening-state-1600.webp' },
      { slug: 'every-shot-you-choose', issue: '03', type: 'Framework', title: 'Every Shot You Choose Is a Learning Design Decision', standfirst: 'A close-up isn’t prettier. It’s attentional narrowing. We just never called it that in learning design.', status: 'published', featured: 'support', url: '', onSite: false }
    ],
    framework: {
      name: 'Cinematic Learning Production Framework (CLPF)',
      version: 'v1.0',
      released: 'Foundational Architecture Document, May 2026',
      scope: 'A practitioner-theorist framework. It is not empirically validated, does not claim that production quality causes learning, and was developed in enterprise contexts rather than claimed as universal.',
      systems: ['Strategic & Narrative', 'World & Production', 'Cognitive & Behavioral', 'Enterprise & Scaling'],
      // Status is the author's own assessment (October 2026), not independent review.
      axioms: [
        { n: '01', name: 'The Architecture Is the Intervention.', def: 'The experience design is the learning intervention, not a delivery vehicle.', status: 'Holds' },
        { n: '02', name: 'Transformation Precedes Transfer.', def: 'Narrative absorption → cognitive reorganization → emotional investment → intention → transfer.', status: 'Holds; enterprise transfer unproven' },
        { n: '03', name: 'Emotional Salience Is Structural.', status: 'Holds' },
        { n: '04', name: 'The Learner Is Always the Protagonist.', status: 'Holds' },
        { n: '05', name: 'The Transparency Paradox.', def: 'Craft should dissolve the boundary between learner and experience.', status: 'Under revision', flag: true },
        { n: '06', name: 'Production Conditions Shape Design Epistemology.', status: 'Strengthened (Issue 4)' },
        { n: '07', name: 'The System Must Outlast the Project.', status: 'Holds' },
        { n: '08', name: 'The New Professional Identity Is a Systems Architect.', status: 'Holds; needs competency evidence' }
      ],
      gaps: [
        { name: 'Equity and access', level: 'Critical' },
        { name: 'Measurement', level: 'High' },
        { name: 'Ethics of emotional design', level: 'High' }
      ],
      nextRelease: { version: 'v1.1', when: 'Scheduled for November 3, 2026', released: false },
      proposed: [
        'Axiom 05 revised: “Disclosed at the threshold, never distracting in the frame.” The original wording stays in version history.',
        'Axiom 09 · Germane Cinema',
        'Axiom 10 · Emotionally designed, never emotionally surveilled',
        'Axiom 11 · Minimum Viable Cinema',
        'A measurement layer: one practical measure per register of transformation',
        'Research agenda additions on AI role-play, disclosure, and runtime experiences'
      ],
      masterQuestion: 'Is this claim true because it’s grounded in something stable about human beings, or because of what current tools can do?'
    },
    method: {
      ladder: ['What', 'Why', 'For whom', 'Under what conditions', 'At what cost', 'What would prove me wrong?'],
      tags: [
        { tag: 'Established', def: 'Strong, replicated evidence.' },
        { tag: 'Emerging', def: 'Promising but limited evidence.' },
        { tag: 'Extrapolated', def: 'Sound research applied outside the setting it was tested in.' },
        { tag: 'Hypothesis', def: 'The author’s own untested proposal.' }
      ],
      spine: ['The Question', 'The Evidence and Its Limits', 'The Build', 'The Stress Test', 'The Next Question', 'Sources & Corrections']
    },
    studio: {
      title: 'Signal Through Static',
      about: 'A build-in-public series documenting a mock cinematic learning experience for frontline managers leading teams through organizational change, annotated against CLPF as it is built. An independent project, not client work. Its guide character is Signal.',
      published: [{ label: 'Post 03', title: 'Every Shot You Choose Is a Learning Design Decision', also: 'Published as Issue 03' }]
    },
    evidence: {
      fieldLogs: [
        { id: 'Field Log 001', status: 'Designed, not run', summary: 'A pilot comparing a generic-hostility counterpart with a cue-bearing counterpart whose hidden state varies, for newly promoted shift leads. No results exist yet; null results will be published. Seeking a frontline-supervisor pilot partner.' }
      ],
      versions: [
        { version: 'v1.0', status: 'Published', note: 'Foundational Architecture Document, May 2026' },
        { version: 'v1.1', status: 'Not released', note: 'Scheduled for November 3, 2026, with a public changelog' }
      ],
      corrections: [
        { issue: '06', correction: 'The 53-study productive-failure meta-analysis is Sinha & Kapur (2021), Review of Educational Research, not Kapur (2016).', where: 'Issue 07' },
        { issue: '06', correction: 'The gesture study is Cook, Yip & Goldin-Meadow (2010), not 2013. It concerns speaking and gesturing, so practice attempts must be spoken aloud, not typed.', where: 'Issue 07' },
        { issue: '06', correction: 'Zhang et al. (2017) was cited without a full reference and could not be confirmed. Withdrawn.', where: 'Issue 07' },
        { issue: '06', correction: 'Schroeder, Adesope & Gilbert (2013) and Mayer & DaPra (2012) were listed as sources but never cited in the body.', where: 'Issue 07' },
        { issue: '06 → 07', correction: 'Marcus’s circumstance revised from a father in chemotherapy to a father in hospice.', where: 'Issue 07' }
      ]
    },
    talk: {
      title: 'The Other Person in the Room',
      status: 'Available topic · in development',
      about: 'Grows from the question at the center of Issue 07: “Who is the other person in the scene, and why do our practice scenarios treat him as a prop?”',
      formats: 'Conferences, panels, podcasts, and guest lectures'
    },
    disclosures: [
      'Dana, Marcus, Sarah, and Benjamin are composite characters.',
      'Evidence tags are the author’s own assessment of evidence strength, not independent peer review.',
      'CLPF is a practitioner-theorist framework, not an empirically validated intervention.'
    ]
  };
  data.articles.forEach(function (a) { if (!a.url) a.url = NEWSLETTER; });
  root.JIZ_JOURNAL = data;
  if (typeof module !== 'undefined' && module.exports) module.exports = data;
})(typeof window !== 'undefined' ? window : globalThis);
