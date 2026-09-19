import { useTranslation } from 'react-i18next'
import { HiOutlineSparkles } from 'react-icons/hi'
import { HiOutlineCalendarDays, HiOutlinePaintBrush, HiOutlineMegaphone } from 'react-icons/hi2'
import ImagePlaceholder from './ImagePlaceholder'

export default function Hero() {
  const { t } = useTranslation()
  const stats = t('hero.stats', { returnObjects: true }) as Record<string, string>

  const statValues = [
    { value: '+250', label: stats.projects },
    { value: '+120', label: stats.clients },
    { value: '+8', label: stats.years },
    { value: '+20', label: stats.team },
  ]

  return (
    <section id="home" className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 start-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary-200/40 blur-3xl dark:bg-primary-900/30" />
        <div className="absolute top-40 end-0 h-72 w-72 rounded-full bg-accent-300/30 blur-3xl dark:bg-accent-500/10" />
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div className="animate-fade-up text-center lg:text-start">
          <span className="eyebrow">
            <HiOutlineSparkles className="h-4 w-4" />
            {t('hero.eyebrow')}
          </span>
          <h1 className="mt-5 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {t('hero.title')}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600 lg:mx-0 dark:text-slate-400">
            {t('hero.subtitle')}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a href="#booking" className="btn-primary">
              {t('hero.ctaPrimary')}
            </a>
            <a href="#portfolio" className="btn-outline">
              {t('hero.ctaSecondary')}
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-slate-100 pt-8 sm:grid-cols-4 dark:border-slate-800">
            {statValues.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-extrabold text-primary-600 dark:text-primary-400">{s.value}</dd>
                <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{s.label}</div>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-fade-in relative">
          <ImagePlaceholder
            icon={HiOutlineSparkles}
            variant={0}
            className="aspect-4/5 w-full rounded-3xl shadow-2xl shadow-primary-900/20"
          />
          <div className="absolute -bottom-6 -start-6 hidden w-48 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:block dark:border-slate-800 dark:bg-slate-900">
            <ImagePlaceholder icon={HiOutlineCalendarDays} variant={1} className="mb-3 h-20 w-full rounded-lg" />
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">{t('services.list.0.title')}</p>
          </div>
          <div className="absolute -top-6 -end-4 hidden rounded-2xl border border-slate-100 bg-white p-3 shadow-xl sm:flex sm:items-center sm:gap-3 dark:border-slate-800 dark:bg-slate-900">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-400/20 text-accent-500">
              <HiOutlineMegaphone className="h-5 w-5" />
            </span>
            <span className="pe-1 text-xs font-semibold text-slate-700 dark:text-slate-200">
              {t('services.list.2.title')}
            </span>
          </div>
          <div className="absolute top-1/2 -end-8 hidden -translate-y-1/2 items-center gap-2 rounded-full border border-slate-100 bg-white px-3 py-2 shadow-xl md:flex dark:border-slate-800 dark:bg-slate-900">
            <HiOutlinePaintBrush className="h-4 w-4 text-primary-600 dark:text-primary-400" />
          </div>
        </div>
      </div>
    </section>
  )
}
