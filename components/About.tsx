import ScrollReveal from './ScrollReveal'
import Link from 'next/link'

const stats = [
  { num: '4+', label: 'Languages' },
  { num: '10+', label: 'Tools Mastered' },
  { num: '1', label: 'Live Project' },
  { num: '∞', label: 'Ideas in Queue' },
]

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-8 lg:px-16 grid gap-16 items-center"
      style={{
        background: '#0d0d1a',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
      }}
    >
      {/* Left: text */}
      <div>
        <ScrollReveal>
          <p className="font-mono text-xs text-purple tracking-[0.15em] uppercase mb-2">
            // About Me
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2
            className="font-syne font-bold mb-6"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            The Developer <span className="text-purple-light">Behind the Code</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <p className="leading-relaxed mb-4 font-light" style={{ color: '#a0a0c0' }}>
            Hi! I&apos;m <strong className="text-white font-medium">Carlos Miguel V. Torres</strong>, a
            Frontend Developer with a love for crafting beautiful, functional interfaces. I
            believe great UI is invisible — it just feels right.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={160}>
          <p className="leading-relaxed mb-4 font-light" style={{ color: '#a0a0c0' }}>
            I enjoy combining clean code with great design, and I&apos;m always exploring new
            tools like N8N for automation and Roboflow for computer vision — because the best
            developers are always learning.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="leading-relaxed font-light" style={{ color: '#a0a0c0' }}>
            When I&apos;m not coding, I&apos;m probably thinking about my next project or
            figuring out how to make something look even better.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <Link
            href="https://github.com/JenxxAI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg text-white transition-all duration-200 font-normal text-sm"
            style={{ border: '1px solid #1e1e35', background: 'rgba(255,255,255,0.03)' }}
          >
            View GitHub Profile →
          </Link>
        </ScrollReveal>
      </div>

      {/* Right: stats grid */}
      <ScrollReveal delay={100}>
        <div className="grid grid-cols-2 gap-4">
          {stats.map(stat => (
            <div
              key={stat.label}
              className="card-hover rounded-xl p-6 text-center"
              style={{ background: '#10101f', border: '1px solid #1e1e35' }}
            >
              <div
                className="font-syne font-extrabold leading-none mb-1"
                style={{ fontSize: '2.5rem', color: '#c084fc' }}
              >
                {stat.num}
              </div>
              <div className="text-sm" style={{ color: '#6b6b8a' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
