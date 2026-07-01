import Page from '../Page'
import GridBackground from '../GridBackground'
import ContactItem from '../ContactItem'
import { Mail, Smartphone, MapPin } from '../../icons'
import { ATHLETE, IMAGES } from '../../data/athlete'

const FALLBACK_PORTRAIT = 'https://images.unsplash.com/photo-1614030424754-24d0eebd46b2?q=80&w=1000&auto=format&fit=crop'

const CONTACT_ITEMS = [
  { icon: <Mail size={20} />,       value: ATHLETE.email },
  { icon: <Smartphone size={20} />, value: ATHLETE.phone },
  { icon: <MapPin size={20} />,     value: ATHLETE.location },
]

export default function ContactPage({ t }) {
  return (
    <Page dark id="contact">
      <div className="w-full flex flex-col lg:flex-row bg-zinc-950 min-h-[calc(100vh-56px)]">
        {/* Photo — quote small at bottom-left, under the torso, not on the face */}
        <div className="w-full lg:w-1/2 relative min-h-[360px] lg:min-h-0 border-b-2 border-orange-600 lg:border-b-0 lg:border-r-4 lg:border-orange-600 overflow-hidden">
          <img
            src={IMAGES.retrato}
            alt="Portrait"
            className="absolute inset-0 w-full h-full object-cover object-top grayscale opacity-90 contrast-110"
            onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_PORTRAIT }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-zinc-950/40" />
          <div className="absolute top-6 left-6 z-10">
            <h2 className="font-bebas text-[clamp(28px,3vw,48px)] leading-[0.9] text-orange-500 tracking-wide drop-shadow-lg">
              {t.athlete.quote.split('\n').map((line, i) => (
                <span key={i}>{line}{i < 2 && <br />}</span>
              ))}
            </h2>
          </div>
        </div>

        {/* Info panel — compact, fits in viewport */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-14 py-10 relative">
          <GridBackground />

          <div className="relative z-10 flex flex-col gap-6">
            <div className="inline-block bg-white text-zinc-950 font-mono font-bold px-3 py-1 text-xs tracking-widest uppercase self-start">
              {t.contact.direct}
            </div>

            <p className="font-bebas text-2xl sm:text-3xl tracking-widest text-orange-500 leading-tight">
              {t.contact.available}<br />
              <span className="text-zinc-400 text-xl">{t.athlete.availability}</span>
            </p>

            <div className="space-y-4">
              {CONTACT_ITEMS.map((item) => (
                <ContactItem key={item.value} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}
