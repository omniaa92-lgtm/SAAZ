export interface Testimonial {
  name: string
  text: string
  rating: number
  timeAgo: string
  /** Optional reviewer photo — only set it if one is actually available. */
  avatarUrl?: string
}

/**
 * Real public Google Maps reviews for SAAZ IDEA (transcribed from the
 * client's screenshot). Add more / replace with fresh ones any time by
 * editing this array — see README for how to wire up live Google Places
 * reviews instead of this static list.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'مسلم السبيعي',
    text: 'ماشاءالله والله شغلهم ممتاز انا مسوي سيارتي من اول ماطلعتها من الوكاله والحمدالله مافيه اي ملاحظه. والله يشهد علي ان صاحب المحل لما العمال خلصوا من السيارة هو بنفسه قام ويشيك على الشغل حقهم',
    rating: 5,
    timeAgo: 'منذ شهرين',
  },
  {
    name: 'Jamal Hamad',
    text: 'اشكر مركز ساز ايديا على عملهم الاحترافي عملت عندهم عملت حماية للسيارة مع كذا لمسة جمالية شكراً لكم على احترافية العمل',
    rating: 5,
    timeAgo: 'منذ 3 أسابيع',
  },
  {
    name: 'Sami Khalil',
    text: 'احب اشكرهم على شغلهم الجبار عملت عندهم حماية PPF على كامل السيارة وانصح اي احد يسوي سيارته عندهم شكراً بحجم السماء',
    rating: 5,
    timeAgo: 'منذ أسبوعين',
  },
  {
    name: 'SM MADHI',
    text: 'ماشاء الله تبارك الله صراحة تمنيت اني تعاملت معاكم من زمان عجبني الاهتمام بالتفاصيل الصغيرة بالسيارة ونوعية المواد صراحة عمل رائع ورب يوفقك وييارك فيكم',
    rating: 5,
    timeAgo: 'منذ شهر',
  },
]
