function CaseStudyLegacy({ onBack, onOpenProject }) {
  const { CaseStudyShell } = window.CaseStudyShellExports;
  const config = {
    slug: "operation-legacy-unlocked",
    projectName: "Operation: Legacy Unlocked",
    eyebrow: "Case Study \u2014 Featured Project",
    statement: "An immersive leadership learning experience for Cox Enterprises that casts employees as Cox Intelligence Agents, transforming organizational history into a mission-driven digital experience.",
    facts: [
      { label: "Organization", value: "Cox Enterprises", accent: "cyan" },
      { label: "Role", value: "Lead Learning Experience Designer & Creative Strategist", accent: "cyan" },
      { label: "Format", value: "Mission-based interactive simulation", accent: "moss" },
      { label: "Audience", value: "Employees and senior leaders across the organization", accent: "moss" },
      { label: "Tools", value: "Articulate Storyline 360, ChatGPT, ElevenLabs, Descript, Dream Machine, Ideogram", accent: "lime" }
    ],
    summaryHeading: "Turning organizational history into a mission, not a memo.",
    summary: [
      "Operation: Legacy Unlocked is an immersive leadership learning experience created for Cox Enterprises that transforms organizational history into a mission-driven digital experience. Rather than presenting corporate milestones through traditional e-learning, the experience places learners in the role of a Cox Intelligence Agent, navigating interactive missions that reveal how the organization's history, innovation, and leadership principles continue to shape decisions today.",
      "Built in Articulate Storyline 360, the experience combines narrative design, scenario-based learning, custom interaction design, AI-assisted production, and enterprise deployment practices to create a learning experience that feels engaging without sacrificing instructional rigor."
    ],
    challengeHeading: "Organizational history risked becoming passive information transfer.",
    challenge: [
      "Cox Enterprises needed an enterprise-ready learning experience that would introduce employees and senior leaders to the company's history, culture, and leadership philosophy while maintaining engagement across a diverse workforce. Traditional presentation-driven training risked becoming passive information transfer rather than meaningful organizational learning."
    ],
    opportunityHeading: "Investigation creates ownership that reading never does.",
    objectives: [
      "Create emotional connection to the organization's history",
      "Reinforce leadership identity rather than recite milestones",
      "Invite learners to investigate, solve, and interpret \u2014 not memorize",
      "Build a mission structure that scales across a diverse, enterprise-wide workforce",
      "Ground every interaction in established adult-learning principles"
    ],
    roleHeading: "Owning strategy, narrative, and production end to end.",
    roles: [
      { area: "Learning strategy & architecture", detail: "Led the end-to-end learning strategy and experience architecture \u2014 translating organizational history into a mission-driven leadership experience grounded in adult learning science." },
      { area: "Narrative & instructional design", detail: "Directed narrative design, storyboarding, and UX/UI, applying active learning, scenario-based challenge, progressive complexity, and immediate feedback throughout the Storyline 360 build." },
      { area: "AI-assisted production", detail: "Directed AI-assisted creative production \u2014 scripts, character voice, and cinematic assets \u2014 while keeping all instructional strategy and creative decisions human-led." },
      { area: "Delivery & deployment readiness", detail: "Owned quality assurance, SCORM 2004 packaging, and deployment readiness, partnering with stakeholders to keep the experience aligned with organizational goals throughout." }
    ],
    processKicker: "Production workflow",
    processHeading: "Five stages, from stakeholder discovery to deployment-ready module.",
    process: [
      { stage: "Discover", detail: "Stakeholder discovery, learning objective definition, organizational history research, and leadership philosophy alignment." },
      { stage: "Architect", detail: "Narrative architecture, mission structure design, character development for Nova and Mateo, and the experience blueprint." },
      { stage: "Design", detail: "Storyboarding, UX/UI exploration, interaction design, and the futuristic command-center visual language." },
      { stage: "Build", detail: "Storyline 360 development, audio production, AI-assisted asset generation, and accessibility review." },
      { stage: "Deploy", detail: "Quality assurance, SCORM validation, deployment preparation, and stakeholder review iterations." }
    ],
    decisionsHeading: "The choices that made organizational legacy impossible to tune out.",
    decisions: [
      { question: "Narrative before instruction", rationale: "Rather than organizing content chronologically, the experience uses a mission-driven narrative that encourages curiosity and sustained engagement \u2014 curiosity carried content that chronological history never could." },
      { question: "Interaction with purpose", rationale: "Every interaction \u2014 drag-and-drop activities, branching scenarios, decoding challenges, decision points \u2014 was selected because it reinforced a learning objective, not simply to increase interactivity." },
      { question: "Immersive visual language", rationale: "The interface draws inspiration from futuristic intelligence operations, reinforcing the learner's role within the story while supporting wayfinding and cognitive clarity." },
      { question: "Character-guided learning", rationale: "Nova and Mateo act as consistent learning companions throughout the experience, reducing cognitive friction while creating a recognizable narrative voice." },
      { question: "Enterprise scalability", rationale: "Built for SCORM 2004 compliance, modular updates, and enterprise LMS deployment, protecting the initial investment as the organization's learning needs evolve." }
    ],
    aiToolsHeading: "Where AI accelerated production \u2014 and where it didn't.",
    aiToolsIntro: "Artificial intelligence accelerated production while all instructional strategy, creative direction, and learning decisions remained human-led.",
    aiTools: [
      { tool: "ChatGPT", detail: "Co-developed instructional scripts, mission dialogue, facilitator prompts, and character conversations for Nova and Mateo while maintaining alignment with leadership competencies and organizational messaging." },
      { tool: "ElevenLabs", detail: "Generated natural-sounding character voiceovers for Nova and Mateo, allowing rapid iteration of narration while preserving a consistent tone and high audio quality across the experience." },
      { tool: "Descript", detail: "Handled narration editing, timing adjustments, transcript refinement, and synchronization between voice, animation, and on-screen interactions." },
      { tool: "Dream Machine (Luma AI)", detail: "Produced cinematic mission briefings, environmental animations, and visual transitions that enhanced immersion without increasing production complexity." },
      { tool: "Ideogram", detail: "Generated concept art and branded interface assets aligned with Cox's visual identity and the futuristic command-center aesthetic." }
    ],
    deliverablesHeading: "A complete, deployment-ready leadership experience.",
    deliverables: [
      "Complete Storyline 360 module", "Learning architecture", "Storyboards",
      "UX/UI design system", "Narrative documentation", "Character scripts",
      "SCORM 2004 deployment package"
    ],
    outcomesHeading: "What this work demonstrates.",
    outcomes: [
      { label: "Complete Storyline 360 module", detail: "Five interactive leadership missions, fully built and deployment-ready." },
      { label: "Learning architecture & storyboards", detail: "Documented mission structure, narrative framework, and interaction design." },
      { label: "UX/UI design system", detail: "A futuristic command-center visual language supporting wayfinding and clarity." },
      { label: "Character scripts & narrative documentation", detail: "Nova and Mateo's dialogue and mission scripts across all five missions." },
      { label: "AI-assisted production workflow", detail: "Documented use of ChatGPT, ElevenLabs, Descript, Dream Machine, and Ideogram \u2014 human-directed throughout." },
      { label: "SCORM deployment package", detail: "SCORM 2004-compliant, modular, and ready for enterprise LMS deployment." },
      { label: "Stakeholder review iterations", detail: "Documented rounds of organizational stakeholder review and revision." }
    ],
    outcomesNote: "Quantitative business outcomes were not available for publication.",
    reflectionHeading: "What enterprise learning forgets about adults.",
    reflection: [
      "Operation: Legacy Unlocked reinforced an important lesson about enterprise learning. Adults rarely remember information because it was presented clearly \u2014 they remember experiences that require them to think, decide, and participate. By combining instructional design, narrative architecture, immersive interaction design, and responsible AI-assisted production, the project demonstrates how organizational learning can become both strategically meaningful and genuinely engaging."
    ],
    ifAgain: [
      "Introduce adaptive mission pathways based on learner decisions, so the experience responds to how each learner chooses to engage.",
      "Incorporate AI-assisted coaching that delivers personalized reflection after each mission, deepening retention beyond the mission itself.",
      "Expand analytics to better understand learner decision patterns, engagement, and knowledge transfer over time."
    ],
    galleryHeading: "Full asset package \u2014 cover, narrative, storyboard, workflow, iteration, and final mockups.",
    snapshot: [
      { label: "Organization", value: "Cox Enterprises" },
      { label: "Role", value: "Lead Learning Experience Designer & Creative Strategist" },
      { label: "Audience", value: "Employees and senior leaders across the organization" },
      { label: "Partners", value: "Organizational leadership and enterprise learning stakeholders" },
      { label: "Primary responsibility", value: "End-to-end learning strategy, narrative design, and AI-assisted production for the full experience" },
      { label: "Deliverables", value: "Storyline 360 module, learning architecture, character scripts, SCORM deployment package" }
    ],
    gallery: [
      { src: "./assets/imagery/olu-01-cover.png", caption: "01 Cover Artwork" },
      { src: "./assets/imagery/olu-02-narrative.png", caption: "02 Final Narrative & Case Study Story" },
      { src: "./assets/imagery/olu-03-storyboard.png", caption: "03 Six-Scene Storyboard & Learning Architecture" },
      { src: "./assets/imagery/olu-04-workflow.png", caption: "04 Process Imagery & Build Workflow" },
      { src: "./assets/imagery/olu-05-iteration.png", caption: "05 Stakeholder-Iteration Evidence" },
      { src: "./assets/imagery/olu-06-mockups.png", caption: "06 Final Learning-Experience Mockups" }
    ],
    videosHeading: "Prototype evolution \u2014 from orientation to final build.",
    videos: [
      { src: "https://elearningportfolio-jz.s3.us-east-1.amazonaws.com/Videos/Intro+.mov", caption: "Introduction \u2014 mission orientation walkthrough" },
      { src: "https://elearningportfolio-jz.s3.us-east-1.amazonaws.com/Videos/Sample+of+microLession.mov", caption: "Micro-lesson sample \u2014 chunked learning moments" },
      { src: "https://elearningportfolio-jz.s3.us-east-1.amazonaws.com/Videos/OLU-Articulate+Demo.mp4", caption: "Articulate Storyline demo \u2014 interaction model and branching logic" }
    ],
    related: [
      { direction: "Next project", title: "HotelKey New Hire Onboarding", route: "HotelKey New Hire Onboarding" }
    ]
  };
  return <CaseStudyShell config={config} onBack={onBack} onOpenProject={onOpenProject} />;
}
window.CaseStudyLegacyExports = { CaseStudyLegacy };
