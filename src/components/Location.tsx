import { useTranslation } from 'react-i18next'
import { HiOutlineMapPin } from 'react-icons/hi2'
import { GOOGLE_MAPS_URL, GOOGLE_MAPS_EMBED_SRC } from '../config/location'

export default function Location() {
  const { t } = useTranslation()

  return (
    <section id="location" className="section-y">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <HiOutlineMapPin className="h-4 w-4" />
            {t('nav.location')}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{t('location.title')}</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">{t('location.subtitle')}</p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl shadow-xl ring-1 ring-accent-400/30">
          <iframe
            title="SAAZ IDEA — Jeddah"
            src={GOOGLE_MAPS_EMBED_SRC}
            width="100%"
            height="420"
            style={{ border: 0, display: 'block' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-6 text-center">
          <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <HiOutlineMapPin className="h-4 w-4" />
            {t('location.cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
