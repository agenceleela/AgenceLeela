'use client'

import { motion } from 'framer-motion'
import { Search, Video, Calendar, MessageSquare } from 'lucide-react'

const fronts = [
  {
    icon: Search,
    title: 'Front Google',
    subtitle: 'Être trouvé quand on vous cherche',
    features: [
      'Site de conversion qui booke des RDV',
      '30 articles SEO / mois',
      'Refonte Google Business Profile',
      'Module de génération d'avis',
    ],
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Video,
    title: 'Front Réseaux',
    subtitle: 'Être vu quand on ne vous cherche pas',
    features: [
      '30 vidéos verticales / mois',
      'Capture par mot-clé en commentaire',
      'Lead magnet livré sur WhatsApp',
      'Landing page dédiée',
    ],
    color: 'from-purple-500 to-pink-400',
  },
]

const paths = [
  {
    icon: Calendar,
    title: 'Chemin Google',
    description: 'Il cherche → vous trouve → booke un appel ou demande une info sur le site.',
  },
  {
    icon: MessageSquare,
    title: 'Chemin Réseaux',
    description: 'Il regarde → commente un mot-clé → reçoit le lien en DM → landing → WhatsApp → RDV.',
  },
]

export default function BentoGrid() {
  return (
    <section id="fonctionnement" className="py-24 bg-leela-dark-blue">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Le Système Leela
          </h2>
          <p className="text-xl text-leela-slate-light max-w-2xl mx-auto">
            Deux fronts de déploiement. Deux chemins vers le rendez-vous.
          </p>
        </motion.div>

        {/* Fronts de déploiement */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {fronts.map((front, index) => (
            <motion.div
              key={front.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-leela-border rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              {/* Icon with gradient background */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${front.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <front.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl font-bold text-white mb-2">
                {front.title}
              </h3>
              <p className="text-leela-slate-light text-sm mb-6 italic">
                {front.subtitle}
              </p>

              {/* Features list */}
              <ul className="space-y-3">
                {front.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 mr-3 flex-shrink-0" />
                    <span className="text-leela-slate-light">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Decorative glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Chemins vers le RDV */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-10">
            Le rendez-vous, par deux chemins
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {paths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-leela-border rounded-3xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <path.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">
                    {path.title}
                  </h4>
                </div>
                <p className="text-leela-slate-light leading-relaxed">
                  {path.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}