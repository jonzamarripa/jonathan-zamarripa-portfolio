function CaseStudyDraftedByAI({ onBack, onOpenProject, standalone }) {
  const { CaseStudyShell } = window.CaseStudyShellExports;
  const config = {
  "slug": "drafted-by-ai",
  "scenario": {
    "url": "https://coach-line-18168657.figma.site/",
    "title": "Drafted by AI. Sent by You.",
    "poster": "./assets/imagery/drafted-by-ai/cold-open-poster.webp"
  },
  "heroCaption": "AI-generated cold-open scene: a fictional business owner reviews her phone beside a pickup truck.",
  "projectName": "Drafted by AI. Sent by You.",
  "eyebrow": "Candidate work sample · Expert readiness",
  "statement": "An independent candidate work sample exploring how support Experts can help people use AI with confidence. I shaped the learning approach, directed the visual storytelling, and built an interactive prototype. Not a commissioned or deployed Intuit program.",
  "facts": [
    {
      "label": "Context",
      "value": "Intuit Academy craft assessment",
      "accent": "cyan"
    },
    {
      "label": "Role",
      "value": "Instructional designer & creative producer",
      "accent": "cyan"
    },
    {
      "label": "Status",
      "value": "Candidate work sample · prototype",
      "accent": "lime"
    },
    {
      "label": "Date",
      "value": "October 2026",
      "accent": "cyan"
    }
  ],
  "summaryHeading": "Start with the person, then design the learning.",
  "summary": [
    "I started with the human consequence of an AI-assisted mistake: a customer needs practical help and reassurance. That gave the experience a purpose beyond explaining a feature.",
    "My design question was how to help an Expert bring product knowledge and empathy into the same conversation. I used a realistic situation to connect the instruction to a decision someone might actually face."
  ],
  "challengeHeading": "Correct information is only part of a helpful conversation.",
  "challenge": [
    "I wanted the experience to make room for both problem-solving and the way a customer feels. That tension guided the story, the interaction, and the feedback."
  ],
  "roleHeading": "Learning design, visual direction, and prototyping.",
  "roles": [
    {
      "area": "Learning design",
      "detail": "I translated the customer problem into a focused learning direction and shaped the experience around decisions rather than a feature tour."
    },
    {
      "area": "Creative direction",
      "detail": "I directed the AI-generated cold open and reviewed the imagery for tone, continuity, and its connection to the learning purpose."
    },
    {
      "area": "Interactive build",
      "detail": "I brought the story and interface together in Figma Make to make the learning approach tangible."
    }
  ],
  "decisionsHeading": "The decisions behind the experience.",
  "decisions": [
    {
      "question": "Why lead with a customer story?",
      "rationale": "A human situation gives the instruction a purpose. It helps the learner understand why the next decision matters."
    },
    {
      "question": "Why make it interactive?",
      "rationale": "A choice reveals how someone is thinking. I wanted learners to apply judgment, rather than only watch an explanation."
    },
    {
      "question": "Why use a cinematic opening?",
      "rationale": "The opening establishes context and tone quickly. Every visual choice needed to support that learning purpose."
    }
  ],
  "aiToolsHeading": "AI-assisted production, human-owned decisions.",
  "aiTools": [
    {
      "tool": "Claude",
      "detail": "Supported script and dialogue drafts. I owned the framing, voice, and final editorial decisions."
    },
    {
      "tool": "Google Gemini Omni",
      "detail": "Supported visual production under my creative direction and review."
    },
    {
      "tool": "Figma Make",
      "detail": "Helped turn the design into a clickable sample. Interface concepts are for training and do not represent verified internal Intuit applications."
    }
  ],
  "outcomesHeading": "What this sample demonstrates.",
  "outcomes": [
    {
      "label": "Design thinking",
      "detail": "Connecting a customer problem to a clear learning purpose."
    },
    {
      "label": "Creative execution",
      "detail": "Bringing narrative, visual direction, and interaction into one coherent experience."
    },
    {
      "label": "Working prototype",
      "detail": "A selected demonstration of the approach, rather than a published learning program."
    }
  ],
  "outcomesNote": "Independent candidate work sample with fictional customer data and AI-generated imagery. No rollout, learner-performance, adoption, or business outcomes are claimed.",
  "related": [
    {
      "direction": "Related experience",
      "title": "The First Sentence",
      "route": "The First Sentence"
    }
  ],
  "workflow": {
    "heading": "How I plotted the experience.",
    "intro": "I connected the customer problem to the learning intent, then used that foundation to shape the story, the visuals, and the interaction.",
    "foundation": [
      {
        "title": "Start with the customer problem",
        "detail": "What happened, who is affected, and why does this moment matter?"
      },
      {
        "title": "Define the learning intent",
        "detail": "What judgment does the Expert need to bring to the conversation?"
      },
      {
        "title": "Plot the story",
        "detail": "Connect the situation, dialogue, and decisions into a purposeful experience."
      }
    ],
    "branches": [
      {
        "title": "Direct the visuals",
        "detail": "Shape the scenes, tone, and continuity so the imagery supports the learning."
      },
      {
        "title": "Design the interaction",
        "detail": "Connect the learner’s choices with consequences and useful feedback."
      }
    ],
    "finish": [
      {
        "title": "Bring it together in the prototype",
        "detail": "Combine the narrative, media, and interface in a working sample."
      },
      {
        "title": "Review and refine",
        "detail": "Check the language, visual continuity, and alignment with the learning intent."
      }
    ],
    "caption": "The review feeds back into the story, visuals, and interaction. This map shows my design approach; product accuracy remains subject to SME validation."
  }
};
  return <CaseStudyShell config={config} onBack={onBack} onOpenProject={onOpenProject} standalone={standalone} />;
}
window.CaseStudyDraftedByAIExports = { CaseStudyDraftedByAI };
