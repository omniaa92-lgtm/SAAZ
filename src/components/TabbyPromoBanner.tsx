import { useTranslation } from 'react-i18next'

export default function TabbyPromoBanner() {
  const { t, i18n } = useTranslation()
  const banner = i18n.language === 'ar' ? '/images/tabby-promo-banner-ar.webp' : '/images/tabby-promo-banner-en.webp'

  return (
    <section className="container-x pb-4">
      <img src={banner} alt={t('tabby.promoAlt')} className="w-full rounded-3xl shadow-sm" />
    </section>
  )
}
