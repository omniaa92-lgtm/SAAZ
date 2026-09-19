import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Offers from './components/Offers'
import Portfolio from './components/Portfolio'
import InstagramReels from './components/InstagramReels'
import Booking from './components/Booking'
import Footer from './components/Footer'

function DocumentLangSync() {
  const { i18n, t } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.language
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
    document.title = t('meta.title')
  }, [i18n.language, t])

  return null
}

export default function App() {
  return (
    <ThemeProvider>
      <DocumentLangSync />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Offers />
        <Portfolio />
        <InstagramReels />
        <Booking />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
