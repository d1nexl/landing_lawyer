'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FileText, CreditCard, Globe, Briefcase,
  Users, Home, Scale, Building2,
} from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'

const icons = [FileText, CreditCard, Globe, Briefcase, Users, Home, Scale, Building2]

export default function Services() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '100px' })

  return (
    <section id="services" className="relative py-28 bg-navy-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-gold-500/30" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold-500/3 blur-3xl pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold-500 text-sm tracking-[0.25em] uppercase font-sans mb-4">
            — {t.services.label} —
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
            {t.services.title}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto font-sans text-base md:text-lg leading-relaxed">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {t.services.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative glass-card hover-gold rounded-2xl p-6 cursor-default overflow-hidden"
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold-500/8 to-transparent rounded-bl-full" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-5 group-hover:bg-gold-500/20 group-hover:border-gold-500/40 transition-all duration-300">
                  <Icon size={20} className="text-gold-500" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-gold-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-white/45 text-base font-sans leading-relaxed">
                  {item.desc}
                </p>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/0 to-transparent group-hover:via-gold-500/40 transition-all duration-500" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
