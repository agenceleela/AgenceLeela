'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

// NOTE DEV: liens d'ancrage supprimés (sections correspondantes supprimées).
// Une seule action possible : réserver (tuto landing page).
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 py-2 shadow-lg backdrop-blur-md' : 'bg-transparent py-4'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold"
          >
            <span className="bg-gradient-to-r from-leela-dark-blue to-leela-slate bg-clip-text text-transparent">
              AgenceLeela
            </span>
          </motion.div>

          <motion.a
            href="#formulaire"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden rounded-full bg-leela-dark-blue px-6 py-2 font-semibold text-white transition-colors hover:bg-leela-slate md:block"
          >
            Réserver
          </motion.a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-leela-dark-blue md:hidden"
            aria-label="Ouvrir le menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4 pb-4 md:hidden"
          >
            <a
              href="#formulaire"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-full bg-leela-dark-blue px-6 py-3 text-center font-semibold text-white"
            >
              Réserver
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}