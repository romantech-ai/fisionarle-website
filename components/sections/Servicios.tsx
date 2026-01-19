'use client'
import { motion } from 'framer-motion'

const servicios = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
    title: 'Fisioterapia Manual',
    description: 'Máster en Fisioterapia Manual del Aparato Locomotor. Técnicas avanzadas para el alivio del dolor.',
    features: [
      'Terapia manual articular',
      'Movilizaciones y manipulaciones',
      'Liberación miofascial',
      'Tratamiento de tejido blando',
    ],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fisioterapia Invasiva',
    description: 'Técnicas ecoguiadas de última generación para resultados más rápidos y efectivos.',
    features: [
      'Punción seca de puntos gatillo',
      'Electrólisis percutánea (EPI/EPTE)',
      'Neuromodulación ecoguiada',
      'Ecografía diagnóstica',
    ],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5c-1.5 0-2.5 1-2.5 2.5 0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5c0-1.5-1-2.5-2.5-2.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11c0 0 1 1 1 3.5 0 2.5-1.5 5-4 5s-4-2.5-4-5c0-2.5 1-3.5 1-3.5" />
      </svg>
    ),
    title: 'Suelo Pélvico y Embarazo',
    description: 'Especialización en salud de la mujer: embarazo, postparto y disfunciones del suelo pélvico.',
    features: [
      'Preparación al parto',
      'Recuperación postparto',
      'Incontinencia urinaria',
      'Diástasis abdominal',
    ],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Pilates Terapéutico',
    description: 'Ejercicio terapéutico personalizado para rehabilitación, prevención y mejora postural.',
    features: [
      'Clases grupales reducidas',
      'Pilates suelo terapéutico',
      'Fortalecimiento del core',
      'Ejercicio terapéutico',
    ],
  },
]

export function Servicios() {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Nuestros servicios
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Tratamientos completos para tu bienestar
          </h2>
          <p className="text-lg text-gray-600">
            Combinamos técnicas tradicionales con las últimas innovaciones para ofrecerte los mejores resultados
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicios.map((servicio, index) => (
            <motion.article
              key={servicio.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-500 group-hover:scale-110 transition-all duration-300">
                  <div className="text-primary-600 group-hover:text-white transition-colors">
                    {servicio.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors font-heading">
                  {servicio.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {servicio.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {servicio.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
