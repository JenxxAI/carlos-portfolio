import ScrollReveal from './ScrollReveal'

const experiences = [
  {
    type: 'intern',
    title: 'Software Quality Assurance Intern',
    org: 'Growsari · Bonifacio Global City, Metro Manila',
    period: 'Jan 2026 – Present',
    description:
      'Performing manual, functional, exploratory, regression, and end-to-end (E2E) testing on web and mobile platforms. Utilizing Android Studio, Postman API, and MySQL to validate software quality and ensure reliable product releases in a hybrid work setup.',
    icon: '🧪',
  },
  {
    type: 'volunteer',
    title: 'CICTE Tech Support · Student Volunteer',
    org: 'College of Information Communication Technology and Engineering – SUNN',
    period: 'Jun 2023 – Present',
    description:
      'Providing IT technical support to faculty, staff, and students — troubleshooting hardware, software, and network issues. Installing and configuring Windows 10/11 systems, performing computer reformatting and diagnostics, and assisting in computer lab setup, maintenance, and on-site support during university events.',
    icon: '🖥️',
  },
  {
    type: 'volunteer',
    title: 'Student Volunteer – Special Program Committee',
    org: 'Supreme Student Council · State University of Northern Negros',
    period: 'Jul 2022 – Jan 2026',
    description:
      'Assisted the SSC in planning and executing university-wide events — assemblies, seminars, orientations, and leadership programs. Handled registration, crowd control, information dissemination, AV/equipment setup, and promoted SSC programs through digital materials and social media.',
    icon: '🤝',
  },
  {
    type: 'education',
    title: 'Bachelor of Science in Information Technology',
    org: 'State University of Northern Negros',
    period: '2022 – Present',
    description:
      'Studying at the College of Information Communication Technology and Engineering (CICTE). Focused on software engineering, web technologies, computer science fundamentals, networking, and system design.',
    icon: '🎓',
  },
]

const typeColor: Record<string, string> = {
  education: '#c084fc',
  intern:    '#9333ea',
  volunteer: '#7c3aed',
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
                  className="card-hover flex-1 rounded-2xl p-4 sm:p-6"
                  style={{ background: '#10101f', border: '1px solid #1e1e35' }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-syne font-bold text-white text-base sm:text-lg leading-tight">
                        {exp.title}
                      </h3>
                      <p className="font-mono text-xs mt-1" style={{ color: typeColor[exp.type] }}>
                        {exp.org}
                      </p>
                    </div>
                    <span
                      className="font-mono text-xs px-3 py-1 rounded-full self-start sm:flex-shrink-0"
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
