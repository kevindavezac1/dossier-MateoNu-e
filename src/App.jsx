import { useState } from 'react'
import CoverPage from './components/pages/CoverPage'
import TechnicalReportPage from './components/pages/TechnicalReportPage'
import TrajectoryPage from './components/pages/TrajectoryPage'
import ValuePropositionPage from './components/pages/ValuePropositionPage'
import TechAttributesPage from './components/pages/TechAttributesPage'
import GalleryPage from './components/pages/GalleryPage'
import MediaPage from './components/pages/MediaPage'
import ContactPage from './components/pages/ContactPage'
import translations from './data/translations'

export default function App() {
  const [lang, setLang] = useState('es')
  const t = translations[lang]

  return (
    <div className="w-full bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex justify-end">
        <button
          type="button"
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          className="rounded-full border border-orange-600 bg-orange-600/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-orange-400 hover:bg-orange-600 hover:text-white transition-colors"
        >
          {t.nav.language}
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <CoverPage t={t} />
        <TechnicalReportPage t={t} />
        <TrajectoryPage t={t} />
        <ValuePropositionPage t={t} />
        <TechAttributesPage t={t} />
        <GalleryPage t={t} />
        <MediaPage t={t} />
        <ContactPage t={t} />
      </div>
    </div>
  )
}
