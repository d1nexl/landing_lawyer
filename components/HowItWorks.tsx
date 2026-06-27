'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '@/contexts/LanguageContext'

export default function HowItWorks() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '100px' })

  return (
    <section id="how-it-works" className="relative py-28 bg-navy-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gold-500/3 blur-3xl pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-gold-500 text-xs tracking-[0.3em] uppercase font-sans mb-4">— Процес —</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
            {t.howItWorks.title}
          </h2>
          <p className="text-white/50 font-sans text-sm md:text-base leading-relaxed max-w-lg mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {t.howItWorks.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center"
              >
                {/* Number circle */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full border-2 border-gold-500/30 bg-navy-900 flex items-center justify-center shadow-gold animate-glow-pulse">
                    <span className="font-display text-2xl font-light text-gold-400">{step.num}</span>
                  </div>
                  {/* Dot at center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gold-500 opacity-0 animate-ping" style={{ animationDelay: `${i * 0.5}s` }} />
                  </div>
                </div>

                <h3 className="font-display text-lg font-semibold text-white mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-white/40 text-sm font-sans leading-relaxed">
                  {step.desc}
                </p>

                {/* Arrow between steps (mobile/tablet hidden on last) */}
                {i < t.howItWorks.steps.length - 1 && (
                  <div className="lg:hidden mt-6 text-gold-500/30 text-2xl">↓</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/380979217886"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold shadow-gold"
          >
            Розпочати зараз →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
