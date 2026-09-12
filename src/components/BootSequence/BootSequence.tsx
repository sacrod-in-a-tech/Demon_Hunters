import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const LINES = ['SYSTEM INITIALIZING...', 'SECURITY NODE ONLINE', 'THREAT MONITORING ACTIVE']

/**
 * ~1.4s cinematic boot screen. Skippable (click / key / tap), and
 * skipped entirely for prefers-reduced-motion or repeat visits in
 * the same tab session.
 */
export default function BootSequence() {
  const [visible, setVisible] = useState(false)
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const seen = sessionStorage.getItem('dh-booted')
    if (reduceMotion || seen) return

    setVisible(true)
    sessionStorage.setItem('dh-booted', '1')

    const timers = LINES.map((_, i) =>
      setTimeout(() => setLineIndex(i + 1), 260 + i * 260)
    )
    const done = setTimeout(() => setVisible(false), 1500)

    return () => {
      timers.forEach(clearTimeout)
      clearTimeout(done)
    }
  }, [])

  const skip = () => setVisible(false)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="button"
          tabIndex={0}
          aria-label="Skip intro"
          onClick={skip}
          onKeyDown={skip}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex cursor-pointer flex-col items-center justify-center gap-3 bg-black"
        >
          <div className="flex flex-col items-center gap-1.5">
            {LINES.map((line, i) => (
              <motion.p
                key={line}
                initial={{ opacity: 0 }}
                animate={{ opacity: i < lineIndex ? 1 : 0 }}
                className="font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] text-[var(--color-crimson-bright)]"
              >
                {line}
              </motion.p>
            ))}
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="mt-2 h-px w-40 origin-left bg-gradient-to-r from-[var(--color-crimson)] to-transparent"
          />
          <span className="mt-4 font-[family-name:var(--font-display)] text-[9px] tracking-[0.3em] text-white/25">
            TAP TO SKIP
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
