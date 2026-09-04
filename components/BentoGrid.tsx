'use client'

import { motion } from 'framer-motion'
import { Search, Video, Globe, FileText, MessageSquare, Calendar } from 'lucide-react'

const fronts = [
  {
    icon: Search,
    title: 'Front Google',
    subtitle: 'La Capture Intentionnelle',
    features: [
      { icon: Globe, text: 'Site web optimisé pour la conversion (pas juste pour être "joli").' },
      { icon: FileText, text: '30 articles SEO / mois pour dominer votre niche locale.' },
      { icon: Search, text: 'Refonte et optimisation complète de votre Google Business Profile.' },
      { icon: MessageSquare, text: 'Système automatisé de génération d\'avis clients.' },
    ],
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Video,
    title: 'Front Réseaux Sociaux',
    subtitle: 'La Capture d\'Attention',
    features: [
      { icon: Video, text: '30 vidéos verticales (Shorts/Reels/TikTok) / mois, scriptées et montées.' },
      { icon: MessageSquare, text: 'Système de capture par mot-clé en commentaire (DM instantané).' },
      { icon: Calendar, text: 'Guide pratique exclusif livré automatiquement sur WhatsApp.' },
      { icon: Globe, text: 'Landing page dédiée pour transformer les curieux en rendez-vous.' },
    ],
    color: 'from-purple-500 to-pink-400',
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
            Arrêtez d'acheter du "marketing".<br />Installez un Système d'Acquisition.
          </h2>
          <p className="text-xl text-leela-slate-light max-w-3xl mx-auto">
            Nous ne sommes pas une agence classique. Nous sommes votre département marketing externalisé, propulsé par un système propriétaire d'automatisation de pointe. Nous agissons sur deux fronts pour capturer vos clients, qu'ils vous cherchent ou non.
          </p>
        </motion.div>

        {/* Fronts de déploiement */}
        <div className="grid md:grid-cols-2 gap-6">
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
              <ul className="space-y-4">
                {front.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <feature.icon className="w-5 h-5 text-white/60 flex-shrink-0 mt-1" />
                    <span className="text-leela-slate-light">{feature.text}</span>
                  </li>
                ))}
              </ul>

              {/* Decorative glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}