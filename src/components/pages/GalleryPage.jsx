import Page from '../Page'
import { GALLERY } from '../../data/athlete'

export default function GalleryPage({ t }) {
  const [hero, firstRight, secondRight] = GALLERY

  return (
    <Page dark id="gallery">
      <div className="w-full flex flex-col bg-zinc-950 px-6 sm:px-8 pt-6 pb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bebas text-5xl text-white tracking-wider m-0">{t.gallery.title}</h2>
          <div className="h-1 w-24 bg-orange-600" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-4">
          <div className="relative overflow-hidden bg-zinc-900 border border-zinc-800 rounded-md shadow-sm min-h-[340px] sm:min-h-[380px] lg:min-h-[360px] xl:min-h-[360px]">
            <img
              src={hero.src}
              alt={hero.alt}
              className="w-full h-full object-cover object-[center_20%] grayscale hover:grayscale-0 transition-all duration-700 block"
            />
            <div className="absolute bottom-4 left-4 bg-zinc-950/90 text-white font-mono text-[10px] px-3 py-1 border border-zinc-700 uppercase tracking-widest">
              {t.gallery.cam1}
            </div>
          </div>

          <div className="grid grid-rows-[1fr_1fr] gap-4 h-full">
            <div className="relative overflow-hidden bg-zinc-900 border border-zinc-800 rounded-md shadow-sm h-full min-h-[160px] sm:min-h-[170px] lg:min-h-[170px]">
              <img
                src={firstRight.src}
                alt={firstRight.alt}
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 block"
              />
              <div className="absolute bottom-4 left-4 bg-zinc-950/90 text-white font-mono text-[10px] px-3 py-1 border border-zinc-700 uppercase tracking-widest">
                {t.gallery.cam2}
              </div>
            </div>

            <div className="relative overflow-hidden bg-zinc-900 border border-zinc-800 rounded-md shadow-sm h-full">
              <img
                src={secondRight.src}
                alt={secondRight.alt}
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 block"
              />
              <div className="absolute bottom-4 left-4 bg-zinc-950/90 text-white font-mono text-[10px] px-3 py-1 border border-zinc-700 uppercase tracking-widest">
                {t.gallery.cam3}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}
