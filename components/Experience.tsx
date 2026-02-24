import ScrollReveal from './ScrollReveal'

const experiences = [
  {
    type: 'education',
    title: 'Bachelor of Science in Information Technology',
    org: 'University / College',
    period: '2021 – Present',
    description:
      'Focused on software engineering, web technologies, and computer science fundamentals. Building strong foundations in algorithms, databases, and system design.',
    icon: '🎓',
  },
  {
    type: 'freelance',
    title: 'Freelance Frontend Developer',
    org: 'Self-employed',
    period: '2023 – Present',
    description:
      'Designing and developing custom web applications and portfolio sites for clients. Specialising in React, Next.js, and Tailwind CSS to deliver polished, performant experiences.',
    icon: '💼',
  },
  {
    type: 'project',
    title: 'Open-Source & Personal Projects',
    org: 'GitHub · JenxxAI',
    period: '2022 – Present',
    description:
      'Actively building and publishing projects exploring automation with N8N, computer vision with Roboflow, and interactive interfaces. Each project is a deliberate step toward mastery.',
    icon: '🚀',
  },
]

const typeColor: Record<string, string> = {
  education: '#c084fc',
  freelance: '#9333ea',
  project: '#7c3aed',
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-8 lg:px-16" style={{ background: '#080810' }}>
      <ScrollReveal>
        <p className="font-mono text-xs text-purple tracking-[0.15em] uppercase mb-2">
          // Journey
        </p>
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <h2
          className="font-syne font-bold mb-16"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
        >
          Experience &amp; <span className="text-purple-light">Education</span>
        </h2>
      </ScrollReveal>

      <div className="relative max-w-3xl">
        {/* Vertical line */}
        <div
          className="absolute left-4 md:left-8 top-0 bottom-0 w-px"
          style={{ background: 'linear-gradient(to bottom, #9333ea, rgba(147,51,234,0.1))' }}
        />

        <div className="flex flex-col gap-12">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.title} delay={i * 100}>
              <div className="relative flex gap-6 md:gap-12 pl-12 md:pl-24">
                {/* Dot */}
                <div
                  className="absolute left-0 md:left-4 top-1 w-8 h-8 rounded-full flex items-center justify-center text-base flex-shrink-0"
                  style={{
                    background: '#10101f',
                    border: `2px solid ${typeColor[exp.type]}`,
                    boxShadow: `0 0 16px ${typeColor[exp.type]}55`,
                  }}
                >
                  {exp.icon}
                </div>

                {/* Card */}
                <div
                  className="card-hover flex-1 rounded-2xl p-6"
                  style={{ background: '#10101f', border: '1px solid #1e1e35' }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-syne font-bold text-white text-lg leading-tight">
                        {exp.title}
                      </h3>
                      <p className="font-mono text-xs mt-1" style={{ color: typeColor[exp.type] }}>
                        {exp.org}
                      </p>
                    </div>
                    <span
                      className="font-mono text-xs px-3 py-1 rounded-full flex-shrink-0"
                      style={{
                        background: 'rgba(147,51,234,0.1)',
                        border: '1px solid rgba(147,51,234,0.2)',
                        color: '#c4b5fd',
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed font-light" style={{ color: '#8888a8' }}>
                    {exp.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
