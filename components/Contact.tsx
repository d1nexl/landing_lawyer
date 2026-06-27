'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Send, CheckCircle2, Facebook } from 'lucide-react'
import { useLang } from '@/contexts/LanguageContext'
import Image from 'next/image'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const ViberIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C6.477 0 2 4.477 2 10c0 2.123.666 4.094 1.8 5.713L2.5 19.5l3.938-1.263A9.953 9.953 0 0012 20c5.523 0 10-4.477 10-10S17.523 0 12 0zm0 18.182a8.153 8.153 0 01-4.148-1.132l-.297-.176-3.076.985.934-3.004-.194-.308A8.151 8.151 0 013.818 10C3.818 5.923 7.923 1.818 12 1.818S20.182 5.923 20.182 10 16.077 18.182 12 18.182zm4.55-6.114c-.25-.125-1.476-.728-1.704-.811-.228-.083-.394-.125-.56.125-.166.25-.643.811-.788.977-.145.166-.29.187-.54.062-.25-.125-1.055-.389-2.009-1.24-.742-.663-1.243-1.481-1.388-1.731-.145-.25-.016-.385.109-.51.111-.111.25-.29.375-.436.124-.145.166-.25.25-.415.083-.166.041-.312-.021-.437-.062-.125-.56-1.352-.769-1.851-.202-.486-.409-.42-.56-.428L8.56 6c-.145 0-.374.054-.57.27-.196.217-.748.73-.748 1.781s.766 2.065.873 2.209c.107.145 1.508 2.303 3.654 3.23.51.22.909.352 1.219.45.512.163.979.14 1.347.085.411-.062 1.267-.518 1.445-1.018.179-.5.179-.929.125-1.018-.054-.09-.2-.145-.45-.27z"/>
  </svg>
)

export default function Contact() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '100px' })
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Відправка через WhatsApp (простий спосіб без бекенду)
    const text = encodeURIComponent(
      `Нова заявка!\nІм'я: ${form.name}\nТелефон: ${form.phone}\nПовідомлення: ${form.message}`
    )
    window.open(`https://wa.me/380979217886?text=${text}`, '_blank')
    setTimeout(() => {
      setSending(false)
      setSent(true)
    }, 800)
  }

  const contacts = [
    {
      icon: <Phone size={20} className="text-gold-500" />,
      label: t.contact.phone,
      value: '+420 723 720 172',
      href: 'tel:+420723720172',
    },
    {
      icon: <WhatsAppIcon />,
      label: t.contact.whatsapp,
      value: '+380 979 217 886',
      href: 'https://wa.me/380979217886',
    },
    {
      icon: <ViberIcon />,
      label: t.contact.viber,
      value: '+380 979 217 886',
      href: 'viber://chat?number=%2B380979217886',
    },
    {
      icon: <Facebook size={20} className="text-gold-500" />,
      label: 'Facebook',
      value: 'Аліна Татару',
      href: 'https://www.facebook.com/UristAlinaTataru26',
    },
  ]

  return (
    <section id="contact" className="relative py-28 bg-navy-900 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full bg-gold-500/4 blur-3xl pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold-500 text-sm tracking-[0.25em] uppercase font-sans mb-4">— {t.contact.label} —</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-white/50 font-sans text-base md:text-lg leading-relaxed max-w-lg mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — contact info + photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* Photo */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden hidden lg:block">
              <Image src="/alina-3.jpg" alt="Аліна Татару" fill className="object-cover" style={{ objectPosition: '50% 20%' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
              {/* Overlay text */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-display text-2xl text-white font-semibold">Аліна Татару</p>
                <p className="text-gold-400 text-sm mt-1">Юрист за кордоном</p>
              </div>
            </div>

            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-3">
              {contacts.map((c, i) => (
                <motion.a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="group glass-card hover-gold rounded-xl p-4 flex items-center gap-4 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-all duration-300">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-white/40 text-sm">{c.label}</p>
                    <p className="text-white text-base font-medium mt-0.5">{c.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="glass-card rounded-2xl p-8 border border-gold-500/15">
              <h3 className="font-display text-2xl font-semibold text-white mb-6">
                {t.contact.formTitle}
              </h3>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                >
                  <CheckCircle2 size={48} className="text-gold-400" />
                  <p className="text-white font-sans text-base">{t.contact.success}</p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', phone: '', message: '' }) }}
                    className="text-gold-400 text-sm underline underline-offset-4 mt-2"
                  >
                    {t.contact.sendAnother}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder={t.contact.namePlaceholder}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold-500/50 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder={t.contact.phonePlaceholder}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold-500/50 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <textarea
                      required
                      rows={4}
                      placeholder={t.contact.messagePlaceholder}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold-500/50 focus:bg-white/8 transition-all duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-gold w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
                        {t.contact.sending}
                      </span>
                    ) : (
                      <>
                        <Send size={16} />
                        {t.contact.send}
                      </>
                    )}
                  </button>
                  <p className="text-white/25 text-xs text-center">
                    {t.contact.formNote}
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
