import { useEffect, useMemo, useState } from 'react'
import { LanguageContext } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/translations'

const DEFAULT_LANGUAGE = 'pt-BR'
const STORAGE_KEY = 'portfolio-language'

const getInitialLanguage = () => {
  const storedLanguage = localStorage.getItem(STORAGE_KEY)
  return translations[storedLanguage] ? storedLanguage : DEFAULT_LANGUAGE
}

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage)
  const copy = translations[language]

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
    document.title = copy.metaTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', copy.metaDescription)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', copy.metaTitle)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', copy.metaDescription)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', copy.metaTitle)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', copy.metaDescription)
  }, [copy.metaDescription, copy.metaTitle, language])

  const value = useMemo(() => ({
    language,
    copy,
    toggleLanguage: () => setLanguage(current => current === 'pt-BR' ? 'en-US' : 'pt-BR'),
  }), [copy, language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export default LanguageProvider
