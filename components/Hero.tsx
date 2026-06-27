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
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FFFBF0 0%, #FFF5D6 40%, #FFFAE8 70%, #FFF8EC 100%)' }}
    >
      {/* Particle canvas — gold dots on light bg */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-40" />

      {/* Warm yellow radial glows */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(245,193,50,0.18) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,210,80,0.12) 0%, transparent 70%)' }} />

      {/* Subtle grid on light bg */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(180,140,40,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(180,140,40,0.06) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, transparent, #E8A020, #F5C842, #E8A020, transparent)' }} />
      {/* Bottom fade to dark */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, rgba(10,18,32,0.08))' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left column */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          {/* Tagline */}
          <motion.p variants={fadeUp} className="font-display text-xl italic font-light tracking-wide" style={{ color: '#B8860B' }}>
            {t.hero.tagline}
          </motion.p>

          {/* Name */}
          <motion.h1 variants={fadeUp} className="font-display text-6xl md:text-7xl xl:text-8xl font-semibold leading-none" style={{ color: '#0A1220' }}>
            {t.hero.name.split(' ')[0]}{' '}
            <span style={{ background: 'linear-gradient(135deg, #C8860A 0%, #E8A020 40%, #F5C842 70%, #E8A020 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {t.hero.name.split(' ')[1]}
            </span>
          </motion.h1>

          {/* Title */}
          <motion.h2 variants={fadeUp} className="font-sans text-lg md:text-xl font-light leading-relaxed max-w-lg" style={{ color: '#1a2a40' }}>
            {t.hero.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p variants={fadeUp} className="font-sans text-sm md:text-base leading-relaxed max-w-md" style={{ color: '#4a5a70' }}>
            {t.hero.subtitle}
          </motion.p>

          {/* Divider */}
          <motion.div variants={fadeUp} className="w-16 h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, #E8A020, #F5C842, #E8A020)' }} />

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/380979217886"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
              style={{ background: 'linear-gradient(135deg, #E8A020, #F5C842)', color: '#0A1220' }}
            >
              <WhatsAppIcon />
              {t.hero.whatsapp}
            </a>
            <a
              href="viber://chat?number=%2B380979217886"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold border-2 transition-all duration-200 hover:scale-105"
              style={{ borderColor: '#E8A020', color: '#C8860A', background: 'rgba(232,160,32,0.08)' }}
            >
              <ViberIcon />
              {t.hero.viber}
            </a>
            <a
              href="tel:+420723720172"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold border transition-all duration-200 hover:scale-105"
              style={{ borderColor: 'rgba(10,18,32,0.2)', color: '#1a2a40', background: 'rgba(10,18,32,0.04)' }}
            >
              <Phone size={16} />
              {t.hero.call}
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={fadeUp} className="flex gap-8 pt-2">
            {[
              { val: '3+', label: t.hero.statYears },
              { val: '100+', label: t.hero.statClients },
              { val: '100%', label: t.hero.statOfficial },
            ].map((s, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-display text-2xl font-semibold" style={{ color: '#C8860A' }}>{s.val}</span>
                <span className="text-xs mt-0.5" style={{ color: '#6a7a8a' }}>{s.label}</span>
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
          {/* Warm glow behind photo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(245,193,50,0.35) 0%, transparent 70%)' }} />
          </div>

          {/* Photo frame */}
          <div className="relative w-80 h-[440px] md:w-96 md:h-[520px]">
            {/* Outer ring */}
            <div className="absolute -inset-3 rounded-3xl border animate-pulse" style={{ borderColor: 'rgba(232,160,32,0.35)' }} />
            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 rounded-tl-xl" style={{ borderColor: '#E8A020' }} />
            <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 rounded-tr-xl" style={{ borderColor: '#E8A020' }} />
            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 rounded-bl-xl" style={{ borderColor: '#E8A020' }} />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 rounded-br-xl" style={{ borderColor: '#E8A020' }} />

            {/* Photo */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden" style={{ boxShadow: '0 0 50px rgba(232,160,32,0.25), 0 20px 60px rgba(0,0,0,0.15)' }}>
              <Image
                src="/alina-1.jpg"
                alt="Аліна Татару — юрист"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Subtle bottom overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1/4" style={{ background: 'linear-gradient(to top, rgba(255,248,230,0.5), transparent)' }} />
            </div>

            {/* Floating badge — stars */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 rounded-2xl px-5 py-4 shadow-xl border"
              style={{ background: 'rgba(255,252,240,0.95)', backdropFilter: 'blur(12px)', borderColor: 'rgba(232,160,32,0.3)' }}
            >
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-[#E8A020]" style={{ color: '#E8A020' }} />
                ))}
              </div>
              <p className="text-xs font-medium" style={{ color: '#4a5a70' }}>{t.hero.clientsBadge}</p>
            </motion.div>

            {/* Floating tag — official */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-4 -right-4 rounded-xl px-4 py-3 shadow-lg border"
              style={{ background: 'rgba(255,252,240,0.95)', backdropFilter: 'blur(12px)', borderColor: 'rgba(232,160,32,0.3)' }}
            >
              <p className="text-xs font-semibold" style={{ color: '#C8860A' }}>{t.hero.officialBadge}</p>
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
          className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
          style={{ borderColor: 'rgba(200,134,10,0.4)' }}
        >
          <div className="w-1 h-2 rounded-full" style={{ background: '#E8A020' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
