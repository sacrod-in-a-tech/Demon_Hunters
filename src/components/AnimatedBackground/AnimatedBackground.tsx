interface AnimatedBackgroundProps {
  variant?: 'glow' | 'targeting'
  className?: string
}

/**
 * Local per-section accent (extra red glow / targeting rings) layered on
 * top of the global CyberBackground grid+particles. Kept intentionally
 * light — the grid/particle work now lives in CyberBackground so this
 * file no longer duplicates it.
 */
export default function AnimatedBackground({ variant = 'glow', className = '' }: AnimatedBackgroundProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {variant === 'glow' && (
        <div
          className="absolute -top-1/3 left-1/2 h-[70vh] w-[70vh] -translate-x-1/2 rounded-full opacity-30 blur-[120px] animate-pulse-slow"
          style={{ background: 'radial-gradient(circle, var(--color-crimson) 0%, transparent 70%)' }}
        />
      )}
      {variant === 'targeting' && (
        <div className="absolute right-[-10%] top-1/2 h-[50vw] w-[50vw] -translate-y-1/2 opacity-[0.10]">
          <div className="h-full w-full rounded-full border border-[var(--color-crimson)]" />
          <div className="absolute inset-[12%] rounded-full border border-[var(--color-crimson)]" />
          <div className="absolute inset-[24%] rounded-full border border-[var(--color-crimson)]" />
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[var(--color-crimson)]" />
          <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[var(--color-crimson)]" />
        </div>
      )}
    </div>
  )
}
