import { useTranslation } from 'react-i18next'
import { HiOutlineCheckCircle, HiOutlineShieldCheck } from 'react-icons/hi2'

interface Point {
  title: string
  desc: string
}

export default function About() {
  const { t } = useTranslation()
  const points = t('about.points', { returnObjects: true }) as Point[]
  const paragraphs = t('about.descriptionParagraphs', { returnObjects: true }) as string[]

  return (
    <section id="about" className="section-y">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <img
            src="/images/about-showroom.jpg"
            alt="معرض ساز آيديا"
            className="aspect-square w-full rounded-3xl object-cover shadow-xl shadow-primary-950/15 ring-1 ring-accent-400/30"
          />
          <div className="absolute -bottom-6 -end-6 hidden items-center gap-3 rounded-2xl border border-primary-100 bg-white p-4 shadow-xl sm:flex dark:border-white/10 dark:bg-primary-900">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-400/15 text-accent-600 dark:text-accent-400">
              <HiOutlineShieldCheck className="h-6 w-6" />
            </span>
            <div>
              <p className="text-sm font-extrabold text-primary-900 dark:text-white">10+</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t('hero.stats.team')}</p>
            </div>
          </div>
        </div>

        <div>
          <span className="eyebrow">{t('about.eyebrow')}</span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{t('about.title')}</h2>
          <div className="mt-5 space-y-3 text-slate-600 dark:text-slate-400">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p.title} className="flex items-start gap-3">
                <HiOutlineCheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-accent-600 dark:text-accent-400" />
                <div>
                  <p className="font-semibold text-primary-950 dark:text-white">{p.title}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
