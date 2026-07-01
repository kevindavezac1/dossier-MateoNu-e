import { useState } from 'react'

const NAV_KEYS = ['cover', 'technical', 'trajectory', 'impact', 'attributes', 'gallery', 'media', 'contact']

export default function Navbar({ t, lang, setLang }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between gap-6">
        <a href="#cover" className="font-bebas text-2xl tracking-[0.3em] text-white shrink-0">
          MNM
        </a>

        {/* Desktop links — unchanged */}
        <div className="hidden md:flex items-center gap-5 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
          {NAV_KEYS.map(key => (
            <a key={key} href={`#${key}`} className="hover:text-orange-500 transition-colors whitespace-nowrap">
              {t.nav[key]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="rounded-full border border-orange-600 bg-orange-600/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400 hover:bg-orange-600 hover:text-white transition-colors"
          >
            {t.nav.language}
          </button>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            onClick={() => setOpen(o => !o)}
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-200 origin-center ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-200 origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800 px-6 py-3 flex flex-col">
          {NAV_KEYS.map(key => (
            <a
              key={key}
              href={`#${key}`}
              onClick={() => setOpen(false)}
              className="font-bebas text-2xl tracking-[0.15em] text-zinc-400 hover:text-orange-500 transition-colors py-2.5 border-b border-zinc-800/40 last:border-0"
            >
              {t.nav[key]}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
