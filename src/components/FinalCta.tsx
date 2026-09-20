import { useTranslation } from 'react-i18next'
import { HiOutlineCalendar } from 'react-icons/hi2'
import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_URL } from '../config/contact'

export default function FinalCta() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden bg-primary-950 py-16 sm:py-20">
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.08]"
        viewBox="0 0 800 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 100 Q 200 20 400 100 T 800 100"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M0 140 Q 200 60 400 140 T 800 140"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
      </svg>

      <div className="container-x relative text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{t('finalCta.title')}</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-300">{t('finalCta.subtitle')}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-primary-950 shadow-xl transition hover:bg-accent-400 active:scale-[0.98]"
          >
            <HiOutlineCalendar className="h-4 w-4" />
            {t('finalCta.button')}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-7 py-3 text-sm font-bold text-white transition hover:border-accent-400 hover:text-accent-400 active:scale-[0.98]"
          >
            <FaWhatsapp className="h-4 w-4" />
            {t('finalCta.whatsapp')}
          </a>
        </div>
      </div>
    </section>
  )
}
