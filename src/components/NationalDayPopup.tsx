import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiXMark } from 'react-icons/hi2'
import { FaWhatsapp, FaPhone } from 'react-icons/fa6'
import { PHONE_LOCAL, PHONE_TEL, WHATSAPP_URL } from '../config/contact'

const DISMISS_KEY = 'saaz-national-day-popup-dismissed'

export default function NationalDayPopup() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY)) return
    const timer = setTimeout(() => setOpen(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  const close = () => {
    setOpen(false)
    sessionStorage.setItem(DISMISS_KEY, '1')
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in"
      onClick={close}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md overflow-hidden rounded-3xl border border-accent-400/40 bg-primary-950 p-7 text-center shadow-2xl ring-1 ring-black/5 sm:p-8"
      >
        <button
          onClick={close}
          aria-label={t('nationalDay.close')}
          className="absolute top-4 end-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        >
          <HiXMark className="h-5 w-5" />
        </button>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-400/10 px-4 py-1.5 text-xs font-bold text-accent-400">
          {t('nationalDay.badge')}
        </span>

        <h3 className="mt-5 text-2xl font-extrabold text-white">{t('nationalDay.title')}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">{t('nationalDay.subtitle')}</p>

        <div className="mt-7 flex flex-col gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-sm font-bold text-primary-950 shadow-lg transition hover:bg-accent-400"
          >
            <FaPhone className="h-3.5 w-3.5" />
            {t('nationalDay.callNow')}: {PHONE_LOCAL}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-accent-400 hover:text-accent-400"
          >
            <FaWhatsapp className="h-4 w-4" />
            {t('nationalDay.whatsapp')}
          </a>
        </div>

        <p className="mt-5 text-xs text-slate-500">{t('nationalDay.note')}</p>
      </div>
    </div>
  )
}
