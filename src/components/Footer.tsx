import { useTranslation } from 'react-i18next'
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin } from 'react-icons/hi2'
import { FaInstagram, FaTwitter, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { INSTAGRAM_PROFILE_URL } from '../config/instagramReels'

const NAV_KEYS = ['home', 'about', 'services', 'offers', 'portfolio', 'reels', 'booking'] as const

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-slate-100 bg-slate-50 pt-16 pb-8 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="container-x">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-base font-extrabold text-white">
                S
              </span>
              <span className="text-base font-extrabold text-slate-900 dark:text-white">
                SAAZ <span className="text-primary-600 dark:text-primary-400">IDEA</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{t('footer.about')}</p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: FaInstagram, href: INSTAGRAM_PROFILE_URL },
                { Icon: FaTwitter, href: 'https://twitter.com/' },
                { Icon: FaTiktok, href: 'https://www.tiktok.com/' },
                { Icon: FaWhatsapp, href: 'https://wa.me/966' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-primary-400 hover:text-primary-600 dark:border-slate-700 dark:text-slate-400 dark:hover:text-primary-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t('footer.quickLinks')}</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_KEYS.map((key) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    className="text-sm text-slate-500 transition hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400"
                  >
                    {t(`nav.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-2">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t('footer.contact')}</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-slate-500 dark:text-slate-400">
                <HiOutlineEnvelope className="h-4 w-4 shrink-0 text-primary-600 dark:text-primary-400" />
                <a href={`mailto:${t('footer.email')}`} className="hover:text-primary-600 dark:hover:text-primary-400">
                  {t('footer.email')}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-500 dark:text-slate-400">
                <HiOutlinePhone className="h-4 w-4 shrink-0 text-primary-600 dark:text-primary-400" />
                <span dir="ltr">{t('footer.phone')}</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-500 dark:text-slate-400">
                <HiOutlineMapPin className="h-4 w-4 shrink-0 text-primary-600 dark:text-primary-400" />
                {t('footer.location')}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-400 sm:flex-row dark:border-slate-800">
          <p>
            © {new Date().getFullYear()} SAAZ IDEA — {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
