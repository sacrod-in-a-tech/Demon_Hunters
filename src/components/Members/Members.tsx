import { Link } from 'react-router-dom'

import Reveal from '../shared/Reveal'

import SectionHeading from '../shared/SectionHeading'

import HunterCard from '../HunterCard/HunterCard'

import LeaderCard from '../LeaderCard/LeaderCard'

import { hunters, leader } from '../../data/divisions'

// Only captains are displayed on the homepage.
// The complete roster remains available on the Hunters page.
const captains = hunters.filter((h) => h.isCaptain)

export default function Members() {
  return (
    <section id="hunters" className="relative border-t border-[var(--color-line)] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="THE ROSTER" title="Meet the Hunters" />

          <Reveal delay={0.1}>
            <Link
              to="/hunters"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.18em] text-white transition-colors hover:text-[var(--color-crimson-bright)]"
            >
              VIEW FULL ROSTER
              <span>→</span>
            </Link>
          </Reveal>
        </div>

        {leader && (
          <div className="mx-auto mt-8 max-w-6xl lg:mt-10">
            <LeaderCard leader={leader} />
          </div>
        )}

        {captains.length > 0 && (
          <div className="mx-auto mt-8 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {captains.map((captain, i) => (
              <Reveal key={captain.name} delay={i * 0.06}>
                <HunterCard
                  hunter={captain}
                  index={String(i + 1).padStart(2, '0')}
                />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}