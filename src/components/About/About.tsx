import { Link } from 'react-router-dom'
import Reveal from '../shared/Reveal'
import HUD from '../HUD/HUD'
import logo from '../../assets/demon-hunters-logo.png'

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1fr_0.8fr] lg:px-10">
        <div>
          <Reveal y={-16}>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--color-crimson)]" />
              <span className="font-[family-name:var(--font-display)] text-xs tracking-[0.3em] text-[var(--color-crimson-bright)]">
                WHO WE ARE
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.08} y={-16}>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold uppercase leading-[0.95] text-white sm:text-5xl md:text-6xl">
              Who are the
              <br />
              Demon Hunters?
            </h2>
          </Reveal>
          <Reveal delay={0.16} y={-16}>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-[var(--color-ash)]">
              Demon Hunters is a cybersecurity-focused community built around curiosity, technical
              excellence, collaboration, and continuous learning.
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--color-ash)]">
              We explore the systems behind modern technology, identify weaknesses, develop defensive
              knowledge, and challenge ourselves to become better security practitioners &mdash; one
              vulnerability, one report, one competition at a time.
            </p>
          </Reveal>
          <Reveal delay={0.24} y={-16}>
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-6 border-t border-[var(--color-line)] pt-8">
              <div>
                <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.15em] text-white">Curiosity-driven</p>
                <p className="mt-1 text-sm text-[var(--color-ash)]">We ask how systems break, not just how they work.</p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.15em] text-white">Practice over theory</p>
                <p className="mt-1 text-sm text-[var(--color-ash)]">Skills proven in CTFs, labs, and real disclosures.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.3} y={-16}>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.18em] text-white transition-colors hover:text-[var(--color-crimson-bright)]"
            >
              READ THE FULL STORY
              <span>→</span>
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={24} scale className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -z-10 rounded-full opacity-30 blur-[100px]" style={{ background: 'radial-gradient(circle, var(--color-crimson) 0%, transparent 70%)' }} />
          <div className="relative border border-[var(--color-line-red)] p-10">
            <HUD variant="corners" />
            <div className="pointer-events-none absolute -inset-px border border-white/5" />
            <img src={logo} alt="Demon Hunters" className="w-full opacity-95" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
