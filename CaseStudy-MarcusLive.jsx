// Companion build and research perspective. External findings are not pilot outcomes.
const MARCUS_META = {
  slug: 'marcus-live',
  projectName: window.JIZ_SITE.project('marcus-live').title,
  statement: window.JIZ_SITE.project('marcus-live').statement,
  ogAlt: 'A warehouse supervisor rehearses a conversation with Marcus on a laptop — AI-generated concept image'
};

const MARCUS_SOURCES = [
  { title: 'World Economic Forum (2025). The Future of Jobs Report 2025.', url: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/', type: 'Employer survey and projections', note: 'Employer expectations for 2025–2030; forecasts are not observed learning outcomes.' },
  { title: 'LinkedIn Learning (2025). Workplace Learning Report: The rise of career champions.', url: 'https://business.linkedin.com/learn/resources/workplace-learning-report', type: 'Industry survey', note: 'Survey of 937 L&D/HR professionals and 679 learners, alongside platform data. Vendor-produced; associations do not establish causation.' },
  { title: 'Chernikova et al. (2020). Simulation-Based Learning in Higher Education: A Meta-Analysis. Review of Educational Research.', url: 'https://doi.org/10.3102/0034654320933544', type: 'Peer-reviewed meta-analysis', note: '145 empirical studies; overall g = 0.85, 95% CI [0.69, 1.02]. Full article inspected. Broad simulation evidence, not a test of generative AI or this build.' },
  { title: 'Tannenbaum & Cerasoli (2013). Do Team and Individual Debriefs Enhance Performance? A Meta-Analysis. Human Factors.', url: 'https://doi.org/10.1177/0018720812448394', type: 'Peer-reviewed meta-analysis', note: '46 samples, N = 2,136; d = 0.67. Publisher abstract inspected; full text not available in retrieval. Structured debriefs are more substantial than three optional reflection prompts.' },
  { title: 'Feasibility study of using GPT for history-taking training in medical education: a randomized clinical trial (2025). BMC Medical Education, 25, 1030.', url: 'https://doi.org/10.1186/s12909-025-07614-9', type: 'Peer-reviewed randomized trial', note: 'Full text inspected. Single center, 56 medical students, four weeks; structured exam outcomes. Different population, task and feedback system from Marcus, Live.' },
  { title: 'Bastani et al. (2025). Generative AI without guardrails can harm learning: Evidence from high school mathematics. PNAS, 122(26).', url: 'https://doi.org/10.1073/pnas.2422633122', type: 'Peer-reviewed field experiment', note: 'Full text inspected. High-school mathematics, not workplace roleplay. The linked August 2025 correction concerns an author affiliation, not findings.' },
  { title: 'Blume et al. (2010). Transfer of Training: A Meta-Analytic Review. Journal of Management.', url: 'https://doi.org/10.1177/0149206309352880', type: 'Peer-reviewed meta-analysis', note: '89 empirical studies. Publisher abstract inspected; full text not available in retrieval. Supports attention to motivation, work environment and transfer measurement.' },
  { title: 'Tavus. Embed documentation.', url: 'https://docs.tavus.io/sections/deployments/embed', type: 'Official product documentation', note: 'Documents CDN integration, responsive layout, greeting, camera and memory configuration. Capability documentation is not independent efficacy evidence.' },
  { title: 'Tavus. Host communication documentation and implementation examples.', url: 'https://docs.tavus.io/sections/deployments/host-communication', type: 'Official product documentation', note: 'Lifecycle events and cleanup; examples also reviewed at github.com/Tavus-Engineering/tavus-examples. Sources checked November 2, 2026.' }
];

function MarcusCite({ n }) {
  return <sup className="ml-cite"><a href={MARCUS_SOURCES[n - 1].url} aria-label={'Source ' + n + ': ' + MARCUS_SOURCES[n - 1].title}>[{n}]</a></sup>;
}

function TfsBuildNavigation({ active }) {
  return <nav className="tfs-build-nav" aria-label="Related learning experiences">
    <a href="/work/the-first-sentence/" aria-current={active === 'branching' ? 'page' : undefined}>01 · Branching simulation</a>
    <a href="/work/marcus-live/" aria-current={active === 'live' ? 'page' : undefined}>02 · Marcus, Live / Research &amp; build</a>
  </nav>;
}

// Loaded only from the visitor's explicit Open action. No conversation is created here.
let tfsTavusScript;
function loadTfsTavus() {
  if (window.customElements.get('tavus-embed')) return Promise.resolve();
  if (!tfsTavusScript) tfsTavusScript = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@tavus/embed@latest';
    script.async = true;
    script.onload = () => {
      if (window.customElements.get('tavus-embed')) resolve();
      else { script.remove(); tfsTavusScript = null; reject(new Error('Registration unavailable')); }
    };
    script.onerror = () => { script.remove(); tfsTavusScript = null; reject(new Error('Script unavailable')); };
    document.head.appendChild(script);
  });
  return tfsTavusScript;
}

