import ScrollReveal from './ScrollReveal'
import { focusAreas, skillCategories } from './data/skills'

export default function Skills() {
  return (
    <section id="skills" className="capabilities-section section-shell">
      <ScrollReveal>
        <div className="section-heading">
          <div>
            <p className="section-kicker">{'// How I work'}</p>
            <h2>Three perspectives. <span>One problem-solving mindset.</span></h2>
          </div>
          <p>
            My value sits at the intersection of user support, quality engineering, and enough
            development knowledge to understand how systems behave.
          </p>
        </div>
      </ScrollReveal>

      <div className="focus-grid">
        {focusAreas.map((area, index) => (
          <ScrollReveal key={area.title} delay={index * 90}>
            <article className="focus-card">
              <div className="focus-card__top">
                <span>{area.number}</span>
                <i aria-hidden="true" />
              </div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <small>{area.signal}</small>
            </article>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="toolkit-heading">
          <p className="section-kicker">{'// Toolkit'}</p>
          <p>Tools support the process. The thinking comes first.</p>
        </div>
      </ScrollReveal>

      <div className="toolkit-grid">
        {skillCategories.map((category, index) => (
          <ScrollReveal key={category.title} delay={index * 70}>
            <article className="toolkit-card">
              <h3>{category.title}</h3>
              <div className="tag-list">
                {category.skills.map(skill => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
