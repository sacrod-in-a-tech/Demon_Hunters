import { useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import PageHeader from '../components/PageHeader/PageHeader'
import Reveal from '../components/shared/Reveal'
import DivisionFilter from '../components/DivisionFilter/DivisionFilter'
import HunterCard from '../components/HunterCard/HunterCard'
import LeaderCard from '../components/LeaderCard/LeaderCard'

import {
  divisions,
  getHuntersByDivision,
  leader,
} from '../data/divisions'

const validIds = new Set([
  'all',
  ...divisions.map((division) => division.id),
])

export default function Hunters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const requested = searchParams.get('division')

  const active =
    requested && validIds.has(requested)
      ? requested
      : 'all'

  const handleChange = (id: string) => {
    if (id === 'all') {
      searchParams.delete('division')

      setSearchParams(searchParams, {
        replace: true,
      })
    } else {
      setSearchParams(
        { division: id },
        { replace: true },
      )
    }
  }

  const activeDivision = divisions.find(
    (division) => division.id === active,
  )

  const filtered = getHuntersByDivision(
    active as 'all' | string,
  )

  const grouped =
    active === 'all'
      ? divisions
          .map((division) => ({
            division,
            members: getHuntersByDivision(division.id),
          }))
          .filter((group) => group.members.length > 0)
      : null

  return (
    <>
      <PageHeader
        title="Meet the Hunters"
        description="A professional directory of Demon Hunters personnel, organized by division. Select a division to view its actual roster."
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {leader && (
            <div className="mb-16">
              <LeaderCard leader={leader} />
            </div>
          )}

          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--color-crimson)]" />

            <span className="font-[family-name:var(--font-display)] text-xs tracking-[0.3em] text-[var(--color-crimson-bright)]">
              FILTER BY DIVISION
            </span>
          </div>

          <DivisionFilter
            active={active}
            onChange={handleChange}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -12,
              }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-14"
            >
              {active !== 'all' && activeDivision && (
                <div className="mb-8">
                  <span className="font-[family-name:var(--font-display)] text-2xl font-semibold uppercase tracking-wide text-white">
                    {activeDivision.number} —{' '}
                    {activeDivision.name}
                  </span>

                  <p className="mt-2 max-w-lg text-sm text-[var(--color-ash)]">
                    {activeDivision.description}
                  </p>
                </div>
              )}

              {filtered.length === 0 && (
                <div className="border border-dashed border-[var(--color-line)] px-6 py-16 text-center">
                  <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.2em] text-[var(--color-ash)]">
                    NO HUNTERS ASSIGNED TO THIS DIVISION YET
                  </p>
                </div>
              )}

              {active === 'all' && grouped ? (
                <div className="flex flex-col gap-14">
                  {grouped.map(
                    ({ division, members }) => (
                      <div key={division.id}>
                        <div className="mb-5 flex items-baseline gap-3 border-b border-[var(--color-line)] pb-3">
                          <span className="font-[family-name:var(--font-display)] text-sm text-[var(--color-crimson-bright)]">
                            {division.number}
                          </span>

                          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold uppercase tracking-wide text-white">
                            {division.name}
                          </h3>
                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                          {members.map((hunter, i) => (
                            <Reveal
                              key={hunter.name}
                              delay={(i % 5) * 0.05}
                            >
                              <HunterCard
                                hunter={hunter}
                                index={String(i + 1).padStart(2, '0')}
                              />
                            </Reveal>
                          ))}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                  {filtered.map((hunter, i) => (
                    <Reveal
                      key={hunter.name}
                      delay={(i % 5) * 0.05}
                    >
                      <HunterCard
                        hunter={hunter}
                        index={String(i + 1).padStart(2, '0')}
                      />
                    </Reveal>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}