function TfsLivePractice() {
  const [attempt, setAttempt] = React.useState(0);
  const [status, setStatus] = React.useState('closed');
  const [completed, setCompleted] = React.useState(false);
  const host = React.useRef(null);
  const reflection = React.useRef(null);
  React.useEffect(() => {
    if (!attempt) return undefined;
    let disposed = false;
    let element;
    let timer;
    const handlers = {
      'tavus:ready': () => { window.clearTimeout(timer); setStatus('ready'); },
      'tavus:conversation-started': () => setStatus('active'),
      'tavus:conversation-ended': () => { setCompleted(true); setStatus('ended'); },
      'tavus:mode-change': (event) => {
        if (event.detail && event.detail.mode === 'unavailable') { window.clearTimeout(timer); setStatus('unavailable'); }
      },
      'tavus:error': () => { window.clearTimeout(timer); setStatus('error'); }
    };
    setStatus('loading');
    setCompleted(false);
    timer = window.setTimeout(() => setStatus('slow'), 20000);
    loadTfsTavus().then(() => {
      if (disposed) return;
      element = document.createElement('tavus-embed');
      element.setAttribute('deployment-id', '98977e08-afca-4db4-bd21-cb961f9902ce');
      element.setAttribute('layout', 'inline');
      // Saved greeting cannot be inspected without account access; scope this line to this page.
      element.setAttribute('custom-greeting', 'Hey, Dana. You wanted to talk?');
      element.setAttribute('camera-on-start', 'off');
      // Defence in depth; also turn off Unique memory per visitor in PAL Maker.
      element.setAttribute('override-config', JSON.stringify({ customization: { conversation: { unique_memory_tag: false } } }));
      element.setAttribute('aria-label', 'Live conversation practice with Marcus');
      Object.entries(handlers).forEach(([name, handler]) => element.addEventListener(name, handler));
      host.current.appendChild(element);
    }).catch(() => { if (!disposed) { window.clearTimeout(timer); setStatus('error'); } });
    return () => {
      disposed = true;
      window.clearTimeout(timer);
      if (element) {
        Object.entries(handlers).forEach(([name, handler]) => element.removeEventListener(name, handler));
        if (typeof element.destroy === 'function') element.destroy();
        else element.remove();
      }
    };
  }, [attempt]);
  React.useEffect(() => {
    if (completed && reflection.current) reflection.current.focus();
  }, [completed]);
  const messages = {
    loading: 'Loading live practice. No call has started.',
    slow: 'Live practice is taking longer than expected. You can keep waiting or use the text-enabled simulation below.',
    ready: 'Ready. Use the Tavus preview to check your devices and begin when you choose.',
    active: 'Conversation in progress. You control the conversation and can end it using the Tavus controls.',
    ended: 'Your conversation has ended.',
    unavailable: 'Live practice is currently unavailable. Please try again later or use the text-enabled simulation.',
    error: 'Live practice could not connect. Check your connection and browser permissions, or use the text-enabled simulation.'
  };
  return <div className="tfs-live">
    <div className="tfs-live-brief">
      <p className="tfs-kicker">Your briefing · Optional practice</p>
      <ul>
        <li>Northstar Distribution, DC-04 · Shift 01, 06:42 AM</li>
        <li>You play Dana R., newly promoted shift lead.</li>
        <li>Marcus T. is a nine-year veteran, your former peer, and the colleague who trained you.</li>
        <li>Pick rate has declined 30% over three weeks.</li>
        <li>Two trailers are waiting. Night cutoff was missed by 15 minutes.</li>
      </ul>
      <p>You control the conversation and may end it at any time. No need to complete the original simulation first.</p>
      <p className="tfs-disclose">AI roleplay: Marcus is a fictional character powered by Tavus, not a person. Opening practice connects to Tavus; starting a call sends your microphone audio, any enabled camera video, and conversation content for processing. Camera starts off. Avoid sharing real names or personal or confidential information. Recording, transcript retention and deletion depend on the Tavus account settings; these have not yet been verified for this pilot. <a href="https://www.tavus.io/privacy-policy" target="_blank" rel="noopener noreferrer">Tavus privacy policy</a>.</p>
    </div>
    {!attempt && <button type="button" className="tfs-btn tfs-btn--hero" onClick={() => setAttempt(1)}>Open live practice</button>}
    {!!attempt && <>
      <p role="status" aria-live="polite">{messages[status]}</p>
      <div className="tfs-live-stage" ref={host} />
    </>}
    {(status === 'error' || status === 'unavailable') && <button type="button" className="tfs-btn" onClick={() => setAttempt(n => n + 1)}>Try loading again</button>}
    {completed && <section className="tfs-live-reflection" aria-labelledby="tfs-reflection">
      <h3 id="tfs-reflection" tabIndex="-1" ref={reflection}>The conversation ends. The learning doesn't.</h3>
      <p>Reflect if you wish. These prompts are for self-assessment; no score or behavioral assessment has been generated.</p>
      <ol>
        <li>What did you make clear about the performance concern?</li>
        <li>What did you learn about Marcus's perspective?</li>
        <li>What next step, if any, did you establish?</li>
      </ol>
      <button type="button" className="tfs-btn" onClick={() => setAttempt(n => n + 1)}>Begin a fresh attempt</button>
    </section>}
    <p className="tfs-launch-note"><a href={TFS_URL} target="_blank" rel="noopener noreferrer">Use the original simulation’s text-enabled pathway</a> — select text mode in the simulation if you prefer to read or type.</p>
  </div>;
}

