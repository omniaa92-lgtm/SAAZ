import { useTranslation } from 'react-i18next'
import { HiOutlineCreditCard } from 'react-icons/hi2'

/**
 * Tabby's real brand green (~#1DCD7E, sampled from the client's own promo
 * poster) with a recreated "tabby" wordmark badge standing in for their
 * official logo file (no network access in this environment to fetch it —
 * swap the <span>tabby</span> badge below for the real asset if you have one).
 */
export default function TabbyBanner() {
  const { t } = useTranslation()

  return (
    <section className="container-x pb-4">
      <div className="flex flex-col items-center gap-5 rounded-3xl bg-gradient-to-l from-[#EAFBF3] to-[#D7F6E8] p-6 text-center shadow-sm sm:flex-row sm:gap-6 sm:p-7 sm:text-start dark:from-[#0f2a20] dark:to-[#0b241b]">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#0B8F58] shadow-sm dark:bg-white/10 dark:text-[#1DCD7E]">
          <HiOutlineCreditCard className="h-7 w-7" />
        </span>

        <div className="flex-1">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1 text-[11px] font-bold tracking-wide text-[#0B8F58] uppercase dark:bg-white/10 dark:text-[#1DCD7E]">
            {t('tabby.badge')}
          </span>
          <h3 className="mt-2 text-xl font-extrabold text-primary-950 dark:text-white">{t('tabby.title')}</h3>
          <p className="mt-1 text-sm text-primary-900/70 dark:text-slate-300">{t('tabby.subtitle')}</p>
        </div>

        <span className="rounded-xl bg-[#1DCD7E] px-4 py-2 text-lg font-bold tracking-tight text-black select-none">
          tabby
        </span>
      </div>
    </section>
  )
}
