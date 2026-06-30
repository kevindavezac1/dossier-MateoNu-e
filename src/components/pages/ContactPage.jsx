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
      <div className="w-full flex flex-col lg:flex-row bg-zinc-950 py-8 lg:py-12">
        <div className="w-full lg:w-1/2 relative overflow-hidden border-b border-orange-600 lg:border-b-0 lg:border-r-4 lg:border-orange-600 -mt-16 lg:-mt-6">
          <img
            src={IMAGES.retrato}
            alt="Portrait"
            className="absolute inset-0 w-full h-full object-cover object-top grayscale opacity-70 contrast-125"
            onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_PORTRAIT }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 z-10">
            <h2 className="font-bebas text-[clamp(50px,7vw,100px)] leading-[0.85] text-white tracking-wide drop-shadow-2xl">
              {ATHLETE.quote.split('\n').map((line, i) => (
                <span key={i}>{line}{i < 2 && <br />}</span>
              ))}
            </h2>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 py-10 relative">
          <GridBackground />

          <div className="relative z-10">
            <div className="inline-block bg-white text-zinc-950 font-mono font-bold px-3 py-1 text-xs tracking-widest uppercase mb-10">
              {t.contact.direct}
            </div>

            <p className="font-bebas text-3xl sm:text-4xl tracking-widest text-orange-500 mb-10">
              {t.contact.available} {ATHLETE.availability}
            </p>

            <div className="space-y-6">
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
