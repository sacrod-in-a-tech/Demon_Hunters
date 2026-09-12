import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

interface CounterProps {
  value: number
  suffix?: string
  pad?: boolean
}

export default function Counter({ value, suffix = '', pad = false }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  const formatted = pad ? String(display).padStart(2, '0') : String(display)

  return (
    <motion.span ref={ref} className="tabular-nums">
      {formatted}
      {suffix}
    </motion.span>
  )
}
