function CaseStudyWorkday({ onBack, onOpenProject }) {
  const { CaseStudyShell } = window.CaseStudyShellExports;
  const config = {
    slug: "workday-learn",
    projectName: "Workday Learn Launch",
    eyebrow: "Case Study \u2014 Enterprise Launch",
    statement: "An enterprise launch campaign that introduced Workday Learn as a professional growth ecosystem \u2014 leading with organizational purpose before platform features.",
    facts: [
      { label: "Organization", value: "Cox Enterprises", accent: "cyan" },
      { label: "Role", value: "Creative Lead / Learning Experience Designer", accent: "cyan" },
      { label: "Project type", value: "Enterprise platform launch", accent: "moss" },
      { label: "Focus", value: "Creative strategy, launch communications, instructional design", accent: "moss" },
      { label: "Status", value: "Evidence-supported case study", accent: "lime" }
    ],
    summaryHeading: "Positioning a platform as a growth ecosystem, not a mandate.",
    summary: [
      "An enterprise platform launch that helped Cox Enterprises employees see Workday Learn as an investment in their own growth, achieved by leading every piece of communication with organizational purpose before platform mechanics.",
      "Rather than focusing on software features, the initiative positioned Workday Learn as a modern learning ecosystem aligned with professional growth and organizational capability \u2014 introduced through one cohesive story told across launch communications, promotional media, and supporting learning experiences."
    ],
    challengeHeading: "Adoption stalls when a platform reads as another required system.",
    challenge: [
      "Enterprise learning platforms often struggle with adoption when employees perceive them as one more required system rather than a valuable professional resource. The launch needed to communicate organizational purpose, generate interest before first use, reduce uncertainty around the new platform, maintain executive communication standards, and support adoption over the long term \u2014 not just at launch."
    ],
    objectives: [
      "Introduce Workday Learn to employees",
      "Communicate the strategic purpose of the platform",
      "Create a cohesive launch experience",
      "Produce reusable communication assets",
      "Support long-term learning adoption through engaging storytelling"
    ],
    roleHeading: "Owning creative direction while operating inside enterprise review structures.",
    roles: [
      { area: "Creative ownership", detail: "Owned the launch's creative direction end to end \u2014 messaging strategy, visual system, and the decision to lead with organizational purpose rather than platform mechanics." },
      { area: "Instructional ownership", detail: "Directed the Rise 360 learning modules as an extension of the same creative story, not a separate deliverable track." },
      { area: "Production accountability", detail: "Accountable for storyboarding, motion graphics, and video editing through to final delivery of the sizzle reel and supporting asset package." },
      { area: "Stakeholder partnership", detail: "Partnered with learning leaders and enterprise communication stakeholders across multiple review cycles, incorporating feedback while protecting the narrative through-line." }
    ],
    processHeading: "A coordinated launch built across multiple communication channels.",
    process: [
      { stage: "Discovery & strategy alignment", detail: "Aligned launch strategy with stakeholder discovery and organizational messaging goals." },
      { stage: "Messaging & scripting", detail: "Developed messaging and scripts, then built storyboards translating strategy into narrative." },
      { stage: "Visual & motion production", detail: "Produced visual design, motion graphics, and video editing for the launch sizzle reel and supporting assets, using AI-assisted drafting and voice tools to accelerate production while every creative and instructional decision stayed human-directed." },
      { stage: "Learning module development", detail: "Built Rise 360 modules and supporting communication graphics alongside the promotional package." },
      { stage: "Review & final delivery", detail: "Ran stakeholder review and revision cycles refining pacing, messaging, branding, and narration before final delivery." }
    ],
    decisionsHeading: "Purpose before functionality, at every stage.",
    decisions: [
      { question: "Why lead with organizational vision instead of platform features?", rationale: "The goal was curiosity and confidence, not compliance \u2014 employees needed to understand why the organization was investing before being shown how to log in. That ordering is what protects adoption long after launch week ends." },
      { question: "Why use narrative storytelling for an enterprise system launch?", rationale: "Increased engagement over a straightforward feature announcement, connecting the platform to employee growth rather than software navigation alone. A story is what employees repeat to each other; a feature list is not." },
      { question: "Why design modular assets across multiple channels?", rationale: "Enabled reuse across communication formats and supported a consistent visual identity throughout the launch, not just in a single hero asset. Modularity is what let the same investment pay off across every downstream communication." },
      { question: "Why balance executive tone with approachable learner communication?", rationale: "The launch had to satisfy executive communication standards while still reading as accessible and inviting to the broader employee audience. Getting that balance right is what let the platform read as credible to leadership and welcoming to the people actually adopting it." }
    ],
    deliverablesHeading: "A complete enterprise launch package.",
    deliverables: [
      "Enterprise launch sizzle reel", "Storyboards", "Scripts", "Motion graphics",
      "Promotional visual assets", "Rise 360 learning modules",
      "Supporting communication graphics"
    ],
    outcomesHeading: "What this work demonstrates.",
    outcomes: [
      { label: "Approved deliverables", detail: "A unified communication package spanning video, learning modules, and promotional assets, approved through enterprise review." },
      { label: "Reusable creative system", detail: "Enterprise creative assets designed for reuse beyond the initial launch moment." },
      { label: "Documented review cycles", detail: "Messaging and production refined across multiple stakeholder revision rounds." },
      { label: "Cross-functional collaboration", detail: "Coordinated delivery across learning, communications, and enterprise stakeholders." }
    ],
    outcomesNote: "Quantitative business outcomes were not available for publication.",
    reflectionHeading: "What an enterprise launch demands of creative and instructional work together.",
    reflection: [
      "Enterprise launches require coordinated storytelling across multiple formats \u2014 no single asset carries the message alone.",
      "Organizational change begins with clear communication, and strong visual narratives improve learner engagement in ways a straightforward announcement rarely does.",
      "Executive messaging and instructional design should reinforce one another rather than operate as separate tracks, and modular creative assets are what make that reinforcement sustainable beyond a single launch moment."
    ],
    ifAgain: [
      "Build in a lightweight pulse survey at 30 and 90 days to observe how the purpose-first message actually lands once employees are using the platform, not just watching the launch.",
      "Pilot the sizzle reel with a small employee sample before full release to validate tone and pacing ahead of enterprise-wide distribution.",
      "Design the modular asset library with a formal reuse plan from day one, so future launches inherit the system deliberately instead of by request."
    ],
    galleryHeading: "Full launch package \u2014 cover, narrative, workflow, and deliverables.",
    snapshot: [
      { label: "Organization", value: "Cox Enterprises" },
      { label: "Role", value: "Creative Lead / Learning Experience Designer" },
      { label: "Audience", value: "Enterprise-wide employee base" },
      { label: "Partners", value: "Learning leaders, enterprise communications, platform stakeholders" },
      { label: "Primary responsibility", value: "Creative direction and instructional production for the full launch package" },
      { label: "Deliverables", value: "Sizzle reel, Rise 360 modules, promotional assets" }
    ],
    gallery: [
      { src: "./assets/imagery/workday-01-cover.png", caption: "01 Cover Artwork", alt: "Workday Learn Launch cover artwork" },
      { src: "./assets/imagery/workday-02-overview.png", caption: "02 Project Overview and Final Narrative", alt: "Project overview and final narrative slide" },
      { src: "./assets/imagery/workday-03-sizzle-reel.png", caption: "03 Production Flow: Sizzle Reel", alt: "Sizzle reel production flow diagram" },
      { src: "./assets/imagery/workday-04-rise360.png", caption: "04 Rise 360 Learning Modules", alt: "Rise 360 learning modules overview" },
      { src: "./assets/imagery/workday-05-workflow.png", caption: "05 Process, Workflow & Production Stack", alt: "Process workflow and production stack diagram" },
      { src: "./assets/imagery/workday-06-deliverables.png", caption: "06 Final Deliverables & Learning-Experience Mockups", alt: "Final deliverables and learning experience mockups" }
    ],
    videosHeading: "Launch production: sizzle reel and editing process.",
    videos: [
      { src: "https://elearningportfolio-jz.s3.us-east-1.amazonaws.com/Videos/Learn%40Cox+V5.1.mp4", caption: "Learn@Cox Launch Sizzle Reel (V5.1)" },
      { src: "https://elearningportfolio-jz.s3.us-east-1.amazonaws.com/Videos/AF+Learn%40Cox+Editing.mp4", caption: "After Effects Editing Process" }
    ],
    related: [
      { direction: "Back to start", title: "Operation: Legacy Unlocked", route: "Operation: Legacy Unlocked" },
      { direction: "Previous project", title: "Guest CRM Pilot", route: "Guest CRM Pilot" }
    ]
  };
  return <CaseStudyShell config={config} onBack={onBack} onOpenProject={onOpenProject} />;
}
window.CaseStudyWorkdayExports = { CaseStudyWorkday };
