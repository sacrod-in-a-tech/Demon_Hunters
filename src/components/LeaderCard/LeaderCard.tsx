import Reveal from '../shared/Reveal'
import HUD from '../HUD/HUD'
import type { Hunter } from '../../data/divisions'

interface LeaderCardProps {
  leader: Hunter
}

export default function LeaderCard({ leader }: LeaderCardProps) {
  return (
    <Reveal>
      <div className="relative overflow-hidden border border-[var(--color-line-red)] bg-[var(--color-charcoal)] p-8 sm:p-12">
        <HUD variant="corners" />
        <div
          className="pointer-events-none absolute -right-1/4 -top-1/4 h-[60%] w-[60%] rounded-full opacity-20 blur-[100px]"
          style={{ background: 'radial-gradient(circle, var(--color-crimson) 0%, transparent 70%)' }}
        />
        <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center border border-[var(--color-line-red)] font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-crimson-bright)]">
            AP
          </div>
          <div>
            <span className="inline-flex items-center gap-1.5 border border-[var(--color-line-red)] px-2.5 py-1 font-[family-name:var(--font-display)] text-[10px] tracking-[0.2em] text-[var(--color-crimson-bright)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-crimson-bright)]" />
              LEADER OF DEMON HUNTERS
            </span>
            <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold uppercase tracking-wide text-white sm:text-3xl">
              {leader.name}
            </h3>
            <p className="mt-2 font-[family-name:var(--font-display)] text-xs tracking-[0.2em] text-white/60">
              {leader.divisionName.toUpperCase()} — CAPTAIN
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
