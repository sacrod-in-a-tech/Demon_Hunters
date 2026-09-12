import { Link } from 'react-router-dom'
import Reveal from '../shared/Reveal'
import SectionHeading from '../shared/SectionHeading'
import HunterCard from '../HunterCard/HunterCard'
import LeaderCard from '../LeaderCard/LeaderCard'
import { hunters, leader } from '../../data/divisions'

// A representative slice of the roster for the homepage preview —
// the full, filterable directory lives on the Hunters page.
const preview = hunters.filter((h) => !h.isLeader).slice(0, 6)

export default function Members() {
  return (
    <section id="hunters" className="relative border-t border-[var(--color-line)] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
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
          <div className="mt-14">
            <LeaderCard leader={leader} />
          </div>
        )}

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {preview.map((hunter, i) => (
            <Reveal key={hunter.name} delay={(i % 6) * 0.06}>
              <HunterCard hunter={hunter} index={String(i + 1).padStart(2, '0')} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
