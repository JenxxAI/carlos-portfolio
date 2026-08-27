import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const principles = [
  { title: 'Evidence first', text: 'Reproduce, observe, document, then decide.' },
  { title: 'People centered', text: 'A technical fix matters most when it helps someone move forward.' },
  { title: 'Keep learning', text: 'Every support case, test cycle, and project expands the toolkit.' },
]

const foundations = [
  {
    title: 'Bachelor of Science in Information Technology',
    organization: 'State University of Northern Negros',
    period: '2022 – Present',
  },
  {
    title: 'Student Volunteer · Special Program Committee',
    organization: 'Supreme Student Council',
    period: 'Jul 2022 – Jan 2026',
  },
  {
    title: 'DSWD Cash-for-Work',
    organization: 'College support engagement',
    period: 'Jun 2024 – Apr 2025',
  },
]

export default function About() {
  return (
    <section id="about" className="about-section section-shell">
      <div className="about-layout">
        <ScrollReveal className="about-portrait-wrap">
          <div className="about-portrait">
            <div className="about-portrait__frame">
              <Image
                src="https://avatars.githubusercontent.com/JenxxAI?size=720"
                alt="Carlos Miguel Torres"
                fill
                sizes="(max-width: 800px) 90vw, 38vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="about-portrait__caption">
              <span>Based in the Philippines</span>
              <span>GMT+8</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="about-copy">
          <ScrollReveal>
            <p className="section-kicker">{'// About Carlos'}</p>
            <h2>Built between <span>repair rooms</span> and <span>release cycles.</span></h2>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <p className="about-lead">
              My path into technology did not begin with a single job title. It began by helping
              people get their computers, software, and equipment working again.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <p>
              Quality assurance taught me to turn that troubleshooting instinct into a repeatable
              process: reproduce the issue, collect evidence, understand risk, and communicate
              clearly. Today, as a Technical Support Engineer at Growsari, those two foundations
              meet in the same work.
            </p>
          </ScrollReveal>

          <div className="principle-list">
            {principles.map((principle, index) => (
              <ScrollReveal key={principle.title} delay={160 + index * 60}>
                <article>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.text}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <ScrollReveal>
        <div className="foundation-block">
          <div>
            <p className="section-kicker">{'// Education & community'}</p>
            <h3>The experiences that shaped the work.</h3>
          </div>
          <ul>
            {foundations.map(item => (
              <li key={item.title}>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.organization}</span>
                </div>
                <time>{item.period}</time>
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>
    </section>
  )
}
