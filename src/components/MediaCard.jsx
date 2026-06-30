import { ArrowUpRight, Instagram, Linkedin } from '../icons'

const ICON_MAP = { instagram: <Instagram />, linkedin: <Linkedin /> }

export default function MediaCard({ title, subtitle, url, icon, buttonLabel }) {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=18181b&bgcolor=ffffff&data=${encodeURIComponent(url)}`

  return (
    <div className="flex items-center gap-6 bg-white border-2 border-zinc-900 p-4 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#ea580c] transition-all h-full">
      <div className="w-[80px] h-[80px] bg-white border border-zinc-200 p-1 flex-shrink-0">
        <img src={qrUrl} alt={`QR for ${title}`} className="w-full h-full object-contain" />
      </div>
      <div>
        <h4 className="font-bebas text-3xl tracking-wider text-zinc-950 flex items-center gap-2 m-0">
          {icon && ICON_MAP[icon]}
          {title}
        </h4>
        <p className="text-[10px] font-mono font-bold tracking-[0.1em] text-zinc-500 uppercase mt-1 leading-tight">
          {subtitle}
        </p>
        <a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[10px] font-mono uppercase font-bold tracking-widest text-orange-600 hover:text-zinc-950 mt-3 transition-colors">
          {buttonLabel || '[ VER VIDEO ]'} <ArrowUpRight />
        </a>
      </div>
    </div>
  )
}
