import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  y?: number
  blur?: boolean
  scale?: boolean
}

/**
 * Scroll reveal used by every section. Defaults to the cinematic
 * blur-to-sharp treatment (opacity + blur + slight rise); pass
 * blur={false} for lighter, high-frequency content like grid cards
 * where a heavy blur filter across many items would cost more than
 * it adds.
 */
export default function Reveal({ children, delay = 0, className = '', y = 24, blur = true, scale = false }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: blur ? 'blur(10px)' : 'blur(0px)', scale: scale ? 0.97 : 1 }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: blur ? 0.85 : 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
