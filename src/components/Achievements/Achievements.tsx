import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal from '../shared/Reveal'
import SectionHeading from '../shared/SectionHeading'
import { researchAreas } from '../../data/content'
import { yearsActive, totalEvents } from '../../data/history'

export default function Achievements() {
  const lineRef = useRef<HTMLDivElement>(null)
  const lineInView = useInView(lineRef, { once: true, margin: '-100px' })

  return (
    <section id="research" className="relative border-t border-[var(--color-line)] bg-[var(--color-charcoal)]/70 backdrop-blur-[2px] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading title="Focus Areas" />
          <Reveal delay={0.1}>
            <div className="flex items-baseline gap-3 border-l border-[var(--color-line-red)] pl-4">
              <span className="font-[family-name:var(--font-display)] text-4xl font-semibold text-white">{totalEvents}</span>
              <span className="font-[family-name:var(--font-display)] text-xs tracking-[0.25em] text-[var(--color-ash)]">
                EVENTS ACROSS<br />{yearsActive} YEARS
              </span>
            </div>
          </Reveal>
        </div>

        <div className="relative mt-16">
          <div ref={lineRef} className="absolute left-0 right-0 top-6 hidden h-px overflow-hidden bg-[var(--color-line)] md:block">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={lineInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="h-full w-full origin-left bg-gradient-to-r from-[var(--color-crimson)] via-[var(--color-crimson-bright)] to-[var(--color-crimson)]"
              style={{ boxShadow: '0 0 8px rgba(255,26,26,0.6)' }}
            />
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
            {researchAreas.map((item, i) => (
              <Reveal key={item.category} delay={0.15 + i * 0.1}>
                <div className="group relative pt-8">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={lineInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                    className="absolute left-0 top-0 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[var(--color-crimson-bright)] bg-[var(--color-charcoal)] shadow-[0_0_10px_rgba(255,26,26,0.5)] md:block"
                  />
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-[var(--color-crimson-bright)]">
                    {item.category}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-ash)]">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.3}>
          <Link
            to="/research"
            className="mt-14 inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.18em] text-white transition-colors hover:text-[var(--color-crimson-bright)]"
          >
            VIEW RESEARCH PAGE
            <span>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
