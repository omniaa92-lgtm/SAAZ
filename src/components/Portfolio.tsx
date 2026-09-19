import { useTranslation } from 'react-i18next'
import {
  HiOutlineCalendarDays,
  HiOutlineBuildingStorefront,
  HiOutlinePaintBrush,
  HiOutlineMegaphone,
} from 'react-icons/hi2'
import ImagePlaceholder from './ImagePlaceholder'

const ITEMS = [
  { icon: HiOutlineCalendarDays, category: 'event', variant: 0 },
  { icon: HiOutlineBuildingStorefront, category: 'exhibition', variant: 1 },
  { icon: HiOutlinePaintBrush, category: 'branding', variant: 2 },
  { icon: HiOutlineMegaphone, category: 'campaign', variant: 3 },
  { icon: HiOutlineCalendarDays, category: 'event', variant: 2 },
  { icon: HiOutlineBuildingStorefront, category: 'exhibition', variant: 0 },
] as const

export default function Portfolio() {
  const { t } = useTranslation()

  return (
    <section id="portfolio" className="section-y">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t('portfolio.eyebrow')}</span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{t('portfolio.title')}</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">{t('portfolio.subtitle')}</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl">
              <ImagePlaceholder
                icon={item.icon}
                variant={item.variant}
                className="aspect-4/3 w-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-800">
                  {t(`portfolio.categories.${item.category}`)}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#reels" className="btn-outline">
            {t('portfolio.viewMore')}
          </a>
        </div>
      </div>
    </section>
  )
}
