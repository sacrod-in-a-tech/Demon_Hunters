import Reveal from '../shared/Reveal'

interface PageHeaderProps {
  eyebrow?: string
  title: string
  description?: string
}

export default function PageHeader({ eyebrow: _eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="page-header-spacing relative overflow-hidden border-b border-[var(--color-line)]">
      <div className="site-container">
        <Reveal>
          <div className="flex items-center gap-3">
            {/* <span className="h-px w-8 bg-[var(--color-crimson)]" />
            <span className="font-[family-name:var(--font-display)] text-xs tracking-[0.3em] text-[var(--color-crimson-bright)]">
              {eyebrow}
            </span> */}
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-semibold uppercase leading-[0.95] text-white sm:mt-3 sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16}>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[var(--color-ash)]">{description}</p>
          </Reveal>
        )}
      </div>
    </div>
  )
}
