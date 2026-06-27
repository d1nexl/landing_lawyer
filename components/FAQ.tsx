'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'

export default function FAQ() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '100px' })
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-28 bg-navy-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold-500 text-xs tracking-[0.3em] uppercase font-sans mb-4">— {t.faq.label} —</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
            {t.faq.title}
          </h2>
          <p className="text-white/50 font-sans text-sm md:text-base leading-relaxed max-w-lg mx-auto">
            {t.faq.subtitle}
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {t.faq.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`glass-card rounded-2xl border overflow-hidden transition-all duration-300 ${
                open === i ? 'border-gold-500/30' : 'border-white/5 hover:border-gold-500/15'
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`font-sans text-sm md:text-base font-medium transition-colors duration-200 ${
                  open === i ? 'text-gold-400' : 'text-white/80 group-hover:text-white'
                }`}>
                  {item.q}
                </span>
                <span className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  open === i
                    ? 'border-gold-500 bg-gold-500/20 text-gold-400'
                    : 'border-white/20 text-white/40 group-hover:border-gold-500/40'
                }`}>
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-6 pb-5 border-t border-gold-500/10">
                      <p className="text-white/55 font-sans text-sm leading-relaxed pt-4">
                        {item.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
