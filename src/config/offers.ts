export interface OfferImage {
  src: string
  alt: string
}

/**
 * Ready-made promo posters (all text/pricing baked into the image itself).
 * Add/remove/reorder entries here to update the Offers section —
 * drop new poster files into public/images/offers/.
 */
export const OFFER_IMAGES: OfferImage[] = [
  { src: '/images/offers/offer-1.jpg', alt: 'باقة الحماية — حماية PPF كاملة مطفي + عازل حراري' },
  { src: '/images/offers/offer-2.jpg', alt: 'عرض العازل الحراري' },
  { src: '/images/offers/offer-3.jpg', alt: 'باقة الحماية — حماية PPF لمعة + عازل حراري' },
]
