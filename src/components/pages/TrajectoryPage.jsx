import Page from '../Page'
import GridBackground from '../GridBackground'
import TrajectoryRow from '../TrajectoryRow'
import { TRAJECTORY } from '../../data/athlete'

export default function TrajectoryPage({ t }) {
  return (
    <Page dark id="trajectory">
      <div className="w-full flex flex-col px-8 py-12 relative">
        <GridBackground />

        <div className="z-10 mb-8">
          <h2 className="font-bebas text-[clamp(40px,5vw,68px)] leading-none text-white tracking-wider mb-1">{t.trajectory.title}</h2>
          <p className="font-mono text-xs sm:text-sm font-bold tracking-[0.2em] text-orange-500 uppercase border-b border-zinc-800 pb-3">
            {t.trajectory.subtitle}
          </p>
        </div>

        <div className="z-10 w-full max-w-5xl mx-auto space-y-6">
          <div className="relative before:absolute before:inset-0 before:ml-[120px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-700 before:to-transparent">
            {TRAJECTORY.map((item) => (
              <TrajectoryRow key={item.team + item.year} {...item} />
            ))}
          </div>
        </div>
      </div>
    </Page>
  )
}
