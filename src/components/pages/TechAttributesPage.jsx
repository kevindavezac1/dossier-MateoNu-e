import Page from '../Page'
import TechStat from '../TechStat'
import { TECH_STATS, IMAGES } from '../../data/athlete'

const FALLBACK_TECHNICAL = 'https://images.unsplash.com/photo-1544605929-eeb4b63391b4?q=80&w=800&auto=format&fit=crop'

export default function TechAttributesPage({ t }) {
  return (
    <Page id="attributes">
      <div className="w-full flex flex-col lg:flex-row bg-zinc-100 py-0 gap-5 lg:gap-6">
        <div className="w-full lg:w-5/12 bg-zinc-900 relative min-h-[240px] lg:min-h-[280px] overflow-hidden rounded-none">
          <img
            src={IMAGES.tecnico}
            alt="Technical Action"
            className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-110"
            onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_TECHNICAL }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/70 via-zinc-950/20 to-transparent" />
        </div>

        <div className="w-full lg:w-7/12 px-4 lg:px-6 py-4 lg:py-6 flex flex-col justify-start">
          <div className="mb-4">
            <p className="font-mono text-[10px] font-bold tracking-[0.2em] text-orange-600 uppercase mb-2">{t.tech.subtitle}</p>
            <h2 className="font-bebas text-[clamp(30px,3.6vw,42px)] leading-tight text-zinc-950 tracking-wider">{t.tech.title}</h2>
          </div>

          <div className="space-y-4">
            {t.tech.stats.map((stat) => (
              <TechStat key={stat.title} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </Page>
  )
}
