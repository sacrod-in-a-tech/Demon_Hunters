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

      <section className="section-spacing relative">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
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
