import Page from '../Page'
import GridBackground from '../GridBackground'
import TrajectoryRow from '../TrajectoryRow'
import { TRAJECTORY } from '../../data/athlete'

export default function TrajectoryPage({ t }) {
  return (
    <Page dark id="trajectory">
      <div className="w-full flex flex-col py-12 relative">
        <GridBackground />

        <div className="z-10 mb-8 max-w-6xl mx-auto w-full px-6 sm:px-10">
          <h2 className="font-bebas text-[clamp(40px,5vw,68px)] leading-none text-white tracking-wider mb-1">{t.trajectory.title}</h2>
          <p className="font-mono text-xs sm:text-sm font-bold tracking-[0.2em] text-orange-500 uppercase border-b border-zinc-800 pb-3">
            {t.trajectory.subtitle}
          </p>
        </div>

        {/* MOBILE timeline */}
        <div className="lg:hidden z-10 max-w-6xl mx-auto w-full px-6 sm:px-10">
          <div className="pl-5 border-l-2 border-zinc-700">
            {TRAJECTORY.map((item, i) => (
              <div key={item.team + item.year} className="relative pb-9 last:pb-0">
                <div className={`absolute -left-[27px] top-1 w-3.5 h-3.5 border-2 bg-zinc-950 z-10
                  ${item.champion
                    ? 'border-orange-500 rotate-45 shadow-[0_0_10px_rgba(249,115,22,0.7)]'
                    : item.highlight
                      ? 'border-zinc-300 rounded-full'
                      : 'border-zinc-700 rounded-full'
                  }`}
                />
                <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-1">{item.year}</p>
                <h3 className={`font-bebas text-3xl tracking-wider leading-none mb-1
                  ${item.highlight || item.champion ? 'text-white' : 'text-zinc-400'}`}>
                  {item.team}
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 leading-relaxed">
                  {t.trajectory.rows[i].desc}
                </p>
                {item.champion && (
                  <span className="inline-block mt-2 text-[10px] font-mono font-bold uppercase tracking-widest bg-orange-600 text-white px-2 py-1">
                    {t.trajectory.champion}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP timeline — unchanged */}
        <div className="hidden lg:block z-10 w-full max-w-5xl mx-auto space-y-6">
          <div className="relative before:absolute before:inset-0 before:ml-[120px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-700 before:to-transparent">
            {TRAJECTORY.map((item, i) => (
              <TrajectoryRow
                key={item.team + item.year}
                {...item}
                desc={t.trajectory.rows[i].desc}
                championLabel={t.trajectory.champion}
              />
            ))}
          </div>
        </div>
      </div>
    </Page>
  )
}
