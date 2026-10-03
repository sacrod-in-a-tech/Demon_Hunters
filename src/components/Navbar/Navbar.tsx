import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { navItems } from '../../data/content'
import logo from '../../assets/demon-hunters-logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? 'border-b border-[var(--color-line)] bg-black/70 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Demon Hunters" className="h-10 w-10 object-contain" />
          <span className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.2em] text-white">
            DEMON HUNTERS
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `relative py-1 font-[family-name:var(--font-display)] text-xs tracking-[0.18em] transition-colors ${
                  isActive ? 'text-white' : 'text-[var(--color-ash)] hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label.toUpperCase()}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 h-px w-full bg-[var(--color-crimson-bright)]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-none border border-[var(--color-line-red)] px-5 py-2 font-[family-name:var(--font-display)] text-xs tracking-[0.18em] text-white transition-all hover:border-[var(--color-crimson-bright)] hover:shadow-[0_0_20px_rgba(220,0,0,0.35)] lg:inline-block"
        >
          GET IN TOUCH
        </Link>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="h-px w-6 bg-white"
          />
          <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="h-px w-6 bg-white" />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="h-px w-6 bg-white"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-[var(--color-line)] bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `border-b border-[var(--color-line)] py-3 font-[family-name:var(--font-display)] text-sm tracking-[0.18em] last:border-none ${
                      isActive ? 'text-[var(--color-crimson-bright)]' : 'text-white/90'
                    }`
                  }
                >
                  {item.label.toUpperCase()}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
