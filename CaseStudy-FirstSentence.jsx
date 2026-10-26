// The First Sentence — standalone flagship case study (/work/the-first-sentence/).
// Every quoted line, label and design note comes from the live prototype itself
// (https://drums-plant-63973620.figma.site/, captured Oct 26 2026) or from facts Jonathan supplied.
// Interface images are screenshots of that live prototype. Nothing here is a claim of measured effectiveness.

const TFS_URL = 'https://drums-plant-63973620.figma.site/';
const TFS_HOST = 'drums-plant-63973620.figma.site';
const TFS_IMG = '/assets/imagery/the-first-sentence/';

const TFS_META = {
  slug: 'the-first-sentence',
  projectName: 'The First Sentence',
  statement: 'An independent cinematic branching simulation for newly promoted frontline supervisors: open a hard conversation with a former teammate using Behavior → Impact → Ask.',
  ogAlt: 'The First Sentence — Dana and Marcus on the warehouse floor',
  organization: null
};

const TFS_APPROACHES = [
  { key: 'soften', title: 'Soften', direction: 'Nervous half-smile · softened posture',
    line: 'No, no. You’re fine Marcus. You’ve been here forever. Just try to speed it up if you can, okay?',
    reply: 'Yeah, of course. We’re good.',
    consequence: 'Marcus gives you a familiar smile. The conversation feels easy. But the next shift, the scans are late again.',
    tradeoff: 'You protected the friendship. But “if you can” made the expectation optional. Marcus heard reassurance, not a request for change.',
    coach: 'You were trying to protect the relationship. Marcus needed to hear that the relationship could hold a clear expectation.' },
  { key: 'authority', title: 'Authority', direction: 'Rigid posture · firm expression',
    line: 'Marcus, your numbers are down 30%. I’m your supervisor now. If this doesn’t change by Friday, I’ll have to write you up.',
    reply: 'Right. So that’s how it is now?',
    consequence: 'Marcus folds his arms. He completes the scans, but stops sharing the problems he sees on the floor.',
    tradeoff: 'You made your role clear, but not the behavior. Leading with your title turned a performance conversation into a power struggle.',
    coach: 'Your authority was already present. Leading with the title made Marcus defend his standing instead of discussing the work.' },
  { key: 'redirect', title: 'Structured Redirect', direction: 'Calm · direct · conversational',
    line: 'Marcus, your pick rate has been down about 30% over the last three weeks. We’re missing trailer targets, and people are staying late. I want to understand what’s getting in the way.',
    reply: 'It’s my mom. She’s in hospice. I’ve been waiting for the call, and I’m trying to keep it together here.',
    consequence: 'Marcus hears the expectation and the impact without being reduced to the mistake. Your question creates room for the real issue to surface.',
    tradeoff: 'You named the behavior, connected it to the work, and invited context. Clarity and curiosity worked together.',
    coach: 'You made the expectation clear without closing the conversation. That gave Marcus room to tell you what was really happening.' }
];

const TFS_ELEMENTS = [
  { id: 'confidence', label: 'Confidence check', img: '02-confidence-check', alt: 'Confidence check screen asking how ready the learner feels to start a tough conversation with a teammate, rated 1 to 5',
    title: 'A self-rating before and after',
    body: ['Before the scene, learners rate how ready they feel to start a tough conversation with a teammate (1 = Not ready, 5 = Very ready). The same question returns at the end, so the experience can record a before-and-after self-report.', 'It can be skipped. It is a self-rating, not a measure of skill.'] },
  { id: 'dossier', label: 'Context dossier', img: '03-the-moment-dossier', alt: 'The Moment screen: the opening warehouse video beside a live "Aisle 04 Stoppage" panel of timed context cards',
    title: 'The facts on cards, the emotion on screen',
    body: ['The opening scene plays beside a live “What’s happening” panel. Its cards are timed to the video and highlight as each beat plays: 01 The Metric Gap, 02 The Peer-to-Lead Line, 03 The Preemptive Deflection.', 'The designer’s note for this screen: “Context cards carry the facts so the video can carry the emotion.”'],
    cues: [
      ['00:00.0–00:07.3', '01. The Metric Gap', 'Dana verifies the diagnostic log on her tablet: Pick rate is down 30% across the last 3 weeks. Two trailers are stalled at the loading dock.'],
      ['00:07.3–00:14.6', '02. The Peer-to-Lead Line', 'Marcus trained Dana when she started. Yesterday they were teammates on the floor; today she wears the radio. She has to initiate accountability without alienating a veteran.'],
      ['03', '03. The Preemptive Deflection', 'Marcus sees her approaching with the tablet. Exhausted and anticipating a reprimand, he cuts off her opening line before she speaks: “I don’t need a speech.”']
    ] },
  { id: 'approaches', label: 'Three openings', img: '04-three-approaches', alt: 'How do you break the silence? Three approach cards, each with a video preview of Dana delivering a different opening line',
    title: 'Audition the move before committing',
    body: ['“How do you break the silence?” Each of three opening lines comes with a short video of Dana delivering it. Learners can preview every delivery before committing, so they judge tone, posture and delivery, not just words.', 'Approach labels stay hidden and the order is shuffled, so the right answer isn’t telegraphed. Previewing does not lock a choice.'] },
  { id: 'consequence', label: 'Consequences', img: '06-outcome-authority', alt: 'Outcome screen for the Authority approach: Marcus replies “Right. So that’s how it is now?” beside a trade-off card and coaching action',
    title: 'Every choice plays out in full',
    body: ['After committing, the chosen opening plays as a full sequence, then an outcome screen shows Marcus’s reply, what happens on the floor next, the trade-off, and a coaching action.', 'Wrong choices aren’t cut short; each path reaches coaching. There are no dead ends.'] },
  { id: 'debrief', label: 'Peer debrief', img: '10-benjamin-peer-note', alt: 'A note from Benjamin, a fellow supervisor, beside the three anchors Behavior, Impact and Ask',
    title: 'Coaching from a peer, not an authority',
    body: ['Benjamin, a peer coach at Northstar, frames the lesson as one supervisor to another: “I thought being the boss meant having all the answers.” — “It doesn’t. It means being willing to name what’s happening, explain why it matters, and listen to what comes back.”', 'The structure follows: Behavior (name what you noticed), Impact (explain why it matters), Ask (invite the next step). “Not a script to memorize. A structure to make your own.”'] },
  { id: 'transfer', label: 'Transfer & reflection', img: '13-transfer-practice', alt: 'Receiving Dock 02 practice scenario: a radio call about missing pallet counts and a field to speak or type an opening sentence to Alex',
    title: 'A second scenario, in the learner’s own words',
    body: ['The transfer moves to a new situation: a radio call from Receiving Dock 02 about missing pallet counts, and a conversation with Alex, a lead receiver. Learners speak or type their own opening sentence.', 'Feedback checks for the three anchors with simple word cues and says so on screen: “This is a practice guide, not a judgment. Feedback uses simple word cues, not AI assessment.” Practice is session-local; no recording is stored.', 'The experience closes on identity — “Who are you becoming as a leader?” — and a conversation toolkit to keep.'] }
];

