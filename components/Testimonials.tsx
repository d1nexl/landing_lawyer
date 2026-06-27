'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, Quote, Send, CheckCircle2, PenLine } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'

interface Review {
  id: number
  name: string
  text: string
  rating: number
  createdAt: string
}

const formLabels = {
  uk: {
    title: 'Залишити відгук',
    name: "Ваше ім'я",
    text: 'Ваш відгук...',
    send: 'Надіслати',
    sending: 'Надсилаємо...',
    success: 'Дякуємо! Ваш відгук опублікований.',
    empty: 'Поки що відгуків немає. Будьте першим!',
  },
  cs: {
    title: 'Zanechat recenzi',
    name: 'Vaše jméno',
    text: 'Vaše recenze...',
    send: 'Odeslat',
    sending: 'Odesílám...',
    success: 'Děkujeme! Vaše recenze byla zveřejněna.',
    empty: 'Zatím žádné recenze. Buďte první!',
  },
  en: {
    title: 'Leave a review',
    name: 'Your name',
    text: 'Your review...',
    send: 'Submit',
    sending: 'Submitting...',
    success: 'Thank you! Your review has been published.',
    empty: 'No reviews yet. Be the first!',
  },
}

export default function Testimonials() {
  const { t, lang } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '100px' })
  const fl = formLabels[lang as keyof typeof formLabels] ?? formLabels.uk

  const [reviews, setReviews] = useState<Review[]>([])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ name: '', text: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const fetchReviews = useCallback(async () => {
    try {
      const res = await fetch('/api/reviews')
      const data = await res.json()
      setReviews(data)
    } catch {}
  }, [])

  useEffect(() => { fetchReviews() }, [fetchReviews])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        const newReview = await res.json()
        setReviews(prev => [newReview, ...prev])
        setForm({ name: '', text: '' })
        setSent(true)
        setTimeout(() => { setSent(false); setShowForm(false) }, 2500)
      }
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="testimonials" className="relative py-28 bg-navy-900 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gold-500/4 blur-3xl pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-gold-500 text-sm tracking-[0.25em] uppercase font-sans mb-4">— {t.testimonials.label} —</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-white/50 font-sans text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-8">
            {t.testimonials.subtitle}
          </p>

          {/* Write review button */}
          <button
            onClick={() => setShowForm(v => !v)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold-500/40 text-gold-400 text-sm font-medium hover:border-gold-500 hover:bg-gold-500/8 transition-all duration-200"
          >
            <PenLine size={15} />
            {fl.title}
          </button>
        </motion.div>

        {/* Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: -16, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -16, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-10"
            >
              <div className="max-w-xl mx-auto glass-card rounded-2xl p-6 border border-gold-500/15">
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-3 py-6 text-center"
                  >
                    <CheckCircle2 size={40} className="text-gold-400" />
                    <p className="text-white font-sans text-base">{fl.success}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                      type="text"
                      required
                      maxLength={60}
                      placeholder={fl.name}
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold-500/50 transition-all"
                    />
                    <textarea
                      required
                      maxLength={500}
                      rows={4}
                      placeholder={fl.text}
                      value={form.text}
                      onChange={e => setForm(f => ({ ...f, text: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold-500/50 transition-all resize-none"
                    />
                    <button
                      type="submit"
                      disabled={sending}
                      className="btn-gold w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold disabled:opacity-60"
                    >
                      {sending ? fl.sending : <><Send size={15} />{fl.send}</>}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cards */}
        {reviews.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-center text-white/30 font-sans text-base py-12"
          >
            {fl.empty}
          </motion.p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: Math.min(i, 5) * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group glass-card hover-gold rounded-2xl p-8 relative overflow-hidden"
              >
                <Quote size={32} className="absolute top-6 right-6 text-gold-500/10 group-hover:text-gold-500/20 transition-colors duration-300" />

                <div className="flex gap-1 mb-5">
                  {[...Array(item.rating)].map((_, j) => (
                    <Star key={j} size={14} className="star-filled fill-gold-500" />
                  ))}
                </div>

                <p className="text-white/70 font-sans text-base leading-relaxed mb-6 relative z-10">
                  &ldquo;{item.text}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-base text-gold-400">{item.name[0]?.toUpperCase()}</span>
                  </div>
                  <div>
                    <p className="font-sans text-base font-semibold text-white">{item.name}</p>
                    <p className="text-sm text-white/40">
                      {new Date(item.createdAt).toLocaleDateString(
                        lang === 'uk' ? 'uk-UA' : lang === 'cs' ? 'cs-CZ' : 'en-GB',
                        { day: 'numeric', month: 'long', year: 'numeric' }
                      )}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/0 to-transparent group-hover:via-gold-500/30 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
