import { Link } from 'react-router-dom'
import SectionHeading from '../shared/SectionHeading'
import Reveal from '../shared/Reveal'
import DivisionCard from '../DivisionCard/DivisionCard'
import { divisions } from '../../data/divisions'

export default function Teams() {
  return (
    <section id="divisions" className="relative border-t border-[var(--color-line)] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6">
          <SectionHeading title="Six Specialized Units" />

          <Reveal delay={0.1}>
            <Link
              to="/divisions"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.18em] text-white transition-colors hover:text-[var(--color-crimson-bright)]"
            >
              VIEW ALL DIVISIONS
              <span>→</span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {divisions.map((division, i) => (
            <Reveal key={division.id} delay={(i % 3) * 0.08}>
              <div className="[&_*]:!border-[var(--color-line)]">
                <DivisionCard
                  division={division}
                  memberCount={division.members.length + (division.captain ? 1 : 0)}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}