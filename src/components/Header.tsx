import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { TFunction } from 'i18next'
import { HiOutlineMenu, HiOutlineX, HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'

const NAV_KEYS = ['home', 'about', 'services', 'offers', 'portfolio', 'reels'] as const

function NavLinks({ t, onClick }: { t: TFunction; onClick?: () => void }) {
  return (
    <>
      {NAV_KEYS.map((key) => (
        <a
          key={key}
          href={`#${key}`}
          onClick={onClick}
          className="text-sm font-medium text-slate-600 transition-colors hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400"
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
          ? 'border-b border-slate-100 bg-white/85 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/85'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between py-3">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-lg font-extrabold text-white shadow-md shadow-primary-600/30">
            S
          </span>
          <span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
            SAAZ <span className="text-primary-600 dark:text-primary-400">IDEA</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          <NavLinks t={t} />
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={switchLang}
            className="rounded-full border border-slate-200 px-3.5 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-primary-400 hover:text-primary-700 dark:border-slate-700 dark:text-slate-300 dark:hover:text-primary-300"
          >
            {i18n.language === 'ar' ? t('common.switchToEnglish') : t('common.switchToArabic')}
          </button>
          <button
            onClick={toggleTheme}
            aria-label={t('common.toggleTheme')}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-primary-400 hover:text-primary-700 dark:border-slate-700 dark:text-slate-300 dark:hover:text-primary-300"
          >
            {theme === 'dark' ? <HiOutlineSun className="h-5 w-5" /> : <HiOutlineMoon className="h-5 w-5" />}
          </button>
          <a href="#booking" className="btn-primary">
            {t('nav.booking')}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label={t('common.toggleTheme')}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-300"
          >
            {theme === 'dark' ? <HiOutlineSun className="h-5 w-5" /> : <HiOutlineMoon className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t('common.closeMenu') : t('common.openMenu')}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-300"
          >
            {open ? <HiOutlineX className="h-5 w-5" /> : <HiOutlineMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-5 pb-6 pt-2 lg:hidden dark:border-slate-800 dark:bg-slate-950">
          <nav className="flex flex-col gap-4 py-3">
            <NavLinks t={t} onClick={() => setOpen(false)} />
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={switchLang}
              className="flex-1 rounded-full border border-slate-200 px-3.5 py-2 text-sm font-semibold text-slate-600 dark:border-slate-700 dark:text-slate-300"
            >
              {i18n.language === 'ar' ? t('common.switchToEnglish') : t('common.switchToArabic')}
            </button>
            <a href="#booking" onClick={() => setOpen(false)} className="btn-primary flex-1">
              {t('nav.booking')}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
