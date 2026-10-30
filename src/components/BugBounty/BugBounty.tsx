import { motion } from 'framer-motion'
import Reveal from '../shared/Reveal'
import HUD from '../HUD/HUD'
import { disclosureSteps } from '../../data/content'

export default function BugBounty() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true">
        <pre className="whitespace-pre-wrap p-6 font-mono text-[10px] leading-4 text-[var(--color-crimson-bright)]">
          {'01001000 01110101 01101110 01110100 00100000 01110100 01101000 01100101 00100000 01110100 01101000 01110010 01100101 01100001 01110100\n'.repeat(20)}
        </pre>
      </div>
      <HUD variant="corners" />

      <div className="site-container relative grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--color-crimson)]" />
            <span className="font-[family-name:var(--font-display)] text-xs tracking-[0.3em] text-[var(--color-crimson-bright)]">
              RESPONSIBLE DISCLOSURE
            </span>
          </div>
          <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold uppercase leading-tight text-white sm:text-4xl">
            Find. Report. Protect.
          </h3>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[var(--color-ash)]">
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
                className="flex items-center gap-4 border-b border-[var(--color-line)] py-4 last:border-none"
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
