import { useTranslation } from 'react-i18next'
import {
  HiOutlineCalendarDays,
  HiOutlinePaintBrush,
  HiOutlineMegaphone,
  HiOutlineBuildingStorefront,
  HiOutlineCamera,
  HiOutlineDevicePhoneMobile,
} from 'react-icons/hi2'

const ICONS = [
  HiOutlineCalendarDays,
  HiOutlinePaintBrush,
  HiOutlineMegaphone,
  HiOutlineBuildingStorefront,
  HiOutlineCamera,
  HiOutlineDevicePhoneMobile,
]

interface ServiceItem {
  title: string
  desc: string
}

export default function Services() {
  const { t } = useTranslation()
  const list = t('services.list', { returnObjects: true }) as ServiceItem[]

  return (
    <section id="services" className="section-y bg-slate-50 dark:bg-slate-900/40">
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
              <div key={item.title} className="card p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
