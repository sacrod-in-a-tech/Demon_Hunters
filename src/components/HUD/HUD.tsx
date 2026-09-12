import { motion } from 'framer-motion'

interface HUDProps {
  variant?: 'crosshair' | 'corners'
  className?: string
}

const statusLines = ['SYSTEM: ONLINE', 'THREAT LEVEL: LOW', 'ENCRYPTION: ACTIVE']

/**
 * Decorative targeting / crosshair HUD, echoing the logo's crosshair motif.
 * Purely ambient — kept low-opacity and non-interactive.
 */
export default function HUD({ variant = 'crosshair', className = '' }: HUDProps) {
  if (variant === 'corners') {
    return (
      <div className={`pointer-events-none absolute inset-6 opacity-[0.18] sm:inset-10 ${className}`} aria-hidden="true">
        {[
          'left-0 top-0 border-l border-t',
          'right-0 top-0 border-r border-t',
          'left-0 bottom-0 border-l border-b',
          'right-0 bottom-0 border-r border-b',
        ].map((pos) => (
          <span key={pos} className={`absolute h-6 w-6 border-[var(--color-crimson-bright)] ${pos}`} />
        ))}
      </div>
    )
  }

  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full border border-[var(--color-crimson)]/25"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[10%] rounded-full border border-dashed border-[var(--color-crimson)]/20"
      />
      <div className="absolute inset-[22%] rounded-full border border-[var(--color-crimson)]/30" />
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--color-crimson)]/25 to-transparent" />
      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-[var(--color-crimson)]/25 to-transparent" />

      <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-[family-name:var(--font-display)] text-[9px] tracking-[0.3em] text-[var(--color-crimson-bright)]/60">
        TARGET LOCKED
      </span>
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-[family-name:var(--font-display)] text-[9px] tracking-[0.3em] text-white/30">
        29.06°N 79.65°E
      </span>
    </div>
  )
}

/** Small stacked SYSTEM / THREAT LEVEL / ENCRYPTION readout, for the hero corner. */
export function HUDStatus({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none font-[family-name:var(--font-display)] text-[10px] tracking-[0.2em] text-white/35 ${className}`} aria-hidden="true">
      {statusLines.map((line, i) => (
        <motion.p
          key={line}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4 + i * 0.15, duration: 0.5 }}
          className="flex items-center gap-2 py-0.5"
        >
          <span className="h-1 w-1 rounded-full bg-[var(--color-crimson-bright)]" />
          {line}
        </motion.p>
      ))}
    </div>
  )
}
