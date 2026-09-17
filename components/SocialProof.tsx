'use client'

import { motion } from 'framer-motion'

// NOTE DEV: bande de preuves chiffrées, pas de faux logos/témoignages (risque légal
// de publicité trompeuse). Remplacer par de vrais témoignages clients dès la
// première étude de cas validée.
const stats = [
  { value: '30', label: 'articles SEO publiés / mois' },
  { value: '30', label: 'vidéos verticales scriptées / mois' },
  { value: '24h/24', label: 'capture de RDV automatisée' },
]

export default function SocialProof() {
  return (
    <section className="border-t border-leela-border bg-leela-dark-blue py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-sm font-medium uppercase tracking-wider text-leela-slate-light"
        >
          Le Système Leela en chiffres
        </motion.p>

        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-5xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-leela-slate-light">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center text-sm text-leela-slate-light"
        >
          3 places d'études de cas fondatrices ouvertes ce mois-ci.
        </motion.p>
      </div>
    </section>
  )
}