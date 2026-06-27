'use client'

import { Scale, Mail } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="bg-navy-950 border-t border-gold-500/10 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-gold-500/40 flex items-center justify-center">
            <Scale size={14} className="text-gold-500" />
          </div>
          <div>
            <p className="font-display text-base font-semibold text-white">{t.hero.name}</p>
            <p className="text-xs text-gold-500/60 tracking-widest uppercase">{t.footer.tagline}</p>
          </div>
        </div>
        <p className="text-white/25 text-sm text-center">
          © {new Date().getFullYear()} {t.hero.name}. {t.footer.rights}.
        </p>
        <div className="flex gap-4">
          <a href="https://wa.me/380979217886" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-gold-400 text-sm transition-colors">
            WhatsApp
          </a>
          <a href="viber://chat?number=%2B380979217886" className="text-white/30 hover:text-gold-400 text-sm transition-colors">
            Viber
          </a>
          <a href="tel:+420723720172" className="text-white/30 hover:text-gold-400 text-sm transition-colors">
            +420 723 720 172
          </a>
          <a href="mailto:uristkonsultant26@gmail.com" className="inline-flex items-center gap-1.5 text-white/30 hover:text-gold-400 text-sm transition-colors">
            <Mail size={13} />
            uristkonsultant26@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}
