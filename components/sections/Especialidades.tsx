'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// SVG Icons for each specialty
const icons = {
  embarazo: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5c-1.5 0-2.5 1-2.5 2.5 0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5c0-1.5-1-2.5-2.5-2.5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11c0 0 1 1 1 3.5 0 2.5-1.5 5-4 5s-4-2.5-4-5c0-2.5 1-3.5 1-3.5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14.5v2M10.5 15.5h3" />
    </svg>
  ),
  deportiva: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  pediatrica: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 18c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.93 4.93l2.83 2.83M19.07 4.93l-2.83 2.83" />
    </svg>
  ),
  neurologica: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  geriatrica: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
}

const especialidades = [
  {
    id: 'embarazo',
    icon: icons.embarazo,
    title: 'Embarazo',
    fullTitle: 'Embarazo y Suelo Pélvico',
    subtitle: 'Acompañamiento integral en la maternidad',
    description: 'Especialistas en el cuidado de la mujer durante el embarazo, postparto y tratamiento de disfunciones del suelo pélvico. Te acompañamos en cada etapa.',
    gradient: 'from-pink-500 to-fuchsia-500',
    lightBg: 'bg-pink-50',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    treatments: [
      'Preparación al parto y ejercicios de respiración',
      'Recuperación postparto y diástasis abdominal',
      'Incontinencia urinaria y prolapsos',
      'Dolor pélvico crónico',
      'Cicatrices de cesárea y episiotomía',
    ],
    idealFor: 'Embarazadas, mujeres en postparto, disfunciones del suelo pélvico',
    stats: { patients: '+200', recovery: '96%' }
  },
  {
    id: 'deportiva',
    icon: icons.deportiva,
    title: 'Deportiva',
    fullTitle: 'Fisioterapia Deportiva',
    subtitle: 'Recupera tu rendimiento',
    description: 'Tratamiento especializado para deportistas de todos los niveles. Desde la prevención hasta la recuperación completa de lesiones.',
    gradient: 'from-orange-500 to-amber-500',
    lightBg: 'bg-orange-50',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    treatments: [
      'Lesiones deportivas: esguinces, roturas fibrilares, tendinitis',
      'Recuperación post-quirúrgica deportiva',
      'Prevención de lesiones',
      'Readaptación al entrenamiento',
      'Vendajes funcionales y kinesiotaping',
    ],
    idealFor: 'Deportistas amateur y profesionales, runners, ciclistas, futbolistas',
    stats: { patients: '+120', recovery: '95%' }
  },
  {
    id: 'pediatrica',
    icon: icons.pediatrica,
    title: 'Pediátrica',
    fullTitle: 'Fisioterapia Pediátrica',
    subtitle: 'Tu hijo en las mejores manos',
    description: 'Cuidado especializado para los más pequeños. Tratamientos suaves y efectivos adaptados a cada etapa del desarrollo.',
    gradient: 'from-rose-500 to-pink-500',
    lightBg: 'bg-rose-50',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    treatments: [
      'Estimulación temprana y desarrollo motor',
      'Cólico del lactante y problemas digestivos',
      'Tortícolis congénita y plagiocefalia',
      'Retraso en el desarrollo psicomotor',
      'Fisioterapia respiratoria infantil',
    ],
    idealFor: 'Bebés prematuros, recién nacidos, niños de 0-14 años',
    stats: { patients: '+80', recovery: '98%' }
  },
  {
    id: 'neurologica',
    icon: icons.neurologica,
    title: 'Neurológica',
    fullTitle: 'Fisioterapia Neurológica',
    subtitle: 'Recupera tu movilidad',
    description: 'Rehabilitación especializada para pacientes con afectaciones del sistema nervioso. Recuperamos función y calidad de vida.',
    gradient: 'from-blue-500 to-indigo-500',
    lightBg: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    treatments: [
      'Rehabilitación post-ictus (ACV)',
      'Parkinson y enfermedades neurodegenerativas',
      'Esclerosis múltiple y lesiones medulares',
      'Parálisis cerebral',
      'Recuperación de la marcha y el equilibrio',
    ],
    idealFor: 'Pacientes con daño cerebral, enfermedades neurológicas',
    stats: { patients: '+60', recovery: '85%' }
  },
  {
    id: 'geriatrica',
    icon: icons.geriatrica,
    title: 'Geriátrica',
    fullTitle: 'Fisioterapia Geriátrica',
    subtitle: 'Calidad de vida siempre',
    description: 'Atención personalizada para personas mayores. Mantenemos y mejoramos la autonomía para disfrutar de cada día.',
    gradient: 'from-teal-500 to-emerald-500',
    lightBg: 'bg-teal-50',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    treatments: [
      'Prevención de caídas y mejora del equilibrio',
      'Mantenimiento de la movilidad articular',
      'Tratamiento de artrosis y artritis',
      'Rehabilitación post-fractura de cadera',
      'Ejercicio terapéutico adaptado',
    ],
    idealFor: 'Personas mayores de 65 años, residencias',
    stats: { patients: '+150', recovery: '90%' }
  },
]

