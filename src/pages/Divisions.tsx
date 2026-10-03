import PageHeader from '../components/PageHeader/PageHeader'
import Reveal from '../components/shared/Reveal'
import DivisionCard from '../components/DivisionCard/DivisionCard'
import { divisions } from '../data/divisions'

export default function Divisions() {
  return (
    <>
      <PageHeader
        // eyebrow="ORGANIZATION"
        title="Divisions"
        description="Demon Hunters is organized into six specialized technical divisions. Select one to see who's assigned to it."
      />

      <section className="relative py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {divisions.map((division, i) => (
              <Reveal key={division.id} delay={(i % 3) * 0.08}>
                <DivisionCard division={division} memberCount={division.members.length + (division.captain ? 1 : 0)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
