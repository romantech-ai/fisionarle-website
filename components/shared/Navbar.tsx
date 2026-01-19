'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const navItems = [
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Tarifas', href: '#tarifas' },
  { label: 'Contacto', href: '#contacto' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const whatsappUrl = 'https://wa.me/34613005617?text=' + encodeURIComponent('Hola, me gustaría pedir cita en Nexum Fisioterapia')

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-2'
            : 'py-4'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className={`flex items-center justify-between h-16 px-6 transition-all duration-500 ${
            scrolled
              ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 rounded-full'
              : 'bg-transparent'
          }`}>
            {/* Logo */}
            <Link href="/" className="relative z-50 flex items-center gap-3">
              <div className={`rounded-full p-1 transition-all ${
                scrolled ? 'bg-transparent' : 'bg-white shadow-md'
              }`}>
                <Image
                  src="/images/nexum-fisioterapia-logo.png"
                  alt="Nexum Fisioterapia"
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full"
                />
              </div>
              <span className={`text-xl font-bold font-heading transition-colors ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Nexum
              </span>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-white/10 ${
                    scrolled ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+34613005617"
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  scrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/80 hover:text-white'
                }`}
              >
                <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
                613 00 56 17
              </a>
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                  scrolled
                    ? 'bg-accent-600 text-white shadow-lg shadow-accent-500/25 hover:bg-accent-700'
                    : 'bg-white text-gray-900 hover:bg-white/90'
                }`}
              >
                Reservar cita
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative z-50 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={{
                    rotate: mobileOpen ? 45 : 0,
                    y: mobileOpen ? 9 : 0,
                    backgroundColor: mobileOpen ? '#1f2937' : (scrolled ? '#1f2937' : '#ffffff')
                  }}
                  className="w-full h-0.5 origin-left"
                  style={{ backgroundColor: scrolled ? '#1f2937' : '#ffffff' }}
                />
                <motion.span
                  animate={{
                    opacity: mobileOpen ? 0 : 1,
                    backgroundColor: scrolled ? '#1f2937' : '#ffffff'
                  }}
                  className="w-full h-0.5"
                  style={{ backgroundColor: scrolled ? '#1f2937' : '#ffffff' }}
                />
                <motion.span
                  animate={{
                    rotate: mobileOpen ? -45 : 0,
                    y: mobileOpen ? -9 : 0,
                    backgroundColor: mobileOpen ? '#1f2937' : (scrolled ? '#1f2937' : '#ffffff')
                  }}
                  className="w-full h-0.5 origin-left"
                  style={{ backgroundColor: scrolled ? '#1f2937' : '#ffffff' }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Full Screen */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="relative h-full flex flex-col justify-center px-8"
            >
              <nav className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-4 text-3xl font-bold text-gray-900 hover:text-accent-600 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12 space-y-4"
              >
                <a
                  href="tel:+34613005617"
                  className="flex items-center gap-3 text-lg text-gray-600"
                >
                  <span className="w-3 h-3 bg-accent-500 rounded-full animate-pulse" />
                  613 00 56 17
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-accent-600 text-white py-4 rounded-2xl font-semibold text-center text-lg"
                >
                  Reservar cita
                </a>
              </motion.div>

              {/* Decorative element */}
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-sm text-gray-400">
                  Fisioterapia integral en Alcázar de San Juan
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
