'use client'
import { motion } from 'framer-motion'

const equipo = [
  {
    name: 'Nani',
    role: 'Fisioterapeuta',
    quote: 'La vocación por ayudar a mis pacientes es lo que me impulsa cada día',
    description: 'Especialista con amplia experiencia en fisioterapia manual y tratamiento del dolor. Su dedicación y calidad humana la convierten en una profesional excepcional.',
  },
  {
    name: 'Pilar',
    role: 'Fisioterapeuta',
    quote: 'Cada paciente es único y merece un tratamiento personalizado',
    description: 'Reconocida por su profesionalidad y trato cercano. Formación continua en las últimas técnicas para ofrecer siempre lo mejor a sus pacientes.',
  },
]

export function Equipo() {
  return (
    <section id="equipo" className="py-24 lg:py-32 bg-gray-50/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Nuestro equipo
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Conoce a las profesionales que te cuidarán
          </h2>
          <p className="text-lg text-gray-600">
            Un equipo unido por la vocación y la pasión por la fisioterapia
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {equipo.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
            >
              {/* Image placeholder */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto bg-white/50 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-12 h-12 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-primary-400 font-medium">Foto de {member.name}</p>
                  <p className="text-primary-300 text-sm">Recomendado: 400x300px</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-1 font-heading">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-4">{member.role}</p>

                {/* Quote */}
                <blockquote className="relative mb-4">
                  <span className="absolute -top-2 -left-2 text-4xl text-primary-200">"</span>
                  <p className="text-gray-600 italic pl-4">{member.quote}</p>
                </blockquote>

                <p className="text-sm text-gray-500">{member.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
