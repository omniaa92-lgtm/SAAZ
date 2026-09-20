import { useTranslation } from 'react-i18next'
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin } from 'react-icons/hi2'
import { FaInstagram, FaSnapchatGhost, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { INSTAGRAM_PROFILE_URL } from '../config/instagramReels'
import { GOOGLE_MAPS_URL } from '../config/location'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../config/contact'
import Logo from './Logo'

const NAV_KEYS = ['home', 'about', 'services', 'offers', 'whyUs', 'testimonials', 'location'] as const

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-primary-50/50 dark:bg-primary-900/40">
      <div className="h-1 bg-gradient-to-r from-accent-400 via-accent-600 to-accent-400" />

      <div className="container-x pt-16 pb-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <Logo className="h-16" />
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{t('footer.about')}</p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: FaInstagram, href: INSTAGRAM_PROFILE_URL },
                { Icon: FaWhatsapp, href: WHATSAPP_URL },
                { Icon: FaSnapchatGhost, href: 'https://snapchat.com/t/NA4wGugx' },
                { Icon: FaTiktok, href: 'https://www.tiktok.com/' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-950 text-white transition hover:bg-accent-500 hover:text-primary-950 dark:bg-white/10 dark:hover:bg-accent-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <h4 className="inline-block border-b-2 border-accent-500 pb-1.5 text-sm font-bold text-primary-950 dark:text-white">
              {t('footer.quickLinks')}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_KEYS.map((key) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    className="text-sm text-slate-500 transition hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
                  >
                    {t(`nav.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <h4 className="inline-block border-b-2 border-accent-500 pb-1.5 text-sm font-bold text-primary-950 dark:text-white">
              {t('footer.servicesTitle')}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {(t('footer.services', { returnObjects: true }) as string[]).map((service) => (
                <li key={service} className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-2">
            <h4 className="inline-block border-b-2 border-accent-500 pb-1.5 text-sm font-bold text-primary-950 dark:text-white">
              {t('footer.contact')}
            </h4>
            <ul className="mt-4 space-y-3 rounded-2xl border border-primary-100/70 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-primary-900">
              <li className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-400/15 text-accent-600 dark:text-accent-400">
                  <HiOutlineEnvelope className="h-4 w-4" />
                </span>
                <a href={`mailto:${t('footer.email')}`} className="hover:text-accent-600 dark:hover:text-accent-400">
                  {t('footer.email')}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-400/15 text-accent-600 dark:text-accent-400">
                  <HiOutlinePhone className="h-4 w-4" />
                </span>
                <a href={`tel:${PHONE_TEL}`} dir="ltr" className="hover:text-accent-600 dark:hover:text-accent-400">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-400/15 text-accent-600 dark:text-accent-400">
                  <FaWhatsapp className="h-4 w-4" />
                </span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  dir="ltr"
                  className="hover:text-accent-600 dark:hover:text-accent-400"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-400/15 text-accent-600 dark:text-accent-400">
                  <HiOutlineMapPin className="h-4 w-4" />
                </span>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-600 dark:hover:text-accent-400"
                >
                  {t('footer.location')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-primary-950">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} SAAZ IDEA — {t('footer.rights')}
          </p>
          <p dir="ltr">Developed by: Plan Studio</p>
        </div>
      </div>
    </footer>
  )
}
