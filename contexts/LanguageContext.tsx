'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { translations, Lang, T } from '@/lib/translations'

interface LangCtx {
  lang: Lang
  t: T
  setLang: (l: Lang) => void
}

const LanguageContext = createContext<LangCtx>({
  lang: 'uk',
  t: translations.uk,
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('uk')
  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
