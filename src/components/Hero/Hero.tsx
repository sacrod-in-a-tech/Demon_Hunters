import { useRef } from 'react'
import type { MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import HUD, { HUDStatus } from '../HUD/HUD'
import logo from '../../assets/demon-hunters-logo.png'

const headingWords = ['DEMON', 'HUNTERS']

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const spring = { stiffness: 60, damping: 20, mass: 0.6 }

  // Layers move at different speeds/directions to fake a camera depth shift.
  const logoX = useSpring(useTransform(px, [0, 1], [12, -12]), spring)
  const logoY = useSpring(useTransform(py, [0, 1], [10, -10]), spring)
  const hudX = useSpring(useTransform(px, [0, 1], [-18, 18]), spring)
  const hudY = useSpring(useTransform(py, [0, 1], [-14, 14]), spring)
  const glowX = useSpring(useTransform(px, [0, 1], [8, -8]), spring)
  const glowY = useSpring(useTransform(py, [0, 1], [6, -6]), spring)

  const onMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* red glow layer — drifts opposite the logo for a parallax camera feel */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[90vh] w-[90vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[140px]"
        aria-hidden="true"
      >
        <div
          className="h-full w-full animate-pulse-slow rounded-full"
          style={{ background: 'radial-gradient(circle, var(--color-crimson) 0%, transparent 65%)' }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            {/* <span className="h-px w-8 bg-[var(--color-crimson)]" /> */}
            {/* <span className="font-[family-name:var(--font-display)] text-xs tracking-[0.35em] text-[var(--color-crimson-bright)]">
              CYBERSECURITY COMMAND // SYSTEM ONLINE
            </span> */}
          </motion.div>

          <h1 className="mt-6 font-[family-name:var(--font-display)] text-[15vw] font-semibold uppercase leading-[0.85] text-white sm:text-7xl md:text-8xl lg:text-8xl">
            {headingWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40, filter: 'blur(16px)', scale: 1.04 }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                {i === 1 ? (
                  <span className="glitch-text" data-text={word}>
                    {word}
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 max-w-md text-[15px] leading-relaxed text-[var(--color-ash)]"
          >
            A cybersecurity community dedicated to discovering vulnerabilities, developing security
            knowledge, competing in security challenges, and building a safer digital future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/divisions"
              className="group inline-flex items-center gap-2 bg-[var(--color-crimson)] px-7 py-3.5 font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.18em] text-white transition-all hover:bg-[var(--color-crimson-bright)] hover:shadow-[0_0_30px_rgba(255,26,26,0.4)]"
            >
              EXPLORE DIVISIONS
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/hunters"
              className="inline-flex items-center gap-2 border border-[var(--color-line)] px-7 py-3.5 font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.18em] text-white/90 transition-all hover:border-[var(--color-crimson-bright)] hover:text-white"
            >
              MEET THE HUNTERS
            </Link>
          </motion.div>

          <HUDStatus className="mt-12 hidden sm:block" />
        </div>

        <motion.div
          style={{ x: logoX, y: logoY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto hidden max-w-sm lg:block"
        >
          <motion.div
            style={{ x: hudX, y: hudY }}
            className="absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2"
          >
            <HUD className="inset-0" />
          </motion.div>
          <div
            className="absolute inset-0 -z-10 rounded-full opacity-40 blur-[80px]"
            style={{ background: 'radial-gradient(circle, var(--color-crimson) 0%, transparent 70%)' }}
          />
          <motion.img
            src={logo}
            alt="Demon Hunters emblem"
            className="w-full drop-shadow-[0_0_45px_rgba(220,0,0,0.3)]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        {/* <span className="font-[family-name:var(--font-display)] text-[10px] tracking-[0.3em] text-[var(--color-ash)]">SCROLL</span> */}
        {/* <div className="h-10 w-px bg-gradient-to-b from-[var(--color-crimson)] to-transparent" /> */}
      </motion.div>
    </section>
  )
}
