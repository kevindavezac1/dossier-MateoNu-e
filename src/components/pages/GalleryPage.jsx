import Page from '../Page'
import { GALLERY } from '../../data/athlete'

export default function GalleryPage({ t }) {
  const [hero, firstRight, secondRight] = GALLERY

  return (
    <Page dark id="gallery">
      <div className="w-full bg-zinc-950 pt-6 pb-8">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bebas text-5xl text-white tracking-wider m-0">{t.gallery.title}</h2>
            <div className="h-1 w-24 bg-orange-600" />
          </div>

          {/* MOBILE gallery — 3 equal-height stacked images */}
          <div className="flex lg:hidden flex-col gap-3">
            {[
              { data: hero, label: t.gallery.cam1, position: 'object-[center_20%]' },
              { data: firstRight, label: t.gallery.cam2, position: 'object-center' },
              { data: secondRight, label: t.gallery.cam3, position: 'object-center' },
            ].map(({ data, label, position }) => (
              <div key={label} className="relative h-[200px] overflow-hidden bg-zinc-900 border border-zinc-800 rounded-md">
                <img
                  src={data.src}
                  alt={data.alt}
                  className={`absolute inset-0 w-full h-full object-cover ${position} grayscale hover:grayscale-0 transition-all duration-700`}
                />
                <div className="absolute bottom-3 left-3 bg-zinc-950/90 text-white font-mono text-[10px] px-2 py-1 border border-zinc-700 uppercase tracking-widest">
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP gallery — unchanged */}
          <div className="hidden lg:grid grid-cols-[2.5fr_1fr] gap-4 h-[420px]">
            <div className="relative overflow-hidden bg-zinc-900 border border-zinc-800 rounded-md shadow-sm">
              <img
                src={hero.src}
                alt={hero.alt}
                className="absolute inset-0 w-full h-full object-cover object-[center_20%] grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-4 left-4 bg-zinc-950/90 text-white font-mono text-[10px] px-3 py-1 border border-zinc-700 uppercase tracking-widest">
                {t.gallery.cam1}
              </div>
            </div>

            <div className="grid grid-rows-2 gap-4">
              <div className="relative overflow-hidden bg-zinc-900 border border-zinc-800 rounded-md shadow-sm">
                <img
                  src={firstRight.src}
                  alt={firstRight.alt}
                  className="absolute inset-0 w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-4 left-4 bg-zinc-950/90 text-white font-mono text-[10px] px-3 py-1 border border-zinc-700 uppercase tracking-widest">
                  {t.gallery.cam2}
                </div>
              </div>

              <div className="relative overflow-hidden bg-zinc-900 border border-zinc-800 rounded-md shadow-sm">
                <img
                  src={secondRight.src}
                  alt={secondRight.alt}
                  className="absolute inset-0 w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-4 left-4 bg-zinc-950/90 text-white font-mono text-[10px] px-3 py-1 border border-zinc-700 uppercase tracking-widest">
                  {t.gallery.cam3}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}
