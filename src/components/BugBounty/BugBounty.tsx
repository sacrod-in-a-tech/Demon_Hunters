import { motion } from 'framer-motion'
import Reveal from '../shared/Reveal'
import HUD from '../HUD/HUD'
import { disclosureSteps } from '../../data/content'

export default function BugBounty() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true">
        <pre className="whitespace-pre-wrap p-10 font-mono text-[10px] leading-4 text-[var(--color-crimson-bright)]">
          {'01001000 01110101 01101110 01110100 00100000 01110100 01101000 01100101 00100000 01110100 01101000 01110010 01100101 01100001 01110100\n'.repeat(20)}
        </pre>
      </div>
      <HUD variant="corners" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--color-crimson)]" />
            <span className="font-[family-name:var(--font-display)] text-xs tracking-[0.3em] text-[var(--color-crimson-bright)]">
              RESPONSIBLE DISCLOSURE
            </span>
          </div>
          <h3 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-semibold uppercase leading-tight text-white sm:text-4xl">
            Find. Report. Protect.
          </h3>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[var(--color-ash)]">
            The community focuses on identifying security weaknesses across real systems and
            promoting responsible disclosure &mdash; every report follows the same disciplined path.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-col gap-0">
            {disclosureSteps.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex items-center gap-4 border-b border-[var(--color-line)] py-5 last:border-none"
              >
                <span className="font-[family-name:var(--font-display)] text-xs text-[var(--color-crimson-bright)]">
                  0{i + 1}
                </span>
                <span className="font-[family-name:var(--font-display)] text-lg tracking-[0.15em] text-white">
                  {step}
                </span>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
