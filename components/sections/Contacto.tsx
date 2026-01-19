'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const horarios = [
  { dia: 'Lunes', horario: '16:00 - 20:00' },
  { dia: 'Martes', horario: '9:00 - 14:00 y 16:00 - 20:00' },
  { dia: 'Miércoles', horario: '9:00 - 14:00 y 16:00 - 20:00' },
  { dia: 'Jueves', horario: '9:00 - 14:00 y 16:00 - 20:00' },
  { dia: 'Viernes', horario: '9:00 - 14:00 y 16:00 - 20:00' },
  { dia: 'Sábado', horario: '9:00 - 14:00' },
  { dia: 'Domingo', horario: 'Cerrado' },
]

export function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    motivo: '',
    horario: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hola, me gustaría pedir cita en Nexum Fisioterapia.

Nombre: ${formData.nombre}
Teléfono: ${formData.telefono}
Motivo: ${formData.motivo}
Preferencia horaria: ${formData.horario}`

    const whatsappUrl = `https://wa.me/34613005617?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-50 -skew-x-12 translate-x-1/4 hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mb-16"
        >
          <span className="inline-flex items-center gap-2 text-accent-600 font-medium mb-4">
            <span className="w-8 h-px bg-accent-600" />
            Contacto
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Reserva tu cita
          </h2>
          <p className="text-lg text-gray-600">
            Estamos aquí para ayudarte. Rellena el formulario y nos pondremos en contacto contigo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form - 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Phone Row */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-accent-500 transition-colors text-lg"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-accent-500 transition-colors text-lg"
                    placeholder="600 000 000"
                  />
                </div>
              </div>

              {/* Motivo */}
              <div>
                <label htmlFor="motivo" className="block text-sm font-medium text-gray-700 mb-2">
                  ¿En qué podemos ayudarte?
                </label>
                <select
                  id="motivo"
                  value={formData.motivo}
                  onChange={(e) => setFormData({ ...formData, motivo: e.target.value })}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 text-gray-900 focus:outline-none focus:border-accent-500 transition-colors text-lg appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', backgroundSize: '20px' }}
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Suelo pélvico/embarazo">Suelo pélvico/embarazo</option>
                  <option value="Dolor de espalda/cuello">Dolor de espalda/cuello</option>
                  <option value="Fisioterapia invasiva">Fisioterapia invasiva (punción, electrólisis)</option>
                  <option value="ATM/bruxismo">ATM/bruxismo</option>
                  <option value="Pilates terapéutico">Pilates terapéutico</option>
                  <option value="Lesión deportiva">Lesión deportiva</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              {/* Horario */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Preferencia horaria
                </label>
                <div className="flex flex-wrap gap-3">
                  {['Mañana (9:00 - 14:00)', 'Tarde (16:00 - 20:00)', 'Indiferente'].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFormData({ ...formData, horario: option })}
                      className={`px-6 py-3 rounded-full font-medium transition-all ${
                        formData.horario === option
                          ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/25'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {option.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-gray-900 text-white py-5 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-3 mt-8"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enviar por WhatsApp
              </motion.button>
            </form>
          </motion.div>

          {/* Info - 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Map */}
            <div className="relative rounded-3xl overflow-hidden h-48 bg-gray-100">
              <iframe
                src="https://maps.google.com/maps?q=Calle%20Bailen%2022%20Alcazar%20de%20San%20Juan&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Nexum Fisioterapia"
              />
            </div>

            {/* Contact Cards */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Calle+Bailen+22+Alcazar+de+San+Juan"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-accent-200 transition-all group"
            >
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500 transition-colors">
                  <svg className="w-6 h-6 text-accent-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Dirección</p>
                  <p className="text-gray-600 text-sm">Calle Bailén, 22</p>
                  <p className="text-gray-600 text-sm">13600 Alcázar de San Juan, Ciudad Real</p>
                </div>
              </div>
            </a>

            <a
              href="tel:+34613005617"
              className="block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-accent-200 transition-all group"
            >
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500 transition-colors">
                  <svg className="w-6 h-6 text-accent-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Teléfono</p>
                  <p className="text-accent-600 text-lg font-medium">613 00 56 17</p>
                </div>
              </div>
            </a>

            {/* Schedule */}
            <div className="bg-gray-900 rounded-2xl p-6 text-white">
              <h4 className="font-semibold mb-4">Horario de atención</h4>
              <div className="space-y-2">
                {horarios.map((h) => (
                  <div key={h.dia} className="flex justify-between text-sm">
                    <span className="text-gray-400">{h.dia}</span>
                    <span className={h.horario === 'Cerrado' ? 'text-red-400' : 'text-white'}>
                      {h.horario}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
