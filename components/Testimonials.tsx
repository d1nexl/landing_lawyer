'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'

export default function Testimonials() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '100px' })

  return (
    <section id="testimonials" className="relative py-28 bg-navy-900 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gold-500/4 blur-3xl pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold-500 text-sm tracking-[0.25em] uppercase font-sans mb-4">— {t.testimonials.label} —</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-white/50 font-sans text-base md:text-lg leading-relaxed max-w-lg mx-auto">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group glass-card hover-gold rounded-2xl p-8 relative overflow-hidden"
            >
              {/* Quote icon */}
              <Quote size={32} className="absolute top-6 right-6 text-gold-500/10 group-hover:text-gold-500/20 transition-colors duration-300" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(item.rating)].map((_, j) => (
                  <Star key={j} size={14} className="star-filled fill-gold-500" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/70 font-sans text-base leading-relaxed mb-6 relative z-10">
                "{item.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-base text-gold-400">{item.name[0]}</span>
                </div>
                <div>
                  <p className="font-sans text-base font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-white/40">{item.city}</p>
                </div>
              </div>

              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/0 to-transparent group-hover:via-gold-500/30 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
