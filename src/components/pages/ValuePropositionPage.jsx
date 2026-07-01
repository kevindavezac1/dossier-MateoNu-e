import Page from '../Page'
import ValueCard from '../ValueCard'
import { Activity, Crosshair, Shield, FastForward } from '../../icons'

export default function ValuePropositionPage({ t }) {
  return (
    <Page id="impact">
      <div className="w-full bg-zinc-950 py-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 mb-10">
            <h2 className="font-bebas text-[clamp(40px,5vw,72px)] leading-none text-white tracking-wider m-0">{t.value.title}</h2>
            <p className="font-mono text-xs sm:text-sm font-bold tracking-widest text-orange-600 uppercase mb-0">{t.value.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {t.value.cards.map((card) => (
              <ValueCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </Page>
  )
}
