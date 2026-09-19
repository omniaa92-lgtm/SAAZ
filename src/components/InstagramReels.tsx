import { useTranslation } from 'react-i18next'
import { FaInstagram } from 'react-icons/fa'
import { HiOutlineFilm } from 'react-icons/hi2'
import { INSTAGRAM_REELS, INSTAGRAM_PROFILE_URL } from '../config/instagramReels'
import { useInstagramEmbed } from '../hooks/useInstagramEmbed'

export default function InstagramReels() {
  const { t } = useTranslation()
  useInstagramEmbed([INSTAGRAM_REELS.length])

  return (
    <section id="reels" className="section-y bg-slate-50 dark:bg-slate-900/40">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <FaInstagram className="h-4 w-4" />
            {t('reels.eyebrow')}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{t('reels.title')}</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">{t('reels.subtitle')}</p>
        </div>

        {INSTAGRAM_REELS.length > 0 ? (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INSTAGRAM_REELS.map((url) => (
              <div key={url} className="overflow-hidden rounded-2xl shadow-sm">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={url}
                  data-instgrm-version="14"
                  style={{ width: '100%', margin: 0 }}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl border-2 border-dashed border-slate-200 py-16 text-center dark:border-slate-800">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400">
              <HiOutlineFilm className="h-7 w-7" />
            </span>
            <p className="text-sm text-slate-500 dark:text-slate-400">{t('reels.comingSoon')}</p>
          </div>
        )}

        <div className="mt-10 text-center">
          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FaInstagram className="h-4 w-4" />
            {t('reels.followCta')}
          </a>
        </div>
      </div>
    </section>
  )
}
