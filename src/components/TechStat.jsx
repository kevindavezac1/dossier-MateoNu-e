export default function TechStat({ title, desc }) {
  return (
    <div className="flex gap-6 group items-start">
      <div className="w-8 h-8 flex-shrink-0 border-2 border-zinc-900 flex items-center justify-center mt-1 group-hover:bg-orange-600 group-hover:border-orange-600 transition-colors">
        <div className="w-2 h-2 bg-zinc-950" />
      </div>
      <div>
        <h4 className="font-bebas text-xl lg:text-3xl tracking-wider text-zinc-950 group-hover:text-orange-600 transition-colors m-0">
          {title}
        </h4>
        <p className="text-zinc-600 font-light leading-relaxed mt-1">{desc}</p>
      </div>
    </div>
  )
}
