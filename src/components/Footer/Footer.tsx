import { Link } from 'react-router-dom'
import { navItems, socials } from '../../data/content'
import { divisions } from '../../data/divisions'
import logo from '../../assets/demon-hunters-logo.png'

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-line)] bg-black py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Demon Hunters" className="h-9 w-9 object-contain" />
              <span className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.2em] text-white">
                DEMON HUNTERS
              </span>
            </Link>
            <p className="mt-4 font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.2em] text-[var(--color-crimson-bright)]">
              Hunt the threat.
              <br />
              Protect the future.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-[family-name:var(--font-display)] text-xs tracking-[0.25em] text-[var(--color-ash)]">
              NAVIGATION
            </span>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm text-white/80 transition-colors hover:text-[var(--color-crimson-bright)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-[family-name:var(--font-display)] text-xs tracking-[0.25em] text-[var(--color-ash)]">
              DIVISIONS
            </span>
            <nav className="flex flex-col gap-2">
              {divisions.map((d) => (
                <Link
                  key={d.id}
                  to={`/hunters?division=${d.id}`}
                  className="text-sm text-white/80 transition-colors hover:text-[var(--color-crimson-bright)]"
                >
                  {d.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-[family-name:var(--font-display)] text-xs tracking-[0.25em] text-[var(--color-ash)]">
              CONNECT
            </span>
            <nav className="flex flex-col gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-sm text-white/80 transition-colors hover:text-[var(--color-crimson-bright)]"
                >
                  {social.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-line)] pt-8 text-xs text-[var(--color-ash)] sm:flex-row">
          <span>&copy; 2026 Demon Hunters. All rights reserved.</span>
          <span className="font-[family-name:var(--font-display)] tracking-[0.2em]">BUILT FOR THE HUNT</span>
        </div>
      </div>
    </footer>
  )
}
