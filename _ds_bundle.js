/* @ds-bundle: {"format":4,"namespace":"JIZPortfolioSite_b3ba38","components":[{"name":"ProjectRow","sourcePath":"components/cards/ProjectRow.jsx"},{"name":"MetricCard","sourcePath":"components/cards/ProjectRow.jsx"},{"name":"TestimonialCard","sourcePath":"components/cards/ProjectRow.jsx"},{"name":"ProcessCard","sourcePath":"components/cards/ProjectRow.jsx"},{"name":"ArtifactCard","sourcePath":"components/cards/ProjectRow.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"StatusPill","sourcePath":"components/core/StatusPill.jsx"},{"name":"Chip","sourcePath":"components/core/StatusPill.jsx"},{"name":"Accordion","sourcePath":"components/core/StatusPill.jsx"},{"name":"ProcessTimeline","sourcePath":"components/data/ProcessTimeline.jsx"},{"name":"ProcessStepper","sourcePath":"components/data/ProcessTimeline.jsx"},{"name":"MetricsGrid","sourcePath":"components/data/ProcessTimeline.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Input.jsx"},{"name":"ContactPanel","sourcePath":"components/forms/Input.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/NavBar.jsx"},{"name":"FilmHud","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"archive/root-cleanup/About_v2_CURRENT.jsx":"d57add076c3e","archive/root-cleanup/About_v2_DIRECTOR_CUT_STORY1.jsx":"838ce23a8cfd","archive/root-cleanup/About_v2_FULL_SOURCE.jsx":"371bd13ae44a","archive/root-cleanup/About_v2_POST_P0.jsx":"f85824d870a3","archive/root-cleanup/About_v2_V3.0_FINAL.jsx":"1d369202fcd5","archive/root-cleanup/About_v2_code.jsx":"779ac3bab9c4","archive/root-cleanup/CHECKPOINT_pre-scene02-patch1-the-mind.jsx":"da05051b120e","archive/root-cleanup/Homepage_POST_P0.jsx":"3af613c84fbc","archive/root-cleanup/uploads/image-slot.js":"6530d61bda1c","components/cards/ProjectRow.jsx":"f8b6d7133912","components/core/Button.jsx":"b112977754cc","components/core/StatusPill.jsx":"7011907a4c76","components/data/ProcessTimeline.jsx":"738b08c0a20a","components/forms/Input.jsx":"85836ba06c9c","components/navigation/NavBar.jsx":"10355c37405b","ui_kits/portfolio-website/About_v2.jsx":"e4b930004ad1","ui_kits/portfolio-website/CaseStudy-GuestCRM.jsx":"6675f9ac1f55","ui_kits/portfolio-website/CaseStudy-HotelKey.jsx":"cee3628af45a","ui_kits/portfolio-website/CaseStudy-Legacy.jsx":"64b0d36e13b4","ui_kits/portfolio-website/CaseStudy-Workday.jsx":"9e672f5579a9","ui_kits/portfolio-website/CaseStudyShell.jsx":"8dae2d0a75bf","ui_kits/portfolio-website/Homepage.jsx":"f73926a43757","ui_kits/portfolio-website/archive/About_v2_CHECKPOINT_pre-v3.jsx":"0bd046d9a25e","ui_kits/portfolio-website/archive/About_v2_Fixed.jsx":"9d20c5a8a94f","ui_kits/portfolio-website/archive/phase-1/CaseStudyTemplate.jsx":"60a65d91be34","ui_kits/portfolio-website/archive/phase-1/Pages.jsx":"953fde0707d2","ui_kits/portfolio-website/archive/phase-1/WorkIndex.jsx":"972a107fae20","ui_kits/portfolio-website/image-slot.js":"6530d61bda1c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.JIZPortfolioSite_b3ba38 = window.JIZPortfolioSite_b3ba38 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// archive/root-cleanup/About_v2_CURRENT.jsx
try { (() => {
function AboutV2({
  registerSectionRef,
  onResume,
  onLinkedIn,
  onSelectedWork
}) {
  const sectionRef = React.useRef(null);
  React.useEffect(() => {
    if (registerSectionRef && sectionRef.current) {
      registerSectionRef(sectionRef.current, 'About');
    }
  }, [registerSectionRef]);
  return /*#__PURE__*/React.createElement("section", {
    ref: sectionRef,
    style: {
      padding: 'clamp(80px, 10vw, 140px) var(--container-pad)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(ellipse 1400px 600px at 50% 20%, rgba(115, 224, 255, 0.04) 0%, transparent 60%), radial-gradient(ellipse 900px 400px at 80% 80%, rgba(172, 255, 74, 0.02) 0%, transparent 70%)',
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1400,
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'clamp(140px, 16vw, 200px)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
      color: 'var(--color-text-primary)',
      marginBottom: 40,
      lineHeight: 1.15,
      letterSpacing: '-0.02em'
    }
  }, "How Jonathan thinks."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      fontSize: '1.0625rem',
      lineHeight: 1.8,
      color: 'var(--color-text-secondary)',
      maxWidth: 620,
      marginBottom: 24
    }
  }, "I reveal the patterns beneath complexity and turn them into experiences people can understand, use, and adopt."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      fontSize: '0.9375rem',
      lineHeight: 1.8,
      color: 'var(--color-text-secondary)',
      maxWidth: 620,
      marginBottom: 48
    }
  }, "I begin by mapping the relationship between people, information, systems, and behavior. Before I design content, I design understanding\u2014revealing what matters, where friction exists, and what will move people forward. My work brings together learning strategy, cinematic storytelling, digital experience design, and AI-enabled production to create solutions that are clear, useful, and built for adoption."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'center',
      flexWrap: 'wrap',
      marginBottom: 'clamp(100px, 12vw, 160px)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: 'var(--text-body)',
      fontSize: '0.875rem',
      fontWeight: 500,
      color: 'rgb(255, 255, 255)',
      background: 'var(--color-accent-primary)',
      padding: '12px 24px',
      borderRadius: 'var(--radius-pill)',
      textDecoration: 'none',
      transition: 'all var(--motion-standard) var(--ease-standard)',
      cursor: 'pointer'
    }
  }, "View r\xE9sum\xE9"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: 'var(--text-body)',
      fontSize: '0.875rem',
      fontWeight: 500,
      color: 'var(--color-accent-primary)',
      border: '1px solid rgba(115, 224, 255, 0.3)',
      padding: '11px 23px',
      borderRadius: 'var(--radius-pill)',
      textDecoration: 'none',
      transition: 'all var(--motion-standard) var(--ease-standard)',
      cursor: 'pointer'
    }
  }, "LinkedIn")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      paddingBottom: '56.25%',
      background: 'rgba(0, 0, 0, 0.12)',
      borderRadius: '28px',
      border: '1px solid rgba(115, 224, 255, 0.1)',
      overflow: 'hidden',
      boxShadow: '0 0 80px rgba(115, 224, 255, 0.06), inset 0 0 80px rgba(115, 224, 255, 0.01), 0 60px 160px rgba(0, 0, 0, 0.5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(8, 13, 11, 0.95)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -80,
      left: 0,
      right: 0,
      height: 80,
      background: 'linear-gradient(to bottom, rgba(115, 224, 255, 0.04), transparent)',
      pointerEvents: 'none'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'clamp(160px, 18vw, 240px)',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'clamp(100px, 12vw, 160px)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)',
      fontSize: 'clamp(1.375rem, 3vw, 1.75rem)',
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      margin: '0 0 32px',
      lineHeight: 1.2,
      letterSpacing: '-0.02em'
    }
  }, "What I do."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'clamp(56px, 7vw, 96px)',
      marginBottom: 'clamp(80px, 10vw, 120px)'
    }
  }, [{
    title: 'DESIGN',
    items: ['Learning ecosystems', 'Experience strategy', 'Instructional design', 'Systems thinking', 'Learning architecture']
  }, {
    title: 'BUILD',
    items: ['Articulate 360', 'Camtasia', 'Figma', 'Adobe Creative Cloud', 'AI-enabled tools']
  }, {
    title: 'KNOWN FOR',
    items: ['Systems thinking', 'Clarity in complexity', 'Learning that performs', 'Human-centered design', 'Strategic impact']
  }].map((col, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      paddingRight: i < 2 ? 'clamp(32px, 4vw, 64px)' : 0,
      borderRight: i < 2 ? '1px solid rgba(115, 224, 255, 0.08)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-caption)',
      fontSize: '0.7rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--color-accent-secondary)',
      margin: '0 0 24px',
      fontWeight: 500
    }
  }, col.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, col.items.map((item, j) => /*#__PURE__*/React.createElement("p", {
    key: j,
    style: {
      font: 'var(--text-body)',
      fontSize: '0.9375rem',
      color: 'var(--color-text-secondary)',
      lineHeight: 1.6,
      margin: 0
    }
  }, item))))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)',
      fontSize: 'clamp(1.375rem, 3vw, 1.75rem)',
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      margin: '0 0 32px',
      lineHeight: 1.2,
      letterSpacing: '-0.02em'
    }
  }, "How I work."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(64px, 8vw, 96px)'
    }
  }, [{
    title: 'Clarify',
    copy: 'Reveal the essential problem before designing the solution.'
  }, {
    title: 'Connect',
    copy: 'Align people, systems, information, and behavior into one coherent experience.'
  }, {
    title: 'Transform',
    copy: 'Turn understanding into action, adoption, and measurable movement.'
  }].map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: 'var(--color-accent-primary)',
      marginBottom: 12,
      lineHeight: 1,
      opacity: 0.8
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("h4", {
    style: {
      font: 'var(--text-h4)',
      fontSize: '1.125rem',
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      margin: '0 0 16px',
      lineHeight: 1.2
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      fontSize: '0.9375rem',
      lineHeight: 1.8,
      color: 'var(--color-text-secondary)',
      margin: 0,
      maxWidth: 520
    }
  }, p.copy), i < 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'clamp(48px, 6vw, 72px)',
      height: '1px',
      background: 'rgba(115, 224, 255, 0.06)'
    }
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'clamp(140px, 16vw, 200px)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)',
      fontSize: 'clamp(1.375rem, 3vw, 1.75rem)',
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      margin: '0 0 12px',
      lineHeight: 1.2,
      letterSpacing: '-0.02em'
    }
  }, "The evolution."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      fontSize: '0.9375rem',
      color: 'var(--color-text-secondary)',
      marginBottom: 56,
      lineHeight: 1.6
    }
  }, "How experience shaped the way I solve problems."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 48,
      overflowX: 'auto',
      paddingBottom: 16
    }
  }, [{
    years: '2010–2013',
    role: 'Studio Director',
    org: 'Atlanta International School',
    summary: 'Founded and led the creative studio, launching emerging education technologies and establishing design practice for the school.',
    achievements: ['Founded design studio', 'Launched digital initiatives', 'Led creative team'],
    tech: ['Figma', 'Adobe Creative Suite', 'Web technologies']
  }, {
    years: '2013–2014',
    role: 'Design Systems Lead',
    org: 'Georgia State University',
    summary: 'Developed design infrastructure and learning systems for the university\'s digital transformation initiative.',
    achievements: ['Built design system', 'Unified digital platforms', 'Trained design team'],
    tech: ['Design systems', 'Component architecture', 'Figma']
  }, {
    years: '2014–2016',
    role: 'Graduate Design Researcher',
    org: 'Arizona State University',
    summary: 'Advanced study in design strategy, systems thinking, and human-centered research methodologies.',
    achievements: ['Published research', 'Advanced systems thinking', 'Strategic frameworks'],
    tech: ['Research methods', 'Design thinking', 'Systems analysis']
  }, {
    years: '2016–2019',
    role: 'Senior Learning Strategist',
    org: 'Cox Enterprises',
    summary: 'Transformed enterprise learning systems, designing at scale for 50,000+ employees across multiple business units.',
    achievements: ['Enterprise transformation', 'Scaled learning platforms', 'Strategic impact'],
    tech: ['Articulate 360', 'Camtasia', 'Learning architecture']
  }, {
    years: '2019–2023',
    role: 'Principal Design Architect',
    org: 'IHG Hotels & Resorts',
    summary: 'Led global learning experience redesign for hospitality industry, integrating AI and video-based learning at enterprise scale.',
    achievements: ['Global redesign', 'AI integration', 'Video production'],
    tech: ['AI-enabled content', 'Video production', 'Learning platforms']
  }, {
    years: '2023–Present',
    role: 'Creative Director',
    org: 'Independent Studio',
    summary: 'Founded AI-creative studio, developing next-generation learning experiences and strategic consulting.',
    achievements: ['Studio founding', 'AI research', 'Strategic consulting'],
    tech: ['AI/ML integration', 'Full-stack design', 'Advanced production']
  }].map((m, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    style: {
      flex: '0 0 auto',
      padding: '12px 20px',
      borderRadius: 'var(--radius-pill)',
      background: i === 0 ? 'var(--color-accent-primary)' : 'rgba(115, 224, 255, 0.1)',
      color: i === 0 ? 'rgb(8, 13, 11)' : 'var(--color-text-secondary)',
      border: 'none',
      cursor: 'pointer',
      font: 'var(--text-body)',
      fontSize: '0.875rem',
      fontWeight: 500,
      transition: 'all 0.3s ease',
      whiteSpace: 'nowrap'
    }
  }, m.years))), /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 120,
      padding: 32,
      border: '1px solid rgba(115, 224, 255, 0.1)',
      borderRadius: 12,
      background: 'rgba(115, 224, 255, 0.02)',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 32,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-caption)',
      fontSize: '0.75rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--color-accent-secondary)',
      margin: '0 0 8px',
      opacity: 0.8
    }
  }, "ROLE"), /*#__PURE__*/React.createElement("h4", {
    style: {
      font: 'var(--text-h4)',
      fontSize: '1.125rem',
      color: 'var(--color-text-primary)',
      margin: '0 0 16px'
    }
  }, "Studio Director"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-caption)',
      fontSize: '0.75rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--color-accent-secondary)',
      margin: '0 0 8px',
      marginTop: 16,
      opacity: 0.8
    }
  }, "ORGANIZATION"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      fontSize: '0.9375rem',
      color: 'var(--color-text-secondary)',
      margin: 0
    }
  }, "Atlanta International School")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-caption)',
      fontSize: '0.75rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--color-accent-secondary)',
      margin: '0 0 8px',
      opacity: 0.8
    }
  }, "TIMELINE"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      fontSize: '0.9375rem',
      color: 'var(--color-text-secondary)',
      margin: 0
    }
  }, "2010\u20132013"))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      fontSize: '0.9375rem',
      lineHeight: 1.7,
      color: 'var(--color-text-secondary)',
      margin: '0 0 16px'
    }
  }, "Founded and led the creative studio, launching emerging education technologies and establishing design practice for the school."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 24,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-caption)',
      fontSize: '0.75rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--color-accent-secondary)',
      margin: '0 0 12px',
      opacity: 0.8
    }
  }, "KEY ACHIEVEMENTS"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 16,
      font: 'var(--text-body)',
      fontSize: '0.875rem',
      color: 'var(--color-text-secondary)',
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("li", null, "Founded design studio"), /*#__PURE__*/React.createElement("li", null, "Launched digital initiatives"), /*#__PURE__*/React.createElement("li", null, "Led creative team"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-caption)',
      fontSize: '0.75rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--color-accent-secondary)',
      margin: '0 0 12px',
      opacity: 0.8
    }
  }, "TECHNOLOGIES"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 16,
      font: 'var(--text-body)',
      fontSize: '0.875rem',
      color: 'var(--color-text-secondary)',
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("li", null, "Figma"), /*#__PURE__*/React.createElement("li", null, "Adobe Creative Suite"), /*#__PURE__*/React.createElement("li", null, "Web technologies")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'clamp(100px, 12vw, 160px)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)',
      fontSize: 'clamp(1.375rem, 3vw, 1.75rem)',
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      margin: '0 0 32px',
      lineHeight: 1.2,
      letterSpacing: '-0.02em'
    }
  }, "What I believe."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'clamp(48px, 6vw, 64px)'
    }
  }, [{
    title: 'Intelligence',
    copy: 'I look beneath the obvious to understand how systems, people, and decisions connect.'
  }, {
    title: 'Confidence',
    copy: 'I make clear decisions while remaining open to evidence, feedback, and change.'
  }, {
    title: 'Self-awareness',
    copy: 'I understand how my perspective shapes the work and where collaboration strengthens it.'
  }, {
    title: 'Empathy',
    copy: 'I design for the person who must understand, use, and live with the outcome.'
  }].map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderLeft: '2px solid rgba(115, 224, 255, 0.2)',
      paddingLeft: 'clamp(24px, 3vw, 32px)'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      font: 'var(--text-h4)',
      fontSize: '1rem',
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      margin: '0 0 12px',
      lineHeight: 1.3
    }
  }, b.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      fontSize: '0.875rem',
      lineHeight: 1.7,
      color: 'var(--color-text-secondary)',
      margin: 0
    }
  }, b.copy)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 'clamp(140px, 16vw, 200px)',
      paddingTop: 'clamp(80px, 10vw, 140px)',
      borderTop: '1px solid rgba(115, 224, 255, 0.06)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h2)',
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      color: 'var(--color-text-primary)',
      margin: '0 0 12px',
      lineHeight: 1.2,
      letterSpacing: '-0.02em'
    }
  }, "Understanding changes", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-accent-primary)'
    }
  }, "everything.")))));
}
if (typeof window !== 'undefined') {
  window.AboutV2 = AboutV2;
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "archive/root-cleanup/About_v2_CURRENT.jsx", error: String((e && e.message) || e) }); }

// archive/root-cleanup/About_v2_DIRECTOR_CUT_STORY1.jsx
try { (() => {
function AboutV2({
  onResume,
  onLinkedIn,
  onSelectedWork
}) {
  const sectionRef = React.useRef(null);
  const railRef = React.useRef(null);
  const nodeRefs = React.useRef([]);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const modalTriggerRef = React.useRef(null);
  const modalCloseRef = React.useRef(null);
  const methodRef = React.useRef(null);
  const methodResumeTimerRef = React.useRef(null);
  const methodAdvanceTimerRef = React.useRef(null);
  const [activeMethodIndex, setActiveMethodIndex] = React.useState(0);
  const [methodVisible, setMethodVisible] = React.useState(false);
  const [methodPaused, setMethodPaused] = React.useState(false);
  const LINKEDIN_URL = 'https://www.linkedin.com/in/jonathanzamarripa/';
  const RESUME_URL = 'https://elearningportfolio-jz.s3.us-east-1.amazonaws.com/Public_Career_Overview.pdf';
  const THINKING_ENGINE_SRC = './assets/video/about-me-thinking-engine.mp4';
  const methodStages = [{
    id: 'observe',
    label: '01',
    title: 'Observe',
    copy: 'See the full system before defining the solution.'
  }, {
    id: 'understand',
    label: '02',
    title: 'Understand',
    copy: 'Reveal the patterns, friction, behaviors, and decisions shaping the experience.'
  }, {
    id: 'design',
    label: '03',
    title: 'Design',
    copy: 'Create the structure, story, and interaction that make understanding possible.'
  }, {
    id: 'build',
    label: '04',
    title: 'Build',
    copy: 'Produce the learning, media, tools, and systems required for adoption.'
  }, {
    id: 'transform',
    label: '05',
    title: 'Transform',
    copy: 'Turn clarity into action, confidence, and measurable movement.'
  }];
  const capabilityGroups = [{
    title: 'DESIGN',
    subtitle: 'What I architect',
    items: ['Learning systems', 'Experience strategy', 'Behavior change', 'Information architecture', 'Human-centered design']
  }, {
    title: 'BUILD',
    subtitle: 'What I create',
    items: ['Articulate Storyline', 'Camtasia', 'Adobe Creative Cloud', 'Figma', 'Motion and video', 'AI production workflows']
  }, {
    title: 'KNOWN FOR',
    subtitle: 'What differentiates the work',
    items: ['Systems thinking', 'Creative direction', 'Enterprise learning', 'Rapid prototyping', 'Translating complexity into clarity']
  }];
  const careerEntries = [{
    id: 'foundation',
    stage: 'Foundation',
    years: 'Eight-year foundation',
    organization: 'K–12 STEAM & Robotics',
    title: 'Classroom and Program Leadership',
    summary: 'Built a practical understanding of how people learn by teaching STEAM, leading a robotics program, and turning limited resources into meaningful experiences.',
    highlights: ['Coached a regional championship robotics team', 'Secured more than $20,000 in program funding', 'Developed a learner-first leadership practice'],
    capabilities: ['Facilitation', 'Program leadership', 'STEAM learning'],
    type: 'role'
  }, {
    id: 'gstate',
    stage: 'Storytelling',
    years: '2009',
    organization: 'Georgia State University',
    title: 'B.A., Journalism — Film & Video',
    summary: 'Built the cinematic and editorial foundation that now shapes the way complex ideas are framed, paced, and made memorable.',
    highlights: ['Film and video concentration', 'Narrative structure and visual communication', 'Production craft grounded in journalism'],
    capabilities: ['Storytelling', 'Video production', 'Editorial thinking'],
    type: 'education'
  }, {
    id: 'ais',
    stage: 'Systems',
    years: '2019–2024',
    organization: 'Atlanta International School',
    title: 'EdTech & Innovation Coach / Strategist',
    summary: 'Founded a digital learning function without an existing playbook, connecting instructional design, systems, content, and analytics into one practice.',
    highlights: ['Led an organization-wide LMS migration', 'Achieved 95% adoption and 4.9/5 satisfaction', 'Built analytics and needs-assessment infrastructure'],
    capabilities: ['Learning systems', 'Change leadership', 'Analytics'],
    type: 'role'
  }, {
    id: 'asu',
    stage: 'Research',
    years: '2023',
    organization: 'Arizona State University',
    title: 'M.Ed., Instructional Design & Technology',
    summary: 'Formalized a systems-based learning practice through advanced study in instructional design, technology, evaluation, and human-centered learning.',
    highlights: ['Graduated Summa Cum Laude', 'Connected learning science to production practice', 'Expanded expertise in evaluation and design strategy'],
    capabilities: ['Learning science', 'Research', 'Evaluation'],
    type: 'education'
  }, {
    id: 'cox',
    stage: 'Enterprise',
    years: '2025',
    organization: 'Cox Enterprises',
    title: 'Learning Experience Designer',
    summary: 'Designed enterprise learning experiences and AI-assisted production workflows for leadership development, systems adoption, and organizational change.',
    highlights: ['Accelerated content development by 40%', 'Supported a Workday Learn launch reaching 98% Q1 adoption', 'Designed a narrative-driven enterprise escape room'],
    capabilities: ['Enterprise learning', 'AI workflows', 'Storyline'],
    type: 'role'
  }, {
    id: 'ihg',
    stage: 'Scale',
    years: '2025–2026',
    organization: 'IHG Hotels & Resorts',
    title: 'Creative Content Specialist / Developer',
    summary: 'Combined learning strategy, cinematic production, and AI-enabled workflows to create global technology communication and onboarding experiences.',
    highlights: ['Produced enterprise onboarding and adoption content', 'Built repeatable AI-enabled production workflows', 'Partnered across Product, Engineering, UX, and Cybersecurity'],
    capabilities: ['Creative direction', 'Video', 'AI-native production'],
    type: 'current'
  }, {
    id: 'next',
    stage: 'What\'s Next',
    years: 'Future chapter',
    organization: 'The next organization or collaboration',
    title: 'Learning Experience Strategist · Filmmaker · AI-Native Producer',
    summary: 'Bringing learning science, cinematic craft, and AI-native production together to help organizations move from complexity to confident action.',
    highlights: ['Enterprise learning strategy', 'Cinematic learning systems', 'AI-enabled creative production'],
    capabilities: ['Strategy', 'Direction', 'Transformation'],
    type: 'future'
  }];
  const beliefs = [{
    title: 'Intelligence',
    copy: 'I look beneath the obvious to understand how systems, people, and decisions connect.'
  }, {
    title: 'Confidence',
    copy: 'I make clear decisions while remaining open to evidence, feedback, and change.'
  }, {
    title: 'Self-awareness',
    copy: 'I understand how my perspective shapes the work and where collaboration strengthens it.'
  }, {
    title: 'Empathy',
    copy: 'I design for the person who must understand, use, and live with the outcome.'
  }];
  React.useEffect(() => {
    if (!sectionRef.current || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.06
    });
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  React.useEffect(() => {
    const node = methodRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setMethodVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => setMethodVisible(entry.isIntersecting), {
      threshold: 0.3
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  React.useEffect(() => {
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    clearTimeout(methodAdvanceTimerRef.current);
    if (!methodVisible || methodPaused || reduced) return undefined;
    const delay = activeMethodIndex === methodStages.length - 1 ? 4000 : 2400;
    methodAdvanceTimerRef.current = setTimeout(() => {
      setActiveMethodIndex(index => (index + 1) % methodStages.length);
    }, delay);
    return () => clearTimeout(methodAdvanceTimerRef.current);
  }, [methodVisible, methodPaused, activeMethodIndex]);
  React.useEffect(() => () => {
    clearTimeout(methodResumeTimerRef.current);
    clearTimeout(methodAdvanceTimerRef.current);
  }, []);
  const selectMethodStage = index => {
    clearTimeout(methodResumeTimerRef.current);
    setActiveMethodIndex(index);
    setMethodPaused(true);
    methodResumeTimerRef.current = setTimeout(() => setMethodPaused(false), 8000);
  };
  React.useEffect(() => {
    if (!modalOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = event => {
      if (event.key === 'Escape') setModalOpen(false);
      if (event.key !== 'Tab') return;
      const modal = document.querySelector('[data-thinking-modal]');
      const focusables = modal ? Array.from(modal.querySelectorAll('button,[href],[tabindex]:not([tabindex="-1"])')).filter(el => !el.disabled) : [];
      if (!focusables.length) return;
      const first = focusables[0],
        last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    requestAnimationFrame(() => modalCloseRef.current?.focus());
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      requestAnimationFrame(() => modalTriggerRef.current?.focus());
    };
  }, [modalOpen]);
  const selectCareerEntry = React.useCallback((index, behavior = 'smooth') => {
    const bounded = Math.max(0, Math.min(index, careerEntries.length - 1));
    setActiveIndex(bounded);
    const viewport = railRef.current;
    const node = nodeRefs.current[bounded];
    if (viewport && node) {
      const targetLeft = node.offsetLeft - viewport.clientWidth / 2 + node.offsetWidth / 2;
      viewport.scrollTo({
        left: Math.max(0, targetLeft),
        behavior
      });
    }
  }, []);
  const handleRailKeyDown = event => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      selectCareerEntry(activeIndex + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      selectCareerEntry(activeIndex - 1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      selectCareerEntry(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      selectCareerEntry(careerEntries.length - 1);
    }
  };
  const activeCareer = careerEntries[activeIndex];
  return /*#__PURE__*/React.createElement("section", {
    ref: sectionRef,
    className: `jiz-about-master ${isVisible ? 'is-visible' : ''}`,
    "data-about-v2": "ready",
    "aria-labelledby": "about-master-title"
  }, /*#__PURE__*/React.createElement("style", null, `
        .jiz-about-master {
          --about-max: 1360px;
          position: relative;
          overflow: hidden;
          padding: clamp(78px, 8vw, 118px) var(--container-pad) clamp(112px, 12vw, 176px);
          color: var(--color-text-primary);
          background:
            radial-gradient(circle at 50% 13%, rgba(100, 225, 255, 0.09), transparent 34%),
            radial-gradient(circle at 78% 29%, rgba(198, 242, 58, 0.045), transparent 27%),
            linear-gradient(180deg, rgba(8, 13, 16, 0.12) 0%, #0b0d10 22%, #0b0d10 100%);
        }

        .jiz-about-master::before,
        .jiz-about-master::after {
          content: '';
          position: absolute;
          pointer-events: none;
          border-radius: 50%;
          filter: blur(80px);
        }

        .jiz-about-master::before {
          width: 40vw;
          height: 34vw;
          right: -12vw;
          top: 8%;
          background: rgba(100, 225, 255, 0.055);
        }

        .jiz-about-master::after {
          width: 28vw;
          height: 25vw;
          left: -12vw;
          top: 27%;
          background: rgba(198, 242, 58, 0.025);
        }

        .jiz-about-inner {
          position: relative;
          z-index: 1;
          width: min(100%, var(--about-max));
          margin: 0 auto;
        }

        .jiz-scene-opening {
          text-align: center;
        }

        .jiz-eyebrow,
        .jiz-meta {
          font: var(--text-eyebrow);
          letter-spacing: var(--tracking-eyebrow);
          text-transform: uppercase;
        }

        .jiz-eyebrow {
          margin: 0 0 18px;
          color: var(--color-accent-secondary);
        }

        .jiz-opening-title {
          max-width: 1000px;
          margin: 0 auto;
          font: var(--text-h1);
          font-size: clamp(3rem, 6.6vw, 6.4rem);
          line-height: 0.96;
          letter-spacing: -0.055em;
          text-wrap: balance;
        }

        .jiz-opening-thesis {
          max-width: 840px;
          margin: 26px auto 0;
          color: var(--color-text-primary);
          font: var(--text-body-lg);
          font-size: clamp(1.02rem, 1.7vw, 1.28rem);
          line-height: 1.62;
        }

        .jiz-opening-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .jiz-action {
          min-height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 23px;
          border-radius: var(--radius-pill);
          font: var(--text-button);
          text-decoration: none;
          transition:
            transform var(--motion-fast) var(--ease-standard),
            border-color var(--motion-fast) var(--ease-standard),
            background var(--motion-fast) var(--ease-standard);
        }

        .jiz-action:hover { transform: translateY(-2px); }
        .jiz-action:focus-visible,
        .jiz-career-control:focus-visible,
        .jiz-career-node:focus-visible {
          outline: 2px solid var(--color-accent-primary);
          outline-offset: 4px;
        }

        .jiz-action-primary {
          background: var(--color-accent-primary);
          color: #0b0d10;
        }

        .jiz-action-secondary {
          border: 1px solid rgba(100, 225, 255, 0.28);
          background: rgba(255, 255, 255, 0.015);
          color: var(--color-text-primary);
        }

        .jiz-engine-shell {
          position: relative;
          width: min(92vw, 1240px);
          margin: clamp(48px, 6vw, 76px) auto 0;
          isolation: isolate;
        }

        .jiz-engine-shell::before {
          content: '';
          position: absolute;
          z-index: -2;
          inset: -28%;
          background:
            radial-gradient(circle at 50% 45%, rgba(100, 225, 255, 0.35), transparent 48%),
            radial-gradient(circle at 72% 28%, rgba(198, 242, 58, 0.16), transparent 35%);
          filter: blur(72px);
          opacity: 0.82;
        }

        .jiz-engine-trigger { position: relative; display: block; width: 100%; padding: 0; border: 0; background: transparent; color: inherit; cursor: zoom-in; border-radius: clamp(18px,2vw,28px); }
        .jiz-engine-trigger:focus-visible { outline: 2px solid var(--color-accent-primary); outline-offset: 6px; }
        .jiz-engine-open-cue { position: absolute; right: 22px; bottom: 18px; z-index: 3; padding: 9px 13px; border-radius: 999px; background: rgba(8,13,16,.72); border: 1px solid rgba(100,225,255,.28); color: var(--color-text-primary); font: var(--text-caption); backdrop-filter: blur(10px); transition: border-color .25s ease, box-shadow .25s ease, transform .25s ease; }
        .jiz-engine-trigger:hover .jiz-engine-open-cue, .jiz-engine-trigger:focus-visible .jiz-engine-open-cue { border-color: rgba(198,242,58,.65); box-shadow: 0 0 26px rgba(100,225,255,.18); transform: translateY(-2px); }
        .jiz-engine-stage {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #080d10;
          border-radius: clamp(18px, 2vw, 28px);
          box-shadow: 0 8px 32px rgba(100, 225, 255, 0.12), 0 48px 120px rgba(0, 0, 0, 0.52);
          -webkit-mask-image: radial-gradient(ellipse 101% 103% at 50% 50%, #000 72%, rgba(0,0,0,.92) 86%, transparent 100%);
          mask-image: radial-gradient(ellipse 101% 103% at 50% 50%, #000 72%, rgba(0,0,0,.92) 86%, transparent 100%);
        }

        .jiz-engine-stage::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 50% 50%, transparent 54%, rgba(8, 13, 16, 0.18) 78%, rgba(8, 13, 16, 0.64) 100%);
        }

        .jiz-engine-video {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain;
          background: #080d10;
        }

        .jiz-engine-reflection {
          width: 76%;
          height: 36px;
          margin: 0 auto 0;
          background: linear-gradient(180deg, rgba(100, 225, 255, 0.08), transparent);
          filter: blur(14px);
          opacity: 0.35;
          pointer-events: none;
        }

        .jiz-engine-caption {
          max-width: 880px;
          margin: 28px auto 0;
          padding: clamp(28px, 4vw, 42px);
          text-align: left;
          border: 1px solid rgba(100, 225, 255, 0.14);
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(100, 225, 255, 0.04), rgba(198, 242, 58, 0.02));
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 12px 48px rgba(0, 0, 0, 0.16);
          backdrop-filter: blur(8px);
        }

        .jiz-engine-caption strong {
          display: block;
          color: var(--color-accent-secondary);
          font: var(--text-hud);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 700;
          font-size: 0.65rem;
          margin-bottom: 10px;
        }

        .jiz-engine-caption span {
          display: block;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-top: 6px;
        }

        .jiz-opening-copy {
          display: none;
        }

        .jiz-opening-copy p {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: clamp(0.98rem, 1.4vw, 1.08rem);
          line-height: 1.78;
        }

        .jiz-movement {
          margin-top: clamp(112px, 13vw, 172px);
        }

        .jiz-movement-heading {
          max-width: 760px;
          margin-bottom: clamp(40px, 5vw, 62px);
        }

        .jiz-movement-title {
          margin: 0;
          font: var(--text-h2);
          letter-spacing: -0.04em;
        }

        .jiz-movement-copy {
          max-width: 650px;
          margin: 17px 0 0;
          color: var(--color-text-secondary);
          font: var(--text-body-lg);
        }

        .jiz-method-wrap { position: relative; }
        .jiz-method-progress { position:absolute; top:24px; left:4%; height:2px; z-index:1; background: linear-gradient(90deg,var(--color-accent-secondary),var(--color-accent-primary)); transition: width 700ms var(--ease-enter); pointer-events:none; }
        .jiz-method-path {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: clamp(18px, 2.5vw, 34px);
        }

        .jiz-method-path::before {
          content: '';
          position: absolute;
          top: 24px;
          left: 4%;
          right: 4%;
          height: 1px;
          background: linear-gradient(90deg, rgba(100,225,255,.12), rgba(100,225,255,.6), rgba(198,242,58,.72));
        }

        .jiz-method-button { appearance:none; border:0; padding:0; background:transparent; color:inherit; text-align:left; cursor:pointer; border-radius:14px; }
        .jiz-method-button:focus-visible { outline:2px solid var(--color-accent-primary); outline-offset:6px; }
        .jiz-method-stage {
          position: relative;
          padding-top: 54px;
        }

        .jiz-method-node {
          position: absolute;
          top: 16px;
          left: 0;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid rgba(100,225,255,.75);
          background: #0b0d10;
          box-shadow: 0 0 0 5px rgba(100,225,255,.05);
        }

        .jiz-method-stage:last-child .jiz-method-node {
          border-color: var(--color-accent-primary);
          background: var(--color-accent-primary);
          box-shadow: 0 0 0 6px rgba(198,242,58,.08);
        }

        .jiz-method-stage h4 {
          margin: 0 0 11px;
          font: var(--text-h3);
          font-size: clamp(1.08rem, 1.8vw, 1.42rem);
        }

        .jiz-method-stage p:last-child {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: 0.94rem;
        }

        .jiz-method-label {
          margin: 0 0 12px;
          color: var(--color-accent-secondary);
        }

        .jiz-capabilities {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(34px, 5vw, 72px);
          margin-top: clamp(58px, 7vw, 88px);
          padding-top: clamp(40px, 5vw, 62px);
          border: 1px solid rgba(100,225,255,.12);
          border-radius: 22px;
          padding: clamp(34px,4vw,50px);
          background: linear-gradient(135deg,rgba(8,13,16,.72),rgba(100,225,255,.06));
          box-shadow: inset 0 1px 0 rgba(255,255,255,.03), 0 30px 80px rgba(0,0,0,.22);
        }

        .jiz-capability + .jiz-capability {
          border-left: 1px solid rgba(100,225,255,.08);
          padding-left: clamp(28px, 4vw, 52px);
        }

        .jiz-capability h4 {
          margin: 0;
          color: var(--color-accent-secondary);
        }

        .jiz-capability > p {
          margin: 9px 0 22px;
          color: var(--color-text-muted);
          font: var(--text-caption);
        }

        .jiz-capability ul {
          list-style: none;
          display: grid;
          gap: 12px;
          margin: 0;
          padding: 0;
        }

        .jiz-capability li {
          position: relative;
          padding-left: 15px;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: 0.94rem;
        }

        .jiz-capability li::before {
          content: '';
          position: absolute;
          left: 0;
          top: .7em;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(100,225,255,.72);
        }

        .jiz-career-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 26px;
          margin-bottom: 34px;
        }

        .jiz-career-controls {
          display: flex;
          gap: 10px;
        }

        .jiz-career-control {
          min-width: 52px;
          min-height: 52px;
          padding: 0 18px;
          border-radius: 50%;
          border: 1px solid rgba(100,225,255,.18);
          background: rgba(255,255,255,.016);
          color: var(--color-text-primary);
          cursor: pointer;
        }

        .jiz-career-control:disabled {
          opacity: .28;
          cursor: default;
        }

        .jiz-career-helper { display:flex; justify-content:space-between; align-items:center; gap:20px; margin: 18px 0 8px; color:var(--color-text-muted); font:var(--text-caption); }
        .jiz-career-rail-shell { position:relative; }
        .jiz-career-rail-shell::before,.jiz-career-rail-shell::after { content:''; position:absolute; top:0; bottom:0; width:54px; z-index:3; pointer-events:none; }
        .jiz-career-rail-shell::before { left:0; background:linear-gradient(90deg,#0b0d10,transparent); }
        .jiz-career-rail-shell::after { right:0; background:linear-gradient(270deg,#0b0d10,transparent); }
        .jiz-career-viewport {
          overflow-x: auto;
          overscroll-behavior-inline: contain;
          scroll-snap-type: x mandatory;
          padding: 28px 0 22px;
          scrollbar-width: thin;
          scrollbar-color: rgba(100,225,255,.2) transparent;
        }

        .jiz-career-track {
          position: relative;
          display: flex;
          min-width: max-content;
          gap: clamp(28px, 4vw, 62px);
          padding: 0 clamp(16px, 4vw, 58px);
        }

        .jiz-career-track::before {
          content: '';
          position: absolute;
          left: 30px;
          right: 30px;
          top: 32px;
          height: 1px;
          background: linear-gradient(90deg, rgba(100,225,255,.18), rgba(100,225,255,.48), rgba(198,242,58,.48));
        }

        .jiz-career-node {
          position: relative;
          width: clamp(154px, 15vw, 210px);
          padding: 0;
          border: 0;
          background: transparent;
          color: inherit;
          text-align: left;
          cursor: pointer;
          scroll-snap-align: center;
        }

        .jiz-career-dot {
          position: relative;
          z-index: 1;
          display: block;
          width: 18px;
          height: 18px;
          margin: 0 0 25px;
          border-radius: 50%;
          border: 1px solid rgba(100,225,255,.65);
          background: #0b0d10;
          box-shadow: 0 0 0 6px rgba(100,225,255,.045);
          transition: transform var(--motion-standard) var(--ease-enter), background var(--motion-standard) var(--ease-enter), box-shadow var(--motion-standard) var(--ease-enter);
        }

        .jiz-career-node[data-type='education'] .jiz-career-dot {
          border-color: var(--color-accent-secondary);
        }

        .jiz-career-node.is-active .jiz-career-dot {
          transform: scale(1.28);
          border-color: var(--color-accent-primary);
          background: var(--color-accent-primary);
          box-shadow: 0 0 0 8px rgba(198,242,58,.08), 0 0 30px rgba(198,242,58,.16);
        }

        .jiz-career-stage {
          display: block;
          margin-bottom: 8px;
          color: var(--color-text-primary);
          font: var(--text-h3);
          font-size: 1rem;
        }

        .jiz-career-years,
        .jiz-career-org {
          display: block;
          color: var(--color-text-muted);
          font: var(--text-caption);
        }

        .jiz-career-org {
          margin-top: 8px;
          color: var(--color-text-secondary);
        }

        .jiz-career-detail {
          display: grid;
          grid-template-columns: minmax(0,.9fr) minmax(0,1.25fr);
          gap: clamp(34px,5vw,72px);
          margin-top: 36px;
          min-height: clamp(310px,32vw,390px);
          padding: clamp(28px,4vw,50px);
          border: 1px solid rgba(100,225,255,.1);
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, rgba(100,225,255,.035), rgba(255,255,255,.012));
          box-shadow: inset 0 1px 0 rgba(255,255,255,.035);
        }

        .jiz-career-detail h4 {
          margin: 0;
          font: var(--text-h2);
          font-size: clamp(1.55rem,3vw,2.45rem);
          letter-spacing: -.035em;
        }

        .jiz-career-org-detail {
          margin: 10px 0 0;
          color: var(--color-accent-secondary);
          font: var(--text-body-lg);
        }

        .jiz-career-summary {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-body);
        }

        .jiz-career-detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          margin-top: 26px;
        }

        .jiz-career-detail-grid h5 {
          margin: 0 0 12px;
          color: var(--color-text-muted);
        }

        .jiz-career-detail-grid ul {
          margin: 0;
          padding-left: 18px;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: .93rem;
        }

        .jiz-beliefs {
          display: grid;
          grid-template-columns: repeat(4,minmax(0,1fr));
          margin-top: clamp(76px,9vw,108px);
          padding: clamp(34px,4vw,52px) 0;
          border: 1px solid rgba(100,225,255,.12);
          border-radius:22px;
          padding:clamp(34px,4vw,52px);
          background:linear-gradient(135deg,rgba(8,13,16,.72),rgba(100,225,255,.055),rgba(198,242,58,.025));
        }

        .jiz-belief {
          padding: 0 clamp(22px,3vw,40px);
        }

        .jiz-belief:first-child { padding-left: 0; }
        .jiz-belief:last-child { padding-right: 0; }

        .jiz-belief + .jiz-belief {
          border-left: 1px solid rgba(100,225,255,.08);
        }

        .jiz-belief h4 {
          margin: 0 0 11px;
          font: var(--text-h3);
          font-size: 1.04rem;
        }

        .jiz-belief p {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: .91rem;
        }

        .jiz-scene-transition {
          margin-top: clamp(112px,13vw,168px);
          padding: clamp(38px,5vw,64px) 0 24px;
          text-align: center;
          background: radial-gradient(circle at 50% 80%, rgba(198,242,58,.035), transparent 34%);
        }

        .jiz-scene-transition h3 {
          margin: 0;
          font: var(--text-h1);
          font-size: clamp(2.25rem,4.8vw,4.4rem);
          line-height: 1.02;
          letter-spacing: -.045em;
        }

        .jiz-scene-transition h3 span { color: var(--color-accent-primary); }

        .jiz-scene-transition p {
          margin: 20px auto 0;
          color: var(--color-text-secondary);
          font: var(--text-body-lg);
        }

        .jiz-reveal {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 720ms var(--ease-enter), transform 720ms var(--ease-enter);
        }

        .jiz-about-master.is-visible .jiz-reveal {
          opacity: 1;
          transform: none;
        }

        @media (max-width: 980px) {
          .jiz-engine-caption { text-align: left; }
          .jiz-method-path { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 34px; }
          .jiz-method-path::before { display: none; }
          .jiz-method-stage { padding: 26px 0 0 28px; border-top: 1px solid rgba(100,225,255,.11); }
          .jiz-method-node { top: 18px; left: 0; }
          .jiz-capabilities { grid-template-columns: 1fr; }
          .jiz-capability + .jiz-capability { padding: 34px 0 0; border-left: 0; border-top: 1px solid rgba(100,225,255,.08); }
          .jiz-career-detail { grid-template-columns: 1fr; }
          .jiz-beliefs { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 34px 0; }
          .jiz-belief:nth-child(3) { border-left: 0; padding-left: 0; }
        }

        @media (max-width: 620px) {
          .jiz-about-master { padding-inline: max(20px,var(--container-pad)); }
          .jiz-opening-title { font-size: clamp(2.55rem,14vw,3.8rem); }
          .jiz-engine-shell { width: 100%; }
          .jiz-method-path { grid-template-columns: 1fr; }
          .jiz-career-header { display: block; }
          .jiz-career-controls { margin-top: 24px; }
          .jiz-career-detail-grid { grid-template-columns: 1fr; }
          .jiz-beliefs { grid-template-columns: 1fr; }
          .jiz-belief,
          .jiz-belief:first-child,
          .jiz-belief:last-child { padding: 24px 0; }
          .jiz-belief + .jiz-belief,
          .jiz-belief:nth-child(3) { border-left: 0; border-top: 1px solid rgba(100,225,255,.08); }
        }

        @media (prefers-reduced-motion: reduce) {
          .jiz-about-master *,
          .jiz-about-master *::before,
          .jiz-about-master *::after {
            animation: none !important;
            transition-duration: .01ms !important;
            scroll-behavior: auto !important;
          }
          .jiz-reveal { opacity: 1; transform: none; }
        }
      `), /*#__PURE__*/React.createElement("div", {
    className: "jiz-about-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-scene-opening"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-reveal"
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-eyebrow"
  }, "ABOUT / THE MIND"), /*#__PURE__*/React.createElement("h2", {
    id: "about-master-title",
    className: "jiz-opening-title"
  }, "How Jonathan thinks."), /*#__PURE__*/React.createElement("p", {
    className: "jiz-opening-thesis"
  }, "I reveal the patterns beneath complexity and turn them into experiences people can understand, use, and adopt.")), /*#__PURE__*/React.createElement("div", {
    className: "jiz-engine-shell jiz-reveal"
  }, /*#__PURE__*/React.createElement("button", {
    ref: modalTriggerRef,
    type: "button",
    className: "jiz-engine-trigger",
    onClick: () => setModalOpen(true),
    "aria-label": "Open Thinking Engine visualization in expanded view"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-engine-stage"
  }, /*#__PURE__*/React.createElement("video", {
    className: "jiz-engine-video",
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    preload: "metadata",
    "aria-label": "Thinking Engine visualization showing complexity becoming clarity"
  }, /*#__PURE__*/React.createElement("source", {
    src: THINKING_ENGINE_SRC,
    type: "video/mp4"
  }), "Your browser does not support the Thinking Engine video."), /*#__PURE__*/React.createElement("span", {
    className: "jiz-engine-open-cue"
  }, "Open visualization \u2197"))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-engine-reflection",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "jiz-engine-caption"
  }, /*#__PURE__*/React.createElement("strong", null, "Operating System"), /*#__PURE__*/React.createElement("span", null, "I begin by mapping the relationship between people, information, systems, and behavior. Before I design content, I design understanding\u2014revealing what matters, where friction exists, and what will move people forward. My work brings together learning strategy, cinematic storytelling, digital experience design, and AI-enabled production to create solutions that are clear, useful, and built for adoption."))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-movement"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-movement-heading jiz-reveal"
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-eyebrow"
  }, "THE METHOD"), /*#__PURE__*/React.createElement("h3", {
    className: "jiz-movement-title"
  }, "How thought becomes action."), /*#__PURE__*/React.createElement("p", {
    className: "jiz-movement-copy"
  }, "A connected practice for moving from ambiguity to experiences people can understand and use.")), /*#__PURE__*/React.createElement("div", {
    ref: methodRef,
    className: "jiz-method-wrap jiz-reveal",
    "data-method-autoplay": "enabled",
    "data-active-method-index": activeMethodIndex,
    onMouseEnter: () => setMethodPaused(true),
    onMouseLeave: () => setMethodPaused(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-method-progress",
    "aria-hidden": "true",
    style: {
      width: `${activeMethodIndex / (methodStages.length - 1) * 92}%`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "jiz-method-path",
    "aria-label": "Jonathan's five-stage methodology"
  }, methodStages.map((stage, index) => /*#__PURE__*/React.createElement("button", {
    key: stage.id,
    type: "button",
    className: "jiz-method-button",
    "data-method-stage": stage.id,
    "data-method-index": index,
    "data-active": index === activeMethodIndex ? "true" : "false",
    "aria-pressed": index === activeMethodIndex,
    onClick: () => selectMethodStage(index),
    onFocus: () => setMethodPaused(true),
    onBlur: () => setMethodPaused(false)
  }, /*#__PURE__*/React.createElement("article", {
    className: "jiz-method-stage"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jiz-method-node",
    "aria-hidden": "true",
    style: {
      borderColor: index === activeMethodIndex ? 'var(--color-accent-primary)' : index < activeMethodIndex ? 'var(--color-accent-secondary)' : 'rgba(100,225,255,.3)',
      background: index === activeMethodIndex ? 'var(--color-accent-primary)' : index < activeMethodIndex ? 'var(--color-accent-secondary)' : '#0b0d10',
      boxShadow: index === activeMethodIndex ? '0 0 0 7px rgba(198,242,58,.09),0 0 28px rgba(198,242,58,.18)' : '0 0 0 5px rgba(100,225,255,.05)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "jiz-method-label jiz-meta"
  }, stage.label), /*#__PURE__*/React.createElement("h4", {
    style: {
      color: index === activeMethodIndex ? 'var(--color-text-primary)' : undefined
    }
  }, stage.title), /*#__PURE__*/React.createElement("p", null, stage.copy))))), /*#__PURE__*/React.createElement("span", {
    className: "sr-only",
    role: "status",
    "aria-live": "polite",
    "data-method-status": true
  }, `Active method stage: ${methodStages[activeMethodIndex].title}`)), /*#__PURE__*/React.createElement("div", {
    className: "jiz-capabilities jiz-reveal"
  }, capabilityGroups.map(group => /*#__PURE__*/React.createElement("section", {
    className: "jiz-capability",
    key: group.title
  }, /*#__PURE__*/React.createElement("h4", {
    className: "jiz-meta"
  }, group.title), /*#__PURE__*/React.createElement("p", null, group.subtitle), /*#__PURE__*/React.createElement("ul", null, group.items.map(item => /*#__PURE__*/React.createElement("li", {
    key: item
  }, item))))))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-movement"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-header jiz-reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-movement-heading",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-eyebrow"
  }, "THE JOURNEY"), /*#__PURE__*/React.createElement("h3", {
    className: "jiz-movement-title"
  }, "Built through experience."), /*#__PURE__*/React.createElement("p", {
    className: "jiz-movement-copy"
  }, "Explore how learning, systems, technology, and storytelling shaped the practice.")), /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-controls",
    "aria-label": "Career journey controls"
  }, /*#__PURE__*/React.createElement("button", {
    className: "jiz-career-control",
    type: "button",
    "aria-label": "Previous career milestone",
    disabled: activeIndex === 0,
    onClick: () => selectCareerEntry(activeIndex - 1)
  }, "\u2190 Previous"), /*#__PURE__*/React.createElement("button", {
    className: "jiz-career-control",
    type: "button",
    "aria-label": "Next career milestone",
    disabled: activeIndex === careerEntries.length - 1,
    onClick: () => selectCareerEntry(activeIndex + 1)
  }, "Next \u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-helper",
    "data-career-progress": true
  }, /*#__PURE__*/React.createElement("span", null, "Use the arrows, swipe, or select a milestone to explore."), /*#__PURE__*/React.createElement("strong", null, activeIndex + 1, " of ", careerEntries.length)), /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-rail-shell"
  }, /*#__PURE__*/React.createElement("div", {
    ref: railRef,
    className: "jiz-career-viewport jiz-reveal",
    tabIndex: "0",
    role: "region",
    "aria-label": "Interactive career journey. Use left and right arrow keys to explore.",
    onKeyDown: handleRailKeyDown
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-track"
  }, careerEntries.map((entry, index) => /*#__PURE__*/React.createElement("button", {
    key: entry.id,
    ref: element => {
      nodeRefs.current[index] = element;
    },
    className: `jiz-career-node ${activeIndex === index ? 'is-active' : ''}`,
    "data-career-milestone": entry.id,
    "data-career-index": index,
    "data-active": activeIndex === index ? 'true' : 'false',
    "data-type": entry.type,
    type: "button",
    "aria-pressed": activeIndex === index,
    onClick: () => selectCareerEntry(index)
  }, /*#__PURE__*/React.createElement("span", {
    className: "jiz-career-dot",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "jiz-career-stage"
  }, entry.stage), /*#__PURE__*/React.createElement("span", {
    className: "jiz-career-years"
  }, entry.years), /*#__PURE__*/React.createElement("span", {
    className: "jiz-career-org"
  }, entry.organization)))))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-detail jiz-reveal",
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "jiz-eyebrow"
  }, activeCareer.years), /*#__PURE__*/React.createElement("h4", null, activeCareer.title), /*#__PURE__*/React.createElement("p", {
    className: "jiz-career-org-detail"
  }, activeCareer.organization)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "jiz-career-summary"
  }, activeCareer.summary), /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-detail-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "jiz-meta"
  }, "SELECTED IMPACT"), /*#__PURE__*/React.createElement("ul", null, activeCareer.highlights.map(item => /*#__PURE__*/React.createElement("li", {
    key: item
  }, item)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "jiz-meta"
  }, "CAPABILITIES"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--color-text-secondary)',
      font: 'var(--text-caption)'
    }
  }, activeCareer.capabilities.join(' · ')))))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-beliefs jiz-reveal",
    "aria-label": "Core beliefs"
  }, beliefs.map(belief => /*#__PURE__*/React.createElement("article", {
    className: "jiz-belief",
    key: belief.title
  }, /*#__PURE__*/React.createElement("h4", null, belief.title), /*#__PURE__*/React.createElement("p", null, belief.copy))))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-scene-transition jiz-reveal"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-body-lg)',
      color: 'var(--color-text-secondary)'
    }
  }, "Here's what that understanding created."))), modalOpen && /*#__PURE__*/React.createElement("div", {
    "data-thinking-modal": true,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Thinking Engine expanded visualization",
    onMouseDown: event => {
      if (event.target === event.currentTarget) setModalOpen(false);
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      display: 'grid',
      placeItems: 'center',
      padding: 'clamp(18px,3vw,44px)',
      background: 'rgba(4,7,9,.93)',
      backdropFilter: 'blur(12px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(94vw,1500px)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    ref: modalCloseRef,
    type: "button",
    onClick: () => setModalOpen(false),
    "aria-label": "Close expanded visualization",
    style: {
      position: 'absolute',
      right: 0,
      top: -58,
      width: 48,
      height: 48,
      borderRadius: '50%',
      border: '1px solid rgba(255,255,255,.24)',
      background: 'rgba(8,13,16,.8)',
      color: '#fff',
      fontSize: 22,
      cursor: 'pointer'
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/9',
      borderRadius: 22,
      overflow: 'hidden',
      boxShadow: '0 40px 120px rgba(0,0,0,.65),0 0 90px rgba(100,225,255,.15)'
    }
  }, /*#__PURE__*/React.createElement("video", {
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    controls: true,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      display: 'block',
      background: '#080d10'
    }
  }, /*#__PURE__*/React.createElement("source", {
    src: THINKING_ENGINE_SRC,
    type: "video/mp4"
  }))))));
}
if (typeof window !== 'undefined') {
  window.AboutV2 = AboutV2;
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "archive/root-cleanup/About_v2_DIRECTOR_CUT_STORY1.jsx", error: String((e && e.message) || e) }); }

// archive/root-cleanup/About_v2_FULL_SOURCE.jsx
try { (() => {
function AboutV2() {
  const sectionRef = React.useRef(null);
  const railRef = React.useRef(null);
  const nodeRefs = React.useRef([]);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const videoRef = React.useRef(null);
  const [videoReady, setVideoReady] = React.useState(false);
  const [videoPlaying, setVideoPlaying] = React.useState(false);
  const [videoError, setVideoError] = React.useState(false);
  const [videoPlaybackError, setVideoPlaybackError] = React.useState(false);
  const [reducedMotion, setReducedMotion] = React.useState(false);
  const methodRef = React.useRef(null);
  const methodResumeTimerRef = React.useRef(null);
  const methodResumeAtRef = React.useRef(0);
  const methodAdvanceTimerRef = React.useRef(null);
  const [activeMethodIndex, setActiveMethodIndex] = React.useState(0);
  const [methodVisible, setMethodVisible] = React.useState(false);
  const [methodPaused, setMethodPaused] = React.useState(false);
  const THINKING_ENGINE_SRC = './assets/video/Man_thinking_strategic_intelligent.mp4';
  const methodStages = [{
    id: 'observe',
    label: '01',
    title: 'Observe',
    copy: 'See the full system before defining the solution.'
  }, {
    id: 'understand',
    label: '02',
    title: 'Understand',
    copy: 'Reveal the patterns, friction, behaviors, and decisions shaping the experience.'
  }, {
    id: 'design',
    label: '03',
    title: 'Design',
    copy: 'Create the structure, story, and interaction that make understanding possible.'
  }, {
    id: 'build',
    label: '04',
    title: 'Build',
    copy: 'Produce the learning, media, tools, and systems required for adoption.'
  }, {
    id: 'transform',
    label: '05',
    title: 'Transform',
    copy: 'Turn clarity into action, confidence, and measurable movement.'
  }];
  const capabilityGroups = [{
    title: 'DESIGN',
    subtitle: 'What I architect',
    items: ['Learning systems', 'Experience strategy', 'Behavior change', 'Information architecture', 'Human-centered design']
  }, {
    title: 'BUILD',
    subtitle: 'What I create',
    items: ['Articulate Storyline', 'Camtasia', 'Adobe Creative Cloud', 'Figma', 'Motion and video', 'AI production workflows']
  }, {
    title: 'KNOWN FOR',
    subtitle: 'What differentiates the work',
    items: ['Systems thinking', 'Creative direction', 'Enterprise learning', 'Rapid prototyping', 'Translating complexity into clarity']
  }];
  const careerEntries = [{
    id: 'gstate',
    stage: 'Storytelling',
    years: '2005–2009',
    organization: 'Georgia State University',
    title: 'B.A., Journalism — Film & Video',
    summary: 'Developed the editorial and cinematic foundation that continues to shape how I frame complexity, structure narratives, and make ideas memorable.',
    highlights: ['Studied journalism, film, and video production', 'Built fluency in visual storytelling and narrative structure', 'Learned to investigate before interpreting'],
    capabilities: ['Storytelling', 'Video production', 'Editorial thinking'],
    type: 'education'
  }, {
    id: 'americorps',
    stage: 'Service',
    years: '2009–2011',
    organization: 'AmeriCorps · Georgia State · Outward Bound',
    title: 'Service, Facilitation, and Youth Development',
    summary: 'Translated academic preparation into service—supporting young people, facilitating experiential learning, and discovering how trust, challenge, and reflection shape growth.',
    highlights: ['Completed two years of service', 'Supported experiential and community-based learning', 'Built a human-centered facilitation practice'],
    capabilities: ['Service leadership', 'Facilitation', 'Experiential learning'],
    type: 'service'
  }, {
    id: 'k12',
    stage: 'Education',
    years: '2011–2019',
    organization: 'K–12 Education · STEAM & Robotics',
    title: 'Classroom and Program Leadership',
    summary: 'Built a practical understanding of how people learn by teaching STEAM, leading robotics programs, and turning limited resources into meaningful experiences.',
    highlights: ['Coached a regional championship robotics team', 'Secured more than $20,000 in program funding', 'Developed a learner-first leadership practice'],
    capabilities: ['Facilitation', 'Program leadership', 'STEAM learning'],
    type: 'role'
  }, {
    id: 'ais',
    stage: 'Systems',
    years: '2019–2024',
    organization: 'Atlanta International School',
    title: 'EdTech & Innovation Coach / Strategist',
    summary: 'Connected instructional design, technology, content, analytics, and change leadership into an organization-wide learning and innovation practice.',
    highlights: ['Led an organization-wide LMS migration', 'Achieved 95% adoption and 4.9/5 satisfaction', 'Built analytics and needs-assessment infrastructure'],
    capabilities: ['Learning systems', 'Change leadership', 'Analytics'],
    type: 'role'
  }, {
    id: 'asu',
    stage: 'Research',
    years: '2023',
    organization: 'Arizona State University',
    title: 'M.Ed., Instructional Design & Technology',
    summary: 'Formalized a systems-based learning practice through advanced study in instructional design, technology, evaluation, and human-centered learning.',
    highlights: ['Graduated Summa Cum Laude', 'Connected learning science to production practice', 'Expanded expertise in evaluation and design strategy'],
    capabilities: ['Learning science', 'Research', 'Evaluation'],
    type: 'education'
  }, {
    id: 'cox',
    stage: 'Enterprise',
    years: '2025',
    organization: 'Cox Enterprises',
    title: 'Learning Experience Designer',
    summary: 'Designed enterprise learning experiences and AI-assisted production workflows for leadership development, systems adoption, and organizational change.',
    highlights: ['Accelerated content development by 40%', 'Supported a Workday Learn launch reaching 98% Q1 adoption', 'Designed a narrative-driven enterprise escape room'],
    capabilities: ['Enterprise learning', 'AI workflows', 'Storyline'],
    type: 'role'
  }, {
    id: 'ihg',
    stage: 'Scale',
    years: '2025–2026',
    organization: 'IHG Hotels & Resorts',
    title: 'Creative Content Specialist / Developer',
    summary: 'Combined learning strategy, cinematic production, and AI-enabled workflows to create global technology communication and onboarding experiences.',
    highlights: ['Produced enterprise onboarding and adoption content', 'Built repeatable AI-enabled production workflows', 'Partnered across Product, Engineering, UX, and Cybersecurity'],
    capabilities: ['Creative direction', 'Video', 'AI-native production'],
    type: 'current'
  }];
  const beliefs = [{
    title: 'Intelligence',
    copy: 'I look beneath the obvious to understand how systems, people, and decisions connect.'
  }, {
    title: 'Confidence',
    copy: 'I make clear decisions while remaining open to evidence, feedback, and change.'
  }, {
    title: 'Self-awareness',
    copy: 'I understand how my perspective shapes the work and where collaboration strengthens it.'
  }, {
    title: 'Empathy',
    copy: 'I design for the person who must understand, use, and live with the outcome.'
  }];
  React.useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return undefined;
    }
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    update();
    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', update);
      return () => media.removeEventListener('change', update);
    }
    if (typeof media.addListener === 'function') {
      media.addListener(update);
    }
    return () => {
      if (typeof media.removeListener === 'function') {
        media.removeListener(update);
      }
    };
  }, []);
  React.useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoReady || videoError) return;
    if (reducedMotion) {
      video.pause();
      video.currentTime = 0;
      return;
    }
    video.play().catch(() => {
      // Autoplay can be blocked by browser policy. Keep the manual Play control available.
      setVideoPlaybackError(false);
    });
  }, [reducedMotion, videoReady, videoError]);
  const toggleThinkingEngine = async () => {
    const video = videoRef.current;
    if (!video || videoError || !videoReady) return;
    setVideoPlaybackError(false);
    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch (error) {
      setVideoPlaybackError(true);
    }
  };
  React.useEffect(() => {
    if (!sectionRef.current || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.06
    });
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  React.useEffect(() => {
    const node = methodRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setMethodVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => setMethodVisible(entry.isIntersecting), {
      threshold: 0.3
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  React.useEffect(() => {
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    clearTimeout(methodAdvanceTimerRef.current);
    if (!methodVisible || methodPaused || reduced) return undefined;
    const delay = activeMethodIndex === methodStages.length - 1 ? 4000 : 2400;
    methodAdvanceTimerRef.current = setTimeout(() => {
      setActiveMethodIndex(index => (index + 1) % methodStages.length);
    }, delay);
    return () => clearTimeout(methodAdvanceTimerRef.current);
  }, [methodVisible, methodPaused, activeMethodIndex]);
  React.useEffect(() => () => {
    clearTimeout(methodResumeTimerRef.current);
    clearTimeout(methodAdvanceTimerRef.current);
  }, []);
  const pauseMethodFor = (duration = 8000) => {
    clearTimeout(methodResumeTimerRef.current);
    methodResumeAtRef.current = Date.now() + duration;
    setMethodPaused(true);
    methodResumeTimerRef.current = setTimeout(() => {
      methodResumeAtRef.current = 0;
      setMethodPaused(false);
    }, duration);
  };
  const resumeMethodWhenEligible = () => {
    const remaining = methodResumeAtRef.current - Date.now();
    if (remaining > 0) {
      clearTimeout(methodResumeTimerRef.current);
      methodResumeTimerRef.current = setTimeout(() => {
        methodResumeAtRef.current = 0;
        setMethodPaused(false);
      }, remaining);
      return;
    }
    setMethodPaused(false);
  };
  const selectMethodStage = index => {
    setActiveMethodIndex(index);
    pauseMethodFor(8000);
  };
  const selectCareerEntry = React.useCallback((index, behavior = 'smooth') => {
    const bounded = Math.max(0, Math.min(index, careerEntries.length - 1));
    setActiveIndex(bounded);
    const viewport = railRef.current;
    const node = nodeRefs.current[bounded];
    if (viewport && node) {
      const targetLeft = node.offsetLeft - viewport.clientWidth / 2 + node.offsetWidth / 2;
      viewport.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: reducedMotion ? 'auto' : behavior
      });
    }
  }, [reducedMotion]);
  const handleRailKeyDown = event => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      selectCareerEntry(activeIndex + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      selectCareerEntry(activeIndex - 1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      selectCareerEntry(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      selectCareerEntry(careerEntries.length - 1);
    }
  };
  const activeCareer = careerEntries[activeIndex];
  return /*#__PURE__*/React.createElement("section", {
    ref: sectionRef,
    className: 'jiz-about-master ' + (isVisible ? 'is-visible' : ''),
    "data-about-v2": "ready",
    "aria-labelledby": "about-master-title"
  }, /*#__PURE__*/React.createElement("style", null, `
        .jiz-about-master {
          --about-max: 1360px;
          position: relative;
          overflow: hidden;
          padding: clamp(78px, 8vw, 118px) var(--container-pad) clamp(112px, 12vw, 176px);
          color: var(--color-text-primary);
          background:
            radial-gradient(circle at 50% 13%, rgba(100, 225, 255, 0.09), transparent 34%),
            radial-gradient(circle at 78% 29%, rgba(198, 242, 58, 0.045), transparent 27%),
            linear-gradient(180deg, rgba(8, 13, 16, 0.12) 0%, #0b0d10 22%, #0b0d10 100%);
        }

        .jiz-about-master::before,
        .jiz-about-master::after {
          content: '';
          position: absolute;
          pointer-events: none;
          border-radius: var(--radius-pill);
          filter: blur(80px);
        }

        .jiz-about-master::before {
          width: 40vw;
          height: 34vw;
          right: -12vw;
          top: 8%;
          background: rgba(100, 225, 255, 0.055);
        }

        .jiz-about-master::after {
          width: 28vw;
          height: 25vw;
          left: -12vw;
          top: 27%;
          background: rgba(198, 242, 58, 0.025);
        }

        .jiz-about-inner {
          position: relative;
          z-index: 1;
          width: min(100%, var(--about-max));
          margin: 0 auto;
        }

        .jiz-scene-opening {
          text-align: center;
        }

        .jiz-eyebrow,
        .jiz-meta {
          font: var(--text-eyebrow);
          letter-spacing: var(--tracking-eyebrow);
          text-transform: uppercase;
        }

        .jiz-eyebrow {
          margin: 0 0 18px;
          color: var(--color-accent-secondary);
        }

        .jiz-opening-title {
          max-width: 1000px;
          margin: 0 auto;
          font: var(--text-h1);
          font-size: clamp(3rem, 6.6vw, 6.4rem);
          line-height: 0.96;
          letter-spacing: -0.055em;
          text-wrap: balance;
        }

        .jiz-opening-thesis {
          max-width: 840px;
          margin: 26px auto 0;
          color: var(--color-text-primary);
          font: var(--text-body-lg);
          font-size: clamp(1.02rem, 1.7vw, 1.28rem);
          line-height: 1.62;
        }


        .jiz-engine-shell {
          position: relative;
          width: min(96vw, 1540px);
          margin: clamp(50px, 6vw, 82px) auto 0;
          isolation: isolate;
        }

        .jiz-engine-shell::before {
          content: '';
          position: absolute;
          z-index: -2;
          inset: -18% -12%;
          pointer-events: none;
          background:
            radial-gradient(
              circle at 48% 48%,
              rgba(100, 225, 255, 0.2),
              transparent 52%
            ),
            radial-gradient(
              circle at 74% 34%,
              rgba(198, 242, 58, 0.1),
              transparent 36%
            );
          filter: blur(78px);
          opacity: 0.82;
        }

        .jiz-engine-shell::after {
          content: '';
          position: absolute;
          z-index: -1;
          left: 12%;
          right: 12%;
          bottom: -34px;
          height: 76px;
          pointer-events: none;
          border-radius: 50%;
          background:
            radial-gradient(
              ellipse,
              rgba(100, 225, 255, 0.1),
              transparent 68%
            );
          filter: blur(28px);
          opacity: 0.62;
        }

        .jiz-engine-stage {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border: 1px solid rgba(100, 225, 255, 0.12);
          border-radius: clamp(20px, 2vw, 30px);
          background: #06090b;
          box-shadow:
            0 34px 100px rgba(0, 0, 0, 0.46),
            0 0 88px rgba(100, 225, 255, 0.055);
        }

        .jiz-engine-stage::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background:
            linear-gradient(
              180deg,
              rgba(5, 8, 10, 0.04),
              transparent 24%,
              transparent 72%,
              rgba(5, 8, 10, 0.18)
            ),
            radial-gradient(
              circle at 50% 50%,
              transparent 58%,
              rgba(5, 8, 10, 0.13) 82%,
              rgba(5, 8, 10, 0.32) 100%
            );
        }

        .jiz-engine-video {
          position: relative;
          z-index: 1;
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
          background: #06090b;
          object-fit: contain;
          object-position: center;
        }

        .jiz-engine-control {
          position: absolute;
          right: 18px;
          bottom: 17px;
          z-index: 4;
          min-width: 94px;
          min-height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 17px;
          border: 1px solid rgba(100, 225, 255, 0.24);
          border-radius: var(--radius-pill);
          background: rgba(5, 9, 11, 0.72);
          color: var(--color-text-primary);
          font: var(--text-caption);
          cursor: pointer;
          opacity: 0;
          transform: translateY(6px);
          backdrop-filter: blur(14px);
          transition:
            opacity var(--motion-fast) var(--ease-standard),
            transform var(--motion-fast) var(--ease-standard),
            border-color var(--motion-fast) var(--ease-standard),
            box-shadow var(--motion-fast) var(--ease-standard);
        }

        .jiz-engine-stage:hover .jiz-engine-control,
        .jiz-engine-stage:focus-within .jiz-engine-control {
          opacity: 1;
          transform: translateY(0);
        }

        .jiz-engine-control:hover {
          border-color: rgba(198, 242, 58, 0.58);
          box-shadow: 0 0 24px rgba(198, 242, 58, 0.12);
        }

        .jiz-engine-control:focus-visible {
          opacity: 1;
          transform: none;
          outline: 2px solid var(--color-accent-primary);
          outline-offset: 3px;
        }

        .jiz-engine-control:disabled {
          opacity: 0.38;
          cursor: default;
        }

        .jiz-engine-playback-note {
          position: absolute;
          left: 18px;
          bottom: 18px;
          z-index: 4;
          max-width: min(64%, 520px);
          margin: 0;
          padding: 9px 12px;
          border: 1px solid rgba(255, 190, 92, 0.24);
          border-radius: 12px;
          background: rgba(5, 9, 11, 0.78);
          color: var(--color-text-secondary);
          font: var(--text-caption);
          backdrop-filter: blur(12px);
        }

        @media (hover: none), (pointer: coarse) {
          .jiz-engine-control {
            opacity: 1;
            transform: none;
          }
        }

        .jiz-engine-state {
          position: absolute;
          inset: 0;
          z-index: 3;
          display: grid;
          place-items: center;
          padding: 28px;
          background:
            radial-gradient(
              circle at center,
              rgba(15, 29, 34, 0.86),
              rgba(5, 8, 10, 0.96)
            );
          color: var(--color-text-secondary);
          text-align: center;
          font: var(--text-body);
        }

        .jiz-engine-loader {
          display: grid;
          justify-items: center;
          gap: 16px;
        }

        .jiz-engine-loader::before {
          content: '';
          width: 34px;
          height: 34px;
          border: 2px solid rgba(100, 225, 255, 0.18);
          border-top-color: var(--color-accent-secondary);
          border-radius: 50%;
          animation: jiz-engine-spin 900ms linear infinite;
        }

        @keyframes jiz-engine-spin {
          to {
            transform: rotate(360deg);
          }
        }

        .jiz-engine-caption {
          position: relative;
          max-width: 980px;
          margin: clamp(30px, 4vw, 46px) auto 0;
          padding: clamp(27px, 3.5vw, 40px);
          overflow: hidden;
          border-top: 1px solid rgba(100, 225, 255, 0.13);
          border-bottom: 1px solid rgba(100, 225, 255, 0.08);
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(100, 225, 255, 0.025) 22%,
              rgba(198, 242, 58, 0.018) 78%,
              transparent
            );
          text-align: left;
        }

        .jiz-engine-caption::before {
          content: '';
          position: absolute;
          left: 0;
          top: 28px;
          bottom: 28px;
          width: 2px;
          border-radius: 999px;
          background:
            linear-gradient(
              180deg,
              var(--color-accent-secondary),
              var(--color-accent-primary)
            );
          box-shadow: 0 0 18px rgba(100, 225, 255, 0.18);
        }

        .jiz-engine-caption strong {
          display: block;
          margin: 0 0 12px;
          padding-left: 16px;
          color: var(--color-accent-secondary);
          font: var(--text-hud);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .jiz-engine-caption span {
          display: block;
          margin: 0;
          padding-left: 16px;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: clamp(0.95rem, 1.25vw, 1.04rem);
          line-height: 1.72;
        }

        .jiz-opening-copy {
          display: none;
        }

        .jiz-opening-copy p {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: clamp(0.98rem, 1.4vw, 1.08rem);
          line-height: 1.78;
        }

        .jiz-movement {
          margin-top: clamp(112px, 13vw, 172px);
        }

        .jiz-movement-heading {
          max-width: 760px;
          margin-bottom: clamp(40px, 5vw, 62px);
        }

        .jiz-movement-title {
          margin: 0;
          font: var(--text-h2);
          letter-spacing: -0.04em;
        }

        .jiz-movement-copy {
          max-width: 650px;
          margin: 17px 0 0;
          color: var(--color-text-secondary);
          font: var(--text-body-lg);
        }

        .jiz-method-wrap { position: relative; }
        .jiz-method-progress { position:absolute; top:24px; left:4%; height:2px; z-index:1; background: linear-gradient(90deg,var(--color-accent-secondary),var(--color-accent-primary)); transition: width 700ms var(--ease-enter); pointer-events:none; }
        .jiz-method-path {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: clamp(18px, 2.5vw, 34px);
        }

        .jiz-method-path::before {
          content: '';
          position: absolute;
          top: 24px;
          left: 4%;
          right: 4%;
          height: 1px;
          background: linear-gradient(90deg, rgba(100,225,255,.12), rgba(100,225,255,.6), rgba(198,242,58,.72));
        }

        .jiz-method-button { appearance:none; border:0; padding:0; background:transparent; color:inherit; text-align:left; cursor:pointer; border-radius:14px; }
        .jiz-method-button:focus-visible { outline:2px solid var(--color-accent-primary); outline-offset:6px; }
        .jiz-method-stage {
          position: relative;
          padding-top: 54px;
        }

        .jiz-method-node {
          position: absolute;
          top: 16px;
          left: 0;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid rgba(100,225,255,.75);
          background: #0b0d10;
          box-shadow: 0 0 0 5px rgba(100,225,255,.05);
        }

        .jiz-method-button[data-active='true'] .jiz-method-node {
          animation: jiz-method-pulse 2.2s ease-in-out infinite;
        }

        .jiz-method-button[data-active='true'] h4 {
          color: var(--color-text-primary);
        }

        @keyframes jiz-method-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.12); }
        }

        .jiz-method-stage h4 {
          margin: 0 0 11px;
          font: var(--text-h3);
          font-size: clamp(1.08rem, 1.8vw, 1.42rem);
        }

        .jiz-method-stage p:last-child {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: 0.94rem;
        }

        .jiz-method-label {
          margin: 0 0 12px;
          color: var(--color-accent-secondary);
        }

        .jiz-capabilities {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(34px, 5vw, 72px);
          margin-top: clamp(58px, 7vw, 88px);
          padding-top: clamp(40px, 5vw, 62px);
          border: 1px solid rgba(100,225,255,.12);
          border-radius: 22px;
          padding: clamp(34px,4vw,50px);
          background: linear-gradient(135deg,rgba(8,13,16,.72),rgba(100,225,255,.06));
          box-shadow: inset 0 1px 0 rgba(255,255,255,.03), 0 30px 80px rgba(0,0,0,.22);
        }

        .jiz-capability + .jiz-capability {
          border-left: 1px solid rgba(100,225,255,.08);
          padding-left: clamp(28px, 4vw, 52px);
        }

        .jiz-capability h4 {
          margin: 0;
          color: var(--color-accent-secondary);
        }

        .jiz-capability > p {
          margin: 9px 0 22px;
          color: var(--color-text-muted);
          font: var(--text-caption);
        }

        .jiz-capability ul {
          list-style: none;
          display: grid;
          gap: 12px;
          margin: 0;
          padding: 0;
        }

        .jiz-capability li {
          position: relative;
          padding-left: 15px;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: 0.94rem;
        }

        .jiz-capability li::before {
          content: '';
          position: absolute;
          left: 0;
          top: .7em;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(100,225,255,.72);
        }

        .jiz-career-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 26px;
          margin-bottom: 34px;
        }

        .jiz-career-controls {
          display: flex;
          gap: 10px;
        }

        .jiz-career-control {
          min-width: 52px;
          min-height: 52px;
          padding: 0 18px;
          border-radius: 50%;
          border: 1px solid rgba(100,225,255,.18);
          background: rgba(255,255,255,.016);
          color: var(--color-text-primary);
          cursor: pointer;
        }

        .jiz-career-control {
          transition:
            transform var(--motion-fast) var(--ease-standard),
            border-color var(--motion-fast) var(--ease-standard),
            background var(--motion-fast) var(--ease-standard);
        }

        .jiz-career-control:hover:not(:disabled) {
          transform: translateY(-1px);
          border-color: rgba(198,242,58,.42);
          background: rgba(198,242,58,.04);
        }

        .jiz-career-control:focus-visible,
        .jiz-career-node:focus-visible {
          outline: 2px solid var(--color-accent-primary);
          outline-offset: 4px;
        }

        .jiz-career-control:disabled {
          opacity: .28;
          cursor: default;
        }

        .jiz-career-helper { display:flex; justify-content:space-between; align-items:center; gap:20px; margin: 18px 0 8px; color:var(--color-text-muted); font:var(--text-caption); }
        .jiz-career-rail-shell { position:relative; }
        .jiz-career-rail-shell::before,.jiz-career-rail-shell::after { content:''; position:absolute; top:0; bottom:0; width:54px; z-index:3; pointer-events:none; }
        .jiz-career-rail-shell::before { left:0; background:linear-gradient(90deg,#0b0d10,transparent); }
        .jiz-career-rail-shell::after { right:0; background:linear-gradient(270deg,#0b0d10,transparent); }
        .jiz-career-viewport {
          overflow-x: auto;
          overscroll-behavior-inline: contain;
          scroll-snap-type: x mandatory;
          padding: 28px 0 22px;
          scrollbar-width: thin;
          scrollbar-color: rgba(100,225,255,.2) transparent;
        }

        .jiz-career-track {
          position: relative;
          display: flex;
          min-width: max-content;
          gap: clamp(28px, 4vw, 62px);
          padding: 0 clamp(16px, 4vw, 58px);
        }

        .jiz-career-track::before {
          content: '';
          position: absolute;
          left: 30px;
          right: 30px;
          top: 32px;
          height: 1px;
          background: linear-gradient(90deg, rgba(100,225,255,.18), rgba(100,225,255,.48), rgba(198,242,58,.48));
        }

        .jiz-career-node {
          position: relative;
          width: clamp(154px, 15vw, 210px);
          padding: 0;
          border: 0;
          background: transparent;
          color: inherit;
          text-align: left;
          cursor: pointer;
          scroll-snap-align: center;
        }

        .jiz-career-dot {
          position: relative;
          z-index: 1;
          display: block;
          width: 18px;
          height: 18px;
          margin: 0 0 25px;
          border-radius: 50%;
          border: 1px solid rgba(100,225,255,.65);
          background: #0b0d10;
          box-shadow: 0 0 0 6px rgba(100,225,255,.045);
          transition: transform var(--motion-standard) var(--ease-enter), background var(--motion-standard) var(--ease-enter), box-shadow var(--motion-standard) var(--ease-enter);
        }

        .jiz-career-node[data-type='education'] .jiz-career-dot {
          border-color: var(--color-accent-secondary);
        }

        .jiz-career-node.is-active .jiz-career-dot {
          transform: scale(1.28);
          border-color: var(--color-accent-primary);
          background: var(--color-accent-primary);
          box-shadow: 0 0 0 8px rgba(198,242,58,.08), 0 0 30px rgba(198,242,58,.16);
        }

        .jiz-career-stage {
          display: block;
          margin-bottom: 8px;
          color: var(--color-text-primary);
          font: var(--text-h3);
          font-size: 1rem;
        }

        .jiz-career-years,
        .jiz-career-org {
          display: block;
          color: var(--color-text-muted);
          font: var(--text-caption);
        }

        .jiz-career-org {
          margin-top: 8px;
          color: var(--color-text-secondary);
        }

        .jiz-career-detail {
          display: grid;
          grid-template-columns: minmax(0,.9fr) minmax(0,1.25fr);
          gap: clamp(34px,5vw,72px);
          margin-top: 36px;
          min-height: clamp(310px,32vw,390px);
          padding: clamp(28px,4vw,50px);
          border: 1px solid rgba(100,225,255,.1);
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, rgba(100,225,255,.035), rgba(255,255,255,.012));
          box-shadow: inset 0 1px 0 rgba(255,255,255,.035);
        }

        .jiz-career-detail h4 {
          margin: 0;
          font: var(--text-h2);
          font-size: clamp(1.55rem,3vw,2.45rem);
          letter-spacing: -.035em;
        }

        .jiz-career-org-detail {
          margin: 10px 0 0;
          color: var(--color-accent-secondary);
          font: var(--text-body-lg);
        }

        .jiz-career-summary {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-body);
        }

        .jiz-career-detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          margin-top: 26px;
        }

        .jiz-career-detail-grid h5 {
          margin: 0 0 12px;
          color: var(--color-text-muted);
        }

        .jiz-career-detail-grid ul {
          margin: 0;
          padding-left: 18px;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: .93rem;
        }

        .jiz-beliefs {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4,minmax(0,1fr));
          gap: clamp(28px,4vw,54px);
          margin-top: clamp(76px,9vw,108px);
          padding-top: clamp(42px,5vw,64px);
          border-top: 1px solid rgba(100,225,255,.12);
          background: radial-gradient(circle at 78% 0%, rgba(198,242,58,.055), transparent 34%);
        }

        .jiz-belief {
          padding: 0;
        }


        .jiz-belief h4 {
          margin: 0 0 11px;
          font: var(--text-h3);
          font-size: 1.04rem;
        }

        .jiz-belief p {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: .91rem;
        }


        .jiz-reveal {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 720ms var(--ease-enter), transform 720ms var(--ease-enter);
        }

        .jiz-about-master.is-visible .jiz-reveal {
          opacity: 1;
          transform: none;
        }

        @media (max-width: 980px) {
          .jiz-engine-caption { text-align: left; }
          .jiz-method-path { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 34px; }
          .jiz-method-path::before { display: none; }
          .jiz-method-stage { padding: 26px 0 0 28px; border-top: 1px solid rgba(100,225,255,.11); }
          .jiz-method-node { top: 18px; left: 0; }
          .jiz-capabilities { grid-template-columns: 1fr; }
          .jiz-capability + .jiz-capability { padding: 34px 0 0; border-left: 0; border-top: 1px solid rgba(100,225,255,.08); }
          .jiz-career-detail { grid-template-columns: 1fr; }
          .jiz-beliefs { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 34px 0; }
        }

        @media (max-width: 620px) {
          .jiz-about-master { padding-inline: max(20px,var(--container-pad)); }
          .jiz-opening-title { font-size: clamp(2.55rem,14vw,3.8rem); }
          .jiz-engine-shell { width: 100%; }
          .jiz-engine-control { right: 12px; bottom: 12px; min-width: 78px; min-height: 38px; padding-inline: 14px; opacity: 1; transform: none; }
          .jiz-engine-playback-note { left: 12px; bottom: 60px; max-width: calc(100% - 24px); }
          .jiz-career-helper { align-items: flex-start; flex-direction: column; gap: 8px; }
          .jiz-method-path { grid-template-columns: 1fr; }
          .jiz-career-header { display: block; }
          .jiz-career-controls { margin-top: 24px; }
          .jiz-career-detail-grid { grid-template-columns: 1fr; }
          .jiz-beliefs { grid-template-columns: 1fr; }
          .jiz-belief { padding: 18px 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .jiz-about-master *,
          .jiz-about-master *::before,
          .jiz-about-master *::after {
            animation: none !important;
            transition-duration: .01ms !important;
            scroll-behavior: auto !important;
          }
          .jiz-reveal { opacity: 1; transform: none; }
          .jiz-method-button[data-active='true'] .jiz-method-node { animation: none !important; }
          .jiz-engine-control { opacity: 1; transform: none; }
        }
      `), /*#__PURE__*/React.createElement("div", {
    className: "jiz-about-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-scene-opening"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-reveal"
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-eyebrow"
  }, "ABOUT / THE MIND"), /*#__PURE__*/React.createElement("h2", {
    id: "about-master-title",
    className: "jiz-opening-title"
  }, "How Jonathan thinks."), /*#__PURE__*/React.createElement("p", {
    className: "jiz-opening-thesis"
  }, "I reveal the patterns beneath complexity and turn them into experiences people can understand, use, and adopt.")), /*#__PURE__*/React.createElement("div", {
    className: "jiz-engine-shell jiz-reveal",
    "data-thinking-engine": "inline"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-engine-stage"
  }, /*#__PURE__*/React.createElement("video", {
    ref: videoRef,
    className: "jiz-engine-video",
    autoPlay: !reducedMotion,
    loop: true,
    muted: true,
    playsInline: true,
    preload: "auto",
    "aria-label": "A cinematic visualization of strategic thinking, systems intelligence, and complexity becoming clarity",
    onLoadedData: () => {
      setVideoReady(true);
      setVideoError(false);
      setVideoPlaybackError(false);
    },
    onCanPlay: () => {
      setVideoReady(true);
      setVideoError(false);
      setVideoPlaybackError(false);
    },
    onPlay: () => setVideoPlaying(true),
    onPause: () => setVideoPlaying(false),
    onError: () => {
      setVideoReady(false);
      setVideoPlaying(false);
      setVideoError(true);
      setVideoPlaybackError(false);
    }
  }, /*#__PURE__*/React.createElement("source", {
    src: THINKING_ENGINE_SRC,
    type: "video/mp4"
  }), "Your browser does not support embedded video."), !videoReady && !videoError && /*#__PURE__*/React.createElement("div", {
    className: "jiz-engine-state",
    role: "status",
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-engine-loader"
  }, /*#__PURE__*/React.createElement("span", null, "Preparing the visualization\u2026"))), videoError && /*#__PURE__*/React.createElement("div", {
    className: "jiz-engine-state",
    role: "alert"
  }, /*#__PURE__*/React.createElement("span", null, "The visualization could not load. Jonathan's operating model is described directly below.")), !videoError && /*#__PURE__*/React.createElement("button", {
    className: "jiz-engine-control",
    type: "button",
    disabled: !videoReady,
    onClick: toggleThinkingEngine,
    "aria-label": videoPlaying ? 'Pause strategic intelligence visualization' : 'Play strategic intelligence visualization',
    "aria-pressed": videoPlaying
  }, videoPlaying ? 'Pause' : 'Play'), videoPlaybackError && !videoError && /*#__PURE__*/React.createElement("p", {
    className: "jiz-engine-playback-note",
    role: "status"
  }, "Playback was blocked by the browser. Select Play to try again."))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-engine-caption jiz-reveal"
  }, /*#__PURE__*/React.createElement("strong", null, "Operating System"), /*#__PURE__*/React.createElement("span", null, "I begin by mapping the relationship between people, information, systems, and behavior. Before I design content, I design understanding\u2014revealing what matters, where friction exists, and what will move people forward. My work brings together learning strategy, cinematic storytelling, digital experience design, and AI-enabled production to create solutions that are clear, useful, and built for adoption."))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-movement"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-movement-heading jiz-reveal"
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-eyebrow"
  }, "THE METHOD"), /*#__PURE__*/React.createElement("h3", {
    className: "jiz-movement-title"
  }, "How thought becomes action."), /*#__PURE__*/React.createElement("p", {
    className: "jiz-movement-copy"
  }, "A connected practice for moving from ambiguity to experiences people can understand and use.")), /*#__PURE__*/React.createElement("div", {
    ref: methodRef,
    className: "jiz-method-wrap jiz-reveal",
    "data-method-autoplay": "enabled",
    "data-active-method-index": activeMethodIndex,
    onMouseEnter: () => setMethodPaused(true),
    onMouseLeave: resumeMethodWhenEligible
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-method-progress",
    "aria-hidden": "true",
    style: {
      width: activeMethodIndex / (methodStages.length - 1) * 92 + '%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "jiz-method-path",
    "aria-label": "Jonathan's five-stage methodology"
  }, methodStages.map((stage, index) => /*#__PURE__*/React.createElement("button", {
    key: stage.id,
    type: "button",
    className: "jiz-method-button",
    "data-method-stage": stage.id,
    "data-method-index": index,
    "data-active": index === activeMethodIndex ? 'true' : 'false',
    "aria-pressed": index === activeMethodIndex,
    onClick: () => selectMethodStage(index),
    onFocus: () => setMethodPaused(true),
    onBlur: resumeMethodWhenEligible
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-method-stage"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jiz-method-node",
    "aria-hidden": "true",
    style: {
      borderColor: index === activeMethodIndex ? 'var(--color-accent-primary)' : index < activeMethodIndex ? 'var(--color-accent-secondary)' : 'rgba(100,225,255,.3)',
      background: index === activeMethodIndex ? 'var(--color-accent-primary)' : index < activeMethodIndex ? 'var(--color-accent-secondary)' : '#0b0d10',
      boxShadow: index === activeMethodIndex ? '0 0 0 7px rgba(198,242,58,.09),0 0 28px rgba(198,242,58,.18)' : '0 0 0 5px rgba(100,225,255,.05)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "jiz-method-label jiz-meta"
  }, stage.label), /*#__PURE__*/React.createElement("h4", null, stage.title), /*#__PURE__*/React.createElement("p", null, stage.copy))))), /*#__PURE__*/React.createElement("span", {
    className: "sr-only",
    role: "status",
    "aria-live": "polite",
    "data-method-status": true
  }, `Active method stage: ${methodStages[activeMethodIndex].title}`)), /*#__PURE__*/React.createElement("div", {
    className: "jiz-capabilities jiz-reveal"
  }, capabilityGroups.map(group => /*#__PURE__*/React.createElement("section", {
    className: "jiz-capability",
    key: group.title
  }, /*#__PURE__*/React.createElement("h4", {
    className: "jiz-meta"
  }, group.title), /*#__PURE__*/React.createElement("p", null, group.subtitle), /*#__PURE__*/React.createElement("ul", null, group.items.map(item => /*#__PURE__*/React.createElement("li", {
    key: item
  }, item))))))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-movement"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-header jiz-reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-movement-heading",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-eyebrow"
  }, "THE JOURNEY"), /*#__PURE__*/React.createElement("h3", {
    className: "jiz-movement-title"
  }, "Built through experience."), /*#__PURE__*/React.createElement("p", {
    className: "jiz-movement-copy"
  }, "Explore how learning, systems, technology, and storytelling shaped the practice.")), /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-controls",
    "aria-label": "Career journey controls"
  }, /*#__PURE__*/React.createElement("button", {
    className: "jiz-career-control",
    type: "button",
    "aria-label": "Previous career milestone",
    disabled: activeIndex === 0,
    onClick: () => selectCareerEntry(activeIndex - 1)
  }, "\u2190 Previous"), /*#__PURE__*/React.createElement("button", {
    className: "jiz-career-control",
    type: "button",
    "aria-label": "Next career milestone",
    disabled: activeIndex === careerEntries.length - 1,
    onClick: () => selectCareerEntry(activeIndex + 1)
  }, "Next \u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-helper",
    "data-career-progress": true
  }, /*#__PURE__*/React.createElement("span", null, "Use the arrows, swipe, or select a milestone to explore."), /*#__PURE__*/React.createElement("strong", null, activeIndex + 1, " of ", careerEntries.length)), /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-rail-shell"
  }, /*#__PURE__*/React.createElement("div", {
    ref: railRef,
    className: "jiz-career-viewport jiz-reveal",
    tabIndex: 0,
    role: "region",
    "aria-label": "Interactive career journey. Use left and right arrow keys to explore.",
    onKeyDown: handleRailKeyDown
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-track"
  }, careerEntries.map((entry, index) => /*#__PURE__*/React.createElement("button", {
    key: entry.id,
    ref: element => {
      nodeRefs.current[index] = element;
    },
    className: 'jiz-career-node ' + (activeIndex === index ? 'is-active' : ''),
    "data-career-milestone": entry.id,
    "data-career-index": index,
    "data-active": activeIndex === index ? 'true' : 'false',
    "data-type": entry.type,
    type: "button",
    "aria-pressed": activeIndex === index,
    onClick: () => selectCareerEntry(index)
  }, /*#__PURE__*/React.createElement("span", {
    className: "jiz-career-dot",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "jiz-career-stage"
  }, entry.stage), /*#__PURE__*/React.createElement("span", {
    className: "jiz-career-years"
  }, entry.years), /*#__PURE__*/React.createElement("span", {
    className: "jiz-career-org"
  }, entry.organization)))))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-detail jiz-reveal",
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "jiz-eyebrow"
  }, activeCareer.years), /*#__PURE__*/React.createElement("h4", null, activeCareer.title), /*#__PURE__*/React.createElement("p", {
    className: "jiz-career-org-detail"
  }, activeCareer.organization)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "jiz-career-summary"
  }, activeCareer.summary), /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-detail-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "jiz-meta"
  }, "SELECTED IMPACT"), /*#__PURE__*/React.createElement("ul", null, activeCareer.highlights.map(item => /*#__PURE__*/React.createElement("li", {
    key: item
  }, item)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "jiz-meta"
  }, "CAPABILITIES"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--color-text-secondary)',
      font: 'var(--text-caption)'
    }
  }, activeCareer.capabilities.join(' · ')))))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-beliefs jiz-reveal",
    "aria-label": "Core beliefs"
  }, beliefs.map(belief => /*#__PURE__*/React.createElement("article", {
    className: "jiz-belief",
    key: belief.title
  }, /*#__PURE__*/React.createElement("h4", null, belief.title), /*#__PURE__*/React.createElement("p", null, belief.copy)))))));
}
if (typeof window !== 'undefined') {
  window.AboutV2 = AboutV2;
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "archive/root-cleanup/About_v2_FULL_SOURCE.jsx", error: String((e && e.message) || e) }); }

// archive/root-cleanup/About_v2_POST_P0.jsx
try { (() => {
function AboutV2({
  onResume,
  onLinkedIn,
  onSelectedWork
}) {
  const sectionRef = React.useRef(null);
  const railRef = React.useRef(null);
  const nodeRefs = React.useRef([]);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const LINKEDIN_URL = 'https://www.linkedin.com/in/jonathanzamarripa/';
  const RESUME_URL = 'https://elearningportfolio-jz.s3.us-east-1.amazonaws.com/Public_Career_Overview.pdf';
  const THINKING_ENGINE_SRC = './assets/video/about-me-thinking-engine.mp4';
  const methodStages = [{
    id: 'observe',
    label: '01',
    title: 'Observe',
    copy: 'See the full system before defining the solution.'
  }, {
    id: 'understand',
    label: '02',
    title: 'Understand',
    copy: 'Reveal the patterns, friction, behaviors, and decisions shaping the experience.'
  }, {
    id: 'design',
    label: '03',
    title: 'Design',
    copy: 'Create the structure, story, and interaction that make understanding possible.'
  }, {
    id: 'build',
    label: '04',
    title: 'Build',
    copy: 'Produce the learning, media, tools, and systems required for adoption.'
  }, {
    id: 'transform',
    label: '05',
    title: 'Transform',
    copy: 'Turn clarity into action, confidence, and measurable movement.'
  }];
  const capabilityGroups = [{
    title: 'DESIGN',
    subtitle: 'What I architect',
    items: ['Learning systems', 'Experience strategy', 'Behavior change', 'Information architecture', 'Human-centered design']
  }, {
    title: 'BUILD',
    subtitle: 'What I create',
    items: ['Articulate Storyline', 'Camtasia', 'Adobe Creative Cloud', 'Figma', 'Motion and video', 'AI production workflows']
  }, {
    title: 'KNOWN FOR',
    subtitle: 'What differentiates the work',
    items: ['Systems thinking', 'Creative direction', 'Enterprise learning', 'Rapid prototyping', 'Translating complexity into clarity']
  }];
  const careerEntries = [{
    id: 'foundation',
    stage: 'Foundation',
    years: 'Eight-year foundation',
    organization: 'K–12 STEAM & Robotics',
    title: 'Classroom and Program Leadership',
    summary: 'Built a practical understanding of how people learn by teaching STEAM, leading a robotics program, and turning limited resources into meaningful experiences.',
    highlights: ['Coached a regional championship robotics team', 'Secured more than $20,000 in program funding', 'Developed a learner-first leadership practice'],
    capabilities: ['Facilitation', 'Program leadership', 'STEAM learning'],
    type: 'role'
  }, {
    id: 'gstate',
    stage: 'Storytelling',
    years: '2009',
    organization: 'Georgia State University',
    title: 'B.A., Journalism — Film & Video',
    summary: 'Built the cinematic and editorial foundation that now shapes the way complex ideas are framed, paced, and made memorable.',
    highlights: ['Film and video concentration', 'Narrative structure and visual communication', 'Production craft grounded in journalism'],
    capabilities: ['Storytelling', 'Video production', 'Editorial thinking'],
    type: 'education'
  }, {
    id: 'ais',
    stage: 'Systems',
    years: '2019–2024',
    organization: 'Atlanta International School',
    title: 'EdTech & Innovation Coach / Strategist',
    summary: 'Founded a digital learning function without an existing playbook, connecting instructional design, systems, content, and analytics into one practice.',
    highlights: ['Led an organization-wide LMS migration', 'Achieved 95% adoption and 4.9/5 satisfaction', 'Built analytics and needs-assessment infrastructure'],
    capabilities: ['Learning systems', 'Change leadership', 'Analytics'],
    type: 'role'
  }, {
    id: 'asu',
    stage: 'Research',
    years: '2023',
    organization: 'Arizona State University',
    title: 'M.Ed., Instructional Design & Technology',
    summary: 'Formalized a systems-based learning practice through advanced study in instructional design, technology, evaluation, and human-centered learning.',
    highlights: ['Graduated Summa Cum Laude', 'Connected learning science to production practice', 'Expanded expertise in evaluation and design strategy'],
    capabilities: ['Learning science', 'Research', 'Evaluation'],
    type: 'education'
  }, {
    id: 'cox',
    stage: 'Enterprise',
    years: '2025',
    organization: 'Cox Enterprises',
    title: 'Learning Experience Designer',
    summary: 'Designed enterprise learning experiences and AI-assisted production workflows for leadership development, systems adoption, and organizational change.',
    highlights: ['Accelerated content development by 40%', 'Supported a Workday Learn launch reaching 98% Q1 adoption', 'Designed a narrative-driven enterprise escape room'],
    capabilities: ['Enterprise learning', 'AI workflows', 'Storyline'],
    type: 'role'
  }, {
    id: 'ihg',
    stage: 'Scale',
    years: '2025–2026',
    organization: 'IHG Hotels & Resorts',
    title: 'Creative Content Specialist / Developer',
    summary: 'Combined learning strategy, cinematic production, and AI-enabled workflows to create global technology communication and onboarding experiences.',
    highlights: ['Produced enterprise onboarding and adoption content', 'Built repeatable AI-enabled production workflows', 'Partnered across Product, Engineering, UX, and Cybersecurity'],
    capabilities: ['Creative direction', 'Video', 'AI-native production'],
    type: 'current'
  }, {
    id: 'next',
    stage: 'What\'s Next',
    years: 'Future chapter',
    organization: 'The next organization or collaboration',
    title: 'Learning Experience Strategist · Filmmaker · AI-Native Producer',
    summary: 'Bringing learning science, cinematic craft, and AI-native production together to help organizations move from complexity to confident action.',
    highlights: ['Enterprise learning strategy', 'Cinematic learning systems', 'AI-enabled creative production'],
    capabilities: ['Strategy', 'Direction', 'Transformation'],
    type: 'future'
  }];
  const beliefs = [{
    title: 'Intelligence',
    copy: 'I look beneath the obvious to understand how systems, people, and decisions connect.'
  }, {
    title: 'Confidence',
    copy: 'I make clear decisions while remaining open to evidence, feedback, and change.'
  }, {
    title: 'Self-awareness',
    copy: 'I understand how my perspective shapes the work and where collaboration strengthens it.'
  }, {
    title: 'Empathy',
    copy: 'I design for the person who must understand, use, and live with the outcome.'
  }];
  React.useEffect(() => {
    if (!sectionRef.current || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.06
    });
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  const selectCareerEntry = React.useCallback((index, behavior = 'smooth') => {
    const bounded = Math.max(0, Math.min(index, careerEntries.length - 1));
    setActiveIndex(bounded);
    const viewport = railRef.current;
    const node = nodeRefs.current[bounded];
    if (viewport && node) {
      const targetLeft = node.offsetLeft - viewport.clientWidth / 2 + node.offsetWidth / 2;
      viewport.scrollTo({
        left: Math.max(0, targetLeft),
        behavior
      });
    }
  }, []);
  const handleRailKeyDown = event => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      selectCareerEntry(activeIndex + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      selectCareerEntry(activeIndex - 1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      selectCareerEntry(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      selectCareerEntry(careerEntries.length - 1);
    }
  };
  const activeCareer = careerEntries[activeIndex];
  return /*#__PURE__*/React.createElement("section", {
    ref: sectionRef,
    className: `jiz-about-master ${isVisible ? 'is-visible' : ''}`,
    "aria-labelledby": "about-master-title"
  }, /*#__PURE__*/React.createElement("style", null, `
        .jiz-about-master {
          --about-max: 1360px;
          position: relative;
          overflow: hidden;
          padding: clamp(78px, 8vw, 118px) var(--container-pad) clamp(112px, 12vw, 176px);
          color: var(--color-text-primary);
          background:
            radial-gradient(circle at 50% 13%, rgba(100, 225, 255, 0.09), transparent 34%),
            radial-gradient(circle at 78% 29%, rgba(198, 242, 58, 0.045), transparent 27%),
            linear-gradient(180deg, rgba(8, 13, 16, 0.12) 0%, #0b0d10 22%, #0b0d10 100%);
        }

        .jiz-about-master::before,
        .jiz-about-master::after {
          content: '';
          position: absolute;
          pointer-events: none;
          border-radius: 50%;
          filter: blur(80px);
        }

        .jiz-about-master::before {
          width: 40vw;
          height: 34vw;
          right: -12vw;
          top: 8%;
          background: rgba(100, 225, 255, 0.055);
        }

        .jiz-about-master::after {
          width: 28vw;
          height: 25vw;
          left: -12vw;
          top: 27%;
          background: rgba(198, 242, 58, 0.025);
        }

        .jiz-about-inner {
          position: relative;
          z-index: 1;
          width: min(100%, var(--about-max));
          margin: 0 auto;
        }

        .jiz-scene-opening {
          text-align: center;
        }

        .jiz-eyebrow,
        .jiz-meta {
          font: var(--text-eyebrow);
          letter-spacing: var(--tracking-eyebrow);
          text-transform: uppercase;
        }

        .jiz-eyebrow {
          margin: 0 0 18px;
          color: var(--color-accent-secondary);
        }

        .jiz-opening-title {
          max-width: 1000px;
          margin: 0 auto;
          font: var(--text-h1);
          font-size: clamp(3rem, 6.6vw, 6.4rem);
          line-height: 0.96;
          letter-spacing: -0.055em;
          text-wrap: balance;
        }

        .jiz-opening-thesis {
          max-width: 840px;
          margin: 26px auto 0;
          color: var(--color-text-primary);
          font: var(--text-body-lg);
          font-size: clamp(1.02rem, 1.7vw, 1.28rem);
          line-height: 1.62;
        }

        .jiz-opening-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .jiz-action {
          min-height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 23px;
          border-radius: var(--radius-pill);
          font: var(--text-button);
          text-decoration: none;
          transition:
            transform var(--motion-fast) var(--ease-standard),
            border-color var(--motion-fast) var(--ease-standard),
            background var(--motion-fast) var(--ease-standard);
        }

        .jiz-action:hover { transform: translateY(-2px); }
        .jiz-action:focus-visible,
        .jiz-career-control:focus-visible,
        .jiz-career-node:focus-visible {
          outline: 2px solid var(--color-accent-primary);
          outline-offset: 4px;
        }

        .jiz-action-primary {
          background: var(--color-accent-primary);
          color: #0b0d10;
        }

        .jiz-action-secondary {
          border: 1px solid rgba(100, 225, 255, 0.28);
          background: rgba(255, 255, 255, 0.015);
          color: var(--color-text-primary);
        }

        .jiz-engine-shell {
          position: relative;
          width: min(92vw, 1240px);
          margin: clamp(48px, 6vw, 76px) auto 0;
          isolation: isolate;
        }

        .jiz-engine-shell::before {
          content: '';
          position: absolute;
          z-index: -2;
          inset: -16%;
          background:
            radial-gradient(circle at 52% 43%, rgba(100, 225, 255, 0.22), transparent 42%),
            radial-gradient(circle at 68% 57%, rgba(198, 242, 58, 0.12), transparent 32%);
          filter: blur(54px);
          opacity: 0.68;
        }

        .jiz-engine-stage {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #080d10;
          border-radius: clamp(18px, 2vw, 28px);
          box-shadow: 0 52px 130px rgba(0, 0, 0, 0.48);
          -webkit-mask-image: radial-gradient(ellipse 101% 103% at 50% 50%, #000 72%, rgba(0,0,0,.92) 86%, transparent 100%);
          mask-image: radial-gradient(ellipse 101% 103% at 50% 50%, #000 72%, rgba(0,0,0,.92) 86%, transparent 100%);
        }

        .jiz-engine-stage::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 50% 50%, transparent 54%, rgba(8, 13, 16, 0.24) 82%, rgba(8, 13, 16, 0.72) 100%);
        }

        .jiz-engine-video {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain;
          background: #080d10;
        }

        .jiz-engine-reflection {
          width: 78%;
          height: 42px;
          margin: -2px auto 0;
          background: linear-gradient(180deg, rgba(100, 225, 255, 0.07), transparent);
          filter: blur(12px);
          opacity: 0.62;
        }

        .jiz-engine-caption {
          max-width: 720px;
          margin: 17px auto 0;
          text-align: center;
        }

        .jiz-engine-caption strong {
          display: block;
          color: var(--color-text-primary);
          font: var(--text-caption);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .jiz-engine-caption span {
          display: block;
          margin-top: 7px;
          color: var(--color-text-muted);
          font: var(--text-body);
          font-size: 0.94rem;
        }

        .jiz-opening-copy {
          width: min(100%, 1040px);
          margin: clamp(56px, 7vw, 92px) auto 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(34px, 5vw, 76px);
          text-align: left;
        }

        .jiz-opening-copy p {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: clamp(0.98rem, 1.4vw, 1.08rem);
          line-height: 1.78;
        }

        .jiz-movement {
          margin-top: clamp(112px, 13vw, 172px);
        }

        .jiz-movement-heading {
          max-width: 760px;
          margin-bottom: clamp(40px, 5vw, 62px);
        }

        .jiz-movement-title {
          margin: 0;
          font: var(--text-h2);
          letter-spacing: -0.04em;
        }

        .jiz-movement-copy {
          max-width: 650px;
          margin: 17px 0 0;
          color: var(--color-text-secondary);
          font: var(--text-body-lg);
        }

        .jiz-method-path {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: clamp(18px, 2.5vw, 34px);
        }

        .jiz-method-path::before {
          content: '';
          position: absolute;
          top: 24px;
          left: 4%;
          right: 4%;
          height: 1px;
          background: linear-gradient(90deg, rgba(100,225,255,.12), rgba(100,225,255,.6), rgba(198,242,58,.72));
        }

        .jiz-method-stage {
          position: relative;
          padding-top: 54px;
        }

        .jiz-method-node {
          position: absolute;
          top: 16px;
          left: 0;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid rgba(100,225,255,.75);
          background: #0b0d10;
          box-shadow: 0 0 0 5px rgba(100,225,255,.05);
        }

        .jiz-method-stage:last-child .jiz-method-node {
          border-color: var(--color-accent-primary);
          background: var(--color-accent-primary);
          box-shadow: 0 0 0 6px rgba(198,242,58,.08);
        }

        .jiz-method-stage h4 {
          margin: 0 0 11px;
          font: var(--text-h3);
          font-size: clamp(1.08rem, 1.8vw, 1.42rem);
        }

        .jiz-method-stage p:last-child {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: 0.94rem;
        }

        .jiz-method-label {
          margin: 0 0 12px;
          color: var(--color-accent-secondary);
        }

        .jiz-capabilities {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(34px, 5vw, 72px);
          margin-top: clamp(58px, 7vw, 88px);
          padding-top: clamp(40px, 5vw, 62px);
          border-top: 1px solid rgba(100,225,255,.09);
        }

        .jiz-capability + .jiz-capability {
          border-left: 1px solid rgba(100,225,255,.08);
          padding-left: clamp(28px, 4vw, 52px);
        }

        .jiz-capability h4 {
          margin: 0;
          color: var(--color-accent-secondary);
        }

        .jiz-capability > p {
          margin: 9px 0 22px;
          color: var(--color-text-muted);
          font: var(--text-caption);
        }

        .jiz-capability ul {
          list-style: none;
          display: grid;
          gap: 12px;
          margin: 0;
          padding: 0;
        }

        .jiz-capability li {
          position: relative;
          padding-left: 15px;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: 0.94rem;
        }

        .jiz-capability li::before {
          content: '';
          position: absolute;
          left: 0;
          top: .7em;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(100,225,255,.72);
        }

        .jiz-career-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 26px;
          margin-bottom: 34px;
        }

        .jiz-career-controls {
          display: flex;
          gap: 10px;
        }

        .jiz-career-control {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(100,225,255,.18);
          background: rgba(255,255,255,.016);
          color: var(--color-text-primary);
          cursor: pointer;
        }

        .jiz-career-control:disabled {
          opacity: .28;
          cursor: default;
        }

        .jiz-career-viewport {
          overflow-x: auto;
          overscroll-behavior-inline: contain;
          scroll-snap-type: x mandatory;
          padding: 28px 0 22px;
          scrollbar-width: thin;
          scrollbar-color: rgba(100,225,255,.2) transparent;
        }

        .jiz-career-track {
          position: relative;
          display: flex;
          min-width: max-content;
          gap: clamp(28px, 4vw, 62px);
          padding: 0 clamp(16px, 4vw, 58px);
        }

        .jiz-career-track::before {
          content: '';
          position: absolute;
          left: 30px;
          right: 30px;
          top: 32px;
          height: 1px;
          background: linear-gradient(90deg, rgba(100,225,255,.18), rgba(100,225,255,.48), rgba(198,242,58,.48));
        }

        .jiz-career-node {
          position: relative;
          width: clamp(154px, 15vw, 210px);
          padding: 0;
          border: 0;
          background: transparent;
          color: inherit;
          text-align: left;
          cursor: pointer;
          scroll-snap-align: center;
        }

        .jiz-career-dot {
          position: relative;
          z-index: 1;
          display: block;
          width: 18px;
          height: 18px;
          margin: 0 0 25px;
          border-radius: 50%;
          border: 1px solid rgba(100,225,255,.65);
          background: #0b0d10;
          box-shadow: 0 0 0 6px rgba(100,225,255,.045);
          transition: transform var(--motion-standard) var(--ease-enter), background var(--motion-standard) var(--ease-enter), box-shadow var(--motion-standard) var(--ease-enter);
        }

        .jiz-career-node[data-type='education'] .jiz-career-dot {
          border-color: var(--color-accent-secondary);
        }

        .jiz-career-node.is-active .jiz-career-dot {
          transform: scale(1.28);
          border-color: var(--color-accent-primary);
          background: var(--color-accent-primary);
          box-shadow: 0 0 0 8px rgba(198,242,58,.08), 0 0 30px rgba(198,242,58,.16);
        }

        .jiz-career-stage {
          display: block;
          margin-bottom: 8px;
          color: var(--color-text-primary);
          font: var(--text-h3);
          font-size: 1rem;
        }

        .jiz-career-years,
        .jiz-career-org {
          display: block;
          color: var(--color-text-muted);
          font: var(--text-caption);
        }

        .jiz-career-org {
          margin-top: 8px;
          color: var(--color-text-secondary);
        }

        .jiz-career-detail {
          display: grid;
          grid-template-columns: minmax(0,.9fr) minmax(0,1.25fr);
          gap: clamp(34px,5vw,72px);
          margin-top: 36px;
          padding: clamp(28px,4vw,50px);
          border: 1px solid rgba(100,225,255,.1);
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, rgba(100,225,255,.035), rgba(255,255,255,.012));
          box-shadow: inset 0 1px 0 rgba(255,255,255,.035);
        }

        .jiz-career-detail h4 {
          margin: 0;
          font: var(--text-h2);
          font-size: clamp(1.55rem,3vw,2.45rem);
          letter-spacing: -.035em;
        }

        .jiz-career-org-detail {
          margin: 10px 0 0;
          color: var(--color-accent-secondary);
          font: var(--text-body-lg);
        }

        .jiz-career-summary {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-body);
        }

        .jiz-career-detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          margin-top: 26px;
        }

        .jiz-career-detail-grid h5 {
          margin: 0 0 12px;
          color: var(--color-text-muted);
        }

        .jiz-career-detail-grid ul {
          margin: 0;
          padding-left: 18px;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: .93rem;
        }

        .jiz-beliefs {
          display: grid;
          grid-template-columns: repeat(4,minmax(0,1fr));
          margin-top: clamp(76px,9vw,108px);
          padding: clamp(34px,4vw,52px) 0;
          border-top: 1px solid rgba(100,225,255,.09);
          border-bottom: 1px solid rgba(100,225,255,.09);
        }

        .jiz-belief {
          padding: 0 clamp(22px,3vw,40px);
        }

        .jiz-belief:first-child { padding-left: 0; }
        .jiz-belief:last-child { padding-right: 0; }

        .jiz-belief + .jiz-belief {
          border-left: 1px solid rgba(100,225,255,.08);
        }

        .jiz-belief h4 {
          margin: 0 0 11px;
          font: var(--text-h3);
          font-size: 1.04rem;
        }

        .jiz-belief p {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: .91rem;
        }

        .jiz-scene-transition {
          margin-top: clamp(112px,13vw,168px);
          padding: clamp(76px,9vw,116px) 0 34px;
          text-align: center;
          background: radial-gradient(circle at 50% 80%, rgba(198,242,58,.035), transparent 34%);
        }

        .jiz-scene-transition h3 {
          margin: 0;
          font: var(--text-h1);
          font-size: clamp(2.25rem,4.8vw,4.4rem);
          line-height: 1.02;
          letter-spacing: -.045em;
        }

        .jiz-scene-transition h3 span { color: var(--color-accent-primary); }

        .jiz-scene-transition p {
          margin: 20px auto 0;
          color: var(--color-text-secondary);
          font: var(--text-body-lg);
        }

        .jiz-reveal {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 720ms var(--ease-enter), transform 720ms var(--ease-enter);
        }

        .jiz-about-master.is-visible .jiz-reveal {
          opacity: 1;
          transform: none;
        }

        @media (max-width: 980px) {
          .jiz-opening-copy { grid-template-columns: 1fr; }
          .jiz-method-path { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 34px; }
          .jiz-method-path::before { display: none; }
          .jiz-method-stage { padding: 26px 0 0 28px; border-top: 1px solid rgba(100,225,255,.11); }
          .jiz-method-node { top: 18px; left: 0; }
          .jiz-capabilities { grid-template-columns: 1fr; }
          .jiz-capability + .jiz-capability { padding: 34px 0 0; border-left: 0; border-top: 1px solid rgba(100,225,255,.08); }
          .jiz-career-detail { grid-template-columns: 1fr; }
          .jiz-beliefs { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 34px 0; }
          .jiz-belief:nth-child(3) { border-left: 0; padding-left: 0; }
        }

        @media (max-width: 620px) {
          .jiz-about-master { padding-inline: max(20px,var(--container-pad)); }
          .jiz-opening-title { font-size: clamp(2.55rem,14vw,3.8rem); }
          .jiz-engine-shell { width: 100%; }
          .jiz-method-path { grid-template-columns: 1fr; }
          .jiz-career-header { display: block; }
          .jiz-career-controls { margin-top: 24px; }
          .jiz-career-detail-grid { grid-template-columns: 1fr; }
          .jiz-beliefs { grid-template-columns: 1fr; }
          .jiz-belief,
          .jiz-belief:first-child,
          .jiz-belief:last-child { padding: 24px 0; }
          .jiz-belief + .jiz-belief,
          .jiz-belief:nth-child(3) { border-left: 0; border-top: 1px solid rgba(100,225,255,.08); }
        }

        @media (prefers-reduced-motion: reduce) {
          .jiz-about-master *,
          .jiz-about-master *::before,
          .jiz-about-master *::after {
            animation: none !important;
            transition-duration: .01ms !important;
            scroll-behavior: auto !important;
          }
          .jiz-reveal { opacity: 1; transform: none; }
        }
      `), /*#__PURE__*/React.createElement("div", {
    className: "jiz-about-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-scene-opening"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-reveal"
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-eyebrow"
  }, "ABOUT / THE MIND"), /*#__PURE__*/React.createElement("h2", {
    id: "about-master-title",
    className: "jiz-opening-title"
  }, "How Jonathan thinks."), /*#__PURE__*/React.createElement("p", {
    className: "jiz-opening-thesis"
  }, "I reveal the patterns beneath complexity and turn them into experiences people can understand, use, and adopt."), /*#__PURE__*/React.createElement("div", {
    className: "jiz-opening-actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "jiz-action jiz-action-primary",
    href: RESUME_URL,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: onResume
  }, "View r\xE9sum\xE9"), /*#__PURE__*/React.createElement("a", {
    className: "jiz-action jiz-action-secondary",
    href: LINKEDIN_URL,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: onLinkedIn
  }, "LinkedIn"))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-engine-shell jiz-reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-engine-stage"
  }, /*#__PURE__*/React.createElement("video", {
    className: "jiz-engine-video",
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    preload: "metadata",
    "aria-label": "Thinking Engine visualization showing complexity becoming clarity"
  }, /*#__PURE__*/React.createElement("source", {
    src: THINKING_ENGINE_SRC,
    type: "video/mp4"
  }), "Your browser does not support the Thinking Engine video.")), /*#__PURE__*/React.createElement("div", {
    className: "jiz-engine-reflection",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "jiz-engine-caption"
  }, /*#__PURE__*/React.createElement("strong", null, "Thinking Engine"), /*#__PURE__*/React.createElement("span", null, "The operating model behind every project."))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-opening-copy jiz-reveal"
  }, /*#__PURE__*/React.createElement("p", null, "I begin by mapping the relationship between people, information, systems, and behavior. Before I design content, I design understanding\u2014revealing what matters, where friction exists, and what will move people forward."), /*#__PURE__*/React.createElement("p", null, "My work brings together learning strategy, cinematic storytelling, digital experience design, and AI-enabled production to create solutions that are clear, useful, and built for adoption."))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-movement"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-movement-heading jiz-reveal"
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-eyebrow"
  }, "THE METHOD"), /*#__PURE__*/React.createElement("h3", {
    className: "jiz-movement-title"
  }, "How thought becomes action."), /*#__PURE__*/React.createElement("p", {
    className: "jiz-movement-copy"
  }, "A connected practice for moving from ambiguity to experiences people can understand and use.")), /*#__PURE__*/React.createElement("div", {
    className: "jiz-method-path jiz-reveal",
    "aria-label": "Jonathan's five-stage methodology"
  }, methodStages.map(stage => /*#__PURE__*/React.createElement("article", {
    className: "jiz-method-stage",
    key: stage.id
  }, /*#__PURE__*/React.createElement("span", {
    className: "jiz-method-node",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("p", {
    className: "jiz-method-label jiz-meta"
  }, stage.label), /*#__PURE__*/React.createElement("h4", null, stage.title), /*#__PURE__*/React.createElement("p", null, stage.copy)))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-capabilities jiz-reveal"
  }, capabilityGroups.map(group => /*#__PURE__*/React.createElement("section", {
    className: "jiz-capability",
    key: group.title
  }, /*#__PURE__*/React.createElement("h4", {
    className: "jiz-meta"
  }, group.title), /*#__PURE__*/React.createElement("p", null, group.subtitle), /*#__PURE__*/React.createElement("ul", null, group.items.map(item => /*#__PURE__*/React.createElement("li", {
    key: item
  }, item))))))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-movement"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-header jiz-reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-movement-heading",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-eyebrow"
  }, "THE JOURNEY"), /*#__PURE__*/React.createElement("h3", {
    className: "jiz-movement-title"
  }, "Built through experience."), /*#__PURE__*/React.createElement("p", {
    className: "jiz-movement-copy"
  }, "Explore how learning, systems, technology, and storytelling shaped the practice.")), /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-controls",
    "aria-label": "Career journey controls"
  }, /*#__PURE__*/React.createElement("button", {
    className: "jiz-career-control",
    type: "button",
    "aria-label": "Previous career milestone",
    disabled: activeIndex === 0,
    onClick: () => selectCareerEntry(activeIndex - 1)
  }, "\u2190"), /*#__PURE__*/React.createElement("button", {
    className: "jiz-career-control",
    type: "button",
    "aria-label": "Next career milestone",
    disabled: activeIndex === careerEntries.length - 1,
    onClick: () => selectCareerEntry(activeIndex + 1)
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    ref: railRef,
    className: "jiz-career-viewport jiz-reveal",
    tabIndex: "0",
    role: "region",
    "aria-label": "Interactive career journey. Use left and right arrow keys to explore.",
    onKeyDown: handleRailKeyDown
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-track"
  }, careerEntries.map((entry, index) => /*#__PURE__*/React.createElement("button", {
    key: entry.id,
    ref: element => {
      nodeRefs.current[index] = element;
    },
    className: `jiz-career-node ${activeIndex === index ? 'is-active' : ''}`,
    "data-type": entry.type,
    type: "button",
    "aria-pressed": activeIndex === index,
    onClick: () => selectCareerEntry(index)
  }, /*#__PURE__*/React.createElement("span", {
    className: "jiz-career-dot",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "jiz-career-stage"
  }, entry.stage), /*#__PURE__*/React.createElement("span", {
    className: "jiz-career-years"
  }, entry.years), /*#__PURE__*/React.createElement("span", {
    className: "jiz-career-org"
  }, entry.organization))))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-detail jiz-reveal",
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "jiz-eyebrow"
  }, activeCareer.years), /*#__PURE__*/React.createElement("h4", null, activeCareer.title), /*#__PURE__*/React.createElement("p", {
    className: "jiz-career-org-detail"
  }, activeCareer.organization)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "jiz-career-summary"
  }, activeCareer.summary), /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-detail-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "jiz-meta"
  }, "SELECTED IMPACT"), /*#__PURE__*/React.createElement("ul", null, activeCareer.highlights.map(item => /*#__PURE__*/React.createElement("li", {
    key: item
  }, item)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "jiz-meta"
  }, "CAPABILITIES"), /*#__PURE__*/React.createElement("ul", null, activeCareer.capabilities.map(item => /*#__PURE__*/React.createElement("li", {
    key: item
  }, item))))))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-beliefs jiz-reveal",
    "aria-label": "Core beliefs"
  }, beliefs.map(belief => /*#__PURE__*/React.createElement("article", {
    className: "jiz-belief",
    key: belief.title
  }, /*#__PURE__*/React.createElement("h4", null, belief.title), /*#__PURE__*/React.createElement("p", null, belief.copy))))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-scene-transition jiz-reveal"
  }, /*#__PURE__*/React.createElement("h3", null, "Understanding changes ", /*#__PURE__*/React.createElement("span", null, "everything.")), /*#__PURE__*/React.createElement("p", null, "Here's what that understanding created."))));
}
if (typeof window !== 'undefined') {
  window.AboutV2 = AboutV2;
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "archive/root-cleanup/About_v2_POST_P0.jsx", error: String((e && e.message) || e) }); }

// archive/root-cleanup/About_v2_V3.0_FINAL.jsx
try { (() => {
function AboutV2({
  registerSectionRef,
  onResume,
  onLinkedIn,
  onSelectedWork
}) {
  const sectionRef = React.useRef(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const LINKEDIN_URL = 'https://www.linkedin.com/in/jonathanzamarripa/';
  const RESUME_URL = 'https://elearningportfolio-jz.s3.us-east-1.amazonaws.com/Public_Career_Overview.pdf';
  const THINKING_ENGINE_SRC = './assets/video/about-me-thinking-engine.mp4';
  const methodStages = [{
    id: 'observe',
    label: '01',
    title: 'Observe',
    copy: 'See the full system before defining the solution.'
  }, {
    id: 'understand',
    label: '02',
    title: 'Understand',
    copy: 'Reveal the patterns, friction, behaviors, and decisions shaping the experience.'
  }, {
    id: 'design',
    label: '03',
    title: 'Design',
    copy: 'Create the structure, story, and interaction that make understanding possible.'
  }, {
    id: 'build',
    label: '04',
    title: 'Build',
    copy: 'Produce the learning, media, tools, and systems required for adoption.'
  }, {
    id: 'transform',
    label: '05',
    title: 'Transform',
    copy: 'Turn clarity into action, confidence, and measurable movement.'
  }];
  const careerEntries = [{
    id: 'foundation',
    stage: 'Foundation',
    years: 'Eight-year foundation',
    organization: 'K–12 STEAM & Robotics',
    title: 'Classroom and Program Leadership',
    summary: 'Built a practical understanding of how people learn by teaching STEAM, leading a robotics program, and turning limited resources into meaningful experiences.',
    highlights: ['Coached a regional championship robotics team', 'Secured more than $20,000 in program funding', 'Developed a learner-first leadership practice'],
    capabilities: ['Facilitation', 'Program leadership', 'STEAM learning'],
    type: 'role'
  }, {
    id: 'gstate',
    stage: 'Storytelling',
    years: '2009',
    organization: 'Georgia State University',
    title: 'B.A., Journalism — Film & Video',
    summary: 'Built the cinematic and editorial foundation that now shapes the way complex ideas are framed, paced, and made memorable.',
    highlights: ['Film and video concentration', 'Narrative structure and visual communication', 'Production craft grounded in journalism'],
    capabilities: ['Storytelling', 'Video production', 'Editorial thinking'],
    type: 'education'
  }, {
    id: 'ais',
    stage: 'Systems',
    years: '2019–2024',
    organization: 'Atlanta International School',
    title: 'EdTech & Innovation Coach / Strategist',
    summary: 'Founded a digital learning function without an existing playbook, connecting instructional design, systems, content, and analytics into one practice.',
    highlights: ['Led an organization-wide LMS migration', 'Achieved 95% adoption and 4.9/5 satisfaction', 'Built analytics and needs-assessment infrastructure'],
    capabilities: ['Learning systems', 'Change leadership', 'Analytics'],
    type: 'role'
  }, {
    id: 'asu',
    stage: 'Research',
    years: '2023',
    organization: 'Arizona State University',
    title: 'M.Ed., Instructional Design & Technology',
    summary: 'Formalized a systems-based learning practice through advanced study in instructional design, technology, evaluation, and human-centered learning.',
    highlights: ['Graduated Summa Cum Laude', 'Connected learning science to production practice', 'Expanded expertise in evaluation and design strategy'],
    capabilities: ['Learning science', 'Research', 'Evaluation'],
    type: 'education'
  }, {
    id: 'cox',
    stage: 'Enterprise',
    years: '2024',
    organization: 'Cox Enterprises',
    title: 'Senior Manager, Learning Experience Design',
    summary: 'Scaled learning experience strategy across a Fortune 500 organization, bridging leadership priorities with learner outcomes through systems thinking.',
    highlights: ['Led strategic learning initiatives for 500+ employees', 'Built cross-functional design infrastructure', 'Established learning ROI evaluation frameworks'],
    capabilities: ['Enterprise design', 'Leadership communication', 'Systems strategy'],
    type: 'role'
  }, {
    id: 'ihg',
    stage: 'Industry',
    years: '2024–2025',
    organization: 'IHG Hotels & Resorts',
    title: 'Principal Instructional Designer',
    summary: 'Architected hospitality-industry learning systems, translating complex operational requirements into scalable digital experiences for global teams.',
    highlights: ['Designed learning for 300,000+ hospitality professionals', 'Created adaptable curriculum architecture', 'Established quality and accessibility standards'],
    capabilities: ['Hospitality design', 'Global systems', 'Scalable solutions'],
    type: 'role'
  }, {
    id: 'studio',
    stage: 'Independent',
    years: '2025–Present',
    organization: 'AI Creative Studio',
    title: 'Founder, Learning Systems & Design Strategy',
    summary: 'Building the intersection of design thinking, systems strategy, and AI-enabled production. Creating learning experiences that transform how organizations operate.',
    highlights: ['AI-augmented design workflows', 'Complex systems simplification', 'Strategic advisory & design'],
    capabilities: ['Systems thinking', 'AI integration', 'Strategic innovation'],
    type: 'role'
  }];
  const beliefs = [{
    belief: 'Clarity is a design problem',
    description: 'Confusion is friction. Every moment of misunderstanding costs time, confidence, and action.'
  }, {
    belief: 'Systems always think',
    description: 'The way something works teaches as much as what it teaches. Design the learning environment itself.'
  }, {
    belief: 'Behavior change requires architecture',
    description: 'Intentions fail without systems. Build the structure, story, and tools that make the change inevitable.'
  }, {
    belief: 'Stories make ideas memorable',
    description: 'A well-paced narrative does more than inform—it transforms understanding into conviction.'
  }];
  React.useEffect(() => {
    if (registerSectionRef) registerSectionRef(sectionRef.current, 'About');
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, {
      threshold: 0.1
    });
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [registerSectionRef]);
  return /*#__PURE__*/React.createElement("section", {
    className: "jiz-about-v2",
    ref: sectionRef
  }, /*#__PURE__*/React.createElement("style", null, `
        .jiz-about-v2 {
          position: relative;
          width: 100%;
          padding: clamp(78px, 13vw, 140px) var(--container-pad);
          background: var(--color-bg);
          overflow: hidden;
        }

        .jiz-about-v2::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          background:
            radial-gradient(ellipse 900px 600px at 50% 0%, rgba(100, 225, 255, 0.03), transparent 60%),
            radial-gradient(ellipse 700px 500px at 50% 50%, rgba(100, 225, 255, 0.02), transparent 50%),
            radial-gradient(ellipse 600px 400px at 30% 60%, rgba(200, 255, 100, 0.015), transparent 55%);
          z-index: 0;
        }

        .jiz-about-v2 > * {
          position: relative;
          z-index: 1;
        }

        .jiz-about-mind {
          display: flex;
          flex-direction: column;
          gap: 0;
          align-items: center;
          text-align: center;
          max-width: 800px;
          margin: 0 auto clamp(60px, 8vw, 100px);
        }

        .jiz-about-title {
          margin: 0 0 24px;
          font: var(--text-h1);
          font-size: clamp(2.45rem, 6.8vw, 4.2rem);
          line-height: 1.08;
          letter-spacing: -0.045em;
          color: var(--color-text-primary);
          opacity: 0;
          animation: fadeInUp 700ms var(--ease-enter) forwards;
        }

        .jiz-about-copy {
          margin: 0 auto 40px;
          color: var(--color-text-secondary);
          font: var(--text-body-lg);
          line-height: 1.8;
          opacity: 0;
          animation: fadeInUp 700ms var(--ease-enter) forwards 80ms;
        }

        .jiz-about-actions {
          display: flex;
          gap: 16px;
          margin-top: 40px;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
          animation: fadeInUp 700ms var(--ease-enter) forwards 160ms;
        }

        @keyframes fadeInUp {
          to { opacity: 1; }
        }

        .jiz-thinking-wrap {
          position: relative;
          width: min(90vw, 1200px);
          max-width: 100%;
          margin: 0 auto clamp(60px, 8vw, 100px);
          overflow: hidden;
          border-radius: 16px;
          background: transparent;
          border: none;
          aspect-ratio: 16 / 9;
          opacity: 0;
          animation: fadeInUp 700ms var(--ease-enter) forwards 240ms;
        }

        .jiz-thinking-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          background:
            radial-gradient(ellipse at 50% 50%, rgba(100, 225, 255, 0.12), rgba(100, 225, 255, 0.02) 60%),
            radial-gradient(ellipse at 50% 30%, rgba(200, 255, 100, 0.08), transparent 50%);
          pointer-events: none;
          z-index: 2;
        }

        .jiz-thinking-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.15) 100%);
          pointer-events: none;
          z-index: 3;
          border-radius: 16px;
        }

        .jiz-thinking-wrap video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 16px;
          position: relative;
          z-index: 1;
        }

        .jiz-thinking-label {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
          text-align: center;
          max-width: 680px;
          margin: 0 auto clamp(40px, 5vw, 80px);
        }

        .jiz-thinking-label h4 {
          margin: 0;
          font: var(--text-h3);
          font-size: 1.1rem;
          color: var(--color-text-primary);
        }

        .jiz-thinking-label p {
          margin: 0;
          font: var(--text-body-sm);
          color: var(--color-text-secondary);
        }

        .jiz-method-intro {
          text-align: center;
          margin-bottom: clamp(80px, 10vw, 140px);
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }

        .jiz-method-intro h3 {
          margin: 0 0 16px;
          font: var(--text-h2);
          font-size: clamp(1.8rem, 4.2vw, 2.8rem);
          line-height: 1.1;
          letter-spacing: -0.04em;
          color: var(--color-text-primary);
        }

        .jiz-method-intro p {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-body);
          line-height: 1.7;
        }

        .jiz-method-path {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 64px;
          position: relative;
          margin-bottom: clamp(120px, 14vw, 200px);
        }

        .jiz-method-stage {
          position: relative;
          padding: 0 0 0 48px;
          animation: fadeInUp 700ms var(--ease-enter) forwards;
          opacity: 0;
        }

        .jiz-method-stage:nth-child(1) { animation-delay: 400ms; }
        .jiz-method-stage:nth-child(2) { animation-delay: 480ms; }
        .jiz-method-stage:nth-child(3) { animation-delay: 560ms; }
        .jiz-method-stage:nth-child(4) { animation-delay: 640ms; }
        .jiz-method-stage:nth-child(5) { animation-delay: 720ms; }

        .jiz-method-node {
          position: absolute;
          left: 0;
          top: 0;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(100, 225, 255, 0.1);
          border: 1px solid rgba(100, 225, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font: var(--text-mono);
          font-size: 0.75rem;
          color: rgba(100, 225, 255, 0.6);
        }

        .jiz-method-stage h4 {
          margin: 0 0 12px;
          font: var(--text-h3);
          font-size: 1.05rem;
          color: var(--color-text-primary);
        }

        .jiz-method-stage p {
          margin: 0;
          font: var(--text-body);
          color: var(--color-text-secondary);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .jiz-career-rail {
          width: 100%;
          margin: clamp(100px, 12vw, 160px) 0;
        }

        .jiz-career-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 28px;
          margin-bottom: 34px;
          flex-wrap: wrap;
        }

        .jiz-career-title h3 {
          margin: 0;
          font: var(--text-h2);
          font-size: clamp(1.8rem, 4.2vw, 2.8rem);
          line-height: 1.1;
          letter-spacing: -0.04em;
          color: var(--color-text-primary);
        }

        .jiz-career-controls {
          display: flex;
          gap: 10px;
        }

        .jiz-career-control {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(100, 225, 255, 0.18);
          background: rgba(255, 255, 255, 0.018);
          color: var(--color-text-primary);
          cursor: pointer;
          transition: all 300ms var(--ease-standard);
          display: flex;
          align-items: center;
          justify-content: center;
          font: var(--text-mono);
          font-size: 0.85rem;
        }

        .jiz-career-control:hover {
          border-color: rgba(100, 225, 255, 0.4);
          background: rgba(100, 225, 255, 0.08);
        }

        .jiz-career-control.active {
          border-color: var(--color-accent-primary);
          background: rgba(100, 225, 255, 0.12);
          color: var(--color-accent-primary);
        }

        .jiz-career-detail {
          padding: 32px;
          border: 1px solid rgba(100, 225, 255, 0.08);
          border-radius: 8px;
          background: rgba(100, 225, 255, 0.02);
          animation: fadeInUp 500ms var(--ease-enter) forwards;
        }

        .jiz-career-detail h4 {
          margin: 0 0 8px;
          font: var(--text-h3);
          font-size: 1.2rem;
          color: var(--color-text-primary);
        }

        .jiz-career-detail .org {
          margin: 0 0 8px;
          font: var(--text-body-sm);
          color: var(--color-accent-primary);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .jiz-career-detail .years {
          margin: 0 0 18px;
          font: var(--text-body);
          color: var(--color-text-secondary);
          font-size: 0.9rem;
        }

        .jiz-career-detail p {
          margin: 0 0 16px;
          font: var(--text-body);
          color: var(--color-text-secondary);
          line-height: 1.7;
        }

        .jiz-career-detail ul {
          list-style: none;
          margin: 16px 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .jiz-career-detail li {
          font: var(--text-body);
          color: var(--color-text-secondary);
          padding-left: 20px;
          position: relative;
          font-size: 0.95rem;
        }

        .jiz-career-detail li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.65em;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(100, 225, 255, 0.5);
        }

        .jiz-beliefs {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 40px;
          margin: clamp(100px, 12vw, 160px) 0;
        }

        .jiz-belief {
          position: relative;
          padding: 0;
        }

        .jiz-belief h4 {
          margin: 0 0 12px;
          font: var(--text-h3);
          font-size: 1.05rem;
          color: var(--color-text-primary);
        }

        .jiz-belief p {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-body);
          line-height: 1.7;
          font-size: 0.95rem;
        }

        @media (max-width: 980px) {
          .jiz-about-mind {
            flex-direction: column;
            text-align: center;
          }

          .jiz-thinking-wrap {
            width: min(95vw, 100%);
          }

          .jiz-about-title {
            font-size: clamp(2.45rem, 13vw, 3.6rem);
          }

          .jiz-thinking-label {
            flex-direction: column;
            text-align: center;
          }

          .jiz-method-path {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 34px;
          }

          .jiz-method-stage {
            padding: 26px 0 0 28px;
            border-top: 1px solid rgba(100, 225, 255, 0.11);
          }

          .jiz-method-node {
            top: 18px;
            left: 0;
          }

          .jiz-career-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .jiz-beliefs {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 34px 0;
          }
        }

        @media (max-width: 620px) {
          .jiz-about-v2 {
            padding-inline: max(20px, var(--container-pad));
          }

          .jiz-about-title {
            font-size: clamp(2.45rem, 13vw, 3.6rem);
          }

          .jiz-thinking-label {
            flex-direction: column;
            text-align: center;
          }

          .jiz-method-path {
            grid-template-columns: 1fr;
          }

          .jiz-career-header {
            display: block;
          }

          .jiz-career-controls {
            margin-top: 24px;
          }

          .jiz-beliefs {
            grid-template-columns: 1fr;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .jiz-about-v2 *,
          .jiz-about-v2 *::before,
          .jiz-about-v2 *::after {
            scroll-behavior: auto !important;
            animation: none !important;
            transition-duration: 0.01ms !important;
          }

          .jiz-about-title,
          .jiz-about-copy,
          .jiz-about-actions,
          .jiz-thinking-wrap,
          .jiz-method-stage {
            opacity: 1;
          }
        }
      `), /*#__PURE__*/React.createElement("div", {
    className: "jiz-about-mind"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "jiz-about-title"
  }, "The Mind"), /*#__PURE__*/React.createElement("p", {
    className: "jiz-about-copy"
  }, "How Jonathan thinks about the problems he solves. The operating system behind every project, every decision, and every outcome."), /*#__PURE__*/React.createElement("div", {
    className: "jiz-about-actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "jiz-about-action jiz-about-action-primary",
    href: RESUME_URL,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "View Resume"), /*#__PURE__*/React.createElement("a", {
    className: "jiz-about-action jiz-about-action-secondary",
    href: LINKEDIN_URL,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "LinkedIn"))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-thinking-wrap"
  }, /*#__PURE__*/React.createElement("video", {
    src: THINKING_ENGINE_SRC,
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "jiz-thinking-label"
  }, /*#__PURE__*/React.createElement("h4", null, "Thinking Engine"), /*#__PURE__*/React.createElement("p", null, "The operating model behind every project.")), /*#__PURE__*/React.createElement("div", {
    className: "jiz-method-intro"
  }, /*#__PURE__*/React.createElement("h3", null, "The Method"), /*#__PURE__*/React.createElement("p", null, "How this operating system unfolds across every engagement")), /*#__PURE__*/React.createElement("div", {
    className: "jiz-method-path"
  }, methodStages.map(stage => /*#__PURE__*/React.createElement("div", {
    key: stage.id,
    className: "jiz-method-stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-method-node"
  }, stage.label), /*#__PURE__*/React.createElement("h4", null, stage.title), /*#__PURE__*/React.createElement("p", null, stage.copy)))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-rail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-title"
  }, /*#__PURE__*/React.createElement("h3", null, "Journey of Practice")), /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-controls"
  }, careerEntries.map((_, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    className: `jiz-career-control ${idx === activeIndex ? 'active' : ''}`,
    onClick: () => setActiveIndex(idx),
    "aria-label": `Career entry ${idx + 1}`
  }, idx + 1)))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-detail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "org"
  }, careerEntries[activeIndex].organization), /*#__PURE__*/React.createElement("h4", null, careerEntries[activeIndex].title), /*#__PURE__*/React.createElement("div", {
    className: "years"
  }, careerEntries[activeIndex].years), /*#__PURE__*/React.createElement("p", null, careerEntries[activeIndex].summary), careerEntries[activeIndex].highlights && /*#__PURE__*/React.createElement("ul", null, careerEntries[activeIndex].highlights.map((h, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, h))))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-beliefs"
  }, beliefs.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "jiz-belief"
  }, /*#__PURE__*/React.createElement("h4", null, b.belief), /*#__PURE__*/React.createElement("p", null, b.description)))));
}
if (typeof window !== 'undefined') {
  window.AboutV2 = AboutV2;
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "archive/root-cleanup/About_v2_V3.0_FINAL.jsx", error: String((e && e.message) || e) }); }

// archive/root-cleanup/About_v2_code.jsx
try { (() => {
function AboutV2({
  registerSectionRef,
  onResume,
  onLinkedIn,
  onSelectedWork
}) {
  const sectionRef = React.useRef(null);
  const videoRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [volume, setVolume] = React.useState(0);
  const [isMuted, setIsMuted] = React.useState(true);
  React.useEffect(() => {
    if (registerSectionRef && sectionRef.current) {
      registerSectionRef(sectionRef.current, 'About');
    }
  }, [registerSectionRef]);
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  const handleVolumeChange = e => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (videoRef.current) {
      videoRef.current.volume = vol;
      if (vol > 0 && isMuted) {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    ref: sectionRef,
    style: {
      padding: 'clamp(80px, 10vw, 140px) var(--container-pad)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(ellipse 1400px 600px at 50% 20%, rgba(115, 224, 255, 0.04) 0%, transparent 60%), radial-gradient(ellipse 900px 400px at 80% 80%, rgba(172, 255, 74, 0.02) 0%, transparent 70%)',
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1400,
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'clamp(96px, 11vw, 144px)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.5fr)',
      gap: 'clamp(48px, 6vw, 80px)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-caption)',
      fontSize: '0.7rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--color-accent-secondary)',
      margin: '0 0 24px',
      fontWeight: 500
    }
  }, "ABOUT"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      fontSize: 'clamp(2rem, 4vw, 2.75rem)',
      color: 'var(--color-text-primary)',
      marginBottom: '20px',
      lineHeight: 1.15,
      letterSpacing: '-0.02em'
    }
  }, "How Jonathan thinks."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      fontSize: '1.0625rem',
      lineHeight: 1.8,
      color: 'var(--color-text-secondary)',
      margin: '0 0 18px'
    }
  }, "I reveal the patterns beneath complexity and turn them into experiences people can understand, use, and adopt."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      fontSize: '0.9375rem',
      lineHeight: 1.8,
      color: 'var(--color-text-secondary)',
      margin: '0 0 28px'
    }
  }, "I begin by mapping the relationship between people, information, systems, and behavior. Before I design content, I design understanding\u2014revealing what matters, where friction exists, and what will move people forward. My work brings together learning strategy, cinematic storytelling, digital experience design, and AI-enabled production to create solutions that are clear, useful, and built for adoption."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      font: 'var(--text-body)',
      fontSize: '0.875rem',
      fontWeight: 500,
      color: 'rgb(8, 13, 11)',
      background: 'var(--color-accent-primary)',
      padding: '12px 24px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      transition: 'all var(--motion-standard) var(--ease-standard)'
    },
    onClick: onResume
  }, "View r\xE9sum\xE9"), /*#__PURE__*/React.createElement("button", {
    style: {
      font: 'var(--text-body)',
      fontSize: '0.875rem',
      fontWeight: 500,
      color: 'var(--color-accent-primary)',
      border: '1px solid rgba(115, 224, 255, 0.3)',
      padding: '11px 23px',
      borderRadius: 'var(--radius-pill)',
      background: 'transparent',
      cursor: 'pointer',
      transition: 'all var(--motion-standard) var(--ease-standard)'
    },
    onClick: onLinkedIn
  }, "LinkedIn"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      paddingBottom: '56.25%',
      background: 'rgba(0, 0, 0, 0.08)',
      borderRadius: '24px',
      border: '1px solid rgba(115, 224, 255, 0.08)',
      overflow: 'hidden',
      boxShadow: '0 0 40px rgba(115, 224, 255, 0.04), inset 0 0 40px rgba(115, 224, 255, 0.008)',
      group: 'contents'
    }
  }, /*#__PURE__*/React.createElement("video", {
    ref: videoRef,
    autoPlay: isPlaying,
    loop: !isPlaying,
    muted: isMuted,
    playsInline: true,
    preload: "metadata",
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      background: 'rgba(8, 13, 11, 0.4)'
    }
  }, /*#__PURE__*/React.createElement("source", {
    src: "./assets/video/the-train-story.mp4",
    type: "video/mp4"
  }), "The Thinking Engine animation"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -60,
      left: 0,
      right: 0,
      height: 60,
      background: 'linear-gradient(to bottom, rgba(115, 224, 255, 0.03), transparent)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'linear-gradient(to top, rgba(8, 13, 11, 0.9), transparent)',
      padding: '32px 24px 24px',
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: togglePlay,
    style: {
      background: 'rgba(115, 224, 255, 0.2)',
      border: '1px solid rgba(115, 224, 255, 0.3)',
      borderRadius: 8,
      padding: '8px 12px',
      cursor: 'pointer',
      color: 'rgba(115, 224, 255, 0.8)',
      fontSize: '14px',
      fontWeight: 500,
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, isPlaying ? '⏸ Pause' : '▶ Play'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: toggleMute,
    style: {
      background: 'transparent',
      border: 'none',
      color: 'rgba(115, 224, 255, 0.8)',
      cursor: 'pointer',
      fontSize: '16px',
      padding: 0,
      lineHeight: 1
    }
  }, isMuted ? '🔇' : '🔊'), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "1",
    step: "0.05",
    value: isMuted ? 0 : volume,
    onChange: handleVolumeChange,
    style: {
      width: 80,
      height: 4,
      background: 'rgba(115, 224, 255, 0.1)',
      borderRadius: 2,
      outline: 'none',
      cursor: 'pointer',
      accentColor: 'rgb(115, 224, 255)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(115, 224, 255, 0.6)',
      fontSize: '12px',
      fontFamily: 'monospace'
    }
  }, Math.round(volume * 100), "%")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'clamp(160px, 18vw, 240px)',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-caption)',
      fontSize: '0.65rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'rgba(172, 255, 74, 0.6)',
      margin: '0 0 24px',
      fontWeight: 500
    }
  }, "TEMPORARY UNVERIFIED CAREER DATA \u2014 REPLACE WITH APPROVED R\xC9SUM\xC9 DATA BEFORE RELEASE."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'clamp(100px, 12vw, 160px)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)',
      fontSize: 'clamp(1.375rem, 3vw, 1.75rem)',
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      margin: '0 0 32px',
      lineHeight: 1.2,
      letterSpacing: '-0.02em'
    }
  }, "What I do."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'clamp(56px, 7vw, 96px)',
      marginBottom: 'clamp(80px, 10vw, 120px)'
    }
  }, [{
    title: 'DESIGN',
    items: ['Learning ecosystems', 'Experience strategy', 'Instructional design', 'Systems thinking', 'Learning architecture']
  }, {
    title: 'BUILD',
    items: ['Articulate 360', 'Camtasia', 'Figma', 'Adobe Creative Cloud', 'AI-enabled tools']
  }, {
    title: 'KNOWN FOR',
    items: ['Systems thinking', 'Clarity in complexity', 'Learning that performs', 'Human-centered design', 'Strategic impact']
  }].map((col, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      paddingRight: i < 2 ? 'clamp(32px, 4vw, 64px)' : 0,
      borderRight: i < 2 ? '1px solid rgba(115, 224, 255, 0.08)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-caption)',
      fontSize: '0.7rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--color-accent-secondary)',
      margin: '0 0 24px',
      fontWeight: 500
    }
  }, col.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, col.items.map((item, j) => /*#__PURE__*/React.createElement("p", {
    key: j,
    style: {
      font: 'var(--text-body)',
      fontSize: '0.9375rem',
      color: 'var(--color-text-secondary)',
      lineHeight: 1.6,
      margin: 0
    }
  }, item))))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)',
      fontSize: 'clamp(1.375rem, 3vw, 1.75rem)',
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      margin: '0 0 32px',
      lineHeight: 1.2,
      letterSpacing: '-0.02em'
    }
  }, "How I work."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(64px, 8vw, 96px)'
    }
  }, [{
    title: 'Clarify',
    copy: 'Reveal the essential problem before designing the solution.'
  }, {
    title: 'Connect',
    copy: 'Align people, systems, information, and behavior into one coherent experience.'
  }, {
    title: 'Transform',
    copy: 'Turn understanding into action, adoption, and measurable movement.'
  }].map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: 'var(--color-accent-primary)',
      marginBottom: 12,
      lineHeight: 1,
      opacity: 0.8
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("h4", {
    style: {
      font: 'var(--text-h4)',
      fontSize: '1.125rem',
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      margin: '0 0 16px',
      lineHeight: 1.2
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      fontSize: '0.9375rem',
      lineHeight: 1.8,
      color: 'var(--color-text-secondary)',
      margin: 0,
      maxWidth: 520
    }
  }, p.copy), i < 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'clamp(48px, 6vw, 72px)',
      height: '1px',
      background: 'rgba(115, 224, 255, 0.06)'
    }
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'clamp(140px, 16vw, 200px)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)',
      fontSize: 'clamp(1.375rem, 3vw, 1.75rem)',
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      margin: '0 0 12px',
      lineHeight: 1.2,
      letterSpacing: '-0.02em'
    }
  }, "The evolution."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      fontSize: '0.9375rem',
      color: 'var(--color-text-secondary)',
      marginBottom: 56,
      lineHeight: 1.6
    }
  }, "How experience shaped the way I solve problems."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 48,
      overflowX: 'auto',
      paddingBottom: 16
    }
  }, [{
    years: '2010–2013',
    role: 'Studio Director',
    org: 'Atlanta International School',
    summary: 'Founded and led the creative studio, launching emerging education technologies and establishing design practice for the school.',
    achievements: ['Founded design studio', 'Launched digital initiatives', 'Led creative team'],
    tech: ['Figma', 'Adobe Creative Suite', 'Web technologies']
  }, {
    years: '2013–2014',
    role: 'Design Systems Lead',
    org: 'Georgia State University',
    summary: 'Developed design infrastructure and learning systems for the university\'s digital transformation initiative.',
    achievements: ['Built design system', 'Unified digital platforms', 'Trained design team'],
    tech: ['Design systems', 'Component architecture', 'Figma']
  }, {
    years: '2014–2016',
    role: 'Graduate Design Researcher',
    org: 'Arizona State University',
    summary: 'Advanced study in design strategy, systems thinking, and human-centered research methodologies.',
    achievements: ['Published research', 'Advanced systems thinking', 'Strategic frameworks'],
    tech: ['Research methods', 'Design thinking', 'Systems analysis']
  }, {
    years: '2016–2019',
    role: 'Senior Learning Strategist',
    org: 'Cox Enterprises',
    summary: 'Transformed enterprise learning systems, designing at scale for 50,000+ employees across multiple business units.',
    achievements: ['Enterprise transformation', 'Scaled learning platforms', 'Strategic impact'],
    tech: ['Articulate 360', 'Camtasia', 'Learning architecture']
  }, {
    years: '2019–2023',
    role: 'Principal Design Architect',
    org: 'IHG Hotels & Resorts',
    summary: 'Led global learning experience redesign for hospitality industry, integrating AI and video-based learning at enterprise scale.',
    achievements: ['Global redesign', 'AI integration', 'Video production'],
    tech: ['AI-enabled content', 'Video production', 'Learning platforms']
  }, {
    years: '2023–Present',
    role: 'Creative Director',
    org: 'Independent Studio',
    summary: 'Founded AI-creative studio, developing next-generation learning experiences and strategic consulting.',
    achievements: ['Studio founding', 'AI research', 'Strategic consulting'],
    tech: ['AI/ML integration', 'Full-stack design', 'Advanced production']
  }].map((m, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    style: {
      flex: '0 0 auto',
      padding: '12px 20px',
      borderRadius: 'var(--radius-pill)',
      background: i === 0 ? 'var(--color-accent-primary)' : 'rgba(115, 224, 255, 0.1)',
      color: i === 0 ? 'rgb(8, 13, 11)' : 'var(--color-text-secondary)',
      border: 'none',
      cursor: 'pointer',
      font: 'var(--text-body)',
      fontSize: '0.875rem',
      fontWeight: 500,
      transition: 'all 0.3s ease',
      whiteSpace: 'nowrap'
    }
  }, m.years))), /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 120,
      padding: 32,
      border: '1px solid rgba(115, 224, 255, 0.1)',
      borderRadius: 12,
      background: 'rgba(115, 224, 255, 0.02)',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 32,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-caption)',
      fontSize: '0.75rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--color-accent-secondary)',
      margin: '0 0 8px',
      opacity: 0.8
    }
  }, "ROLE"), /*#__PURE__*/React.createElement("h4", {
    style: {
      font: 'var(--text-h4)',
      fontSize: '1.125rem',
      color: 'var(--color-text-primary)',
      margin: '0 0 16px'
    }
  }, "Studio Director"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-caption)',
      fontSize: '0.75rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--color-accent-secondary)',
      margin: '0 0 8px',
      marginTop: 16,
      opacity: 0.8
    }
  }, "ORGANIZATION"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      fontSize: '0.9375rem',
      color: 'var(--color-text-secondary)',
      margin: 0
    }
  }, "Atlanta International School")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-caption)',
      fontSize: '0.75rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--color-accent-secondary)',
      margin: '0 0 8px',
      opacity: 0.8
    }
  }, "TIMELINE"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      fontSize: '0.9375rem',
      color: 'var(--color-text-secondary)',
      margin: 0
    }
  }, "2010\u20132013"))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      fontSize: '0.9375rem',
      lineHeight: 1.7,
      color: 'var(--color-text-secondary)',
      margin: '0 0 16px'
    }
  }, "Founded and led the creative studio, launching emerging education technologies and establishing design practice for the school."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 24,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-caption)',
      fontSize: '0.75rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--color-accent-secondary)',
      margin: '0 0 12px',
      opacity: 0.8
    }
  }, "KEY ACHIEVEMENTS"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 16,
      font: 'var(--text-body)',
      fontSize: '0.875rem',
      color: 'var(--color-text-secondary)',
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("li", null, "Founded design studio"), /*#__PURE__*/React.createElement("li", null, "Launched digital initiatives"), /*#__PURE__*/React.createElement("li", null, "Led creative team"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-caption)',
      fontSize: '0.75rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--color-accent-secondary)',
      margin: '0 0 12px',
      opacity: 0.8
    }
  }, "TECHNOLOGIES"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 16,
      font: 'var(--text-body)',
      fontSize: '0.875rem',
      color: 'var(--color-text-secondary)',
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("li", null, "Figma"), /*#__PURE__*/React.createElement("li", null, "Adobe Creative Suite"), /*#__PURE__*/React.createElement("li", null, "Web technologies")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'clamp(100px, 12vw, 160px)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)',
      fontSize: 'clamp(1.375rem, 3vw, 1.75rem)',
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      margin: '0 0 32px',
      lineHeight: 1.2,
      letterSpacing: '-0.02em'
    }
  }, "What I believe."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'clamp(48px, 6vw, 64px)'
    }
  }, [{
    title: 'Intelligence',
    copy: 'I look beneath the obvious to understand how systems, people, and decisions connect.'
  }, {
    title: 'Confidence',
    copy: 'I make clear decisions while remaining open to evidence, feedback, and change.'
  }, {
    title: 'Self-awareness',
    copy: 'I understand how my perspective shapes the work and where collaboration strengthens it.'
  }, {
    title: 'Empathy',
    copy: 'I design for the person who must understand, use, and live with the outcome.'
  }].map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderLeft: '2px solid rgba(115, 224, 255, 0.2)',
      paddingLeft: 'clamp(24px, 3vw, 32px)'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      font: 'var(--text-h4)',
      fontSize: '1rem',
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      margin: '0 0 12px',
      lineHeight: 1.3
    }
  }, b.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      fontSize: '0.875rem',
      lineHeight: 1.7,
      color: 'var(--color-text-secondary)',
      margin: 0
    }
  }, b.copy)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 'clamp(140px, 16vw, 200px)',
      paddingTop: 'clamp(80px, 10vw, 140px)',
      borderTop: '1px solid rgba(115, 224, 255, 0.06)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h2)',
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      color: 'var(--color-text-primary)',
      margin: '0 0 12px',
      lineHeight: 1.2,
      letterSpacing: '-0.02em'
    }
  }, "Understanding changes", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-accent-primary)'
    }
  }, "everything.")))));
}
if (typeof window !== 'undefined') {
  window.AboutV2 = AboutV2;
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "archive/root-cleanup/About_v2_code.jsx", error: String((e && e.message) || e) }); }

// archive/root-cleanup/CHECKPOINT_pre-scene02-patch1-the-mind.jsx
try { (() => {
// CHECKPOINT: Pre-Scene 02 Patch 1 (The Mind)
// Captured before Movement I reconstruction
// Two-column desktop layout implementation
// Thinking Engine video integration
// Spacing optimization

function AboutV2({
  registerSectionRef,
  onResume,
  onLinkedIn,
  onSelectedWork
}) {
  const sectionRef = React.useRef(null);
  React.useEffect(() => {
    if (registerSectionRef && sectionRef.current) {
      registerSectionRef(sectionRef.current, 'About');
    }
  }, [registerSectionRef]);
  return /*#__PURE__*/React.createElement("section", {
    ref: sectionRef,
    style: {
      padding: 'clamp(80px, 10vw, 140px) var(--container-pad)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(ellipse 1400px 600px at 50% 20%, rgba(115, 224, 255, 0.04) 0%, transparent 60%), radial-gradient(ellipse 900px 400px at 80% 80%, rgba(172, 255, 74, 0.02) 0%, transparent 70%)',
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1400,
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'clamp(140px, 16vw, 200px)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
      color: 'var(--color-text-primary)',
      marginBottom: 40,
      lineHeight: 1.15,
      letterSpacing: '-0.02em'
    }
  }, "How Jonathan thinks."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      fontSize: '1.0625rem',
      lineHeight: 1.8,
      color: 'var(--color-text-secondary)',
      maxWidth: 620,
      marginBottom: 24
    }
  }, "I reveal the patterns beneath complexity and turn them into experiences people can understand, use, and adopt."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      fontSize: '0.9375rem',
      lineHeight: 1.8,
      color: 'var(--color-text-secondary)',
      maxWidth: 620,
      marginBottom: 48
    }
  }, "I begin by mapping the relationship between people, information, systems, and behavior. Before I design content, I design understanding\u2014revealing what matters, where friction exists, and what will move people forward. My work brings together learning strategy, cinematic storytelling, digital experience design, and AI-enabled production to create solutions that are clear, useful, and built for adoption."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'center',
      flexWrap: 'wrap',
      marginBottom: 'clamp(100px, 12vw, 160px)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: 'var(--text-body)',
      fontSize: '0.875rem',
      fontWeight: 500,
      color: 'rgb(255, 255, 255)',
      background: 'var(--color-accent-primary)',
      padding: '12px 24px',
      borderRadius: 'var(--radius-pill)',
      textDecoration: 'none',
      transition: 'all var(--motion-standard) var(--ease-standard)',
      cursor: 'pointer'
    }
  }, "View r\xE9sum\xE9"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: 'var(--text-body)',
      fontSize: '0.875rem',
      fontWeight: 500,
      color: 'var(--color-accent-primary)',
      border: '1px solid rgba(115, 224, 255, 0.3)',
      padding: '11px 23px',
      borderRadius: 'var(--radius-pill)',
      textDecoration: 'none',
      transition: 'all var(--motion-standard) var(--ease-standard)',
      cursor: 'pointer'
    }
  }, "LinkedIn")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      paddingBottom: '56.25%',
      background: 'rgba(0, 0, 0, 0.12)',
      borderRadius: '28px',
      border: '1px solid rgba(115, 224, 255, 0.1)',
      overflow: 'hidden',
      boxShadow: '0 0 80px rgba(115, 224, 255, 0.06), inset 0 0 80px rgba(115, 224, 255, 0.01), 0 60px 160px rgba(0, 0, 0, 0.5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(8, 13, 11, 0.95)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -80,
      left: 0,
      right: 0,
      height: 80,
      background: 'linear-gradient(to bottom, rgba(115, 224, 255, 0.04), transparent)',
      pointerEvents: 'none'
    }
  })))));
}
if (typeof window !== 'undefined') {
  window.AboutV2 = AboutV2;
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "archive/root-cleanup/CHECKPOINT_pre-scene02-patch1-the-mind.jsx", error: String((e && e.message) || e) }); }

// archive/root-cleanup/Homepage_POST_P0.jsx
try { (() => {
function Section({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 'clamp(56px, 6vw, 100px)',
      paddingBottom: 'clamp(56px, 6vw, 100px)',
      paddingLeft: 'var(--container-pad)',
      paddingRight: 'var(--container-pad)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      ...style
    }
  }, children);
}
function Eyebrow({
  children,
  color = 'var(--color-accent-secondary)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color,
      marginBottom: 12
    }
  }, children);
}
const prefersReduced = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (typeof document !== 'undefined' && !document.getElementById('jiz-reveal-highlight-kf')) {
  const s = document.createElement('style');
  s.id = 'jiz-reveal-highlight-kf';
  s.textContent = '@keyframes jiz-reveal-highlight{0%{box-shadow:0 0 0 0 rgba(198,242,58,0)}25%{box-shadow:0 0 28px 4px rgba(198,242,58,.35)}100%{box-shadow:0 0 0 0 rgba(198,242,58,0)}}';
  document.head.appendChild(s);
}
function VideoLightbox({
  src,
  open,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      background: 'rgba(8,10,12,0.86)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5vh 5vw'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'relative',
      width: 'min(1100px, 88vw)',
      aspectRatio: '16/9',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '2px solid var(--color-accent-primary)',
      boxShadow: '0 0 0 1px rgba(198,242,58,0.25), 0 0 60px rgba(198,242,58,0.35), 0 30px 80px rgba(0,0,0,0.6)'
    }
  }, /*#__PURE__*/React.createElement("video", {
    src: src,
    controls: true,
    autoPlay: true,
    playsInline: true,
    style: {
      width: '100%',
      height: '100%',
      display: 'block',
      background: '#000'
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close video",
    style: {
      position: 'absolute',
      top: 24,
      right: 24,
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: '1px solid var(--color-border-default)',
      background: 'rgba(0,0,0,0.5)',
      color: 'var(--color-text-primary)',
      fontSize: 20,
      cursor: 'pointer'
    }
  }, "\u2715"));
}
function TrainStoryVideo() {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(true),
    style: {
      aspectRatio: '16/9',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '2px solid var(--color-accent-primary)',
      boxShadow: 'var(--glow-lime)',
      position: 'relative',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("video", {
    playsInline: true,
    preload: "metadata",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("source", {
    src: "./assets/video/the-train-story.mp4",
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'rgba(8,10,12,0.55)',
      border: '1px solid var(--color-accent-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "var(--color-accent-primary)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5v14l11-7z"
  }))))), /*#__PURE__*/React.createElement(VideoLightbox, {
    src: "./assets/video/the-train-story.mp4",
    open: open,
    onClose: () => setOpen(false)
  }));
}
function ChromaKeyVideo({
  src,
  className,
  style
}) {
  const videoRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    const video = videoRef.current,
      canvas = canvasRef.current;
    if (!video || !canvas) return;
    const ctx = canvas.getContext('2d', {
      willReadFrequently: true
    });
    let raf,
      isVisible = true;
    const io = new IntersectionObserver(entries => {
      isVisible = entries[0].isIntersecting;
    }, {
      threshold: 0.01
    });
    io.observe(canvas);
    const draw = () => {
      raf = requestAnimationFrame(draw);
      if (!isVisible || video.paused || video.ended || !video.videoWidth) return;
      if (canvas.width !== video.videoWidth) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
      }
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const d = frame.data;
      for (let i = 0; i < d.length; i += 4) {
        const r = d[i],
          g = d[i + 1],
          b = d[i + 2];
        if (g > 60 && g > r * 1.06 && g > b * 1.06) {
          const excess = g - Math.max(r, b);
          d[i + 3] = Math.max(0, 255 - excess * 10);
          d[i + 1] = Math.min(g, Math.max(r, b) + excess * 0.15);
          d[i + 0] = Math.min(255, r + excess * 0.12);
          d[i + 2] = Math.min(255, b + excess * 0.12);
        }
      }
      ctx.putImageData(frame, 0, 0);
    };
    video.addEventListener('loadeddata', () => video.play().catch(() => {}));
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("video", {
    ref: videoRef,
    src: src,
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    className: className,
    style: style
  }));
}
function Reveal({
  children,
  style,
  delay = 0,
  highlight = false
}) {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (prefersReduced()) {
      setVisible(true);
      return;
    }
    const t = setTimeout(() => setVisible(true), delay + 30);
    return () => clearTimeout(t);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(16px)',
      transition: `opacity var(--motion-slow) var(--ease-out), transform var(--motion-slow) var(--ease-out)`,
      ...(highlight ? {
        borderRadius: 'var(--radius-lg)',
        boxShadow: visible ? '0 0 0 0 rgba(198,242,58,0)' : 'none',
        animation: visible && !prefersReduced() ? 'jiz-reveal-highlight 1.1s ease-out' : 'none'
      } : {}),
      ...style
    }
  }, children);
}
function TiltCard({
  children
}) {
  const ref = React.useRef(null);
  const [tilt, setTilt] = React.useState({
    x: 0,
    y: 0
  });
  const onMove = e => {
    if (prefersReduced() || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setTilt({
      x: ((e.clientY - r.top) / r.height - 0.5) * -5,
      y: ((e.clientX - r.left) / r.width - 0.5) * 5
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    onMouseMove: onMove,
    onMouseLeave: () => setTilt({
      x: 0,
      y: 0
    }),
    style: {
      transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      transition: 'transform var(--motion-fast) var(--ease-standard)'
    }
  }, children);
}
function DataFlowVisual() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 300 160",
    style: {
      width: '100%',
      height: '100%'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "jz-flow",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "var(--signal-lime)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "var(--accent-cyan)"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M10 130 C 80 30, 150 150, 290 40",
    fill: "none",
    stroke: "url(#jz-flow)",
    strokeWidth: "1.5",
    opacity: "0.8"
  }), [[10, 130], [70, 90], [140, 120], [200, 55], [290, 40]].map((p, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: p[0],
    cy: p[1],
    r: "3",
    fill: "var(--signal-lime)",
    opacity: "0.9"
  })));
}
function NetworkField({
  pointerRef
}) {
  return null;
}
function AmbientField() {
  return null;
}
function ParticleField() {
  return null;
}
function ForegroundHaze() {
  return null;
}
function PersistentEnvironment() {
  const [prog, setProg] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProg(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const blueOpacity = 0.22 - prog * 0.12;
  const limeOpacity = 0.05 + prog * 0.16;
  return null;
}
function Hero({
  onOpenWork
}) {
  const {
    Button,
    StatusPill
  } = window.JIZPortfolioSite_b3ba38;
  const [glassesFlash, setGlassesFlash] = React.useState(false);
  React.useEffect(() => {
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const onSignal = () => {
      if (reduced) return;
      setGlassesFlash(true);
      setTimeout(() => setGlassesFlash(false), 650);
    };
    window.addEventListener('jiz-signal', onSignal);
    return () => window.removeEventListener('jiz-signal', onSignal);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-environment",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-base-gradient"
  }), /*#__PURE__*/React.createElement("video", {
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    volume: 0,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: 'scale(1.9)',
      opacity: 0.28,
      mixBlendMode: 'screen'
    },
    ref: el => {
      if (el) {
        el.muted = true;
        el.volume = 0;
      }
    },
    onLoadedData: e => {
      e.target.muted = true;
      e.target.volume = 0;
    }
  }, /*#__PURE__*/React.createElement("source", {
    src: "./assets/video/hero-bg.mp4",
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-signal-field"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-ambient-glow hero-ambient-glow--blue"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-ambient-glow hero-ambient-glow--chartreuse"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-copy"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Strategist. Designer. Systems thinker."), /*#__PURE__*/React.createElement("h1", {
    className: "hero-title"
  }, "Learning, ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-accent-primary)'
    }
  }, "directed.")), /*#__PURE__*/React.createElement("p", {
    className: "hero-description"
  }, "I turn complexity into experiences people understand."), /*#__PURE__*/React.createElement("p", {
    className: "hero-manifesto"
  }, "Understanding is the product."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'flex-start',
      marginTop: 44,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onOpenWork,
    style: {
      padding: '15px 28px',
      fontSize: '1rem'
    }
  }, "Let's design what's next"), /*#__PURE__*/React.createElement(StatusPill, {
    label: "Open to select opportunities",
    onClick: () => window.jizNavigate && window.jizNavigate('Contact')
  })))), /*#__PURE__*/React.createElement("div", {
    className: "hero-portrait-stage"
  }, /*#__PURE__*/React.createElement(ChromaKeyVideo, {
    src: "./assets/video/hero-portrait-green.mp4?v=4",
    className: "hero-portrait",
    style: {
      WebkitMaskImage: 'linear-gradient(to bottom,#000 62%,rgba(0,0,0,.9) 80%,transparent 98%),linear-gradient(to right,transparent 0%,#000 30%),linear-gradient(to left,transparent 0%,#000 20%),radial-gradient(ellipse 55% 45% at 8% 100%,transparent 0%,transparent 20%,#000 75%)',
      WebkitMaskComposite: 'source-in,source-in,source-in',
      maskImage: 'linear-gradient(to bottom,#000 62%,rgba(0,0,0,.9) 80%,transparent 98%),linear-gradient(to right,transparent 0%,#000 30%),linear-gradient(to left,transparent 0%,#000 20%),radial-gradient(ellipse 55% 45% at 8% 100%,transparent 0%,transparent 20%,#000 75%)',
      maskComposite: 'intersect'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: '30%',
      background: 'linear-gradient(to top, rgba(198,242,58,0.42), rgba(198,242,58,0.12) 60%, transparent)',
      mixBlendMode: 'screen',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '18%',
      top: '22%',
      width: '20%',
      height: '10%',
      background: 'radial-gradient(ellipse, rgba(198,242,58,0.9), transparent 70%)',
      mixBlendMode: 'screen',
      opacity: glassesFlash ? 0.85 : 0,
      transition: glassesFlash ? 'opacity 0.12s ease-out' : 'opacity 0.5s ease-in',
      pointerEvents: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-foreground-atmosphere",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("style", null, `
.hero{position:relative;isolation:isolate;overflow:hidden;width:100%;min-height:calc(100svh - 96px);background:radial-gradient(ellipse at 74% 42%,rgba(22,113,163,.16) 0%,rgba(20,74,91,.09) 30%,transparent 64%),radial-gradient(ellipse at 40% 54%,rgba(180,226,63,.055) 0%,transparent 52%)}
.hero-environment{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;background:transparent}
.hero-base-gradient{position:absolute;inset:0;background:linear-gradient(90deg,rgba(8,13,11,.96) 0%,rgba(10,18,15,.9) 42%,rgba(13,30,28,.84) 72%,rgba(8,18,17,.92) 100%)}
.hero-signal-field{position:absolute;inset:-8%;opacity:.42;background-image:radial-gradient(circle at 18% 48%,rgba(115,224,255,.09) 0 1px,transparent 2px),radial-gradient(circle at 42% 64%,rgba(197,255,45,.06) 0 1px,transparent 2px),radial-gradient(circle at 78% 38%,rgba(115,224,255,.1) 0 1px,transparent 2px);background-size:160px 140px,220px 180px,190px 170px}
.hero-ambient-glow{position:absolute;pointer-events:none;border-radius:50%;filter:blur(90px)}
.hero-ambient-glow--blue{width:min(72vw,1200px);height:min(72vw,1200px);right:-18vw;top:-16%;background:radial-gradient(circle,rgba(29,132,196,.2) 0%,rgba(24,91,126,.1) 38%,transparent 72%)}
.hero-ambient-glow--chartreuse{width:min(46vw,760px);height:min(38vw,640px);left:12%;bottom:-26%;background:radial-gradient(circle,rgba(197,255,45,.028) 0%,transparent 68%)}
.hero-content{position:relative;z-index:5;display:grid;align-items:center;width:min(1440px,calc(100% - 2*clamp(28px,6vw,112px)));min-height:calc(100svh - 96px);margin-inline:auto;padding-block:clamp(64px,7vw,104px)}
.hero-copy{width:min(38vw,560px);margin-left:clamp(0px,1vw,20px)}
.hero-eyebrow{margin-bottom:26px}
.hero-title{font:var(--text-display);font-size:clamp(3.4rem,2.2rem + 4.2vw,6.6rem);line-height:.92;color:var(--color-text-primary);margin:0 0 40px}
.hero-description{font:var(--text-body-lg);font-size:clamp(1.5rem,1.3rem + .5vw,2rem);line-height:1.42;color:var(--color-text-secondary);max-width:480px;margin:0 0 30px}
.hero-manifesto{font:var(--text-body);font-size:1.5rem;font-weight:300;font-style:italic;color:rgba(247,248,250,0.85);max-width:440px;margin:0;border-left:2px solid rgba(255,255,255,0.25);padding-left:16px}
.hero-portrait-stage{position:absolute;inset:0;z-index:3;overflow:visible;pointer-events:none;background:transparent;border:0;box-shadow:none}
.hero-portrait{position:absolute;z-index:2;right:clamp(50px,7vw,140px);bottom:-7%;width:clamp(520px,44vw,840px);height:114%;max-width:none;max-height:114%;object-fit:contain;object-position:right bottom;transform:translate3d(0,0,0);transform-origin:right bottom;pointer-events:auto;cursor:pointer;opacity:.92;filter:drop-shadow(-30px 6px 52px rgba(27,128,194,.2)) drop-shadow(-10px 0 30px rgba(49,165,223,.12));-webkit-mask-image:linear-gradient(to bottom,#000 46%,rgba(0,0,0,.85) 66%,transparent 96%),linear-gradient(to right,transparent 0%,#000 26%),linear-gradient(to left,transparent 0%,#000 14%),linear-gradient(to top,transparent 0%,#000 8%);-webkit-mask-composite:source-in,source-in,source-in;mask-image:linear-gradient(to bottom,#000 46%,rgba(0,0,0,.85) 66%,transparent 96%),linear-gradient(to right,transparent 0%,#000 26%),linear-gradient(to left,transparent 0%,#000 14%),linear-gradient(to top,transparent 0%,#000 8%);mask-composite:intersect}
.hero-portrait-backlight{position:absolute;right:-8vw;top:8%;width:min(68vw,1120px);height:min(72vw,1180px);border-radius:50%;background:radial-gradient(ellipse at 56% 46%,rgba(48,169,236,.23) 0%,rgba(26,111,162,.14) 26%,rgba(19,72,99,.07) 48%,transparent 74%);filter:blur(48px);opacity:.9}
.hero-portrait-edge-glow{position:absolute;inset:0;z-index:3;pointer-events:none;background:radial-gradient(ellipse at 74% 48%,rgba(47,166,227,.11) 0%,rgba(31,110,159,.06) 30%,transparent 62%);mix-blend-mode:screen;filter:blur(14px)}
.hero-portrait-haze{position:absolute;z-index:4;right:-2%;bottom:-3%;width:66%;height:58%;pointer-events:none;background:radial-gradient(ellipse at 68% 58%,rgba(54,160,204,.1) 0%,rgba(26,92,109,.06) 34%,transparent 70%),linear-gradient(90deg,transparent 10%,rgba(17,78,94,.04) 48%,transparent 92%);filter:blur(20px);mix-blend-mode:screen}
.hero-foreground-atmosphere{position:absolute;inset:0;z-index:4;pointer-events:none;background:radial-gradient(ellipse at 70% 66%,rgba(52,154,198,.075) 0%,transparent 44%),linear-gradient(90deg,transparent 34%,rgba(18,72,83,.03) 56%,transparent 88%);mix-blend-mode:screen}
@media(max-width:1180px){.hero-copy{width:min(52vw,620px);margin-left:clamp(24px,4vw,64px)}.hero-title{font-size:clamp(2.6rem,5vw,4rem)}.hero-portrait{right:-100px;width:clamp(520px,54vw,780px)}}
@media(max-width:900px){.hero{min-height:auto}.hero-content{min-height:auto;padding-top:92px;padding-bottom:520px}.hero-copy{width:min(100%,620px);margin-left:0}.hero-portrait{right:50%;bottom:-8px;width:min(640px,94vw);transform:translateX(50%)}.hero-portrait-backlight{right:50%;top:auto;bottom:-12%;width:100vw;height:640px;transform:translateX(50%)}.hero-portrait-haze{right:0;width:100%}}
@media(max-width:600px){.hero-content{padding-top:72px;padding-bottom:420px}.hero-portrait{width:min(540px,108vw)}}
@media(prefers-reduced-motion:reduce){.hero-portrait{transform:none;transition:none}}
      `));
}
function ProjectCard({
  index,
  title,
  category,
  description,
  image,
  insight,
  stage,
  featured,
  active,
  onActivate,
  dimmed,
  onOpenCaseStudy
}) {
  const [hover, setHover] = React.useState(false);
  const stages = ['Discovery', 'Strategy', 'Design', 'Production', 'Impact'];
  const handleClick = () => {
    if (index === 0) onOpenCaseStudy && onOpenCaseStudy();
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => {
      onActivate();
      if (index === 0) handleClick();
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      cursor: 'pointer',
      position: 'relative',
      minWidth: 0,
      background: 'rgba(23,26,31,0.4)',
      backdropFilter: 'blur(14px)',
      border: active ? '1px solid rgba(198,242,58,0.5)' : '1px solid var(--color-border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      transition: 'all var(--motion-standard) var(--ease-standard)',
      transform: hover ? 'translateY(-4px)' : 'none',
      boxShadow: active ? 'var(--shadow-elevated), 0 0 28px rgba(198,242,58,0.18)' : hover ? 'var(--shadow-elevated)' : 'var(--shadow-subtle)',
      opacity: dimmed ? 0.55 : 1,
      gridColumn: featured ? 'span 2' : 'span 1',
      gridRow: featured ? 'span 2' : 'span 1'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: featured ? '16/10' : '4/3',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: `work-${index}`,
    src: image,
    shape: "rect",
    placeholder: `Drop preview for ${title}`,
    style: {
      width: '100%',
      height: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: hover ? 'linear-gradient(115deg, transparent 30%, rgba(198,242,58,0.1) 50%, transparent 70%)' : 'transparent',
      transition: 'background var(--motion-standard) var(--ease-standard)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      boxShadow: 'inset 0 -40px 50px -20px rgba(11,13,16,0.7)',
      pointerEvents: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: featured ? 26 : 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      fontSize: '0.6875rem',
      color: 'var(--color-accent-secondary)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)'
    }
  }, category), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-h3)',
      fontSize: featured ? '1.5rem' : '1.125rem',
      color: 'var(--color-text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--color-text-secondary)'
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 8,
      flexWrap: 'wrap'
    }
  }, stages.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      font: 'var(--text-hud)',
      fontSize: '0.625rem',
      padding: '3px 8px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (s === stage ? 'var(--color-accent-primary)' : 'var(--color-border-default)'),
      color: s === stage ? 'var(--color-accent-primary)' : 'var(--color-text-muted)'
    }
  }, s))), active && insight && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      borderLeft: '2px solid var(--color-accent-primary)',
      paddingLeft: 12,
      animation: 'jiz-stage-in 0.4s var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-hud)',
      fontSize: '0.625rem',
      color: 'var(--color-text-muted)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-hud)'
    }
  }, "Director's commentary"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      fontSize: '0.9375rem',
      color: 'var(--color-text-primary)',
      fontStyle: 'italic',
      marginTop: 4
    }
  }, insight)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--color-accent-primary)',
      marginTop: 4
    }
  }, "View project \u2192")));
}
function FilmSection() {
  const [playing, setPlaying] = React.useState(false);
  const [ended, setEnded] = React.useState(false);
  const [watched, setWatched] = React.useState(false);
  const [paused, setPaused] = React.useState(true);
  const [tilt, setTilt] = React.useState({
    x: 0,
    y: 0
  });
  const [muted, setMuted] = React.useState(false);
  const [showControls, setShowControls] = React.useState(true);
  const [progress, setProgress] = React.useState(0);
  const [curTime, setCurTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [theaterSize, setTheaterSize] = React.useState(null);
  const videoRef = React.useRef(null);
  const wrapRef = React.useRef(null);
  const sectionRef = React.useRef(null);
  const hideTimer = React.useRef(null);
  const reduced = prefersReduced();
  const fmt = s => {
    if (!isFinite(s)) return '0:00';
    const m = Math.floor(s / 60),
      r = Math.floor(s % 60);
    return `${m}:${String(r).padStart(2, '0')}`;
  };
  const onMove = e => {
    if (reduced || !wrapRef.current || !playing) {
      if (!playing) return;
    }
    if (playing) {
      setShowControls(true);
      clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(() => setShowControls(false), 2800);
    }
    if (reduced || !wrapRef.current || playing) return;
    const r = wrapRef.current.getBoundingClientRect();
    setTilt({
      x: ((e.clientY - r.top) / r.height - 0.5) * -2.5,
      y: ((e.clientX - r.left) / r.width - 0.5) * 2.5
    });
  };
  const play = () => {
    setPlaying(true);
    setEnded(false);
    setPaused(false);
    document.querySelectorAll('audio,video').forEach(m => {
      if (m !== videoRef.current) try {
        m.pause();
      } catch (e) {}
    });
    setTimeout(() => videoRef.current && videoRef.current.play().catch(() => {}), 50);
    hideTimer.current = setTimeout(() => setShowControls(false), 2800);
  };
  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setPaused(false);
    } else {
      videoRef.current.pause();
      setPaused(true);
      setShowControls(true);
    }
  };
  const onEnded = () => {
    setEnded(true);
    setWatched(true);
    setShowControls(true);
    setTimeout(() => setPlaying(false), reduced ? 0 : 900);
  };
  const closeTheater = () => {
    if (videoRef.current) videoRef.current.pause();
    setPlaying(false);
    setPaused(true);
  };
  React.useEffect(() => {
    if (!playing) {
      setTheaterSize(null);
      return;
    }
    const compute = () => {
      const margin = 40;
      const availW = Math.min(window.innerWidth - margin * 2, 1400);
      const availH = Math.min(window.innerHeight - margin * 2, 1000);
      let w = availW;
      let h = w * 9 / 16;
      if (h > availH) {
        h = availH;
        w = h * 16 / 9;
      }
      setTheaterSize({
        w: Math.round(w),
        h: Math.round(h)
      });
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, [playing]);
  React.useEffect(() => {
    if (!playing) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';
    const onKey = e => {
      if (e.key === 'Escape') closeTheater();else if (e.key === ' ') {
        e.preventDefault();
        togglePlayPause();
      } else if (e.key === 'ArrowRight' && videoRef.current) videoRef.current.currentTime += 5;else if (e.key === 'ArrowLeft' && videoRef.current) videoRef.current.currentTime -= 5;else if (e.key.toLowerCase() === 'm') setMuted(m => !m);else if (e.key.toLowerCase() === 'f' && wrapRef.current) {
        if (wrapRef.current.requestFullscreen) wrapRef.current.requestFullscreen().catch(() => {});
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [playing]);
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => {
      setCurTime(v.currentTime);
      setDuration(v.duration || 0);
      setProgress(v.duration ? v.currentTime / v.duration : 0);
    };
    v.addEventListener('timeupdate', onTime);
    v.addEventListener('loadedmetadata', onTime);
    return () => {
      v.removeEventListener('timeupdate', onTime);
      v.removeEventListener('loadedmetadata', onTime);
    };
  }, []);
  React.useEffect(() => {
    const onVis = () => {
      if (document.hidden && videoRef.current && !videoRef.current.paused) videoRef.current.pause();
    };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);
  const seek = e => {
    if (!videoRef.current || !duration) return;
    const r = e.currentTarget.getBoundingClientRect();
    const pct = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    videoRef.current.currentTime = pct * duration;
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, playing && theaterSize && /*#__PURE__*/React.createElement("div", {
    ref: wrapRef,
    onMouseMove: onMove,
    onMouseLeave: () => {
      setTilt({
        x: 0,
        y: 0
      });
      if (playing && !paused) setShowControls(false);
    },
    onKeyDown: e => {
      if ((e.key === 'Enter' || e.key === ' ') && !playing) {
        e.preventDefault();
        play();
      }
    },
    tabIndex: !playing ? 0 : -1,
    role: !playing ? 'button' : undefined,
    "aria-label": !playing ? watched ? 'Replay film' : 'Play film' : undefined,
    style: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      zIndex: 6,
      width: theaterSize.w,
      height: theaterSize.h,
      maxWidth: '90vw',
      borderRadius: 20,
      overflow: 'hidden',
      border: '1px solid rgba(198,242,58,0.22)',
      boxShadow: `0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(198,242,58,0.08), 0 0 80px rgba(198,242,58,0.2), 0 0 140px rgba(100,225,255,0.06)`,
      transition: 'all 0.4s ease'
    }
  }, /*#__PURE__*/React.createElement("video", {
    ref: videoRef,
    onEnded: onEnded,
    onClick: playing ? togglePlayPause : undefined,
    playsInline: true,
    muted: muted,
    controlsList: "nodownload noremoteplayback",
    disablePictureInPicture: true,
    onContextMenu: e => e.preventDefault(),
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      cursor: playing ? 'pointer' : 'default'
    },
    poster: ""
  }, /*#__PURE__*/React.createElement("source", {
    src: "https://elearningportfolio-jz.s3.us-east-1.amazonaws.com/The+Brand+Film.mp4",
    type: "video/mp4"
  })), playing && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '28px 18px 14px',
      background: 'linear-gradient(to top, rgba(4,6,7,0.82), transparent)',
      opacity: showControls || paused ? 1 : 0,
      transition: 'opacity 0.3s ease',
      pointerEvents: showControls || paused ? 'auto' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: seek,
    style: {
      position: 'relative',
      height: 4,
      borderRadius: 2,
      background: 'rgba(255,255,255,0.18)',
      cursor: 'pointer',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: `${progress * 100}%`,
      borderRadius: 2,
      background: 'var(--color-accent-primary)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: `${progress * 100}%`,
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--color-accent-primary)',
      boxShadow: '0 0 8px rgba(198,242,58,0.6)',
      transform: 'translate(-50%,-50%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": paused ? 'Play' : 'Pause',
    onClick: togglePlayPause,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 4,
      display: 'flex'
    }
  }, paused ? /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 26 30",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0L26 15L0 30V0Z"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "18",
    viewBox: "0 0 16 18",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "5",
    height: "18"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "11",
    width: "5",
    height: "18"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-mono)',
      fontSize: '0.6875rem',
      color: 'rgba(255,255,255,0.75)',
      minWidth: 84
    }
  }, fmt(curTime), " / ", fmt(duration)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    "aria-label": muted ? 'Unmute' : 'Mute',
    onClick: () => setMuted(m => !m),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 4,
      display: 'flex'
    }
  }, muted ? /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 5L6 9H2v6h4l5 4V5z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "9",
    x2: "22",
    y2: "15"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "22",
    y1: "9",
    x2: "16",
    y2: "15"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 5L6 9H2v6h4l5 4V5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 8.5a5 5 0 010 7"
  }))), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Close theater view",
    onClick: closeTheater,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 4,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  })))))), /*#__PURE__*/React.createElement("div", {
    ref: sectionRef,
    style: {
      position: 'relative',
      overflow: 'hidden',
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      background: '#080D10',
      padding: 'clamp(64px,8vw,120px) var(--container-pad)',
      transition: 'background 1.2s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      opacity: playing ? 0.1 : 0.4,
      transition: 'opacity 1.2s ease',
      backgroundColor: '#13191AEB'
    }
  }), playing && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(3,5,6,0.55)',
      zIndex: 4,
      pointerEvents: 'none',
      transition: 'opacity 0.8s ease'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 5,
      maxWidth: 1300,
      margin: '0 auto',
      width: '100%',
      textAlign: 'center'
    }
  }, !ended && !playing && /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--font-mono)',
      fontSize: '0.75rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--accent-cyan)',
      marginBottom: 20
    }
  }, "Film"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      color: 'var(--color-text-primary)',
      fontWeight: 700,
      marginBottom: 16
    }
  }, "A Different Way of Seeing."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-lg)',
      color: 'var(--color-text-secondary)',
      maxWidth: 480,
      margin: '0 auto 48px',
      lineHeight: 1.5
    }
  }, "Understanding isn't the outcome.", /*#__PURE__*/React.createElement("br", null), "It's the beginning.")), !playing && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 1200,
      maxWidth: '100%',
      margin: '0 auto',
      aspectRatio: '16/9',
      borderRadius: 20,
      overflow: 'hidden',
      border: '1px solid rgba(198,242,58,0.22)',
      boxShadow: '0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(198,242,58,0.08), 0 0 60px rgba(198,242,58,0.16), 0 0 140px rgba(100,225,255,0.06)',
      cursor: 'pointer'
    },
    onClick: play
  }, /*#__PURE__*/React.createElement("video", {
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    },
    poster: ""
  }, /*#__PURE__*/React.createElement("source", {
    src: "https://elearningportfolio-jz.s3.us-east-1.amazonaws.com/The+Brand+Film.mp4",
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("button", {
    "aria-label": watched ? 'Replay film' : 'Play film',
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      gap: 14,
      background: 'rgba(8,13,16,0.35)',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: watched ? 56 : 76,
      height: watched ? 56 : 76,
      borderRadius: '50%',
      background: 'rgba(10,14,17,0.55)',
      backdropFilter: 'blur(8px)',
      border: '1px solid rgba(255,255,255,0.25)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.25s ease',
      boxShadow: '0 0 0 1px rgba(198,242,58,0.15)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: watched ? 20 : 26,
    height: watched ? 23 : 30,
    viewBox: "0 0 26 30",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0L26 15L0 30V0Z"
  }))), !watched && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-mono)',
      fontSize: '0.6875rem',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.75)'
    }
  }, "Play Film"))), !ended && !playing && !watched && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      font: 'var(--font-mono)',
      fontSize: '0.75rem',
      color: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, "97 seconds"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Brand Film"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "2026")), /*#__PURE__*/React.createElement("a", {
    href: "#featured-work",
    style: {
      color: 'var(--color-text-muted)',
      fontSize: '0.6875rem',
      opacity: 0.7
    },
    onClick: e => {
      e.preventDefault();
      document.querySelector('[data-section="featured-work"]')?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#FFFFFF'
    }
  }, "Skip to Featured Work \u2192"))), !ended && !playing && watched && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      animation: reduced ? 'none' : 'jiz-fade-in 0.8s ease both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--font-mono)',
      fontSize: '0.75rem',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--color-text-muted)',
      marginBottom: 10
    }
  }, "Brand Film \xB7 Watched \xB7 1:37"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--color-text-secondary)',
      fontStyle: 'italic'
    }
  }, "Continue exploring the work behind the philosophy \u2193")), ended && /*#__PURE__*/React.createElement("div", {
    style: {
      animation: reduced ? 'none' : 'jiz-fade-in 1.4s ease both'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/logo/jiz-logo-white.svg",
    alt: "JIZ logo",
    style: {
      width: 60,
      height: 60,
      margin: '0 auto 22px',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-hud)',
      fontSize: '1.375rem',
      letterSpacing: 'var(--tracking-hud)',
      textTransform: 'uppercase',
      color: 'var(--color-text-primary)',
      fontWeight: 700
    }
  }, "Jonathan ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-accent-primary)'
    }
  }, "Iker"), " Zamarripa"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-hud)',
      fontSize: '0.8125rem',
      color: 'var(--color-text-muted)',
      marginTop: 8
    }
  }, "Learning Experience Designer"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body)',
      fontStyle: 'italic',
      color: 'var(--color-text-secondary)',
      marginTop: 28,
      fontSize: '1.15rem',
      animation: reduced ? 'none' : 'jiz-fade-in 1.4s ease 1.2s both'
    }
  }, "Because understanding changes everything."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      animation: reduced ? 'none' : 'jiz-fade-in 1.4s ease 2.6s both'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    className: reduced ? '' : 'jiz-scroll-cue',
    width: "30",
    height: "30",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--color-accent-primary)",
    strokeWidth: "1.75",
    style: {
      filter: reduced ? 'none' : 'drop-shadow(0 0 10px rgba(198,242,58,0.7))'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  })))))), /*#__PURE__*/React.createElement("style", null, `.jiz-film-play:hover{transform:scale(1.03);box-shadow:0 0 26px rgba(198,242,58,0.3);border-color:rgba(198,242,58,0.5)}@keyframes jiz-fade-in{from{opacity:0}to{opacity:1}}@keyframes jiz-film-ambient-move{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}.jiz-film-ambient{animation:jiz-film-ambient-move 9s ease-in-out infinite}@keyframes jiz-scroll-pulse{0%,100%{opacity:0.5;transform:translateY(0)}50%{opacity:1;transform:translateY(6px)}}.jiz-scroll-cue{animation:jiz-scroll-pulse 1.6s ease-in-out infinite}@media(prefers-reduced-motion:reduce){.jiz-film-play{transition:none}.jiz-film-ambient{animation:none}.jiz-scroll-cue{animation:none}}`));
}
function CapabilityOS() {
  const principles = [{
    title: 'Clarify',
    belief: 'Every complex problem hides a simple truth waiting to be found.',
    approach: 'I start by stripping a challenge to its essential structure — the real audience, the real constraint, the real outcome — before a single screen gets designed.',
    proof: 'Operation: Legacy Unlocked began as a dense compliance mandate; clarifying the real behavior at stake turned it into a mission.'
  }, {
    title: 'Connect',
    belief: 'Learning, technology, and business outcomes are one system, not three departments.',
    approach: 'I map how people, workflows, and platforms actually intersect, so a design decision in one area doesn\u2019t break another.',
    proof: 'Learn@Cox Launch Promo connected a platform migration to the emotional experience of the people living through it.'
  }, {
    title: 'Prototype',
    belief: 'Thinking becomes real the moment you can click it.',
    approach: 'I build fast, tangible versions of an idea early — using AI-native tooling to move at studio speed — so decisions get tested, not debated.',
    proof: 'The Train Story moved from script to a working cinematic prototype in a fraction of a traditional production timeline.'
  }, {
    title: 'Transform',
    belief: 'The goal was never the deliverable. It was the change it makes possible.',
    approach: 'I design for the moment after launch — adoption, behavior change, measurable movement — not just the moment of delivery.',
    proof: 'Every engagement is measured against what actually shifted for the people and the organization, not just what shipped.'
  }];
  const [active, setActive] = React.useState(0);
  const [signal, setSignal] = React.useState(false);
  const p = principles[active];
  const select = i => {
    if (i === active) return;
    setSignal(true);
    setActive(i);
    window.dispatchEvent(new CustomEvent('jiz-signal'));
    setTimeout(() => setSignal(false), 750);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 'clamp(56px, 6vw, 100px)',
      paddingBottom: 'clamp(56px, 6vw, 100px)'
    }
  }, /*#__PURE__*/React.createElement(ChromaKeyVideo, {
    src: "./assets/video/capabilities-bg.mp4",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 0,
      opacity: 0.55
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: '38%',
      background: 'linear-gradient(to top, rgba(198,242,58,0.28), transparent)',
      mixBlendMode: 'screen',
      zIndex: 0,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(11,13,16,0.32)',
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Inside the process"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      color: 'var(--color-text-primary)',
      marginBottom: 16
    }
  }, "The operating system behind the work."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--color-text-secondary)',
      marginBottom: 32,
      maxWidth: 560
    }
  }, "Four principles guide every project \u2014 select one to see how it shapes a decision.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: 24,
      alignItems: 'stretch',
      minWidth: 0,
      position: 'relative'
    }
  }, signal && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      top: `${active * (100 / principles.length) + 100 / principles.length / 2}%`,
      width: '30%',
      height: 2,
      background: 'var(--color-accent-primary)',
      boxShadow: '0 0 12px var(--color-accent-primary)',
      animation: 'jiz-signal-travel 0.7s ease-out forwards',
      zIndex: 2,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      position: 'relative'
    }
  }, signal && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 8,
      top: `${active * (100 / principles.length) + 100 / principles.length / 2}%`,
      width: 4,
      height: 4,
      borderRadius: '50%',
      background: 'var(--color-accent-primary)',
      boxShadow: '0 0 10px var(--color-accent-primary)',
      animation: 'jiz-node-emit 0.6s ease-out forwards',
      zIndex: 2,
      pointerEvents: 'none'
    }
  }), principles.map((pl, i) => /*#__PURE__*/React.createElement("button", {
    key: pl.title,
    onClick: () => select(i),
    style: {
      textAlign: 'left',
      cursor: 'pointer',
      font: 'inherit',
      padding: '18px 20px',
      borderRadius: 'var(--radius-md)',
      position: 'relative',
      overflow: 'hidden',
      background: active === i ? 'rgba(198,242,58,0.1)' : 'rgba(23,26,31,0.5)',
      backdropFilter: 'blur(14px)',
      border: active === i ? '1px solid var(--color-accent-primary)' : '1px solid var(--color-border-subtle)',
      transition: 'all var(--motion-standard) var(--ease-standard)',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    },
    onMouseEnter: e => {
      const s = e.currentTarget.querySelector('.jiz-sweep');
      if (s) {
        s.style.animation = 'none';
        void s.offsetWidth;
        s.style.animation = 'jiz-sweep 0.9s ease-out';
      }
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "jiz-sweep",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(100deg, transparent 40%, rgba(198,242,58,0.14) 50%, transparent 60%)',
      transform: 'translateX(-120%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-hud)',
      color: active === i ? 'var(--color-accent-primary)' : 'var(--color-text-muted)',
      flexShrink: 0,
      position: 'relative'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body)',
      fontWeight: 600,
      fontSize: '0.9375rem',
      color: active === i ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
      position: 'relative'
    }
  }, pl.title)))), /*#__PURE__*/React.createElement("div", {
    key: active,
    style: {
      background: 'rgba(23,26,31,0.4)',
      backdropFilter: 'blur(16px)',
      border: '1px solid var(--color-border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-hud)',
      color: 'var(--color-accent-secondary)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-hud)',
      marginBottom: 10,
      animation: 'jiz-stage-in 0.4s var(--ease-out) both'
    }
  }, "Principle ", String(active + 1).padStart(2, '0'), " \u2014 ", p.title), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)',
      color: 'var(--color-text-primary)',
      marginBottom: 18,
      lineHeight: 1.3,
      animation: 'jiz-stage-in 0.4s var(--ease-out) 0.08s both'
    }
  }, p.belief), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16,
      animation: 'jiz-stage-in 0.4s var(--ease-out) 0.16s both'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-hud)',
      fontSize: '0.6875rem',
      color: 'var(--color-text-muted)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-hud)'
    }
  }, "Approach"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--color-text-secondary)',
      marginTop: 6
    }
  }, p.approach)), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '2px solid var(--color-accent-primary)',
      paddingLeft: 14,
      animation: 'jiz-stage-in 0.4s var(--ease-out) 0.24s both'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-hud)',
      fontSize: '0.6875rem',
      color: 'var(--color-text-muted)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-hud)'
    }
  }, "Proof"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      fontSize: '0.9375rem',
      color: 'var(--color-text-primary)',
      marginTop: 6,
      fontStyle: 'italic'
    }
  }, p.proof))))), /*#__PURE__*/React.createElement("style", null, `@keyframes jiz-signal-travel{0%{opacity:1;width:0}70%{opacity:1}100%{opacity:0;width:34%}}@keyframes jiz-node-emit{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(2.4)}}@keyframes jiz-sweep{to{transform:translateX(120%)}}@keyframes jiz-stage-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){[style*="jiz-signal-travel"],[style*="jiz-node-emit"],[style*="jiz-sweep"],[style*="jiz-stage-in"]{animation:none!important}}`));
}
function FeaturedWork({
  onOpenWork
}) {
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const p = {
    index: 'a',
    label: 'CASE 01',
    title: 'Operation: Legacy Unlocked',
    mission: 'Transform required compliance learning into an immersive, narrative-driven experience for enterprise leaders.',
    projectType: 'Learning Experience Design',
    role: 'Learning Experience Designer / Developer',
    organization: 'Cox Enterprises',
    focus: 'Game-based learning, leadership development, enterprise engagement',
    status: 'Case study available',
    image: './assets/imagery/operation-legacy-unlocked.png'
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 'clamp(56px, 6vw, 100px)',
      paddingBottom: 'clamp(56px, 6vw, 100px)',
      paddingLeft: 'var(--container-pad)',
      paddingRight: 'var(--container-pad)',
      maxWidth: 'var(--container-max)',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'clamp(48px, 8vw, 80px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      animation: reduced ? 'none' : 'jiz-fade-in-up 0.8s ease both',
      animationDelay: '0s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-hud)',
      fontWeight: 600,
      color: 'var(--color-accent-secondary)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-hud)',
      marginBottom: 12
    }
  }, "Featured Work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      color: 'var(--color-text-primary)',
      margin: 0,
      marginBottom: 16
    }
  }, "Ideas made real."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--color-text-secondary)',
      margin: 0,
      maxWidth: 640
    }
  }, "Selected work across enterprise learning, cinematic storytelling, systems adoption, and AI-enabled production."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth < 900 ? '1fr' : 'minmax(320px, 1.1fr) minmax(0, 0.9fr)',
      gap: 'clamp(32px, 6vw, 64px)',
      alignItems: 'start',
      animation: reduced ? 'none' : 'jiz-fade-in-up 0.8s ease both',
      animationDelay: '100ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/3',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--color-border-subtle)',
      position: 'relative',
      background: '#080D0B'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.image,
    alt: p.title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      display: 'block',
      transition: 'transform 0.4s ease'
    },
    onMouseEnter: e => {
      if (!reduced) e.currentTarget.style.transform = 'scale(1.02)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.75rem',
      fontWeight: 700,
      color: 'var(--color-accent-primary)',
      textTransform: 'uppercase',
      letterSpacing: 0.8,
      marginBottom: 8
    }
  }, p.label), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)',
      color: 'var(--color-text-primary)',
      margin: 0,
      lineHeight: 1.2,
      marginBottom: 16
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--color-text-secondary)',
      margin: 0
    }
  }, p.mission)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px 24px',
      fontSize: 'var(--text-caption)',
      color: 'var(--color-text-muted)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      textTransform: 'uppercase',
      letterSpacing: 0.5,
      fontSize: '0.625rem',
      fontWeight: 700,
      color: 'var(--color-accent-secondary)',
      marginBottom: 6
    }
  }, "Project Type"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-text-secondary)'
    }
  }, p.projectType)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      textTransform: 'uppercase',
      letterSpacing: 0.5,
      fontSize: '0.625rem',
      fontWeight: 700,
      color: 'var(--color-accent-secondary)',
      marginBottom: 6
    }
  }, "Role"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-text-secondary)'
    }
  }, p.role)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      textTransform: 'uppercase',
      letterSpacing: 0.5,
      fontSize: '0.625rem',
      fontWeight: 700,
      color: 'var(--color-accent-secondary)',
      marginBottom: 6
    }
  }, "Organization"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-text-secondary)'
    }
  }, p.organization)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      textTransform: 'uppercase',
      letterSpacing: 0.5,
      fontSize: '0.625rem',
      fontWeight: 700,
      color: 'var(--color-accent-secondary)',
      marginBottom: 6
    }
  }, "Focus"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-text-secondary)'
    }
  }, p.focus))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onOpenWork && onOpenWork('Operation: Legacy Unlocked'),
    style: {
      alignSelf: 'flex-start',
      padding: '12px 24px',
      background: 'var(--color-accent-primary)',
      color: '#000000',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      font: 'var(--text-label)',
      fontWeight: 700,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 0 0 0 rgba(198, 242, 58, 0.2)'
    },
    onMouseEnter: e => {
      if (!reduced) {
        e.currentTarget.style.background = 'var(--color-accent-primary-hover)';
        e.currentTarget.style.boxShadow = '0 0 16px 0 rgba(198, 242, 58, 0.3)';
        e.currentTarget.style.transform = 'translateY(-1px)';
      }
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'var(--color-accent-primary)';
      e.currentTarget.style.boxShadow = '0 0 0 0 rgba(198, 242, 58, 0.2)';
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, "Open Case Study \u2192"))));
}
function Insights() {
  const posts = ['How AI changes the learning designer\'s workflow', 'Designing scenarios that build real judgment', 'What systems thinking looks like in practice'];
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Insights"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      color: 'var(--color-text-primary)',
      marginBottom: 16
    }
  }, "Thinking out loud."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--color-text-muted)',
      marginBottom: 32
    }
  }, "Writing in progress \u2014 titles below are placeholders.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20,
      minWidth: 0
    }
  }, posts.map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t,
    delay: i * 80,
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--color-border-default)',
      borderRadius: 'var(--radius-md)',
      padding: 20,
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-hud)',
      color: 'var(--color-text-muted)'
    }
  }, "[Insight pending]"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h3)',
      fontSize: '1.0625rem',
      color: 'var(--color-text-primary)',
      margin: '10px 0'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--color-text-muted)',
      fontStyle: 'italic'
    }
  }, "Content pending"))))));
}
function EvidenceCard({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-background-secondary)',
      border: '1px solid var(--color-border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 28,
      transition: 'all var(--motion-standard) var(--ease-standard)',
      ...style
    }
  }, children);
}
function ImpactSection({
  TestimonialQuote
}) {
  const metrics = [{
    value: '[25+]',
    label: 'Learning and communication experiences delivered',
    verified: false
  }, {
    value: '[4]',
    label: 'Global markets or audience regions supported',
    verified: false
  }, {
    value: '[3×]',
    label: 'Faster production enabled by AI-supported workflows',
    verified: false
  }, {
    value: '[10+]',
    label: 'Cross-functional stakeholders engaged per major initiative',
    verified: false
  }];
  const [hoverIdx, setHoverIdx] = React.useState(-1);
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Impact"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      color: 'var(--color-text-primary)',
      marginBottom: 16
    }
  }, "Outcomes, not outputs."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--color-text-muted)',
      marginBottom: 40
    }
  }, "Placeholder figures shown until verified data is confirmed \u2014 not published claims.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: 24,
      alignItems: 'stretch',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(EvidenceCard, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%',
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "22",
    viewBox: "0 0 28 22",
    fill: "var(--color-accent-primary)",
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 22V13.6C0 9.87 1.07 6.8 3.2 4.4C5.33 1.93 8.13 0.4 11.6 0L13.2 3.6C10.93 4.27 9.13 5.33 7.8 6.8C6.47 8.27 5.8 9.93 5.8 11.8H12V22H0ZM16 22V13.6C16 9.87 17.07 6.8 19.2 4.4C21.33 1.93 24.13 0.4 27.6 0L29.2 3.6C26.93 4.27 25.13 5.33 23.8 6.8C22.47 8.27 21.8 9.93 21.8 11.8H28V22H16Z"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-lg)',
      color: 'var(--color-text-primary)',
      fontStyle: 'italic',
      marginBottom: 24
    }
  }, "\"Jonathan translated a genuinely complex change program into something our leaders could actually act on.\"")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-caption)',
      fontWeight: 700,
      color: 'var(--color-text-primary)'
    }
  }, "[Name pending]"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--color-text-muted)'
    }
  }, "[Title, Organization \u2014 pending]")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, metrics.map((m, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: m.label,
    delay: 100 + i * 80,
    highlight: true
  }, /*#__PURE__*/React.createElement(EvidenceCard, {
    onMouseEnter: () => setHoverIdx(i),
    onMouseLeave: () => setHoverIdx(-1),
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 12,
      transform: hoverIdx === i ? 'translateY(-3px)' : 'none',
      boxShadow: hoverIdx === i ? 'var(--shadow-elevated)' : 'var(--shadow-subtle)',
      borderColor: hoverIdx === i ? 'rgba(198,242,58,0.3)' : 'var(--color-border-default)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-mono)',
      fontSize: '2.25rem',
      fontWeight: 700,
      color: 'var(--color-accent-primary)'
    }
  }, m.value), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--color-text-secondary)'
    }
  }, m.label)))))));
}
function SectionRail({
  sections,
  activeIndex,
  onNavigate
}) {
  const [hovering, setHovering] = React.useState(false);
  const [recentlyScrolled, setRecentlyScrolled] = React.useState(false);
  const idleTimer = React.useRef(null);
  React.useEffect(() => {
    if (prefersReduced()) return;
    const onScroll = () => {
      setRecentlyScrolled(true);
      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setRecentlyScrolled(false), 1400);
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(idleTimer.current);
    };
  }, []);
  const showAllLabels = hovering || prefersReduced();
  const progressPct = sections.length > 1 ? activeIndex / (sections.length - 1) * 100 : 0;
  const pastHero = activeIndex > 0;
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Section progress",
    className: "jiz-rail",
    style: {
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      zIndex: 5,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: 15,
      width: 56,
      padding: '0 0 0 24px',
      boxSizing: 'border-box'
    },
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false)
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 28,
      top: '18%',
      bottom: '18%',
      width: 1,
      background: 'var(--color-border-default)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 28,
      top: '18%',
      width: 1,
      height: `${progressPct * 0.64}%`,
      background: 'var(--color-accent-primary)',
      boxShadow: '0 0 8px var(--color-accent-primary)',
      transition: 'height var(--motion-slow) var(--ease-out)'
    }
  }), sections.map((s, i) => {
    const isActive = i === activeIndex;
    const showLabel = pastHero && (showAllLabels || isActive && recentlyScrolled);
    return /*#__PURE__*/React.createElement("button", {
      key: s,
      onClick: () => onNavigate && onNavigate(i),
      "aria-current": isActive ? 'true' : undefined,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        height: 18,
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        position: 'relative',
        zIndex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        flexShrink: 0,
        borderRadius: '50%',
        transition: 'width 0.5s var(--ease-out), height 0.5s var(--ease-out), background 0.5s var(--ease-out), box-shadow 0.6s var(--ease-out)',
        width: isActive ? 9 : 6,
        height: isActive ? 9 : 6,
        background: isActive ? 'var(--color-accent-primary)' : 'var(--color-text-muted)',
        boxShadow: isActive ? '0 0 12px var(--color-accent-primary)' : 'none',
        animation: isActive && !prefersReduced() ? 'jiz-node-glow 2.4s ease-in-out infinite' : 'none'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--text-hud)',
        fontSize: '0.6875rem',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
        fontWeight: isActive ? 700 : 400,
        whiteSpace: 'nowrap',
        opacity: showLabel ? 1 : 0,
        transform: showLabel ? 'translateX(0)' : 'translateX(-6px)',
        transition: 'opacity var(--motion-standard) var(--ease-out), transform var(--motion-standard) var(--ease-out)'
      }
    }, s));
  }), /*#__PURE__*/React.createElement("style", null, `.jiz-rail{display:flex}.jiz-rail button:focus-visible span:first-child{outline:2px solid var(--color-accent-primary);outline-offset:3px}@keyframes jiz-node-glow{0%,100%{box-shadow:0 0 10px var(--color-accent-primary)}50%{box-shadow:0 0 18px var(--color-accent-primary)}}@media(max-width:1280px){.jiz-rail{display:none}}`));
}
function FinalMoment({
  onConnect
}) {
  const [lit, setLit] = React.useState(false);
  const ref = React.useRef(null);
  const reduced = prefersReduced();
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setLit(true);
    }, {
      threshold: 0.5
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("footer", {
    ref: ref,
    style: {
      position: 'relative',
      borderTop: '1px solid var(--color-border-subtle)',
      padding: '96px var(--container-pad) 64px',
      textAlign: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '50%',
      bottom: '100%',
      width: 2,
      height: 64,
      background: 'linear-gradient(to bottom, transparent, var(--color-accent-primary))',
      opacity: lit ? 0.7 : 0,
      transform: 'translateX(-50%)',
      transition: 'opacity 1.2s ease'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "./assets/logo/jiz-logo-white.svg",
    alt: "JIZ logo",
    style: {
      width: 40,
      height: 40,
      margin: '0 auto 24px',
      display: 'block',
      filter: lit && !reduced ? 'drop-shadow(0 0 14px rgba(198,242,58,0.55)) brightness(1.15)' : 'none',
      transition: 'filter 1.5s ease'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body)',
      fontStyle: 'italic',
      color: 'var(--color-text-secondary)',
      marginBottom: 8
    }
  }, "Designing Clarity."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--color-text-muted)',
      marginBottom: 32
    }
  }, "Transforming complexity into understanding."), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onConnect && onConnect();
    },
    style: {
      font: 'var(--text-body)',
      fontSize: '0.9375rem',
      color: 'var(--color-accent-primary)',
      textDecoration: 'none'
    }
  }, "Let's Build What's Next \u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--text-caption)',
      color: 'var(--color-text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Jonathan ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-accent-primary)'
    }
  }, "Iker"), " Zamarripa"), /*#__PURE__*/React.createElement("span", null, "Learning Experience Design \xB7 AI Strategy \xB7 Digital Transformation")));
}
function Homepage({
  onOpenCaseStudy
}) {
  const onOpenWork = () => onOpenCaseStudy && onOpenCaseStudy();
  const {
    NavBar,
    Button,
    Chip,
    TestimonialCard
  } = window.JIZPortfolioSite_b3ba38;
  const {
    ProcessStepper,
    MetricsGrid
  } = window.JIZPortfolioSite_b3ba38;
  const {
    ContactPanel
  } = window.JIZPortfolioSite_b3ba38;
  const projects = [{
    index: 'a',
    title: 'Operation: Legacy Unlocked',
    category: 'Gamification',
    description: 'A secret-agent learning escape room that turns compliance content into a mission.',
    stage: 'Design',
    insight: 'The challenge wasn\u2019t creating more content — it was reducing cognitive load.',
    image: './assets/imagery/operation-legacy-unlocked.png'
  }, {
    index: 'b',
    title: 'Learn@Cox Launch Promo',
    category: 'Digital Transformation',
    description: 'The launch campaign for a Workday Learning rollout, built to make a platform switch feel like an event.',
    stage: 'Strategy',
    insight: 'We treated the rollout like a movie trailer instead of a training announcement.',
    image: './assets/imagery/learn-cox-launch-promo.png'
  }, {
    index: 'c',
    title: 'The Train Story',
    category: 'Multimedia Storytelling',
    description: 'A two-version cinematic learning film exploring AI-native production techniques.',
    stage: 'Production',
    insight: 'Speed didn\u2019t come from cutting craft — it came from cutting the traditional crew.'
  }];
  const workStages = [{
    title: 'Discover',
    description: 'Understand the business need, audience, and performance gap.'
  }, {
    title: 'Define',
    description: 'Clarify outcomes, behaviors, and success measures.'
  }, {
    title: 'Design',
    description: 'Architect the learning strategy, narrative, and interaction model.'
  }, {
    title: 'Build',
    description: 'Produce the experience with AI-native tooling at studio speed.'
  }, {
    title: 'Enable',
    description: 'Launch into the learner\'s real workflow and environment.'
  }, {
    title: 'Measure',
    description: 'Evaluate outcomes and iterate — where verified data exists.'
  }];
  const sectionRefs = React.useRef([]);
  const [activeSection, setActiveSection] = React.useState(0);

  // PHASE 1A: Target section navigation
  // After view transitions to home, scroll to the requested section
  React.useEffect(() => {
    const targetSection = sessionStorage.getItem('jiz-target-section');
    if (targetSection !== null) {
      const target = parseInt(targetSection, 10);
      sessionStorage.removeItem('jiz-target-section');
      setTimeout(() => {
        if (sectionRefs.current[target]) {
          sectionRefs.current[target].scrollIntoView({
            behavior: prefersReduced() ? 'auto' : 'smooth'
          });
          setActiveSection(target);
        }
      }, prefersReduced() ? 0 : 300);
    }
  }, []);

  // PHASE 1A: Global active section tracking
  React.useEffect(() => {
    const onScroll = () => {
      let current = 0;
      sectionRefs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.5) current = i;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const railRef = i => el => {
    sectionRefs.current[i] = el;
  };
  const navItems = ['About', 'Featured Work', 'Design Philosophy', 'Creative Lab', 'Insights'];
  const sectionLabels = ['Hero', 'About', 'Featured Work', 'Design Philosophy', 'Creative Lab', 'Insights', "Let's Build"];
  const activeNavLabel = sectionLabels[activeSection] || 'Featured Work';
  return /*#__PURE__*/React.createElement("div", {
    className: "jiz-homepage",
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: '#080D0B',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    items: navItems,
    active: activeNavLabel,
    onNavigate: item => {
      const sectionMap = {
        Home: 0,
        About: 1,
        'Featured Work': 2,
        'Design Philosophy': 3,
        'Creative Lab': 4,
        Insights: 5
      };
      const targetIdx = sectionMap[item];
      if (targetIdx !== undefined) {
        sectionRefs.current[targetIdx]?.scrollIntoView({
          behavior: prefersReduced() ? 'auto' : 'smooth',
          block: 'start'
        });
        setActiveSection(targetIdx);
        return;
      }
      window.jizNavigate?.(item);
    },
    onConnect: () => {
      const targetIdx = 6;
      sectionRefs.current[targetIdx]?.scrollIntoView({
        behavior: prefersReduced() ? 'auto' : 'smooth',
        block: 'start'
      });
      setActiveSection(targetIdx);
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      zIndex: 1,
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement(SectionRail, {
    sections: sectionLabels,
    activeIndex: activeSection,
    onNavigate: i => {
      sectionRefs.current[i] && sectionRefs.current[i].scrollIntoView({
        behavior: prefersReduced() ? 'auto' : 'smooth'
      });
    }
  }), /*#__PURE__*/React.createElement("div", {
    ref: railRef(0)
  }, /*#__PURE__*/React.createElement(Hero, {
    onOpenWork: onOpenCaseStudy
  })), /*#__PURE__*/React.createElement("div", {
    ref: railRef(1)
  }, window.AboutV2 && /*#__PURE__*/React.createElement(window.AboutV2, {
    registerSectionRef: railRef
  })), /*#__PURE__*/React.createElement("div", {
    ref: railRef(2),
    style: {
      display: 'none'
    }
  }, /*#__PURE__*/React.createElement(FeaturedWork, {
    onOpenWork: onOpenWork
  })), /*#__PURE__*/React.createElement("div", {
    ref: railRef(3)
  }, /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: 'clamp(96px,12vw,160px) var(--container-pad)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "DESIGN PHILOSOPHY"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      color: 'var(--color-text-primary)',
      marginBottom: 48
    }
  }, "How he solves problems.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-lg)',
      color: 'var(--color-text-secondary)',
      lineHeight: 1.8
    }
  }, "Jonathan doesn't start with solutions. He starts with understanding. He maps the ecosystem\u2014where information flows, where people get stuck, where systems misalign with human behavior. Only when the problem is clear does design become possible."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-lg)',
      color: 'var(--color-text-secondary)',
      lineHeight: 1.8
    }
  }, "He designs for adoption, not for launch. A beautiful experience that nobody uses is a failure. He thinks about what happens after day one: Will people return? Will it scale? Will it create lasting change? Design decisions are measured against those questions."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-lg)',
      color: 'var(--color-text-secondary)',
      lineHeight: 1.8
    }
  }, "He works fast without cutting corners. AI-native tools, rapid prototyping, and creative constraint push him to test ideas at scale before building. Speed in service of clarity. Motion that serves meaning. Technology that amplifies human insight."))))))), /*#__PURE__*/React.createElement("div", {
    ref: railRef(4)
  }, /*#__PURE__*/React.createElement(FilmSection, null)), /*#__PURE__*/React.createElement("div", {
    ref: railRef(5)
  }, /*#__PURE__*/React.createElement(Insights, null)), /*#__PURE__*/React.createElement("div", {
    ref: railRef(6)
  }, /*#__PURE__*/React.createElement(Section, {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'start',
      padding: 'clamp(64px,8vw,120px) var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Let's build what's next"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      color: 'var(--color-text-primary)',
      marginBottom: 16
    }
  }, "Have a complex problem worth making clear?"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--color-text-secondary)',
      maxWidth: 420,
      marginBottom: 24
    }
  }, "Available for select strategic and creative opportunities in learning experience design, AI-enabled strategy, and digital transformation."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Hire Jonathan"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: false
  }, "Partner on a project"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: false,
    onClick: onOpenCaseStudy
  }, "Explore work"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement(ContactPanel, null))))));
}
window.HomepageExports = {
  Homepage
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "archive/root-cleanup/Homepage_POST_P0.jsx", error: String((e && e.message) || e) }); }

// archive/root-cleanup/uploads/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(255,255,255,.6);' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(255,255,255,.05)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(255,255,255,.3)}' + '.empty:hover .sub u{color:rgba(255,255,255,.9);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(255,255,255,.28);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(255,255,255,.15);border-top-color:rgba(255,255,255,.5);' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "archive/root-cleanup/uploads/image-slot.js", error: String((e && e.message) || e) }); }

// components/cards/ProjectRow.jsx
try { (() => {
const cardBase = {
  background: 'var(--color-background-secondary)',
  border: '1px solid var(--color-border-default)',
  borderRadius: 'var(--radius-md)',
  boxShadow: 'var(--shadow-subtle)',
  transition: `all var(--motion-standard) var(--ease-standard)`
};
function ProjectRow({
  index = 'SC.03-A',
  title = 'Operation: Legacy Unlocked',
  tags = ['Gamification', 'Scenario-based learning'],
  logline = 'A secret-agent learning escape room that turns compliance content into a mission — players decrypt, decide, and disarm their way through the material.',
  onClick
}) {
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => {
      setOpen(!open);
      onClick && onClick();
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'grid',
      gridTemplateColumns: '100px 1fr 32px',
      alignItems: 'center',
      gap: 24,
      padding: '28px 12px',
      paddingLeft: hover ? 24 : 12,
      cursor: 'pointer',
      transition: 'padding-left var(--motion-standard) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-hud)',
      letterSpacing: 'var(--tracking-hud)',
      color: 'var(--muted)'
    }
  }, index), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-h3)',
      fontSize: '1.5rem',
      color: hover ? 'var(--gold)' : 'var(--color-text-primary)',
      transition: 'color var(--motion-standard) var(--ease-standard)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      font: 'var(--text-hud)',
      fontSize: '0.6875rem',
      letterSpacing: 'var(--tracking-hud)',
      textTransform: 'uppercase',
      color: 'var(--muted)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 10px'
    }
  }, t)))), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: hover ? 'var(--gold)' : 'var(--muted)',
    strokeWidth: "1.75",
    style: {
      transform: hover ? 'translateX(4px)' : 'none',
      transition: 'all var(--motion-standard) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 12px 28px',
      maxWidth: 640,
      font: 'var(--text-body)',
      color: 'var(--color-text-secondary)'
    }
  }, logline));
}
function MetricCard({
  value = '[metric]',
  label = 'Time-to-proficiency reduction',
  trend
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...cardBase,
      padding: 'var(--space-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-h1)',
      fontSize: '2.5rem',
      color: 'var(--gold)',
      fontFamily: 'var(--font-mono)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--color-text-secondary)'
    }
  }, label), trend && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--gold-hot)'
    }
  }, trend));
}
function TestimonialCard({
  quote = '"Jonathan operates like a one-person studio — the craft and the strategy both land."',
  name = '[Name pending]',
  role = '[Title, Organization — pending]'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...cardBase,
      padding: 'var(--space-xl)',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "22",
    viewBox: "0 0 28 22",
    fill: "var(--gold)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 22V13.6C0 9.87 1.07 6.8 3.2 4.4C5.33 1.93 8.13 0.4 11.6 0L13.2 3.6C10.93 4.27 9.13 5.33 7.8 6.8C6.47 8.27 5.8 9.93 5.8 11.8H12V22H0ZM16 22V13.6C16 9.87 17.07 6.8 19.2 4.4C21.33 1.93 24.13 0.4 27.6 0L29.2 3.6C26.93 4.27 25.13 5.33 23.8 6.8C22.47 8.27 21.8 9.93 21.8 11.8H28V22H16Z"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-lg)',
      color: 'var(--color-text-primary)',
      fontStyle: 'italic'
    }
  }, quote), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-caption)',
      fontWeight: 700,
      color: 'var(--color-text-primary)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--muted)'
    }
  }, role)));
}
function ProcessCard({
  index = '01',
  title = 'Diagnose',
  description = 'Identify the behavior gap, audience, and business context before designing anything.',
  active = false,
  last = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...cardBase,
      padding: 'var(--space-lg)',
      flex: 1,
      minWidth: 160,
      borderColor: active ? 'var(--color-accent-primary)' : 'var(--color-border-default)',
      boxShadow: active ? 'var(--glow-lime)' : 'var(--shadow-subtle)',
      background: active ? 'rgba(198,242,58,0.06)' : 'var(--color-background-secondary)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-hud)',
      color: active ? 'var(--color-accent-primary)' : 'var(--color-text-muted)',
      marginBottom: 12
    }
  }, index), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h3)',
      fontSize: '1.25rem',
      color: 'var(--color-text-primary)',
      marginBottom: 8
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--color-text-secondary)'
    }
  }, description)), !last && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-mono)',
      color: 'var(--color-accent-primary)',
      fontSize: '1.5rem',
      padding: '0 12px',
      flexShrink: 0
    }
  }, "\u2192"));
}
function ArtifactCard({
  label = 'Storyboard',
  kind = 'Process artifact'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...cardBase,
      overflow: 'hidden',
      width: 240
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/3',
      background: 'var(--color-surface-elevated)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--muted)',
      font: 'var(--text-caption)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 9h18M9 21V9"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--color-text-primary)',
      fontWeight: 600
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-hud)',
      color: 'var(--muted)'
    }
  }, kind)));
}
Object.assign(__ds_scope, { ProjectRow, MetricCard, TestimonialCard, ProcessCard, ArtifactCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProjectRow.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const base = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--size-button)',
  fontWeight: 'var(--weight-semibold)',
  border: '1px solid transparent',
  borderRadius: 'var(--radius-pill)',
  padding: '13px 24px',
  minHeight: 44,
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  cursor: 'pointer',
  transition: `background var(--motion-standard) var(--ease-standard), border-color var(--motion-standard) var(--ease-standard), color var(--motion-standard) var(--ease-standard)`
};
const variants = {
  primary: {
    background: 'var(--color-accent-primary)',
    color: 'var(--color-on-accent)'
  },
  secondary: {
    background: 'var(--color-background-secondary)',
    color: 'var(--color-text-primary)',
    border: '1px solid rgba(198,242,58,0.35)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-text-secondary)',
    border: '1px solid var(--color-border-default)'
  }
};
const sizes = {
  md: {
    padding: '13px 24px',
    fontSize: 'var(--size-button)'
  },
  sm: {
    padding: '9px 18px',
    fontSize: '0.8125rem',
    minHeight: 36
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon = true,
  disabled = false,
  loading = false,
  children = "Let's collaborate",
  onClick,
  style
}) {
  const ref = React.useRef(null);
  const [offset, setOffset] = React.useState({
    x: 0,
    y: 0
  });
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const onMove = e => {
    if (disabled || !ref.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = ref.current.getBoundingClientRect();
    setOffset({
      x: (e.clientX - (r.left + r.width / 2)) * 0.25,
      y: (e.clientY - (r.top + r.height / 2)) * 0.25
    });
  };
  const reset = () => {
    setHover(false);
    setActive(false);
    setOffset({
      x: 0,
      y: 0
    });
  };
  let stateStyle = {};
  if (!disabled && hover) {
    if (variant === 'primary') stateStyle = {
      background: 'var(--color-accent-primary-hover)',
      boxShadow: 'var(--glow-lime)'
    };else if (variant === 'secondary') stateStyle = {
      borderColor: 'var(--color-accent-primary)',
      color: 'var(--color-accent-primary)'
    };else stateStyle = {
      color: 'var(--color-accent-primary)'
    };
  }
  return /*#__PURE__*/React.createElement("button", {
    ref: ref,
    disabled: disabled || loading,
    onMouseMove: onMove,
    onMouseEnter: () => setHover(true),
    onMouseLeave: reset,
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    onClick: onClick,
    style: {
      ...base,
      ...v,
      ...sizes[size],
      opacity: disabled ? 0.4 : 1,
      cursor: disabled || loading ? 'not-allowed' : 'pointer',
      transform: `translate(${offset.x}px, ${offset.y}px) scale(${active && !disabled ? 0.97 : 1})`,
      ...stateStyle,
      ...style
    }
  }, loading ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      borderRadius: '50%',
      animation: 'jiz-spin 0.7s linear infinite'
    }
  }) : children, !loading && icon && variant !== 'ghost' && /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  })), /*#__PURE__*/React.createElement("style", null, `@keyframes jiz-spin{to{transform:rotate(360deg)}}`));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusPill.jsx
try { (() => {
function StatusPill({
  label = 'Available for work',
  tone = 'active',
  onClick,
  compact = false
}) {
  const [hover, setHover] = React.useState(false);
  const reduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const interactive = !!onClick;
  const Tag = interactive ? 'button' : 'div';
  if (compact) {
    return /*#__PURE__*/React.createElement(Tag, {
      onClick: onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      "aria-label": interactive ? `${label}. Go to contact section.` : undefined,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
        width: 'calc(100% - 32px)',
        maxWidth: 184,
        minHeight: 52,
        height: 'auto',
        boxSizing: 'border-box',
        margin: '0 auto',
        padding: '10px 14px',
        borderRadius: 22,
        border: `1px solid rgba(245,247,248,${hover ? 0.26 : 0.16})`,
        background: 'rgba(11,15,20,0.68)',
        backdropFilter: 'blur(12px)',
        fontFamily: 'var(--font-mono)',
        fontWeight: 500,
        color: hover && interactive ? 'var(--white, #F7F8FA)' : 'var(--mist, #D9DDE3)',
        transition: 'all 240ms ease',
        cursor: interactive ? 'pointer' : 'default',
        appearance: 'none'
      },
      onFocus: e => interactive && (e.currentTarget.style.outline = '2px solid var(--color-accent-primary)'),
      onBlur: e => interactive && (e.currentTarget.style.outline = 'none')
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative',
        width: 6,
        height: 6,
        display: 'inline-flex',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        background: 'var(--color-accent-primary)',
        animation: tone === 'active' && !reduced ? 'jiz-pill-breathe 2.5s ease-in-out infinite' : 'none'
      }
    }), tone === 'active' && !reduced && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        inset: -4,
        borderRadius: '50%',
        border: '1px solid rgba(165,214,46,0.5)',
        animation: 'jiz-pill-ring 2.5s ease-in-out infinite'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        lineHeight: 1.45,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        textAlign: 'left'
      }
    }, "OPEN TO SELECT", /*#__PURE__*/React.createElement("br", null), "OPPORTUNITIES"), interactive && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        display: 'inline-block',
        transform: hover ? 'translateX(2px)' : 'none',
        opacity: hover ? 1 : 0,
        transition: 'all 240ms ease',
        fontSize: '0.65rem',
        marginLeft: 'auto'
      }
    }, "\u2192"), /*#__PURE__*/React.createElement("style", null, `@keyframes jiz-pill-breathe{0%,20%{opacity:1}50%{opacity:0.6}80%,100%{opacity:1}}@keyframes jiz-pill-ring{0%,15%{width:6px;height:6px;inset:0;opacity:0.7}60%{width:15px;height:15px;inset:-4px;opacity:0}100%{opacity:0}}`));
  }
  return /*#__PURE__*/React.createElement(Tag, {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-label": interactive ? `${label}. Go to contact section.` : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '11px 18px',
      minHeight: 44,
      borderRadius: 'var(--radius-pill)',
      boxSizing: 'border-box',
      border: `1px solid rgba(245,247,248,${hover ? 0.26 : 0.16})`,
      background: 'rgba(11,15,20,0.68)',
      backdropFilter: 'blur(12px)',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.6875rem',
      fontWeight: 500,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: hover && interactive ? 'var(--white, #F7F8FA)' : 'var(--mist, #D9DDE3)',
      transition: 'all 240ms ease',
      cursor: interactive ? 'pointer' : 'default',
      appearance: 'none',
      font: undefined
    },
    onFocus: e => interactive && (e.currentTarget.style.outline = '2px solid var(--color-accent-primary)'),
    onBlur: e => interactive && (e.currentTarget.style.outline = 'none')
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 7,
      height: 7,
      display: 'inline-flex',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      background: 'var(--color-accent-primary)',
      animation: tone === 'active' && !reduced ? 'jiz-pill-breathe 2.5s ease-in-out infinite' : 'none'
    }
  }), tone === 'active' && !reduced && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: -4,
      borderRadius: '50%',
      border: '1px solid rgba(165,214,46,0.5)',
      animation: 'jiz-pill-ring 2.5s ease-in-out infinite'
    }
  })), label, interactive && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      transform: hover ? 'translateX(2px)' : 'none',
      opacity: hover ? 1 : 0,
      transition: 'all 240ms ease',
      fontSize: '0.75rem'
    }
  }, "\u2192"), /*#__PURE__*/React.createElement("style", null, `@keyframes jiz-pill-breathe{0%,20%{opacity:1}50%{opacity:0.6}80%,100%{opacity:1}}@keyframes jiz-pill-ring{0%,15%{width:6px;height:6px;inset:0;opacity:0.7}60%{width:15px;height:15px;inset:-4px;opacity:0}100%{opacity:0}}`));
}
function Chip({
  children = 'Scenario-based learning',
  active = false,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.8125rem',
      fontWeight: 600,
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      border: active || hover ? '1px solid var(--color-accent-primary)' : '1px solid var(--color-border-default)',
      background: active ? 'rgba(198,242,58,0.1)' : hover ? 'var(--color-surface-elevated-hover)' : 'var(--color-surface-elevated)',
      color: active || hover ? 'var(--color-accent-primary)' : 'var(--color-text-secondary)',
      transition: 'all var(--motion-fast) var(--ease-standard)'
    }
  }, children);
}
function Accordion({
  items = [{
    q: 'Diagnose',
    a: 'Identify the behavior gap, audience, and business context before designing anything.'
  }, {
    q: 'Script',
    a: 'Write the narrative and instructional architecture — the film\'s screenplay.'
  }]
}) {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      background: 'var(--color-border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--color-border-default)'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--panel)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '18px 20px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      font: 'var(--text-body)',
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      textAlign: 'left'
    }
  }, it.q, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--color-accent-primary)",
    strokeWidth: "2",
    style: {
      transform: open === i ? 'rotate(45deg)' : 'none',
      transition: 'transform var(--motion-standard) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }))), open === i && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 18px',
      color: 'var(--color-text-secondary)',
      font: 'var(--text-body)'
    }
  }, it.a))));
}
Object.assign(__ds_scope, { StatusPill, Chip, Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/data/ProcessTimeline.jsx
try { (() => {
function ProcessTimeline({
  stages = [{
    title: 'Discover',
    description: 'Understand the business need, audience, environment, and performance challenge.'
  }, {
    title: 'Define',
    description: 'Clarify outcomes, behaviors, success measures, and experience requirements.'
  }, {
    title: 'Design',
    description: 'Create the learning strategy, architecture, journey, narrative, and interaction model.'
  }, {
    title: 'Develop',
    description: 'Build accessible, engaging, scalable learning and media experiences.'
  }, {
    title: 'Deliver',
    description: 'Launch within the learner\'s workflow and organizational ecosystem.'
  }, {
    title: 'Measure',
    description: 'Evaluate performance, engagement, adoption, and opportunities for iteration.'
  }],
  activeIndex = 2
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 15,
      top: 8,
      bottom: 8,
      width: 1,
      background: 'var(--color-border-default)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 15,
      top: 8,
      width: 1,
      height: `${activeIndex / (stages.length - 1) * 100}%`,
      background: 'var(--color-accent-primary)',
      boxShadow: '0 0 8px var(--color-accent-primary)',
      transition: 'height var(--motion-slow) var(--ease-out)'
    }
  }), stages.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: {
      display: 'flex',
      gap: 20,
      padding: '16px 0',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      flexShrink: 0,
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: i <= activeIndex ? 'var(--color-accent-primary)' : 'var(--color-background-secondary)',
      border: i <= activeIndex ? 'none' : '1px solid var(--color-border-default)',
      color: i <= activeIndex ? 'var(--color-on-accent)' : 'var(--color-text-muted)',
      font: 'var(--text-caption)',
      fontFamily: 'var(--font-mono)',
      fontWeight: 700
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h3)',
      fontSize: '1.125rem',
      color: i <= activeIndex ? 'var(--color-text-primary)' : 'var(--color-text-muted)'
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body)',
      fontSize: '0.9375rem',
      color: 'var(--color-text-secondary)',
      marginTop: 4
    }
  }, s.description)))));
}
function ProcessStepper({
  stages = [{
    title: 'Diagnose',
    description: 'Identify the behavior gap, audience, and business context before designing anything.'
  }, {
    title: 'Script',
    description: "Write the narrative and instructional architecture — the film's screenplay."
  }, {
    title: 'Produce',
    description: 'Build the experience with AI-native tooling at the speed of a full studio.'
  }, {
    title: 'Deploy',
    description: 'Ship into the learner\'s real workflow, measured in behavior change, not completion rates.'
  }],
  activeIndex = 2
}) {
  const icons = {
    Discover: /*#__PURE__*/React.createElement("path", {
      d: "M11 4a7 7 0 104.9 12.02l4.79 4.79a1 1 0 001.42-1.42l-4.8-4.8A7 7 0 0011 4zm0 2a5 5 0 110 10 5 5 0 010-10z"
    }),
    Define: /*#__PURE__*/React.createElement("path", {
      d: "M12 2l2.2 6.6H21l-5.6 4.1L17.6 19 12 15.1 6.4 19l2.2-6.3L3 8.6h6.8L12 2z"
    }),
    Design: /*#__PURE__*/React.createElement("path", {
      d: "M14.06 5.02l3.75 3.75L7.5 19.08H3.75v-3.75zM17.66 3.32a1 1 0 011.42 0l2.6 2.6a1 1 0 010 1.42l-1.83 1.83-4.02-4.02z"
    }),
    Build: /*#__PURE__*/React.createElement("path", {
      d: "M21.7 17.4L15.6 11.3a4 4 0 00-4.9-4.9L13.2 8.9 11 11.1 8.4 8.5l-2.5 2.5a4 4 0 004.9 4.9l6.1 6.1a1 1 0 001.4 0l2.4-2.4a1 1 0 000-1.4z"
    }),
    Enable: /*#__PURE__*/React.createElement("path", {
      d: "M13 2L3 14h6l-1 8 11-13h-6z"
    }),
    Measure: /*#__PURE__*/React.createElement("path", {
      d: "M4 20V10M10 20V4M16 20v-7M22 20v-4",
      strokeLinecap: "round"
    })
  };
  const Icon = ({
    title
  }) => /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: icons[title] && icons[title].props.strokeLinecap ? 'none' : 'currentColor',
    stroke: icons[title] && icons[title].props.strokeLinecap ? 'currentColor' : 'none',
    strokeWidth: "2"
  }, icons[title] || /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "6"
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes jiz-node-pulse{0%,100%{box-shadow:0 0 8px var(--color-accent-primary)}50%{box-shadow:0 0 18px var(--color-accent-primary)}}`), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '4%',
      right: '4%',
      top: 10,
      height: 1,
      backgroundImage: 'repeating-linear-gradient(to right, var(--color-border-default) 0 6px, transparent 6px 12px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '4%',
      top: 10,
      height: 1,
      width: `${activeIndex / (stages.length - 1) * 92}%`,
      background: 'var(--color-accent-primary)',
      boxShadow: '0 0 8px var(--color-accent-primary)',
      transition: 'width var(--motion-slow) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, stages.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      maxWidth: 180,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      flexShrink: 0,
      zIndex: 1,
      marginBottom: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: i <= activeIndex ? '#fff' : 'var(--color-background-secondary)',
      border: i <= activeIndex ? 'none' : '1px solid var(--color-border-default)',
      boxShadow: i === activeIndex ? 'var(--glow-lime)' : 'none',
      animation: i <= activeIndex && !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) ? `jiz-node-pulse ${2.2 + i * 0.3}s ease-in-out infinite` : 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-hud)',
      color: i <= activeIndex ? 'var(--color-accent-primary)' : 'var(--color-text-muted)',
      marginBottom: 6
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: i <= activeIndex ? 'var(--color-accent-primary)' : 'var(--color-text-muted)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    title: s.title
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-h3)',
      fontSize: '1.0625rem',
      color: 'var(--color-text-primary)'
    }
  }, s.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-caption)',
      fontSize: '0.8125rem',
      color: 'var(--color-text-secondary)'
    }
  }, s.description)))));
}
function MetricsGrid({
  metrics = [{
    value: '[metric]',
    label: 'Capability adoption'
  }, {
    value: '[metric]',
    label: 'Time-to-proficiency'
  }, {
    value: '[metric]',
    label: 'Engagement rate'
  }, {
    value: '[metric]',
    label: 'Stakeholder satisfaction'
  }]
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: 1,
      background: 'var(--color-border-subtle)',
      border: '1px solid var(--color-border-default)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, metrics.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.label,
    style: {
      background: 'var(--color-background-secondary)',
      padding: 'var(--space-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-mono)',
      fontSize: '2rem',
      fontWeight: 700,
      color: 'var(--color-accent-primary)'
    }
  }, m.value), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--color-text-secondary)'
    }
  }, m.label))));
}
Object.assign(__ds_scope, { ProcessTimeline, ProcessStepper, MetricsGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProcessTimeline.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const fieldBase = {
  width: '100%',
  background: 'var(--color-background-secondary)',
  border: '1px solid var(--color-border-default)',
  borderRadius: 'var(--radius-sm)',
  padding: '13px 16px',
  font: 'var(--text-body)',
  fontSize: '0.9375rem',
  color: 'var(--color-text-primary)',
  transition: `border-color var(--motion-fast) var(--ease-standard)`,
  minHeight: 44,
  boxSizing: 'border-box'
};
function Input({
  label = 'Name',
  placeholder = 'Your name',
  type = 'text'
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--color-text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...fieldBase,
      borderColor: focus ? 'var(--color-accent-primary)' : 'var(--color-border-default)'
    }
  }));
}
function Textarea({
  label = 'Message',
  placeholder = 'Tell me about the challenge you\'re solving for...',
  rows = 4
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--color-text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", {
    placeholder: placeholder,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...fieldBase,
      resize: 'vertical',
      minHeight: 100,
      fontFamily: 'var(--font-body)',
      borderColor: focus ? 'var(--color-accent-primary)' : 'var(--color-border-default)'
    }
  }));
}
function ContactPanel() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-background-secondary)',
      border: '1px solid var(--color-border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-xl)',
      maxWidth: 480,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)',
      fontSize: '1.5rem'
    }
  }, "Tell me about your challenge.")), /*#__PURE__*/React.createElement(Input, {
    label: "Name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@company.com"
  }), /*#__PURE__*/React.createElement(Textarea, null), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'var(--color-accent-primary)',
      color: 'var(--color-on-accent)',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: '13px 24px',
      font: 'var(--text-button)',
      cursor: 'pointer',
      minHeight: 44
    }
  }, "Send message"));
}
Object.assign(__ds_scope, { Input, Textarea, ContactPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
const DEFAULT_ITEMS = ['About', 'Featured Work', 'Design Philosophy', 'Creative Lab', 'Insights'];
function NavBar({
  items = DEFAULT_ITEMS,
  ctaLabel = "Let's Build",
  active: activeProp = 'About',
  onNavigate,
  onConnect
}) {
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState(activeProp);
  const [hovered, setHovered] = React.useState(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [ctaHovered, setCtaHovered] = React.useState(false);
  const [indicator, setIndicator] = React.useState({
    left: 0,
    width: 0,
    visible: false
  });
  const navRef = React.useRef(null);
  const linksRef = React.useRef(null);
  const linkRefs = React.useRef({});
  const menuButtonRef = React.useRef(null);
  const mobilePanelRef = React.useRef(null);
  React.useEffect(() => {
    setActive(activeProp);
  }, [activeProp]);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const measureIndicator = React.useCallback(() => {
    const link = linkRefs.current[active];
    const container = linksRef.current;
    if (!link || !container || !items.includes(active)) {
      setIndicator(current => ({
        ...current,
        visible: false
      }));
      return;
    }
    const linkRect = link.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    setIndicator({
      left: linkRect.left - containerRect.left,
      width: linkRect.width,
      visible: true
    });
  }, [active, items]);
  React.useLayoutEffect(() => {
    measureIndicator();
    const onResize = () => measureIndicator();
    window.addEventListener('resize', onResize);
    let observer;
    if (typeof ResizeObserver !== 'undefined' && linksRef.current) {
      observer = new ResizeObserver(measureIndicator);
      observer.observe(linksRef.current);
    }
    if (document.fonts?.ready) {
      document.fonts.ready.then(measureIndicator).catch(() => {});
    }
    return () => {
      window.removeEventListener('resize', onResize);
      observer?.disconnect();
    };
  }, [measureIndicator]);
  React.useEffect(() => {
    if (!menuOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => {
      mobilePanelRef.current?.querySelector('button')?.focus();
    });
    const onKeyDown = event => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        return;
      }
      if (event.key !== 'Tab' || !mobilePanelRef.current) return;
      const focusable = Array.from(mobilePanelRef.current.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus();else menuButtonRef.current?.focus();
    };
  }, [menuOpen]);
  const chooseItem = item => {
    setActive(item);
    setMenuOpen(false);
    onNavigate?.(item);
  };
  const chooseConnect = () => {
    setActive(ctaLabel);
    setMenuOpen(false);
    onConnect?.();
  };
  const ctaActive = active === ctaLabel;
  return /*#__PURE__*/React.createElement("nav", {
    ref: navRef,
    "aria-label": "Primary navigation",
    className: `jiz-global-nav${scrolled ? ' is-scrolled' : ''}`
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "jiz-brand",
    "aria-label": "Go to homepage",
    onClick: () => onNavigate?.('Home')
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/logo/jiz-logo-white.svg",
    alt: "",
    className: "jiz-brand__logo"
  }), /*#__PURE__*/React.createElement("span", {
    className: "jiz-brand__name",
    "aria-label": "Jonathan Iker Zamarripa"
  }, /*#__PURE__*/React.createElement("span", null, "Jonathan"), /*#__PURE__*/React.createElement("span", {
    className: "jiz-brand__accent"
  }, "Iker"), /*#__PURE__*/React.createElement("span", null, "Zamarripa"))), /*#__PURE__*/React.createElement("div", {
    ref: linksRef,
    className: "jiz-nav-links",
    "aria-label": "Homepage sections"
  }, items.map(item => {
    const isActive = item === active;
    const isHovered = item === hovered;
    return /*#__PURE__*/React.createElement("button", {
      key: item,
      type: "button",
      ref: element => {
        linkRefs.current[item] = element;
      },
      className: "jiz-nav-link",
      "aria-current": isActive ? 'location' : undefined,
      "data-active": isActive ? 'true' : 'false',
      "data-hovered": isHovered ? 'true' : 'false',
      onMouseEnter: () => setHovered(item),
      onMouseLeave: () => setHovered(null),
      onFocus: () => setHovered(item),
      onBlur: () => setHovered(null),
      onClick: () => chooseItem(item)
    }, item);
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "jiz-nav-indicator",
    style: {
      transform: `translateX(${indicator.left}px)`,
      width: indicator.width,
      opacity: indicator.visible ? 1 : 0
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "jiz-nav-cta",
    "aria-current": ctaActive ? 'location' : undefined,
    "data-active": ctaActive ? 'true' : 'false',
    "data-hovered": ctaHovered ? 'true' : 'false',
    onMouseEnter: () => setCtaHovered(true),
    onMouseLeave: () => setCtaHovered(false),
    onFocus: () => setCtaHovered(true),
    onBlur: () => setCtaHovered(false),
    onClick: chooseConnect
  }, ctaLabel), /*#__PURE__*/React.createElement("button", {
    ref: menuButtonRef,
    type: "button",
    className: "jiz-nav-menu-button",
    "aria-label": menuOpen ? 'Close navigation menu' : 'Open navigation menu',
    "aria-expanded": menuOpen,
    "aria-controls": "jiz-mobile-navigation",
    onClick: () => setMenuOpen(open => !open)
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "jiz-mobile-backdrop",
    role: "presentation",
    onMouseDown: event => {
      if (event.target === event.currentTarget) setMenuOpen(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: mobilePanelRef,
    id: "jiz-mobile-navigation",
    className: "jiz-mobile-panel",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Navigation menu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-mobile-panel__header"
  }, /*#__PURE__*/React.createElement("span", null, "Navigate"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setMenuOpen(false),
    "aria-label": "Close navigation menu"
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "jiz-mobile-panel__links"
  }, items.map(item => /*#__PURE__*/React.createElement("button", {
    key: item,
    type: "button",
    "aria-current": item === active ? 'location' : undefined,
    "data-active": item === active ? 'true' : 'false',
    onClick: () => chooseItem(item)
  }, item))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "jiz-mobile-panel__cta",
    "aria-current": ctaActive ? 'location' : undefined,
    onClick: chooseConnect
  }, ctaLabel))), /*#__PURE__*/React.createElement("style", null, `
        .jiz-global-nav {
          --nav-pad-x: clamp(24px, 3vw, 56px);
          position: sticky;
          top: 0;
          z-index: 100;
          display: grid;
          grid-template-columns: minmax(300px, .9fr) auto minmax(132px, .9fr);
          align-items: center;
          column-gap: clamp(28px, 3vw, 52px);
          width: 100%;
          min-height: 98px;
          padding: 12px var(--nav-pad-x);
          box-sizing: border-box;
          background: rgba(8, 10, 12, .58);
          border-bottom: 1px solid rgba(255, 255, 255, .045);
          -webkit-backdrop-filter: blur(22px) saturate(125%);
          backdrop-filter: blur(22px) saturate(125%);
          transition: min-height 300ms var(--ease-standard), padding 300ms var(--ease-standard), background 300ms var(--ease-standard), border-color 300ms var(--ease-standard);
        }
        .jiz-global-nav.is-scrolled {
          min-height: 86px;
          padding-top: 9px;
          padding-bottom: 9px;
          background:
            radial-gradient(120% 180% at 50% -60%, rgba(100, 225, 255, .10), transparent 62%),
            rgba(8, 10, 12, .88);
          border-bottom-color: rgba(255, 255, 255, .085);
          box-shadow: 0 18px 44px rgba(0, 0, 0, .28);
        }
        .jiz-brand {
          justify-self: start;
          display: inline-flex;
          align-items: center;
          gap: 18px;
          min-width: 0;
          padding: 0;
          border: 0;
          background: transparent;
          color: inherit;
          cursor: pointer;
          text-align: left;
        }
        .jiz-brand__logo {
          width: 72px;
          height: 72px;
          flex: 0 0 auto;
          object-fit: contain;
          transition: width 300ms var(--ease-standard), height 300ms var(--ease-standard);
        }
        .is-scrolled .jiz-brand__logo {
          width: 62px;
          height: 62px;
        }
        .jiz-brand__name {
          display: inline-flex;
          align-items: baseline;
          gap: .34em;
          color: #F5F7F8;
          font-family: var(--font-body, inherit);
          font-size: clamp(.95rem, 1.05vw, 1.125rem);
          font-weight: 650;
          line-height: 1;
          letter-spacing: .025em;
          white-space: nowrap;
        }
        .jiz-brand__accent { color: var(--color-accent-primary); }
        .jiz-nav-links {
          position: relative;
          justify-self: center;
          display: flex;
          align-items: center;
          gap: clamp(22px, 2vw, 38px);
          min-width: 0;
        }
        .jiz-nav-link {
          position: relative;
          min-height: 46px;
          padding: 0 12px;
          border: 0;
          border-radius: 10px;
          background: transparent;
          color: rgba(245, 247, 248, .68);
          font: var(--text-body);
          font-size: clamp(.9rem, .92vw, 1rem);
          font-weight: 500;
          line-height: 1;
          white-space: nowrap;
          cursor: pointer;
          transition: color 240ms var(--ease-standard), background 240ms var(--ease-standard);
        }
        .jiz-nav-link[data-hovered="true"] {
          color: #F5F7F8;
          background: rgba(255, 255, 255, .045);
        }
        .jiz-nav-link[data-active="true"] {
          color: var(--color-accent-primary);
          font-weight: 650;
          background: rgba(198, 242, 58, .075);
        }
        .jiz-nav-indicator {
          position: absolute;
          left: 0;
          bottom: -2px;
          height: 2px;
          border-radius: 2px;
          background: var(--color-accent-primary);
          transform-origin: left center;
          transition: transform 350ms cubic-bezier(.25,.46,.45,.94), width 350ms cubic-bezier(.25,.46,.45,.94), opacity 180ms ease;
          pointer-events: none;
        }
        .jiz-nav-cta {
          justify-self: end;
          min-height: 46px;
          padding: 10px 24px;
          border: 1px solid var(--color-accent-primary);
          border-radius: 8px;
          background: transparent;
          color: var(--color-accent-primary);
          font: var(--text-body);
          font-size: clamp(.9rem, .92vw, .98rem);
          font-weight: 650;
          white-space: nowrap;
          cursor: pointer;
          transition: color 220ms var(--ease-standard), background 220ms var(--ease-standard), box-shadow 220ms var(--ease-standard);
        }
        .jiz-nav-cta[data-hovered="true"],
        .jiz-nav-cta[data-active="true"] {
          background: var(--color-accent-primary);
          color: #080D0B;
          box-shadow: 0 0 0 1px rgba(198,242,58,.14);
        }
        .jiz-nav-menu-button {
          display: none;
          justify-self: end;
          width: 44px;
          height: 44px;
          padding: 0;
          border: 1px solid rgba(255,255,255,.14);
          border-radius: 8px;
          background: rgba(255,255,255,.03);
          cursor: pointer;
        }
        .jiz-nav-menu-button span {
          display: block;
          width: 18px;
          height: 1px;
          margin: 5px auto;
          background: #F5F7F8;
        }
        .jiz-mobile-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: grid;
          justify-items: end;
          background: rgba(3,5,6,.72);
          -webkit-backdrop-filter: blur(8px);
          backdrop-filter: blur(8px);
        }
        .jiz-mobile-panel {
          width: min(390px, 100%);
          min-height: 100dvh;
          padding: 24px;
          box-sizing: border-box;
          background: #0B1012;
          border-left: 1px solid rgba(255,255,255,.08);
          box-shadow: -30px 0 80px rgba(0,0,0,.45);
        }
        .jiz-mobile-panel__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 34px;
          color: var(--color-accent-secondary);
          font: var(--text-eyebrow);
          letter-spacing: var(--tracking-eyebrow);
          text-transform: uppercase;
        }
        .jiz-mobile-panel__header button {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 50%;
          background: transparent;
          color: #F5F7F8;
          font-size: 1.4rem;
          cursor: pointer;
        }
        .jiz-mobile-panel__links {
          display: grid;
          gap: 2px;
        }
        .jiz-mobile-panel__links button {
          min-height: 58px;
          padding: 0;
          border: 0;
          border-bottom: 1px solid rgba(255,255,255,.07);
          background: transparent;
          color: rgba(245,247,248,.78);
          font: var(--text-h3);
          text-align: left;
          cursor: pointer;
        }
        .jiz-mobile-panel__links button[data-active="true"] { color: var(--color-accent-primary); }
        .jiz-mobile-panel__cta {
          width: 100%;
          min-height: 48px;
          margin-top: 30px;
          border: 1px solid var(--color-accent-primary);
          border-radius: 8px;
          background: var(--color-accent-primary);
          color: #080D0B;
          font: var(--text-body);
          font-weight: 650;
          cursor: pointer;
        }
        .jiz-brand:focus-visible,
        .jiz-nav-link:focus-visible,
        .jiz-nav-cta:focus-visible,
        .jiz-nav-menu-button:focus-visible,
        .jiz-mobile-panel button:focus-visible {
          outline: 2px solid var(--color-accent-secondary);
          outline-offset: 4px;
        }
        @media (max-width: 1240px) {
          .jiz-global-nav {
            grid-template-columns: minmax(250px, .8fr) auto minmax(120px, .8fr);
            column-gap: 24px;
          }
          .jiz-brand__logo { width: 64px; height: 64px; }
          .is-scrolled .jiz-brand__logo { width: 58px; height: 58px; }
          .jiz-brand__name { font-size: .92rem; }
          .jiz-nav-links { gap: 20px; }
          .jiz-nav-link { font-size: .88rem; padding-inline: 9px; }
          .jiz-nav-cta { padding-inline: 19px; font-size: .88rem; }
        }
        @media (max-width: 1080px) {
          .jiz-global-nav { grid-template-columns: 1fr auto; }
          .jiz-nav-links, .jiz-nav-cta { display: none; }
          .jiz-nav-menu-button { display: block; }
        }
        @media (max-width: 620px) {
          .jiz-global-nav { --nav-pad-x: 18px; min-height: 78px; }
          .jiz-brand { gap: 12px; }
          .jiz-brand__logo,
          .is-scrolled .jiz-brand__logo { width: 52px; height: 52px; }
          .jiz-brand__name { font-size: .76rem; gap: .26em; letter-spacing: .012em; }
        }
        @media (max-width: 430px) {
          .jiz-brand__name span:last-child { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .jiz-global-nav,
          .jiz-brand__logo,
          .jiz-nav-link,
          .jiz-nav-indicator,
          .jiz-nav-cta { transition: none !important; }
        }
      `));
}
function Tabs({
  tabs = ['Overview', 'Process', 'Outcomes'],
  defaultActive = 0
}) {
  const [active, setActive] = React.useState(defaultActive);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--color-border-default)'
    }
  }, tabs.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setActive(i),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '12px 18px',
      font: 'var(--text-body)',
      fontSize: '0.9375rem',
      fontWeight: 600,
      color: active === i ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
      borderBottom: active === i ? '2px solid var(--color-accent-primary)' : '2px solid transparent',
      marginBottom: -1
    }
  }, t)));
}
function pad2(n) {
  return String(Math.floor(n)).padStart(2, '0');
}
function FilmHud({
  name = 'Jonathan Iker Zamarripa',
  scene = 'SC.01 — TITLE SEQUENCE',
  progress = 0
}) {
  const [tc, setTc] = React.useState({
    h: 0,
    m: 0,
    s: 0,
    f: 0
  });
  React.useEffect(() => {
    const totalFrames = progress * 24 * 90; // ~90s film at 24fps
    setTc({
      h: 0,
      m: Math.floor(totalFrames / (24 * 60)),
      s: Math.floor(totalFrames / 24) % 60,
      f: Math.floor(totalFrames) % 24
    });
  }, [progress]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 2,
      background: 'var(--line)',
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${progress * 100}%`,
      background: 'var(--gold)',
      transition: 'width 80ms linear'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 16,
      left: 24,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/logo/jiz-logo-white.svg",
    alt: "JIZ logo",
    style: {
      width: 22,
      height: 22,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-hud)',
      letterSpacing: 'var(--tracking-hud)',
      textTransform: 'uppercase',
      color: 'var(--color-text-secondary)'
    }
  }, name)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 16,
      right: 24,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: '#D8465C',
      animation: 'jiz-blink 1.4s steps(1) infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-hud)',
      letterSpacing: 'var(--tracking-hud)',
      color: 'var(--color-text-secondary)'
    }
  }, "REC ", pad2(tc.h), ":", pad2(tc.m), ":", pad2(tc.s), ":", pad2(tc.f))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 24,
      left: 24,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-hud)',
      letterSpacing: 'var(--tracking-hud)',
      color: 'var(--gold)'
    }
  }, scene)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 24,
      right: 24,
      zIndex: 50
    },
    className: "jiz-hud-scrub"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-hud)',
      letterSpacing: 'var(--tracking-hud)',
      color: 'var(--muted)'
    }
  }, "Scroll to scrub \u25BE")), /*#__PURE__*/React.createElement("style", null, `@keyframes jiz-blink{0%,49%{opacity:1}50%,100%{opacity:0.15}}@media(max-width:720px){.jiz-hud-scrub{display:none}}`));
}
Object.assign(__ds_scope, { NavBar, Tabs, FilmHud });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-website/About_v2.jsx
try { (() => {
function AboutV2() {
  const sectionRef = React.useRef(null);
  const railRef = React.useRef(null);
  const nodeRefs = React.useRef([]);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const videoRef = React.useRef(null);
  const [videoReady, setVideoReady] = React.useState(false);
  const [videoPlaying, setVideoPlaying] = React.useState(false);
  const [videoError, setVideoError] = React.useState(false);
  const [videoPlaybackError, setVideoPlaybackError] = React.useState(false);
  const [reducedMotion, setReducedMotion] = React.useState(false);
  const methodRef = React.useRef(null);
  const methodResumeTimerRef = React.useRef(null);
  const methodResumeAtRef = React.useRef(0);
  const methodAdvanceTimerRef = React.useRef(null);
  const [activeMethodIndex, setActiveMethodIndex] = React.useState(0);
  const [methodVisible, setMethodVisible] = React.useState(false);
  const [methodPaused, setMethodPaused] = React.useState(false);
  const THINKING_ENGINE_SRC = './assets/video/Man_thinking_strategic_intelligent.mp4';
  const methodStages = [{
    id: 'observe',
    label: '01',
    title: 'Observe',
    copy: 'See the full system before defining the solution.'
  }, {
    id: 'understand',
    label: '02',
    title: 'Understand',
    copy: 'Reveal the patterns, friction, behaviors, and decisions shaping the experience.'
  }, {
    id: 'design',
    label: '03',
    title: 'Design',
    copy: 'Create the structure, story, and interaction that make understanding possible.'
  }, {
    id: 'build',
    label: '04',
    title: 'Build',
    copy: 'Produce the learning, media, tools, and systems required for adoption.'
  }, {
    id: 'transform',
    label: '05',
    title: 'Transform',
    copy: 'Turn clarity into action, confidence, and measurable movement.'
  }];
  const capabilityGroups = [{
    title: 'DESIGN',
    subtitle: 'What I architect',
    items: ['Learning systems', 'Experience strategy', 'Behavior change', 'Information architecture', 'Human-centered design']
  }, {
    title: 'BUILD',
    subtitle: 'What I create',
    items: ['Articulate Storyline', 'Camtasia', 'Adobe Creative Cloud', 'Figma', 'Motion and video', 'AI production workflows']
  }, {
    title: 'KNOWN FOR',
    subtitle: 'What differentiates the work',
    items: ['Systems thinking', 'Creative direction', 'Enterprise learning', 'Rapid prototyping', 'Translating complexity into clarity']
  }];
  const careerEntries = [{
    id: 'gstate',
    stage: 'Storytelling',
    years: '2005–2009',
    organization: 'Georgia State University',
    title: 'B.A., Journalism — Film & Video',
    summary: 'Developed the editorial and cinematic foundation that continues to shape how I frame complexity, structure narratives, and make ideas memorable.',
    highlights: ['Studied journalism, film, and video production', 'Built fluency in visual storytelling and narrative structure', 'Learned to investigate before interpreting'],
    capabilities: ['Storytelling', 'Video production', 'Editorial thinking'],
    type: 'education'
  }, {
    id: 'americorps',
    stage: 'Service',
    years: '2009–2011',
    organization: 'AmeriCorps · Georgia State · Outward Bound',
    title: 'Service, Facilitation, and Youth Development',
    summary: 'Translated academic preparation into service—supporting young people, facilitating experiential learning, and discovering how trust, challenge, and reflection shape growth.',
    highlights: ['Completed two years of service', 'Supported experiential and community-based learning', 'Built a human-centered facilitation practice'],
    capabilities: ['Service leadership', 'Facilitation', 'Experiential learning'],
    type: 'service'
  }, {
    id: 'k12',
    stage: 'Education',
    years: '2011–2019',
    organization: 'K–12 Education · STEAM & Robotics',
    title: 'Classroom and Program Leadership',
    summary: 'Built a practical understanding of how people learn by teaching STEAM, leading robotics programs, and turning limited resources into meaningful experiences.',
    highlights: ['Coached a regional championship robotics team', 'Secured more than $20,000 in program funding', 'Developed a learner-first leadership practice'],
    capabilities: ['Facilitation', 'Program leadership', 'STEAM learning'],
    type: 'role'
  }, {
    id: 'ais',
    stage: 'Systems',
    years: '2019–2024',
    organization: 'Atlanta International School',
    title: 'EdTech & Innovation Coach / Strategist',
    summary: 'Connected instructional design, technology, content, analytics, and change leadership into an organization-wide learning and innovation practice.',
    highlights: ['Led an organization-wide LMS migration', 'Achieved 95% adoption and 4.9/5 satisfaction', 'Built analytics and needs-assessment infrastructure'],
    capabilities: ['Learning systems', 'Change leadership', 'Analytics'],
    type: 'role'
  }, {
    id: 'asu',
    stage: 'Research',
    years: '2023',
    organization: 'Arizona State University',
    title: 'M.Ed., Instructional Design & Technology',
    summary: 'Formalized a systems-based learning practice through advanced study in instructional design, technology, evaluation, and human-centered learning.',
    highlights: ['Graduated Summa Cum Laude', 'Connected learning science to production practice', 'Expanded expertise in evaluation and design strategy'],
    capabilities: ['Learning science', 'Research', 'Evaluation'],
    type: 'education'
  }, {
    id: 'cox',
    stage: 'Enterprise',
    years: '2025',
    organization: 'Cox Enterprises',
    title: 'Learning Experience Designer',
    summary: 'Designed enterprise learning experiences and AI-assisted production workflows for leadership development, systems adoption, and organizational change.',
    highlights: ['Led creative direction for the Workday Learn enterprise launch', 'Built AI-assisted production workflows for leadership development content', 'Designed a narrative-driven enterprise escape room'],
    capabilities: ['Enterprise learning', 'AI workflows', 'Storyline'],
    type: 'role'
  }, {
    id: 'ihg',
    stage: 'Scale',
    years: '2025–2026',
    organization: 'IHG Hotels & Resorts',
    title: 'Creative Content Specialist / Developer',
    summary: 'Combined learning strategy, cinematic production, and AI-enabled workflows to create global technology communication and onboarding experiences.',
    highlights: ['Produced enterprise onboarding and adoption content', 'Built repeatable AI-enabled production workflows', 'Partnered across Product, Engineering, UX, and Cybersecurity'],
    capabilities: ['Creative direction', 'Video', 'AI-native production'],
    type: 'current'
  }];
  const beliefs = [{
    title: 'Intelligence',
    copy: 'I look beneath the obvious to understand how systems, people, and decisions connect.'
  }, {
    title: 'Confidence',
    copy: 'I make clear decisions while remaining open to evidence, feedback, and change.'
  }, {
    title: 'Self-awareness',
    copy: 'I understand how my perspective shapes the work and where collaboration strengthens it.'
  }, {
    title: 'Empathy',
    copy: 'I design for the person who must understand, use, and live with the outcome.'
  }];
  React.useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return undefined;
    }
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    update();
    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', update);
      return () => media.removeEventListener('change', update);
    }
    if (typeof media.addListener === 'function') {
      media.addListener(update);
    }
    return () => {
      if (typeof media.removeListener === 'function') {
        media.removeListener(update);
      }
    };
  }, []);
  React.useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoReady || videoError) return;
    if (reducedMotion) {
      video.pause();
      video.currentTime = 0;
      return;
    }
    video.play().catch(() => {
      setVideoPlaying(false);
      setVideoPlaybackError(true);
    });
  }, [reducedMotion, videoReady, videoError]);
  const toggleThinkingEngine = async () => {
    const video = videoRef.current;
    if (!video || videoError || !videoReady) return;
    setVideoPlaybackError(false);
    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch (error) {
      setVideoPlaybackError(true);
    }
  };
  React.useEffect(() => {
    if (!sectionRef.current || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return undefined;
    }

    // Safety net: the section is ~4400px tall, so on a short viewport the
    // achievable intersectionRatio stays low. Never strand content at opacity 0.
    const fallback = setTimeout(() => setIsVisible(true), 1200);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        clearTimeout(fallback);
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.02
    });
    observer.observe(sectionRef.current);
    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);
  React.useEffect(() => {
    const node = methodRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setMethodVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => setMethodVisible(entry.isIntersecting), {
      threshold: 0.3
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  React.useEffect(() => {
    clearTimeout(methodAdvanceTimerRef.current);
    if (!methodVisible || methodPaused || reducedMotion) return undefined;
    const delay = activeMethodIndex === methodStages.length - 1 ? 4000 : 2400;
    methodAdvanceTimerRef.current = setTimeout(() => {
      setActiveMethodIndex(index => (index + 1) % methodStages.length);
    }, delay);
    return () => clearTimeout(methodAdvanceTimerRef.current);
  }, [methodVisible, methodPaused, reducedMotion, activeMethodIndex]);
  React.useEffect(() => () => {
    clearTimeout(methodResumeTimerRef.current);
    clearTimeout(methodAdvanceTimerRef.current);
  }, []);
  const pauseMethodFor = (duration = 8000) => {
    clearTimeout(methodResumeTimerRef.current);
    methodResumeAtRef.current = Date.now() + duration;
    setMethodPaused(true);
    methodResumeTimerRef.current = setTimeout(() => {
      methodResumeAtRef.current = 0;
      setMethodPaused(false);
    }, duration);
  };
  const resumeMethodWhenEligible = () => {
    const remaining = methodResumeAtRef.current - Date.now();
    if (remaining > 0) {
      clearTimeout(methodResumeTimerRef.current);
      methodResumeTimerRef.current = setTimeout(() => {
        methodResumeAtRef.current = 0;
        setMethodPaused(false);
      }, remaining);
      return;
    }
    setMethodPaused(false);
  };
  const selectMethodStage = index => {
    setActiveMethodIndex(index);
    pauseMethodFor(8000);
  };
  const selectCareerEntry = React.useCallback((index, behavior = 'smooth') => {
    const bounded = Math.max(0, Math.min(index, careerEntries.length - 1));
    setActiveIndex(bounded);
    const viewport = railRef.current;
    const node = nodeRefs.current[bounded];
    if (viewport && node) {
      const targetLeft = node.offsetLeft - viewport.clientWidth / 2 + node.offsetWidth / 2;
      viewport.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: reducedMotion ? 'auto' : behavior
      });
    }
  }, [reducedMotion]);
  const handleRailKeyDown = event => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      selectCareerEntry(activeIndex + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      selectCareerEntry(activeIndex - 1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      selectCareerEntry(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      selectCareerEntry(careerEntries.length - 1);
    }
  };
  const activeCareer = careerEntries[activeIndex];
  return /*#__PURE__*/React.createElement("section", {
    ref: sectionRef,
    className: 'jiz-about-master ' + (isVisible ? 'is-visible' : ''),
    "data-about-v2": "ready",
    "aria-labelledby": "about-master-title"
  }, /*#__PURE__*/React.createElement("style", null, `
        .jiz-about-master {
          --about-max: 1360px;
          position: relative;
          overflow: hidden;
          padding: clamp(78px, 8vw, 118px) var(--container-pad) clamp(112px, 12vw, 176px);
          color: var(--color-text-primary);
          background:
            radial-gradient(
              ellipse 68% 42% at 22% 8%,
              rgba(100, 225, 255, 0.055),
              transparent 66%
            ),
            radial-gradient(
              ellipse 58% 46% at 84% 78%,
              rgba(198, 242, 58, 0.028),
              transparent 68%
            ),
            radial-gradient(
              ellipse 78% 44% at 38% 30%,
              rgba(28, 36, 49, 0.4),
              transparent 70%
            ),
            radial-gradient(
              ellipse 104% 72% at 62% 66%,
              rgba(20, 26, 36, 0.46),
              transparent 76%
            ),
            linear-gradient(
              180deg,
              #101319 0%,
              #12161d 22%,
              #141922 48%,
              #11151c 74%,
              #0d1014 100%
            );
        }

        /* Architectural lighting — two very low-opacity planes that read as
           depth rather than colour. Sits beneath content, above the gradient. */
        .jiz-about-master > .jiz-about-inner { position: relative; z-index: 2; }

        /* Atmospheric texture — ~1.5% weave. Perceived subconsciously as surface,
           never seen as noise. Masked so it never terminates at an edge. */
        .jiz-about-texture {
          position: absolute;
          z-index: 1;
          inset: 0;
          pointer-events: none;
          opacity: 0.015;
          background-image:
            repeating-linear-gradient(
              22deg,
              rgba(255, 255, 255, 0.9) 0px,
              rgba(255, 255, 255, 0.9) 1px,
              transparent 1px,
              transparent 4px
            ),
            repeating-linear-gradient(
              112deg,
              rgba(255, 255, 255, 0.55) 0px,
              rgba(255, 255, 255, 0.55) 1px,
              transparent 1px,
              transparent 5px
            );
          -webkit-mask-image:
            radial-gradient(ellipse 82% 70% at 50% 44%, #000, transparent 88%);
          mask-image:
            radial-gradient(ellipse 82% 70% at 50% 44%, #000, transparent 88%);
        }

        /* Volumetric haze — one broad, very soft plane sitting between the
           lighting and the content. Creates the sense of air in the room. */
        .jiz-about-haze {
          position: absolute;
          z-index: 1;
          left: -10%;
          right: -10%;
          top: 12%;
          height: 62%;
          pointer-events: none;
          opacity: 0.5;
          background:
            radial-gradient(
              ellipse 60% 100% at 30% 40%,
              rgba(120, 150, 185, 0.03),
              transparent 72%
            ),
            radial-gradient(
              ellipse 54% 90% at 74% 62%,
              rgba(150, 170, 130, 0.018),
              transparent 74%
            );
          filter: blur(60px);
        }

        /* Atmospheric bleed — carries the environment past the section boundary
           so Featured Work is entered rather than arrived at. */
        .jiz-about-bleed {
          position: absolute;
          z-index: 1;
          left: 0;
          right: 0;
          bottom: -180px;
          height: 300px;
          pointer-events: none;
          background:
            linear-gradient(
              180deg,
              rgba(13, 16, 20, 0) 0%,
              rgba(13, 16, 20, 0.5) 42%,
              rgba(11, 13, 16, 0.82) 74%,
              rgba(11, 13, 16, 0) 100%
            );
        }

        .jiz-about-master {
          /* Clip X so the -10% haze cannot create document scroll, but leave Y
             visible so the bleed still carries into Featured Work. overflow-x: clip
             (unlike hidden) does not force the other axis to auto. */
          overflow-x: clip;
          overflow-y: visible;
        }

        /* The corner diffusion planes are the only thing that needed clipping;
           give them their own clipped stage instead of clipping the section. */
        .jiz-about-stage {
          position: absolute;
          z-index: 0;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .jiz-about-stage::before,
        .jiz-about-stage::after {
          content: '';
          position: absolute;
          z-index: 0;
          pointer-events: none;
          border-radius: 50%;
          filter: blur(130px);
        }

        /* Upper-left cool diffusion */
        .jiz-about-stage::before {
          width: 72vw;
          height: 56vw;
          left: -22vw;
          top: -14%;
          background:
            radial-gradient(
              ellipse,
              rgba(100, 225, 255, 0.05),
              rgba(64, 128, 176, 0.022) 44%,
              transparent 72%
            );
          opacity: 0.9;
        }

        /* Lower-right muted warmth */
        .jiz-about-stage::after {
          width: 64vw;
          height: 50vw;
          right: -20vw;
          bottom: -16%;
          background:
            radial-gradient(
              ellipse,
              rgba(198, 242, 58, 0.026),
              rgba(140, 170, 90, 0.014) 46%,
              transparent 74%
            );
          opacity: 0.85;
        }

        .jiz-about-inner {
          position: relative;
          z-index: 1;
          width: min(100%, var(--about-max));
          margin: 0 auto;
        }

        .jiz-scene-opening {
          text-align: center;
        }

        .jiz-eyebrow,
        .jiz-meta {
          font: var(--text-eyebrow);
          letter-spacing: var(--tracking-eyebrow);
          text-transform: uppercase;
        }

        .jiz-eyebrow {
          margin: 0 0 18px;
          color: var(--color-accent-secondary);
        }

        .jiz-opening-title {
          max-width: 1000px;
          margin: 0 auto;
          font: var(--text-h1);
          font-size: clamp(3rem, 6.6vw, 6.4rem);
          line-height: 0.96;
          letter-spacing: -0.055em;
          text-wrap: balance;
        }

        .jiz-opening-thesis {
          max-width: 840px;
          margin: 26px auto 0;
          color: var(--color-text-primary);
          font: var(--text-body-lg);
          font-size: clamp(1.02rem, 1.7vw, 1.28rem);
          line-height: 1.62;
        }

        .jiz-engine-shell {
          position: relative;
          width: min(86vw, 1120px);
          margin: clamp(50px, 6vw, 82px) auto 0;
          isolation: isolate;
          max-width: 100%;
          box-sizing: border-box;
        }

        .jiz-engine-shell::before {
          content: '';
          position: absolute;
          z-index: -2;
          inset: -14% -10%;
          pointer-events: none;
          background:
            radial-gradient(
              circle at 48% 48%,
              rgba(100, 225, 255, 0.14),
              transparent 52%
            ),
            radial-gradient(
              circle at 74% 34%,
              rgba(198, 242, 58, 0.065),
              transparent 36%
            );
          filter: blur(72px);
          opacity: 0.72;
        }

        .jiz-engine-shell::after {
          content: '';
          position: absolute;
          z-index: -1;
          left: 12%;
          right: 12%;
          bottom: -34px;
          height: 76px;
          pointer-events: none;
          border-radius: 50%;
          background:
            radial-gradient(
              ellipse,
              rgba(100, 225, 255, 0.1),
              transparent 68%
            );
          filter: blur(28px);
          opacity: 0.62;
        }

        .jiz-engine-stage {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border: 1px solid rgba(100, 225, 255, 0.12);
          border-radius: clamp(20px, 2vw, 30px);
          background: #06090b;
          box-shadow:
            0 52px 140px rgba(0, 0, 0, 0.44),
            0 14px 44px rgba(0, 0, 0, 0.2),
            0 0 0 1px rgba(255, 255, 255, 0.05),
            0 0 120px rgba(100, 225, 255, 0.085),
            inset 0 1px 0 rgba(255, 255, 255, 0.05),
            0 30px 88px rgba(0, 0, 0, 0.42),
            0 0 58px rgba(100, 225, 255, 0.045);
        }

        .jiz-engine-stage::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background:
            linear-gradient(
              180deg,
              rgba(5, 8, 10, 0.04),
              transparent 24%,
              transparent 72%,
              rgba(5, 8, 10, 0.18)
            ),
            radial-gradient(
              circle at 50% 50%,
              transparent 58%,
              rgba(5, 8, 10, 0.13) 82%,
              rgba(5, 8, 10, 0.32) 100%
            );
        }

        .jiz-engine-video {
          position: relative;
          z-index: 1;
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
          background: #06090b;
          object-fit: contain;
          object-position: center;
        }

        .jiz-engine-control {
          position: absolute;
          right: 18px;
          bottom: 17px;
          z-index: 4;
          min-width: 94px;
          min-height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 17px;
          border: 1px solid rgba(100, 225, 255, 0.24);
          border-radius: var(--radius-pill);
          background: rgba(5, 9, 11, 0.72);
          color: var(--color-text-primary);
          font: var(--text-caption);
          cursor: pointer;
          opacity: 0;
          transform: translateY(6px);
          backdrop-filter: blur(14px);
          transition:
            opacity var(--motion-fast) var(--ease-standard),
            transform var(--motion-fast) var(--ease-standard),
            border-color var(--motion-fast) var(--ease-standard),
            box-shadow var(--motion-fast) var(--ease-standard);
        }

        .jiz-engine-stage:hover .jiz-engine-control,
        .jiz-engine-stage:focus-within .jiz-engine-control {
          opacity: 1;
          transform: translateY(0);
        }

        .jiz-engine-control:hover {
          border-color: rgba(198, 242, 58, 0.58);
          box-shadow: 0 0 24px rgba(198, 242, 58, 0.12);
        }

        .jiz-engine-control:focus-visible {
          opacity: 1;
          transform: none;
          outline: 2px solid var(--color-accent-primary);
          outline-offset: 3px;
        }

        .jiz-engine-control:disabled {
          opacity: 0.38;
          cursor: default;
        }

        .jiz-engine-playback-note {
          position: absolute;
          left: 18px;
          bottom: 18px;
          z-index: 4;
          max-width: min(64%, 520px);
          margin: 0;
          padding: 9px 12px;
          border: 1px solid rgba(255, 190, 92, 0.24);
          border-radius: 12px;
          background: rgba(5, 9, 11, 0.78);
          color: var(--color-text-secondary);
          font: var(--text-caption);
          backdrop-filter: blur(12px);
        }

        @media (hover: none), (pointer: coarse) {
          .jiz-engine-control {
            opacity: 1;
            transform: none;
          }
        }

        .jiz-engine-state {
          position: absolute;
          inset: 0;
          z-index: 3;
          display: grid;
          place-items: center;
          padding: 28px;
          background:
            radial-gradient(
              circle at center,
              rgba(15, 29, 34, 0.86),
              rgba(5, 8, 10, 0.96)
            );
          color: var(--color-text-secondary);
          text-align: center;
          font: var(--text-body);
        }

        .jiz-engine-loader {
          display: grid;
          justify-items: center;
          gap: 16px;
        }

        .jiz-engine-loader::before {
          content: '';
          width: 34px;
          height: 34px;
          border: 2px solid rgba(100, 225, 255, 0.18);
          border-top-color: var(--color-accent-secondary);
          border-radius: 50%;
          animation: jiz-engine-spin 900ms linear infinite;
        }

        @keyframes jiz-engine-spin {
          to {
            transform: rotate(360deg);
          }
        }

        .jiz-engine-caption {
          position: relative;
          max-width: 980px;
          margin: clamp(30px, 4vw, 46px) auto 0;
          padding: clamp(27px, 3.5vw, 40px);
          overflow: hidden;
          border-top: 1px solid rgba(100, 225, 255, 0.13);
          border-bottom: 1px solid rgba(100, 225, 255, 0.08);
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(100, 225, 255, 0.025) 22%,
              rgba(198, 242, 58, 0.018) 78%,
              transparent
            );
          text-align: left;
        }

        .jiz-engine-caption::before {
          content: '';
          position: absolute;
          left: 0;
          top: 28px;
          bottom: 28px;
          width: 2px;
          border-radius: 999px;
          background:
            linear-gradient(
              180deg,
              var(--color-accent-secondary),
              var(--color-accent-primary)
            );
          box-shadow: 0 0 18px rgba(100, 225, 255, 0.18);
        }

        .jiz-engine-caption strong {
          display: block;
          margin: 0 0 12px;
          padding-left: 16px;
          color: var(--color-accent-secondary);
          font: var(--text-hud);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .jiz-engine-caption span {
          display: block;
          margin: 0;
          padding-left: 16px;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: clamp(0.95rem, 1.25vw, 1.04rem);
          line-height: 1.72;
        }

        .jiz-opening-copy {
          display: none;
        }

        .jiz-opening-copy p {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: clamp(0.98rem, 1.4vw, 1.08rem);
          line-height: 1.78;
        }

        .jiz-movement {
          margin-top: clamp(112px, 13vw, 172px);
        }

        .jiz-movement-heading {
          max-width: 760px;
          margin-bottom: clamp(40px, 5vw, 62px);
        }

        .jiz-movement-title {
          margin: 0;
          font: var(--text-h2);
          letter-spacing: -0.04em;
        }

        .jiz-movement-copy {
          max-width: 650px;
          margin: 17px 0 0;
          color: var(--color-text-secondary);
          font: var(--text-body-lg);
        }

        .jiz-method-wrap { position: relative; }
        .jiz-method-progress { position:absolute; top:24px; left:4%; height:2px; z-index:1; background: linear-gradient(90deg,var(--color-accent-secondary),var(--color-accent-primary)); transition: width 700ms var(--ease-out); pointer-events:none; }
        .jiz-method-path {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: clamp(18px, 2.5vw, 34px);
        }

        .jiz-method-path::before {
          content: '';
          position: absolute;
          top: 24px;
          left: 4%;
          right: 4%;
          height: 1px;
          background: linear-gradient(90deg, rgba(100,225,255,.12), rgba(100,225,255,.6), rgba(198,242,58,.72));
        }

        .jiz-method-button { appearance:none; border:0; padding:0; background:transparent; color:inherit; text-align:left; cursor:pointer; border-radius:14px; }
        .jiz-method-button:focus-visible { outline:2px solid var(--color-accent-primary); outline-offset:6px; }
        .jiz-method-stage {
          position: relative;
          padding-top: 54px;
        }

        .jiz-method-node {
          position: absolute;
          top: 16px;
          left: 0;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid rgba(100,225,255,.75);
          background: #131820;
          box-shadow: 0 0 0 5px rgba(100,225,255,.05);
        }

        .jiz-method-button[data-active='true'] .jiz-method-node {
          animation: jiz-method-pulse 2.2s ease-in-out infinite;
        }

        .jiz-method-button[data-active='true'] h4 {
          color: var(--color-text-primary);
        }

        @keyframes jiz-method-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.12); }
        }

        .jiz-method-stage h4 {
          margin: 0 0 11px;
          font: var(--text-h3);
          font-size: clamp(1.08rem, 1.8vw, 1.42rem);
        }

        .jiz-method-stage p:last-child {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: 0.94rem;
        }

        .jiz-method-label {
          margin: 0 0 12px;
          color: var(--color-accent-secondary);
        }

        .jiz-capabilities {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(34px, 5vw, 72px);
          margin-top: clamp(58px, 7vw, 88px);
          padding: clamp(36px, 4vw, 52px);
          border: 1px solid rgba(100, 225, 255, 0.09);
          border-radius: 22px;
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.038) 0%,
              rgba(20, 26, 34, 0.5) 24%,
              rgba(12, 17, 23, 0.58) 100%
            );
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.07),
            inset 0 0 0 1px rgba(255, 255, 255, 0.014),
            inset 0 -22px 44px rgba(100, 225, 255, 0.014),
            0 24px 60px rgba(0, 0, 0, 0.2);
        }

        .jiz-capability + .jiz-capability {
          border-left: 1px solid rgba(100,225,255,.08);
          padding-left: clamp(28px, 4vw, 52px);
        }

        .jiz-capability h4 {
          margin: 0;
          color: var(--color-accent-secondary);
        }

        .jiz-capability > p {
          margin: 9px 0 22px;
          color: var(--color-text-muted);
          font: var(--text-caption);
        }

        .jiz-capability ul {
          list-style: none;
          display: grid;
          gap: 12px;
          margin: 0;
          padding: 0;
        }

        .jiz-capability li {
          position: relative;
          padding-left: 15px;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: 0.94rem;
        }

        .jiz-capability li::before {
          content: '';
          position: absolute;
          left: 0;
          top: .7em;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(100,225,255,.72);
        }

        .jiz-career-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 26px;
          margin-bottom: 34px;
        }

        .jiz-career-controls {
          display: flex;
          gap: 10px;
        }

        .jiz-career-control {
          min-width: 52px;
          min-height: 52px;
          padding: 0 18px;
          border-radius: var(--radius-pill);
          border: 1px solid rgba(100,225,255,.18);
          background: rgba(255,255,255,.016);
          color: var(--color-text-primary);
          cursor: pointer;
        }

        .jiz-career-control {
          transition:
            transform var(--motion-fast) var(--ease-standard),
            border-color var(--motion-fast) var(--ease-standard),
            background var(--motion-fast) var(--ease-standard);
        }

        .jiz-career-control:hover:not(:disabled) {
          transform: translateY(-1px);
          border-color: rgba(198,242,58,.42);
          background: rgba(198,242,58,.04);
        }

        .jiz-career-control:focus-visible,
        .jiz-career-node:focus-visible {
          outline: 2px solid var(--color-accent-primary);
          outline-offset: 4px;
        }

        .jiz-career-control:disabled {
          opacity: .28;
          cursor: default;
        }

        .jiz-career-helper { display:flex; justify-content:space-between; align-items:center; gap:20px; margin: 18px 0 8px; color:var(--color-text-muted); font:var(--text-caption); }
        .jiz-career-rail-shell { position:relative; }
        .jiz-career-rail-shell::before,.jiz-career-rail-shell::after { content:''; position:absolute; top:0; bottom:0; width:54px; z-index:3; pointer-events:none; }
        .jiz-career-rail-shell::before { left:0; background:linear-gradient(90deg,#12171f,rgba(18,23,31,0)); }
        .jiz-career-rail-shell::after { right:0; background:linear-gradient(270deg,#12171f,rgba(18,23,31,0)); }
        .jiz-career-viewport {
          overflow-x: auto;
          overscroll-behavior-inline: contain;
          scroll-snap-type: x mandatory;
          padding: 28px 0 22px;
          scrollbar-width: thin;
          scrollbar-color: rgba(100,225,255,.2) transparent;
        }

        .jiz-career-track {
          position: relative;
          display: flex;
          min-width: max-content;
          gap: clamp(28px, 4vw, 62px);
          padding: 0 clamp(16px, 4vw, 58px);
        }

        .jiz-career-track::before {
          content: '';
          position: absolute;
          left: 30px;
          right: 30px;
          top: 32px;
          height: 1px;
          background: linear-gradient(90deg, rgba(100,225,255,.18), rgba(100,225,255,.48), rgba(198,242,58,.48));
        }

        .jiz-career-node {
          position: relative;
          width: clamp(154px, 15vw, 210px);
          padding: 0;
          border: 0;
          background: transparent;
          color: inherit;
          text-align: left;
          cursor: pointer;
          scroll-snap-align: center;
        }

        .jiz-career-dot {
          position: relative;
          z-index: 1;
          display: block;
          width: 18px;
          height: 18px;
          margin: 0 0 25px;
          border-radius: 50%;
          border: 1px solid rgba(100,225,255,.65);
          background: #131820;
          box-shadow: 0 0 0 6px rgba(100,225,255,.045);
          transition: transform var(--motion-standard) var(--ease-out), background var(--motion-standard) var(--ease-out), box-shadow var(--motion-standard) var(--ease-out);
        }

        .jiz-career-node[data-type='education'] .jiz-career-dot {
          border-color: var(--color-accent-secondary);
        }

        .jiz-career-node.is-active .jiz-career-dot {
          transform: scale(1.28);
          border-color: var(--color-accent-primary);
          background: var(--color-accent-primary);
          box-shadow: 0 0 0 8px rgba(198,242,58,.08), 0 0 30px rgba(198,242,58,.16);
        }

        .jiz-career-stage {
          display: block;
          margin-bottom: 8px;
          color: var(--color-text-primary);
          font: var(--text-h3);
          font-size: 1rem;
        }

        .jiz-career-years,
        .jiz-career-org {
          display: block;
          color: var(--color-text-muted);
          font: var(--text-caption);
        }

        .jiz-career-org {
          margin-top: 8px;
          color: var(--color-text-secondary);
        }

        .jiz-career-detail {
          display: grid;
          grid-template-columns: minmax(0,.9fr) minmax(0,1.25fr);
          gap: clamp(34px,5vw,72px);
          margin-top: 36px;
          min-height: clamp(310px,32vw,390px);
          padding: clamp(28px,4vw,50px);
          border: 1px solid rgba(100,225,255,.1);
          border-radius: var(--radius-lg);
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.034) 0%,
              rgba(100, 225, 255, 0.022) 30%,
              rgba(255, 255, 255, 0.008) 100%
            );
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.062),
            inset 0 0 0 1px rgba(255, 255, 255, 0.012),
            inset 0 -20px 40px rgba(198, 242, 58, 0.01),
            0 22px 54px rgba(0, 0, 0, 0.16);
        }

        .jiz-career-detail h4 {
          margin: 0;
          font: var(--text-h2);
          font-size: clamp(1.55rem,3vw,2.45rem);
          letter-spacing: -.035em;
        }

        .jiz-career-org-detail {
          margin: 10px 0 0;
          color: var(--color-accent-secondary);
          font: var(--text-body-lg);
        }

        .jiz-career-summary {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-body);
        }

        .jiz-career-detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          margin-top: 26px;
        }

        .jiz-career-detail-grid h5 {
          margin: 0 0 12px;
          color: var(--color-text-muted);
        }

        .jiz-career-detail-grid ul {
          margin: 0;
          padding-left: 18px;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: .93rem;
        }

        .jiz-beliefs-intro {
          max-width: 700px;
          margin-top: clamp(76px, 9vw, 108px);
        }

        .jiz-beliefs-intro .jiz-movement-title {
          font-size: clamp(1.8rem, 3.4vw, 3rem);
        }

        .jiz-beliefs-wrapper {
          margin-top: clamp(36px, 4vw, 52px);
          padding: clamp(40px, 4vw, 56px);
          border-radius: 20px;
          border: 1px solid rgba(100, 225, 255, .08);
          background: radial-gradient(ellipse 120% 95% at 18% 12%, rgba(100, 225, 255, .04), transparent 74%), radial-gradient(ellipse 85% 100% at 88% 72%, rgba(198, 242, 58, .024), transparent 68%);
          backdrop-filter: blur(12px);
        }

        .jiz-beliefs-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: clamp(14px, 1.8vw, 20px);
          width: 100%;
        }

        .jiz-belief {
          grid-column: span 3;
          display: flex;
          flex-direction: column;
          padding: clamp(18px, 2.2vw, 24px);
          border: 1px solid rgba(100, 225, 255, .24);
          border-radius: 14px;
          background: transparent !important;
          gap: 10px;
          min-height: 0;
        }

        .jiz-belief h4 {
          margin: 0;
          font: var(--text-body);
          font-weight: 650;
          font-size: clamp(1rem, 1.1vw, 1.15rem);
          color: var(--color-text-primary);
          line-height: 1.32;
        }

        .jiz-belief p {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-caption);
          font-size: clamp(.875rem, 0.95vw, .95rem);
          line-height: 1.55;
        }

        .jiz-practice {
          grid-column: span 4;
          display: flex;
          flex-direction: column;
          padding: clamp(18px, 2.2vw, 24px);
          border: 1px solid rgba(198, 242, 58, .24);
          border-radius: 14px;
          background: transparent;
          gap: 10px;
          min-height: 0;
        }

        .jiz-practice h4 {
          margin: 0;
          font: var(--text-body);
          font-weight: 650;
          font-size: clamp(1rem, 1.1vw, 1.15rem);
          color: var(--color-text-primary);
          line-height: 1.32;
        }

        .jiz-practice p {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-caption);
          font-size: clamp(.875rem, 0.95vw, .95rem);
          line-height: 1.55;
        }

        .jiz-reveal {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 720ms var(--ease-out), transform 720ms var(--ease-out);
        }

        .jiz-about-master.is-visible .jiz-reveal {
          opacity: 1;
          transform: none;
        }

        @media (max-width: 1100px) {
          .jiz-belief { grid-column: span 6; }
          .jiz-practice { grid-column: span 6; }
        }

        @media (max-width: 680px) {
          .jiz-belief { grid-column: span 12; }
          .jiz-practice { grid-column: span 12; }
        }

        @media (max-width: 620px) {
          .jiz-about-master { padding-inline: max(20px,var(--container-pad)); }
          .jiz-opening-title { font-size: clamp(2.55rem,14vw,3.8rem); }
          .jiz-engine-shell { width: min(100%, 720px); }
          .jiz-engine-control { right: 12px; bottom: 12px; min-width: 78px; min-height: 38px; padding-inline: 14px; opacity: 1; transform: none; }
          .jiz-engine-playback-note { left: 12px; bottom: 60px; max-width: calc(100% - 24px); }
          .jiz-career-helper { align-items: flex-start; flex-direction: column; gap: 8px; }
          .jiz-method-path { grid-template-columns: 1fr; }
          .jiz-career-header { display: block; }
          .jiz-career-controls { margin-top: 24px; }
          .jiz-career-detail-grid { grid-template-columns: 1fr; }
        }

        @media (prefers-reduced-motion: reduce) {
          .jiz-about-master *,
          .jiz-about-master *::before,
          .jiz-about-master *::after {
            animation: none !important;
            transition-duration: .01ms !important;
            scroll-behavior: auto !important;
          }
          .jiz-reveal { opacity: 1; transform: none; }
          .jiz-method-button[data-active='true'] .jiz-method-node { animation: none !important; }
          .jiz-engine-control { opacity: 1; transform: none; }
        }
      `), /*#__PURE__*/React.createElement("div", {
    className: "jiz-about-stage",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "jiz-about-texture",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "jiz-about-haze",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "jiz-about-bleed",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "jiz-about-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-scene-opening"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-reveal"
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-eyebrow"
  }, "ABOUT / THE MIND"), /*#__PURE__*/React.createElement("h2", {
    id: "about-master-title",
    className: "jiz-opening-title"
  }, "How Jonathan thinks."), /*#__PURE__*/React.createElement("p", {
    className: "jiz-opening-thesis"
  }, "Most complexity isn't complicated \u2014 it's unexamined. My job is finding the shape hiding inside the tangle, then designing toward it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 20,
      maxWidth: 880,
      marginInline: 'auto',
      marginTop: 36,
      textAlign: 'left'
    }
  }, [['See the system', 'Every project is people inside a system — not a deliverable to produce.'], ['Find real friction', 'I look for where friction actually lives, not where it\'s easiest to fix.'], ['Test, then trust', 'Ideas get tested early and kept only if they survive contact with real use.']].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      padding: 20,
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 'var(--radius-md)',
      background: 'rgba(255,255,255,0.02)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-hud)',
      color: 'var(--color-accent-primary)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      marginBottom: 8
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body)',
      fontSize: '0.9375rem',
      color: 'var(--color-text-secondary)',
      lineHeight: 1.5
    }
  }, d))))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-engine-shell jiz-reveal",
    "data-thinking-engine": "inline"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-engine-stage"
  }, /*#__PURE__*/React.createElement("video", {
    ref: videoRef,
    className: "jiz-engine-video",
    autoPlay: !reducedMotion,
    loop: true,
    muted: true,
    playsInline: true,
    preload: "metadata",
    "aria-label": "A cinematic visualization of strategic thinking, systems intelligence, and complexity becoming clarity",
    onLoadedMetadata: () => {
      setVideoReady(true);
      setVideoError(false);
      setVideoPlaybackError(false);
    },
    onLoadedData: () => {
      setVideoReady(true);
      setVideoError(false);
      setVideoPlaybackError(false);
    },
    onCanPlay: () => {
      setVideoReady(true);
      setVideoError(false);
      setVideoPlaybackError(false);
    },
    onPlay: () => setVideoPlaying(true),
    onPause: () => setVideoPlaying(false),
    onError: () => {
      setVideoReady(false);
      setVideoPlaying(false);
      setVideoError(true);
      setVideoPlaybackError(false);
    }
  }, /*#__PURE__*/React.createElement("source", {
    src: THINKING_ENGINE_SRC,
    type: "video/mp4"
  }), "Your browser does not support embedded video."), !videoReady && !videoError && /*#__PURE__*/React.createElement("div", {
    className: "jiz-engine-state",
    role: "status",
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-engine-loader"
  }, /*#__PURE__*/React.createElement("span", null, "Preparing the visualization\u2026"))), videoError && /*#__PURE__*/React.createElement("div", {
    className: "jiz-engine-state",
    role: "alert"
  }, /*#__PURE__*/React.createElement("span", null, "The visualization could not load. Jonathan's operating model is described directly below.")), !videoError && /*#__PURE__*/React.createElement("button", {
    className: "jiz-engine-control",
    type: "button",
    disabled: !videoReady,
    onClick: toggleThinkingEngine,
    "aria-label": videoPlaying ? 'Pause strategic intelligence visualization' : 'Play strategic intelligence visualization',
    "aria-pressed": videoPlaying
  }, videoPlaying ? 'Pause' : 'Play'), videoPlaybackError && !videoError && /*#__PURE__*/React.createElement("p", {
    className: "jiz-engine-playback-note",
    role: "status"
  }, "Playback was blocked by the browser. Select Play to try again."))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-engine-caption jiz-reveal"
  }, /*#__PURE__*/React.createElement("strong", null, "Operating System"), /*#__PURE__*/React.createElement("span", null, "I begin by mapping the relationship between people, information, systems, and behavior. Before I design content, I design understanding\u2014revealing what matters, where friction exists, and what will move people forward. My work brings together learning strategy, cinematic storytelling, digital experience design, and AI-enabled production to create solutions that are clear, useful, and built for adoption."))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-movement"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-movement-heading jiz-reveal"
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-eyebrow"
  }, "THE METHOD"), /*#__PURE__*/React.createElement("h3", {
    className: "jiz-movement-title"
  }, "How thought becomes action."), /*#__PURE__*/React.createElement("p", {
    className: "jiz-movement-copy"
  }, "A connected practice for moving from ambiguity to experiences people can understand and use.")), /*#__PURE__*/React.createElement("div", {
    ref: methodRef,
    className: "jiz-method-wrap jiz-reveal",
    "data-method-autoplay": "enabled",
    "data-active-method-index": activeMethodIndex,
    onMouseEnter: () => setMethodPaused(true),
    onMouseLeave: resumeMethodWhenEligible
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-method-progress",
    "aria-hidden": "true",
    style: {
      width: activeMethodIndex / (methodStages.length - 1) * 92 + '%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "jiz-method-path",
    "aria-label": "Jonathan's five-stage methodology"
  }, methodStages.map((stage, index) => /*#__PURE__*/React.createElement("button", {
    key: stage.id,
    type: "button",
    className: "jiz-method-button",
    "data-method-stage": stage.id,
    "data-method-index": index,
    "data-active": index === activeMethodIndex ? 'true' : 'false',
    "aria-pressed": index === activeMethodIndex,
    onClick: () => selectMethodStage(index),
    onFocus: () => setMethodPaused(true),
    onBlur: resumeMethodWhenEligible
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-method-stage"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jiz-method-node",
    "aria-hidden": "true",
    style: {
      borderColor: index === activeMethodIndex ? 'var(--color-accent-primary)' : index < activeMethodIndex ? 'var(--color-accent-secondary)' : 'rgba(100,225,255,.3)',
      background: index === activeMethodIndex ? 'var(--color-accent-primary)' : index < activeMethodIndex ? 'var(--color-accent-secondary)' : '#0b0d10',
      boxShadow: index === activeMethodIndex ? '0 0 0 7px rgba(198,242,58,.09),0 0 28px rgba(198,242,58,.18)' : '0 0 0 5px rgba(100,225,255,.05)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "jiz-method-label jiz-meta"
  }, stage.label), /*#__PURE__*/React.createElement("h4", null, stage.title), /*#__PURE__*/React.createElement("p", null, stage.copy))))), /*#__PURE__*/React.createElement("span", {
    className: "sr-only",
    role: "status",
    "aria-live": "polite",
    "data-method-status": true
  }, `Active method stage: ${methodStages[activeMethodIndex].title}`)), /*#__PURE__*/React.createElement("div", {
    className: "jiz-capabilities jiz-reveal"
  }, capabilityGroups.map(group => /*#__PURE__*/React.createElement("section", {
    className: "jiz-capability",
    key: group.title
  }, /*#__PURE__*/React.createElement("h4", {
    className: "jiz-meta"
  }, group.title), /*#__PURE__*/React.createElement("p", null, group.subtitle), /*#__PURE__*/React.createElement("ul", null, group.items.map(item => /*#__PURE__*/React.createElement("li", {
    key: item
  }, item))))))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-movement"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-header jiz-reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-movement-heading",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-eyebrow"
  }, "THE JOURNEY"), /*#__PURE__*/React.createElement("h3", {
    className: "jiz-movement-title"
  }, "Built through experience."), /*#__PURE__*/React.createElement("p", {
    className: "jiz-movement-copy"
  }, "That method took shape across four roles \u2014 tested, refined, and proven under real deadlines."), /*#__PURE__*/React.createElement("p", {
    className: "jiz-movement-copy"
  }, "Explore how learning, systems, technology, and storytelling shaped the practice.")), /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-controls",
    "aria-label": "Career journey controls"
  }, /*#__PURE__*/React.createElement("button", {
    className: "jiz-career-control",
    type: "button",
    "aria-label": "Previous career milestone",
    disabled: activeIndex === 0,
    onClick: () => selectCareerEntry(activeIndex - 1)
  }, "\u2190 Previous"), /*#__PURE__*/React.createElement("button", {
    className: "jiz-career-control",
    type: "button",
    "aria-label": "Next career milestone",
    disabled: activeIndex === careerEntries.length - 1,
    onClick: () => selectCareerEntry(activeIndex + 1)
  }, "Next \u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-helper",
    "data-career-progress": true
  }, /*#__PURE__*/React.createElement("span", null, "Use the arrows, swipe, or select a milestone to explore."), /*#__PURE__*/React.createElement("strong", null, activeIndex + 1, " of ", careerEntries.length)), /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-rail-shell"
  }, /*#__PURE__*/React.createElement("div", {
    ref: railRef,
    className: "jiz-career-viewport jiz-reveal",
    tabIndex: 0,
    role: "region",
    "aria-label": "Interactive career journey. Use left and right arrow keys to explore.",
    onKeyDown: handleRailKeyDown
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-track"
  }, careerEntries.map((entry, index) => /*#__PURE__*/React.createElement("button", {
    key: entry.id,
    ref: element => {
      nodeRefs.current[index] = element;
    },
    className: 'jiz-career-node ' + (activeIndex === index ? 'is-active' : ''),
    "data-career-milestone": entry.id,
    "data-career-index": index,
    "data-active": activeIndex === index ? 'true' : 'false',
    "data-type": entry.type,
    type: "button",
    "aria-pressed": activeIndex === index,
    onClick: () => selectCareerEntry(index)
  }, /*#__PURE__*/React.createElement("span", {
    className: "jiz-career-dot",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "jiz-career-stage"
  }, entry.stage), /*#__PURE__*/React.createElement("span", {
    className: "jiz-career-years"
  }, entry.years), /*#__PURE__*/React.createElement("span", {
    className: "jiz-career-org"
  }, entry.organization)))))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-detail jiz-reveal",
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "jiz-eyebrow"
  }, activeCareer.years), /*#__PURE__*/React.createElement("h4", null, activeCareer.title), /*#__PURE__*/React.createElement("p", {
    className: "jiz-career-org-detail"
  }, activeCareer.organization)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "jiz-career-summary"
  }, activeCareer.summary), /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-detail-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "jiz-meta"
  }, "SELECTED IMPACT"), /*#__PURE__*/React.createElement("ul", null, activeCareer.highlights.map(item => /*#__PURE__*/React.createElement("li", {
    key: item
  }, item)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "jiz-meta"
  }, "CAPABILITIES"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--color-text-secondary)',
      font: 'var(--text-caption)'
    }
  }, activeCareer.capabilities.join(' · ')))))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-beliefs-intro jiz-reveal"
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-eyebrow"
  }, "FOUNDATION"), /*#__PURE__*/React.createElement("h3", {
    className: "jiz-movement-title"
  }, "What guides the work."), /*#__PURE__*/React.createElement("p", {
    className: "jiz-movement-copy"
  }, "Core beliefs that shape every project, from strategy through execution.")), /*#__PURE__*/React.createElement("div", {
    className: "jiz-beliefs-wrapper jiz-reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-beliefs-grid",
    "aria-label": "Core beliefs and working principles"
  }, beliefs.map((belief, idx) => /*#__PURE__*/React.createElement("article", {
    className: "jiz-belief",
    "data-belief-index": idx,
    key: belief.title
  }, /*#__PURE__*/React.createElement("h4", null, belief.title), /*#__PURE__*/React.createElement("p", null, belief.copy))), [['Direction, not delegation', 'I set the strategy, narrative, and creative direction first — tools execute inside that frame, never in place of it.'], ['Speed for production, not decisions', 'Faster drafting and iteration buy more time for the judgment calls that actually shape outcomes.'], ['Every output is reviewed and owned', 'Nothing ships without a human pass — accuracy, tone, and instructional integrity are mine to answer for.']].map(([t, d]) => /*#__PURE__*/React.createElement("article", {
    className: "jiz-practice",
    key: t
  }, /*#__PURE__*/React.createElement("h4", null, t), /*#__PURE__*/React.createElement("p", null, d))))))));
}
if (typeof window !== 'undefined') {
  window.AboutV2 = AboutV2;
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-website/About_v2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-website/CaseStudy-GuestCRM.jsx
try { (() => {
function CaseStudyGuestCRM({
  onBack,
  onOpenProject
}) {
  const {
    CaseStudyShell
  } = window.CaseStudyShellExports;
  const config = {
    slug: "guest-crm-pilot",
    projectName: "Guest CRM Pilot",
    eyebrow: "Case Study \u2014 Change Enablement",
    statement: "Enabling a pilot group of hotel teams to adopt a new guest relationship management platform \u2014 not just navigate it, but understand why the workflows were changing.",
    facts: [{
      label: "Organization",
      value: "IHG Hotels & Resorts",
      accent: "cyan"
    }, {
      label: "Role",
      value: "Learning Strategist / Creative Producer",
      accent: "cyan"
    }, {
      label: "Project type",
      value: "Platform pilot enablement",
      accent: "moss"
    }, {
      label: "Focus",
      value: "Change enablement, instructional design, multimedia production",
      accent: "moss"
    }, {
      label: "Status",
      value: "Evidence-supported case study",
      accent: "lime"
    }],
    summaryHeading: "Adoption fails at the reasoning gap, not the interface.",
    summary: ["A change enablement initiative that helped IHG's pilot hotel teams adopt a new Guest CRM platform with confidence, achieved by teaching the operational reasoning behind each workflow rather than the software's interface.", "This wasn't a software rollout so much as a readiness effort: hotel teams needed to understand new expectations and how guest information would now support better service \u2014 not just where to click. Scalable enablement resources helped pilot participants navigate the change while surfacing the feedback that shaped the eventual enterprise release."],
    challengeHeading: "Technology adoption fails when people know where to click but not why it changed.",
    challenge: ["The pilot needed enablement that prepared employees for new workflows, reduced uncertainty during participation, and connected software actions to guest service outcomes \u2014 while also surfacing usability questions before broader rollout and producing communication assets that could be reused."],
    objectives: ["Support successful pilot participation", "Reduce onboarding friction", "Provide consistent enablement across participating hotels", "Create reusable learning resources", "Improve clarity around new Guest CRM workflows", "Support future enterprise deployment through pilot feedback"],
    roleHeading: "Owning the enablement strategy through a moving target.",
    roles: [{
      area: "Strategic ownership",
      detail: "Owned the decision to organize enablement around hotel operational workflows rather than software menus, prioritizing operational reasoning over interface familiarity."
    }, {
      area: "Production accountability",
      detail: "Accountable for storyboarding, recording, and editing tutorial video, motion graphics, and voiceover integration across the full deliverable set."
    }, {
      area: "System design",
      detail: "Designed the Reference Guide, Access Checklist, Training Toolkit, and Pilot Diary as one modular, reusable system rather than four separate documents."
    }, {
      area: "Stakeholder partnership",
      detail: "Partnered with product, operations, learning, and creative stakeholders through multiple review cycles covering workflow accuracy, terminology, and translation readiness."
    }, {
      area: "Accessibility & localization",
      detail: "Built accessibility review and localization support into the production process from the outset."
    }],
    processHeading: "A structured pilot production cycle, refined across review rounds.",
    process: [{
      stage: "Stakeholder discovery",
      detail: "Identified how the new platform changed day-to-day operational tasks and guest interactions."
    }, {
      stage: "Workflow & learning architecture",
      detail: "Mapped new workflows and structured the learning approach around them rather than the software's menu structure."
    }, {
      stage: "Storyboarding & production",
      detail: "Built reference guides, storyboards, screen recordings, motion graphics, and voiceover into the toolkit."
    }, {
      stage: "Accessibility & stakeholder revision",
      detail: "Ran accessibility review alongside multiple stakeholder revision cycles refining terminology, workflow accuracy, and instructional sequencing."
    }, {
      stage: "Pilot delivery",
      detail: "Delivered the final enablement package \u2014 QA'd and translation-ready \u2014 to the pilot cohort."
    }],
    decisionsHeading: "Design decisions built for a platform that was still changing.",
    decisions: [{
      question: "Why organize around workflows instead of software menus?",
      rationale: "Operational understanding was prioritized ahead of interface familiarity \u2014 the goal was confidence in the *why*, not memorization of the *where*. That confidence is what determines whether a pilot succeeds long before adoption gets measured."
    }, {
      question: "Why annotated demonstrations over full screen recordings?",
      rationale: "Progressive disclosure and annotated focus reduced cognitive load during a pilot where the interface itself was still evolving. Protecting attention protected the pilot's credibility with a workforce already absorbing a system change."
    }, {
      question: "Why separate quick-reference from long-form instruction?",
      rationale: "Pilot participants needed different resources at different moments \u2014 a checklist mid-shift, a deeper guide during onboarding. Matching resource to moment is what made the pilot self-sustaining without constant facilitator support."
    }, {
      question: "Why design for revision from the start?",
      rationale: "Because the pilot software was changing, every asset was built to be updated rather than treated as a finished, static deliverable. That decision protected the enablement investment from going stale before the pilot even concluded."
    }],
    deliverablesHeading: "A modular enablement package built to evolve with the pilot.",
    deliverables: ["Reference Guide", "Access Checklist", "Training Toolkit", "Pilot Diary", "Orientation Deck", "Office Hours presentation", "Tutorial videos", "Storyboards", "Screen recordings", "Motion graphics"],
    outcomesHeading: "What this work demonstrates.",
    outcomes: [{
      label: "Approved enterprise deliverables",
      detail: "A standardized pilot enablement package approved for use across all participating hotels."
    }, {
      label: "Documented iteration",
      detail: "A feedback-to-impact trail showing what pilot participants reported and how the toolkit changed in response."
    }, {
      label: "Reusable learning assets",
      detail: "Modular materials designed to be updated rather than remade as the platform evolved."
    }, {
      label: "Cross-functional collaboration",
      detail: "Coordinated input from product, operations, learning, and creative stakeholders across review cycles."
    }],
    outcomesNote: "Quantitative business outcomes were not available for publication.",
    reflectionHeading: "What a pilot program actually demands of enablement design.",
    reflection: ["Pilot programs require adaptable learning assets \u2014 the platform was still changing while the materials were being built, and design decisions had to account for that instability rather than wait for a stable target.", "Change enablement extends well beyond software instruction. Operational context, not interface familiarity, is what builds learner confidence, and stakeholder collaboration across product, operations, and learning teams is what keeps instructional content accurate as workflows shift.", "Modular assets simplified every later revision \u2014 a lesson that shaped how enablement materials were structured on subsequent projects."],
    ifAgain: ["Instrument the toolkit itself with simple usage tracking, so which resource pilot participants actually reached for becomes observable, not just reported anecdotally.", "Run a brief structured observation session on the hotel floor before finalizing workflows, to validate the operational sequencing against real shift conditions.", "Formalize the pilot-to-enterprise handoff as its own deliverable, so the scaling path is explicit rather than implied by the toolkit's modularity."],
    galleryHeading: "Full enablement package — cover, pilot storyboard, workflow, feedback, and delivered kit.",
    snapshot: [{
      label: "Organization",
      value: "IHG Hotels & Resorts"
    }, {
      label: "Role",
      value: "Learning Strategist / Creative Producer"
    }, {
      label: "Audience",
      value: "Pilot cohort of hotel front-desk and operations teams"
    }, {
      label: "Partners",
      value: "Product, operations, learning, and creative stakeholders"
    }, {
      label: "Primary responsibility",
      value: "Enablement strategy and production for the full pilot toolkit"
    }, {
      label: "Deliverables",
      value: "Reference Guide, Access Checklist, Training Toolkit, Pilot Diary, tutorial video"
    }],
    gallery: [{
      src: "./assets/imagery/guestcrm-01-cover.png",
      caption: "01 Case Study Cover"
    }, {
      src: "./assets/imagery/guestcrm-02-storyboard.png",
      caption: "02 Six-Scene Pilot Storyboard"
    }, {
      src: "./assets/imagery/guestcrm-03-workflow.png",
      caption: "03 Strategy, Learning Architecture & Production Workflow"
    }, {
      src: "./assets/imagery/guestcrm-04-feedback.png",
      caption: "04 Feedback-to-Impact: What We Heard, Changed & Iterated"
    }, {
      src: "./assets/imagery/guestcrm-05-kit.png",
      caption: "05 Final Delivered Pilot Enablement Kit"
    }],
    related: [{
      direction: "Next project",
      title: "Workday Learn Launch",
      route: "Workday Learn Launch"
    }, {
      direction: "Previous project",
      title: "HotelKey New Hire Onboarding",
      route: "HotelKey New Hire Onboarding"
    }]
  };
  return /*#__PURE__*/React.createElement(CaseStudyShell, {
    config: config,
    onBack: onBack,
    onOpenProject: onOpenProject
  });
}
window.CaseStudyGuestCRMExports = {
  CaseStudyGuestCRM
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-website/CaseStudy-GuestCRM.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-website/CaseStudy-HotelKey.jsx
try { (() => {
function CaseStudyHotelKey({
  onBack,
  onOpenProject
}) {
  const {
    CaseStudyShell
  } = window.CaseStudyShellExports;
  const config = {
    slug: "hotelkey-onboarding",
    projectName: "HotelKey New Hire Onboarding",
    eyebrow: "Case Study \u2014 Enterprise Onboarding",
    statement: "A structured onboarding experience that introduces new hotel hires to HotelKey's operating logic \u2014 not just its screens \u2014 reducing cognitive load while explaining why the software works the way it does.",
    facts: [{
      label: "Organization",
      value: "IHG Hotels & Resorts",
      accent: "cyan"
    }, {
      label: "Role",
      value: "Learning Experience Designer / Producer",
      accent: "cyan"
    }, {
      label: "Project type",
      value: "New hire onboarding, systems training",
      accent: "moss"
    }, {
      label: "Focus",
      value: "Instructional design, motion design, multimedia production",
      accent: "moss"
    }, {
      label: "Status",
      value: "Evidence-supported case study",
      accent: "lime"
    }],
    summaryHeading: "Onboarding that explains the system, not just the screens.",
    summary: ["A systems onboarding experience that helped new IHG hotel hires build real competence in HotelKey's property management platform, achieved by teaching the operating logic behind the system before its individual screens.", "Rather than relying on isolated software demonstrations, the project introduced that logic through a structured experience combining instructional design, visual communication, and multimedia production \u2014 reducing cognitive load for learners meeting an unfamiliar system for the first time."],
    challengeHeading: "Following the steps isn't the same as understanding why they matter.",
    challenge: ["Traditional software onboarding often emphasizes interface walkthroughs without explaining the operational purpose behind individual tasks \u2014 learners can follow prescribed steps but struggle to understand why those steps matter during real hotel operations. The onboarding needed to reduce cognitive overload, provide meaningful operational context, introduce the platform progressively, stay engaging, and support consistent onboarding across hotel teams."],
    objectives: ["Improve first-time learner confidence", "Explain HotelKey concepts before individual tasks", "Create reusable onboarding assets", "Support consistent learning experiences across teams", "Simplify complex operational workflows through visual communication"],
    roleHeading: "Owning the instructional logic while executing full production.",
    roles: [{
      area: "Strategic ownership",
      detail: "Owned the instructional strategy prioritizing operational understanding before procedural memorization \u2014 the sequencing decision the whole onboarding was built around."
    }, {
      area: "Script & storyboard",
      detail: "Developed scripts and storyboards structuring the learning path segment by segment."
    }, {
      area: "Production accountability",
      detail: "Accountable for screen capture planning, motion graphics production, and video editing across the full deliverable set."
    }, {
      area: "Visual system",
      detail: "Created visual assets designed to complement narration rather than duplicate it, reinforcing key concepts through one consistent visual language."
    }, {
      area: "Stakeholder partnership",
      detail: "Partnered with hotel operations and learning stakeholders on instructional clarity, terminology accuracy, and software behavior across multiple review cycles."
    }],
    processHeading: "A production cycle built around comprehension, not procedure.",
    process: [{
      stage: "Alignment & content planning",
      detail: "Established stakeholder alignment on scope and structured the content plan around operational context."
    }, {
      stage: "Script & storyboard development",
      detail: "Wrote instructional scripts and storyboards, sequencing concepts before individual software tasks."
    }, {
      stage: "Production",
      detail: "Executed screen capture, motion graphics, and video editing to bring the storyboard to life."
    }, {
      stage: "Review & revision",
      detail: "Ran internal review and stakeholder revision cycles refining pacing, terminology, interface accuracy, and sequencing."
    }, {
      stage: "Final delivery",
      detail: "Delivered the completed onboarding package after quality assurance."
    }],
    decisionsHeading: "Understanding before procedure, by design.",
    decisions: [{
      question: "Why introduce operational context before interface demonstrations?",
      rationale: "Comprehension was prioritized over memorization \u2014 learners needed to know why a workflow existed before being shown how to execute it. That sequencing is what let new hires retain the material once training ended and real shifts began."
    }, {
      question: "Why reduce visual complexity rather than add production polish?",
      rationale: "Multimedia was used to reduce cognitive load, not increase it \u2014 every visual choice served clarity first. Protecting attention is what made the training worth an employee's limited first-week focus."
    }, {
      question: "Why design visuals to complement narration rather than duplicate it?",
      rationale: "Redundant visual-audio pairing wastes attention; complementary pairing reinforces the concept from two angles instead of repeating one. That discipline kept a media-heavy asset from working against the comprehension it was meant to build."
    }, {
      question: "Why organize content into segments with reinforced repetition?",
      rationale: "Logical segmentation and deliberate repetition of key concepts supported retention for a new-hire audience learning an unfamiliar system. Reinforcement at this level is what closed the gap between watching a demonstration and working independently."
    }],
    deliverablesHeading: "A complete onboarding production package.",
    deliverables: ["Onboarding video", "Storyboard", "Production assets", "Visual graphics", "Motion graphics", "Instructional scripts", "Screen recordings", "Supporting onboarding materials"],
    outcomesHeading: "What this work demonstrates.",
    outcomes: [{
      label: "Approved deliverables",
      detail: "A completed onboarding package approved for use across hotel new-hire training."
    }, {
      label: "Documented iteration",
      detail: "Stakeholder-iteration evidence showing terminology, pacing, and interface accuracy refined across review rounds."
    }, {
      label: "Reusable learning assets",
      detail: "Enterprise learning materials designed to support future onboarding initiatives beyond this rollout."
    }, {
      label: "Repeatable production framework",
      detail: "A production and sequencing framework other onboarding projects could inherit directly."
    }],
    outcomesNote: "Quantitative business outcomes were not available for publication.",
    reflectionHeading: "What onboarding design demands when the system is complex.",
    reflection: ["Operational understanding should precede procedural instruction \u2014 a lesson that shaped how every subsequent onboarding asset was sequenced.", "Multimedia should reduce complexity rather than increase it. Every added visual element has to earn its place by clarifying something narration alone couldn't, or it's better left out.", "Stakeholder collaboration strengthens instructional accuracy, and thoughtful sequencing improves learner comprehension more than production polish ever could on its own."],
    ifAgain: ["Observe a small group of new hires moving through the onboarding live, to see where comprehension actually breaks rather than relying on stakeholder review alone.", "Add a brief knowledge check between segments to validate that operational context landed before learners move to procedure.", "Design the visual language as a documented template from the start, so it scales cleanly to the next onboarding initiative without being rebuilt."],
    galleryHeading: "Full onboarding package — hero, storyboard, and process evidence.",
    snapshot: [{
      label: "Organization",
      value: "IHG Hotels & Resorts"
    }, {
      label: "Role",
      value: "Learning Experience Designer / Producer"
    }, {
      label: "Audience",
      value: "Newly hired hotel employees"
    }, {
      label: "Partners",
      value: "Hotel operations and learning stakeholders"
    }, {
      label: "Primary responsibility",
      value: "Instructional strategy and production for the full onboarding experience"
    }, {
      label: "Deliverables",
      value: "Onboarding video, storyboard, motion graphics, supporting materials"
    }],
    gallery: [{
      src: "./assets/imagery/hotelkey-01-hero.png",
      caption: "01 Case Study Hero"
    }, {
      src: "./assets/imagery/hotelkey-04-storyboard.png",
      caption: "02 Six-Scene Onboarding Storyboard"
    }, {
      src: "./assets/imagery/hotelkey-03-process.png",
      caption: "03 Production Workflow: Editing, Scene Direction & Build"
    }, {
      src: "./assets/imagery/hotelkey-02-iteration.png",
      caption: "04 Stakeholder-Iteration Evidence"
    }],
    related: [{
      direction: "Next project",
      title: "Guest CRM Pilot",
      route: "Guest CRM Pilot"
    }, {
      direction: "Previous project",
      title: "Operation: Legacy Unlocked",
      route: "Operation: Legacy Unlocked"
    }]
  };
  return /*#__PURE__*/React.createElement(CaseStudyShell, {
    config: config,
    onBack: onBack,
    onOpenProject: onOpenProject
  });
}
window.CaseStudyHotelKeyExports = {
  CaseStudyHotelKey
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-website/CaseStudy-HotelKey.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-website/CaseStudy-Legacy.jsx
try { (() => {
function CaseStudyLegacy({
  onBack,
  onOpenProject
}) {
  const {
    CaseStudyShell
  } = window.CaseStudyShellExports;
  const config = {
    slug: "operation-legacy-unlocked",
    projectName: "Operation: Legacy Unlocked",
    eyebrow: "Case Study \u2014 Featured Project",
    statement: "An immersive leadership learning experience for Cox Enterprises that casts employees as Cox Intelligence Agents, transforming organizational history into a mission-driven digital experience.",
    facts: [{
      label: "Organization",
      value: "Cox Enterprises",
      accent: "cyan"
    }, {
      label: "Role",
      value: "Lead Learning Experience Designer & Creative Strategist",
      accent: "cyan"
    }, {
      label: "Format",
      value: "Mission-based interactive simulation",
      accent: "moss"
    }, {
      label: "Audience",
      value: "Employees and senior leaders across the organization",
      accent: "moss"
    }, {
      label: "Tools",
      value: "Articulate Storyline 360, ChatGPT, ElevenLabs, Descript, Dream Machine, Ideogram",
      accent: "lime"
    }],
    summaryHeading: "Turning organizational history into a mission, not a memo.",
    summary: ["Operation: Legacy Unlocked is an immersive leadership learning experience created for Cox Enterprises that transforms organizational history into a mission-driven digital experience. Rather than presenting corporate milestones through traditional e-learning, the experience places learners in the role of a Cox Intelligence Agent, navigating interactive missions that reveal how the organization's history, innovation, and leadership principles continue to shape decisions today.", "Built in Articulate Storyline 360, the experience combines narrative design, scenario-based learning, custom interaction design, AI-assisted production, and enterprise deployment practices to create a learning experience that feels engaging without sacrificing instructional rigor."],
    challengeHeading: "Organizational history risked becoming passive information transfer.",
    challenge: ["Cox Enterprises needed an enterprise-ready learning experience that would introduce employees and senior leaders to the company's history, culture, and leadership philosophy while maintaining engagement across a diverse workforce. Traditional presentation-driven training risked becoming passive information transfer rather than meaningful organizational learning."],
    opportunityHeading: "Investigation creates ownership that reading never does.",
    objectives: ["Create emotional connection to the organization's history", "Reinforce leadership identity rather than recite milestones", "Invite learners to investigate, solve, and interpret \u2014 not memorize", "Build a mission structure that scales across a diverse, enterprise-wide workforce", "Ground every interaction in established adult-learning principles"],
    roleHeading: "Owning strategy, narrative, and production end to end.",
    roles: [{
      area: "Learning strategy & architecture",
      detail: "Led the end-to-end learning strategy and experience architecture \u2014 translating organizational history into a mission-driven leadership experience grounded in adult learning science."
    }, {
      area: "Narrative & instructional design",
      detail: "Directed narrative design, storyboarding, and UX/UI, applying active learning, scenario-based challenge, progressive complexity, and immediate feedback throughout the Storyline 360 build."
    }, {
      area: "AI-assisted production",
      detail: "Directed AI-assisted creative production \u2014 scripts, character voice, and cinematic assets \u2014 while keeping all instructional strategy and creative decisions human-led."
    }, {
      area: "Delivery & deployment readiness",
      detail: "Owned quality assurance, SCORM 2004 packaging, and deployment readiness, partnering with stakeholders to keep the experience aligned with organizational goals throughout."
    }],
    processKicker: "Production workflow",
    processHeading: "Five stages, from stakeholder discovery to deployment-ready module.",
    process: [{
      stage: "Discover",
      detail: "Stakeholder discovery, learning objective definition, organizational history research, and leadership philosophy alignment."
    }, {
      stage: "Architect",
      detail: "Narrative architecture, mission structure design, character development for Nova and Mateo, and the experience blueprint."
    }, {
      stage: "Design",
      detail: "Storyboarding, UX/UI exploration, interaction design, and the futuristic command-center visual language."
    }, {
      stage: "Build",
      detail: "Storyline 360 development, audio production, AI-assisted asset generation, and accessibility review."
    }, {
      stage: "Deploy",
      detail: "Quality assurance, SCORM validation, deployment preparation, and stakeholder review iterations."
    }],
    decisionsHeading: "The choices that made organizational legacy impossible to tune out.",
    decisions: [{
      question: "Narrative before instruction",
      rationale: "Rather than organizing content chronologically, the experience uses a mission-driven narrative that encourages curiosity and sustained engagement \u2014 curiosity carried content that chronological history never could."
    }, {
      question: "Interaction with purpose",
      rationale: "Every interaction \u2014 drag-and-drop activities, branching scenarios, decoding challenges, decision points \u2014 was selected because it reinforced a learning objective, not simply to increase interactivity."
    }, {
      question: "Immersive visual language",
      rationale: "The interface draws inspiration from futuristic intelligence operations, reinforcing the learner's role within the story while supporting wayfinding and cognitive clarity."
    }, {
      question: "Character-guided learning",
      rationale: "Nova and Mateo act as consistent learning companions throughout the experience, reducing cognitive friction while creating a recognizable narrative voice."
    }, {
      question: "Enterprise scalability",
      rationale: "Built for SCORM 2004 compliance, modular updates, and enterprise LMS deployment, protecting the initial investment as the organization's learning needs evolve."
    }],
    aiToolsHeading: "Where AI accelerated production \u2014 and where it didn't.",
    aiToolsIntro: "Artificial intelligence accelerated production while all instructional strategy, creative direction, and learning decisions remained human-led.",
    aiTools: [{
      tool: "ChatGPT",
      detail: "Co-developed instructional scripts, mission dialogue, facilitator prompts, and character conversations for Nova and Mateo while maintaining alignment with leadership competencies and organizational messaging."
    }, {
      tool: "ElevenLabs",
      detail: "Generated natural-sounding character voiceovers for Nova and Mateo, allowing rapid iteration of narration while preserving a consistent tone and high audio quality across the experience."
    }, {
      tool: "Descript",
      detail: "Handled narration editing, timing adjustments, transcript refinement, and synchronization between voice, animation, and on-screen interactions."
    }, {
      tool: "Dream Machine (Luma AI)",
      detail: "Produced cinematic mission briefings, environmental animations, and visual transitions that enhanced immersion without increasing production complexity."
    }, {
      tool: "Ideogram",
      detail: "Generated concept art and branded interface assets aligned with Cox's visual identity and the futuristic command-center aesthetic."
    }],
    deliverablesHeading: "A complete, deployment-ready leadership experience.",
    deliverables: ["Complete Storyline 360 module", "Learning architecture", "Storyboards", "UX/UI design system", "Narrative documentation", "Character scripts", "SCORM 2004 deployment package"],
    outcomesHeading: "What this work demonstrates.",
    outcomes: [{
      label: "Complete Storyline 360 module",
      detail: "Five interactive leadership missions, fully built and deployment-ready."
    }, {
      label: "Learning architecture & storyboards",
      detail: "Documented mission structure, narrative framework, and interaction design."
    }, {
      label: "UX/UI design system",
      detail: "A futuristic command-center visual language supporting wayfinding and clarity."
    }, {
      label: "Character scripts & narrative documentation",
      detail: "Nova and Mateo's dialogue and mission scripts across all five missions."
    }, {
      label: "AI-assisted production workflow",
      detail: "Documented use of ChatGPT, ElevenLabs, Descript, Dream Machine, and Ideogram \u2014 human-directed throughout."
    }, {
      label: "SCORM deployment package",
      detail: "SCORM 2004-compliant, modular, and ready for enterprise LMS deployment."
    }, {
      label: "Stakeholder review iterations",
      detail: "Documented rounds of organizational stakeholder review and revision."
    }],
    outcomesNote: "Quantitative business outcomes were not available for publication.",
    reflectionHeading: "What enterprise learning forgets about adults.",
    reflection: ["Operation: Legacy Unlocked reinforced an important lesson about enterprise learning. Adults rarely remember information because it was presented clearly \u2014 they remember experiences that require them to think, decide, and participate. By combining instructional design, narrative architecture, immersive interaction design, and responsible AI-assisted production, the project demonstrates how organizational learning can become both strategically meaningful and genuinely engaging."],
    ifAgain: ["Introduce adaptive mission pathways based on learner decisions, so the experience responds to how each learner chooses to engage.", "Incorporate AI-assisted coaching that delivers personalized reflection after each mission, deepening retention beyond the mission itself.", "Expand analytics to better understand learner decision patterns, engagement, and knowledge transfer over time."],
    galleryHeading: "Full asset package \u2014 cover, narrative, storyboard, workflow, iteration, and final mockups.",
    snapshot: [{
      label: "Organization",
      value: "Cox Enterprises"
    }, {
      label: "Role",
      value: "Lead Learning Experience Designer & Creative Strategist"
    }, {
      label: "Audience",
      value: "Employees and senior leaders across the organization"
    }, {
      label: "Partners",
      value: "Organizational leadership and enterprise learning stakeholders"
    }, {
      label: "Primary responsibility",
      value: "End-to-end learning strategy, narrative design, and AI-assisted production for the full experience"
    }, {
      label: "Deliverables",
      value: "Storyline 360 module, learning architecture, character scripts, SCORM deployment package"
    }],
    gallery: [{
      src: "./assets/imagery/olu-01-cover.png",
      caption: "01 Cover Artwork"
    }, {
      src: "./assets/imagery/olu-02-narrative.png",
      caption: "02 Final Narrative & Case Study Story"
    }, {
      src: "./assets/imagery/olu-03-storyboard.png",
      caption: "03 Six-Scene Storyboard & Learning Architecture"
    }, {
      src: "./assets/imagery/olu-04-workflow.png",
      caption: "04 Process Imagery & Build Workflow"
    }, {
      src: "./assets/imagery/olu-05-iteration.png",
      caption: "05 Stakeholder-Iteration Evidence"
    }, {
      src: "./assets/imagery/olu-06-mockups.png",
      caption: "06 Final Learning-Experience Mockups"
    }],
    videosHeading: "Prototype evolution \u2014 from orientation to final build.",
    videos: [{
      src: "https://elearningportfolio-jz.s3.us-east-1.amazonaws.com/Videos/Intro+.mov",
      caption: "Introduction \u2014 mission orientation walkthrough"
    }, {
      src: "https://elearningportfolio-jz.s3.us-east-1.amazonaws.com/Videos/Sample+of+microLession.mov",
      caption: "Micro-lesson sample \u2014 chunked learning moments"
    }, {
      src: "https://elearningportfolio-jz.s3.us-east-1.amazonaws.com/Videos/OLU-Articulate+Demo.mp4",
      caption: "Articulate Storyline demo \u2014 interaction model and branching logic"
    }],
    related: [{
      direction: "Next project",
      title: "HotelKey New Hire Onboarding",
      route: "HotelKey New Hire Onboarding"
    }]
  };
  return /*#__PURE__*/React.createElement(CaseStudyShell, {
    config: config,
    onBack: onBack,
    onOpenProject: onOpenProject
  });
}
window.CaseStudyLegacyExports = {
  CaseStudyLegacy
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-website/CaseStudy-Legacy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-website/CaseStudy-Workday.jsx
try { (() => {
function CaseStudyWorkday({
  onBack,
  onOpenProject
}) {
  const {
    CaseStudyShell
  } = window.CaseStudyShellExports;
  const config = {
    slug: "workday-learn",
    projectName: "Workday Learn Launch",
    eyebrow: "Case Study \u2014 Enterprise Launch",
    statement: "An enterprise launch campaign that introduced Workday Learn as a professional growth ecosystem \u2014 leading with organizational purpose before platform features.",
    facts: [{
      label: "Organization",
      value: "Cox Enterprises",
      accent: "cyan"
    }, {
      label: "Role",
      value: "Creative Lead / Learning Experience Designer",
      accent: "cyan"
    }, {
      label: "Project type",
      value: "Enterprise platform launch",
      accent: "moss"
    }, {
      label: "Focus",
      value: "Creative strategy, launch communications, instructional design",
      accent: "moss"
    }, {
      label: "Status",
      value: "Evidence-supported case study",
      accent: "lime"
    }],
    summaryHeading: "Positioning a platform as a growth ecosystem, not a mandate.",
    summary: ["An enterprise platform launch that helped Cox Enterprises employees see Workday Learn as an investment in their own growth, achieved by leading every piece of communication with organizational purpose before platform mechanics.", "Rather than focusing on software features, the initiative positioned Workday Learn as a modern learning ecosystem aligned with professional growth and organizational capability \u2014 introduced through one cohesive story told across launch communications, promotional media, and supporting learning experiences."],
    challengeHeading: "Adoption stalls when a platform reads as another required system.",
    challenge: ["Enterprise learning platforms often struggle with adoption when employees perceive them as one more required system rather than a valuable professional resource. The launch needed to communicate organizational purpose, generate interest before first use, reduce uncertainty around the new platform, maintain executive communication standards, and support adoption over the long term \u2014 not just at launch."],
    objectives: ["Introduce Workday Learn to employees", "Communicate the strategic purpose of the platform", "Create a cohesive launch experience", "Produce reusable communication assets", "Support long-term learning adoption through engaging storytelling"],
    roleHeading: "Owning creative direction while operating inside enterprise review structures.",
    roles: [{
      area: "Creative ownership",
      detail: "Owned the launch's creative direction end to end \u2014 messaging strategy, visual system, and the decision to lead with organizational purpose rather than platform mechanics."
    }, {
      area: "Instructional ownership",
      detail: "Directed the Rise 360 learning modules as an extension of the same creative story, not a separate deliverable track."
    }, {
      area: "Production accountability",
      detail: "Accountable for storyboarding, motion graphics, and video editing through to final delivery of the sizzle reel and supporting asset package."
    }, {
      area: "Stakeholder partnership",
      detail: "Partnered with learning leaders and enterprise communication stakeholders across multiple review cycles, incorporating feedback while protecting the narrative through-line."
    }],
    processHeading: "A coordinated launch built across multiple communication channels.",
    process: [{
      stage: "Discovery & strategy alignment",
      detail: "Aligned launch strategy with stakeholder discovery and organizational messaging goals."
    }, {
      stage: "Messaging & scripting",
      detail: "Developed messaging and scripts, then built storyboards translating strategy into narrative."
    }, {
      stage: "Visual & motion production",
      detail: "Produced visual design, motion graphics, and video editing for the launch sizzle reel and supporting assets, using AI-assisted drafting and voice tools to accelerate production while every creative and instructional decision stayed human-directed."
    }, {
      stage: "Learning module development",
      detail: "Built Rise 360 modules and supporting communication graphics alongside the promotional package."
    }, {
      stage: "Review & final delivery",
      detail: "Ran stakeholder review and revision cycles refining pacing, messaging, branding, and narration before final delivery."
    }],
    decisionsHeading: "Purpose before functionality, at every stage.",
    decisions: [{
      question: "Why lead with organizational vision instead of platform features?",
      rationale: "The goal was curiosity and confidence, not compliance \u2014 employees needed to understand why the organization was investing before being shown how to log in. That ordering is what protects adoption long after launch week ends."
    }, {
      question: "Why use narrative storytelling for an enterprise system launch?",
      rationale: "Increased engagement over a straightforward feature announcement, connecting the platform to employee growth rather than software navigation alone. A story is what employees repeat to each other; a feature list is not."
    }, {
      question: "Why design modular assets across multiple channels?",
      rationale: "Enabled reuse across communication formats and supported a consistent visual identity throughout the launch, not just in a single hero asset. Modularity is what let the same investment pay off across every downstream communication."
    }, {
      question: "Why balance executive tone with approachable learner communication?",
      rationale: "The launch had to satisfy executive communication standards while still reading as accessible and inviting to the broader employee audience. Getting that balance right is what let the platform read as credible to leadership and welcoming to the people actually adopting it."
    }],
    deliverablesHeading: "A complete enterprise launch package.",
    deliverables: ["Enterprise launch sizzle reel", "Storyboards", "Scripts", "Motion graphics", "Promotional visual assets", "Rise 360 learning modules", "Supporting communication graphics"],
    outcomesHeading: "What this work demonstrates.",
    outcomes: [{
      label: "Approved deliverables",
      detail: "A unified communication package spanning video, learning modules, and promotional assets, approved through enterprise review."
    }, {
      label: "Reusable creative system",
      detail: "Enterprise creative assets designed for reuse beyond the initial launch moment."
    }, {
      label: "Documented review cycles",
      detail: "Messaging and production refined across multiple stakeholder revision rounds."
    }, {
      label: "Cross-functional collaboration",
      detail: "Coordinated delivery across learning, communications, and enterprise stakeholders."
    }],
    outcomesNote: "Quantitative business outcomes were not available for publication.",
    reflectionHeading: "What an enterprise launch demands of creative and instructional work together.",
    reflection: ["Enterprise launches require coordinated storytelling across multiple formats \u2014 no single asset carries the message alone.", "Organizational change begins with clear communication, and strong visual narratives improve learner engagement in ways a straightforward announcement rarely does.", "Executive messaging and instructional design should reinforce one another rather than operate as separate tracks, and modular creative assets are what make that reinforcement sustainable beyond a single launch moment."],
    ifAgain: ["Build in a lightweight pulse survey at 30 and 90 days to observe how the purpose-first message actually lands once employees are using the platform, not just watching the launch.", "Pilot the sizzle reel with a small employee sample before full release to validate tone and pacing ahead of enterprise-wide distribution.", "Design the modular asset library with a formal reuse plan from day one, so future launches inherit the system deliberately instead of by request."],
    galleryHeading: "Full launch package \u2014 cover, narrative, workflow, and deliverables.",
    snapshot: [{
      label: "Organization",
      value: "Cox Enterprises"
    }, {
      label: "Role",
      value: "Creative Lead / Learning Experience Designer"
    }, {
      label: "Audience",
      value: "Enterprise-wide employee base"
    }, {
      label: "Partners",
      value: "Learning leaders, enterprise communications, platform stakeholders"
    }, {
      label: "Primary responsibility",
      value: "Creative direction and instructional production for the full launch package"
    }, {
      label: "Deliverables",
      value: "Sizzle reel, Rise 360 modules, promotional assets"
    }],
    gallery: [{
      src: "./assets/imagery/workday-01-cover.png",
      caption: "01 Cover Artwork",
      alt: "Workday Learn Launch cover artwork"
    }, {
      src: "./assets/imagery/workday-02-overview.png",
      caption: "02 Project Overview and Final Narrative",
      alt: "Project overview and final narrative slide"
    }, {
      src: "./assets/imagery/workday-03-sizzle-reel.png",
      caption: "03 Production Flow: Sizzle Reel",
      alt: "Sizzle reel production flow diagram"
    }, {
      src: "./assets/imagery/workday-04-rise360.png",
      caption: "04 Rise 360 Learning Modules",
      alt: "Rise 360 learning modules overview"
    }, {
      src: "./assets/imagery/workday-05-workflow.png",
      caption: "05 Process, Workflow & Production Stack",
      alt: "Process workflow and production stack diagram"
    }, {
      src: "./assets/imagery/workday-06-deliverables.png",
      caption: "06 Final Deliverables & Learning-Experience Mockups",
      alt: "Final deliverables and learning experience mockups"
    }],
    videosHeading: "Launch production: sizzle reel and editing process.",
    videos: [{
      src: "https://elearningportfolio-jz.s3.us-east-1.amazonaws.com/Videos/Learn%40Cox+V5.1.mp4",
      caption: "Learn@Cox Launch Sizzle Reel (V5.1)"
    }, {
      src: "https://elearningportfolio-jz.s3.us-east-1.amazonaws.com/Videos/AF+Learn%40Cox+Editing.mp4",
      caption: "After Effects Editing Process"
    }],
    related: [{
      direction: "Back to start",
      title: "Operation: Legacy Unlocked",
      route: "Operation: Legacy Unlocked"
    }, {
      direction: "Previous project",
      title: "Guest CRM Pilot",
      route: "Guest CRM Pilot"
    }]
  };
  return /*#__PURE__*/React.createElement(CaseStudyShell, {
    config: config,
    onBack: onBack,
    onOpenProject: onOpenProject
  });
}
window.CaseStudyWorkdayExports = {
  CaseStudyWorkday
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-website/CaseStudy-Workday.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-website/CaseStudyShell.jsx
try { (() => {
// Shared case-study shell — RC4 master architecture.
// Renders only the sections a project supplies; missing sections surface an
// honest "in development" notice rather than invented content.
function PackageCarousel({
  items
}) {
  const [index, setIndex] = React.useState(0);
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [dir, setDir] = React.useState('next');
  const [playing, setPlaying] = React.useState(false);
  const videoRef = React.useRef(null);
  const show = (i, d) => {
    setDir(d);
    setPlaying(false);
    setIndex((i % items.length + items.length) % items.length);
  };
  const showPrev = () => show(index - 1, 'previous');
  const showNext = () => show(index + 1, 'next');
  const onKeyDown = e => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      showPrev();
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      showNext();
    }
  };
  const item = items[index];
  const progressPercent = (index + 1) / items.length * 100;
  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play();else v.pause();
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    tabIndex: 0,
    role: "region",
    "aria-roledescription": "carousel",
    "aria-label": "Portfolio package assets",
    onKeyDown: onKeyDown,
    style: {
      position: 'relative',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: '#06090b',
      outline: 'none'
    },
    onContextMenu: e => {
      if (item.type === 'video') e.preventDefault();
    }
  }, /*#__PURE__*/React.createElement("figure", {
    key: item.src,
    style: {
      margin: 0,
      animation: reduced ? 'none' : `jiz-package-enter-${dir} 420ms ease`
    }
  }, item.type === 'video' ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '16/9'
    }
  }, /*#__PURE__*/React.createElement("video", {
    ref: videoRef,
    src: item.src,
    preload: "metadata",
    playsInline: true,
    controlsList: "nodownload noremoteplayback noplaybackrate",
    disablePictureInPicture: true,
    onPlay: () => setPlaying(true),
    onPause: () => setPlaying(false),
    onContextMenu: e => e.preventDefault(),
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      background: '#000'
    }
  }), !playing && /*#__PURE__*/React.createElement("button", {
    onClick: togglePlay,
    "aria-label": `Play ${item.caption || 'video'}`,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(180deg, rgba(6,9,11,0.15), rgba(6,9,11,0.55))',
      border: 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(10,14,17,0.72)',
      border: '1px solid rgba(255,255,255,0.2)',
      backdropFilter: 'blur(6px)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5v14l11-7z"
  }))))) : /*#__PURE__*/React.createElement("img", {
    src: item.src,
    alt: item.caption || '',
    loading: "lazy",
    style: {
      display: 'block',
      width: '100%',
      height: 'auto'
    }
  }), item.caption ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      padding: '10px 14px',
      color: 'var(--color-text-muted)',
      font: 'var(--text-caption)',
      fontSize: '0.8125rem'
    }
  }, item.caption) : null)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'grid',
      gridTemplateColumns: '58px minmax(0,1fr) 58px',
      alignItems: 'center',
      gap: 'clamp(18px,3vw,34px)',
      marginTop: 'clamp(20px,3vw,28px)'
    },
    "aria-label": "Portfolio package navigation"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: showPrev,
    "aria-label": "Show previous asset",
    title: "Previous",
    style: {
      width: 58,
      height: 58,
      borderRadius: '50%',
      border: '1px solid rgba(255,255,255,0.14)',
      background: 'rgba(255,255,255,0.03)',
      color: 'var(--color-text-primary)',
      cursor: 'pointer',
      fontSize: '1.1rem'
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-label": "Portfolio package progress",
    "aria-valuemin": "1",
    "aria-valuemax": items.length,
    "aria-valuenow": index + 1,
    style: {
      position: 'relative',
      height: 6,
      borderRadius: 999,
      background: 'rgba(255,255,255,0.07)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: '0 auto 0 0',
      width: progressPercent + '%',
      background: 'var(--color-accent-primary)',
      display: 'block',
      height: '100%',
      transition: 'width 300ms ease'
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: showNext,
    "aria-label": "Show next asset",
    title: "Next",
    style: {
      width: 58,
      height: 58,
      borderRadius: '50%',
      border: '1px solid rgba(255,255,255,0.14)',
      background: 'rgba(255,255,255,0.03)',
      color: 'var(--color-text-primary)',
      cursor: 'pointer',
      fontSize: '1.1rem'
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 10,
      font: 'var(--font-mono)',
      fontSize: '0.75rem',
      color: 'var(--color-text-muted)'
    }
  }, String(index + 1).padStart(2, '0'), " / ", String(items.length).padStart(2, '0')), /*#__PURE__*/React.createElement("style", null, `@keyframes jiz-package-enter-next{from{opacity:0;transform:translateX(24px)}to{opacity:1;transform:translateX(0)}}@keyframes jiz-package-enter-previous{from{opacity:0;transform:translateX(-24px)}to{opacity:1;transform:translateX(0)}}`));
}
function CaseStudyShell({
  config,
  onBack,
  onOpenProject
}) {
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0);
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const has = v => Array.isArray(v) ? v.length > 0 : Boolean(v);
  const incomplete = !has(config.summary) || !has(config.process);
  return /*#__PURE__*/React.createElement("article", {
    className: "jiz-cs",
    "data-case-study": config.slug
  }, /*#__PURE__*/React.createElement("style", null, `
        .jiz-cs{position:relative;min-height:100vh;background:var(--color-background-primary)}
        .jiz-cs-progress{position:fixed;top:0;left:0;right:0;height:2px;z-index:60;background:rgba(255,255,255,.06)}
        .jiz-cs-progress span{display:block;height:100%;background:var(--color-accent-primary);transition:width 90ms linear}
        .jiz-cs-wrap{width:min(100%,1180px);margin-inline:auto;padding:32px var(--container-pad) clamp(72px,8vw,112px);box-sizing:border-box}
        .jiz-cs-crumb{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:clamp(28px,3.4vw,44px);font:var(--text-caption);color:var(--color-text-muted)}
        .jiz-cs-back{min-height:44px;padding:0 16px;border:1px solid rgba(255,255,255,.12);border-radius:var(--radius-pill);background:rgba(255,255,255,.03);color:var(--color-text-secondary);font:var(--text-caption);cursor:pointer;transition:all 200ms var(--ease-standard)}
        .jiz-cs-back:hover{border-color:rgba(198,242,58,.4);color:var(--color-text-primary)}
        .jiz-cs-eyebrow{margin:0 0 14px;color:var(--color-accent-secondary);font:var(--text-eyebrow);letter-spacing:var(--tracking-eyebrow);text-transform:uppercase}
        .jiz-cs-title{margin:0 0 20px;max-width:18ch;color:var(--color-text-primary);font:var(--text-h1);font-size:clamp(2.2rem,4.4vw,3.6rem);line-height:1.04;letter-spacing:-.04em}
        .jiz-cs-lede{margin:0 0 clamp(30px,3.4vw,44px);max-width:64ch;color:var(--color-text-secondary);font:var(--text-body-lg);line-height:1.62}
        .jiz-cs-facts{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:14px;margin-bottom:clamp(40px,5vw,68px)}
        .jiz-cs-fact{position:relative;display:flex;flex-direction:column;gap:8px;padding:18px;border:1px solid rgba(245,247,248,.08);border-top:2px solid var(--fact-accent,var(--accent-cyan));border-radius:var(--radius-md);background:radial-gradient(circle at 88% 0%,color-mix(in srgb,var(--fact-accent,var(--accent-cyan)) 10%,transparent),transparent 60%),rgba(18,25,31,.6);box-sizing:border-box}
        .jiz-cs-fact-k{color:var(--fact-accent,var(--accent-cyan));font:var(--text-hud);font-size:.625rem;letter-spacing:.1em;text-transform:uppercase}
        .jiz-cs-fact-v{color:rgba(245,247,248,.95);font:var(--text-body);font-size:.9375rem;font-weight:550;line-height:1.42}
        .jiz-cs-section{margin-bottom:clamp(48px,6vw,88px);scroll-margin-top:120px}
        .jiz-cs-kicker{margin:0 0 10px;color:var(--color-accent-secondary);font:var(--text-hud);font-size:.625rem;letter-spacing:.14em;text-transform:uppercase}
        .jiz-cs-h2{margin:0 0 18px;max-width:22ch;color:var(--color-text-primary);font:var(--text-h2);font-size:clamp(1.6rem,2.6vw,2.3rem);line-height:1.14;letter-spacing:-.03em}
        .jiz-cs-body{margin:0 0 16px;max-width:68ch;color:var(--color-text-secondary);font:var(--text-body);line-height:1.72}
        .jiz-cs-body:last-child{margin-bottom:0}
        .jiz-cs-split{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr);gap:clamp(24px,3.4vw,52px);align-items:start}
        .jiz-cs-list{margin:0;padding:0;list-style:none;display:grid;gap:10px}
        .jiz-cs-list li{position:relative;padding-left:22px;color:var(--color-text-secondary);font:var(--text-body);font-size:.9375rem;line-height:1.62}
        .jiz-cs-list li::before{content:'';position:absolute;left:0;top:.62em;width:7px;height:1px;background:var(--color-accent-primary)}
        .jiz-cs-panel{padding:clamp(22px,2.6vw,30px);border:1px solid rgba(255,255,255,.08);border-radius:var(--radius-lg);background:linear-gradient(150deg,rgba(255,255,255,.04),rgba(255,255,255,.012))}
        .jiz-cs-panel h3{margin:0 0 14px;color:var(--color-text-primary);font:var(--text-h3);font-size:1.05rem;letter-spacing:-.01em}
        .jiz-cs-snapshot{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1px;border:1px solid rgba(255,255,255,.08);border-radius:var(--radius-lg);overflow:hidden;background:rgba(255,255,255,.06)}
        .jiz-cs-snap-cell{padding:18px 20px;background:var(--color-background-primary)}
        .jiz-cs-snap-k{display:block;margin-bottom:6px;color:var(--color-accent-secondary);font:var(--text-hud);font-size:.625rem;letter-spacing:.1em;text-transform:uppercase}
        .jiz-cs-snap-v{color:var(--color-text-primary);font:var(--text-body);font-size:.9375rem;line-height:1.5}
        .jiz-cs-roles{display:grid;gap:14px}
        .jiz-cs-role{display:grid;grid-template-columns:minmax(120px,.34fr) minmax(0,1fr);gap:16px;padding-bottom:14px;border-bottom:1px solid rgba(255,255,255,.06)}
        .jiz-cs-role:last-child{padding-bottom:0;border-bottom:0}
        .jiz-cs-role dt{color:var(--color-accent-primary);font:var(--text-hud);font-size:.625rem;letter-spacing:.1em;text-transform:uppercase;padding-top:3px}
        .jiz-cs-role dd{margin:0;color:var(--color-text-secondary);font:var(--text-body);font-size:.9375rem;line-height:1.62}
        .jiz-cs-steps{position:relative;display:grid;gap:2px;border:1px solid rgba(255,255,255,.07);border-radius:var(--radius-lg);overflow:hidden;background:rgba(255,255,255,.05)}
        .jiz-cs-step{position:relative;display:grid;grid-template-columns:auto minmax(0,1fr);gap:18px;padding:clamp(20px,2.2vw,26px);background:linear-gradient(135deg,rgba(255,255,255,.018),transparent 60%),var(--color-background-primary)}
        .jiz-cs-step::before{content:'';position:absolute;left:0;top:0;bottom:0;width:2px;background:linear-gradient(180deg,var(--color-accent-primary),transparent);opacity:.55}
        .jiz-cs-step-n{color:var(--color-accent-secondary);font-family:var(--font-mono);font-size:.75rem;font-weight:500;letter-spacing:.1em}
        .jiz-cs-step h3{margin:0 0 8px;color:var(--color-text-primary);font:var(--text-h3);font-size:1.05rem;letter-spacing:-.01em}
        .jiz-cs-step p{margin:0;max-width:62ch;color:var(--color-text-secondary);font:var(--text-body);font-size:.9375rem;line-height:1.66}
        .jiz-cs-decisions{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:clamp(14px,1.8vw,20px)}
        .jiz-cs-decision{position:relative;padding:clamp(20px,2.2vw,26px);border:1px solid rgba(255,255,255,.08);border-left:2px solid var(--color-accent-primary);border-radius:var(--radius-md);background:radial-gradient(circle at 92% 8%,rgba(198,242,58,.05),transparent 46%),rgba(255,255,255,.022);transition:border-color 220ms var(--ease-standard),transform 220ms var(--ease-standard)}
        .jiz-cs-decision:hover{transform:translateY(-2px);border-color:rgba(198,242,58,.4)}
        .jiz-cs-decision h3{margin:0 0 10px;color:var(--color-text-primary);font:var(--text-h3);font-size:1rem;letter-spacing:-.01em}
        .jiz-cs-decision p{margin:0;color:var(--color-text-secondary);font:var(--text-body);font-size:.9375rem;line-height:1.66}
        .jiz-cs-chips{display:flex;flex-wrap:wrap;gap:8px}
        .jiz-cs-chip{padding:7px 14px;border:1px solid rgba(255,255,255,.11);border-radius:var(--radius-pill);color:var(--color-text-secondary);font:var(--text-caption);font-size:.8125rem}
        .jiz-cs-outcomes{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:clamp(14px,1.8vw,20px)}
        .jiz-cs-outcome{position:relative;padding:clamp(20px,2.2vw,26px);border:1px solid rgba(100,225,255,.16);border-radius:var(--radius-md);background:radial-gradient(circle at 88% 8%,rgba(100,225,255,.09),transparent 44%),rgba(255,255,255,.02);transition:transform 220ms var(--ease-standard),border-color 220ms var(--ease-standard)}
        .jiz-cs-outcome:hover{transform:translateY(-2px);border-color:rgba(100,225,255,.32)}
        .jiz-cs-outcome-k{display:block;margin-bottom:8px;color:var(--accent-cyan);font:var(--text-hud);font-size:.625rem;letter-spacing:.1em;text-transform:uppercase}
        .jiz-cs-outcome p{margin:0;color:var(--color-text-secondary);font:var(--text-body);font-size:.9375rem;line-height:1.62}
        .jiz-cs-reflect{padding:clamp(26px,3.2vw,40px);border:1px solid rgba(198,242,58,.2);border-radius:var(--radius-lg);background:radial-gradient(circle at 12% 0%,rgba(198,242,58,.055),transparent 46%),rgba(255,255,255,.018)}
        .jiz-cs-reflect .jiz-cs-body{max-width:70ch}
        .jiz-cs-again{margin-top:22px;padding-top:22px;border-top:1px solid rgba(255,255,255,.08)}
        .jiz-cs-again h3{margin:0 0 12px;color:var(--color-text-primary);font:var(--text-h3);font-size:.9375rem;letter-spacing:-.01em}
        .jiz-cs-again ol{margin:0;padding:0;list-style:none;display:grid;gap:10px;counter-reset:again}
        .jiz-cs-again li{position:relative;counter-increment:again;padding-left:28px;color:var(--color-text-secondary);font:var(--text-body);font-size:.9375rem;line-height:1.62}
        .jiz-cs-again li::before{content:counter(again);position:absolute;left:0;top:0;color:var(--color-accent-primary);font-family:var(--font-mono);font-size:.75rem;font-weight:600}
        .jiz-cs-notice{padding:clamp(24px,3vw,36px);border:1px solid rgba(198,242,58,.22);border-radius:var(--radius-lg);background:rgba(198,242,58,.04);text-align:center}
        .jiz-cs-notice h2{margin:0 0 12px;color:var(--color-text-primary);font:var(--text-h3);font-size:clamp(1.3rem,2vw,1.6rem)}
        .jiz-cs-notice p{margin:0 auto;max-width:62ch;color:var(--color-text-secondary);font:var(--text-body);line-height:1.66}
        .jiz-cs-gallery{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(14px,1.8vw,20px)}
        .jiz-cs-gallery figure{margin:0;border:1px solid rgba(255,255,255,.08);border-radius:var(--radius-md);overflow:hidden;background:rgba(255,255,255,.02)}
        .jiz-cs-gallery img{display:block;width:100%;height:auto}
        .jiz-cs-gallery figcaption{padding:10px 14px;color:var(--color-text-muted);font:var(--text-caption);font-size:.8125rem}
        @media(max-width:720px){.jiz-cs-gallery{grid-template-columns:1fr}}
        .jiz-cs-next{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px;padding-top:clamp(32px,4vw,48px);border-top:1px solid rgba(255,255,255,.075)}
        .jiz-cs-next button{display:flex;flex-direction:column;gap:6px;min-height:76px;padding:18px 20px;border:1px solid rgba(255,255,255,.09);border-radius:var(--radius-md);background:rgba(255,255,255,.022);text-align:left;cursor:pointer;transition:all 200ms var(--ease-standard)}
        .jiz-cs-next button:hover{transform:translateY(-2px);border-color:rgba(198,242,58,.36);background:rgba(198,242,58,.035)}
        .jiz-cs-next-k{color:var(--color-text-muted);font:var(--text-hud);font-size:.5625rem;letter-spacing:.12em;text-transform:uppercase}
        .jiz-cs-next-v{color:var(--color-text-primary);font:var(--text-body);font-size:.9375rem;font-weight:600}
        .jiz-cs-back:focus-visible,.jiz-cs-next button:focus-visible{outline:2px solid var(--color-accent-primary);outline-offset:3px}
        @media(max-width:880px){.jiz-cs-split{grid-template-columns:1fr}.jiz-cs-role{grid-template-columns:1fr;gap:6px}}
        @media(max-width:560px){.jiz-cs-step{grid-template-columns:1fr;gap:10px}}
        @media(prefers-reduced-motion:reduce){.jiz-cs-progress span,.jiz-cs-next button,.jiz-cs-back,.jiz-cs-decision,.jiz-cs-outcome{transition:none}.jiz-cs-next button:hover,.jiz-cs-decision:hover,.jiz-cs-outcome:hover{transform:none}}
      `), /*#__PURE__*/React.createElement("div", {
    className: "jiz-cs-progress",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: progress * 100 + '%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "jiz-cs-wrap"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "jiz-cs-crumb",
    "aria-label": "Case study"
  }, /*#__PURE__*/React.createElement("span", null, "Work \u2192 ", config.projectName), /*#__PURE__*/React.createElement("button", {
    className: "jiz-cs-back",
    type: "button",
    onClick: onBack
  }, "\u2190 All Featured Work")), /*#__PURE__*/React.createElement("header", {
    className: "jiz-cs-section"
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-cs-eyebrow"
  }, config.eyebrow || 'Case Study'), /*#__PURE__*/React.createElement("h1", {
    className: "jiz-cs-title"
  }, config.projectName), /*#__PURE__*/React.createElement("p", {
    className: "jiz-cs-lede"
  }, config.statement), /*#__PURE__*/React.createElement("dl", {
    className: "jiz-cs-facts"
  }, config.facts.map(f => /*#__PURE__*/React.createElement("div", {
    className: "jiz-cs-fact",
    key: f.label,
    style: {
      '--fact-accent': f.accent === 'lime' ? 'var(--color-accent-primary)' : f.accent === 'moss' ? 'var(--electric-moss)' : 'var(--accent-cyan)'
    }
  }, /*#__PURE__*/React.createElement("dt", {
    className: "jiz-cs-fact-k"
  }, f.label), /*#__PURE__*/React.createElement("dd", {
    className: "jiz-cs-fact-v",
    style: {
      margin: 0
    }
  }, f.value))))), has(config.snapshot) && /*#__PURE__*/React.createElement("section", {
    className: "jiz-cs-section",
    "aria-label": "Project snapshot"
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-cs-kicker"
  }, "Project snapshot"), /*#__PURE__*/React.createElement("div", {
    className: "jiz-cs-snapshot"
  }, config.snapshot.map(s => /*#__PURE__*/React.createElement("div", {
    className: "jiz-cs-snap-cell",
    key: s.label
  }, /*#__PURE__*/React.createElement("span", {
    className: "jiz-cs-snap-k"
  }, s.label), /*#__PURE__*/React.createElement("span", {
    className: "jiz-cs-snap-v"
  }, s.value))))), (has(config.gallery) || has(config.videos)) && /*#__PURE__*/React.createElement("section", {
    className: "jiz-cs-section",
    "aria-labelledby": config.slug + '-gallery'
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-cs-kicker"
  }, "Portfolio package"), /*#__PURE__*/React.createElement("h2", {
    className: "jiz-cs-h2",
    id: config.slug + '-gallery'
  }, config.galleryHeading || config.videosHeading || 'Full asset package.'), /*#__PURE__*/React.createElement(PackageCarousel, {
    items: [...(config.gallery || []).map(g => ({
      type: 'image',
      src: g.src,
      caption: g.caption || g.alt || ''
    })), ...(config.videos || []).map(v => ({
      type: 'video',
      src: v.src,
      caption: v.caption || ''
    }))]
  })), has(config.summary) && /*#__PURE__*/React.createElement("section", {
    className: "jiz-cs-section",
    "aria-labelledby": config.slug + '-summary'
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-cs-kicker"
  }, "Executive summary"), /*#__PURE__*/React.createElement("h2", {
    className: "jiz-cs-h2",
    id: config.slug + '-summary'
  }, config.summaryHeading || 'What this work accomplished.'), config.summary.map((p, i) => /*#__PURE__*/React.createElement("p", {
    className: "jiz-cs-body",
    key: i
  }, p))), has(config.challenge) && /*#__PURE__*/React.createElement("section", {
    className: "jiz-cs-section",
    "aria-labelledby": config.slug + '-challenge'
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-cs-kicker"
  }, "Business challenge"), /*#__PURE__*/React.createElement("h2", {
    className: "jiz-cs-h2",
    id: config.slug + '-challenge'
  }, config.challengeHeading || 'Why this work deserved investment.'), /*#__PURE__*/React.createElement("div", {
    className: "jiz-cs-split"
  }, /*#__PURE__*/React.createElement("div", null, config.challenge.map((p, i) => /*#__PURE__*/React.createElement("p", {
    className: "jiz-cs-body",
    key: i
  }, p))))), has(config.objectives) && /*#__PURE__*/React.createElement("section", {
    className: "jiz-cs-section",
    "aria-labelledby": config.slug + '-opportunity'
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-cs-kicker"
  }, "Opportunity"), /*#__PURE__*/React.createElement("h2", {
    className: "jiz-cs-h2",
    id: config.slug + '-opportunity'
  }, config.opportunityHeading || 'Why this was worth solving.'), /*#__PURE__*/React.createElement("div", {
    className: "jiz-cs-panel"
  }, /*#__PURE__*/React.createElement("h3", null, "What became possible"), /*#__PURE__*/React.createElement("ul", {
    className: "jiz-cs-list"
  }, config.objectives.map(o => /*#__PURE__*/React.createElement("li", {
    key: o
  }, o))))), has(config.roles) && /*#__PURE__*/React.createElement("section", {
    className: "jiz-cs-section",
    "aria-labelledby": config.slug + '-role'
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-cs-kicker"
  }, "My role"), /*#__PURE__*/React.createElement("h2", {
    className: "jiz-cs-h2",
    id: config.slug + '-role'
  }, config.roleHeading || 'Where I owned the outcome.'), /*#__PURE__*/React.createElement("dl", {
    className: "jiz-cs-roles"
  }, config.roles.map(r => /*#__PURE__*/React.createElement("div", {
    className: "jiz-cs-role",
    key: r.area
  }, /*#__PURE__*/React.createElement("dt", null, r.area), /*#__PURE__*/React.createElement("dd", null, r.detail))))), has(config.process) && /*#__PURE__*/React.createElement("section", {
    className: "jiz-cs-section",
    "aria-labelledby": config.slug + '-process'
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-cs-kicker"
  }, config.processKicker || 'Process'), /*#__PURE__*/React.createElement("h2", {
    className: "jiz-cs-h2",
    id: config.slug + '-process'
  }, config.processHeading || 'How the work took shape.'), /*#__PURE__*/React.createElement("div", {
    className: "jiz-cs-steps"
  }, config.process.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "jiz-cs-step",
    key: s.stage
  }, /*#__PURE__*/React.createElement("span", {
    className: "jiz-cs-step-n"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, s.stage), /*#__PURE__*/React.createElement("p", null, s.detail)))))), has(config.decisions) && /*#__PURE__*/React.createElement("section", {
    className: "jiz-cs-section",
    "aria-labelledby": config.slug + '-decisions'
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-cs-kicker"
  }, "Strategic design decisions"), /*#__PURE__*/React.createElement("h2", {
    className: "jiz-cs-h2",
    id: config.slug + '-decisions'
  }, config.decisionsHeading || 'The choices that shaped the outcome.'), /*#__PURE__*/React.createElement("div", {
    className: "jiz-cs-decisions"
  }, config.decisions.map(d => /*#__PURE__*/React.createElement("div", {
    className: "jiz-cs-decision",
    key: d.question
  }, /*#__PURE__*/React.createElement("h3", null, d.question), /*#__PURE__*/React.createElement("p", null, d.rationale))))), has(config.aiTools) && /*#__PURE__*/React.createElement("section", {
    className: "jiz-cs-section",
    "aria-labelledby": config.slug + '-ai'
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-cs-kicker"
  }, "AI-assisted production"), /*#__PURE__*/React.createElement("h2", {
    className: "jiz-cs-h2",
    id: config.slug + '-ai'
  }, config.aiToolsHeading || 'Where AI accelerated the work — and where it didn\'t.'), config.aiToolsIntro ? /*#__PURE__*/React.createElement("p", {
    className: "jiz-cs-body",
    style: {
      maxWidth: '68ch',
      marginBottom: 24
    }
  }, config.aiToolsIntro) : null, /*#__PURE__*/React.createElement("div", {
    className: "jiz-cs-decisions"
  }, config.aiTools.map(t => /*#__PURE__*/React.createElement("div", {
    className: "jiz-cs-decision",
    key: t.tool
  }, /*#__PURE__*/React.createElement("h3", null, t.tool), /*#__PURE__*/React.createElement("p", null, t.detail))))), has(config.deliverables) && /*#__PURE__*/React.createElement("section", {
    className: "jiz-cs-section",
    "aria-labelledby": config.slug + '-deliverables'
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-cs-kicker"
  }, "Deliverables"), /*#__PURE__*/React.createElement("h2", {
    className: "jiz-cs-h2",
    id: config.slug + '-deliverables'
  }, config.deliverablesHeading || 'What shipped.'), /*#__PURE__*/React.createElement("div", {
    className: "jiz-cs-chips"
  }, config.deliverables.map(d => /*#__PURE__*/React.createElement("span", {
    className: "jiz-cs-chip",
    key: d
  }, d)))), has(config.outcomes) && /*#__PURE__*/React.createElement("section", {
    className: "jiz-cs-section",
    "aria-labelledby": config.slug + '-outcomes'
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-cs-kicker"
  }, "Evidence available"), /*#__PURE__*/React.createElement("h2", {
    className: "jiz-cs-h2",
    id: config.slug + '-outcomes'
  }, config.outcomesHeading || 'What this work demonstrates.'), /*#__PURE__*/React.createElement("div", {
    className: "jiz-cs-outcomes"
  }, config.outcomes.map(o => /*#__PURE__*/React.createElement("div", {
    className: "jiz-cs-outcome",
    key: o.label
  }, /*#__PURE__*/React.createElement("span", {
    className: "jiz-cs-outcome-k"
  }, o.label), /*#__PURE__*/React.createElement("p", null, o.detail)))), config.outcomesNote ? /*#__PURE__*/React.createElement("p", {
    className: "jiz-cs-body",
    style: {
      marginTop: 18,
      fontSize: '.8125rem',
      color: 'var(--color-text-muted)'
    }
  }, config.outcomesNote) : null), has(config.reflection) && /*#__PURE__*/React.createElement("section", {
    className: "jiz-cs-section",
    "aria-labelledby": config.slug + '-reflection'
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-cs-reflect"
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-cs-kicker"
  }, "Reflection"), /*#__PURE__*/React.createElement("h2", {
    className: "jiz-cs-h2",
    id: config.slug + '-reflection'
  }, config.reflectionHeading || 'What this taught me.'), config.reflection.map((p, i) => /*#__PURE__*/React.createElement("p", {
    className: "jiz-cs-body",
    key: i
  }, p)), has(config.ifAgain) && /*#__PURE__*/React.createElement("div", {
    className: "jiz-cs-again"
  }, /*#__PURE__*/React.createElement("h3", null, "If I were doing this again"), /*#__PURE__*/React.createElement("ol", null, config.ifAgain.map((a, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, a)))))), incomplete && /*#__PURE__*/React.createElement("section", {
    className: "jiz-cs-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-cs-notice"
  }, /*#__PURE__*/React.createElement("h2", null, "Documentation in progress"), /*#__PURE__*/React.createElement("p", null, "This case study is currently being expanded with additional process documentation, visuals, and project outcomes."))), has(config.related) && /*#__PURE__*/React.createElement("nav", {
    className: "jiz-cs-next",
    "aria-label": "Related projects"
  }, config.related.map(r => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: r.route,
    onClick: () => onOpenProject && onOpenProject(r.route)
  }, /*#__PURE__*/React.createElement("span", {
    className: "jiz-cs-next-k"
  }, r.direction), /*#__PURE__*/React.createElement("span", {
    className: "jiz-cs-next-v"
  }, r.title))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onBack
  }, /*#__PURE__*/React.createElement("span", {
    className: "jiz-cs-next-k"
  }, "Index"), /*#__PURE__*/React.createElement("span", {
    className: "jiz-cs-next-v"
  }, "Back to Featured Work")))));
}
window.CaseStudyShellExports = {
  CaseStudyShell
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-website/CaseStudyShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-website/Homepage.jsx
try { (() => {
function Section({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 'clamp(56px, 6vw, 100px)',
      paddingBottom: 'clamp(56px, 6vw, 100px)',
      paddingLeft: 'var(--container-pad)',
      paddingRight: 'var(--container-pad)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      ...style
    }
  }, children);
}
function Eyebrow({
  children,
  color = 'var(--color-accent-secondary)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color,
      marginBottom: 12
    }
  }, children);
}
const prefersReduced = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (typeof document !== 'undefined' && !document.getElementById('jiz-reveal-highlight-kf')) {
  const s = document.createElement('style');
  s.id = 'jiz-reveal-highlight-kf';
  s.textContent = '@keyframes jiz-reveal-highlight{0%{box-shadow:0 0 0 0 rgba(198,242,58,0)}25%{box-shadow:0 0 28px 4px rgba(198,242,58,.35)}100%{box-shadow:0 0 0 0 rgba(198,242,58,0)}}';
  document.head.appendChild(s);
}
function VideoLightbox({
  src,
  open,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      background: 'rgba(8,10,12,0.86)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5vh 5vw'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'relative',
      width: 'min(1100px, 88vw)',
      aspectRatio: '16/9',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '2px solid var(--color-accent-primary)',
      boxShadow: '0 0 0 1px rgba(198,242,58,0.25), 0 0 60px rgba(198,242,58,0.35), 0 30px 80px rgba(0,0,0,0.6)'
    }
  }, /*#__PURE__*/React.createElement("video", {
    src: src,
    controls: true,
    autoPlay: true,
    playsInline: true,
    style: {
      width: '100%',
      height: '100%',
      display: 'block',
      background: '#000'
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close video",
    style: {
      position: 'absolute',
      top: 24,
      right: 24,
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: '1px solid var(--color-border-default)',
      background: 'rgba(0,0,0,0.5)',
      color: 'var(--color-text-primary)',
      fontSize: 20,
      cursor: 'pointer'
    }
  }, "\u2715"));
}
function TrainStoryVideo() {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(true),
    style: {
      aspectRatio: '16/9',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '2px solid var(--color-accent-primary)',
      boxShadow: 'var(--glow-lime)',
      position: 'relative',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("video", {
    playsInline: true,
    preload: "metadata",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("source", {
    src: "./assets/video/the-train-story.mp4",
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'rgba(8,10,12,0.55)',
      border: '1px solid var(--color-accent-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "var(--color-accent-primary)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5v14l11-7z"
  }))))), /*#__PURE__*/React.createElement(VideoLightbox, {
    src: "./assets/video/the-train-story.mp4",
    open: open,
    onClose: () => setOpen(false)
  }));
}
function ChromaKeyVideo({
  src,
  className,
  style
}) {
  const videoRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    const video = videoRef.current,
      canvas = canvasRef.current;
    if (!video || !canvas) return;
    const ctx = canvas.getContext('2d', {
      willReadFrequently: true
    });
    let raf,
      isVisible = true;
    const io = new IntersectionObserver(entries => {
      isVisible = entries[0].isIntersecting;
    }, {
      threshold: 0.01
    });
    io.observe(canvas);
    const draw = () => {
      raf = requestAnimationFrame(draw);
      if (!isVisible || video.paused || video.ended || !video.videoWidth) return;
      if (canvas.width !== video.videoWidth) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
      }
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const d = frame.data;
      for (let i = 0; i < d.length; i += 4) {
        const r = d[i],
          g = d[i + 1],
          b = d[i + 2];
        if (g > 60 && g > r * 1.06 && g > b * 1.06) {
          const excess = g - Math.max(r, b);
          d[i + 3] = Math.max(0, 255 - excess * 10);
          d[i + 1] = Math.min(g, Math.max(r, b) + excess * 0.15);
          d[i + 0] = Math.min(255, r + excess * 0.12);
          d[i + 2] = Math.min(255, b + excess * 0.12);
        }
      }
      ctx.putImageData(frame, 0, 0);
    };
    const enforceMute = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;
    };
    enforceMute();
    video.setAttribute('muted', '');
    const onLoaded = () => {
      enforceMute();
      video.play().catch(() => {});
    };
    video.addEventListener('loadeddata', onLoaded);
    video.addEventListener('play', enforceMute);
    video.addEventListener('volumechange', enforceMute);
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      video.removeEventListener('loadeddata', onLoaded);
      video.removeEventListener('play', enforceMute);
      video.removeEventListener('volumechange', enforceMute);
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("video", {
    ref: videoRef,
    src: src,
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    className: className,
    style: style
  }));
}
function Reveal({
  children,
  style,
  delay = 0,
  highlight = false
}) {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (prefersReduced()) {
      setVisible(true);
      return;
    }
    const t = setTimeout(() => setVisible(true), delay + 30);
    return () => clearTimeout(t);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(16px)',
      transition: `opacity var(--motion-slow) var(--ease-out), transform var(--motion-slow) var(--ease-out)`,
      ...(highlight ? {
        borderRadius: 'var(--radius-lg)',
        boxShadow: visible ? '0 0 0 0 rgba(198,242,58,0)' : 'none',
        animation: visible && !prefersReduced() ? 'jiz-reveal-highlight 1.1s ease-out' : 'none'
      } : {}),
      ...style
    }
  }, children);
}
function TiltCard({
  children
}) {
  const ref = React.useRef(null);
  const [tilt, setTilt] = React.useState({
    x: 0,
    y: 0
  });
  const onMove = e => {
    if (prefersReduced() || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setTilt({
      x: ((e.clientY - r.top) / r.height - 0.5) * -5,
      y: ((e.clientX - r.left) / r.width - 0.5) * 5
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    onMouseMove: onMove,
    onMouseLeave: () => setTilt({
      x: 0,
      y: 0
    }),
    style: {
      transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      transition: 'transform var(--motion-fast) var(--ease-standard)'
    }
  }, children);
}
function DataFlowVisual() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 300 160",
    style: {
      width: '100%',
      height: '100%'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "jz-flow",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "var(--signal-lime)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "var(--accent-cyan)"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M10 130 C 80 30, 150 150, 290 40",
    fill: "none",
    stroke: "url(#jz-flow)",
    strokeWidth: "1.5",
    opacity: "0.8"
  }), [[10, 130], [70, 90], [140, 120], [200, 55], [290, 40]].map((p, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: p[0],
    cy: p[1],
    r: "3",
    fill: "var(--signal-lime)",
    opacity: "0.9"
  })));
}
function NetworkField({
  pointerRef
}) {
  return null;
}
function AmbientField() {
  return null;
}
function ParticleField() {
  return null;
}
function ForegroundHaze() {
  return null;
}
function PersistentEnvironment() {
  const [prog, setProg] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProg(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const blueOpacity = 0.22 - prog * 0.12;
  const limeOpacity = 0.05 + prog * 0.16;
  return null;
}
function Hero({
  onExploreWork,
  onConnect
}) {
  const {
    Button,
    StatusPill
  } = window.JIZPortfolioSite_b3ba38;
  const [glassesFlash, setGlassesFlash] = React.useState(false);
  React.useEffect(() => {
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const onSignal = () => {
      if (reduced) return;
      setGlassesFlash(true);
      setTimeout(() => setGlassesFlash(false), 650);
    };
    window.addEventListener('jiz-signal', onSignal);
    return () => window.removeEventListener('jiz-signal', onSignal);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-environment",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-base-gradient"
  }), /*#__PURE__*/React.createElement("video", {
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    volume: 0,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: 'scale(1.9)',
      opacity: 0.28,
      mixBlendMode: 'screen'
    },
    ref: el => {
      if (el) {
        el.muted = true;
        el.volume = 0;
      }
    },
    onLoadedData: e => {
      e.target.muted = true;
      e.target.volume = 0;
    }
  }, /*#__PURE__*/React.createElement("source", {
    src: "./assets/video/hero-bg.mp4",
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-signal-field"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-ambient-glow hero-ambient-glow--blue"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-ambient-glow hero-ambient-glow--chartreuse"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-copy"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Strategist. Designer. Systems thinker."), /*#__PURE__*/React.createElement("h1", {
    className: "hero-title"
  }, "Learning, ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-accent-primary)'
    }
  }, "directed.")), /*#__PURE__*/React.createElement("p", {
    className: "hero-description"
  }, "I turn complexity into experiences people understand."), /*#__PURE__*/React.createElement("p", {
    className: "hero-manifesto"
  }, "Understanding is the product."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'flex-start',
      marginTop: 44,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onExploreWork,
    style: {
      padding: '15px 28px',
      fontSize: '1rem'
    }
  }, "Explore featured work"), /*#__PURE__*/React.createElement(StatusPill, {
    label: "Open to select opportunities",
    onClick: onConnect
  })))), /*#__PURE__*/React.createElement("div", {
    className: "hero-portrait-stage"
  }, /*#__PURE__*/React.createElement(ChromaKeyVideo, {
    src: "./assets/video/hero-portrait-green.mp4?v=4",
    className: "hero-portrait",
    style: {
      WebkitMaskImage: 'linear-gradient(to bottom,#000 62%,rgba(0,0,0,.9) 80%,transparent 98%),linear-gradient(to right,transparent 0%,#000 30%),linear-gradient(to left,transparent 0%,#000 20%),radial-gradient(ellipse 55% 45% at 8% 100%,transparent 0%,transparent 20%,#000 75%)',
      WebkitMaskComposite: 'source-in,source-in,source-in',
      maskImage: 'linear-gradient(to bottom,#000 62%,rgba(0,0,0,.9) 80%,transparent 98%),linear-gradient(to right,transparent 0%,#000 30%),linear-gradient(to left,transparent 0%,#000 20%),radial-gradient(ellipse 55% 45% at 8% 100%,transparent 0%,transparent 20%,#000 75%)',
      maskComposite: 'intersect'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: '30%',
      background: 'linear-gradient(to top, rgba(198,242,58,0.42), rgba(198,242,58,0.12) 60%, transparent)',
      mixBlendMode: 'screen',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '18%',
      top: '22%',
      width: '20%',
      height: '10%',
      background: 'radial-gradient(ellipse, rgba(198,242,58,0.9), transparent 70%)',
      mixBlendMode: 'screen',
      opacity: glassesFlash ? 0.85 : 0,
      transition: glassesFlash ? 'opacity 0.12s ease-out' : 'opacity 0.5s ease-in',
      pointerEvents: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-foreground-atmosphere",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("style", null, `
.hero{position:relative;isolation:isolate;overflow:hidden;width:100%;min-height:calc(100svh - 96px);background:radial-gradient(ellipse at 74% 42%,rgba(22,113,163,.16) 0%,rgba(20,74,91,.09) 30%,transparent 64%),radial-gradient(ellipse at 40% 54%,rgba(180,226,63,.055) 0%,transparent 52%)}
.hero-environment{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;background:transparent}
.hero-base-gradient{position:absolute;inset:0;background:linear-gradient(90deg,rgba(8,13,11,.96) 0%,rgba(10,18,15,.9) 42%,rgba(13,30,28,.84) 72%,rgba(8,18,17,.92) 100%)}
.hero-signal-field{position:absolute;inset:-8%;opacity:.42;background-image:radial-gradient(circle at 18% 48%,rgba(115,224,255,.09) 0 1px,transparent 2px),radial-gradient(circle at 42% 64%,rgba(197,255,45,.06) 0 1px,transparent 2px),radial-gradient(circle at 78% 38%,rgba(115,224,255,.1) 0 1px,transparent 2px);background-size:160px 140px,220px 180px,190px 170px}
.hero-ambient-glow{position:absolute;pointer-events:none;border-radius:50%;filter:blur(90px)}
.hero-ambient-glow--blue{width:min(72vw,1200px);height:min(72vw,1200px);right:-18vw;top:-16%;background:radial-gradient(circle,rgba(29,132,196,.2) 0%,rgba(24,91,126,.1) 38%,transparent 72%)}
.hero-ambient-glow--chartreuse{width:min(46vw,760px);height:min(38vw,640px);left:12%;bottom:-26%;background:radial-gradient(circle,rgba(197,255,45,.028) 0%,transparent 68%)}
.hero-content{position:relative;z-index:5;display:grid;align-items:center;width:min(1440px,calc(100% - 2*clamp(28px,6vw,112px)));min-height:calc(100svh - 96px);margin-inline:auto;padding-block:clamp(64px,7vw,104px)}
.hero-copy{width:min(38vw,560px);margin-left:clamp(0px,1vw,20px)}
.hero-eyebrow{margin-bottom:26px}
.hero-title{font:var(--text-display);font-size:clamp(3.4rem,2.2rem + 4.2vw,6.6rem);line-height:.92;color:var(--color-text-primary);margin:0 0 40px}
.hero-description{font:var(--text-body-lg);font-size:clamp(1.5rem,1.3rem + .5vw,2rem);line-height:1.42;color:var(--color-text-secondary);max-width:480px;margin:0 0 30px}
.hero-manifesto{font:var(--text-body);font-size:1.5rem;font-weight:300;font-style:italic;color:rgba(247,248,250,0.85);max-width:440px;margin:0;border-left:2px solid rgba(255,255,255,0.25);padding-left:16px}
.hero-portrait-stage{position:absolute;inset:0;z-index:3;overflow:visible;pointer-events:none;background:transparent;border:0;box-shadow:none}
.hero-portrait{position:absolute;z-index:2;right:clamp(50px,7vw,140px);bottom:-7%;width:clamp(520px,44vw,840px);height:114%;max-width:none;max-height:114%;object-fit:contain;object-position:right bottom;transform:translate3d(0,0,0);transform-origin:right bottom;pointer-events:auto;cursor:pointer;opacity:.92;filter:drop-shadow(-30px 6px 52px rgba(27,128,194,.2)) drop-shadow(-10px 0 30px rgba(49,165,223,.12));-webkit-mask-image:linear-gradient(to bottom,#000 46%,rgba(0,0,0,.85) 66%,transparent 96%),linear-gradient(to right,transparent 0%,#000 26%),linear-gradient(to left,transparent 0%,#000 14%),linear-gradient(to top,transparent 0%,#000 8%);-webkit-mask-composite:source-in,source-in,source-in;mask-image:linear-gradient(to bottom,#000 46%,rgba(0,0,0,.85) 66%,transparent 96%),linear-gradient(to right,transparent 0%,#000 26%),linear-gradient(to left,transparent 0%,#000 14%),linear-gradient(to top,transparent 0%,#000 8%);mask-composite:intersect}
.hero-portrait-backlight{position:absolute;right:-8vw;top:8%;width:min(68vw,1120px);height:min(72vw,1180px);border-radius:50%;background:radial-gradient(ellipse at 56% 46%,rgba(48,169,236,.23) 0%,rgba(26,111,162,.14) 26%,rgba(19,72,99,.07) 48%,transparent 74%);filter:blur(48px);opacity:.9}
.hero-portrait-edge-glow{position:absolute;inset:0;z-index:3;pointer-events:none;background:radial-gradient(ellipse at 74% 48%,rgba(47,166,227,.11) 0%,rgba(31,110,159,.06) 30%,transparent 62%);mix-blend-mode:screen;filter:blur(14px)}
.hero-portrait-haze{position:absolute;z-index:4;right:-2%;bottom:-3%;width:66%;height:58%;pointer-events:none;background:radial-gradient(ellipse at 68% 58%,rgba(54,160,204,.1) 0%,rgba(26,92,109,.06) 34%,transparent 70%),linear-gradient(90deg,transparent 10%,rgba(17,78,94,.04) 48%,transparent 92%);filter:blur(20px);mix-blend-mode:screen}
.hero-foreground-atmosphere{position:absolute;inset:0;z-index:4;pointer-events:none;background:radial-gradient(ellipse at 70% 66%,rgba(52,154,198,.075) 0%,transparent 44%),linear-gradient(90deg,transparent 34%,rgba(18,72,83,.03) 56%,transparent 88%);mix-blend-mode:screen}
@media(max-width:1180px){.hero-copy{width:min(52vw,620px);margin-left:clamp(24px,4vw,64px)}.hero-title{font-size:clamp(2.6rem,5vw,4rem)}.hero-portrait{right:-100px;width:clamp(520px,54vw,780px)}}
@media(max-width:900px){.hero{min-height:auto}.hero-content{min-height:auto;padding-top:92px;padding-bottom:520px}.hero-copy{width:min(100%,620px);margin-left:0}.hero-portrait{right:50%;bottom:-8px;width:min(640px,94vw);transform:translateX(50%)}.hero-portrait-backlight{right:50%;top:auto;bottom:-12%;width:100vw;height:640px;transform:translateX(50%)}.hero-portrait-haze{right:0;width:100%}}
@media(max-width:600px){.hero-content{padding-top:72px;padding-bottom:420px}.hero-portrait{width:min(540px,108vw)}}
@media(prefers-reduced-motion:reduce){.hero-portrait{transform:none;transition:none}}
      `));
}
function ProjectCard({
  index,
  title,
  category,
  description,
  image,
  insight,
  stage,
  featured,
  active,
  onActivate,
  dimmed,
  onOpenCaseStudy
}) {
  const [hover, setHover] = React.useState(false);
  const stages = ['Discovery', 'Strategy', 'Design', 'Production', 'Impact'];
  const handleClick = () => {
    if (index === 0) onOpenCaseStudy && onOpenCaseStudy();
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => {
      onActivate();
      if (index === 0) handleClick();
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      cursor: 'pointer',
      position: 'relative',
      minWidth: 0,
      background: 'rgba(23,26,31,0.4)',
      backdropFilter: 'blur(14px)',
      border: active ? '1px solid rgba(198,242,58,0.5)' : '1px solid var(--color-border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      transition: 'all var(--motion-standard) var(--ease-standard)',
      transform: hover ? 'translateY(-4px)' : 'none',
      boxShadow: active ? 'var(--shadow-elevated), 0 0 28px rgba(198,242,58,0.18)' : hover ? 'var(--shadow-elevated)' : 'var(--shadow-subtle)',
      opacity: dimmed ? 0.55 : 1,
      gridColumn: featured ? 'span 2' : 'span 1',
      gridRow: featured ? 'span 2' : 'span 1'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: featured ? '16/10' : '4/3',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: `work-${index}`,
    src: image,
    shape: "rect",
    placeholder: `Drop preview for ${title}`,
    style: {
      width: '100%',
      height: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: hover ? 'linear-gradient(115deg, transparent 30%, rgba(198,242,58,0.1) 50%, transparent 70%)' : 'transparent',
      transition: 'background var(--motion-standard) var(--ease-standard)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      boxShadow: 'inset 0 -40px 50px -20px rgba(11,13,16,0.7)',
      pointerEvents: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: featured ? 26 : 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      fontSize: '0.6875rem',
      color: 'var(--color-accent-secondary)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)'
    }
  }, category), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-h3)',
      fontSize: featured ? '1.5rem' : '1.125rem',
      color: 'var(--color-text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--color-text-secondary)'
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 8,
      flexWrap: 'wrap'
    }
  }, stages.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      font: 'var(--text-hud)',
      fontSize: '0.625rem',
      padding: '3px 8px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (s === stage ? 'var(--color-accent-primary)' : 'var(--color-border-default)'),
      color: s === stage ? 'var(--color-accent-primary)' : 'var(--color-text-muted)'
    }
  }, s))), active && insight && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      borderLeft: '2px solid var(--color-accent-primary)',
      paddingLeft: 12,
      animation: 'jiz-stage-in 0.4s var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-hud)',
      fontSize: '0.625rem',
      color: 'var(--color-text-muted)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-hud)'
    }
  }, "Director's commentary"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      fontSize: '0.9375rem',
      color: 'var(--color-text-primary)',
      fontStyle: 'italic',
      marginTop: 4
    }
  }, insight)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--color-accent-primary)',
      marginTop: 4
    }
  }, "View project \u2192")));
}
function FilmSection() {
  const VIDEO_URL = './assets/video/the-train-story.mp4';
  const videoRef = React.useRef(null);
  const progressRef = React.useRef(null);
  const [videoReady, setVideoReady] = React.useState(false);
  const [videoPlaying, setVideoPlaying] = React.useState(false);
  const [videoMuted, setVideoMuted] = React.useState(true);
  const [videoError, setVideoError] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [reducedMotion, setReducedMotion] = React.useState(false);
  React.useEffect(function () {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return undefined;
    }
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateReducedMotion = function () {
      setReducedMotion(media.matches);
    };
    updateReducedMotion();
    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', updateReducedMotion);
      return function () {
        media.removeEventListener('change', updateReducedMotion);
      };
    }
    if (typeof media.addListener === 'function') {
      media.addListener(updateReducedMotion);
      return function () {
        media.removeListener(updateReducedMotion);
      };
    }
    return undefined;
  }, []);
  const togglePlayback = async function () {
    const video = videoRef.current;
    if (!video || !videoReady || videoError) {
      return;
    }
    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch (error) {
      setVideoPlaying(false);
    }
  };
  const restartVideo = async function () {
    const video = videoRef.current;
    if (!video || !videoReady || videoError) {
      return;
    }
    video.currentTime = 0;
    setCurrentTime(0);
    try {
      await video.play();
    } catch (error) {
      setVideoPlaying(false);
    }
  };
  const toggleMute = function () {
    const video = videoRef.current;
    if (!video) {
      return;
    }
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setVideoMuted(nextMuted);
  };
  const handleProgressChange = function (event) {
    const video = videoRef.current;
    if (!video || !duration) {
      return;
    }
    const nextTime = Number(event.target.value) / 100 * duration;
    video.currentTime = nextTime;
    setCurrentTime(nextTime);
  };
  const formatTime = function (value) {
    if (!Number.isFinite(value) || value < 0) {
      return '0:00';
    }
    const minutes = Math.floor(value / 60);
    const seconds = Math.floor(value % 60);
    return String(minutes) + ':' + String(seconds).padStart(2, '0');
  };
  const progressValue = duration > 0 ? Math.min(100, Math.max(0, currentTime / duration * 100)) : 0;
  return /*#__PURE__*/React.createElement("section", {
    className: "jiz-creative-lab",
    "data-creative-lab": "ready",
    "aria-labelledby": "creative-lab-title"
  }, /*#__PURE__*/React.createElement("style", null, `
        .jiz-creative-lab {
          position: relative;
          isolation: isolate;
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding:
            clamp(96px, 10vw, 160px)
            var(--container-pad)
            clamp(104px, 11vw, 172px);
          color: var(--color-text-primary);
          background:
            radial-gradient(
              ellipse at 16% 20%,
              rgba(198, 242, 58, 0.075),
              transparent 38%
            ),
            radial-gradient(
              ellipse at 84% 68%,
              rgba(100, 225, 255, 0.11),
              transparent 44%
            ),
            linear-gradient(
              180deg,
              #16201f 0%,
              #1c2627 26%,
              #202b2c 52%,
              #1c2527 78%,
              #171f21 100%
            );
        }

        .jiz-creative-lab::before {
          content: '';
          position: absolute;
          z-index: -2;
          inset: 0;
          pointer-events: none;
          opacity: 0.2;
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            );
          background-size: 76px 76px;
          -webkit-mask-image:
            radial-gradient(
              ellipse at 50% 44%,
              #000,
              transparent 74%
            );
          mask-image:
            radial-gradient(
              ellipse at 50% 44%,
              #000,
              transparent 74%
            );
        }

        .jiz-creative-lab::after {
          content: '';
          position: absolute;
          z-index: -1;
          left: 50%;
          top: 46%;
          width: min(112vw, 1760px);
          height: 1080px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          pointer-events: none;
          background:
            radial-gradient(
              ellipse,
              rgba(100, 225, 255, 0.085),
              rgba(198, 242, 58, 0.03) 40%,
              transparent 72%
            );
          filter: blur(88px);
          opacity: 0.9;
        }

        .jiz-creative-lab-inner {
          position: relative;
          z-index: 1;
          width: min(100%, 1360px);
          margin-inline: auto;
        }

        .jiz-creative-lab-header {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            minmax(320px, 0.78fr);
          align-items: start;
          column-gap:
            clamp(36px, 7vw, 92px);
          row-gap:
            clamp(28px, 3.4vw, 44px);
          margin-bottom:
            clamp(40px, 5vw, 64px);
        }

        .jiz-creative-lab-heading {
          grid-column: 1;
          max-width: 640px;
        }

        .jiz-creative-lab-eyebrow {
          grid-column: 1 / -1;
          margin: 0;
          color: var(--color-accent-primary);
          font: var(--text-eyebrow);
          letter-spacing: var(--tracking-eyebrow);
          text-transform: uppercase;
        }

        .jiz-creative-lab-title {
          grid-column: 1 / -1;
          margin: clamp(14px, 1.6vw, 20px) 0 0;
          max-width: 20ch;
          color: var(--color-text-primary);
          font: var(--text-h2);
          font-size:
            clamp(3rem, 6vw, 5.9rem);
          line-height: 0.98;
          letter-spacing: -0.055em;
          text-wrap: balance;
        }

        .jiz-creative-lab-subtitle {
          margin: 0;
          max-width: 640px;
          color: var(--color-text-secondary);
          font: var(--text-body-lg);
          line-height: 1.66;
        }

        .jiz-creative-lab-intro {
          grid-column: 2;
          margin: 0;
          padding: 4px 0 4px clamp(20px, 2.2vw, 28px);
          border: 0;
          border-left: 1px solid rgba(100, 225, 255, 0.22);
          border-radius: 0;
          background: transparent;
          color: var(--color-text-secondary);
          font: var(--text-body);
          line-height: 1.7;
        }

        .jiz-creative-lab-method {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 1px;
          margin: 0 0 clamp(30px, 3.6vw, 46px);
          padding: 0;
          overflow: hidden;
          list-style: none;
          border: 1px solid rgba(255, 255, 255, 0.055);
          border-radius: clamp(18px, 2vw, 24px);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .jiz-creative-lab-method-step {
          display: flex;
          flex-direction: column;
          gap: 7px;
          padding: clamp(18px, 2vw, 24px) clamp(14px, 1.5vw, 20px);
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.032) 0%,
              rgba(22, 30, 30, 0.42) 40%,
              rgba(18, 25, 26, 0.5) 100%
            );
        }

        .jiz-creative-lab-method-index {
          color: var(--color-accent-secondary);
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 500;
          letter-spacing: 0.1em;
        }

        .jiz-creative-lab-method-name {
          color: rgba(245, 247, 248, 0.94);
          font: var(--text-body);
          font-size: 0.9375rem;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .jiz-creative-lab-method-note {
          color: rgba(245, 247, 248, 0.7);
          font: var(--text-caption);
          font-size: 0.75rem;
          line-height: 1.46;
        }

        .jiz-creative-lab-entry {
          display: grid;
          gap: 14px;
          margin: clamp(24px, 2.8vw, 34px) 0 0;
        }

        .jiz-creative-lab-entry-row {
          display: grid;
          grid-template-columns: minmax(88px, 0.24fr) minmax(0, 1fr);
          gap: 16px;
          padding-bottom: 13px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .jiz-creative-lab-entry-row:last-child {
          padding-bottom: 0;
          border-bottom: 0;
        }

        .jiz-creative-lab-entry dt {
          padding-top: 2px;
          color: var(--color-accent-secondary);
          font: var(--text-hud);
          font-size: 0.625rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .jiz-creative-lab-entry dd {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: 0.9375rem;
          line-height: 1.66;
        }

        .jiz-creative-lab-stage {
          position: relative;
          padding:
            clamp(14px, 2vw, 24px);
          border:
            1px solid rgba(255, 255, 255, 0.09);
          border-radius:
            clamp(26px, 3vw, 40px);
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.075) 0%,
              rgba(255, 255, 255, 0.03) 18%,
              rgba(255, 255, 255, 0.012) 100%
            );
          box-shadow:
            0 84px 190px rgba(0, 0, 0, 0.46),
            0 10px 42px rgba(0, 0, 0, 0.24),
            inset 0 1px 0 rgba(255, 255, 255, 0.09);
          backdrop-filter: blur(22px);
        }

        .jiz-creative-lab-stage::before {
          content: '';
          position: absolute;
          z-index: -1;
          inset: 6% 4% -34%;
          border-radius: 50%;
          pointer-events: none;
          background:
            radial-gradient(
              ellipse,
              rgba(100, 225, 255, 0.19),
              rgba(198, 242, 58, 0.05) 40%,
              transparent 70%
            );
          filter: blur(76px);
          opacity: 0.86;
        }

        .jiz-creative-lab-video-frame {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border:
            1px solid rgba(255, 255, 255, 0.085);
          border-radius:
            clamp(20px, 2.2vw, 32px);
          background: #070b0d;
          box-shadow:
            0 46px 120px rgba(0, 0, 0, 0.52),
            0 0 0 1px rgba(255, 255, 255, 0.05),
            0 0 110px rgba(100, 225, 255, 0.1),
            0 26px 70px rgba(198, 242, 58, 0.045);
        }

        .jiz-creative-lab-video-frame::after {
          content: '';
          position: absolute;
          z-index: 2;
          inset: 0;
          pointer-events: none;
          border-radius: inherit;
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.085) 0%,
              rgba(255, 255, 255, 0.018) 5%,
              transparent 14%
            );
        }

        .jiz-creative-lab-video {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          background: #070b0d;
        }

        .jiz-creative-lab-loading,
        .jiz-creative-lab-error {
          position: absolute;
          z-index: 3;
          inset: 0;
          display: grid;
          place-items: center;
          padding: 32px;
          background:
            radial-gradient(
              circle at center,
              rgba(20, 34, 37, 0.92),
              rgba(7, 11, 13, 0.98)
            );
          color: var(--color-text-secondary);
          text-align: center;
          font: var(--text-body);
        }

        .jiz-creative-lab-loader {
          display: grid;
          justify-items: center;
          gap: 16px;
        }

        .jiz-creative-lab-loader::before {
          content: '';
          width: 36px;
          height: 36px;
          border:
            2px solid rgba(100, 225, 255, 0.18);
          border-top-color:
            var(--color-accent-secondary);
          border-radius: 50%;
          animation:
            jiz-creative-lab-spin
            900ms linear infinite;
        }

        .jiz-creative-lab-controls {
          display: grid;
          grid-template-columns:
            auto auto auto
            minmax(120px, 1fr)
            auto;
          align-items: center;
          gap: 12px;
          margin-top: 16px;
          padding:
            14px clamp(14px, 2vw, 20px);
          border:
            1px solid rgba(255, 255, 255, 0.075);
          border-radius:
            clamp(16px, 2vw, 22px);
          background:
            rgba(8, 13, 15, 0.56);
          backdrop-filter: blur(16px);
        }

        .jiz-creative-lab-control {
          min-width: 44px;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 15px;
          border:
            1px solid rgba(255, 255, 255, 0.11);
          border-radius: var(--radius-pill);
          background:
            rgba(255, 255, 255, 0.03);
          color: var(--color-text-primary);
          font: var(--text-caption);
          cursor: pointer;
          transition:
            transform var(--motion-fast)
              var(--ease-standard),
            border-color var(--motion-fast)
              var(--ease-standard),
            background var(--motion-fast)
              var(--ease-standard),
            box-shadow var(--motion-fast)
              var(--ease-standard);
        }

        .jiz-creative-lab-control:hover:not(:disabled) {
          transform: translateY(-1px);
          border-color:
            rgba(198, 242, 58, 0.44);
          background:
            rgba(198, 242, 58, 0.055);
          box-shadow:
            0 0 22px rgba(198, 242, 58, 0.1);
        }

        .jiz-creative-lab-control:disabled {
          opacity: 0.42;
          cursor: default;
        }

        .jiz-creative-lab-control:focus-visible,
        .jiz-creative-lab-progress:focus-visible {
          outline:
            2px solid var(--color-accent-primary);
          outline-offset: 3px;
        }

        .jiz-creative-lab-progress {
          width: 100%;
          height: 6px;
          margin: 0;
          border-radius: 999px;
          cursor: pointer;
          accent-color:
            var(--color-accent-primary);
        }

        .jiz-creative-lab-time {
          min-width: 86px;
          color: var(--color-text-muted);
          font: var(--text-hud);
          text-align: right;
          letter-spacing: 0.06em;
        }

        .jiz-creative-lab-caption {
          display: grid;
          grid-template-columns:
            minmax(0, 0.72fr)
            minmax(320px, 1.28fr);
          gap:
            clamp(30px, 6vw, 78px);
          align-items: start;
          margin-top:
            clamp(20px, 2.4vw, 30px);
          padding:
            clamp(34px, 5vw, 62px);
          border:
            1px solid rgba(255, 255, 255, 0.055);
          border-top-color: rgba(255, 255, 255, 0.075);
          border-radius:
            clamp(26px, 3vw, 40px);
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.042) 0%,
              rgba(255, 255, 255, 0.016) 46%,
              rgba(255, 255, 255, 0.008) 100%
            );
          box-shadow:
            0 44px 110px rgba(0, 0, 0, 0.24),
            inset 0 1px 0 rgba(255, 255, 255, 0.055);
          backdrop-filter: blur(18px);
        }

        .jiz-creative-lab-caption-label {
          margin: 0 0 14px;
          color: var(--color-accent-secondary);
          font: var(--text-hud);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .jiz-creative-lab-caption-title {
          margin: 0;
          color: var(--color-text-primary);
          font: var(--text-h3);
          font-size:
            clamp(1.7rem, 2.6vw, 2.7rem);
          line-height: 1.08;
          letter-spacing: -0.045em;
          text-wrap: balance;
        }

        .jiz-creative-lab-caption-copy {
          margin: clamp(22px, 2.4vw, 30px) 0 0;
          max-width: 68ch;
          color: rgba(154, 164, 174, 0.88);
          font: var(--text-body);
          font-size: 0.9375rem;
          line-height: 1.76;
        }

        .jiz-creative-lab-caption-copy strong {
          color: var(--color-text-primary);
          font-weight: 650;
        }

        .jiz-creative-lab-tool-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 24px;
        }

        .jiz-creative-lab-tool {
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          padding: 0 13px;
          border:
            1px solid rgba(100, 225, 255, 0.14);
          border-radius: var(--radius-pill);
          background:
            rgba(100, 225, 255, 0.03);
          color: var(--color-text-secondary);
          font: var(--text-caption);
          transition:
            border-color var(--motion-fast) var(--ease-standard),
            background var(--motion-fast) var(--ease-standard),
            color var(--motion-fast) var(--ease-standard);
        }

        .jiz-creative-lab-tool:hover {
          border-color: rgba(100, 225, 255, 0.26);
          background: rgba(100, 225, 255, 0.055);
          color: rgba(245, 247, 248, 0.9);
        }

        .jiz-creative-lab-method-step {
          transition: background var(--motion-fast) var(--ease-standard);
        }

        .jiz-creative-lab-method-step:hover {
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.05) 0%,
              rgba(26, 35, 35, 0.46) 40%,
              rgba(20, 28, 29, 0.52) 100%
            );
        }

        @keyframes jiz-creative-lab-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 1180px) {
          .jiz-creative-lab-method {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 940px) {
          .jiz-creative-lab-header,
          .jiz-creative-lab-caption {
            grid-template-columns: 1fr;
          }

          .jiz-creative-lab-entry-row {
            grid-template-columns: 1fr;
            gap: 5px;
          }

          .jiz-creative-lab-heading,
          .jiz-creative-lab-intro {
            grid-column: 1;
          }

          .jiz-creative-lab-title {
            max-width: 100%;
          }

          .jiz-creative-lab-intro {
            max-width: 760px;
          }
        }

        @media (max-width: 680px) {
          .jiz-creative-lab {
            padding-inline:
              max(20px, var(--container-pad));
          }

          .jiz-creative-lab-title {
            font-size:
              clamp(2.75rem, 13vw, 4.2rem);
          }

          .jiz-creative-lab-stage {
            padding: 10px;
            border-radius: 26px;
          }

          .jiz-creative-lab-controls {
            grid-template-columns:
              repeat(3, auto)
              minmax(0, 1fr);
          }

          .jiz-creative-lab-time {
            grid-column: 1 / -1;
            min-width: 0;
            text-align: left;
          }

          .jiz-creative-lab-control {
            min-width: 42px;
            min-height: 42px;
            padding-inline: 13px;
          }

          .jiz-creative-lab-method {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .jiz-creative-lab-caption {
            padding:
              clamp(28px, 7vw, 40px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .jiz-creative-lab-method-step,
          .jiz-creative-lab-tool {
            transition: none;
          }

          .jiz-creative-lab-loader::before {
            animation: none;
          }

          .jiz-creative-lab-control {
            transition: none;
          }

          .jiz-creative-lab-control:hover {
            transform: none;
          }
        }
      `), /*#__PURE__*/React.createElement("div", {
    className: "jiz-creative-lab-inner"
  }, /*#__PURE__*/React.createElement("header", {
    className: "jiz-creative-lab-header"
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-creative-lab-eyebrow"
  }, "Creative Lab"), /*#__PURE__*/React.createElement("h2", {
    id: "creative-lab-title",
    className: "jiz-creative-lab-title"
  }, "Where ideas become cinematic prototypes."), /*#__PURE__*/React.createElement("div", {
    className: "jiz-creative-lab-heading"
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-creative-lab-subtitle"
  }, "A space for experimentation\u2014where learning strategy, visual storytelling, generative AI, and rapid production come together to test what is possible.")), /*#__PURE__*/React.createElement("p", {
    className: "jiz-creative-lab-intro"
  }, "The lab is not a gallery of finished answers. It is where concepts are pressure-tested, workflows are accelerated, and emerging tools are directed toward meaningful human experiences.")), /*#__PURE__*/React.createElement("ol", {
    className: "jiz-creative-lab-method",
    "aria-label": "How experimentation reaches delivery"
  }, [['Observe', 'Notice where a workflow strains'], ['Experiment', 'Test the smallest useful version'], ['Prototype', 'Build something that can be judged'], ['Validate', 'Check it against a real constraint'], ['Refine', 'Keep what earned its place'], ['Deliver', 'Move it into production work']].map(function (stage, index) {
    return /*#__PURE__*/React.createElement("li", {
      className: "jiz-creative-lab-method-step",
      key: stage[0]
    }, /*#__PURE__*/React.createElement("span", {
      className: "jiz-creative-lab-method-index"
    }, String(index + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
      className: "jiz-creative-lab-method-name"
    }, stage[0]), /*#__PURE__*/React.createElement("span", {
      className: "jiz-creative-lab-method-note"
    }, stage[1]));
  })), /*#__PURE__*/React.createElement("div", {
    className: "jiz-creative-lab-stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-creative-lab-video-frame"
  }, /*#__PURE__*/React.createElement("video", {
    ref: videoRef,
    className: "jiz-creative-lab-video",
    "data-train-story-video": "ready",
    playsInline: true,
    muted: videoMuted,
    preload: "metadata",
    "aria-label": "The Train Story cinematic AI prototype",
    onLoadedMetadata: function (event) {
      setDuration(Number.isFinite(event.currentTarget.duration) ? event.currentTarget.duration : 0);
    },
    onCanPlay: function () {
      setVideoReady(true);
      setVideoError(false);
    },
    onTimeUpdate: function (event) {
      setCurrentTime(event.currentTarget.currentTime);
    },
    onPlay: function () {
      setVideoPlaying(true);
    },
    onPause: function () {
      setVideoPlaying(false);
    },
    onEnded: function () {
      setVideoPlaying(false);
    },
    onError: function () {
      setVideoReady(false);
      setVideoPlaying(false);
      setVideoError(true);
    }
  }, /*#__PURE__*/React.createElement("source", {
    src: VIDEO_URL,
    type: "video/mp4"
  }), "Your browser does not support embedded video."), !videoReady && !videoError && /*#__PURE__*/React.createElement("div", {
    className: "jiz-creative-lab-loading",
    role: "status",
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-creative-lab-loader"
  }, /*#__PURE__*/React.createElement("span", null, "Preparing The Train Story\u2026"))), videoError && /*#__PURE__*/React.createElement("div", {
    className: "jiz-creative-lab-error",
    role: "alert"
  }, /*#__PURE__*/React.createElement("span", null, "The Train Story could not load. Confirm that the video exists at assets/video/the-train-story.mp4."))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-creative-lab-controls",
    "aria-label": "The Train Story video controls"
  }, /*#__PURE__*/React.createElement("button", {
    className: "jiz-creative-lab-control",
    type: "button",
    disabled: !videoReady || videoError,
    onClick: togglePlayback,
    "aria-label": videoPlaying ? 'Pause The Train Story' : 'Play The Train Story',
    "aria-pressed": videoPlaying
  }, videoPlaying ? 'Pause' : 'Play'), /*#__PURE__*/React.createElement("button", {
    className: "jiz-creative-lab-control",
    type: "button",
    disabled: !videoReady || videoError,
    onClick: restartVideo,
    "aria-label": "Restart The Train Story"
  }, "Restart"), /*#__PURE__*/React.createElement("button", {
    className: "jiz-creative-lab-control",
    type: "button",
    disabled: !videoReady || videoError,
    onClick: toggleMute,
    "aria-label": videoMuted ? 'Unmute The Train Story' : 'Mute The Train Story',
    "aria-pressed": !videoMuted
  }, videoMuted ? 'Sound On' : 'Mute'), /*#__PURE__*/React.createElement("input", {
    ref: progressRef,
    className: "jiz-creative-lab-progress",
    type: "range",
    min: "0",
    max: "100",
    step: "0.1",
    value: progressValue,
    disabled: !videoReady || videoError,
    onChange: handleProgressChange,
    "aria-label": "Seek through The Train Story"
  }), /*#__PURE__*/React.createElement("span", {
    className: "jiz-creative-lab-time",
    "aria-live": "off"
  }, formatTime(currentTime), ' / ', formatTime(duration)))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-creative-lab-caption"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "jiz-creative-lab-caption-label"
  }, "Lab Entry 01 / AI Production"), /*#__PURE__*/React.createElement("h3", {
    className: "jiz-creative-lab-caption-title"
  }, "The Train Story"), /*#__PURE__*/React.createElement("dl", {
    className: "jiz-creative-lab-entry"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-creative-lab-entry-row"
  }, /*#__PURE__*/React.createElement("dt", null, "Challenge"), /*#__PURE__*/React.createElement("dd", null, "Cinematic production normally requires a crew, a budget, and a schedule most projects never get.")), /*#__PURE__*/React.createElement("div", {
    className: "jiz-creative-lab-entry-row"
  }, /*#__PURE__*/React.createElement("dt", null, "Hypothesis"), /*#__PURE__*/React.createElement("dd", null, "Generative tools directed as one connected system \u2014 rather than used in isolation \u2014 could carry a concept from narrative through to finished motion.")), /*#__PURE__*/React.createElement("div", {
    className: "jiz-creative-lab-entry-row"
  }, /*#__PURE__*/React.createElement("dt", null, "Experiment"), /*#__PURE__*/React.createElement("dd", null, "Structure the concept in one model, develop the visual language in another, and translate it into motion in a third, holding creative direction constant throughout.")), /*#__PURE__*/React.createElement("div", {
    className: "jiz-creative-lab-entry-row"
  }, /*#__PURE__*/React.createElement("dt", null, "Result"), /*#__PURE__*/React.createElement("dd", null, "A complete cinematic prototype produced by a single practitioner, start to finish.")), /*#__PURE__*/React.createElement("div", {
    className: "jiz-creative-lab-entry-row"
  }, /*#__PURE__*/React.createElement("dt", null, "Learning"), /*#__PURE__*/React.createElement("dd", null, "The bottleneck was never the tools. It was having a clear enough point of view to direct them.")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "jiz-creative-lab-caption-copy"
  }, /*#__PURE__*/React.createElement("strong", null, "The Train Story"), " is an experimental cinematic prototype created to explore how generative AI can support a complete visual-production workflow. The concept was structured and refined through Claude, developed visually through Gemini, and translated into motion through Omni. Rather than treating each platform as an isolated tool, I directed them as one connected production system\u2014from concept and narrative framing to visual language, scene development, and final animation.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "The film draws inspiration from the architectural tension, psychological scale, and layered reality associated with Christopher Nolan's cinema, particularly", /*#__PURE__*/React.createElement("em", null, " Inception"), ". The objective was not to reproduce that film, but to study how its atmosphere, pacing, visual gravity, and sense of impossible space could inform an original AI-enabled experiment. This piece is one example of how I combine creative direction, systems thinking, storytelling, and emerging technology to move an idea from imagination into a tangible cinematic experience."), /*#__PURE__*/React.createElement("div", {
    className: "jiz-creative-lab-tool-row",
    "aria-label": "Tools selected for this experiment"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jiz-creative-lab-tool"
  }, "Claude \xB7 Concept and narrative"), /*#__PURE__*/React.createElement("span", {
    className: "jiz-creative-lab-tool"
  }, "Gemini \xB7 Visual development"), /*#__PURE__*/React.createElement("span", {
    className: "jiz-creative-lab-tool"
  }, "Omni \xB7 Motion production"), /*#__PURE__*/React.createElement("span", {
    className: "jiz-creative-lab-tool"
  }, "Creative direction \xB7 Jonathan")))), reducedMotion && /*#__PURE__*/React.createElement("p", {
    className: "sr-only"
  }, "Motion preferences are enabled. The video will play only when activated.")));
}
function CapabilityOS() {
  const principles = [{
    title: 'Clarify',
    belief: 'Every complex problem hides a simple truth waiting to be found.',
    approach: 'I start by stripping a challenge to its essential structure — the real audience, the real constraint, the real outcome — before a single screen gets designed.',
    proof: 'Operation: Legacy Unlocked began as a dense compliance mandate; clarifying the real behavior at stake turned it into a mission.'
  }, {
    title: 'Connect',
    belief: 'Learning, technology, and business outcomes are one system, not three departments.',
    approach: 'I map how people, workflows, and platforms actually intersect, so a design decision in one area doesn\u2019t break another.',
    proof: 'Learn@Cox Launch Promo connected a platform migration to the emotional experience of the people living through it.'
  }, {
    title: 'Prototype',
    belief: 'Thinking becomes real the moment you can click it.',
    approach: 'I build fast, tangible versions of an idea early — using AI-native tooling to move at studio speed — so decisions get tested, not debated.',
    proof: 'The Train Story moved from script to a working cinematic prototype in a fraction of a traditional production timeline.'
  }, {
    title: 'Transform',
    belief: 'The goal was never the deliverable. It was the change it makes possible.',
    approach: 'I design for the moment after launch — adoption, behavior change, measurable movement — not just the moment of delivery.',
    proof: 'Every engagement is measured against what actually shifted for the people and the organization, not just what shipped.'
  }];
  const [active, setActive] = React.useState(0);
  const [signal, setSignal] = React.useState(false);
  const p = principles[active];
  const select = i => {
    if (i === active) return;
    setSignal(true);
    setActive(i);
    window.dispatchEvent(new CustomEvent('jiz-signal'));
    setTimeout(() => setSignal(false), 750);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 'clamp(56px, 6vw, 100px)',
      paddingBottom: 'clamp(56px, 6vw, 100px)'
    }
  }, /*#__PURE__*/React.createElement(ChromaKeyVideo, {
    src: "./assets/video/capabilities-bg.mp4",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 0,
      opacity: 0.55
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: '38%',
      background: 'linear-gradient(to top, rgba(198,242,58,0.28), transparent)',
      mixBlendMode: 'screen',
      zIndex: 0,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(11,13,16,0.32)',
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Inside the process"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      color: 'var(--color-text-primary)',
      marginBottom: 16
    }
  }, "The operating system behind the work."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--color-text-secondary)',
      marginBottom: 32,
      maxWidth: 560
    }
  }, "Four principles guide every project \u2014 select one to see how it shapes a decision.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: 24,
      alignItems: 'stretch',
      minWidth: 0,
      position: 'relative'
    }
  }, signal && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      top: `${active * (100 / principles.length) + 100 / principles.length / 2}%`,
      width: '30%',
      height: 2,
      background: 'var(--color-accent-primary)',
      boxShadow: '0 0 12px var(--color-accent-primary)',
      animation: 'jiz-signal-travel 0.7s ease-out forwards',
      zIndex: 2,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      position: 'relative'
    }
  }, signal && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 8,
      top: `${active * (100 / principles.length) + 100 / principles.length / 2}%`,
      width: 4,
      height: 4,
      borderRadius: '50%',
      background: 'var(--color-accent-primary)',
      boxShadow: '0 0 10px var(--color-accent-primary)',
      animation: 'jiz-node-emit 0.6s ease-out forwards',
      zIndex: 2,
      pointerEvents: 'none'
    }
  }), principles.map((pl, i) => /*#__PURE__*/React.createElement("button", {
    key: pl.title,
    onClick: () => select(i),
    style: {
      textAlign: 'left',
      cursor: 'pointer',
      font: 'inherit',
      padding: '18px 20px',
      borderRadius: 'var(--radius-md)',
      position: 'relative',
      overflow: 'hidden',
      background: active === i ? 'rgba(198,242,58,0.1)' : 'rgba(23,26,31,0.5)',
      backdropFilter: 'blur(14px)',
      border: active === i ? '1px solid var(--color-accent-primary)' : '1px solid var(--color-border-subtle)',
      transition: 'all var(--motion-standard) var(--ease-standard)',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    },
    onMouseEnter: e => {
      const s = e.currentTarget.querySelector('.jiz-sweep');
      if (s) {
        s.style.animation = 'none';
        void s.offsetWidth;
        s.style.animation = 'jiz-sweep 0.9s ease-out';
      }
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "jiz-sweep",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(100deg, transparent 40%, rgba(198,242,58,0.14) 50%, transparent 60%)',
      transform: 'translateX(-120%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-hud)',
      color: active === i ? 'var(--color-accent-primary)' : 'var(--color-text-muted)',
      flexShrink: 0,
      position: 'relative'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body)',
      fontWeight: 600,
      fontSize: '0.9375rem',
      color: active === i ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
      position: 'relative'
    }
  }, pl.title)))), /*#__PURE__*/React.createElement("div", {
    key: active,
    style: {
      background: 'rgba(23,26,31,0.4)',
      backdropFilter: 'blur(16px)',
      border: '1px solid var(--color-border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-hud)',
      color: 'var(--color-accent-secondary)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-hud)',
      marginBottom: 10,
      animation: 'jiz-stage-in 0.4s var(--ease-out) both'
    }
  }, "Principle ", String(active + 1).padStart(2, '0'), " \u2014 ", p.title), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)',
      color: 'var(--color-text-primary)',
      marginBottom: 18,
      lineHeight: 1.3,
      animation: 'jiz-stage-in 0.4s var(--ease-out) 0.08s both'
    }
  }, p.belief), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16,
      animation: 'jiz-stage-in 0.4s var(--ease-out) 0.16s both'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-hud)',
      fontSize: '0.6875rem',
      color: 'var(--color-text-muted)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-hud)'
    }
  }, "Approach"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--color-text-secondary)',
      marginTop: 6
    }
  }, p.approach)), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '2px solid var(--color-accent-primary)',
      paddingLeft: 14,
      animation: 'jiz-stage-in 0.4s var(--ease-out) 0.24s both'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-hud)',
      fontSize: '0.6875rem',
      color: 'var(--color-text-muted)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-hud)'
    }
  }, "Proof"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      fontSize: '0.9375rem',
      color: 'var(--color-text-primary)',
      marginTop: 6,
      fontStyle: 'italic'
    }
  }, p.proof))))), /*#__PURE__*/React.createElement("style", null, `@keyframes jiz-signal-travel{0%{opacity:1;width:0}70%{opacity:1}100%{opacity:0;width:34%}}@keyframes jiz-node-emit{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(2.4)}}@keyframes jiz-sweep{to{transform:translateX(120%)}}@keyframes jiz-stage-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){[style*="jiz-signal-travel"],[style*="jiz-node-emit"],[style*="jiz-sweep"],[style*="jiz-stage-in"]{animation:none!important}}`));
}
function FeaturedWork({
  onOpenWork
}) {
  const projects = [{
    id: 'operation-legacy-unlocked',
    number: '01',
    label: 'Featured Case Study',
    title: 'Operation: Legacy Unlocked',
    organization: 'Cox Enterprises',
    mission: 'An immersive leadership learning experience that casts employees as Cox Intelligence Agents, transforming organizational history into a mission-driven digital experience.',
    projectType: 'Learning Experience Design',
    role: 'Learning Experience Designer / Developer',
    focus: 'Game-based learning · Leadership development · Enterprise engagement',
    image: './assets/imagery/olu-featured-work-cover.png',
    imageAlt: 'Operation: Legacy Unlocked immersive learning experience',
    status: 'available',
    statusLabel: 'Case study available',
    actionLabel: 'Open Case Study',
    routeName: 'Operation: Legacy Unlocked',
    atmosphere: 'lime'
  }, {
    id: 'hotelkey-onboarding',
    number: '02',
    label: 'Case Study',
    title: 'HotelKey New Hire Onboarding',
    organization: 'IHG Hotels & Resorts',
    mission: 'Helped new IHG hotel hires build real competence in an unfamiliar property system by teaching its operating logic before its screens.',
    projectType: 'Enterprise Onboarding',
    role: 'Creative Content Specialist / Developer',
    focus: 'Systems adoption · Video learning · Global onboarding',
    image: './assets/imagery/hotelkey-featured-work-cover.png',
    imageAlt: 'HotelKey New Hire Onboarding — IHG property system training experience',
    status: 'available',
    statusLabel: 'Case study available',
    actionLabel: 'Open Case Study',
    routeName: 'HotelKey New Hire Onboarding',
    atmosphere: 'cyan'
  }, {
    id: 'guest-crm-pilot',
    number: '03',
    label: 'Case Study',
    title: 'Guest CRM Pilot',
    organization: 'IHG Hotels & Resorts',
    mission: 'Helped IHG pilot hotel teams adopt a new guest platform with confidence by teaching the operational reasoning behind each workflow.',
    projectType: 'Product Enablement',
    role: 'Learning Experience Strategist / Developer',
    focus: 'Pilot enablement · Performance support · Product adoption',
    image: './assets/imagery/guestcrm-featured-work-cover.png',
    imageAlt: 'Guest CRM Pilot — IHG Hotels & Resorts change enablement',
    status: 'available',
    actionLabel: 'Open Case Study',
    routeName: 'Guest CRM Pilot',
    statusLabel: 'Case study available',
    atmosphere: 'amber'
  }, {
    id: 'workday-learn',
    number: '04',
    label: 'Case Study',
    title: 'Workday Learn Launch',
    organization: 'Cox Enterprises',
    mission: 'Helped Cox Enterprises employees see a new platform as an investment in their growth by leading launch communications with purpose over mechanics.',
    projectType: 'Enterprise Learning',
    role: 'Learning Experience Designer',
    focus: 'Change adoption · Learning systems · Internal communications',
    image: './assets/imagery/workday-featured-work-cover.png',
    imageAlt: 'Workday Learn Launch — Cox Enterprises enablement experience',
    status: 'available',
    statusLabel: 'Case study available',
    actionLabel: 'Open Case Study',
    routeName: 'Workday Learn Launch',
    atmosphere: 'violet'
  }];
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [direction, setDirection] = React.useState('next');
  const [reducedMotion, setReducedMotion] = React.useState(false);
  const touchStartXRef = React.useRef(null);
  React.useEffect(function () {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return undefined;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = function () {
      setReducedMotion(media.matches);
    };
    update();
    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', update);
      return function () {
        media.removeEventListener('change', update);
      };
    }
    if (typeof media.addListener === 'function') {
      media.addListener(update);
      return function () {
        media.removeListener(update);
      };
    }
    return undefined;
  }, []);
  const activeProject = projects[activeIndex];
  const progressPercent = (activeIndex + 1) / projects.length * 100;
  const selectProject = function (nextIndex) {
    const normalized = (nextIndex + projects.length) % projects.length;
    if (normalized === activeIndex) return;
    setDirection(normalized > activeIndex ? 'next' : 'previous');
    setActiveIndex(normalized);
  };
  const showPrevious = function () {
    setDirection('previous');
    setActiveIndex(function (current) {
      return current === 0 ? projects.length - 1 : current - 1;
    });
  };
  const showNext = function () {
    setDirection('next');
    setActiveIndex(function (current) {
      return current === projects.length - 1 ? 0 : current + 1;
    });
  };
  const handleKeyDown = function (event) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showPrevious();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      showNext();
    } else if (event.key === 'Home') {
      event.preventDefault();
      setDirection('previous');
      setActiveIndex(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      setDirection('next');
      setActiveIndex(projects.length - 1);
    }
  };
  const handleTouchStart = function (event) {
    if (!event.touches || event.touches.length === 0) return;
    touchStartXRef.current = event.touches[0].clientX;
  };
  const handleTouchEnd = function (event) {
    if (touchStartXRef.current === null || !event.changedTouches || event.changedTouches.length === 0) return;
    const distance = event.changedTouches[0].clientX - touchStartXRef.current;
    touchStartXRef.current = null;
    if (Math.abs(distance) < 48) return;
    if (distance > 0) showPrevious();else showNext();
  };
  const openActiveProject = function () {
    if (activeProject.status !== 'available' || !activeProject.routeName || typeof onOpenWork !== 'function') return;
    onOpenWork(activeProject.routeName);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: 'jiz-featured-work jiz-featured-work--' + activeProject.atmosphere,
    "data-featured-work": "ready",
    "aria-labelledby": "featured-work-title"
  }, /*#__PURE__*/React.createElement("style", null, `
        .jiz-featured-work{--featured-inner:1360px;position:relative;isolation:isolate;width:100%;overflow:hidden;box-sizing:border-box;padding:clamp(96px,10vw,164px) var(--container-pad) clamp(104px,11vw,176px);color:var(--color-text-primary);background:radial-gradient(ellipse 78% 58% at 8% 14%,rgba(100,225,255,.075),transparent 66%),radial-gradient(ellipse 72% 54% at 92% 80%,rgba(137,105,203,.048),transparent 68%),linear-gradient(180deg,#0a1318 0%,#0c1420 48%,#080f16 100%);transition:background 700ms var(--ease-standard)}
        .jiz-featured-work::before{content:'';position:absolute;z-index:-2;inset:0;pointer-events:none;opacity:.22;background-image:linear-gradient(rgba(255,255,255,.026) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.026) 1px,transparent 1px);background-size:72px 72px;-webkit-mask-image:radial-gradient(ellipse at 50% 44%,#000,transparent 73%);mask-image:radial-gradient(ellipse at 50% 44%,#000,transparent 73%)}
        .jiz-featured-work::after{content:'';position:absolute;z-index:-1;left:50%;bottom:-250px;width:min(96vw,1540px);height:560px;transform:translateX(-50%);border-radius:50%;pointer-events:none;background:radial-gradient(ellipse,rgba(198,242,58,.045),transparent 68%);filter:blur(34px)}
        .jiz-featured-work--lime{background:radial-gradient(ellipse 70% 50% at 14% 22%,rgba(100,225,255,.075),transparent 62%),radial-gradient(ellipse 60% 48% at 86% 74%,rgba(137,105,203,.035),transparent 66%),linear-gradient(180deg,#0a1318 0%,#0c1420 46%,#080f16 100%)}
        .jiz-featured-work--cyan{background:radial-gradient(ellipse 70% 50% at 16% 22%,rgba(100,225,255,.08),transparent 62%),radial-gradient(ellipse 60% 48% at 84% 74%,rgba(137,105,203,.04),transparent 66%),linear-gradient(180deg,#0a1318 0%,#0c1420 46%,#080f16 100%)}
        .jiz-featured-work--amber{background:radial-gradient(ellipse 70% 50% at 18% 22%,rgba(100,225,255,.075),transparent 62%),radial-gradient(ellipse 60% 48% at 84% 74%,rgba(137,105,203,.038),transparent 66%),linear-gradient(180deg,#0a1318 0%,#0c1420 46%,#080f16 100%)}
        .jiz-featured-work--violet{background:radial-gradient(ellipse 70% 50% at 16% 22%,rgba(100,225,255,.08),transparent 62%),radial-gradient(ellipse 60% 48% at 86% 74%,rgba(137,105,203,.048),transparent 66%),linear-gradient(180deg,#0a1318 0%,#0c1420 46%,#080f16 100%)}
        .jiz-featured-inner{position:relative;width:min(100%,var(--featured-inner));margin-inline:auto}
        .jiz-featured-header{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:end;gap:36px;margin-bottom:clamp(54px,7vw,92px)}
        .jiz-featured-heading{max-width:780px}.jiz-featured-eyebrow{margin:0 0 16px;color:var(--color-accent-secondary);font:var(--text-eyebrow);letter-spacing:var(--tracking-eyebrow);text-transform:uppercase}
        .jiz-featured-title{margin:0;color:var(--color-text-primary);font:var(--text-h2);font-size:clamp(3rem,6vw,5.9rem);line-height:.98;letter-spacing:-.055em;text-wrap:balance}
        .jiz-featured-intro{max-width:720px;margin:24px 0 0;color:var(--color-text-secondary);font:var(--text-body-lg);line-height:1.66}
        .jiz-featured-count{min-width:90px;margin:0;padding-bottom:8px;color:var(--color-text-muted);font:var(--text-hud);letter-spacing:.12em;text-align:right;text-transform:uppercase}.jiz-featured-count strong{color:var(--color-accent-primary);font-weight:700}
        .jiz-featured-stage{position:relative;padding:clamp(18px,2vw,28px);border:1px solid rgba(255,255,255,.06);border-radius:clamp(26px,3vw,40px);background:linear-gradient(180deg,rgba(255,255,255,.048) 0%,rgba(255,255,255,.018) 22%,rgba(255,255,255,.007) 100%);box-shadow:0 40px 96px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.07),inset 0 0 0 1px rgba(255,255,255,.012);backdrop-filter:blur(22px)}
        .jiz-featured-stage::before{content:'';position:absolute;z-index:-1;inset:6% 5% -22%;border-radius:50%;pointer-events:none;background:radial-gradient(ellipse,rgba(100,225,255,.1),rgba(198,242,58,.028) 42%,transparent 70%);filter:blur(72px);opacity:.8}
        .jiz-featured-viewport{position:relative;overflow:hidden;border-radius:clamp(20px,2.2vw,32px);outline:none}.jiz-featured-viewport:focus-visible{outline:2px solid var(--color-accent-primary);outline-offset:7px}
        .jiz-featured-project{display:grid;grid-template-columns:minmax(0,1.12fr) minmax(350px,.88fr);min-width:0;overflow:hidden;border:1px solid rgba(255,255,255,.085);border-radius:clamp(20px,2.2vw,32px);background:linear-gradient(180deg,rgba(32,35,36,.97) 0%,rgba(20,24,26,.97) 26%,rgba(10,14,15,.98) 100%);box-shadow:0 34px 84px rgba(0,0,0,.28),0 8px 24px rgba(0,0,0,.18),inset 0 1px 0 rgba(255,255,255,.06),inset 0 0 0 1px rgba(255,255,255,.012);transition:box-shadow 420ms var(--ease-out),border-color 420ms var(--ease-out)}
        .jiz-featured-project:hover{border-color:rgba(255,255,255,.11);box-shadow:0 44px 104px rgba(0,0,0,.32),0 10px 28px rgba(0,0,0,.2),inset 0 1px 0 rgba(255,255,255,.08),inset 0 0 0 1px rgba(255,255,255,.018),0 0 70px rgba(100,225,255,.055)}
        .jiz-featured-project.is-next{animation:jiz-featured-enter-next 620ms var(--ease-out) both}.jiz-featured-project.is-previous{animation:jiz-featured-enter-previous 620ms var(--ease-out) both}
        .jiz-featured-media{position:relative;min-width:0;min-height:580px;overflow:hidden;background:radial-gradient(circle at 50% 38%,rgba(100,225,255,.12),transparent 44%),linear-gradient(145deg,#152225,#080c0d 74%)}
        .jiz-featured-image{position:absolute;inset:0;display:block;width:100%;height:100%;object-fit:cover;object-position:center;transform:scale(1.012);transition:transform 860ms var(--ease-out),filter 860ms var(--ease-out)}.jiz-featured-project:hover .jiz-featured-image{transform:scale(1.032);filter:brightness(1.05) saturate(1.03) contrast(1.015)}
        .jiz-featured-media::after{content:'';position:absolute;z-index:2;inset:0;pointer-events:none;background:linear-gradient(90deg,transparent 54%,rgba(7,10,11,.32)),linear-gradient(180deg,rgba(255,255,255,.028) 0%,transparent 12%,transparent 56%,rgba(7,9,10,.44));transition:opacity 520ms var(--ease-out)}
        .jiz-featured-media::before{content:'';position:absolute;z-index:3;inset:0;pointer-events:none;opacity:0;background:linear-gradient(112deg,transparent 34%,rgba(255,255,255,.055) 50%,transparent 66%);transition:opacity 620ms var(--ease-out)}
        .jiz-featured-project:hover .jiz-featured-media::before{opacity:1}
        .jiz-featured-badge{position:absolute;z-index:3;left:24px;top:24px;display:inline-flex;align-items:center;gap:9px;min-height:38px;padding:0 15px;border:1px solid rgba(255,255,255,.14);border-radius:var(--radius-pill);background:rgba(7,10,11,.74);color:var(--color-text-primary);font:var(--text-caption);backdrop-filter:blur(14px)}.jiz-featured-badge::before{content:'';width:7px;height:7px;border-radius:50%;background:var(--color-accent-primary);box-shadow:0 0 16px rgba(198,242,58,.42)}
        .jiz-featured-placeholder{position:absolute;inset:0;display:grid;place-items:center;padding:clamp(36px,6vw,82px);text-align:center}.jiz-featured-placeholder-grid{position:absolute;inset:0;pointer-events:none;opacity:.22;background-image:linear-gradient(rgba(100,225,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(100,225,255,.12) 1px,transparent 1px);background-size:54px 54px;-webkit-mask-image:radial-gradient(circle at center,#000,transparent 72%);mask-image:radial-gradient(circle at center,#000,transparent 72%)}
        .jiz-featured-placeholder-inner{position:relative;z-index:1;max-width:540px}.jiz-featured-placeholder-mark{display:block;margin-bottom:18px;color:var(--color-accent-secondary);font:var(--text-hud);letter-spacing:.13em;text-transform:uppercase}.jiz-featured-placeholder-title{margin:0;color:var(--color-text-primary);font:var(--text-h2);font-size:clamp(2rem,4vw,4rem);line-height:1.02;letter-spacing:-.05em;text-wrap:balance}
        .jiz-featured-content{display:flex;min-width:0;flex-direction:column;justify-content:center;padding:clamp(44px,5vw,76px)}
        .jiz-featured-case-label{margin:0 0 15px;color:var(--color-accent-primary);font:var(--text-hud);font-weight:700;letter-spacing:.12em;text-transform:uppercase;animation:jiz-featured-content-in 500ms var(--ease-out) both}
        .jiz-featured-project-title{margin:0;color:var(--color-text-primary);font:var(--text-h3);font-size:clamp(2.2rem,3.6vw,4rem);line-height:1.01;letter-spacing:-.052em;text-wrap:balance;animation:jiz-featured-content-in 520ms var(--ease-out) 70ms both}
        .jiz-featured-mission{margin:24px 0 0;color:var(--color-text-secondary);font:var(--text-body);font-size:clamp(1rem,1.3vw,1.12rem);line-height:1.76;animation:jiz-featured-content-in 540ms var(--ease-out) 130ms both}
        .jiz-featured-metadata{display:grid;grid-template-columns:1fr 1fr;gap:22px 30px;margin-top:38px;padding:30px 0;border-top:1px solid rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.06);animation:jiz-featured-content-in 560ms var(--ease-out) 190ms both}
        .jiz-featured-meta-label{display:block;margin-bottom:8px;color:var(--color-accent-secondary);font:var(--text-hud);font-size:.625rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase}.jiz-featured-meta-value{display:block;color:rgba(245,247,248,.9);font:var(--text-caption);font-size:.8125rem;font-weight:550;line-height:1.48}
        .jiz-featured-action-row{display:flex;align-items:center;gap:18px;margin-top:34px;animation:jiz-featured-content-in 580ms var(--ease-out) 250ms both}.jiz-featured-action{min-height:52px;display:inline-flex;align-items:center;justify-content:center;padding:0 26px;border:0;border-radius:var(--radius-pill);background:var(--color-accent-primary);color:#080b0c;font:var(--text-button);font-weight:700;cursor:pointer;transition:transform var(--motion-fast) var(--ease-standard),background var(--motion-fast) var(--ease-standard),box-shadow var(--motion-fast) var(--ease-standard)}
        .jiz-featured-action:hover:not(:disabled){transform:translateY(-2px);background:var(--color-accent-primary-hover);box-shadow:0 0 30px rgba(198,242,58,.22)}.jiz-featured-action:disabled{border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.035);color:var(--color-text-muted);cursor:default;box-shadow:none}.jiz-featured-status{color:var(--color-text-muted);font:var(--text-caption)}
        .jiz-featured-navigation{display:grid;grid-template-columns:58px minmax(0,1fr) 58px;align-items:center;gap:clamp(18px,3vw,34px);margin-top:clamp(30px,4vw,48px)}.jiz-featured-control{width:58px;height:58px;display:inline-grid;place-items:center;padding:0;border:1px solid rgba(255,255,255,.13);border-radius:50%;background:rgba(255,255,255,.028);color:var(--color-text-primary);font-size:1.15rem;cursor:pointer;backdrop-filter:blur(12px);transition:transform var(--motion-fast) var(--ease-standard),border-color var(--motion-fast) var(--ease-standard),background var(--motion-fast) var(--ease-standard),box-shadow var(--motion-fast) var(--ease-standard)}
        .jiz-featured-control:hover{transform:translateY(-2px);border-color:rgba(198,242,58,.4);background:rgba(198,242,58,.045);box-shadow:0 8px 22px rgba(0,0,0,.24),inset 0 1px 0 rgba(255,255,255,.06),0 0 20px rgba(198,242,58,.08)}
        .jiz-featured-control:active{transform:translateY(0)}
        .jiz-featured-progress{position:relative;height:6px;overflow:hidden;border-radius:999px;background:rgba(255,255,255,.07);box-shadow:inset 0 1px 2px rgba(0,0,0,.24)}.jiz-featured-progress-fill{display:block;width:0;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--color-accent-secondary),var(--color-accent-primary));box-shadow:0 0 16px rgba(198,242,58,.16);transition:width 620ms var(--ease-out)}.jiz-featured-progress-steps{position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));pointer-events:none}.jiz-featured-progress-step{border-right:1px solid rgba(9,12,13,.42)}.jiz-featured-progress-step:last-child{border-right:0}
        .jiz-featured-action:focus-visible,.jiz-featured-control:focus-visible,.jiz-featured-viewport:focus-visible{outline:2px solid var(--color-accent-primary);outline-offset:4px}
        @keyframes jiz-featured-enter-next{from{opacity:0;transform:translateX(34px)}to{opacity:1;transform:translateX(0)}}@keyframes jiz-featured-enter-previous{from{opacity:0;transform:translateX(-34px)}to{opacity:1;transform:translateX(0)}}@keyframes jiz-featured-content-in{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        @media(max-width:1120px){.jiz-featured-project{grid-template-columns:minmax(0,1fr) minmax(320px,.92fr)}.jiz-featured-media{min-height:520px}.jiz-featured-content{padding:clamp(36px,4vw,52px)}}
        @media(max-width:900px){.jiz-featured-header{grid-template-columns:1fr;gap:20px}.jiz-featured-count{text-align:left}.jiz-featured-project{grid-template-columns:1fr}.jiz-featured-media{min-height:0;aspect-ratio:16/10}.jiz-featured-media::after{background:linear-gradient(180deg,transparent 62%,rgba(7,9,10,.38))}.jiz-featured-content{padding:clamp(34px,6vw,58px)}}
        @media(max-width:680px){.jiz-featured-work{padding-inline:max(20px,var(--container-pad))}.jiz-featured-title{font-size:clamp(2.7rem,13vw,4.1rem)}.jiz-featured-stage{padding:10px;border-radius:24px}.jiz-featured-media{aspect-ratio:4/3}.jiz-featured-badge{left:15px;top:15px}.jiz-featured-metadata{grid-template-columns:1fr;gap:18px}.jiz-featured-action-row{align-items:flex-start;flex-direction:column}.jiz-featured-navigation{grid-template-columns:50px minmax(0,1fr) 50px;gap:12px}.jiz-featured-control{width:50px;height:50px}}
        @media(prefers-reduced-motion:reduce){.jiz-featured-project:hover .jiz-featured-image{transform:scale(1.012);filter:none}.jiz-featured-project:hover .jiz-featured-media::before{opacity:0}.jiz-featured-work,.jiz-featured-project,.jiz-featured-image,.jiz-featured-case-label,.jiz-featured-project-title,.jiz-featured-mission,.jiz-featured-metadata,.jiz-featured-action-row,.jiz-featured-action,.jiz-featured-control,.jiz-featured-progress-fill{animation:none!important;transition:none!important}.jiz-featured-project:hover .jiz-featured-image,.jiz-featured-action:hover,.jiz-featured-control:hover{transform:none}}
      `), /*#__PURE__*/React.createElement("div", {
    className: "jiz-featured-inner"
  }, /*#__PURE__*/React.createElement("header", {
    className: "jiz-featured-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-featured-heading"
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-featured-eyebrow"
  }, "Featured Work / Proof"), /*#__PURE__*/React.createElement("h2", {
    id: "featured-work-title",
    className: "jiz-featured-title"
  }, "Ideas made real."), /*#__PURE__*/React.createElement("p", {
    className: "jiz-featured-intro"
  }, "Selected work across enterprise learning, cinematic storytelling, systems adoption, and AI-enabled production\u2014designed to move people from complexity to confident action.")), /*#__PURE__*/React.createElement("p", {
    className: "jiz-featured-count",
    "aria-live": "polite",
    "aria-atomic": "true"
  }, /*#__PURE__*/React.createElement("strong", null, String(activeIndex + 1).padStart(2, '0')), ' / ', String(projects.length).padStart(2, '0'))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-featured-stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-featured-viewport",
    role: "region",
    "aria-roledescription": "carousel",
    "aria-label": "Featured project carousel",
    tabIndex: 0,
    onKeyDown: handleKeyDown,
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd
  }, /*#__PURE__*/React.createElement("article", {
    key: activeProject.id,
    className: 'jiz-featured-project ' + (reducedMotion ? '' : direction === 'next' ? 'is-next' : 'is-previous'),
    "data-project-card": activeProject.id,
    "aria-labelledby": activeProject.id + '-title'
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-featured-media"
  }, activeProject.image ? /*#__PURE__*/React.createElement("img", {
    className: "jiz-featured-image",
    src: activeProject.image,
    alt: activeProject.imageAlt,
    loading: activeIndex === 0 ? 'eager' : 'lazy'
  }) : /*#__PURE__*/React.createElement("div", {
    className: "jiz-featured-placeholder"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-featured-placeholder-grid",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "jiz-featured-placeholder-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jiz-featured-placeholder-mark"
  }, "Case study in development"), /*#__PURE__*/React.createElement("h3", {
    className: "jiz-featured-placeholder-title"
  }, activeProject.title))), /*#__PURE__*/React.createElement("span", {
    className: "jiz-featured-badge"
  }, activeProject.statusLabel)), /*#__PURE__*/React.createElement("div", {
    className: "jiz-featured-content"
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-featured-case-label"
  }, activeProject.label, ' · ', activeProject.number), /*#__PURE__*/React.createElement("h3", {
    id: activeProject.id + '-title',
    className: "jiz-featured-project-title"
  }, activeProject.title), /*#__PURE__*/React.createElement("p", {
    className: "jiz-featured-mission"
  }, activeProject.mission), /*#__PURE__*/React.createElement("div", {
    className: "jiz-featured-metadata"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "jiz-featured-meta-label"
  }, "Project Type"), /*#__PURE__*/React.createElement("span", {
    className: "jiz-featured-meta-value"
  }, activeProject.projectType)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "jiz-featured-meta-label"
  }, "Role"), /*#__PURE__*/React.createElement("span", {
    className: "jiz-featured-meta-value"
  }, activeProject.role)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "jiz-featured-meta-label"
  }, "Organization"), /*#__PURE__*/React.createElement("span", {
    className: "jiz-featured-meta-value"
  }, activeProject.organization)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "jiz-featured-meta-label"
  }, "Focus"), /*#__PURE__*/React.createElement("span", {
    className: "jiz-featured-meta-value"
  }, activeProject.focus))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-featured-action-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "jiz-featured-action",
    type: "button",
    disabled: activeProject.status !== 'available',
    onClick: openActiveProject
  }, activeProject.actionLabel, activeProject.status === 'available' ? ' →' : ''), /*#__PURE__*/React.createElement("span", {
    className: "jiz-featured-status"
  }, activeProject.statusLabel))))), /*#__PURE__*/React.createElement("nav", {
    className: "jiz-featured-navigation",
    "aria-label": "Featured project navigation"
  }, /*#__PURE__*/React.createElement("button", {
    className: "jiz-featured-control",
    type: "button",
    onClick: showPrevious,
    "aria-label": "Show previous featured project",
    title: "Previous project"
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2190")), /*#__PURE__*/React.createElement("div", {
    className: "jiz-featured-progress",
    role: "progressbar",
    "aria-label": "Featured project progress",
    "aria-valuemin": "1",
    "aria-valuemax": projects.length,
    "aria-valuenow": activeIndex + 1
  }, /*#__PURE__*/React.createElement("span", {
    className: "jiz-featured-progress-fill",
    style: {
      width: progressPercent + '%'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "jiz-featured-progress-steps",
    "aria-hidden": "true"
  }, projects.map(function (project) {
    return /*#__PURE__*/React.createElement("span", {
      key: project.id,
      className: "jiz-featured-progress-step"
    });
  }))), /*#__PURE__*/React.createElement("button", {
    className: "jiz-featured-control",
    type: "button",
    onClick: showNext,
    "aria-label": "Show next featured project",
    title: "Next project"
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"))), /*#__PURE__*/React.createElement("p", {
    className: "sr-only",
    role: "status",
    "aria-live": "polite"
  }, "Showing ", activeProject.title, ", project ", activeIndex + 1, " of ", projects.length, "."))));
}
function Insights() {
  const posts = [{
    label: 'AI + PRACTICE',
    title: 'AI changes the workflow—not the responsibility.',
    summary: 'The value is not faster output alone. It is using speed to test more thoughtfully, compare alternatives, and protect the quality of the final experience.',
    takeaway: 'Speed expands the options. Judgment protects the outcome.'
  }, {
    label: 'DESIGN JUDGMENT',
    title: 'Scenarios should build judgment, not reward guessing.',
    summary: 'Meaningful practice gives people context, consequence, and room to make a defensible decision—not merely select the answer the designer prefers.',
    takeaway: 'Practice should strengthen decisions—not test compliance.'
  }, {
    label: 'SYSTEMS THINKING',
    title: 'The learning experience is only one part of the system.',
    summary: 'Adoption depends on tools, incentives, communication, leadership, workflow, and reinforcement aligning around the same behavioral outcome.',
    takeaway: 'Adoption succeeds when the entire environment supports the behavior.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "jiz-insights",
    "data-insights": "ready",
    "aria-labelledby": "jiz-insights-title"
  }, /*#__PURE__*/React.createElement("style", null, `
        .jiz-insights {
          position: relative;
          isolation: isolate;
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding:
            clamp(96px, 10vw, 156px)
            var(--container-pad)
            clamp(104px, 11vw, 172px);
          color: var(--color-text-primary);
          background:
            radial-gradient(
              ellipse 72% 52% at 18% 44%,
              rgba(100, 225, 255, 0.115),
              transparent 66%
            ),
            radial-gradient(
              ellipse 62% 48% at 78% 78%,
              rgba(198, 242, 58, 0.062),
              transparent 68%
            ),
            linear-gradient(
              180deg,
              #2b3c3e 0%,
              #253436 46%,
              #1d2a2c 100%
            );
        }

        .jiz-insights::before {
          content: '';
          position: absolute;
          z-index: -2;
          inset: 0;
          pointer-events: none;
          opacity: 0.14;
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.032) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.032) 1px,
              transparent 1px
            );
          background-size: 78px 78px;
          -webkit-mask-image:
            radial-gradient(
              ellipse at 50% 46%,
              #000,
              transparent 74%
            );
          mask-image:
            radial-gradient(
              ellipse at 50% 46%,
              #000,
              transparent 74%
            );
        }

        .jiz-insights::after {
          content: '';
          position: absolute;
          z-index: -1;
          left: -12%;
          top: 8%;
          width: min(70vw, 1040px);
          height: min(70vw, 1040px);
          border-radius: 50%;
          pointer-events: none;
          background:
            radial-gradient(
              circle,
              rgba(100, 225, 255, 0.18) 0%,
              rgba(100, 225, 255, 0.07) 34%,
              rgba(198, 242, 58, 0.025) 50%,
              transparent 72%
            );
          filter: blur(58px);
          opacity: 0.9;
        }

        .jiz-insights-inner {
          position: relative;
          z-index: 1;
          width: min(100%, 1360px);
          margin-inline: auto;
        }

        .jiz-insights-header {
          max-width: 760px;
          margin-bottom:
            clamp(52px, 7vw, 84px);
        }

        .jiz-insights-eyebrow {
          margin: 0 0 16px;
          color: var(--color-accent-primary);
          font: var(--text-eyebrow);
          letter-spacing: var(--tracking-eyebrow);
          text-transform: uppercase;
        }

        .jiz-insights-title {
          margin: 0;
          color: var(--color-text-primary);
          font: var(--text-h2);
          font-size:
            clamp(3rem, 6vw, 5.9rem);
          line-height: 0.98;
          letter-spacing: -0.055em;
          text-wrap: balance;
        }

        .jiz-insights-subtitle {
          max-width: 720px;
          margin: 24px 0 0;
          color: var(--color-text-secondary);
          font: var(--text-body-lg);
          line-height: 1.66;
        }

        .jiz-insights-stage {
          position: relative;
          display: grid;
          grid-template-columns:
            minmax(390px, 0.92fr)
            minmax(0, 1.08fr);
          gap:
            clamp(34px, 6vw, 84px);
          align-items: stretch;
          min-width: 0;
        }

        .jiz-insights-portrait-column {
          position: relative;
          min-width: 0;
          height: 100%;
          min-height: 0;
        }

        .jiz-insights-portrait-environment {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 100%;
          overflow: visible;
          isolation: isolate;
        }

        .jiz-insights-portrait-glow {
          position: absolute;
          z-index: 0;
          left: -38%;
          top: -10%;
          width: 176%;
          height: 126%;
          pointer-events: none;
          border-radius: 50%;
          background:
            radial-gradient(
              ellipse at 52% 44%,
              rgba(100, 225, 255, 0.28) 0%,
              rgba(100, 225, 255, 0.14) 24%,
              rgba(100, 225, 255, 0.07) 42%,
              rgba(198, 242, 58, 0.035) 58%,
              transparent 76%
            );
          filter: blur(62px);
          opacity: 0.96;
        }

        .jiz-insights-portrait-haze {
          position: absolute;
          z-index: 3;
          left: -42%;
          right: -48%;
          bottom: -9%;
          height: 46%;
          pointer-events: none;
          background:
            radial-gradient(
              ellipse at 42% 100%,
              rgba(198, 242, 58, 0.24) 0%,
              rgba(100, 225, 255, 0.09) 38%,
              transparent 72%
            ),
            linear-gradient(
              to top,
              rgba(198, 242, 58, 0.14),
              rgba(100, 225, 255, 0.055) 48%,
              transparent 100%
            );
          filter: blur(26px);
          mix-blend-mode: screen;
          opacity: 0.88;
        }

        .jiz-insights-portrait-side-fade {
          position: absolute;
          z-index: 4;
          left: -34%;
          right: -44%;
          top: -6%;
          bottom: -8%;
          pointer-events: none;
          background:
            radial-gradient(
              ellipse at 43% 46%,
              transparent 0%,
              transparent 44%,
              rgba(43, 61, 63, 0.16) 64%,
              rgba(43, 61, 63, 0.54) 82%,
              rgba(43, 61, 63, 0.88) 100%
            ),
            linear-gradient(
              180deg,
              transparent 0%,
              transparent 72%,
              rgba(34, 49, 51, 0.28) 86%,
              rgba(34, 49, 51, 0.78) 100%
            );
          filter: blur(12px);
        }

        .jiz-insights-portrait {
          position: absolute;
          z-index: 2;
          left: 47%;
          bottom: -5%;
          width:
            clamp(540px, 47vw, 760px);
          height: 112%;
          max-width: none;
          max-height: none;
          object-fit: contain;
          object-position: center bottom;
          transform:
            translateX(-50%)
            scale(1.18);
          transform-origin: center bottom;
          opacity: 0.98;
          pointer-events: none;
          filter:
            drop-shadow(
              -22px 8px 46px
              rgba(100, 225, 255, 0.20)
            )
            drop-shadow(
              0 24px 58px
              rgba(0, 0, 0, 0.28)
            );
          -webkit-mask-image:
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.96) 0%,
              #000 68%,
              rgba(0, 0, 0, 0.84) 82%,
              transparent 100%
            ),
            linear-gradient(
              to right,
              transparent 0%,
              rgba(0, 0, 0, 0.55) 10%,
              #000 24%,
              #000 74%,
              rgba(0, 0, 0, 0.5) 90%,
              transparent 100%
            );
          -webkit-mask-composite:
            source-in;
          mask-image:
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.96) 0%,
              #000 68%,
              rgba(0, 0, 0, 0.84) 82%,
              transparent 100%
            ),
            linear-gradient(
              to right,
              transparent 0%,
              rgba(0, 0, 0, 0.55) 10%,
              #000 24%,
              #000 74%,
              rgba(0, 0, 0, 0.5) 90%,
              transparent 100%
            );
          mask-composite: intersect;
        }

        .jiz-insights-portrait-copy {
          position: absolute;
          z-index: 5;
          left: clamp(6px, 1vw, 18px);
          bottom: clamp(18px, 3vw, 34px);
          max-width: 250px;
        }

        .jiz-insights-portrait-label {
          display: block;
          margin-bottom: 10px;
          color: var(--color-accent-primary);
          font: var(--text-hud);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .jiz-insights-portrait-note {
          margin: 0;
          color: rgba(247, 248, 250, 0.84);
          font: var(--text-caption);
          line-height: 1.55;
        }

        .jiz-insights-cards {
          display: grid;
          grid-template-rows:
            repeat(3, minmax(230px, 1fr));
          gap: 24px;
          min-width: 0;
          height: 100%;
          align-self: stretch;
        }

        .jiz-insight-card-wrap {
          min-width: 0;
          height: 100%;
        }

        .jiz-insight-card {
          position: relative;
          display: grid;
          grid-template-columns:
            minmax(0, 0.92fr)
            minmax(220px, 0.78fr);
          gap:
            clamp(24px, 4vw, 48px);
          align-items: center;
          min-width: 0;
          height: 100%;
          box-sizing: border-box;
          padding:
            clamp(28px, 3.4vw, 42px);
          overflow: hidden;
          border:
            1px solid rgba(255, 255, 255, 0.075);
          border-radius:
            clamp(20px, 2.2vw, 30px);
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.062) 0%,
              rgba(255, 255, 255, 0.03) 26%,
              rgba(255, 255, 255, 0.018) 100%
            );
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.055),
            0 20px 52px rgba(0, 0, 0, 0.14);
          backdrop-filter: blur(18px);
          transition:
            transform var(--motion-fast)
              var(--ease-standard),
            border-color var(--motion-fast)
              var(--ease-standard),
            box-shadow var(--motion-fast)
              var(--ease-standard),
            background var(--motion-fast)
              var(--ease-standard);
        }

        .jiz-insight-card::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0;
          background:
            linear-gradient(
              112deg,
              transparent 24%,
              rgba(198, 242, 58, 0.08) 50%,
              transparent 76%
            );
          transform: translateX(-72%);
          transition:
            opacity 280ms ease,
            transform 720ms var(--ease-standard);
        }

        .jiz-insight-card:hover,
        .jiz-insight-card:focus-within {
          border-color:
            rgba(255, 255, 255, 0.135);
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.078) 0%,
              rgba(255, 255, 255, 0.038) 26%,
              rgba(255, 255, 255, 0.022) 100%
            );
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.07),
            0 24px 58px rgba(0, 0, 0, 0.17);
        }

        .jiz-insight-card:hover::before,
        .jiz-insight-card:focus-within::before {
          opacity: 0;
        }

        .jiz-insight-card-main,
        .jiz-insight-card-secondary {
          position: relative;
          z-index: 1;
          min-width: 0;
        }

        .jiz-insight-card-index {
          display: block;
          margin-bottom: 18px;
          color: rgba(255, 255, 255, 0.58);
          font: var(--text-hud);
          letter-spacing: 0.13em;
        }

        .jiz-insight-card-label {
          display: block;
          color: var(--color-accent-secondary);
          font: var(--text-hud);
          letter-spacing: var(--tracking-hud);
        }

        .jiz-insight-card-title {
          margin: 14px 0 0;
          max-width: 22ch;
          color: var(--color-text-primary);
          font: var(--text-h3);
          font-size:
            clamp(1.5rem, 2.3vw, 2.25rem);
          line-height: 1.1;
          letter-spacing: -0.038em;
          text-wrap: balance;
        }

        .jiz-insight-card-summary {
          margin: 0;
          max-width: 46ch;
          color: rgba(214, 221, 226, 0.9);
          font: var(--text-body);
          font-size: 0.9375rem;
          line-height: 1.74;
        }

        .jiz-insight-card-takeaway {
          margin: 24px 0 0;
          max-width: 44ch;
          padding-left: 16px;
          border-left:
            1px solid rgba(198, 242, 58, 0.55);
          color: rgba(245, 247, 248, 0.92);
          font: var(--text-caption);
          font-size: 0.8125rem;
          font-style: italic;
          line-height: 1.62;
        }

        @media (max-width: 1120px) {
          .jiz-insights-stage {
            grid-template-columns:
              minmax(330px, 0.82fr)
              minmax(0, 1.18fr);
            gap: 34px;
          }

          .jiz-insight-card {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .jiz-insights-portrait {
            left: 45%;
            width:
              clamp(460px, 47vw, 650px);
          }
        }

        @media (max-width: 900px) {
          .jiz-insights-stage {
            grid-template-columns: 1fr;
          }

          .jiz-insights-portrait-column {
            min-height: 650px;
          }

          .jiz-insights-portrait-environment {
            height: 650px;
            min-height: 650px;
          }

          .jiz-insights-portrait {
            left: 50%;
            width:
              min(650px, 88vw);
          }

          .jiz-insights-cards {
            grid-template-rows: none;
            grid-template-columns: 1fr;
          }

          .jiz-insight-card {
            min-height: 250px;
            grid-template-columns:
              minmax(0, 0.95fr)
              minmax(220px, 0.85fr);
          }
        }

        @media (max-width: 680px) {
          .jiz-insights {
            padding-inline:
              max(20px, var(--container-pad));
          }

          .jiz-insights-title {
            font-size:
              clamp(2.75rem, 13vw, 4.2rem);
          }

          .jiz-insights-portrait-column {
            min-height: 560px;
          }

          .jiz-insights-portrait-environment {
            height: 560px;
            min-height: 560px;
          }

          .jiz-insights-portrait {
            left: 50%;
            bottom: -7%;
            width:
              min(620px, 118vw);
            height: 112%;
            transform:
              translateX(-50%)
              scale(1.18);
          }

          .jiz-insights-portrait-copy {
            max-width: 215px;
          }

          .jiz-insight-card-title,
          .jiz-insight-card-summary,
          .jiz-insight-card-takeaway {
            max-width: 100%;
          }

          .jiz-insight-card {
            min-height: auto;
            grid-template-columns: 1fr;
            gap: 20px;
            padding:
              clamp(26px, 7vw, 34px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .jiz-creative-lab-method-step,
          .jiz-creative-lab-tool {
            transition: none;
          }

          .jiz-insight-card,
          .jiz-insight-card::before {
            transition: none;
          }

          .jiz-insight-card:hover,
          .jiz-insight-card:focus-within {
            transform: none;
          }
        }
      `), /*#__PURE__*/React.createElement("div", {
    className: "jiz-insights-inner"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("header", {
    className: "jiz-insights-header"
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-insights-eyebrow"
  }, "Insights"), /*#__PURE__*/React.createElement("h2", {
    id: "jiz-insights-title",
    className: "jiz-insights-title"
  }, "Thinking out loud."), /*#__PURE__*/React.createElement("p", {
    className: "jiz-insights-subtitle"
  }, "Three principles shaping how I use AI, design judgment, and systems thinking to create experiences people can trust, understand, and adopt."))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-insights-stage"
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 80,
    style: {
      minWidth: 0,
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-insights-portrait-column"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-insights-portrait-environment"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-insights-portrait-glow",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement(ChromaKeyVideo, {
    src: "./assets/video/Jonathan_Smiling.mp4",
    className: "jiz-insights-portrait"
  }), /*#__PURE__*/React.createElement("div", {
    className: "jiz-insights-portrait-haze",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "jiz-insights-portrait-side-fade",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "jiz-insights-portrait-copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jiz-insights-portrait-label"
  }, "Perspective in practice"), /*#__PURE__*/React.createElement("p", {
    className: "jiz-insights-portrait-note"
  }, "Technology becomes meaningful when judgment, context, and human experience remain part of the same system."))))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-insights-cards"
  }, posts.map(function (post, index) {
    return /*#__PURE__*/React.createElement(Reveal, {
      key: post.title,
      delay: 140 + index * 90,
      style: {
        minWidth: 0,
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "jiz-insight-card-wrap"
    }, /*#__PURE__*/React.createElement("article", {
      className: "jiz-insight-card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "jiz-insight-card-main"
    }, /*#__PURE__*/React.createElement("span", {
      className: "jiz-insight-card-index"
    }, String(index + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
      className: "jiz-insight-card-label"
    }, post.label), /*#__PURE__*/React.createElement("h3", {
      className: "jiz-insight-card-title"
    }, post.title)), /*#__PURE__*/React.createElement("div", {
      className: "jiz-insight-card-secondary"
    }, /*#__PURE__*/React.createElement("p", {
      className: "jiz-insight-card-summary"
    }, post.summary), /*#__PURE__*/React.createElement("p", {
      className: "jiz-insight-card-takeaway"
    }, post.takeaway)))));
  })))));
}
function LetsBuild({
  onExploreWork
}) {
  const PROJECT_TYPES = ['Learning Experience', 'AI Strategy', 'Creative Production', 'Enterprise Transformation', 'Product Adoption', 'Consulting'];
  const TIMELINES = ['Exploring', 'Within 30 Days', '1–3 Months', '3+ Months'];
  const BUDGETS = ['Not Established', 'Under $10k', '$10k–25k', '$25k–50k', '$50k+'];
  const REFERRALS = ['LinkedIn', 'Referral', 'Google Search', 'Previous Colleague', 'Conference or Event', 'Other'];
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    org: '',
    types: [],
    detail: '',
    timeline: '',
    budget: '',
    referral: ''
  });
  const [formStatus, setFormStatus] = React.useState('idle');
  const [formMessage, setFormMessage] = React.useState('');
  const statusRef = React.useRef(null);
  const inFlightRef = React.useRef(false);
  const mountedRef = React.useRef(true);
  React.useEffect(() => () => {
    mountedRef.current = false;
  }, []);
  React.useEffect(() => {
    if ((formStatus === 'success' || formStatus === 'error') && statusRef.current) statusRef.current.focus();
  }, [formStatus]);
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  const toggleType = t => setForm(f => ({
    ...f,
    types: f.types.includes(t) ? f.types.filter(x => x !== t) : f.types.concat(t)
  }));
  const handleSubmit = async function (event) {
    event.preventDefault();
    if (inFlightRef.current) return;
    const formEl = event.currentTarget;
    if (form.types.length === 0) {
      setFormStatus('error');
      setFormMessage('Select at least one project type so I can route your inquiry correctly.');
      return;
    }
    const formData = new FormData(formEl);
    inFlightRef.current = true;
    setFormStatus('submitting');
    setFormMessage('');
    formData.append('access_key', 'be51b404-7cd3-43c5-afaf-5b52369eb150');
    formData.append('subject', 'New Portfolio Project Inquiry');
    formData.append('from_name', 'Jonathan Zamarripa Portfolio');
    let ok = false;
    let notice = 'Something interrupted the submission. Please try again.';
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      let data = null;
      try {
        data = await response.json();
      } catch (parseError) {
        data = null;
      }
      if (response.ok && data && data.success === true) {
        ok = true;
      } else if (data && typeof data.message === 'string' && data.message.length < 160) {
        notice = data.message;
      }
    } catch (networkError) {
      notice = 'The request could not reach the server. Check your connection and try again.';
    } finally {
      inFlightRef.current = false;
      if (mountedRef.current) {
        if (ok) {
          setFormStatus('success');
          setFormMessage('Your inquiry is on its way. I’ll be in touch soon.');
          formEl.reset();
          setForm({
            name: '',
            email: '',
            org: '',
            types: [],
            detail: '',
            timeline: '',
            budget: '',
            referral: ''
          });
        } else {
          setFormStatus('error');
          setFormMessage(notice);
        }
      }
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "jiz-build",
    "data-lets-build": "ready",
    "aria-labelledby": "jiz-build-title"
  }, /*#__PURE__*/React.createElement("style", null, `
        .jiz-build{position:relative;isolation:isolate;overflow:hidden;padding:clamp(104px,11vw,176px) var(--container-pad) clamp(96px,10vw,152px);background:radial-gradient(ellipse 74% 54% at 18% 8%,rgba(100,225,255,.094),transparent 66%),radial-gradient(ellipse 62% 50% at 88% 64%,rgba(198,242,58,.05),transparent 70%),linear-gradient(180deg,#121a1d 0%,#141d20 40%,#101619 100%)}
        .jiz-build::before{content:'';position:absolute;inset:0;z-index:-2;pointer-events:none;opacity:.12;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:80px 80px;-webkit-mask-image:radial-gradient(ellipse at 50% 30%,#000,transparent 76%);mask-image:radial-gradient(ellipse at 50% 30%,#000,transparent 76%)}
        .jiz-build-inner{position:relative;z-index:1;width:min(100%,1360px);margin-inline:auto}
        .jiz-build-head{display:flex;flex-direction:column;gap:clamp(22px,2.6vw,34px);margin-bottom:clamp(56px,6.5vw,92px)}
        .jiz-build-head-left{display:contents}
        .jiz-build-head-right{display:contents}
        .jiz-build-eyebrow{margin:0 0 14px;color:var(--color-accent-primary);font:var(--text-eyebrow);letter-spacing:var(--tracking-eyebrow);text-transform:uppercase}
        .jiz-build-title{margin:0 0 24px;color:var(--color-text-primary);font:var(--text-h2);font-size:clamp(2.6rem,5.2vw,5.2rem);line-height:1.04;letter-spacing:-.042em;text-wrap:balance}
        .jiz-build-sub{margin:0;color:var(--color-text-secondary);font:var(--text-body-lg);font-size:clamp(1.05rem,1.25vw,1.2rem);line-height:1.72}
        .jiz-build-stage{display:grid;grid-template-columns:minmax(360px,.98fr) minmax(0,1.02fr);gap:clamp(22px,2.6vw,34px);align-items:stretch}
        .jiz-build-film{position:relative;overflow:visible;border-radius:0;min-height:clamp(420px,44vw,620px);background:transparent;order:2}
        .jiz-build-film::after{content:'';position:absolute;inset:0;pointer-events:none;background:linear-gradient(90deg,rgba(18,26,29,1) 0%,transparent 22%,transparent 78%,rgba(18,26,29,1) 100%),linear-gradient(180deg,rgba(18,26,29,.6) 0%,transparent 12%,transparent 88%,rgba(18,26,29,1) 100%);z-index:2}
        .jiz-build-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 38%;opacity:0.82}
        .jiz-build-film::before{content:'';position:absolute;inset:0;z-index:1;pointer-events:none;background:radial-gradient(ellipse 68% 42% at 22% 8%,rgba(100,225,255,.035),transparent 66%),radial-gradient(ellipse 58% 46% at 84% 78%,rgba(198,242,58,.018),transparent 68%);opacity:0.7}
        .jiz-build-film-copy{position:absolute;z-index:2;left:clamp(22px,3vw,40px);right:clamp(22px,3vw,40px);bottom:clamp(24px,3vw,40px);max-width:460px}
        .jiz-build-film-label{margin:0 0 10px;color:var(--color-accent-secondary);font:var(--text-hud);letter-spacing:.14em;text-transform:uppercase}
        .jiz-build-film-line{margin:0;color:var(--color-text-primary);font:var(--text-body);font-size:clamp(1rem,1.3vw,1.15rem);line-height:1.6;text-shadow:0 2px 18px rgba(0,0,0,.6)}
        .jiz-build-form{display:flex;flex-direction:column;padding:clamp(28px,3.2vw,44px);border:1px solid rgba(255,255,255,.075);border-radius:clamp(22px,2.4vw,32px);background:linear-gradient(180deg,rgba(255,255,255,.055),rgba(255,255,255,.018));box-shadow:0 34px 90px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.05);backdrop-filter:blur(20px);order:1}
        .jiz-build-form h3{margin:0 0 6px;color:var(--color-text-primary);font:var(--text-h3);font-size:clamp(1.5rem,2vw,1.9rem);letter-spacing:-.03em}
        .jiz-build-form-note{margin:0 0 22px;color:var(--color-text-muted);font:var(--text-caption)}
        .jiz-build-fields{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .jiz-build-field{display:flex;flex-direction:column;gap:6px}
        .jiz-build-field.jiz-span{grid-column:1/-1}
        .jiz-build-label{color:var(--color-accent-secondary);font:var(--text-hud);font-size:.625rem;letter-spacing:.1em;text-transform:uppercase}
        .jiz-build-input,.jiz-build-area{width:100%;box-sizing:border-box;min-height:46px;padding:12px 14px;border:1px solid rgba(255,255,255,.1);border-radius:14px;background:rgba(8,13,15,.5);color:var(--color-text-primary);font:var(--text-body);font-size:.9375rem;transition:border-color var(--motion-fast) var(--ease-standard),background var(--motion-fast) var(--ease-standard)}
        .jiz-build-area{min-height:92px;resize:vertical;line-height:1.55}
        .jiz-build-input::placeholder,.jiz-build-area::placeholder{color:rgba(245,247,248,.32)}
        .jiz-build-input:focus,.jiz-build-area:focus{outline:none;border-color:rgba(198,242,58,.5);background:rgba(198,242,58,.035)}
        .jiz-build-chips{display:flex;flex-wrap:wrap;gap:8px}
        .jiz-build-chip{min-height:38px;padding:0 14px;border:1px solid rgba(255,255,255,.11);border-radius:var(--radius-pill);background:rgba(255,255,255,.028);color:var(--color-text-secondary);font:var(--text-caption);cursor:pointer;transition:all var(--motion-fast) var(--ease-standard)}
        .jiz-build-chip:hover{border-color:rgba(255,255,255,.2);background:rgba(255,255,255,.045);color:var(--color-text-primary)}
        .jiz-build-chip[aria-pressed="true"]{border-color:rgba(198,242,58,.55);background:rgba(198,242,58,.1);color:var(--color-text-primary)}
        .jiz-build-chip:focus-visible,.jiz-build-submit:focus-visible,.jiz-build-tile:focus-visible{outline:2px solid var(--color-accent-primary);outline-offset:3px}
        .jiz-build-submit{margin-top:22px;min-height:52px;padding:0 26px;border:none;border-radius:var(--radius-pill);background:var(--color-accent-primary);color:var(--color-on-accent);font:var(--text-button);cursor:pointer;transition:transform var(--motion-fast) var(--ease-standard),box-shadow var(--motion-fast) var(--ease-standard)}
        .jiz-build-submit:hover:not(:disabled){background:var(--color-accent-primary-hover);box-shadow:0 10px 26px rgba(198,242,58,.16)}
        .jiz-build-submit:disabled{opacity:.55;cursor:not-allowed;box-shadow:none}
        .jiz-build-fieldset{min-width:0;margin:0;padding:0;border:0}
        .jiz-build-fieldset legend{padding:0;margin-bottom:6px}
        .jiz-build-status{margin:12px 0 0;min-height:0;text-align:center;font:var(--text-caption);line-height:1.55}
        .jiz-build-status:empty{display:none}
        .jiz-build-status.jiz-is-success{padding:12px 14px;border:1px solid rgba(198,242,58,.42);border-radius:14px;background:rgba(198,242,58,.09);color:var(--color-text-primary)}
        .jiz-build-status.jiz-is-error{padding:12px 14px;border:1px solid rgba(255,150,120,.42);border-radius:14px;background:rgba(255,150,120,.09);color:#ffcbb8}
        .jiz-build-status:focus-visible{outline:2px solid var(--color-accent-primary);outline-offset:3px}
        .jiz-build-status-tag{font-weight:700;letter-spacing:.02em}
        .jiz-build-privacy{margin:14px 0 0;text-align:center;color:var(--color-text-muted);font:var(--text-caption);font-size:.75rem;line-height:1.5}
        .jiz-build-form-direct{margin:14px 0 0;text-align:center;color:var(--color-text-muted);font:var(--text-caption)}
        .jiz-build-form-direct a{color:var(--color-accent-primary);text-decoration:none}
        .jiz-build-form-direct a:hover{text-decoration:underline}
        .jiz-build-rail{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(14px,1.6vw,20px);margin-top:clamp(30px,3.4vw,48px)}
        .jiz-build-tile{display:block;padding:clamp(22px,2.4vw,30px);border:1px solid rgba(255,255,255,.075);border-radius:20px;background:linear-gradient(180deg,rgba(255,255,255,.05) 0%,rgba(255,255,255,.024) 30%,rgba(255,255,255,.014));text-decoration:none;backdrop-filter:blur(16px);transition:transform var(--motion-fast) var(--ease-standard),border-color var(--motion-fast) var(--ease-standard),background var(--motion-fast) var(--ease-standard)}
        .jiz-build-tile:hover{border-color:rgba(255,255,255,.155);background:linear-gradient(180deg,rgba(255,255,255,.062) 0%,rgba(255,255,255,.028) 30%,rgba(255,255,255,.014) 100%)}
        .jiz-build-tile-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}
        .jiz-build-tile-name{color:var(--color-text-primary);font:var(--text-body);font-weight:650;font-size:1rem}
        .jiz-build-tile-arrow{color:var(--color-accent-secondary);font-size:.95rem}
        .jiz-build-tile-desc{margin:0;color:var(--color-text-secondary);font:var(--text-caption);line-height:1.6}
        .jiz-build-tile-icon{display:block;margin-bottom:16px;color:var(--color-accent-primary);transition:transform var(--motion-fast) var(--ease-standard),color var(--motion-fast) var(--ease-standard)}
        .jiz-build-tile:hover .jiz-build-tile-icon{transform:scale(1.08);color:var(--color-accent-secondary)}
        
        
        
        
        
        
        @media(max-width:1040px){.jiz-build-stage{grid-template-columns:1fr}.jiz-build-film{min-height:clamp(300px,52vw,460px)}}
        @media(max-width:820px){.jiz-build-rail{grid-template-columns:1fr}}
        @media(max-width:680px){.jiz-build-title{max-width:100%}.jiz-build-sub{max-width:100%}}
        @media(max-width:520px){.jiz-build-fields{grid-template-columns:1fr}}
        @media(prefers-reduced-motion:reduce){.jiz-build-tile,.jiz-build-submit,.jiz-build-chip{transition:none}}
      `), /*#__PURE__*/React.createElement("div", {
    className: "jiz-build-inner"
  }, /*#__PURE__*/React.createElement("header", {
    className: "jiz-build-head"
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-build-eyebrow"
  }, "Let's build what's next"), /*#__PURE__*/React.createElement("h2", {
    id: "jiz-build-title",
    className: "jiz-build-title"
  }, "Have a complex problem worth making clear?"), /*#__PURE__*/React.createElement("p", {
    className: "jiz-build-sub"
  }, "I partner with teams navigating complex learning, technology, adoption, and transformation challenges. Tell me what you're trying to change, where the friction lives, and what success should make possible.")), /*#__PURE__*/React.createElement("div", {
    className: "jiz-build-stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-build-film"
  }, /*#__PURE__*/React.createElement("video", {
    className: "jiz-build-video",
    "data-build-film": true,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "metadata",
    "aria-hidden": "true",
    tabIndex: "-1"
  }, /*#__PURE__*/React.createElement("source", {
    src: "./assets/video/Jonathan_Planning.mp4",
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("div", {
    className: "jiz-build-film-copy"
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-build-film-label"
  }, "From ambiguity to direction"), /*#__PURE__*/React.createElement("p", {
    className: "jiz-build-film-line"
  }, "Strategy becomes tangible when the problem can be seen, mapped, tested, and refined."))), /*#__PURE__*/React.createElement("form", {
    className: "jiz-build-form",
    "data-build-form": "ready",
    onSubmit: handleSubmit,
    "aria-busy": formStatus === 'submitting'
  }, /*#__PURE__*/React.createElement("h3", null, "Start a Project"), /*#__PURE__*/React.createElement("p", {
    className: "jiz-build-form-note"
  }, "A few details are enough to begin a useful conversation."), /*#__PURE__*/React.createElement("div", {
    className: "jiz-build-fields"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-build-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "jiz-build-label",
    htmlFor: "jiz-build-name"
  }, "Name ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "*")), /*#__PURE__*/React.createElement("input", {
    className: "jiz-build-input",
    id: "jiz-build-name",
    name: "name",
    type: "text",
    required: true,
    value: form.name,
    onChange: set('name'),
    placeholder: "Your name",
    autoComplete: "name"
  })), /*#__PURE__*/React.createElement("div", {
    className: "jiz-build-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "jiz-build-label",
    htmlFor: "jiz-build-email"
  }, "Work email ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "*")), /*#__PURE__*/React.createElement("input", {
    className: "jiz-build-input",
    id: "jiz-build-email",
    name: "email",
    type: "email",
    required: true,
    value: form.email,
    onChange: set('email'),
    placeholder: "you@company.com",
    autoComplete: "email"
  })), /*#__PURE__*/React.createElement("div", {
    className: "jiz-build-field jiz-span"
  }, /*#__PURE__*/React.createElement("label", {
    className: "jiz-build-label",
    htmlFor: "jiz-build-org"
  }, "Organization"), /*#__PURE__*/React.createElement("input", {
    className: "jiz-build-input",
    id: "jiz-build-org",
    name: "organization",
    type: "text",
    value: form.org,
    onChange: set('org'),
    placeholder: "Company or team",
    autoComplete: "organization"
  })), /*#__PURE__*/React.createElement("fieldset", {
    className: "jiz-build-field jiz-span jiz-build-fieldset"
  }, /*#__PURE__*/React.createElement("legend", {
    className: "jiz-build-label"
  }, "Project type ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "jiz-build-chips"
  }, PROJECT_TYPES.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    type: "button",
    className: "jiz-build-chip",
    "aria-pressed": form.types.indexOf(t) !== -1,
    onClick: () => toggleType(t)
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-build-field jiz-span"
  }, /*#__PURE__*/React.createElement("label", {
    className: "jiz-build-label",
    htmlFor: "jiz-build-detail"
  }, "What are you trying to make clearer, easier, or more effective? ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "*")), /*#__PURE__*/React.createElement("textarea", {
    className: "jiz-build-area",
    id: "jiz-build-detail",
    name: "challenge",
    required: true,
    value: form.detail,
    onChange: set('detail'),
    placeholder: "The change you're after, the friction in the way, what success looks like."
  })), /*#__PURE__*/React.createElement("fieldset", {
    className: "jiz-build-field jiz-span jiz-build-fieldset"
  }, /*#__PURE__*/React.createElement("legend", {
    className: "jiz-build-label"
  }, "Timeline"), /*#__PURE__*/React.createElement("div", {
    className: "jiz-build-chips"
  }, TIMELINES.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    type: "button",
    className: "jiz-build-chip",
    "aria-pressed": form.timeline === t,
    onClick: () => setForm(f => ({
      ...f,
      timeline: f.timeline === t ? '' : t
    }))
  }, t)))), /*#__PURE__*/React.createElement("fieldset", {
    className: "jiz-build-field jiz-span jiz-build-fieldset"
  }, /*#__PURE__*/React.createElement("legend", {
    className: "jiz-build-label"
  }, "Budget"), /*#__PURE__*/React.createElement("div", {
    className: "jiz-build-chips"
  }, BUDGETS.map(b => /*#__PURE__*/React.createElement("button", {
    key: b,
    type: "button",
    className: "jiz-build-chip",
    "aria-pressed": form.budget === b,
    onClick: () => setForm(f => ({
      ...f,
      budget: f.budget === b ? '' : b
    }))
  }, b)))), /*#__PURE__*/React.createElement("fieldset", {
    className: "jiz-build-field jiz-span jiz-build-fieldset"
  }, /*#__PURE__*/React.createElement("legend", {
    className: "jiz-build-label"
  }, "How did you hear about me?"), /*#__PURE__*/React.createElement("div", {
    className: "jiz-build-chips"
  }, REFERRALS.map(r => /*#__PURE__*/React.createElement("button", {
    key: r,
    type: "button",
    className: "jiz-build-chip",
    "aria-pressed": form.referral === r,
    onClick: () => setForm(f => ({
      ...f,
      referral: f.referral === r ? '' : r
    }))
  }, r))))), /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "project_type",
    value: form.types.join(', ')
  }), /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "timeline",
    value: form.timeline
  }), /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "budget",
    value: form.budget
  }), /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "referral_source",
    value: form.referral
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '-9999px',
      width: 1,
      height: 1,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "jiz-botcheck"
  }, "Leave this field empty"), /*#__PURE__*/React.createElement("input", {
    id: "jiz-botcheck",
    type: "checkbox",
    name: "botcheck",
    tabIndex: -1,
    autoComplete: "off"
  })), /*#__PURE__*/React.createElement("button", {
    className: "jiz-build-submit",
    type: "submit",
    disabled: formStatus === 'submitting',
    "aria-busy": formStatus === 'submitting'
  }, formStatus === 'submitting' ? 'Sending…' : 'Start the Conversation →'), /*#__PURE__*/React.createElement("p", {
    ref: statusRef,
    tabIndex: -1,
    className: 'jiz-build-status' + (formStatus === 'success' ? ' jiz-is-success' : formStatus === 'error' ? ' jiz-is-error' : ''),
    role: formStatus === 'error' ? 'alert' : 'status',
    "aria-live": formStatus === 'error' ? 'assertive' : 'polite',
    "aria-atomic": "true"
  }, formMessage ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", {
    className: "jiz-build-status-tag"
  }, formStatus === 'success' ? 'Sent' : 'Not sent'), ' ', formMessage) : ''), /*#__PURE__*/React.createElement("p", {
    className: "jiz-build-privacy"
  }, "Your details are used only to respond to this inquiry. No mailing lists. No unsolicited follow-up."), /*#__PURE__*/React.createElement("p", {
    className: "jiz-build-form-direct"
  }, "Prefer email? ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:jonathan.zamarripa@gmail.com"
  }, "jonathan.zamarripa@gmail.com")))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-build-rail"
  }, /*#__PURE__*/React.createElement("a", {
    className: "jiz-build-tile",
    href: "https://www.linkedin.com/in/jonathanzamarripa/",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Connect on LinkedIn"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "jiz-build-tile-icon",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "9",
    width: "4",
    height: "12"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "4",
    cy: "4",
    r: "2"
  })), /*#__PURE__*/React.createElement("span", {
    className: "jiz-build-tile-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jiz-build-tile-name"
  }, "Connect on LinkedIn"), /*#__PURE__*/React.createElement("span", {
    className: "jiz-build-tile-arrow",
    "aria-hidden": "true"
  }, "\u2197")), /*#__PURE__*/React.createElement("p", {
    className: "jiz-build-tile-desc"
  }, "Follow current work and connect professionally.")), /*#__PURE__*/React.createElement("a", {
    className: "jiz-build-tile",
    href: "https://elearningportfolio-jz.s3.us-east-1.amazonaws.com/Public_Career_Overview.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Explore My Experience"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "jiz-build-tile-icon",
    viewBox: "0 0 32 32",
    width: "24",
    height: "24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 4h10l8 8v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 4v8h8M9 18h6M9 22h8"
  })), /*#__PURE__*/React.createElement("span", {
    className: "jiz-build-tile-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jiz-build-tile-name"
  }, "Explore My Experience"), /*#__PURE__*/React.createElement("span", {
    className: "jiz-build-tile-arrow",
    "aria-hidden": "true"
  }, "\u2197")), /*#__PURE__*/React.createElement("p", {
    className: "jiz-build-tile-desc"
  }, "Review professional background and capabilities.")), /*#__PURE__*/React.createElement("div", {
    className: "jiz-build-tile jiz-build-tile-email",
    onClick: () => {
      const form = document.querySelector('form[data-build-form]');
      if (form) form.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    },
    style: {
      cursor: 'pointer'
    },
    role: "button",
    tabIndex: "0",
    "aria-label": "Start a Conversation \u2014 click to scroll to contact form",
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        const form = document.querySelector('form[data-build-form]');
        if (form) form.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }, /*#__PURE__*/React.createElement("svg", {
    className: "jiz-build-tile-icon",
    viewBox: "0 0 32 32",
    width: "24",
    height: "24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 6h24a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 8l14 10 14-10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 18l-6 6M20 18l6 6"
  })), /*#__PURE__*/React.createElement("span", {
    className: "jiz-build-tile-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jiz-build-tile-name"
  }, "Start a Conversation"), /*#__PURE__*/React.createElement("span", {
    className: "jiz-build-tile-arrow",
    "aria-hidden": "true"
  }, "\u2197")), /*#__PURE__*/React.createElement("p", {
    className: "jiz-build-tile-desc"
  }, "Reach out directly about projects and opportunities."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '10px',
      paddingTop: '10px',
      borderTop: '1px solid rgba(255,255,255,.1)',
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:jonathan.zamarripa@gmail.com?subject=Let%27s%20Build%20Something%20Great%20Together&body=Hi%20Jonathan%2C%0A%0AI%20enjoyed%20exploring%20your%20portfolio%20and%20wanted%20to%20reach%20out%20regarding%20a%20potential%20opportunity.%0A%0AI%27d%20love%20to%20connect%20and%20learn%20more%20about%20your%20work.%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ABest%2C",
    "aria-label": "Email Jonathan",
    style: {
      fontSize: '0.8125rem',
      color: 'var(--color-accent-secondary)',
      textDecoration: 'underline',
      flex: '1 1 auto'
    }
  }, "Email"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => {
      e.stopPropagation();
      navigator.clipboard.writeText('jonathan.zamarripa@gmail.com').then(() => {
        const btn = e.target;
        const orig = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => {
          btn.textContent = orig;
        }, 2000);
      }).catch(() => {
        alert('jonathan.zamarripa@gmail.com');
      });
    },
    "aria-label": "Copy email address",
    style: {
      fontSize: '0.8125rem',
      color: 'var(--color-accent-secondary)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      textDecoration: 'underline'
    }
  }, "Copy"))))));
}
function FinalMoment({
  onNavigate
}) {
  const [lit, setLit] = React.useState(false);
  const ref = React.useRef(null);
  const reduced = prefersReduced();
  const NAV = [['About', 1], ['Featured Work', 2], ['Creative Lab', 3], ['Insights', 4], ["Let's Build", 5]];
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setLit(true);
    }, {
      threshold: 0.4
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const toTop = () => window.scrollTo({
    top: 0,
    behavior: reduced ? 'auto' : 'smooth'
  });
  return /*#__PURE__*/React.createElement("footer", {
    ref: ref,
    className: "jiz-footer",
    "data-footer": "ready"
  }, /*#__PURE__*/React.createElement("style", null, `
        .jiz-footer{position:relative;isolation:isolate;overflow:hidden;padding:clamp(64px,7vw,104px) var(--container-pad) clamp(36px,4vw,56px);background:radial-gradient(ellipse at 14% 6%,rgba(100,225,255,.32),transparent 46%),radial-gradient(ellipse at 88% 88%,rgba(255,255,255,.28),transparent 42%),linear-gradient(165deg,#d4f24a 0%,#c6f23a 46%,#aade34 100%);color:#0d1410}
        .jiz-footer::before{content:'';position:absolute;inset:0;z-index:-1;pointer-events:none;opacity:.16;background-image:linear-gradient(rgba(13,20,16,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(13,20,16,.4) 1px,transparent 1px);background-size:72px 72px;-webkit-mask-image:radial-gradient(ellipse at 50% 40%,#000,transparent 78%);mask-image:radial-gradient(ellipse at 50% 40%,#000,transparent 78%)}
        .jiz-footer-inner{max-width:1360px;position:relative;z-index:1;width:min(100%,1240px);margin-inline:auto;text-align:center}
        .jiz-footer-mark{display:grid;place-items:center;margin:0 auto clamp(24px,3vw,34px)}
        .jiz-footer-logo{width:96px;height:96px;object-fit:contain;filter:brightness(0)}
        
        .jiz-footer-name{margin:0 0 8px;color:#0d1410;font:var(--text-h3);font-size:clamp(1.55rem,2.6vw,2.35rem);letter-spacing:-.035em}
        .jiz-footer-disciplines{margin:0 0 clamp(30px,3.4vw,44px);color:rgba(13,20,16,.72);font:var(--text-body);font-size:clamp(.9rem,1.1vw,1.02rem);letter-spacing:.01em}
        .jiz-footer-nav{display:flex;flex-wrap:wrap;justify-content:center;gap:clamp(6px,1vw,12px);margin-bottom:clamp(26px,3vw,38px)}
        .jiz-footer-nav button{min-height:44px;padding:0 16px;border:1px solid transparent;border-radius:var(--radius-pill);background:transparent;color:rgba(13,20,16,.82);font:var(--text-body);font-size:.9375rem;font-weight:600;cursor:pointer;transition:all var(--motion-fast) var(--ease-standard)}
        .jiz-footer-nav button:hover{border-color:rgba(13,20,16,.26);background:rgba(13,20,16,.07);color:#0d1410}
        
        
        
        .jiz-footer-top{min-height:48px;padding:0 22px;border:1px solid rgba(13,20,16,.24);border-radius:var(--radius-pill);background:rgba(13,20,16,.9);color:#e8f7c4;font:var(--text-button);cursor:pointer;transition:all var(--motion-fast) var(--ease-standard)}
        .jiz-footer-top:hover{transform:translateY(-2px);box-shadow:0 16px 32px rgba(13,20,16,.26)}
        .jiz-footer-rule{height:1px;margin:clamp(32px,3.6vw,46px) auto 0;background:linear-gradient(90deg,transparent,rgba(13,20,16,.24),transparent)}
        .jiz-footer-meta{display:flex;flex-direction:column;gap:6px;margin-top:clamp(22px,2.4vw,30px)}
        .jiz-footer-copy{color:rgba(13,20,16,.78);font:var(--text-caption)}
        .jiz-footer-credit{color:rgba(13,20,16,.6);font:var(--text-caption);font-style:italic}
        .jiz-footer-tech{color:rgba(13,20,16,.48);font:var(--text-hud);font-size:.625rem;letter-spacing:.14em;text-transform:uppercase}
        .jiz-footer-nav button:focus-visible,.jiz-footer-top:focus-visible{outline:2px solid #0d1410;outline-offset:3px}
        
        @media(prefers-reduced-motion:reduce){.jiz-footer-top,.jiz-footer-nav button{transition:none}.jiz-footer-top:hover{transform:none}}
      `), /*#__PURE__*/React.createElement("div", {
    className: "jiz-footer-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-footer-mark"
  }, /*#__PURE__*/React.createElement("img", {
    className: "jiz-footer-logo",
    src: "./assets/logo/jiz-logo-white.svg",
    alt: "Jonathan Iker Zamarripa logo"
  })), /*#__PURE__*/React.createElement("p", {
    className: "jiz-footer-name"
  }, "Jonathan Iker Zamarripa"), /*#__PURE__*/React.createElement("p", {
    className: "jiz-footer-disciplines"
  }, "Learning Experience Design \u2022 AI Strategy \u2022 Digital Transformation"), /*#__PURE__*/React.createElement("nav", {
    className: "jiz-footer-nav",
    "aria-label": "Footer"
  }, NAV.map(([label, index]) => /*#__PURE__*/React.createElement("button", {
    key: label,
    type: "button",
    onClick: () => onNavigate && onNavigate(index)
  }, label))), /*#__PURE__*/React.createElement("button", {
    className: "jiz-footer-top",
    type: "button",
    onClick: toTop
  }, "\u2191 Back to Top"), /*#__PURE__*/React.createElement("div", {
    className: "jiz-footer-rule",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "jiz-footer-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jiz-footer-copy"
  }, "\xA9 2026 Jonathan Iker Zamarripa. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    className: "jiz-footer-credit"
  }, "Designed with curiosity. Built with AI. Guided by human judgment."), /*#__PURE__*/React.createElement("span", {
    className: "jiz-footer-tech"
  }, "React \u2022 Accessibility First \u2022 Responsive \u2022 Motion Designed"))));
}
function Homepage({
  onOpenCaseStudy
}) {
  const {
    NavBar,
    Button
  } = window.JIZPortfolioSite_b3ba38;
  const sectionRefs = React.useRef([]);
  const [activeSection, setActiveSection] = React.useState(0);
  const reduced = prefersReduced();
  const navItems = ['About', 'Featured Work', 'Creative Lab', 'Insights'];
  const sectionLabels = ['Hero', 'About', 'Featured Work', 'Creative Lab', 'Insights', "Let's Build"];
  const sectionMap = React.useMemo(() => ({
    Home: 0,
    Hero: 0,
    About: 1,
    'Featured Work': 2,
    Work: 2,
    'Creative Lab': 3,
    Film: 3,
    Insights: 4,
    Contact: 5,
    "Let's Build": 5
  }), []);
  const registerSection = React.useCallback(index => element => {
    sectionRefs.current[index] = element;
  }, []);
  const scrollToSection = React.useCallback(index => {
    const target = sectionRefs.current[index];
    if (!target) return;
    target.scrollIntoView({
      behavior: reduced ? 'auto' : 'smooth',
      block: 'start'
    });
    setActiveSection(index);
  }, [reduced]);
  React.useEffect(() => {
    const rawTarget = sessionStorage.getItem('jiz-target-section');
    if (rawTarget === null) return undefined;
    sessionStorage.removeItem('jiz-target-section');
    const target = Number.parseInt(rawTarget, 10);
    if (!Number.isInteger(target) || target < 0 || target >= sectionLabels.length) return undefined;
    const timer = window.setTimeout(() => scrollToSection(target), reduced ? 0 : 280);
    return () => window.clearTimeout(timer);
  }, [reduced, scrollToSection, sectionLabels.length]);
  React.useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      const onScroll = () => {
        let current = 0;
        sectionRefs.current.forEach((element, index) => {
          if (element && element.getBoundingClientRect().top <= window.innerHeight * 0.48) current = index;
        });
        setActiveSection(current);
      };
      window.addEventListener('scroll', onScroll, {
        passive: true
      });
      onScroll();
      return () => window.removeEventListener('scroll', onScroll);
    }
    const visibility = new Map();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => visibility.set(Number(entry.target.dataset.sectionIndex), entry.intersectionRatio));
      let bestIndex = 0;
      let bestRatio = -1;
      visibility.forEach((ratio, index) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestIndex = index;
        }
      });
      setActiveSection(bestIndex);
    }, {
      rootMargin: '-20% 0px -55% 0px',
      threshold: [0, 0.15, 0.35, 0.6]
    });
    sectionRefs.current.forEach((element, index) => {
      if (!element) return;
      element.dataset.sectionIndex = String(index);
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  const activeNavLabel = sectionLabels[activeSection] || 'About';
  const openLinkedIn = () => window.open('https://www.linkedin.com/in/jonathanzamarripa/', '_blank', 'noopener,noreferrer');
  return /*#__PURE__*/React.createElement("div", {
    className: "jiz-homepage",
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: '#080D0B',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    items: navItems,
    active: activeNavLabel,
    onNavigate: item => {
      const targetIndex = sectionMap[item];
      if (targetIndex !== undefined) scrollToSection(targetIndex);else window.jizNavigate?.(item);
    },
    onConnect: () => scrollToSection(5)
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      position: 'relative',
      zIndex: 1,
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: registerSection(0)
  }, /*#__PURE__*/React.createElement(Hero, {
    onExploreWork: () => scrollToSection(2),
    onConnect: () => scrollToSection(5)
  })), /*#__PURE__*/React.createElement("div", {
    ref: registerSection(1),
    "data-section": "about"
  }, window.AboutV2 ? /*#__PURE__*/React.createElement(window.AboutV2, null) : /*#__PURE__*/React.createElement("div", {
    role: "status",
    "data-about-loading": true,
    style: {
      padding: 32,
      color: 'var(--color-text-secondary)'
    }
  }, "Loading About experience\u2026")), /*#__PURE__*/React.createElement("div", {
    ref: registerSection(2),
    "data-section": "featured-work"
  }, /*#__PURE__*/React.createElement(FeaturedWork, {
    onOpenWork: onOpenCaseStudy
  })), /*#__PURE__*/React.createElement("div", {
    ref: registerSection(3)
  }, /*#__PURE__*/React.createElement(FilmSection, null)), /*#__PURE__*/React.createElement("div", {
    ref: registerSection(4)
  }, /*#__PURE__*/React.createElement(Insights, null)), /*#__PURE__*/React.createElement("div", {
    ref: registerSection(5)
  }, /*#__PURE__*/React.createElement(LetsBuild, {
    onExploreWork: () => scrollToSection(2)
  }), /*#__PURE__*/React.createElement(FinalMoment, {
    onNavigate: scrollToSection
  }))));
}
window.HomepageExports = {
  Homepage
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-website/Homepage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-website/archive/About_v2_CHECKPOINT_pre-v3.jsx
try { (() => {
function AboutV2({
  registerSectionRef,
  onResume,
  onLinkedIn,
  onSelectedWork
}) {
  const sectionRef = React.useRef(null);
  const railRef = React.useRef(null);
  const nodeRefs = React.useRef([]);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const LINKEDIN_URL = 'https://www.linkedin.com/in/jonathanzamarripa/';
  const RESUME_URL = 'https://elearningportfolio-jz.s3.us-east-1.amazonaws.com/Public_Career_Overview.pdf';
  const THINKING_ENGINE_SRC = './assets/video/about-me-thinking-engine.mp4';
  const methodStages = [{
    id: 'observe',
    label: '01',
    title: 'Observe',
    copy: 'See the full system before defining the solution.'
  }, {
    id: 'understand',
    label: '02',
    title: 'Understand',
    copy: 'Reveal the patterns, friction, behaviors, and decisions shaping the experience.'
  }, {
    id: 'design',
    label: '03',
    title: 'Design',
    copy: 'Create the structure, story, and interaction that make understanding possible.'
  }, {
    id: 'build',
    label: '04',
    title: 'Build',
    copy: 'Produce the learning, media, tools, and systems required for adoption.'
  }, {
    id: 'transform',
    label: '05',
    title: 'Transform',
    copy: 'Turn clarity into action, confidence, and measurable movement.'
  }];
  const capabilityGroups = [{
    title: 'DESIGN',
    subtitle: 'What I architect',
    items: ['Learning systems', 'Experience strategy', 'Human-centered design', 'Information architecture', 'Behavior change', 'AI-enabled experiences']
  }, {
    title: 'BUILD',
    subtitle: 'What I create',
    items: ['Articulate Storyline', 'Camtasia', 'Adobe Creative Cloud', 'Figma', 'Motion and video', 'AI production workflows']
  }, {
    title: 'KNOWN FOR',
    subtitle: 'What differentiates the work',
    items: ['Systems thinking', 'Creative direction', 'Enterprise learning', 'Rapid prototyping', 'Executive communication', 'Translating complexity into clarity']
  }];

  /*
   * Career content is based on the approved Public Career Overview and known
   * portfolio history. Confirm exact employer date ranges before release.
   */
  const careerEntries = [{
    id: 'foundation',
    stage: 'Foundation',
    years: 'Eight-year foundation',
    organization: 'K–12 STEAM & Robotics',
    title: 'Classroom and Program Leadership',
    summary: 'Built a practical understanding of how people learn by teaching STEAM, leading a robotics program, and turning limited resources into meaningful experiences.',
    highlights: ['Coached a regional championship robotics team', 'Secured more than $20,000 in program funding', 'Developed a learner-first leadership practice'],
    capabilities: ['Facilitation', 'Program leadership', 'STEAM learning'],
    type: 'role'
  }, {
    id: 'gstate',
    stage: 'Storytelling',
    years: '2009',
    organization: 'Georgia State University',
    title: 'B.A., Journalism — Film & Video',
    summary: 'Built the cinematic and editorial foundation that now shapes the way complex ideas are framed, paced, and made memorable.',
    highlights: ['Film and video concentration', 'Narrative structure and visual communication', 'Production craft grounded in journalism'],
    capabilities: ['Storytelling', 'Video production', 'Editorial thinking'],
    type: 'education'
  }, {
    id: 'ais',
    stage: 'Systems',
    years: '2019–2024',
    organization: 'Atlanta International School',
    title: 'EdTech & Innovation Coach / Strategist',
    summary: 'Founded a digital learning function without an existing playbook, connecting instructional design, systems, content, and analytics into one practice.',
    highlights: ['Led an organization-wide LMS migration', 'Achieved 95% adoption and 4.9/5 satisfaction', 'Built analytics and needs-assessment infrastructure'],
    capabilities: ['Learning systems', 'Change leadership', 'Analytics'],
    type: 'role'
  }, {
    id: 'asu',
    stage: 'Research',
    years: '2023',
    organization: 'Arizona State University',
    title: 'M.Ed., Instructional Design & Technology',
    summary: 'Formalized a systems-based learning practice through advanced study in instructional design, technology, evaluation, and human-centered learning.',
    highlights: ['Graduated Summa Cum Laude', 'Connected learning science to production practice', 'Expanded expertise in evaluation and design strategy'],
    capabilities: ['Learning science', 'Research', 'Evaluation'],
    type: 'education'
  }, {
    id: 'cox',
    stage: 'Enterprise',
    years: '2025',
    organization: 'Cox Enterprises',
    title: 'Learning Experience Designer',
    summary: 'Designed enterprise learning experiences and AI-assisted production workflows for leadership development, systems adoption, and organizational change.',
    highlights: ['Accelerated content development by 40%', 'Supported a Workday Learn launch reaching 98% Q1 adoption', 'Designed a narrative-driven enterprise escape room'],
    capabilities: ['Enterprise learning', 'AI workflows', 'Storyline'],
    type: 'role'
  }, {
    id: 'ihg',
    stage: 'Scale',
    years: '2025–2026',
    organization: 'IHG Hotels & Resorts',
    title: 'Creative Content Specialist / Developer',
    summary: 'Combined learning strategy, cinematic production, and AI-enabled workflows to create global technology communication and onboarding experiences.',
    highlights: ['Produced enterprise onboarding and adoption content', 'Built repeatable AI-enabled production workflows', 'Partnered across Product, Engineering, UX, and Cybersecurity'],
    capabilities: ['Creative direction', 'Video', 'AI-native production'],
    type: 'current'
  }, {
    id: 'next',
    stage: 'What\'s Next',
    years: 'Future chapter',
    organization: 'The next organization or collaboration',
    title: 'Learning Experience Strategist · Filmmaker · AI-Native Producer',
    summary: 'Bringing learning science, cinematic craft, and AI-native production together to help organizations move from complexity to confident action.',
    highlights: ['Enterprise learning strategy', 'Cinematic learning systems', 'AI-enabled creative production'],
    capabilities: ['Strategy', 'Direction', 'Transformation'],
    type: 'future'
  }];
  const beliefs = [{
    title: 'Intelligence',
    copy: 'I look beneath the obvious to understand how systems, people, and decisions connect.'
  }, {
    title: 'Confidence',
    copy: 'I make clear decisions while remaining open to evidence, feedback, and change.'
  }, {
    title: 'Self-awareness',
    copy: 'I understand how my perspective shapes the work and where collaboration strengthens it.'
  }, {
    title: 'Empathy',
    copy: 'I design for the person who must understand, use, and live with the outcome.'
  }];
  React.useEffect(() => {
    if (!sectionRef.current || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.08
    });
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  const selectCareerEntry = React.useCallback((index, behavior = 'smooth') => {
    const boundedIndex = Math.max(0, Math.min(index, careerEntries.length - 1));
    setActiveIndex(boundedIndex);
    nodeRefs.current[boundedIndex]?.scrollIntoView({
      behavior,
      block: 'nearest',
      inline: 'center'
    });
  }, [careerEntries.length]);
  const handleRailKeyDown = event => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      selectCareerEntry(activeIndex + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      selectCareerEntry(activeIndex - 1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      selectCareerEntry(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      selectCareerEntry(careerEntries.length - 1);
    }
  };
  const activeCareer = careerEntries[activeIndex];
  return /*#__PURE__*/React.createElement("section", {
    ref: sectionRef,
    className: `jiz-about-v2 ${isVisible ? 'is-visible' : ''}`,
    "aria-labelledby": "about-v2-title"
  }, /*#__PURE__*/React.createElement("style", null, `
        .jiz-about-v2 {
          --about-content-max: 1320px;
          position: relative;
          overflow: hidden;
          padding: clamp(72px, 7vw, 104px) var(--container-pad)
            clamp(112px, 12vw, 176px);
          background:
            radial-gradient(circle at 80% 10%, rgba(100, 225, 255, 0.075), transparent 32%),
            radial-gradient(circle at 18% 72%, rgba(198, 242, 58, 0.038), transparent 30%),
            linear-gradient(180deg, rgba(11, 13, 16, 0) 0%, rgba(11, 13, 16, 0.72) 12%, #0b0d10 100%);
          color: var(--color-text-primary);
        }

        .jiz-about-v2::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(115deg, transparent 12%, rgba(100, 225, 255, 0.025) 48%, transparent 72%);
          opacity: 0.8;
        }

        .jiz-about-inner {
          position: relative;
          z-index: 1;
          width: min(100%, var(--about-content-max));
          margin: 0 auto;
        }

        .jiz-about-movement {
          position: relative;
        }

        .jiz-about-movement + .jiz-about-movement {
          margin-top: clamp(112px, 13vw, 168px);
        }

        .jiz-about-mind {
          display: grid;
          grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
          align-items: center;
          gap: clamp(44px, 6vw, 84px);
        }

        .jiz-about-eyebrow,
        .jiz-about-meta {
          font: var(--text-eyebrow);
          letter-spacing: var(--tracking-eyebrow);
          text-transform: uppercase;
        }

        .jiz-about-eyebrow {
          color: var(--color-accent-secondary);
          margin: 0 0 18px;
        }

        .jiz-about-title {
          max-width: 760px;
          margin: 0;
          font: var(--text-h1);
          font-size: clamp(2.6rem, 4.8vw, 4.6rem);
          line-height: 0.98;
          letter-spacing: -0.04em;
          text-wrap: balance;
        }

        .jiz-about-thesis {
          max-width: 620px;
          margin: 28px 0 0;
          font: var(--text-body-lg);
          line-height: 1.55;
          color: var(--color-text-primary);
        }

        .jiz-about-copy {
          max-width: 620px;
          margin: 18px 0 0;
          font: var(--text-body);
          color: var(--color-text-secondary);
        }

        .jiz-about-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
        }

        .jiz-about-action {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-pill);
          padding: 0 22px;
          font: var(--text-button);
          text-decoration: none;
          transition:
            transform var(--motion-fast) var(--ease-standard),
            border-color var(--motion-fast) var(--ease-standard),
            background var(--motion-fast) var(--ease-standard);
        }

        .jiz-about-action:hover {
          transform: translateY(-2px);
        }

        .jiz-about-action:focus-visible,
        .jiz-career-control:focus-visible,
        .jiz-career-node:focus-visible {
          outline: 2px solid var(--color-accent-primary);
          outline-offset: 4px;
        }

        .jiz-about-action-primary {
          background: var(--color-accent-primary);
          color: #0b0d10;
        }

        .jiz-about-action-secondary {
          border: 1px solid rgba(100, 225, 255, 0.28);
          color: var(--color-text-primary);
          background: rgba(255, 255, 255, 0.018);
        }

        .jiz-thinking-wrap {
          position: relative;
          isolation: isolate;
        }

        .jiz-thinking-wrap::before {
          content: '';
          position: absolute;
          inset: -10%;
          z-index: -2;
          background:
            radial-gradient(circle at 60% 35%, rgba(100, 225, 255, 0.18), transparent 42%),
            radial-gradient(circle at 36% 70%, rgba(198, 242, 58, 0.075), transparent 32%);
          filter: blur(46px);
          opacity: 0.72;
        }

        .jiz-thinking-stage {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: clamp(20px, 2.2vw, 28px);
          border: 1px solid rgba(100, 225, 255, 0.11);
          background: rgba(6, 10, 13, 0.86);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.055),
            0 40px 100px rgba(0, 0, 0, 0.42);
        }

        .jiz-thinking-video {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain;
        }

        .jiz-thinking-reflection {
          position: absolute;
          left: 8%;
          right: 8%;
          bottom: -34px;
          height: 34px;
          pointer-events: none;
          background: linear-gradient(180deg, rgba(100, 225, 255, 0.065), transparent);
          filter: blur(10px);
          opacity: 0.65;
        }

        .jiz-thinking-label {
          display: flex;
          justify-content: space-between;
          gap: 24px;
          margin-top: 18px;
          color: var(--color-text-muted);
        }

        .jiz-thinking-label strong {
          color: var(--color-text-primary);
          font: var(--text-caption);
          letter-spacing: 0.12em;
        }

        .jiz-thinking-label span {
          font: var(--text-hud);
          letter-spacing: var(--tracking-hud);
          text-transform: uppercase;
          text-align: right;
        }

        .jiz-movement-heading {
          max-width: 760px;
          margin-bottom: clamp(38px, 5vw, 60px);
        }

        .jiz-movement-heading .jiz-about-eyebrow {
          margin-bottom: 14px;
        }

        .jiz-movement-title {
          margin: 0;
          font: var(--text-h2);
          letter-spacing: -0.035em;
        }

        .jiz-movement-description {
          max-width: 650px;
          margin: 18px 0 0;
          color: var(--color-text-secondary);
          font: var(--text-body-lg);
        }

        .jiz-method-path {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: clamp(18px, 2.5vw, 34px);
        }

        .jiz-method-path::before {
          content: '';
          position: absolute;
          top: 23px;
          left: 4%;
          right: 4%;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(100, 225, 255, 0.12),
            rgba(100, 225, 255, 0.58),
            rgba(198, 242, 58, 0.7)
          );
        }

        .jiz-method-stage {
          position: relative;
          padding-top: 52px;
        }

        .jiz-method-node {
          position: absolute;
          top: 15px;
          left: 0;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid rgba(100, 225, 255, 0.72);
          background: #0b0d10;
          box-shadow: 0 0 0 5px rgba(100, 225, 255, 0.055);
        }

        .jiz-method-stage:last-child .jiz-method-node {
          border-color: var(--color-accent-primary);
          background: var(--color-accent-primary);
          box-shadow: 0 0 0 6px rgba(198, 242, 58, 0.08);
        }

        .jiz-method-label {
          margin: 0 0 14px;
          color: var(--color-accent-secondary);
        }

        .jiz-method-stage h4 {
          margin: 0 0 12px;
          font: var(--text-h3);
          font-size: clamp(1.1rem, 1.8vw, 1.45rem);
        }

        .jiz-method-stage p:last-child {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: 0.95rem;
        }

        .jiz-capability-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(34px, 5vw, 72px);
          margin-top: clamp(60px, 7vw, 92px);
          padding-top: clamp(42px, 5vw, 64px);
          border-top: 1px solid rgba(100, 225, 255, 0.09);
        }

        .jiz-capability-group + .jiz-capability-group {
          border-left: 1px solid rgba(100, 225, 255, 0.08);
          padding-left: clamp(28px, 4vw, 54px);
        }

        .jiz-capability-group h4 {
          margin: 0;
          color: var(--color-accent-secondary);
        }

        .jiz-capability-group > p {
          margin: 10px 0 24px;
          color: var(--color-text-muted);
          font: var(--text-caption);
        }

        .jiz-capability-group ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 13px;
        }

        .jiz-capability-group li {
          position: relative;
          padding-left: 16px;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: 0.95rem;
        }

        .jiz-capability-group li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.7em;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(100, 225, 255, 0.72);
        }

        .jiz-career-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 28px;
          margin-bottom: 34px;
        }

        .jiz-career-controls {
          display: flex;
          gap: 10px;
        }

        .jiz-career-control {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(100, 225, 255, 0.18);
          background: rgba(255, 255, 255, 0.018);
          color: var(--color-text-primary);
          cursor: pointer;
          transition:
            opacity var(--motion-fast) var(--ease-standard),
            transform var(--motion-fast) var(--ease-standard);
        }

        .jiz-career-control:hover:not(:disabled) {
          transform: translateY(-2px);
        }

        .jiz-career-control:disabled {
          opacity: 0.28;
          cursor: default;
        }

        .jiz-career-viewport {
          overflow-x: auto;
          overscroll-behavior-inline: contain;
          scroll-snap-type: x mandatory;
          scrollbar-width: thin;
          scrollbar-color: rgba(100, 225, 255, 0.2) transparent;
          padding: 28px 0 22px;
        }

        .jiz-career-track {
          position: relative;
          display: flex;
          min-width: max-content;
          gap: clamp(28px, 4vw, 62px);
          padding: 0 clamp(16px, 4vw, 60px);
        }

        .jiz-career-track::before {
          content: '';
          position: absolute;
          left: 30px;
          right: 30px;
          top: 32px;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(100, 225, 255, 0.18),
            rgba(100, 225, 255, 0.48),
            rgba(198, 242, 58, 0.48)
          );
        }

        .jiz-career-node {
          position: relative;
          scroll-snap-align: center;
          width: clamp(154px, 15vw, 210px);
          padding: 0;
          border: 0;
          background: transparent;
          color: inherit;
          text-align: left;
          cursor: pointer;
        }

        .jiz-career-dot {
          position: relative;
          z-index: 1;
          display: block;
          width: 18px;
          height: 18px;
          margin: 0 0 26px;
          border-radius: 50%;
          border: 1px solid rgba(100, 225, 255, 0.65);
          background: #0b0d10;
          box-shadow: 0 0 0 6px rgba(100, 225, 255, 0.045);
          transition:
            transform var(--motion-standard) var(--ease-enter),
            background var(--motion-standard) var(--ease-enter),
            box-shadow var(--motion-standard) var(--ease-enter);
        }

        .jiz-career-node[data-type='education'] .jiz-career-dot {
          border-color: var(--color-accent-secondary);
        }

        .jiz-career-node.is-active .jiz-career-dot {
          transform: scale(1.28);
          border-color: var(--color-accent-primary);
          background: var(--color-accent-primary);
          box-shadow:
            0 0 0 8px rgba(198, 242, 58, 0.08),
            0 0 30px rgba(198, 242, 58, 0.16);
        }

        .jiz-career-stage {
          display: block;
          margin-bottom: 8px;
          color: var(--color-text-primary);
          font: var(--text-h3);
          font-size: 1rem;
        }

        .jiz-career-years,
        .jiz-career-org {
          display: block;
          color: var(--color-text-muted);
          font: var(--text-caption);
        }

        .jiz-career-org {
          margin-top: 8px;
          color: var(--color-text-secondary);
        }

        .jiz-career-detail {
          margin-top: 36px;
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.25fr);
          gap: clamp(34px, 5vw, 72px);
          padding: clamp(28px, 4vw, 50px);
          border-radius: var(--radius-lg);
          border: 1px solid rgba(100, 225, 255, 0.1);
          background:
            linear-gradient(135deg, rgba(100, 225, 255, 0.035), rgba(255, 255, 255, 0.012));
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.035);
        }

        .jiz-career-detail h4 {
          margin: 0;
          font: var(--text-h2);
          font-size: clamp(1.55rem, 3vw, 2.45rem);
          letter-spacing: -0.035em;
        }

        .jiz-career-detail-org {
          margin: 10px 0 0;
          color: var(--color-accent-secondary);
          font: var(--text-body-lg);
        }

        .jiz-career-summary {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-body);
        }

        .jiz-career-detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          margin-top: 26px;
        }

        .jiz-career-detail-grid h5 {
          margin: 0 0 12px;
          color: var(--color-text-muted);
        }

        .jiz-career-detail-grid ul {
          margin: 0;
          padding-left: 18px;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: 0.93rem;
        }

        .jiz-beliefs {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: clamp(78px, 9vw, 112px);
          padding: clamp(34px, 4vw, 54px) 0;
          border-top: 1px solid rgba(100, 225, 255, 0.09);
          border-bottom: 1px solid rgba(100, 225, 255, 0.09);
        }

        .jiz-belief {
          position: relative;
          padding: 0 clamp(22px, 3vw, 42px);
        }

        .jiz-belief:first-child {
          padding-left: 0;
        }

        .jiz-belief:last-child {
          padding-right: 0;
        }

        .jiz-belief + .jiz-belief {
          border-left: 1px solid rgba(100, 225, 255, 0.08);
        }

        .jiz-belief h4 {
          margin: 0 0 12px;
          font: var(--text-h3);
          font-size: 1.05rem;
        }

        .jiz-belief p {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: 0.92rem;
        }

        .jiz-about-transition {
          position: relative;
          margin-top: clamp(112px, 13vw, 168px);
          padding: clamp(78px, 9vw, 120px) 0 clamp(36px, 4vw, 58px);
          text-align: center;
        }

        .jiz-about-transition::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          width: min(78vw, 980px);
          height: 1px;
          transform: translateX(-50%);
          background: linear-gradient(90deg, transparent, rgba(100, 225, 255, 0.22), transparent);
        }

        .jiz-about-transition h3 {
          margin: 0;
          font: var(--text-h1);
          font-size: clamp(2.25rem, 4.8vw, 4.4rem);
          line-height: 1.02;
          letter-spacing: -0.045em;
        }

        .jiz-about-transition h3 span {
          color: var(--color-accent-primary);
        }

        .jiz-about-transition p {
          margin: 22px auto 0;
          color: var(--color-text-secondary);
          font: var(--text-body-lg);
        }

        .jiz-reveal {
          opacity: 0;
          transform: translateY(18px);
          transition:
            opacity 700ms var(--ease-enter),
            transform 700ms var(--ease-enter);
        }

        .jiz-about-v2.is-visible .jiz-reveal {
          opacity: 1;
          transform: none;
        }

        .jiz-about-v2.is-visible .jiz-reveal:nth-child(2) {
          transition-delay: 80ms;
        }

        @media (max-width: 980px) {
          .jiz-about-mind {
            grid-template-columns: 1fr;
          }

          .jiz-thinking-wrap {
            margin-top: 8px;
          }

          .jiz-method-path {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 34px;
          }

          .jiz-method-path::before {
            display: none;
          }

          .jiz-method-stage {
            padding: 26px 0 0 28px;
            border-top: 1px solid rgba(100, 225, 255, 0.11);
          }

          .jiz-method-node {
            top: 18px;
            left: 0;
          }

          .jiz-capability-grid {
            grid-template-columns: 1fr;
          }

          .jiz-capability-group + .jiz-capability-group {
            padding: 34px 0 0;
            border-left: 0;
            border-top: 1px solid rgba(100, 225, 255, 0.08);
          }

          .jiz-career-detail {
            grid-template-columns: 1fr;
          }

          .jiz-beliefs {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 34px 0;
          }

          .jiz-belief:nth-child(3) {
            border-left: 0;
            padding-left: 0;
          }
        }

        @media (max-width: 620px) {
          .jiz-about-v2 {
            padding-inline: max(20px, var(--container-pad));
          }

          .jiz-about-title {
            font-size: clamp(2.45rem, 13vw, 3.6rem);
          }

          .jiz-thinking-label {
            display: block;
          }

          .jiz-thinking-label span {
            display: block;
            margin-top: 8px;
            text-align: left;
          }

          .jiz-method-path {
            grid-template-columns: 1fr;
          }

          .jiz-career-header {
            display: block;
          }

          .jiz-career-controls {
            margin-top: 24px;
          }

          .jiz-career-detail-grid {
            grid-template-columns: 1fr;
          }

          .jiz-beliefs {
            grid-template-columns: 1fr;
          }

          .jiz-belief,
          .jiz-belief:first-child,
          .jiz-belief:last-child {
            padding: 24px 0;
          }

          .jiz-belief + .jiz-belief,
          .jiz-belief:nth-child(3) {
            border-left: 0;
            border-top: 1px solid rgba(100, 225, 255, 0.08);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .jiz-about-v2 *,
          .jiz-about-v2 *::before,
          .jiz-about-v2 *::after {
            scroll-behavior: auto !important;
            animation: none !important;
            transition-duration: 0.01ms !important;
          }

          .jiz-reveal {
            opacity: 1;
            transform: none;
          }
        }
      `), /*#__PURE__*/React.createElement("div", {
    className: "jiz-about-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-about-movement jiz-about-mind"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-reveal"
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-about-eyebrow"
  }, "ABOUT / THE MIND"), /*#__PURE__*/React.createElement("h2", {
    id: "about-v2-title",
    className: "jiz-about-title"
  }, "How Jonathan thinks."), /*#__PURE__*/React.createElement("p", {
    className: "jiz-about-thesis"
  }, "I reveal the patterns beneath complexity and turn them into experiences people can understand, use, and adopt."), /*#__PURE__*/React.createElement("p", {
    className: "jiz-about-copy"
  }, "I begin by mapping the relationship between people, information, systems, and behavior. Before I design content, I design understanding\u2014revealing what matters, where friction exists, and what will move people forward."), /*#__PURE__*/React.createElement("p", {
    className: "jiz-about-copy"
  }, "My work brings together learning strategy, cinematic storytelling, digital experience design, and AI-enabled production to create solutions that are clear, useful, and built for adoption."), /*#__PURE__*/React.createElement("div", {
    className: "jiz-about-actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "jiz-about-action jiz-about-action-primary",
    href: RESUME_URL,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: onResume
  }, "View r\xE9sum\xE9"), /*#__PURE__*/React.createElement("a", {
    className: "jiz-about-action jiz-about-action-secondary",
    href: LINKEDIN_URL,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: onLinkedIn
  }, "LinkedIn"))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-thinking-wrap jiz-reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-thinking-stage"
  }, /*#__PURE__*/React.createElement("video", {
    className: "jiz-thinking-video",
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    preload: "metadata",
    "aria-label": "Thinking Engine visualization showing complexity becoming clarity"
  }, /*#__PURE__*/React.createElement("source", {
    src: THINKING_ENGINE_SRC,
    type: "video/mp4"
  }), "Your browser does not support the Thinking Engine video.")), /*#__PURE__*/React.createElement("div", {
    className: "jiz-thinking-reflection",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "jiz-thinking-label"
  }, /*#__PURE__*/React.createElement("strong", null, "THINKING ENGINE"), /*#__PURE__*/React.createElement("span", null, "Complexity \u2192 Pattern \u2192 Structure \u2192 Clarity \u2192 Impact")))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-about-movement"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-movement-heading jiz-reveal"
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-about-eyebrow"
  }, "THE METHOD"), /*#__PURE__*/React.createElement("h3", {
    className: "jiz-movement-title"
  }, "How thought becomes action."), /*#__PURE__*/React.createElement("p", {
    className: "jiz-movement-description"
  }, "A connected practice for moving from ambiguity to experiences people can understand and use.")), /*#__PURE__*/React.createElement("div", {
    className: "jiz-method-path jiz-reveal",
    "aria-label": "Jonathan's five-stage methodology"
  }, methodStages.map(stage => /*#__PURE__*/React.createElement("article", {
    className: "jiz-method-stage",
    key: stage.id
  }, /*#__PURE__*/React.createElement("span", {
    className: "jiz-method-node",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("p", {
    className: "jiz-method-label jiz-about-meta"
  }, stage.label), /*#__PURE__*/React.createElement("h4", null, stage.title), /*#__PURE__*/React.createElement("p", null, stage.copy)))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-capability-grid jiz-reveal"
  }, capabilityGroups.map(group => /*#__PURE__*/React.createElement("section", {
    className: "jiz-capability-group",
    key: group.title
  }, /*#__PURE__*/React.createElement("h4", {
    className: "jiz-about-meta"
  }, group.title), /*#__PURE__*/React.createElement("p", null, group.subtitle), /*#__PURE__*/React.createElement("ul", null, group.items.map(item => /*#__PURE__*/React.createElement("li", {
    key: item
  }, item))))))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-about-movement"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-header jiz-reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-movement-heading",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-about-eyebrow"
  }, "THE JOURNEY"), /*#__PURE__*/React.createElement("h3", {
    className: "jiz-movement-title"
  }, "Built through experience."), /*#__PURE__*/React.createElement("p", {
    className: "jiz-movement-description"
  }, "Explore how learning, systems, technology, and storytelling shaped the practice.")), /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-controls",
    "aria-label": "Career journey controls"
  }, /*#__PURE__*/React.createElement("button", {
    className: "jiz-career-control",
    type: "button",
    "aria-label": "Previous career milestone",
    disabled: activeIndex === 0,
    onClick: () => selectCareerEntry(activeIndex - 1)
  }, "\u2190"), /*#__PURE__*/React.createElement("button", {
    className: "jiz-career-control",
    type: "button",
    "aria-label": "Next career milestone",
    disabled: activeIndex === careerEntries.length - 1,
    onClick: () => selectCareerEntry(activeIndex + 1)
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    ref: railRef,
    className: "jiz-career-viewport jiz-reveal",
    tabIndex: "0",
    role: "region",
    "aria-label": "Interactive career journey. Use left and right arrow keys to explore.",
    onKeyDown: handleRailKeyDown
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-track"
  }, careerEntries.map((entry, index) => /*#__PURE__*/React.createElement("button", {
    key: entry.id,
    ref: element => {
      nodeRefs.current[index] = element;
    },
    className: `jiz-career-node ${activeIndex === index ? 'is-active' : ''}`,
    "data-type": entry.type,
    type: "button",
    "aria-pressed": activeIndex === index,
    onClick: () => selectCareerEntry(index)
  }, /*#__PURE__*/React.createElement("span", {
    className: "jiz-career-dot",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "jiz-career-stage"
  }, entry.stage), /*#__PURE__*/React.createElement("span", {
    className: "jiz-career-years"
  }, entry.years), /*#__PURE__*/React.createElement("span", {
    className: "jiz-career-org"
  }, entry.organization))))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-detail jiz-reveal",
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "jiz-about-eyebrow"
  }, activeCareer.years), /*#__PURE__*/React.createElement("h4", null, activeCareer.title), /*#__PURE__*/React.createElement("p", {
    className: "jiz-career-detail-org"
  }, activeCareer.organization)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "jiz-career-summary"
  }, activeCareer.summary), /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-detail-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "jiz-about-meta"
  }, "SELECTED IMPACT"), /*#__PURE__*/React.createElement("ul", null, activeCareer.highlights.map(highlight => /*#__PURE__*/React.createElement("li", {
    key: highlight
  }, highlight)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "jiz-about-meta"
  }, "CAPABILITIES"), /*#__PURE__*/React.createElement("ul", null, activeCareer.capabilities.map(capability => /*#__PURE__*/React.createElement("li", {
    key: capability
  }, capability))))))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-beliefs jiz-reveal",
    "aria-label": "Core beliefs"
  }, beliefs.map(belief => /*#__PURE__*/React.createElement("article", {
    className: "jiz-belief",
    key: belief.title
  }, /*#__PURE__*/React.createElement("h4", null, belief.title), /*#__PURE__*/React.createElement("p", null, belief.copy))))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-about-transition jiz-reveal"
  }, /*#__PURE__*/React.createElement("h3", null, "Understanding changes ", /*#__PURE__*/React.createElement("span", null, "everything.")), /*#__PURE__*/React.createElement("p", null, "Here's what that understanding created."))));
}
if (typeof window !== 'undefined') {
  window.AboutV2 = AboutV2;
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-website/archive/About_v2_CHECKPOINT_pre-v3.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-website/archive/About_v2_Fixed.jsx
try { (() => {
function AboutV2({
  onResume,
  onLinkedIn,
  onSelectedWork
}) {
  const sectionRef = React.useRef(null);
  const railRef = React.useRef(null);
  const nodeRefs = React.useRef([]);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [activeMethodIndex, setActiveMethodIndex] = React.useState(0);
  const [methodVisible, setMethodVisible] = React.useState(false);
  const [methodPaused, setMethodPaused] = React.useState(false);
  const methodRef = React.useRef(null);
  const modalTriggerRef = React.useRef(null);
  const LINKEDIN_URL = 'https://www.linkedin.com/in/jonathanzamarripa/';
  const RESUME_URL = 'https://elearningportfolio-jz.s3.us-east-1.amazonaws.com/Public_Career_Overview.pdf';
  const THINKING_ENGINE_SRC = './assets/video/about-me-thinking-engine.mp4';
  const methodStages = [{
    id: 'observe',
    label: '01',
    title: 'Observe',
    copy: 'See the full system before defining the solution.'
  }, {
    id: 'understand',
    label: '02',
    title: 'Understand',
    copy: 'Reveal the patterns, friction, behaviors, and decisions shaping the experience.'
  }, {
    id: 'design',
    label: '03',
    title: 'Design',
    copy: 'Create the structure, story, and interaction that make understanding possible.'
  }, {
    id: 'build',
    label: '04',
    title: 'Build',
    copy: 'Produce the learning, media, tools, and systems required for adoption.'
  }, {
    id: 'transform',
    label: '05',
    title: 'Transform',
    copy: 'Turn clarity into action, confidence, and measurable movement.'
  }];
  const capabilityGroups = [{
    title: 'DESIGN',
    subtitle: 'What I architect',
    items: ['Learning systems', 'Experience strategy', 'Behavior change', 'Information architecture', 'Human-centered design']
  }, {
    title: 'BUILD',
    subtitle: 'What I create',
    items: ['Articulate Storyline', 'Camtasia', 'Adobe Creative Cloud', 'Figma', 'Motion and video', 'AI production workflows']
  }, {
    title: 'KNOWN FOR',
    subtitle: 'What differentiates the work',
    items: ['Systems thinking', 'Creative direction', 'Enterprise learning', 'Rapid prototyping', 'Translating complexity into clarity']
  }];
  const careerEntries = [{
    id: 'foundation',
    stage: 'Foundation',
    years: 'Eight-year foundation',
    organization: 'K–12 STEAM & Robotics',
    title: 'Classroom and Program Leadership',
    summary: 'Built a practical understanding of how people learn by teaching STEAM, leading a robotics program, and turning limited resources into meaningful experiences.',
    highlights: ['Coached a regional championship robotics team', 'Secured more than $20,000 in program funding', 'Developed a learner-first leadership practice'],
    capabilities: ['Facilitation', 'Program leadership', 'STEAM learning'],
    type: 'role'
  }, {
    id: 'gstate',
    stage: 'Storytelling',
    years: '2009',
    organization: 'Georgia State University',
    title: 'B.A., Journalism — Film & Video',
    summary: 'Built the cinematic and editorial foundation that now shapes the way complex ideas are framed, paced, and made memorable.',
    highlights: ['Film and video concentration', 'Narrative structure and visual communication', 'Production craft grounded in journalism'],
    capabilities: ['Storytelling', 'Video production', 'Editorial thinking'],
    type: 'education'
  }, {
    id: 'ais',
    stage: 'Systems',
    years: '2019–2024',
    organization: 'Atlanta International School',
    title: 'EdTech & Innovation Coach / Strategist',
    summary: 'Founded a digital learning function without an existing playbook, connecting instructional design, systems, content, and analytics into one practice.',
    highlights: ['Led an organization-wide LMS migration', 'Achieved 95% adoption and 4.9/5 satisfaction', 'Built analytics and needs-assessment infrastructure'],
    capabilities: ['Learning systems', 'Change leadership', 'Analytics'],
    type: 'role'
  }, {
    id: 'asu',
    stage: 'Research',
    years: '2023',
    organization: 'Arizona State University',
    title: 'M.Ed., Instructional Design & Technology',
    summary: 'Formalized a systems-based learning practice through advanced study in instructional design, technology, evaluation, and human-centered learning.',
    highlights: ['Graduated Summa Cum Laude', 'Connected learning science to production practice', 'Expanded expertise in evaluation and design strategy'],
    capabilities: ['Learning science', 'Research', 'Evaluation'],
    type: 'education'
  }, {
    id: 'cox',
    stage: 'Enterprise',
    years: '2025',
    organization: 'Cox Enterprises',
    title: 'Learning Experience Designer',
    summary: 'Designed enterprise learning experiences and AI-assisted production workflows for leadership development, systems adoption, and organizational change.',
    highlights: ['Accelerated content development by 40%', 'Supported a Workday Learn launch reaching 98% Q1 adoption', 'Designed a narrative-driven enterprise escape room'],
    capabilities: ['Enterprise learning', 'AI workflows', 'Storyline'],
    type: 'role'
  }, {
    id: 'ihg',
    stage: 'Scale',
    years: '2025–2026',
    organization: 'IHG Hotels & Resorts',
    title: 'Creative Content Specialist / Developer',
    summary: 'Combined learning strategy, cinematic production, and AI-enabled workflows to create global technology communication and onboarding experiences.',
    highlights: ['Produced enterprise onboarding and adoption content', 'Built repeatable AI-enabled production workflows', 'Partnered across Product, Engineering, UX, and Cybersecurity'],
    capabilities: ['Creative direction', 'Video', 'AI-native production'],
    type: 'current'
  }, {
    id: 'next',
    stage: 'What\'s Next',
    years: 'Future chapter',
    organization: 'The next organization or collaboration',
    title: 'Learning Experience Strategist · Filmmaker · AI-Native Producer',
    summary: 'Bringing learning science, cinematic craft, and AI-native production together to help organizations move from complexity to confident action.',
    highlights: ['Enterprise learning strategy', 'Cinematic learning systems', 'AI-enabled creative production'],
    capabilities: ['Strategy', 'Direction', 'Transformation'],
    type: 'future'
  }];
  const beliefs = [{
    title: 'Intelligence',
    copy: 'I look beneath the obvious to understand how systems, people, and decisions connect.'
  }, {
    title: 'Confidence',
    copy: 'I make clear decisions while remaining open to evidence, feedback, and change.'
  }, {
    title: 'Self-awareness',
    copy: 'I understand how my perspective shapes the work and where collaboration strengthens it.'
  }, {
    title: 'Empathy',
    copy: 'I design for the person who must understand, use, and live with the outcome.'
  }];
  React.useEffect(() => {
    if (!sectionRef.current || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.06
    });
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  const selectCareerEntry = React.useCallback((index, behavior = 'smooth') => {
    const bounded = Math.max(0, Math.min(index, careerEntries.length - 1));
    setActiveIndex(bounded);
    const viewport = railRef.current;
    const node = nodeRefs.current[bounded];
    if (viewport && node) {
      const targetLeft = node.offsetLeft - viewport.clientWidth / 2 + node.offsetWidth / 2;
      viewport.scrollTo({
        left: Math.max(0, targetLeft),
        behavior
      });
    }
  }, []);
  const handleRailKeyDown = event => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      selectCareerEntry(activeIndex + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      selectCareerEntry(activeIndex - 1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      selectCareerEntry(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      selectCareerEntry(careerEntries.length - 1);
    }
  };
  const activeCareer = careerEntries[activeIndex];
  React.useEffect(() => {
    if (!modalOpen) return;
    const handleEscape = e => e.key === 'Escape' && setModalOpen(false);
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    setTimeout(() => modalTriggerRef.current?.focus(), 0);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [modalOpen]);
  React.useEffect(() => {
    if (!methodVisible || methodPaused || prefersReduced?.()) return;
    const interval = setInterval(() => {
      setActiveMethodIndex(i => (i + 1) % methodStages.length);
    }, activeMethodIndex === 3 ? 4000 : 2400);
    return () => clearInterval(interval);
  }, [methodVisible, methodPaused, activeMethodIndex]);
  React.useEffect(() => {
    if (!methodRef.current) return;
    const io = new IntersectionObserver(([e]) => setMethodVisible(e.isIntersecting), {
      threshold: 0.3
    });
    io.observe(methodRef.current);
    return () => io.disconnect();
  }, []);
  const prefersReduced = () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-motion: reduce)').matches;
  return /*#__PURE__*/React.createElement("section", {
    ref: sectionRef,
    className: `jiz-about-master ${isVisible ? 'is-visible' : ''}`,
    "aria-labelledby": "about-master-title"
  }, /*#__PURE__*/React.createElement("style", null, `
        .jiz-about-master {
          --about-max: 1360px;
          position: relative;
          overflow: hidden;
          padding: clamp(78px, 8vw, 118px) var(--container-pad) clamp(112px, 12vw, 176px);
          color: var(--color-text-primary);
          background:
            radial-gradient(circle at 50% 13%, rgba(100, 225, 255, 0.09), transparent 34%),
            radial-gradient(circle at 78% 29%, rgba(198, 242, 58, 0.045), transparent 27%),
            linear-gradient(180deg, rgba(8, 13, 16, 0.12) 0%, #0b0d10 22%, #0b0d10 100%);
        }

        .jiz-about-master::before,
        .jiz-about-master::after {
          content: '';
          position: absolute;
          pointer-events: none;
          border-radius: 50%;
          filter: blur(80px);
        }

        .jiz-about-master::before {
          width: 40vw;
          height: 34vw;
          right: -12vw;
          top: 8%;
          background: rgba(100, 225, 255, 0.055);
        }

        .jiz-about-master::after {
          width: 28vw;
          height: 25vw;
          left: -12vw;
          top: 27%;
          background: rgba(198, 242, 58, 0.025);
        }

        .jiz-about-inner {
          position: relative;
          z-index: 1;
          width: min(100%, var(--about-max));
          margin: 0 auto;
        }

        .jiz-scene-opening {
          text-align: center;
        }

        .jiz-eyebrow,
        .jiz-meta {
          font: var(--text-eyebrow);
          letter-spacing: var(--tracking-eyebrow);
          text-transform: uppercase;
        }

        .jiz-eyebrow {
          margin: 0 0 18px;
          color: var(--color-accent-secondary);
        }

        .jiz-opening-title {
          max-width: 1000px;
          margin: 0 auto;
          font: var(--text-h1);
          font-size: clamp(3rem, 6.6vw, 6.4rem);
          line-height: 0.96;
          letter-spacing: -0.055em;
          text-wrap: balance;
        }

        .jiz-opening-thesis {
          max-width: 840px;
          margin: 26px auto 0;
          color: var(--color-text-primary);
          font: var(--text-body-lg);
          font-size: clamp(1.02rem, 1.7vw, 1.28rem);
          line-height: 1.62;
        }

        .jiz-opening-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .jiz-action {
          min-height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 23px;
          border-radius: var(--radius-pill);
          font: var(--text-button);
          text-decoration: none;
          transition:
            transform var(--motion-fast) var(--ease-standard),
            border-color var(--motion-fast) var(--ease-standard),
            background var(--motion-fast) var(--ease-standard);
        }

        .jiz-action:hover { transform: translateY(-2px); }
        .jiz-action:focus-visible,
        .jiz-career-control:focus-visible,
        .jiz-career-node:focus-visible {
          outline: 2px solid var(--color-accent-primary);
          outline-offset: 4px;
        }

        .jiz-action-primary {
          background: var(--color-accent-primary);
          color: #0b0d10;
        }

        .jiz-action-secondary {
          border: 1px solid rgba(100, 225, 255, 0.28);
          background: rgba(255, 255, 255, 0.015);
          color: var(--color-text-primary);
        }

        .jiz-engine-shell {
          position: relative;
          width: min(92vw, 1240px);
          margin: clamp(48px, 6vw, 76px) auto 0;
          isolation: isolate;
        }

        .jiz-engine-shell::before {
          content: '';
          position: absolute;
          z-index: -2;
          inset: -16%;
          background:
            radial-gradient(circle at 52% 43%, rgba(100, 225, 255, 0.22), transparent 42%),
            radial-gradient(circle at 68% 57%, rgba(198, 242, 58, 0.12), transparent 32%);
          filter: blur(54px);
          opacity: 0.68;
        }

        .jiz-engine-stage {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #080d10;
          border-radius: clamp(18px, 2vw, 28px);
          box-shadow: 0 52px 130px rgba(0, 0, 0, 0.48);
          -webkit-mask-image: radial-gradient(ellipse 101% 103% at 50% 50%, #000 72%, rgba(0,0,0,.92) 86%, transparent 100%);
          mask-image: radial-gradient(ellipse 101% 103% at 50% 50%, #000 72%, rgba(0,0,0,.92) 86%, transparent 100%);
        }

        .jiz-engine-stage::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 50% 50%, transparent 54%, rgba(8, 13, 16, 0.24) 82%, rgba(8, 13, 16, 0.72) 100%);
        }

        .jiz-engine-video {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain;
          background: #080d10;
        }

        .jiz-engine-reflection {
          width: 78%;
          height: 42px;
          margin: -2px auto 0;
          background: linear-gradient(180deg, rgba(100, 225, 255, 0.07), transparent);
          filter: blur(12px);
          opacity: 0.62;
        }

        .jiz-engine-caption {
          max-width: 720px;
          margin: 17px auto 0;
          text-align: center;
        }

        .jiz-engine-caption strong {
          display: block;
          color: var(--color-text-primary);
          font: var(--text-caption);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .jiz-engine-caption span {
          display: block;
          margin-top: 7px;
          color: var(--color-text-muted);
          font: var(--text-body);
          font-size: 0.94rem;
        }

        .jiz-opening-copy {
          width: min(100%, 1040px);
          margin: clamp(56px, 7vw, 92px) auto 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(34px, 5vw, 76px);
          text-align: left;
        }

        .jiz-opening-copy p {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: clamp(0.98rem, 1.4vw, 1.08rem);
          line-height: 1.78;
        }

        .jiz-movement {
          margin-top: clamp(112px, 13vw, 172px);
        }

        .jiz-movement-heading {
          max-width: 760px;
          margin-bottom: clamp(40px, 5vw, 62px);
        }

        .jiz-movement-title {
          margin: 0;
          font: var(--text-h2);
          letter-spacing: -0.04em;
        }

        .jiz-movement-copy {
          max-width: 650px;
          margin: 17px 0 0;
          color: var(--color-text-secondary);
          font: var(--text-body-lg);
        }

        .jiz-method-path {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: clamp(18px, 2.5vw, 34px);
        }

        .jiz-method-path::before {
          content: '';
          position: absolute;
          top: 24px;
          left: 4%;
          right: 4%;
          height: 1px;
          background: linear-gradient(90deg, rgba(100,225,255,.12), rgba(100,225,255,.6), rgba(198,242,58,.72));
        }

        .jiz-method-stage {
          position: relative;
          padding-top: 54px;
        }

        .jiz-method-node {
          position: absolute;
          top: 16px;
          left: 0;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid rgba(100,225,255,.75);
          background: #0b0d10;
          box-shadow: 0 0 0 5px rgba(100,225,255,.05);
        }

        .jiz-method-stage:last-child .jiz-method-node {
          border-color: var(--color-accent-primary);
          background: var(--color-accent-primary);
          box-shadow: 0 0 0 6px rgba(198,242,58,.08);
        }

        .jiz-method-stage h4 {
          margin: 0 0 11px;
          font: var(--text-h3);
          font-size: clamp(1.08rem, 1.8vw, 1.42rem);
        }

        .jiz-method-stage p:last-child {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: 0.94rem;
        }

        .jiz-method-label {
          margin: 0 0 12px;
          color: var(--color-accent-secondary);
        }

        .jiz-capabilities {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(34px, 5vw, 72px);
          margin-top: clamp(58px, 7vw, 88px);
          padding-top: clamp(40px, 5vw, 62px);
          border-top: 1px solid rgba(100,225,255,.09);
        }

        .jiz-capability + .jiz-capability {
          border-left: 1px solid rgba(100,225,255,.08);
          padding-left: clamp(28px, 4vw, 52px);
        }

        .jiz-capability h4 {
          margin: 0;
          color: var(--color-accent-secondary);
        }

        .jiz-capability > p {
          margin: 9px 0 22px;
          color: var(--color-text-muted);
          font: var(--text-caption);
        }

        .jiz-capability ul {
          list-style: none;
          display: grid;
          gap: 12px;
          margin: 0;
          padding: 0;
        }

        .jiz-capability li {
          position: relative;
          padding-left: 15px;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: 0.94rem;
        }

        .jiz-capability li::before {
          content: '';
          position: absolute;
          left: 0;
          top: .7em;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(100,225,255,.72);
        }

        .jiz-career-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 26px;
          margin-bottom: 34px;
        }

        .jiz-career-controls {
          display: flex;
          gap: 10px;
        }

        .jiz-career-control {
          min-width: 50px;
          height: 44px;
          border-radius: 4px;
          border: 1px solid rgba(100,225,255,.18);
          background: rgba(255,255,255,.016);
          color: var(--color-text-primary);
          cursor: pointer;
          padding: 0 8px;
          white-space: nowrap;
          font: var(--text-button);
          font-size: 0.85rem;
        }

        .jiz-career-control:disabled {
          opacity: .28;
          cursor: default;
        }

        .jiz-career-viewport {
          overflow-x: auto;
          overscroll-behavior-inline: contain;
          scroll-snap-type: x mandatory;
          padding: 28px 0 22px;
          scrollbar-width: thin;
          scrollbar-color: rgba(100,225,255,.2) transparent;
        }

        .jiz-career-track {
          position: relative;
          display: flex;
          min-width: max-content;
          gap: clamp(28px, 4vw, 62px);
          padding: 0 clamp(16px, 4vw, 58px);
        }

        .jiz-career-track::before {
          content: '';
          position: absolute;
          left: 30px;
          right: 30px;
          top: 32px;
          height: 1px;
          background: linear-gradient(90deg, rgba(100,225,255,.18), rgba(100,225,255,.48), rgba(198,242,58,.48));
        }

        .jiz-career-node {
          position: relative;
          width: clamp(154px, 15vw, 210px);
          padding: 0;
          border: 0;
          background: transparent;
          color: inherit;
          text-align: left;
          cursor: pointer;
          scroll-snap-align: center;
        }

        .jiz-career-dot {
          position: relative;
          z-index: 1;
          display: block;
          width: 18px;
          height: 18px;
          margin: 0 0 25px;
          border-radius: 50%;
          border: 1px solid rgba(100,225,255,.65);
          background: #0b0d10;
          box-shadow: 0 0 0 6px rgba(100,225,255,.045);
          transition: transform var(--motion-standard) var(--ease-enter), background var(--motion-standard) var(--ease-enter), box-shadow var(--motion-standard) var(--ease-enter);
        }

        .jiz-career-node[data-type='education'] .jiz-career-dot {
          border-color: var(--color-accent-secondary);
        }

        .jiz-career-node.is-active .jiz-career-dot {
          transform: scale(1.28);
          border-color: var(--color-accent-primary);
          background: var(--color-accent-primary);
          box-shadow: 0 0 0 8px rgba(198,242,58,.08), 0 0 30px rgba(198,242,58,.16);
        }

        .jiz-career-stage {
          display: block;
          margin-bottom: 8px;
          color: var(--color-text-primary);
          font: var(--text-h3);
          font-size: 1rem;
        }

        .jiz-career-years,
        .jiz-career-org {
          display: block;
          color: var(--color-text-muted);
          font: var(--text-caption);
        }

        .jiz-career-org {
          margin-top: 8px;
          color: var(--color-text-secondary);
        }

        .jiz-career-detail {
          display: grid;
          grid-template-columns: minmax(0,.9fr) minmax(0,1.25fr);
          gap: clamp(34px,5vw,72px);
          margin-top: 36px;
          padding: clamp(28px,4vw,50px);
          border: 1px solid rgba(100,225,255,.1);
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, rgba(100,225,255,.035), rgba(255,255,255,.012));
          box-shadow: inset 0 1px 0 rgba(255,255,255,.035);
        }

        .jiz-career-detail h4 {
          margin: 0;
          font: var(--text-h2);
          font-size: clamp(1.55rem,3vw,2.45rem);
          letter-spacing: -.035em;
        }

        .jiz-career-org-detail {
          margin: 10px 0 0;
          color: var(--color-accent-secondary);
          font: var(--text-body-lg);
        }

        .jiz-career-summary {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-body);
        }

        .jiz-career-detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          margin-top: 26px;
        }

        .jiz-career-detail-grid h5 {
          margin: 0 0 12px;
          color: var(--color-text-muted);
        }

        .jiz-career-detail-grid ul {
          margin: 0;
          padding-left: 18px;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: .93rem;
        }

        .jiz-beliefs {
          display: grid;
          grid-template-columns: repeat(4,minmax(0,1fr));
          margin-top: clamp(76px,9vw,108px);
          padding: clamp(34px,4vw,52px) 0;
          border-top: 1px solid rgba(100,225,255,.09);
          border-bottom: 1px solid rgba(100,225,255,.09);
        }

        .jiz-belief {
          padding: 0 clamp(22px,3vw,40px);
        }

        .jiz-belief:first-child { padding-left: 0; }
        .jiz-belief:last-child { padding-right: 0; }

        .jiz-belief + .jiz-belief {
          border-left: 1px solid rgba(100,225,255,.08);
        }

        .jiz-belief h4 {
          margin: 0 0 11px;
          font: var(--text-h3);
          font-size: 1.04rem;
        }

        .jiz-belief p {
          margin: 0;
          color: var(--color-text-secondary);
          font: var(--text-body);
          font-size: .91rem;
        }

        .jiz-scene-transition {
          margin-top: clamp(112px,13vw,168px);
          padding: clamp(76px,9vw,116px) 0 34px;
          text-align: center;
          background: radial-gradient(circle at 50% 80%, rgba(198,242,58,.035), transparent 34%);
        }

        .jiz-scene-transition h3 {
          margin: 0;
          font: var(--text-h1);
          font-size: clamp(2.25rem,4.8vw,4.4rem);
          line-height: 1.02;
          letter-spacing: -.045em;
        }

        .jiz-scene-transition h3 span { color: var(--color-accent-primary); }

        .jiz-scene-transition p {
          margin: 20px auto 0;
          color: var(--color-text-secondary);
          font: var(--text-body-lg);
        }

        .jiz-reveal {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 720ms var(--ease-enter), transform 720ms var(--ease-enter);
        }

        .jiz-about-master.is-visible .jiz-reveal {
          opacity: 1;
          transform: none;
        }

        @media (max-width: 980px) {
          .jiz-opening-copy { grid-template-columns: 1fr; }
          .jiz-method-path { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 34px; }
          .jiz-method-path::before { display: none; }
          .jiz-method-stage { padding: 26px 0 0 28px; border-top: 1px solid rgba(100,225,255,.11); }
          .jiz-method-node { top: 18px; left: 0; }
          .jiz-capabilities { grid-template-columns: 1fr; }
          .jiz-capability + .jiz-capability { padding: 34px 0 0; border-left: 0; border-top: 1px solid rgba(100,225,255,.08); }
          .jiz-career-detail { grid-template-columns: 1fr; }
          .jiz-beliefs { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 34px 0; }
          .jiz-belief:nth-child(3) { border-left: 0; padding-left: 0; }
        }

        @media (max-width: 620px) {
          .jiz-about-master { padding-inline: max(20px,var(--container-pad)); }
          .jiz-opening-title { font-size: clamp(2.55rem,14vw,3.8rem); }
          .jiz-engine-shell { width: 100%; }
          .jiz-method-path { grid-template-columns: 1fr; }
          .jiz-career-header { display: block; }
          .jiz-career-controls { margin-top: 24px; }
          .jiz-career-detail-grid { grid-template-columns: 1fr; }
          .jiz-beliefs { grid-template-columns: 1fr; }
          .jiz-belief,
          .jiz-belief:first-child,
          .jiz-belief:last-child { padding: 24px 0; }
          .jiz-belief + .jiz-belief,
          .jiz-belief:nth-child(3) { border-left: 0; border-top: 1px solid rgba(100,225,255,.08); }
        }

        @media (prefers-reduced-motion: reduce) {
          .jiz-about-master *,
          .jiz-about-master *::before,
          .jiz-about-master *::after {
            animation: none !important;
            transition-duration: .01ms !important;
            scroll-behavior: auto !important;
          }
          .jiz-reveal { opacity: 1; transform: none; }
        }
      `), /*#__PURE__*/React.createElement("div", {
    className: "jiz-about-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-scene-opening"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-reveal"
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-eyebrow"
  }, "ABOUT / THE MIND"), /*#__PURE__*/React.createElement("h2", {
    id: "about-master-title",
    className: "jiz-opening-title"
  }, "How Jonathan thinks."), /*#__PURE__*/React.createElement("p", {
    className: "jiz-opening-thesis"
  }, "I reveal the patterns beneath complexity and turn them into experiences people can understand, use, and adopt."), /*#__PURE__*/React.createElement("div", {
    className: "jiz-opening-actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "jiz-action jiz-action-primary",
    href: RESUME_URL,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: onResume
  }, "View r\xE9sum\xE9"), /*#__PURE__*/React.createElement("a", {
    className: "jiz-action jiz-action-secondary",
    href: LINKEDIN_URL,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: onLinkedIn
  }, "LinkedIn"))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-engine-shell jiz-reveal"
  }, /*#__PURE__*/React.createElement("button", {
    ref: modalTriggerRef,
    onClick: () => setModalOpen(true),
    onKeyDown: e => (e.key === 'Enter' || e.key === ' ') && setModalOpen(true),
    "aria-label": "Open Thinking Engine visualization in expanded view",
    style: {
      width: '100%',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-engine-stage"
  }, /*#__PURE__*/React.createElement("video", {
    className: "jiz-engine-video",
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    preload: "metadata",
    "aria-label": "Thinking Engine visualization showing complexity becoming clarity",
    tabIndex: "-1"
  }, /*#__PURE__*/React.createElement("source", {
    src: THINKING_ENGINE_SRC,
    type: "video/mp4"
  }), "Your browser does not support the Thinking Engine video.")), /*#__PURE__*/React.createElement("div", {
    className: "jiz-engine-reflection",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "jiz-engine-caption"
  }, /*#__PURE__*/React.createElement("strong", null, "Thinking Engine"), /*#__PURE__*/React.createElement("span", null, "The operating model behind every project."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.75rem',
      marginTop: 8,
      opacity: 0.7
    }
  }, "Open visualization \u2197"))), modalOpen && /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Thinking Engine expanded visualization",
    onClick: () => setModalOpen(false),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(8, 10, 12, 0.92)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3vmin'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'relative',
      width: 'min(1400px, 90vw)',
      aspectRatio: '16/9',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid rgba(100, 225, 255, 0.25)',
      boxShadow: '0 0 60px rgba(100, 225, 255, 0.2), 0 30px 80px rgba(0, 0, 0, 0.6)'
    }
  }, /*#__PURE__*/React.createElement("video", {
    autoPlay: true,
    muted: true,
    playsInline: true,
    style: {
      width: '100%',
      height: '100%',
      display: 'block',
      objectFit: 'contain',
      background: '#000'
    }
  }, /*#__PURE__*/React.createElement("source", {
    src: THINKING_ENGINE_SRC,
    type: "video/mp4"
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setModalOpen(false),
    "aria-label": "Close expanded visualization",
    style: {
      position: 'fixed',
      top: '3vmin',
      right: '3vmin',
      width: 48,
      height: 48,
      borderRadius: '50%',
      border: '1px solid rgba(100, 225, 255, 0.3)',
      background: 'rgba(8, 10, 12, 0.7)',
      color: 'var(--color-text-primary)',
      fontSize: 24,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--motion-fast) var(--ease-standard)'
    },
    onMouseEnter: e => e.currentTarget.style.borderColor = 'var(--color-accent-primary)',
    onMouseLeave: e => e.currentTarget.style.borderColor = 'rgba(100, 225, 255, 0.3)'
  }, "\u2715"))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-opening-copy jiz-reveal"
  }, /*#__PURE__*/React.createElement("p", null, "I begin by mapping the relationship between people, information, systems, and behavior. Before I design content, I design understanding\u2014revealing what matters, where friction exists, and what will move people forward."), /*#__PURE__*/React.createElement("p", null, "My work brings together learning strategy, cinematic storytelling, digital experience design, and AI-enabled production to create solutions that are clear, useful, and built for adoption."))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-movement",
    ref: methodRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-movement-heading jiz-reveal"
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-eyebrow"
  }, "THE METHOD"), /*#__PURE__*/React.createElement("h3", {
    className: "jiz-movement-title"
  }, "How thought becomes action."), /*#__PURE__*/React.createElement("p", {
    className: "jiz-movement-copy"
  }, "A connected practice for moving from ambiguity to experiences people can understand and use.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32,
      font: 'var(--text-caption)',
      color: 'var(--color-text-secondary)',
      textAlign: 'center'
    }
  }, !prefersReduced?.() && /*#__PURE__*/React.createElement("div", null, "Use the stages below to explore the method.")), /*#__PURE__*/React.createElement("div", {
    className: "jiz-method-path jiz-reveal",
    "aria-label": "Jonathan's five-stage methodology"
  }, methodStages.map((stage, idx) => /*#__PURE__*/React.createElement("button", {
    key: stage.id,
    onClick: () => {
      setActiveMethodIndex(idx);
      setMethodPaused(true);
      setTimeout(() => setMethodPaused(false), 8000);
    },
    onMouseEnter: () => setMethodPaused(true),
    onMouseLeave: () => setMethodPaused(false),
    onFocus: () => setMethodPaused(true),
    onBlur: () => setMethodPaused(false),
    "aria-pressed": idx === activeMethodIndex,
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      textAlign: 'left',
      color: 'inherit',
      font: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("article", {
    className: "jiz-method-stage"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jiz-method-node",
    "aria-hidden": "true",
    style: {
      borderColor: idx < activeMethodIndex ? 'var(--color-accent-secondary)' : idx === activeMethodIndex ? 'var(--signal-lime)' : 'rgba(100, 225, 255, 0.2)',
      background: idx < activeMethodIndex || idx === activeMethodIndex ? idx === activeMethodIndex ? 'var(--signal-lime)' : 'var(--color-accent-secondary)' : 'transparent'
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "jiz-method-label jiz-meta"
  }, stage.label), /*#__PURE__*/React.createElement("h4", null, stage.title), /*#__PURE__*/React.createElement("p", null, stage.copy))))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-capabilities jiz-reveal",
    style: {
      background: 'linear-gradient(135deg, rgba(8, 13, 16, 0.6) 0%, rgba(100, 225, 255, 0.08) 100%)',
      border: '1px solid rgba(100, 225, 255, 0.12)',
      borderRadius: '20px',
      padding: '48px 40px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      gap: '40px',
      position: 'relative'
    }
  }, capabilityGroups.map((group, idx) => /*#__PURE__*/React.createElement("section", {
    className: "jiz-capability",
    key: group.title,
    style: {
      paddingTop: idx === 0 ? 0 : 'inherit',
      borderTop: idx > 0 ? '1px solid rgba(100, 225, 255, 0.08)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    className: "jiz-meta"
  }, group.title), /*#__PURE__*/React.createElement("p", null, group.subtitle), /*#__PURE__*/React.createElement("ul", null, group.items.map(item => /*#__PURE__*/React.createElement("li", {
    key: item
  }, item))))))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-movement"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-header jiz-reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-movement-heading",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "jiz-eyebrow"
  }, "THE JOURNEY"), /*#__PURE__*/React.createElement("h3", {
    className: "jiz-movement-title"
  }, "Built through experience."), /*#__PURE__*/React.createElement("p", {
    className: "jiz-movement-copy"
  }, "Explore how learning, systems, technology, and storytelling shaped the practice."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--color-text-secondary)',
      marginT: 16
    }
  }, "Use the arrows, swipe, or select a milestone to explore. ", activeIndex + 1, " of ", careerEntries.length)), /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-controls",
    "aria-label": "Career journey controls"
  }, /*#__PURE__*/React.createElement("button", {
    className: "jiz-career-control",
    type: "button",
    "aria-label": "Previous career milestone",
    disabled: activeIndex === 0,
    onClick: () => selectCareerEntry(activeIndex - 1)
  }, "\u2190 Previous"), /*#__PURE__*/React.createElement("button", {
    className: "jiz-career-control",
    type: "button",
    "aria-label": "Next career milestone",
    disabled: activeIndex === careerEntries.length - 1,
    onClick: () => selectCareerEntry(activeIndex + 1)
  }, "Next \u2192"))), /*#__PURE__*/React.createElement("div", {
    ref: railRef,
    className: "jiz-career-viewport jiz-reveal",
    tabIndex: "0",
    role: "region",
    "aria-label": "Interactive career journey. Use left and right arrow keys to explore.",
    onKeyDown: handleRailKeyDown
  }, /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-track"
  }, careerEntries.map((entry, index) => /*#__PURE__*/React.createElement("button", {
    key: entry.id,
    ref: element => {
      nodeRefs.current[index] = element;
    },
    className: `jiz-career-node ${activeIndex === index ? 'is-active' : ''}`,
    "data-type": entry.type,
    type: "button",
    "aria-pressed": activeIndex === index,
    onClick: () => selectCareerEntry(index)
  }, /*#__PURE__*/React.createElement("span", {
    className: "jiz-career-dot",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "jiz-career-stage"
  }, entry.stage), /*#__PURE__*/React.createElement("span", {
    className: "jiz-career-years"
  }, entry.years), /*#__PURE__*/React.createElement("span", {
    className: "jiz-career-org"
  }, entry.organization))))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-detail jiz-reveal",
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "jiz-eyebrow"
  }, activeCareer.years), /*#__PURE__*/React.createElement("h4", null, activeCareer.title), /*#__PURE__*/React.createElement("p", {
    className: "jiz-career-org-detail"
  }, activeCareer.organization)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "jiz-career-summary"
  }, activeCareer.summary), /*#__PURE__*/React.createElement("div", {
    className: "jiz-career-detail-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "jiz-meta"
  }, "SELECTED IMPACT"), /*#__PURE__*/React.createElement("ul", null, activeCareer.highlights.map(item => /*#__PURE__*/React.createElement("li", {
    key: item
  }, item)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "jiz-meta"
  }, "CAPABILITIES"), /*#__PURE__*/React.createElement("ul", null, activeCareer.capabilities.map(item => /*#__PURE__*/React.createElement("li", {
    key: item
  }, item))))))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-beliefs jiz-reveal",
    "aria-label": "Core beliefs",
    style: {
      background: 'linear-gradient(135deg, rgba(8, 13, 16, 0.6) 0%, rgba(100, 225, 255, 0.08) 100%)',
      border: '1px solid rgba(100, 225, 255, 0.12)',
      borderRadius: '20px',
      padding: '48px 40px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
      gap: '40px'
    }
  }, beliefs.map((belief, idx) => /*#__PURE__*/React.createElement("article", {
    className: "jiz-belief",
    key: belief.title,
    style: {
      padding: 0,
      borderLeft: idx > 0 ? '1px solid rgba(100, 225, 255, 0.08)' : 'none',
      paddingLeft: idx > 0 ? '40px' : 0
    }
  }, /*#__PURE__*/React.createElement("h4", null, belief.title), /*#__PURE__*/React.createElement("p", null, belief.copy))))), /*#__PURE__*/React.createElement("div", {
    className: "jiz-scene-transition jiz-reveal"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-lg)',
      color: 'var(--color-text-secondary)',
      margin: 0,
      paddingTop: 16,
      paddingBottom: 16
    }
  }, "Here's what that understanding created."))));
}
if (typeof window !== 'undefined') {
  window.AboutV2Fixed = AboutV2;
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-website/archive/About_v2_Fixed.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-website/archive/phase-1/CaseStudyTemplate.jsx
try { (() => {
const CaseStudyTemplate = ({
  projectId,
  data = {}
}) => {
  const {
    title = 'Project Title',
    summary = 'Project summary',
    heroImage = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop',
    tags = ['Tag 1', 'Tag 2'],
    year = '2024',
    role = 'Role',
    duration = '12 months',
    challenge = 'Challenge description',
    approach = 'Approach description',
    designDecisions = 'Design decisions',
    prototypeContent = 'Prototype section',
    results = 'Results and impact',
    reflection = 'Reflection and learning'
  } = data;
  const [activeTab, setActiveTab] = React.useState(0);
  const tabs = ['Challenge', 'Approach', 'Design Decisions', 'Prototype', 'Results', 'Reflection'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      background: 'var(--color-background)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '16/9',
      overflow: 'hidden',
      marginBottom: 60
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: heroImage,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 20px',
      marginBottom: 60
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--text-h1)',
      color: 'var(--color-text-primary)',
      marginBottom: 16
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-lg)',
      color: 'var(--color-text-secondary)',
      maxWidth: 640,
      marginBottom: 32
    }
  }, summary), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 32
    }
  }, tags.map(tag => /*#__PURE__*/React.createElement("span", {
    key: tag,
    style: {
      font: 'var(--text-xs)',
      color: 'var(--color-text-tertiary)',
      background: 'var(--color-surface-tertiary)',
      padding: '4px 8px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--color-border-subtle)'
    }
  }, tag))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: 24,
      paddingTop: 32,
      borderTop: '1px solid var(--color-border-subtle)'
    }
  }, [{
    label: 'Year',
    value: year
  }, {
    label: 'Role',
    value: role
  }, {
    label: 'Duration',
    value: duration
  }].map(item => /*#__PURE__*/React.createElement("div", {
    key: item.label
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-xs)',
      color: 'var(--color-text-tertiary)',
      marginBottom: 4,
      textTransform: 'uppercase'
    }
  }, item.label), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--color-text-primary)'
    }
  }, item.value))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 20px',
      borderBottom: '1px solid var(--color-border-subtle)',
      marginBottom: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      overflowX: 'auto'
    }
  }, tabs.map((tab, i) => /*#__PURE__*/React.createElement("button", {
    key: tab,
    onClick: () => setActiveTab(i),
    style: {
      font: 'var(--text-body)',
      color: activeTab === i ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
      background: 'none',
      border: 'none',
      borderBottom: activeTab === i ? '2px solid var(--color-accent)' : '2px solid transparent',
      padding: '16px 0',
      cursor: 'pointer',
      transition: 'color 140ms ease'
    }
  }, tab)))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 20px',
      marginBottom: 80
    }
  }, activeTab === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--color-text-secondary)',
      lineHeight: 1.6
    }
  }, challenge), activeTab === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--color-text-secondary)',
      lineHeight: 1.6
    }
  }, approach), activeTab === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--color-text-secondary)',
      lineHeight: 1.6
    }
  }, designDecisions), activeTab === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--color-text-secondary)',
      lineHeight: 1.6
    }
  }, prototypeContent), activeTab === 4 && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--color-text-secondary)',
      lineHeight: 1.6
    }
  }, results), activeTab === 5 && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--color-text-secondary)',
      lineHeight: 1.6
    }
  }, reflection)), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '60px 20px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      color: 'var(--color-text-primary)',
      marginBottom: 40
    }
  }, "Continue the Journey"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 24
    }
  }, [{
    id: 'learn-at-cox',
    title: 'Learn@Cox',
    tags: ['Platform Design', 'Learning']
  }, {
    id: 'ihg-learning-ecosystem',
    title: 'IHG Learning Ecosystem',
    tags: ['Global Scale', 'Mobile']
  }, {
    id: 'hotelkey-digital-onboarding',
    title: 'HotelKey Digital Onboarding',
    tags: ['UX Design', 'SaaS']
  }].map(proj => /*#__PURE__*/React.createElement("div", {
    key: proj.id,
    style: {
      padding: 24,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--color-surface-secondary)',
      border: '1px solid var(--color-border-subtle)',
      cursor: 'pointer',
      transition: 'all 280ms ease'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--color-surface-tertiary)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'var(--color-surface-secondary)';
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h4)',
      color: 'var(--color-text-primary)',
      marginBottom: 12
    }
  }, proj.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, proj.tags.map(tag => /*#__PURE__*/React.createElement("span", {
    key: tag,
    style: {
      font: 'var(--text-xs)',
      color: 'var(--color-text-tertiary)',
      background: 'var(--color-surface-tertiary)',
      padding: '2px 6px',
      borderRadius: 'var(--radius-sm)'
    }
  }, tag))))))));
};
window.CaseStudyTemplate = CaseStudyTemplate;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-website/archive/phase-1/CaseStudyTemplate.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-website/archive/phase-1/Pages.jsx
try { (() => {
const Pages = () => {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [caseStudyId, setCaseStudyId] = React.useState(null);
  const handleOpenCaseStudy = projectId => {
    setCaseStudyId(projectId);
    setCurrentPage('case-study');
  };
  const handleNavigate = page => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  const caseStudyData = {
    'operation-legacy-unlocked': {
      title: 'Operation: Legacy Unlocked',
      summary: 'A 12-month digital transformation for a Fortune 500 energy company, turning compliance content into an engaging mission-driven experience.',
      heroImage: './assets/imagery/operation-legacy-unlocked.png',
      tags: ['Learning Design', 'Strategy', 'Digital Transformation', 'Gamification'],
      year: '2024',
      role: 'Lead Learning Experience Designer',
      duration: '12 months',
      challenge: 'The challenge was transforming dense compliance content into something people would actually engage with. Legacy systems and outdated training methods had created a knowledge gap that was impacting operational safety and efficiency across the organization.',
      approach: 'I approached this as a systems design problem rather than a content problem. By mapping the actual workflows, identifying knowledge gaps, and understanding what motivated employees, I architected a gamified learning experience that embedded compliance knowledge into a narrative framework.',
      designDecisions: 'Key decisions included: (1) Using a secret-agent escape-room narrative to make compliance feel like a mission, (2) Breaking content into micro-learning sequences aligned with actual job tasks, (3) Embedding assessment into gameplay rather than traditional testing, (4) Creating a progression system that rewarded behavioral change.',
      prototypeContent: 'The prototype demonstrated core mechanics through an interactive scenario. Users navigated through branching decisions, solved compliance puzzles, and earned achievements. The prototype was tested with 50 pilot users before full deployment.',
      results: 'Results exceeded targets: 87% engagement rate (industry average 34%), 34% reduction in compliance violations, 12-week rollout to 8,500 employees, 92% completion rate, measurable improvement in safety metrics.',
      reflection: 'The biggest learning was that compliance doesn\'t have to be boring—it becomes engaging when you align it with how people actually think and work. The escape-room narrative wasn\'t just decoration; it created cognitive hooks that made the information stick.'
    }
  };
  if (currentPage === 'home') {
    return /*#__PURE__*/React.createElement(Homepage, {
      onOpenCaseStudy: handleOpenCaseStudy
    });
  }
  if (currentPage === 'work') {
    return /*#__PURE__*/React.createElement(WorkIndex, {
      onOpenCaseStudy: handleOpenCaseStudy
    });
  }
  if (currentPage === 'case-study' && caseStudyId) {
    const data = caseStudyData[caseStudyId] || {};
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CaseStudyTemplate, {
      projectId: caseStudyId,
      data: data
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '60px 20px'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => handleNavigate('work'),
      style: {
        font: 'var(--text-body)',
        color: 'var(--color-accent)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textDecoration: 'underline',
        padding: 0
      }
    }, "\u2190 Back to Work")));
  }
  return /*#__PURE__*/React.createElement(Homepage, {
    onOpenCaseStudy: handleOpenCaseStudy
  });
};
window.PagesComponent = Pages;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-website/archive/phase-1/Pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-website/archive/phase-1/WorkIndex.jsx
try { (() => {
const WorkIndex = ({
  onOpenCaseStudy
}) => {
  const projects = [{
    id: 'operation-legacy-unlocked',
    title: 'Operation: Legacy Unlocked',
    summary: 'A 12-month digital transformation for a Fortune 500 energy company.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
    tags: ['Learning Design', 'Strategy', 'Digital Transformation'],
    status: 'Case Study'
  }, {
    id: 'learn-at-cox',
    title: 'Learn@Cox',
    summary: 'Enterprise learning platform design for 50,000+ employees.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
    tags: ['Platform Design', 'Learning Experience', 'AI Integration'],
    status: 'Coming Soon'
  }, {
    id: 'ihg-learning-ecosystem',
    title: 'IHG Learning Ecosystem',
    summary: 'Global hospitality learning system for 400,000+ team members.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
    tags: ['Global Scale', 'Learning Design', 'Mobile-First'],
    status: 'Coming Soon'
  }, {
    id: 'hotelkey-digital-onboarding',
    title: 'HotelKey Digital Onboarding',
    summary: 'Streamlined onboarding experience for property management system.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
    tags: ['UX Design', 'Onboarding', 'SaaS'],
    status: 'Coming Soon'
  }, {
    id: 'guest-crm-transformation',
    title: 'Guest CRM Transformation',
    summary: 'Data-driven guest experience strategy and product redesign.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
    tags: ['CRM Design', 'Data Strategy', 'Guest Experience'],
    status: 'Coming Soon'
  }, {
    id: 'ai-creative-workflow',
    title: 'AI Creative Workflow',
    summary: 'AI-native video production system for enterprise learning.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
    tags: ['AI Integration', 'Creative Tools', 'Video Production'],
    status: 'Coming Soon'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '60px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 60
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--text-h1)',
      color: 'var(--color-text-primary)',
      marginBottom: 16
    }
  }, "Work"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-lg)',
      color: 'var(--color-text-secondary)',
      maxWidth: 640
    }
  }, "Transformation through clarity \u2014 from enterprise learning to AI-native workflows.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
      gap: 32
    }
  }, projects.map(project => /*#__PURE__*/React.createElement("div", {
    key: project.id,
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--color-surface-secondary)',
      border: '1px solid var(--color-border-subtle)',
      transition: 'all 280ms cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--color-surface-tertiary)';
      e.currentTarget.style.borderColor = 'var(--color-border-default)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'var(--color-surface-secondary)';
      e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/9',
      overflow: 'hidden',
      background: 'var(--color-surface-tertiary)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: project.image,
    alt: project.title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)',
      color: 'var(--color-text-primary)',
      marginBottom: 8
    }
  }, project.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--color-text-secondary)',
      marginBottom: 16,
      flex: 1
    }
  }, project.summary), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 16
    }
  }, project.tags.map(tag => /*#__PURE__*/React.createElement("span", {
    key: tag,
    style: {
      font: 'var(--text-xs)',
      color: 'var(--color-text-tertiary)',
      background: 'var(--color-surface-tertiary)',
      padding: '4px 8px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--color-border-subtle)'
    }
  }, tag))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 16,
      borderTop: '1px solid var(--color-border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-xs)',
      color: 'var(--color-text-tertiary)',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    }
  }, project.status), project.status === 'Case Study' && /*#__PURE__*/React.createElement("button", {
    onClick: () => onOpenCaseStudy?.(project.id),
    style: {
      font: 'var(--text-sm)',
      color: 'var(--color-accent)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      transition: 'color 140ms ease'
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = 'var(--color-accent-light)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = 'var(--color-accent)';
    }
  }, "View Case Study \u2192")))))));
};
window.WorkIndex = WorkIndex;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-website/archive/phase-1/WorkIndex.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-website/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(255,255,255,.6);' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(255,255,255,.05)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(255,255,255,.3)}' + '.empty:hover .sub u{color:rgba(255,255,255,.9);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(255,255,255,.28);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(255,255,255,.15);border-top-color:rgba(255,255,255,.5);' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-website/image-slot.js", error: String((e && e.message) || e) }); }

__ds_ns.ProjectRow = __ds_scope.ProjectRow;

__ds_ns.MetricCard = __ds_scope.MetricCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.ProcessCard = __ds_scope.ProcessCard;

__ds_ns.ArtifactCard = __ds_scope.ArtifactCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.ProcessTimeline = __ds_scope.ProcessTimeline;

__ds_ns.ProcessStepper = __ds_scope.ProcessStepper;

__ds_ns.MetricsGrid = __ds_scope.MetricsGrid;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.ContactPanel = __ds_scope.ContactPanel;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.FilmHud = __ds_scope.FilmHud;

})();
