import Link from 'next/link'

const progression = [
  { label: 'QA Intern', state: 'complete' },
  { label: 'QA Engineer', state: 'complete' },
  { label: 'TSE', state: 'active' },
]

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow--one" aria-hidden="true" />
      <div className="hero-glow hero-glow--two" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-copy">
          <div className="availability-pill">
            <span aria-hidden="true" />
            Currently a Technical Support Engineer at Growsari
          </div>

          <p className="hero-kicker">Support systems. Validate quality. Solve what matters.</p>
          <h1>
            Carlos Miguel
            <span>Torres</span>
          </h1>

          <p className="hero-summary">
            A <strong>Technical Support Engineer</strong> with a software-quality foundation and
            hands-on experience across IT support, testing, automation, and web technologies.
            I approach technical problems with evidence, empathy, and a bias for practical fixes.
          </p>

          <div className="hero-actions">
            <Link href="#experience" className="button button--primary">
              Trace my journey
              <ArrowDownIcon />
            </Link>
            <a href="/Carlos_Torres_Resume.pdf" download className="button button--secondary">
              Download résumé
              <DownloadIcon />
            </a>
            <Link href="#contact" className="button button--text">
              Let&apos;s connect <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <ul className="hero-principles" aria-label="Professional focus">
            <li><span>01</span> Technical support</li>
            <li><span>02</span> Software quality</li>
            <li><span>03</span> Practical automation</li>
          </ul>
        </div>

        <div className="career-signal" aria-label="Career progression from QA Intern to Technical Support Engineer">
          <div className="career-signal__eyebrow">
            <span>CAREER_SIGNAL</span>
            <span className="career-signal__live">LIVE</span>
          </div>

          <div className="signal-visual" aria-hidden="true">
            <div className="signal-ring signal-ring--outer" />
            <div className="signal-ring signal-ring--middle" />
            <div className="signal-ring signal-ring--inner" />
            <div className="signal-sweep" />
            <div className="signal-core">
              <span>Current</span>
              <strong>TSE</strong>
            </div>
            <span className="signal-node signal-node--one" />
            <span className="signal-node signal-node--two" />
            <span className="signal-node signal-node--three" />
          </div>

          <ol className="career-signal__steps">
            {progression.map((step, index) => (
              <li key={step.label} className={step.state === 'active' ? 'is-active' : ''}>
                <span>0{index + 1}</span>
                <div>
                  <small>{step.state === 'active' ? 'Current role' : 'Completed'}</small>
                  <strong>{step.label}</strong>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="hero-scroll-cue" aria-hidden="true">
        <span />
        Scroll to follow the signal
      </div>
    </section>
  )
}

function ArrowDownIcon() {
  return (
    <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5v14m0 0 6-6m-6 6-6-6" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16" />
    </svg>
  )
}
