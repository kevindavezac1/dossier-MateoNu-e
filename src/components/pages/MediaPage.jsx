import Page from '../Page'
import MediaCard from '../MediaCard'
import { MEDIA_LINKS } from '../../data/athlete'

export default function MediaPage({ t }) {
  return (
    <Page id="media">
      <div className="w-full flex flex-col px-6 sm:px-10 lg:px-12 py-8 bg-zinc-200 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />

        <div className="relative z-10 mb-6 border-b-4 border-zinc-950 pb-4 flex justify-between items-end flex-shrink-0">
          <h2 className="font-bebas text-[clamp(36px,4.5vw,64px)] leading-none text-zinc-950 tracking-wider m-0">{t.media.title}</h2>
          <p className="font-mono text-sm font-bold tracking-widest text-orange-600 uppercase mb-1">{t.media.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 flex-1 relative z-10">
          {MEDIA_LINKS.map((link, index) => (
            <MediaCard
              key={link.title}
              url={link.url}
              icon={link.icon}
              title={t.media.links[index].title}
              subtitle={t.media.links[index].subtitle}
              buttonLabel={t.media.viewVideo}
            />
          ))}
        </div>
      </div>
    </Page>
  )
}
