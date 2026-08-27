'use client'

import { useEffect, useRef, useState } from 'react'

const journey = [
  {
    chapter: 'Foundation',
    role: 'CCIS Tech Support Volunteer',
    organization: 'State University of Northern Negros',
    period: 'Jun 2024 – Jun 2026',
    summary:
      'Built a hands-on support foundation by keeping systems, equipment, and university activities running for faculty, staff, and students.',
    points: [
      'Resolved hardware, software, and basic network issues',
      'Installed and maintained Windows 10/11 systems',
      'Supported laboratory setup, diagnostics, repairs, and events',
    ],
    tags: ['IT support', 'Windows', 'Hardware', 'Networks'],
  },
  {
    chapter: 'Quality mindset',
    role: 'Quality Assurance Engineer Intern',
    organization: 'Growsari',
    period: 'Jan 2026 – Apr 2026',
    summary:
      'Moved from troubleshooting systems into validating software, documenting evidence, and protecting the reliability of logistics workflows.',
    points: [
      'Covered delivery, warehouse, and web-admin systems',
      'Created test cases and consolidated test execution',
      'Produced clear test evidence for review and release decisions',
    ],
    tags: ['Manual QA', 'MySQL', 'Android Studio', 'Test evidence'],
  },
  {
    chapter: 'Ownership',
    role: 'Quality Assurance Engineer',
    organization: 'Growsari',
    period: 'May 2026 · Progressed internally',
    summary:
      'Took broader QA ownership while expanding coverage, experimenting with automation, and helping the team adopt new testing workflows.',
    points: [
      'Led QA coverage for Last Mile and Backhaul workflows',
      'Contributed to QApilot-assisted mobile test execution',
      'Explored n8n test-data flows and Playwright web automation',
    ],
    tags: ['Playwright', 'n8n', 'QApilot', 'Regression testing'],
  },
  {
    chapter: 'Current signal',
    role: 'Technical Support Engineer',
    organization: 'Growsari',
    period: 'Current role',
    summary:
      'Now applying an evidence-first QA mindset to technical support—connecting user context, system behavior, and practical troubleshooting.',
    points: [
      'Translates reported issues into clear technical context',
      'Approaches troubleshooting with structured validation',
      'Brings support, quality, and product understanding together',
    ],
    tags: ['Technical support', 'Troubleshooting', 'Product context', 'Quality mindset'],
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const activeRef = useRef(0)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0

    const update = () => {
      frame = 0
      if (reduceMotion.matches || window.innerWidth < 900) return

      const rect = section.getBoundingClientRect()
      const distance = Math.max(section.offsetHeight - window.innerHeight, 1)
      const progress = Math.min(1, Math.max(0, -rect.top / distance))
      const nextStep = Math.min(journey.length - 1, Math.round(progress * (journey.length - 1)))

      section.style.setProperty('--journey-progress', String(progress))

      if (nextStep !== activeRef.current) {
        activeRef.current = nextStep
        setActiveStep(nextStep)
      }
    }

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    reduceMotion.addEventListener('change', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      reduceMotion.removeEventListener('change', requestUpdate)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="journey-section">
      <div className="journey-sticky">
        <div className="section-heading journey-heading">
          <div>
            <p className="section-kicker">{'// Career progression'}</p>
            <h2>One career. <span>Three connected disciplines.</span></h2>
          </div>
          <p>
            I started by supporting people and systems, learned to validate software quality,
            and now bring both perspectives into technical support engineering.
          </p>
        </div>

        <div className="journey-stage">
          <div className="journey-map" aria-label="Career journey chapters">
            <div className="journey-map__line" aria-hidden="true">
              <span />
            </div>
            <ol>
              {journey.map((item, index) => (
                <li key={item.role} className={index === activeStep ? 'is-active' : index < activeStep ? 'is-complete' : ''}>
                  <span className="journey-map__number">0{index + 1}</span>
                  <button type="button" onClick={() => setActiveStep(index)} aria-label={`Show ${item.role}`}>
                    <small>{item.chapter}</small>
                    <strong>{item.role}</strong>
                  </button>
                </li>
              ))}
            </ol>
          </div>

          <div className="journey-radar" aria-hidden="true">
            <div className="journey-radar__grid" />
            <div className="journey-radar__sweep" />
            <div className="journey-radar__pulse" />
            <strong>0{activeStep + 1}</strong>
            <span>{journey[activeStep].chapter}</span>
          </div>

          <div className="journey-panels" aria-live="polite">
            {journey.map((item, index) => (
              <article key={item.role} className={`journey-panel ${index === activeStep ? 'is-active' : ''}`} aria-hidden={index !== activeStep}>
                <div className="journey-panel__meta">
                  <span>{item.organization}</span>
                  <span>{item.period}</span>
                </div>
                <p className="journey-panel__chapter">{item.chapter}</p>
                <h3>{item.role}</h3>
                <p className="journey-panel__summary">{item.summary}</p>
                <ul>
                  {item.points.map(point => <li key={point}>{point}</li>)}
                </ul>
                <div className="tag-list">
                  {item.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="journey-scroll-hint" aria-hidden="true">
          <span>Scroll to advance</span>
          <div><i /></div>
        </div>

        <div className="journey-mobile-list">
          {journey.map((item, index) => (
            <article key={item.role} className="journey-mobile-card">
              <div className="journey-mobile-card__top">
                <span>0{index + 1}</span>
                <p>{item.chapter}</p>
              </div>
              <h3>{item.role}</h3>
              <div className="journey-mobile-card__meta">
                <span>{item.organization}</span>
                <span>{item.period}</span>
              </div>
              <p>{item.summary}</p>
              <ul>
                {item.points.map(point => <li key={point}>{point}</li>)}
              </ul>
              <div className="tag-list">
                {item.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
