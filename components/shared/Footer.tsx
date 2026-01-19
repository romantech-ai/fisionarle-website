import Link from 'next/link'
import Image from 'next/image'

const quickLinks = [
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Tarifas', href: '#tarifas' },
  { label: 'Contacto', href: '#contacto' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        {/* Top Section - CTA Banner */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 lg:p-12 mb-16 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-2 font-heading">
                ¿Listo para empezar tu recuperación?
              </h3>
              <p className="text-white/80">
                Reserva tu primera consulta y empieza a sentirte mejor
              </p>
            </div>
            <a
              href="https://wa.me/34613005617?text=Hola,%20me%20gustar%C3%ADa%20pedir%20cita%20en%20Nexum%20Fisioterapia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-accent-700 px-8 py-4 rounded-full font-semibold hover:bg-accent-50 transition-colors whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Reservar cita
            </a>
          </div>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand - Takes more space */}
          <div className="col-span-2 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="bg-white/95 rounded-xl p-1.5">
                <Image
                  src="/images/nexum-fisioterapia-logo.png"
                  alt="Nexum Fisioterapia"
                  width={44}
                  height={44}
                  className="w-11 h-11 object-contain"
                />
              </div>
              <span className="text-2xl font-bold font-heading text-white">
                Nexum Fisioterapia
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Centro de fisioterapia integral en Alcázar de San Juan.
              Especialistas en suelo pélvico, embarazo, fisioterapia manual e invasiva.
            </p>
            {/* Rating badge */}
            <div className="inline-flex items-center gap-3 bg-gray-800 rounded-full px-4 py-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
              <span className="text-sm text-gray-300">5.0 en Google</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Enlaces
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+34613005617" className="flex items-center gap-3 text-gray-300 hover:text-accent-400 transition-colors">
                  <span className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <span>613 00 56 17</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span>
                  Calle Bailén, 22<br />
                  13600 Alcázar de San Juan<br />
                  Ciudad Real
                </span>
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div className="col-span-2 lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Horario
            </h4>
            <div className="bg-gray-800 rounded-2xl p-5 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Lunes</span>
                <span className="text-gray-200">16:00 - 20:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Mar - Vie</span>
                <span className="text-gray-200">9:00 - 14:00 / 16:00 - 20:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Sábado</span>
                <span className="text-gray-200">9:00 - 14:00</span>
              </div>
              <div className="h-px bg-gray-700 my-2" />
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Domingo</span>
                <span className="text-red-400">Cerrado</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-gray-500">
              <span>&copy; {currentYear} Nexum Fisioterapia</span>
              <span className="hidden sm:inline">·</span>
              <span>
                Creado por{' '}
                <a
                  href="https://romantech.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-400 hover:text-accent-300 transition-colors"
                >
                  RomanTech
                </a>
              </span>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacidad" className="text-gray-500 hover:text-gray-300 transition-colors">
                Privacidad
              </Link>
              <Link href="/legal" className="text-gray-500 hover:text-gray-300 transition-colors">
                Aviso legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
