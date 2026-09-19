import { useTranslation } from 'react-i18next'
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin } from 'react-icons/hi2'
import { FaInstagram, FaTwitter, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { INSTAGRAM_PROFILE_URL } from '../config/instagramReels'
import { GOOGLE_MAPS_URL } from '../config/location'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../config/contact'
import Logo from './Logo'

const NAV_KEYS = ['home', 'about', 'services', 'offers', 'whyUs', 'testimonials', 'location'] as const

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-primary-100 bg-primary-50/50 pt-16 pb-8 dark:border-white/10 dark:bg-primary-900/40">
      <div className="container-x">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo className="h-11 w-11" withText textClassName="text-sm" />
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{t('footer.about')}</p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: FaInstagram, href: INSTAGRAM_PROFILE_URL },
                { Icon: FaWhatsapp, href: WHATSAPP_URL },
                { Icon: FaTwitter, href: 'https://twitter.com/' },
                { Icon: FaTiktok, href: 'https://www.tiktok.com/' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-200 text-primary-600 transition hover:border-accent-500 hover:text-accent-600 dark:border-white/15 dark:text-slate-400 dark:hover:text-accent-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-primary-950 dark:text-white">{t('footer.quickLinks')}</h4>
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

          <div className="sm:col-span-2 lg:col-span-2">
            <h4 className="text-sm font-bold text-primary-950 dark:text-white">{t('footer.contact')}</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-slate-500 dark:text-slate-400">
                <HiOutlineEnvelope className="h-4 w-4 shrink-0 text-accent-600 dark:text-accent-400" />
                <a href={`mailto:${t('footer.email')}`} className="hover:text-accent-600 dark:hover:text-accent-400">
                  {t('footer.email')}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-500 dark:text-slate-400">
                <HiOutlinePhone className="h-4 w-4 shrink-0 text-accent-600 dark:text-accent-400" />
                <a href={`tel:${PHONE_TEL}`} dir="ltr" className="hover:text-accent-600 dark:hover:text-accent-400">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-500 dark:text-slate-400">
                <FaWhatsapp className="h-4 w-4 shrink-0 text-accent-600 dark:text-accent-400" />
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
              <li className="flex items-center gap-2.5 text-sm text-slate-500 dark:text-slate-400">
                <HiOutlineMapPin className="h-4 w-4 shrink-0 text-accent-600 dark:text-accent-400" />
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

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-primary-100 pt-6 text-xs text-slate-400 sm:flex-row dark:border-white/10">
          <p>
            © {new Date().getFullYear()} SAAZ IDEA — {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
