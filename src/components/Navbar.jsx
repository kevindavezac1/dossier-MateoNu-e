export default function Navbar({ t, lang, setLang }) {
  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.32em] text-white">
          {Object.entries(t.nav).filter(([key]) => key !== 'language').map(([key, label]) => (
            <a key={key} href={`#${key}`} className="transition-colors hover:text-orange-500">
              {label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          className="rounded-full border border-orange-600 bg-orange-600/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-orange-400 hover:bg-orange-600 hover:text-white transition-colors"
        >
          {t.nav.language}
        </button>
      </div>
    </nav>
  )
}
