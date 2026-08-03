function CaseStudyGuestCRM({ onBack, onOpenProject }) {
  const { CaseStudyShell } = window.CaseStudyShellExports;
  const config = {
    slug: "guest-crm-pilot",
    projectName: "Guest CRM Pilot",
    eyebrow: "Case Study \u2014 Change Enablement",
    statement: "Enabling a pilot group of hotel teams to adopt a new guest relationship management platform \u2014 not just navigate it, but understand why the workflows were changing.",
    facts: [
      { label: "Organization", value: "IHG Hotels & Resorts", accent: "cyan" },
      { label: "Role", value: "Learning Strategist / Creative Producer", accent: "cyan" },
      { label: "Project type", value: "Platform pilot enablement", accent: "moss" },
      { label: "Focus", value: "Change enablement, instructional design, multimedia production", accent: "moss" },
      { label: "Status", value: "Evidence-supported case study", accent: "lime" }
    ],
    summaryHeading: "Adoption fails at the reasoning gap, not the interface.",
    summary: [
      "A change enablement initiative that helped IHG's pilot hotel teams adopt a new Guest CRM platform with confidence, achieved by teaching the operational reasoning behind each workflow rather than the software's interface.",
      "This wasn't a software rollout so much as a readiness effort: hotel teams needed to understand new expectations and how guest information would now support better service \u2014 not just where to click. Scalable enablement resources helped pilot participants navigate the change while surfacing the feedback that shaped the eventual enterprise release."
    ],
    challengeHeading: "Technology adoption fails when people know where to click but not why it changed.",
    challenge: [
      "The pilot needed enablement that prepared employees for new workflows, reduced uncertainty during participation, and connected software actions to guest service outcomes \u2014 while also surfacing usability questions before broader rollout and producing communication assets that could be reused."
    ],
    objectives: [
      "Support successful pilot participation",
      "Reduce onboarding friction",
      "Provide consistent enablement across participating hotels",
      "Create reusable learning resources",
      "Improve clarity around new Guest CRM workflows",
      "Support future enterprise deployment through pilot feedback"
    ],
    roleHeading: "Owning the enablement strategy through a moving target.",
    roles: [
      { area: "Strategic ownership", detail: "Owned the decision to organize enablement around hotel operational workflows rather than software menus, prioritizing operational reasoning over interface familiarity." },
      { area: "Production accountability", detail: "Accountable for storyboarding, recording, and editing tutorial video, motion graphics, and voiceover integration across the full deliverable set." },
      { area: "System design", detail: "Designed the Reference Guide, Access Checklist, Training Toolkit, and Pilot Diary as one modular, reusable system rather than four separate documents." },
      { area: "Stakeholder partnership", detail: "Partnered with product, operations, learning, and creative stakeholders through multiple review cycles covering workflow accuracy, terminology, and translation readiness." },
      { area: "Accessibility & localization", detail: "Built accessibility review and localization support into the production process from the outset." }
    ],
    processHeading: "A structured pilot production cycle, refined across review rounds.",
    process: [
      { stage: "Stakeholder discovery", detail: "Identified how the new platform changed day-to-day operational tasks and guest interactions." },
      { stage: "Workflow & learning architecture", detail: "Mapped new workflows and structured the learning approach around them rather than the software's menu structure." },
      { stage: "Storyboarding & production", detail: "Built reference guides, storyboards, screen recordings, motion graphics, and voiceover into the toolkit." },
      { stage: "Accessibility & stakeholder revision", detail: "Ran accessibility review alongside multiple stakeholder revision cycles refining terminology, workflow accuracy, and instructional sequencing." },
      { stage: "Pilot delivery", detail: "Delivered the final enablement package \u2014 QA'd and translation-ready \u2014 to the pilot cohort." }
    ],
    decisionsHeading: "Design decisions built for a platform that was still changing.",
    decisions: [
      { question: "Why organize around workflows instead of software menus?", rationale: "Operational understanding was prioritized ahead of interface familiarity \u2014 the goal was confidence in the *why*, not memorization of the *where*. That confidence is what determines whether a pilot succeeds long before adoption gets measured." },
      { question: "Why annotated demonstrations over full screen recordings?", rationale: "Progressive disclosure and annotated focus reduced cognitive load during a pilot where the interface itself was still evolving. Protecting attention protected the pilot's credibility with a workforce already absorbing a system change." },
      { question: "Why separate quick-reference from long-form instruction?", rationale: "Pilot participants needed different resources at different moments \u2014 a checklist mid-shift, a deeper guide during onboarding. Matching resource to moment is what made the pilot self-sustaining without constant facilitator support." },
      { question: "Why design for revision from the start?", rationale: "Because the pilot software was changing, every asset was built to be updated rather than treated as a finished, static deliverable. That decision protected the enablement investment from going stale before the pilot even concluded." }
    ],
    deliverablesHeading: "A modular enablement package built to evolve with the pilot.",
    deliverables: [
      "Reference Guide", "Access Checklist", "Training Toolkit", "Pilot Diary",
      "Orientation Deck", "Office Hours presentation", "Tutorial videos",
      "Storyboards", "Screen recordings", "Motion graphics"
    ],
    outcomesHeading: "What this work demonstrates.",
    outcomes: [
      { label: "Approved enterprise deliverables", detail: "A standardized pilot enablement package approved for use across all participating hotels." },
      { label: "Documented iteration", detail: "A feedback-to-impact trail showing what pilot participants reported and how the toolkit changed in response." },
      { label: "Reusable learning assets", detail: "Modular materials designed to be updated rather than remade as the platform evolved." },
      { label: "Cross-functional collaboration", detail: "Coordinated input from product, operations, learning, and creative stakeholders across review cycles." }
    ],
    outcomesNote: "Quantitative business outcomes were not available for publication.",
    reflectionHeading: "What a pilot program actually demands of enablement design.",
    reflection: [
      "Pilot programs require adaptable learning assets \u2014 the platform was still changing while the materials were being built, and design decisions had to account for that instability rather than wait for a stable target.",
      "Change enablement extends well beyond software instruction. Operational context, not interface familiarity, is what builds learner confidence, and stakeholder collaboration across product, operations, and learning teams is what keeps instructional content accurate as workflows shift.",
      "Modular assets simplified every later revision \u2014 a lesson that shaped how enablement materials were structured on subsequent projects."
    ],
    ifAgain: [
      "Instrument the toolkit itself with simple usage tracking, so which resource pilot participants actually reached for becomes observable, not just reported anecdotally.",
      "Run a brief structured observation session on the hotel floor before finalizing workflows, to validate the operational sequencing against real shift conditions.",
      "Formalize the pilot-to-enterprise handoff as its own deliverable, so the scaling path is explicit rather than implied by the toolkit's modularity."
    ],
    galleryHeading: "Full enablement package — cover, pilot storyboard, workflow, feedback, and delivered kit.",
    snapshot: [
      { label: "Organization", value: "IHG Hotels & Resorts" },
      { label: "Role", value: "Learning Strategist / Creative Producer" },
      { label: "Audience", value: "Pilot cohort of hotel front-desk and operations teams" },
      { label: "Partners", value: "Product, operations, learning, and creative stakeholders" },
      { label: "Primary responsibility", value: "Enablement strategy and production for the full pilot toolkit" },
      { label: "Deliverables", value: "Reference Guide, Access Checklist, Training Toolkit, Pilot Diary, tutorial video" }
    ],
    gallery: [
      { src: "../../assets/imagery/guestcrm-01-cover.png", caption: "01 Case Study Cover" },
      { src: "../../assets/imagery/guestcrm-02-storyboard.png", caption: "02 Six-Scene Pilot Storyboard" },
      { src: "../../assets/imagery/guestcrm-03-workflow.png", caption: "03 Strategy, Learning Architecture & Production Workflow" },
      { src: "../../assets/imagery/guestcrm-04-feedback.png", caption: "04 Feedback-to-Impact: What We Heard, Changed & Iterated" },
      { src: "../../assets/imagery/guestcrm-05-kit.png", caption: "05 Final Delivered Pilot Enablement Kit" }
    ],
    related: [
      { direction: "Next project", title: "Workday Learn Launch", route: "Workday Learn Launch" },
      { direction: "Previous project", title: "HotelKey New Hire Onboarding", route: "HotelKey New Hire Onboarding" }
    ]
  };
  return <CaseStudyShell config={config} onBack={onBack} onOpenProject={onOpenProject} />;
}
window.CaseStudyGuestCRMExports = { CaseStudyGuestCRM };
