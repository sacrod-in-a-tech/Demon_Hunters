import { Link } from 'react-router-dom'
import Hero from '../components/Hero/Hero'
import Stats from '../components/Stats/Stats'
import About from '../components/About/About'
import Teams from '../components/Teams/Teams'
import Members from '../components/Members/Members'
import Achievements from '../components/Achievements/Achievements'
import Blog from '../components/Blog/Blog'
import CTA from '../components/CTA/CTA'
import Reveal from '../components/shared/Reveal'
import SectionHeading from '../components/shared/SectionHeading'
import { history, totalEvents, yearsActive } from '../data/history'

function HistoryPreview() {
  const latest = history[0]
  return (
    <section className="relative border-t border-[var(--color-line)] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="HISTORY"
            title={`${latest.year} Season`}
            description={`${totalEvents} CTFs and hackathons contested across ${yearsActive} years of active participation.`}
          />
          <Reveal delay={0.1}>
            <Link
              to="/history"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.18em] text-white transition-colors hover:text-[var(--color-crimson-bright)]"
            >
              VIEW FULL ARCHIVE
              <span>→</span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {latest.events.slice(0, 6).map((event, i) => (
            <Reveal key={event} delay={i * 0.05} y={12} blur={false}>
              <div className="flex items-center gap-4 border border-[var(--color-line)] px-5 py-4 transition-colors duration-300 hover:border-[var(--color-line-red)]">
                <span className="font-[family-name:var(--font-display)] text-xs text-[var(--color-crimson-bright)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-[family-name:var(--font-display)] text-sm tracking-wide text-white">{event}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Teams />
      <Members />
      <Achievements />
      <Blog />
      <HistoryPreview />
      <CTA />
    </>
  )
}
