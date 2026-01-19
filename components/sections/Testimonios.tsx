'use client'
import { motion } from 'framer-motion'

const testimonios = [
  {
    id: 1,
    name: 'Aura Lu',
    content: 'Simplemente maravilloso. Son las palabras que definen este centro de fisioterapia. Nani es una excelente profesional y humana. Siempre te explica todo lo que vas a hacer y por qué, y siempre te escucha. Hace que te sientas como en casa.',
    rating: 5,
    featured: true,
  },
  {
    id: 2,
    name: 'Beatriz N',
    content: 'Muy contenta con el trabajo de Nani, que me ha tratado de las cervicales y con ella noto mucha mejoría. Toda una profesional, que además de saber lo que hace, trabaja con respeto, amor y cuidado hacia el paciente.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Nora Villasanti',
    content: 'Nani es una fisioterapeuta con una profesionalidad que es indiscutible, pero además hay que destacar su calidad humana. Se nota que le gusta lo que hace y que te va a solucionar lo que tenga solución.',
    rating: 5,
  },
  {
    id: 4,
    name: 'María G.',
    content: 'El tratamiento de suelo pélvico ha sido una revelación. Profesionalidad, técnicas avanzadas y un trato cercano que te hace sentir cómoda desde el primer momento. Muy recomendable para embarazadas y postparto.',
    rating: 5,
    featured: true,
  },
  {
    id: 5,
    name: 'Francisco García',
    content: 'Tenía un problema cervical de años y visité otros fisios... pero solo Nani supo dar con la tecla y solucionar mi problema. Tengo cita cada mes por sus manos de ángel.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Laura M.',
    content: 'La punción seca y la electrólisis han sido clave para recuperarme de mi tendinitis crónica. Por fin un centro con técnicas avanzadas y profesionales formados en las últimas novedades.',
    rating: 5,
  },
  {
    id: 7,
    name: 'Inma Mansilla',
    content: 'Muy profesional y cercana. Lo que más me ha gustado es que te explica todo lo que te hace y porqué, te da consejos para la vida diaria y confías desde el minuto uno. Totalmente recomendable.',
    rating: 5,
    featured: true,
  },
  {
    id: 8,
    name: 'Raquel Jiménez',
    content: 'Son unas grandísimas profesionales. Empecé pilates terapéutico y mejoré de las lumbares a partir del tercer mes. El ejercicio terapéutico ha sido fundamental para mi recuperación.',
    rating: 5,
  },
]

export function Testimonios() {
  return (
    <section id="testimonios" className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header - Left Aligned */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 border border-accent-100 rounded-full text-sm font-medium text-accent-700 mb-6">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              </svg>
              47 reseñas en Google
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
              Historias de recuperación
            </h2>
            <p className="text-lg text-gray-600">
              Cada paciente tiene una historia. Estas son algunas de las que nos hacen seguir adelante.
            </p>
          </motion.div>

          {/* Google Rating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 bg-white px-8 py-6 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="text-center">
              <p className="text-5xl font-bold text-gray-900">5.0</p>
              <div className="flex gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
            </div>
            <div className="h-12 w-px bg-gray-200" />
            <div>
              <p className="font-medium text-gray-900">Puntuación perfecta</p>
              <p className="text-sm text-gray-500">Basado en 47 reseñas</p>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Grid - Masonry Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonios.map((testimonio, index) => (
            <motion.div
              key={testimonio.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative ${
                testimonio.featured
                  ? 'md:row-span-2 bg-gradient-to-br from-primary-600 to-accent-600 text-white'
                  : 'bg-white border border-gray-100 hover:border-accent-200'
              } rounded-3xl p-8 transition-all duration-300 hover:shadow-xl`}
            >
              {/* Quote Icon */}
              <svg
                className={`w-10 h-10 mb-6 ${
                  testimonio.featured ? 'text-white/20' : 'text-accent-100'
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      testimonio.featured
                        ? 'text-yellow-300'
                        : i < testimonio.rating ? 'text-yellow-400' : 'text-gray-200'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Content */}
              <blockquote className={`text-lg leading-relaxed mb-6 ${
                testimonio.featured ? 'text-white/90' : 'text-gray-700'
              }`}>
                &ldquo;{testimonio.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
                  testimonio.featured
                    ? 'bg-white/20 text-white'
                    : 'bg-accent-100 text-accent-700'
                }`}>
                  {testimonio.name.charAt(0)}
                </div>
                <div>
                  <p className={`font-semibold ${
                    testimonio.featured ? 'text-white' : 'text-gray-900'
                  }`}>
                    {testimonio.name}
                  </p>
                  <p className={`text-sm flex items-center gap-1 ${
                    testimonio.featured ? 'text-white/70' : 'text-gray-500'
                  }`}>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    </svg>
                    Reseña verificada
                  </p>
                </div>
              </div>

              {/* Decorative corner for featured */}
              {testimonio.featured && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium text-white">
                    Destacado
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.google.com/maps/place/Nexum+Fisioterapia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Ver todas las reseñas en Google
          </a>
        </motion.div>
      </div>
    </section>
  )
}
