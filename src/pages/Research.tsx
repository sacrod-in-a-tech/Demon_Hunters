import PageHeader from '../components/PageHeader/PageHeader'
import Reveal from '../components/shared/Reveal'
import BugBounty from '../components/BugBounty/BugBounty'
import { researchAreas } from '../data/content'
import { totalEvents, yearsActive } from '../data/history'

export default function Research() {
  return (
    <>
      <PageHeader
        eyebrow="RESEARCH"
        title="Security Research"
        description="Demon Hunters focuses its research energy on practical, testable security work — competitive, independent, and community-facing."
      />

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 flex flex-wrap items-baseline gap-x-10 gap-y-4 border-b border-[var(--color-line)] pb-10">
            <div>
              <span className="font-[family-name:var(--font-display)] text-4xl font-semibold text-white">{totalEvents}</span>
              <span className="ml-2 font-[family-name:var(--font-display)] text-xs tracking-[0.2em] text-[var(--color-ash)]">
                EVENTS CONTESTED
              </span>
            </div>
            <div>
              <span className="font-[family-name:var(--font-display)] text-4xl font-semibold text-white">{yearsActive}</span>
              <span className="ml-2 font-[family-name:var(--font-display)] text-xs tracking-[0.2em] text-[var(--color-ash)]">
                YEARS ACTIVE
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((item, i) => (
              <Reveal key={item.category} delay={(i % 3) * 0.08}>
                <span className="font-[family-name:var(--font-display)] text-xs tracking-[0.3em] text-[var(--color-crimson-bright)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold uppercase tracking-wide text-white">
                  {item.category}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-ash)]">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BugBounty />
    </>
  )
}
