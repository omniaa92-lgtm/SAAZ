import { useTranslation } from 'react-i18next'

export default function TabbyPromoBanner() {
  const { t } = useTranslation()

  return (
    <section className="container-x pb-4">
      <img
        src="/images/tabby-promo-banner.webp"
        alt={t('tabby.promoAlt')}
        className="w-full rounded-3xl shadow-sm"
      />
    </section>
  )
}