function CaseStudyMarcusLive() {
  const Chapter = window.JIZChapter.Chapter;
  return <article className="tfs ml" data-case-study="marcus-live">
    <style>{TFS_CSS + MARCUS_CSS}</style>
    <div className="tfs-top">
      <nav className="tfs-crumb" aria-label="Breadcrumb"><a href="/">Jonathan Zamarripa</a> / <a href="/#work">Work</a> / <span aria-current="page">Marcus, Live</span></nav>
      <a className="tfs-pill" href="/#work">← All work</a>
    </div>
    <TfsBuildNavigation active="live" />
    <Chapter surface="obsidian" accent="first-sentence" labelledBy="ml-title">
      <p className="tfs-chn">Featured case study · Conversational AI practice</p>
      <p className="tfs-eyebrow">Jonathan Iker Zamarripa · Independent L&amp;D exploration · November 2026</p>
      <h1 id="ml-title" className="tfs-title">{window.JIZ_SITE.project('marcus-live').title}</h1>
      <p className="tfs-editorial-subtitle">{window.JIZ_SITE.project('marcus-live').subtitle}</p>
      <p className="tfs-tension">From choosing the words to finding your own.</p>
      <p className="tfs-lede">{window.JIZ_SITE.project('marcus-live').statement}</p>
      <figure className="ml-hero-image" id="ml-images">
        <img src="/assets/imagery/marcus-live/marcus-live-practice.webp" alt="AI-generated concept image of a warehouse supervisor practicing a conversation with Marcus on a laptop in an office overlooking the warehouse" width="1376" height="768" fetchpriority="high" decoding="async" />
        <figcaption>Workplace conversation practice. AI-generated concept image; fictional people and scenario. <a href="/assets/imagery/marcus-live/marcus-live-practice.png" download>Download practice image as PNG</a>.</figcaption>
      </figure>
      <div className="ml-abstract">
        <h2>Executive perspective</h2>
        <p>The design question behind this build is practical: how do you help a newly promoted supervisor rehearse a difficult conversation before the stakes are real? The First Sentence explores the consequences of a chosen opening. Marcus, Live extends that idea into a conversation the learner has to sustain.</p>
        <p>My strategic proposition is to make purposeful rehearsal easier to access, while keeping the learning objective, evidence and responsibility for evaluation in human hands. Tavus supplies the conversational video layer. The learning design determines whether the interaction is worth having.</p>
        <p>This is a working integration and a research-informed hypothesis. The host experience has passed fixture-based tests; live deployment and learner outcomes remain unverified. The research below establishes a rationale for testing, rather than an effectiveness claim for this pilot.</p>
      </div>
      <div className="ml-actions"><a className="tfs-btn" href="#ml-practice">Try the practice</a><a className="tfs-btn tfs-btn--ghost" href="#ml-evidence">Read the evidence</a><button className="tfs-btn tfs-btn--ghost" type="button" onClick={() => window.print()}>Print / save paper</button></div>
      <nav className="ml-contents" aria-label="Research paper contents">
        <a href="#ml-brief">The brief</a><a href="#ml-evidence">Why now &amp; evidence</a><a href="#ml-platform">Why Tavus</a><a href="#ml-process">Build process</a><a href="#ml-evaluation">What comes next</a><a href="#ml-future">Future applications</a><a href="#ml-references">References</a>
      </nav>
    </Chapter>

    <Chapter surface="slate" accent="first-sentence" labelledBy="ml-brief-title" id="ml-brief">
      <p className="tfs-chn">01 · The brief &amp; the challenge</p>
      <h2 id="ml-brief-title" className="tfs-h2">A promotion changes the relationship before it changes the skill.</h2>
      <div className="ml-prose">
        <p>I chose a frontline accountability conversation because it brings operational pressure and interpersonal judgment into the same moment. Dana is a newly promoted shift lead. Marcus is the experienced colleague who trained her. She needs to address declining performance while remaining open to information she does not yet have.</p>
        <p>The fictional brief is specific: Northstar Distribution, DC-04; Shift 01, 06:42 AM. Pick rate is down 30% across three weeks, two trailers are waiting, and the night cutoff was missed by 15 minutes. These numbers establish the scenario; they are not results from a real organization.</p>
        <p>The target behavior is to name the performance concern, explain its impact, invite the other person’s perspective and work toward an appropriate next step. It is possible to sound confident and still avoid the issue. It is possible to state the metric and still shut down the conversation. That tension makes this a useful design problem.</p>
      </div>
      <div className="ml-grid">
        <div className="ml-card"><p className="tfs-kicker">Build 01 · The First Sentence</p><h3>Recognize a consequential choice.</h3><p>The authored Figma experience presents openings, consequences, a peer debrief and a transfer exercise. It provides a stable narrative and explicit instructional framing.</p></div>
        <div className="ml-card"><p className="tfs-kicker">Build 02 · Marcus, Live</p><h3>Generate a response and adapt.</h3><p>The Tavus experience asks learners to form their own words and respond to a conversational partner. It introduces variability while keeping the scenario and learning purpose bounded.</p></div>
      </div>
      <p className="ml-prose">The two builds serve different functions. A novice may need the branching example first; an experienced learner may want direct rehearsal. Access is independent so neither pathway becomes an unnecessary prerequisite.</p>
    </Chapter>

    <Chapter surface="paper" accent="first-sentence" labelledBy="ml-evidence-title" id="ml-evidence">
      <p className="tfs-chn">02 · Why now &amp; what the evidence supports</p>
      <h2 id="ml-evidence-title" className="tfs-h2">Skills pressure creates a reason to experiment. Learning science sets the conditions.</h2>
      <div className="ml-prose">
        <p>The World Economic Forum’s 2025 employer survey projects that 39% of workers’ existing skill sets will be transformed or become outdated by 2030; 63% of surveyed employers identify skills gaps as a major barrier to transformation. These are employer expectations, not a measured rate of skill loss. They strengthen the case for responsive capability development without prescribing a particular technology.<MarcusCite n={1} /></p>
        <p>LinkedIn’s 2025 Workplace Learning Report found that 49% of surveyed L&amp;D/HR professionals agreed their executives were concerned about employees having the skills to execute business strategy. It also reported that 71% of L&amp;D professionals were exploring, experimenting with or integrating AI into their work. This is industry context from a learning vendor, not evidence that AI training improves performance.<MarcusCite n={2} /></p>
        <p>My interpretation is that L&amp;D needs to become more capable of designing, testing and maintaining practice environments alongside courses, coaching and work experience. This is a strategic direction to investigate, rather than a prediction that every organization will adopt an avatar.</p>
      </div>
      <div className="ml-table-wrap"><table className="ml-table">
        <caption>Evidence, design implication and boundary</caption>
        <thead><tr><th scope="col">Evidence</th><th scope="col">What it informs here</th><th scope="col">What it cannot establish</th></tr></thead>
        <tbody>
          <tr><td>Chernikova et al.: 145 simulation studies; overall g = 0.85, 95% CI [0.69, 1.02].<MarcusCite n={3} /></td><td>Provide an authentic problem, rehearsal and scaffolding matched to prior knowledge.</td><td>This is heterogeneous higher-education evidence. The effect size is not a percentage improvement, a Tavus result or a forecast for Marcus.</td></tr>
          <tr><td>Tannenbaum &amp; Cerasoli: 46 debrief samples, N = 2,136; d = 0.67.<MarcusCite n={4} /></td><td>Reserve time after the interaction to examine decisions and plan another attempt.</td><td>Three optional prompts do not reproduce a facilitated, structured debrief or guarantee its effects.</td></tr>
          <tr><td>A 2025 randomized trial: 56 medical students; four weeks of GPT simulation or traditional roleplay; post-training examination means 86.79 vs. 73.64.<MarcusCite n={5} /></td><td>Test conversational practice with an independent performance measure.</td><td>A small single-center medical study does not establish leadership transfer or an advantage from a video avatar. Its structured feedback differs from this pilot.</td></tr>
          <tr><td>Bastani et al.: a high-school mathematics experiment found that unguarded AI assistance could undermine subsequent unaided performance; tutor safeguards mitigated the harm.<MarcusCite n={6} /></td><td>Keep the learner responsible for generating a response and test without assistance.</td><td>This does not measure conversational roleplay. It challenges the assumption that an easier assisted task necessarily produces learning.</td></tr>
        </tbody>
      </table></div>
      <div className="ml-prose"><h3>Transfer is a separate design problem.</h3><p>Blume et al.’s review of 89 studies links transfer with factors including learner motivation and a supportive work environment, and warns that shared-source measurement can inflate apparent relationships. For leadership skills, a convincing simulation must be connected to opportunities to use the behavior, manager support and an assessment beyond the practice itself.<MarcusCite n={7} /></p><p>The evidence therefore supports a careful experiment: authentic task → purposeful rehearsal → structured reflection → a new, independently assessed situation. It does not support attaching an efficacy claim to an engaging interface.</p></div>
    </Chapter>

    <Chapter surface="obsidian" accent="first-sentence" labelledBy="ml-platform-title" id="ml-platform">
      <p className="tfs-chn">03 · Platform choice &amp; trade-offs</p>
      <h2 id="ml-platform-title" className="tfs-h2">Why Tavus was a fit for this question.</h2>
      <div className="ml-prose">
        <p>Tavus is a conversational AI video platform. Its managed embed brings a real-time PAL—its term for the conversational character—into an existing web page. The documented integration supports responsive video, device checks, captions, conversation controls and lifecycle events. This gives the pilot an interaction layer without requiring a separate video application.<MarcusCite n={8} /><MarcusCite n={9} /></p>
        <p>I selected it for the next step in this particular learning experience: moving from a filmed character in a fixed narrative to a partner the learner can address in their own words. The face-to-face format is a design hypothesis about social context and rehearsal. Whether it adds value over a voice-only or text-based partner needs comparison.</p>
      </div>
      <div className="ml-grid">
        <div className="ml-card"><h3>Fit with the existing build</h3><p>The supported CDN custom element fits the portfolio’s precompiled React and static-page architecture. Reusing the supplied deployment preserves the existing character, while a page-scoped greeting places the learner in Dana’s role.<MarcusCite n={8} /></p></div>
        <div className="ml-card"><h3>Control of the learning boundary</h3><p>The host page owns the brief, access, reflection and recovery states. Tavus owns device checks and the conversation interface. Magic Canvas stays inside the embed; no duplicate controls or invented tool handlers are added.<MarcusCite n={8} /><MarcusCite n={9} /></p></div>
        <div className="ml-card"><h3>Alternatives still matter</h3><p>Authored branching offers reproducible outcomes. Text or voice agents may be sufficient and cheaper to operate. Human roleplay remains valuable for nuanced facilitation. This pilot is a fit-for-purpose selection, not a completed procurement comparison.</p></div>
        <div className="ml-card"><h3>Costs and dependencies to examine</h3><p>A managed service introduces usage cost, latency, provider changes, network requirements and data-processing responsibilities. No cost saving, time saving, accuracy advantage or return on investment has been measured in this build.</p></div>
      </div>
    </Chapter>

    <Chapter surface="slate" accent="first-sentence" labelledBy="ml-process-title" id="ml-process">
      <p className="tfs-chn">04 · From brief to implementation</p>
      <h2 id="ml-process-title" className="tfs-h2">AI assistance brought design decisions into reviewable code.</h2>
      <div className="ml-prose">
        <h3>Working with Charlie</h3>
        <p>Using Charlie as my assistant was part of the build process. The practical opportunity was to work from a clearly stated learning brief, examine implementation decisions and refine an experience in ordinary language. I supplied the challenge, audience, scenario and constraints. The documented integration work translated those decisions into the existing portfolio rather than creating a new application.</p>
        <p>The record supports a concrete workflow: inspect the repository; read the official embed documentation; build the optional practice; handle lifecycle and failure states; run the existing build; and test the host behavior with controlled fixtures. It does not support an exact count of hours saved or a claim that live conversations and learning outcomes have been validated.</p>
      </div>
      <ol className="ml-process">
        <li><h3>Define the performance situation.</h3><p>Keep the operational facts specific, make the learner’s role clear and avoid giving away the character’s private circumstances or an ideal script before practice.</p></li>
        <li><h3>Translate the brief into interaction rules.</h3><p>Use the existing deployment. Open only after visitor action. Start the camera off. Preserve the learner’s ability to end. Keep the original text-enabled pathway accessible.</p></li>
        <li><h3>Integrate within the existing system.</h3><p>Use Tavus’s official custom element, shared chapter components and approved Industrial Orange identity. Listen for readiness, start, end, mode changes and errors; clean up listeners and the embed when leaving or restarting.</p></li>
        <li><h3>Verify what can actually be observed.</h3><p>The build and fixture-based browser checks passed for delayed loading, error handling, reflection, fresh embed instances and mobile layout. A public configuration lookup returned an origin restriction, so account settings and live-call behavior remain a separate verification step.</p></li>
      </ol>
      <div className="ml-prose"><p>The ease worth highlighting is architectural: a documented managed embed and AI-assisted implementation made a bounded experiment feasible within the existing site. The strategic work is deciding what deserves that experiment, what evidence would change the decision, and which responsibilities must remain visible as the prototype becomes a service.</p></div>
      <section className="ml-status" aria-labelledby="ml-pilot-status">
        <h3 id="ml-pilot-status">Pilot status</h3>
        <p>Marcus, Live explores conversational AI as a practice environment for difficult workplace conversations. This independent prototype includes optional reflection; its effect on learning and workplace performance has not yet been evaluated.</p>
      </section>
    </Chapter>

    <Chapter surface="carbon" accent="first-sentence" labelledBy="ml-practice-title" id="ml-practice">
      <p className="tfs-chn">05 · Experience the build</p>
      <h2 id="ml-practice-title" className="tfs-h2">You made the decision. Now have the conversation.</h2>
      <p className="tfs-lede">Step into Dana's role and speak directly with Marcus, the veteran colleague who trained you. Address the performance concern in your own words. Marcus will respond in real time.</p>
      <div className="ml-build-images">
        <figure>
          <img src="/assets/imagery/marcus-live/marcus-character.webp" alt="Marcus, the fictional veteran warehouse colleague, wearing a high-visibility vest in a warehouse aisle" width="1439" height="803" loading="lazy" decoding="async" />
          <figcaption>Marcus, the roleplay character. Supplied AI-generated character artwork. <a href="/assets/imagery/marcus-live/marcus-character.png" download>Download Marcus portrait as PNG</a>.</figcaption>
        </figure>
        <figure>
          <img src="/assets/imagery/marcus-live/marcus-live-interface.webp" alt="Screenshot of the Marcus, Live preview, showing Marcus, the Start the conversation button, and the scenario introduction" width="1920" height="955" loading="lazy" decoding="async" />
          <figcaption>Supplied screenshot of the Tavus experience. This is a static preview; use the live practice controls below to begin. <a href="/assets/imagery/marcus-live/marcus-live-interface.png" download>Download interface screenshot as PNG</a>.</figcaption>
        </figure>
      </div>
      <TfsLivePractice />
    </Chapter>

    <Chapter surface="paper" accent="first-sentence" labelledBy="ml-evaluation-title" id="ml-evaluation">
      <p className="tfs-chn">06 · What I would do next</p>
      <h2 id="ml-evaluation-title" className="tfs-h2">Test the learning mechanism before expanding the scenario library.</h2>
      <div className="ml-prose"><p>With additional time, I would prioritize evidence and operating readiness over more features. The decision to scale should rest on whether people can perform a comparable conversation later, under different conditions, with an acceptable cost and risk profile.</p></div>
      <div className="ml-table-wrap"><table className="ml-table"><caption>Proposed evaluation and development sequence—not completed work</caption><thead><tr><th scope="col">Next investment</th><th scope="col">What I would test</th><th scope="col">Decision it informs</th></tr></thead><tbody>
        <tr><td>1 · Operational readiness</td><td>Confirm retention, origin permissions, optional camera, memory isolation, keyboard access, captions and graceful exits on real devices. Involve privacy, accessibility and subject-matter reviewers.</td><td>Whether the pilot is ready for consenting learners.</td></tr>
        <tr><td>2 · Scenario quality</td><td>Have reviewers challenge character consistency, premature disclosure, excessive agreement, biased assumptions, off-topic requests and inappropriate advice across repeated runs. Record deployment and model versions where available.</td><td>Whether the interaction reliably creates the intended challenge.</td></tr>
        <tr><td>3 · Feasibility study</td><td>Observe representative novice and experienced supervisors. Examine access barriers, conversational breakdowns and whether they understand the purpose. Keep confidence and satisfaction separate from demonstrated skill.</td><td>Which scaffolding or interface changes are needed before an outcome study.</td></tr>
        <tr><td>4 · Comparative learning study</td><td>Compare the branching experience alone with branching plus AI rehearsal, using comparable practice time. Predefine a behaviorally anchored rubric, blinded human ratings where feasible, and a new transfer scenario after a delay. Determine sample size from the planned outcome and power analysis.</td><td>Whether added practice improves independent performance enough to justify its cost.</td></tr>
        <tr><td>5 · Workplace transfer &amp; economics</td><td>Examine later behavior with consent and manager support; track access, completion, useful repetitions, support effort and provider spend. Account for workload and other influences on operational metrics.</td><td>Whether to maintain, modify, expand or stop the service.</td></tr>
      </tbody></table></div>
      <div className="ml-prose"><h3>Assessment is a separate product decision.</h3><p>A possible rubric could examine the specificity of the concern, clarity of impact, quality of inquiry, response to new information and appropriateness of the next step. It should permit different effective approaches rather than reward a single phrase. Before adding automated feedback, I would compare it with trained human judgments, examine reliability and bias, and preserve a way to question it.</p><p>No such assessment integration exists here. The optional reflection is self-assessment. A warm conversation, a completed call, a confidence rating and a transcript each provide different information; none independently demonstrates transfer. Operational indicators such as trailer delays are too multiply determined to attribute to a short simulation without an appropriate study.</p></div>
    </Chapter>

    <Chapter surface="obsidian" accent="first-sentence" labelledBy="ml-future-title" id="ml-future">
      <p className="tfs-chn">07 · Potential beyond Marcus</p>
      <h2 id="ml-future-title" className="tfs-h2">A reusable practice system starts with distinct performance problems.</h2>
      <p className="tfs-lede">These are candidate applications for a Tavus-based experience, subject to scenario design, domain review and validation. They are not additional builds or demonstrated platform outcomes.</p>
      <div className="ml-grid">
        <div className="ml-card"><h3>Hospitality service recovery</h3><p>Rehearse acknowledging a guest’s concern, clarifying the issue and proposing an authorized resolution. Ground the scenario in current service policy; test judgment, not whether the simulated guest becomes happy.</p></div>
        <div className="ml-card"><h3>Safety escalation</h3><p>Practice raising a concern across a hierarchy when production pressure is high. Keep emergency procedures fixed and expert-reviewed; the simulation must not improvise safety policy.</p></div>
        <div className="ml-card"><h3>Change and adoption conversations</h3><p>Help managers explore employee objections to a new system, uncover a workflow barrier and agree on support. Connect rehearsal to the actual implementation plan and follow-up.</p></div>
        <div className="ml-card"><h3>Coaching and career development</h3><p>Practice asking useful questions, discussing an aspiration and agreeing on a development action. Keep it developmental; do not infer employee potential or make promotion decisions from simulated conversation scores.</p></div>
        <div className="ml-card"><h3>Stakeholder discovery</h3><p>Rehearse a performance-consulting interview with a sponsor who initially asks for a course. Evaluate whether the learner investigates the problem, work conditions and success measures before recommending training.</p></div>
        <div className="ml-card"><h3>Multilingual rehearsal</h3><p>Explore localized practice with bilingual subject-matter reviewers and culturally appropriate expectations. Test language support, accent accessibility and equivalent task difficulty; this pilot’s original bilingual simulation does not establish that the live version is bilingual.</p></div>
      </div>
      <div className="ml-prose"><h3>The future implication for L&amp;D</h3><p>My thesis is that conversational systems can make repeated interpersonal practice more accessible between facilitated sessions. The design responsibility expands: define credible scenarios, manage variation, decide when an example or a human coach is needed, and maintain the evidence and data controls as models change.</p><p>That opens a path toward maintained practice environments organized around work decisions. It also raises a harder question: what makes a digital interaction educationally trustworthy over time? A realistic face and fluent dialogue cannot answer that. A clear task, appropriate challenge, learner agency, feedback that has been checked, and evidence of subsequent performance can help us answer it.</p><p>Marcus, Live is my first bounded experiment along that path. Its value as a portfolio piece is the connected reasoning—from an operational challenge, to a learning mechanism, to a technology choice, to an evaluation and maintenance plan. The next milestone is evidence strong enough to decide what deserves to scale.</p></div>
    </Chapter>

    <Chapter surface="slate" accent="first-sentence" labelledBy="ml-references-title" id="ml-references">
      <p className="tfs-chn">08 · References &amp; research scope</p>
      <h2 id="ml-references-title" className="tfs-h2">An inspectable evidence trail.</h2>
      <p className="ml-prose">This is a focused narrative review, not a systematic review or a peer-reviewed white paper. It combines foundational simulation and transfer research, recent AI experiments, industry signals and official implementation documentation. Sources were checked on November 2, 2026. Study populations and interventions differ from this pilot; external results are not presented as its outcomes. Abstract-only access is identified below.</p>
      <ol className="ml-sources">{MARCUS_SOURCES.map((source, i) => <li id={'ml-source-' + (i + 1)} key={source.url}><a href={source.url}>{source.title}</a><p className="ml-source-type">{source.type}</p><p>{source.note}</p></li>)}</ol>
      <p className="ml-prose">Correction checked: <a href="https://doi.org/10.1073/pnas.2518204122">Bastani et al., August 2025 affiliation correction</a>. Product implementation examples: <a href="https://github.com/Tavus-Engineering/tavus-examples">Tavus Engineering examples</a>.</p>
      <a className="tfs-pill" href="/work/the-first-sentence/">← Explore the original branching simulation</a>
    </Chapter>
  </article>;
}

