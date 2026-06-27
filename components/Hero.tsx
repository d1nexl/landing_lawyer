'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Phone, Star } from 'lucide-react'
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

export default function Hero() {
  const { t, lang } = useLang()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (window.innerWidth < 768) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; r: number; dx: number; dy: number; alpha: number }[] = []
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.4 + 0.1,
      })
    }

    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201,169,110,${p.alpha})`
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  }
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-900 grid-pattern"
    >
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-900/20 blur-[100px] pointer-events-none" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
        {/* Left column */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-4 sm:gap-6"
        >
          {/* Tagline */}
          <motion.p variants={fadeUp} className="font-display text-gold-500/80 text-base sm:text-xl italic font-light tracking-wide">
            {t.hero.tagline}
          </motion.p>

          {/* Name */}
          <motion.h1 variants={fadeUp} className="font-display text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-semibold leading-none text-white">
            {t.hero.name.split(' ')[0]}{' '}
            <span className="text-gold-gradient">{t.hero.name.split(' ')[1]}</span>
          </motion.h1>

          {/* Title */}
          <motion.h2 variants={fadeUp} className="font-sans text-base sm:text-xl md:text-2xl text-white/80 font-light leading-relaxed">
            {t.hero.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p variants={fadeUp} className="font-sans text-sm sm:text-base md:text-lg text-white/50 leading-relaxed">
            {t.hero.subtitle}
          </motion.p>

          {/* Divider */}
          <motion.div variants={fadeUp} className="section-divider" />

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/380979217886"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-full text-sm font-semibold shadow-gold"
            >
              <WhatsAppIcon />
              {t.hero.whatsapp}
            </a>
            <a
              href="viber://chat?number=%2B380979217886"
              className="btn-outline-gold inline-flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-full text-sm font-semibold"
            >
              <ViberIcon />
              {t.hero.viber}
            </a>
            <a
              href="tel:+420723720172"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-full text-sm font-semibold border border-white/15 text-white/70 hover:border-white/40 hover:text-white transition-all duration-200"
            >
              <Phone size={15} />
              {t.hero.call}
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-2 pt-2 border-t border-white/8">
            {[
              { val: '3+', label: t.hero.statYears },
              { val: '100+', label: t.hero.statClients },
              { val: '100%', label: t.hero.statOfficial },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="font-display text-2xl sm:text-3xl font-semibold text-gold-400">{s.val}</span>
                <span className="text-xs sm:text-sm text-white/40 mt-0.5 leading-tight">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Glow behind photo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-gold-500/10 blur-3xl" />
          </div>

          {/* Photo frame — responsive width */}
          <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm h-[380px] sm:h-[440px] md:h-[520px]">
            {/* Outer ring */}
            <div className="absolute -inset-2 sm:-inset-3 rounded-3xl border border-gold-500/20 animate-pulse" />
            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-gold-500 rounded-tl-xl" />
            <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-gold-500 rounded-tr-xl" />
            <div className="absolute -bottom-1 -left-1 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-gold-500 rounded-bl-xl" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-gold-500 rounded-br-xl" />

            {/* Photo */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden glow-gold">
              <Image
                src="/alina-1.jpg"
                alt="Аліна Татару — юрист"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-navy-900/80 to-transparent" />
            </div>

            {/* Floating badge — зміщено всередину щоб не виходило за екран */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-4 left-3 glass-card rounded-xl px-3 py-2.5 sm:px-5 sm:py-4 border border-gold-500/20 shadow-card"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="star-filled fill-gold-500" />
                ))}
              </div>
              <p className="text-xs text-white/60 mt-1 whitespace-nowrap">{t.hero.clientsBadge}</p>
            </motion.div>

            {/* Floating tag — всередину щоб не обрізалось */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-4 right-3 glass-card rounded-xl px-3 py-2 sm:px-4 sm:py-3 border border-gold-500/20"
            >
              <p className="text-xs text-gold-400 font-semibold whitespace-nowrap">{t.hero.officialBadge}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-gold-500/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-gold-500/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
