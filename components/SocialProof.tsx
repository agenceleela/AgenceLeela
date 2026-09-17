'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// NOTE DEV: section porte la transition dynamique clair → sombre (scroll-liée),
// car elle est la première section sombre après le Hero.
// Jonctions sans couture : #FFFFFF au départ (= fond Hero),
// #0A0F1C à l'arrivée (= fond des sections suivantes).
// Preuves chiffrées, pas de faux logos/témoignages (risque légal de publicité
// trompeuse). Remplacer par de vrais témoignages dès la 1ère étude de cas validée.
const stats = [
  { value: '30', label: 'articles SEO publiés / mois' },
  { value: '30', label: 'vidéos verticales scriptées / mois' },
  { value: '24h/24', label: 'capture de RDV automatisée' },
]

export default function SocialProof() {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })

  const backgroundColor = useTransform(scrollYProgress, [0, 1], ['#FFFFFF', '#0A0F1C'])
  const titleColor = useTransform(scrollYProgress, [0.2, 0.6], ['#334155', '#94A3B8'])
  const valueColor = useTransform(scrollYProgress, [0.2, 0.6], ['#0A0F1C', '#FFFFFF'])
  const labelColor = useTransform(scrollYProgress, [0.2, 0.6], ['#334155', '#94A3B8'])

  return (
    <motion.section ref={ref} style={{ backgroundColor }} className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ color: titleColor }}
          className="mb-10 text-center text-sm font-medium uppercase tracking-wider"
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
              <motion.p style={{ color: valueColor }} className="text-5xl font-bold">
                {stat.value}
              </motion.p>
              <motion.p style={{ color: labelColor }} className="mt-2">
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ color: labelColor }}
          className="mt-10 text-center text-sm"
        >
          3 places d'études de cas fondatrices ouvertes ce mois-ci.
        </motion.p>
      </div>
    </motion.section>
  )
}