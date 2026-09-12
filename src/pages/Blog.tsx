import { useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader/PageHeader'
import Reveal from '../components/shared/Reveal'
import TiltCard from '../components/shared/TiltCard'
import { posts } from '../data/content'

const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category)))]

export default function Blog() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category
      const q = query.trim().toLowerCase()
      const matchesQuery =
        q.length === 0 ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tag.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  return (
    <>
      <PageHeader
        eyebrow="THE ARCHIVE"
        title="Blog"
        description="Write-ups, mindset, and lessons from the community — a running archive of security research and CTF experience."
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col gap-6 border-b border-[var(--color-line)] pb-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full max-w-sm">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="SEARCH ARTICLES..."
                aria-label="Search articles"
                className="w-full border border-[var(--color-line)] bg-transparent px-4 py-3 font-[family-name:var(--font-display)] text-xs tracking-[0.1em] text-white placeholder:text-[var(--color-ash)] focus:border-[var(--color-crimson-bright)] focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = category === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    aria-pressed={isActive}
                    className={`border px-3.5 py-2 font-[family-name:var(--font-display)] text-[10px] tracking-[0.15em] transition-all duration-300 ${
                      isActive
                        ? 'border-[var(--color-crimson-bright)] bg-[var(--color-crimson)]/10 text-white'
                        : 'border-[var(--color-line)] text-[var(--color-ash)] hover:border-[var(--color-line-red)] hover:text-white'
                    }`}
                  >
                    {cat.toUpperCase()}
                  </button>
                )
              })}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="mt-14 border border-dashed border-[var(--color-line)] px-6 py-16 text-center">
              <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.2em] text-[var(--color-ash)]">
                NO ARTICLES MATCH YOUR SEARCH
              </p>
            </div>
          ) : (
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post, i) => (
                <Reveal key={post.title} delay={(i % 3) * 0.08}>
                  <TiltCard maxTilt={3} className="h-full">
                    <article className="group flex h-full flex-col justify-between border border-[var(--color-line)] p-6 transition-all duration-300 hover:border-[var(--color-line-red)] hover:bg-white/[0.02]">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-[family-name:var(--font-display)] text-[10px] tracking-[0.25em] text-[var(--color-crimson-bright)]">
                            {post.category.toUpperCase()}
                          </span>
                          <span className="border border-[var(--color-line)] px-2 py-0.5 font-[family-name:var(--font-display)] text-[9px] tracking-[0.15em] text-white/50">
                            #{post.tag}
                          </span>
                        </div>
                        <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-white">
                          {post.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-[var(--color-ash)]">{post.description}</p>
                      </div>
                      <div className="mt-6 flex items-center justify-between border-t border-[var(--color-line)] pt-4">
                        <span className="text-xs text-[var(--color-ash)]">{post.date}</span>
                        <span className="flex items-center gap-1 font-[family-name:var(--font-display)] text-[10px] tracking-[0.2em] text-white transition-transform duration-300 group-hover:translate-x-1">
                          READ MORE →
                        </span>
                      </div>
                    </article>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
