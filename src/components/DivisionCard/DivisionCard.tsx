import { Link } from 'react-router-dom'
import TiltCard from '../shared/TiltCard'
import type { Division } from '../../data/divisions'

interface DivisionCardProps {
  division: Division
  memberCount: number
}

export default function DivisionCard({ division, memberCount }: DivisionCardProps) {
  return (
    <TiltCard maxTilt={3} className="h-full">
      <Link
        to={`/hunters?division=${division.id}`}
        className="group flex h-full flex-col justify-between border border-[var(--color-line)] p-8 transition-all duration-300 hover:border-[var(--color-line-red)] hover:bg-white/[0.02]"
      >
        <span className="pointer-events-none absolute right-0 top-0 h-0 w-px bg-[var(--color-crimson-bright)] transition-all duration-500 group-hover:h-full" />
        <div>
          <div className="flex items-center justify-between">
            <span className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--color-ash)] transition-colors duration-300 group-hover:text-[var(--color-crimson-bright)]">
              {division.number}
            </span>
            <span className="font-[family-name:var(--font-display)] text-[10px] tracking-[0.2em] text-white/25 transition-colors duration-300 group-hover:text-[var(--color-crimson-bright)]/70">
              VIEW ROSTER →
            </span>
          </div>
          <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl font-semibold uppercase tracking-wide text-white sm:text-2xl">
            {division.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ash)]">{division.description}</p>
        </div>

        <div className="mt-8 flex items-center gap-4 border-t border-[var(--color-line)] pt-5 text-xs">
          <span className="font-[family-name:var(--font-display)] tracking-[0.15em] text-white/70">
            {division.captain ? `CAPTAIN — ${division.captain.toUpperCase()}` : 'CAPTAIN — UNASSIGNED'}
          </span>
        </div>
        <p className="mt-1 text-xs text-[var(--color-ash)]">
          {memberCount} {memberCount === 1 ? 'hunter' : 'hunters'} assigned
        </p>
      </Link>
    </TiltCard>
  )
}