const MARCUS_CSS = `
.ml .tfs-title{font-size:clamp(3.4rem,8vw,7rem)}
.ml-hero-image{margin:36px 0 0}
.ml-hero-image img,.ml-build-images img{display:block;width:100%;height:auto;border-radius:var(--inner-r)}
.ml-hero-image figcaption a,.ml-build-images figcaption a{text-underline-offset:3px}
.ml-build-images{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;margin:32px 0}
.ml-build-images figure{margin:0;min-width:0}
@media(max-width:760px){.ml-build-images{grid-template-columns:1fr}}
.ml-abstract{max-width:78ch;border-left:2px solid var(--tfs-orange);padding-left:clamp(18px,3vw,32px);margin:36px 0}
.ml-abstract h2{font:600 1.25rem/1.3 var(--font-display)}
.ml-abstract p,.ml-prose,.ml-prose p{font-size:1.0625rem;line-height:1.8;color:var(--tfs-soft)}
.ml-prose{max-width:78ch;margin-top:28px}
.ml-prose h3{font:600 1.375rem/1.3 var(--font-display);color:var(--tfs-ink);margin-top:32px}
.ml-actions,.ml-contents{display:flex;gap:14px;flex-wrap:wrap;margin-top:28px}
.ml-actions .tfs-btn{line-height:1.3;padding:14px 22px}
.ml-contents{border-top:1px solid var(--tfs-line);padding-top:24px;gap:12px 24px}
.ml-contents a{font:.875rem/1.5 var(--font-mono);text-underline-offset:5px;padding:5px 0}
.ml-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;margin-top:32px}
.ml-card{padding:clamp(20px,3vw,32px);border:1px solid var(--tfs-line);border-radius:var(--inner-r);min-width:0}
.ml-card h3{font:600 1.25rem/1.3 var(--font-display);margin:0 0 12px}
.ml-card p{line-height:1.75;color:var(--tfs-soft);margin-bottom:0}
.ml-cite{font:500 .75rem/1 var(--font-mono);white-space:nowrap;margin-left:4px}
.ml-cite a{text-decoration:underline;text-underline-offset:3px}
.ml-table-wrap{overflow:auto;margin-top:32px;border:1px solid var(--tfs-line);border-radius:var(--inner-r)}
.ml-table{width:100%;border-collapse:collapse;font-size:.9375rem;line-height:1.7;color:var(--tfs-soft)}
.ml-table caption{text-align:left;padding:20px;font-weight:600;color:var(--tfs-ink)}
.ml-table th,.ml-table td{padding:20px;text-align:left;vertical-align:top;border-top:1px solid var(--tfs-line);width:33.33%}
.ml-table th{font:600 .875rem/1.5 var(--font-mono);color:var(--tfs-ink)}
.ml-process{max-width:78ch;padding-left:1.5em;line-height:1.8;display:grid;gap:12px}
.ml-process h3{font:600 1.125rem/1.4 var(--font-display);margin:12px 0 4px}
.ml-process p{color:var(--tfs-soft);margin-top:0}
.ml-status{border:1px solid var(--tfs-line);padding:20px;border-radius:var(--inner-r);line-height:1.8;margin-top:28px;color:var(--tfs-soft)}
.ml-status h3{margin:0 0 12px;font:600 1.125rem/1.4 var(--font-display);color:var(--tfs-ink)}
.ml-status p{margin:0}
.ml-sources{padding-left:1.5em;display:grid;gap:24px;margin:32px 0;max-width:90ch;line-height:1.7}
.ml-sources a{overflow-wrap:anywhere;font-weight:600;text-underline-offset:4px}
.ml-sources p{margin:6px 0 0;color:var(--tfs-soft);font-size:.9375rem}
.ml-sources .ml-source-type{font:.75rem/1.5 var(--font-mono);color:var(--tfs-orange)}
.ml [id]{scroll-margin-top:24px}
@media(max-width:700px){.ml-grid{grid-template-columns:1fr}.ml-table{min-width:660px}.ml .tfs-title{font-size:clamp(2.75rem,12vw,4rem)}}
@media print{.ml{background:white!important;color:black!important}.ml .jiz-chapter{background:white!important;color:black!important;--tfs-ink:#111;--tfs-soft:#222;--tfs-mute:#444;--tfs-line:#bbb;--tfs-orange:#873100;border:0;border-radius:0;margin:0;padding:16px 0;box-shadow:none}.ml .jiz-chapter__inner{max-width:none;padding:0}.ml .tfs-top,.ml .tfs-build-nav,.ml-actions,.ml-contents,#ml-practice,footer{display:none!important}.ml .tfs-h2{font-size:24pt}.ml .tfs-title{font-size:40pt}.ml-grid{display:block}.ml-card{break-inside:avoid;margin:12px 0}.ml-table{min-width:0}.ml-table-wrap{overflow:visible}.ml-table th,.ml-table td{padding:8px}.ml a{color:inherit}.ml-sources a:after{content:' (' attr(href) ')';font-size:9pt;font-weight:400}.ml-cite a{font-size:8pt}}
`;

window.CaseStudyMarcusLiveExports = { CaseStudyMarcusLive, meta: MARCUS_META };
