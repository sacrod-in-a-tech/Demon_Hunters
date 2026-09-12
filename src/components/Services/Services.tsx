import Reveal from '../shared/Reveal'
import TiltCard from '../shared/TiltCard'
import SectionHeading from '../shared/SectionHeading'
import { capabilities } from '../../data/content'

export default function Services() {
  return (
    <section className="relative border-t border-[var(--color-line)] bg-[var(--color-charcoal)]/70 backdrop-blur-[2px] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading eyebrow="CAPABILITIES" title="What We Do" />

        <div className="mt-16 grid grid-cols-1 border border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((service, i) => (
            <Reveal
              key={service.index}
              delay={(i % 3) * 0.08}
              className="border-b border-r border-[var(--color-line)] sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
            >
              <TiltCard maxTilt={3} className="h-full p-8 transition-colors duration-300 hover:bg-white/[0.02]">
                <span className="absolute right-0 top-0 h-0 w-px bg-[var(--color-crimson-bright)] transition-all duration-500 group-hover:h-full" />
                <span className="font-[family-name:var(--font-display)] text-sm text-[var(--color-crimson-bright)]">
                  {service.index}
                </span>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl font-semibold uppercase tracking-wide text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-ash)]">{service.description}</p>
                <span className="mt-5 block font-[family-name:var(--font-display)] text-[9px] tracking-[0.25em] text-[var(--color-crimson-bright)]/0 transition-colors duration-300 group-hover:text-[var(--color-crimson-bright)]/70">
                  NODE ACTIVE
                </span>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
