import { useTranslation } from 'react-i18next'
import { HiOutlineCheckCircle, HiOutlineUsers } from 'react-icons/hi2'
import ImagePlaceholder from './ImagePlaceholder'

interface Point {
  title: string
  desc: string
}

export default function About() {
  const { t } = useTranslation()
  const points = t('about.points', { returnObjects: true }) as Point[]

  return (
    <section id="about" className="section-y">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <ImagePlaceholder icon={HiOutlineUsers} variant={2} className="aspect-square rounded-2xl" />
          <ImagePlaceholder icon={HiOutlineUsers} variant={0} className="mt-8 aspect-square rounded-2xl" />
        </div>

        <div>
          <span className="eyebrow">{t('about.eyebrow')}</span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{t('about.title')}</h2>
          <p className="mt-5 text-slate-600 dark:text-slate-400">{t('about.description')}</p>

          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p.title} className="flex items-start gap-3">
                <HiOutlineCheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-primary-600 dark:text-primary-400" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{p.title}</p>
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
