export default function ValueCard({ icon, title, desc, highlight }) {
  return (
    <div className={`p-8 border ${highlight ? 'border-orange-600 bg-orange-600/5' : 'border-zinc-800 bg-zinc-900/50'} flex flex-col justify-center hover:bg-zinc-800 transition-colors group relative overflow-hidden`}>
      <div className={`mb-6 ${highlight ? 'text-orange-500' : 'text-zinc-500'} group-hover:text-orange-500 transition-colors`}>
        {icon}
      </div>
      <h3 className="font-bebas text-4xl tracking-wider text-white mb-4">{title}</h3>
      <p className="text-zinc-400 font-light leading-relaxed text-sm pr-4">{desc}</p>
      <div className="absolute -bottom-6 -right-6 text-[120px] font-bebas text-zinc-800/20 group-hover:text-orange-500/10 transition-colors pointer-events-none">
        +
      </div>
    </div>
  )
}
