'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const whatsappUrl = 'https://wa.me/34613004617?text=' + encodeURIComponent('Hola, me gustaría pedir cita en Fisionarle')

  return (
    <section ref={containerRef} className="relative min-h-[100svh] overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        {/* Banner Image */}
        <Image
          src="/images/banner.jpg"
          alt="Fisionarle - Fisioterapia especializada"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-800/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-teal-900/30" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 min-h-[100svh] flex items-center"
      >
        <div className="container mx-auto px-6 py-32">
          <div className="max-w-3xl">
            {/* Eyebrow with line */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="w-12 h-px bg-teal-300" />
              <span className="text-teal-300 font-medium tracking-widest uppercase text-sm">
                Alcázar de San Juan
              </span>
            </motion.div>

            {/* Main Title - Stacked */}
            <div className="space-y-2 mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white font-heading leading-none"
              >
                Fisioterapia
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-8xl font-bold font-heading leading-none"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-cyan-100 to-teal-300">
                  con alma
                </span>
              </motion.h1>
            </div>

            {/* Subtitle with vertical line */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-6 mb-10"
            >
              <span className="w-px h-auto bg-gradient-to-b from-teal-300 to-transparent flex-shrink-0" />
              <p className="text-xl sm:text-2xl text-gray-100 leading-relaxed max-w-xl">
                Especialistas en
                <span className="text-pink-300 font-medium"> embarazadas</span>,
                <span className="text-purple-300 font-medium"> suelo pélvico</span>,
                <span className="text-rose-300 font-medium"> pediatría</span> y
                <span className="text-amber-300 font-medium"> más</span>.
                Cuidamos de ti en todas las etapas de tu vida.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-white text-teal-900 rounded-full font-semibold text-lg overflow-hidden shadow-2xl shadow-white/20"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Reservar cita
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <motion.span
                  className="absolute inset-0 bg-teal-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="tel:+34613004617"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all flex items-center justify-center gap-3"
              >
                <span className="w-3 h-3 bg-teal-400 rounded-full animate-pulse" />
                613 00 46 17
              </motion.a>
            </motion.div>

            {/* Stats Row - Horizontal Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              {/* Google Rating */}
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.span
                      key={i}
                      className="text-yellow-400 text-xl"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
                <div className="text-white">
                  <p className="font-bold">5.0 en Google</p>
                  <p className="text-sm text-white/70">47 reseñas verificadas</p>
                </div>
              </div>

              {/* Specialties */}
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
                <div className="flex -space-x-2">
                  <span className="w-8 h-8 rounded-full bg-pink-400 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5c-1.5 0-2.5 1-2.5 2.5 0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5c0-1.5-1-2.5-2.5-2.5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11c0 0 1 1 1 3.5 0 2.5-1.5 5-4 5s-4-2.5-4-5c0-2.5 1-3.5 1-3.5" />
                    </svg>
                  </span>
                  <span className="w-8 h-8 rounded-full bg-rose-400 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                  </span>
                  <span className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  <span className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </span>
                </div>
                <div className="text-white">
                  <p className="font-bold">5+ especialidades</p>
                  <p className="text-sm text-white/70">Todas las edades</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Gradient Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20" />

      {/* Scroll Indicator - Minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 tracking-widest uppercase">Descubre más</span>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
