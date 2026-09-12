import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { history } from '../../data/history'
import Reveal from '../shared/Reveal'

export default function HistoryTimeline() {
  const [activeYear, setActiveYear] = useState(history[0].year)
  const active = history.find((h) => h.year === activeYear) ?? history[0]

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:overflow-visible [&::-webkit-scrollbar]:hidden">
        {history.map((h) => {
          const isActive = h.year === activeYear
          return (
            <button
              key={h.year}
              onClick={() => setActiveYear(h.year)}
              aria-pressed={isActive}
              className={`shrink-0 border px-5 py-2.5 font-[family-name:var(--font-display)] text-sm tracking-[0.15em] transition-all duration-300 ${
                isActive
                  ? 'border-[var(--color-crimson-bright)] bg-[var(--color-crimson)]/10 text-white shadow-[0_0_18px_rgba(220,0,0,0.25)]'
                  : 'border-[var(--color-line)] text-[var(--color-ash)] hover:border-[var(--color-line-red)] hover:text-white'
              }`}
            >
              {h.year}
            </button>
          )
        })}
      </div>

      <div className="relative mt-14">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--color-line)] sm:left-[9px]" aria-hidden="true" />
        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3"
          >
            {active.events.map((event, i) => (
              <Reveal key={event} delay={i * 0.03} y={12} blur={false} className="relative pl-8 sm:pl-10">
                <span className="absolute left-0 top-1.5 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-[var(--color-crimson-bright)] bg-[var(--color-void)] shadow-[0_0_8px_rgba(255,26,26,0.5)] sm:h-4 sm:w-4" />
                <div className="flex items-center gap-4 border-b border-[var(--color-line)] py-4">
                  <span className="font-[family-name:var(--font-display)] text-xs text-[var(--color-crimson-bright)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-base font-medium tracking-wide text-white sm:text-lg">
                    {event}
                  </span>
                </div>
              </Reveal>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
