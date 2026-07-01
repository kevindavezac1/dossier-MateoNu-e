const NAV_KEYS = ['cover', 'technical', 'trajectory', 'impact', 'attributes', 'gallery', 'media', 'contact']

export default function Navbar({ t, lang, setLang }) {
  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between gap-6">
        <a href="#cover" className="font-bebas text-2xl tracking-[0.3em] text-white shrink-0">
          MNM
        </a>

        <div className="hidden md:flex items-center gap-5 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
          {NAV_KEYS.map(key => (
            <a key={key} href={`#${key}`} className="hover:text-orange-500 transition-colors whitespace-nowrap">
              {t.nav[key]}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          className="shrink-0 rounded-full border border-orange-600 bg-orange-600/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400 hover:bg-orange-600 hover:text-white transition-colors"
        >
          {t.nav.language}
        </button>
      </div>
    </nav>
  )
}
