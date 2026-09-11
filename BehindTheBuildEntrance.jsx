class BehindTheBuildEntrance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scene: 'arrival',
      showTranscript: false,
      selectedPath: 'guided',
      autoPlayWelcome: false,
      mediaLoaded: false,
      reducedMotion: window.matchMedia('(prefers-reduced-motion:reduce)').matches
    };
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.checkReducedMotion();
  }

  checkReducedMotion() {
    const query = window.matchMedia('(prefers-reduced-motion:reduce)');
    this.setState({ reducedMotion: query.matches });
    query.addEventListener('change', e => this.setState({ reducedMotion: e.matches }));
  }

  playWelcome() {
    if (this.videoRef.current) {
      this.videoRef.current.play();
      this.setState({ autoPlayWelcome: true });
    }
  }

  skipWelcome() {
    this.setState({ scene: 'orientation' });
  }

  continueWithoutVideo() {
    this.setState({ scene: 'orientation' });
  }

  selectPath(path) {
    this.setState({ selectedPath: path, scene: 'map' });
  }

  beginExperience() {
    this.setState({ scene: 'chapter-01' });
  }

  backToEntrance() {
    this.setState({ scene: 'arrival', showTranscript: false, selectedPath: 'guided' });
  }

  renderArrival() {
    return (
      <div className="jiz-btb-scene jiz-btb-arrival" style={{ opacity: 1, pointerEvents: 'auto' }}>
        <div className="jiz-btb-arrival-bg"></div>
        <div className="jiz-btb-arrival-content">
          <div className="jiz-btb-signal-field">
            <svg viewBox="0 0 400 300" className="jiz-btb-evidence-field" aria-hidden="true">
              <circle cx="50" cy="50" r="8" fill="none" stroke="var(--color-chartreuse)" strokeWidth="1" opacity="0.3" />
              <rect x="150" y="80" width="40" height="30" fill="none" stroke="var(--color-cyan)" strokeWidth="1" opacity="0.3" />
              <circle cx="300" cy="120" r="12" fill="none" stroke="var(--color-chartreuse)" strokeWidth="1.5" opacity="0.2" />
              <path d="M 100 200 Q 150 180 200 200" fill="none" stroke="var(--color-cyan)" strokeWidth="1" opacity="0.25" />
              <text x="200" y="150" textAnchor="middle" fontSize="14" fill="var(--color-text)" opacity="0.4">Organizing complexity</text>
            </svg>
          </div>
          <h1 className="jiz-btb-arrival-title">BEHIND THE BUILD</h1>
          <p className="jiz-btb-arrival-subtitle">An interactive documentary about turning complexity into something people can understand.</p>
          <p className="jiz-btb-arrival-label">EXHIBITION 01 / DIGITAL EXPERIENCE</p>
        </div>
        <div className="jiz-btb-controls">
          <button className="jiz-btb-button jiz-btb-primary" onClick={() => this.setState({ scene: 'welcome' })}>Begin Experience</button>
          <button className="jiz-btb-button jiz-btb-secondary" onClick={() => this.skipWelcome()}>Skip Intro</button>
        </div>
      </div>
    );
  }

  renderWelcome() {
    const hasVideo = false;
    return (
      <div className="jiz-btb-scene jiz-btb-welcome" style={{ opacity: this.state.scene === 'welcome' ? 1 : 0, pointerEvents: this.state.scene === 'welcome' ? 'auto' : 'none' }}>
        <div className="jiz-btb-welcome-bg"></div>
        <div className="jiz-btb-welcome-content">
          <div className="jiz-btb-welcome-media">
            {hasVideo ? (
              <video ref={this.videoRef} className="jiz-btb-welcome-video" poster="./assets/behind-the-build/hero-welcome-poster.webp" controls={false} playsInline preload="metadata">
                <source src="./assets/behind-the-build/welcome.mp4" type="video/mp4" />
                Your browser does not support video.
              </video>
            ) : (
              <div className="jiz-btb-video-placeholder">
                <div className="jiz-btb-placeholder-content">Jonathan's Welcome</div>
              </div>
            )}
          </div>
          <div className="jiz-btb-welcome-text">
            <h2>A Personal Welcome</h2>
            <p>This experience began with a simple question: what if a portfolio could do more than display finished work?</p>
            <p>What if it could reveal the thinking, decisions, experiments, and collaboration behind the result?</p>
            <p>Behind the Build is the story of how I brought learning design, creative strategy, AI-assisted production, and technical problem-solving into one living product.</p>
          </div>
          <div className="jiz-btb-welcome-controls">
            {hasVideo ? (
              <button className="jiz-btb-button jiz-btb-primary" onClick={() => this.playWelcome()}>Play Welcome</button>
            ) : (
              <p className="jiz-btb-media-pending">[Welcome video pending]</p>
            )}
            <button className="jiz-btb-button jiz-btb-secondary" onClick={() => this.continueWithoutVideo()}>Continue</button>
          </div>
        </div>
        <button className="jiz-btb-back" onClick={() => this.backToEntrance()}>← Back</button>
      </div>
    );
  }

  renderOrientation() {
    return (
      <div className="jiz-btb-scene jiz-btb-orientation" style={{ opacity: this.state.scene === 'orientation' ? 1 : 0, pointerEvents: this.state.scene === 'orientation' ? 'auto' : 'none' }}>
        <div className="jiz-btb-orientation-bg"></div>
        <div className="jiz-btb-orientation-content">
          <h2>Choose Your Path</h2>
          <div className="jiz-btb-path-options">
            <button className={`jiz-btb-path-card jiz-btb-path-guided ${this.state.selectedPath === 'guided' ? 'active' : ''}`} onClick={() => this.selectPath('guided')}>
              <h3>Guided Path</h3>
              <p>A curated chapter-by-chapter documentary experience.</p>
            </button>
            <button className={`jiz-btb-path-card jiz-btb-path-explore ${this.state.selectedPath === 'explore' ? 'active' : ''}`} onClick={() => this.selectPath('explore')}>
              <h3>Explore Freely</h3>
              <p>Enter the exhibition map and choose an area.</p>
            </button>
            <button className={`jiz-btb-path-card jiz-btb-path-quick ${this.state.selectedPath === 'quick' ? 'active' : ''}`} onClick={() => this.selectPath('quick')}>
              <h3>Quick Overview</h3>
              <p>A concise summary for visitors with limited time.</p>
            </button>
          </div>
        </div>
        <button className="jiz-btb-button jiz-btb-primary" onClick={() => this.beginExperience()}>Begin with the Question</button>
        <button className="jiz-btb-back" onClick={() => this.backToEntrance()}>← Back</button>
      </div>
    );
  }

  renderMap() {
    return (
      <div className="jiz-btb-scene jiz-btb-map" style={{ opacity: this.state.scene === 'map' ? 1 : 0, pointerEvents: this.state.scene === 'map' ? 'auto' : 'none' }}>
        <div className="jiz-btb-map-bg"></div>
        <div className="jiz-btb-map-content">
          <h2>The Documentary</h2>
          <div className="jiz-btb-chapter-map">
            <div className="jiz-btb-chapter-node jiz-btb-chapter-active">
              <span className="jiz-btb-chapter-number">01</span>
              <span className="jiz-btb-chapter-title">The Question</span>
              <span className="jiz-btb-chapter-status">Active</span>
            </div>
            <div className="jiz-btb-chapter-node">
              <span className="jiz-btb-chapter-number">02</span>
              <span className="jiz-btb-chapter-title">The Vision</span>
              <span className="jiz-btb-chapter-status">Coming next</span>
            </div>
            <div className="jiz-btb-chapter-node">
              <span className="jiz-btb-chapter-number">03</span>
              <span className="jiz-btb-chapter-title">Designing the System</span>
              <span className="jiz-btb-chapter-status">In development</span>
            </div>
            <div className="jiz-btb-chapter-node">
              <span className="jiz-btb-chapter-number">04</span>
              <span className="jiz-btb-chapter-title">Directing AI</span>
              <span className="jiz-btb-chapter-status">In development</span>
            </div>
            <div className="jiz-btb-chapter-node">
              <span className="jiz-btb-chapter-number">05</span>
              <span className="jiz-btb-chapter-title">Breaking the Build</span>
              <span className="jiz-btb-chapter-status">In development</span>
            </div>
            <div className="jiz-btb-chapter-node">
              <span className="jiz-btb-chapter-number">06</span>
              <span className="jiz-btb-chapter-title">Restoring the Signal</span>
              <span className="jiz-btb-chapter-status">In development</span>
            </div>
            <div className="jiz-btb-chapter-node">
              <span className="jiz-btb-chapter-number">07</span>
              <span className="jiz-btb-chapter-title">Shipping</span>
              <span className="jiz-btb-chapter-status">In development</span>
            </div>
            <div className="jiz-btb-chapter-node">
              <span className="jiz-btb-chapter-number">08</span>
              <span className="jiz-btb-chapter-title">What Changed in Me</span>
              <span className="jiz-btb-chapter-status">In development</span>
            </div>
          </div>
        </div>
        <button className="jiz-btb-back" onClick={() => this.setState({ scene: 'orientation' })}>← Back</button>
      </div>
    );
  }

  renderChapter01() {
    return (
      <div className="jiz-btb-scene jiz-btb-chapter-01" style={{ opacity: this.state.scene === 'chapter-01' ? 1 : 0, pointerEvents: this.state.scene === 'chapter-01' ? 'auto' : 'none' }}>
        <div className="jiz-btb-chapter-bg"></div>
        <div className="jiz-btb-chapter-content">
          <h2>CHAPTER 01</h2>
          <h3>THE QUESTION</h3>
          <p className="jiz-btb-chapter-intro">What happens when a portfolio stops being a collection of projects and becomes a product?</p>
          <p className="jiz-btb-placeholder">[Chapter 01 content coming next]</p>
        </div>
        <button className="jiz-btb-back" onClick={() => this.setState({ scene: 'map' })}>← Back to Map</button>
      </div>
    );
  }

  render() {
    const { scene } = this.state;
    let content;

    switch (scene) {
      case 'welcome':
        content = this.renderWelcome();
        break;
      case 'orientation':
        content = this.renderOrientation();
        break;
      case 'map':
        content = this.renderMap();
        break;
      case 'chapter-01':
        content = this.renderChapter01();
        break;
      default:
        content = this.renderArrival();
    }

    return <div className="jiz-btb-container">{content}</div>;
  }
}

Object.assign(window, { BehindTheBuildEntrance });