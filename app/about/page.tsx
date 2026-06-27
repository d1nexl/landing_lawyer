'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Scale, GraduationCap, Globe, Heart, Star, Award, Users, MessageCircle, BookOpen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useLang } from '@/contexts/LanguageContext'
import { aboutTranslations } from '@/lib/translations'
import { Lang } from '@/lib/translations'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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

function SectionWrapper({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '80px' })
  return (
    <div ref={ref} className={className} data-inview={inView}>
      {children}
    </div>
  )
}

export default function AboutPage() {
  const { lang } = useLang()
  const at = aboutTranslations[lang as Lang]

  const heroRef = useRef(null)
  const storyRef = useRef(null)
  const eduRef = useRef(null)
  const geoRef = useRef(null)
  const valuesRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const storyInView = useInView(storyRef, { once: true, margin: '80px' })
  const eduInView = useInView(eduRef, { once: true, margin: '80px' })
  const geoInView = useInView(geoRef, { once: true, margin: '80px' })
  const valuesInView = useInView(valuesRef, { once: true, margin: '80px' })

  return (
    <div className="min-h-screen bg-navy-900 overflow-x-hidden">
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        {/* Bold yellow glow bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900 to-[#1a1200]" />
        <div className="absolute top-0 right-0 w-[900px] h-[900px] rounded-full bg-[#f5c842]/8 blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#f5c842]/5 blur-[120px] pointer-events-none" />
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5c842]/40 to-transparent" />

        <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6 order-2 lg:order-1"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="inline-flex items-center gap-2 text-[#f5c842] text-sm tracking-[0.25em] uppercase font-sans"
              >
                <span className="w-8 h-px bg-[#f5c842]" />
                {at.hero.eyebrow}
                <span className="w-8 h-px bg-[#f5c842]" />
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-5xl md:text-6xl xl:text-7xl font-semibold leading-[1.05] text-white"
              >
                {at.hero.name.split(' ')[0]}{' '}
                <span style={{ background: 'linear-gradient(135deg, #f5c842 0%, #e8a020 50%, #f5c842 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {at.hero.name.split(' ')[1]}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="font-display text-2xl md:text-3xl text-white/70 font-light leading-relaxed italic max-w-xl"
              >
                {at.hero.title}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.45, duration: 0.7 }}
                className="text-white/45 font-sans text-base md:text-lg leading-relaxed max-w-lg"
              >
                {at.hero.subtitle}
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.55, duration: 0.7 }}
                className="flex gap-8 py-4 border-y border-white/8"
              >
                {[
                  { val: '8', label: lang === 'uk' ? 'років навчання' : lang === 'cs' ? 'let studia' : 'years of study' },
                  { val: '2', label: lang === 'uk' ? 'дипломи' : lang === 'cs' ? 'diplomy' : 'diplomas' },
                  { val: '100+', label: lang === 'uk' ? 'клієнтів' : lang === 'cs' ? 'klientů' : 'clients' },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="font-display text-3xl font-semibold" style={{ color: '#f5c842' }}>{s.val}</div>
                    <div className="text-sm text-white/40 mt-1">{s.label}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.65, duration: 0.6 }}
                className="flex gap-3"
              >
                <a
                  href="https://wa.me/380979217886"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-base font-semibold text-navy-900 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #f5c842, #e8a020)' }}
                >
                  <WhatsAppIcon />
                  {at.cta.whatsapp}
                </a>
                <a
                  href="viber://chat?number=%2B380979217886"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-base font-semibold border-2 text-white transition-all duration-200 hover:scale-105"
                  style={{ borderColor: '#f5c842', color: '#f5c842' }}
                >
                  <ViberIcon />
                  {at.cta.viber}
                </a>
              </motion.div>
            </motion.div>

            {/* Right — 3 photos mosaic */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="relative order-1 lg:order-2"
            >
              <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:max-w-none">
                {/* Main large photo — taller to show more */}
                <div className="col-span-2 relative rounded-2xl overflow-hidden border border-[#f5c842]/20 shadow-2xl" style={{ height: '420px' }}>
                  <Image src="/alina-4.jpg" alt="Аліна Татару" fill className="object-cover" style={{ objectPosition: '50% 15%' }} priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold text-navy-900" style={{ background: '#f5c842' }}>
                      <BookOpen size={11} />
                      {lang === 'uk' ? 'Академія права' : lang === 'cs' ? 'Akademie práva' : 'Law Academy'}
                    </div>
                  </div>
                </div>
                {/* Photo 2 */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#f5c842]/15">
                  <Image src="/alina-2.jpg" alt="Аліна Татару" fill className="object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold text-navy-900" style={{ background: '#f5c842' }}>
                      <Scale size={10} />
                      {lang === 'uk' ? 'Юрист' : lang === 'cs' ? 'Právník' : 'Lawyer'}
                    </div>
                  </div>
                </div>
                {/* Photo 3 */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#f5c842]/15">
                  <Image src="/alina-3.jpg" alt="Аліна Татару" fill className="object-cover" style={{ objectPosition: '50% 20%' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold text-navy-900" style={{ background: '#f5c842' }}>
                      <Heart size={10} />
                      {lang === 'uk' ? 'Психолог' : lang === 'cs' ? 'Psycholog' : 'Psychologist'}
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ STORY ═══ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1520] to-navy-900" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5c842]/20 to-transparent" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#f5c842]/4 blur-[100px] pointer-events-none" />

        <div ref={storyRef} className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Text 3/5 */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={storyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
              >
                <p className="text-[#f5c842] text-sm tracking-[0.25em] uppercase font-sans mb-3">— {at.story.label} —</p>
                <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-8">{at.story.title}</h2>
              </motion.div>

              {[at.story.p1, at.story.p2, at.story.p3].map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={storyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
                  className="text-white/65 font-sans text-lg leading-[1.85]"
                >
                  {p}
                </motion.p>
              ))}

              {/* Quote highlight */}
              <motion.blockquote
                initial={{ opacity: 0, x: -20 }}
                animate={storyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="relative pl-6 py-1 border-l-2 mt-2"
                style={{ borderColor: '#f5c842' }}
              >
                <p className="font-display text-xl md:text-2xl text-white/80 italic leading-relaxed">
                  {lang === 'uk'
                    ? 'Для мене право — це не лише професія, а й відповідальність перед людьми.'
                    : lang === 'cs'
                    ? 'Pro mě právo není jen profesí, ale i odpovědností vůči lidem.'
                    : 'For me, law is not just a profession, but a responsibility to people.'}
                </p>
                <p className="text-[#f5c842] text-base mt-3 font-semibold">— Аліна Татару</p>
              </motion.blockquote>
            </div>

            {/* Side photo 2/5 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="lg:col-span-2 hidden lg:block"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border" style={{ borderColor: 'rgba(245,200,66,0.2)' }}>
                <Image src="/alina-2.jpg" alt="Аліна Татару" fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/10 to-transparent" />
                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 rounded-tl-xl" style={{ borderColor: '#f5c842' }} />
                <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 rounded-br-xl" style={{ borderColor: '#f5c842' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ TWO PROFESSIONS ═══ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-[#0f1a10] to-navy-900 opacity-60" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5c842]/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-[#f5c842]/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '80px' }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="text-[#f5c842] text-sm tracking-[0.25em] uppercase font-sans mb-3">— {at.professions.label} —</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white">{at.professions.title}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Scale, key: 'law', data: at.professions.law, delay: 0 },
              { icon: Heart, key: 'psych', data: at.professions.psych, delay: 0.15 },
            ].map(({ icon: Icon, data, delay }) => (
              <motion.div
                key={data.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '80px' }}
                transition={{ duration: 0.7, delay }}
                className="relative group rounded-2xl p-8 border overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(245,200,66,0.15)' }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(245,200,66,0.08) 0%, transparent 70%)' }} />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border" style={{ background: 'rgba(245,200,66,0.12)', borderColor: 'rgba(245,200,66,0.3)' }}>
                    <Icon size={24} style={{ color: '#f5c842' }} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white mb-3">{data.title}</h3>
                  <p className="text-white/55 font-sans text-base leading-relaxed">{data.desc}</p>
                </div>

                {/* Accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(90deg, transparent, #f5c842, transparent)' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EDUCATION ═══ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5c842]/20 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-96 bg-gradient-to-l from-[#f5c842]/4 to-transparent pointer-events-none" />

        <div ref={eduRef} className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={eduInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="text-[#f5c842] text-sm tracking-[0.25em] uppercase font-sans mb-3">— {at.education.label} —</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-3">{at.education.title}</h2>
            <p className="text-white/45 font-sans text-base md:text-lg max-w-lg mx-auto">{at.education.subtitle}</p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2" style={{ background: 'linear-gradient(to bottom, transparent, rgba(245,200,66,0.5), transparent)' }} />

            {at.education.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={eduInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.2 }}
                className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 flex-shrink-0 mt-1" style={{ background: '#f5c842', borderColor: '#f5c842', boxShadow: '0 0 16px rgba(245,200,66,0.5)' }} />

                {/* Card */}
                <div className={`ml-16 md:ml-0 ${i % 2 === 0 ? 'md:mr-[calc(50%+2rem)] md:ml-0' : 'md:ml-[calc(50%+2rem)]'} rounded-2xl p-6 border w-full md:w-auto`} style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(245,200,66,0.15)' }}>
                  <div className="inline-flex items-center gap-2 mb-3">
                    <div className="px-3 py-1 rounded-full text-sm font-semibold text-navy-900" style={{ background: '#f5c842' }}>{item.year}</div>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-base leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GEOGRAPHY ═══ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5c842]/20 to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-15" />

        <div ref={geoRef} className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={geoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="text-[#f5c842] text-sm tracking-[0.25em] uppercase font-sans mb-3">— {at.geography.label} —</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-3">{at.geography.title}</h2>
            <p className="text-white/45 font-sans text-base md:text-lg max-w-lg mx-auto">{at.geography.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {at.geography.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={geoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group rounded-2xl p-7 border text-center transition-all duration-300 hover:scale-105 cursor-default"
                style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(245,200,66,0.15)' }}
              >
                <div className="flex justify-center mb-5">
                  {i === 0 && (
                    /* Czech flag SVG */
                    <svg width="56" height="40" viewBox="0 0 56 40" className="rounded-md shadow-lg" xmlns="http://www.w3.org/2000/svg">
                      <rect width="56" height="40" fill="#D7141A" rx="4"/>
                      <rect width="56" height="20" fill="#FFFFFF" rx="4"/>
                      <rect width="56" height="20" fill="#FFFFFF"/>
                      <polygon points="0,0 26,20 0,40" fill="#11457E"/>
                    </svg>
                  )}
                  {i === 1 && (
                    /* Ukrainian flag SVG */
                    <svg width="56" height="40" viewBox="0 0 56 40" className="rounded-md shadow-lg" xmlns="http://www.w3.org/2000/svg">
                      <rect width="56" height="40" fill="#FFD700" rx="4"/>
                      <rect width="56" height="20" fill="#005BBB"/>
                      <rect y="0" width="56" height="20" fill="#005BBB" rx="4"/>
                      <rect y="20" width="56" height="20" fill="#FFD700"/>
                    </svg>
                  )}
                  {i === 2 && (
                    /* Globe icon */
                    <div className="w-14 h-14 rounded-full flex items-center justify-center border-2" style={{ background: 'linear-gradient(135deg, #1a3a6b 0%, #0a1f4d 50%, #1a5a3a 100%)', borderColor: 'rgba(245,200,66,0.4)' }}>
                      <Globe size={28} style={{ color: '#f5c842' }} />
                    </div>
                  )}
                </div>
                <h3 className="font-display text-2xl font-semibold text-white mb-2">{item.place}</h3>
                <p className="text-white/50 text-base leading-relaxed">{item.desc}</p>
                <div className="mt-4 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(90deg, transparent, #f5c842, transparent)' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5c842]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-[#0d1520] to-navy-900" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#f5c842]/4 blur-[120px] pointer-events-none" />

        <div ref={valuesRef} className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="text-[#f5c842] text-sm tracking-[0.25em] uppercase font-sans mb-3">— {at.values.label} —</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white">{at.values.title}</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {at.values.items.map((item, i) => {
              const icons = [Users, MessageCircle, Award, GraduationCap]
              const Icon = icons[i]
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="group rounded-2xl p-6 border transition-all duration-300 hover:border-[#f5c842]/40"
                  style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)' }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border transition-all duration-300 group-hover:scale-110" style={{ background: 'rgba(245,200,66,0.1)', borderColor: 'rgba(245,200,66,0.25)' }}>
                    <Icon size={20} style={{ color: '#f5c842' }} />
                  </div>
                  <h3 className="font-sans text-base font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(245,200,66,0.12) 0%, rgba(10,18,32,1) 50%, rgba(245,200,66,0.08) 100%)' }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5c842]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5c842]/20 to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8 border shadow-lg" style={{ background: 'rgba(245,200,66,0.15)', borderColor: 'rgba(245,200,66,0.4)' }}>
              <Scale size={28} style={{ color: '#f5c842' }} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-4">{at.cta.title}</h2>
            <p className="text-white/50 font-sans text-lg mb-10">{at.cta.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/380979217886"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-navy-900 transition-all duration-200 hover:scale-105 shadow-xl"
                style={{ background: 'linear-gradient(135deg, #f5c842, #e8a020)' }}
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
              <a
                href="viber://chat?number=%2B380979217886"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold border-2 transition-all duration-200 hover:scale-105"
                style={{ borderColor: '#f5c842', color: '#f5c842' }}
              >
                <ViberIcon />
                Viber
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold border transition-all duration-200 hover:border-white/40 text-white/60 hover:text-white"
                style={{ borderColor: 'rgba(255,255,255,0.15)' }}
              >
                ← {lang === 'uk' ? 'На головну' : lang === 'cs' ? 'Domů' : 'Home'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
