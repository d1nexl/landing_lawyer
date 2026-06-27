'use client'

import { Scale } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="bg-navy-950 border-t border-gold-500/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-gold-500/40 flex items-center justify-center flex-shrink-0">
            <Scale size={14} className="text-gold-500" />
          </div>
          <div>
            <p className="font-display text-base font-semibold text-white">{t.hero.name}</p>
            <p className="text-xs text-gold-500/60 tracking-widest uppercase">{t.footer.tagline}</p>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-white/25 text-sm text-center">
          © {new Date().getFullYear()} {t.hero.name}. {t.footer.rights}.
        </p>

        {/* Links — wrap gracefully on mobile */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          <a href="https://wa.me/380979217886" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-gold-400 text-sm transition-colors whitespace-nowrap">
            WhatsApp
          </a>
          <a href="viber://chat?number=%2B380979217886" className="text-white/30 hover:text-gold-400 text-sm transition-colors whitespace-nowrap">
            Viber
          </a>
          <a href="tel:+420723720172" className="text-white/30 hover:text-gold-400 text-sm transition-colors whitespace-nowrap">
            +420 723 720 172
          </a>
          <a href="mailto:uristkonsultant26@gmail.com" className="text-white/30 hover:text-gold-400 text-xs sm:text-sm transition-colors whitespace-nowrap">
            uristkonsultant26@gmail.com
          </a>
          <a href="https://www.instagram.com/alinatataruiurist" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-gold-400 text-sm transition-colors whitespace-nowrap">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
