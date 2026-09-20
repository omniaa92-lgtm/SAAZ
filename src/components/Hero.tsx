import { useTranslation } from 'react-i18next'
import { HiOutlineSparkles } from 'react-icons/hi'
import { HiOutlineShieldCheck, HiOutlineSquares2X2 } from 'react-icons/hi2'

export default function Hero() {
  const { t } = useTranslation()
  const stats = t('hero.stats', { returnObjects: true }) as Record<string, string>

  const statValues = [
    { value: '+1000', label: stats.projects },
    { value: '+500', label: stats.clients },
    { value: '+8', label: stats.years },
    { value: '10', label: stats.team },
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
            <a href="#services" className="btn-outline">
              {t('hero.ctaSecondary')}
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-primary-100 pt-8 sm:grid-cols-4 dark:border-white/10">
            {statValues.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-extrabold text-accent-600 dark:text-accent-400">{s.value}</dd>
                <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{s.label}</div>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-fade-in relative hidden lg:block">
          <img
            src="/images/hero-detailing.webp"
            alt="فريق ساز آيديا أثناء تلميع سيارة"
            className="aspect-4/5 w-full rounded-3xl object-cover shadow-2xl shadow-primary-950/25 ring-1 ring-accent-400/30"
          />
          <div className="absolute -bottom-6 -start-6 hidden items-center gap-3 rounded-2xl border border-primary-100 bg-white p-4 shadow-xl sm:flex dark:border-white/10 dark:bg-primary-900">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-400/15 text-accent-600 dark:text-accent-400">
              <HiOutlineShieldCheck className="h-6 w-6" />
            </span>
            <p className="text-xs font-semibold text-primary-900 dark:text-slate-100">{t('services.list.2.title')}</p>
          </div>
          <div className="absolute top-4 -end-4 hidden rounded-2xl border border-primary-100 bg-white p-3 shadow-xl sm:flex sm:items-center sm:gap-3 dark:border-white/10 dark:bg-primary-900">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-400/15 text-accent-600 dark:text-accent-400">
              <HiOutlineSquares2X2 className="h-5 w-5" />
            </span>
            <span className="pe-1 text-xs font-semibold text-primary-900 dark:text-slate-100">
              {t('services.list.0.title')}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
