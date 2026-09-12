import { divisions } from '../../data/divisions'

interface DivisionFilterProps {
  active: string
  onChange: (id: string) => void
}

const options = [{ id: 'all', number: '00', name: 'All Divisions' }, ...divisions.map((d) => ({ id: d.id, number: d.number, name: d.name }))]

export default function DivisionFilter({ active, onChange }: DivisionFilterProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter hunters by division"
      className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:overflow-visible [&::-webkit-scrollbar]:hidden"
    >
      {options.map((opt) => {
        const isActive = active === opt.id
        return (
          <button
            key={opt.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(opt.id)}
            className={`group flex shrink-0 items-center gap-2 whitespace-nowrap border px-4 py-2.5 font-[family-name:var(--font-display)] text-[11px] tracking-[0.15em] transition-all duration-300 ${
              isActive
                ? 'border-[var(--color-crimson-bright)] bg-[var(--color-crimson)]/10 text-white shadow-[0_0_18px_rgba(220,0,0,0.25)]'
                : 'border-[var(--color-line)] text-[var(--color-ash)] hover:border-[var(--color-line-red)] hover:text-white'
            }`}
          >
            <span className={isActive ? 'text-[var(--color-crimson-bright)]' : 'text-white/30'}>{opt.number}</span>
            {opt.name.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}
