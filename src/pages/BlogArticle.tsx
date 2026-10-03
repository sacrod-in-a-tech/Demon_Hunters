import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { posts } from '../data/blogPosts'

export default function BlogArticle() {
  const { id } = useParams<{ id: string }>()

  const post = posts.find((item) => item.id === id)

  if (!post) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-black text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(130,0,0,0.18),transparent_40%)]" />

        <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div>
            <p className="font-[family-name:var(--font-display)] text-[10px] tracking-[0.3em] text-[var(--color-crimson-bright)]">
              ERROR 404
            </p>

            <h1 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Article Not Found
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--color-ash)]">
              The article you are looking for does not exist or may have been
              moved.
            </p>

            <Link
              to="/blog"
              className="mt-8 inline-flex items-center gap-2 border border-[var(--color-line)] px-5 py-3 font-[family-name:var(--font-display)] text-[10px] tracking-[0.2em] text-white transition-all duration-300 hover:border-[var(--color-crimson-bright)] hover:bg-[var(--color-crimson)]/10"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              BACK TO BLOG
            </Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(130,0,0,0.2),transparent_38%)]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:70px_70px]" />
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-red-950/10 blur-[140px]" />
      </div>

      <article className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pb-24 lg:pt-28">
        <Link
          to="/blog"
          className="group inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-[10px] tracking-[0.2em] text-[var(--color-ash)] transition-colors duration-300 hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
          BACK TO BLOG
        </Link>

        <header className="mt-8 max-w-5xl sm:mt-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="border border-[var(--color-crimson-bright)]/40 bg-[var(--color-crimson)]/10 px-3 py-1.5 font-[family-name:var(--font-display)] text-[9px] tracking-[0.25em] text-[var(--color-crimson-bright)]">
              {post.category.toUpperCase()}
            </span>

            <span className="border border-[var(--color-line)] px-3 py-1.5 font-[family-name:var(--font-display)] text-[9px] tracking-[0.18em] text-white/45">
              #{post.tag}
            </span>
          </div>

          <h1 className="mt-5 max-w-5xl font-[family-name:var(--font-display)] text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-[var(--color-ash)] sm:text-lg sm:leading-9">
            {post.description}
          </p>

          <div className="mt-8 flex items-center gap-4 border-b border-[var(--color-line)] pb-8">
            <span className="h-px w-8 bg-[var(--color-crimson-bright)]" />

            <span className="font-[family-name:var(--font-display)] text-[10px] tracking-[0.18em] text-white/45">
              {post.date}
            </span>

            <span className="text-white/20">/</span>

            <span className="font-[family-name:var(--font-display)] text-[10px] tracking-[0.18em] text-white/45">
              DEMON HUNTERS RESEARCH
            </span>
          </div>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-16">
          <div className="min-w-0">
            <div className="space-y-8">
              {post.content.map((section, index) => {
                if (section.type === 'heading') {
                  return (
                    <div key={`${section.type}-${index}`} className="pt-8">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="h-px w-8 bg-[var(--color-crimson-bright)]" />
                        <span className="font-[family-name:var(--font-display)] text-[9px] tracking-[0.25em] text-[var(--color-crimson-bright)]">
                          RESEARCH
                        </span>
                      </div>

                      <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-white sm:text-3xl">
                        {section.text}
                      </h2>
                    </div>
                  )
                }

                if (section.type === 'subheading') {
                  return (
                    <h3
                      key={`${section.type}-${index}`}
                      className="pt-5 font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-white sm:text-xl"
                    >
                      {section.text}
                    </h3>
                  )
                }

                if (section.type === 'bullet') {
                  return (
                    <div
                      key={`${section.type}-${index}`}
                      className="relative border-l border-[var(--color-line-red)] py-1 pl-6 text-[15px] leading-8 text-[var(--color-ash)] sm:text-base"
                    >
                      <span className="absolute -left-[4px] top-[14px] h-2 w-2 rounded-full bg-[var(--color-crimson-bright)]" />
                      {section.text}
                    </div>
                  )
                }

                if (section.type === 'code') {
                  return (
                    <pre
                      key={`${section.type}-${index}`}
                      className="overflow-x-auto border border-[var(--color-line)] bg-white/[0.02] p-5 font-mono text-xs leading-7 text-white/70"
                    >
                      <code>{section.text}</code>
                    </pre>
                  )
                }

                return (
                  <p
                    key={`${section.type}-${index}`}
                    className="max-w-4xl text-[15px] leading-8 text-[var(--color-ash)] sm:text-base sm:leading-9"
                  >
                    {section.text}
                  </p>
                )
              })}
            </div>

            <div className="mt-10 border-t border-[var(--color-line)] pt-8">
              <Link
                to="/blog"
                className="group inline-flex items-center gap-3 font-[family-name:var(--font-display)] text-[10px] tracking-[0.2em] text-white transition-colors duration-300 hover:text-[var(--color-crimson-bright)]"
              >
                <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
                BACK TO ALL ARTICLES
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28 border border-[var(--color-line)] bg-white/[0.015] p-5">
              <span className="font-[family-name:var(--font-display)] text-[9px] tracking-[0.25em] text-[var(--color-crimson-bright)]">
                ARTICLE INFO
              </span>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="font-[family-name:var(--font-display)] text-[9px] tracking-[0.15em] text-white/30">
                    CATEGORY
                  </p>
                  <p className="mt-1 text-sm text-white/75">
                    {post.category}
                  </p>
                </div>

                <div>
                  <p className="font-[family-name:var(--font-display)] text-[9px] tracking-[0.15em] text-white/30">
                    PUBLISHED
                  </p>
                  <p className="mt-1 text-sm text-white/75">{post.date}</p>
                </div>

                <div>
                  <p className="font-[family-name:var(--font-display)] text-[9px] tracking-[0.15em] text-white/30">
                    TAG
                  </p>
                  <p className="mt-1 text-sm text-white/75">#{post.tag}</p>
                </div>
              </div>

              <div className="mt-7 h-px bg-[var(--color-line)]" />

              <p className="mt-6 font-[family-name:var(--font-display)] text-[9px] leading-5 tracking-[0.14em] text-white/30">
                DEMON HUNTERS
                <br />
                SECURITY RESEARCH ARCHIVE
              </p>
            </div>
          </aside>
        </div>
      </article>
    </main>
  )
}