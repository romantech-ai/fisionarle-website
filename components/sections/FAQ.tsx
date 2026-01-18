'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    category: 'general',
    question: '¿Necesito receta médica para ir al fisioterapeuta?',
    answer: 'No, puedes acudir directamente sin necesidad de receta. El fisioterapeuta es un profesional sanitario que puede atenderte de forma directa. Si tienes un informe médico, tráelo a la primera consulta para que podamos valorar tu caso con toda la información disponible.',
  },
  {
    category: 'tratamiento',
    question: '¿Cuántas sesiones necesitaré?',
    answer: 'Depende de cada caso. En la primera consulta realizamos una valoración completa y te indicamos un plan de tratamiento personalizado con una estimación del número de sesiones. Cada paciente es único y la evolución depende de muchos factores.',
  },
  {
    category: 'pediatria',
    question: '¿Tratáis a bebés y niños?',
    answer: 'Sí, somos especialistas en fisioterapia pediátrica. Tratamos desde recién nacidos hasta adolescentes. Nuestro enfoque es siempre adaptado a la edad del paciente, con un trato cariñoso y profesional que hace que los niños se sientan cómodos.',
  },
  {
    category: 'general',
    question: '¿Hacéis sesiones a domicilio?',
    answer: 'Consulta disponibilidad para casos especiales de pacientes con movilidad reducida. Valoramos cada caso de forma individual para ofrecer la mejor solución posible.',
  },
  {
    category: 'tratamiento',
    question: '¿Puedo combinar fisioterapia con Pilates?',
    answer: '¡Es lo más recomendable! El Pilates terapéutico es un complemento excelente para mantener los resultados del tratamiento, mejorar la postura y prevenir futuras lesiones. Nuestras clases están diseñadas para trabajar de forma segura y efectiva.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section id="faq" className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header - Centered with Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block text-5xl mb-4">💬</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Encuentra respuestas a las dudas más comunes sobre nuestros servicios
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Buscar pregunta..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pl-14 bg-white border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <svg
              className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </motion.div>

        {/* FAQ List - Single Column */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <span className="text-4xl mb-4 block">🔍</span>
              <p className="text-gray-600">No encontramos resultados para &ldquo;{searchTerm}&rdquo;</p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-4 text-emerald-600 font-medium hover:underline"
              >
                Ver todas las preguntas
              </button>
            </motion.div>
          ) : (
            filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div
                  className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? 'ring-2 ring-emerald-500 shadow-lg'
                      : 'hover:shadow-md'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-4 pr-4">
                      <span
                        className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-colors ${
                          openIndex === index
                            ? 'bg-emerald-500 text-white'
                            : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span className="font-semibold text-gray-900 text-lg">
                        {faq.question}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        openIndex === index
                          ? 'bg-emerald-500 text-white'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2">
                          <div className="pl-14 border-l-2 border-emerald-200 ml-5">
                            <p className="text-gray-600 leading-relaxed pl-4">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="text-left">
              <p className="font-semibold text-gray-900">¿No encuentras tu pregunta?</p>
              <p className="text-sm text-gray-500">Escríbenos y te responderemos encantados</p>
            </div>
            <a
              href="#contacto"
              className="px-6 py-3 bg-emerald-500 text-white rounded-xl font-medium hover:bg-emerald-600 transition-colors whitespace-nowrap"
            >
              Contactar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
