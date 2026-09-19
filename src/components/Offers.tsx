import { useTranslation } from 'react-i18next'
import { HiOutlineTag } from 'react-icons/hi2'
import { OFFER_IMAGES } from '../config/offers'

export default function Offers() {
  const { t } = useTranslation()

  return (
    <section id="offers" className="section-y">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow bg-accent-400/15 text-accent-600 dark:text-accent-400">
            <HiOutlineTag className="h-4 w-4" />
            {t('offers.eyebrow')}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{t('offers.title')}</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">{t('offers.subtitle')}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OFFER_IMAGES.map((offer) => (
            <a
              key={offer.src}
              href="#booking"
              className="block overflow-hidden rounded-2xl shadow-sm ring-1 ring-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:ring-white/10"
            >
              <img src={offer.src} alt={offer.alt} className="aspect-4/5 w-full object-cover" />
            </a>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-400 dark:text-slate-500">{t('offers.note')}</p>
      </div>
    </section>
  )
}
