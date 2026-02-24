import ScrollReveal from './ScrollReveal'
import { projects } from './data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-16" style={{ background: '#080810' }}>
      <ScrollReveal>
        <p className="font-mono text-xs text-purple tracking-[0.15em] uppercase mb-2">
          // My Work
        </p>
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <h2
          className="font-syne font-bold mb-12"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
        >
          Featured <span className="text-purple-light">Projects</span>
        </h2>
      </ScrollReveal>

      <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}>
        {projects.map((project, i) => (
          <ScrollReveal key={project.id} delay={i * 100}>
            <div
              className={`card-hover-lg relative rounded-2xl p-8 flex flex-col gap-4 overflow-hidden transition-all duration-300 ${project.placeholder ? 'opacity-60' : ''}`}
              style={{
                background: '#10101f',
                border: `1px solid ${project.placeholder ? '#1e1e35' : '#1e1e35'}`,
                borderStyle: project.placeholder ? 'dashed' : 'solid',
              }}
            >
              {/* Subtle radial */}
              {!project.placeholder && (
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle at 80% 20%, rgba(147,51,234,0.06), transparent 60%)',
                  }}
                />
              )}

              <p className="font-mono text-xs text-purple tracking-widest relative z-10">
                PROJECT_{project.id}
              </p>

              <h3 className="font-syne font-bold text-2xl text-white relative z-10">
                {project.title}
              </h3>

              <p className="text-sm leading-relaxed flex-1 relative z-10" style={{ color: '#8888a8' }}>
                {project.description}
              </p>

              {/* Status */}
              <div
                className="inline-flex items-center gap-2 font-mono text-xs tracking-widest relative z-10"
                style={{ color: project.statusColor }}
              >
                {project.status !== 'Coming Soon' && (
                  <span
                    className="animate-pulse-dot w-1.5 h-1.5 rounded-full"
                    style={{ background: project.statusColor }}
                  />
                )}
                {project.status}
              </div>

              {/* Tags */}
              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md"
                      style={{
                        background: 'rgba(147,51,234,0.1)',
                        border: '1px solid rgba(147,51,234,0.2)',
                        color: '#c4b5fd',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Links */}
              {project.github && (
                <div className="flex gap-4 relative z-10 mt-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-purple-light hover:text-white transition-colors duration-200"
                  >
                    <GithubIcon />
                    View on GitHub →
                  </a>
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77a5.07 5.07 0 00-.09-3.77S18.73 1 16 2.48a13.38 13.38 0 00-7 0C6.27 1 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
    </svg>
  )
}
