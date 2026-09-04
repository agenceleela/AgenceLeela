'use client'

import { motion } from 'framer-motion'

// NOTE DEV: Remplacer par ton vrai lien Cal.com
const CAL_COM_LINK = 'https://cal.com/TON-LIEN'

export default function FinalCTA() {
  return (
    <section className="py-24 bg-leela-dark-blue">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Ne laissez pas vos concurrents prendre vos prospects.
          </h2>

          <p className="text-xl text-leela-slate-light mb-10 max-w-2xl mx-auto">
            Les 3 places pour l'Offre Pilote Fondateur partent vite. Réservez votre appel maintenant et repartez avec un plan d'action concret, même si vous ne signez pas avec nous.
          </p>

          <motion.a
            href={CAL_COM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-white text-leela-dark-blue px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-leela-light-gray transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            👉 Réserver mon Appel de 15 min & Voir mon Contenu Pré-généré
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

          <p className="mt-6 text-leela-slate-light text-sm">
            Sans engagement. 100% gratuit.
          </p>
        </motion.div>
      </div>
    </section>
  )
}