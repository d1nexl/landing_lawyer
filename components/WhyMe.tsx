'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { UserCheck, Shield, Zap, Award, HeartHandshake, Gem } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'
import Image from 'next/image'

const icons = [UserCheck, Shield, Zap, Award, HeartHandshake, Gem]

export default function WhyMe() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '100px' })

  return (
    <section id="why-me" className="relative py-28 bg-navy-900 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-900/10 blur-3xl pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[3/4] max-w-md">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-gold-500/10 rounded-3xl" />
              <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-gold-500/60 rounded-tl-2xl" />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-gold-500/60 rounded-br-2xl" />

              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image src="/alina-2.jpg" alt="Аліна Татару" fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-b from-navy-900/20 to-navy-900/60" />
              </div>

              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-8 top-1/4 glass-card rounded-2xl p-4 border border-gold-500/20 shadow-card w-44"
              >
                <p className="text-gold-400 text-xs font-semibold uppercase tracking-wide mb-1">{t.whyMe.experienceLabel}</p>
                <p className="font-display text-3xl text-white font-semibold">3+</p>
                <p className="text-white/40 text-xs mt-1">{t.whyMe.experienceYears}</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <p className="text-gold-500 text-xs tracking-[0.3em] uppercase font-sans mb-4">
                — {t.whyMe.label} —
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-4">
                {t.whyMe.title}
              </h2>
              <p className="text-white/50 font-sans text-sm md:text-base leading-relaxed max-w-lg">
                {t.whyMe.subtitle}
              </p>
            </motion.div>

            {/* Items grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {t.whyMe.items.map((item, i) => {
                const Icon = icons[i]
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="group flex gap-4 p-4 rounded-xl border border-white/5 hover:border-gold-500/20 bg-white/2 hover:bg-gold-500/3 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/20 transition-all duration-300">
                      <Icon size={18} className="text-gold-500" />
                    </div>
                    <div>
                      <h3 className="font-sans text-sm font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
