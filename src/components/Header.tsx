import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { TFunction } from 'i18next'
import { HiOutlineMenu, HiOutlineX, HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'
import { WHATSAPP_URL } from '../config/contact'
import Logo from './Logo'

const NAV_KEYS = ['home', 'about', 'services', 'offers', 'whyUs', 'testimonials'] as const

function NavLinks({ t, onClick }: { t: TFunction; onClick?: () => void }) {
  return (
    <>
      {NAV_KEYS.map((key) => (
        <a
          key={key}
          href={`#${key}`}
          onClick={onClick}
          className="text-sm font-medium text-slate-600 transition-colors hover:text-accent-600 dark:text-slate-300 dark:hover:text-accent-400"
        >
          {t(`nav.${key}`)}
        </a>
      ))}
    </>
  )
}

export default function Header() {
  const { t, i18n } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const switchLang = () => {
    const next = i18n.language === 'ar' ? 'en' : 'ar'
    i18n.changeLanguage(next)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-primary-100 bg-white/85 backdrop-blur-lg dark:border-white/10 dark:bg-primary-950/90'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between py-3">
        <a href="#home">
          <Logo className="h-24" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          <NavLinks t={t} />
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={switchLang}
            className="rounded-full border border-primary-200 px-3.5 py-1.5 text-xs font-semibold text-primary-700 transition hover:border-accent-500 hover:text-accent-700 dark:border-white/15 dark:text-slate-300 dark:hover:border-accent-400 dark:hover:text-accent-400"
          >
            {i18n.language === 'ar' ? t('common.switchToEnglish') : t('common.switchToArabic')}
          </button>
          <button
            onClick={toggleTheme}
            aria-label={t('common.toggleTheme')}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-200 text-primary-700 transition hover:border-accent-500 hover:text-accent-700 dark:border-white/15 dark:text-slate-300 dark:hover:border-accent-400 dark:hover:text-accent-400"
          >
            {theme === 'dark' ? <HiOutlineSun className="h-5 w-5" /> : <HiOutlineMoon className="h-5 w-5" />}
          </button>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {t('nav.booking')}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label={t('common.toggleTheme')}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-200 text-primary-700 dark:border-white/15 dark:text-slate-300"
          >
            {theme === 'dark' ? <HiOutlineSun className="h-5 w-5" /> : <HiOutlineMoon className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t('common.closeMenu') : t('common.openMenu')}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-200 text-primary-700 dark:border-white/15 dark:text-slate-300"
          >
            {open ? <HiOutlineX className="h-5 w-5" /> : <HiOutlineMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-primary-100 bg-white px-5 pt-2 pb-6 lg:hidden dark:border-white/10 dark:bg-primary-950">
          <nav className="flex flex-col gap-4 py-3">
            <NavLinks t={t} onClick={() => setOpen(false)} />
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={switchLang}
              className="flex-1 rounded-full border border-primary-200 px-3.5 py-2 text-sm font-semibold text-primary-700 dark:border-white/15 dark:text-slate-300"
            >
              {i18n.language === 'ar' ? t('common.switchToEnglish') : t('common.switchToArabic')}
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary flex-1"
            >
              {t('nav.booking')}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
