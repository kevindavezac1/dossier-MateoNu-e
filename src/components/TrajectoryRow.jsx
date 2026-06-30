export default function TrajectoryRow({ year, team, desc, highlight, champion }) {
  return (
    <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center w-full py-4 group">
      <div className={`absolute left-1/2 top-4 md:top-1/2 md:left-auto md:right-full md:-translate-x-1/2 md:-translate-y-1/2 w-4 h-4 border-2 bg-zinc-950 z-10
        ${champion
          ? 'border-orange-500 rounded-none rotate-45 shadow-[0_0_15px_rgba(249,115,22,0.8)]'
          : highlight
            ? 'border-zinc-300 rounded-full'
            : 'border-zinc-700 rounded-full'
        }`}
      />

      <div className="w-full md:w-5/12 text-left md:text-right pr-0 md:pr-12 mb-4 md:mb-0">
        <h3 className={`font-bebas text-[clamp(30px,4vw,48px)] tracking-wider m-0 ${highlight || champion ? 'text-white' : 'text-zinc-400'}`}>
          {team}
        </h3>
        <p className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-zinc-400 mt-2">
          {desc}
        </p>
      </div>

      <div className="w-full md:w-5/12 pl-0 md:pl-12 flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <span className={`font-bebas text-[clamp(36px,4vw,52px)] tracking-widest ${champion ? 'text-orange-500' : 'text-zinc-300'}`}>
          {year}
        </span>
        {champion && (
          <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest bg-orange-600 text-white px-2 py-1">
            Campeón
          </span>
        )}
      </div>
    </div>
  )
}
