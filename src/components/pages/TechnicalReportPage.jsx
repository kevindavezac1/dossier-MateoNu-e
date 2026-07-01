import Page from '../Page'
import { ATHLETE } from '../../data/athlete'

export default function TechnicalReportPage({ t }) {
  return (
    <Page id="technical">
      <div className="w-full bg-zinc-100">
        <div className="max-w-6xl mx-auto flex flex-col p-8 lg:p-12 pb-10">
        <div className="flex justify-between items-end border-b-4 border-zinc-950 pb-4 mb-0 gap-2">
          <h2 className="font-bebas text-[clamp(36px,8vw,72px)] leading-none text-zinc-950 tracking-wider m-0">{t.technical.title}</h2>
          <p className="hidden sm:block font-mono text-sm font-bold tracking-widest text-orange-600 uppercase mb-1 shrink-0">{t.technical.recruitingId}</p>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-10 flex-1 pt-8">
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-8 relative">
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1 bg-zinc-300" />
            <div className="pl-0 lg:pl-8 flex flex-col gap-6 justify-center">
              <p className="text-xl leading-snug text-zinc-800 font-medium font-bebas tracking-wide uppercase">
                {t.technical.summary1}
              </p>
              <p className="text-base leading-relaxed text-zinc-600 font-light">
                {t.technical.summary2}
              </p>
              <p className="text-base leading-relaxed text-zinc-600 font-light">
                {t.technical.summary3}
              </p>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 flex flex-col gap-4 justify-center">
            <div className="bg-white p-5 border border-zinc-200 shadow-sm flex-1 flex flex-col justify-center">
              <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-zinc-400 uppercase mb-1">{t.technical.club}</p>
              <p className="font-bebas text-3xl tracking-wider text-zinc-950">{ATHLETE.currentClub}</p>
              <p className="text-xs font-semibold text-orange-600 uppercase tracking-widest mt-1">{t.technical.league}</p>
            </div>

            <div className="bg-white p-5 border border-zinc-200 shadow-sm flex-1 flex flex-col justify-center">
              <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-zinc-400 uppercase mb-1">{t.technical.academics}</p>
              <p className="font-bebas text-3xl tracking-wider text-zinc-950">{ATHLETE.university}</p>
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mt-1">{t.athlete.universityNote}</p>
            </div>

            <div className="bg-zinc-950 p-5 border-l-4 border-orange-600 flex-1 flex flex-col justify-center">
              <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-zinc-400 uppercase mb-1">{t.technical.availability}</p>
              <p className="font-bebas text-3xl tracking-wider text-white">{t.athlete.availability}</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </Page>
  )
}