function useTfsNarrow() {
  const q = '(max-width: 760px)';
  const [narrow, setNarrow] = React.useState(false);
  React.useEffect(() => {
    if (!window.matchMedia) return undefined;
    const m = window.matchMedia(q);
    const on = () => setNarrow(m.matches);
    on();
    m.addEventListener ? m.addEventListener('change', on) : m.addListener(on);
    return () => { m.removeEventListener ? m.removeEventListener('change', on) : m.removeListener(on); };
  }, []);
  return narrow;
}

// Chapter 02: nothing loads from figma.site until the visitor chooses to begin.
function TfsLauncher() {
  const narrow = useTfsNarrow();
  const [state, setState] = React.useState('idle'); // idle | loading | ready
  const [slow, setSlow] = React.useState(false);
  const frameRef = React.useRef(null);
  const stageRef = React.useRef(null);
  const beginRef = React.useRef(null);
  const exitRef = React.useRef(null);

  React.useEffect(() => {
    if (state !== 'loading') return undefined;
    setSlow(false);
    const t = window.setTimeout(() => setSlow(true), 12000);
    return () => window.clearTimeout(t);
  }, [state]);

  const begin = () => { setState('loading'); window.setTimeout(() => exitRef.current && exitRef.current.focus(), 0); };
  const exit = () => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    setState('idle');
    window.setTimeout(() => beginRef.current && beginRef.current.focus(), 0);
  };
  const loaded = () => { setState('ready'); };
  const fullscreen = () => { const el = stageRef.current; if (el && el.requestFullscreen) el.requestFullscreen().catch(() => {}); };
  const canFullscreen = typeof document !== 'undefined' && document.fullscreenEnabled;

  if (state === 'idle') {
    return (
      <div className="tfs-launch">
        <img className="tfs-launch-img" src={TFS_IMG + 'screens/01-threshold.webp'} alt="" width="800" height="500" loading="lazy" decoding="async" />
        <div className="tfs-launch-copy">
          <p className="tfs-kicker">Live prototype · About 7 min · Branching paths · Speak or type</p>
          <h3 className="tfs-launch-title">Step into Dana’s first difficult conversation.</h3>
          <div className="tfs-launch-actions">
            {narrow
              ? <>
                  <a className="tfs-btn" href={TFS_URL} target="_blank" rel="noopener" ref={beginRef}>Open full experience<span aria-hidden="true"> ↗</span><span className="tfs-vh"> (opens {TFS_HOST} in a new tab)</span></a>
                  <button type="button" className="tfs-btn tfs-btn--ghost" onClick={begin}>Play on this page</button>
                </>
              : <>
                  <button type="button" className="tfs-btn" onClick={begin} ref={beginRef}>Begin experience<span aria-hidden="true"> →</span></button>
                  <a className="tfs-btn tfs-btn--ghost" href={TFS_URL} target="_blank" rel="noopener">Open full experience<span aria-hidden="true"> ↗</span><span className="tfs-vh"> (opens {TFS_HOST} in a new tab)</span></a>
                </>}
          </div>
          <p className="tfs-launch-note">The experience runs on Figma Sites at <span className="tfs-mono">{TFS_HOST}</span>. Nothing from that site loads until you begin, and sound plays only when you start a scene. Heads-up: the scenario includes a coworker sharing news about a seriously ill family member.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="tfs-stage" ref={stageRef}>
      <div className="tfs-stage-bar">
        <button type="button" className="tfs-bar-btn" onClick={exit} ref={exitRef}><span aria-hidden="true">← </span>Back to the case study</button>
        <span className="tfs-stage-host">External site · <span className="tfs-mono">{TFS_HOST}</span></span>
        <span className="tfs-stage-tools">
          {canFullscreen ? <button type="button" className="tfs-bar-btn" onClick={fullscreen}>Fullscreen</button> : null}
          <a className="tfs-bar-btn" href={TFS_URL} target="_blank" rel="noopener">Open full experience<span aria-hidden="true"> ↗</span><span className="tfs-vh"> (new tab)</span></a>
        </span>
      </div>
      <div className="tfs-frame">
        {state === 'loading' && (
          <div className="tfs-frame-loading" role="status" aria-live="polite">
            <p>Loading the simulation from Figma…</p>
            {slow ? <p className="tfs-frame-slow">Taking longer than usual. You can <a href={TFS_URL} target="_blank" rel="noopener">open the full experience in a new tab</a> instead.</p> : null}
          </div>
        )}
        <iframe
          ref={frameRef}
          src={TFS_URL}
          title="The First Sentence — interactive simulation (external site, opens inside this page)"
          onLoad={loaded}
          allow="fullscreen; autoplay; microphone"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          style={{ opacity: state === 'ready' ? 1 : 0 }}
        />
      </div>
      <p className="tfs-stage-note">Keyboard: Tab moves into the simulation; Shift+Tab from its first control returns to “Back to the case study”. Use the microphone or type at any decision point.</p>
    </div>
  );
}

