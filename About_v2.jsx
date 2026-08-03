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

  const methodStages = [
    { id: 'observe', label: '01', title: 'Observe', copy: 'See the full system before defining the solution.' },
    { id: 'understand', label: '02', title: 'Understand', copy: 'Reveal the patterns, friction, behaviors, and decisions shaping the experience.' },
    { id: 'design', label: '03', title: 'Design', copy: 'Create the structure, story, and interaction that make understanding possible.' },
    { id: 'build', label: '04', title: 'Build', copy: 'Produce the learning, media, tools, and systems required for adoption.' },
    { id: 'transform', label: '05', title: 'Transform', copy: 'Turn clarity into action, confidence, and measurable movement.' },
  ];

  const capabilityGroups = [
    {
      title: 'DESIGN',
      subtitle: 'What I architect',
      items: ['Learning systems', 'Experience strategy', 'Behavior change', 'Information architecture', 'Human-centered design'],
    },
    {
      title: 'BUILD',
      subtitle: 'What I create',
      items: ['Articulate Storyline', 'Camtasia', 'Adobe Creative Cloud', 'Figma', 'Motion and video', 'AI production workflows'],
    },
    {
      title: 'KNOWN FOR',
      subtitle: 'What differentiates the work',
      items: ['Systems thinking', 'Creative direction', 'Enterprise learning', 'Rapid prototyping', 'Translating complexity into clarity'],
    },
  ];

  const careerEntries = [
    {
      id: 'gstate',
      stage: 'Storytelling',
      years: '2005–2009',
      organization: 'Georgia State University',
      title: 'B.A., Journalism — Film & Video',
      summary: 'Developed the editorial and cinematic foundation that continues to shape how I frame complexity, structure narratives, and make ideas memorable.',
      highlights: ['Studied journalism, film, and video production', 'Built fluency in visual storytelling and narrative structure', 'Learned to investigate before interpreting'],
      capabilities: ['Storytelling', 'Video production', 'Editorial thinking'],
      type: 'education',
    },
    {
      id: 'americorps',
      stage: 'Service',
      years: '2009–2011',
      organization: 'AmeriCorps · Georgia State · Outward Bound',
      title: 'Service, Facilitation, and Youth Development',
      summary: 'Translated academic preparation into service—supporting young people, facilitating experiential learning, and discovering how trust, challenge, and reflection shape growth.',
      highlights: ['Completed two years of service', 'Supported experiential and community-based learning', 'Built a human-centered facilitation practice'],
      capabilities: ['Service leadership', 'Facilitation', 'Experiential learning'],
      type: 'service',
    },
    {
      id: 'k12',
      stage: 'Education',
      years: '2011–2019',
      organization: 'K–12 Education · STEAM & Robotics',
      title: 'Classroom and Program Leadership',
      summary: 'Built a practical understanding of how people learn by teaching STEAM, leading robotics programs, and turning limited resources into meaningful experiences.',
      highlights: ['Coached a regional championship robotics team', 'Secured more than $20,000 in program funding', 'Developed a learner-first leadership practice'],
      capabilities: ['Facilitation', 'Program leadership', 'STEAM learning'],
      type: 'role',
    },
    {
      id: 'ais',
      stage: 'Systems',
      years: '2019–2024',
      organization: 'Atlanta International School',
      title: 'EdTech & Innovation Coach / Strategist',
      summary: 'Connected instructional design, technology, content, analytics, and change leadership into an organization-wide learning and innovation practice.',
      highlights: ['Led an organization-wide LMS migration', 'Achieved 95% adoption and 4.9/5 satisfaction', 'Built analytics and needs-assessment infrastructure'],
      capabilities: ['Learning systems', 'Change leadership', 'Analytics'],
      type: 'role',
    },
    {
      id: 'asu',
      stage: 'Research',
      years: '2023',
      organization: 'Arizona State University',
      title: 'M.Ed., Instructional Design & Technology',
      summary: 'Formalized a systems-based learning practice through advanced study in instructional design, technology, evaluation, and human-centered learning.',
      highlights: ['Graduated Summa Cum Laude', 'Connected learning science to production practice', 'Expanded expertise in evaluation and design strategy'],
      capabilities: ['Learning science', 'Research', 'Evaluation'],
      type: 'education',
    },
    {
      id: 'cox',
      stage: 'Enterprise',
      years: '2025',
      organization: 'Cox Enterprises',
      title: 'Learning Experience Designer',
      summary: 'Designed enterprise learning experiences and AI-assisted production workflows for leadership development, systems adoption, and organizational change.',
      highlights: ['Led creative direction for the Workday Learn enterprise launch', 'Built AI-assisted production workflows for leadership development content', 'Designed a narrative-driven enterprise escape room'],
      capabilities: ['Enterprise learning', 'AI workflows', 'Storyline'],
      type: 'role',
    },
    {
      id: 'ihg',
      stage: 'Scale',
      years: '2025–2026',
      organization: 'IHG Hotels & Resorts',
      title: 'Creative Content Specialist / Developer',
      summary: 'Combined learning strategy, cinematic production, and AI-enabled workflows to create global technology communication and onboarding experiences.',
      highlights: ['Produced enterprise onboarding and adoption content', 'Built repeatable AI-enabled production workflows', 'Partnered across Product, Engineering, UX, and Cybersecurity'],
      capabilities: ['Creative direction', 'Video', 'AI-native production'],
      type: 'current',
    },
  ];

  const beliefs = [
    { title: 'Intelligence', copy: 'I look beneath the obvious to understand how systems, people, and decisions connect.' },
    { title: 'Confidence', copy: 'I make clear decisions while remaining open to evidence, feedback, and change.' },
    { title: 'Self-awareness', copy: 'I understand how my perspective shapes the work and where collaboration strengthens it.' },
    { title: 'Empathy', copy: 'I design for the person who must understand, use, and live with the outcome.' },
  ];

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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(fallback);
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.02 }
    );

    observer.observe(sectionRef.current);
    return () => { clearTimeout(fallback); observer.disconnect(); };
  }, []);

  React.useEffect(() => {
    const node = methodRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setMethodVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => setMethodVisible(entry.isIntersecting), { threshold: 0.3 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    clearTimeout(methodAdvanceTimerRef.current);
    if (!methodVisible || methodPaused || reducedMotion) return undefined;
    const delay = activeMethodIndex === methodStages.length - 1 ? 4000 : 2400;
    methodAdvanceTimerRef.current = setTimeout(() => {
      setActiveMethodIndex((index) => (index + 1) % methodStages.length);
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

  const selectMethodStage = (index) => {
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
        behavior: reducedMotion ? 'auto' : behavior,
      });
    }
  }, [reducedMotion]);

  const handleRailKeyDown = (event) => {
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

  return (
    <section
      ref={sectionRef}
      className={'jiz-about-master ' + (isVisible ? 'is-visible' : '')}
      data-about-v2="ready"
      aria-labelledby="about-master-title"
    >
      <style>{`
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
      `}</style>

      <div className="jiz-about-stage" aria-hidden="true" />
      <div className="jiz-about-texture" aria-hidden="true" />
      <div className="jiz-about-haze" aria-hidden="true" />
      <div className="jiz-about-bleed" aria-hidden="true" />

      <div className="jiz-about-inner">
        <div className="jiz-scene-opening">
          <div className="jiz-reveal">
            <p className="jiz-eyebrow">ABOUT / THE MIND</p>
            <h2 id="about-master-title" className="jiz-opening-title">How Jonathan thinks.</h2>
            <p className="jiz-opening-thesis">
              Most complexity isn't complicated — it's unexamined. My job is finding the shape hiding inside the tangle, then designing toward it.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, maxWidth: 880, marginInline: 'auto', marginTop: 36, textAlign: 'left' }}>
              {[
                ['See the system', 'Every project is people inside a system — not a deliverable to produce.'],
                ['Find real friction', 'I look for where friction actually lives, not where it\'s easiest to fix.'],
                ['Test, then trust', 'Ideas get tested early and kept only if they survive contact with real use.'],
              ].map(([t, d]) => (
                <div key={t} style={{ padding: 20, border: '1px solid rgba(255,255,255,0.08)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.02)' }}>
                  <div style={{ font: 'var(--text-hud)', color: 'var(--color-accent-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{t}</div>
                  <div style={{ font: 'var(--text-body)', fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{d}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="jiz-engine-shell jiz-reveal"
            data-thinking-engine="inline"
          >
            <div className="jiz-engine-stage">
              <video
                ref={videoRef}
                className="jiz-engine-video"
                autoPlay={!reducedMotion}
                loop
                muted
                playsInline
                preload="metadata"
                aria-label="A cinematic visualization of strategic thinking, systems intelligence, and complexity becoming clarity"
                onLoadedMetadata={() => {
                  setVideoReady(true);
                  setVideoError(false);
                  setVideoPlaybackError(false);
                }}
                onLoadedData={() => {
                  setVideoReady(true);
                  setVideoError(false);
                  setVideoPlaybackError(false);
                }}
                onCanPlay={() => {
                  setVideoReady(true);
                  setVideoError(false);
                  setVideoPlaybackError(false);
                }}
                onPlay={() => setVideoPlaying(true)}
                onPause={() => setVideoPlaying(false)}
                onError={() => {
                  setVideoReady(false);
                  setVideoPlaying(false);
                  setVideoError(true);
                  setVideoPlaybackError(false);
                }}
              >
                <source
                  src={THINKING_ENGINE_SRC}
                  type="video/mp4"
                />
                Your browser does not support embedded video.
              </video>

              {!videoReady && !videoError && (
                <div
                  className="jiz-engine-state"
                  role="status"
                  aria-live="polite"
                >
                  <div className="jiz-engine-loader">
                    <span>Preparing the visualization…</span>
                  </div>
                </div>
              )}

              {videoError && (
                <div
                  className="jiz-engine-state"
                  role="alert"
                >
                  <span>
                    The visualization could not load. Jonathan's operating
                    model is described directly below.
                  </span>
                </div>
              )}

              {!videoError && (
                <button
                  className="jiz-engine-control"
                  type="button"
                  disabled={!videoReady}
                  onClick={toggleThinkingEngine}
                  aria-label={
                    videoPlaying
                      ? 'Pause strategic intelligence visualization'
                      : 'Play strategic intelligence visualization'
                  }
                  aria-pressed={videoPlaying}
                >
                  {videoPlaying ? 'Pause' : 'Play'}
                </button>
              )}

              {videoPlaybackError && !videoError && (
                <p className="jiz-engine-playback-note" role="status">
                  Playback was blocked by the browser. Select Play to try again.
                </p>
              )}
            </div>
          </div>

          <div className="jiz-engine-caption jiz-reveal">
            <strong>Operating System</strong>
            <span>I begin by mapping the relationship between people, information, systems, and behavior. Before I design content, I design understanding—revealing what matters, where friction exists, and what will move people forward. My work brings together learning strategy, cinematic storytelling, digital experience design, and AI-enabled production to create solutions that are clear, useful, and built for adoption.</span>
          </div>
        </div>

        <div className="jiz-movement">
          <div className="jiz-movement-heading jiz-reveal">
            <p className="jiz-eyebrow">THE METHOD</p>
            <h3 className="jiz-movement-title">How thought becomes action.</h3>
            <p className="jiz-movement-copy">
              A connected practice for moving from ambiguity to experiences people can understand and use.
            </p>
          </div>

          <div ref={methodRef} className="jiz-method-wrap jiz-reveal" data-method-autoplay="enabled" data-active-method-index={activeMethodIndex} onMouseEnter={() => setMethodPaused(true)} onMouseLeave={resumeMethodWhenEligible}>
            <div className="jiz-method-progress" aria-hidden="true" style={{ width: (activeMethodIndex / (methodStages.length - 1)) * 92 + '%' }} />
            <div className="jiz-method-path" aria-label="Jonathan's five-stage methodology">
              {methodStages.map((stage, index) => (
                <button key={stage.id} type="button" className="jiz-method-button" data-method-stage={stage.id} data-method-index={index} data-active={index === activeMethodIndex ? 'true' : 'false'} aria-pressed={index === activeMethodIndex} onClick={() => selectMethodStage(index)} onFocus={() => setMethodPaused(true)} onBlur={resumeMethodWhenEligible}>
                  <div className="jiz-method-stage">
                    <span className="jiz-method-node" aria-hidden="true" style={{ borderColor: index === activeMethodIndex ? 'var(--color-accent-primary)' : index < activeMethodIndex ? 'var(--color-accent-secondary)' : 'rgba(100,225,255,.3)', background: index === activeMethodIndex ? 'var(--color-accent-primary)' : index < activeMethodIndex ? 'var(--color-accent-secondary)' : '#0b0d10', boxShadow: index === activeMethodIndex ? '0 0 0 7px rgba(198,242,58,.09),0 0 28px rgba(198,242,58,.18)' : '0 0 0 5px rgba(100,225,255,.05)' }} />
                    <p className="jiz-method-label jiz-meta">{stage.label}</p>
                    <h4>{stage.title}</h4>
                    <p>{stage.copy}</p>
                  </div>
                </button>
              ))}
            </div>
            <span className="sr-only" role="status" aria-live="polite" data-method-status>{`Active method stage: ${methodStages[activeMethodIndex].title}`}</span>
          </div>

          <div className="jiz-capabilities jiz-reveal">
            {capabilityGroups.map((group) => (
              <section className="jiz-capability" key={group.title}>
                <h4 className="jiz-meta">{group.title}</h4>
                <p>{group.subtitle}</p>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
            ))}
          </div>
        </div>

        <div className="jiz-movement">
          <div className="jiz-career-header jiz-reveal">
            <div className="jiz-movement-heading" style={{ marginBottom: 0 }}>
              <p className="jiz-eyebrow">THE JOURNEY</p>
              <h3 className="jiz-movement-title">Built through experience.</h3>
              <p className="jiz-movement-copy">That method took shape across four roles — tested, refined, and proven under real deadlines.</p>
              <p className="jiz-movement-copy">
                Explore how learning, systems, technology, and storytelling shaped the practice.
              </p>
            </div>
            <div className="jiz-career-controls" aria-label="Career journey controls">
              <button className="jiz-career-control" type="button" aria-label="Previous career milestone" disabled={activeIndex === 0} onClick={() => selectCareerEntry(activeIndex - 1)}>← Previous</button>
              <button className="jiz-career-control" type="button" aria-label="Next career milestone" disabled={activeIndex === careerEntries.length - 1} onClick={() => selectCareerEntry(activeIndex + 1)}>Next →</button>
            </div>
          </div>

          <div className="jiz-career-helper" data-career-progress><span>Use the arrows, swipe, or select a milestone to explore.</span><strong>{activeIndex + 1} of {careerEntries.length}</strong></div>
          <div className="jiz-career-rail-shell">
          <div
            ref={railRef}
            className="jiz-career-viewport jiz-reveal"
            tabIndex={0}
            role="region"
            aria-label="Interactive career journey. Use left and right arrow keys to explore."
            onKeyDown={handleRailKeyDown}
          >
            <div className="jiz-career-track">
              {careerEntries.map((entry, index) => (
                <button
                  key={entry.id}
                  ref={(element) => { nodeRefs.current[index] = element; }}
                  className={'jiz-career-node ' + (activeIndex === index ? 'is-active' : '')}
                  data-career-milestone={entry.id}
                  data-career-index={index}
                  data-active={activeIndex === index ? 'true' : 'false'}
                  data-type={entry.type}
                  type="button"
                  aria-pressed={activeIndex === index}
                  onClick={() => selectCareerEntry(index)}
                >
                  <span className="jiz-career-dot" aria-hidden="true" />
                  <span className="jiz-career-stage">{entry.stage}</span>
                  <span className="jiz-career-years">{entry.years}</span>
                  <span className="jiz-career-org">{entry.organization}</span>
                </button>
              ))}
            </div>
          </div>
          </div>

          <div className="jiz-career-detail jiz-reveal" aria-live="polite">
            <div>
              <p className="jiz-eyebrow">{activeCareer.years}</p>
              <h4>{activeCareer.title}</h4>
              <p className="jiz-career-org-detail">{activeCareer.organization}</p>
            </div>
            <div>
              <p className="jiz-career-summary">{activeCareer.summary}</p>
              <div className="jiz-career-detail-grid">
                <div>
                  <h5 className="jiz-meta">SELECTED IMPACT</h5>
                  <ul>{activeCareer.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
                <div>
                  <h5 className="jiz-meta">CAPABILITIES</h5>
                  <p style={{ margin: 0, color: 'var(--color-text-secondary)', font: 'var(--text-caption)' }}>{activeCareer.capabilities.join(' · ')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="jiz-beliefs-intro jiz-reveal">
            <p className="jiz-eyebrow">FOUNDATION</p>
            <h3 className="jiz-movement-title">What guides the work.</h3>
            <p className="jiz-movement-copy">
              Core beliefs that shape every project, from strategy through execution.
            </p>
          </div>

          <div className="jiz-beliefs-wrapper jiz-reveal">
            <div className="jiz-beliefs-grid" aria-label="Core beliefs and working principles">
              {beliefs.map((belief, idx) => (
                <article className="jiz-belief" data-belief-index={idx} key={belief.title}>
                  <h4>{belief.title}</h4>
                  <p>{belief.copy}</p>
                </article>
              ))}
              {[
                ['Direction, not delegation', 'I set the strategy, narrative, and creative direction first — tools execute inside that frame, never in place of it.'],
                ['Speed for production, not decisions', 'Faster drafting and iteration buy more time for the judgment calls that actually shape outcomes.'],
                ['Every output is reviewed and owned', 'Nothing ships without a human pass — accuracy, tone, and instructional integrity are mine to answer for.'],
              ].map(([t, d]) => (
                <article className="jiz-practice" key={t}>
                  <h4>{t}</h4>
                  <p>{d}</p>
                </article>
              ))}
            </div>
          </div>


        </div>

      </div>
    </section>
  );
}

if (typeof window !== 'undefined') {
  window.AboutV2 = AboutV2;
}
