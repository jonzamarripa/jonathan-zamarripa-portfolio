function CaseStudyHotelKey({ onBack, onOpenProject }) {
  const { CaseStudyShell } = window.CaseStudyShellExports;
  const config = {
    slug: "hotelkey-onboarding",
    projectName: "HotelKey New Hire Onboarding",
    eyebrow: "Case Study \u2014 Enterprise Onboarding",
    statement: "A structured onboarding experience that introduces new hotel hires to HotelKey's operating logic \u2014 not just its screens \u2014 reducing cognitive load while explaining why the software works the way it does.",
    facts: [
      { label: "Organization", value: "IHG Hotels & Resorts", accent: "cyan" },
      { label: "Role", value: "Learning Experience Designer / Producer", accent: "cyan" },
      { label: "Project type", value: "New hire onboarding, systems training", accent: "moss" },
      { label: "Focus", value: "Instructional design, motion design, multimedia production", accent: "moss" },
      { label: "Status", value: "Evidence-supported case study", accent: "lime" }
    ],
    summaryHeading: "Onboarding that explains the system, not just the screens.",
    summary: [
      "A systems onboarding experience that helped new IHG hotel hires build real competence in HotelKey's property management platform, achieved by teaching the operating logic behind the system before its individual screens.",
      "Rather than relying on isolated software demonstrations, the project introduced that logic through a structured experience combining instructional design, visual communication, and multimedia production \u2014 reducing cognitive load for learners meeting an unfamiliar system for the first time."
    ],
    challengeHeading: "Following the steps isn't the same as understanding why they matter.",
    challenge: [
      "Traditional software onboarding often emphasizes interface walkthroughs without explaining the operational purpose behind individual tasks \u2014 learners can follow prescribed steps but struggle to understand why those steps matter during real hotel operations. The onboarding needed to reduce cognitive overload, provide meaningful operational context, introduce the platform progressively, stay engaging, and support consistent onboarding across hotel teams."
    ],
    objectives: [
      "Improve first-time learner confidence",
      "Explain HotelKey concepts before individual tasks",
      "Create reusable onboarding assets",
      "Support consistent learning experiences across teams",
      "Simplify complex operational workflows through visual communication"
    ],
    roleHeading: "Owning the instructional logic while executing full production.",
    roles: [
      { area: "Strategic ownership", detail: "Owned the instructional strategy prioritizing operational understanding before procedural memorization \u2014 the sequencing decision the whole onboarding was built around." },
      { area: "Script & storyboard", detail: "Developed scripts and storyboards structuring the learning path segment by segment." },
      { area: "Production accountability", detail: "Accountable for screen capture planning, motion graphics production, and video editing across the full deliverable set." },
      { area: "Visual system", detail: "Created visual assets designed to complement narration rather than duplicate it, reinforcing key concepts through one consistent visual language." },
      { area: "Stakeholder partnership", detail: "Partnered with hotel operations and learning stakeholders on instructional clarity, terminology accuracy, and software behavior across multiple review cycles." }
    ],
    processHeading: "A production cycle built around comprehension, not procedure.",
    process: [
      { stage: "Alignment & content planning", detail: "Established stakeholder alignment on scope and structured the content plan around operational context." },
      { stage: "Script & storyboard development", detail: "Wrote instructional scripts and storyboards, sequencing concepts before individual software tasks." },
      { stage: "Production", detail: "Executed screen capture, motion graphics, and video editing to bring the storyboard to life." },
      { stage: "Review & revision", detail: "Ran internal review and stakeholder revision cycles refining pacing, terminology, interface accuracy, and sequencing." },
      { stage: "Final delivery", detail: "Delivered the completed onboarding package after quality assurance." }
    ],
    decisionsHeading: "Understanding before procedure, by design.",
    decisions: [
      { question: "Why introduce operational context before interface demonstrations?", rationale: "Comprehension was prioritized over memorization \u2014 learners needed to know why a workflow existed before being shown how to execute it. That sequencing is what let new hires retain the material once training ended and real shifts began." },
      { question: "Why reduce visual complexity rather than add production polish?", rationale: "Multimedia was used to reduce cognitive load, not increase it \u2014 every visual choice served clarity first. Protecting attention is what made the training worth an employee's limited first-week focus." },
      { question: "Why design visuals to complement narration rather than duplicate it?", rationale: "Redundant visual-audio pairing wastes attention; complementary pairing reinforces the concept from two angles instead of repeating one. That discipline kept a media-heavy asset from working against the comprehension it was meant to build." },
      { question: "Why organize content into segments with reinforced repetition?", rationale: "Logical segmentation and deliberate repetition of key concepts supported retention for a new-hire audience learning an unfamiliar system. Reinforcement at this level is what closed the gap between watching a demonstration and working independently." }
    ],
    deliverablesHeading: "A complete onboarding production package.",
    deliverables: [
      "Onboarding video", "Storyboard", "Production assets", "Visual graphics",
      "Motion graphics", "Instructional scripts", "Screen recordings",
      "Supporting onboarding materials"
    ],
    outcomesHeading: "What this work demonstrates.",
    outcomes: [
      { label: "Approved deliverables", detail: "A completed onboarding package approved for use across hotel new-hire training." },
      { label: "Documented iteration", detail: "Stakeholder-iteration evidence showing terminology, pacing, and interface accuracy refined across review rounds." },
      { label: "Reusable learning assets", detail: "Enterprise learning materials designed to support future onboarding initiatives beyond this rollout." },
      { label: "Repeatable production framework", detail: "A production and sequencing framework other onboarding projects could inherit directly." }
    ],
    outcomesNote: "Quantitative business outcomes were not available for publication.",
    reflectionHeading: "What onboarding design demands when the system is complex.",
    reflection: [
      "Operational understanding should precede procedural instruction \u2014 a lesson that shaped how every subsequent onboarding asset was sequenced.",
      "Multimedia should reduce complexity rather than increase it. Every added visual element has to earn its place by clarifying something narration alone couldn't, or it's better left out.",
      "Stakeholder collaboration strengthens instructional accuracy, and thoughtful sequencing improves learner comprehension more than production polish ever could on its own."
    ],
    ifAgain: [
      "Observe a small group of new hires moving through the onboarding live, to see where comprehension actually breaks rather than relying on stakeholder review alone.",
      "Add a brief knowledge check between segments to validate that operational context landed before learners move to procedure.",
      "Design the visual language as a documented template from the start, so it scales cleanly to the next onboarding initiative without being rebuilt."
    ],
    galleryHeading: "Full onboarding package — hero, storyboard, and process evidence.",
    snapshot: [
      { label: "Organization", value: "IHG Hotels & Resorts" },
      { label: "Role", value: "Learning Experience Designer / Producer" },
      { label: "Audience", value: "Newly hired hotel employees" },
      { label: "Partners", value: "Hotel operations and learning stakeholders" },
      { label: "Primary responsibility", value: "Instructional strategy and production for the full onboarding experience" },
      { label: "Deliverables", value: "Onboarding video, storyboard, motion graphics, supporting materials" }
    ],
    gallery: [
      { src: "./assets/imagery/hotelkey-01-hero.png", caption: "01 Case Study Hero" },
      { src: "./assets/imagery/hotelkey-04-storyboard.png", caption: "02 Six-Scene Onboarding Storyboard" },
      { src: "./assets/imagery/hotelkey-03-process.png", caption: "03 Production Workflow: Editing, Scene Direction & Build" },
      { src: "./assets/imagery/hotelkey-02-iteration.png", caption: "04 Stakeholder-Iteration Evidence" }
    ],
    related: [
      { direction: "Next project", title: "Guest CRM Pilot", route: "Guest CRM Pilot" },
      { direction: "Previous project", title: "Operation: Legacy Unlocked", route: "Operation: Legacy Unlocked" }
    ]
  };
  return <CaseStudyShell config={config} onBack={onBack} onOpenProject={onOpenProject} />;
}
window.CaseStudyHotelKeyExports = { CaseStudyHotelKey };
