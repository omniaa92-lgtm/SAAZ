import { useTranslation } from 'react-i18next'
import { HiOutlineTag, HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2'
import ImagePlaceholder from './ImagePlaceholder'

interface OfferItem {
  badge: string
  title: string
  desc: string
  cta: string
}

export default function Offers() {
  const { t, i18n } = useTranslation()
  const items = t('offers.items', { returnObjects: true }) as OfferItem[]
  const Arrow = i18n.language === 'ar' ? HiOutlineArrowLongLeft : HiOutlineArrowLongRight

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

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((offer, i) => (
            <div key={offer.title} className="card flex flex-col overflow-hidden">
              <div className="relative">
                <ImagePlaceholder icon={HiOutlineTag} variant={(i % 4) as 0 | 1 | 2 | 3} className="h-44 w-full" />
                <span className="absolute top-4 start-4 rounded-full bg-accent-500 px-3 py-1 text-xs font-bold text-slate-900 shadow-md">
                  {offer.badge}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold">{offer.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-500 dark:text-slate-400">{offer.desc}</p>
                <a
                  href="#booking"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary-600 transition group-hover:gap-3 dark:text-primary-400"
                >
                  {offer.cta}
                  <Arrow className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-400 dark:text-slate-500">{t('offers.note')}</p>
      </div>
    </section>
  )
}
