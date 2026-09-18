'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { CalendarCheck, Check, Search, Video } from 'lucide-react'

// NOTE DEV: section porte la transition dynamique clair → sombre (scroll-liée),
// car elle est la première section sombre après le Hero.
// Pattern "1 chiffre, 1 promesse, 2 preuves" : même squelette sur les 3 cartes,
// valeur lisible en 1 seconde (stat géante), preuves alignées en bas (mt-auto).
const cards = [
  {
    icon: Search,
    color: 'from-blue-500 to-cyan-400',
    title: 'Front Google',
    stat: '30',
    unit: 'articles SEO / mois',
    promise: 'Être trouvé quand on vous cherche.',
    proofs: ['Site web optimisé pour la conversion.', 'Niche locale dominée, article après article.'],
  },
  {
    icon: Video,
    color: 'from-purple-500 to-pink-400',
    title: 'Front Réseaux Sociaux',
    stat: '30',
    unit: 'vidéos verticales / mois',
    promise: 'Être vu quand on ne vous cherche pas.',
    proofs: ['Scriptées et montées pour vous.', 'Capture par mot-clé en commentaire.'],
  },
  {
    icon: CalendarCheck,
    color: 'from-green-500 to-emerald-400',
    title: 'Capture de RDV',
    stat: '24h/24',
    unit: 'capture de RDV automatisée',
    promise: 'Votre agenda se remplit pendant que vous travaillez.',
    proofs: ['Prise de RDV automatisée.', 'Lead magnet livré sur WhatsApp.'],
  },
]

export default function SocialProof() {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })

  const backgroundColor = useTransform(scrollYProgress, [0, 0.45], ['#FFFFFF', '#0A0F1C'])
  const titleColor = useTransform(scrollYProgress, [0.1, 0.4], ['#334155', '#94A3B8'])

  return (
    <motion.section ref={ref} style={{ backgroundColor }} className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ color: titleColor }}
          className="mb-10 text-center text-sm font-medium uppercase tracking-wider"
        >
          Ce que le Système Leela déploie pour vous
        </motion.p>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col rounded-3xl border border-leela-border bg-white/5 p-8 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
            >
              {/* Icône du front */}
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${card.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <card.icon className="h-7 w-7 text-white" />
              </div>

              {/* Titre */}
              <h3 className="mb-6 text-2xl font-bold text-white">{card.title}</h3>

              {/* Stat géante + unité */}
              <p className="text-5xl font-bold text-white">{card.stat}</p>
              <p className="mt-1 text-sm text-leela-slate-light">{card.unit}</p>

              {/* Promesse */}
              <p className="mb-6 mt-5 text-leela-slate-light">{card.promise}</p>

              {/* Séparateur + 2 preuves (alignées en bas de carte) */}
              <ul className="mt-auto space-y-3 border-t border-leela-border pt-6">
                {card.proofs.map((proof) => (
                  <li key={proof} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" />
                    <span className="text-sm text-leela-slate-light">{proof}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}