function TfsExplorer() {
  const [active, setActive] = React.useState(0);
  const tabs = React.useRef([]);
  const onKey = (e, i) => {
    let n = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = (i + 1) % TFS_ELEMENTS.length;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = (i - 1 + TFS_ELEMENTS.length) % TFS_ELEMENTS.length;
    if (e.key === 'Home') n = 0;
    if (e.key === 'End') n = TFS_ELEMENTS.length - 1;
    if (n === null) return;
    e.preventDefault(); setActive(n); tabs.current[n] && tabs.current[n].focus();
  };
  return (
    <div className="tfs-explorer">
      <div className="tfs-tabs" role="tablist" aria-label="Elements of the decision">
        {TFS_ELEMENTS.map((el, i) => (
          <button key={el.id} type="button" role="tab" id={'tfs-tab-' + el.id} aria-controls={'tfs-panel-' + el.id} aria-selected={i === active} tabIndex={i === active ? 0 : -1}
            ref={(r) => { tabs.current[i] = r; }} onClick={() => setActive(i)} onKeyDown={(e) => onKey(e, i)} className="tfs-tab">
            <span className="tfs-tab-n">{String(i + 1).padStart(2, '0')}</span>{el.label}
          </button>
        ))}
      </div>
      {TFS_ELEMENTS.map((el, i) => (
        <div key={el.id} role="tabpanel" id={'tfs-panel-' + el.id} aria-labelledby={'tfs-tab-' + el.id} hidden={i !== active} className="tfs-panel" tabIndex={0}>
          <figure className="tfs-shot">
            <img src={TFS_IMG + 'screens/' + el.img + '.webp'} alt={el.alt} width="800" height="500" loading="lazy" decoding="async" />
            <figcaption>Screenshot of the live prototype.</figcaption>
          </figure>
          <div className="tfs-panel-copy">
            <h3>{el.title}</h3>
            {el.body.map((p, j) => <p key={j}>{p}</p>)}
            {el.cues ? (
              <ol className="tfs-cues" aria-label="Timed context cards">
                {el.cues.map((c) => <li key={c[1]}><span className="tfs-mono">{c[1]}</span><span>{c[2]}</span></li>)}
              </ol>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

function CaseStudyFirstSentence({ standalone }) {
  const SITE = window.JIZ_SITE;
  const pathFor = (name) => { const t = SITE && SITE.resolve(name); const r = t && SITE.route(t.view); return (r && r.path) || '/'; };
  return (
    <article className="tfs" data-case-study="the-first-sentence">
      <style>{TFS_CSS}</style>
      <div className="tfs-top">
        <nav className="tfs-crumb" aria-label="Breadcrumb">
          <a href="/">Jonathan Zamarripa</a> <span aria-hidden="true">/</span> <a href="/#work">Work</a> <span aria-hidden="true">/</span> <span aria-current="page">The First Sentence</span>
        </nav>
        <a className="tfs-pill" href="/#work">← All work</a>
      </div>

      {/* Chapter 01 — The Premise */}
      <section className="tfs-ch tfs-ch--obsidian" aria-labelledby="tfs-h1">
        <div className="tfs-in">
          <p className="tfs-chn">Chapter 01 · The premise</p>
          <p className="tfs-eyebrow">Independent project · Cinematic branching learning simulation</p>
          <h1 id="tfs-h1" className="tfs-title">The First Sentence</h1>
          <p className="tfs-tension">“Yesterday, you were a teammate. Today, you’re their supervisor.”</p>
          <figure className="tfs-hero">
            <img src={TFS_IMG + 'first-sentence-hero.webp'} alt="Dana, a newly promoted shift lead in a high-visibility vest, faces Marcus, a veteran picker, between warehouse racks" width="1600" height="893" fetchpriority="high" decoding="async" />
            <figcaption>Opening key art from the prototype. AI-generated imagery · Fictional company · Composite characters.</figcaption>
          </figure>
          <div className="tfs-premise">
            <div className="tfs-premise-copy">
              <p>Shift 01, 06:42 AM, Aisle 04 at Northstar Distribution. Dana R. is on her first day as shift lead. Pick rate in her aisle is down 30% over three weeks, two trailers are waiting at the dock, and the night cutoff was missed by 15 minutes.</p>
              <p>The associate behind the numbers is Marcus T., a picker with nine years on the floor. He trained her on her first day. The learner plays Dana, and has to open the conversation.</p>
              <p className="tfs-disclose">Northstar Distribution is a fictional company and Dana and Marcus are fictional characters. This is an independent prototype, not client work.</p>
            </div>
            <dl className="tfs-facts">
              <div><dt>Designed, written and produced by</dt><dd>Jonathan Iker Zamarripa</dd></div>
              <div><dt>Audience</dt><dd>Newly promoted frontline supervisors in distribution centers</dd></div>
              <div><dt>Objective</dt><dd>Open an accountability conversation using Behavior → Impact → Ask</dd></div>
              <div><dt>Format</dt><dd>Interactive branching simulation, about 7 minutes, English and Spanish</dd></div>
              <div><dt>Built with</dt><dd>Figma Make, with AI-assisted video and voice production</dd></div>
            </dl>
          </div>
        </div>
      </section>

      {/* Chapter 02 — Experience the scenario */}
      <section className="tfs-ch tfs-ch--slate" aria-labelledby="tfs-h-exp" id="experience">
        <div className="tfs-in">
          <p className="tfs-chn">Chapter 02 · Experience the scenario</p>
          <h2 id="tfs-h-exp" className="tfs-h2">Play it before you read about it.</h2>
          <p className="tfs-lede">The live prototype runs below. Choose an opening line, watch what it sets in motion, and see the coaching that follows.</p>
          <TfsLauncher />
        </div>
      </section>

      {/* Chapter 03 — Inside the decision */}
      <section className="tfs-ch tfs-ch--obsidian" aria-labelledby="tfs-h-dec">
        <div className="tfs-in">
          <p className="tfs-chn">Chapter 03 · Inside the decision</p>
          <h2 id="tfs-h-dec" className="tfs-h2">Six moments that make the decision.</h2>
          <p className="tfs-lede">Explore each part of the experience without playing it through.</p>
          <TfsExplorer />

          <h3 className="tfs-h3">Three openings, three outcomes</h3>
          <p className="tfs-sub">The same moment, delivered three ways. Lines, replies and coaching are quoted from the prototype.</p>
          <div className="tfs-approaches">
            {TFS_APPROACHES.map((a) => (
              <div className={'tfs-approach tfs-approach--' + a.key} key={a.key}>
                <p className="tfs-approach-k">{a.title}</p>
                <p className="tfs-approach-dir">{a.direction}</p>
                <blockquote className="tfs-approach-line">“{a.line}”</blockquote>
                <dl className="tfs-approach-dl">
                  <div><dt>Marcus</dt><dd>“{a.reply}”</dd></div>
                  <div><dt>What happens next</dt><dd>{a.consequence}</dd></div>
                  <div><dt>The trade-off</dt><dd>{a.tradeoff}</dd></div>
                  <div><dt>Benjamin</dt><dd>{a.coach}</dd></div>
                </dl>
              </div>
            ))}
          </div>
          <div className="tfs-pair">
            <figure className="tfs-shot">
              <img src={TFS_IMG + 'screens/09-outcome-structured-redirect.webp'} alt="Outcome screen for the Structured Redirect: Marcus discloses that his mother is in hospice" width="800" height="500" loading="lazy" decoding="async" />
              <figcaption>Structured Redirect outcome. Screenshot of the live prototype.</figcaption>
            </figure>
            <figure className="tfs-shot">
              <img src={TFS_IMG + 'screens/12-model-line.webp'} alt="Here's the line that opens the door: the learner's line compared with the model line, broken into Behavior, Impact and Ask" width="800" height="500" loading="lazy" decoding="async" />
              <figcaption>After a missed line: “Here’s the line that opens the door,” taken apart anchor by anchor.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Chapter 04 — Creative production */}
      <section className="tfs-ch tfs-ch--paper" aria-labelledby="tfs-h-prod">
        <div className="tfs-in">
          <p className="tfs-chn">Chapter 04 · Creative production</p>
          <h2 id="tfs-h-prod" className="tfs-h2">One person, one pipeline: design, film and build.</h2>
          <p className="tfs-lede">Instructional design, cinematic production and AI-native development were handled in one pipeline by one designer, then implemented in Figma Make.</p>
          <div className="tfs-prod">
            <div className="tfs-prod-item"><h3>Visual direction</h3><p>The interface is a Northstar “DC-04 floor console”: a tablet console, matching what a shift lead actually uses on the floor. Metrics, cutoffs and the associate’s record sit beside the scene, as they would on shift.</p></div>
            <div className="tfs-prod-item"><h3>Performance direction</h3><p>Each opening is the same line of thought performed three ways, and each delivery has its own direction: “Nervous half-smile · softened posture”, “Rigid posture · firm expression”, “Calm · direct · conversational”.</p></div>
            <div className="tfs-prod-item"><h3>AI-generated video and voice</h3><p>Scene video and character voice were produced with AI tools as part of the design pipeline, and the prototype says so on every screen. Northstar is fictional, and the characters are composites.</p></div>
            <div className="tfs-prod-item"><h3>Interaction and state</h3><p>Three stages unlock in order — The moment, Your call, The transfer — with a visible plan, a way back to the previous moment, and a resume point. Approach labels are hidden and shuffled; every path reaches coaching.</p></div>
            <div className="tfs-prod-item"><h3>Accessibility</h3><p>Closed captions with speaker labels, a text mode, voice or keyboard input at any decision point, adjustable floor audio, English and Spanish, a content heads-up before the scene, and an Employee Assistance Program note for anyone the story touches.</p></div>
            <div className="tfs-prod-item"><h3>Designer’s notes</h3><p>A notes panel on every screen explains why it works, and an L&amp;D view shows the session’s events as they happen — the experience documents its own reasoning.</p></div>
          </div>
          <div className="tfs-gallery">
            <figure className="tfs-photo tfs-photo--wide">
              <img src={TFS_IMG + '01_dana_marcus_aisle04_wide-1024.webp'} alt="Dana and Marcus face each other in Aisle 04" width="1024" height="572" loading="lazy" decoding="async" />
              <figcaption>Dana and Marcus, Aisle 04. AI-generated editorial image · Composite characters.</figcaption>
            </figure>
            <figure className="tfs-photo">
              <img src={TFS_IMG + 'screens/08-response-structured-redirect.webp'} alt="Dana in close-up during the Structured Redirect response sequence" width="800" height="500" loading="lazy" decoding="async" />
              <figcaption>The Response, Structured Redirect. Screenshot of the live prototype.</figcaption>
            </figure>
            <figure className="tfs-photo">
              <img src={TFS_IMG + '04_benjamin_breakroom-1024.webp'} alt="Benjamin, a fellow supervisor, in the breakroom" width="1024" height="572" loading="lazy" decoding="async" />
              <figcaption>Benjamin, peer coach. AI-generated editorial image · Composite character.</figcaption>
            </figure>
            <figure className="tfs-photo">
              <img src={TFS_IMG + 'screens/16-how-it-works-accessibility.webp'} alt="How this experience works panel: the three-step interaction flow, closed captions, floor audio and voice or keyboard input" width="800" height="500" loading="lazy" decoding="async" />
              <figcaption>“How this experience works”: flow, captions, audio and input settings.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Chapter 05 — What the project demonstrates */}
      <section className="tfs-ch tfs-ch--slate" aria-labelledby="tfs-h-dem">
        <div className="tfs-in">
          <p className="tfs-chn">Chapter 05 · What the project demonstrates</p>
          <h2 id="tfs-h-dem" className="tfs-h2">Design hypotheses, not proven results.</h2>
          <p className="tfs-lede">No learner outcome data is reported for this prototype. These are the bets it makes, the research each bet leans on, and what is still open.</p>
          <div className="tfs-hyp">
            <div><h3>Enter the moment first</h3><p>The learner is inside the scene before any instruction. The prototype cites narrative transportation (Green &amp; Brock, 2000).</p></div>
            <div><h3>Let wrong choices play out</h3><p>Missteps run to their consequence, then get a specific debrief. The prototype cites productive failure (Kapur, 2016).</p></div>
            <div><h3>Model from a peer</h3><p>Benjamin coaches as a fellow supervisor, not an authority figure.</p></div>
            <div><h3>One structure, not a script</h3><p>Behavior → Impact → Ask is reusable in the next conversation; the transfer scenario tests exactly that.</p></div>
            <div><h3>Close on identity</h3><p>“Who are you becoming as a leader?” turns a skill into a commitment, followed by a toolkit for on-the-job reference.</p></div>
            <div><h3>Be honest about feedback</h3><p>Feedback looks for the three anchors with word cues and is labeled that way — not presented as AI judgment.</p></div>
          </div>
          <div className="tfs-status">
            <div className="tfs-status-col">
              <h3>Implemented in the prototype</h3>
              <ul>
                <li>Opening scene with timed context cards</li>
                <li>Three previewable openings, each with a full consequence sequence</li>
                <li>Outcome, trade-off and coaching for every path</li>
                <li>Peer debrief, toolkit, transfer scenario and identity reflection</li>
                <li>Before-and-after confidence self-rating</li>
                <li>Voice or typed input with word-cue feedback; session-local, nothing recorded</li>
                <li>Captions, text mode, English/Spanish, designer’s notes</li>
              </ul>
            </div>
            <div className="tfs-status-col tfs-status-col--concept">
              <h3>Concept only</h3>
              <ul>
                <li>The L&amp;D view is a designed reporting concept: it lists the current session’s events (verb, object, result). It is not presented as a deployed LMS or learning-record-store integration.</li>
                <li>Its cohort snapshot is labeled “Sample data · illustrative only”. Those figures are not results.</li>
                <li>No effectiveness data is reported. Whether the experience changes on-the-job conversations is untested here.</li>
              </ul>
            </div>
          </div>
          <figure className="tfs-shot tfs-shot--narrow">
            <img src={TFS_IMG + 'screens/17-ld-view-sample.webp'} alt="L&amp;D view listing this session's events, followed by a cohort snapshot labeled sample data, illustrative only" width="800" height="500" loading="lazy" decoding="async" />
            <figcaption>The L&amp;D view, a designed reporting concept. The cohort figures are labeled sample data, illustrative only, in the prototype itself.</figcaption>
          </figure>
          <div className="tfs-open">
            <h3>Still open</h3>
            <ul>
              <li>Does practicing the opening line change what a new supervisor actually says on the floor?</li>
              <li>Does a before-and-after self-rating reflect skill, or only confidence?</li>
              <li>How much does word-cue feedback miss when a learner phrases an anchor in their own way?</li>
            </ul>
          </div>
          <p className="tfs-disclose">Disclosures: Northstar Distribution is fictional. Dana, Marcus, Benjamin and Alex are fictional, composite characters. Video, voice and character imagery were produced with AI tools. The prototype is an independent project, not client work.</p>
        </div>
      </section>

      {/* Chapter 06 — Explore more */}
      <section className="tfs-ch tfs-ch--obsidian" aria-labelledby="tfs-h-more">
        <div className="tfs-in">
          <p className="tfs-chn">Chapter 06 · Explore more</p>
          <h2 id="tfs-h-more" className="tfs-h2">Keep going.</h2>
          <nav className="tfs-more" aria-label="Related">
            <a href={TFS_URL} target="_blank" rel="noopener"><span className="tfs-more-k">The prototype</span><span className="tfs-more-v">Open the full experience ↗</span></a>
            <a href={pathFor('Operation: Legacy Unlocked')}><span className="tfs-more-k">Related work</span><span className="tfs-more-v">Operation: Legacy Unlocked</span></a>
            <a href="/journal/"><span className="tfs-more-k">Journal</span><span className="tfs-more-v">Cinematic Learning Systems</span></a>
            <a href="/#contact"><span className="tfs-more-k">Contact</span><span className="tfs-more-v">Start a conversation</span></a>
          </nav>
        </div>
      </section>
    </article>
  );
}

const TFS_CSS = `
.tfs{--panel-gap:clamp(10px,1.4vw,20px);--panel-r:clamp(18px,2.4vw,32px);--inner-r:clamp(12px,1.4vw,20px);--tfs-orange:#F07A3A;--tfs-orange-deep:#C4471B;--tfs-ink:#ECEEF1;--tfs-soft:rgba(236,238,241,.78);--tfs-mute:rgba(236,238,241,.6);--tfs-line:rgba(236,238,241,.12);background:#171A1F;color:var(--tfs-ink);padding:0 0 var(--panel-gap);font-family:var(--font-body)}
.tfs *{box-sizing:border-box}
.tfs a{color:inherit}
.tfs-mono{font-family:var(--font-mono)}
.tfs-vh{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.tfs-top{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px calc(var(--panel-gap) + clamp(16px,3vw,44px));font:500 .875rem/1.4 var(--font-body);color:var(--tfs-soft)}
.tfs-crumb a{color:var(--tfs-soft);text-decoration:underline;text-decoration-color:rgba(236,238,241,.3);text-underline-offset:3px}
.tfs-crumb a:hover{color:var(--tfs-ink)}
.tfs-pill{flex-shrink:0;white-space:nowrap;display:inline-flex;align-items:center;min-height:44px;padding:0 16px;border:1px solid rgba(236,238,241,.16);border-radius:999px;text-decoration:none;color:var(--tfs-soft)}
.tfs-pill:hover{border-color:var(--tfs-orange);color:var(--tfs-ink)}
.tfs a:focus-visible,.tfs button:focus-visible,.tfs [tabindex]:focus-visible{outline:2px solid var(--tfs-orange);outline-offset:3px;border-radius:4px}
.tfs-ch{margin:0 var(--panel-gap) var(--panel-gap);border-radius:var(--panel-r);overflow:hidden;padding:clamp(48px,7vw,104px) 0}
.tfs-ch--obsidian{background:#0B0D10}
.tfs-ch--slate{background:#2A2F37}
.tfs-ch--paper{background:#E8E3D9;color:#0B0D10;--tfs-ink:#0B0D10;--tfs-soft:rgba(11,13,16,.78);--tfs-mute:rgba(11,13,16,.64);--tfs-line:rgba(11,13,16,.14);--tfs-orange:#A63A12}
.tfs-in{width:min(1180px,calc(100% - 2*clamp(16px,4vw,56px)));margin-inline:auto}
.tfs-chn{margin:0 0 18px;font:500 .75rem/1.3 var(--font-mono);letter-spacing:.16em;text-transform:uppercase;color:var(--tfs-orange)}
.tfs-eyebrow{margin:0 0 14px;font:500 .8125rem/1.4 var(--font-mono);letter-spacing:.06em;color:var(--tfs-mute)}
.tfs-title{margin:0;font:600 clamp(2.75rem,1.4rem + 6vw,6.5rem)/.94 var(--font-display);letter-spacing:-.045em}
.tfs-tension{margin:clamp(18px,2.4vw,28px) 0 0;max-width:32ch;font:500 clamp(1.25rem,1rem + 1vw,1.875rem)/1.3 var(--font-display);color:var(--tfs-orange)}
.tfs-hero{margin:clamp(32px,4vw,56px) 0 0}
.tfs-hero img{display:block;width:100%;height:auto;border-radius:var(--inner-r);background:#06080a}
.tfs figcaption{margin-top:10px;font:400 .8125rem/1.5 var(--font-body);color:var(--tfs-mute)}
.tfs-premise{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);gap:clamp(24px,4vw,64px);margin-top:clamp(32px,4vw,56px)}
.tfs-premise p{margin:0 0 16px;max-width:62ch;font-size:1.0625rem;line-height:1.7;color:var(--tfs-soft)}
.tfs-disclose{font-size:.875rem!important;color:var(--tfs-mute)!important;border-left:2px solid var(--tfs-orange);padding-left:14px}
.tfs-facts{margin:0;display:grid;gap:0;border-top:1px solid var(--tfs-line)}
.tfs-facts div{padding:12px 0;border-bottom:1px solid var(--tfs-line)}
.tfs-facts dt{font:500 .6875rem/1.4 var(--font-mono);letter-spacing:.1em;text-transform:uppercase;color:var(--tfs-mute)}
.tfs-facts dd{margin:4px 0 0;font-size:.9375rem;line-height:1.5}
.tfs-h2{margin:0;max-width:22ch;font:600 clamp(1.875rem,1.2rem + 2.6vw,3.5rem)/1.04 var(--font-display);letter-spacing:-.035em}
.tfs-h3{margin:clamp(48px,6vw,80px) 0 8px;font:600 clamp(1.25rem,1rem + .8vw,1.75rem)/1.2 var(--font-display);letter-spacing:-.02em}
.tfs-lede{margin:16px 0 clamp(28px,3.4vw,44px);max-width:62ch;font-size:1.0625rem;line-height:1.65;color:var(--tfs-soft)}
.tfs-sub{margin:0 0 24px;color:var(--tfs-soft)}
.tfs-kicker{margin:0 0 10px;font:500 .75rem/1.4 var(--font-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--tfs-orange)}
/* Launcher */
.tfs-launch{position:relative;display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);align-items:center;gap:clamp(20px,3vw,48px);padding:clamp(16px,2vw,24px);border-radius:var(--inner-r);background:#0B0D10;border:1px solid rgba(240,122,58,.35)}
.tfs-launch-img{display:block;width:100%;height:auto;border-radius:calc(var(--inner-r) - 6px)}
.tfs-launch-title{margin:0 0 20px;font:600 clamp(1.5rem,1.1rem + 1.2vw,2.25rem)/1.12 var(--font-display);letter-spacing:-.02em}
.tfs-launch-actions{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:18px}
.tfs-btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 22px;border:1px solid var(--tfs-orange-deep);border-radius:999px;background:var(--tfs-orange-deep);color:#fff!important;font:600 1rem/1 var(--font-body);text-decoration:none;cursor:pointer}
.tfs-btn:hover{background:#D9551F;border-color:#D9551F}
.tfs-btn--ghost{background:transparent;color:var(--tfs-ink)!important;border-color:rgba(236,238,241,.28)}
.tfs-btn--ghost:hover{background:rgba(240,122,58,.1);border-color:var(--tfs-orange)}
.tfs-launch-note{margin:0;font-size:.875rem;line-height:1.6;color:var(--tfs-mute)}
.tfs-stage{border-radius:var(--inner-r);overflow:hidden;background:#0B0D10;border:1px solid rgba(240,122,58,.35)}
.tfs-stage:fullscreen{border-radius:0;display:flex;flex-direction:column}
.tfs-stage:fullscreen .tfs-frame{flex:1;height:auto}
.tfs-stage-bar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px 16px;padding:8px 10px;border-bottom:1px solid var(--tfs-line);background:#12151A}
.tfs-stage-host{font-size:.8125rem;color:var(--tfs-mute)}
.tfs-stage-tools{display:flex;flex-wrap:wrap;gap:8px}
.tfs-bar-btn{display:inline-flex;align-items:center;min-height:40px;padding:0 14px;border:1px solid rgba(236,238,241,.2);border-radius:999px;background:transparent;color:var(--tfs-ink);font:500 .875rem/1 var(--font-body);text-decoration:none;cursor:pointer}
.tfs-bar-btn:hover{border-color:var(--tfs-orange)}
.tfs-frame{position:relative;height:clamp(600px,82vh,920px);background:#0B0D10}
.tfs-frame iframe{display:block;width:100%;height:100%;border:0;transition:opacity 300ms ease}
.tfs-frame-loading{position:absolute;inset:0;display:grid;place-content:center;gap:10px;padding:24px;text-align:center;color:var(--tfs-soft)}
.tfs-frame-loading p{margin:0}
.tfs-frame-slow{max-width:44ch;font-size:.9375rem}
.tfs-frame-slow a{color:var(--tfs-orange)}
.tfs-stage-note{margin:0;padding:10px 14px;font-size:.8125rem;color:var(--tfs-mute);border-top:1px solid var(--tfs-line)}
/* Explorer */
.tfs-tabs{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px}
.tfs-tab{display:inline-flex;align-items:center;gap:10px;min-height:44px;padding:0 16px;border:1px solid var(--tfs-line);border-radius:999px;background:transparent;color:var(--tfs-soft);font:500 .9375rem/1 var(--font-body);cursor:pointer}
.tfs-tab:hover{color:var(--tfs-ink);border-color:rgba(240,122,58,.6)}
.tfs-tab[aria-selected="true"]{background:rgba(240,122,58,.14);border-color:var(--tfs-orange);color:var(--tfs-ink)}
.tfs-tab-n{font:500 .6875rem/1 var(--font-mono);color:var(--tfs-orange)}
.tfs-panel{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);gap:clamp(20px,3vw,48px);align-items:start;padding:clamp(16px,2vw,24px);border-radius:var(--inner-r);background:#12151A;border:1px solid var(--tfs-line)}
.tfs-panel[hidden]{display:none}
.tfs-panel h3{margin:0 0 12px;font:600 1.375rem/1.2 var(--font-display);letter-spacing:-.015em}
.tfs-panel p{margin:0 0 12px;line-height:1.65;color:var(--tfs-soft)}
.tfs-shot{margin:0}
.tfs-shot img{display:block;width:100%;height:auto;border-radius:calc(var(--inner-r) - 6px);border:1px solid var(--tfs-line);background:#06080a}
.tfs-shot--narrow{max-width:800px;margin:clamp(28px,3vw,40px) 0 0}
.tfs-cues{list-style:none;margin:16px 0 0;padding:0;display:grid;gap:10px}
.tfs-cues li{display:grid;gap:4px;padding:12px 14px;border-left:2px solid var(--tfs-orange);background:rgba(236,238,241,.03);border-radius:0 8px 8px 0;font-size:.9375rem;line-height:1.55;color:var(--tfs-soft)}
.tfs-cues .tfs-mono{font-size:.75rem;letter-spacing:.06em;text-transform:uppercase;color:var(--tfs-ink)}
.tfs-approaches{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(12px,1.6vw,20px)}
.tfs-approach{display:flex;flex-direction:column;padding:clamp(18px,2vw,24px);border-radius:var(--inner-r);background:#12151A;border:1px solid var(--tfs-line);border-top:2px solid rgba(236,238,241,.3)}
.tfs-approach--redirect{border-top-color:var(--tfs-orange)}
.tfs-approach-k{margin:0;font:600 1.125rem/1.2 var(--font-display)}
.tfs-approach-dir{margin:4px 0 14px;font:500 .75rem/1.4 var(--font-mono);letter-spacing:.04em;color:var(--tfs-mute)}
.tfs-approach-line{margin:0 0 16px;font:500 1rem/1.5 var(--font-display);color:var(--tfs-ink)}
.tfs-approach-dl{margin:0;padding-top:14px;border-top:1px solid var(--tfs-line);display:grid;gap:10px}
.tfs-approach-dl dt{font:500 .6875rem/1.4 var(--font-mono);letter-spacing:.1em;text-transform:uppercase;color:var(--tfs-orange)}
.tfs-approach-dl dd{margin:2px 0 0;font-size:.9375rem;line-height:1.55;color:var(--tfs-soft)}
.tfs-pair{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(12px,1.6vw,20px);margin-top:clamp(24px,3vw,40px)}
/* Production */
.tfs-prod{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(20px,2.6vw,36px) clamp(20px,3vw,44px)}
.tfs-prod-item{padding-top:16px;border-top:2px solid var(--tfs-orange)}
.tfs-prod-item h3{margin:0 0 8px;font:600 1.125rem/1.25 var(--font-display)}
.tfs-prod-item p{margin:0;font-size:.9375rem;line-height:1.65;color:var(--tfs-soft)}
.tfs-gallery{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(12px,1.6vw,20px);margin-top:clamp(36px,4vw,56px)}
.tfs-photo{margin:0}
.tfs-photo img{display:block;width:100%;height:auto;aspect-ratio:16 / 10;object-fit:cover;border-radius:calc(var(--inner-r) - 6px);background:#0B0D10}
/* Demonstrates */
.tfs-hyp{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(12px,1.6vw,20px)}
.tfs-hyp > div{padding:clamp(18px,2vw,24px);border-radius:var(--inner-r);background:rgba(11,13,16,.4);border:1px solid var(--tfs-line)}
.tfs-hyp h3{margin:0 0 8px;font:600 1.0625rem/1.3 var(--font-display)}
.tfs-hyp p{margin:0;font-size:.9375rem;line-height:1.6;color:var(--tfs-soft)}
.tfs-status{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(12px,1.6vw,20px);margin-top:clamp(28px,3vw,40px)}
.tfs-status-col{padding:clamp(18px,2vw,26px);border-radius:var(--inner-r);background:#0B0D10;border:1px solid var(--tfs-line)}
.tfs-status-col--concept{border-style:dashed;border-color:rgba(240,122,58,.5)}
.tfs-status h3,.tfs-open h3{margin:0 0 12px;font:600 1.0625rem/1.3 var(--font-display)}
.tfs-status ul,.tfs-open ul{margin:0;padding-left:1.15em;display:grid;gap:8px;font-size:.9375rem;line-height:1.55;color:var(--tfs-soft)}
.tfs-open{margin:clamp(28px,3vw,40px) 0 24px}
/* More */
.tfs-more{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-top:clamp(24px,3vw,36px)}
.tfs-more a{display:flex;flex-direction:column;gap:6px;min-height:84px;padding:18px 20px;border:1px solid var(--tfs-line);border-radius:var(--inner-r);text-decoration:none;background:rgba(236,238,241,.02)}
.tfs-more a:hover{border-color:var(--tfs-orange)}
.tfs-more-k{font:500 .6875rem/1.3 var(--font-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--tfs-mute)}
.tfs-more-v{font:600 1rem/1.3 var(--font-body)}
@media(max-width:1024px){.tfs-prod,.tfs-hyp{grid-template-columns:repeat(2,minmax(0,1fr))}.tfs-more{grid-template-columns:repeat(2,minmax(0,1fr))}.tfs-approaches{grid-template-columns:1fr}}
@media(max-width:860px){.tfs-premise,.tfs-launch,.tfs-panel,.tfs-status,.tfs-pair{grid-template-columns:1fr}}
@media(max-width:760px){.tfs-frame{height:min(78vh,720px)}}
@media(max-width:600px){.tfs-prod,.tfs-hyp,.tfs-gallery,.tfs-more{grid-template-columns:1fr}.tfs-top{flex-wrap:wrap}.tfs-tabs{flex-wrap:nowrap;overflow-x:auto;padding-bottom:6px;scrollbar-width:thin}.tfs-tab{flex-shrink:0}}
@media(prefers-reduced-motion:reduce){.tfs-frame iframe{transition:none}}
`;

window.CaseStudyFirstSentenceExports = { CaseStudyFirstSentence, meta: TFS_META };
