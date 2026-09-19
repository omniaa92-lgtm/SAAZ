import { useTranslation } from 'react-i18next'
import {
  HiOutlineAcademicCap,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineMagnifyingGlassCircle,
} from 'react-icons/hi2'

const ICONS = [HiOutlineAcademicCap, HiOutlineSparkles, HiOutlineShieldCheck, HiOutlineMagnifyingGlassCircle]

interface Point {
  title: string
  desc: string
}

export default function WhyUs() {
  const { t } = useTranslation()
  const points = t('whyUs.points', { returnObjects: true }) as Point[]

  return (
    <section id="whyUs" className="section-y bg-gradient-to-b from-primary-950 to-primary-900 text-slate-300">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-400/10 px-4 py-1.5 text-xs font-bold tracking-wide text-accent-400 uppercase">
            {t('whyUs.eyebrow')}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">{t('whyUs.title')}</h2>
          <p className="mt-4 text-slate-400">{t('whyUs.subtitle')}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <div
                key={p.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/50"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent-400/10 text-accent-400">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
