import { cloneElement } from 'react'

export default function ContactItem({ icon, value }) {
  const sizedIcon = icon ? cloneElement(icon, { width: 20, height: 20, className: 'w-5 h-5' }) : null
  return (
    <div className="flex items-center gap-6 text-white group">
      <div className="w-12 h-12 border border-zinc-700 flex items-center justify-center bg-zinc-900 group-hover:bg-orange-600 group-hover:border-orange-600 transition-colors">
        {sizedIcon}
      </div>
      <p className="font-bebas tracking-widest text-2xl sm:text-3xl">{value}</p>
    </div>
  )
}
