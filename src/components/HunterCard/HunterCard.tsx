import TiltCard from '../shared/TiltCard'
import type { Hunter } from '../../data/divisions'
import maleAvatar from '../../assets/male.jpg'
import femaleAvatar from '../../assets/female.jpg'

interface HunterCardProps {
  hunter: Hunter
  index?: string
}

export default function HunterCard({
  hunter,
  index: _index,
}: HunterCardProps) {
  const roleLabel = hunter.isLeader
    ? 'LEADER'
    : hunter.isCaptain
      ? 'CAPTAIN'
      : 'MEMBER'

  const avatar =
    hunter.gender === 'female' ? femaleAvatar : maleAvatar

  return (
    <TiltCard maxTilt={5} className="h-full">
      <div className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden border border-[var(--color-line)] bg-[var(--color-charcoal)] p-5 transition-colors duration-300 hover:border-[var(--color-line-red)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px w-full origin-left scale-x-0 bg-[var(--color-crimson-bright)] transition-transform duration-500 group-hover:scale-x-100" />

        <div className="pointer-events-none absolute inset-x-0 top-0 flex h-[62%] items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-charcoal)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <img
            src={avatar}
            alt=""
            className="h-32 w-32 translate-y-4 object-contain opacity-0 grayscale transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:grayscale-0 sm:h-36 sm:w-36"
          />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 border px-2 py-1 font-[family-name:var(--font-display)] text-[9px] tracking-[0.2em] ${
                hunter.isLeader || hunter.isCaptain
                  ? 'border-[var(--color-line-red)] text-[var(--color-crimson-bright)]'
                  : 'border-[var(--color-line)] text-[var(--color-ash)]'
              }`}
            >
              {(hunter.isLeader || hunter.isCaptain) && (
                <span className="h-1 w-1 rounded-full bg-[var(--color-crimson-bright)]" />
              )}

              {roleLabel}
            </span>
          </div>

          <p className="mt-3 font-[family-name:var(--font-display)] text-base font-semibold uppercase leading-tight tracking-wide text-white">
            {hunter.name}
          </p>

          <span className="mt-2 inline-block w-fit border border-[var(--color-line)] px-2 py-1 font-[family-name:var(--font-display)] text-[9px] tracking-[0.15em] text-white/60">
            {hunter.divisionName.toUpperCase()}
          </span>
        </div>
      </div>
    </TiltCard>
  )
}