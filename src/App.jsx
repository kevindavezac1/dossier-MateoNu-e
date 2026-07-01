import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
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
    <div className="w-full">
      <Navbar t={t} lang={lang} setLang={setLang} />
      <CoverPage t={t} />
      <TechnicalReportPage t={t} />
      <TrajectoryPage t={t} />
      <ValuePropositionPage t={t} />
      <TechAttributesPage t={t} />
      <GalleryPage t={t} />
      <MediaPage t={t} />
      <ContactPage t={t} />
      <Footer />
    </div>
  )
}
