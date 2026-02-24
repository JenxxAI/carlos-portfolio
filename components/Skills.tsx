import ScrollReveal from './ScrollReveal'
import { skillCategories } from './data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-8 lg:px-16" style={{ background: '#0d0d1a' }}>
      <ScrollReveal>
        <p className="font-mono text-xs text-purple tracking-[0.15em] uppercase mb-2">
          // Expertise
        </p>
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <h2
          className="font-syne font-bold mb-12"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
        >
          What I <span className="text-purple-light">Work With</span>
        </h2>
      </ScrollReveal>

      <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))' }}>
        {skillCategories.map((cat, i) => (
          <ScrollReveal key={cat.title} delay={i * 80}>
            <div
              className="card-hover card-border-glow relative rounded-2xl p-7"
              style={{
                background: '#10101f',
                border: '1px solid #1e1e35',
                overflow: 'hidden',
              }}
            >
              <p className="font-mono text-xs text-purple-light tracking-widest uppercase mb-4">
                {cat.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 rounded-md"
                    style={{
                      background: 'rgba(147,51,234,0.1)',
                      border: '1px solid rgba(147,51,234,0.2)',
                      color: '#c4b5fd',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
