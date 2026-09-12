import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedBackground from '../AnimatedBackground/AnimatedBackground'
import HUD from '../HUD/HUD'
import Reveal from '../shared/Reveal'

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <motion.div
        initial={{ scale: 1.15, opacity: 0.4 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <AnimatedBackground variant="glow" />
      </motion.div>

      <div className="pointer-events-none absolute right-[-8%] top-1/2 hidden h-[38vw] w-[38vw] -translate-y-1/2 opacity-[0.14] sm:block" aria-hidden="true">
        <HUD className="inset-0" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold uppercase leading-[0.95] text-white sm:text-6xl md:text-7xl">
            Ready to Hunt
            <br />
            the Threat?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-[var(--color-ash)]">
            Explore cybersecurity. Build your skills. Discover vulnerabilities. Protect the future.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-[var(--color-crimson)] px-8 py-4 font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.2em] text-white transition-all hover:bg-[var(--color-crimson-bright)] hover:shadow-[0_0_35px_rgba(255,26,26,0.45)]"
            >
              GET IN TOUCH
            </Link>
            <Link
              to="/divisions"
              className="border border-[var(--color-line)] px-8 py-4 font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.2em] text-white/90 transition-all hover:border-[var(--color-crimson-bright)] hover:text-white"
            >
              EXPLORE OUR WORK
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
