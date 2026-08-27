import ScrollReveal from './ScrollReveal'
import { projects } from './data/projects'

export default function Projects() {
  return (
    <section id="projects" className="work-section section-shell">
      <ScrollReveal>
        <div className="section-heading">
          <div>
            <p className="section-kicker">{'// Selected work'}</p>
            <h2>Projects &amp; <span>technical initiatives.</span></h2>
          </div>
          <p>
            A mix of quality engineering experiments and product builds—each grounded in a
            concrete problem rather than technology for technology&apos;s sake.
          </p>
        </div>
      </ScrollReveal>

      <div className="work-grid">
        {projects.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 100}>
            <article className="work-card">
              <div className="work-card__index" aria-hidden="true">{project.id}</div>
              <div className="work-card__meta">
                <span>{project.kind}</span>
                <span>{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="work-card__outcome">
                <span>Why it matters</span>
                <p>{project.outcome}</p>
              </div>
              <div className="tag-list">
                {project.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
              {project.github ? (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="work-card__link">
                  View repository <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className="work-card__private">Internal workflow · Overview only</span>
              )}
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
