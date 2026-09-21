import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiOutlineSparkles } from 'react-icons/hi'
import { HiOutlineShieldCheck, HiOutlineSquares2X2 } from 'react-icons/hi2'
import { WHATSAPP_URL } from '../config/contact'

// Counts up from 0 to `target` once the number scrolls into view, so the
// stats feel alive on first load instead of just appearing as static text.
function CountUpStat({ target, prefix = '' }: { target: number; prefix?: string }) {
  const ref = useRef<HTMLElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let started = false
    const duration = 1500

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return
        started = true
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(Math.round(eased * target))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <dd ref={ref} className="text-2xl font-extrabold text-accent-600 dark:text-accent-400">
      {prefix}
      {value}
    </dd>
  )
}

function HeroVisual({ className = '' }: { className?: string }) {
  const { t } = useTranslation()
  return (
    <div className={`animate-fade-in relative ${className}`}>
      <img
        src="/images/hero-detailing.webp"
        alt="فريق ساز آيديا أثناء تلميع سيارة"
        className="w-full drop-shadow-[0_35px_35px_rgba(12,13,40,0.35)]"
      />
      <div
        className="animate-float absolute -bottom-2 -start-2 flex items-center gap-2 rounded-2xl border border-primary-100 bg-white p-2 shadow-xl sm:-start-6 sm:gap-3 sm:p-4 dark:border-white/10 dark:bg-primary-900"
        style={{ animationDelay: '0.3s' }}
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-400/15 text-accent-600 sm:h-11 sm:w-11 dark:text-accent-400">
          <HiOutlineShieldCheck className="h-4 w-4 sm:h-6 sm:w-6" />
        </span>
        <p className="max-w-[6rem] text-[11px] font-semibold text-primary-900 sm:max-w-none sm:text-xs dark:text-slate-100">
          {t('services.list.0.title')}
        </p>
      </div>
      <div className="animate-float absolute -top-3 -end-2 flex items-center gap-2 rounded-2xl border border-primary-100 bg-white p-1.5 shadow-xl sm:-top-6 sm:-end-4 sm:gap-3 sm:p-3 dark:border-white/10 dark:bg-primary-900">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-400/15 text-accent-600 sm:h-10 sm:w-10 dark:text-accent-400">
          <HiOutlineSquares2X2 className="h-4 w-4 sm:h-5 sm:w-5" />
        </span>
        <span className="max-w-[6rem] pe-1 text-[11px] font-semibold text-primary-900 sm:max-w-none sm:text-xs dark:text-slate-100">
          {t('services.list.1.title')}
        </span>
      </div>
    </div>
  )
}

export default function Hero() {
  const { t } = useTranslation()
  const stats = t('hero.stats', { returnObjects: true }) as Record<string, string>

  const statValues = [
    { target: 200, label: stats.projects },
    { target: 200, label: stats.clients },
    { target: 4, label: stats.years },
    { target: 5, label: stats.team },
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
          <HeroVisual className="mt-8 lg:hidden" />
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600 lg:mx-0 dark:text-slate-400">
            {t('hero.subtitle')}
          </p>
          <div className="mt-8 flex justify-center gap-3 sm:hidden">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1">
              {t('hero.ctaPrimary')}
            </a>
            <a href="#booking" className="btn-outline flex-1">
              {t('finalCta.button')}
            </a>
          </div>
          <div className="mt-8 hidden justify-center gap-3 sm:flex lg:justify-start">
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
                <CountUpStat target={s.target} prefix="+" />
                <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{s.label}</div>
              </div>
            ))}
          </dl>
        </div>

        <HeroVisual className="hidden lg:-mx-10 lg:block lg:w-[calc(100%+5rem)]" />
      </div>
    </section>
  )
}
