export default function ContactItem({ icon, value }) {
  return (
    <div className="flex items-center gap-6 text-white group">
      <div className="w-12 h-12 border border-zinc-700 flex items-center justify-center bg-zinc-900 group-hover:bg-orange-600 group-hover:border-orange-600 transition-colors">
        {icon}
      </div>
      <p className="font-bebas tracking-widest text-3xl">{value}</p>
    </div>
  )
}
