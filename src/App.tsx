import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Offers from './components/Offers'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
// import Portfolio from './components/Portfolio' // hidden temporarily
import InstagramReels from './components/InstagramReels'
import Location from './components/Location'
import TabbyBanner from './components/TabbyBanner'
import Booking from './components/Booking'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import NationalDayPopup from './components/NationalDayPopup'
import PartnersPage from './pages/PartnersPage'

function setMeta(selector: string, attr: string, value: string) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

function DocumentLangSync() {
  const { i18n, t } = useTranslation()
  const { pathname } = useLocation()

  useEffect(() => {
    document.documentElement.lang = i18n.language
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'

    const isPartners = pathname === '/partners'
    const title = isPartners ? t('partners.meta.title') : t('meta.title')
    const description = isPartners ? t('partners.meta.description') : t('meta.description')
    const url = `https://saazidea.com${pathname}`

    document.title = title
    setMeta('meta[name="description"]', 'content', description)
    setMeta('link[rel="canonical"]', 'href', url)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
  }, [i18n.language, t, pathname])

  return null
}

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'auto' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <TabbyBanner />
        <Offers />
        <WhyUs />
        <Testimonials />
        {/* <Portfolio /> hidden temporarily */}
        <InstagramReels />
        <FinalCta />
        <Location />
        <Booking />
      </main>
      <NationalDayPopup />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <DocumentLangSync />
        <ScrollManager />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/partners" element={<PartnersPage />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}
