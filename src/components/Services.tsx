import { useTranslation } from 'react-i18next'
import {
  HiOutlineSquares2X2,
  HiOutlineSun,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineHandRaised,
  HiOutlineHomeModern,
} from 'react-icons/hi2'
import ImagePlaceholder from './ImagePlaceholder'

const ICONS = [
  HiOutlineSquares2X2,
  HiOutlineSun,
  HiOutlineShieldCheck,
  HiOutlineHomeModern,
  HiOutlineSparkles,
  HiOutlineHandRaised,
]

interface ServiceItem {
  title: string
  desc: string
}

export default function Services() {
  const { t } = useTranslation()
  const list = t('services.list', { returnObjects: true }) as ServiceItem[]

  return (
    <section id="services" className="section-y bg-primary-50/40 dark:bg-primary-900/20">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t('services.eyebrow')}</span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{t('services.title')}</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">{t('services.subtitle')}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((item, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <div
                key={item.title}
                className="overflow-hidden rounded-2xl border border-primary-100/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-primary-900"
              >
                <ImagePlaceholder icon={Icon} variant={(i % 4) as 0 | 1 | 2 | 3} className="h-44 w-full" />
                <div className="p-6">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
