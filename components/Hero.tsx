'use client'

import { motion } from 'framer-motion'
import VisualProof from './VisualProof'

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center bg-leela-white pb-12 pt-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Colonne texte */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-leela-dark-blue md:text-5xl">
              On remplit{' '}
              <span className="bg-gradient-to-r from-leela-dark-blue to-leela-slate bg-clip-text text-transparent">
                votre agenda.
              </span>
            </h1>

            <p className="mb-6 text-lg leading-relaxed text-leela-slate md:text-xl">
              <span className="block">
                De la création de contenu{' '}
                <span className="text-base text-leela-slate/60 md:text-lg">(SEO + Réseaux Sociaux)</span>{' '}
                jusqu'à la prise de RDV
              </span>
              <span className="block">pour votre TPE/PME.</span>
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-900"
            >
              🔥 Offre Rentrée : découvrez en direct, dès le 1er appel, le site web qu'on a déjà construit pour vous.
            </motion.div>
          </motion.div>

          {/* Colonne preuve visuelle */}
          <VisualProof />
        </div>

        {/* CTA sous la preuve visuelle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#formulaire"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center rounded-2xl bg-leela-dark-blue px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-leela-slate hover:shadow-xl"
          >
            👉 Réserver mon appel & voir mon contenu pré-généré
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
          <p className="mt-4 text-sm text-leela-slate">Sans engagement. 15 minutes. 100% gratuit.</p>
        </motion.div>
      </div>
    </section>
  )
}