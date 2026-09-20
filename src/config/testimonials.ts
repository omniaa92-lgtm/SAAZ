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
  {
    name: 'ABDULAZIZ AZ',
    text: 'من افضل انواع التلميع والتنجيد والنظافة وامانه وعمالة مبدعين بماتعنيه كلمة إبداع، شكراً لهم والله يبارك لهم.',
    rating: 5,
    timeAgo: 'منذ سنة',
  },
  {
    name: 'عماد اللحياني',
    text: 'مبسوط اني سويت عندهم لانه النتيجة كانت مرضية والجودة رائعة في مقابل السعر والشغل نظيف جدا 👍🏽',
    rating: 5,
    timeAgo: 'منذ 4 أشهر',
  },
  {
    name: 'Ayman Fahad',
    text: 'حابب أشكر خاص للأخ محمد العولقي على اخلاقه العاليه و الاهتمام و اصلاحه لجميع الملاحظات .. النتيجه ممتازه ما شاء الله شغل من أجمل ما يكون و ماهي آخر مره أتعامل مع المحل بإذن الله',
    rating: 5,
    timeAgo: 'منذ سنة',
  },
  {
    name: 'mohammed rahbini',
    text: 'خدمة ممتازة و جودة عالية و تعامل راقي ... انصح و بشدة في تسليم سيارتكم في إيدي امينه',
    rating: 5,
    timeAgo: 'منذ 7 أشهر',
  },
  {
    name: 'عوض سالم',
    text: 'افضل مركز عناية للسيارات في جده من تعاملهم الراقي واهتمام بالعملاء والشكر خاص للسيد سلطان ياخي مبدعين تسلم سيارتك وانت مطمئن خدمة ممتازة و جودة عالية و تعامل راقي ... انصح و بشدة في تسليم سيارتكم في إيدي امينه',
    rating: 5,
    timeAgo: 'منذ 5 أشهر',
  },
  {
    name: 'onlyme',
    text: 'مركز ساز ايديا اشكركم على شغلكم الممتاز المحترف صاحب المركز رجل خلوق ومتعاون ومهتم جداً ما شاء الله من الاتقان الي عندهم كنت اعتقد ان السياره مرشوشه بويه وهي طلعت ملبسه بي بي اف الله يبارك لهم',
    rating: 5,
    timeAgo: 'منذ شهر',
  },
  {
    name: 'Haitham Sayed',
    text: 'Honestly, top best experience, they take a very detailed care of the car, very professional and clean. They are honest, kind and hard working. Price wise, average and competitive and affordable. Trust your cars with them. And i advice to go with them.',
    rating: 5,
    timeAgo: '4 months ago',
  },
  {
    name: 'Thamer Alharbi',
    text: 'كل الشكر والتقدير على الشغل النظيف. حقيقه بعد التجربه العازل جوده عاليه جدا ... فعليا فرق معي كثير بالحراره ايضا درجه لون التظليل مميزه',
    rating: 5,
    timeAgo: 'منذ 6 أيام',
  },
  {
    name: 'Murad Shehata',
    text: 'ما شاء الله تبارك الله الشغل نظيف جداً والخدمة رراقية، و اكثر شي يميزهم الاهتمام بالتفاصيل الصغيرة. يعطيكم العافية',
    rating: 5,
    timeAgo: 'منذ شهر',
  },
  {
    name: 'Ali Khalifa',
    text: 'Excellent experience. Nice and professional services.',
    rating: 5,
    timeAgo: 'a year ago',
  },
  {
    name: 'Essa Alsapry',
    text: 'مره ممتاز',
    rating: 5,
    timeAgo: 'منذ سنتين',
  },
  {
    name: 'عبدالعزيز نصر',
    text: 'شغل جيد جدا',
    rating: 5,
    timeAgo: 'منذ سنة',
  },
  {
    name: 'Rose Yosef',
    text: 'المحل ممتاز و الاستاذ محمد راقي في التعامل وفاهم شغله وماقصرو شغلهم معانا نظيف',
    rating: 5,
    timeAgo: 'منذ سنة',
  },
  {
    name: 'محمد الجنيد',
    text: 'انصح بالتعامل معاهم يعطيك موعد تسليم ويشتغل شغل نظيف ماشاءالله يرزقهم الله من واسع فضله بحسن تعاملهم وخلاقهم',
    rating: 5,
    timeAgo: 'منذ 3 سنوات',
  },
  {
    name: 'Sara Hosawi',
    text: 'خدمه جدا ممتازه و تعامل اكثر من رائع صراحه',
    rating: 5,
    timeAgo: 'منذ سنتين',
  },
  {
    name: 'Ali Aghanmi',
    text: 'الله يعطيهم العافيه المحل الوحيد اللي قدر يشيل العازل الاول على البدي والصدام كان واصل لمرحله سيئه جدا وماقصرو شالوه بصراحه شغل احترافي انصح بالتعامل معاهم امانه ومصداقيه',
    rating: 5,
    timeAgo: 'منذ سنة',
  },
  {
    name: 'فيصل الشريف',
    text: 'شغلهم جبار وقصهم احترافي وأسعارهم ممتازة',
    rating: 5,
    timeAgo: 'منذ 8 أشهر',
  },
  {
    name: 'R S',
    text: 'حبيت المكان وشغلهم ربي يبارك لهم',
    rating: 5,
    timeAgo: 'منذ 5 أشهر',
  },
  {
    name: 'Mutasam ALMEHAYAWI',
    text: 'خدمة وتعامل راقي جدا انصح بيه وانت مغمض شكرا لكم من القلب بالتوفيق',
    rating: 5,
    timeAgo: 'منذ سنتين',
  },
  {
    name: 'فيصل الغامدي',
    text: 'ما شاء الله تبارك الله شغل مميز وجميل جداً الله يوفقكم يارب',
    rating: 5,
    timeAgo: 'منذ 7 أشهر',
  },
]
