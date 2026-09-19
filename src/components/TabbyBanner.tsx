import { useTranslation } from 'react-i18next'
import { HiOutlineCreditCard } from 'react-icons/hi2'

/**
 * A generic installment-payment icon + wordmark badge standing in for Tabby's
 * real logo (not fetched — no network access in this environment). Swap the
 * <span>tabby</span> badge below for Tabby's official logo asset if you have one.
 */
export default function TabbyBanner() {
  const { t } = useTranslation()

  return (
    <section className="container-x pb-4">
      <div className="flex flex-col items-center gap-5 rounded-3xl bg-gradient-to-l from-[#FFE9DE] to-[#FBD9CE] p-6 text-center shadow-sm sm:flex-row sm:gap-6 sm:p-7 sm:text-start dark:from-[#2a1f22] dark:to-[#241a1d]">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#2B2560] shadow-sm dark:bg-white/10 dark:text-white">
          <HiOutlineCreditCard className="h-7 w-7" />
        </span>

        <div className="flex-1">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1 text-[11px] font-bold tracking-wide text-[#2B2560] uppercase dark:bg-white/10 dark:text-white">
            {t('tabby.badge')}
          </span>
          <h3 className="mt-2 text-xl font-extrabold text-[#2B2560] dark:text-white">{t('tabby.title')}</h3>
          <p className="mt-1 text-sm text-[#2B2560]/70 dark:text-slate-300">{t('tabby.subtitle')}</p>
        </div>

        <span className="rounded-xl bg-[#2B2560] px-4 py-2 text-lg font-bold tracking-tight text-white select-none">
          tabby
        </span>
      </div>
    </section>
  )
}
