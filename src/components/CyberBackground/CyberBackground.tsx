import { useEffect, useRef } from 'react'

/**
 * CyberBackground
 * ---------------------------------------------------------------
 * A single fixed canvas that runs behind the entire page and stays
 * mounted across every section, so the "living system" atmosphere
 * (grid drift, red energy, particle field, mouse parallax) is
 * continuous rather than restarting per-section.
 *
 * Deliberately built on Canvas2D + a couple of CSS overlay layers
 * instead of WebGL/Three.js: it reproduces the same layered depth
 * (grid / energy / particles / scan / grain) at a fraction of the
 * GPU + bundle cost, with no new runtime dependencies, and it is
 * trivial to pause via IntersectionObserver / visibilitychange.
 */

interface Particle {
  x: number
  y: number
  z: number // depth 0..1, smaller = further away
  speed: number
  angle: number
  radius: number
  spark: boolean
  twinkle: number
  bit: '0' | '1'
}

const PARTICLE_COUNT_DESKTOP = 90
const PARTICLE_COUNT_MOBILE = 36

export default function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: 0, y: 0, tx: 0, ty: 0 })
  const scrollY = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP

    let width = window.innerWidth
    let height = window.innerHeight
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2)

    const particles: Particle[] = []
    const initParticles = () => {
      particles.length = 0
      for (let i = 0; i < particleCount; i++) {
        const z = Math.random()
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z,
          speed: 0.05 + z * 0.25,
          angle: Math.random() * Math.PI * 2,
          radius: 0.6 + z * 1.8,
          spark: Math.random() > 0.88,
          twinkle: Math.random() * Math.PI * 2,
          bit: Math.random() > 0.5 ? '1' : '0',
        })
      }
    }

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      initParticles()
    }
    resize()

    const onResize = () => resize()
    window.addEventListener('resize', onResize)

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.tx = (e.clientX / width - 0.5) * 2
      mouse.current.ty = (e.clientY / height - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    const onScroll = () => {
      scrollY.current = window.scrollY
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    let running = true
    const onVisibility = () => {
      running = document.visibilityState === 'visible'
    }
    document.addEventListener('visibilitychange', onVisibility)

    // Pause the loop entirely when reduced motion is requested — draw one static frame.
    let raf = 0

    const drawGrid = (offset: number) => {
      const horizon = height * 0.42
      const lineOpacity = 0.05
      ctx.save()
      ctx.strokeStyle = `rgba(255,255,255,${lineOpacity})`
      ctx.lineWidth = 1

      // Horizontal "terrain" lines converging toward a horizon, drifting slowly downward.
      const rows = 14
      for (let i = 0; i < rows; i++) {
        const p = (i + (offset % 1)) / rows
        const y = horizon + p * p * (height - horizon) * 1.4
        if (y > height) continue
        const spread = 0.15 + p * 0.85
        const x0 = width * (0.5 - spread)
        const x1 = width * (0.5 + spread)
        ctx.globalAlpha = 0.15 + p * 0.5
        ctx.beginPath()
        ctx.moveTo(x0, y)
        ctx.lineTo(x1, y)
        ctx.stroke()
      }

      // Converging verticals
      const cols = 10
      for (let i = 0; i <= cols; i++) {
        const p = i / cols
        const topX = width * (0.5 - 0.15 + p * 0.3)
        const bottomX = width * (0.5 - 1 + p * 2)
        ctx.globalAlpha = 0.1
        ctx.beginPath()
        ctx.moveTo(topX, horizon)
        ctx.lineTo(bottomX, height)
        ctx.stroke()
      }
      ctx.restore()
    }

    const drawEnergy = (time: number) => {
      const blobs = [
        { cx: 0.28 + Math.sin(time * 0.00011) * 0.08, cy: 0.28 + Math.cos(time * 0.00009) * 0.06, r: 0.55, a: 0.16 },
        { cx: 0.75 + Math.cos(time * 0.00013) * 0.07, cy: 0.55 + Math.sin(time * 0.0001) * 0.08, r: 0.45, a: 0.11 },
        { cx: 0.5 + Math.sin(time * 0.00008) * 0.1, cy: 0.85 + Math.cos(time * 0.00012) * 0.05, r: 0.5, a: 0.09 },
      ]
      for (const b of blobs) {
        const cx = b.cx * width
        const cy = b.cy * height
        const r = b.r * Math.max(width, height) * 0.6
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
        grad.addColorStop(0, `rgba(225,6,0,${b.a})`)
        grad.addColorStop(0.5, `rgba(139,0,0,${b.a * 0.35})`)
        grad.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = grad
        ctx.fillRect(0, 0, width, height)
      }
    }

    // Binary digit stream — the 0/1 characters are the primary background
    // motif. Each particle carries a fixed '0' or '1' glyph instead of a
    // plain dot; occasional glyphs get a subtle red highlight + glow.
    const drawParticles = (time: number) => {
      const parallaxX = mouse.current.x * 14
      const parallaxY = mouse.current.y * 10

      for (const p of particles) {
        p.x += Math.cos(p.angle) * p.speed
        p.y += Math.sin(p.angle) * p.speed * 0.6 - p.speed * 0.15

        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        if (p.y > height + 20) p.y = -20

        const depthShift = (1 - p.z) * 0.6 + 0.2
        const dx = p.x + parallaxX * depthShift
        const dy = p.y + parallaxY * depthShift

        const twinkle = 0.5 + 0.5 * Math.sin(time * 0.002 + p.twinkle)
        const alpha = (0.12 + p.z * 0.4) * (p.spark ? twinkle : 0.65)
        const fontSize = 8 + p.z * 8

        ctx.font = `${fontSize}px "Chakra Petch", monospace`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'

        if (p.spark) {
          ctx.shadowColor = 'rgba(255,40,30,0.8)'
          ctx.shadowBlur = 6
          ctx.fillStyle = `rgba(255,60,50,${Math.min(alpha * 1.6, 0.85)})`
        } else {
          ctx.shadowBlur = 0
          ctx.fillStyle = `rgba(200,205,210,${alpha})`
        }
        ctx.fillText(p.bit, dx, dy)
        ctx.shadowBlur = 0
      }
    }

    const frame = (time: number) => {
      if (!running) {
        raf = requestAnimationFrame(frame)
        return
      }

      // ease mouse toward target for a smooth camera feel
      mouse.current.x += (mouse.current.tx - mouse.current.x) * 0.04
      mouse.current.y += (mouse.current.ty - mouse.current.y) * 0.04

      ctx.clearRect(0, 0, width, height)
      drawEnergy(time)
      drawGrid((scrollY.current * 0.0004 + time * 0.00002) % 1)
      drawParticles(time)

      raf = requestAnimationFrame(frame)
    }

    if (reduceMotion) {
      // Single static-ish frame, no rAF loop.
      ctx.clearRect(0, 0, width, height)
      drawEnergy(0)
      drawGrid(0)
      drawParticles(0)
    } else {
      raf = requestAnimationFrame(frame)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Layer 01 — deep space base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 120% 80% at 50% -10%, #0d0505 0%, #030303 55%, #000000 100%)',
        }}
      />

      {/* Layers 02–04 — grid, red energy, particles (canvas) */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-90" />

      {/* Layer 06 — scanlines */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to bottom, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 3px)',
        }}
      />
      <div className="cyber-scan-sweep absolute inset-x-0 h-40 opacity-[0.05]" />

      {/* Layer 08 — occasional threat scanner beam */}
      <div className="cyber-threat-beam pointer-events-none absolute inset-0" />

      {/* Vignette to keep edges/content readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 50% 40%, transparent 45%, rgba(0,0,0,0.55) 100%)',
        }}
      />
    </div>
  )
}
