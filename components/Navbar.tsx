'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Scale } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'
import { Lang } from '@/lib/translations'
import clsx from 'clsx'

const langs: { code: Lang; label: string }[] = [
  { code: 'uk', label: 'УКР' },
  { code: 'cs', label: 'ČES' },
  { code: 'en', label: 'ENG' },
]

export default function Navbar() {
  const { t, lang, setLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { id: 'services', label: t.nav.services },
    { id: 'why-me', label: t.nav.whyMe },
    { id: 'how-it-works', label: t.nav.howItWorks },
    { id: 'testimonials', label: t.nav.testimonials },
    { id: 'faq', label: t.nav.faq },
    { id: 'contact', label: t.nav.contact },
  ]

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-navy-900/95 backdrop-blur-xl border-b border-gold-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full border border-gold-500/60 flex items-center justify-center group-hover:border-gold-400 transition-colors group-hover:shadow-gold">
              <Scale size={16} className="text-gold-500 group-hover:text-gold-400 transition-colors" />
            </div>
            <div className="text-left">
              <div className="font-display text-base font-semibold text-white leading-tight">Аліна Татур</div>
              <div className="text-[10px] text-gold-500/80 tracking-widest uppercase font-sans">Юрист за кордоном</div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm text-white/60 hover:text-gold-400 transition-colors duration-200 font-sans tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right: lang switcher + CTA */}
          <div className="flex items-center gap-4">
            {/* Language switcher */}
            <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-1 py-1">
              {langs.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={clsx(
                    'text-[11px] font-medium px-3 py-1 rounded-full transition-all duration-200',
                    lang === l.code
                      ? 'bg-gold-500 text-navy-900 font-semibold'
                      : 'text-white/50 hover:text-white'
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-white/70 hover:text-gold-400 transition-colors"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-navy-950/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => scrollTo(link.id)}
                className="font-display text-3xl font-light text-white/80 hover:text-gold-400 transition-colors"
              >
                {link.label}
              </motion.button>
            ))}

            {/* Mobile lang switcher */}
            <div className="flex items-center gap-3 mt-4">
              {langs.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setMenuOpen(false) }}
                  className={clsx(
                    'text-sm font-medium px-4 py-2 rounded-full border transition-all',
                    lang === l.code
                      ? 'border-gold-500 bg-gold-500 text-navy-900'
                      : 'border-white/20 text-white/50 hover:border-gold-500/50'
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
