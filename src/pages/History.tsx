
import { Trophy, Medal, Crown } from 'lucide-react'

import PageHeader from '../components/PageHeader/PageHeader'
import Reveal from '../components/shared/Reveal'
import HistoryTimeline from '../components/HistoryTimeline/HistoryTimeline'

import {
  totalEvents,
  yearsActive,
  totalHackathons,
  totalCTFs,
} from '../data/history'

const stats = [
  { value: yearsActive, label: 'Years Active' },
  { value: totalEvents, label: 'Total Events' },
  { value: totalCTFs, label: 'CTF Events' },
  { value: totalHackathons, label: 'Hackathons' },
]

const achievements = [
  {
    title: 'Cyber League Major',
    result: '2nd Place',
    icon: Medal,
  },
  {
    title: 'WatchList',
    result: 'Top 10',
    icon: Crown,
  },
  {
    title: '07CTF',
    result: '60th Place',
    icon: Trophy,
  },
]

export default function History() {
  return (
    <>
      <PageHeader
        title="History"
        description="A year-by-year record of Demon Hunters' CTF and hackathon participation, from 2022 to 2026."
      />

      <section className="relative py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 grid grid-cols-2 divide-x divide-y divide-[var(--color-line)] border border-[var(--color-line)] sm:grid-cols-4 sm:divide-y-0">
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

          <div className="mb-10">
            <Reveal>
              <div className="mb-8">
                <span className="font-[family-name:var(--font-display)] text-[10px] tracking-[0.25em] text-[var(--color-crimson-bright)]">
                  SELECTED RESULTS
                </span>

                <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-wide text-white sm:text-3xl">
                  Achievements
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-ash)]">
                  Selected competitive results and notable placements from
                  Demon Hunters' journey.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-3">
              {achievements.map((achievement, i) => {
                const Icon = achievement.icon

                return (
                  <Reveal key={achievement.title} delay={i * 0.08} y={16}>
                    <div className="group relative overflow-hidden border border-[var(--color-line)] bg-white/[0.02] p-6 transition-all duration-300 hover:border-[var(--color-line-red)] hover:bg-white/[0.04]">
                      <div
                        className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[var(--color-crimson)]/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                        aria-hidden="true"
                      />

                      <div className="relative flex items-start justify-between gap-4">
                        <div className="flex h-11 w-11 items-center justify-center border border-[var(--color-line)] bg-[var(--color-crimson)]/5 text-[var(--color-crimson-bright)]">
                          <Icon size={21} strokeWidth={1.7} />
                        </div>

                        <span className="font-[family-name:var(--font-display)] text-[10px] tracking-[0.18em] text-[var(--color-crimson-bright)]">
                          ACHIEVEMENT
                        </span>
                      </div>

                      <div className="relative mt-8">
                        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-wide text-white">
                          {achievement.title}
                        </h3>

                        <div className="mt-3 flex items-center gap-2">
                          <span className="h-px w-5 bg-[var(--color-crimson-bright)]" />

                          <span className="font-[family-name:var(--font-display)] text-xs font-medium tracking-[0.18em] text-[var(--color-crimson-bright)]">
                            {achievement.result.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>

          <HistoryTimeline />
        </div>
      </section>
    </>
  )
}

