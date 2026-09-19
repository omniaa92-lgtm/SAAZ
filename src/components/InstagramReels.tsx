import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaInstagram } from 'react-icons/fa'
import { HiOutlineFilm } from 'react-icons/hi2'
import { INSTAGRAM_REELS, INSTAGRAM_PROFILE_URL } from '../config/instagramReels'
import { useInstagramEmbed } from '../hooks/useInstagramEmbed'

// Constant scroll speed (px/s) so the marquee stays a steady, medium pace
// no matter how many reels are added — duration is derived from content width.
const SCROLL_SPEED_PX_PER_SEC = 70

// Instagram's embed needs ~328px of real width to render cleanly (its own
// template ships with min-width:326px) — narrower than that and it clips
// itself, so cards stay at their natural size (no shrinking/zooming).
const EMBED_NATURAL_WIDTH = 328

export default function InstagramReels() {
  const { t } = useTranslation()
  useInstagramEmbed([INSTAGRAM_REELS.length])

  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [duration, setDuration] = useState(60)
  const [paused, setPaused] = useState(false)

  // Duplicate the list so the marquee loops seamlessly (translateX(-50%) = exactly one set).
  const track = INSTAGRAM_REELS.length > 0 ? [...INSTAGRAM_REELS, ...INSTAGRAM_REELS] : []

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    const updateDuration = () => {
      const oneSetWidth = el.scrollWidth / 2
      if (oneSetWidth > 0) setDuration(oneSetWidth / SCROLL_SPEED_PX_PER_SEC)
    }

    updateDuration()
    window.addEventListener('resize', updateDuration)
    return () => window.removeEventListener('resize', updateDuration)
  }, [track.length])

  // Resume the marquee once the section scrolls out of view, so a tap that
  // paused it (e.g. to watch a reel) doesn't leave it stuck forever.
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) setPaused(false)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="reels"
      className="section-y overflow-hidden bg-primary-50/40 dark:bg-primary-900/20"
    >
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <FaInstagram className="h-4 w-4" />
            {t('reels.eyebrow')}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{t('reels.title')}</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">{t('reels.subtitle')}</p>
        </div>
      </div>

      {track.length > 0 ? (
        <div
          dir="ltr"
          className="relative mt-14 w-full"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          }}
        >
          <div
            ref={trackRef}
            className="animate-marquee flex w-max gap-4"
            style={{ animationDuration: `${duration}s`, animationPlayState: paused ? 'paused' : 'running' }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onPointerDown={() => setPaused(true)}
          >
            {track.map((url, i) => (
              <div
                key={url + i}
                className="shrink-0 overflow-hidden rounded-2xl shadow-lg shadow-primary-950/10"
                style={{ width: EMBED_NATURAL_WIDTH }}
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={url}
                  data-instgrm-version="14"
                  style={{ width: `${EMBED_NATURAL_WIDTH}px`, margin: 0 }}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container-x">
          <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl border-2 border-dashed border-primary-200 py-16 text-center dark:border-white/15">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-400/15 text-accent-600 dark:text-accent-400">
              <HiOutlineFilm className="h-7 w-7" />
            </span>
            <p className="text-sm text-slate-500 dark:text-slate-400">{t('reels.comingSoon')}</p>
          </div>
        </div>
      )}

      <div className="container-x">
        <div className="mt-10 text-center">
          <a href={INSTAGRAM_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <FaInstagram className="h-4 w-4" />
            {t('reels.followCta')}
          </a>
        </div>
      </div>
    </section>
  )
}
