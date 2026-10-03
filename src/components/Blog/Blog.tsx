import { Link } from 'react-router-dom'
import Reveal from '../shared/Reveal'
import TiltCard from '../shared/TiltCard'
import SectionHeading from '../shared/SectionHeading'
import { posts } from '../../data/blogPosts'

export default function Blog() {
  return (
    <section id="blog" className="relative border-t border-[var(--color-line)] bg-[var(--color-charcoal)]/70 backdrop-blur-[2px] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading title="Latest From the Hunt" />
          <Reveal delay={0.1}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.18em] text-white transition-colors hover:text-[var(--color-crimson-bright)]"
            >
              VIEW ALL ARTICLES
              <span>→</span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08}>
              <TiltCard maxTilt={3} className="h-full">
                <Link
                  to="/blog"
                  className="group flex h-full flex-col justify-between border border-[var(--color-line)] p-6 transition-all duration-300 hover:border-[var(--color-line-red)] hover:bg-white/[0.02]"
                >
                  <div>
                    <span className="font-[family-name:var(--font-display)] text-[10px] tracking-[0.25em] text-[var(--color-crimson-bright)]">
                      {post.category.toUpperCase()}
                    </span>
                    <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-white">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-ash)]">{post.description}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-[var(--color-line)] pt-4">
                    <span className="text-xs text-[var(--color-ash)]">{post.date}</span>
                    <span className="flex items-center gap-1 font-[family-name:var(--font-display)] text-[10px] tracking-[0.2em] text-white transition-transform duration-300 group-hover:translate-x-1">
                      READ MORE
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
