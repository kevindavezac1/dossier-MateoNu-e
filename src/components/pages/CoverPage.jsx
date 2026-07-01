import Page from '../Page'
import GridBackground from '../GridBackground'
import { ATHLETE, IMAGES } from '../../data/athlete'

// const FALLBACK_COVER = 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1200&auto=format&fit=crop'

export default function CoverPage({ t }) {
  return (
    <Page dark id="cover">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] lg:min-h-[780px]">
        <div className="bg-zinc-950 relative overflow-hidden flex flex-col p-8 md:p-16 border-r-2 border-orange-600 z-10">
          <GridBackground size="sm" />

          <div className="relative z-10 flex flex-col justify-center flex-1 gap-10">
            <div>
              <div className="inline-block bg-orange-600 text-zinc-950 font-bebas px-3 py-1 text-xl tracking-widest mb-6">
                {t.cover.dossier}
              </div>
              <h1 className="font-bebas text-[clamp(72px,9vw,130px)] leading-[0.85] text-white tracking-wide mb-3 uppercase text-stable hero-text-fix">
                {ATHLETE.name.split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </h1>
              <h2 className="font-bebas text-zinc-500 text-4xl tracking-widest uppercase">
                {t.athlete.position}
              </h2>
            </div>

            <div className="border-t border-zinc-800 pt-8 grid grid-cols-2 gap-y-6 gap-x-4">
              <div>
                <p className="text-[10px] text-zinc-500 font-mono tracking-[0.2em] uppercase mb-1">{t.cover.heightWeight}</p>
                <p className="font-bebas text-3xl text-white tracking-wider">
                  {ATHLETE.height}
                  <span className="text-lg text-zinc-500">&nbsp;{t.cover.heightUnit}</span>
                  {' '}/
                  {ATHLETE.weight}
                  <span className="text-lg text-zinc-500">&nbsp;{t.cover.weightUnit}</span>
                </p>
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-mono tracking-[0.2em] uppercase mb-1">{t.cover.passport}</p>
                <p className="font-bebas text-3xl text-white tracking-wider">{t.athlete.nationality}</p>
              </div>
              <div className="col-span-2">
                <p className="text-[10px] text-zinc-500 font-mono tracking-[0.2em] uppercase mb-1">{t.cover.eliteCareer}</p>
                <p className="font-bebas text-2xl text-orange-500 tracking-wider">{ATHLETE.eliteCareer}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative bg-zinc-900 min-h-[420px]">
          <img
            src={IMAGES.portada}
            alt="Mateo Action"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 contrast-125"
            onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_COVER }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 font-bebas text-[clamp(150px,20vw,350px)] text-orange-500/80 leading-none drop-shadow-2xl">
            1
          </div>
        </div>
      </div>
    </Page>
  )
}
