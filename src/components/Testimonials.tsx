import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiStar } from 'react-icons/hi'
import { HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineMapPin, HiOutlineChatBubbleLeftRight } from 'react-icons/hi2'
import { TESTIMONIALS } from '../config/testimonials'
import { GOOGLE_MAPS_URL } from '../config/location'

export default function Testimonials() {
  const { t } = useTranslation()
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const scrollToIndex = (index: number) => {
    const track = trackRef.current
    if (!track) return
    const clamped = (index + TESTIMONIALS.length) % TESTIMONIALS.length
    const card = track.children[clamped] as HTMLElement | undefined
    card?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
    setActive(clamped)
  }

  return (
    <section id="testimonials" className="section-y bg-gradient-to-br from-accent-400 to-accent-600">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-primary-950 sm:text-4xl">{t('testimonials.title')}</h2>
          <p className="mt-3 text-primary-800/80">{t('testimonials.subtitle')}</p>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-950 px-5 py-2.5 text-sm font-bold text-accent-400 shadow-lg transition hover:bg-primary-900"
          >
            <HiOutlineMapPin className="h-4 w-4" />
            {t('testimonials.viewOnGoogle')}
          </a>
        </div>

        <div className="relative mt-12">
          <div
            ref={trackRef}
            className="scrollbar-none flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
          >
            {TESTIMONIALS.map((rev, i) => (
              <article
                key={rev.name + i}
                className="w-[85%] shrink-0 snap-start rounded-2xl bg-primary-950 p-6 text-start shadow-xl shadow-primary-950/20 sm:w-[46%] lg:w-[23%]"
              >
                <p className="line-clamp-6 text-sm leading-relaxed text-slate-200">“{rev.text}”</p>
                <div className="mt-5 flex items-center gap-3">
                  {rev.avatarUrl ? (
                    <img src={rev.avatarUrl} alt={rev.name} className="h-9 w-9 rounded-full object-cover" />
                  ) : (
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-400/15 text-sm font-bold text-accent-400">
                      {rev.name.trim().charAt(0)}
                    </span>
                  )}
                  <div>
                    <p className="text-sm font-bold text-accent-400">{rev.name}</p>
                    <p className="text-xs text-slate-400">{rev.timeAgo}</p>
                  </div>
                </div>
                <div className="mt-3 flex gap-0.5 text-accent-400">
                  {Array.from({ length: rev.rating }).map((_, s) => (
                    <HiStar key={s} className="h-4 w-4" />
                  ))}
                </div>
              </article>
            ))}
          </div>

          <button
            aria-label="prev"
            onClick={() => scrollToIndex(active - 1)}
            className="absolute top-1/2 -start-3 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary-950 text-accent-400 shadow-lg sm:flex"
          >
            <HiOutlineChevronLeft className="h-5 w-5 rtl:rotate-180" />
          </button>
          <button
            aria-label="next"
            onClick={() => scrollToIndex(active + 1)}
            className="absolute top-1/2 -end-3 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary-950 text-accent-400 shadow-lg sm:flex"
          >
            <HiOutlineChevronRight className="h-5 w-5 rtl:rotate-180" />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              aria-label={`go to ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all ${
                active === i ? 'w-6 bg-primary-950' : 'w-2 bg-primary-950/30'
              }`}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary-950 px-5 py-2.5 text-sm font-bold text-accent-400 shadow-lg transition hover:bg-primary-900"
          >
            <HiOutlineChatBubbleLeftRight className="h-4 w-4" />
            {t('testimonials.writeReview')}
          </a>
        </div>
      </div>
    </section>
  )
}
