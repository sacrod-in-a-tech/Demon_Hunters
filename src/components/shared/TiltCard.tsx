import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { MouseEvent, ReactNode } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
  maxTilt?: number
}

/**
 * Wraps a card with a very subtle mouse-reactive 3D tilt (max ~4deg)
 * plus a soft red glow that follows the cursor. Desktop-only feel by
 * nature — on touch devices there's no mousemove, so it just sits flat.
 */
export default function TiltCard({ children, className = '', maxTilt = 4 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const spring = { stiffness: 200, damping: 20, mass: 0.4 }
  const rotateX = useSpring(useTransform(py, [0, 1], [maxTilt, -maxTilt]), spring)
  const rotateY = useSpring(useTransform(px, [0, 1], [-maxTilt, maxTilt]), spring)
  const glowX = useTransform(px, [0, 1], ['0%', '100%'])
  const glowY = useTransform(py, [0, 1], ['0%', '100%'])
  const glowBackground = useMotionTemplate`radial-gradient(220px circle at ${glowX} ${glowY}, rgba(225,6,0,0.16), transparent 70%)`

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }
  const onMouseLeave = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={`group relative ${className}`}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glowBackground }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  )
}
