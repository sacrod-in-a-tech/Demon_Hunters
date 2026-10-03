import Reveal from './Reveal'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  align?: 'left' | 'center'
  description?: string
}

export default function SectionHeading({ eyebrow: _eyebrow, title, align = 'left', description }: SectionHeadingProps) {
  return (
    <Reveal className={align === 'center' ? 'text-center' : ''}>
      <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        {/* <span className="h-px w-8 bg-[var(--color-crimson)]" />
        <span className="font-[family-name:var(--font-display)] text-xs tracking-[0.3em] text-[var(--color-crimson-bright)]">
          {eyebrow}
        </span> */}
      </div>
      <h2
        className={`mt-3 font-[family-name:var(--font-display)] font-semibold uppercase leading-[0.95] text-white sm:mt-4 ${
          align === 'center' ? 'text-4xl sm:text-5xl md:text-6xl' : 'text-3xl sm:text-4xl md:text-5xl'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--color-ash)] ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
