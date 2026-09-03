'use client'

import { motion } from 'framer-motion'

// NOTE DEV: Remplacer par ton vrai lien Cal.com
const CAL_COM_LINK = 'https://cal.com/TON-LIEN'

export default function Hero() {
  return (
    <section className="min-h-screen bg-leela-white flex flex-col justify-center pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-leela-dark-blue leading-tight tracking-tight mb-6">
            Votre collaborateur marketing{' '}
            <span className="bg-gradient-to-r from-leela-dark-blue to-leela-slate bg-clip-text text-transparent">
              tout-en-un
            </span>
            .
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-leela-slate mb-10 max-w-3xl leading-relaxed">
            Vous gérez votre métier, nous inondons votre entreprise de prospects qualifiés.
            Domination Google et Réseaux Sociaux automatisée. De la création de contenu à la prise de rendez-vous, sans effort de votre part.
          </p>

          {/* CTA Button */}
          <motion.a
            href={CAL_COM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center bg-leela-dark-blue text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-leela-slate transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Obtenir mon audit gratuit
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6" 
              />
            </svg>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-leela-slate/30 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-leela-slate rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
