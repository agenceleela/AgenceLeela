'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

// NOTE DEV: Remplacer par ton vrai lien Cal.com
const CAL_COM_LINK = 'https://cal.com/TON-LIEN'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  
  const opacity = useTransform(scrollY, [0, 100], [0, 1])
  const translateY = useTransform(scrollY, [0, 100], [-20, 0])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-leela-dark-blue/95 backdrop-blur-md border-b border-leela-border py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-leela-dark-blue transition-colors duration-300 hover:text-leela-slate">
          Agence Leela
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#fonctionnement" 
            className="text-leela-slate hover:text-leela-dark-blue transition-colors duration-200"
          >
            Fonctionnement
          </a>
          <motion.a
            href={CAL_COM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-leela-dark-blue text-white px-6 py-3 rounded-2xl font-medium hover:bg-leela-slate transition-colors duration-200"
          >
            Réserver un appel
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-leela-dark-blue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-leela-dark-blue/95 backdrop-blur-md border-b border-leela-border"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            <a 
              href="#fonctionnement" 
              className="text-leela-slate-light hover:text-white transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Fonctionnement
            </a>
            <a
              href={CAL_COM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-leela-dark-blue px-6 py-3 rounded-2xl font-medium text-center hover:bg-leela-light-gray transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Réserver un appel
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
