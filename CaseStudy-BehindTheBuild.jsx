function CaseStudyBehindTheBuild({ onBack, onOpenProject }) {
  const [expandedTicket, setExpandedTicket] = React.useState(null);
  const [expandedExample, setExpandedExample] = React.useState(null);
  const [expandedPhase, setExpandedPhase] = React.useState(null);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const contentRef = React.useRef(null);
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

  React.useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const element = contentRef.current;
      const scrollTop = window.scrollY;
      const elementTop = element.offsetTop;
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;
      const elementScroll = Math.max(0, scrollTop - elementTop + windowHeight);
      const progress = Math.min(100, Math.max(0, (elementScroll / (elementHeight + windowHeight)) * 100));
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTicket = (id) => setExpandedTicket(expandedTicket === id ? null : id);
  const toggleExample = (id) => setExpandedExample(expandedExample === id ? null : id);
  const togglePhase = (id) => setExpandedPhase(expandedPhase === id ? null : id);

  const styles = `
    .jiz-btb-cover {
      position: relative;
      isolation: isolate;
      overflow: hidden;
      width: 100%;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      padding: var(--space-6) var(--space-5);
      background: linear-gradient(135deg, #0b0d10 0%, #1a1f2e 100%);
      border-bottom: 1px solid rgba(120, 200, 180, 0.1);
    }
    .jiz-btb-eyebrow {
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      color: var(--color-accent-secondary);
      text-transform: uppercase;
      margin-bottom: var(--space-4);
    }
    .jiz-btb-headline {
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      font-weight: 700;
      line-height: 1.1;
      color: var(--color-text-primary);
      margin: 0 0 var(--space-3) 0;
      max-width: 90%;
    }
    .jiz-btb-subheadline {
      font-size: clamp(1.25rem, 3.5vw, 1.75rem);
      font-weight: 400;
      color: rgba(255, 255, 255, 0.7);
      margin: 0 0 var(--space-4) 0;
      max-width: 85%;
      line-height: 1.4;
    }
    .jiz-btb-supporting {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.6);
      margin: 0 0 var(--space-6) 0;
      max-width: 80%;
      line-height: 1.6;
    }
    .jiz-btb-status {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-2) var(--space-3);
      background: rgba(120, 200, 180, 0.08);
      border: 1px solid rgba(120, 200, 180, 0.2);
      border-radius: var(--radius-sm);
      font-size: 0.8rem;
      color: var(--color-accent-secondary);
      font-weight: 500;
      margin-bottom: var(--space-8);
    }
    .jiz-btb-status-dot {
      width: 6px;
      height: 6px;
      background: var(--color-accent-secondary);
      border-radius: 50%;
      animation: pulse 2s ease-in-out infinite;
      opacity: 0.8;
    }
    @keyframes pulse {
      0%, 100% { opacity: 0.8; }
      50% { opacity: 1; }
    }
    .jiz-btb-section {
      padding: var(--space-8) var(--space-5);
      border-bottom: 1px solid rgba(120, 200, 180, 0.1);
    }
    .jiz-btb-section-title {
      font-size: clamp(1.75rem, 4vw, 2.5rem);
      font-weight: 700;
      margin: 0 0 var(--space-4) 0;
      color: var(--color-text-primary);
    }
    .jiz-btb-section-subtitle {
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.6);
      margin: 0 0 var(--space-5) 0;
      line-height: 1.6;
    }
    .jiz-btb-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--space-4);
    }
    .jiz-btb-card {
      padding: var(--space-4);
      background: rgba(120, 200, 180, 0.04);
      border: 1px solid rgba(120, 200, 180, 0.15);
      border-radius: var(--radius-sm);
      transition: all 0.2s ease;
    }
    .jiz-btb-card:hover {
      background: rgba(120, 200, 180, 0.08);
      border-color: rgba(120, 200, 180, 0.3);
    }
    .jiz-btb-card-title {
      font-size: 1rem;
      font-weight: 600;
      color: var(--color-text-primary);
      margin-bottom: var(--space-2);
    }
    .jiz-btb-card-text {
      font-size: 0.95rem;
      color: rgba(255, 255, 255, 0.65);
      line-height: 1.5;
      margin: 0;
    }
    .jiz-btb-example {
      margin-bottom: var(--space-3);
      border: 1px solid rgba(120, 200, 180, 0.15);
      border-radius: var(--radius-sm);
      overflow: hidden;
    }
    .jiz-btb-example-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--space-3) var(--space-4);
      background: rgba(120, 200, 180, 0.04);
      cursor: pointer;
      font-weight: 500;
      color: var(--color-text-primary);
      transition: background 0.2s ease;
    }
    .jiz-btb-example-header:hover {
      background: rgba(120, 200, 180, 0.08);
    }
    .jiz-btb-example-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }
    .jiz-btb-example-content.expanded {
      max-height: 500px;
    }
    .jiz-btb-example-text {
      padding: 0;
      margin: var(--space-2) 0;
      font-size: 0.95rem;
      color: rgba(255, 255, 255, 0.65);
      line-height: 1.6;
    }
    .jiz-btb-example-content .jiz-btb-example-text:first-child {
      padding-top: var(--space-4);
      padding-left: var(--space-4);
      padding-right: var(--space-4);
    }
    .jiz-btb-example-content .jiz-btb-example-text:last-child {
      padding-bottom: var(--space-4);
      padding-left: var(--space-4);
      padding-right: var(--space-4);
    }
    @media (max-width: 768px) {
      .jiz-btb-cover {
        padding: var(--space-5) var(--space-3);
      }
      .jiz-btb-section {
        padding: var(--space-6) var(--space-3);
      }
      .jiz-btb-headline {
        max-width: 100%;
      }
      .jiz-btb-subheadline {
        max-width: 100%;
      }
      .jiz-btb-supporting {
        max-width: 100%;
      }
    }
  `;

  return React.createElement(
    'div',
    { ref: contentRef, style: { width: '100%', color: 'var(--color-text-primary)', background: 'var(--color-bg-primary)' } },
    React.createElement('style', null, styles),
    React.createElement('div', { style: { position: 'fixed', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--color-accent-secondary), var(--color-accent-primary))', width: `${scrollProgress}%`, zIndex: 100, transition: reduced ? 'none' : 'width 0.1s ease' } }),
    React.createElement(
      'div',
      { className: 'jiz-btb-cover' },
      React.createElement('div', { className: 'jiz-btb-eyebrow' }, 'CASE STUDY / CREATIVE TECHNOLOGY'),
      React.createElement('h1', { className: 'jiz-btb-headline' }, 'Behind the Build'),
      React.createElement('p', { className: 'jiz-btb-subheadline' }, 'Designing, engineering, and shipping my digital portfolio'),
      React.createElement('p', { className: 'jiz-btb-supporting' }, 'A portfolio redesign became a live digital product—combining narrative strategy, AI-directed production, responsive design, deployment engineering, and production QA.'),
      React.createElement(
        'div',
        { className: 'jiz-btb-status' },
        React.createElement('div', { className: 'jiz-btb-status-dot' }),
        React.createElement('span', null, 'PRODUCTION / LIVE')
      )
    ),
    React.createElement(
      'div',
      { className: 'jiz-btb-section' },
      React.createElement('h2', { className: 'jiz-btb-section-title' }, 'Executive Summary'),
      React.createElement('p', { className: 'jiz-btb-section-subtitle' }, 'I set out to redesign my portfolio but discovered the real work was building a complete digital product. The final experience required experience strategy, narrative architecture, a responsive front-end, AI-orchestrated production, version control, automated deployment, domain migration, and meticulous QA. The project demonstrated that a portfolio platform—not just a visual design—is the most credible evidence of how I think and what I can deliver.')
    ),
    React.createElement(
      'div',
      { className: 'jiz-btb-section' },
      React.createElement('h2', { className: 'jiz-btb-section-title' }, 'Project Snapshot'),
      React.createElement(
        'div',
        { className: 'jiz-btb-grid' },
        React.createElement(
          'div',
          { className: 'jiz-btb-card' },
          React.createElement('div', { className: 'jiz-btb-card-title' }, 'Organization'),
          React.createElement('p', { className: 'jiz-btb-card-text' }, 'Independent Personal Brand Project')
        ),
        React.createElement(
          'div',
          { className: 'jiz-btb-card' },
          React.createElement('div', { className: 'jiz-btb-card-title' }, 'Role'),
          React.createElement('p', { className: 'jiz-btb-card-text' }, 'Experience Designer, Creative Strategist, and AI-Directed Producer')
        ),
        React.createElement(
          'div',
          { className: 'jiz-btb-card' },
          React.createElement('div', { className: 'jiz-btb-card-title' }, 'Audience'),
          React.createElement('p', { className: 'jiz-btb-card-text' }, 'Recruiters, hiring managers, creative leaders, and collaborators')
        ),
        React.createElement(
          'div',
          { className: 'jiz-btb-card' },
          React.createElement('div', { className: 'jiz-btb-card-title' }, 'Technology'),
          React.createElement('p', { className: 'jiz-btb-card-text' }, 'HTML, CSS, JSX, React, Babel, GitHub, Vercel, custom DNS')
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'jiz-btb-section' },
      React.createElement('h2', { className: 'jiz-btb-section-title' }, 'The Challenge'),
      React.createElement(
        'div',
        { className: 'jiz-btb-grid' },
        React.createElement(
          'div',
          { className: 'jiz-btb-card' },
          React.createElement('div', { className: 'jiz-btb-card-title' }, 'Communication'),
          React.createElement('p', { className: 'jiz-btb-card-text' }, 'A conventional portfolio could display outputs but not reveal the quality of thinking behind them.')
        ),
        React.createElement(
          'div',
          { className: 'jiz-btb-card' },
          React.createElement('div', { className: 'jiz-btb-card-title' }, 'Experience'),
          React.createElement('p', { className: 'jiz-btb-card-text' }, 'The site needed to feel differentiated, memorable, interactive, and credible to senior hiring audiences.')
        ),
        React.createElement(
          'div',
          { className: 'jiz-btb-card' },
          React.createElement('div', { className: 'jiz-btb-card-title' }, 'Production'),
          React.createElement('p', { className: 'jiz-btb-card-text' }, 'The experience had to work outside a design environment as a real deployed product across desktop and mobile.')
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'jiz-btb-section' },
      React.createElement('h2', { className: 'jiz-btb-section-title' }, 'The Opportunity'),
      React.createElement('p', { className: 'jiz-btb-section-subtitle' }, 'The portfolio itself became evidence of the work.'),
      React.createElement('p', { style: { fontSize: '1rem', color: 'rgba(255,255,255,0.65)', lineHeight: '1.6', maxWidth: '800px' } }, 'The project became an opportunity to demonstrate systems thinking, learning-experience strategy, product judgment, creative direction, AI orchestration, front-end production, deployment literacy, and iterative QA. Every decision—from narrative architecture to mobile optimization to production debugging—would be visible in the final product.')
    ),
    React.createElement(
      'div',
      { className: 'jiz-btb-section' },
      React.createElement('h2', { className: 'jiz-btb-section-title' }, 'Human-Directed AI Workflow'),
      React.createElement('p', { className: 'jiz-btb-section-subtitle' }, 'AI accelerated production. It did not own the decisions.'),
      React.createElement(
        'div',
        { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-4)', marginBottom: 'var(--space-5)' } },
        React.createElement(
          'div',
          { className: 'jiz-btb-card' },
          React.createElement('div', { className: 'jiz-btb-card-title' }, 'Human Direction'),
          React.createElement('p', { className: 'jiz-btb-card-text', style: { fontSize: '0.85rem' } }, 'Strategic framing, visual judgment, evidence standards, content ownership, final approval')
        ),
        React.createElement(
          'div',
          { className: 'jiz-btb-card' },
          React.createElement('div', { className: 'jiz-btb-card-title' }, 'AI Contribution'),
          React.createElement('p', { className: 'jiz-btb-card-text', style: { fontSize: '0.85rem' } }, 'Ideation, critique, draft generation, code support, troubleshooting, iteration acceleration')
        ),
        React.createElement(
          'div',
          { className: 'jiz-btb-card' },
          React.createElement('div', { className: 'jiz-btb-card-title' }, 'Human Validation'),
          React.createElement('p', { className: 'jiz-btb-card-text', style: { fontSize: '0.85rem' } }, 'Factual review, brand consistency, accessibility, responsive QA, deployment testing, final accountability')
        )
      ),
      React.createElement('h3', { style: { fontSize: '1.1rem', fontWeight: '600', color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)' } }, 'Documented Examples'),
      React.createElement(
        'div',
        { className: 'jiz-btb-example', onClick: () => toggleExample('ex1') },
        React.createElement(
          'div',
          { className: 'jiz-btb-example-header' },
          React.createElement('span', null, 'Example 1: Missing Production Media'),
          React.createElement('span', { style: { color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' } }, expandedExample === 'ex1' ? '−' : '+')
        ),
        React.createElement(
          'div',
          { className: `jiz-btb-example-content ${expandedExample === 'ex1' ? 'expanded' : ''}` },
          React.createElement('p', { className: 'jiz-btb-example-text' }, React.createElement('strong', null, 'Problem: '), 'Logo, hero video, and case-study imagery were missing from the production site.'),
          React.createElement('p', { className: 'jiz-btb-example-text' }, React.createElement('strong', null, 'Diagnosis: '), 'Asset references were written for the original nested project structure, not the deployment environment.'),
          React.createElement('p', { className: 'jiz-btb-example-text' }, React.createElement('strong', null, 'Decision: '), 'Rebased all paths for the production repository and validated local requests.'),
          React.createElement('p', { className: 'jiz-btb-example-text' }, React.createElement('strong', null, 'Result: '), 'Logo, video, and imagery restored across all pages.')
        )
      ),
      React.createElement(
        'div',
        { className: 'jiz-btb-example', onClick: () => toggleExample('ex2') },
        React.createElement(
          'div',
          { className: 'jiz-btb-example-header' },
          React.createElement('span', null, 'Example 2: Visual System Regression'),
          React.createElement('span', { style: { color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' } }, expandedExample === 'ex2' ? '−' : '+')
        ),
        React.createElement(
          'div',
          { className: `jiz-btb-example-content ${expandedExample === 'ex2' ? 'expanded' : ''}` },
          React.createElement('p', { className: 'jiz-btb-example-text' }, React.createElement('strong', null, 'Problem: '), 'After updating asset paths, the site rendered with black text on a dark background and missing typography styles.'),
          React.createElement('p', { className: 'jiz-btb-example-text' }, React.createElement('strong', null, 'Diagnosis: '), 'The CSS bundle was overwritten with an incomplete version during the deployment update.'),
          React.createElement('p', { className: 'jiz-btb-example-text' }, React.createElement('strong', null, 'Decision: '), 'Restored the correct _ds_bundle.js and styles.css from the design-system source.'),
          React.createElement('p', { className: 'jiz-btb-example-text' }, React.createElement('strong', null, 'Result: '), 'Full visual system, typography, and component styling restored.')
        )
      ),
      React.createElement(
        'div',
        { className: 'jiz-btb-example', onClick: () => toggleExample('ex3') },
        React.createElement(
          'div',
          { className: 'jiz-btb-example-header' },
          React.createElement('span', null, 'Example 3: Mobile Hero Layout'),
          React.createElement('span', { style: { color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' } }, expandedExample === 'ex3' ? '−' : '+')
        ),
        React.createElement(
          'div',
          { className: `jiz-btb-example-content ${expandedExample === 'ex3' ? 'expanded' : ''}` },
          React.createElement('p', { className: 'jiz-btb-example-text' }, React.createElement('strong', null, 'Problem: '), 'On mobile, the hero portrait overlapped the CTA, and the headline sat much higher than the supporting copy.'),
          React.createElement('p', { className: 'jiz-btb-example-text' }, React.createElement('strong', null, 'Diagnosis: '), 'No responsive breakpoints existed for screens ≤768px; the desktop layout was uncontrolled on small screens.'),
          React.createElement('p', { className: 'jiz-btb-example-text' }, React.createElement('strong', null, 'Decision: '), 'Added @media breakpoints to reduce hero height, scale portrait down, reposition CTA, and tighten spacing.'),
          React.createElement('p', { className: 'jiz-btb-example-text' }, React.createElement('strong', null, 'Result: '), 'Hero section now appears above the fold on all devices; portrait no longer occludes the value proposition.')
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'jiz-btb-section' },
      React.createElement('h2', { className: 'jiz-btb-section-title' }, 'Key Decisions'),
      React.createElement(
        'div',
        { className: 'jiz-btb-grid' },
        React.createElement(
          'div',
          { className: 'jiz-btb-card' },
          React.createElement('div', { className: 'jiz-btb-card-title' }, '1. Narrative Architecture'),
          React.createElement('p', { className: 'jiz-btb-card-text' }, 'Structure every section as a chapter in the same story—from hero, About, Work, to Contact—so the reader experiences clarity as a continuous journey.')
        ),
        React.createElement(
          'div',
          { className: 'jiz-btb-card' },
          React.createElement('div', { className: 'jiz-btb-card-title' }, '2. Environmental Integration'),
          React.createElement('p', { className: 'jiz-btb-card-text' }, 'Use consistent lighting, gradients, spacing rhythm, and visual hierarchy so transitions feel natural—not like entering a different website.')
        ),
        React.createElement(
          'div',
          { className: 'jiz-btb-card' },
          React.createElement('div', { className: 'jiz-btb-card-title' }, '3. Responsive-First Typography'),
          React.createElement('p', { className: 'jiz-btb-card-text' }, 'Use CSS clamp() to scale headlines and body text fluidly from mobile to desktop—no hard breakpoint jumps.')
        ),
        React.createElement(
          'div',
          { className: 'jiz-btb-card' },
          React.createElement('div', { className: 'jiz-btb-card-title' }, '4. Production as Evidence'),
          React.createElement('p', { className: 'jiz-btb-card-text' }, 'Deploy the portfolio as a real product—not a static design artifact—so visitors experience deployment quality and attention to detail.')
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'jiz-btb-section' },
      React.createElement('h2', { className: 'jiz-btb-section-title' }, 'Deployment & QA'),
      React.createElement(
        'div',
        { className: 'jiz-btb-grid' },
        React.createElement(
          'div',
          { className: 'jiz-btb-card' },
          React.createElement('div', { className: 'jiz-btb-card-title' }, '1. Asset Path Audit'),
          React.createElement('p', { className: 'jiz-btb-card-text' }, 'Verify every image, video, icon, and font loads from the correct path in the deployment environment.')
        ),
        React.createElement(
          'div',
          { className: 'jiz-btb-card' },
          React.createElement('div', { className: 'jiz-btb-card-title' }, '2. Navigation & Routing'),
          React.createElement('p', { className: 'jiz-btb-card-text' }, 'Test browser back/forward, hash routing, direct page access, and internal link navigation.')
        ),
        React.createElement(
          'div',
          { className: 'jiz-btb-card' },
          React.createElement('div', { className: 'jiz-btb-card-title' }, '3. Responsive QA'),
          React.createElement('p', { className: 'jiz-btb-card-text' }, 'Validate layout, typography, touch targets, and media at 1440px, 1024px, 768px, and 390px.')
        ),
        React.createElement(
          'div',
          { className: 'jiz-btb-card' },
          React.createElement('div', { className: 'jiz-btb-card-title' }, '4. Console & Network'),
          React.createElement('p', { className: 'jiz-btb-card-text' }, 'Zero 404s on assets, zero uncaught errors, zero failed CSS/JS requests, no mixed-content warnings.')
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'jiz-btb-section' },
      React.createElement('h2', { className: 'jiz-btb-section-title' }, 'Outcome'),
      React.createElement('p', { className: 'jiz-btb-section-subtitle' }, 'A portfolio that demonstrates production literacy, creative thinking, and human-directed AI collaboration.'),
      React.createElement('p', { style: { fontSize: '1rem', color: 'rgba(255,255,255,0.65)', lineHeight: '1.6', maxWidth: '800px' } }, 'The final site serves as evidence that I can design strategically, implement responsively, debug methodically, and ship with confidence. It is not a design gallery—it is a working digital product that every hiring leader, collaborator, and visitor can interact with and learn from.')
    ),
    React.createElement(
      'div',
      { style: { padding: 'var(--space-8) var(--space-5)', borderTop: '1px solid rgba(120,200,180,0.1)', textAlign: 'center' } },
      React.createElement('h2', { style: { fontSize: '1.5rem', fontWeight: '600', color: 'var(--color-text-primary)', margin: '0 0 var(--space-3) 0' } }, 'Next Project'),
      React.createElement('button', { onClick: () => onOpenProject('Operation: Legacy Unlocked'), style: { padding: 'var(--space-3) var(--space-4)', background: 'var(--color-accent-secondary)', color: 'var(--color-bg-primary)', border: 'none', borderRadius: 'var(--radius-sm)', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', transition: 'background 0.2s ease' } }, 'Explore Operation: Legacy Unlocked')
    )
  );
}

if (typeof window !== 'undefined') {
  window.CaseStudyBehindTheBuildExports = { CaseStudyBehindTheBuild };
}
