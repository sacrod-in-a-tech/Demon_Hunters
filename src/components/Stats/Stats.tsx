import Reveal from '../shared/Reveal'
import Counter from './Counter'
import { totalDivisions, totalHunters } from '../../data/divisions'
import { yearsActive, totalEvents } from '../../data/history'

const stats = [
  { value: yearsActive, suffix: '', label: 'Years Active' },
  { value: totalDivisions, suffix: '', label: 'Divisions' },
  { value: totalHunters, suffix: '', label: 'Hunters' },
  { value: totalEvents, suffix: '+', label: 'CTFs & Hackathons' },
]

export default function Stats() {
  return (
    <section className="relative border-y border-[var(--color-line)] bg-[var(--color-charcoal)]/70 backdrop-blur-[2px] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 divide-x divide-y divide-[var(--color-line)] border border-[var(--color-line)] md:grid-cols-4 md:divide-y-0">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="group relative flex flex-col items-center justify-center gap-2 px-6 py-10 text-center transition-colors hover:bg-white/[0.02]">
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: 'inset 0 0 40px rgba(220,0,0,0.15)' }} />
                <span className="font-[family-name:var(--font-display)] text-5xl font-semibold text-white transition-transform duration-300 group-hover:scale-110 sm:text-6xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="font-[family-name:var(--font-display)] text-xs tracking-[0.3em] text-[var(--color-crimson-bright)]">
                  {stat.label.toUpperCase()}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