export function Especialidades() {
  const [activeTab, setActiveTab] = useState('embarazo')
  const activeEsp = especialidades.find(e => e.id === activeTab)!

  return (
    <section id="especialidades" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Especialidades
          </h2>
          <p className="text-xl text-gray-500">
            Cinco áreas de especialización para cuidarte en todas las etapas de tu vida
          </p>
        </motion.div>

        {/* Tab Navigation - Horizontal Pills */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            {especialidades.map((esp) => (
              <motion.button
                key={esp.id}
                onClick={() => setActiveTab(esp.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative px-5 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === esp.id
                    ? 'text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {activeTab === esp.id && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 bg-gradient-to-r ${esp.gradient} rounded-full`}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={`relative z-10 w-6 h-6 ${activeTab === esp.id ? 'text-white' : esp.iconColor}`}>
                  {esp.icon}
                </span>
                <span className="relative z-10">{esp.title}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-5 gap-8"
          >
            {/* Left - Main Info (3 cols) */}
            <div className="lg:col-span-3 space-y-8">
              {/* Title Card */}
              <div className={`${activeEsp.lightBg} rounded-3xl p-8 lg:p-10`}>
                <div className="flex items-center gap-4 mb-6">
                  <span className={`w-16 h-16 ${activeEsp.iconBg} rounded-2xl flex items-center justify-center ${activeEsp.iconColor}`}>
                    {activeEsp.icon}
                  </span>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 font-heading">
                      {activeEsp.fullTitle}
                    </h3>
                    <p className="text-gray-600">{activeEsp.subtitle}</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {activeEsp.description}
                </p>
              </div>

              {/* Treatments List */}
              <div className="bg-gray-50 rounded-3xl p-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-6">Tratamientos incluidos</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {activeEsp.treatments.map((treatment, idx) => (
                    <motion.div
                      key={treatment}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className={`w-6 h-6 rounded-lg bg-gradient-to-br ${activeEsp.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">{treatment}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Stats & CTA (2 cols) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Card */}
              <div className={`bg-gradient-to-br ${activeEsp.gradient} rounded-3xl p-8 text-white`}>
                <h4 className="text-white/80 font-medium mb-6">Resultados</h4>
                <div className="space-y-6">
                  <div>
                    <p className="text-5xl font-bold">{activeEsp.stats.patients}</p>
                    <p className="text-white/80">pacientes tratados</p>
                  </div>
                  <div className="h-px bg-white/20" />
                  <div>
                    <p className="text-5xl font-bold">{activeEsp.stats.recovery}</p>
                    <p className="text-white/80">tasa de recuperación</p>
                  </div>
                </div>
              </div>

              {/* Ideal For Card */}
              <div className="bg-white border-2 border-gray-100 rounded-3xl p-8">
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                  Ideal para
                </h4>
                <p className="text-gray-800 text-lg leading-relaxed">
                  {activeEsp.idealFor}
                </p>
              </div>

              {/* CTA */}
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full bg-gray-900 text-white text-center py-4 rounded-2xl font-semibold hover:bg-gray-800 transition-colors"
              >
                Reservar consulta
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Navigation Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {especialidades.map((esp) => (
            <button
              key={esp.id}
              onClick={() => setActiveTab(esp.id)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeTab === esp.id
                  ? `w-8 bg-gradient-to-r ${esp.gradient}`
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ver ${esp.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
