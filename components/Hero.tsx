'use client'

import { motion } from 'framer-motion'
import VisualProof from './VisualProof'

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center bg-leela-white pb-4 pt-24">
      <div className="mx-auto w-full max-w-7xl px-6 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 text-3xl font-bold leading-tight tracking-tight text-leela-dark-blue md:text-6xl"
        >
          On remplit{' '}
          <span className="bg-gradient-to-r from-leela-dark-blue to-leela-slate bg-clip-text text-transparent">
            votre agenda.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mb-5 max-w-4xl text-base leading-relaxed text-leela-slate md:text-xl"
        >
          <span className="block">
            De la création de contenu{' '}
            <span className="text-sm text-leela-slate/60 md:text-lg">(SEO + Réseaux Sociaux)</span>{' '}
            jusqu'à la prise de RDV
          </span>
          <span className="block">pour votre TPE/PME.</span>
        </motion.p>

        {/* Offer Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold text-orange-900 md:text-sm"
        >
          🔥 Offre Rentrée : découvrez en direct, dès le 1er appel, le site web qu'on a déjà construit pour vous.
        </motion.div>

        {/* Cadre vitrine des mockups */}
        {/* NOTE DEV: effets d'ouverture (entrée spring + anneau lumineux + balayage)
            appliqués au cadre uniquement ; les mockups gardent leur stagger interne. */}
        <div className="mx-auto mt-4 w-full max-w-3xl md:mt-6">
          <motion.div
            initial={{
              opacity: 0,
              y: 48,
              scale: 0.94,
              boxShadow: '0 0 0 0 rgba(59, 130, 246, 0.35)',
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              boxShadow: '0 0 0 28px rgba(59, 130, 246, 0)',
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.15,
              boxShadow: { duration: 1.2, delay: 0.45, ease: 'easeOut' },
            }}
            className="relative overflow-hidden rounded-3xl border border-leela-border bg-leela-dark-blue p-3 shadow-2xl md:p-4"
          >
            {/* Halo décoratif */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 h-48 w-3/4 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent"
            />
            {/* Balayage lumineux à l'ouverture (une fois, sur le cadre uniquement) */}
            <motion.div
              aria-hidden="true"
              initial={{ x: '-160%', opacity: 0.8 }}
              animate={{ x: '320%', opacity: 0 }}
              transition={{ duration: 1.6, delay: 0.6, ease: 'easeInOut' }}
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />
            {/* Wrapper à hauteur compensée + scale CSS : assemblage mockups identique */}
            <div className="relative h-[240px] w-full md:h-[300px]">
              <div className="origin-top scale-[0.63] md:scale-[0.71]">
                <VisualProof />
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA sous la preuve */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-5 text-center md:mt-6"
        >
          <motion.a
            href="#formulaire"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center rounded-2xl bg-leela-dark-blue px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-leela-slate hover:shadow-xl md:text-lg"
          >
            👉 Réserver mon appel & voir mon contenu pré-généré
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
          <p className="mt-3 text-sm text-leela-slate">Sans engagement. 15 minutes. 100% gratuit.</p>
        </motion.div>
      </div>
    </section>
  )
}