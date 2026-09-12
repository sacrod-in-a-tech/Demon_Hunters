import PageHeader from '../components/PageHeader/PageHeader'
import Reveal from '../components/shared/Reveal'
import HistoryTimeline from '../components/HistoryTimeline/HistoryTimeline'
import { totalEvents, yearsActive, totalHackathons, totalCTFs } from '../data/history'

const stats = [
  { value: yearsActive, label: 'Years Active' },
  { value: totalEvents, label: 'Total Events' },
  { value: totalCTFs, label: 'CTF Events' },
  { value: totalHackathons, label: 'Hackathons' },
]

export default function History() {
  return (
    <>
      <PageHeader
        eyebrow="THE ARCHIVE"
        title="History"
        description="A year-by-year record of Demon Hunters' CTF and hackathon participation, from 2022 to 2026."
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 grid grid-cols-2 divide-x divide-y divide-[var(--color-line)] border border-[var(--color-line)] sm:grid-cols-4 sm:divide-y-0">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.06}>
                <div className="flex flex-col items-center justify-center gap-1 px-4 py-8 text-center">
                  <span className="font-[family-name:var(--font-display)] text-3xl font-semibold text-white sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-[10px] tracking-[0.2em] text-[var(--color-crimson-bright)]">
                    {stat.label.toUpperCase()}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <HistoryTimeline />
        </div>
      </section>
    </>
  )
}
