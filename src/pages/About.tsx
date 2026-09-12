import PageHeader from '../components/PageHeader/PageHeader'
import Reveal from '../components/shared/Reveal'
import Services from '../components/Services/Services'
import HUD from '../components/HUD/HUD'
import logo from '../assets/demon-hunters-logo.png'

const pillars = [
  {
    title: 'Mission',
    body: 'To build a disciplined cybersecurity community that discovers vulnerabilities, sharpens practical offensive and defensive skill, and reports what it finds responsibly.',
  },
  {
    title: 'Vision',
    body: 'A community where curiosity about how systems break becomes the foundation for making them harder to break — one hunter, one division, one disclosure at a time.',
  },
  {
    title: 'Philosophy',
    body: 'Practice over theory. Every claim gets tested in a CTF, a lab, or a real disclosure before it is trusted. Specialization within divisions, collaboration across them.',
  },
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="WHO WE ARE"
        title="About Demon Hunters"
        description="Demon Hunters is a cybersecurity-focused community built around curiosity, technical excellence, collaboration, and continuous learning."
      />

      <section className="relative overflow-hidden py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1fr_0.8fr] lg:px-10">
          <div>
            <Reveal>
              <p className="max-w-xl text-[15px] leading-relaxed text-[var(--color-ash)]">
                We explore the systems behind modern technology, identify weaknesses, develop defensive
                knowledge, and challenge ourselves to become better security practitioners &mdash; one
                vulnerability, one report, one competition at a time.
              </p>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--color-ash)]">
                The organization is structured around six specialized technical divisions, each led by a
                captain and reporting to the overall Demon Hunters leadership. That structure keeps the
                work focused while still letting hunters cross into other divisions as a challenge demands.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2} y={24} scale className="relative mx-auto w-full max-w-sm">
            <div
              className="absolute inset-0 -z-10 rounded-full opacity-30 blur-[100px]"
              style={{ background: 'radial-gradient(circle, var(--color-crimson) 0%, transparent 70%)' }}
            />
            <div className="relative border border-[var(--color-line-red)] p-10">
              <HUD variant="corners" />
              <div className="pointer-events-none absolute -inset-px border border-white/5" />
              <img src={logo} alt="Demon Hunters" className="w-full opacity-95" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative border-t border-[var(--color-line)] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-10 border-t border-[var(--color-line)] pt-14 sm:grid-cols-3">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.1}>
                <span className="font-[family-name:var(--font-display)] text-xs tracking-[0.3em] text-[var(--color-crimson-bright)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold uppercase tracking-wide text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-ash)]">{pillar.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Services />
    </>
  )
}
